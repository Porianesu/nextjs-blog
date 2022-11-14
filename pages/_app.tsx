import React, { PropsWithChildren } from "react";
import "../styles/global.css";

interface IAppProps {
  Component: any;
  pageProps: any;
}
const App: React.FC<PropsWithChildren<IAppProps>> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};
export default App;
