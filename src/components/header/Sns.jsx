import React from 'react'
import { snsLink } from '../../data/header'

const Sns = () => {
  return (
    <div className='header_sns'>
        <ul>
            {snsLink.map((sns,key)=>(
                <li key={key}>
                    <a href={sns.url}
                    rel='noopener noreferrer' 
                    aria-label={sns.title}
                    target='_black'
                    >
                        <span>{sns.icon}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Sns
