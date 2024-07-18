'use client'
import Image from 'next/image';
import { useTheme } from 'next-themes';

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
  <label className="grid cursor-pointer place-items-center mr-2">
  <input
    type="checkbox"
    value="forest"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
        <a className="btn">Contact Us</a>
      </div>
    </div>
  );
};

export default NavbarComponent;