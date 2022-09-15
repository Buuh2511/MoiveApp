import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
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
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=en-US`
        );

        setGenres(data.genres)
    };

    const handleAdd = (gen) => {
        setSelectedGenres([...selectedGenres, gen])
        setGenres(genres.filter((g) => g.id !== gen.id))
        setPage(1);
    }

    const handleRemove = (gen) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== gen.id)
        );
        setGenres([...genres, gen]);
        setPage(1);
    }

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, [])



    return (

        <div style={{ padding: '6px 0' }}>
            {
                selectedGenres.map((item) => (
                    <Chip
                        key={item.id}
                        clickable
                        size="small"
                        style={{ margin: '5px' }}
                        label={item.name}
                        color={"error"}
                        onDelete={() => handleRemove(item)}
                    />
                ))
            }
            {
                genres.map((item) => (
                    <Chip
                        key={item.id}
                        style={{ margin: 5 }}
                        label={item.name}
                        clickable
                        size="small"
                        onClick={() => handleAdd(item)}
                    />
                ))
            }
        </div>
    )
}

export default Genres;