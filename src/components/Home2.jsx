import React from 'react';

export default function Home() {
  return (
    <div 
      className="relative h-screen bg-cover bg-center" 
      /* We use the direct path to the public folder here */
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/header_1.png')" }}
    >
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 md:py-8 text-pearl absolute top-0 left-12 w-full z-20">
        
        <div className="flex ml-auto gap-4 md:gap-8 text-[4px] md:text-sm font-bold text-pearl">
          <ul className="flex flex-row gap-2 md:gap-8 whitespace-nowrap">
            <li><a href="#accommodations" className="hover:opacity-70 transition">Accommodations</a></li>
            <li><a href="#dining" className="hover:opacity-70 transition">Dining</a></li>
            <li><a href="#lake" className="hover:opacity-70 transition">The Lake</a></li>
            <li><a href="#contact" className="hover:opacity-70 transition">Contact us</a></li>
          </ul>
          {/* Hamburger Menu Icon */}
          <div className="cursor-pointer group flex-col justify-center w-10 h-10">
            <div className="w-3 h-0.5 bg-pearl mb-0.5 transition-all group-hover:w-4"></div>
            <div className="w-3 h-0.5 bg-pearl mb-0.5 transition-all group-hover:w-4"></div>
            <div className="w-3 h-0.5 bg-pearl transition-all group-hover:w-4"></div>
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

      {/* Slider Arrows */}
      <div className="absolute top-1/2 left-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block">❮</div>
      <div className="absolute top-1/2 right-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block">❯</div>

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

        <div className="flex flex-row gap-8 mt-4 items-start">
  
        {/* 1. Left: The Paragraph Block */}
        <div className="flex-1">
          <p className="font-inter text-[8px] md:text-lg leading-relaxed max-w-xl">
            We've gathered the best of the region for a dining experience rooted in tradition. 
            Our kitchen celebrates the vibrant flavors of Kienyeji heritage, ensuring you are 
            cared for from sunrise tea to evening stews.
          </p>
        </div>

        {/* 2. Right: The Image Grid Block (Treated as one unit) */}
        <div className="grid grid-cols-2 gap-4 items-start shrink-0">
    
        {/* Column 1: Fish & Beef */}
        <div className="flex flex-col gap-4">
          <div className="relative group">
            <img src="images/fish.png" alt="Fish" className="w-16 h-24 ml-auto object-cover" />
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
           <img src="images/fries.png" alt="Fries" className="w-16 h-16 object-cover" />
         <div className="absolute inset-3 border-l-2 border-t-2 border-white/60 pointer-events-none"></div>
       </div>
       <div className="relative group">
         <img src="images/sausage.png" alt="Sausage" className="w-20 h-28 object-cover" />
       <div className="absolute inset-3 border-r-2 border-t-2 border-white/60 pointer-events-none"></div>
      </div>
    </div>
    </div>
  </div>
  </div>

  </div>
</section>

    </div>
  );
}




<ORIGINAL></ORIGINAL>
import React from 'react';

export default function Home() {
  return (
    <div 
      className="relative h-screen bg-cover bg-center" 
      /* We use the direct path to the public folder here */
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/header_1.png')" }}
    >
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 md:py-8 text-pearl absolute top-0 left-12 w-full z-20">
        
        <div className="flex ml-auto gap-4 md:gap-8 text-[4px] md:text-sm font-bold text-pearl">
          <ul className="flex flex-row gap-2 md:gap-8 whitespace-nowrap">
            <li><a href="#accommodations" className="hover:opacity-70 transition">Accommodations</a></li>
            <li><a href="#dining" className="hover:opacity-70 transition">Dining</a></li>
            <li><a href="#lake" className="hover:opacity-70 transition">The Lake</a></li>
            <li><a href="#contact" className="hover:opacity-70 transition">Contact us</a></li>
          </ul>
          {/* Hamburger Menu Icon */}
          <div className="cursor-pointer group flex-col justify-center w-10 h-10">
            <div className="w-3 h-0.5 bg-pearl mb-0.5 transition-all group-hover:w-4"></div>
            <div className="w-3 h-0.5 bg-pearl mb-0.5 transition-all group-hover:w-4"></div>
            <div className="w-3 h-0.5 bg-pearl transition-all group-hover:w-4"></div>
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

      {/* Slider Arrows */}
      <div className="absolute top-1/2 left-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block">❮</div>
      <div className="absolute top-1/2 right-0.5 -translate-y-1/2 text-pearl text-1xl opacity-70 cursor-pointer md:block">❯</div>

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

        <div className="flex flex-col md:flex-row gap-8 items-start">
  
        {/* 1. Left: The Paragraph Block */}
        <div className="flex-1">
          <p className="font-inter text-[8px] md:text-lg leading-relaxed max-w-sm">
            We've gathered the best of the region for a dining experience rooted in tradition. 
            Our kitchen celebrates the vibrant flavors of Kienyeji heritage, ensuring you are 
            cared for from sunrise tea to evening stews.
          </p>
        </div>

        {/* 2. Right: The Image Grid Block (Treated as one unit) */}
        <div className="grid grid-cols-2 gap-4 items-start shrink-0">
    
        {/* Column 1: Fish & Beef */}
        <div className="flex flex-col gap-4">
          <div className="relative group">
            <img src="images/fish.png" alt="Fish" className="w-30 h-42 object-cover" />
          <div className="absolute inset-3 border-r-2 border-b-2 border-white/60 pointer-events-none"></div>
        </div>
        <div className="relative group pt-8">
          <img src="images/beef.png" alt="Beef" className="w-28 h-23 object-cover -mt-8" />
        <div className="absolute inset-3 border-l-2 border-b-2 border-white/60 pointer-events-none"></div>
      </div>
    </div>

       {/* Column 2: Fries & Sausage */}
       <div className="flex flex-col gap-4">
         <div className="relative group">
           <img src="images/fries.png" alt="Fries" className="w-25 h-25 object-cover" />
         <div className="absolute inset-3 border-l-2 border-t-2 border-white/60 pointer-events-none"></div>
       </div>
       <div className="relative group">
         <img src="images/sausage.png" alt="Sausage" className="w-25 h-40 object-cover" />
      <div className="absolute inset-3 border-r-2 border-t-2 border-white/60 pointer-events-none"></div>
      </div>
    </div>
    </div>

  </div>
  </div>

  </div>
</section>

    </div>
  );
}

