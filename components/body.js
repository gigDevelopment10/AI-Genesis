import Image from "next/image";
import zoyabg from "../public/zoyabg.jpeg";
import sarah from "../public/sarah.jpeg";
import zoyap from "../public/zoyap.jpeg";
import hp from "../public/hp.png";
import helping_community from "../public/helping_community.webp";
import likes from "../public/likes.png";
import fake from "../public/fake.jpeg";
import mira from "../public/mira.jpeg";

import { BookmarkIcon, LinkIcon, UserGroupIcon, WindowIcon, InformationCircleIcon, ChevronDownIcon, } from "@heroicons/react/24/solid";
import { PhotoIcon , PlayCircleIcon, BriefcaseIcon, PencilSquareIcon, GlobeAmericasIcon, EllipsisHorizontalIcon} from "@heroicons/react/24/solid";

import { HandThumbUpIcon, ChatBubbleLeftEllipsisIcon, ArrowPathRoundedSquareIcon, PaperAirplaneIcon , CheckBadgeIcon,ShieldExclamationIcon} from "@heroicons/react/24/outline";

const news = [
  {
    "news": "Internet retails on new high..",
    "update":  "4h ago . 908 readers "
  },
  {
    "news": "State street to hire 50,000 ",
    "update":  "4d ago . 413 readers "
  },
  {
    "news": "Tech talent embrace Tech gig..",
    "update":  "5d ago . 300 readers "
  },

]

const options = ['About', 'Accessiblity', 'Help Center', 'Privacy & Terms', 'Ad Choices', 'Advertising', 'Business Services', 'Get the LinkedIn app', 'More'];

function Grid1() {
  return (
   <div className="mx-5">
     <div className='bg-white rounded-lg border '>
      <div className="relative">
        <Image src={zoyabg} className="w-full h-full rounded-t-lg" alt="Zoya Background" />
        <Image src={zoyap} className=" border absolute w-14 h-14 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/2 object-cover" alt="profile" />
      </div>
      <div className=" flex flex-col justify-center items-center mt-3 p-2 text-center">
        <h1 className="font-semibold mt-4">Zoya Jamadar</h1>
        <h3 className=" text-gray-500 text-sm"> Student at Vishwakarma Institute of Technology </h3>
      </div>
      <hr/>
      <h2 className="font-semibold text-sm  mt-2 px-3">Analytics & Tools</h2>
      <h3 className="text-xs text-gray-500 pb-2 px-3"> 148 post impressions</h3>
      <hr/>
      <div>
        <h3 className="text-xs text-gray-500 p-3">
          Access exclusive tools & insights
          <div className="flex  items-center gap-2">
          <LinkIcon className="h-5 w-5 text-yellow-500 my-1" />
          <h3 className="hover:underline hover:text-blue-600 text-black font-semibold">Network Smarter, Try Premium Free</h3>
          </div>
        </h3>
      </div>
      <hr/>
      <div className="flex items-center pb-2 px-1">
        <BookmarkIcon className="h-5 w-5 text-gray-500 mx-2 my-2" />
        <h3 className="text-xs text-black font-semibold "> My items</h3>
      </div>

    </div>
    <div className="bg-white border rounded-lg mt-3 p-2">
      <h3 className="text-xs m-2">Recent</h3>
      <div className="flex gap-x-2 items-center text-xs">
        <UserGroupIcon className="h-5 w-5 text-gray-500 mx-2 my-1" />
        <h2 className="text-gray-500 font-semibold">Machine Learning Com..</h2>
      </div>
      <div className="flex gap-x-2 items-center text-xs">
        <UserGroupIcon className="h-5 w-5 text-gray-500 mx-2 my-1" />
        <h2 className="text-gray-500 font-semibold">Greek for Greeks</h2>
      </div>
      <div className="flex gap-x-2 items-center text-xs">
        <WindowIcon className="h-5 w-5 text-gray-500 mx-2 my-1" />
        <h2 className="text-gray-500 font-semibold">E-Summit 2023 Incep...</h2>
      </div>
      <div className="flex gap-x-2 items-center text-xs">
        <UserGroupIcon className="h-5 w-5 text-gray-500 mx-2 my-1" />
        <h2 className="text-gray-500 font-semibold">Data Science Enthusi...</h2>
      </div>
    </div>
   </div>
    
  );
}

async function Grid2() {
  // const [feed, setFeed] = useState([]);
  // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //   setLoading(true);
    //   fetch('/api/feed')
    //       .then((res)=> res.json())
    //       .then((data) =>{
    //         setFeed(data);
    //         setLoading(false);
    //         console.log(data);
    //       })
    // }, []);
    const data = {
      "feed": [
        {
          "name" : "Mira Rose",
          "profile" : "Advanced Application engineer at AI-Genesis | HackerEarth",
          "posted" : "5 days ago",
          "connections" : "2nd",
          "post": {
            "content": "It is sad to see the community being harmed by the second wave of COVID-19. I am trying to help the community by providing dails meals during this epidemic. Please share this with your friends and family. Support in any form towards this cause is appreciated.",
            "image": "https://images.yourstory.com/cs/wordpress/2016/06/Kiran-Bedi.jpg?fm=png&auto=format",
            "hashtags": ["community", "covid19", "help", "india"],
            "likes": "53",
            "verified": true,
            "comments": 233,
            "reposts": 133
          }
      
        },
        
        {
        "name" : "Maria James",
        "profile" : "Bio-Engineer at Augutus Spaice University | Ex-Intern at NASA",
        "posted" : "4h",
        "connections" : "1st",
        "post": {
          "content": "In a groundbreaking expedition to the Andaman Islands, scientists have unveiled a truly remarkable discovery - a new specie, Ficticus bipedalis. This enigmatic creature has sent shockwaves through the scientific community, as initial reports suggest it is a rare hybrid of reptile and mammal. ",
          "image": "https://images.yourstory.com/cs/wordpress/2016/06/Kiran-Bedi.jpg?fm=png&auto=format",
          "hashtags": ["discovery", "research", "exploration", "species"],
          "likes": "43",
          "verified": false,
          "comments": 233,
          "reposts": 133
        }
    
      }
      
    ]
    }
  return (
    <div className='rounded-lg  mr-5 flex-none max-w-4xl '>
      <div className='bg-white border rounded-lg '>
        <div className=' p-3 flex flex-rows mt-3 mx-3'>
           <Image src={zoyap} className="h-12 w-12 rounded-full" alt="profile" />
           <input className="border-2 text-gray-600 border-gray-300 rounded-full p-2 px-5 ml-2 w-full focus:outline-none" placeholder="Start a post" />
        </div>
        <div className='grid grid-cols-4 justify-center mx-3 mb-3 text-sm  px-3'>
          <div className="flex items-center grid-span-1 text-gray-500 font-semibold">
            <PhotoIcon className="h-7 w-7 text-blue-500 mx-2 my-1" />
            <h3>Photo</h3>
          </div>
          <div className="flex items-center text-gray-500 font-semibold">
            <PlayCircleIcon className="h-7 w-7 text-green-600 mx-2 my-1" />
            <h3>Video</h3>
          </div>
          <div className="flex items-center text-gray-500 font-semibold">
            <BriefcaseIcon className="h-7 w-7 text-purple-400 mx-2 my-1" />
            <h3>Job</h3>
          </div>
          <div className="flex items-center text-gray-500 font-semibold">
            <PencilSquareIcon className="h-6 w-6 text-orange-500 mx-2 my-1" />
            <h3>Write Article</h3>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex flex-row justify-between items-center">
        <hr className="border-gray-300 w-full my-4" />
        <h3 className="text-xs ml-4 flex-shrink-0 flex text-gray-500 ">
          Sort by : <span className="font-semibold flex text-gray-800"> Top  <ChevronDownIcon className="h-4 w-4 text-gray-500 mx-1" /></span>
        </h3>
      </div>

      {/* Feed Section */}
      {data.feed.map((item, index) => {
        // console.log(item); // Invalid syntax in JSX, removed this line
        
        // Return JSX elements or expressions here
        return (
          <div key={index}>
            <div className="bg-white border rounded-xl p-3 max-w-2xl mb-4">
              <div className="flex  justify-between">
                <div className="flex gap-x-4">
                  {item.post.verified?
                  <Image src={mira} className="h-12 w-12 rounded-full object-cover   " alt="profile"/>:
                  <Image src={sarah} className="h-12 w-12 rounded-full object-contain   " alt="profile"/>}
                  <div className="text-xs text-gray-600">
                    <h3 className="text-sm font-semibold text-gray-800">{item.name} . <span className="font-normal text-gray-600">{item.connections}</span></h3>
                    <h3> {item.profile} </h3>
                    <h3 className="flex items-center"> <span>{item.posted} . Edited . </span> <GlobeAmericasIcon className="h-4 w-4 mx-1"/> </h3>
                  </div>
                </div>
                <EllipsisHorizontalIcon className="h-6 w-6 "/>
              </div>
              <div className="m-3 text-sm mx-2 ">
                {item.post.content}
                <h3>{item.post.hashtags.map((item, index)=>
                  <span  key={index} className="text-blue-700 font-semibold mx-1">#{item}</span>
                    )}
                </h3>
                {item.post.verified? 
                <div className="flex items-center justify-end text-green-700">
                  <CheckBadgeIcon className="h-8 w-8 text-green-700  mx-1"/>
                  <h3>This post is verified</h3>
                </div> : 
                <div className="flex items-center justify-end text-red-600">
                  <ShieldExclamationIcon className="h-6 w-6 text-red-600 mx-1"/>
                  <h3>This post is suspected fake!</h3>
                </div>}
                
              </div>
              <div className="bg-gray-400 mx-0 ">
                {item.post.verified?<Image src={helping_community} className="h-72 w-full object-cover " alt="profile"/>:<Image src={fake} className="h-72 w-full object-cover " alt="profile"/> }
              </div>
              <di className="flex items-center text-sm justify-between text-gray-600">
                <div className="flex items-center">
                <Image src={likes} height ={10} width={10} className="h-6 w-6  my-3 p-1 object-fill " alt=""/>
                {item.post.likes}
                </div>
                <span className="mx-2 justify-end">{item.post.comments} comments . {item.post.reposts} reposts</span>
              </di>
              <hr/>
              <div className="flex items-center ">
                <Image src={zoyap} className="h-8 w-8 rounded-full m-1" alt=""/>
                <ChevronDownIcon className="h-4 w-4 text-gray-500 mx-1 my-2"/>
                <div className="flex justify-between text-gray-600 text-sm font-semibold gap-x-14 px-5">
                  <div className="flex items-center">
                  <HandThumbUpIcon className="h-8 w-8 text-gray-500 mx-1 my-2"/>
                  <span>Like</span>
                  </div>

                  <div className="flex items-center">
                  <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-gray-500 mx-1 my-2"/>
                  <span>Comment</span>
                  </div>

                  <div className="flex items-center">
                  <ArrowPathRoundedSquareIcon className="h-8 w-8 text-gray-500 mx-1 my-2"/>
                  <span>Repost</span>
                  </div>

                  <div className="flex items-center">
                  <PaperAirplaneIcon className="h-8 w-8 text-gray-500 mx-1 my-2"/>
                  <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}


      
    </div>
  );
}

function Grid3() {
  return (
    <div className="mr-5 mx-2xl">
      <div className='bg-white border rounded-lg p-3'>
      <div className="flex justify-between">
      <h1 className="text-xl font-semibold m-1 ">LinkedIn News </h1>
      <InformationCircleIcon className="h-5 w-5 text-gray-700 mx-2 my-1" />
      </div>
      {news.map((item, index) => (
        <div key={index}>
          <li className="text-sm font-semibold m-1">{item.news}<br/><span className="text-xs font-normal text-gray-500 px-5">{item.update}</span></li>
         </div>
      ))}
      <hr/>
      <div className="m-1 flex items-center text-gray-500 text-sm font-semibold">
        Show more
        <ChevronDownIcon className="h-4 w-4 font-semibold mx-1 my-2"/>
      </div>
    </div>
    <div className="bg-white mt-2 border rounded-lg p-2 text-center">
      <div className="flex justify-end text-xs items-center gap-2">
        Ad <EllipsisHorizontalIcon className="h-6 w-6 "/>
      </div>
      <div className="flex flex-col justify-center text-sm text-gray-600 mx-auto">
        <span className="flex flex-col text-xs text-gray-500 m-4 ">opportunities are unlocking at your door</span>
        <div className="flex justify-center m-3"> {/* Added a wrapper div */}
          <Image src={hp} className="h-32 w-32" alt="company logo"/>
        </div>
        <span>Zoya, Hp is hiring!</span>
        <button className="border border-blue-600 rounded-3xl px-5 py-1 m-5 text-blue-600">Follow</button>
      </div>
    </div>
    <div className="text-center mt-5 max-w-lg p-2 text-gray-600">
      {options.map((item, index) => (
        <span key={index} className="text-xs mx-1 hover:underline hover:cursor-pointer hover:text-blue-600">{item}</span>
      ))}
    </div>
    <span className="text-xs text-gray-400 text-center mx-4 py-10">* This is a clone for demo purpose only </span>
    
    </div>
  );
}

const body = () => {
  return (
    <div className=' h-full w-full flex max-w-7xl mt-5 p-1 mx-auto justify-between '>
      <Grid1 className=" "/>
      <Grid2 className=" "/>
      <Grid3 className=" "/>
    </div>
  );
};

export default body;
