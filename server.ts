import { Application } from 'https://deno.land/x/oak@v12.6.0/mod.ts'

const app = new Application()

app.use((ctx) => {
  ctx.response.body = {
    message: 'hello world',
  }
})

await app.listen({ port: 3334 })
