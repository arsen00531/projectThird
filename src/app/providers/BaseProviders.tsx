import { StrictMode, type FC, type ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { store } from "../store/AppStore";

interface IBaseProviders {
  children: ReactNode;
}
const BaseProviders: FC<IBaseProviders> = ({ children }) => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

export default BaseProviders;
