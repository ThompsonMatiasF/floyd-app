import React from 'react'
import { Header, Body, Footer } from './'
import background from 'app/assets/images/background.png'

const Layout = () => (
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
    }}
  >
    <div className="container mx-auto">
      <div className="flex flex-col h-screen overflow-y-auto">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  </div>
)

export default Layout
