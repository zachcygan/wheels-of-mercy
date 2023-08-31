'use client'
import FrequentlyAskedQuestions from '../../components/frequentlyAskedQuestions'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Wheels of Mercy - Frequently Asked Questions',
    description: 'Frequently Asked Questions about Wheels of Mercy'
}

export default function Faq() {
    return (
        <div className=''>
            <FrequentlyAskedQuestions />
        </div>
    )
}