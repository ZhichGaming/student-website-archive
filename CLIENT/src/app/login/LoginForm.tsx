"use client";

import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useUser } from "../useUser";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const errorRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (failed) {
      errorRef?.current?.classList.remove("invisible");
      return;
    }
    errorRef?.current?.classList.add("invisible");
  }, [failed]);

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
      <Error errorRef={errorRef} />
      <LoginButton refs={[usernameRef, passwordRef]} setFailed={setFailed} />
    </div>
  );
}

function LoginButton({ refs, setFailed }: Props) {
  const [usernameRef, passwordRef] = refs;
  const [, { login }] = useUser();
  const router = useRouter();

  async function handleSubmit(e: any) {
    setFailed(false);
    e.preventDefault();

    let res = await login((usernameRef!.current! as HTMLInputElement).value, (passwordRef!.current! as HTMLInputElement).value);
    console.log(res);

    if (res) {
      router.push("/");
      return;
    }
    setFailed(true);
  }

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white text-sm rounded-md px-4 py-2 hover:bg-emerald-400 focus:bg-emerald-400 transition-colors outline-none"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </button>
    </div>
  );
}

function Error({ errorRef }: { errorRef: MutableRefObject<null> }) {
  return (
    <p className="text-red-500 text-sm invisible" ref={errorRef}>
      Usager et / ou mot de passe invalide
    </p>
  );
}

type Props = {
  refs: MutableRefObject<null>[];
  setFailed: Dispatch<SetStateAction<boolean>>;
};

