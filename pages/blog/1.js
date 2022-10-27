import Image from "next/image";
import Link from "next/link";
import { Prism } from "@mantine/prism";

const Blog1 = () => {
  const date = new Date();

  const html = `
  <div>
  <h1>This is the first heading.</h1>
  <p>Here, we have a paragraph. We can write a whole lot of stuff in here.</p>
  <ol>
    <li>
  </ol>
</div>`;

  const css = ``;
  
  const javascript = ``;

  return (
    <div className="p-3 fade-in-page container max-w-3xl">
      <div className="static">
        <Image
          src="/images/blog1.jpeg"
          height="400px"
          width="768px"
          className="static"
        />
      </div>
      <div className="static">
        <h1 className="text-5xl m-3 font-bold">Welcome!</h1>
        <h3 className="text-4xl m-3">
          <Link href="/about">
            <a className="text-secondary font-semibold underline">
              My name is Zack.
            </a>
          </Link>{" "}
          I'll be your tour guide this evening. Or morning. Or afternoon. I
          don't know what time it is there.
        </h3>
        <p className="text-sm m-3">
          Just kidding, I lied. It's{" "}
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}.
          I used a little bit of magic there to figure it out. Hopefully, I'll
          be able to teach you how to use magic too. No guarantees on casting
          spells, however.
        </p>
        <h2 className="text-xl font-semibold m-3">
          So, what is web development, you might ask?
        </h2>
        <p className="m-3">
          As I am sure you are aware, there's this platform called the World
          Wide Web. In fact, you're actually using it right now!
        </p>
        <p className="m-3">
          That's actually one of my favorite things about the web. It's a
          software platform that pretty much any device can access nowadays.
          That's what makes it so incredibly powerful - its accessibility - and
          what makes me love it so much.
        </p>
        <p className="m-3">
          Anyways, there's a bunch of computers out there all around the world
          called servers. These servers are computers that stay on 24/7, hosting
          web pages.
        </p>
        <h2 className="text-xl font-semibold m-3">
          How does one build a web page?
        </h2>
        <p className="m-3">
          Web pages are primarily built with three different languages: HTML,
          CSS, and JavaScript. Each language has its own purpose, but they all
          work together to create structured, beautiful, and functional
          websites. Let's take a deeper dive into each one.
        </p>
        <h3 className="text-lg font-semibold m-3">HTML</h3>
        <p className="m-3">
          First off, I hate to break it to you, but HTML is not a coding
          language. It's actually of a structural language. HTML stands for
          HyperText Markup Language. HTML has a hierarchical structure, which
          splits up web pages in to separate little pieces. Here's a little
          preview of some HTML.
        </p>
        <Prism language="html">{html}</Prism>
        <p>
          The {"<div>"} tag is a basic divider. It's great for splitting up your
          HTML into different pieces.
        </p>
        <p>
          The {"<h1>"} tag declares a heading. In this case, {"<h1>"} is heading
          1, so it has the largest styling.
        </p>
        <p>
          The {"<p>"} tag declares a paragraph. It separates a chunk of text as
          a paragraph.
        </p>
        <h3 className="text-lg font-semibold m-3">CSS</h3>
        <p className="m-3">
          Next up, we have CSS, Cascading Style Sheets. Without CSS, HTML would
          render as plain text with just about no style at all. CSS can:
        </p>
        <p className="m-3 ">Change the color of text</p>
        <p>make shapes</p>
        <h3 className="text-lg font-semibold m-3">JavaScript</h3>
        <p>
          Last up, we have JavaScript. JavaScript is a programming language that
          enables interactivity in websites - it makes them truly functional.
          While a website like this, with mostly text and little interactivity,
          won't have much JavaScript, it's used all over the web, especially for
          more application-based web programs, like Twitter, for example.
        </p>
        <p>{"(check out our twitter if you haven't already!)"}</p>
        <p>
          Below is a little code snippet of some JavaScript. It's super simple -
          when you click the add
        </p>
      </div>
    </div>
  );
};

export default Blog1;
