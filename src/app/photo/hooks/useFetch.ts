// import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import {fetcher} from '../utils/fetcher'
import { BASE_URL } from '../utils/constant'

const useFetch = (limit: number) => {
  // const { data, error} = useSWR(`/${path}`, fetcher)

  const getKey = (pageIndex: number, prevPageData: any[]) => {
    // 不可以有 console.log()
    // console.log('prevPageData', prevPageData, prevPageData.length)
    if (prevPageData && !prevPageData.length) return null 
    // console.log('prevPageData', prevPageData, prevPageData.length)

    const pageNumber = pageIndex + 1
    return `${BASE_URL}?page=${pageNumber}&limit=${limit}`
    // pageIndex += 1
    // return `${BASE_URL}?page=${pageIndex}&limit=${limit}`
  }

  const { data, error, size, setSize} = useSWRInfinite(getKey, fetcher, {revalidateFirstPage: false})
  
  const loadMore = async () => {
    console.log('load more: size', size)
    await setSize(size + 1)
  }
  console.log(data, error, size)

  const isLoading = !data && !error
  // console.log('isLoading', size, data && data[data.length - 1]?.length)

  return {
    data: data ? data.flat() : [], 
    isLoading,
    isError: error,
    size,
    loadMore,
    hasNextPage: data && data[data.length - 1]?.length === limit
  }
}

export default useFetch