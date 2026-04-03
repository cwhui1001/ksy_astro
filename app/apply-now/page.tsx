import React from "react";

export default function ApplyNow() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-20" />
      <section className="py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-primary font-bold mb-4">Join Us Today</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Begin Your Journey</h1>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Fill in your details below and our team will get in touch with you shortly. 
            Get ready for a faster, better internet experience.
          </p>

          <form className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Full Name</label>
                <input type="text" className="p-4 rounded-xl bg-accent border border-border focus:border-primary focus:outline-none transition-colors" placeholder="e.g. John Doe" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-2">Phone Number</label>
                <input type="text" className="p-4 rounded-xl bg-accent border border-border focus:border-primary focus:outline-none transition-colors" placeholder="e.g. 012-345 6789" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Home Address</label>
              <textarea className="p-4 rounded-xl bg-accent border border-border focus:border-primary focus:outline-none transition-colors min-h-[120px]" placeholder="Enter your full home address for coverage check..." />
            </div>
            <button className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
