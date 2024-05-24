import { classNames } from "@/utils/helpers/classNames";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export function Input(props: InputProps) {
  const { className, ...otherProps } = props;
  return <input className={classNames(className ?? "")} {...otherProps} />;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export function Button(props: ButtonProps) {
  const { className, children, ...otherProps } = props;
  return (
    <button className={classNames(className ?? "")} {...otherProps}>
      {children}
    </button>
  );
}
