import React from 'react'
import { Link } from 'react-router-dom'

const VideoCards = ({videos}) => {
  return (
    <> 
        {videos.map((video,index)=>(
            <div className='video' key={index}>
                <div className='video_thumb play_icon'>
                    <Link to={`/video/${video.videoId}`}>
                        <img src={video.img} alt={video.title} />
                    </Link>
                </div>
            </div>
        ))}
      
    </>
  )
}

export default VideoCards
