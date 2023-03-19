import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'

const fetchSuperHero = ({ queryKey }) => {
  const id = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient()
  return useQuery(['super-hero', heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => hero.id === parseInt(heroId))
      if (hero) {
        console.log({ hero })
        return { data: hero }
      } else {
        return undefined
      }
    },
  })
}
