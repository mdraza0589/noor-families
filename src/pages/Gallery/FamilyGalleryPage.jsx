import { familyGallery } from "../../data/familyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const FamilyGalleryPage = () => {
    const All2 = "/gallery/All/brother1.jpg";

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white py-16">
                <div className="max-w-7xl mx-auto px-4">

                    {/* ================= HEADER ================= */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Family Gallery
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                            Moments captured with love ❤️ — memories that stay forever
                        </p>
                    </div>

                    {/* Optional Banner Image */}
                    <div className="mb-14">
                        <img
                            src={All2}
                            alt="Family"
                            className="w-full object-cover rounded-3xl border border-white/10"
                        />
                    </div>

                    {/* ================= MAIN GALLERY ================= */}
                    <div className="grid grid-cols-1 gap-14">
                        {familyGallery.categories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white/5 rounded-3xl p-2 sm:p-8 border border-white/10 shadow-lg"
                            >
                                {/* Category Header */}
                                <div className="mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-semibold">
                                        {category.title}
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {category.description}
                                    </p>
                                </div>

                                {/* ================= IMAGES ================= */}
                                {category.media.some(item => item.type === "image") && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
                                        {category.media
                                            .filter(item => item.type === "image")
                                            .map(photo => (
                                                <div
                                                    key={photo.id}
                                                    onClick={() => setSelectedImage(photo)}
                                                    className="group relative overflow-hidden rounded-2xl bg-black cursor-pointer"
                                                >
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.title}
                                                        className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />

                                                    {/* Overlay */}
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end">
                                                        <p className="text-xs p-2 text-gray-200">
                                                            {photo.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                )}

                                {/* ================= VIDEOS ================= */}
                                {category.media.some(item => item.type === "video") && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {category.media
                                            .filter(item => item.type === "video")
                                            .map(video => (
                                                <div
                                                    key={video.id}
                                                    className="rounded-2xl overflow-hidden bg-black border border-white/10 shadow-md"
                                                >
                                                    <video
                                                        controls
                                                        className="w-full h-60 object-cover"
                                                    >
                                                        <source src={video.src} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>

                                                    <div className="p-3 text-center text-sm bg-black/70 text-gray-300">
                                                        {video.title}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* ================= BACK BUTTON ================= */}
                    <div className="text-center mt-20">
                        <Link
                            to="/home"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition text-sm"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= FULLSCREEN IMAGE MODAL ================= */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white text-3xl hover:text-red-400"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />

                        {/* Caption */}
                        {selectedImage.title && (
                            <p className="mt-4 text-center text-gray-300 text-sm">
                                {selectedImage.title}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FamilyGalleryPage;
