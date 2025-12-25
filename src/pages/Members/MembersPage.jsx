import { family } from "../../data/familyData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";
import { useEffect, useRef } from "react";

const MembersPage = () => {
  const memberRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    memberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      memberRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      <style>
        {`
        /* --- ALL YOUR EXISTING STYLES (UNCHANGED) --- */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        .member-card { opacity: 0; }
        .member-card.animate-in {
          opacity: 1;
          animation: fadeIn 0.8s ease-out forwards;
        }
        .image-container {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 20px;
        }
        .circle-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid white;
          transition: 0.4s;
        }
        .circle-image:hover { transform: scale(1.08); }
        .circle-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: linear-gradient(90deg,#8b5cf6,#ec4899,#f59e0b);
          animation: rotate 8s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          padding: 2px;
        }
        @keyframes rotate {
          to { transform: rotate(360deg); }
        }
        .name-tag {
          background: linear-gradient(135deg,#667eea,#764ba2);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-weight: 600;
          margin-top: 10px;
          transition: 0.3s;
        }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-indigo-50 px-4 py-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fadeIn">
              Family Members
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            <p
              className="text-gray-600 mt-6 animate-fadeIn opacity-0"
              style={{ animationDelay: "300ms" }}
            >
              Meet all the wonderful members of our family
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {family.siblings.map((member, index) => (
              <Link
                to={`/profile/${member.id}`}
                key={member.id}
                className="member-card"
                ref={(el) => (memberRefs.current[index] = el)}
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="image-container">
                    <div className="circle-ring"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="circle-image"
                    />
                  </div>
                  <div className="name-tag">{member.name}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* ✅ FIXED BUTTON (NO DESIGN CHANGE, ONLY LOGIC ADDED) */}
          <div
            className="mt-16 text-center animate-fadeIn opacity-0"
            style={{ animationDelay: "800ms" }}
          >
            <button
              onClick={() => navigate("/family-gallery")}
              className="
                px-8 py-4 rounded-full
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                text-white font-semibold text-lg
                shadow-lg hover:scale-105 transition
              "
            >
              See Family Photos
            </button>

            <div className="mt-6 inline-flex items-center space-x-4 text-gray-500">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-400"></div>
              <span className="text-sm">Family • Love • Together</span>
              <div className="h-px w-12 bg-gradient-to-r from-gray-400 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default MembersPage;
