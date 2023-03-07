import { component$, useTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();
  const user = false;

  useTask$(() => {
    console.log(">>", user);

    // if (!user) {
    //   nav('/login');
    // }
    // else if (user) {
    // nav('/home');
    // }
  });

  return <></>;
});

export const head: DocumentHead = {
  title: "Portail de l'élève",
  meta: [
    {
      name: "description",
      content: "Student console for Collège JDLM",
    },
  ],
};
