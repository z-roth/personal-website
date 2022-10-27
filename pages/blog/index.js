import { BlogLink } from "../../components/blog-link";

const Blog = () => {
  return (
    <div className="flex flex-col p-3 fade-in-page h-screen justify-center items-center">
      <h1 className="text-4xl font-bold m-6">Web Dev for Noobs: A Blog</h1>
      <div className="flex flex-row justify-around items-center h-fit">
        <BlogLink
          title="The building blocks."
          description="HTML, CSS, and JavaScript."
          id={1}
          imgSrc="/images/blog1.jpeg"
        />
        <BlogLink
          title="Modern Web Applications."
          description="Frameworks and libraries galore."
          id={2}
          imgSrc="/images/blog2.png"
        />
        <BlogLink
          title="How to get started."
          description="Dive right in."
          id={3}
          imgSrc="/images/blog3.jfif"
        />
      </div>
    </div>
  );
};

export default Blog;
