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
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
  </ol>
  <button>Click Me</button>
  <br/>
  <input placeholder="Put some text here..."/>
</div>`;

  const css = ``;

  const javascript = ``;

  return (
    <div>
      <article className="fade-in-page container prose">
        <div className="static ">
          <div className=" bg-secondary p-4 rounded-md">
            <Image
              src="/images/blog1.jpeg"
              height="400px"
              width="768px"
              className="static"
              alt="header"
            />
            <h1 className="text-center text-primaryLight">Welcome!</h1>
            <h2 className="text-center text-primaryLight">
              <Link href="/about">
                <a className="font-semibold underline text-primaryLight">
                  My name is Zack.
                </a>
              </Link>{" "}
              I&apos;ll be your tour guide this evening. Or morning. Or afternoon. I
              don&apos;t know what time it is there.
            </h2>
          </div>

          <p className="text-sm">
            Just kidding, I lied. It&apos;s{" "}
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            . I used a little bit of magic there to figure it out. Hopefully,
            I&apos;ll be able to teach you how to use magic too. No guarantees on
            casting spells, however.
          </p>

          <h2 className="text-xl font-semibold ">
            So, what is web development, you might ask?
          </h2>
          <p>
            As I am sure you are aware, there&apos;s this software platform called
            the World Wide Web. In fact, you&apos;re actually using it right now!
          </p>
          <p>
            One of my favorite things about the web is that it&apos;s a software
            platform that pretty much any device can access nowadays. That&apos;s
            what makes it so incredibly powerful - its accessibility. That&apos;s
            also what makes me love it so much, as I want to create software
            that can be used by just about anyone.
          </p>
          <p>
            The world wide web consists of all sorts of different websites, with
            each website consisting of one or many web pages. You can access and
            interact with these pages via a web browser. Safari, Chrome,
            Firefox, and Brave are just a few. However, while the browsers might
            look and feel different, they all perform the same task - rendering
            web sites and pages.
          </p>

          <h2 className="text-xl font-semibold ">
            How does one build a web page?
          </h2>
          <p>
            Web pages are primarily built with three different languages: HTML,
            CSS, and JavaScript. Each language has its own purpose, but they all
            work together to create structured, beautiful, and functional
            websites. Let&apos;s take a deeper dive into each one.
          </p>

          <h3 className="text-lg font-semibold ">HTML</h3>
          <p>
            First off, I hate to break it to you, but HTML is not a coding
            language. It&apos;s actually of a structural language. HTML stands for
            HyperText Markup Language. HTML has a hierarchical structure, which
            splits up web pages in to separate little pieces. Each piece is
            called a tag, which has an opening and closing bracket. Different
            kinds of HTML tags tell the browser to render it in certain ways.
            Here&apos;s a little preview of some HTML below.
          </p>
          <Prism language="html" className="border-primary border-4 rounded">
            {html}
          </Prism>
          <p>
            The {"<div>"} tag is a basic divider. It&apos;s great for splitting up
            your HTML into different pieces.
          </p>
          <p>
            The {"<h1>"} tag declares a heading. In this case, {"<h1>"} is
            heading 1, so it has the largest styling.
          </p>
          <p>
            The {"<p>"} tag declares a paragraph. It separates a chunk of text
            as a paragraph.
          </p>
          <p>
            The {"<ol> and <li>"} tags are for making lists. The parent, or
            outer tag, defines a list, and each child tag defines a list item.
            In this case, we use the {"<ol>"}, so the list is ordered.
          </p>
          <p>
            When rendered by the browser, the HTML above should look something
            like this:
          </p>

          <div className="border rounded p-4">
            <h1>This is the first heading.</h1>
            <h2>This is the second heading.</h2>
            <p>
              Here, we have a paragraph. We can write a whole lot of stuff in
              here.
            </p>
            <ol>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ol>
            <button className="bg-secondary p-2 text-primaryLight rounded-full">
              Click Me
            </button>
            <br />
            <br />
            <input placeholder="Put some text here..." className="border" />
          </div>
          <h3 className="text-lg font-semibold ">CSS</h3>
          <p>
            Next up, we have CSS, Cascading Style Sheets. Without CSS, HTML
            would render as plain text with just about no style at all. CSS can:
          </p>
          <div className="text-center">
            <p className=" text-secondary text-center">
              Change the color of text
            </p>
            <div className="text-center text-primaryLight bg-secondary h-24 relative ">
              <p className="absolute top-4 right-3">
                Change the positioning of text
              </p>
            </div>
            <div className="animate-bounce">Make animations</div>
          </div>
          <p>
            CSS is used in conjunction with HTML documents. The language has
            tons of properties. 228 of them, to be exact. If I remember
            correctly. These properties can be applied to various HTML elements,
            whether it be by ID, class, tag type, or a combination of them.
          </p>
          <h3 className="text-lg font-semibold ">JavaScript</h3>
          <p>
            Last up, we have JavaScript. JavaScript is a more conventional
            programming language that enables interactivity in websites - it
            makes them truly functional. While a website like this, with mostly
            text and little interactivity, won&apos;t have much JavaScript, it&apos;s used
            all over the web, especially for more application-based web
            programs, like Twitter, for example.{" "}
            <span>
              <Link href="https://twitter.com/webdevfornoobs">
                <a className="text-secondary underline">
                  {"(check out our twitter if you haven&apos;t already!)"}
                </a>
              </Link>
            </span>
          </p>
          <p>
            Below is a little code snippet of some JavaScript. It&apos;s super simple
            - when you click the add button, it increments the counter. When you
            click the subtract button, it decrements.
          </p>
          <h2>Conclusion</h2>
          <p>
            Now that you have an understanding of what HTML, CSS, and JavaScript
            is, you&apos;re one step closer to making the website of your dreams.
          </p>
          <p>
            In years past, plain HTML, CSS, and JavaScript were used to create
            websites. Now, there are tons of libraries and frameworks out there
            that allow you to make full-stack applications with reusable
            components and all sorts of other features. Read more about it in
            the{" "}
            <Link href="/blog/2">
              <a className="text-secondary">next blog!</a>
            </Link>
          </p>
        </div>
      </article>
    </div>
  );
};

export default Blog1;
