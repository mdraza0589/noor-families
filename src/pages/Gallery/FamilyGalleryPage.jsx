import { familyGallery } from "../../data/familyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/common/Footer";

const FamilyGalleryPage = () => {
    const All2 = "/gallery/All/brother1.jpg";
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image download
    const handleDownload = async (src, title) => {
        try {
            const response = await fetch(src);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${title || "family-photo"}.jpg`);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error("Download failed", error);
        }
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-slate-800 pt-10">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <header className="text-center mb-6">
                    <span className="text-amber-700 font-medium tracking-[0.2em] uppercase text-sm">Our Memories</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mt-4 mb-6">Family Gallery</h1>
                    <div className="h-px w-20 bg-slate-300 mx-auto"></div>
                </header>

                {/* Banner */}
                <div className="mb-20">
                    <img src={All2} alt="Family" className=" object-contain rounded-2xl" />
                </div>

                {/* Categories */}
                <div className="space-y-10">
                    {familyGallery.categories.map((category) => (
                        <section key={category.id}>
                            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-l-4 border-amber-500 pl-4">
                                {category.title}
                            </h2>

                            {/* Images Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {category.media.filter(i => i.type === "image").map(photo => (
                                    <div
                                        key={photo.id}
                                        onClick={() => setSelectedImage(photo)}
                                        className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-slate-200"
                                    >
                                        <img src={photo.src} alt={photo.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Back Button */}
                <div className="text-center mt-24 mb-6">
                    <Link to="/" className="text-slate-500 hover:text-slate-900 transition underline underline-offset-8">
                        ← Back to Home
                    </Link>
                </div>
            </div>

            {/* Fullscreen Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white text-xl">Close</button>

                        <img src={selectedImage.src} alt={selectedImage.title} className="w-full max-h-[70vh] object-contain rounded-lg" />

                        <div className="mt-6 flex justify-between items-center text-white">
                            <p className="font-medium">{selectedImage.title}</p>
                            <button
                                onClick={() => handleDownload(selectedImage.src, selectedImage.title)}
                                className="px-6 py-2 bg-amber-600 hover:bg-amber-700 rounded-full text-sm font-medium transition"
                            >
                                Download Image
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default FamilyGalleryPage;