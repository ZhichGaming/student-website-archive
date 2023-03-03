import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({
    username: null,
    password: null
  })

  return (
    <div class="flex-1 bg-black">
      
    </div>
  )
})