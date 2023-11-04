"use client";

import React, { useRef, useState } from "react";
import { Button } from "../components/Button";
import Link from "next/link";

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    setLoading(true);

    try {
      // Check existing user
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user, message } = await resUserExists.json();

      if (user) {
        setLoading(false);
        setError(message);
        formRef.current.reset();
        return;
      }

      // Register New User
      const resRegister = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (resRegister.status === 200) {
        formRef.current.reset();
        setError("");
        setLoading(false);
      } else {
        // Handle registration error
        setLoading(false);
      }
    } catch (error) {
      setError("");

      setLoading(false);
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

        <form
          ref={formRef}
          className="grid gap-4 mt-10"
          onSubmit={handleSubmit}
        >
          <input
            ref={emailRef}
            className="border"
            placeholder="name@company.com"
            type="email"
            name=""
            required
          />

          <input
            ref={passwordRef}
            className="border"
            placeholder="Enter Your Password"
            type="password"
            name=""
            required
          />

          <span>{error}</span>
          <Button>{loading ? "Loading" : "Sign Up"}</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
