'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  nombre: string;
  contacto: string;
  descripcion: string;
}

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    contacto: '',
    descripcion: ''
  });

  const [enviado, setEnviado] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    
    // Mostrar mensaje de confirmación
    setEnviado(true);
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      contacto: '',
      descripcion: ''
    });

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4" suppressHydrationWarning>
      {/* Encabezado */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
        RenderSoft
      </h1>
      
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
        Contáctenos
      </h2>

      {/* Formulario */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-lg w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Campo Contacto */}
          <div>
            <label htmlFor="contacto" className="block text-gray-700 font-semibold mb-2">
              Contacto
            </label>
            <input
              type="text"
              id="contacto"
              name="contacto"
              value={formData.contacto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Email o teléfono"
            />
          </div>

          {/* Campo Descripción */}
          <div>
            <label htmlFor="descripcion" className="block text-gray-700 font-semibold mb-2">
              Descripción
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Describe tu consulta o proyecto..."
            />
          </div>

          {/* Botón Enviar */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Enviar Mensaje
          </button>

          {/* Mensaje de confirmación */}
          {enviado && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
              ¡Mensaje enviado con éxito!
            </div>
          )}
        </form>

        {/* Link para volver */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}