import BlogPageHeader from "@/components/BlogPageHeader";
import Link from "next/link";
import React from "react";

export default function BlogPageLayout({ children }) {
  return (
    <div className="text-white flex flex-col gap-3 mt-7 px-5">{children}</div>
  );
}
