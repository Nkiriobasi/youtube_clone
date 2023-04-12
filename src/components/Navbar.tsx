import Hamburger from '../assets/hamburger.png';
import YoutubeLogo from '../assets/Youtube-Logo.png';
import Mic from '../assets/mic.png';
import Search from '../assets/search.png';
import Create from '../assets/create.png';
import Notification from '../assets/notifications.png';
import ProfilePicture from '../assets/Profile-pic.png';


const Navbar = () => {
  return (
    <nav className="w-full bg-[#212121] flex items-center justify-between px-3 fixed top-0 left-0 z-50">
        <div className="inline-flex items-center">
            <img src={Hamburger} alt="hamburger" className='py-4 px-[10px]' />
            <img src={YoutubeLogo} alt="site logo" className='pt-4 pb-[12px] px-[10px]' />
        </div>

        <div className="max-w-[728px] min-w-[400px] w-[36%] h-10 space-x-1 flex items-center justify-center">
            <form className="w-full h-full flex items-center justify-center">
                <input 
                    type="text" 
                    className='flex-1 h-full p-2 bg-[#121212] placeholder:text-[#AAAAAA] rounded-l-xl' 
                    placeholder='Search' 
                />
                <button className="h-full w-[64px] bg-[#303030] inline-flex items-center justify-center rounded-r-xl">
                    <img src={Search} alt="/" />
                </button>
            </form>
            <span className="bg-black inline-block rounded-full p-2">
                <img src={Mic} alt="/" className='' />
            </span>
        </div>

        <div className=" inline-flex items-center justify-end">
            <span className="inline-block p-2 hover:bg-[#121212] cursor-pointer rounded-full">
                <img src={Create} alt="/" className='md:h-6 h-5 md:w-6 w-5' />
            </span>
            <span className="inline-block p-2 hover:bg-[#121212] cursor-pointer rounded-full">
                <img src={Notification} alt="/" className='md:h-6 h-5 md:w-6 w-5' />
            </span>
            <span className="inline-block p-2 hover:bg-[#121212] cursor-pointer rounded-full">
                <img src={ProfilePicture} alt="/" className="md:h-8 h-7 md:w-8 w-7" />
            </span>
        </div>
    </nav>
  )
}

export default Navbar