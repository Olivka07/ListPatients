import { GenderEnum } from "@/types";
import { createEvent, createStore, sample } from "effector";

export const changeFirstName = createEvent<string>(
  "Event for change input first_name"
);
export const $first_name = createStore("");

sample({
  clock: changeFirstName,
  target: $first_name
});

export const changeLastName = createEvent<string>(
  "Event for change input last_name"
);
export const $last_name = createStore("");

sample({
  clock: changeLastName,
  target: $last_name
});

export const changePassword = createEvent<string>(
  "Event for change input password"
);
export const $password = createStore("");

sample({
  clock: changePassword,
  target: $password
});

export const changeLogin = createEvent<string>("Event for change input login");
export const $login = createStore("");

sample({
  clock: changeLogin,
  target: $login
});

export const changeGender = createEvent<GenderEnum>(
  "Event for change input gender"
);
export const $gender = createStore<null | GenderEnum>(null);

sample({
  clock: changeGender,
  fn: (clck) => {
    console.log(clck);
    return clck;
  },
  target: $gender
});

export const changeAge = createEvent<number>("Event for change input age");
export const $age = createStore<number>(18);

sample({
  clock: changeAge,
  target: $age
});

export const resetForm = createEvent("Event reset fileds");

sample({
  clock: resetForm,
  fn: () => "",
  target: [$first_name, $last_name, $age, $password, $login]
});

sample({
  clock: resetForm,
  fn: () => null,
  target: $gender
});
export const changePasswordVisible = createEvent("Change password visible");
export const $passwordVisible = createStore(false).on(
  changePasswordVisible,
  (state) => !state
);

export const $test = createStore<string>("t");

export const changeTest = createEvent();

sample({
  clock: changeTest,
  fn: () => {
    console.log("ХАЛОУ");
    return "ПРИВ";
  },
  target: $test
});
