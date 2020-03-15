import React from "react";
import { Link } from "@reach/router";
import Image from "react-lazy-image";

export const Thumb = ({ image }) => {
  return (
    <Link
      className="sm:w-1/6 my-16 mx-8 flex-grow"
      to={`/wallpapers/${image.id}`}
    >
      <figure className="thumb-fig flex flex-col items-center w-auto h-auto relative">
        <Image
          className="w-full max-h-30 z-10 rounded shadow-xl"
          source={image.secureUrl}
          defaultSource="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNUYIz6DwACQAF8ntZl+wAAAABJRU5ErkJggg=="
          offset={1000}
          alt={image.title}
        />

        <figcaption className="absolute inset-x-0 bottom-0 z-20 text-center my-2 p-1 bg-gray-900 w-1/4 mx-auto rounded">
          <p>
            {image.width}x{image.height}
          </p>
          <p>{image.views} views</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Thumb;
