import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.PostCreateArgs['data'][] = [
      // To try this example data with the Post model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'

      {
        title: 'เจ๊ท็อปบู๊ทแฟ้บว่ะ',
        body: 'รองรับ แอดมิชชั่นบาบูน เจลซาดิสม์ รองรับจุ๊ยสเปก อุปสงค์',
      },
      {
        title: 'Long established fact',
        body: 'that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it',
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.PostCreateArgs['data']) => {
        const record = await db.post.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
