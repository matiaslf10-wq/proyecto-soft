import Link from 'next/link';

export default function Home() {
  return (
    <main className="page-container flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 text-center animate-fade-in">
        RenderSoft
      </h1>

      <div className="card max-w-md w-full">
        <p className="text-muted text-center mb-10">
          Accede a nuestros videos, proyectos y herramientas
        </p>

        <div className="space-y-4">
          <Link href="/videos" className="btn-primary block w-full text-center">
            Videos
          </Link>

          <Link href="/proyectos" className="btn-primary block w-full text-center">
            Proyectos
          </Link>

          <a href="https://www.microsoft.com/es-es/download/details.aspx?id=58494" target="_blank" rel="noopener noreferrer" className="btn-primary block w-full text-center">
            Descarga Power BI
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link href="/contacto" className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300 underline">
            Contáctenos
          </Link>
        </div>
      </div>
    </main>
  );
}