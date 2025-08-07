import Link from "next/link";
import Image from "next/image";
import { createArticleAPI } from "@/app/actions/article";
import { faker } from "@faker-js/faker";
import { addProduct } from "@/app/actions/products";

// Components import
import BlogPageHeader from "@/components/modules/blog/BlogPageHeader";

export default async function EducationPage() {
  const articles = faker.helpers.multiple(createArticleAPI, {
    count: 4,
  });
  const FilteredArticles = articles.filter(
    (article) => article.category === "Education"
  );

  return (
    <div className='flex flex-col gap-2 mt-15'>
      <BlogPageHeader />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
        {FilteredArticles.map((article) => {
          return (
            <div key={article.id} className={`flex flex-col gap-3 `}>
              <Image
                className={`w-full h-fit rounded-xl `}
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
          );
        })}
      </div>
    </div>
  );
}
