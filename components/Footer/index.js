import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4'>
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por: Vinícius Moreira / <Link href="https://www.linkedin.com/in/vinicius-moreira-vm/"><a>LinkedIn</a></Link> / <Link href="https://github.com/viniciusmoreira"><a>GitHub</a></Link>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div>
     
    </div>
  )
}

export default Footer;