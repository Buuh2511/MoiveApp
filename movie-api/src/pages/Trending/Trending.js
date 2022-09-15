import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";



import apiKey from "../../components/api/api";
import CustomPagination from "../../components/Pagination/CustomPagintation";
import SingleContent from "../../components/SingleContent/SingleContent";
import "./Trending.css";

export default function Trending() {

    const [numOfPages, setNumOfPages] = useState(1)
    const [listData, setListData] = useState([]);
    const [page, setPage] = useState(1);


    const fetchTrendingdata = async () => {
        const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}
        `);
        setListData(data.results)
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchTrendingdata();
    }, [page])



    return (
        <div>
            <span className="pageTitle">
                Trending
            </span>
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
                            mediaType={item.media_type}
                            voteAverage={item.vote_average}
                        />
                    ))
                }
            </div>
            {numOfPages > 1 &&
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />}
        </div>
    )
}