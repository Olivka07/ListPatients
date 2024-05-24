"use client";

import { Button, Input } from "@/shared/ui/base";
import { reflect } from "@effector/reflect";
import {
  $age,
  $first_name,
  $gender,
  $last_name,
  $login,
  $password,
  $passwordVisible,
  $test,
  changeAge,
  changeFirstName,
  changeGender,
  changeLastName,
  changeLogin,
  changePassword,
  changePasswordVisible,
  changeTest,
  resetForm
} from "./model";
import { ChangeEvent, MouseEvent } from "react";
import { GenderEnum, IPatient } from "@/types";
import classes from "./form-patient.module.scss";
import { classNames } from "@/utils/helpers/classNames";
import { addPatient } from "../patient/model";
import { ShowImage } from "../show-image/view";

export function FormPatient() {
  return (
    <>
      <form className={classNames(classes.form__container)}>
        <div>
          <label htmlFor='first_name'>Имя</label>
          <InputFirstName />
        </div>
        <div>
          <label htmlFor='last_name'>Фамилия</label>
          <InputLastName />
        </div>
        <div>
          <label htmlFor='login'>Логин</label>
          <InputLogin />
        </div>
        <div style={{ position: "relative" }}>
          <label htmlFor='password'>Пароль</label>
          <InputPassword />
          <ShowPassword />
        </div>
        <div>
          <label>Пол</label>
          <div className={classNames(classes.form__gender)}>
            <div>
              <label htmlFor='male'>М</label>
              <InputGenderMale />
            </div>
            <div>
              <label htmlFor='female'>Ж</label>
              <InputGenderFemale />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor='age'>Возраст</label>
          <InputAge />
        </div>
        <div className={classNames(classes.btns)}>
          <SubmitButton />
          <ClearButton />
        </div>
      </form>
    </>
  );
}

const fromEventToString = (e: ChangeEvent<HTMLInputElement>) => e.target.value;
const fromEventToNumber = (e: ChangeEvent<HTMLInputElement>) =>
  parseInt(e.target.value);

const InputFirstName = reflect({
  view: Input,
  bind: {
    id: "first_name",
    value: $first_name,
    onChange: changeFirstName.prepend(fromEventToString)
  }
});

const InputLastName = reflect({
  view: Input,
  bind: {
    id: "last_name",
    value: $last_name,
    onChange: changeLastName.prepend(fromEventToString)
  }
});

const InputPassword = reflect({
  view: Input,
  bind: {
    type: $passwordVisible.map((visible) => (visible ? "text" : "password")),
    id: "password",
    value: $password,
    onChange: changePassword.prepend(fromEventToString)
  }
});

const InputLogin = reflect({
  view: Input,
  bind: {
    id: "login",
    value: $login,
    onChange: changeLogin.prepend(fromEventToString)
  }
});

const InputGenderMale = reflect({
  view: Input,
  bind: {
    id: "male",
    name: "gender",
    type: "radio",
    value: GenderEnum.MALE,
    checked: $gender.map((gender) => gender === GenderEnum.MALE),
    onChange: () => changeGender(GenderEnum.MALE)
  }
});

const InputGenderFemale = reflect({
  view: Input,
  bind: {
    id: "female",
    name: "gender",
    type: "radio",
    value: GenderEnum.FEMALE,
    checked: $gender.map((gender) => gender === GenderEnum.FEMALE),
    onChange: () => changeGender(GenderEnum.FEMALE)
  }
});

const InputAge = reflect({
  view: Input,
  bind: {
    id: "age",
    value: $age,
    type: "number",
    onChange: changeAge.prepend(fromEventToNumber)
  }
});

const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  const candidate: IPatient = {
    age: $age.getState(),
    first_name: $first_name.getState(),
    last_name: $last_name.getState(),
    gender: $gender.getState() ?? GenderEnum.FEMALE,
    login: $login.getState(),
    password: $password.getState()
  };

  addPatient(candidate);

  resetForm();

  alert("Новый пациент добавлен");
};

const SubmitButton = reflect({
  view: Button,
  bind: {
    onClick: submitHandler,
    children: "Добавить",
    className: classNames(classes.form__submit)
  }
});

const clearHandler = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  resetForm();
};

const ClearButton = reflect({
  view: Button,
  bind: {
    onClick: clearHandler,
    children: "Очистить",
    className: classNames(classes.form__clear)
  }
});

const showHandler = (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  changePasswordVisible();
};

const ShowPassword = reflect({
  view: Button,
  bind: {
    onClick: showHandler,
    className: classNames(classes.btn__for_password),
    children: $passwordVisible.map((passwordVisible) => {
      return (
        <ShowImage
          key={"image_show"}
          src={passwordVisible ? "/close_password.svg" : "/open_password.svg"}
        />
      );
    })
  }
});
