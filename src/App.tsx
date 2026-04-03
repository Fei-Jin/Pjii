import { motion } from "motion/react";
import { 
  BookOpen, 
  Settings, 
  Award, 
  Languages, 
  Check, 
  Mail, 
  MessageSquare, 
  Menu,
  X,
  ChevronDown,
  Phone,
  Users,
  FileText,
  Globe,
  ArrowRight,
  Zap,
  ShieldCheck,
  Star,
  Instagram,
  Linkedin
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-navy">
              <BookOpen className="text-primary w-8 h-8" />
              <span className={scrolled ? "text-navy" : "text-white"}>PJII</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Beranda", "Layanan", "Harga", "Testimoni"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`font-semibold transition-colors ${scrolled ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/628975841020" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-navy" : "text-white"}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 pb-6 px-4 space-y-4 shadow-2xl absolute w-full left-0"
        >
          {["Beranda", "Layanan", "Harga", "Testimoni"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-bold">{item}</a>
          ))}
          <a href="https://wa.me/628975841020" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-whatsapp text-white py-3 rounded-full font-bold">
            <Phone size={18} />
            WhatsApp
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header id="home" className="relative bg-navy-dark text-white overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-sm font-bold text-blue-300 mb-8">
              <Zap size={16} className="fill-blue-300" />
              <span>Partner Resmi Akreditasi Jurnal</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              Tingkatkan Reputasi <br />
              <span className="gradient-text">Jurnal Ilmiah</span> Anda
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Solusi komprehensif untuk pengelola jurnal menuju akreditasi SINTA dan indeksasi internasional bereputasi dengan pendampingan pakar.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="https://wa.me/628975841020?text=Halo%20PJII,%20saya%20ingin%20tanya%20layanan%20jurnal" 
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl shadow-primary/40 flex items-center justify-center gap-2 group"
              >
                Konsultasi Sekarang
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#layanan" className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center">
                Lihat Layanan
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="font-bold text-sm tracking-widest uppercase">Trusted By</div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center">
                <img 
                  src="https://stkipmajenang.ac.id/wp-content/uploads/2021/03/logo-stkip-majenang.png" 
                  alt="STKIP Majenang" 
                  className="h-10 w-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="text-xl font-black">UNIV-A</div>
                <div className="text-xl font-black">INST-B</div>
                <div className="text-xl font-black">JOUR-C</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 animate-float">
              <img 
                src="https://illustrations.popsy.co/white/education.svg" 
                alt="Education Illustration" 
                className="max-h-[500px] w-auto drop-shadow-[0_35px_35px_rgba(59,130,246,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const Stats = () => {
  const stats = [
    { label: "Artikel Terbit", value: "5000+", icon: <FileText className="w-6 h-6" /> },
    { label: "Jurnal Terbantu", value: "150+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Lolos SINTA", value: "85+", icon: <Award className="w-6 h-6" /> },
    { label: "Indeksasi Internasional", value: "40+", icon: <Globe className="w-6 h-6" /> },
    { label: "Klien Institusi", value: "60+", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section className="py-12 bg-white relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-2xl text-primary mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-navy mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Penerbitan Jurnal",
      desc: "Layanan penerbitan jurnal ilmiah cepat dan terpercaya untuk SINTA 4, 5, 6, serta jurnal non-SINTA.",
      features: ["SINTA 4, 5, 6", "Jurnal Non-SINTA", "Custom / Artikel"]
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Manajemen OJS",
      desc: "Layanan instalasi, upgrade, migrasi data, hingga kustomisasi tampilan OJS 3 yang modern dan user-friendly.",
      features: ["Upgrade OJS 2 ke 3", "Custom Theme", "Plugin Setup"]
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Akreditasi SINTA",
      desc: "Pendampingan intensif mulai dari audit kesiapan, perbaikan substansi, hingga proses submit di portal ARJUNA.",
      features: ["Audit Substansi", "Manajemen Editor", "Lolos SINTA"]
    },
    {
      icon: <Languages className="w-10 h-10" />,
      title: "Proofreading",
      desc: "Penyelarasan bahasa Inggris akademik oleh pakar untuk memastikan naskah layak terbit di jurnal internasional.",
      features: ["Grammar Check", "Academic Tone", "Fast Turnaround"]
    }
  ];

  return (
    <section id="layanan" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-title mb-6">Layanan Unggulan Kami</h2>
          <p className="text-lg text-slate-600">Kami menyediakan ekosistem pendukung publikasi ilmiah yang terintegrasi untuk hasil yang maksimal.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{s.desc}</p>
              <ul className="space-y-3">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-500">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Konsultasi", desc: "Diskusi awal mengenai kebutuhan dan kendala jurnal Anda." },
    { title: "Audit & Analisis", desc: "Tim kami melakukan audit mendalam terhadap kesiapan jurnal." },
    { title: "Eksekusi", desc: "Perbaikan teknis, substansi, dan manajemen dilakukan secara profesional." },
    { title: "Monitoring", desc: "Pendampingan hingga hasil (Akreditasi/Indeksasi) tercapai." },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">Bagaimana Kami Bekerja</h2>
          <p className="text-slate-600">Proses sistematis untuk menjamin kualitas publikasi Anda.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center text-2xl font-black text-primary mx-auto mb-6 shadow-xl">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="harga" className="py-32 bg-navy-dark text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Investasi Masa Depan Jurnal</h2>
          <p className="text-slate-400">Pilih paket yang sesuai dengan kebutuhan institusi Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="inline-block px-4 py-1 bg-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Best Value
            </div>
            <h4 className="text-3xl font-bold mb-2">Penerbitan Jurnal</h4>
            <p className="text-slate-400 mb-8">SINTA 4, 5, 6 & Non-SINTA</p>
            
            <div className="text-5xl font-black text-white mb-10">Custom <span className="text-lg font-normal text-slate-500">/ artikel</span></div>
            
            <div className="space-y-5 mb-12">
              {[
                "Penerbitan Cepat & Mudah",
                "LOA Instan",
                "Cek Plagiasi Turnitin",
                "Formatting Template",
                "Indeksasi Google Scholar"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                    <Check size={14} />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/628975841020?text=Halo%20PJII,%20saya%20tertarik%20dengan%20Paket%20Penerbitan%20Jurnal" 
              target="_blank"
              rel="noreferrer"
              className="block w-full py-5 bg-blue-600 text-white font-bold rounded-full text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-lg"
            >
              Pilih Paket
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-primary/30 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-primary/40 transition-all"></div>
            
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Most Popular
            </div>
            <h4 className="text-3xl font-bold mb-2">Layanan Utama</h4>
            <p className="text-slate-400 mb-8">Paket lengkap pendampingan SINTA & OJS</p>
            
            <div className="text-5xl font-black text-white mb-10">Custom <span className="text-lg font-normal text-slate-500">/ project</span></div>
            
            <div className="space-y-5 mb-12">
              {[
                "Optimalisasi OJS 3 & Custom Theme",
                "Audit & Pendampingan SINTA",
                "Pelatihan Editor & Reviewer",
                "Submit Portal ARJUNA",
                "Bantuan Indeksasi (DOAJ, Copernicus, etc)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/628975841020?text=Halo%20PJII,%20saya%20tertarik%20dengan%20Paket%20Layanan%20Utama" 
              target="_blank"
              rel="noreferrer"
              className="block w-full py-5 bg-primary text-white font-bold rounded-full text-center hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 text-lg"
            >
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      img: "https://stkipmajenang.ac.id/wp-content/uploads/2021/03/logo-stkip-majenang.png",
      text: "Terima kasih PJII atas pendampingan jurnal di STKIP Majenang. Sangat membantu proses akreditasi dan peningkatan kualitas publikasi ilmiah kami.",
      name: "STKIP Majenang",
      role: "Pendampingan Jurnal",
      rating: 5
    },
    {
      img: "https://i.pravatar.cc/150?img=11",
      text: "Proses akreditasi jurnal kami jadi jauh lebih terarah dan rapi berkat pendampingan dari tim PJII. Respon sangat cepat via WA.",
      name: "Dr. Aris Setiawan",
      role: "Editor Jurnal Sains",
      rating: 5
    },
    {
      img: "https://i.pravatar.cc/150?img=5",
      text: "Tampilan OJS 3 kami sekarang sangat modern dan elegan. Indeksasi ke Google Scholar pun meningkat pesat.",
      name: "Ibu Nurul, M.Pd",
      role: "Pengelola Jurnal Pendidikan",
      rating: 5
    },
    {
      img: "https://i.pravatar.cc/150?img=12",
      text: "Layanan proofreading-nya sangat teliti. Membantu naskah saya diterima di jurnal bereputasi internasional.",
      name: "Rian Hidayat",
      role: "Peneliti / Akademisi",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">Apa Kata Klien Kami</h2>
          <p className="text-slate-600">Kepuasan pengelola jurnal adalah prioritas utama kami.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={r.img} 
                  alt={r.name} 
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h6 className="font-bold text-navy">{r.name}</h6>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Berapa lama proses pendampingan SINTA?", a: "Biasanya memakan waktu 3-6 bulan tergantung kesiapan berkas dan substansi jurnal. Kami akan mengawal hingga proses submit selesai." },
    { q: "Apakah PJII melayani upgrade OJS 2 ke OJS 3?", a: "Ya, kami melayani migrasi data penuh dari OJS 2 ke OJS 3 dengan jaminan data aman dan tampilan yang lebih modern." },
    { q: "Bagaimana sistem pembayarannya?", a: "Kami menggunakan sistem termin (DP, Progress, Final) atau pembayaran penuh di awal sesuai kesepakatan kontrak institusi." },
    { q: "Apakah ada garansi lolos SINTA?", a: "Kami memberikan garansi pendampingan hingga jurnal Anda memenuhi kriteria akreditasi yang ditargetkan berdasarkan hasil audit awal." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title mb-6">Pertanyaan Umum</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-navy text-lg">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform ${activeIndex === i ? 'rotate-180 bg-primary text-white' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              {activeIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-8 pb-6 text-slate-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="kontak" className="py-32 bg-navy text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex p-4 bg-white/10 rounded-3xl mb-8">
          <ShieldCheck className="w-12 h-12 text-blue-400" />
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Siap Memulai Publikasi?</h2>
        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">Konsultasikan kebutuhan jurnal Anda dengan tim ahli kami secara gratis hari ini.</p>
        
        <motion.a 
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/628975841020" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-4 bg-whatsapp text-white px-12 py-6 rounded-full font-black text-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] animate-pulse-whatsapp"
        >
          <Phone size={28} />
          Chat WhatsApp Sekarang
        </motion.a>
        
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-10 text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
              <Mail size={18} className="text-primary" />
            </div>
            <span className="font-bold">admin@pjii.id</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
              <Globe size={18} className="text-primary" />
            </div>
            <span className="font-bold">Jakarta, Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-slate-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-2xl font-black text-white">
            <BookOpen className="text-primary w-8 h-8" />
            <span>PJII<span className="text-primary">.</span></span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs opacity-50">
          &copy; {new Date().getFullYear()} Publikasi Jurnal Ilmiah Indonesia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FloatingWA = () => {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      href="https://wa.me/628975841020"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-whatsapp text-white p-5 rounded-full shadow-2xl flex items-center justify-center animate-pulse-whatsapp"
    >
      <Phone size={32} />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}
