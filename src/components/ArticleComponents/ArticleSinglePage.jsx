"use client";
// import { useParams } from 'next/navigation';
import React from "react";
import CreateArticleAPI from "../../app/actions/article";
import Link from "next/link";
import Image from "next/image";

export default function ArticleSinglePage({ data }) {
  const lowercategory = data.category?.toLowerCase();

  return (
    <div className="flex flex-col gap-5">
      <div className=" flex gap-5 items-center">
        <Link
          href={`/blog/category/${lowercategory}`}
          className="border border-neutral-800 hover:bg-neutral-900 px-3 py-1 rounded-lg"
        >
          {data.category}
        </Link>
        <p className="fontlight font-semibold text-sm">
          {data.publishedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
      <p className="text-4xl font-bold">{data.title}</p>
      <p className="fontlight text-xl">{data.description}</p>
      <div className="flex gap-2">
        <Image
          className="rounded-full"
          src={data.authorImage}
          alt="image"
          width={40}
          height={40}
        />
        <div className="flex flex-col text-sm">
          <span className="font-semibold">{data.author}</span>
          <span>@{data.author}</span>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
