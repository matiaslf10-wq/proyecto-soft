import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | RestoSmart',
  description: 'Términos y condiciones de uso de RestoSmart.',
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones</h1>

        <p className="mt-4 text-sm text-zinc-500">Última actualización: {new Date().toLocaleDateString()}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-700">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900">1. Objeto del servicio</h2>
            <p className="mt-2">
              RestoSmart ofrece soluciones de software para el sector gastronómico, incluyendo menú
              digital QR, gestión de pedidos y herramientas de análisis según el plan contratado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">2. Planes y facturación</h2>
            <p className="mt-2">
              Los planes (Esencial, Pro e Intelligence) se contratan de forma mensual. Los valores
              pueden actualizarse previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">3. Responsabilidades del usuario</h2>
            <p className="mt-2">
              El usuario es responsable de la veracidad de los datos cargados en el sistema,
              incluyendo precios, descripciones y condiciones comerciales de su establecimiento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">4. Disponibilidad del servicio</h2>
            <p className="mt-2">
              RestoSmart realiza esfuerzos razonables para mantener el servicio disponible, aunque
              pueden existir interrupciones por mantenimiento o causas externas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">5. Modificaciones</h2>
            <p className="mt-2">
              RestoSmart se reserva el derecho de actualizar estos términos en cualquier momento.
              Las modificaciones serán publicadas en esta página.
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