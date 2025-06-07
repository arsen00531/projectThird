import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import AllCategorys from "../pages/AllCategorys/ui/AllCategorys";
import { lazy, Suspense } from "react";
import Loader from "../shared/ui/Loader";

const NotFounded = lazy(() => import("../pages/NotFounded/NotFounded"));
const MealsByCategory = lazy(
  () => import("../pages/MealsByCategory/ui/MealsByCategory")
);
const Meal = lazy(() => import("../pages/Meal/ui/Meal"));
const About = lazy(() => import("../pages/About/ui/About"));

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <AllCategorys />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFounded />
            </Suspense>
          }
        />
        <Route
          path="/meals/:category"
          element={
            <Suspense fallback={<Loader />}>
              <MealsByCategory />
            </Suspense>
          }
        />
        <Route
          path="/meal/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Meal />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
