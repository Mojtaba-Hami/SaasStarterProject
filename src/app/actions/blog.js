import { createArticleAPI } from "./article";
import { faker } from "@faker-js/faker";

export function alldata( category ) {
    console.log(category);
    
  const articles = faker.helpers.multiple(createArticleAPI, {
    count: 4,
  });

  if (category) {
    const FilteredArticles = articles.filter(
      (article) => article.category === category
    );
    return FilteredArticles;
  } else {
    return articles;
  }
}
