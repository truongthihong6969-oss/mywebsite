import { ArrowRight, BookOpen, Heart, Scissors } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#2C2C2C] font-sans">
      {/* Header */}
      <header className="px-10 py-6 flex justify-between items-center bg-[rgba(251,251,249,0.8)] sticky top-0 z-10">
        <div className="font-serif text-2xl font-bold tracking-wide text-[#5A6B53]">LẠI NHÀ XALACA</div>
        <nav className="space-x-8 text-[13px] uppercase tracking-widest font-medium text-[#2C2C2C]">
          <a href="#patterns" className="hover:text-[#5A6B53]">Patterns</a>
          <a href="#about" className="hover:text-[#5A6B53]">About</a>
          <a href="#contact" className="hover:text-[#5A6B53]">Contact</a>
        </nav>
        <button className="bg-[#5A6B53] text-white px-6 py-2 rounded text-sm font-semibold hover:opacity-90 transition">
          Shop Now
        </button>
      </header>

      {/* Hero Section */}
      <section className="px-10 py-20 text-center">
        <span className="font-serif italic text-[#5A6B53] text-lg mb-3 block">Hiểu mình để mặc đẹp</span>
        <h1 className="font-serif text-6xl md:text-7xl text-[#2C2C2C] mb-6 font-normal leading-tight">Mindful Fashion,<br />Tailored by You.</h1>
        <p className="text-lg text-[#6B6B6B] mb-10 max-w-xl mx-auto leading-relaxed">Experience the joy of slow fashion. Our premium digital patterns are designed for beginners and enthusiasts alike, turning complex tailoring into effortless home projects.</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#5A6B53] text-white px-8 py-4 rounded text-sm font-semibold hover:opacity-90 transition">
            Explore Patterns
          </button>
          <button className="border border-[#5A6B53] text-[#5A6B53] px-8 py-4 rounded text-sm font-semibold hover:bg-[#5A6B53] hover:text-white transition">
            Watch Tutorial
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-10 py-20 bg-[#FBFBF9]">
        <div className="max-w-3xl mx-auto text-center border-t border-[#EAE7DC] pt-10">
          <h2 className="text-3xl font-serif text-[#5A6B53] mb-6">Understanding yourself to dress well.</h2>
          <p className="text-base text-[#6B6B6B] leading-relaxed">Lại Nhà Xalaca isn't just about patterns; it's about empowerment. We believe that by creating your own clothes, you not only save time and express your unique style but also gain a deeper understanding of what fits and feels best for you.</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="patterns" className="px-10 py-20">
        <span className="text-xs uppercase tracking-widest text-[#6B6B6B] border-b border-[#EAE7DC] pb-2 mb-10 block text-center">Featured Collections</span>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Beginner Basics', desc: 'Simple, elegant designs for your first projects.', icon: Scissors },
            { title: 'Advanced Tailoring', desc: 'Complex patterns for the seasoned maker.', icon: BookOpen },
            { title: 'DIY Accessories', desc: 'Quick and stylish add-ons for any outfit.', icon: Heart },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-[#EAE7DC] hover:border-[#5A6B53] transition">
              <item.icon className="text-[#5A6B53] mb-4" size={28} />
              <h3 className="font-serif text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B6B6B] mb-6 leading-relaxed">{item.desc}</p>
              <a href="#" className="text-[#5A6B53] font-semibold text-sm flex items-center gap-2">View Pattern <ArrowRight size={16} /></a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 border-t border-[#EAE7DC] flex justify-between items-center text-xs text-[#6B6B6B]">
        <p>&copy; 2026 Lại Nhà Xalaca. Crafted with intention in Vietnam.</p>
        <div className="flex gap-4">
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>YouTube</span>
        </div>
      </footer>
    </div>
  );
}
