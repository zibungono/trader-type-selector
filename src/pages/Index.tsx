import { useState } from "react";
import heroImage from "@/assets/hero-trading.jpg";
import { TrendingUp, Shield, Users, BarChart3, Zap, Globe, Building2, Wallet, LineChart, Lock, ArrowRight } from "lucide-react";

const retailFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning-Fast Execution",
    description: "Execute trades in milliseconds with our advanced matching engine. No requotes, no delays.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Advanced Charting",
    description: "Professional-grade charts with 100+ indicators, drawing tools, and real-time data feeds.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Start From $100",
    description: "Low minimum deposits and tight spreads make professional trading accessible to everyone.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Negative Balance Protection",
    description: "Trade with confidence knowing you'll never lose more than your account balance.",
  },
];

const institutionalFeatures = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-Asset Prime Brokerage",
    description: "Access FX, equities, fixed income, and commodities through a single prime brokerage relationship.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Dedicated Liquidity Pools",
    description: "Tier-1 bank liquidity with custom pricing, deep order books, and minimal market impact.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II certified. Multi-signature custody, cold storage, and 24/7 monitoring.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "FIX & REST API Access",
    description: "Ultra-low latency FIX 4.4 connectivity and RESTful APIs for algorithmic and systematic strategies.",
  },
];

const Index = () => {
  const [isInstitutional, setIsInstitutional] = useState(false);
  const features = isInstitutional ? institutionalFeatures : retailFeatures;

  return (
    <div className={`min-h-screen bg-background text-foreground ${isInstitutional ? "theme-institutional" : ""}`}>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-7 h-7 text-primary" />
            <span className="text-xl font-bold tracking-tight">Apex<span className="text-primary">Trade</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Markets</a>
            <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">About</a>
          </div>
          <button className="px-5 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Open Account
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Trading visualization" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Next-Generation Trading</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Trade the World's<br />
            <span className="text-primary">Markets</span> Your Way
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Whether you're an individual investor or managing billions, ApexTrade delivers the technology, liquidity, and support you need.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-2xl bg-secondary border border-border">
            <button
              onClick={() => setIsInstitutional(false)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                !isInstitutional
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Users className="w-4 h-4" />
              Retail Client
            </button>
            <button
              onClick={() => setIsInstitutional(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isInstitutional
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Institutional
            </button>
          </div>
        </div>
      </section>

      {/* Explainer Cards */}
      <section className="max-w-7xl mx-auto px-6 -mt-4 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Retail Card */}
          <div
            className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
              !isInstitutional
                ? "border-primary/40 bg-primary/5 shadow-[0_0_40px_-12px_hsl(var(--primary)/0.3)]"
                : "border-border bg-card hover:border-border/80"
            }`}
            onClick={() => setIsInstitutional(false)}
          >
            <div className={`inline-flex p-3 rounded-xl mb-4 ${!isInstitutional ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}>
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Retail Client</h3>
            <p className="text-muted-foreground leading-relaxed">
              Individual traders and investors looking for powerful tools, competitive spreads, and an intuitive platform. Trade stocks, forex, crypto, and more from a single account with as little as $100.
            </p>
          </div>

          {/* Institutional Card */}
          <div
            className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
              isInstitutional
                ? "border-primary/40 bg-primary/5 shadow-[0_0_40px_-12px_hsl(var(--primary)/0.3)]"
                : "border-border bg-card hover:border-border/80"
            }`}
            onClick={() => setIsInstitutional(true)}
          >
            <div className={`inline-flex p-3 rounded-xl mb-4 ${isInstitutional ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}>
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Institutional Client</h3>
            <p className="text-muted-foreground leading-relaxed">
              Hedge funds, asset managers, banks, and corporate treasuries requiring deep liquidity, custom API access, prime brokerage services, and dedicated relationship management.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <p className="font-mono text-sm tracking-widest uppercase mb-3 text-primary">
            {isInstitutional ? "Institutional Solutions" : "Built for Traders"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            {isInstitutional ? "Enterprise-Grade Infrastructure" : "Everything You Need to Trade"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={`${isInstitutional}-${i}`}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
            >
              <div className="inline-flex p-3 rounded-xl mb-4 bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]">
            {isInstitutional ? "Contact Sales" : "Start Trading Now"}
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-muted-foreground text-sm mt-4">
            {isInstitutional ? "Speak with our institutional desk for custom solutions" : "No minimum deposit required • Free demo account available"}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="font-bold">Apex<span className="text-primary">Trade</span></span>
          </div>
          <p className="text-muted-foreground text-sm">© 2026 ApexTrade. All rights reserved. Trading involves risk.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
