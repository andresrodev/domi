import React, { useState } from 'react';
import { 
  Star, 
  Truck, 
  Shield, 
  Gift, 
  Heart, 
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const collections = [
    {
      name: "Luz de Luna",
      description: "Piezas plateadas con destellos mágicos que capturan la esencia de la noche",
      image: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Raíces Doradas",
      description: "Inspiración natural y tonos cálidos que conectan con tu esencia más auténtica",
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      name: "Eterna",
      description: "Joyas minimalistas de uso diario que trascienden tendencias y épocas",
      image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const benefits = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envío Gratuito",
      description: "En compras superiores a $150.000"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía de Calidad",
      description: "12 meses de garantía en todas nuestras piezas"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Empaque de Regalo",
      description: "Presentación elegante incluida sin costo adicional"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Atención Personalizada",
      description: "Asesoría experta para encontrar tu joya perfecta"
    }
  ];

  const testimonials = [
    {
      name: "María Elena R.",
      text: "Mi anillo de compromiso de la colección Eterna es simplemente perfecto. La calidad y el diseño superaron mis expectativas.",
      rating: 5
    },
    {
      name: "Catalina M.",
      text: "Las piezas de Luz de Luna son espectaculares. Recibo cumplidos cada vez que uso mis aretes. DOMI tiene un estilo único.",
      rating: 5
    },
    {
      name: "Sofía L.",
      text: "La atención al cliente es excepcional. Me ayudaron a elegir el regalo perfecto para mi madre. Definitivamente volveré a comprar.",
      rating: 5
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('¡Gracias por suscribirte! Recibirás nuestras novedades pronto.');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo placeholder - replace with actual logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded flex items-center justify-center">
                 <svg fill="#ffffff" height="15px" width="15px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1077 923 256 256" xml:space="preserve">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M-827.3,979.5c0,0-2.2-13.1-5.2-17.1c-3.8-5.1-16.4-12.1-16.4-12.1c-2.6,3.7,3.6-9.8,7.3-22.7c0,0-24.2,3.2-46.8,27.6 c-6.4,7-17.8,38.6-17.8,38.6l-44.7,20.5c-31.1,12.9-82.7,26.2-82.7,97.7v30.5c-2.5-1.7-15.7-12.7-15.5-29.9 c0.1-13.6,1.9-27.5,3.6-39.9c3.1-22.7,5.5-47.1-3.7-57.6c-4.2-4.8-10.2-7.3-17.7-7.3c-4.9,0-8.9,4-8.9,8.9c0,4.9,4,8.9,8.9,8.9 c2.2,0,3.6,0.4,4.3,1.2c3.8,4.4,1.5,28.1-0.6,43.4c-1.7,12.9-3.7,27.5-3.7,42.2c0,16.2,5.6,31.4,15.7,42.8 c11.5,12.9,27.7,19.7,46.8,19.7c0,0,0,0,0,0h62.5h8.9h17.9c4.9,0,8.9-4,8.9-8.9s-4-8.9-8.9-8.9l-19.6,0l9.5-31.3 c0-4.5-1-8.8-2.7-12.6c-7.1-12.1-19.9-19.6-34-19.6c-6.2,0-12,1.4-17.5,4.1l-2.9-5.8c6.4-3.2,13.2-4.8,20.4-4.8 c16.8,0,32.3,9.2,40.3,24l0,0l0,0c0,0,33.1,50.7,36.4,57.9c0,0.1,0.1,0.1,0.1,0.2c0.9,2.7,3.1,4.7,5.9,5.3c0.1,0,0.2,0,0.3,0.1 c0.5,0.1,0.9,0.3,1.4,0.3h9.8c4.4,0,8.1-3.6,8.1-8.1c0-4.4-3.6-8.1-8.1-8.1h0.2c0,0-26.6-47.4-21.4-64.2 c23.7-37.2,36.5-72.5,36.5-72.5c5.1-11.6,18.2-20.5,20-21.7c4-2.7,9.5-6.1,10-11.3C-822.2,986.7-826,981.7-827.3,979.5z"/> </g>

</svg>
                <span className="text-white font-serif font-bold text-lg">
                  &nbsp;DOMI</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Inicio</a>
                <a href="#colecciones" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Colecciones</a>
                <a href="#sobre-domi" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Sobre DOMI</a>
                <a href="#contacto" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Contacto</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-yellow-600 transition-colors"
              >
                <ChevronDown className={`w-6 h-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors">Inicio</a>
              <a href="#colecciones" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors">Colecciones</a>
              <a href="#sobre-domi" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors">Sobre DOMI</a>
              <a href="#contacto" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/src/assets/model-left.png')",
          backgroundSize: '30%',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        {/* Sparkle overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full sparkle-animation" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-900 mb-8 leading-tight">
              Descubre la joya que
              <span className="block text-yellow-600 font-medium">habla por ti</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Cada pieza cuenta una historia única de elegancia, diseño atemporal y sofisticación felina
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explora la Colección
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-domi" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                Elegancia que trasciende 
                <span className="text-yellow-600"> el tiempo</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                DOMI Joyas nace de la pasión por crear piezas únicas que reflejen la personalidad y elegancia natural de cada mujer. Nuestro enfoque en el diseño atemporal y la calidad excepcional nos ha convertido en sinónimo de sofisticación accesible.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Con inspiración felina y un toque de lujo contemporáneo, cada joya DOMI es una declaración de estilo que acompaña tus momentos más especiales.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">1000+</div>
                  <div className="text-gray-600">Clientes felices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">500+</div>
                  <div className="text-gray-600">Diseños únicos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">5★</div>
                  <div className="text-gray-600">Calificación promedio</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Joyería elegante DOMI"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="colecciones" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Nuestras <span className="text-yellow-600">Colecciones</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada colección captura una esencia única, diseñada para acompañar diferentes momentos de tu vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-3 rounded-full font-medium hover:bg-white transition-colors">
                      Ver Colección
                    </button>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">{collection.name}</h3>
                <p className="text-gray-600 leading-relaxed">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              La experiencia <span className="text-yellow-600">DOMI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más que joyas, ofrecemos una experiencia completa de lujo y atención personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Lo que dicen nuestras <span className="text-yellow-600">clientas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Únete a la familia <span className="text-yellow-400">DOMI</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Sé la primera en conocer nuestras nuevas colecciones, ofertas exclusivas y eventos especiales
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white border-none focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
          </form>

          <div className="flex justify-center space-x-4 mb-8">
            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </button>
          </div>

          <button className="bg-white text-gray-900 px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Ver Tienda Completa
            <ArrowRight className="w-5 h-5 inline-block ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-32 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded flex items-center justify-center mb-6">
                <svg fill="#ffffff" height="15px" width="15px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1077 923 256 256" xml:space="preserve">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M-827.3,979.5c0,0-2.2-13.1-5.2-17.1c-3.8-5.1-16.4-12.1-16.4-12.1c-2.6,3.7,3.6-9.8,7.3-22.7c0,0-24.2,3.2-46.8,27.6 c-6.4,7-17.8,38.6-17.8,38.6l-44.7,20.5c-31.1,12.9-82.7,26.2-82.7,97.7v30.5c-2.5-1.7-15.7-12.7-15.5-29.9 c0.1-13.6,1.9-27.5,3.6-39.9c3.1-22.7,5.5-47.1-3.7-57.6c-4.2-4.8-10.2-7.3-17.7-7.3c-4.9,0-8.9,4-8.9,8.9c0,4.9,4,8.9,8.9,8.9 c2.2,0,3.6,0.4,4.3,1.2c3.8,4.4,1.5,28.1-0.6,43.4c-1.7,12.9-3.7,27.5-3.7,42.2c0,16.2,5.6,31.4,15.7,42.8 c11.5,12.9,27.7,19.7,46.8,19.7c0,0,0,0,0,0h62.5h8.9h17.9c4.9,0,8.9-4,8.9-8.9s-4-8.9-8.9-8.9l-19.6,0l9.5-31.3 c0-4.5-1-8.8-2.7-12.6c-7.1-12.1-19.9-19.6-34-19.6c-6.2,0-12,1.4-17.5,4.1l-2.9-5.8c6.4-3.2,13.2-4.8,20.4-4.8 c16.8,0,32.3,9.2,40.3,24l0,0l0,0c0,0,33.1,50.7,36.4,57.9c0,0.1,0.1,0.1,0.1,0.2c0.9,2.7,3.1,4.7,5.9,5.3c0.1,0,0.2,0,0.3,0.1 c0.5,0.1,0.9,0.3,1.4,0.3h9.8c4.4,0,8.1-3.6,8.1-8.1c0-4.4-3.6-8.1-8.1-8.1h0.2c0,0-26.6-47.4-21.4-64.2 c23.7-37.2,36.5-72.5,36.5-72.5c5.1-11.6,18.2-20.5,20-21.7c4-2.7,9.5-6.1,10-11.3C-822.2,986.7-826,981.7-827.3,979.5z"/> </g>

</svg>
                <span className="text-white font-serif font-bold text-lg">     
                  &nbsp;DOMI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Elegancia atemporal que habla por ti. Descubre la joya perfecta para cada momento especial.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Colecciones</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Luz de Luna</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Raíces Doradas</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Eterna</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Atención al Cliente</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Guía de Tallas</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Cuidado de Joyas</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Política de Cambios</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Garantía</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>+57 (1) 234-5678</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>hola@domijoyas.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DOMI Joyas. Todos los derechos reservados. | Diseño con amor para mujeres excepcionales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;