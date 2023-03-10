import { Field, Formik, Form } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import rabbit from "../public/rabbit.png";
import * as yup from "yup";

interface LoginForm {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();
  const login: LoginForm = {
    username: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    password: yup
      .string()
      .min(8, "Password must contain minimum of 8 characters")
      .required("You need to enter password!"),
  });

  return (
    <div className="flex fixed top-0 left-0 bg-white w-full h-[100vh] tablet:top-auto">
      <div className="w-[30%] h-[100vh] bg-blue-500 shadow-xl flex flex-col justify-between items-center tablet:hidden">
        <div className="fixed top-20 flex font-extrabold text-5xl text-white flex-wrap justify-center">
          <Image src={rabbit} alt="logo" className="w-16 h-16" />
          <p className="ml-2 mt-4">CoinBunny</p>
        </div>
        <div className="text-md font-bold text-black fixed bottom-20">
          ©CoinBunnydoo
        </div>
      </div>
      <div className="flex flex-col w-[70%] m-20 desktop:ml-52 tablet:mx-4 tablet:items-center tablet:w-full">
        <div className="flex w-[25%] tablet:w-full tablet:justify-center">
          <p className="font-extrabold text-6xl">Login</p>
        </div>
        <Formik
          initialValues={login}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
            localStorage.setItem("username", values.username);
            router.push("/");
          }}
        >
          {({ values, errors, touched }) => {
            return (
              <Form className="my-10 w-[400px] phone:w-[300px]">
                <div className="mb-10 flex flex-col">
                  <label>Username:</label>
                  <Field
                    className="border-b-2 border-black p-2 text-lg focus:outline-none"
                    type="text"
                    name="username"
                  />
                  {errors.username && touched.username && (
                    <label className="text-sm text-red-500 font-bold">
                      {errors.username}
                    </label>
                  )}
                </div>
                <div className="flex flex-col mb-10">
                  <label>Password: </label>
                  <Field
                    className="border-b-2 border-black p-2 text-lg focus:outline-none"
                    type="password"
                    name="password"
                  />
                  {errors.password && touched.password && (
                    <label className="text-sm text-red-500 font-bold">
                      {errors.password}
                    </label>
                  )}
                </div>
                <button
                  type="submit"
                  className="text-white cursor-pointer font-bold w-[200px] rounded-xl text-2xl bg-blue-500 py-3 active:bg-blue-300 shadow-lg"
                >
                  Login
                </button>
              </Form>
            );
          }}
        </Formik>
        <Link
          href="/register"
          className="text-sm font-bold text-blue-500 underline cursor-pointer"
        >
          Still dont have account... Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
