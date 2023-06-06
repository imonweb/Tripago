import React from 'react'
import './TripList.css'
import { useState, useEffect, useCallback } from 'react'
// import useFetch from '../hooks/UseFetch'

const TripList = () => {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url)
    const json = await response.json()
    setTrips(json)
  }, [url])

  useEffect(() => {
    fetchTrips()
    // fetch(url)
      // .then(res => res.json())
      // .then(json => setTrips(json))
  }, [fetchTrips])

  console.log(trips)
 

  return (
    <div className='trip-list'>
      <h1>Trip List</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
        <useFetch />
      </div>
    </div>
  )
}

export default TripList