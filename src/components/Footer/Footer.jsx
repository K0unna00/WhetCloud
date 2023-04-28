import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
        <div class="container col-6">
            <div class="footerCard col-md-4">
                <div>Quick Links</div>
                <Link href="">Company Overview</Link>
                <Link href="">Terms of Services</Link>
                <Link href="">Privacy Policy</Link>
            </div>
            <div class="footerCard col-md-4 text-right">
                <div>Contact</div>
                <Link href="">973-214-7959</Link>
                <Link href="">Email TO: <span>info@whetcloud.com</span> </Link>
                <Link href="">Our Location: <span>13391 Torrington Dr Frisco TX 75035 USA</span> </Link>
            </div>
        </div>
        <div class="copyright col-12">
            Copyright © WhetCloud 2016 - 20. All Rights Reserved
        </div>
    </footer>
  )
}
