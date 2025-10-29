import React from 'react';

function SkillsSection() {
  return (
    <section id="skills" className="py-12 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">UI/UX Design</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">React.js</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Tailwind CSS</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">Node.js</span>
      </div>
    </section>
  );
}

export default SkillsSection;
