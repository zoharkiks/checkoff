"use client";

import React, { useRef } from "react";
import { Button } from "../components/Button";
import Link from "next/link";

const CreateAccount = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        console.log("User created successfully");
      } else {
        // Handle registration error
        console.error("User registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="padding">
      <div className="flex">
        <Link href="/">
          <span className="font-bold">CheckOff</span>
        </Link>
      </div>
      <div className="grid place-items-center ">
        <h1 className="">You are in for a ride </h1>

        <form className="grid gap-4 mt-10" onSubmit={handleSubmit}>
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

          <Button>SignUp</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
