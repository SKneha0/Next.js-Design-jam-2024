import React from 'react';
import Image from 'next/image';
import Path from '@/Image/choess.1.png'
import Link from "next/link"
function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-orange-600 pb-8">
          <h2 className="text-lg md:text-2xl text-orange-500 font-semibold">
            Still You Need Our Support?
          </h2>
          <p className="text-sm text-gray-400 md:mt-0">
            Don’t hesitate to contact us. It’s pretty easy.
          </p>
          <div className="mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-md text-black"
            />
            <Link href="/404error">
            <button className="bg-orange-500 px-4 py-2 rounded-md text-black ml-2">
              Subscribe Now
            </button>
            </Link>

          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap mt-8 text-sm">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 ">
              Corporate clients and leisure travelers have been relying on GroundLink for dependable,
              safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="mt-4">
              <h4 className="text-orange-500">Opening Hours-and-days</h4>
              <p>Mon - Sat: 5:00pm - 1:30am</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Useful Links</h3>
            <ul className="text-gray-400">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Help?</h3>
            <ul className="text-gray-400">
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="w-full md:w-1/4">
            <h3 className="text-3xl font-bold mb-4">Recent Posts</h3>
            <div className="flex items-start mb-4">
              <Image
                src={Path}
                alt="img"
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Is fast food good for your body?</h4>
                <p className="text-gray-400 text-xs">January 30, 2022</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <Image
                src={Path}
                alt='img'
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Is fast food good for your body?</h4>
                <p className="text-gray-400 text-xs">January 30, 2022</p>
              </div>
            </div>
            <div className="flex items-start">
              <Image
                src={Path}
                alt="img"
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Change your food habits today!</h4>
                <p className="text-gray-400 text-xs">January 28, 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center mt-8 text-gray-400 text-sm">
          <p>© 2022 by Ayemo. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
