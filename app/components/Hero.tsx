import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto py-32 px-4 sm:py-10 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300">
              SN
            </div>
            <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 blur-lg"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
              Silvio dos Santos Neto
            </h1>

            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-gray-600 font-light">Full Stack Engineer</p>
              <div className="flex items-center justify-center space-x-3 text-lg text-blue-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span>Vue.js & Laravel Specialist</span>
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              </div>
            </div>

            <p className="hidden sm:block text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Especializado em <span className="font-semibold text-blue-600">modernização de sistemas legados</span> e
              desenvolvimento de aplicações multiplataforma. <span className="font-semibold">2+ anos</span> de
              experiência com histórico comprovado em refatorar sistemas críticos.
            </p>
          </div>

          {/* Contact Info */}
          {/* <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 text-gray-600">
            <a
              href="mailto:netostt91@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300 group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>netostt91@gmail.com</span>
            </a>
            <a
              href="tel:+5579999662246"
              className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300 group"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span>+55 79 99966-2246</span>
            </a>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
            <a
              href="https://github.com/netosts"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/netosts/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

        </div>
      </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={60} className="text-gray-400" />
          </div>
    </section>
  )
}
