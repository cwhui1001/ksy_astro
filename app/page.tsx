"use client";

import React, { useState } from "react";
import Image from "next/image";
import PackCarousel from "@/components/PackCarousel";
import ChannelModal from "@/components/ChannelModal";
import RegistrationFormSection from "@/components/RegistrationFormSection";

export default function Home() {
  const WHATSAPP_NUMBER = "60146833321";
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: "",
    packName: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [registrationPreset, setRegistrationPreset] = useState<Record<string, string>>({});

  const openModal = (packName: string, imageSrc: string) => {
    setModalState({
      isOpen: true,
      imageSrc,
      packName,
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };
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

  const epicPackImages = [
    { src: "/images/epic-pack-9.png", alt: "Astro Epic 9" },
    { src: "/images/epic-pack-10.png", alt: "Astro Epic 10" },
    { src: "/images/epic-pack-11.png", alt: "Astro Epic 11" },
    { src: "/images/epic-pack-12.png", alt: "Astro Epic 12" },
    { src: "/images/epic-pack-13.png", alt: "Astro Epic 13" },
  ];

  const allPacks = [
    {
      id: "entertainment",
      name: "Entertainment Pack",
      description: "Easy to stream Local and international Malay, Chinese, and Indian languages shows",
      price: "49.99",
      sstPrice: "53.99",
      rebateTitle: "20% Off (Civil Servant Rebate)",
      rebatePrice: "39.99",
      rebatePeriod: "/24 months",
      features: [
        "90+ Astro Channels",
        "Popular series & movies",
        "Award-winning TV shows",
        "Stream on 2 devices"
      ],
      icon: "/images/pack-icon.png",
      featuredImage: "/images/dia-imamku.webp",
      carouselImages: packImages,
      hardware: [{ name: "Ulti Box", icon: "/images/ulti-box.webp", width: 45 }],
      apps: [{ name: "Astro Go", icon: "/images/astro-go.png", width: 28 }],
      channelListImage: "/images/entertainment-channels.webp",
      bgColor: "bg-slate-50"
    },
    {
      id: "sports",
      name: "Sports Pack",
      description: "Match day, race day, game day, live action every day including Premier League, UFC, NBA, and more",
      price: "69.99",
      sstPrice: "75.59",
      rebateTitle: "Sports Super Sales",
      rebatePrice: "69.99",
      rebatePeriod: "+ Free Kids 24 months",
      features: [
        "Entertainment + Sport with 115+ Channels",
        "Premier League, BWF, UFC, and more",
        "TV Shows + Live Sports",
        "Stream endless live sports"
      ],
      icon: "/images/sports-icon.png",
      featuredImage: "/images/sports-main.png",
      carouselImages: sportsPackImages,
      hardware: [{ name: "Ultra Box", icon: "/images/ulti-box.webp", width: 45 }],
      apps: [
        { name: "Astro Go", icon: "/images/astro-go.png", width: 28 },
        { name: "beIN", icon: "/images/bein-sports.webp", width: 35 }
      ],
      channelListImage: "/images/sports-channels.webp",
      bgColor: "bg-white"
    },
    {
      id: "epic",
      name: "Epic Pack",
      description: "The ultimate streaming experience with most impressive TV shows, live sports, and apps.",
      price: "159.99",
      sstPrice: "172.79",
      rebateTitle: "New Year Super Sales",
      rebatePrice: "20% OFF RM159.99",
      rebatePeriod: "",
      features: [
        "Full Package with 140+ Astro Channels",
        "Netflix, Disney+ Hotstar, Max, iQIYI, BBC, and beIN Sports",
        "For Sports & Movies Lover",
        "Variety, Kids, MAX HBO, news, and documentaries",
        "Includes Ultra Box",
        "Stream on up to 4 devices"
      ],
      icon: "/images/epic-icon.png",
      featuredImage: "/images/epic-pack-9.png",
      carouselImages: epicPackImages,
      hardware: [{ name: "Ultra Box", icon: "/images/ulti-box.webp", width: 45 }],
      apps: [
        { name: "Netflix", icon: "/images/netflix.png", width: 30 },
        { name: "Disney+ Hotstar", icon: "/images/disney-hotstar.webp", width: 30 },
        { name: "Max", icon: "/images/max.webp", width: 30 },
        { name: "iQIYI", icon: "/images/iqiyi.webp", width: 30 },
        { name: "BBC", icon: "/images/bbc.webp", width: 30 },
        { name: "beIN Sports", icon: "/images/beinsports-circular.webp", width: 30 },
        { name: "Prime Video", icon: "/images/prime-video.webp", width: 30 },
        { name: "Sun NXT", icon: "/images/sun-nxt.webp", width: 30 }
      ],
      channelListImage: "/images/epic-channels.webp",
      bgColor: "bg-slate-50"
    }
  ];

  const benefitHardwareImages = [
    { src: "/images/benefit-devices.png", alt: "Astro Devices" },
    { src: "/images/ultra-box-new.png", alt: "Ultra Box" },
    { src: "/images/ultra-box-controller.png", alt: "Ultra Box Controller" },
  ];

  const benefits = [
    {
      title: "Video On Demand",
      description: "Stream up to 90,000 videos on demand",
      icon: "/images/benefit-vod.png"
    },
    {
      title: "Cloud Recording",
      description: "Store up to 200 hours of your favourite shows and movies",
      icon: "/images/benefit-recording.png"
    },
    {
      title: "Play From Start & Live Pause",
      description: "Never miss a show again",
      icon: "/images/benefit-play.png"
    },
    {
      title: "Made for you",
      description: "Personalise your Astro with Multi-User Profiles",
      icon: "/images/benefit-madeforyou.png"
    },
    {
      title: "4K UHD",
      description: "Enjoy a crystal-clear viewing experience with Ultra Box",
      icon: "/images/benefit-4kuhd.png"
    },
    {
      title: "Apps you love",
      description: "Explore and stream your apps on the Ulti/Ultra Box",
      icon: "/images/benefit-apps.png"
    }
  ];

  const faqs = [
    {
      question: "Why choose Astro One?",
      answer: "Our customers deserve the best streaming entertainment experience with us and the new Astro One Packs make that possible. From just RM49.99, these new packs make it easy, flexible and accessible for all Malaysians to stream the content they love on one platform, with up-to 4 concurrencies on Astro GO. Customers can easily make changes to their subscriptions via the My Astro app, including updates to their packs, choosing from over 11 streaming apps, or switching to different ones, as and when they like."
    },
    {
      question: "How do i subscribe to Astro One?",
      answer: `Simply fill out the form will do. We will contact you to verify your details and process your application. Prefer to talk to us directly? You can contact us on <a href="https://wa.me/${WHATSAPP_NUMBER}" class="text-primary font-bold hover:underline">WhatsApp</a> instead.`
    },
    {
      question: "Do I need to pay for the Ultra/Ulti Box to subscribe to Astro One packs?",
      answer: "No. The Ultra/Ulti Box is provided for free. It’s recommended to access apps, add-ons, and On Demand content."
    },
    {
      question: "How many concurrent stream will i get with Astro GO on the new packs?",
      answer: "You can enjoy up to 2 concurrent streams on Astro GO with the Entertainment and Sports Packs, and up to 4 concurrencies with the Epic Pack."
    },
    {
      question: "Will Astro streaming be affected by bad weather or rain?",
      answer: "Not at all! Your streaming experience will be smooth and uninterrupted. Since you can opt for connection through Fibre WiFi, it is not affected by weather conditions like rain or storms."
    }
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

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
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
                <button
                  onClick={() => {
                    setRegistrationPreset({
                      isCivilServant: "Yes", 
                      package: "Astro One Entertainment + Civil Servant Rebate",
                      installationMethod: "Plug & Play (FREE)" 
                    });
                    document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-[#25D366] rounded-2xl hover:bg-[#128C7E] transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Get it now
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapped Pack Sections */}
      {allPacks.map((pack, index) => (
        <section key={pack.id} className={`py-20 ${pack.bgColor} relative overflow-hidden border-t border-zinc-100`}>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {index === 0 && (
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight leading-[1.1]">
                  Astro One TV packs. <br className="md:hidden" />
                  <span className="bg-linear-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">Made easy for you.</span>
                </h2>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border-4 border-primary overflow-hidden">
              {/* Left Column: Visuals */}
              <div className="lg:col-span-6 flex flex-col gap-6 animate-fade-in min-h-full">
                <div className="relative flex-1 rounded-3xl overflow-hidden shadow-xl group border-4 border-white min-h-[300px] hidden lg:block">
                  <Image
                    src={pack.featuredImage}
                    alt={pack.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="w-full">
                  <PackCarousel images={pack.carouselImages} />
                </div>
              </div>

              {/* Right Column: Features & Pricing */}
              <div className="lg:col-span-6 h-full flex flex-col justify-between py-2 space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 relative flex-shrink-0 p-1 rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm">
                    <Image src={pack.icon} alt={pack.name} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-zinc-900 leading-tight">
                      Astro One: <br /> <span className="text-primary">{pack.name}</span>
                    </h3>
                  </div>
                </div>

                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  {pack.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-zinc-100">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <span className="text-4xl font-black text-zinc-900 tracking-tighter">RM{pack.price}</span>
                    <span className="text-zinc-400 font-bold text-sm">(after 8% SST RM{pack.sstPrice})</span>
                  </div>

                  <div className="p-6 rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 relative overflow-hidden group">
                    <div className="relative z-10">
                      <p className="text-lg font-bold text-zinc-700 mb-1">{pack.rebateTitle}</p>
                      <p className="text-3xl font-black text-primary tracking-tighter">{pack.rebatePrice.startsWith('RM') ? pack.rebatePrice : pack.rebatePrice} <span className="text-lg font-bold text-primary/60">{pack.rebatePeriod}</span></p>
                    </div>
                    <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 transition-transform group-hover:scale-125 group-hover:rotate-0 duration-500">
                      <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-2">
                  {pack.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-3 text-zinc-700 font-bold ${pack.id === "epic" ? "text-sm" : ""}`}>
                      <div className={`flex-shrink-0 ${pack.id === "epic" ? "w-5 h-5" : "w-6 h-6"} rounded-full bg-green-500/10 flex items-center justify-center`}>
                        <svg className={`${pack.id === "epic" ? "w-3.5 h-3.5" : "w-4 h-4"} text-green-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
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
                      {pack.hardware.map((hw, idx) => (
                        <React.Fragment key={idx}>
                          <Image src={hw.icon} alt={hw.name} width={hw.width} height={40} className="h-8 w-auto object-contain" />
                          <span className="text-sm">{hw.name}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="w-px h-8 bg-zinc-200 hidden sm:block" />
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-black text-zinc-400 uppercase tracking-widest hidden sm:block">Apps</div>
                    <div className={`flex flex-wrap items-center gap-2 ${pack.id === "epic" ? "max-w-[300px]" : "gap-4"}`}>
                      {pack.apps.map((app, idx) => (
                        <Image key={idx} src={app.icon} alt={app.name} width={app.width} height={40} className="h-7 w-auto object-contain" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => {
                      setRegistrationPreset({
                        package: pack.name.includes("Epic") ? "Astro One Epic" : pack.name.includes("Sports") ? "Astro One Sports" : "Astro One Entertainment",
                      });
                      document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative flex-1 inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-primary rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 active:translate-y-0 overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10">Sign Up Now</span>
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500" />
                  </button>
                  <button 
                    onClick={() => openModal(pack.name, pack.channelListImage)}
                    className="flex-1 px-10 py-5 border-2 border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:bg-zinc-50 transition-all duration-300 hover:border-zinc-300"
                  >
                    Channel List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <ChannelModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        packName={modalState.packName}
      />

      {/* Benefits Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-zinc-100 shadow-2xl">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column: Device Carousel */}
            <div className="lg:w-1/2 w-full animate-fade-in">
                <PackCarousel images={benefitHardwareImages} itemsVisibleDesktop={1} objectFit="contain" />
            </div>

            {/* Right Column: Benefits Grid */}
            <div className="lg:w-1/2 w-full space-y-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-4xl font-black text-zinc-900 leading-tight">
                  Benefits of 
                  <span className="text-primary"> Ultibox & Ultrabox</span>
                </h2>
                <div className="h-1 w-85 right-10 absolute bg-primary rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="group flex items-start gap-3 p-6 rounded-3xl bg-zinc-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image 
                        src={benefit.icon} 
                        alt={benefit.title} 
                        fill 
                        className="object-contain transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-zinc-600 leading-relaxed text-sm font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden border-t border-zinc-100 shadow-[inset_0_20px_40px_rgba(0,0,0,0.02)]">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-zinc-600 text-lg font-medium max-w-2xl mx-auto">Your questions, answered. We've got you covered.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`group bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${openFaq === idx ? 'border-primary/20 shadow-xl shadow-primary/5 ring-1 ring-primary/5' : 'border-zinc-100 shadow-sm hover:border-zinc-200 hover:shadow-md'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openFaq === idx ? 'text-primary' : 'text-zinc-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${openFaq === idx ? 'bg-primary text-white rotate-180' : 'bg-zinc-50 text-zinc-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                    <svg className="w-5 h-5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {openFaq === idx ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M18 12H6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v12m6-6H6" />
                      )}
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 md:px-8 text-zinc-600 leading-relaxed font-medium">
                    <div 
                      className="prose prose-zinc max-w-none"
                      dangerouslySetInnerHTML={{ __html: faq.answer }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      <RegistrationFormSection presetData={registrationPreset} />
    </div>
  );
}
