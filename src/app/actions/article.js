import { faker } from '@faker-js/faker';


export  function createArticleAPI() {
  const articleTitle = faker.lorem.sentence(7);

  return {
    id: faker.string.uuid(),
    
    title: articleTitle,
    
    author: faker.person.fullName(),

    authorImage: `https://picsum.photos/100/100?random=${faker.string.numeric(5)}`, 
    
    publishedDate: faker.date.past({ years: 2 }),
    
    coverImage: `https://picsum.photos/800/600?random=${faker.string.numeric(5)}`,
    
    body: faker.lorem.paragraphs(10),

    description: faker.lorem.sentences(2),

    category: faker.helpers.arrayElement(['Education', 'News']),
    
    slug: faker.helpers.slugify(articleTitle).toLowerCase(),
  };
}

const myFakeArticle = createArticleAPI();

console.log(myFakeArticle);