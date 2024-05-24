import { Header } from "@/shared/ui/Header/Header";
import "./styles/index.scss";
import { EffectorNext } from "@effector/next";
import { ReduxDevToolsAdapter } from "@/shared/ui/redux-dev-tools-provider";
import { classNames } from "@/utils/helpers/classNames";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='author'
          content='Alexander Pirushov: uchenik.ikt@yandex.ru'
        />
      </head>
      <body className={classNames("app")}>
        <ReduxDevToolsAdapter />
        <EffectorNext>
          <Header />
          <main>{children}</main>
        </EffectorNext>
      </body>
    </html>
  );
}
