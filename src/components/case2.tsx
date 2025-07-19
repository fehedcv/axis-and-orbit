import React, { useEffect } from 'react';
import {
    Clock,
    Users,
    Briefcase,
    Target,
    Lightbulb,
    Rocket,
    Shield,
    Smartphone,
    Database,
    Brain,
    Lock
} from 'lucide-react';

const Case2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-cream">
            {/* Header Section */}
            <div className="bg-burgundy-700 text-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">FinTrack Singapore</h1>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            AI-Driven Personal Finance App
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Briefcase className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Client Type</h3>
                            <p className="text-sm opacity-80">Fintech Startup (Singapore)</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Clock className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Duration</h3>
                            <p className="text-sm opacity-80">8 Weeks</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Target className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Services</h3>
                            <p className="text-sm opacity-80">
                                Product Strategy, Mobile App Development, AI Integration
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                            <Users className="w-8 h-8 mx-auto mb-3 opacity-90" />
                            <h3 className="font-semibold mb-2">Team</h3>
                            <p className="text-sm opacity-80">Axis & Orbit</p>
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
                            The client needed to build a comprehensive financial solution that would stand out in
                            Singapore's competitive fintech market.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">Build a cross-platform finance management app</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        Provide AI-powered insights for users' spending habits
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        Ensure bank-grade security, real-time sync, and excellent UX
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p className="text-gray-700">
                                        Launch to the App Store and Google Play within 8 weeks
                                    </p>
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
                            Axis & Orbit led the design and development of FinTrack with a focus on "financial calmness"
                            and simplicity:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Target className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Product Strategy</h4>
                                <p className="text-gray-600 text-sm">Built around "financial calmness" and simplicity</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Users className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Design Thinking</h4>
                                <p className="text-gray-600 text-sm">Clean, calming UX with human-first interactions</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Smartphone className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Mobile App</h4>
                                <p className="text-gray-600 text-sm">Built in React Native for iOS + Android</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Database className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Backend</h4>
                                <p className="text-gray-600 text-sm">Python microservices with PostgreSQL</p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Brain className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">AI Engine</h4>
                                <p className="text-gray-600 text-sm">
                                    TensorFlow model to analyze and categorize spending patterns
                                </p>
                            </div>

                            <div className="bg-cream rounded-xl p-6 border border-gray-100">
                                <Shield className="w-8 h-8 text-burgundy-700 mb-4" />
                                <h4 className="font-semibold text-burgundy-700 mb-2">Security</h4>
                                <p className="text-gray-600 text-sm">
                                    AES-256 encryption, biometric login, and GDPR compliance
                                </p>
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
                                <div className="text-4xl font-bold mb-2">8</div>
                                <p className="text-white/80">Weeks to Launch</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <p className="text-white/80">Security Compliance</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">2</div>
                                <p className="text-white/80">Platforms (iOS & Android)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
                    <h3 className="text-3xl font-bold text-burgundy-700 mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how we can help you build innovative solutions that drive results and exceed
                        expectations.
                    </p>
                    <button className="bg-burgundy-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-burgundy-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Start Your Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Case2;
