// @ts-ignore
export const sandboxServer = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 6000,
})