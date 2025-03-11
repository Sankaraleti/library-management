"use client";
import Authform from "@/components/Authform";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = () => {
  return (
    <Authform
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        fullName: "",
        email: "",
        universityId: 0,
        universityCard: "",
        password: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default SignUp;
