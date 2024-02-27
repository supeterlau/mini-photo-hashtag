'use client';

import useFetch from "../hooks/useFetch"
import PhotoCard from "./PhotoCard"
import LoadingIndicator from "./LoadingIndicator"
import ErrorMessage from "./ErrorMessage"
import { PAGE_LIMIT } from "../utils/constant"
import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";

const PhotoList = () => {

  const {data: photos, isError, isLoading, loadMore, hasNextPage} = useFetch(PAGE_LIMIT)

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight
    )
      return;
    loadMore();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if(isLoading) {
    // return <div>Loading ...</div>
    return <LoadingIndicator />
  }
  if(isError) {
    // return <div>Error: {error.message}</div>
    return <ErrorMessage message={isError.message} />
  }

  return (
    <>
      <InfiniteScroll
          dataLength={photos.length}
          next={loadMore}
          hasMore={!!hasNextPage}
          loader={<LoadingIndicator />}
          endMessage={<p>All products loaded</p>}
        >
          <div className='photos'>
            {photos && photos.map((photo, index) => {
              return <PhotoCard key={index} {...photo} />
            })}
          </div>
        </InfiniteScroll>
      <style jsx>{`
      .photos {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        column-gap:2%;
        row-gap: 1rem;
      }
      `}</style>
    </>
  )
}

export default PhotoList