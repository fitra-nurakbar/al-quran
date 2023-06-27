import Surah from '@/components/Surah'
import React from 'react'

export default function SurahWithNumber({
  params,
  searchParams,
}: {
  params: { number: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  
  return (
    <Surah number={params.number} />
  )
}
