import React from 'react'
import Main from '../components/section/Main'

import { webdText } from '../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    return (
        <Main 
        title="웹디자인 기능사"
        description="웹디자인 기능사 튜토리얼 강의입니다."
        >
           <section id='webd'>
                <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
                <div className='video_inner'>
                    {webdText.map((webd,key)=>(
                    <div className='video' key={key}>
                        <div className='video_thumb play_icon'>
                        <Link to={`/video/${webd.videoId}`}>
                            <img src={webd.img} alt={webd.title} />
                        </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Webd