import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  console.log('COMPONENT')
  const count = useSignal(0)
  return (
    <>
      <div>
        <h1>DEMO</h1>
        <button onClick$={()=> {
          console.log('clicked');
          count.value++;
          console.log(count)
        }}>
          Clicked {count.value}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
