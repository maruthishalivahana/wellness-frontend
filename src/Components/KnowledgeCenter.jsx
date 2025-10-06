import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Rss } from "lucide-react";

// Dummy Data
const blogPosts = [
    {
        id: 1,
        category: "Heart Care",
        title: "5 Ways to Keep Your Heart Healthy",
        doctor: "Dr. Evelyn Reed",
        image:
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16e?q=80&w=2070&auto=format&fit=crop",
        summary:
            "Simple lifestyle habits that can make a big difference in maintaining your heart health.",
    },
    {
        id: 2,
        category: "Mental Health",
        title: "Understanding Anxiety & Mind Balance",
        doctor: "Dr. Marcus Chen",
        image:
            "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
        summary:
            "Learn to identify early signs of stress and practical ways to achieve mental clarity.",
    },
    {
        id: 3,
        category: "Nutrition",
        title: "The Power of Balanced Meals",
        doctor: "Dr. Olivia Grant",
        image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
        summary:
            "Good nutrition is the foundation of long-term wellness — discover how to make it simple.",
    },
];

const videos = [
    {
        id: "AYOZ6_qw1hA",
        title: "Experience Advanced Care in Nizamabad",
        desc: "Wellness Hospitals Opens 7th Branch with 24/7 Services",
    },
    {
        id: "ZZRnsEVMUlA",
        title: "Patient Recovery Stories",
        desc: "Real patients. Real transformations. Watch their journeys.",
    },
    {
        id: "1kBrRbXSZ1Y",
        title: "World Mental Health Day",
        desc: "Promoting Mental Health at Work | Wellness Hospital Ameerpet.",
    },
    {
        id: "cx14gwVJw5Y",
        title: "How Does Drug Addiction Begin? | Prevention Measures | Drug Awareness",
        desc: "Drug addiction often starts with curiosity, peer pressure, or stress, gradually leading to dependence. Prevention includes awareness, counseling, family support, and healthy lifestyle choices.",
    },
    {
        id: "f7RmYn48hi4",
        title: "Foods to Avoid with Heart Disease | Heart Healthy Diet | Wellness Hospitals",
        desc: "Certain foods can worsen heart conditions, including fried items, processed foods, excessive salt, and sugary treats. A heart-healthy diet focuses on fresh fruits, vegetables, whole grains, and lean proteins to support cardiovascular wellness.",
    },
    {
        id: "w2bxKeAZatk",
        title: "The Role of Nutrition in Brain Health | Dr. Wellness Bot | Wellness Hospitals",
        desc: "Proper nutrition plays a vital role in maintaining brain health. A balanced diet rich in fruits, vegetables, healthy fats, and proteins supports memory, focus, and overall cognitive function.",
    },
];

const KnowledgeCenter = () => {
    const playersRef = useRef({});
    const [currentPlaying, setCurrentPlaying] = useState(null);

    useEffect(() => {
        // Load YouTube IFrame API script
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        }

        // Initialize players after API is ready
        window.onYouTubeIframeAPIReady = () => {
            videos.forEach((video) => {
                playersRef.current[video.id] = new window.YT.Player(video.id, {
                    videoId: video.id,
                    events: {
                        onStateChange: (e) => handleStateChange(video.id, e),
                    },
                    playerVars: {
                        modestbranding: 1,
                        rel: 0,
                    },
                });
            });
        };
    }, []);

    const handleStateChange = (id, event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            if (currentPlaying && currentPlaying !== id) {
                playersRef.current[currentPlaying].pauseVideo();
            }
            setCurrentPlaying(id);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
            {/* Hero */}
            <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-bold mb-4"
                >
                    Knowledge Center
                </motion.h1>
                <p className="text-lg max-w-2xl mx-auto opacity-90">
                    Learn directly from our doctors and discover health insights through articles, blogs, and videos — all in one place.
                </p>
            </section>

            {/* Blogs */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Doctor Insights & Blogs</h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {blogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                        >
                            <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
                            <div className="p-6">
                                <p className="text-sm text-blue-600 font-medium">{post.category}</p>
                                <h3 className="font-semibold text-xl mt-2">{post.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{post.summary}</p>
                                <p className="mt-4 text-sm font-semibold text-gray-700">— {post.doctor}</p>
                                <a href="#" className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                                    Read More →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* YouTube Videos */}
            <section className="bg-white py-16">
                <h2 className="text-3xl font-bold text-center mb-4">Watch Our YouTube Channel</h2>
                <p className="text-center text-gray-600 mb-10">
                    Watch expert talks, patient stories, and treatment insights right here.
                </p>

                <div className="grid gap-10 md:grid-cols-3 px-6 container mx-auto">
                    {videos.map((v) => (
                        <motion.div
                            key={v.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-lg bg-gray-100"
                        >
                            <div className="aspect-video">
                                <div id={v.id} className="w-full h-full">


                                </div> {/* YouTube IFrame API will replace this */}
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold">{v.title}</h3>
                                <p className="text-gray-600 text-sm mt-2">{v.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/wellnesshospitals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
                    >
                        <PlayCircle className="w-5 h-5" />
                        Visit Our YouTube Channel
                    </a>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 text-center bg-gradient-to-br from-blue-50 to-white">
                <Rss className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-3">Stay Updated with Health Insights</h2>
                <p className="text-gray-600 mb-8">
                    Subscribe to get weekly updates, blogs, and health tips from our experts.
                </p>
                <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow p-3 border rounded-full focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </section>
        </div>
    );
};

export default KnowledgeCenter;
