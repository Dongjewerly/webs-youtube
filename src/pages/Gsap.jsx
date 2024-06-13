import React from 'react'
import Main from '../components/section/Main'

import { gsapText } from '../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
    return (
        <Main 
        title="GSAP"
        description="GSPA 사이트 튜토리얼입니다."
        >
            <section id='website'>
            <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
            <div className='video_inner'>
                {gsapText.map((gsap,key)=>(
                <div className='video' key={key}>
                    <div className='video_thumb play_icon'>
                    <Link to={`/video/${gsap.videoId}`}>
                        <img src={gsap.img} alt={gsap.title} />
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            </section>
        </Main>
    )
}

export default Gsap