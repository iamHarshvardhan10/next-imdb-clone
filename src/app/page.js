const API_KEY = process.env.API_KEY;


import { Results } from '@/components/Results';
import React from 'react'

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&langauge=en-US&page=1`
  )
  const data = await res.json()
  if (data.scucess = false) {
    throw new Error('Failed to fetch data')
  }
  const results = data.results
  // console.log(result)
  return (
    <div>
      <Results results={results} />
    </div>
  )
}

export default Home;