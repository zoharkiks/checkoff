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
    <div className="text-text-primary padding">
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
          <div className="grid gap-8 mt-10 place-items-center ">
            <h2 className="text-3xl font-medium md:text-4xl">
              Welcome to CheckOff{" "}
            </h2>
            <p>To get started, please sign in</p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    ref={emailRef}
                    className="w-full px-4 py-1 text-black placeholder-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
                    placeholder="name@company.com"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-medium" htmlFor="password">
                    Password
                  </label>

                  <input
                    ref={passwordRef}
                    className="w-full px-4 py-1 text-black placeholder-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-transparent"
                    placeholder="Enter Your Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                {error ? <span>{error}</span> : null}
                <Button>{loading ? "Logging You In" : "Log In"}</Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
