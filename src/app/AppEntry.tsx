import BaseProviders from "./providers/BaseProviders";
import "./styles/index.css";
import AppRouter from "./AppRouter";

const AppEntry = () => {
    return (
        <BaseProviders>
           <AppRouter />
        </BaseProviders>
    );
};

export default AppEntry;