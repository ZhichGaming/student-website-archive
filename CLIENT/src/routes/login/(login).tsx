import { type Socket } from "socket.io-client";
import { type Setter, createSignal, useContext, type Accessor, createEffect } from "solid-js";
// import { socket } from "../store";

export default function Login() {
  const [usernameRef, setUsernameRef] = createSignal<Element>();
  const [passwordRef, setPasswordRef] = createSignal<Element>();

  createEffect(() => {});

  return (
    <div class="flex-1 dark:bg-black center w-auto h-1/2 as-1">
      <div class="w-1/3 center items-center">
        <FormInput name="username" ref={setUsernameRef} />
        <FormInput name="password" ref={setPasswordRef} />
        <SubmitButton usernameRef={usernameRef} passwordRef={passwordRef} />
      </div>
    </div>
  );
}

function submitLogin(socket: Socket, username: string, password: string) {
  socket!.emit("login", { username: username, password: password });
}

function SubmitButton({ usernameRef, passwordRef }: ButtonProps) {
  return (
    // <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => submitLogin(socket, usernameRef()?.value, passwordRef()?.value)}>
    //   Submit
    // </button>
    <div></div>
  );
}

function FormInput({ name, ref }: InputProps) {
  return (
    <div class="relative z-0 w-full mb-6 group">
      <input type={`${name == "password" ? "password" : "text"}`} name={name} id={`floating_${name}`} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-full appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer pl-4 hover:cursor-text" placeholder=" " ref={ref} required />
      <label for={`floating_${name}`} class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 translate-x-5 peer-focus:scale-75 peer-focus:-translate-y-5 dark:bg-black px-1 rounded-full hover:cursor-text">
        {name}
      </label>
    </div>
  );
}

interface InputProps {
  name: string;
  ref: Setter<HTMLInputElement | undefined>;
}

interface ButtonProps {
  usernameRef: Accessor<Element | undefined>;
  passwordRef: Accessor<Element | undefined>;
}
