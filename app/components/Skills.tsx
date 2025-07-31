export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Vue.js", "Nuxt.js", "TypeScript", "Vuetify", "Quasar", "Tailwind CSS", "SASS", "i18n"],
    },
    {
      title: "Backend",
      skills: ["Laravel", "PHP", "Python", "FastAPI"],
    },
    {
      title: "Bancos de Dados",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Outros",
      skills: ["Git", "Docker", "Git Flow", "VM", "SOLID", "OOP", "MVC", "Clean Architecture"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Comunicação",
        "Trabalho em equipe",
        "Resolução de problemas",
        "Agile/Scrum",
        "Revisão de código",
        "Responsabilidade e senso de propriedade",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Principais Competências
          </h2>
          <p className="text-lg text-gray-600">Tecnologias e habilidades que domino</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 text-sm rounded-xl border border-gray-200 hover:border-blue-300 hover:scale-105 transition-all duration-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
