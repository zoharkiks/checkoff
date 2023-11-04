import React from "react";
import { Button } from "../components/Button";

const CreateAccount = () => {
  return (
    <div className="padding">
      <div className="flex">
        <span class="font-bold">CheckOff</span>
      </div>
      <div className="grid place-items-center ">
        <h1 className="">You are in for a ride </h1>

        <form className="flex" action="">
          <input
            className="border"
            placeholder="name@company.com"
            type="email"
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
