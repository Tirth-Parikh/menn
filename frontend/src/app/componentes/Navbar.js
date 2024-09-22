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
            <Link href='/Addcart'>

<li>
    <button className='btn SignInBtn'>cart
    </button>
</li>
</Link>
  <Link href='/Productdetail'>

<li>
    <button className='btn SignInBtn'>products Detailpage
    </button>
</li>
</Link>
  <Link href='/products'>

<li>
    <button className='btn SignInBtn'>Product
    </button>
</li>
</Link>
  <Link href='/'>

<li>
    <button className='btn SignInBtn'>Home
    </button>
</li>
</Link>
            

        </ul>

    )
}

