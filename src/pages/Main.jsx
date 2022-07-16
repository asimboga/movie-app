// create routes
// create pages
// get API data with axios, useEffect
// use state to hold data
// console.log(APIdata)
// send props to pages / global states (map, filter, id, ternary, short circuit)
// create navbar and show at all pages
// firebase

import axios from "axios";
import { Button } from "bootstrap";
import {useState, useEffect} from "react";

const Main = () => {

  const [movieDta, setMovieDta] = useState([])

  const urlData = https://api.themoviedb.org/3/discover/movie?api_key=90477c84e477b4ac32c7e71e72c141a4"

  const getMovieData = async () => {
    try {
      const response = await axios.get(urlData)
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovieData()

  }, [])
  


  return (
    <div className="main">Main
      <Button type="submit" onClick{(e)=> getMovieData()}>submit</Button>
    </div>
  ) ;
};

export default Main;
