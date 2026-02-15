import React from 'react'
import Hero from '../components/Hero'
import Exp from '../components/Exp'
import Cta from '../components/Cta'

export default function Home() {
  return (
    <>
        <Hero page="Home" header="hula" p="Where bold ideas meet sustainable technology, shaping impact at the intersection of nature and innovation." imgSrc="gif2.gif"/>
        <Exp/>
        <Cta/>
    </>
  )
}
