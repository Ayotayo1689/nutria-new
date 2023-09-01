import React, { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { authRoutes, pageRoutes } from "./routes/index.routes";
import SignUp from "./pages/auth/sign-up";
import Login from "./pages/auth/login";
import OnboardingPage from "pages/onboarding-page";
import Registration from "pages/registration/Index";
import BreakfastOption from "pages/homeoption/BreakfastOption";
import LunchOption from "pages/homeoption/LunchOption";
import DinnerOption from "pages/homeoption/DinnerOption";
import SnacksOption from "pages/homeoption/SnacksOption";
import Recipe from "pages/recipe";
import MealDetail from "pages/meal-detail";
import PrivateRoutes from "utils/PrivateRoute";

const App: FC = () => {
  return (
    <Routes>
      <Route path={pageRoutes.home} element={<Home />} />
      <Route path={pageRoutes.registration} element={<Registration />} />
      <Route path={pageRoutes.onboarding} element={<OnboardingPage />} />
      <Route path={authRoutes.signUp} element={<SignUp />} />
      <Route path={authRoutes.login} element={<Login />} />
      <Route path={pageRoutes.breakfastOption} element={<BreakfastOption />} />
      <Route path={pageRoutes.lunchOption} element={<LunchOption />} />
      <Route path={pageRoutes.dinnerOption} element={<DinnerOption />} />
      <Route path={pageRoutes.snacksOption} element={<SnacksOption />} />
      <Route path={authRoutes.signUp} element={<SignUp />} />
      <Route path={authRoutes.login} element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route index path={pageRoutes.home} element={<Home />} />
        <Route path={pageRoutes.onboarding} element={<OnboardingPage />} />
        <Route path={pageRoutes.registration} element={<Registration />} />
        <Route path={pageRoutes.recipe} element={<Recipe />} />
        <Route path={pageRoutes.mealDetail} element={<MealDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
