import Link from "next/link";
import React from "react";

export default function BlogPageLayout({ children }) {
  // DONT FORGET ABOUT METADATA

  return (
    <div className='text-white flex flex-col gap-3 mt-7 px-5'>{children}</div>
  );
}
