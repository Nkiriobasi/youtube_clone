import { Link, useLocation } from 'react-router-dom';

import YourVideosIcon from '../../assets/yourVideos.png';


const YourVideos = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/your-videos' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/your-videos'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/your-videos' 
                            ?
                            <img src={YourVideosIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={YourVideosIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/your-videos' ? 'font-medium' : 'font-normal'}`}
                    >
                        Your Videos
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default YourVideos