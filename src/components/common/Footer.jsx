import { family } from "../../data/familyData";
import { Link } from "react-router-dom";

// Profile image constants
const mutabbar_Profile = "/gallery/profileImage/mutabbar.jpeg";
const raza_Profile = "/gallery/profileImage/raza1.png";
const abba_Profile = "/images/abba.jpg";

const Footer = () => {
  const flattenMembers = () => {
    const members = [];
    const traverse = (person, parentName = null) => {
      members.push({ id: person.id, name: person.name, image: person.image, parentName });
      if (person.children) person.children.forEach(child => traverse(child, person.name));
    };
    family.siblings.forEach(sibling => traverse(sibling));
    return members;
  };

  const allFamilyMembers = flattenMembers();

  return (
    <footer className="bg-gradient-to-b from-[#fdfbf7] via-[#f7f2eb] to-[#efe7de] text-stone-700 pb-16 px-6 border-t border-stone-300/80 shadow-2xl relative overflow-hidden">

      {/* Subtle warm champagne ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-stone-900 mt-4 mb-2 tracking-wide font-normal">
            {family.familyName}
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent mx-auto mt-3"></div>
          <p className="text-stone-800 text-xs mt-4 uppercase tracking-[0.2em]">
            {allFamilyMembers.length} Members
          </p>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {allFamilyMembers.map((member) => (
            <Link
              key={member.id}
              to={`/profile/${member.id}`}
              className="group relative flex flex-col items-center p-4 rounded-2xl bg-white/80 hover:bg-white border border-stone-200/80 hover:border-amber-600/40 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-stone-300 mb-3 group-hover:border-amber-600 group-hover:scale-105 transition-all duration-300 shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium text-stone-800 group-hover:text-amber-800 transition-colors text-center leading-tight">
                {member.name}
              </span>
              {member.parentName && (
                <span className="text-[10px] text-stone-500 mt-1 uppercase tracking-wider text-center">
                  {member.parentName}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center border-t border-stone-300/60 pt-8 gap-5">
          <p className="text-xs text-stone-500 tracking-wider">
            © {new Date().getFullYear()} {family.familyName} Heritage
          </p>
          <p className="text-sm text-stone-800 font-medium">
            Crafted by <span className="text-amber-800 font-semibold tracking-wide">Mohammad Raza</span>
          </p>

          {/* Profile Avatars */}
          <div className="flex gap-4 items-center pt-2">
            {[
              { img: raza_Profile, label: "Raza" },
              { img: abba_Profile, label: "Abba" },
              { img: mutabbar_Profile, label: "Mutabbar" }
            ].map((profile, i) => (
              <div
                key={i}
                title={profile.label}
                className="w-10 h-10 rounded-full border-2 border-stone-300 bg-cover bg-center shadow-md hover:scale-110 hover:border-amber-600 transition-all duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${profile.img})` }}
              />
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;