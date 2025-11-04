'use client';

import { useState } from 'react';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Array de videos - Aquí agregas tus URLs de YouTube
  const videos = [
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=an3AkQL62F8&list=RDan3AkQL62F8&start_radio=1',
      title: 'Video 1',
      category: 'Black Pumas'
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=0G383538qzQ&list=RD0G383538qzQ&start_radio=1',
      title: 'Video 2',
      category: 'Black Pumas'
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=QkF3oxziUI4&list=RD0G383538qzQ&index=4',
      title: 'Video 3',
      category: 'Led Zepelin'
    },
    {
      id: 4,
      url: 'https://www.youtube.com/watch?v=0t1Pm2HHcQo&list=RD0G383538qzQ&index=5',
      title: 'Video 4',
      category: 'Black Pumas'
    },
    {
      id: 5,
      url: 'https://www.youtube.com/watch?v=0t1Pm2HHcQo&list=RD0G383538qzQ&index=6',
      title: 'Video 5',
      category: 'Musica'
    },
    {
      id: 6,
      url: 'https://www.youtube.com/watch?v=09839DpTctU&list=RD0G383538qzQ&index=6',
      title: 'Video 6',
      category: 'Eagles'
    },
  ];

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const categories = ['Todas', ...new Set(videos.map(v => v.category))];
  
  // Filtrar videos por categoría seleccionada
  const filteredVideos = selectedCategory === 'Todas' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="section-title mb-0">
              Videos RenderSoft
            </h1>
            <a
              href="/"
              className="btn-primary"
            >
              &larr; Volver
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <p className="text-muted text-center mb-8 text-lg">
          Explora nuestra biblioteca completa de tutoriales y proyectos
        </p>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full shadow-md font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Videos */}
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

        {/* Mensaje si no hay videos */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay videos en esta categoría</p>
          </div>
        )}
      </main>

      {/* Modal de Video */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}

function VideoCard({ video, videoId, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card cursor-pointer"
    >
      <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
        {!isHovered ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                <svg
                  className="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}`}
            className="w-full h-full"
            allow="autoplay"
            style={{ pointerEvents: 'none' }}
          />
        )}
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
          {video.title}
        </h3>
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">
          {video.category}
        </span>
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  const videoId = video.url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="card max-w-5xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          ✕
        </button>

        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Info del video */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {video.title}
          </h2>
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
              Ver en YouTube →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}