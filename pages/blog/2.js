import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Blog2 = () => {
  return (
    <div className="items-center justify-center h-screen">
      <Head>
        <title>Web Dev for Noobs</title>
      </Head>
      <article className="prose ml-auto mr-auto">
        <Image
          src="/images/blog2.png"
          height="400px"
          width="768px"
          className="rounded"
          alt="frameworks and libraries"
        />
        <h1 className="text-center">
          Creating Modern Web Applications with Libraries and Frameworks
        </h1>
        <h2>
          Now that you have a good understanding of the languages that the web
          is built on technology wise, the next step in learning web development
          is to learn how to utilize libraries and frameworks to build advanced,
          interactive, and modern full-stack applications.
        </h2>
        <h3>First, a terminology check - what does full-stack mean?</h3>
        <p>
          To know what full-stack means, we have to know about frontends and
          backends, and their respective roles in an application. Full-stack
          means it contains both stacks - frontend and backend.
        </p>
        <h2>Frontends</h2>
        <p>
          What is a frontend, you might ask? Well, the frontend of an
          application is the layer that the user interacts with. This means the
          user interface, functionality for buttons and forms, and how data is
          displayed.
        </p>
        <p>
          There are many different libraries out there for creating application
          frontends. One of the most popular is React.JS. There are plenty of
          other libraries and frameworks out there, like Angular and Vue, which
          both also use JavaScript. There are more libraries and frameworks out
          there that use other languages, like Django which uses Python and
          Laravel which uses PHP. However, JavaScript would definitely take the
          spot as the industry standard.
        </p>
        <h3>React</h3>
        <p>
          React, created by Meta, is a JavaScript library that makes building
          frontends easy and efficient. React introduces components, which are
          reusable snippets of HTML, JavaScript, and CSS. This streamlines the
          development process, making websites be able to split up into their
          own portable pieces, and each piece having its own functionality.
          Compared to vanilla JavaScript and HTML/CSS, which requires a lot more
          boilerplate code, React makes building websites quicker and more
          efficient.
        </p>
        <p>
          I would definitely look into learning React as a starting web library
          - that&apos;s how I got into web development myself. Learning React
          may take some time, but luckily there are tons of resources that are
          available online. I&apos;d highly recommend Mosh Hamedani&apos;s React
          tutorial, linked below. It&apos;s a long video, but I&apos;d
          definitely recommend it!
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Ke90Tje7VS0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <h3>CSS Libraries</h3>
        <p>
          As we saw in the last blog post, CSS allows us to style our web pages.
          However, as we saw, styling components can be a bit cumbersome,
          especially when you have a large-scale application with hundreds of
          classes and components - CSS can become very complex very quickly.
          Hence, there are tons of libraries out there that are great for
          default CSS styles and increased ease of use. Here&apos;s a couple
          that I like to use.
        </p>
        <h4>Bootstrap</h4>
        <p>
          Bootstrap is a CSS library that not only makes styling easier with
          utilities that allow for styles to be implemented by just changing the
          name of the class, but it also provides tons of styled components like
          cards, inputs, modals, and so much more. These custom components make
          building pages quicker and easier, by having components already made
          by Bootstrap ready to go.
        </p>
        <h4>Tailwind</h4>
        <p>
          Another useful CSS library is Tailwind, which is actually being used
          to style this website! Tailwind also allows for CSS properties to be
          declared in the class, and supplies tons of utility classes that can
          quickly and easily style components. One of the things that I love the
          most is that you can configure it to have dark mode and light mode, in
          addition to themes for primary and secondary colors that can be used
          across your web page. While it doesn&apos;t have pre-made components
          like Bootstrap does, you can create your own components that look
          cleanly styled with the help of Tailwind.
        </p>
        <h3>Backends</h3>
        <p>
          Backends, unlike frontends, contain all of the information and
          functions that the user cannot see. A lot of what they do includes
          sending and receiving data to and from the frontend, and also sending
          and receiving data from a database.
        </p>
        <p>
          Traditionally, back-ends are written all sorts of different
          programming languages, such as Java with the Spring Boot. However, as
          of recent, Node.js, a JavaScript backend runtime has come to dominate
          the scene. Now, instead of having to learn multiple languages for the
          frontend and backend, you can do both with just JavaScript!
        </p>
        <p>
          Another backend technology that you should definitely look into is
          Express. It&apos;s been called &quot;the de facto standard server
          framework for Node.js&quot;. It can handle requests for data from the
          frontend, send data to the frontend, and run a server, all using
          JavaScript. While discussing all of what Express does and its features
          are a little bit out of my own scope, I would definitely recommend
          checking out the following video by one of the best web development
          tutorial YouTubers out there, Web Dev Simplified.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SccSCuHhOw0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <h3>How to create a website like this one</h3>
        <p>
          To showcase just a little bit of what you can do with
          frameworks/libraries, I created this entire website from the ground
          up.
        </p>
        <p>
          Because there is not really any data transfer or database needed for
          this website, I created this website with only frontend tools. I used
          React in combination with framework and build tool Next to create this
          frontend and all of the UI, along with Tailwind for styling. The
          source code is hosted on GitHub, which you can see{" "}
          <Link href="https://github.com/z-roth/personal-website">
            <a>here.</a>
          </Link>
        </p>
        <p>
          So - now you know a little more about the tools that developers use
          today to build websites. Now, one question remains. How do I get
          started? Read more in the{" "}
          <Link href="/blog/3">
            <a>next blog post.</a>
          </Link>
        </p>
      </article>
    </div>
  );
};

export default Blog2;
