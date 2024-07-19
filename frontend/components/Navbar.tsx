'use client'
import Image from 'next/image';
import { useTheme } from 'next-themes';
import ContactFormPopup from './modals/ContactFormPopup';
import { ThemeToggle } from '@/app/ThemeToggle';

const NavbarComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow z-20">
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>Life Insurance</a></li>
            <li><a>Mutual Funds</a></li>
            <li><a>Housing Loans</a></li>
          </ul>
        </li>
        <li><a>Who are we?</a></li>
        <li><a>Testimonials</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl" href='/'><div className='hidden sm:block'><Image src="/assets/logo-nobg.png" alt="OpulenceFin" width={50} height={50} /></div>   {/*className='bg-slate-300 p-1 rounded-2xl' */}
    OpulenceFin</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Who are we?</a></li>
    <li><a>Testimonials</a></li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 z-20">
            <li><a>Life Insurance</a></li>
            <li><a>Mutual Funds</a></li>
            <li><a>Housing Loans</a></li>
          </ul>
        </details>
      </li>

    </ul>
  </div>
  <div className="navbar-end">
    <div className="hidden lg:block mr-4">
  <ThemeToggle/>
</div>
        <a className="btn"><label htmlFor="contact-modal">Contact Us</label></a>
      </div>
      <ContactFormPopup />
    </div>
  );
};

export default NavbarComponent;