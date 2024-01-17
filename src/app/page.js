import Contact from '@/Component/HomeComponents/Contact/Contact'
import Facilities from '@/Component/HomeComponents/Facilities/Facilities'
import Features from '@/Component/HomeComponents/Features/Features'
import Hero from '@/Component/HomeComponents/Hero/Hero'

export default function Home() {
  return (
    <div className='my-10'>
      <Hero />
      <Features />
      <Facilities />
      <Contact />
    </div>
  )
}
