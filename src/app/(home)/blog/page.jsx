import { createArticleAPI } from "@/app/actions/article";
import Link from "next/link";
import React from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import BlogPageHeader from "@/components/modules/blog/BlogPageHeader";

export default function BlogPage() {
  const articles = faker.helpers.multiple(createArticleAPI, {
    count: 4,
  });
  console.log("articles :", articles);

  return (
    <div className='text-white  flex flex-col gap-2 mt-15 '>
      <BlogPageHeader />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`flex flex-col gap-3 ${
              index === 0 ? "lg:col-span-3 lg:flex-row lg:items-center  " : ""
            }`}>
            <Image
              className={`w-full h-fit rounded-xl ${
                index === 0 ? "lg:h-[300px] lg:!w-[650px]" : ""
              }`}
              key={article.id}
              src={article.coverImage}
              alt={article.title}
              width={200}
              height={200}
            />
            <div className='flex flex-col gap-3'>
              <Link
                href={`/blog/${article.id}`}
                className='text-xl font-semibold'>
                {article.title}
              </Link>
              <p className='fontlight line-clamp-2'>{article.description}</p>
              <div className='flex gap-2 items-center'>
                <Image
                  className='rounded-full'
                  src={article.authorImage}
                  alt={article.authorName}
                  width={35}
                  height={35}
                />
                <p className='fontlight font-semibold text-sm'>
                  {article.publishedDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
