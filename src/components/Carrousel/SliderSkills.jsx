import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import './SliderSkills.css'





const SliderSkills = () => {
 
 return (
        
    <div>
       <Splide aria-label="My Favorite Images" options={{
        interval: 2000,
        type: 'loop',
       }}>
          <SplideSlide>
            <img src="src/components/Carrousel/images/html5.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="src/components/Carrousel/images/css3.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="src/components/Carrousel/images/JavaScript.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="src/components/Carrousel/images/react.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="src/components/Carrousel/images/nodejs.png" alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src="src/components/Carrousel/images/git.png" alt="" />
          </SplideSlide>
          
        </Splide>
  </div>
    );
}

export default SliderSkills