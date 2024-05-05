"use client";
// import React, { useEffect, useState } from "react";

const page = () => {
  const handleClick = async () => {
    let data = {
      name: "harry",
      role: "coder",
    };
    let a = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  };
  return (
    <div className="text-xl font-bold">
      <h1>hfgfjfhs</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default page;
