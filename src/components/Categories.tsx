import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Fútbol',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    productCount: 48,
    featured: true,
  },
  {
    id: 2,
    name: 'Running',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80',
    productCount: 36,
    featured: true,
  },
  {
    id: 3,
    name: 'Fitness',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    productCount: 52,
    featured: true,
  },
  {
    id: 4,
    name: 'Natación',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    productCount: 29,
    featured: false,
  },
  {
    id: 5,
    name: 'Ciclismo',
    image: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=800&q=80',
    productCount: 43,
    featured: false,
  },
  {
    id: 6,
    name: 'Tenis',
    image: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=800&q=80',
    productCount: 31,
    featured: false,
  },
];

export default function Categories() {
  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);
  
  return (
    <section id="categorias" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nexo-blue">Categorías Deportivas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de productos deportivos organizados por categorías para encontrar exactamente lo que necesitas.
          </p>
        </div>

        {/* Featured Categories (larger) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredCategories.map((category) => (
            <Link 
              href={`#${category.name.toLowerCase()}`} 
              key={category.id}
              className="group h-80 relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-nexo-blue to-transparent opacity-70 z-10"></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm opacity-90">{category.productCount} productos</span>
                  <span className="bg-white bg-opacity-20 text-white text-sm py-1 px-3 rounded-full backdrop-blur-sm group-hover:bg-opacity-30 transition-all">
                    Explorar &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Categories (smaller) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {otherCategories.map((category) => (
            <Link 
              href={`#${category.name.toLowerCase()}`} 
              key={category.id}
              className="group h-56 relative overflow-hidden rounded-xl shadow-md"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-nexo-blue to-transparent opacity-70 z-10"></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white text-xs opacity-90">{category.productCount} productos</span>
                  <span className="bg-white bg-opacity-20 text-white text-xs py-1 px-2 rounded-full backdrop-blur-sm group-hover:bg-opacity-30 transition-all">
                    Ver &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#" className="btn-secondary text-nexo-blue">
            Ver Todas las Categorías
          </Link>
        </div>
      </div>
    </section>
  );
} 