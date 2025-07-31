import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Laravel FCM Notifications",
      description:
        "Pacote Laravel customizado para gerenciar notificações com Firebase Cloud Messaging. Inclui limpeza de tokens, suporte multi-dispositivo e compatibilidade com todos os tipos de mensagens.",
      tech: ["Laravel", "PHP", "Firebase", "Cloud Messaging"],
      github: "https://github.com/netosts/laravel-fcm-notifications",
      date: "Jul 2025",
    },
    {
      title: "Vue E-commerce Cart",
      description:
        "PWA completa usando Vue 3, Quasar e Pinia. Funcionalidades incluem navegação por produtos, carrinho de compras, finalização e integração com json-server.",
      tech: ["Vue 3", "Quasar", "Pinia", "PWA"],
      github: "https://github.com/netosts/vue-cart",
      date: "Mar 2024",
    },
    {
      title: "Pomodoro Alert",
      description:
        "Temporizador de produtividade simples com alertas de notificação, utilizando Vue.js em uma SPA (Single Page Application).",
      tech: ["Vue.js", "JavaScript", "SPA"],
      github: "https://github.com/netosts/seu-pomodoro/",
      demo: "https://netosts.github.io/seu-pomodoro/",
      date: "Out 2023",
    },
    {
      title: "Bionic Reading Text Formatter",
      description:
        "Algoritmo em Python que converte qualquer texto para o formato Bionic Reading — uma técnica que melhora a velocidade e a compreensão da leitura ao destacar as partes mais concisas de cada palavra.",
      tech: ["Python", "Text Processing", "Accessibility"],
      github: "https://github.com/netosts/biRead",
      date: "Mar 2023",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Projetos Paralelos
          </h2>
          <p className="text-lg text-gray-600">Alguns dos meus projetos pessoais e contribuições open source</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-white/20 transform hover:-translate-y-3 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <span className="text-sm text-gray-500">{project.date}</span>
              </div>

              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm rounded-full font-medium border border-blue-200 hover:scale-105 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-all duration-300 group-hover:scale-105"
                >
                  <Github size={18} />
                  <span>Código</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
