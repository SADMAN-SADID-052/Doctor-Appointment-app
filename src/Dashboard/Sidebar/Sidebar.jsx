import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FaHome } from "react-icons/fa";
import { AiOutlineBars } from 'react-icons/ai'





import { Link } from 'react-router'


// import logo from '../../../assets/images/logo-flat.png'


import PatientMenu from './Menu/PatientMenu';
import DoctorsMenu from './Menu/DoctorsMenu';
import MenuItem from './Menu/Menuitem';
import useAuth from '../../Hooks/useAuth';
import useRole from '../../Hooks/useRole';
const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading]= useRole()

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img className='w-5'
                // className='hidden md:block'
                src='https://cdn-icons-png.freepik.com/256/7472/7472791.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid'
                alt='logo'
               
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-red-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-green-300 mx-auto'>
              <Link to='/'>
                <img className="w-20" src=" https://cdn-icons-png.freepik.com/256/11875/11875514.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid"
                  alt='logo'
                  width='100'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              {/*  Menu Items */}

             {(role === 'patient') && <PatientMenu />}
             {(role === 'doctor') &&  <DoctorsMenu />}
             
              
       

          
              
            </nav>
          </div>
        </div>

        <div>
          <hr />

        
          <MenuItem
            icon={FaHome}
            label='Back To Home'
            address='/'
          />
       
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar