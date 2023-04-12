import { Link, useLocation } from 'react-router-dom';

import Liked from '../../assets/liked.png';
import LikedFill from '../../assets/liked-fill.png';


const LikedVideos = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/liked-videos' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/liked-videos'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/liked-videos' 
                            ?
                            <img src={LikedFill} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={Liked} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/liked-videos' ? 'font-medium' : 'font-normal'}`}
                    >
                        Liked Videos
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default LikedVideos