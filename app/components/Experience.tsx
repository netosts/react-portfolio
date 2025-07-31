import { Calendar, MapPin, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "WePray",
      position: "Full Stack Software Engineer",
      period: "Nov de 2024 - Atualmente",
      location: "Remoto",
      description:
        "WePray é uma rede social internacional (https://wepray.org). Refatorei toda a plataforma: Nuxt 2 → Nuxt 3, Vue 2 → Vue 3, Laravel 5 → Laravel 11, JavaScript → TypeScript.",
      achievements: [
        "Remodelei completamente o UI/UX do site, melhorando a experiência do usuário",
        "Implementei sistema de notificações push com Firebase Cloud Messaging",
        "Transformei a plataforma em uma PWA e publiquei o app mobile via PWA Builder",
        "Melhorei a performance usando índices no PostgreSQL e cache do Laravel",
      ],
      color: "from-blue-500 to-indigo-600",
      current: true,
    },
    {
      company: "Netstic",
      position: "Full Stack Software Engineer",
      period: "Dez de 2023 - Atualmente",
      location: "Remoto",
      description:
        "A Netstic é uma empresa de soluções tecnológicas com stack em Vue, TypeScript, Laravel, PHP e PostgreSQL/MySQL.",
      achievements: [
        "Refatorei o Sysadmu, sistema legado de 10 anos da Prefeitura de Antas/BA (Vue 2 → 3 e Laravel 5 → 10)",
        "Melhorei a performance do Sysadmu com modernização de componentes e arquitetura",
        "Apliquei Design Patterns (Factory, Service Layer) ao Sysadmu, reduzindo a dívida técnica",
        "Criei a landing page da Vianet (https://grupovianet.com.br) usando Astro Framework",
      ],
      color: "from-green-500 to-emerald-600",
      current: true,
    },
    {
      company: "Eprotec Engenharia",
      position: "Full Stack Software Engineer (Freelance)",
      period: "Jun de 2024 - Mai de 2025",
      location: "Remoto",
      description:
        "Modelei e desenvolvi um sistema de gerenciamento de clientes e projetos para a Eprotec, consultora de infraestrutura.",
      achievements: [
        "Desenvolvi sistema usando Vue.js e Laravel, impactando diretamente na eficiência da empresa",
        "Traduzi requisitos de negócios dos stakeholders em soluções técnicas",
        "Atuei na resolução de problemas e na tomada de decisões técnicas",
      ],
      color: "from-purple-500 to-violet-600",
      current: false,
    },
    {
      company: "IAssist Tecnologia",
      position: "Full Stack Software Engineer (Freelance)",
      period: "Mai de 2024 - Ago de 2024",
      location: "Remoto",
      description:
        "IAssist é uma empresa especializada em diagnóstico oncológico com Inteligência Artificial (https://www.iassist-tec.com.br).",
      achievements: [
        "Contribuí no desenvolvimento da plataforma responsável pela previsão de cancer em crianças e adolescentes",
        "Melhorei o sistema de logs e monitoramento com Python Logging",
        "Reestruturei a base de código para dar suporte à escalabilidade futura",
        "Implementei internacionalização com i18n e criei painel admin para gerenciamento de traduções",
      ],
      color: "from-orange-500 to-red-600",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-600 font-light">Minha jornada como desenvolvedor Full Stack</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-lg z-10 hidden lg:block">
                  {exp.current && <div className="absolute inset-1 bg-blue-500 rounded-full animate-pulse"></div>}
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right lg:ml-auto lg:-mr-0.5" : "lg:pl-12 lg:-ml-0.5"}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-2">
                    {/* Company Badge */}
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-4 shadow-lg`}
                    >
                      <Building size={16} className="mr-2" />
                      {exp.company}
                      {exp.current && <span className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>}
                    </div>

                    {/* Position */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{exp.position}</h3>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 mb-4 space-y-2 sm:space-y-0">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start group">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
