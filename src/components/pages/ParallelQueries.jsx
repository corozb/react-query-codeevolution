import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')

const fetchFriends = () => axios.get('http://localhost:4000/friends')

const ParallelQueries = () => {
  const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
  const { data: friends } = useQuery('friends', fetchFriends)
  return <div>ParallelQueries</div>
}

export default ParallelQueries
