import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { watchImg, rightImg } from '../utils'
import VideoCarrousel from './VideoCarousel'

const Highlights = () => {

    useGSAP(()=>{
        gsap.to('#title',{
            opacity:1,
            y:0
        })
        gsap.to('.link',{
            opacity:1,
            y:0,
            duration:1,
            stagger:0.25
        })
    },[])
  return (
    <section className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className="screen-max-width">
            <div className='w-full justify-between items-end mb-12 md:flex'>
                <h1 className='section-heading' id='title'>Get the hignlights</h1>
                <div className="flex flex-wrap items-end gap-5">
                    <p className='link'>Watch the Features
                        <img src={watchImg} alt="watch" className='ml-2' />
                    </p>
                    <p className='link'>Get online courses
                        <img src={rightImg} alt="right" className='ml-2' />
                    </p>
                </div>
            </div>
            <VideoCarrousel />
        </div>
    </section>
  )
}

export default Highlights