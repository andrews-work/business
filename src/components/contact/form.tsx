import React, { useState } from 'react';

interface ContactFormProps {
  onSubmit: (email: string, message: string, service: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('websites');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, message, service);
  };

  return (
   <>
        <div className="flex items-center justify-center h-[80vh] w-full">
            <form onSubmit={handleSubmit} className="flex-col items-center jusitfy-center h-[70vh] w-[50vw]">

                {/* title */}
                <div className='flex items-center justify-center mt-[5vh] mb-10'>
                    <h1 className='text-4xl'>Bring your idea to life, get in touch now</h1>    
                </div>

                {/* email */}
                <div className='mx-6 my-6 flex items-center justify-center mt-4'>
                    <input type="email" id="email" placeholder='email:' className='mx-6 my-6 w-[30vw] h-[3vh] text-white border border-white bg-black text-2xl pl-4' value={email} onChange={handleEmailChange} required />
                </div>

                {/* radio boxes */}
                <div className='flex items-center justify-center mt-4'>
                    <div className='flex mx-4 items-center px-2'>
                        <input type="radio" id="websites" value="websites" checked={service === 'websites'} onChange={handleServiceChange} />
                        <label htmlFor="websites" className='flex px-1 text-lg'>Websites</label>
                    </div>
                    <div className='flex mx-4 items-center px-2'>
                        <input type="radio" id="data-analysis" value="data-analysis" checked={service === 'data-analysis'} onChange={handleServiceChange} />
                        <label htmlFor="data-analysis" className='flex px-1 text-lg'>Data Analysis</label>
                    </div>
                    <div className='flex mx-4 items-center px-2'>
                        <input type="radio" id="hosting" value="hosting" checked={service === 'hosting'} onChange={handleServiceChange} />
                        <label htmlFor="hosting" className='flex px-1 text-lg'>Hosting</label>
                    </div>
                    <div className='flex mx-4 items-center px-2'>
                        <input type="radio" id="web-scraping" value="web-scraping" checked={service === 'web-scraping'} onChange={handleServiceChange} />
                        <label htmlFor="web-scraping" className='flex px-1 text-lg'>Web Scraping</label>
                    </div>
                    <div className='flex mx-4 items-center px-2'>
                        <input type="radio" id="mobile-apps" value="mobile-apps" checked={service === 'mobile-apps'} onChange={handleServiceChange} />
                        <label htmlFor="mobile-apps" className='flex px-1 text-lg'>Mobile Apps</label>
                    </div>
                </div>

                {/* message */}
                <div className='mx-6 my-6 flex items-center justify-center mt-4'>
                    <textarea id="message" placeholder='message' className='mx-6 my-6 w-[30vw] h-[30vh] text-white text-2xl py-4 px-4 border border-white bg-black' value={message} onChange={handleMessageChange} required></textarea>
                </div>
               
                {/* submit */}
                <div className='mx-6 my-6 flex items-center justify-center mt-4'>
                    <button type="submit" className='flex w-[30vw] h-[3vh] text-xl items-center justify-center mt-4 border border-white'>Submit</button>
                </div>
            </form>
        </div>
   </>
  );
};

export default ContactForm;
