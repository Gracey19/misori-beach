import React, { useState, useEffect } from 'react';

export default function Accommodations() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = ['stolen_hotel.jpg', 'header_2.png'];

  // Room names from your PDF 
  const roomNames = [
    "The Lakeside Sanctuary",
    "The Garden Pavilion",
    "The Shoreline Suite",
    "The Sunset Studio"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleImage = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      
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

      {/* --- THE SLIDING HEADER SECTION --- */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, index) => (
            <div 
              key={index}
              className="h-full w-full shrink-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/${img}')` 
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center text-pearl px-4 md:px-24 text-left pointer-events-none">
          <h1 className="font-cormorant font-bold text-[12px] md:text-[50px] text-pearl uppercase tracking-[0.1em] mb-4 leading-tight">
            A SANCTUARY OF SILENCE, WHERE EVERY 
            DETAIL IS INTENTIONALLY ORGANIZED 
            FOR YOUR COMFORT
          </h1>
          <div className="relative group pointer-events-auto">
            <a 
              href="#booking" 
              className="w-32 inline-flex justify-center border-2 border-pearl text-pearl py-1 text-[12px] font-medium uppercase tracking-widest hover:bg-oxblood hover:text-pearl transition-all duration-300"
            >
              BOOK A ROOM
            </a>
          </div>
        </div>

        <div onClick={toggleImage} className="absolute top-1/2 left-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block z-60">❮</div>
        <div onClick={toggleImage} className="absolute top-1/2 right-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block z-60">❯</div>
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
        <div className="flex ml-auto gap-4 md:gap-8 text-[8px] md:text-sm font-bold text-pearl items-start -mt-2">
          <ul className="flex flex-row gap-2 md:gap-8 whitespace-nowrap">
            <li><a href="/accommodations" className="hover:opacity-70 transition">Accommodations</a></li>
            <li><a href="/dining" className="hover:opacity-70 transition">Dining</a></li>
            <li><a href="/lake" className="hover:opacity-70 transition">The Lake</a></li>
            <li><a href="/contact" className="hover:opacity-70 transition">Contact us</a></li>
          </ul>
          <div 
            onClick={() => setIsMenuOpen(true)} 
            className="cursor-pointer group flex flex-col justify-center items-center -mt-4 w-10 h-10"
          >
            <div className="w-4 h-0.5 bg-pearl mb-0.5 transition-all group-hover:opacity-70"></div>
            <div className="w-4 h-0.5 bg-pearl mb-0.5 transition-all group-hover:opacity-70"></div>
            <div className="w-4 h-0.5 bg-pearl transition-all group-hover:opacity-70"></div>
          </div>
        </div>
      </nav>

      {/* --- ACCOMMODATIONS --- */}
      <section id="accommodations" className="bg-[#FDFBF0] py-16 md:py-24 px-8 md:px-24 text-center">
        <h2 className="font-cormorant text-oxblood text-[12px] md:text-5xl font-bold uppercase -mt-10 mb-2">PEACE, COMFORT, INTENTIONALITY </h2>
        <div className="max-w-4xl mx-auto space-y-4 text-left mb-20">
          <p className="font-inter text-oxblood/90 text-[8px] md:text-lg leading-relaxed">At Misori, we believe that true rest begins with a clear space. Our rooms are defined by an uncompromising standard of cleanliness and a layout that honors the natural quiet of the shoreline. Positioned just steps from the water’s edge, each room is intentionally organized to strip away the clutter of daily life, leaving you with nothing but the gentle breeze of Lake Victoria and a sense of absolute order.</p>
        </div>

        {/* --- VERTICALLY STACKED ROOMS (FIGMA SPECS) --- */}
        <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
          {roomNames.map((name, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              
              {/* Image Container: 793w x 444h | Radius 8 | Shadow 2xl */}
              <div className="w-full md:w-[793px] aspect-[793/444] bg-terracotta rounded-[8px] shadow-2xl overflow-hidden shrink-0 transition-transform duration-500 hover:scale-[1.01]">
                <div className="w-full h-full flex items-center justify-center text-pearl/20 font-cormorant italic uppercase tracking-widest text-xs">
                  {name}
                </div>
              </div>

              {/* Text & Button Column */}
              <div className="flex flex-col items-start gap-4 text-left w-full max-w-sm">
                <h3 className="font-cormorant text-oxblood text-[14px] md:text-3xl uppercase tracking-widest">
                  {name}
                </h3>
                <button className="border border-oxblood px-6 py-2 text-[10px] md:text-xs text-oxblood uppercase tracking-[0.2em] font-medium hover:bg-oxblood hover:text-pearl transition-all duration-300">
                  BOOK ROOM
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </section>
      
      {/* --- CONTACT SECTION --- */}
<section id="contact" className="bg-[#FDFBF0] py-20 px-8 md:px-24">
  <div className="max-w-6xl mx-auto">
    <h2 className="font-cormorant text-oxblood text-[20px] text-center mb-8 uppercase tracking-wide">Where to Find Us</h2>
    <hr className="border-t-[0.5px] border-terracotta w-full mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      <div className="flex flex-col gap-10">
        <div className="font-inter font-medium text-oxblood text-[12px] leading-tight tracking-wide space-y-2">
          <p>P.O BOX 5164 - 40100</p>
          <p>SIAYA COUNTY, KENYA</p>
          <p>TEL: 0710323295</p>
          <p>EMAIL: Info@misoribeachresort.com</p>
        </div>
        
        {/* --- CONTACT SECTION - SIGN UP BLOCK --- */}
<div className="space-y-4">
  <h3 className="font-inter font-bold text-oxblood tracking-widest text-[12px]">SIGN UP FOR SPECIAL OFFERS</h3>
  
  <form 
    onSubmit={(e) => {
      e.preventDefault();
      const emailInput = e.target.email;
      const emailValue = emailInput.value;

      if (!emailValue) return;

      // 1. Open the email client
      window.location.href = `mailto:Info@misoribeachresort.com?subject=Newsletter Signup&body=Please sign me up. My email is: ${emailValue}`;

      // 2. Clear the input box immediately
      e.target.reset(); 
    }}
    className="flex flex-col gap-4 max-w-sm"
  >
    <input 
      name="email"
      type="email" 
      required
      placeholder="Email Address" 
      className="bg-transparent border border-oxblood/30 px-4 py-3 text-oxblood focus:outline-none focus:border-oxblood placeholder:text-oxblood/50" 
    />
    <button 
      type="submit"
      className="bg-[#A6603E] text-pearl py-3 px-8 flex items-center justify-center gap-1 uppercase font-regular tracking-[0.2em] text-sm hover:brightness-90 transition duration-300"
    >
      Send <span className="text-xs">❯</span>
    </button>
  </form>

    </div>
      </div>

      <div className="flex flex-col items-start md:items-end md:text-right">
        <h3 className="font-inter font-bold text-oxblood uppercase tracking-widest text-sm md:text-base mb-6">Follow our socials</h3>
        <div className="flex gap-5">
          <a href="#" className="w-14 h-14 transition-transform hover:scale-110"><img src="/images/facebook_icon-icons.com_53612.svg" alt="Facebook" className="w-full h-full object-contain" /></a>
          <a href="https://www.instagram.com/misoribeachresort/" className="w-14 h-14 transition-transform hover:scale-110"><img src="/images/instagram.svg" alt="Instagram" className="w-full h-full object-contain" /></a>
          <a href="https://wa.me/254710323295" target="_blank" rel="noopener noreferrer" className="w-14 h-14 transition-transform hover:scale-110"><img src="/images/whatsapp_icon.svg" alt="WhatsApp" className="w-full h-full object-contain" /></a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

