import { PropsWithChildren } from 'react'
import Footer from '../Global/Footer'
import Navbar from '../Global/Navbar'

const NavFooterWrapper = ({children}: PropsWithChildren) => {
  return (
    <div>
        <Navbar/>
        <section className='min-h-screen'>
        {children}
        </section>
        <Footer/>
    </div>
  )
}

export default NavFooterWrapper
