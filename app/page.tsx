import { FormPatient } from "@/features/form-patient";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Страница, содержащая строку поиска для ввода ИНН организации, информацию о которой необходимо найти.",
  title: "Главная",
  applicationName: "WebApp Info For INN"
};

export default function Page() {
  return (
    <>
      <div className='center_text'>
        <FormPatient />
      </div>
    </>
  );
}
