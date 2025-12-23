import { family } from "../../data/familyData";
import Footer from "../../components/common/Footer";
import { Link } from "react-router-dom";
import MembersPage from "../Members/MembersPage";
import { useEffect, useState, useRef } from "react";

const HomePage = () => {
  const { father, mother } = family.parents;
  const [isVisible, setIsVisible] = useState(false);
  const membersRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Add scroll listener for scroll-triggered animations
    const handleScroll = () => {
      if (membersRef.current) {
        const rect = membersRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          membersRef.current.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="min-h-screen animated-gradient flex flex-col items-center justify-center text-white text-center px-4 py-12">
        <div className={`max-w-6xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center mb-12
                  ${isVisible ? "animate-fadeInDown" : "opacity-0"}`}
          >
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              {family.familyName}
            </span>

            <span className="block mt-5 text-lg sm:text-xl md:text-2xl font-medium text-indigo-200 tracking-wide">
              Welcome to Our Family
            </span>

            <span className="block mt-2 text-sm sm:text-base text-white/70 font-normal">
              Where Family, memories, and generations connect
            </span>
          </h1>


          <div className="flex gap-10 flex-wrap justify-center items-center">
            {[father, mother].map((p, index) => (
              <div
                key={p.id}
                className={`text-center my-4 ${isVisible ? (index === 0 ? 'animate-fadeInLeft delay-400' : 'animate-fadeInRight delay-400') : 'opacity-0'}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-2xl image-hover-effect animate-float"
                    style={{ animationDelay: `${index * 200 + 500}ms` }}
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{p.name}</h2>
                <p className="text-lg opacity-90 bg-indigo-800/30 inline-block px-4 py-2 rounded-full">
                  {p.role}
                </p>

                {/* Optional bio or additional info */}
                {p.bio && (
                  <p className="mt-4 max-w-xs text-indigo-100">
                    {p.bio}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Animated separator */}
          <div className={`mt-16 ${isVisible ? 'animate-scaleIn delay-800' : 'opacity-0'}`}>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
            <p className="mt-6 text-xl text-indigo-200">
              Scroll down to meet our family members
            </p>
            <div className="mt-8 animate-bounce">
              <i className="fas fa-chevron-down text-2xl"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Members Page with scroll-triggered animation */}
      <div ref={membersRef} className="slide-in-section">
        <MembersPage />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;