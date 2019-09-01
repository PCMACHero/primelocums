import React from 'react'
import '../socialbar/socialbar.css'

const SocialBar = ()=>{
    return (
        <div className="social-bar">
            <a href="https://www.linkedin.com/company/prime-locums/" target="_blank"><div className="icon in"></div></a>
            <a href="https://www.facebook.com/primelocums/" target="_blank"><div className="icon facebook"></div></a>
            <a href="https://twitter.com/LocumsPrime" target="_blank"><div className="icon twitter"></div></a>
            
        </div>
    )
}

export default SocialBar