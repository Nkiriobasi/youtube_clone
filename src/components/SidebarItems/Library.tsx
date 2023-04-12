import { Link, useLocation } from 'react-router-dom';

import LibraryIcon from '../../assets/library.png';
import LibraryFillIcon from '../../assets/library-fill.png';


const Library = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/library' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/library'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/library' 
                            ?
                            <img src={LibraryFillIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={LibraryIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/library' ? 'font-medium' : 'font-normal'}`}
                    >
                        Library
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Library