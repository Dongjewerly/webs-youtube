import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../components/utils/api';
import { CiBadgeDollar, CiMedal, CiRead } from 'react-icons/ci';
import VideoSearch from '../components/videos/VideoSearch';

const Channel = () => {
    const {channelId} = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);



    useEffect(()=>{
        const fetchResults = async() =>{
            try{
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
                setChannelVideo(videosData?.items);
                setNextPageToken(videosData?.nextPageToken);

            } catch (error) {
                console.error('Error fethcing 데이터', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    },[channelId]);

    const loadMoreVideos = async () => {
        if (nextPageToken){
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos=>[...prevVideos, ...videosData.items]);
            setNextPageToken(videosData?.nextPageToken); 
        }
    };

    const channelPageClass = loading ?"isLoading":"isLoaded";


    return (
        <Main 
        title="유튜브 채널"
        description="유튜브 채널페이지입니다."
        >
           {channelDetail&&(
            <section id='channel' className={channelPageClass}>
                <div className='channel_header' style={{backgroundImage:`url(${channelDetail.brandingSettings.image.bannerExternalUrl})`}}>
                    <div className='circle'>
                        <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                    </div>
                </div>
                <div className='channel_info'>
                    <h3 className='title'>{channelDetail.snippet.title}</h3>
                    <p className='desc'>{channelDetail.snippet.description}</p>
                    <div className='info'>
                        <span><CiBadgeDollar/>{channelDetail.statistics.subscriberCount}</span>
                        <span><CiMedal/>{channelDetail.statistics.videoCount}</span>
                        <span><CiRead/>{channelDetail.statistics.viewCount}</span>
                    </div>
                </div>
                <div className='channel_video video_inner search'>
                    <VideoSearch videos={channelVideo}/>
                </div>
                <div className='channel_more'>
                    {nextPageToken&& <button onClick={loadMoreVideos}>더 보기</button>}
                </div>
            </section>
           )}
        </Main>
    )
}

export default Channel