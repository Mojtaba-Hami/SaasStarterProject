import { createArticleAPI } from "@/app/actions/article";
import ArticleSinglePage from "@/components/ArticleComponents/ArticleSinglePage";
import InPageNavigation from "@/components/ArticleComponents/InPageNavigation";
import Link from "next/link";
import React from "react";

export default async function Pagearticle({ params }) {
  const { id } = params;
  const article =  createArticleAPI(id);

  return (
    <div>
      <ArticleSinglePage data={article} />
      <InPageNavigation data={article} />
    </div>
  );
}
