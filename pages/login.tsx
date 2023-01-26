import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="m-7">
      <p>Login page</p>
      <Link href="/register">Still dont have account... Register her</Link>
    </div>
  );
};

export default Login;
