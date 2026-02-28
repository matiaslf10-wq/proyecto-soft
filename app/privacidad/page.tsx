import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | RestoSmart',
  description: 'Política de privacidad de RestoSmart.',
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>

        <p className="mt-4 text-sm text-zinc-500">Última actualización: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900">1. Información que recopilamos</h2>
            <p className="mt-2">
              RestoSmart puede recopilar información proporcionada a través del formulario de contacto,
              como nombre, email, teléfono y datos del negocio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">2. Uso de la información</h2>
            <p className="mt-2">
              La información se utiliza únicamente para responder consultas, coordinar demostraciones y
              brindar información sobre nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">3. Protección de datos</h2>
            <p className="mt-2">
              Implementamos medidas razonables para proteger la información recibida y no compartimos
              datos con terceros sin consentimiento, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">4. Cookies y tecnologías similares</h2>
            <p className="mt-2">
              Actualmente RestoSmart no utiliza cookies con fines publicitarios. En caso de incorporar
              herramientas de análisis en el futuro, esta política será actualizada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">5. Derechos del usuario</h2>
            <p className="mt-2">
              Podés solicitar la modificación o eliminación de tus datos enviando un correo a{' '}
              <a href="mailto:contacto@restosmart.com" className="underline text-blue-600">
                contacto@restosmart.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}