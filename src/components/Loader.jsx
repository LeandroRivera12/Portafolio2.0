import Spinner from 'react-bootstrap/Spinner';
import { Outlet, json } from 'react-router-dom';

function Loader() {


  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <Spinner animation="border" variant='primary'  role="status" className='d-flex'>
        </Spinner>
    </div>
  )
}

export default Loader;