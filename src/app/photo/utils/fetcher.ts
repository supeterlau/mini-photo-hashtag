export const fetcher = async (url: string) => {
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error('An error occurred while fetching the remote api')
  }
  return response.json()
}