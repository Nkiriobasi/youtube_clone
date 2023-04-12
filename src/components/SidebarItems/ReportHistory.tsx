import { Link, useLocation } from 'react-router-dom';

import Report from '../../assets/report.png';
import ReportFill from '../../assets/report-fill.png';

const ReportHistory = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/report-history' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/report-history'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/report-history' 
                            ?
                            <img src={ReportFill} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={Report} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/report-history' ? 'font-medium' : 'font-normal'}`}
                    >
                        Report history
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default ReportHistory