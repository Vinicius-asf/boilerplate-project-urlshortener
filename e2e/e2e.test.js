const { agent } = require('supertest')
const request = require('supertest')
const createServer = require('../server')

const app = createServer()

let created_url = ''

describe('Endpoints', () => {
  it('POST valid URL', async () => {
    const res = await request(app)
      .post('/api/shorturl')
      .set('Content-type', 'application/json; charset=utf-8')
      .send({'url':'https://www.google.com/'})
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty("original_url")
    expect(res.body).toHaveProperty("short_url")
    expect(res.body.original_url).toBe('https://www.google.com/')

    created_url = res.body.short_url.toString();
  })

  it('POST the same URL - should receive the same body', async () => {
    const res = await request(app)
      .post('/api/shorturl')
      .set('Content-type', 'application/json; charset=utf-8')
      .send({'url':'https://www.google.com/'})
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty("original_url")
    expect(res.body).toHaveProperty("short_url")
    expect(res.body.original_url).toBe('https://www.google.com/')
    expect(res.body.short_url.toString()).toBe(created_url)
  })

  it('POST invalid URL', async () => {
    const res = await request(app)
      .post('/api/shorturl')
      .set('Content-type', 'application/json; charset=utf-8')
      .send({'url':'https://w.google.com/'})
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty("error")
    expect(res.body.error).toBe('invalid url')
  })

  it('GET valid shortened url', async () => {
    const res = await request(app)
      .get('/api/shorturl/'+created_url)
    expect(res.statusCode).toEqual(302)
  })

  it('GET invalid shortened url', async () => {
    const res = await request(app)
      .get('/api/shorturl/-1')
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty("error")
    expect(res.body.error).toBe('Wrong format')
  })

  it('invalid instruction', async () => {
    const res = await request(app)
      .get('/hello')
    expect(res.statusCode).toEqual(404)
  })
})