import 'animate.css'
import './Inicio.css'
import AnimationText from '../../components/aminationText/AnimationText'

const Inicio = () => {


  return (
     <div className='home__container'>
       <div className='home__description'>
         <div className='tex__container'>
           <AnimationText/>
         </div>
         <h1>Mi nombre es <b>Leandro</b></h1> 
        </div>
        <div className='img-conatiner'>
           <img src="/portada cv.jpg" alt="" />
        </div>
     </div>
     
    
  )
}

export default Inicio