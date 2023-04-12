import { Link, useLocation } from 'react-router-dom';

import GamingIcon from '../../assets/gaming.png';
import GamingFillIcon from '../../assets/gaming-fill.png';

const Gaming = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/gaming' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/gaming'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/gaming' 
                            ?
                            <img src={GamingFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={GamingIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/gaming' ? 'font-medium' : 'font-normal'}`}
                    >
                        Gaming
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Gaming