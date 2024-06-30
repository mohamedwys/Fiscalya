/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact= () => {
const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (form.current) {
        emailjs
          .sendForm('service_g87576u', 'template_rcb54us', form.current, {
            publicKey: 'l8S3qWanbmpjjZmtx',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      }
    };

    return (
    <div className="mt-12 bg-gradient-to-r from-[#6A82FB] to-[#CB837F] p-6 rounded-md">
          <h3 className="text-xl font-bold text-white text-center">Join our network of professionals.</h3>
          <form className="mt-6 flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text" name="user_name"
                placeholder="First Name"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
              <input
                type="text" name="user_name"
                placeholder="Last Name"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone" name="user_phone"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
              <input
                type="email" name="user_email"
                placeholder="Email"
                className="bg-gray-100 px-4 py-2 rounded-md flex-1"
              />
            </div>
            <textarea
              name="message"
              placeholder="What can we help you with?"
              rows={4}
              className="bg-gray-100 px-4 py-2 rounded-md"
            ></textarea>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" type="submit" value="Send">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BCFD4C_0%,#004AAD_50%,#BCFD4C_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-200 px-6 py-1 text-sm font-bold text-gray-700 backdrop-blur-3xl">
                    Apply Now
                  </span>
                </button>
          </form>
        </div>
    )
}
    export default Contact;