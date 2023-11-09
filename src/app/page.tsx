
import Header from '../app/component/header'  
import Image from 'next/image'

export default function Home() {
  return (
  <>
    <Header/>
      <div className='box'>
            im home page
      </div>
      <div>
        <Image
          src="anarchy.jpg"
          alt="Landscape picture"
          width={800}
          height={500}
        />
        
      </div>
  </>
  )
}
