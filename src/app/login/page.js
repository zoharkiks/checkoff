"use client"

import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "../components/Button";

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  
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
              ref={emailRef}
              className="border"
              placeholder="name@company.com"
              type="email"
              name=""
              id=""
              required
            />

<input
            ref={passwordRef}
            className="border"
            placeholder="Enter Your Password"
            type="password"
            name=""
            id=""
            required
          />
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
