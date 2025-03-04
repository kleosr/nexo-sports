export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Envío Gratuito',
      description: 'En todos los pedidos superiores a €50 dentro de España peninsular.',
      icon: (
        <svg className="w-10 h-10 text-nexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Garantía de Calidad',
      description: 'Todos nuestros productos son auténticos y de la más alta calidad.',
      icon: (
        <svg className="w-10 h-10 text-nexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Atención 24/7',
      description: 'Nuestro equipo de atención al cliente está disponible todos los días.',
      icon: (
        <svg className="w-10 h-10 text-nexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Devoluciones Sencillas',
      description: 'Proceso de devolución sin complicaciones durante los primeros 30 días.',
      icon: (
        <svg className="w-10 h-10 text-nexo-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nexo-blue">Por Qué Elegirnos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Nexo Sports nos dedicamos a ofrecerte la mejor experiencia de compra con productos deportivos de alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-5 hover:shadow-lg transition-shadow">
              <div className="rounded-lg p-3 bg-blue-50">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-nexo-blue text-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Únete a Nuestra Comunidad Deportiva</h3>
              <p className="mb-6">
                Suscríbete a nuestro boletín para recibir ofertas exclusivas, consejos deportivos y ser el primero en conocer nuestros nuevos productos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="px-4 py-3 rounded-md focus:outline-none text-gray-800 w-full sm:w-auto sm:flex-1"
                />
                <button className="px-6 py-3 bg-yellow-400 text-nexo-blue font-medium rounded-md hover:bg-yellow-300 transition-colors">
                  Suscribirme
                </button>
              </div>
              <p className="text-sm mt-3 opacity-80">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-4xl md:text-5xl mb-2">+15K</div>
                <div className="text-lg opacity-90">Clientes Satisfechos</div>
                <div className="mt-4 flex justify-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full bg-blue-${300 + i*100} border-2 border-white flex items-center justify-center text-xs font-bold`}>
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 