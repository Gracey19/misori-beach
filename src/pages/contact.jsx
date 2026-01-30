import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const form = useRef();

  // --- Scroll Effect for Navbar ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- EmailJS Send Function ---
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Remember to put your real IDs here!
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          alert("Success! Your message has been sent to Misori Beach. ✨");
          e.target.reset();
      }, (error) => {
          alert("Failed to send message. Please try again later. ❌");
      });
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#FDFBF0] min-h-screen font-inter">
      
      {/* --- QUARTER-SCREEN OVERLAY MENU --- */}
      <div 
        className={`fixed top-0 right-0 h-full w-[50%] md:w-1/4 z-[100] bg-terracotta shadow-2xl transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-2 mt-1.5 right-2 text-pearl text-[12px] text-lg font-light hover:text-oxblood"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-4 text-center mt-8 ">
          {['Home', 'Accommodations', 'Dining', 'The Lake', 'Contact us'].map((item) => {
            let myHref = "";

            if (item === 'Home') {
              myHref = "/";
            } else if (item === 'Accommodations') {
              myHref = "/accommodations";
            } else if (item === 'The Lake') {
              myHref = "/lake";
            } else {
            // This handles Dining and Contact Us
              myHref = `/#${item.toLowerCase().replace(' ', '')}`;
            }
            return (
              <a
                key={item}
                href={myHref}
                onClick={() => setIsMenuOpen(false)}
                className="font-inter text-[8px] uppercase tracking-[0.4em] text-pearl font-normal hover:text-oxblood transition-colors duration-300"
              >
                {item}
              </a>
             );
           })}
          </nav>
        </div>

      {/* --- NAVIGATION --- */}
      <nav 
        className={`flex px-6 md:px-12 transition-all duration-300 fixed top-0 left-0 w-full z-50 ease-in-out ${
          isScrolled ? ' py-4' : 'bg-transparent py-8'
        }`}
        style={isScrolled ? {
          backgroundColor: 'rgba(74, 16, 16, 0.9)', 
          backdropFilter: 'blur(12px)',           
          WebkitBackdropFilter: 'blur(12px)',      
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
        } : {}}
      >
        <div className="flex ml-auto gap-4 md:gap-8 text-[8px] md:text-sm font-bold text-oxblood items-start -mt-2">
          {/* Change " to {` and " to `} */}
         <ul className={`flex flex-row gap-2 md:gap-8 whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-pearl' : 'text-oxblood'}`}>
            <li><a href="/accommodations" className="hover:opacity-70">Accommodations</a></li>
            <li><a href="/dining" className="hover:opacity-70">Dining</a></li>
            <li><a href="/lake" className="hover:opacity-70">The Lake</a></li>
            <li><a href="/contact" className="hover:opacity-70">Contact us</a></li>
          </ul>
          <div 
            onClick={() => setIsMenuOpen(true)} 
            className="cursor-pointer group flex flex-col justify-center items-center -mt-4 w-10 h-10"
          >
            <div className={`w-4 h-0.5 mb-0.5 transition-all ${isScrolled ? 'bg-pearl' : 'bg-oxblood'}`}></div>
            <div className={`w-4 h-0.5 mb-0.5 transition-all ${isScrolled ? 'bg-pearl' : 'bg-oxblood'}`}></div>
            <div className={`w-4 h-0.5 transition-all ${isScrolled ? 'bg-pearl' : 'bg-oxblood'}`}></div>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTACT & ENQUIRY SECTION --- */}
      <section id="make-enquiry" className="bg-[#FDFBF0] py-20 px-8 md:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-cormorant font-bold text-[12px] md:text-[50px] text-oxblood uppercase tracking-[0.1em] mb-16 leading-tight">
            WE WOULD LOVE TO CONNECT WITH YOU
          </h1>
          <div className="relative group pointer-events-auto">
            <a 
              href="#booking" 
              className="w-32 inline-flex justify-center border-2 border-oxblood text-oxblood py-1 text-[12px] font-medium uppercase tracking-widest hover:bg-oxblood/60 hover:text-pearl transition-all duration-300 mb-16"
            >
              BOOK A ROOM
            </a>
          </div>

          <hr className="border-t-[1px] border-oxblood/20 w-full mb-16" />

          <section className="w-full h-[450px] bg-gray-100 relative mb-12">
            <iframe
              title="Misori Beach Resort Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.817983062397!2d37.90361807516005!3d-0.02355899997620566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827816150912c97%3A0x99a981914091d344!2sMisori%20beach%20resort!5e0!3m2!1sen!2ske!4v1769760434945!5m2!1sen!2ske"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* LEFT SIDE: INQUIRY FORM (Based on your PDF) */}
            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-oxblood text-[10px] uppercase font-bold mb-1">First Name</label>
                    <input name="first_name" type="text" required className="bg-transparent border-b border-oxblood/40 py-2 focus:outline-none focus:border-oxblood" />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-oxblood text-[10px] uppercase font-bold mb-1">Last Name</label>
                    <input name="last_name" type="text" required className="bg-transparent border-b border-oxblood/40 py-2 focus:outline-none focus:border-oxblood" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-oxblood text-[10px] uppercase font-bold mb-1">Email</label>
                  <input name="user_email" type="email" required className="bg-transparent border-b border-oxblood/40 py-2 focus:outline-none focus:border-oxblood" />
                </div>

                <div className="flex flex-col">
                  <label className="text-oxblood text-[10px] uppercase font-bold mb-1">Subject</label>
                  <input name="subject" type="text" className="bg-transparent border-b border-oxblood/40 py-2 focus:outline-none focus:border-oxblood" />
                </div>

                <div className="flex flex-col">
                  <label className="text-oxblood text-[10px] uppercase font-bold mb-1">Message</label>
                  <textarea name="message" rows="4" required className="bg-transparent border-b border-oxblood/40 py-2 focus:outline-none focus:border-oxblood resize-none"></textarea>
                </div>

                <button 
                  type="submit"
                  className="bg-oxblood text-pearl py-4 px-12 uppercase tracking-[0.2em] text-xs font-bold hover:bg-terracotta transition duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* RIGHT SIDE: ADDRESS & SOCIALS (Your original code moved here) */}
            <div className="flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h2 className="font-inter font-bold text-oxblood tracking-widest text-[12px] mb-4 uppercase">Where to Find Us</h2>
                  <div className="font-inter font-medium text-oxblood text-[14px] leading-relaxed space-y-1">
                    <p>P.O BOX 5164 - 40100</p>
                    <p>SIAYA COUNTY, KENYA</p>
                    <p>TEL: 0710323295</p>
                    <p>EMAIL: Info@misoribeachresort.com</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-inter font-bold text-oxblood tracking-widest text-[12px] uppercase">Sign up for special offers</h3>
                  <form className="flex gap-2">
                    <input type="email" placeholder="Email Address" className="bg-transparent border border-oxblood/30 px-4 py-2 text-sm text-oxblood flex-1 outline-none" />
                    <button className="bg-oxblood text-pearl px-6 py-2 text-xs uppercase tracking-widest">Send</button>
                  </form>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-inter font-bold text-oxblood uppercase tracking-widest text-[12px] mb-6">Follow our socials</h3>
                <div className="flex gap-4">
                   <a href="#" className="w-14 h-14 transition-transform hover:scale-110"><img src="/images/facebook_icon-icons.com_53612.svg" alt="Facebook" className="w-full h-full object-contain" /></a>
                   <a href="https://www.instagram.com/misoribeachresort/" className="w-14 h-14 transition-transform hover:scale-110"><img src="/images/instagram.svg" alt="Instagram" className="w-full h-full object-contain" /></a>
                   <a href="https://wa.me/254710323295" target="_blank" rel="noopener noreferrer" className="w-14 h-14 transition-transform hover:scale-110"><img src="/images/whatsapp_icon.svg" alt="WhatsApp" className="w-full h-full object-contain" /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;