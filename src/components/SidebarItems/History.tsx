import { Link, useLocation } from 'react-router-dom';

import HistoryIcon from '../../assets/history.png';
import HistoryFillIcon from '../../assets/history-fill.png';


const History = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/history' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/history'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/history' 
                            ?
                            <img src={HistoryFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={HistoryIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/history' ? 'font-medium' : 'font-normal'}`}
                    >
                        History
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default History