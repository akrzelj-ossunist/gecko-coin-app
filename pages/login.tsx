import { Field, Formik, Form } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import rabbit from "../public/rabbit.png";
import * as yup from "yup";
import axios from "axios";

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

  const postUserData = async (values: LoginForm) => {
    try {
      const resp = await axios.post("/api/login", values);
      console.log(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex fixed top-0 left-0 bg-white w-full h-[100vh]">
      <div className="w-[30%] h-[100vh] bg-blue-500 shadow-xl flex flex-col justify-between items-center">
        <div className="fixed top-20 flex font-extrabold text-5xl text-white">
          <Image src={rabbit} alt="logo" className="w-16 h-16" />
          <p className="ml-2 mt-4">CoinBunny</p>
        </div>
        <div className="text-md font-bold text-black fixed bottom-20">
          ©CoinBunnydoo
        </div>
      </div>
      <div className="flex flex-col w-[70%] m-20 ml-52">
        <div className="flex w-[25%]">
          <p className="font-extrabold text-6xl">Login</p>
        </div>
        <Formik
          initialValues={login}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            postUserData(values);
            console.log({ values, actions });
            actions.setSubmitting(false);
            localStorage.setItem("username", values.username);
            router.push("/");
          }}
        >
          {({ values, errors, touched }) => {
            console.log(values);
            return (
              <Form className="my-10 w-[40%]">
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
                  className="text-white cursor-pointer font-bold w-[70%] rounded-xl text-2xl bg-blue-500 py-3 active:bg-blue-300 shadow-lg"
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
