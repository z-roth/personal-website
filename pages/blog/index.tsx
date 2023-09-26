import { BlogLink } from "../../components/blog-link";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="fade-in-page">
      <Head>
        <title>Web Dev for Noobs</title>
      </Head>
      <div className="flex flex-col p-3 fade-in-page h-screen sm:justify-center items-center">
        <h1 className="text-4xl font-bold m-6 text-center mb-8">
          <Link href="https://twitter.com/webdevfornoobs">
            <a>
              <Image
                src="/images/WDfN.png"
                height="128px"
                width="128px"
                className="rounded-full"
                alt="logo"
              />
            </a>
          </Link>
          <br />
          Web Dev for Noobs: A Blog
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
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
    </div>
  );
};

export default Blog;
