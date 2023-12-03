"use client";

import React, { useRef, useState } from "react";
import { Button } from "../../../components/Button";
import Link from "next/link";
import { useUserStore } from "../../store";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Accessing Zustand State
  const [id, setId] = useUserStore((state) => [state.id, state.setId]);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const formRef = useRef();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

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
        body: JSON.stringify({ email, password, name }),
      });

      if (resRegister.status === 200) {
        await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
        });
        
        
        const session = await getSession();
        const userId = session?.user?.id;
        
        setError("");
        router.replace(`dashboard/${userId}`);
        formRef.current.reset();
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
            ref={nameRef}
            className="capitalize border"
            placeholder="Your Full Name"
            type="text"
            name=""
            required
          />

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
