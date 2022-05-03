import { faker } from '@faker-js/faker'

export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      id: faker.unique(faker.datatype.number),
      title: faker.lorem.text(),
      body: faker.lorem.sentences(5),
      createdAt: faker.datatype.datetime(),
    },
    {
      id: faker.unique(faker.datatype.number),
      title: faker.lorem.text(),
      body: faker.lorem.sentences(5),
      createdAt: faker.datatype.datetime(),
    },
    {
      id: faker.unique(faker.datatype.number),
      title: faker.lorem.text(),
      body: faker.lorem.sentences(5),
      createdAt: faker.datatype.datetime(),
    },
  ],
})
