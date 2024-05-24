import { FC } from "react";
import classes from "./show-password.module.scss";
interface ShowImageProps {
  src: string;
}
export const ShowImage: FC<ShowImageProps> = (props) => {
  const { src } = props;
  return <img className={classes.img} src={src} alt='Показать пароль' />;
};
