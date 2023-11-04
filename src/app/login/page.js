import Link from "next/link";
import React from "react";
import { Button } from "../components/Button";

const Login = () => {
  return (
    <div className="padding">
      <div className="flex">
        <Link href="/">
          <span class="font-bold">CheckOff</span>
        </Link>
      </div>
      <div className="grid gap-8 place-items-center ">
        <h1 className="">Welcome to CheckOff </h1>
        <p>To get started, please sign in</p>

        <form action="">
          <label htmlFor="email">Email</label>
          <div className="flex flex-col space-y-4">
            <input
              className="border"
              placeholder="name@company.com"
              type="email"
              name="email"
              id=""
              required
            />
            <Button>SignUp</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
