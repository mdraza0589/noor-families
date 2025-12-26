import { useParams, Link, useNavigate } from "react-router-dom";
import { family } from "../../data/familyData";
import { findMemberById } from "../../utils/findMemberById";
import Footer from "../../components/common/Footer";
import { useEffect, useState } from "react";

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
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    const info = member.personalInfo || {};

    return (
        <>
            {/* Back Button */}
            <div className="fixed top-4 left-4 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-black/60 text-white px-4 py-2 rounded-full"
                >
                    ← Back
                </button>
            </div>

            {/* Profile Header */}
            <section className="bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 text-white pt-20 pb-10">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white/20"
                        />

                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl sm:text-4xl font-bold">
                                {member.name}
                            </h1>

                            {info.occupation && (
                                <p className="text-gray-300 mt-1">
                                    {info.occupation}
                                </p>
                            )}

                            {info.education && (
                                <p className="mt-2 text-sm">
                                    {info.education}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                {member.portfolio && (
                    <div className="mt-3 text-center sm:text-left">
                        <a
                            href={member.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex items-center gap-2
                                px-4 py-2 rounded-full
                                bg-indigo-600/20 text-indigo-300
                                hover:bg-indigo-600/30 hover:text-indigo-200
                                transition text-sm font-medium
                            ">
                            <span>View Portfolio</span>
                            <span>🔗</span>
                        </a>
                    </div>
                )}

            </section>

            {/* Personal Information */}
            <section className="bg-black py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-white text-center">
                        Personal Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                        {info.father && (
                            <InfoRow label="Father's Name" value={info.father} icon="😊" />
                        )}

                        {info.mother && (
                            <InfoRow label="Mother's Name" value={info.mother} icon="🙌" />
                        )}

                        {info.dob && (
                            <InfoRow label="Date of Birth" value={info.dob} icon="🎂" />
                        )}

                        {info.bloodGroup && (
                            <InfoRow label="Blood Group" value={info.bloodGroup} icon="🩸" />
                        )}

                        {info.education && (
                            <InfoRow label="Education" value={info.education} icon="🎓" />
                        )}

                        {info.occupation && (
                            <InfoRow label="Occupation" value={info.occupation} icon="💼" />
                        )}

                        {info.favoriteColor && (
                            <InfoRow label="Favorite Color" value={info.favoriteColor} icon="🎨" />
                        )}

                        {info.favoriteFood && (
                            <InfoRow label="Favorite Food" value={info.favoriteFood} icon="🍽️" />
                        )}
                    </div>

                    {/* Hobbies */}
                    {info.hobbies?.length > 0 && (
                        <div className="mt-10 bg-white/5 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                Hobbies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {info.hobbies.map((hobby, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1 rounded-full bg-indigo-600/20 text-indigo-300 text-sm"
                                    >
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Visited Places */}
                    {info.visitedPlaces?.length > 0 && (
                        <div className="mt-10 bg-white/5 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4 text-white">
                                Visited Places
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {info.visitedPlaces.map((place, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1 rounded-full bg-emerald-600/20 text-emerald-300 text-sm"
                                    >
                                        {place}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* About */}
                    {info.about && (
                        <div className="mt-10 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-semibold mb-3 text-white">
                                About
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {info.about}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Spouse */}
            {member.isMarried && member.spouse && (
                <section className="bg-gradient-to-b from-gray-50 to-white py-14">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                            Spouse
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-white rounded-2xl shadow-lg p-6 sm:p-10">
                            <div className="text-center">
                                <img
                                    src={member.image}
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-200"
                                    alt={member.name}
                                />
                                <p className="mt-3 font-semibold">{member.name}</p>
                            </div>

                            <div className="text-3xl text-pink-500 font-bold">And</div>

                            <div className="text-center">
                                <img
                                    src={member.spouse.image}
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-pink-200"
                                    alt={member.spouse.name}
                                />
                                <p className="mt-3 font-semibold">
                                    {member.spouse.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Children */}
            {member.children?.length > 0 && (
                <section className="bg-gradient-to-b from-white to-gray-50 py-14">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                            Children
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {member.children.map((child) => (
                                <Link
                                    key={child.id}
                                    to={`/profile/${child.id}`}
                                    className="group bg-white rounded-2xl p-5 text-center shadow-md hover:shadow-xl transition"
                                >
                                    <img
                                        src={child.image}
                                        alt={child.name}
                                        className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white"
                                    />
                                    <p className="font-semibold">{child.name}</p>
                                    <span className="text-sm text-indigo-600">
                                        View Profile →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            <div className="flex justify-center my-4">
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
            </div>

            <Footer />
        </>
    );
};

const InfoRow = ({ label, value, icon }) => (
    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
        <span className="text-2xl">{icon}</span>
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
    </div>
);

export default ProfilePage;
