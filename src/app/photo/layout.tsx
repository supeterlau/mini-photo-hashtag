import PhotoLayout from './components/PhotoLayout';
import './layout.css'

import { Metadata } from 'next';
// import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  // parent: ResolvingMetadata
): Promise<Metadata> {
  return  {
    title: "Photos",
    description: "created by PeterLau",
  }
}

export default function Layout({children}: {
  children: React.ReactNode
}) {
  
  return (
    <section>
      <PhotoLayout>
        {children}
      </PhotoLayout>
    </section>
  )
}