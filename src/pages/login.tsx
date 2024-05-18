// pages/login.tsx

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    
    console.log("Login data:", data);
    router.push("/"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg px-8 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email"
                }
              })}
              className="input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              id="password"
              {...register("password", {
                required: "Password is required"
              })}
              className="input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="btn w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
