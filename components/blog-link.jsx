import Image from "next/image";
import Link from "next/link";

export const BlogLink = ({ title, description, id, imgSrc }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div
        className="shadow-lg rounded-lg p-4 m-3 
       hover:bg-secondary hover:text-primaryLight
       h-max"
      >
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{description}</p>
        <Image src={imgSrc} className="p-2 h-36 rounded-xl" alt={title} />
      </div>
    </Link>
  );
};
