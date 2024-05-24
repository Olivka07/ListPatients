"use client";

import { GenderEnum, IPatient } from "@/types";
import { list } from "@effector/reflect";
import { $patients } from "./model";
import { classNames } from "@/utils/helpers/classNames";
import classes from "./patient.module.scss";

function PatientItem(patient: IPatient) {
  return (
    <li className={classNames(classes.patient__container)}>
      <p className={classNames(classes.name)}>
        {patient.first_name} {patient.last_name}
      </p>
      <p>{`Возраст: ${patient.age}`}</p>
      <p>{`Пол: ${patient.gender === GenderEnum.MALE ? "Мужчина" : "Женщина"}`}</p>
    </li>
  );
}

export const ListPatient = list({
  view: PatientItem,
  source: $patients
});
