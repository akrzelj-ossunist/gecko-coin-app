import { Field, Formik, Form } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import rabbit from "../public/rabbit.png";
import * as yup from "yup";

interface RegisterForm {
  username: string;
  password: string;
  repeatPassword: string;
  email: string;
  repeatEmail: string;
  member: boolean;
  iban: string;
  cardNumber: number | null;
  expirationDate: Date | string;
  cvv: number | null;
}

const Register: React.FC = () => {
  const router = useRouter();
  const register: RegisterForm = {
    username: "",
    password: "",
    repeatPassword: "",
    email: "",
    repeatEmail: "",
    member: false,
    iban: "",
    cardNumber: null,
    expirationDate: "",
    cvv: null,
  };

  const registerSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    password: yup
      .string()
      .min(8, "Password must contain minimum of 8 characters")
      .required("You need to enter password!"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
    email: yup
      .string()
      .email("Invalid email")
      .required("You must input email!"),
    repeatEmail: yup
      .string()
      .oneOf([yup.ref("email"), null], "Email must match!"),
    member: yup.boolean(),
    iban: yup.string().when("member", {
      is: (member: boolean) => member,
      then: yup
        .string()
        .min(21, "Must be exatcly 21 charactes!")
        .max(21, "Must be exatcly 21 charactes!")
        .required("You need to fill this box"),
    }),
    cardNumber: yup.number().when("member", {
      is: (member: boolean) => member,
      then: yup
        .number()
        .min(1000000000000000, "Must be exatcly 16 charactes!")
        .max(9999999999999999, "Must be exatcly 16 charactes!")
        .required("You need to fill this box"),
    }),
    expirationDate: yup.date().when("member", {
      is: (member: boolean) => member,
      then: yup.date().required("You need to fill this box"),
    }),
    cvv: yup.number().when("member", {
      is: (member: boolean) => member,
      then: yup
        .number()
        .min(100, "Must be exatcly 3 charactes!")
        .max(999, "Must be exatcly 3 charactes!")
        .required("You need to fill this box"),
    }),
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
      <div className="flex flex-col w-[70%] m-20 ml-52 overflow-y-auto overflow-x-hidden tablet:w-full tablet:mx-10 tablet:items-center">
        <div className="flex w-[25%] tablet:w-full">
          <p className="font-extrabold text-6xl tablet:text-4xl">Register</p>
        </div>
        <Formik
          initialValues={register}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            actions.setSubmitting(false);
            router.push("/login");
          }}
        >
          {({ values, errors, touched }) => {
            return (
              <Form className="my-10 w-[400px] tablet:w-full ">
                <div className="mb-10 flex flex-col w-full">
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
                <div className="flex tablet:flex-col w-full">
                  <div className="flex flex-col mb-10 desktop:mr-10">
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
                  <div className="flex flex-col mb-10">
                    <label>Repeat password: </label>
                    <Field
                      className="border-b-2 border-black p-2 text-lg focus:outline-none"
                      type="password"
                      name="repeatPassword"
                    />
                    {errors.repeatPassword && touched.repeatPassword && (
                      <label className="text-sm text-red-500 font-bold">
                        {errors.repeatPassword}
                      </label>
                    )}
                  </div>
                </div>
                <div className="flex tablet:flex-col">
                  <div className="flex flex-col mb-10 desktop:mr-10">
                    <label>Email: </label>
                    <Field
                      className="border-b-2 border-black p-2 text-lg focus:outline-none"
                      type="email"
                      name="email"
                    />
                    {errors.email && touched.email && (
                      <label className="text-sm text-red-500 font-bold">
                        {errors.email}
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col mb-10">
                    <label>Repeat email: </label>
                    <Field
                      className="border-b-2 border-black p-2 text-lg focus:outline-none"
                      type="email"
                      name="repeatEmail"
                    />
                    {errors.repeatEmail && touched.repeatEmail && (
                      <label className="text-sm text-red-500 font-bold">
                        {errors.repeatEmail}
                      </label>
                    )}
                  </div>
                </div>
                <div className="mb-10">
                  <label>Become member: </label>
                  <Field type="checkbox" name="member"></Field>
                </div>
                {values.member && (
                  <>
                    <div className="flex tablet:flex-col">
                      <div className="flex flex-col mb-10 desktop:mr-10">
                        <label>IBAN: </label>
                        <Field
                          className="border-b-2 border-black p-2 text-lg focus:outline-none"
                          type="text"
                          name="iban"
                        />
                        {errors.iban && touched.iban && (
                          <label className="text-sm text-red-500 font-bold">
                            {errors.iban}
                          </label>
                        )}
                      </div>
                      <div className="flex flex-col mb-10">
                        <label>Card number: </label>
                        <Field
                          className="border-b-2 border-black p-2 text-lg focus:outline-none"
                          type="text"
                          name="cardNumber"
                        />
                        {errors.cardNumber && touched.cardNumber && (
                          <label className="text-sm text-red-500 font-bold">
                            {errors.cardNumber}
                          </label>
                        )}
                      </div>
                    </div>
                    <div className="flex tablet:flex-col">
                      <div className="flex flex-col mb-10 desktop:mr-10">
                        <label>Expiration Date: </label>
                        <Field
                          className="border-b-2 border-black p-2 text-lg focus:outline-none"
                          type="date"
                          name="expirationDate"
                        />
                        {errors.expirationDate && touched.expirationDate && (
                          <label className="text-sm text-red-500 font-bold">
                            {errors.expirationDate}
                          </label>
                        )}
                      </div>
                      <div className="flex flex-col mb-10">
                        <label>CVV: </label>
                        <Field
                          className="border-b-2 border-black p-2 text-lg focus:outline-none"
                          type="text"
                          name="cvv"
                        />
                        {errors.cvv && touched.cvv && (
                          <label className="text-sm text-red-500 font-bold">
                            {errors.cvv}
                          </label>
                        )}
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="text-white cursor-pointer font-bold w-[70%] rounded-xl text-2xl bg-blue-500 py-3 active:bg-blue-300 shadow-lg"
                >
                  Register
                </button>
              </Form>
            );
          }}
        </Formik>
        <Link
          href="/login"
          className="text-sm font-bold text-blue-500 underline cursor-pointer"
        >
          Already have account... Login here
        </Link>
      </div>
    </div>
  );
};

export default Register;
