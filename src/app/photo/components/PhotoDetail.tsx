import Image from 'next/image'

import useSWR from 'swr'

import {fetcher} from '../utils/fetcher'
import LoadingIndicator from './LoadingIndicator'
import ErrorMessage from './ErrorMessage'
import { DETAIL_URL } from '../utils/constant'

interface PhotoDetailsProps {
  slug: string;
}

// const PhotoDetails = ({id}: PhotoDetailsProps) => {

const PhotoDetails = ({slug}: PhotoDetailsProps) => {
  const {
    data: photo,
    error,
    isLoading
  } = useSWR(`${DETAIL_URL}/${slug}/info`, fetcher)

  if(isLoading) {
    // return <div>Loading ...</div>
    return <LoadingIndicator />
  }
  if(error) {
    // return <div>Error: {error.message}</div>
    return <ErrorMessage message={error.message} />
  }

  return (
    <div className=''>
      <h1 className=''>
      </h1>
      <div className=''>
        <div>
          <Image 
          src={photo.download_url}
          alt={photo.author}
          width={640}
          height={640}
          layout="responsive"
          />
        </div>
      </div>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const {slug: id} = context.query
//   return {
//     props: {
//       id
//     }
//   }
// }

export default PhotoDetails