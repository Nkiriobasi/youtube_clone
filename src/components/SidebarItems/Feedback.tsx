import { Link, useLocation } from 'react-router-dom';

import FeedbackIcon from '../../assets/feedback.png';

const Feedback = () => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === '/feedback' ? 'bg-[#303030]' : null}`}
        >
            <Link to={'/feedback'} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        {locationPath.pathname === '/feedback' 
                            ?
                            <img src={FeedbackIcon} alt="/" className='w-full h-full' /> 
                            : 
                            <img src={FeedbackIcon} alt="/" className='w-full h-full' />
                        }
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === '/feedback' ? 'font-medium' : 'font-normal'}`}
                    >
                        Send feedback
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Feedback