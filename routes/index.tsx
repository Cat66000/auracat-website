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
        Welcome to AuraCat's personal website!
        <br />
        You might also know me under the name "Cat66" or "CloudCat"
        <br />
        <br />
        There's not much here for now, but more things are coming soon. :)
        <br />
        Including support for other languages, and even possibly a blog as well
        as other things
      </p>
      <p class={tw`my-14 font-weight-900`}>
        My Twitter:{" "}
        <a href="https://twitter.com/Cat66000" class={tw`text-blue-500`}>
          @Cat66000
        </a>
        <br />
        <a
          href="https://github.com/Cat66000/auracat-website"
          class={tw`text-blue-500`}
        >
          The website's Github repository
        </a>
      </p>
    </div>
  );
}
