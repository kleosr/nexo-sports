import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-nexo-blue to-blue-900 text-white min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute w-96 h-96 rounded-full bg-white top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-64 h-64 rounded-full bg-white bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tu Aliado en <span className="text-yellow-300">Equipamiento Deportivo</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              Descubre nuestra colección exclusiva de artículos deportivos de alta calidad. 
              Entrega rápida y garantía de satisfacción.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#productos" className="btn-primary bg-white text-nexo-blue hover:bg-gray-100">
                Ver Productos
              </Link>
              <Link href="#categorias" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10">
                Explorar Categorías
              </Link>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Envío Gratis</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Entrega 24h</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl bg-white bg-opacity-10 backdrop-blur">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white bg-nexo-blue flex items-center justify-center">
                    <span className="text-5xl font-bold">NS</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">NEXO SPORTS</h3>
                  <p className="text-gray-200">Equipamiento deportivo profesional</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-yellow-300 text-nexo-blue flex items-center justify-center font-bold">
              <div className="text-center">
                <div className="text-xl">50%</div>
                <div className="text-xs">DESCUENTO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 