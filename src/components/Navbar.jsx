
import {Outlet, Link} from 'react-router';

const Navbar = () => {

  return (
    <div>
        <div className=''>
            <div className=''>
                <Link to="/"><h1>Logo</h1></Link>
            </div>

            <div className=''>

            </div>
        </div>
        <Outlet/>
    </div>
  )
}

export default Navbar;