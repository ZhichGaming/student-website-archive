import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const user:boolean = true;
  

  return (
    <></>  
  );
});

export const head: DocumentHead = {
  title: 'Portail de l\'élève',
  meta: [
    {
      name: 'description',
      content: 'Student console for Collège JDLM',
    },
  ],
};
