/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        //src="/logo.svg"
        //height="100px"
        //alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to AuraCat's personal website.
      <br/>
        There's not much here for now, but more things are coming soon. :)
        (including support for other languages)
      </p>
      <p class={tw`my-14 font-weight-900`}>
        My Twitter: <a href="https://twitter.com/AuraCat" class={tw`text-blue-500`}>@AuraCat</a>
      </p>
    </div>
  );
}
