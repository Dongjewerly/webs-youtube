import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import {Navigation} from 'swiper/modules'

const VideoSlider = ({videos, title, id}) => {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },500);
  },[]);

  const youtubeClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <section id={id} className={youtubeClass}>
      <h2>{title}</h2>
      <div className='video_slider'>
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper-${id}`}
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween:20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
          1600: {
              slidesPerView: 4,
              spaceBetween: 20,
          },
        }}
        >
          {videos.map((video,key)=>(
            <SwiperSlide key={key}>
              <div className='video' key={key}>
                <div className='video_thumb play_icon'>
                  <Link to={`/video/${video.videoId}`}>
                    <img src={video.img} alt={video.title} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default VideoSlider

// useEffect는 React 함수 컴포넌트에서 비동기 작업을 수행하거나 부수 효과를 다룰 때 사용되는 특별한 훅(Hook) 중 하나입니다. 
//                                 주로 컴포넌트의 생명주기 메소드(예: componentDidMount, componentDidUpdate, componentWillUnmount)와 비슷한 역할을 하며, 
//                                 컴포넌트의 상태나 DOM 업데이트와 관련된 작업을 수행하는 데 사용됩니다.
                            
                            
//                                 부수 효과 처리: 비동기 작업(데이터 가져오기, API 호출, 타이머 설정 등)을 수행할 수 있습니다. 이러한 작업은 컴포넌트의 렌더링과 독립적으로 처리됩니다.
//                                 상태 업데이트: useState 훅을 사용하여 상태를 변경하고, 변경된 상태에 따른 추가적인 렌더링을 트리거합니다.
//                                 DOM 조작: 컴포넌트가 화면에 렌더링된 후에 DOM 요소를 조작하거나 이벤트 처리 등을 수행할 수 있습니다.
                            
                        

                        
                            
//                                 리액트 훅(React Hook)은 React 버전 16.8부터 소개된 기능으로, 함수형 컴포넌트에서 상태와 다른 React 기능을 사용할 수 있게 해주는 API입니다. 
//                                 이전에는 상태와 생명주기 메서드를 클래스 컴포넌트에서 사용했지만, 훅을 통해 함수형 컴포넌트에서도 같은 기능을 사용할 수 있게 되었습니다. 
//                                 아래에 몇 가지 주요 리액트 훅에 대한 설명을 제공합니다
                            
                            
//                                 useState : useState 훅은 상태 관리를 위해 사용됩니다. 함수형 컴포넌트 내에서 상태를 생성하고 업데이트할 수 있게 해줍니다. 예를 들어, const [count, setCount] = useState(0)와 같이 사용할 수 있습니다. count는 현재 상태 값이고, setCount는 상태를 업데이트하는 함수입니다.
//                                 useEffect : useEffect 훅은 부수 효과를 다루기 위해 사용됩니다. 컴포넌트가 마운트, 업데이트, 혹은 언마운트될 때 특정 작업(비동기 작업, 상태 업데이트, DOM 조작 등)을 수행할 수 있습니다.
//                                 useContext : useContext 훅은 컨텍스트를 활용하여 컴포넌트 간에 상태를 공유할 때 사용됩니다. React.createContext로 생성한 컨텍스트를 사용하여 값을 공유하거나 설정할 수 있습니다.
//                                 useReducer : useReducer 훅은 상태 업데이트를 다룰 때 사용됩니다. 클래스 컴포넌트에서 setState 대신 사용할 수 있으며, 복잡한 상태 관리에 유용합니다.
//                                 useRef : useRef 훅은 ref 객체를 생성하고 다룰 때 사용됩니다. 주로 DOM 요소에 접근하거나 다른 목적으로 ref를 사용할 때 활용됩니다.
//                                 useMemo 및 useCallback : useMemo와 useCallback 훅은 성능 최적화를 위해 사용됩니다. useMemo는 계산 비용이 높은 값을 캐시하고, useCallback은 메모이제이션된 함수를 생성합니다.
//                                 Custom Hooks : 사용자 정의 훅을 생성하여 컴포넌트 간 코드 재사용을 간편하게 할 수 있습니다. 예를 들어, 데이터 가져오기, 로컬 스토리지 액세스, 인증 등을 처리하는 훅을 만들 수 있습니다.

