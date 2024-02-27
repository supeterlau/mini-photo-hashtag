import Link from "next/link";
import { HiHeart } from "react-icons/hi2";

export interface PhotoProps {
  id: string,
  author: string,
  url: string,
  download_url: string,
}

const PhotoCard = (photo: PhotoProps) => {
  const like = () => alert('like it +1')
  return (
    <>
      <Link href={`/photo/${photo.id}`} className='text-blue-600 hover:text-blue-800'>
        <div className="photo">
          <div className="flex items-center justify-center">
            <HiHeart className="h-4/5 w-4/5 text-red-300" onClick={like}/>
          </div>
        </div>
      </Link>
      <style jsx>{`
      .photo {
        background-color: lightblue;
        background-image: url(${photo.download_url});
        background-size: contain;
        background-size: cover;
        background-repeat: no-repeat;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
      }
      .photo::before {
        content: "";
        padding-bottom: 100%;
        display: block;
      }
      .photo::before,
      .photo > div {
        /* grid-area: 1 / 1 / 2 / 2; */
        grid-area: 4 / 4 / 5 / 5;
      }
      `}</style>
    </>
  )
}

export default PhotoCard