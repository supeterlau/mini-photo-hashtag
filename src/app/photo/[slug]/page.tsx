"use client"

import PhotoDetails from '../components/PhotoDetail'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PhotoDetails slug={params.slug}/>
  )
}