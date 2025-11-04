export default function Nosotros() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 text-center">
          Sobre Nosotros
        </h1>

        {/* Sección Principal */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Quiénes Somos
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            RenderSoft es una empresa dedicada al desarrollo de soluciones tecnológicas 
            innovadoras. Nos especializamos en crear experiencias digitales que transforman 
            negocios y conectan personas.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Con un equipo de profesionales apasionados por la tecnología, trabajamos para 
            ofrecer productos de alta calidad que superen las expectativas de nuestros clientes.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Misión */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Nuestra Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento 
              y éxito de nuestros clientes, manteniendo los más altos estándares de calidad 
              y servicio.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Nuestra Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ser líderes en el desarrollo de soluciones tecnológicas, reconocidos por 
              nuestra innovación, excelencia y compromiso con el éxito de nuestros clientes.
            </p>
          </div>

        </div>

        {/* Valores */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Nuestros Valores
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="text-center">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Innovación
              </h4>
              <p className="text-gray-600">
                Buscamos constantemente nuevas formas de mejorar y crear.
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Compromiso
              </h4>
              <p className="text-gray-600">
                Dedicación total al éxito de cada proyecto.
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Excelencia
              </h4>
              <p className="text-gray-600">
                Calidad superior en cada línea de código.
              </p>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}