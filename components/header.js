import { HomeIcon, UserIcon, BriefcaseIcon, ChatBubbleOvalLeftIcon, BellIcon, ChevronDownIcon, Squares2X2Icon, CalendarDaysIcon  } from "@heroicons/react/24/solid"
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import zoyap from "../public/zoyap.jpeg";
import Image from "next/image";
import linkedin from "../public/linkedin.png";


const header = () => {
  return (
    <div className='bg-white h-auto shadow-sm '>
    <div className='grid grid-cols-3 p-1 max-w-6xl mx-auto justify-between'>
      <div className="flex flex-rows justify-start px-5 items-center ">
       <Image src={linkedin} width={10} height={10} className="h-8 w-8" alt="profile"/>
       <div className="bg-gray-100 rounded-md focus:outline-none px-2 ml-2 items-center flex h-8 ">
         <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mx-2 my-1" />
        <input type="text" placeholder="Search" className="bg-gray-100 focus:outline-none"/>
       </div>
       
      </div>
      <div className="text-gray-600 text-xs text-center flex flex-row gap-10 py-1 items-end justify-between mx-4 w-max grid-span-2">
        <div className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6" />
          <h3 className="text-center">Home</h3>
        </div>

        <div className="flex flex-col items-center">
          <UserIcon className="h-6 w-6" />
          <h3 className="text-center">My Network</h3>
        </div>

        <div className="flex flex-col items-center">
          <BriefcaseIcon className="h-6 w-6" />
          <h3 className="text-center">Jobs</h3>
        </div>

        <div className="flex flex-col items-center">
          <ChatBubbleOvalLeftIcon className="h-6 w-6" />
          <h3 className="text-center">Messaging</h3>
        </div>

        <div className="flex flex-col items-center">
          <BellIcon className="h-6 w-6" />
          <h3 className="text-center">Notifications</h3>
        </div>

        <div className="flex flex-col items-center">
          <Image src={zoyap} className='h-6 w-6 p-0.5 rounded-full' alt="Zoyap" />
          <h3 className="text-center flex items-center gap-1">Profile <ChevronDownIcon className="h-2 w-2"/></h3>
        </div>

       <div className="gap-1 flex flex-rows">
        <div className="items-center border-l-2 px-2 flex flex-col justify-center">
            <Squares2X2Icon className="h-6 w-6" />
            <h3 className="text-center flex items-center ">For Business<ChevronDownIcon className="h-2 w-2 mx-1"/></h3>
            </div>

            <div className="flex flex-col justify-center items-center">
            <CalendarDaysIcon className="h-6 w-6 " />
            <h3 className="text-center flex items-center">Post a job for free  <ChevronDownIcon className="h-2 mx-1 w-2"/></h3>
            </div>
       </div>
        
        
      </div>
    </div>
    
  </div>
  )
}

export default header
