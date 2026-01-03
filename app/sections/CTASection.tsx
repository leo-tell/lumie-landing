export default function CTASection() {
  return (
    <section className="py-32 px-20">
      <div className="container mx-auto">
        <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-300 to-blue-200">
          {/* Background image placeholder - adicionar imagem em /public/assets/images/cta-background.jpg */}
          <div className="absolute inset-0 bg-[url('/assets/images/cta-background.jpg')] bg-cover bg-center" />
          
          {/* Texto e subtexto no canto superior direito */}
          <div className="absolute top-8 right-8 text-right z-10">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">Text</h2>
            <p className="text-xl text-gray-700">Text</p>
          </div>
          
          {/* Texto pequeno no canto inferior esquerdo */}
          <div className="absolute bottom-8 left-8">
            <p className="text-gray-800 text-lg font-semibold">Text</p>
          </div>
        </div>
      </div>
    </section>
  );
}
