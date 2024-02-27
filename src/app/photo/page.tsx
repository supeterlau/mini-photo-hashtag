'use client';

import PhotoList from './components/PhotoList';
// import PhotoList from './components/ObserverTarget';

const Page = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <h2>Photos</h2>
      <PhotoList />
    </div>
  )
}
export default Page  