"use client";
import { TextField } from "./components/TextField";

import React, { useState } from "react";
import { Button } from "./components/Button";
import { PasswordField } from "./components/PasswordField";
import { submit } from "./api/endpoints/login";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const data = await submit();
    setLoading(false);
  };

  return (
    <main className="flex h-screen">
      <div className="w-0 md:w-1/2 bg-hero bg-no-repeat bg-cover bg-center">
        <div className="bg-blue-500/75 h-full flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Welcome back!</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-full md:px-20 lg:px-36">
          <h1 className="font-bold text-left text-3xl mb-2">Log In</h1>
          <TextField
            label="Email"
            placeholder="Enter your email"
            name="email"
          />
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            name="password"
          />
          <div className="justify-center items-center flex w-full mt-3">
            <Button
              color="bg-blue-500"
              title="Log In"
              size="w-full"
              loading={loading}
            />
          </div>
        </form>
      </div>
    </main>
  );
}
