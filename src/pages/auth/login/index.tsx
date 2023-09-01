import React, { FC, useState } from "react";
import { ILoginProps } from "./login.types";
import { BaseInput, Button, Socials } from "components";
import "./login.styles.scss";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../sign-up";
import Location from "pages/location";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "routes/index.routes";
import { useForm } from "react-hook-form";
import useLocalStorage from "hooks/use-local-storage";

type LoginData = {
  email: string
  password: string
}

const defaultLoginData: LoginData = {
  email: '',
  password: ''
}

const Login: FC<ILoginProps> = (props) => {
  // const [loginFormData, setLoginFormData] =
  //   useState<LoginData>(defaultLoginData);

  // const { email, password } = loginFormData;

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const location = useLocation();

  const signUpEmail = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (loginData: any) => {
    try {
      setIsLoading(true);

      const res = await axios.post(` ${baseUrl}/api/v1/users/login`, loginData);
      const token = res.data?.data?.token;
      const user = res.data?.data?.userDetails;

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        enqueueSnackbar({
          message: res?.data?.message,
          variant: "success",
          preventDuplicate: true,
          autoHideDuration: 2000,
        });
        setOpenModal(true);
        // navigate(pageRoutes.registration);
      }
    } catch (error: any) {
      enqueueSnackbar({
        message: error.response.data.error,
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   setLoginFormData((prevData) => {
  //     if (signUpEmail) {
  //       return {
  //         ...prevData,
  //         email: signUpEmail,
  //         [id]: value,
  //       };
  //     }
  //     return {
  //       ...prevData,
  //       [id]: value,
  //     };
  //   });
  // };

  return (
    <div className="flex__login-container">
      <div className="sign-in app-container">
        <div className="sign-in__content app-container__section">
          <h3 className="sign-in__content__heading">Sign In</h3>
          <Socials />
          <div className="sign-in__content__or">
            <p>or</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="sign-in__form">
            <div className="sign-in__form__input">
              <BaseInput
                id="email"
                placeholder="Anuoluwapo Adedeji"
                type="email"
                label="Email"
                {...register("email", {
                  required: "Email is required.",
                  // pattern: {
                  //   value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  //   message: "Email is not valid.",
                  // },
                })}
              />
              <p>{errors?.email?.message}</p>

              <BaseInput
                id="password"
                placeholder="************"
                type="password"
                label="Password"
                {...register("password", {
                  required: "Password is required.",
                })}
              />
              <p>{errors?.password?.message}</p>
            </div>
            <a href="">
              <p className="sign-in__form__password">Forgot password?</p>
            </a>
            <Button
              variant="primary"
              children="Sign In"
              disabled={isLoading}
              className={`sign-up__button ${
                isLoading ? "disabled__state" : ""
              }`}
              loader={isLoading}
            />
          </form>
        </div>

        <div className="sign-in__account">
          <p className="account">Already have an account? </p>
          <Link to="/auth/sign-up" className="account-signin">
            Sign Up
          </Link>
        </div>
      </div>

      {openModal ? <Location /> : ""}
    </div>
  );
};

export default Login
