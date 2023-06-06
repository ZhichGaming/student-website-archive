"use client";

import type { MutableRefObject } from "react";
import { UseSocket } from "../Socket";
import { useEffect, useRef } from "react";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
      <div className="relative">
        <input autoComplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" ref={usernameRef} />
        <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Username
        </label>
      </div>
      <div className="relative">
        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" ref={passwordRef} />
        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
          Password
        </label>
      </div>
      <LoginButton refs={[usernameRef, passwordRef]} />
    </div>
  );
}

function LoginButton({ refs }: Props) {
  const [usernameRef, passwordRef] = refs;
  const socket = UseSocket();

  useEffect(() => {
    console.log(socket);
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(usernameRef, passwordRef);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white rounded-md px-2 py-1"
        onClick={(e) => {
          handleSubmit(e);
        }}>
        Submit
      </button>
    </div>
  );
}

type Props = {
  refs: MutableRefObject<null>[];
};
