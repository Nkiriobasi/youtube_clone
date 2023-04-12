import { Link, useLocation } from 'react-router-dom';

import HelpIcon from '../../assets/help.png';

const Help = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/help' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/help'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/help' 
                            ?
                            <img src={HelpIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={HelpIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/help' ? 'font-medium' : 'font-normal'}`}
                    >
                        Help
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Help