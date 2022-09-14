import axios from "axios";
import apiKey from "./api/api";







const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
}) => {

    const fetchGenres = async () => {
       const {data} =  await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`
        );
    }


    return (

        <div>
            this is genres
        </div>
    )
}

export default Genres;