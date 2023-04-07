import React from 'react'
import {Navbar} from '../navigation';
import {Footer} from '../footer';
import {Content} from '../content';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export {LandingPage};