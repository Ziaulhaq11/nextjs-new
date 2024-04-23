"use client";
//NOT USED
import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

//NOT REQUIRED
export default AuthProvider; //This shuold be used in Layout.jsx as Layout.jsx is a ServerSide and SessionProvider works only in Client side
