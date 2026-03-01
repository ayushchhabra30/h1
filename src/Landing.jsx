import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

import CountdownTimer from "./components/CountdownTimer";
import SideScrollMenu from "./components/SideScrollMenu";
import Timeline from "./components/Timeline";

// Timeline data for hackathon schedule
const timelineData = [
  { date: "Until 28th Feb", title: "Registration", description: "Register your team for the hackathon", icon: "📝" },
  { date: "1st March, 12:00 PM", title: "Hacking Period Starts", description: "Begin your innovative journey", icon: "🚀" },
  { date: "1st March, 9:00 PM", title: "Mid Evaluation", description: "Present your progress to the judges", icon: "⚡" },
  { date: "2nd March, 12:00 PM", title: "Hacking Period Ends", description: "Time to wrap up your project", icon: "⏰" },
  { date: "2nd March, 12:00 PM - 1:00 PM", title: "Project Submission", description: "Submit your final project", icon: "📦" },
  { date: "2nd March, 1:00 PM onwards", title: "Final Evaluation", description: "Present your complete project to the judges", icon: "🏆" }
];

function HomeParallax() {
  const parallaxRef = useRef();

  // Scroll handler for the menu
  const scroll = (to) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  };

  return (
    <>
      <SideScrollMenu scrollToPage={scroll} />

      <Parallax ref={parallaxRef} pages={4} style={{ background: "#222" }}>

        {/* ==========================
            PAGE 1: SAMURAI HOME
            ========================== */}

        {/* 1. MOUNTAINS (Background) */}
        <ParallaxLayer offset={0} speed={0.2} factor={2} style={{ zIndex: 1 }}>
          <img
            src="/mountain.png"
            className="w-full h-screen object-cover"
            alt="Mountains"
          />
        </ParallaxLayer>

        {/* 2. LOGO (FIXED RESPONSIVENESS) 
            - Removed fixed 'paddingLeft' (was pushing it off-center).
            - Changed 'paddingTop: 200px' to 'paddingTop: 20vh' (20% of screen height).
            - Added 'w-[80vw]' to ensure it scales on phones too.
        */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            display: 'flex',
            justifyContent: 'center', // Perfectly centered horizontally
            alignItems: 'flex-start', // Starts from top
            paddingTop: '25vh',       // Pushes down by 25% of ANY screen height
            zIndex: 50
          }}
        >
          <img
            src="/logo2.png"
            alt="HackStreet Logo"
            // Width scales with screen width (80vw on mobile, max 600px on desktop)
            className="w-[80vw] md:w-[50vw] max-w-[600px] opacity-100"
            style={{
              filter: "invert(100%) sepia(100%) saturate(400%) hue-rotate(180deg) brightness(200%) contrast(100%) drop-shadow(0 0 3px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 15px rgba(0, 100, 255, 0.4))"
            }}
          />
        </ParallaxLayer>

        {/* 3. COUNTDOWN TIMER (FIXED RESPONSIVENESS)
            - Changed 'paddingBottom: 80px' to '10vh' so it stays proportional.
        */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            zIndex: 55,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '12vh', // 12% from bottom on any device
            pointerEvents: 'none'
          }}
        >
          <div style={{ pointerEvents: 'auto', transform: 'scale(0.9)' }}>
            {/* Added scale(0.9) to ensure it fits on smaller laptop screens */}
            <CountdownTimer />
          </div>
        </ParallaxLayer>

        {/* 4. SUN (Already good, but ensured centering) */}
        <ParallaxLayer offset={0} speed={0} style={{ zIndex: 5 }}>
          <img
            src="/sun.png"
            className="absolute left-1/2 -translate-x-1/2 w-[250px] md:w-[300px]" // Responsive width
            style={{
              top: "10%", // Relative top position is good
              transform: `translate(-50%, ${parallaxRef.current ? parallaxRef.current.current * 0.3 : 0}px)`
            }}
          />
        </ParallaxLayer>

        {/* 5. FOREGROUND TREES */}
        <ParallaxLayer offset={0} speed={0.3} style={{ zIndex: 20 }}>
          <img
            src="/trees.png"
            className="w-full h-screen object-cover"
            style={{ opacity: 0.8 }}
          />
        </ParallaxLayer>


        {/* ==========================
            PAGE 2: ABOUT SECTION
            ========================== */}

        {/* 6. BACKGROUND SCENERY */}
        <ParallaxLayer offset={1} speed={0.2} style={{ zIndex: 20 }}>
          <div className="relative w-full h-screen">
            <img
              src="/about_bg.png"
              className="w-full h-full object-cover"
              alt="Lake"
            />
          </div>
        </ParallaxLayer>

        {/* 7. FOREGROUND TREES */}
        <ParallaxLayer offset={1} speed={0.6} style={{ zIndex: 40, pointerEvents: 'none' }}>
          <img
            src="/about_trees.png"
            className="w-full h-screen object-cover"
            alt="Trees"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </ParallaxLayer>

        {/* 8. CONTENT (About Logo - FIXED RESPONSIVENESS) 
            - Used flex-center instead of padding-top 5px (which is too tight).
            - Added margin-top using 'vh' so it floats nicely.
        */}
        <ParallaxLayer offset={1} speed={0.4} style={{ zIndex: 30 }}>
          <div
            className="h-full flex flex-col items-center"
            style={{
              justifyContent: 'flex-start',
              paddingTop: '15vh' // Pushes it down 15% from top
            }}
          >
            <img
              src="/ab.png"
              alt="About HackStreet"
              className="w-[80vw] md:w-[40vw] max-w-[600px]" // Responsive width
              style={{
                filter: "invert(0) hue-rotate(0deg) drop-shadow(0 0 0px rgba(0, 0, 0, 0.66))"
              }}
            />
          </div>
        </ParallaxLayer>


        {/* ==========================
            PAGE 3: TIMELINE SECTION
            ========================== */}

        {/* 9. TIMELINE BACKGROUND */}
        <ParallaxLayer offset={2} speed={0.2} style={{ zIndex: 1 }}>
          <img
            src="/Timeline_bg.jpg"
            className="w-full h-screen object-cover"
            alt="Timeline Background"
          />
        </ParallaxLayer>

        {/* 10. TIMELINE CONTENT */}
        <ParallaxLayer 
          offset={2} 
          speed={0.4} 
          style={{ 
            zIndex: 30,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '5vh',
            overflow: 'auto'
          }}
        >
          <Timeline items={timelineData} />
        </ParallaxLayer>

        {/* 11. SUBTLE GOLD GRADIENT OVERLAY */}
        <ParallaxLayer offset={2} speed={0.1} style={{ zIndex: 10, pointerEvents: 'none' }}>
          <div style={{ 
            background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.05))',
            height: '100%' 
          }} />
        </ParallaxLayer>
        {/* ==========================
    PAGE 4: PRIZE POOL SECTION
    ========================== */}

{/* 12. PRIZE BACKGROUND */}
<ParallaxLayer offset={3} speed={0.1} style={{ zIndex: 1, pointerEvents: 'none' }}>
  <div className="w-full h-screen bg-[#050505] flex items-center justify-center">
    <img
      src="/prizes_bg.png" 
      className="w-full h-screen object-cover opacity-50"
      alt="Prize Background"
    />
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{ background: 'radial-gradient(circle, transparent 20%, #050505 100%)' }}
    ></div>
  </div>
</ParallaxLayer>

{/* 13. PRIZE CONTENT */}
<ParallaxLayer 
  offset={3} 
  speed={0.3} 
  style={{ 
    zIndex: 40, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    paddingTop: '4vh',
  }}
>
  <div className="container mx-auto px-6 w-full max-h-screen overflow-y-auto lg:overflow-visible flex flex-col items-center">
    
    {/* CENTERED LARGE HEADING IMAGE */}
    <div className="w-full flex justify-center mb-4 mt-[-2vh] lg:mt-0"> 
      <img 
        src="/prizepool.png" 
        alt="Prize Pool"
        className="w-[80vw] md:w-[60vw] lg:w-[900px] h-auto object-contain drop-shadow-[0_0_25px_rgba(220,38,38,0.7)] transform transition-transform duration-700 hover:scale-105"
      />
    </div>

    {/* Content Wrapper */}
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 w-full max-w-7xl">
      
      {/* LEFT SIDE: LARGE LUCKY CAT - SHIFTED DOWN WITH PULSATING GLOW */}
      <div className="w-full lg:w-2/5 flex justify-center relative pointer-events-none mt-8 lg:mt-12 translate-y-6 lg:translate-y-12">
        {/* PULSATING RED LIGHT */}
        <div className="absolute -inset-10 bg-red-600/40 blur-[90px] rounded-full animate-strongPulse"></div>
        
        <img 
          src="/cat.png" 
          className="w-[280px] md:w-[450px] lg:w-[650px] relative z-10 opacity-100 drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]" 
          alt="Lucky Cat" 
        />
      </div>

      {/* RIGHT SIDE: PRIZE CARDS */}
      <div className="w-full lg:w-3/5 flex flex-col gap-4"> 
        {[
          { rank: "WINNER", desc: "The Grand Prize will be given to a project that outstands all other submissions.", amount: "₹50,000", color: "from-yellow-500/40", textColor: "text-yellow-500", glow: "0_0_25px_rgba(234,179,8,1)" },
          { rank: "1ST RUNNER UP", desc: "1st Runner-up prize will be given to the second best project of the hackathon.", amount: "₹30,000", color: "from-slate-400/30", textColor: "text-slate-300", glow: "0_0_25px_rgba(203,213,225,0.9)" },
          { rank: "2ND RUNNER UP", desc: "2nd Runner-up project of the hackathon will win some awesome prizes.", amount: "₹20,000", color: "from-orange-800/30", textColor: "text-orange-700", glow: "0_0_25px_rgba(194,65,12,0.9)" }
        ].map((prize, i) => (
          <div 
            key={i} 
            className="relative group transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.04] animate-slash" 
            style={{ 
              animationDelay: `${i * 0.1}s`,
              animationFillMode: 'forwards', 
              clipPath: 'polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%)' 
            }}
          >
            <div className={`bg-gradient-to-r ${prize.color} to-transparent p-[2px] transition-all duration-500 group-hover:shadow-red-glow`}>
              <div className="bg-[#0a0a0a]/95 backdrop-blur-xl py-6 md:py-5 px-9 flex justify-between items-center relative overflow-hidden">
                
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine pointer-events-none" />

                <div className="flex-1 pr-4 relative z-10">
                  <h3 
                    className={`text-xl md:text-5xl font-black italic tracking-tighter ${prize.textColor} mb-1 transition-all group-hover:tracking-normal`}
                    style={{ filter: `drop-shadow(${prize.glow})` }} // Stronger drop-shadow glow
                  >
                    {prize.rank}
                  </h3>
                  <p className="text-gray-300 text-[7px] md:text-[10px] font-medium max-w-sm uppercase opacity-85">
                    {prize.desc}
                  </p>
                </div>

                <div className="text-right shrink-0 relative z-10">
                  <div className="h-[2px] w-12 bg-red-600/50 mb-2 ml-auto transition-all group-hover:w-16 group-hover:bg-red-500"></div>
                  {/* STRONGER PULSE APPLIED TO AMOUNT */}
                  <span className="text-2xl md:text-5xl font-black text-white italic animate-prizeGlow">
                    {prize.amount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</ParallaxLayer>

      </Parallax>
    </>
  );
}

export default HomeParallax;