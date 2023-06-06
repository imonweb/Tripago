import React from 'react'
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect((url) => {
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()
      setData(json)
    }
    fetchData()
  }, [url])

  return {data}
}

// export default useFetch