"use client"

import PhotoDetails from '../components/PhotoDetails'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <PhotoDetails slug={params.slug}/>
  )
}