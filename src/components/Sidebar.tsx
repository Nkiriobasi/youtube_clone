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
                <div className="pt-2 my-2 border-t border-solid space-y-2 border-[#303030]">
                    <Settings/>
                    <ReportHistory/>
                    <Help/>
                    <Feedback/>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar