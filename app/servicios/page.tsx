export default function Servicios() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16">
          Soluciones tecnológicas para tu negocio
        </p>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Servicio 1 */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Desarrollo Web
            </h3>
            <p className="text-gray-600">
              Creamos sitios web modernos, responsivos y optimizados para tu negocio.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Apps Móviles
            </h3>
            <p className="text-gray-600">
              Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Business Intelligence
            </h3>
            <p className="text-gray-600">
              Análisis de datos y visualización con Power BI para tomar mejores decisiones.
            </p>
          </div>

          {/* Servicio 4 */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">☁️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Cloud Solutions
            </h3>
            <p className="text-gray-600">
              Implementación y gestión de infraestructura en la nube.
            </p>
          </div>

          {/* Servicio 5 */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Diseño UI/UX
            </h3>
            <p className="text-gray-600">
              Diseño de interfaces intuitivas y experiencias de usuario memorables.
            </p>
          </div>

          {/* Servicio 6 */}
          <div className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Ciberseguridad
            </h3>
            <p className="text-gray-600">
              Protección y auditoría de sistemas para garantizar la seguridad de tus datos.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}