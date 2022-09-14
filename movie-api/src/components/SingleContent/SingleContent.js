
import { Badge } from '@mui/material';
import { img_300, unavailableLandscape } from '../../config/config'
import './SingleContent.css';



const SingleContent = ({ id, poster, title, date, mediaType, voteAverage }) => {
    return (
        <div key={id} className='media'>
            <Badge 
            badgeContent={voteAverage}
            color={voteAverage > 6 ? 'primary' : 'secondary'} 
            />
            <img
                className='poster'
                src={
                    poster ? `${img_300}/${poster}` : unavailableLandscape
                }
                alt={'title'}
            />
            <p className='title'>{title}</p>
            <div className='subTitle'>
                <span >
                    {
                        mediaType === 'tv' ? "TV Series" : "Movie"
                    }
                </span>
                <span >
                    {date}
                </span>
            </div>
        </div>
    )
}

export default SingleContent;