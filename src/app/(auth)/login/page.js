"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../components/Button";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useUserStore } from "../../store";



const Login = () => {
  // Zustand State
  const [id, setId] = useUserStore((state) => [state.id, state.setId]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const { data: session, status } = useSession();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const userSession = await getSession();
        if (userSession) {
          router.replace(`/dashboard/${session?.user?.id}`);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    if (status === "authenticated" && session) {
      checkSession();
    }
  }, [status, session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    setLoading(true);
    try {
      setError("");
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      const session = await getSession();
      const userId = session?.user?.id;

      if (res.error) {
        setError("Invalid Credentials");
        formRef?.current.reset();
        setLoading(false);

        return;
      }
      setError("");
      router.replace(`dashboard/${userId}`);
    } catch (error) {
      setError("");
      formRef?.current.reset();
      setLoading(false);
    }
  };

  return (
    <div className="padding">
      {status === "authenticated" && session ? (
        <>
          <span>Redirecting</span>
        </>
      ) : (
        <>
          <div className="flex">
            <Link href="/">
              <span className="font-bold logo">CheckOff</span>
            </Link>
          </div>
          <div className="grid gap-8 place-items-center ">
            <h1 className="">Welcome to CheckOff </h1>
            <p>To get started, please sign in</p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <div className="flex flex-col space-y-4">
                <input
                  ref={emailRef}
                  className="border"
                  placeholder="name@company.com"
                  type="email"
                  name=""
                  id="email"
                  required
                />

                <input
                  ref={passwordRef}
                  className="border"
                  placeholder="Enter Your Password"
                  type="password"
                  name=""
                  id="password"
                  required
                />
                {error ? <span>{error}</span> : null}
                <Button>{loading ? "Loading" : "Log In"}</Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
