export default function HeroSection() {
  return (
    <section className="relative min-h-[800px] flex items-center justify-center px-6 py-32">
      {/* Background image placeholder - adicionar imagem em /public/assets/images/header.jpg */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-0">
        <div className="w-full h-full bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center opacity-60" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="grid grid-cols-8 gap-1 opacity-80">
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ marginBottom: '30px' }}>
          Transformando educação,{' '}
          <span className="text-blue-400">saúde</span> e{' '}
          <span className="text-yellow-400">pesquisa</span> em
        </h1>
        
        <h2 className="text-5xl md:text-7xl font-bold italic" style={{ marginBottom: '60px' }}>
          Neurodiversidade
        </h2>
        
        <p className="text-lg max-w-2xl mx-auto text-gray-200" style={{ marginBottom: '60px' }}>
          Instituto de Neurodiversidade e Desenvolvimento Humano. Organização da
          Sociedade Civil (OSC) sem fins lucrativos.
        </p>
        
        <div style={{ marginTop: '120px' }}>
          <button className="bg-white text-[#091630] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Faça parte!
          </button>
        </div>
      </div>
    </section>
  );
}
