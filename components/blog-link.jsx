import Image from "next/image";
import Link from "next/link";

export const BlogLink = ({ title, description, id, imgSrc }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div
        className="shadow-lg rounded-lg p-4 m-3 
       hover:bg-secondary hover:text-primaryLight
       h-60"
      >
        <Image
          src={imgSrc}
          width="255px"
          height="128px"
          className="p-2 rounded-xl object-cover"
          alt={title}
        />
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
};
