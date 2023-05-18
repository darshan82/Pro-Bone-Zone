import React,{useState} from 'react'
// import Logo from '../../assets/Group6.png'
import Logo from '../../assets/mainLogo.png'

export default function navbar() {
  
    const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <>
      {/* Mobile Navigation */}
      <nav className='bg-[#EAEFF8] pt py-4 md:hidden'>
        <div className='flex justify-between px-6'>
          <div>
            <img src={Logo} className='w-16' alt='logo' />
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className='flex items-center text-white focus:outline-none'
          >
            <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z'
              />
            </svg>
          </button>
        </div>
        {isNavOpen && (
          <div className='px-6 pt-3 '>
            <p className='cursor-pointer text-black text-center my-2 block'>Home</p>
            <p className='cursor-pointer text-black text-center my-2 block'>About</p>
            <p className='cursor-pointer text-black text-center my-2 block'>FAQ</p>
            <p className='cursor-pointer text-black text-center my-2 block'>Sponsors</p>
            <p className='cursor-pointer text-black text-center my-2 block'>Contact</p>
            <div className='flex justify-center '>
              <button className='bg-[#EC672C] px-8 py-2 w-44 rounded-sm text-white my-2 block'>
                Register
              </button>
            </div>
            <div className='flex justify-center'>
              <button className='border border-[#EC672C] px-8 py-2 w-44 rounded-sm text-[#EC672C] my-2 block'>
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex md:flex-row md:justify-between md:items-center md:px-16 md:py-3 lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-16 lg:py-3'>
        <div className=''>
          <img src={Logo} className='w-20' alt='logo' />
        </div>
        <div className='flex flex-row justify-center items-center space-x-5 text-white text-sm '>
          <p className='cursor-pointer text-black'>Home</p>
          <p className='cursor-pointer text-black'>About</p>
          <p className='cursor-pointer text-black'>FAQ</p>
          <p className='cursor-pointer text-black'>Sponsors</p>
          <p className='cursor-pointer text-black'>Contact</p>
          <button className='border border-[#EC672C] text-[#EC672C] px-8 py-2 rounded-sm cursor-pointer'>
            Login
          </button>
          <button className='bg-[#EC672C] px-8 py-2 rounded-sm'>Register</button>
        </div>
      </nav>
    </>
//     <>
//     <div className='sm:flex sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-3 md:hidden'>
//   <div className=''>
//     <img src={Logo} className='w-16'></img>
//   </div>
//   <button className='flex items-center text-white focus:outline-none'>
//     <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
//       <path
//         fill-rule='evenodd'
//         clip-rule='evenodd'
//         d='M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z'
//       />
//     </svg>
//   </button>
// </div>

//     <div className='hidden sm:hidden md:flex md:flex-row md:justify-between md:items-center md:px-16 md:py-3 lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-16 lg:py-3 '>
//     <div className=''>
//       <img src={Logo} className='w-20'></img>
//     </div>
//     <div className='flex flex-row justify-center items-center space-x-5 text-white text-sm '>
//       <p className='cursor-pointer'>Home</p>
//       <p className='cursor-pointer'>About us</p>
//       <p className='cursor-pointer'>FAQ</p>
//       <p className='cursor-pointer'>Sponcers</p>
//       <p className='cursor-pointer'>Contact</p>
//       <button className='border border-white px-8 py-2 rounded-sm cursor-pointer'>Login</button>
//       <button className='bg-[#4270FF] px-8 py-2 rounded-sm'>Register</button>
//     </div>
//     </div>
//     </>
  
  );
};



