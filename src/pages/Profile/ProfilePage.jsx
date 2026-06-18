import { useParams, Link, useNavigate } from "react-router-dom";
import { family } from "../../data/familyData";
import { findMemberById } from "../../utils/findMemberById";
import Footer from "../../components/common/Footer";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const ProfilePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const foundMember = findMemberById(family.siblings, id);
        if (!foundMember) {
            navigate("/not-found");
            return;
        }
        setMember(foundMember);
    }, [id, navigate]);

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
                <div className="text-slate-600 animate-pulse">Loading profile...</div>
            </div>
        );
    }

    const info = member.personalInfo || {};

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-slate-900 font-sans">
            {/* Back Button */}
            <div className="fixed top-6 left-6 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 px-5 py-2.5 rounded-full shadow-sm border border-slate-200 transition-all font-medium text-sm"
                >
                    ← Back
                </button>
            </div>

            {/* Profile Header */}
            <header className="pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-80 h-80 rounded-4xl object-cover border-4 border-white shadow-xl mb-8"
                    />
                    <h1 className="text-3xl lg:text-4xl sm:text-3xl font-serif font-bold text-slate-900">{member.name}</h1>
                    <p className="text-amber-700 font-medium uppercase tracking-[0.2em] text-sm mt-2">
                        {info.occupation || "Family Member"}
                    </p>
                </div>
            </header>

            {/* Personal Information */}
            <section className="max-w-4xl mx-auto px-6 py-6">
                <h2 className="text-2xl font-serif font-bold mb-8 border-l-4 border-amber-500 pl-4">Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {info.father && <InfoRow label="Father" value={info.father} />}
                    {info.mother && <InfoRow label="Mother" value={info.mother} />}
                    {info.dob && <InfoRow label="Born" value={info.dob} />}
                    {info.bloodGroup && <InfoRow label="Blood Type" value={info.bloodGroup} />}
                    {info.education && <InfoRow label="Education" value={info.education} />}
                    {info.address && <InfoRow label="Address" value={info.address} />}
                </div>

                {info.about && (
                    <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="font-serif text-xl mb-4">About {member.name.split(" ")[0]}</h3>
                        <p className="text-slate-600 leading-relaxed">{info.about}</p>
                    </div>
                )}
            </section>

            {/* Family Connections (Spouse/Children) */}
            <section className="max-w-4xl mx-auto px-6 py-4">
                {member.isMarried && member.spouse && (
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-serif font-bold mb-6">Spouse</h2>
                        <div className="inline-flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                            <img src={member.spouse.image} alt={member.spouse.name} className="w-20 h-20 rounded-full object-cover mb-3" />
                            <p className="font-semibold">{member.spouse.name}</p>
                        </div>
                    </div>
                )}

                {member.children?.length > 0 && (
                    <div className="text-center">
                        <h2 className="text-2xl font-serif font-bold mb-6">Children</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {member.children.map((child) => (
                                <Link key={child.id} to={`/profile/${child.id}`} className="group p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition">
                                    <img src={child.image} alt={child.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
                                    <p className="font-medium text-sm group-hover:text-amber-700">{child.name}</p>
                                    <p className="font-medium text-sm text-blue-700 flex justify-center items-center gap-1 ">
                                        <span>click</span>
                                        <span className="flex itms-center justify-center">
                                            <FaArrowRight size={9} />
                                        </span>
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{label}</p>
        <p className="font-medium text-slate-800">{value}</p>
    </div>
);

export default ProfilePage;