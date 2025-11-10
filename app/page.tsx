'use client';

import { useState, useEffect } from 'react';

interface Video {
  id: number;
  url: string;
  title: string;
  category: string;
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [activeSection, setActiveSection] = useState<string>('nosotros');
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    descripcion: ''
  });
  const [enviado, setEnviado] = useState(false);

  const videos: Video[] = [
    { id: 1, url: 'https://www.youtube.com/watch?v=an3AkQL62F8', title: 'Video 1', category: 'Black Pumas' },
    { id: 2, url: 'https://www.youtube.com/watch?v=0G383538qzQ', title: 'Video 2', category: 'Black Pumas' },
    { id: 3, url: 'https://www.youtube.com/watch?v=QkF3oxziUI4', title: 'Video 3', category: 'Led Zepelin' },
    { id: 4, url: 'https://www.youtube.com/watch?v=0t1Pm2HHcQo', title: 'Video 4', category: 'Black Pumas' },
    { id: 5, url: 'https://www.youtube.com/watch?v=09839DpTctU', title: 'Video 5', category: 'Eagles' },
    { id: 6, url: 'https://www.youtube.com/watch?v=MTovRtERP5U&list=RDMTovRtERP5U&start_radio=1', title: 'Video 6', category: 'Pink Floyd' },
  ];

  const extractVideoId = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  const categories = ['Todas', ...new Set(videos.map((v) => v.category))];

  const filteredVideos =
    selectedCategory === 'Todas'
      ? videos
      : videos.filter((v) => v.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = () => {
    if (!formData.nombre || !formData.contacto || !formData.descripcion) {
      alert('Por favor completa todos los campos');
      return;
    }
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    setFormData({ nombre: '', contacto: '', descripcion: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['nosotros', 'videos', 'servicios', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">RenderSoft</h1>
            <div className="flex gap-2 md:gap-4">
              <button
                onClick={() => scrollToSection('nosotros')}
                className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeSection === 'nosotros'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('videos')}
                className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeSection === 'videos'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeSection === 'servicios'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className={`px-3 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeSection === 'contacto'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Espaciador para el navbar fijo */}
      <div className="h-20"></div>

      {/* Sección Nosotros */}
      <section id="nosotros" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
            Sobre Nosotros
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Quiénes Somos</h3>
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar soluciones tecnológicas innovadoras que impulsen el crecimiento 
                y éxito de nuestros clientes, manteniendo los más altos estándares de calidad 
                y servicio.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser líderes en el desarrollo de soluciones tecnológicas, reconocidos por 
                nuestra innovación, excelencia y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nuestros Valores</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { emoji: '💡', title: 'Innovación', desc: 'Buscamos constantemente nuevas formas de mejorar y crear.' },
                { emoji: '🤝', title: 'Compromiso', desc: 'Dedicación total al éxito de cada proyecto.' },
                { emoji: '⭐', title: 'Excelencia', desc: 'Calidad superior en cada línea de código.' }
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl mb-3">{value.emoji}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección Videos */}
      <section id="videos" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Videos</h2>
          <p className="text-gray-600 text-center mb-8 text-lg">
            Explora nuestra biblioteca completa de tutoriales y proyectos
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full shadow-md font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              const videoId = extractVideoId(video.url);
              return (
                <VideoCard
                  key={video.id}
                  video={video}
                  videoId={videoId}
                  onClick={() => setSelectedVideo(video)}
                />
              );
            })}
          </div>

          {selectedVideo && (
            <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
          )}
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Soluciones tecnológicas para tu negocio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '💻', title: 'Desarrollo Web', desc: 'Creamos sitios web modernos, responsivos y optimizados para tu negocio.' },
              { emoji: '📱', title: 'Apps Móviles', desc: 'Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android.' },
              { emoji: '📊', title: 'Business Intelligence', desc: 'Análisis de datos y visualización con Power BI para tomar mejores decisiones.' },
              { emoji: '☁️', title: 'Cloud Solutions', desc: 'Implementación y gestión de infraestructura en la nube.' },
              { emoji: '🎨', title: 'Diseño UI/UX', desc: 'Diseño de interfaces intuitivas y experiencias de usuario memorables.' },
              { emoji: '🔒', title: 'Ciberseguridad', desc: 'Protección y auditoría de sistemas para garantizar la seguridad de tus datos.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            Contáctenos
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Estamos aquí para ayudarte
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="contacto" className="block text-gray-700 font-semibold mb-2">
                  Contacto
                </label>
                <input
                  type="text"
                  id="contacto"
                  name="contacto"
                  value={formData.contacto}
                  onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Email o teléfono"
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-gray-700 font-semibold mb-2">
                  Descripción
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Describe tu consulta o proyecto..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar Mensaje
              </button>

              {enviado && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  ¡Mensaje enviado con éxito!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-lg font-semibold mb-2">RenderSoft</p>
        <p className="text-gray-400">© 2025 Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

function VideoCard({ video, videoId, onClick }: { video: Video; videoId: string | null; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const thumbSrc = videoId ? `https://images.weserv.nl/?url=i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
        {!isHovered ? (
          isClient && videoId && thumbSrc ? (
            <>
              <img
                src={thumbSrc}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-90 hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-90">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )
        ) : (
          <iframe
            src={videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${videoId}` : undefined}
            className="w-full h-full"
            allow="autoplay; encrypted-media"
            style={{ pointerEvents: 'none' }}
            title={video.title}
          />
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{video.title}</h3>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
          {video.category}
        </span>
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const videoId = video.url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  )?.[1];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          ✕
        </button>

        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            src={videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : undefined}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{video.title}</h2>
          <div className="flex items-center gap-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {video.category}
            </span>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              Ver en YouTube &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
