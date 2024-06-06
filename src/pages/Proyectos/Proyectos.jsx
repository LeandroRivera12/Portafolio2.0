import './Proyectos.css'
import SliderProjects from '../../components/Splide/SliderProjects'

const Proyectos = () => {

  return (
    <div className='porjects__container'>
      <div className='projects__description'>
        <h1 className='projects__title'>Proyectos</h1>
        <p>Como estudiante de programación, cuento con <br/>  experiencia
          desarrollando algunos proyectos del lado del <br /> frontend, asi como 
          tambien del backend. <br/> Aplicando conceptos básicos, como peticiones
          asíncronas,<br/> renderización condicional de los datos, del lado del backend, <br/> 
          creando apis desde cero, con node, sequelize, y express. <br/>Algunos 
          de estos proyectos son:
        </p>
        <ul className='projects__list'>
          <li>Weather App</li>
          <li>Api de rick y morty</li>
          <li>User Crud App</li>
          <li>Pokedex App</li>
        </ul>
      </div>
      <div className='projects__slider'>
        <SliderProjects/>
      </div>
    </div>
  )
}

export default Proyectos