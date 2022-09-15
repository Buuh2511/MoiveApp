import { Pagination } from "@mui/material";





const CustomPagination = ({ setPage, numOfPages }) => {


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
                        background:'whitesmoke',
                        color:'#004D40'
                    },
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