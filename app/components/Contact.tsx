import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (name !== "" || email !== "" || message !== "") {
      emailjs
      .sendForm(
        "service_z71gwmh",
        "template_q09xbp6",
        e.target,
        "t5NRgq7b7C4g2dIYt"
      )
      .then(() => {
        setName('');
        setEmail('');
        setMessage('');
      }).catch(() => {
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.')
      });
    }

    alert('Por favor, preencha todos os campos!')
  }

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">Vamos conversar sobre oportunidades e projetos</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-4" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:netostt91@gmail.com" className="text-gray-600 hover:text-blue-600">
                    netostt91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-blue-600 mr-4" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Telefone</p>
                  <a href="tel:+5579999662246" className="text-gray-600 hover:text-blue-600">
                    +55 79 99966-2246
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-4" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Localização</p>
                  <p className="text-gray-600">Brasil - Trabalho Remoto</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/netosts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/netosts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>

            <form onSubmit={sendEmail} className="space-y-4 text-gray-700">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="seu@email.com"
                />
              </div>

              {/* <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Assunto da mensagem"
                />
              </div> */}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
