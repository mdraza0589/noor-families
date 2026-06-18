import { family } from "../../data/familyData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/common/Footer";

const MembersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <style>{`
        .circle-ring {
          position: absolute;
          inset: -6px; /* Adjusts the gap between the frame and the ring */
          border-radius: 50%;
          background: linear-gradient(90deg, #8b5cf6, #ec4899, #f59e0b);
          animation: rotate 8s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          padding: 3px;
        }
        @keyframes rotate {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {family.siblings.map((member) => (
            <Link
              to={`/profile/${member.id}`}
              key={member.id}
              className="group flex flex-col items-center"
            >
              {/* Photo Container with Frame AND Ring */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 transition-transform duration-500 group-hover:scale-105">
                <div className="circle-ring"></div>
                <div className="w-full h-full rounded-full bg-white p-2 shadow-lg border border-slate-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Name Tag */}
              <h3 className="text-lg font-semibold text-slate-800 text-center group-hover:text-amber-800 transition-colors">
                {member.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Action Section */}
        <footer className="text-center border-t border-slate-200 pt-16">
          <button
            onClick={() => navigate("/family-gallery")}
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Family Gallery
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <div className="mt-12 text-slate-400 text-sm italic">
            "Family is not an important thing. It's everything."
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MembersPage;