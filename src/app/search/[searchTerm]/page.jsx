import { Results } from "@/components/Results";
import React from "react";

const Searchpage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No Results Found</h1>}
      {results && <Results results={results} />}
    </div>
  );
};

export default Searchpage;
