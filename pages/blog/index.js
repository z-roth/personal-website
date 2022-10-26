import { BlogLink } from "../../components/blog-link";

const Blog = () => {
  return (
    <div className="p-3 fade-in-page">
      <h1 className="text-4xl font-bold m-6">
        The State of Web Development: A Blog
      </h1>
      <div className="flex flex-row justify-around items-center">
        <BlogLink
          title="Where it's been."
          description="The early days of the web."
          id={1}
          imgSrc="/images/blog1.jpg"
        />
        <BlogLink title="Where it's at." description="The web we use" id={2} />
        <BlogLink
          title="Where it's going."
          description="What the web might look like soon."
          id={3}
        />
      </div>
    </div>
  );
};

export default Blog;
