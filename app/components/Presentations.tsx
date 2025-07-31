import { FileText, Play, Upload } from "lucide-react"

export default function Presentations() {
  return (
    <section id="presentations" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
            Apresentações e Vídeos
          </h2>
          <p className="text-lg text-gray-600">Demonstrações dos meus projetos e apresentações técnicas</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seção de Vídeos */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Play className="text-red-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Vídeos de Demonstração</h3>
            </div>

            <div className="space-y-4">
              {/* Placeholder para vídeos futuros */}
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">WePray - Refatoração Completa</h4>
                <p className="text-sm text-gray-600 mb-2">Demonstração da modernização da plataforma WePray</p>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">Vídeo em breve</span>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Vue E-commerce - PWA Demo</h4>
                <p className="text-sm text-gray-600 mb-2">Funcionalidades do e-commerce desenvolvido em Vue 3</p>
                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500">Vídeo em breve</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seção de Apresentações PPT */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <FileText className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-bold text-gray-900">Apresentações PPT</h3>
            </div>

            <div className="space-y-4">

              {/* Placeholder para apresentações futuras */}
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Modernização de Sistemas Legados</h4>
                    <p className="text-sm text-gray-600">Estratégias e boas práticas</p>
                  </div>
                  <FileText className="text-blue-600" size={20} />
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Vue.js 3 - Novidades e Migração</h4>
                    <p className="text-sm text-gray-600">Guia completo de migração</p>
                  </div>
                  <FileText className="text-blue-600" size={20} />
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Laravel & Firebase Integration</h4>
                    <p className="text-sm text-gray-600">Implementação de notificações push</p>
                  </div>
                  <FileText className="text-blue-600" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
