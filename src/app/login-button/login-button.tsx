"use client";

import { FC } from "react";
import Link from "next/link";
import {  signIn } from "next-auth/react";


export const LoginButton: FC = () => {

  return (
    <div>
        <button onClick={() => signIn()}>Login</button>
    </div>
  );
};
