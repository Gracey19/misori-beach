import React, { useState, useEffect } from 'react';

export default function Home() {
  // Logic to toggle between header_1 and header_2
  const [currentImage, setCurrentImage] = useState('header_1.png');
  const [isScrolled, setIsScrolled] = useState(false); // 2. State for scroll detection

  // 3. Logic to detect scrolling
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
    setCurrentImage((prev) => (prev === 'header_1.png' ? 'header_2.png' : 'header_1.png'));
  };

  return (
    <div 
      className="relative h-screen bg-cover bg-center transition-all duration-500" 
      /* Updated URL to use the state variable */
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/${currentImage}')` }}
    >
      {/* Navigation Bar - Dynamic Classes Added */}
      <nav 
  className={`flex px-6 md:px-12 transition-all duration-300 fixed top-0 left-2 w-full z-50 ease-in-out ${
    isScrolled ? ' py-4' : 'bg-transparent py-8'
  }`}
  style={isScrolled ? {
    background: 'linear-gradient(to bottom, rgba(74, 16, 16, 0.8) 0%, rgba(74, 16, 16, 0.4) 70%, rgba(74, 16, 16, 0) 100%)',
    WebkitBackdropFilter: 'blur(8px)'
  } : {}}
>
        
        <div className="flex ml-auto gap-4 md:gap-8 text-[4px] md:text-sm font-bold text-pearl">
          <ul className="flex flex-row gap-2 md:gap-8 whitespace-nowrap">
            <li><a href="#accommodations" className="hover:opacity-70 transition">Accommodations</a></li>
            <li><a href="#dining" className="hover:opacity-70 transition">Dining</a></li>
            <li><a href="#lake" className="hover:opacity-70 transition">The Lake</a></li>
            <li><a href="#contact" className="hover:opacity-70 transition">Contact us</a></li>
          </ul>
          {/* Hamburger Menu Icon */}
          <div className="cursor-pointer group flex-col justify-center w-10 h-10">
            <div className="w-3 h-0.5 bg-pearl mb-0.5 transition-all group-hover:opacity-70"></div>
            <div className="w-3 h-0.5 bg-pearl mb-0.5 transition-all group-hover:opacity-70"></div>
            <div className="w-3 h-0.5 bg-pearl transition-all group-hover:opacity-70"></div>
          </div>
        </div>
      </nav>

      {/* Hero Content Container */}
      <div className="flex flex-col items-start justify-center h-full text-pearl px-4 md:px-24 text-left">
  
       <h1 className="font-cormorant font-bold text-[12px] md:text-[58px] text-pearl uppercase tracking-[0.15em] mb-4 leading-tight">
          Experience the Serenity of the Shoreline
       </h1>
  
      <div className="relative group">
        <a 
          href="#booking" 
          className="w-32 inline-flex justify-center border-2 border-pearl text-pearl py-1 text-[12px] font-medium uppercase tracking-widest hover:bg-oxblood hover:text-pearl transition-all duration-300"
        >
          Book With Us
        </a>
      </div>
      </div>

      {/* Slider Arrows - Added onClick to trigger the image change */}
      <div 
        onClick={toggleImage} 
        className="absolute top-1/2 left-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block z-60"
      >
        ❮
      </div>
      <div 
        onClick={toggleImage} 
        className="absolute top-1/2 right-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block z-60"
      >
        ❯
      </div>

      <section className="bg-[#FDFBF0] py-16 md:py-24 px-8 md:px-24 text-center">
       {/* Header Text */}
       <h2 className="font-cormorant text-oxblood text-[12px] md:text-5xl font-bold uppercase -mt-10 mb-2">
         Karibu Misori Beach Resort!
       </h2>

       {/* Description Text Container */}
       <div className="max-w-4xl mx-auto space-y-4 text-left">
         <p className="font-inter text-oxblood/90 text-[8px] md:text-lg leading-relaxed">
           Arwaki Misori Beach Resort. Situated on the serene banks of Lake Victoria, we have curated an 
           experience where tranquility meets indulgence. Savor the finger-licking goodness of our 
           lakeside kitchen, take in spectacular, uninterrupted views, and retreat into our spacious 
           accommodations designed for rest.
         </p>

         <p className="font-inter text-oxblood/90 text-[8px] md:text-xl leading-relaxed">
           Whether you are seeking a private getaway, a family reunion, or a collaborative team retreat, 
           Misori provides the perfect backdrop for connection.
         </p>

         <h2 className="font-cormorant text-oxblood text-[12px] md:text-5xl font-bold mb-2">
           Accommodations
         </h2>

         <p className="font-inter text-oxblood/90 text-[8px] md:text-xl leading-relaxed">
           Retreat to a space designed for serenity. Our accommodations at Misori beach resort are a 
           blend of modern comfort and organic textures, featuring spacious layouts that invite the lakeside breeze
         </p>

         <p className="font-inter text-oxblood/90 text-[8px] md:text-xl leading-relaxed">
           Wake up to uninterrupted views of the horizon and fall asleep to the gentle rhythm of the water. Every 
           room is more than just a stay, it is a home tailored for your rest.
         </p>
       </div>
      </section>
      <section className="bg-oxblood text-pearl py-16 px-8 md:px-24">
        {/* Section Header */}
        <h2 className="font-cormorant text-[12px] md:text-5xl -mt-8 mb-6">Our Dining Table</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    
        {/* Left Column: Large Image & Description */}
        <div className="flex flex-row gap-4">
          <div className="relative group">
            <img src="images/mandazi.png" alt="Mandazi" className="w-94 h-20 object-cover" />
          </div>
      
             <p className="font-inter text-lg text-[8px] leading-relaxed max-w-md">
               With a dedicated Fish Menu designed to honor our lakeside home, you'll discover 
               the true essence of the lake. It's more than a meal; it's a taste of paradise 
               tailored just for you.
             </p>
          </div>
 
        <div className="gap-4">

        <div className="flex flex-row gap-8 mt-4 items-start w-full">
  
        {/* 1. Left: The Paragraph Block */}
        <div className="w-9/20 shrink">
          <p className="font-inter text-sm text-[8px] leading-relaxed">
            We've gathered the best of the region for a dining experience rooted in tradition. 
            Our kitchen celebrates the vibrant flavors of Kienyeji heritage, ensuring you are 
            cared for from sunrise tea to evening stews.
          </p>
        </div>

        {/* 2. Right: The Image Grid Block (Treated as one unit) */}
        <div className="w-11/20 grid grid-cols-2 gap-4 items-start shrink-0">
    
        {/* Column 1: Fish & Beef */}
        <div className="flex flex-col gap-4">
          <div className="relative group">
            <img src="images/fish.png" alt="Fish" className="w-18 h-16 ml-auto object-cover" />
          <div className="absolute inset-3 border-r-2 border-b-2 border-white/60 pointer-events-none"></div>
        </div>
        <div className="relative group pt-8">
          <img src="images/beef.png" alt="Beef" className="w-16 h-20 ml-auto object-cover -mt-8" />
        <div className="absolute inset-3 border-l-2 border-b-2 border-white/60 pointer-events-none"></div>
      </div>
    </div>

       {/* Column 2: Fries & Sausage */}
       <div className="flex flex-col gap-4">
         <div className="relative group">
           <img src="images/fries.png" alt="Fries" className="w-16 h-12 object-cover" />
         <div className="absolute inset-3 border-l-2 border-t-2 border-white/60 pointer-events-none"></div>
       </div>
       <div className="relative group">
         <img src="images/sausage.png" alt="Sausage" className="w-20 h-24 object-cover" />
       <div className="absolute inset-3 border-r-2 border-t-2 border-white/60 pointer-events-none"></div>
      </div>
    </div>
    </div>
  </div>
  </div>


  </div>
</section>
  
  <section id="contact" className="bg-[#FDFBF0] py-20 px-8 md:px-24">
  <div className="max-w-6xl mx-auto">
    
    {/* Section Header */}
    <h2 className="font-cormorant text-oxblood text-[20px] text-center mb-8 uppercase tracking-wide">
      Where to Find Us
    </h2>

    <hr className="border-t-[0.5px] border-terracotta w-full mb-8" />

    {/* The Two-Column Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
      
      {/* COLUMN 1: Address & Newsletter */}
      <div className="flex flex-col gap-10">
        <div className="font-inter font-medium text-oxblood text-[12px] leading-tight tracking-wide space-y-2">
          <p>P.O BOX 5164 - 40100</p>
          <p>SIAYA COUNTY, KENYA</p>
          <p>TEL: 0710323295</p>
          <p>EMAIL: Info@misoribeachresort.com</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-inter font-bold text-oxblood tracking-widest text-[12px]">
            SIGN UP FOR SPECIAL OFFERS
          </h3>
          <div className="flex flex-col gap-4 max-w-sm">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border border-oxblood/30 px-4 py-3 text-oxblood focus:outline-none focus:border-oxblood placeholder:text-oxblood/50"
            />
            <button className="bg-[#A6603E] text-pearl py-3 px-8 flex items-center justify-center gap-1 uppercase font-regular tracking-[0.2em] text-sm hover:brightness-90 transition duration-300">
              Send <span className="text-xs">❯</span>
            </button>
          </div>
        </div>
      </div>

      {/* COLUMN 2: Socials (Right-aligned to mirror Figma) */}
      <div className="flex flex-col items-start md:items-end md:text-right">
        <h3 className="font-inter font-bold text-oxblood uppercase tracking-widest text-sm md:text-base mb-6">
          Follow our socials
        </h3>
        <div className="flex gap-5">
          {/* Social Icons - Using exact styling from your screenshot */}
          <a href="#" className="w-14 h-14 transition-transform hover:scale-110">
             <img src="/images/facebook_icon-icons.com_53612.svg" alt="Facebook" className="w-full h-full object-contain" />
          </a>
          <a href="https://www.instagram.com/misoribeachresort/" className="w-14 h-14 transition-transform hover:scale-110">
             <img src="/images/instagram.svg" alt="Instagram" className="w-full h-full object-contain" />
          </a>
          <a 
            href="https://wa.me/254710323295" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 transition-transform hover:scale-110"
          >
             <img src="/images/whatsapp_icon.svg" alt="WhatsApp" className="w-full h-full object-contain" />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
}


