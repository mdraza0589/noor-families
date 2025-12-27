import { family } from "../../data/familyData";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Footer.css";

const mutabbar_Profile = "/gallery/profileImage/mutabbar.jpg";
const raza_Profile = "/gallery/profileImage/raza1.png";
const abba_Profile = "/images/abba.jpg";

const Footer = () => {
  const footerRef = useRef(null);
  const linkRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  /* ================= MOBILE CHECK ================= */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ================= ANIMATION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");

            linkRefs.current.forEach((link, i) => {
              if (link) {
                setTimeout(
                  () => link.classList.add("animate-in"),
                  i * (isMobile ? 40 : 80)
                );
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: isMobile ? 0.1 : 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  /* ================= RECURSIVE MEMBER FLATTENER ================= */
  const flattenMembers = () => {
    const members = [];

    const traverse = (person, parentName = null) => {
      members.push({
        id: person.id,
        name: person.name,
        image: person.image,
        parentName
      });

      if (person.children && person.children.length > 0) {
        person.children.forEach(child => {
          traverse(child, person.name);
        });
      }
    };

    // ONLY siblings + their descendants
    family.siblings.forEach(sibling => {
      traverse(sibling);
    });

    return members;
  };

  const allFamilyMembers = flattenMembers();

  /* ================= COLUMN LOGIC ================= */
  const chunkArray = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const columns = isMobile ? 2 : 3;
  const perColumn = Math.ceil(allFamilyMembers.length / columns);
  const memberColumns = chunkArray(allFamilyMembers, perColumn);

  /* ================= RENDER ================= */
  return (
    <footer
      ref={footerRef}
      className="footer-container bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            The <span className="shimmer-text">{family.familyName}</span>
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            {allFamilyMembers.length} Family Members
          </p>
        </div>

        {/* MEMBERS */}
        <div className="members-columns-container">
          {memberColumns.map((column, colIndex) => (
            <div key={colIndex} className="members-column">
              {column.map((member, idx) => {
                const globalIndex = colIndex * perColumn + idx;

                return (
                  <Link
                    key={member.id}
                    to={`/profile/${member.id}`}
                    ref={el => (linkRefs.current[globalIndex] = el)}
                    className="footer-link group flex items-center gap-3 p-3 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-600">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-sm font-medium">
                        {member.name}
                      </div>
                      {member.parentName && (
                        <div className="text-xs text-gray-400">
                          {member.parentName}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {family.familyName}
        </div>

        <div className="mt-2 text-center text-xs text-white">
          Made by Mohammad Raza
        </div>

        {/* ACTION ICONS */}
        <div className="mt-6 flex justify-center gap-4">
          {[raza_Profile, abba_Profile, mutabbar_Profile].map((img, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-full border border-gray-700 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
