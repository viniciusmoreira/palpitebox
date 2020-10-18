import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({children}) => {
  return (
      <div className="h-screen flex flex-col">
        <Header/>
        <div className='container mx-auto flex-1'>
          {children}
        </div>
        <Footer />
      </div>
  )
}

export default Layout