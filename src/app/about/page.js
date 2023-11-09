'use client'
import Header from "../component/header";
import { useRouter } from 'next/router'

export default function About() {
    const router = useRouter()
    return (
        <>
            <Header/>
            <button className="back-btn" onClick={()=>{router.push('contact')}}>back</button>
            <div className="box">
                im about page
            </div>
        </>
    )
  }