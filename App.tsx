/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceCard, ExperienceItem, TestimonialCard } from './components/Diagrams';
import { FloatingBlobs } from './components/QuantumScene';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-600 overflow-x-hidden selection:bg-teal-100 selection:text-teal-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-brand-500 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-md">
              A
            </div>
            <span className={`font-serif font-bold text-lg tracking-wide text-slate-800 ${scrolled ? 'opacity-100' : 'opacity-90'}`}>
              Ariadna Garcia
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-slate-600 hover:text-teal-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-slate-800 text-white rounded-full hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 text-sm font-semibold"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-slate-800 p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif font-medium text-slate-800 hover:text-teal-600"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <FloatingBlobs />
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-100 text-teal-700 rounded-full text-sm font-semibold tracking-wide mb-6">
              Servicios de Educación Especial
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] mb-6">
              Empoderando a cada niño para <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-brand-500">Aprender y Crecer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Apoyo educativo profesional, compasivo e individualizado, diseñado para descubrir fortalezas únicas y fomentar la confianza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 text-center"
              >
                Agendar una Consulta
              </a>
              <a 
                href="#about"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-semibold hover:border-teal-200 hover:bg-teal-50 transition-all text-center"
              >
                Conocer Más
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              {/* Photo Placeholder */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-medium text-lg">Retrato de Ariadna</span>
              </div>
              {/* Replace src with actual image URL */}
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Ariadna Miroslava García Carabez trabajando con un estudiante" 
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            {/* Decorative Circle Behind */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-100 rounded-full -z-10 blur-3xl opacity-60"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-100 rounded-full -z-10 blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl text-slate-900 mb-4">Sobre Mí</h2>
            <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed">
              ¡Hola! Soy <span className="text-slate-900 font-semibold">Ariadna Miroslava García Carabez</span>. 
              Soy una Maestra de Educación Especial dedicada, impulsada por la creencia de que cada niño merece una educación que se adapte a su forma única de ver el mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="font-serif text-xl text-slate-900 mb-3">Conocimiento Experto</h3>
              <p className="text-slate-600">Licenciada en Educación Especial con formación especializada en estrategias de aprendizaje para la neurodivergencia.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="font-serif text-xl text-slate-900 mb-3">Empatía Profunda</h3>
              <p className="text-slate-600">Creando un ambiente seguro y enriquecedor donde los niños se sienten comprendidos, validados y motivados.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-sage-100 text-sage-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-serif text-xl text-slate-900 mb-3">Alianza Familiar</h3>
              <p className="text-slate-600">Colaborando estrechamente con las familias para asegurar que las estrategias funcionen tanto en casa como en el aula.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative subtle background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-teal-200 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-brand-200 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <span className="block text-teal-600 font-semibold tracking-widest uppercase text-sm mb-2">Lo Que Ofrezco</span>
            <h2 className="font-serif text-4xl text-slate-900">Servicios Especializados</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <ServiceCard 
               title="Planes Educativos Individualizados" 
               description="Estrategias de aprendizaje personalizadas diseñadas para cumplir con objetivos cognitivos y de desarrollo específicos."
               icon="book"
             />
             <ServiceCard 
               title="Integración Sensorial" 
               description="Técnicas y actividades para ayudar a los niños a procesar información sensorial y autorregularse eficazmente."
               icon="sparkles"
             />
             <ServiceCard 
               title="Desarrollo de Habilidades Sociales" 
               description="Interacciones guiadas para construir confianza en la comunicación, el compartir y hacer amigos."
               icon="users"
             />
             <ServiceCard 
               title="Intervención Temprana" 
               description="Apoyo para niños pequeños para abordar retrasos en el desarrollo durante períodos críticos de crecimiento."
               icon="clock"
             />
             <ServiceCard 
               title="Tutoría Académica" 
               description="Enseñanza paciente y adaptativa para lectura, escritura y matemáticas que respeta el ritmo del niño."
               icon="pencil"
             />
             <ServiceCard 
               title="Consultoría para Padres y Familias" 
               description="Empoderando a los padres con herramientas y conocimientos para apoyar el camino de su hijo en casa."
               icon="heart"
             />
          </div>
        </div>
      </section>

      {/* Experience / CV Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-16">
           <div className="md:col-span-4">
             <h2 className="font-serif text-4xl text-slate-900 mb-6">Experiencia y Cualificaciones</h2>
             <p className="text-slate-600 mb-6">
               Mi carrera se basa en una sólida preparación académica y años de experiencia práctica en diversos entornos educativos.
             </p>
             <div className="p-6 bg-brand-50 rounded-xl border border-brand-100">
               <h4 className="font-serif text-lg text-brand-800 mb-2">Educación</h4>
               <div className="mb-4 last:mb-0">
                 <p className="font-semibold text-slate-800">Licenciatura en Educación Especial</p>
                 <p className="text-sm text-slate-500">Escuela Normal de Especialización "Dr. Roberto Solís Quiroga"</p>
               </div>
             </div>
           </div>
           <div className="md:col-span-8 space-y-8">
              <ExperienceItem 
                year="2019 - Presente"
                role="Maestra de Educación Especial"
                org="Centro de Aprendizaje Inclusivo"
                desc="Liderando programas de aprendizaje individualizados para niños con trastorno del espectro autista y TDAH. Desarrollo de materiales curriculares sensorialmente amigables."
              />
              <ExperienceItem 
                year="2017 - 2019"
                role="Terapeuta Educativa"
                org="Práctica Privada"
                desc="Impartí sesiones de terapia individual enfocadas en el desarrollo cognitivo y la regulación emocional para niños de 4 a 12 años."
              />
              <ExperienceItem 
                year="2015 - 2017"
                role="Especialista en Integración"
                org="Distrito Escolar Primario"
                desc="Colaboré con maestros de educación general para adaptar entornos de aula y planes de estudio para estudiantes con necesidades diversas."
              />
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-teal-900 text-teal-50">
        <div className="container mx-auto px-6">
           <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">Testimonios de Familias</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard 
                quote="Ariadna ha transformado la visión de nuestro hijo sobre la escuela. Solía tener ansiedad, pero ahora entra con una sonrisa. Su paciencia es infinita."
                author="María S."
                role="Madre de familia"
              />
              <TestimonialCard 
                quote="Profesional, experta y profundamente cariñosa. No solo enseñó a nuestra hija, nos enseñó a nosotros cómo apoyarla mejor."
                author="David L."
                role="Padre de familia"
              />
              <TestimonialCard 
                quote="La Mtra. García ve el potencial en cada niño. Sus estrategias son creativas y efectivas. Altamente recomendada para cualquier familia."
                author="Sarah J."
                role="Colega"
              />
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
             <div className="md:w-2/5 bg-slate-900 text-white p-10 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl mb-6">Conectemos</h3>
                  <p className="text-slate-300 mb-8">Cada viaje comienza con una conversación. Me encantaría saber sobre las necesidades de tu hijo y cómo puedo ayudar.</p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-3 text-slate-300">
                       <Mail size={18} />
                       <span>contacto@ariadnagarcia.com</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-300">
                       <Phone size={18} />
                       <span>(555) 123-4567</span>
                     </div>
                     <div className="flex items-center gap-3 text-slate-300">
                       <MapPin size={18} />
                       <span>Ciudad de México, MX</span>
                     </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                   <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-teal-600 transition-colors"><Linkedin size={20} /></a>
                   <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
                </div>
             </div>

             <div className="md:w-3/5 p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Nombre</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Ana" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Apellido</label>
                        <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="Pérez" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Correo Electrónico</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all" placeholder="ana@ejemplo.com" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Mensaje</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none" placeholder="Cuéntame un poco sobre tu hijo..."></textarea>
                   </div>
                   <button type="submit" className="w-full py-3.5 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all shadow-md hover:shadow-lg">
                     Enviar Mensaje
                   </button>
                </form>
             </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-8 text-center border-t border-slate-200">
         <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Ariadna Miroslava Garcia Carabez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;