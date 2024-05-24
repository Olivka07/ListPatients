import { getPatientsQuery } from "@/shared/api";
import { IPatient } from "@/types";
import { createEvent, createStore, sample } from "effector";

export const openPagePatients = createEvent("Open Page With Patients");

export const addPatient = createEvent<IPatient>();

export const $patients = createStore<IPatient[]>([])
  .on(getPatientsQuery.finished.success, (_, { result }) => {
    return result.patients as IPatient[];
  })
  .on(getPatientsQuery.finished.failure, (_, payload) => {
    console.log(payload);
  });

sample({
  clock: addPatient,
  source: $patients,
  fn: (patients, patient) => [...patients, patient],
  target: $patients
});

sample({
  clock: openPagePatients,
  target: getPatientsQuery.refresh
});
