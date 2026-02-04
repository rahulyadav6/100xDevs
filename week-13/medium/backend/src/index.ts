import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'prisma/config'
import { sign } from 'hono/jwt'
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signup', async(c)=>{
  const prisma = new PrismaClient({
    // @ts-ignore
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const user = await prisma.user.create({
    data:{
      email: body.email,
      password: body.password
    }
  })
  const token = sign({id:user.id}, "secret")
  return c.json({
    jwt:token
  })
})
app.post('/api/v1/signin', (c)=>{
  return c.text('signin route')
})
app.post('/api/v1/blog', (c)=>{
  return c.text('blog post route')
})
app.put('/api/v1/blog', (c)=>{
  return c.text('edit blog route')
})
app.get('/api/v1/blog/:id', (c)=>{
  return c.text('get blog route')
})

export default app
