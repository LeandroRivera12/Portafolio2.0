import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './SliderProjects.css'
import useFetch from '../../hooks/useFetch';
import { useEffect } from 'react';



const SliderProjects = () => {
  

    const projects = 'projects'
    const url = `https://projects-app-syri.onrender.com/${projects}`
    const [ project, getProject ] = useFetch(url)
  
    useEffect(() => {
      getProject()
    }, [])
  
    console.log(project)
  

  return (
        <div className='slider__container'>
            
              <Splide options={{
                speed: 2000,
              }}>
                {
                  project?.map(pInfo => (
                    <SplideSlide>
                    <div className='card' key={pInfo.id}>
                      <div className='img-box'>
                        <img src={pInfo?.images[0].url} alt="" />
                      </div>
                        <div className='card-content'>
                            <h1 className='title'>{pInfo?.title}</h1>
                            <p className='card__text'>{pInfo?.description}</p>
                            <div className='tech__container'>
                                {
                                  pInfo?.technologies.map(tech => (
                                    <div className='tech__item'>
                                      <img src={tech.url} alt="" />
                                    </div>
                                  ))
                                }
                            </div>
                         </div>
                    </div>
    
                  </SplideSlide>
                  ))
                }
              </Splide>
            
        </div>

  )
}

export default SliderProjects