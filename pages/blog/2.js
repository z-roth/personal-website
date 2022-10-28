const Blog2 = () => {
  return (
    <div>
      <article className="prose">
        <h1>Creating Modern Web Applications with Libraries and Frameworks</h1>
        <h2>
          Now that you have a good understanding of the languages that the web
          is built on technology wise, the next step in learning web development
          is to learn how to use libraries and frameworks to build interactive,
          full-stack applications.
        </h2>
        <h3>First, a terminology check - what does full-stack mean?</h3>
        <p>
          To know what full-stack means, we have to know about frontends and
          backends, and their respective roles in an application.
        </p>
        <h3>Frontends</h3>
        <p>
          What is a frontend, you might ask? Well, the frontend of an
          application is the layer that the user interacts with. This means the
          user interface, functionality for buttons and forms, and how data is
          displayed.
        </p>
        <p>
          There are many different libraries out there for creating application
          frontends. One of the most popular is React, which I'll talk a bit
          more about soon. There are plenty of other libraries and frameworks
          out there, like Angular and Vue.
        </p>
        <h4>React</h4>
        <p>
          React, created by Meta, is a JavaScript library that makes building
          frontends easy and efficient. React introduces components - reusable
          snippets of HTML, JavaScript, and CSS.
        </p>
        <h3>Backends</h3>
        <p>
          Backends, unlike frontends, contain all of the information and
          functions that the user cannot see. A lot of what they do includes
          sending and receiving data to and from the frontend, and also sending
          and recieving data from a database.
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
          Express. It's be called "the de facto standard server framework for
          Node.js". While discussing all of what Express does and its features
          are a little bit out of my own scope, I would definitely recommend
          checking out the following video, yet again by Web Dev Simplified.
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SccSCuHhOw0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </article>
    </div>
  );
};

export default Blog2;
