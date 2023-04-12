import { Link, useLocation } from 'react-router-dom';

import WatchLaterIcon from '../../assets/watchLater.png';
import WatchLaterFillIcon from '../../assets/watchLater-fill.png';


const WatchLater = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/watch-later' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/watch-later'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/watch-later' 
                            ?
                            <img src={WatchLaterFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={WatchLaterIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/watch-later' ? 'font-medium' : 'font-normal'}`}
                    >
                        Watch Later
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default WatchLater