
import Link from 'next/link'

const Navbar = () => {
    return ( 

        <nav>
            <div className="logo">
                <h1>Trans World Networking</h1>
            </div>
            <Link href="/"><a>   Home page  </a></Link>
            <Link href="/about"><a>   About page  </a></Link>
            <Link href="/contact"><a>  Contact page</a></Link>
           
        </nav>
           
     );
}
 
export default Navbar;