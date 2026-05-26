"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackId?: string;
}

const packs = [
  {
    id: "entertainment",
    name: "Astro One: Entertainment Pack",
    icon: "/images/ent-pack-icon.png",
    description: "The must-watch local and international content made for everyone in the family.",
    price: "49.99",
    banner: "/images/pack-banner-tier-1.png",
    featuredImage: "/images/rumah-tanpa-luka.jpg",
    apps: [
      { name: "Astro GO", icon: "/images/astro-go-logo.png", detail: "HD, 2 screens" }
    ],
    channels: [
      { name: "Base", icon: "/images/icon-base.png", count: "96 channels" }
    ],
    totalChannels: "90+ channels",
    accentColor: "text-magenta-v2"
  },
  {
    id: "sports",
    name: "Astro One: Sports Pack",
    icon: "/images/sports-pack-icon-new.png",
    description: "Witness every major league & live sports events, plus family entertainment.",
    price: "69.99",
    originalPrice: "99.99",
    banner: "/images/pack-banner-tier-1.png",
    featuredImage: "/images/premier-league.jpg",
    apps: [
        { name: "Sun NXT Lite", icon: "/images/sun-nxt-logo.png", detail: "Full HD, 1 screen" },
        { name: "beIN SPORTS CONNECT", icon: "/images/bein-sports-logo.png", detail: "HD, 2 screens" },
        { name: "Astro GO", icon: "/images/astro-go-logo-new.png", detail: "HD, 2 screens" }
    ],
    channels: [
      { name: "Sports", icon: "/images/sports-icon.png", count: "11 channels" },
      { name: "Sports Extra", icon: "/images/sports-extra-icon.png", count: "3 channels" },
      { name: "Base", icon: "/images/icon-base.png", count: "96 channels" }
    ],
    totalChannels: "105+ channels",
    accentColor: "text-blue-600"
  },
  {
    id: "epic",
    name: "Astro One: Epic Pack",
    icon: "/images/platinum-icon.png",
    description: "The ultimate all-in-one entertainment with movies, sports & a variety of streaming apps.",
    price: "159.99",
    originalPrice: "199.99",
    banner: "/images/pack-banner-tier-1.png",
    featuredImage: "/images/epic-featured.jpg",
    apps: [
        { name: "Netflix Standard", icon: "/images/netflix-logo.png", detail: "HD, 2 screens" },
        { name: "Disney+ Basic", icon: "/images/disney-basic.png", detail: "HD, 1 screen" },
        { name: "Prime Video", icon: "/images/prime-video.png", detail: "4K UHD, 3 screens" },
        { name: "iQIYI Standard VIP", icon: "/images/iqiyi-icon.png", detail: "HD, 2 screens" },
        { name: "Sun NXT Lite", icon: "/images/sun-nxt-logo.png", detail: "Full HD, 1 screen" },
        { name: "beIN SPORTS CONNECT", icon: "/images/bein-sports-logo.png", detail: "HD, 2 screens" },
        { name: "Astro GO+", icon: "/images/astro-go-logo-new.png", detail: "HD, 4 screens" }
    ],
    channels: [
      { name: "Sports", icon: "/images/sports-icon.png", count: "11 channels" },
      { name: "Sports Extra", icon: "/images/sports-extra-icon.png", count: "3 channels" },
      { name: "Kids", icon: "/images/kids-icon.png", count: "5 channels" },
      { name: "Variety", icon: "/images/variety-icon.png", count: "3 channels" },
      { name: "News & Documentaries", icon: "/images/news-doc-icon.png", count: "11 channels" },
      { name: "Blockbuster", icon: "/images/blockbuster-icon.png", count: "4 channels" },
      { name: "Base", icon: "/images/icon-base.png", count: "96 channels" }
    ],
    totalChannels: "130+ channels",
    addons: [
      { name: "Smart TV app", icon: "/images/smart-tv-app.png", detail: "Multiroom" }
    ],
    accentColor: "text-purple-600"
  }
];

const baseChannels = [
  { name: "TV1 HD", code: "CH 101", icon: "/images/ch-101.png" },
  { name: "TV2 HD", code: "CH 102", icon: "/images/ch-102.png" },
  { name: "TV3", code: "CH 103", icon: "/images/ch-103.png" },
  { name: "Astro Ria", code: "CH 104", icon: "/images/ch-104.png" },
  { name: "Astro Prima", code: "CH 105", icon: "/images/ch-105.png" },
  { name: "Astro Oasis", code: "CH 106", icon: "/images/ch-106.png" },
  { name: "Astro Citra", code: "CH 108", icon: "/images/ch-108.png" },
  { name: "Astro Rania", code: "CH 112", icon: "/images/ch-112.png" },
  { name: "Astro Aura", code: "CH 113", icon: "/images/ch-113.png" },
  { name: "Al-Hijrah", code: "CH 114", icon: "/images/ch-114.png" },
  { name: "Colors Hindi HD", code: "CH 116", icon: "/images/ch-116.png" },
  { name: "Z Cinema HD", code: "CH 117", icon: "/images/ch-117.png" },
  { name: "TV Sarawak", code: "CH 122", icon: "/images/ch-122.png" },
  { name: "TV Okey HD", code: "CH 146", icon: "/images/ch-146.png" },
  { name: "NTV7", code: "CH 147", icon: "/images/ch-147.png" },
  { name: "8TV", code: "CH 148", icon: "/images/ch-148.png" },
  { name: "TV9", code: "CH 149", icon: "/images/ch-149.png" },
  { name: "Astro Vaanavil", code: "CH 201", icon: "/images/ch-201.png" },
  { name: "Astro Vinmeen", code: "CH 202", icon: "/images/ch-202.png" },
  { name: "Astro Vellithirai HD", code: "CH 203", icon: "/images/ch-203.png" },
  { name: "SUN TV HD", code: "CH 211", icon: "/images/ch-211.png" },
  { name: "Sun Music HD", code: "CH 212", icon: "/images/ch-212.png" },
  { name: "Adithya", code: "CH 214", icon: "/images/ch-214.png" },
  { name: "Sun News", code: "CH 215", icon: "/images/ch-215.png" },
  { name: "KTV", code: "CH 216", icon: "/images/ch-216.png" },
  { name: "Sun Life", code: "CH 217", icon: "/images/ch-217.png" },
  { name: "Star Vijay HD", code: "CH 221", icon: "/images/ch-221.png" },
  { name: "Colors Tamil HD", code: "CH 222", icon: "/images/ch-222.png" },
  { name: "Z Tamil HD", code: "CH 223", icon: "/images/ch-223.png" },
  { name: "Astro Thangathirai", code: "CH 241", icon: "/images/ch-241.png" },
  { name: "iQIYI HD", code: "CH 300", icon: "/images/ch-300.png" },
  { name: "TVB Classic HD", code: "CH 305", icon: "/images/ch-305.png" },
  { name: "Astro AEC", code: "CH 306", icon: "/images/ch-306.png" },
  { name: "Astro QJ", code: "CH 308", icon: "/images/ch-308.png" },
  { name: "Celestial Movies HD", code: "CH 309", icon: "/images/ch-309.png" },
  { name: "TVB Jade", code: "CH 310", icon: "/images/ch-310.png" },
  { name: "Astro AOD", code: "CH 311", icon: "/images/ch-311.png" },
  { name: "CTI Asia HD", code: "CH 316", icon: "/images/ch-316.png" },
  { name: "TVB Entertainment News HD", code: "CH 317", icon: "/images/ch-317.png" },
  { name: "TVB Xing He HD", code: "CH 319", icon: "/images/ch-319.png" },
  { name: "TVBS Asia HD", code: "CH 320", icon: "/images/ch-320.png" },
  { name: "Celestial Classic Movies", code: "CH 321", icon: "/images/ch-321.png" },
  { name: "Phoenix Chinese Channel HD", code: "CH 325", icon: "/images/ch-325.png" },
  { name: "Phoenix Info News HD", code: "CH 326", icon: "/images/ch-326.png" },
  { name: "Astro Hua Hee Dai", code: "CH 333", icon: "/images/ch-333.png" },
  { name: "CCTV4 HD", code: "CH 335", icon: "/images/ch-335.png" },
  { name: "KBS World HD", code: "CH 392", icon: "/images/ch-392.png" },
  { name: "ONE HD", code: "CH 393", icon: "/images/ch-393.png" },
  { name: "tvN HD", code: "CH 395", icon: "/images/ch-395.png" },
  { name: "K-Plus HD", code: "CH 396", icon: "/images/ch-396.png" },
  { name: "NHK World Premium", code: "CH 398", icon: "/images/ch-398.png" },
  { name: "HITS MOVIES HD", code: "CH 401", icon: "/images/ch-401.png" },
  { name: "Astro Boo", code: "CH 404", icon: "/images/ch-404.png" },
  { name: "Astro Showcase", code: "CH 413", icon: "/images/ch-413.png" },
  { name: "tvN Movies HD", code: "CH 416", icon: "/images/ch-416.png" },
  { name: "Astro Awani HD", code: "CH 501", icon: "/images/ch-501.png" },
  { name: "Bernama TV", code: "CH 502", icon: "/images/ch-502.png" },
  { name: "CGTN HD", code: "CH 503", icon: "/images/ch-503.png" },
  { name: "CNA HD", code: "CH 515", icon: "/images/ch-515.png" },
  { name: "ABC Australia HD", code: "CH 518", icon: "/images/ch-518.png" },
  { name: "Love Nature 4K", code: "CH 549", icon: "/images/ch-549.png" },
  { name: "Love Nature", code: "CH 550", icon: "/images/ch-550.png" },
  { name: "Astro Tutor TV", code: "CH 603", icon: "/images/ch-603.png" },
  { name: "Astro Ceria", code: "CH 611", icon: "/images/ch-611.png" },
  { name: "AXN HD", code: "CH 701", icon: "/images/ch-701.png" },
  { name: "Lifetime HD", code: "CH 703", icon: "/images/ch-703.png" },
  { name: "HITS HD", code: "CH 706", icon: "/images/ch-706.png" },
  { name: "TLC HD", code: "CH 707", icon: "/images/ch-707.png" },
  { name: "Asian Food Network HD", code: "CH 709", icon: "/images/ch-709.png" },
  { name: "Astro Arena", code: "CH 801", icon: "/images/ch-801.png" },
  { name: "Astro Arena 2", code: "CH 802", icon: "/images/ch-802.png" },
  { name: "Arena Bola", code: "CH 803", icon: "/images/ch-803.png" },
  { name: "Arena Bola 2", code: "CH 804", icon: "/images/ch-804.png" },
  { name: "HITZ FM", code: "CH 852", icon: "/images/ch-852.png" },
  { name: "MY FM", code: "CH 853", icon: "/images/ch-853.png" },
  { name: "LITE FM", code: "CH 854", icon: "/images/ch-854.png" },
  { name: "MIX FM", code: "CH 855", icon: "/images/ch-855.png" },
  { name: "ERA FM", code: "CH 856", icon: "/images/ch-856.png" },
  { name: "SINAR FM", code: "CH 857", icon: "/images/ch-857.png" },
  { name: "MELODY FM", code: "CH 858", icon: "/images/ch-858.png" },
  { name: "THR RAAGA", code: "CH 859", icon: "/images/ch-859.png" },
  { name: "CLASSIC ROCK", code: "CH 860", icon: "/images/ch-860.png" },
  { name: "GOLD", code: "CH 861", icon: "/images/ch-861.png" },
  { name: "OPUS", code: "CH 862", icon: "/images/ch-862.png" },
  { name: "THR GEGAR", code: "CH 863", icon: "/images/ch-863.png" },
  { name: "INDIA BEAT", code: "CH 864", icon: "/images/ch-864.png" },
  { name: "JAZZ", code: "CH 865", icon: "/images/ch-865.png" },
  { name: "OSAI", code: "CH 866", icon: "/images/ch-866.png" },
  { name: "BAYU", code: "CH 867", icon: "/images/ch-867.png" },
  { name: "KENYALANG", code: "CH 868", icon: "/images/ch-868.png" },
  { name: "ZAYAN", code: "CH 876", icon: "/images/ch-876.png" },
  { name: "GOXUAN", code: "CH 877", icon: "/images/ch-877.png" },
  { name: "DW English", code: "Astro GO", icon: "/images/ch-go-dw.png" },
  { name: "France24", code: "Astro GO", icon: "/images/ch-go-f24.png" },
];

const sportsChannels = [
  { name: "Astro Sports UHD 805", code: "CH 805", icon: "/images/ch-805.png" },
  { name: "Astro Grandstand", code: "CH 810", icon: "/images/ch-810.png" },
  { name: "Astro Premier League", code: "CH 811", icon: "/images/ch-811.png" },
  { name: "Astro Premier League 2", code: "CH 812", icon: "/images/ch-812.png" },
  { name: "Astro Football", code: "CH 814", icon: "/images/ch-814.png" },
  { name: "Astro Badminton", code: "CH 815", icon: "/images/ch-815.png" },
  { name: "Astro Sports Plus", code: "CH 817", icon: "/images/ch-817.png" },
  { name: "beIN SPORTS 1", code: "CH 820", icon: "/images/ch-820.png" },
  { name: "beIN SPORTS 2", code: "CH 821", icon: "/images/ch-821.png" },
  { name: "beIN SPORTS 3", code: "CH 822", icon: "/images/ch-822.png" },
  { name: "W-Sport", code: "CH 826", icon: "/images/ch-826.png" },
];

const sportsExtraChannels = [
  { name: "Astro Golf", code: "CH 831", icon: "/images/ch-831.png" },
  { name: "CricBuzz", code: "CH 832", icon: "/images/ch-832.png" },
  { name: "Premier Sports", code: "CH 833", icon: "/images/ch-833.png" },
];

const kidsChannels = [
  { name: "Cartoon Network HD", code: "CH 615", icon: "/images/ch-615.png" },
  { name: "Nickelodeon HD", code: "CH 616", icon: "/images/ch-616.png" },
  { name: "Nick Jr.", code: "CH 617", icon: "/images/ch-617.png" },
  { name: "Moonbug", code: "CH 618", icon: "/images/ch-618.png" },
  { name: "Blippi & Friends", code: "CH 619", icon: "/images/ch-619.png" },
];

const varietyChannels = [
  { name: "HITS NOW", code: "CH 702", icon: "/images/ch-702.png" },
  { name: "Crime & Investigation HD", code: "CH 714", icon: "/images/ch-714.png" },
  { name: "HGTV HD", code: "CH 715", icon: "/images/ch-715.png" },
];

const newsDocChannels = [
  { name: "CNN HD", code: "CH 511", icon: "/images/ch-511.png" },
  { name: "BBC News HD", code: "CH 512", icon: "/images/ch-512.png" },
  { name: "Al Jazeera English HD", code: "CH 513", icon: "/images/ch-513.png" },
  { name: "CNBC Asia HD", code: "CH 516", icon: "/images/ch-516.png" },
  { name: "Bloomberg TV HD", code: "CH 517", icon: "/images/ch-517.png" },
  { name: "Discovery Channel HD", code: "CH 552", icon: "/images/ch-552.png" },
  { name: "Discovery Asia HD", code: "CH 553", icon: "/images/ch-553.png" },
  { name: "BBC Earth", code: "CH 554", icon: "/images/ch-554.png" },
  { name: "History HD", code: "CH 555", icon: "/images/ch-555.png" },
  { name: "CGTN Documentary", code: "CH 556", icon: "/images/ch-556.png" },
  { name: "Smithsonian Channel", code: "On Demand Channel", icon: "/images/ch-od-smithsonian.png" },
];

const blockbusterChannels = [
  { name: "Astro Showtime", code: "CH 411", icon: "/images/ch-411.png" },
  { name: "Astro FAM Time", code: "CH 412", icon: "/images/ch-412.png" },
  { name: "Rock Action", code: "CH 414", icon: "/images/ch-414.png" },
  { name: "Rock X Stream", code: "CH 415", icon: "/images/ch-415.png" },
];

const featuredShows = [
  { name: "Dia Imamku", src: "/images/dia-imamku.webp" },
  { name: "Big Stage", src: "/images/big-stage-concert.jpg" },
  { name: "Liga Super", src: "/images/liga-super.jpg" },
  { name: "MFL", src: "/images/mfl_1.jpg" },
  { name: "Kudumbasthan", src: "/images/kudumbasthan.jpg" },
  { name: "The Best Thing", src: "/images/the-best-thing.jpg" },
  { name: "Fight for Beauty", src: "/images/fight-for-beauty.jpg" }
];

const sportsFeaturedShows = [
  { name: "BWF Badminton", src: "/images/bwf-badminton.jpg" },
  { name: "Premier League", src: "/images/premier-league-sports.jpg" },
  { name: "Malaysian Football League", src: "/images/mfl-sports.jpg" },
  { name: "Formula 1", src: "/images/f1-sports.jpg" },
];

const sportsExtraFeaturedShows = [
  { name: "Astro Golf", src: "/images/gc2.png" },
  { name: "Rugby League", src: "/images/premier-sports-rugby.jpg" },
  { name: "Feherty", src: "/images/feherty.jpg" },
];

const kidsFeaturedShows = [
  { name: "Blippi Wonders", src: "/images/blippi-wonders.jpg" },
  { name: "let's_learn", src: "/images/lets-learn.jpg" },
  { name: "bluey_series_3", src: "/images/bluey.jpg" },
  { name: "mechamato", src: "/images/mechamato.jpg" },
  { name: "we_baby_bears", src: "/images/we-baby-bears.jpg" },
  { name: "hero_inside", src: "/images/hero-inside.jpg" },
];

const varietyFeaturedShows = [
  { name: "custom_carolina", src: "/images/custom-carolina.jpg" },
  { name: "road_trip_2", src: "/images/road-trip-2.jpg" },
  { name: "house_hunters_renovation", src: "/images/house-hunters.jpg" },
];

const newsDocFeaturedShows = [
  { name: "master_of_savours", src: "/images/master-of-savours.jpg" },
  { name: "ozempic_underworld", src: "/images/ozempic-underworld.png" },
  { name: "the_tonight_show", src: "/images/tonight-show.jpg" },
  { name: "bbc_news", src: "/images/news-bbc.jpg" },
];

const blockbusterFeaturedShows = [
  { name: "Lucy", src: "/images/show-lucy.jpg" },
  { name: "Snow White & The Huntsman", src: "/images/show-snow-white.jpg" },
  { name: "Fast X", src: "/images/show-fast-x.jpg" },
  { name: "Violent Night", src: "/images/show-violent-night.jpg" },
  { name: "Secret Life of Pets 2", src: "/images/show-pets-2.jpg" },
  { name: "Godzilla Minus One", src: "/images/show-godzilla.jpg" },
  { name: "Gods of Egypt", src: "/images/show-gods-egypt.jpg" },
  { name: "Mr Robot", src: "/images/show-mr-robot.jpg" },
  { name: "See", src: "/images/show-see.jpg" },
  { name: "Radiant", src: "/images/show-radiant.jpg" },
];

const PackageDetailModal: React.FC<PackageDetailModalProps> = ({ isOpen, onClose, initialPackId = "entertainment" }) => {
  const [activePackId, setActivePackId] = useState(initialPackId);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  
  // Reset state when pack ID changes or modal opens
  const [prevInitialPackId, setPrevInitialPackId] = useState(initialPackId);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (initialPackId !== prevInitialPackId || (isOpen && !prevIsOpen)) {
    setPrevInitialPackId(initialPackId);
    setPrevIsOpen(isOpen);
    setActivePackId(initialPackId);
    setSelectedChannel(null);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPack = packs.find(p => p.id === activePackId) || packs[0];

  const getChannelViewData = () => {
    if (selectedChannel === "Base") {
      return {
        title: "Base",
        icon: "/images/icon-base.png",
        count: baseChannels.length,
        description: "Take family time to new heights with local & international favourites.",
        channels: baseChannels,
        featuredShows: featuredShows
      };
    }
    if (selectedChannel === "Sports") {
      return {
        title: "Sports",
        icon: "/images/sports-icon.png",
        count: sportsChannels.length,
        description: "Catch all the live sporting actions at the home of sports. Featuring local & international sports in one breathtaking pack.",
        channels: sportsChannels,
        featuredShows: sportsFeaturedShows
      };
    }
    if (selectedChannel === "Sports Extra") {
      return {
        title: "Sports Extra",
        icon: "/images/sports-extra-icon.png",
        count: sportsExtraChannels.length,
        description: "Enhance your Sporting experience with Sports Extra to enjoy our latest sports channels.",
        channels: sportsExtraChannels,
        featuredShows: sportsExtraFeaturedShows
      };
    }
    if (selectedChannel === "Kids") {
      return {
        title: "Kids",
        icon: "/images/kids-icon.png",
        count: kidsChannels.length,
        description: "The best local & international cartoons & educational entertainment.",
        channels: kidsChannels,
        featuredShows: kidsFeaturedShows
      };
    }
    if (selectedChannel === "Variety") {
      return {
        title: "Variety",
        icon: "/images/variety-icon.png",
        count: varietyChannels.length,
        description: "Watch all the hottest & latest entertainment for you & your family.",
        channels: varietyChannels,
        featuredShows: varietyFeaturedShows
      };
    }
    if (selectedChannel === "News & Documentaries") {
      return {
        title: "News & Documentaries",
        icon: "/images/news-doc-icon.png",
        count: newsDocChannels.length,
        description: "Latest breaking news & current affairs whilst you discover secrets of the world.",
        channels: newsDocChannels,
        featuredShows: newsDocFeaturedShows
      };
    }
    if (selectedChannel === "Blockbuster") {
      return {
        title: "Blockbuster",
        icon: "/images/blockbuster-icon.png",
        count: blockbusterChannels.length,
        description: "Global movies and series packed with action, drama and big thrills.",
        channels: blockbusterChannels,
        featuredShows: blockbusterFeaturedShows
      };
    }
    return null;
  };

  const channelView = getChannelViewData();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10" onClick={onClose}>
      <div 
        className="relative flex h-full w-full max-w-7xl overflow-hidden bg-white rounded-2xl shadow-2xl animate-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="absolute right-4 top-4 z-50">
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white shadow-lg text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 1l14 14M15 1L1 15" />
            </svg>
          </button>
        </div>

        {/* Navigation Sidebar */}
        <aside className="hidden lg:flex flex-col w-[280px] border-r border-zinc-100 p-6 pt-10">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-zinc-500 font-bold text-sm uppercase tracking-wider">Explore packs</span>
            <div className="flex-grow h-px bg-zinc-100" />
          </div>
          
          <div className="space-y-2">
            {packs.map((pack) => (
              <div 
                key={pack.id}
                onClick={() => {
                  setActivePackId(pack.id);
                  setSelectedChannel(null);
                }}
                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                  activePackId === pack.id && !selectedChannel
                    ? "bg-zinc-50 shadow-sm border border-zinc-100" 
                    : "hover:bg-zinc-50/50"
                }`}
              >
                <div className="w-8 h-8 relative shrink-0">
                  <Image src={pack.icon} alt={pack.name} fill className="object-contain" />
                </div>
                <span className={`text-sm font-bold leading-tight ${activePackId === pack.id && !selectedChannel ? "text-primary" : "text-zinc-600"}`}>
                  {pack.name}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden bg-zinc-50">
          <div className="flex-1 overflow-y-auto">
            {channelView ? (
               <div className="p-6 md:p-12 animate-in fade-in slide-in-from-right-4 duration-500">
                  {/* Back Button */}
                  <button 
                    onClick={() => setSelectedChannel(null)}
                    className="flex items-center gap-2 mb-8 text-zinc-500 font-bold hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
                    Back to Package
                  </button>

                  <div className="space-y-12">
                     {/* Channel Header */}
                     <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-zinc-100 flex items-center gap-6">
                        <div className="w-16 h-16 relative bg-zinc-50 rounded-xl border border-zinc-100 p-3 shadow-sm">
                           <Image src={channelView.icon} alt={channelView.title} fill className="object-contain" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-black text-zinc-900">{channelView.title}</h3>
                           <p className="text-zinc-500 font-bold">{channelView.count} channels</p>
                           <p className="mt-2 text-zinc-600 font-medium">{channelView.description}</p>
                        </div>
                     </div>

                     {/* Featured Shows */}
                     <div>
                        <h4 className="text-xl font-black text-zinc-900 mb-6">Featured shows</h4>
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                           {channelView.featuredShows.map((show, idx) => (
                              <div key={idx} className="min-w-[150px] md:min-w-[280px] shrink-0 group">
                                 <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-zinc-100 mb-2">
                                    <Image src={show.src} alt={show.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                 </div>
                                 <span className="text-sm font-bold text-zinc-800">{show.name}</span>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* All Channels Grid */}
                     <div>
                        <h4 className="text-xl font-black text-zinc-900 mb-6">All channels</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                           {channelView.channels.map((ch, idx) => (
                              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-zinc-100 hover:shadow-md transition-shadow">
                                 <div className="w-16 h-10 relative bg-zinc-50 rounded-lg p-1.5 border border-zinc-50">
                                    <Image src={ch.icon} alt={ch.name} fill className="object-contain" />
                                 </div>
                                 <div>
                                    <p className="text-xs font-black text-primary">{ch.code}</p>
                                    <p className="font-bold text-zinc-900">{ch.name}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
              <>
                {/* Banner with Gradient Background */}
                <div 
                  className="hidden md:block h-64 bg-cover bg-center relative"
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(246, 246, 248, 0.1) 0%, rgb(246, 246, 248) 100%), url(${currentPack.banner})` 
                  }}
                />

                {/* Content Wrapper */}
                <div className="px-6 md:px-12 pb-12">
                  {/* Pack Summary Card */}
                  <div className="relative -mt-32 md:-mt-24 mb-10 flex flex-col md:flex-row gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-zinc-100">
                    <div className="flex-grow space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 relative shrink-0">
                          <Image src={currentPack.icon} alt="" fill className="object-contain" />
                        </div>
                        <h2 className="text-xl md:text-3xl font-black text-zinc-900">{currentPack.name}</h2>
                      </div>
                      <p className="text-zinc-600 font-medium leading-relaxed max-w-lg">
                        {currentPack.description}
                      </p>
                      <div className="pt-4 flex items-baseline gap-2">
                        <div>
                          <span className="text-3xl font-black text-zinc-900">RM{currentPack.price}</span>
                          <span className="text-lg font-bold text-zinc-400">/mth</span>
                        </div>
                        {currentPack.originalPrice && (
                          <span className="text-lg font-bold text-zinc-400 line-through">RM{currentPack.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="hidden md:block w-[300px] xl:w-[400px] shrink-0">
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-inner border border-zinc-50">
                        <Image src={currentPack.featuredImage} alt="" fill className="object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* What's in your pack Section */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-black text-zinc-900">What&apos;s in your pack</h3>
                        <div className="flex-grow h-px bg-zinc-200" />
                    </div>

                    <div className="space-y-6">
                      {/* Apps Selection */}
                      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/50">
                          <h4 className="font-black text-zinc-900">{currentPack.apps.length} app{currentPack.apps.length > 1 ? 's' : ''}</h4>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {currentPack.apps.map((app, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors">
                              <div className="w-12 h-12 relative shrink-0 bg-zinc-50 rounded-lg p-1">
                                <Image src={app.icon} alt={app.name} fill className="object-contain" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-bold text-zinc-900">{app.name}</span>
                                <span className="text-xs text-zinc-500">{app.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Channels Selection */}
                      <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                        <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/50">
                          <h4 className="font-black text-zinc-900">{(currentPack as any).totalChannels || "Channels"}</h4>
                        </div>
                        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {currentPack.channels.map((channel, idx) => (
                            <div 
                              key={idx} 
                              onClick={() => {
                                if (["Base", "Sports", "Sports Extra", "Kids", "Variety", "News & Documentaries", "Blockbuster"].includes(channel.name)) {
                                  setSelectedChannel(channel.name);
                                }
                              }}
                              className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 cursor-pointer group transition-colors"
                            >
                              <div className="w-12 h-12 relative shrink-0 bg-white border border-zinc-100 rounded-lg p-1.5 shadow-sm">
                                <Image src={channel.icon} alt={channel.name} fill className="object-contain" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-bold text-zinc-900 group-hover:text-primary transition-colors">{channel.name}</span>
                                <span className="text-xs text-zinc-500">{channel.count}</span>
                              </div>
                              {["Base", "Sports", "Sports Extra", "Kids", "Variety", "News & Documentaries", "Blockbuster"].includes(channel.name) && (
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Addons Selection (Multiroom/etc) */}
                      {currentPack.addons && currentPack.addons.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                          <div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/50">
                            <h4 className="font-black text-zinc-900">Add-ons</h4>
                          </div>
                          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentPack.addons.map((addon, idx) => (
                              <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-zinc-50 transition-colors">
                                <div className="w-12 h-12 relative shrink-0 bg-zinc-50 rounded-lg p-1.5">
                                  <Image src={addon.icon} alt={addon.name} fill className="object-contain" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-bold text-zinc-900">{addon.name}</span>
                                  <span className="text-xs text-zinc-500">{addon.detail}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailModal;