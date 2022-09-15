


const useGenres = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";

    const genId = selectedGenres.map((item) => item.id)
    return genId.reduce((acc, curr) => acc + ',' + curr)
}

export default useGenres;