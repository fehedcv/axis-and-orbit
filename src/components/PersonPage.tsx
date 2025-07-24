import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, Linkedin, Mail, Phone, MapPin, Calendar, Code, Briefcase, User, Star, Award, Target } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    skills: string[];
    experience: number;
    projectsDone: number;
    github?: string;
    linkedin?: string;
    email?: string;
    phone?: string;
    location?: string;
    bio?: string;
    avatar?: string;
    detailedBio?: string;
    achievements?: string[];
    currentProjects?: string[];
    expertise?: string[];
}

const teamMembersData: TeamMember[] = [
    {
        id: "fhd",
        name: "Fahad Mohammed Kabeer Chullivalappil",
        role: "Project Manager",
        skills: ["React", "Node.js", "Python", "PostgreSQL", "IoT"],
        experience: 1,
        projectsDone: 4,
        github: "https://github.com/fehedcv",
        linkedin: "https://www.linkedin.com/in/fahad-mohammed-kabeer-cv-611305246/",
        email: "fahad@axisorbit.in",
        phone: "+91 8289848173",
        location: "Kerala, India",
        bio: "",
        avatar: "https://raw.githubusercontent.com/fehedcv/axis-and-orbit/refs/heads/main/img/fahad.jpeg",
        detailedBio: "A passionate and driven Computer Engineering student with hands-on experience in Python development, project management, and collaborative software projects. Currently contributing as Product Manager and Python Developer at Axis & Orbit, Fahad combines strong technical knowledge with an eye for usability and innovation. Proven ability to lead and contribute to real-world applications, including involvement in AI, web, and hardware-integrated projects. Always learning, always building.",
        currentProjects: [
            "Online exam portal for SSM Polytechnic College Tirur",
            "Water level management system for household water tanks",
            "Cubeeto - AI based learning for higher education"
        ],
        expertise: ["Full-Stack Development", "IoT", "Python Development", "Team Leadership"]
    }
];

const PersonPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const person = teamMembersData.find(member => member.id === id);

    if (!person) {
        return (
            <div className="min-h-screen bg-cream flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-burgundy-700 mb-4">Person Not Found</h1>
                    <button
                        onClick={() => navigate('/#team')}
                        className="bg-burgundy-700 text-white px-6 py-3 rounded-lg hover:bg-burgundy-800 transition-colors"
                    >
                        Back to Team
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream">
            {/* Header */}
            <div className="bg-burgundy-700 text-white">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <button
                        onClick={() => navigate('/#team')}
                        className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back
                    </button>

                    <div className="flex items-center space-x-8">
                        <div className="relative">
                            {person.avatar ? (
                                <img
                                    src={person.avatar}
                                    alt={person.name}
                                    className="w-32 h-32 rounded-full border-4 border-white/20 object-cover"
                                />
                            ) : (
                                <div className="w-32 h-32 rounded-full border-4 border-white/20 bg-white/10 flex items-center justify-center">
                                    <User className="w-16 h-16 text-white/80" />
                                </div>
                            )}
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3">
                                <Code className="w-6 h-6 text-burgundy-700" />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">{person.name}</h1>
                            <p className="text-xl text-white/90 mb-4">{person.role}</p>
                            {person.location && (
                                <div className="flex items-center text-white/80">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {person.location}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Stats Section */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <Calendar className="w-8 h-8 text-burgundy-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-burgundy-700 mb-1">{person.experience}</div>
                        <p className="text-gray-600">Years Experience</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-burgundy-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-burgundy-700 mb-1">{person.projectsDone}</div>
                        <p className="text-gray-600">Projects Completed</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <Code className="w-8 h-8 text-burgundy-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-burgundy-700 mb-1">{person.skills.length}</div>
                        <p className="text-gray-600">Technical Skills</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <Star className="w-8 h-8 text-burgundy-700 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-burgundy-700 mb-1">{person.expertise?.length || 4}</div>
                        <p className="text-gray-600">Areas of Expertise</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-burgundy-700 mb-6 flex items-center">
                                <User className="w-6 h-6 mr-3" />
                                About {person.name.split(' ')[0]}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {person.detailedBio || person.bio}
                            </p>
                        </div>

                        {/* Skills Section */}
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-burgundy-700 mb-6 flex items-center">
                                <Code className="w-6 h-6 mr-3" />
                                Technical Skills
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {person.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-burgundy-700 text-white rounded-full font-medium hover:bg-burgundy-800 transition-colors duration-200"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Section */}
                        {person.achievements && (
                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-burgundy-700 mb-6 flex items-center">
                                    <Award className="w-6 h-6 mr-3" />
                                    Key Achievements
                                </h2>
                                <div className="space-y-4">
                                    {person.achievements.map((achievement, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-gray-700">{achievement}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Current Projects */}
                        {person.currentProjects && (
                            <div className="bg-white rounded-xl p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-burgundy-700 mb-6 flex items-center">
                                    <Target className="w-6 h-6 mr-3" />
                                    Current Projects
                                </h2>
                                <div className="space-y-4">
                                    {person.currentProjects.map((project, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-burgundy-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                            <p className="text-gray-700">{project}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-burgundy-700 mb-4">Get In Touch</h3>
                            <div className="space-y-4">
                                {person.email && (
                                    <a
                                        href={`mailto:${person.email}`}
                                        className="flex items-center text-gray-600 hover:text-burgundy-700 transition-colors duration-200 group"
                                    >
                                        <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                        <span>{person.email}</span>
                                    </a>
                                )}

                                {person.phone && (
                                    <a
                                        href={`tel:${person.phone}`}
                                        className="flex items-center text-gray-600 hover:text-burgundy-700 transition-colors duration-200 group"
                                    >
                                        <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                        <span>{person.phone}</span>
                                    </a>
                                )}

                                {person.github && (
                                    <a
                                        href={person.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 hover:text-burgundy-700 transition-colors duration-200 group"
                                    >
                                        <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                        <span>GitHub Profile</span>
                                    </a>
                                )}

                                {person.linkedin && (
                                    <a
                                        href={person.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 hover:text-burgundy-700 transition-colors duration-200 group"
                                    >
                                        <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                        <span>LinkedIn Profile</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Areas of Expertise */}
                        {person.expertise && (
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-xl font-bold text-burgundy-700 mb-4">Areas of Expertise</h3>
                                <div className="space-y-2">
                                    {person.expertise.map((area, index) => (
                                        <div key={index} className="bg-cream px-3 py-2 rounded-lg text-gray-700 font-medium">
                                            {area}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonPage;
