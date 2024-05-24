export enum GenderEnum {
  FEMALE = "Ж",
  MALE = "М"
}

export interface IPatient {
  first_name: string;
  last_name: string;
  login: string;
  password: string;
  age: number;
  gender: GenderEnum;
}
