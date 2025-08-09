import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogPageHeader from "@/components/modules/blog/BlogPageHeader";
import { alldata } from "@/app/actions/blog";

export default function NewsPage() {

  const FilteredArticles = alldata("News")

  return (
    <div className='flex flex-col gap-2 mt-15'>
      <BlogPageHeader />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
        {FilteredArticles.map((article) => {
          return (
            <div key={article.id} className={`flex flex-col gap-3 `}>
              <Image
                className={`w-full h-fit rounded-xl `}
                src={article.coverImage}
                alt={article.title? article.title : article.description}
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
                    alt={article.author}
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
          );
        })}
      </div>
    </div>
  );
}
