import React from 'react'
import Main from '../components/section/Main'

import { portfolioText } from '../data/portfolio'
import { Link } from 'react-router-dom'

const Port = () => {
    return (
        <Main 
        title="포트폴리오"
        description="포트폴리오사이트 강의입니다."
        >
            <section id='portfolio'>
            <h2>🤗 포트폴리오 만드는 방법을 공유합니다.</h2>
            <div className='video_inner'>
                {portfolioText.map((portfolio,key)=>(
                <div className='video' key={key}>
                    <div className='video_thumb play_icon'>
                    <Link to={`/video/${portfolio.videoId}`}>
                        <img src={portfolio.img} alt={portfolio.title} />
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </Main>
    )
}

export default Port