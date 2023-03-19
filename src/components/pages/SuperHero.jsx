import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../../hooks/useSuperHeroData'

const SuperHero = () => {
  const { heroId } = useParams()
  const { data, isLoading, isFetching, isError } = useSuperHeroData(heroId)

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <h2>Hero Details</h2>
      <h1>{data.data.name}</h1>
      <sub>{data.data.alterEgo}</sub>
    </div>
  )
}

export default SuperHero
