export function hello(name: string) {
  if (name === '') {
    throw new Error('name must not be empty')
  }

  return `Hello ${name}`
}
