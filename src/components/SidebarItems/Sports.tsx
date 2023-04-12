import { Link, useLocation } from 'react-router-dom';

import SportsIcon from '../../assets/sports.png';
import SportsFillIcon from '../../assets/sports-fill.png';

const Sports = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/sports' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/sports'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/sports' 
                            ?
                            <img src={SportsFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={SportsIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/sports' ? 'font-medium' : 'font-normal'}`}
                    >
                        Sports
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Sports