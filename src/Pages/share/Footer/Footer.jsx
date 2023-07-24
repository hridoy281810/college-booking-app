import React from 'react';
import { FaFacebook, FaGraduationCap, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='mt-12'>
      <div>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto overflow-x-hidden ">
            <div className='md:inline-flex  justify-center items-center '>

              <FaGraduationCap className='text-[#ff7350]' size={30} />
              <Link to='/'><p className="text-[12px
     ] md:normal-case md:text-xl font-semibold md:font-bold text-[#ff7350]">  AcademiaPulse</p></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold mb-3">About Us</h4>
                <p> AcademiaPulse, From our website you can apply for studying in various colleges and universities in any country and outside the country, you can take admission and you can know the details about the college or the university.</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold mb-3">Our Programs</h4>
                <ul>
                  <li>Home</li>
                  <li>College</li>
                  <li>Admission</li>
                  <li>My College</li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold mb-3">Contact Us</h4>
                <p>123 AcademiaPulse, Dhaka, Bangladesh</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@musicmasters.com</p>
                <div className="flex justify-center md:justify-start mt-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 py-2">
            <div className="container mx-auto">
              <p className="text-center text-sm">&copy; 2023 AcademiaPulse. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;