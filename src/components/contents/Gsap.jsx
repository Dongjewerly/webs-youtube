import React from 'react'

import { gsapText } from '../../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
  return (
    <section id='gsap'>
      <h2>🤓 GSAP 패럴랙스 효과를 하고 싶다면!</h2>
      <div className='video_inner overflow'>
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
  )
}

export default Gsap
