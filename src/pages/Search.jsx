import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../components/utils/api';

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [nextPageToken,setNextPageToken] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setVideos([]);
        fetchvideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchvideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
            .then((data)=>{
                setNextPageToken(data.nextPageToken);
                setVideos((preVideos)=>[...preVideos, ...data.items]);
                setLoading(false);
            })
            .catch((error)=>{
                console.log('Error fatching data', error);
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
        if(nextPageToken){
            fetchvideos(searchId, nextPageToken);
        }
    }

    const searchPageClass = loading?'isLoading':'isLoaded';


    return (
        <Main 
        title="유튜브 검색"
        description="유튜브 검색 결과 페이지입니다."
        >
           <section id='SearchPage' className={searchPageClass}>
                <h2>🤠<em>{searchId}</em>검색 결과입니다.</h2>
                <div className='video_inner search'>
                    <VideoSearch videos={videos}/>
                </div>
                <div className='video_more'>
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
           </section>
        </Main>
    )
}

export default Search