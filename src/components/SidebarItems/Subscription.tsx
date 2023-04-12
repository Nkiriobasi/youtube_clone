import { Link, useLocation } from 'react-router-dom';

interface MyProps {
    avatar: string
    name: string
}

const Subscription = ({ avatar, name }: MyProps) => {
    const locationPath = useLocation();

  return (
    <>
        <div 
            className={`w-full h-10 flex items-center rounded-xl hover:bg-[#303030] 
            ${locationPath.pathname === `/@` ? 'bg-[#303030]' : null}`}
        >
            <Link to={`/@`} className='text-white w-full h-full'>
                <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                    <span className="inline-block w-6 h-6">
                        <img src={avatar} alt="/" className='w-full h-full' />
                    </span>

                    <h3     
                        className={`text-sm ${locationPath.pathname === `/@` ? 'font-medium' : 'font-normal'}`}
                    >
                        {name}
                    </h3>
                </div>
            </Link>
        </div>
    </>
  )
}

export default Subscription