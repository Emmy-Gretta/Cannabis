
import Footer from '@/components/Footer/page'
import Order from '@/components/Order/page'
import About from '@/components/abou_t/page'
import Header from '@/components/header/page'
import Perks from '@/components/perks/page'
import Postheader from '@/components/postheader/page'
import Subscribe from '@/components/subscribe/page'
import Swiper from '@/components/swiper/page'
import Image from 'next/image'

export default function Home() {
  return (
<>
<section className=''>
<Header/>
<Postheader />
<About/>
<Swiper />
<Perks/>
<Order/>
<Subscribe/>
<Footer/>
</section>
</>

  )
}
