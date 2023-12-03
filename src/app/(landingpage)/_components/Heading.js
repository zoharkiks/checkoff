import { Button } from "@/components/Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Heading = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-3xl space-y-4 text-center text-text-primary">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Craft Your Tasks, Amplify Collaboration, Achieve Mastery.
      </h1>

      <h3 className="font-medium md:text-2xl sm:text-xl ">
        CheckOff Is Where Efficiency Meets Effectiveness
      </h3>

      {status === "loading" && <span>Loading</span>}

      {status === "unauthenticated" && (
        <>
          <Button>
            <Link href="/create-account">Get Started</Link>
          </Button>
        </>
      )}

      {status === "authenticated" && (
        <>
          <Button>
            <Link href={`dashboard/${session?.user?.id}`}>Enter CheckOff</Link>
          </Button>
        </>
      )}

      <div className="flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[350px] md:h-[350px] ">
          <Image
            src="/documents.png"
            alt="Documents"
            fill
            className="object-contain dark:hidden"
          />

<Image
            src="/documents-dark.png"
            alt="Documents-dark"
            fill
            className="hidden object-contain dark:block"
          />
        </div>

        <div className="relative h-[350px] w-[350px] hidden md:block">
          <Image
            src="/reading.png"
            alt="reading"
            fill
            className="object-contain dark:hidden"
          />

<Image
            src="/reading-dark.png"
            alt="reading"
            fill
            className="hidden object-contain dark:block"
          />

          
        </div>
      </div>
    </div>
  );
};

export default Heading;
