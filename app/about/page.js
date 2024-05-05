import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <h1 className="text-xl">about page</h1>
      <Image
        className="mx-auto"
        width={100}
        height={100}
        src="data:image/jpeg;base64,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"
        alt="image"
      />
    </div>
  );
};

export default about;

export const metadata = {
  title: " About page of the Blog",
  description: "I am a blog",
};
