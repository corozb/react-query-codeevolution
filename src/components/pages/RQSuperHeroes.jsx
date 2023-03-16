import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')

const RQSuperHeroes = () => {
  const onSuccess = (data) => console.log('Perfom side effect after data fetching', data)

  const onError = (error) => console.log('Perfom side effect after encountering error', error)

  const { data, isLoading, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes, {
    enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name)
      return superHeroNames
    },
  })
  console.log({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>SuperHeroes Page - React Query</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {/* {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })} */}
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })}
    </>
  )
}

export default RQSuperHeroes
