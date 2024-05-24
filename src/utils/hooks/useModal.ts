"use client";

import { MouseEvent, useState } from "react";

export function useModal() {
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible((prev) => !prev);
  };

  return { visible, changeVisible };
}
