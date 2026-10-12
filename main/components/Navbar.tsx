
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'


const Navbar = () => {
   
  return (
    <nav className='navbar'>
        <Link href={'/'}>
            <div className="flex items-center gap-2.5 cursor-pointer">
                <Image src="/images/logo.svg" alt='logo' width={46} height={44}/>
            </div>
        </Link>
        <div className="flex items-center gap-8">
            <NavItems />
          <div className="flex items-center gap-3">
            <Show when="signed-out">
              <SignInButton>
                <button className="btn-signin">Sign In</button>
              </SignInButton>
              <SignUpButton>
                <button className="btn-primary">Sign Up</button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
