import { $patients, openPagePatients } from "@/features/patient/model";
import { ListPatient } from "@/features/patient/view";
import { EffectorNext } from "@effector/next";
import { allSettled, fork, serialize } from "effector";
import { notFound } from "next/navigation";
import React from "react";

const PatientsPage = async () => {
  const scope = fork();
  await allSettled(openPagePatients, { scope });
  if (!scope.getState($patients)) {
    notFound();
  }

  const values = serialize(scope);
  return (
    <EffectorNext values={values}>
      <div className='center_text'>
        <ul>
          <ListPatient />
        </ul>
      </div>
    </EffectorNext>
  );
};

export default PatientsPage;
