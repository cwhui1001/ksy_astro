import Image from "next/image";
import Link from "next/link";
import PackCarousel from "@/components/PackCarousel";

export default function Home() {
  const packImages = [
    { src: "/images/dia-imamku.webp", alt: "Dia Imamku" },
    { src: "/images/pack-1.png", alt: "Astro Pack 1" },
    { src: "/images/pack-2.webp", alt: "Astro Pack 2" },
    { src: "/images/pack-3.webp", alt: "Astro Pack 3" },
    { src: "/images/pack-4.png", alt: "Astro Pack 4" },
    { src: "/images/pack-5.png", alt: "Astro Pack 5" },
  ];

  const sportsPackImages = [
    { src: "/images/sports-main.png", alt: "Astro Sports Main" },
    { src: "/images/sports-pack-6.png", alt: "Astro Sports 6" },
    { src: "/images/sports-pack-5.png", alt: "Astro Sports 5" },
    { src: "/images/sports-pack-4.png", alt: "Astro Sports 4" },
    { src: "/images/sports-pack-8.png", alt: "Astro Sports 8" },
    { src: "/images/sports-pack-7.png", alt: "Astro Sports 7" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full View Image */}
      <section className="bg-background">
        <div className="w-full relative aspect-video md:max-h-[1000vh] overflow-hidden">
          <Image
            src="/images/astro-one-hero.webp"
            alt="Astro One Hero"
            fill
            className="object-contain lg:object-cover"
            priority
          />
        </div>
      </section>

      {/* Civil Servant Plan Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements - optimized for white bg */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
            {/* Left Column: Image with modern framing */}
            <div className="lg:w-7/12 w-full animate-fade-in opacity-0 [animation-fill-mode:forwards]">
              <div className="relative p-1 rounded-2xl bg-linear-to-br from-primary/40 via-purple-500/40 to-blue-500/40 shadow-xl group">
                <div className="relative rounded-xl overflow-hidden bg-white">
                  <Image
                    src="/images/civil-servant-plan.png"
                    alt="Astro Civil Servant Plan"
                    width={1063}
                    height={597}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:w-5/12 w-full space-y-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '200ms' }}>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 leading-[1.1] tracking-tight">
                  Special Civil Servant{' '}
                  <span className="bg-linear-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Plan
                  </span>
                </h2>

                <div className="flex items-baseline gap-3">
                  <p className="text-xl md:text-2xl font-bold text-zinc-800">
                    From Just <span className="text-primary text-4xl md:text-5xl">RM39.99</span>
                    <span className="text-xl md:text-2xl text-zinc-500 font-medium">/month</span>
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-lg text-zinc-600 leading-relaxed max-w-xl">
                <p>
                  <strong className="text-zinc-900 font-bold">Astro Civil Servant Plan: Exclusive Savings Just for You.</strong>
                </p>
                <p>
                  Enjoy premium entertainment at a price that respects your dedication. Designed specifically for civil servants, this plan offers the best of Astro at a fraction of the cost.
                </p>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-center gap-8">
                <Link
                  href="https://wa.me/60162299549?text=Hi,%20I'm%20interested%20to%20sign%20up%20for%20Astro!"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-[#25D366] rounded-2xl hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Get it now
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Astro One TV Packs Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-zinc-100">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight leading-[1.1]">
              Astro One TV packs. <br className="md:hidden" />
              <span className="bg-linear-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">Made easy for you.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border-4 border-primary overflow-hidden">
            {/* Left Column: Visuals - Now stretching to match right side */}
            <div className="lg:col-span-6 flex flex-col gap-6 animate-fade-in min-h-full">
              <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl group border-4 border-white min-h-[300px] hidden lg:block">
                <Image
                  src="/images/dia-imamku.webp"
                  alt="Dia Imamku"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Custom Auto-sliding Gallery for Pack Previews */}
              <div className="w-full">
                <PackCarousel images={packImages} />
              </div>
            </div>

            {/* Right Column: Features & Pricing */}
            <div className="lg:col-span-6 h-full flex flex-col justify-between py-2 space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 relative flex-shrink-0 p-1 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
                  <Image src="/images/pack-icon.png" alt="Icon" fill className="object-contain p-2" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-zinc-900 leading-tight">
                    Astro One: <br /> <span className="text-primary">Entertainment Pack</span>
                  </h3>
                </div>
              </div>

              <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                Easy to stream Local and international Malay, Chinese, and Indian languages shows
              </p>

              <div className="space-y-4 pt-6 border-t border-zinc-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span className="text-4xl font-black text-zinc-900 tracking-tighter">RM49.99</span>
                  <span className="text-zinc-400 font-bold text-sm">(after 8% SST RM53.99)</span>
                </div>

                <div className="p-6 rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-zinc-700 mb-1">20% Off (Civil Servant Rebate)</p>
                    <p className="text-3xl font-black text-primary tracking-tighter">RM39.99 <span className="text-lg font-bold text-primary/60">/24 months</span></p>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 transition-transform group-hover:scale-125 group-hover:rotate-0 duration-500">
                    <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-2">
                {[
                  "90+ Astro Channels",
                  "Popular series & movies",
                  "Award-winning TV shows",
                  "Stream on 2 devices"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700 font-bold">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hardware / APP Icons */}
              <div className="flex flex-wrap items-center gap-8 py-6 px-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-widest hidden sm:block">Hardware</div>
                  <div className="flex items-center gap-2 text-zinc-800 font-bold">
                    <Image src="/images/ulti-box.webp" alt="Ulti Box" width={45} height={40} className="h-8 w-auto object-contain" />
                    <span className="text-sm">Ulti Box</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-zinc-200 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-widest hidden sm:block">Mobile</div>
                  <div className="flex items-center gap-2 text-zinc-800 font-bold">
                    <Image src="/images/astro-go.png" alt="Astro Go" width={28} height={40} className="h-8 w-auto object-contain" />
                    <span className="text-sm">Astro Go</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="https://wa.me/60162299549?text=Hi,%20I'm%20interested%20to%20sign%20up%20for%20Astro!"
                  className="group relative flex-1 inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-primary rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                >
                  <span className="relative z-10">Sign Up Now</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
                </Link>
                <button className="flex-1 px-10 py-5 border-2 border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:bg-zinc-50 transition-all duration-300 hover:border-zinc-300">
                  Channel List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Astro One Sports Pack Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border-4 border-primary overflow-hidden">
            {/* Left Column: Visuals */}
            <div className="lg:col-span-6 flex flex-col gap-6 animate-fade-in min-h-full">
              <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl group border-4 border-white min-h-[300px] hidden lg:block">
                <Image
                  src="/images/sports-main.png"
                  alt="Astro Sports Main"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="w-full">
                <PackCarousel images={sportsPackImages} />
              </div>
            </div>

            {/* Right Column: Features & Pricing */}
            <div className="lg:col-span-6 h-full flex flex-col justify-between py-2 space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 relative flex-shrink-0 p-1 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
                  <Image src="/images/sports-icon.png" alt="Sports Icon" fill className="object-contain p-2" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-zinc-900 leading-tight">
                    Astro One: <br /> <span className="text-primary">Sports Pack</span>
                  </h3>
                </div>
              </div>

              <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                Match day, race day, game day, live action every day including Premier League, UFC, NBA, and more
              </p>

              <div className="space-y-4 pt-6 border-t border-zinc-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span className="text-4xl font-black text-zinc-900 tracking-tighter">RM69.99</span>
                  <span className="text-zinc-400 font-bold text-sm">(after 8% SST RM75.59)</span>
                </div>

                <div className="p-6 rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-lg font-bold text-zinc-700 mb-1">Sports Super Sales</p>
                    <p className="text-3xl font-black text-primary tracking-tighter">RM69.99 <span className="text-lg font-bold text-primary/60">+ Free Kids 24 months</span></p>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 transition-transform group-hover:scale-125 group-hover:rotate-0 duration-500">
                    <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-2">
                {[
                  "Entertainment + Sport with 115+ Channels",
                  "Premier League, BWF, UFC, and more",
                  "TV Shows + Live Sports",
                  "Stream endless live sports"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700 font-bold">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Hardware / APP Icons */}
              <div className="flex flex-wrap items-center gap-4 py-6 px-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-3">
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-widest hidden sm:block">Hardware</div>
                  <div className="flex items-center gap-2 text-zinc-800 font-bold">
                    <Image src="/images/ulti-box.webp" alt="Ultra Box" width={45} height={40} className="h-8 w-auto object-contain" />
                    <span className="text-sm">Ultra Box</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-zinc-200 hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="text-xs font-black text-zinc-400 uppercase tracking-widest hidden sm:block">Apps</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-zinc-800 font-bold">
                      <Image src="/images/astro-go.png" alt="Astro Go" width={28} height={40} className="h-8 w-auto object-contain" />
                      <span className="text-sm">Astro Go</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-800 font-bold">
                      <Image src="/images/bein-sports.webp" alt="beIN SPORTS" width={35} height={40} className="h-8 w-auto object-contain" />
                      <span className="text-sm">beIN</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="https://wa.me/60162299549?text=Hi,%20I'm%20interested%20to%20sign%20up%20for%20Astro!"
                  className="group relative flex-1 inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-primary rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
                >
                  <span className="relative z-10">Sign Up Now</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
                </Link>
                <button className="flex-1 px-10 py-5 border-2 border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:bg-zinc-50 transition-all duration-300 hover:border-zinc-300">
                  Channel List
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
