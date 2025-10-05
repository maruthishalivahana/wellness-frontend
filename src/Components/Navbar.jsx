import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate()
    return (
        <div className=' '>
            <ul className='flex items-center justify-between border h-30'>
                <Link to="/">   <li>home</li></Link>
                <Link to="/specialities"><li>specialities</li></Link>
                <li>doctors</li>
                <li>PatientInfo</li>
                <li>aboutus</li>
                <li>knowledgecenter</li>
            </ul>

        </div>

    )
}
