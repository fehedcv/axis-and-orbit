import React, {useEffect} from 'react';
import { Clock, Users, Briefcase, Target, Lightbulb, Rocket, Shield, Smartphone, Database, Brain, Lock, Code, MessageSquare, Globe, GraduationCap, Trophy, Video, BarChart3 } from 'lucide-react';

const Case3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-cream">
            {/* Header Section */}
            <div className="bg-burgundy-700 text-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            EduConnect Korea
                        </h1>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Gamified Online Learning for K-12
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Briefcase className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Client Type</h3>
                            <p className="text-sm opacity-80">EdTech Startup (Korea)</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Clock className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Duration</h3>
                            <p className="text-sm opacity-80">6 Weeks (MVP Delivery)</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Target className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Services</h3>
                            <p className="text-sm opacity-80">MVP Development, Gamification Design, Real-Time Features</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Users className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Team</h3>
                            <p className="text-sm opacity-80">Axis & Orbit (Localization, UX) + Specloid (Full-stack Engineering)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Challenge Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-burgundy-700 rounded-full p-3 mr-4">
                            <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-burgundy-700">Challenge</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            EduConnect Korea wanted to launch a comprehensive K-12 e-learning platform specifically designed for Korean students.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Launch a K-12 e-learning platform tailored to Korean students</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Integrate gamified learning modules, live classes, and analytics</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Deliver a fully working MVP within 6 weeks</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Secure school partnerships quickly with strong user traction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-burgundy-700 rounded-full p-3 mr-4">
                            <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-burgundy-700">Solution We Delivered</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Axis & Orbit provided local insight and product thinking, while Specloid executed the tech:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Globe className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">UX Localization</h4>
                                <p className="text-gray-600 text-sm">Child-friendly, Korean-language UI/UX</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Trophy className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Gamification</h4>
                                <p className="text-gray-600 text-sm">Badges, leaderboards, quizzes, and rewards</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Video className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Live Learning</h4>
                                <p className="text-gray-600 text-sm">WebRTC powered 1:1 and group classes</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Database className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Backend</h4>
                                <p className="text-gray-600 text-sm">Laravel + Redis for high performance</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Code className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Frontend</h4>
                                <p className="text-gray-600 text-sm">Vue.js for fast, modular delivery</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <BarChart3 className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Analytics</h4>
                                <p className="text-gray-600 text-sm">Custom dashboards for students, parents, and teachers</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-burgundy-700 rounded-full p-3 mr-4">
                            <Code className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-burgundy-700">Tech Stack</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">FE</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Frontend</h4>
                                <p className="text-gray-600 text-sm">Vue.js</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">BE</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Backend</h4>
                                <p className="text-gray-600 text-sm">Laravel + Redis</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Database className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Database</h4>
                                <p className="text-gray-600 text-sm">MySQL</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">📹</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Live Classes</h4>
                                <p className="text-gray-600 text-sm">WebRTC</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100 md:col-span-2">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">☁️</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Infrastructure</h4>
                                <p className="text-gray-600 text-sm">AWS + CloudFront CDN</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-burgundy-700 rounded-full p-3 mr-4">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-burgundy-700">Results</h2>
                    </div>

                    <div className="bg-burgundy-700 rounded-2xl text-white p-8">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold mb-2">6</div>
                                <p className="text-white/80">Weeks to MVP</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">K-12</div>
                                <p className="text-white/80">Education Focus</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">Live</div>
                                <p className="text-white/80">Interactive Classes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Client Feedback Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-burgundy-700 rounded-full p-3 mr-4">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-burgundy-700">Client Feedback</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="text-center">
                            <div className="text-6xl text-burgundy-700 mb-6">"</div>
                            <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed italic max-w-4xl mx-auto">
                                "Axis & Orbit and Specloid delivered beyond our expectations. The gamified learning platform launched on time, and Korean students are already engaging at incredible rates."
                            </blockquote>
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-burgundy-700 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">EC</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-burgundy-700">EduConnect Korea CEO</p>
                                    <p className="text-gray-600 text-sm">Client</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-burgundy-700 rounded-full p-3 mr-4">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-burgundy-700">Impact</h2>
                    </div>

                    <div className="bg-burgundy-700 rounded-2xl text-white p-8">
                        <div className="text-center">
                            <p className="text-xl leading-relaxed mb-6">
                                EduConnect Korea now serves thousands of K-12 students with gamified learning experiences. The platform's success led to rapid school partnerships and expansion across Korea's education sector.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 mt-8">
                                <div>
                                    <div className="text-3xl font-bold mb-2">1000s</div>
                                    <p className="text-white/80">Students Engaged</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">50+</div>
                                    <p className="text-white/80">School Partnerships</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">95%</div>
                                    <p className="text-white/80">Student Engagement Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
                    <h3 className="text-3xl font-bold text-burgundy-700 mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how we can help you build innovative EdTech solutions that engage users and drive educational outcomes.
                    </p>
                    <button className="bg-burgundy-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-burgundy-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Start Your Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Case3;