import { family } from "../../data/familyData";
import Footer from "../../components/common/Footer";
import MembersPage from "../Members/MembersPage";

const HomePage = () => {
  const { father, mother } = family.parents;

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <span className="text-amber-700 font-medium tracking-[0.2em] uppercase text-sm">
          Our Heritage
        </span>
        <h1 className="text-6xl md:text-7xl font-serif text-slate-900 mt-4 mb-6">
          {family.familyName}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto italic">
          "Where family, memories, and generations connect."
        </p>
      </section>

      {/* Parents Section - Circular Portrait Style */}
      <section className="py-4 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            {[father, mother].map((p) => (
              <div key={p.id} className="flex flex-col items-center group">
                <h2 className="text-2xl font-serif font-bold text-slate-900">{p.name}</h2>
                <p className="text-amber-700 font-medium tracking-wide text-sm uppercase mt-1">
                  {p.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-l-4 border-amber-500 pl-6 mb-12">
            <h3 className="text-3xl font-serif text-slate-900">The Family Tree</h3>
            <p className="text-slate-500 mt-2">Meet the wonderful people who make us who we are.</p>
          </div>
          <MembersPage />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;