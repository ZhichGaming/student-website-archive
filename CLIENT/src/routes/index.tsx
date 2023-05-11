import { component$, useTask$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const _nav = useNavigate();

  useTask$(async () => {
    // nav("/login");
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

