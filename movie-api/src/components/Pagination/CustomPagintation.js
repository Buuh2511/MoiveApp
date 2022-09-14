import { Pagination } from "@mui/material";





const CustomPagination = ({ setPage, numOfPages = 10 }) => {


    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    }


    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 10
            }}>
            <Pagination
                sx={{
                    '.MuiButtonBase-root' : {
                        background:'white',
                        color:'red'
                    }
                }}
                onChange={(e) => handlePageChange(e.target.textContent)}
                count={numOfPages}
                variant="outlined"
                shape="rounded"
                hideNextButton
                hidePrevButton
            />
        </div>
    )
}

export default CustomPagination;