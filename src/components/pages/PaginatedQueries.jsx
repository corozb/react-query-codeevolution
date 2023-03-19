import { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchColors = (num) => axios.get(`http://localhost:4000/colors?_limit=2&_page=${num}`)

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading, isFetching, isError } = useQuery(['colors', pageNumber], () => fetchColors(pageNumber), {
    keepPreviousData: true,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  const prevPage = () => setPageNumber((prevPage) => prevPage - 1)
  const nextPage = () => setPageNumber((prevPage) => prevPage + 1)

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          )
        })}
      </div>
      <div>
        <button onClick={prevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <button onClick={nextPage} disabled={pageNumber === 4}>
          Next
        </button>
      </div>
      {isFetching && <h3>Loading</h3>}
    </>
  )
}

export default PaginatedQueries
