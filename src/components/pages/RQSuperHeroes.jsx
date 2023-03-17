import React from 'react'
import { Link } from 'react-router-dom'
import { useSuperHeroesData } from '../../hooks/useSuperHeroesData'

const RQSuperHeroes = () => {
  const onSuccess = (data) => console.log('Perfom side effect after data fetching', data)

  const onError = (error) => console.log('Perfom side effect after encountering error', error)

  const { data, isLoading, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)
  console.log({ isLoading, isFetching })

  console.log(data)

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
      {data.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        )
      })}
      {/* {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })} */}
    </>
  )
}

export default RQSuperHeroes
