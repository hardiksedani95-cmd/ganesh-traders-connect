import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Clock,
  Star,
  Truck,
  ShieldCheck,
  Sparkles,
  Leaf,
  PackageCheck,
  Heart,
  Zap,
  Menu,
  X,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import heroStore from "@/assets/hero-store.jpg";
import aboutStore from "@/assets/about-store.jpg";
import delivery from "@/assets/delivery.jpg";
import catRice from "@/assets/cat-rice.jpg";
import catFlour from "@/assets/cat-flour.jpg";
import catDal from "@/assets/cat-dal.jpg";
import catSpices from "@/assets/cat-spices.jpg";
import catOil from "@/assets/cat-oil.jpg";
import catTea from "@/assets/cat-tea.jpg";
import catSnacks from "@/assets/cat-snacks.jpg";
import catDrinks from "@/assets/cat-drinks.jpg";
import catDairy from "@/assets/cat-dairy.jpg";
import catPersonal from "@/assets/cat-personal.jpg";
import catHousehold from "@/assets/cat-household.jpg";
import catDryfruits from "@/assets/cat-dryfruits.jpg";
import catPackaged from "@/assets/cat-packaged.jpg";

const WHATSAPP_NUMBER = "918779703262";
const PHONE_NUMBER = "+918779703262";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ganesh Traders — Trusted Grocery Store in Sonai, Ahmednagar" },
      {
        name: "description",
        content:
          "Ganesh Traders — your trusted neighborhood grocery & kirana store in Navi Peth, Sonai. Rice, dal, spices, oil, snacks & daily essentials. Order on WhatsApp +91 87797 03262.",
      },
      { property: "og:title", content: "Ganesh Traders — Trusted Grocery Store in Sonai" },
      {
        property: "og:description",
        content: "Fresh products • Best prices • Daily essentials. Order on WhatsApp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GroceryStore",
          name: "Ganesh Traders",
          image: "/og-cover.jpg",
          telephone: "+91 8779703262",
          email: "sudarshanshirsath121212@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Navi Peth, Sonai",
            addressLocality: "Sonai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su",
          priceRange: "₹",
        }),
      },
    ],
  }),
  component: Index,
});

const categories = [
  { name: "Rice & Grains", img: catRice },
  { name: "Flour & Atta", img: catFlour },
  { name: "Pulses & Dal", img: catDal },
  { name: "Spices & Masala", img: catSpices },
  { name: "Cooking Oil", img: catOil },
  { name: "Tea & Coffee", img: catTea },
  { name: "Biscuits & Snacks", img: catSnacks },
  { name: "Soft Drinks", img: catDrinks },
  { name: "Dairy Products", img: catDairy },
  { name: "Personal Care", img: catPersonal },
  { name: "Household Products", img: catHousehold },
  { name: "Dry Fruits", img: catDryfruits },
  { name: "Packaged Foods", img: catPackaged },
  { name: "Daily Essentials", img: catRice },
];

const features = [
  { icon: ShieldCheck, title: "Quality Products", desc: "Carefully sourced, freshness guaranteed." },
  { icon: Sparkles, title: "Affordable Prices", desc: "Best local rates on daily essentials." },
  { icon: Heart, title: "Trusted Local Store", desc: "Serving Sonai families for years." },
  { icon: Leaf, title: "Fresh Stock", desc: "Daily restocked groceries and produce." },
  { icon: PackageCheck, title: "Wide Range", desc: "Everything under one roof, every day." },
  { icon: Zap, title: "Quick Response", desc: "Fast WhatsApp replies & assistance." },
];

const testimonials = [
  { name: "Priya S.", text: "Best grocery store in the area. Always fresh stock." },
  { name: "Rohit P.", text: "Affordable prices and quality products every time." },
  { name: "Anita K.", text: "Friendly owner and excellent service. Highly recommend!" },
  { name: "Mahesh D.", text: "One-stop shop for all our daily needs. Super convenient." },
];

function Index() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const openOrder = (cat?: string) => {
    setDefaultCategory(cat ?? "");
    setOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenOrder={() => openOrder()} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero onOrder={() => openOrder()} />
      <Categories onOrder={openOrder} />
      <About />
      <WhyUs />
      <Showcase onOrder={openOrder} />
      <Offers onOrder={() => openOrder()} />
      <DeliverySection onOrder={() => openOrder()} />
      <Testimonials />
      <QuickOrder onOrder={() => openOrder()} />
      <Contact onOrder={() => openOrder()} />
      <Footer />
      <FloatingButtons onOrder={() => openOrder()} />
      <OrderDialog
        open={orderOpen}
        onOpenChange={setOrderOpen}
        defaultCategory={defaultCategory}
      />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({
  onOpenOrder,
  mobileOpen,
  setMobileOpen,
}: {
  onOpenOrder: () => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const links = [
    { href: "#categories", label: "Categories" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero shadow-soft text-primary-foreground font-display font-extrabold text-lg">
            GT
          </div>
          <div className="leading-tight">
            <div className="font-display text-base font-extrabold tracking-tight text-foreground md:text-lg">
              Ganesh Traders
            </div>
            <div className="text-[11px] font-medium text-muted-foreground md:text-xs">
              Your Neighborhood Grocery Store
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <Button onClick={onOpenOrder} className="rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90">
            <MessageCircle className="mr-2 h-4 w-4" /> Order on WhatsApp
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenOrder();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-semibold text-[var(--whatsapp-foreground)]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-fresh" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div className="float-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Leaf className="h-3.5 w-3.5" /> Your Trusted Neighborhood Grocery Store
          </div>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            Everything You Need,{" "}
            <span className="bg-gradient-to-r from-[oklch(0.58_0.17_145)] to-[oklch(0.72_0.18_55)] bg-clip-text text-transparent">
              Everyday.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Fresh groceries, daily essentials, household products, snacks, beverages,
            grains, spices, and much more — all available at affordable prices, right
            in Sonai.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={onOrder}
              className="h-12 rounded-full bg-[var(--whatsapp)] px-6 text-base font-semibold text-[var(--whatsapp-foreground)] shadow-glow hover:bg-[var(--whatsapp)]/90"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Order on WhatsApp
            </Button>
            <a href="#categories">
              <Button size="lg" variant="outline" className="h-12 rounded-full border-2 px-6 text-base font-semibold">
                View Categories
              </Button>
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button size="lg" variant="secondary" className="h-12 rounded-full gradient-warm px-6 text-base font-semibold text-secondary-foreground hover:opacity-95">
                <Phone className="mr-2 h-5 w-5" /> Call Now
              </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Quality Assured</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Quick Assistance</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Open Daily</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] gradient-hero opacity-25 blur-3xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-border/60 shadow-glow">
            <img
              src={heroStore}
              alt="Ganesh Traders premium grocery store interior"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-card md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full gradient-warm text-secondary-foreground">
                <Star className="h-5 w-5" fill="currentColor" />
              </div>
              <div>
                <div className="text-sm font-bold">Trusted by Sonai</div>
                <div className="text-xs text-muted-foreground">Hundreds of happy families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories ---------------- */
function Categories({ onOrder }: { onOrder: (cat?: string) => void }) {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Featured Categories"
        title="Shop by Category"
        sub="Order any product directly on WhatsApp — we'll confirm price and availability."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
        {categories.map((c) => (
          <div
            key={c.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={c.img}
                alt={c.name}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="font-display text-sm font-bold leading-tight text-foreground md:text-base">
                {c.name}
              </h3>
              <Button
                size="sm"
                onClick={() => onOrder(c.name)}
                className="mt-auto w-full rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90"
              >
                <MessageCircle className="mr-1.5 h-3.5 w-3.5" /> Order Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={aboutStore}
            alt="Sudarshan Shirsath, owner of Ganesh Traders"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold text-secondary">
            About Us
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            A trusted name for daily essentials in Sonai.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Ganesh Traders is a trusted grocery and daily essentials store serving
            customers in Sonai and nearby areas. We provide quality products,
            affordable prices, and friendly customer service to meet everyday
            household needs.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-4">
            <Stat n="100%" label="Quality Stock" />
            <Stat n="Daily" label="Fresh Restock" />
            <Stat n="14+" label="Categories" />
            <Stat n="Open" label="Every Day" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="font-display text-2xl font-extrabold text-primary md:text-3xl">{n}</div>
      <div className="text-xs font-medium text-muted-foreground md:text-sm">{label}</div>
    </div>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Built on trust, freshness & value"
        sub="The reasons families across Sonai pick Ganesh Traders for their kitchens."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Product Showcase ---------------- */
const products = [
  { name: "Basmati Rice", cat: "Rice & Grains", img: catRice },
  { name: "Wheat Flour (Atta)", cat: "Flour & Atta", img: catFlour },
  { name: "Toor & Moong Dal", cat: "Pulses & Dal", img: catDal },
  { name: "Cooking Oil", cat: "Cooking Oil", img: catOil },
  { name: "Sugar & Tea", cat: "Tea & Coffee", img: catTea },
  { name: "Biscuits & Namkeen", cat: "Biscuits & Snacks", img: catSnacks },
  { name: "Soft Drinks", cat: "Soft Drinks", img: catDrinks },
  { name: "Detergent & Soap", cat: "Household Products", img: catHousehold },
];

function Showcase({ onOrder }: { onOrder: (cat?: string) => void }) {
  return (
    <section id="products" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Product Showcase"
          title="Popular daily essentials"
          sub="Tap any product to send a WhatsApp inquiry for price & availability."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-3 p-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-secondary">
                    {p.cat}
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-foreground">
                    {p.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onOrder(p.cat)}
                    className="rounded-full border-primary/40 text-primary hover:bg-primary/10"
                  >
                    Get Price
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => onOrder(p.cat)}
                    className="rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Offers ---------------- */
function Offers({ onOrder }: { onOrder: () => void }) {
  const banners = [
    { tag: "Best Deals", title: "Everyday low prices", desc: "Rice, dal, oil & atta at the best local rates.", grad: "gradient-hero" },
    { tag: "Weekly Offers", title: "Fresh weekly picks", desc: "Special prices on snacks, biscuits & beverages.", grad: "gradient-warm" },
    { tag: "Festival Specials", title: "Festive essentials", desc: "Dry fruits, ghee & sweets for every occasion.", grad: "gradient-hero" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading eyebrow="Special Offers" title="This week at Ganesh Traders" sub="Ask us on WhatsApp for live prices and seasonal discounts." />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {banners.map((b) => (
          <div key={b.title} className={`${b.grad} relative overflow-hidden rounded-3xl p-7 text-primary-foreground shadow-card`}>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wide backdrop-blur">
                {b.tag}
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight">{b.title}</h3>
              <p className="mt-2 text-sm text-white/90">{b.desc}</p>
              <button
                onClick={onOrder}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-foreground transition hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Delivery Section ---------------- */
function DeliverySection({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <Truck className="h-3.5 w-3.5" /> Convenient Shopping
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Convenient Grocery Shopping
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Order your groceries through WhatsApp and get quick assistance for
            availability and pricing. Send us your list — we'll handle the rest.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Send your grocery list on WhatsApp", "Get instant price & availability", "Pick up or arrange delivery locally"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">✓</span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            onClick={onOrder}
            className="mt-7 h-12 rounded-full bg-[var(--whatsapp)] px-6 text-base font-semibold text-[var(--whatsapp-foreground)] shadow-soft hover:bg-[var(--whatsapp)]/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" /> Order on WhatsApp
          </Button>
        </div>
        <div className="order-1 overflow-hidden rounded-3xl border border-border shadow-card md:order-2">
          <img src={delivery} alt="Grocery delivery" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionHeading eyebrow="Testimonials" title="Loved by our customers" sub="Real words from families in Sonai who shop with us." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex gap-0.5 text-secondary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4" fill="currentColor" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="grid h-9 w-9 place-items-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                {t.name[0]}
              </div>
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Quick Order CTA ---------------- */
function QuickOrder({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
      <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 text-primary-foreground shadow-glow md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-secondary/40 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Need Grocery Items?
            </h2>
            <p className="mt-3 text-base text-white/90 md:text-lg">
              Send your grocery list directly on WhatsApp and get quick assistance from Ganesh Traders.
            </p>
          </div>
          <Button
            size="lg"
            onClick={onOrder}
            className="h-14 shrink-0 rounded-full bg-white px-7 text-base font-bold text-foreground hover:bg-white/90"
          >
            <MessageCircle className="mr-2 h-5 w-5 text-[var(--whatsapp)]" /> Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact({ onOrder }: { onOrder: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [req, setReq] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Ganesh Traders 👋%0A%0AI have an inquiry.%0A%0AName: ${name}%0APhone: ${phone}%0ARequirement: ${req}%0AMessage: ${msg}%0A%0AThank You.`;
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Contact" title="Visit or message us" sub="We're happy to help with your grocery needs." />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold">Ganesh Traders</h3>
              <p className="mt-1 text-sm text-muted-foreground">Your Trusted Neighborhood Grocery Store</p>
              <div className="mt-6 space-y-4">
                <InfoRow icon={MapPin} label="Address">
                  Navi Peth, Sonai,<br />District Ahmednagar, Maharashtra, India
                </InfoRow>
                <InfoRow icon={Phone} label="Phone">
                  <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-foreground hover:text-primary">+91 87797 03262</a>
                </InfoRow>
                <InfoRow icon={MessageCircle} label="WhatsApp">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-semibold text-foreground hover:text-primary">+91 87797 03262</a>
                </InfoRow>
                <InfoRow icon={Mail} label="Email">
                  <a href="mailto:sudarshanshirsath121212@gmail.com" className="font-semibold break-all text-foreground hover:text-primary">
                    sudarshanshirsath121212@gmail.com
                  </a>
                </InfoRow>
                <InfoRow icon={Clock} label="Store Hours">
                  <span className="font-semibold text-foreground">Open Daily</span>
                </InfoRow>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <button
                  onClick={onOrder}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display text-xl font-bold">Send an inquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">Fill in the details and we'll continue on WhatsApp.</p>
            <div className="mt-5 grid gap-4">
              <Field label="Name *">
                <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
              </Field>
              <Field label="Phone *">
                <Input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile number" />
              </Field>
              <Field label="Requirement *">
                <Input required value={req} onChange={(e) => setReq(e.target.value)} placeholder="e.g. Basmati rice, atta, dal..." />
              </Field>
              <Field label="Message">
                <Textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Any additional details..." />
              </Field>
              <Button type="submit" className="h-12 rounded-full bg-[var(--whatsapp)] text-base font-semibold text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90">
                <Send className="mr-2 h-4 w-4" /> Send on WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-sm font-semibold">{label}</Label>
      {children}
    </div>
  );
}

function InfoRow({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-sm">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-foreground">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero text-primary-foreground font-display font-extrabold">GT</div>
            <div>
              <div className="font-display text-lg font-extrabold">Ganesh Traders</div>
              <div className="text-xs text-muted-foreground">Your Trusted Neighborhood Grocery Store</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Serving Sonai and nearby areas with quality groceries, daily essentials,
            and friendly service every day.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary">+91 87797 03262</a></li>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp Chat</a></li>
            <li className="break-all"><a href="mailto:sudarshanshirsath121212@gmail.com" className="hover:text-primary">sudarshanshirsath121212@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide">Address</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Navi Peth, Sonai,<br />District Ahmednagar,<br />Maharashtra, India
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <div>© 2026 Ganesh Traders. All Rights Reserved.</div>
          <div>Owner: Sudarshan Shirsath</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating Buttons ---------------- */
function FloatingButtons({ onOrder }: { onOrder: () => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:${PHONE_NUMBER}`}
        title="Call Now"
        aria-label="Call Now"
        className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-card transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <button
        onClick={onOrder}
        title="Order on WhatsApp"
        aria-label="Order on WhatsApp"
        className="pulse-ring grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-[var(--whatsapp-foreground)] shadow-glow transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}

/* ---------------- Order Dialog ---------------- */
function OrderDialog({
  open,
  onOpenChange,
  defaultCategory,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  defaultCategory: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(defaultCategory);
  const [products, setProducts] = useState("");
  const [qty, setQty] = useState("");
  const [msg, setMsg] = useState("");

  // sync default when opening
  if (defaultCategory && defaultCategory !== category && open && !category) {
    setCategory(defaultCategory);
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cat = category || defaultCategory || "General";
    const text =
      `Hi Ganesh Traders 👋%0A%0AI would like to place an order.%0A%0A` +
      `Customer Name: ${name}%0A` +
      `Phone Number: ${phone}%0A` +
      `Category: ${cat}%0A` +
      `Required Products: ${products}%0A` +
      `Quantity: ${qty}%0A` +
      `Additional Message: ${msg || "Please share price and availability."}%0A%0A` +
      `Thank You.`;
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-[520px]">
        <DialogHeader>
          <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--whatsapp)]/10 px-3 py-1 text-xs font-semibold text-[var(--whatsapp)]">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Order
          </div>
          <DialogTitle className="font-display text-2xl font-extrabold">Send your order</DialogTitle>
          <DialogDescription>
            Fill in the details — we'll continue on WhatsApp to confirm price, availability and delivery.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4 pt-2">
          <Field label="Customer Name *">
            <Input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </Field>
          <Field label="Phone Number *">
            <Input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" />
          </Field>
          <Field label="Product Category *">
            <Select value={category || defaultCategory} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field label="Required Products *">
            <Input required value={products} onChange={(e) => setProducts(e.target.value)} placeholder="e.g. Basmati Rice, Toor Dal" />
          </Field>
          <Field label="Quantity *">
            <Input required value={qty} onChange={(e) => setQty(e.target.value)} placeholder="e.g. 10 KG, 5 packets" />
          </Field>
          <Field label="Message (Optional)">
            <Textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={3} placeholder="Any additional notes..." />
          </Field>
          <Button type="submit" className="h-12 rounded-full bg-[var(--whatsapp)] text-base font-semibold text-[var(--whatsapp-foreground)] hover:bg-[var(--whatsapp)]/90">
            <Send className="mr-2 h-4 w-4" /> Send Order Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- Helpers ---------------- */
function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}
