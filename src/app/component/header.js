import Link from "next/link";

export default function Header() {
    return (
        <header>
          <div className='logo'>LOGO</div>
          <nav>
              <Link className='nav-link' href="/">Home</Link>
              <Link className='nav-link' href="/about">About</Link>
              <Link className='nav-link' href="/product">Products</Link>
              <Link className='nav-link' href="/blog">Blog</Link>
              <Link className='nav-link' href="/contact">Contact</Link>
          </nav>
        </header>
    )
  }