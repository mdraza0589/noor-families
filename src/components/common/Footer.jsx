import { family } from "../../data/familyData";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const mutabbar_Profile = '/gallery/profileImage/mutabbar.jpg'
const raza_Profile = '/gallery/profileImage/raza1.png'
const abba_Profile = '/images/abba.jpg'


const Footer = () => {
  const footerRef = useRef(null);
  const linkRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Create observer for footer entrance animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");

            // Stagger animation for links
            linkRefs.current.forEach((link, index) => {
              if (link) {
                setTimeout(() => {
                  link.classList.add("animate-in");
                }, index * (isMobile ? 50 : 100));
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, [isMobile]);

  // Get all first-level children (not grandchildren)
  const getAllChildren = () => {
    const children = [];
    family.siblings.forEach(sibling => {
      if (sibling.children && sibling.children.length > 0) {
        sibling.children.forEach(child => {
          // Only include if they have no children themselves (first-level only)
          if (!child.children || child.children.length === 0) {
            children.push({
              ...child,
              parentName: sibling.name
            });
          }
        });
      }
    });
    return children;
  };

  const allChildren = getAllChildren();
  const allFamilyMembers = [...family.siblings, ...allChildren];

  // Function to chunk array into groups for columns
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Create 3 columns for desktop, 2 for mobile
  const columns = isMobile ? 2 : 3;
  const membersPerColumn = Math.ceil(allFamilyMembers.length / columns);
  const memberColumns = chunkArray(allFamilyMembers, membersPerColumn);

  return (
    <>
      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          
          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }
          
          .footer-container {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .footer-container.animate-in {
            opacity: 1;
            transform: translateY(0);
          }
          
          .footer-link {
            position: relative;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.4s ease;
          }
          
          .footer-link.animate-in {
            opacity: 1;
            transform: translateY(0);
          }
          
          .footer-link::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #8b5cf6, #ec4899);
            transition: width 0.3s ease;
            border-radius: 2px;
          }
          
          .footer-link:hover::before {
            width: 100%;
          }
          
          .footer-link:hover {
            transform: translateY(-3px);
          }
          
          .heart-beat {
            animation: pulse 1.5s ease-in-out infinite, float 3s ease-in-out infinite;
            display: inline-block;
            color: #ec4899;
          }
          
          .shimmer-text {
            background: linear-gradient(
              90deg,
              #fff 0%,
              #8b5cf6 25%,
              #ec4899 50%,
              #8b5cf6 75%,
              #fff 100%
            );
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 3s linear infinite;
          }
          
          .family-count-badge {
            background: linear-gradient(135deg, #000000 0%, #333333 100%);
            border-radius: 20px;
            padding: 4px 12px;
            font-size: 0.8rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-left: 8px;
            animation: float 4s ease-in-out infinite;
            border: 1px solid #444;
          }
          
          .divider {
            width: 1px;
            height: 16px;
            background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
            margin: 0 8px;
          }
          
          .footer-decoration {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #000000, #333333, #666666, #000000);
            background-size: 300% 100%;
            animation: gradientShift 3s linear infinite;
          }
          
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 300% 50%;
            }
          }
          
          .floating-icon {
            position: absolute;
            font-size: 1.2rem;
            animation: float 6s ease-in-out infinite;
            opacity: 0.1;
            color: #aaa;
          }
          
          .copyright-text {
            position: relative;
            overflow: hidden;
          }
          
          .copyright-text::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            animation: copyrightLine 4s ease-in-out infinite;
          }
          
          @keyframes copyrightLine {
            0%, 100% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
          }
          
          /* Children badge style */
          .child-badge {
            background: linear-gradient(135deg, #111111 0%, #222222 100%);
            border: 1px solid #333;
            border-radius: 12px;
            padding: 2px 8px;
            font-size: 0.7rem;
            margin-top: 4px;
            color: #aaa;
            display: inline-block;
          }
          
          /* Member role indicator */
          .member-role {
            position: absolute;
            top: 4px;
            right: 4px;
            background: rgba(0, 0, 0, 0.7);
            color: #ccc;
            font-size: 0.6rem;
            padding: 2px 6px;
            border-radius: 10px;
            border: 1px solid #444;
          }
          
          /* Column layout for members */
          .members-columns-container {
            display: grid;
            gap: 20px;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
          }
          
          .members-column {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          
          /* Desktop: 3 columns */
          @media (min-width: 768px) {
            .members-columns-container {
              grid-template-columns: repeat(3, 1fr);
            }
            
            .members-column {
              align-items: center;
            }
            
            .footer-link {
              width: 100%;
              max-width: 220px;
            }
          }
          
          /* Mobile: 2 columns */
          @media (max-width: 767px) {
            .members-columns-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            
            .members-column {
              align-items: center;
            }
            
            .footer-link {
              width: 100%;
              max-width: 160px;
            }
            
            /* Reduce floating icons on mobile */
            .floating-icon {
              display: none;
            }
            
            /* Adjust footer padding */
            .footer-container {
              padding: 20px 16px;
            }
            
            /* Stack family title and badge on mobile */
            .family-count-badge {
              display: block;
              margin: 10px auto 0;
              width: fit-content;
              margin-left: 0;
            }
            
            /* Adjust link content for mobile */
            .footer-link .flex {
              flex-direction: column;
              gap: 6px;
              align-items: center;
            }
            
            /* Smaller profile images on mobile */
            .footer-link .rounded-full {
              width: 48px;
              height: 48px;
            }
            
            /* Adjust text size for mobile */
            .footer-link span {
              font-size: 0.9rem;
              text-align: center;
            }
            
            /* Hide tooltips on mobile */
            .footer-link .absolute {
              display: none;
            }
            
            /* Stack values section on mobile */
            .flex-wrap {
              flex-direction: column;
              gap: 12px;
            }
            
            /* Hide dividers on mobile */
            .divider {
              display: none;
            }
            
            /* Adjust social buttons for mobile */
            .w-10 {
              width: 44px;
              height: 44px;
            }
          }
          
          /* Very small mobile adjustments */
          @media (max-width: 480px) {
            .members-columns-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
            
            .footer-link {
              max-width: 140px;
              padding: 10px 8px;
            }
            
            .footer-link .rounded-full {
              width: 40px;
              height: 40px;
            }
            
            .footer-link span {
              font-size: 0.85rem;
            }
            
            .family-count-badge {
              font-size: 0.75rem;
              padding: 3px 10px;
            }
          }
          
          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            .footer-link:hover {
              transform: none;
            }
            
            .footer-link:active {
              transform: scale(0.98);
              background-color: rgba(255, 255, 255, 0.1);
            }
            
            .w-10:active {
              transform: scale(0.95);
            }
          }
        `}
      </style>

      <footer
        ref={footerRef}
        className="footer-container relative bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-8 overflow-hidden"
      >
        {/* Decorative top border */}
        <div className="footer-decoration"></div>

        {/* Floating decorative icons - hidden on mobile */}
        <div className="floating-icon hidden md:block" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
          <i className="fas fa-heart"></i>
        </div>
        <div className="floating-icon hidden md:block" style={{ top: '30%', right: '15%', animationDelay: '1s' }}>
          <i className="fas fa-home"></i>
        </div>
        <div className="floating-icon hidden md:block" style={{ bottom: '20%', left: '15%', animationDelay: '2s' }}>
          <i className="fas fa-star"></i>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Family Title with Count */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              The <span className="shimmer-text">{family.familyName}</span>
            </h2>
            <div className="family-count-badge inline-block mt-2 md:mt-0 md:ml-2">
              <i className="fas fa-users"></i>
              <span>{allFamilyMembers.length + 2} Members</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base mt-3">
              Connected by love, strengthened by bonds <span className="heart-beat">❤</span>
            </p>
          </div>

          {/* Members Links in Columns */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold mb-6 text-gray-300">
              All Family Members
            </h3>

            <div className="members-columns-container">
              {memberColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="members-column">
                  {column.map((member, memberIndex) => {
                    const totalIndex = columnIndex * membersPerColumn + memberIndex;
                    const isChild = member.parentName !== undefined;

                    return (
                      <Link
                        key={member.id}
                        to={`/profile/${member.id}`}
                        ref={el => linkRefs.current[totalIndex] = el}
                        className="footer-link group relative px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm border border-gray-800"
                      >

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-gray-500 transition-colors">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-left">
                            <span className="font-medium group-hover:text-gray-200 transition-colors text-sm md:text-base block">
                              {member.name}
                            </span>
                          </div>
                        </div>

                        {/* Hover tooltip - hidden on mobile */}
                        <div className="hidden md:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10 shadow-lg border border-gray-700">
                          {isChild ? (
                            <span>View {member.name}'s profile<br />
                              <small className="text-gray-400">Child of {member.parentName}</small></span>
                          ) : (
                            <span>View {member.name}'s profile</span>
                          )}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

          {/* Copyright & Additional Info */}
          <div className="text-center">
            <div className="copyright-text inline-block px-4 py-2 mb-4">
              <p className="text-gray-500 text-sm md:text-base">
                © {new Date().getFullYear()} {family.familyName}
              </p>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                All rights reserved
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-sm mb-4">
              <div className="flex items-center">
                <i className="fas fa-heart text-gray-400 mr-2 text-sm"></i>
                <span className="text-xs md:text-sm">Family First</span>
              </div>
              <div className="divider hidden md:block"></div>
              <div className="flex items-center">
                <i className="fas fa-handshake text-gray-400 mr-2 text-sm"></i>
                <span className="text-xs md:text-sm">Together Forever</span>
              </div>
              <div className="divider hidden md:block"></div>
              <div className="flex items-center">
                <i className="fas fa-tree text-gray-400 mr-2 text-sm"></i>
                <span className="text-xs md:text-sm">Roots & Branches</span>
              </div>
            </div>

            {/* Social/Share icons */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 flex items-center justify-center group border border-gray-700 relative overflow-hidden"
                aria-label="Share family page"
                style={{
                  backgroundImage: `url(${raza_Profile})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 transition-all duration-300"></div>
                {/* Icon */}
                <i className="fas fa-share-alt group-hover:scale-110 group-active:scale-95 transition-transform text-sm md:text-base text-white relative z-10"></i>
              </button>

              <button
                className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 flex items-center justify-center group border border-gray-700 relative overflow-hidden"
                aria-label="Print family tree"
                style={{
                  backgroundImage: `url(${abba_Profile})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 transition-all duration-300"></div>
                {/* Icon */}
                <i className="fas fa-print group-hover:scale-110 group-active:scale-95 transition-transform text-sm md:text-base text-white relative z-10"></i>
              </button>

              <button
                className="w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300 flex items-center justify-center group border border-gray-700 relative overflow-hidden"
                aria-label="Download family info"
                style={{
                  backgroundImage: `url(${mutabbar_Profile})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 transition-all duration-300"></div>
                {/* Icon */}
                <i className="fas fa-download group-hover:scale-110 group-active:scale-95 transition-transform text-sm md:text-base text-white relative z-10"></i>
              </button>
            </div>


            {/* Mobile-friendly back to top button */}
            <button
              className="mt-6 md:hidden text-xs text-gray-500 hover:text-gray-300 transition-colors flex items-center justify-center mx-auto gap-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="fas fa-arrow-up"></i>
              <span>Back to Top</span>
            </button>
          </div>
          <div className="mt-4 pt-4 w-full text-center">Made By Mohammad Raza</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

