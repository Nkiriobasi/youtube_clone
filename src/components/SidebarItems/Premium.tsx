import { Link, useLocation } from 'react-router-dom';

import PremiumIcon from '../../assets/premium.png';
import PremiumFillIcon from '../../assets/premium-fill.png';

const Premium = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/premium' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/premium'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/premium' 
                            ?
                            <img src={PremiumFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={PremiumIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/premium' ? 'font-medium' : 'font-normal'}`}
                    >
                        Youtube Premium
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Premium