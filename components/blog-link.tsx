import Image from "next/image";
import Link from "next/link";

export const BlogLink = ({ title, description, id, imgSrc }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="shadow-2xl rounded-lg p-4 m-3 bg-primaryLighthover:bg-secondary h-60 transition duration-500 hover:bg-secondary hover:text-primaryLight hover:scale-125 bg-primaryLight border border-secondary">
        <Image
          src={imgSrc}
          width="255px"
          height="128px"
          className="p-2 rounded-xl object-cover border border-secondary"
          alt={title}
        />
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
};
