import axios from "axios"
import { useEffect } from "react";
import { useState } from "react"
import apiKey from "../../components/api/api"
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagintation";
import SingleContent from "../../components/SingleContent/SingleContent";


export default function Movies() {

    const [page, setPage] = useState(1);

    const [listData, setListData] = useState([]);
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([]) 

    const fetchMoviesData = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page} 
        `)
        setListData(data.results);


    }



    useEffect(() => {
        fetchMoviesData()
    }, [page])

    return (
        <div>
            <span className="pageTitle ">
                Movies
            </span>
            <Genres 
                type='movie'
                selectedGenres = {selectedGenres}
                setSelectedGenres = {setSelectedGenres}
                genres = {genres}
                setGenres = {setGenres}
                setPage = {setPage}
            />
            <div
                style={{
                    padding: "20px"
                }}
                className="trending">
                {
                    listData && listData.map((item) => (

                        <SingleContent
                            key={item.id}
                            id={item.id}
                            poster={item.poster_path}
                            title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            mediaType="movies"
                            voteAverage={item.vote_average}
                        />
                    ))
                }
            </div>
            {
                numOfPages > 1 && (
                    <CustomPagination setPage={setPage} numOfPages={numOfPages} />

                )
            }
        </div>
    )
}