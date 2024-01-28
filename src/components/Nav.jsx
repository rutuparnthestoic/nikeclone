import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className=' padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between max-container items-center'>
            <a href='/'>
                <img 
                src={headerLogo}
                alt='Logo'
                width={130}
                height={29}
            />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
             {navLinks.map((link) => {
                return(
                    <li key={link.label}>
                        <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-700 hover:text-coral-blue'>{link.label}</a>
                    </li>
                )
             })}
            </ul>
            <div className='max-lg:block hidden'>
                <img 
                 src={hamburger}
                 alt='hamburger'
                 width={25}
                 height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav