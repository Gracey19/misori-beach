import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = ['header_1.png', 'header_2.png'];

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

        <nav className="flex flex-col gap-4 text-center mt-8">
          {/* I added 'us' here to match your main nav list */}
          {['Home', 'Accommodations', 'Dining', 'The Lake', 'Contact us'].map((item) => (
           <a
             key={item}
             href={
               item === 'Home' ? "/" : 
               item === 'Accommodations' ? "/accommodations" : 
               item === 'The Lake' ? "/lake" : 
               item === 'Contact us' ? "/contact" : // Now this matches the array string exactly
               `/#${item.toLowerCase().replace(/\s+/g, '')}`
             }
             onClick={() => setIsMenuOpen(false)}
             className="font-inter text-[8px] uppercase tracking-[0.4em] text-pearl font-normal hover:text-oxblood transition-colors duration-300"
           >
            {item}
           </a>
          ))}
        </nav>
      </div>

      {/* --- THE SLIDING HEADER SECTION --- */}
      <div className="relative h-[100dvh] w-full overflow-hidden bg-black">
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
          <h1 className="font-cormorant font-bold text-[12px] md:text-[58px] text-pearl uppercase tracking-[0.15em] mb-4 leading-tight">
            Experience the Serenity of the Shoreline
          </h1>
          <div className="relative group pointer-events-auto">
            <a 
              href="#booking" 
              className="w-32 inline-flex justify-center border-2 border-pearl text-pearl py-1 text-[12px] font-medium uppercase tracking-widest hover:bg-oxblood/50 hover:text-pearl transition-all duration-300"
            >
              Book With Us
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
          backgroundColor: 'rgba(74, 16, 16, 0.9)', // A solid, rich Oxblood color
          backdropFilter: 'blur(12px)',            // This creates the classy "frosted" look
          WebkitBackdropFilter: 'blur(12px)',      // For Safari users
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)' // A tiny, elegant line
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
        <h2 className="font-cormorant text-oxblood text-[12px] md:text-5xl font-bold uppercase -mt-10 mb-2">Karibu Misori Beach Resort!</h2>
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <p className="font-inter text-oxblood/90 text-[8px] md:text-lg leading-relaxed">Arwaki Misori Beach Resort. Situated on the serene banks of Lake Victoria, we have curated an experience where tranquility meets indulgence.</p>
          <p className="font-inter text-oxblood/90 text-[8px] md:text-xl leading-relaxed">Whether you are seeking a private getaway, a family reunion, or a collaborative team retreat, Misori provides the perfect backdrop for connection.</p>
          <h2 className="font-cormorant text-oxblood text-[12px] md:text-5xl font-bold mb-2">Accommodations</h2>
          <p className="font-inter text-oxblood/90 text-[8px] md:text-xl leading-relaxed">Retreat to a space designed for serenity. Our accommodations at Misori beach resort are a blend of modern comfort and organic textures, featuring spacious layouts that invite the lakeside breeze</p>
          <p className="font-inter text-oxblood/90 text-[8px] md:text-xl leading-relaxed">Wake up to uninterrupted views of the horizon and fall asleep to the gentle rhythm of the water. Every room is more than just a stay, it is a home tailored for your rest.</p>
          
          <div className="pt-4 mb-16">
            <a 
              href="/accommodations"  // <--- This is the magic change!
              className="inline-block border border-oxblood/40 text-oxblood px-6 py-2 text-[8px] md:text-xs uppercase tracking-[0.2em] font-medium hover:bg-oxblood hover:text-pearl transition-all duration-300"
            >
              View Rooms
            </a>
          </div>
          </div>
      </section>

      {/* --- DINING SECTION --- */}
      <section id="dining" className="bg-oxblood text-pearl py-16 px-8 md:px-24">
        <h2 className="font-cormorant text-[12px] md:text-5xl -mt-8 mb-6">Our Dining Table</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
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
              <div className="w-9/20 shrink">
                <p className="font-inter text-sm text-[8px] leading-relaxed">
                  We've gathered the best of the region for a dining experience rooted in tradition. 
                  Our kitchen celebrates the vibrant flavors of Kienyeji heritage, ensuring you are 
                  cared for from sunrise tea to evening stews.
                </p>
              </div>
              <div className="w-11/20 grid grid-cols-2 gap-4 items-start shrink-0">
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
        <div className="flex flex-row gap-4 mt-12 justify-start">
          <a 
            href="https://drive.google.com/file/d/12LnplArVOlPYnBFNqHJqyjBnsVuVEiEf/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-pearl/40 px-4 py-2 text-[8px] md:text-xs uppercase tracking-widest hover:bg-pearl hover:text-oxblood transition-all duration-300"
          >
            View Menu
          </a>
          <a href="https://wa.me/254710323295?text=I%20enquire%20about%20dining" className="bg-[#A6603E] px-4 py-2 text-[8px] md:text-xs uppercase tracking-widest hover:brightness-110 transition-all duration-300">
            Make Enquiry
          </a>
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
              <div className="space-y-4">
                <h3 className="font-inter font-bold text-oxblood tracking-widest text-[12px]">SIGN UP FOR SPECIAL OFFERS</h3>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const emailValue = e.target.email.value;
                    if (!emailValue) return;
                    window.location.href = `mailto:Info@misoribeachresort.com?subject=Newsletter Signup&body=Please sign me up. My email is: ${emailValue}`;
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