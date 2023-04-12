import { Link, useLocation } from 'react-router-dom';

import LiveIcon from '../../assets/live.png';
import LiveFillIcon from '../../assets/live-fill.png';

const Live = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/live' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/live'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/live' 
                            ?
                            <img src={LiveFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={LiveIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/live' ? 'font-medium' : 'font-normal'}`}
                    >
                        Live
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Live