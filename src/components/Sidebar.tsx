// import ArrowTop from '../assets/arrow-top.png';
import ArrowBottom from '../assets/arrowBottom.png';
import UserAvatar from '../assets/User-Avatar.png';

import Home from './SidebarItems/Home';
import Explore from './SidebarItems/Explore';
import Subscriptions from './SidebarItems/Subscriptions';
import Library from './SidebarItems/Library';
import History from './SidebarItems/History';
import YourVideos from './SidebarItems/YourVideos';
import WatchLater from './SidebarItems/WatchLater';
import LikedVideos from './SidebarItems/LikedVideos';
import ShowMoreOrFewer from './SidebarItems/ShowMoreOrFewer';
import Subscription from './SidebarItems/Subscription';
import Premium from './SidebarItems/Premium';
import Gaming from './SidebarItems/Gaming';
import Live from './SidebarItems/Live';
import Sports from './SidebarItems/Sports';
import Settings from './SidebarItems/Settings';
import ReportHistory from './SidebarItems/ReportHistory';
import Help from './SidebarItems/Help';
import Feedback from './SidebarItems/Feedback';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  return (
    <aside className="xl:w-[240px] h-full fixed top-0 left-0 bg-[#212121] overflow-auto">
        <div className="mt-[56px]"></div>
        <div className="flex flex-col items-start justify-start">
            <div className="w-full p-3">
                {/* section 1 */}
                <div className='space-y-2'>
                    <Home/>
                    <Explore/>
                    <Subscriptions/>
                </div>

                {/* section 2 */}
                <div className="pt-2 mt-2 border-t border-solid space-y-2 border-[#303030]">
                    <Library/>
                    <History/>
                    <YourVideos/>
                    <WatchLater/>
                    <LikedVideos/>

                    <ShowMoreOrFewer icon={ArrowBottom} text='Show more' />
                </div>


                {/* SUBSCRIPTIONS */}
                <div className="pt-2 mt-2 border-t border-solid space-y-2 border-[#303030]">
                    <h3 className="font-bold px-2.5 text-sm text-[#AAAAAA]">SUBSCRIPTIONS</h3>

                    <Subscription avatar={UserAvatar} name='James Gouse' />
                    <Subscription avatar={UserAvatar} name='Alan Cooper' />
                    <Subscription avatar={UserAvatar} name='Marcus Levin' />

                    <ShowMoreOrFewer icon={ArrowBottom} text='Shore 13 more' />
                </div>


                {/* MORE FROM YOUTUBE */}
                <div className="pt-2 mt-2 border-t border-solid space-y-2 border-[#303030]">
                    <h3 className="font-bold px-2.5 text-sm text-[#AAAAAA]">MORE FROM YOUTUBE</h3>

                    <Premium/>
                    <Gaming/>
                    <Live/>
                    <Sports/>
                </div>


                {/* MORE */}
                <div className="pt-2 mt-2 border-t border-solid space-y-2 border-[#303030]">
                    <Settings/>
                    <ReportHistory/>
                    <Help/>
                    <Feedback/>
                </div>

                {/* YOUTUBE LINKS */}
                <div className="mt-2 pt-2 border-t border-solid border-[#303030]">
                    <span className="pt-2 px-2.5 flex items-center justify-start flex-wrap text-[#AAAAAA]">
                        <Link to={'/about'} className='inline text-[13px] mr-2'>About</Link>
                        <Link to={'/about/press'} className='inline text-[13px] mr-2'>Press</Link>
                        <Link to={'/about/copyright'} className='inline text-[13px] mr-2'>Copyright</Link>
                        <Link to={'/contact_us'} className='inline text-[13px] mr-2'>Contact Us</Link>
                        <Link to={'/creators'} className='inline text-[13px] mr-2'>Creator</Link>
                        <Link to={'/ads'} className='inline text-[13px] mr-2'>Advertise</Link>
                        <span className='inline text-[13px] mr-2'>Developers</span>
                    </span>
                    
                    <span className="pt-4 px-2.5 flex items-center justify-start flex-wrap text-[#AAAAAA]">
                        <Link to={'/terms'} className='inline text-[13px] mr-2'>Terms</Link>
                        <Link to={'/privacy'} className='inline text-[13px] mr-2'>Privacy</Link>
                        <Link to={'/about/policies'} className='inline text-[13px]'>Policy & Safety</Link>
                        <span className='inline text-[13px] mr-2'>How YouTube works</span>
                        <Link to={'/new'} className='inline text-[13px] mr-2'>Test new features</Link>
                    </span>

                    <span className="w-full inline-block pt-4 px-2.5 text-[#717171] text-[13px]">
                        <span>© 2023 Google LLC</span>
                    </span>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar