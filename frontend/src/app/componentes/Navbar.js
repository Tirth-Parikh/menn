import Link from 'next/link'
import '../styles/header.css'
export const Navbar = () => {
    return (

        <ul className="navbar">
            <Link href='/Login'>
                <li>

                    <button className='btn LogInBtn'>Login
                    </button>

                </li></Link>
            <Link href='/SignUp'>

                <li>
                    <button className='btn SignInBtn'>Sign Up
                    </button>
                </li>
            </Link>
            

        </ul>

    )
}

