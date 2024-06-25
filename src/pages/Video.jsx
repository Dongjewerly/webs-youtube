import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../components/utils/api';

const Video = () => {

    const {videoId} = useParams();
    const {videoDetail,setVideoDetail} = useState(null);

    useEffect(()=>{
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then((data)=>{
            console.log(data);
            setVideoDetail(data.items[0])
        })
    },[videoId]);
    
    return (
        <Main 
        title="유튜브 비디오"
        description="유튜브 비디오를 볼 수 있습니다."
        >
           Video 
        </Main>
    )
}

export default Video