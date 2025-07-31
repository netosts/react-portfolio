export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-indigo-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            Silvio dos Santos Neto
          </div>
          <p className="text-gray-300 mb-2">© 2025 Todos os direitos reservados.</p>
          <p className="text-gray-400 text-sm">Desenvolvido com React, React Router e TailwindCSS</p>
        </div>
      </div>
    </footer>
  )
}
