import Image from 'next/image'
import Header from '@/components/header'
import Body from '@/components/body'

export default function Home() {
  return (
   <div className='bg-stone-100'>
     <Header/>
     <Body/>
   </div>
   
  )
}
