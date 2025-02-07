import About from '@/components/about'
import Active from '@/components/active'
import Categroy from '@/components/categroy'
import Chefs from '@/components/Chefs'
import Chosse from '@/components/Chosse'
import Client from '@/components/Client'
import Home from '@/components/Home'
import MenuSection from '@/components/menu'
import Taste from '@/components/Taste'
import React from 'react'

function page() {
  return (
    <div>
      
     <Home/>
      <About/>
  <Categroy/>
     <Taste />
   <Chosse/>
    <MenuSection/>
     <Chefs/>
      <Client /> 
      <Active />
    
   
    </div>
  )
}

export default page
