import React, {useEffect} from 'react';
import { Clock, Users, Briefcase, Target, Lightbulb, Rocket, Shield, Smartphone, Database, Brain, Lock, Code, MessageSquare, Globe } from 'lucide-react';

const Case1 = () => {
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
                            ZenMarket
                        </h1>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Global Marketplace for Japanese Artisans
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Briefcase className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Client Type</h3>
                            <p className="text-sm opacity-80">E-commerce Startup (Japan)</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Clock className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Duration</h3>
                            <p className="text-sm opacity-80">5 Weeks</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Target className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Services</h3>
                            <p className="text-sm opacity-80">E-commerce Platform, Global Marketplace, Cross-border Trade</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Users className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Team</h3>
                            <p className="text-sm opacity-80">Axis & Orbit (UX, Strategy, Engineering)</p>
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
                            The client needed to build a global marketplace that would connect Japanese artisans with international customers.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Build a cross-platform e-commerce marketplace</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Enable Japanese artisans to sell globally</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Handle cross-border payments and shipping</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Launch a scalable platform within 5 weeks</p>
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
                        <h2 className="text-4xl font-bold text-burgundy-700">Our Solution</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            Axis & Orbit led the design and development of ZenMarket with a focus on connecting cultures through authentic craftsmanship:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Target className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Product Strategy</h4>
                                <p className="text-gray-600 text-sm">Built around authentic Japanese craftsmanship and global accessibility</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Users className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Design Thinking</h4>
                                <p className="text-gray-600 text-sm">Elegant, minimalist UX celebrating Japanese aesthetics</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Globe className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Global Platform</h4>
                                <p className="text-gray-600 text-sm">Multi-language support with cross-border commerce</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Database className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Marketplace</h4>
                                <p className="text-gray-600 text-sm">Scalable e-commerce platform with inventory management</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Lock className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Payments</h4>
                                <p className="text-gray-600 text-sm">Secure international payment processing with Stripe</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Shield className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Security</h4>
                                <p className="text-gray-600 text-sm">Enterprise-grade security with GDPR compliance</p>
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
                                <p className="text-gray-600 text-sm">React.js (Next.js)</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">BE</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Backend</h4>
                                <p className="text-gray-600 text-sm">Node.js + Express</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Database className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Database</h4>
                                <p className="text-gray-600 text-sm">MongoDB</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">💳</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Payments</h4>
                                <p className="text-gray-600 text-sm">Stripe</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100 md:col-span-2">
                                <div className="w-8 h-8 bg-burgundy-700 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-sm">☁️</span>
                                </div>
                                <h4 className="font-semibold text-burgundy-700 mb-2">Infrastructure</h4>
                                <p className="text-gray-600 text-sm">Vercel + Cloudflare CDN</p>
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
                                <div className="text-4xl font-bold mb-2">5</div>
                                <p className="text-white/80">Weeks to Launch</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">Global</div>
                                <p className="text-white/80">Market Reach</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">100s</div>
                                <p className="text-white/80">Artisans Connected</p>
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
                                "We were amazed by the speed and quality of Axis & Orbit. In just 5 weeks, they took our vision and made it global. Our artisan partners saw real sales in week one."
                            </blockquote>
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-burgundy-700 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-white font-bold">ZM</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-burgundy-700">ZenMarket Founder</p>
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
                                ZenMarket now empowers hundreds of Japanese artisans to sell globally, with a scalable tech platform built for cross-border trade. Axis & Orbit's fast execution made their vision reality — in record time.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 mt-8">
                                <div>
                                    <div className="text-3xl font-bold mb-2">100s</div>
                                    <p className="text-white/80">Japanese Artisans Empowered</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">Global</div>
                                    <p className="text-white/80">Market Reach</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">Week 1</div>
                                    <p className="text-white/80">First Sales Achieved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
                    <h3 className="text-3xl font-bold text-burgundy-700 mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how we can help you build innovative solutions that drive results and exceed expectations.
                    </p>
                    <button className="bg-burgundy-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-burgundy-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Start Your Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Case1;