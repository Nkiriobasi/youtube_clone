import { Link, useLocation } from 'react-router-dom';

import ExploreIcon from '../../assets/explore.png';
import ExploreFillIcon from '../../assets/explore-fill.png';


const Explore = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/explore' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/explore'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/explore' 
                            ?
                            <img src={ExploreFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={ExploreIcon} alt="/" className='w-full h-full' />
                        }
                    </span>
 
                    <h3     
                        className={`text-sm ${locationPath.pathname === '/explore' ? 'font-medium' : 'font-normal'}`}
                    >
                        Explore
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Explore