import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <div>
      <Script>{`alert("welcome")`}</Script>
    </div>
  );
};

export default page;

export const metadata = {
  title: " contact page of the Blog",
  description: "I am a blog",
};
