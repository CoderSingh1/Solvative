import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  BrainCircuit, 
  Cloud, 
  Mail, 
  Phone, 
  ExternalLink, 
  Moon, 
  Sun, 
  Code2, 
  Database, 
  Layers,
  Users,
  Menu,
  X,
  Briefcase,
  Terminal,
  Cpu, 
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Building2,
  MessageCircle,
  MapPin,
  QrCode,
  ShoppingBag,
  HeartPulse
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const experiences = [
    {
      company: "WeUpdaters",
      role: "Strategic AI & App Partners",
      period: "August 2025 - Present",
      desc: "Developing high-end digital solutions and smart society frameworks, focusing on seamless integration between mobile ecosystems and commercial infrastructure."
    },
    {
      company: "Visionary AI",
      role: "Core Development Team",
      period: "June 2025 - Present",
      desc: "Architecting cross-platform Flutter apps with integrated smart search pipelines and community management features."
    },
    {
      company: "Smart Solutions IT",
      role: "Lead Developers",
      period: "April 2025 - May 2025",
      desc: "Modernized a religious app reaching 1M+ downloads, implementing synchronization and accessibility features."
    }
  ];

  const projects = [
    {
      title: "Legacy Carry",
      category: "live",
      metric: "Smart Society App",
      desc: "A smart application for societies to connect residents and businesses, facilitating seamless community commerce and management.",
      tags: ["Flutter", "Smart App", "Community Tech", "Commerce"]
    },
    {
      title: "Nitnem Audio",
      category: "live",
      metric: "1M+ Downloads",
      desc: "High-scale religious app featuring synchronized audio-text and custom UI engines.",
      tags: ["Android", "Java", "XML", "Optimization"],
      link: "https://play.google.com/store/apps/details?id=com.smartsolution.nitnempathpro"
    },
    {
      title: "Lumeo",
      category: "ai",
      metric: "ML Image Finding",
      desc: "ML-powered gallery and image finding system that uses neural search to index and retrieve media based on visual content.",
      tags: ["ML Model", "Image Search", "Neural Engine"],
      link: "https://play.google.com/store/apps/details?id=com.nisargmedia.lumeo"
    },
    {
      title: "Voltride App",
      category: "live",
      metric: "Ride Sharing",
      desc: "Uber-like ride-sharing platform integrated with Google SDK for real-time tracking, route optimization, and seamless mobility.",
      tags: ["Flutter", "Google Maps SDK", "Location Services", "Real-time"],
      link: "#"
    },
    {
      title: "Emergency App",
      category: "live",
      metric: "Safety System",
      desc: "Smart emergency help system utilizing Google SDK and user location to provide instant assistance triggers for residents.",
      tags: ["Google SDK", "Geo-fencing", "Emergency Response"],
      link: "#"
    },
    {
      title: "QR Ticketing System",
      category: "live",
      metric: "Ticketing",
      desc: "Organization-wide ticketing app with instant payments, QR scanning, and automated event scheduling for universities.",
      tags: ["QR Code", "Payment Integration", "Scheduling"],
      link: "#"
    },
    {
      title: "Isher E-Commerce",
      category: "live",
      metric: "Retail",
      desc: "Full-stack mobile commerce solution featuring product catalogs, secure checkout, and real-time order tracking.",
      tags: ["E-Commerce", "API Integration", "Flutter"],
      link: "#"
    },
    {
      title: "Chat Insights Engine",
      category: "ai",
      metric: "NLP Pipeline",
      desc: "NLP analyzer converting raw conversational data into sentiment trends and visualizations.",
      tags: ["NLP", "Pandas", "Analysis"],
      link: "#"
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className={`${darkMode ? 'bg-[#0a0a0a] text-zinc-100' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans selection:bg-indigo-500/30`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 border-b backdrop-blur-xl ${darkMode ? 'border-white/5 bg-black/50' : 'border-slate-200 bg-white/70'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-black group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-600/20">S</div>
            <span className={`text-xl font-black tracking-tighter italic ${darkMode ? 'text-white' : 'text-slate-900'}`}>SOLVATIVE</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Experience', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs font-bold hover:text-indigo-600 transition-colors uppercase tracking-widest ${darkMode ? 'text-white/60 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}>{item}</a>
            ))}
            <button onClick={toggleTheme} className={`p-2.5 rounded-full border transition-all ${darkMode ? 'border-white/10 hover:bg-white/5 text-white' : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-900 shadow-sm'}`}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="p-2 rounded-full">
              {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-slate-900" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={darkMode ? 'text-white' : 'text-slate-900'}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden fixed inset-0 z-40 pt-24 px-6 ${darkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="space-y-6">
            {['Services', 'Experience', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className={`block text-3xl font-bold italic ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item}</a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Main Hero Card */}
          <div className={`lg:col-span-8 p-10 rounded-[2.5rem] border flex flex-col justify-center relative overflow-hidden transition-all duration-500 ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}>
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <BrainCircuit size={120} className={darkMode ? 'text-white' : 'text-slate-900'} />
             </div>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-600 text-xs font-bold mb-8 w-fit border border-indigo-600/20">
                <Cpu size={14} className="animate-pulse" />
                AI + MOBILE ARCHITECTS
             </div>
             <h1 className={`text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase italic ${darkMode ? 'text-white' : 'text-slate-900'}`}>
               INTELLIGENT <br /> AI APPS.
             </h1>
             <p className={`text-lg md:text-xl max-w-2xl leading-relaxed mb-10 ${darkMode ? 'text-white/60' : 'text-slate-600'}`}>
               Solvative is an elite duo of <span className="text-indigo-600 font-bold">Flutter Developers</span> and <span className="text-indigo-600 font-bold">AI/ML Engineers</span>. We specialize in building high-performance mobile applications with seamless AI integration.
             </p>
             <div className="flex gap-4">
                <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-black tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/30">
                  BOOK A CONSULT <ArrowUpRight size={20}/>
                </a>
             </div>
          </div>

          {/* Team Side Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/40'}`}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-600/20">S</div>
                <div>
                  <h3 className={`font-black text-xl uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>Satnam Singh</h3>
                  <p className="text-sm text-indigo-600 font-bold">Lead Flutter Developer</p>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-white border-slate-200 shadow-lg shadow-slate-200/40'}`}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-600/20">S</div>
                <div>
                  <h3 className={`font-black text-xl uppercase tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>Sukhmeet Singh</h3>
                  <p className="text-sm text-purple-600 font-bold">AI/ML Engineer</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-[2rem] border text-center transition-all duration-500 ${darkMode ? 'bg-indigo-500/5 border-indigo-500/10' : 'bg-white border-slate-200 shadow-md shadow-slate-200/30'}`}>
                <div className="text-3xl font-black text-indigo-600 tracking-tighter">10+</div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${darkMode ? 'opacity-50' : 'text-slate-500'}`}>Projects Built</div>
              </div>
              <div className={`p-6 rounded-[2rem] border text-center transition-all duration-500 ${darkMode ? 'bg-purple-500/5 border-purple-500/10' : 'bg-white border-slate-200 shadow-md shadow-slate-200/30'}`}>
                <div className="text-3xl font-black text-purple-600 tracking-tighter">1M+</div>
                <div className={`text-[10px] font-black uppercase tracking-widest ${darkMode ? 'opacity-50' : 'text-slate-500'}`}>App Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-6 ${darkMode ? 'bg-zinc-900/30' : 'bg-slate-200/30'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <h2 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase italic ${darkMode ? 'text-white' : 'text-slate-900'}`}>Services.</h2>
            <p className={`max-w-md text-sm ${darkMode ? 'opacity-50' : 'text-slate-500'}`}>Engineered for performance. Built for intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Smartphone />, title: "FLUTTER APP DEV", desc: "Native-quality cross-platform applications built with clean architecture and smooth performance on iOS & Android." },
              { icon: <BrainCircuit />, title: "AI/ML INTEGRATION", desc: "Embedding custom models, computer vision, and NLP directly into mobile interfaces for smarter user experiences." },
              { icon: <Code2 />, title: "AI CONSULTANCY", desc: "Strategizing how to leverage machine learning to automate business processes and enhance app functionality." }
            ].map((s, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] border group hover:border-indigo-600 transition-all duration-300 ${darkMode ? 'bg-zinc-900 border-white/5' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-600/5'}`}>
                <div className="w-14 h-14 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className={`text-xl font-black mb-4 tracking-tighter uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                <p className={`leading-relaxed text-sm ${darkMode ? 'opacity-60' : 'text-slate-600'}`}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
         <h2 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-16 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Timeline.</h2>
         <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`group relative pl-8 border-l-2 transition-colors pb-8 ${darkMode ? 'border-indigo-500/20 hover:border-indigo-500' : 'border-slate-200 hover:border-indigo-600'}`}>
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 ${darkMode ? 'bg-indigo-500 border-black' : 'bg-indigo-600 border-white shadow-sm'}`}></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>{exp.company}</h3>
                  <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest">{exp.role}</p>
                  {exp.company === "WeUpdaters" && <ShieldCheck size={14} className="text-emerald-500" />}
                </div>
                <p className={`max-w-2xl text-sm leading-relaxed ${darkMode ? 'opacity-60' : 'text-slate-600'}`}>{exp.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-6 max-w-7xl mx-auto border-t ${darkMode ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
          <div>
            <h2 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Featured Work.</h2>
            <p className={`${darkMode ? 'opacity-50' : 'text-slate-500'}`}>Intelligent apps, live in production.</p>
          </div>
          <div className={`flex gap-2 p-1.5 rounded-2xl border transition-colors ${darkMode ? 'bg-zinc-800/20 border-white/5' : 'bg-slate-200/50 border-slate-200'}`}>
            {['all', 'live', 'ai'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : darkMode ? 'hover:bg-white/5 text-zinc-500' : 'hover:bg-white text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((p, i) => (
            <div key={i} className={`p-8 rounded-[3rem] border group transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-zinc-900/50 border-white/5 hover:border-indigo-500/30' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200 hover:border-indigo-600/30'}`}>
              <div className="flex justify-between items-start mb-8">
                <span className={`text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border ${p.category === 'ai' ? 'text-purple-600 bg-purple-600/10 border-purple-600/20' : 'text-emerald-600 bg-emerald-600/10 border-emerald-600/20'}`}>{p.metric}</span>
                {p.link !== "#" && (
                  <a href={p.link} target="_blank" rel="noreferrer" className={`p-3 rounded-2xl transition-all group/link ${darkMode ? 'bg-zinc-800/50 hover:bg-indigo-600' : 'bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white'}`}>
                    <ExternalLink size={18} className="group-hover/link:scale-125 transition-transform" />
                  </a>
                )}
              </div>
              <h3 className={`text-3xl font-black tracking-tighter mb-4 italic uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
              <p className={`text-sm leading-relaxed mb-10 h-12 line-clamp-2 ${darkMode ? 'opacity-60' : 'text-slate-600'}`}>{p.desc}</p>
              <div className={`flex flex-wrap gap-2 pt-8 border-t ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
                {p.tags.map(tag => (
                  <span key={tag} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${darkMode ? 'opacity-40 bg-white/5' : 'text-slate-500 bg-slate-100'}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Grid */}
      <section className="py-24 px-6 bg-indigo-600 shadow-inner">
         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {[
              { label: "Language", value: "DART / PYTHON" },
              { label: "App Framework", value: "FLUTTER" },
              { label: "AI Backend", value: "PYTORCH / TF" },
              { label: "Infrastructure", value: "LEGACY CARRY" },
              { label: "Cloud", value: "AWS / GCP" },
              { label: "Visual AI", value: "LUMEO ML" }
            ].map((tech, i) => (
              <div key={i} className="text-white">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">{tech.label}</div>
                <div className="text-lg font-black italic tracking-tighter">{tech.value}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className={`pt-24 pb-12 px-6 max-w-7xl mx-auto ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 italic">
              START A <br /> PROJECT.
            </h2>
            <p className={`max-w-md ${darkMode ? 'opacity-50' : 'text-slate-500'}`}>Currently accepting inquiries for AI-integrated mobile products. Let's discuss your roadmap.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="text-[10px] font-black tracking-widest text-indigo-600 uppercase">Flutter Architect</div>
              <div className="text-xl font-black tracking-tighter">Satnam Singh</div>
              <div className="space-y-4 text-sm">
                <a href="mailto:maggosatnamsingh@gmail.com" className={`block transition-colors ${darkMode ? 'opacity-60 hover:text-indigo-500' : 'text-slate-600 hover:text-indigo-600'}`}>maggosatnamsingh@gmail.com</a>
                <a href="tel:+917814964100" className={`block transition-colors ${darkMode ? 'opacity-60 hover:text-indigo-500' : 'text-slate-600 hover:text-indigo-600'}`}>+91 78149 64100</a>
                <a 
                  href="https://wa.me/917814964100" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/10 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all text-xs font-bold border border-emerald-600/20 shadow-sm"
                >
                  <MessageCircle size={14} /> WHATSAPP
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-[10px] font-black tracking-widest text-purple-600 uppercase">AI/ML Engineer</div>
              <div className="text-xl font-black tracking-tighter">Sukhmeet Singh</div>
              <div className="space-y-2 text-sm">
                <a href="mailto:connecttosukh@gmail.com" className={`block transition-colors ${darkMode ? 'opacity-60 hover:text-purple-500' : 'text-slate-600 hover:text-purple-600'}`}>connecttosukh@gmail.com</a>
                <a href="tel:+919517794684" className={`block transition-colors ${darkMode ? 'opacity-60 hover:text-purple-500' : 'text-slate-600 hover:text-purple-600'}`}>+91 95177 94684</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`flex flex-col md:flex-row justify-between items-center pt-10 border-t gap-4 ${darkMode ? 'border-white/5' : 'border-slate-200'}`}>
          <span className="text-[10px] font-black opacity-30 tracking-widest uppercase italic">SOLVATIVE ARCHIVE 2025</span>
          <div className="flex gap-8 text-[10px] font-black opacity-30 tracking-widest uppercase">
            <span>PATIALA, INDIA</span>
            <span>AI APPS SPECIALISTS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
