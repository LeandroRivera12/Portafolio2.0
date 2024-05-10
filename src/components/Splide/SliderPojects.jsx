import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './SliderProjects.css'


const Slider = () => {
  return (
   <div>
       <Splide aria-label="My Favorite Images" options={{
        speed: 2000,
        interval: 2000,
        type: 'loop',
       }}>
          <SplideSlide>
            <img width='150px' src="src/pages/Proyectos/images/weather app.png" alt="Image 1"/>
          </SplideSlide>
          <SplideSlide>
            <img src="src/pages/Proyectos/images/rick y morty api.jpg" alt="Image 2"/>
          </SplideSlide>
          <SplideSlide>
            <img src="src/pages/Proyectos/images/usercrudapp.png" alt="Image 2"/>
          </SplideSlide>
          <SplideSlide>
            <img src="src/pages/Proyectos/images/pokedexapp1.png" alt="Image 2"/>
          </SplideSlide>

        </Splide>
   </div>

  )
}

export default Slider