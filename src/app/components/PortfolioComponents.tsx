// @ts-ignore
import React from 'react';
import { Mail, Github, FileText, Linkedin, Terminal, Database, Layout, Code2, Figma, PenTool, Send } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import profPic from '../../assets/profPic.png';

// Navigation Component
export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-zinc-900/70 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl tracking-tighter text-white">QPM.</div>
      <ul className="flex gap-6 text-sm font-medium text-zinc-400">
        <li className="hover:text-white transition-colors cursor-pointer"><a href="#home">Home</a></li>
        <li className="hover:text-white transition-colors cursor-pointer"><a href="https://www.linkedin.com/in/quinzel-pires-monteiro-486230265/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li className="hover:text-white transition-colors cursor-pointer"><a href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
      </ul>
    </motion.nav>
  );
};

// Profile Card Component
export const ProfileCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 lg:sticky lg:top-24 h-fit shadow-sm"
    >
      <div className="aspect-square w-full rounded-xl overflow-hidden mb-6 bg-zinc-800">
        <img 
          src={profPic}
          alt="Quinzel Pires Monteiro" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-2 text-white">Quinzel Pires Monteiro</h2>
      <p className="text-zinc-400 mb-6 leading-relaxed">
        Software developer die complexe problemen vertaalt naar gebruiksvriendelijke, schaalbare oplossingen. Altijd op zoek naar de nieuwste technologieën om impact te maken.
      </p>

      <div className="space-y-3">
        <a href="mailto:quinzelpm03@gmail.com" className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg transition-colors group">
          <div className="bg-zinc-800 group-hover:bg-zinc-700 p-2 rounded-md transition-colors text-white">
            <Mail size={18} />
          </div>
          <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Email</span>
        </a>
        <a href="https://github.com/qixel2003" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg transition-colors group">
           <div className="bg-zinc-800 group-hover:bg-zinc-700 p-2 rounded-md transition-colors text-white">
            <Github size={18} />
          </div>
          <span className="text-sm font-medium text-zinc-300 group-hover:text-white">GitHub</span>
        </a>
        <a href="/CV.pdf" download className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg transition-colors group">
           <div className="bg-zinc-800 group-hover:bg-zinc-700 p-2 rounded-md transition-colors text-white">
            <FileText size={18} />
          </div>
          <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Download CV</span>
        </a>
        <a href="#contact" className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded-lg transition-colors group text-blue-400">
           <div className="bg-blue-900/30 group-hover:bg-blue-900/50 p-2 rounded-md transition-colors">
            <Send size={18} />
          </div>
          <span className="text-sm font-medium">Contact Me</span>
        </a>
      </div>
    </motion.div>
  );
};

// Hero/Header Component
export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="py-12 md:py-20"
      id="home"
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
        Software developer.
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
        Een passie voor probleem oplossen en het visueel maken van ideeën.
      </p>

      {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-8">*/}
      {/*  <div>*/}
      {/*    <div className="text-3xl font-bold mb-1 text-white">5+</div>*/}
      {/*    <div className="text-sm text-zinc-500 uppercase tracking-wider">Jaren Ervaring</div>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <div className="text-3xl font-bold mb-1 text-white">20+</div>*/}
      {/*    <div className="text-sm text-zinc-500 uppercase tracking-wider">Projecten</div>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <div className="text-3xl font-bold mb-1 text-white">100%</div>*/}
      {/*    <div className="text-sm text-zinc-500 uppercase tracking-wider">Commitment</div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </motion.header>
  );
};

// Projects Component
const ProjectCard = ({title, description, image, link, value, key}: {
  title: string,
  description: string,
  image: string,
  link: string,
  value: string,
  key?: number
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
  >
    <div className="aspect-video w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-500 transition-colors">{title}</h3>
      <p className="text-zinc-400 mb-4 text-sm">{description}</p>
      <div className="pt-4 border-t border-zinc-800">
        <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Waarde</span>
        <p className="text-sm text-zinc-200 mt-1">{value}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors mt-4 text-white text-sm font-medium px-4 py-2 rounded-lg">
          Bekijk Project
        </a>
      </div>
    </div>
  </motion.div>
);

export const Projects = () => {
  const projects = [
    {
      title: "Snowboard Webservice",
      description: "Een Webservice die samen werkt met een frond-end reactive framework.",
      image: "data:image/jpeg;base64,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",
      link: "https://github.com/qixel2003/RESTful-Webservice-Snowboards",
      value: "Geleerd omgaan met een eigen server en webservice."
    },
    {
      title: "Studie Agent",
      description: "AI Agent die studenten helpt met het verwerken van grote hoeveelheden studiemateriaal",
      image: "https://diplo-media.s3.eu-central-1.amazonaws.com/2025/06/OpenAI-ChatGPT-outage-AI-chatbots.png",
      link: "https://github.com/qixel2003/agent",
      value: "Ervaring opgedaan met een eigen AI agent maken."
    },
    {
      title: "WandelWild",
      description: "Een team project voor Natuurmonumenten..",
      image: "https://images.squarespace-cdn.com/content/v1/5c82de728d97407b885c8189/1622802734086-VM9GLK61TWSSM1FTH70O/image-asset.jpeg",
      link: "https://github.com/qixel2003/TLE2",
      value: "Ervaring opgedaan met het maken van een Laravel project voor een opdrachtgever."
    }
  ];

  return (
    <section className="py-20" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-white">Geselecteerde Projecten</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
};

// Experience Component
export const Experience = () => {
  const stack = [
    { name: "Frontend", icon: <Layout className="w-5 h-5" />, items: ["React", "React-Native", "Vue", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", icon: <Terminal className="w-5 h-5" />, items: ["Node.js", "Python", "Laravel"] },
    { name: "Database", icon: <Database className="w-5 h-5" />, items: ["PostgreSQL", "MongoDB"] },
  ];

  return (
    <section className="py-20 border-t border-zinc-800">
      <h2 className="text-3xl font-bold mb-8 text-white">Ervaring & Stack</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {stack.map((cat, i) => (
          <div key={i} className="bg-zinc-800/50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4 text-zinc-100 font-semibold">
              {cat.icon}
              {cat.name}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="px-3 py-1 bg-zinc-700 rounded-full text-xs border border-zinc-600 shadow-sm text-zinc-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Tools Component
export const Tools = () => {
  return (
    <section className="py-12 border-t border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-white">Tools</h2>
      <div className="flex gap-6">
        <div
            className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition-colors">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black">
            N
          </div>
          <span className="font-medium text-zinc-200">Notion</span>
        </div>
        <div
            className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition-colors">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
            <Figma size={20}/>
          </div>
          <span className="font-medium text-zinc-200">Figma</span>
        </div>
        <div
            className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-sm hover:border-zinc-700 transition-colors">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            C
          </div>
          <span className="font-medium text-zinc-200">Canva</span>
        </div>
      </div>
    </section>
  );
};

// Contact Component
export const Contact = () => {
  return (
      <section className="py-20 mt-10 bg-zinc-900/50 rounded-3xl p-8 md:p-12 text-center md:text-left" id="contact">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">Let's work together.</h2>
          <p className="text-zinc-400 mb-8 max-w-md">
            Laat een bericht achter en ik neem zo snel mogelijk contact op.
          </p>
          <div className="flex flex-col gap-4 text-left">
            <a href="mailto:quinzelpm03@gmail.com">
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="w-5 h-5"/>
                <span>quinzelpm03@gmail.com</span>
              </div>
            </a>
            <div className="flex items-center gap-3 text-zinc-400">
              <Linkedin className="w-5 h-5"/>
              <a href={"https://www.linkedin.com/in/quinzel-pires-monteiro-486230265/"}>Linkedin</a>
            </div>
          </div>
        </div>

        {/*<form className="bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-800 w-full" onSubmit={(e) => e.preventDefault()}>*/}
        {/*  <div className="space-y-4 text-left">*/}
        {/*    <div>*/}
        {/*      <label className="block text-sm font-medium mb-1.5 text-zinc-300">Naam</label>*/}
        {/*      <input type="text" className="w-full px-4 py-2 rounded-lg border border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-white transition-all text-white placeholder-zinc-500" placeholder="Je naam" />*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <label className="block text-sm font-medium mb-1.5 text-zinc-300">Email</label>*/}
        {/*      <input type="email" className="w-full px-4 py-2 rounded-lg border border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-white transition-all text-white placeholder-zinc-500" placeholder="je@email.com" />*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <label className="block text-sm font-medium mb-1.5 text-zinc-300">Bedrijf</label>*/}
        {/*      <input type="text" className="w-full px-4 py-2 rounded-lg border border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-white transition-all text-white placeholder-zinc-500" placeholder="Bedrijfsnaam (optioneel)" />*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*      <label className="block text-sm font-medium mb-1.5 text-zinc-300">Bericht</label>*/}
        {/*      <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-white transition-all text-white placeholder-zinc-500" placeholder="Vertel me over je project..." />*/}
        {/*    </div>*/}
        {/*    <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:opacity-90 transition-opacity">*/}
        {/*      Verstuur Bericht*/}
        {/*    </button>*/}
        {/*  </div>*/}
        {/*</form>*/}
      </div>
    </section>
  );
};
