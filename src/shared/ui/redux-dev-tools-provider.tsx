"use client";
import { getClientScope } from "@effector/next";
import { attachReduxDevTools } from "@effector/redux-devtools-adapter";
import { ReactNode } from "react";

const clientScope = getClientScope();

if (clientScope) {
  attachReduxDevTools({
    name: "playground-app-app-router",
    scope: clientScope,
    trace: true
  });
}

export function ReduxDevToolsAdapter({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}
