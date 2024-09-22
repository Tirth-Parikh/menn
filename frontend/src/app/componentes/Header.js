import Image from 'next/image'
import logo from '../image/logo.png'
import '../styles/header.css'

import Link from 'next/link'
import { Navbar } from './Navbar'
export const Header = () => {
  return (
<>
<header className='header'>
    <div>
        {/* <img src={logo} alt='logo'/> */}
        <Link href='/'>
        <Image
      src={logo}
      alt="Picture of the author"
      width={100} 
      height={50}
      // style={{boxShadow: '0 0 30px 0px #636363' }}
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
        </Link>
     
    </div>
    <nav className='navbar'>
        <Navbar/>
    </nav>
</header>

</>




)
}
