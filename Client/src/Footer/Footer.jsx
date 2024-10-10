import React from 'react';
import { Link, redirect } from 'react-router-dom';
import { FaLinkedin, FaSquareWhatsapp, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  const links = [
    { title: 'Home', redirect: '/' },
    { title: 'Services', redirect: '/services' },
    { title: 'Industries', redirect: '/industries' },
    { title: 'Portfolio', redirect: '/portfolio' },
    { title: 'Insights', redirect: '/insights' },
    { title: 'About Us', redirect: '/about-us' },
  ];
  const services = ['Online Store', 'Web Scrapping', 'Dropshipping', 'UI/UX', 'Python', 'Social Media'];
  const socialLinks = [
    { icon: <FaLinkedin />, redirect: 'https://www.linkedin.com/company/itdoubt/posts/?feedView=all' },
    { icon: <FaSquareWhatsapp />, redirect: 'https://whatsapp.com/channel/0029VakVpSdBA1f4ED9khx1Z' },
    { icon: <FaSquareInstagram />, redirect: 'https://www.instagram.com/it__doubt/' },
    { icon: <FaSquareFacebook />, redirect: '' },
  ];

  return (
    <footer className="w-full text-white bg-[#000D44]">

      <div className="w-full flex justify-around py-16">


        {/* MAIN LINKS */}

        <div className="footer-col">
          <h1 className='p-medium text-lg'>Main Links</h1>
          <ul className=''>
            {links.map((item, index) => (
              <li
                className='text-sm mt-2'
                key={index}>
                <Link to={item.redirect}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>


        {/* SERVICES */}

        <div className="footer-col">
          <h1 className='p-medium text-lg'>Services</h1>
          <ul>
            {services.map((item, index) => (
              <li
                className='text-sm mt-2'
                key={index}>
                <Link to={`#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>


        {/* DETAILS */}

        <div className="footer-col w-1/4 text-sm">
          <h1 className='p-medium text-lg'>Email</h1>
          <p className='mt-2'>sales@exoticaitsolutions.com</p>
          <h1 className='p-medium text-lg mt-2'>Phone</h1>
          <p className='mt-2'>UK: +1 4385238809</p>
          <p className='mt-2'>India: +91 7018 152390</p>
          <h1 className='p-medium text-lg mt-2'>Address</h1>
          <p className='mt-2'>385 Edgevalley Road London, Ontario, N5v0c2</p>
        </div>


        {/* SOCIAL MEDIA */}

        <div className="footer-col text-sm">
          <h1 className='p-medium text-lg'>Social</h1>
          <ul className='flex text-3xl gap-2'>
            {socialLinks.map((item, index) => (
              <li
                className='mt-2'
                key={index}>
                <Link to={item.redirect}>
                  <span>{item.icon}</span>
                </Link>
              </li>
            ))}
          </ul>
          <h1 className='p-medium text-lg mt-2'>Legal Information</h1>
          <ul>
            <li className='mt-2'>
              <Link to="#">Terms of Service</Link>
            </li>
            <li className='mt-2'>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

      </div>

      <p className='text-center p-medium py-8 border-t border-gray-400/20'>Copyright© 2024. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;