import { family } from "../../data/familyData";
import { Link } from "react-router-dom";

// Ensure these are imported or defined as they were in your previous component
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
    <footer className="bg-slate-950 text-slate-300 py-16 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-2">{family.familyName}</h2>
          <div className="w-16 h-px bg-slate-700 mx-auto"></div>
          <p className="text-slate-200 text-sm mt-4 uppercase tracking-widest">
            {allFamilyMembers.length} Members in our Family
          </p>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {allFamilyMembers.map((member) => (
            <Link
              key={member.id}
              to={`/profile/${member.id}`}
              className="group flex flex-col items-center p-3 rounded-xl hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-800 mb-3 group-hover:border-amber-700 transition-colors">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-medium group-hover:text-amber-500 transition-colors text-center leading-tight">
                {member.name}
              </span>
              {/* FIXED: Show parent name if it exists */}
              {member.parentName && (
                <span className="text-[10px] text-slate-600 mt-1 uppercase tracking-wider">
                  {member.parentName}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center border-t border-slate-900 pt-8 gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} {family.familyName} Heritage
          </p>
          <p className="text-sm text-gray-300">
            Crafted by Mohammad Raza
          </p>

          {/* FIXED: Mapped the action icons correctly */}
          <div className="flex gap-4">
            {[raza_Profile, abba_Profile, mutabbar_Profile].map((img, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-slate-700 bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

