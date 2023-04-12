import { Link, useLocation } from 'react-router-dom';

import SubscriptionsIcon from '../../assets/subscriptions.png';
import SubscriptionsFillIcon from '../../assets/subscriptions-fill.png';


const Subscriptions = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/subscriptions' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/subscriptions'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/subscriptions' 
                            ?
                            <img src={SubscriptionsFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={SubscriptionsIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/subscriptions' ? 'font-medium' : 'font-normal'}`}
                    >
                        Subscriptions
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Subscriptions