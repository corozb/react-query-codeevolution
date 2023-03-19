import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = (email) => axios.get(`http://localhost:4000/users/${email}`)

const fetchCoursesByChannelId = (channelId) => axios.get(`http://localhost:4000/channels/${channelId}`)

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
  console.log('data', user)

  const channelId = user?.data.channelId

  useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  })

  return <div>DependentQueries</div>
}

export default DependentQueries
