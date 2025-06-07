import type { FC, ReactNode } from "react";
import type { TFetchStatus } from "../types/TFetchStatus";
import Error from "./Error";
import Loader from "./Loader";

interface IAsyncStateHandler {
  asyncState: TFetchStatus;
  children: ReactNode;
  errMeassage : string
}
export const AsyncStateHandler: FC<IAsyncStateHandler> = ({
  asyncState,
  children,
  errMeassage
}) => {
  switch (asyncState) { 
    case "pending":
      return <Loader />;

    case "rejected":
      return (<Error message={errMeassage} />);

    case "fullfiled":
      return children;

    case "idle" : {
        return <Loader />
    }
    default:
      return null; 
  }
};
