import { useMatch } from "react-router";

const useIsActiveHome = () => {
  const isRoot = useMatch("/");
  const isMeals = useMatch("/meals/:category");
  const isMeal = useMatch("/meal/:id")

  return Boolean(isRoot || isMeals || isMeal);
};

export default useIsActiveHome;
