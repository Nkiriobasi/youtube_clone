import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../../assets/home.png';
import HomeFillIcon from '../../assets/home-fill.png';


const Home = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/' ? 'bg-[#303030]' : null}`}
        >
            <Link to={''} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/' 
                            ?
                            <img src={HomeFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={HomeIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/' ? 'font-medium' : 'font-normal'}`}
                    >
                        Home
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Home