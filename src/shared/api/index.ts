import { createJsonQuery, declareParams } from "@farfetched/core";
import { runtypeContract } from "@farfetched/runtypes";
import { createStore } from "effector";
import * as t from "runtypes";

const $base_api = createStore("http://localhost:3000/api");

const GenderContract = t.Union(t.Literal("Ж"), t.Literal("М"));

const PatientsContract = t.Record({
  first_name: t.String,
  last_name: t.String,
  gender: GenderContract,
  age: t.Number,
  password: t.String,
  login: t.String
});

export const getPatientsQuery = createJsonQuery({
  name: "For getting patients",
  params: declareParams<{ page: number } | void>(),
  request: {
    method: "GET",
    url: `${$base_api.getState()}/patients`
  },
  response: {
    contract: runtypeContract(t.Record({ patients: t.Array(PatientsContract) }))
  }
});
