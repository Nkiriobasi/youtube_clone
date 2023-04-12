import { Link, useLocation } from 'react-router-dom';

import SettingsIcon from '../../assets/settings.png';

const Settings = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/setting' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/setting'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/setting' 
                            ?
                            <img src={SettingsIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={SettingsIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/setting' ? 'font-medium' : 'font-normal'}`}
                    >
                        Settings
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Settings