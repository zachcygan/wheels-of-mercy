'use client'
import OurStory from '../../components/ourStory'
import AboutUs from '../../components/aboutUs'
import Founded from '../../components/founded'

export default function About() {
    return (
        <div className='bg-transparent'>
            <AboutUs />
            <OurStory />
            <Founded />
        </div>
    )
}
