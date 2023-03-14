import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error } = useQuery('super-heroes', fetchSuperHeroes, {
    refetchInterval: 2000,
    refetchIntervalInBackground: true,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>SuperHeroes Page - React Query</h2>
      {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}

export default RQSuperHeroes
