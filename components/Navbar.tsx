import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar '>
      <div className="flexStart  flex-1 gap-10">
        <Link href="/">
         <Image 
          src = "/logo.svg"
          width ={115}
          height ={43}
          alt ="flexibble"
             />
          </Link>
          </div>
          <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
              ))}
            </ul>

            <div className='flexCenter gap-4'>
               { session ? (
                <>
                  UserPhoto
                 <Link href= "/create-project">
                    Share Work
                 </Link>
                </>
               ): (
                <AuthProviders/>
               )}
           
          
            </div>
            </nav>
           
              ) }


export default Navbar