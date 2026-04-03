import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

        {/* Headline and CTA below the image to ensure nothing is covered */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Astro One <span className="text-primary italic">Unlimited</span> TV.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the best content in one place. All your favorite channels, 
            movies, and streaming apps with Astro One.
          </p>
          <Link
            href="/apply-now"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Astro One (Channels) Content below Hero */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-primary font-bold mb-4 tracking-widest uppercase text-sm">Entertainment</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Astro One (Channels)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            Explore the widest range of live TV channels, streaming apps and movies all in one place. 
            The future of entertainment starts here.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {[
              { name: "Family Pack", icon: "🏠" },
              { name: "News Pack", icon: "📺" },
              { name: "Sports Pack", icon: "⚽" },
              { name: "Movies Pack", icon: "🍿" },
              { name: "Kids Pack", icon: "🎮" },
              { name: "Learning Pack", icon: "📘" },
              { name: "Astro One Pack", icon: "✨" },
              { name: "Variety Pack", icon: "🌈" }
            ].map((pack, idx) => (
              <div
                key={idx}
                className="group relative p-8 aspect-video md:aspect-square bg-accent border border-border rounded-3xl flex flex-col items-center justify-center transition-all hover:border-primary/40 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{pack.icon}</span>
                <span className="text-foreground font-bold text-lg text-center relative z-10">{pack.name}</span>
                <span className="mt-2 text-xs text-muted uppercase tracking-widest font-semibold relative z-10">Channel Pack {idx + 1}</span>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-xl transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(225,29,72,0.4)]"
            >
              Get Your Pack Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
