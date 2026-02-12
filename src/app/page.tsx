"use client";

import { useEffect, useState } from "react";
import HeroOrb from "../components/HeroOrb";
import Image from "next/image";

const industries = ["D2C", "SaaS", "AI-focused", "Technology"];
const heroLines = [
  "Helping our partners",
  "build original brands",
  "that shine.",
];
const projects = [
  {
    title: "Northline Commerce",
    category: "E-commerce Rebrand",
    year: "2025",
    image: "/web-design.png",
    href: "#",
    summary:
      "Reframed a crowded catalog into a sharp storytelling storefront with a 41% uplift in product discovery.",
  },
  {
    title: "Pulseboard SaaS",
    category: "Product Experience",
    year: "2025",
    image: "/ui-design.png",
    href: "#",
    summary:
      "Designed a dashboard system that reduced onboarding friction and turned complex workflows into clear moments.",
  },
  {
    title: "Atlas Launch Site",
    category: "Web Development",
    year: "2024",
    image: "/web-development.jpg",
    href: "#",
    summary:
      "Built a fast, motion-led marketing site with CMS flexibility and production-grade performance from day one.",
  },
  {
    title: "Orbit Mobile Suite",
    category: "App Product Design",
    year: "2024",
    image: "/mobile-app-development.png",
    href: "#",
    summary:
      "Designed and shipped a modular mobile experience with clearer navigation and significantly faster task completion.",
  },
];
const testimonials = [
  {
    quote:
      "SetZet brought clarity to our product story and translated it into a design system that felt premium from day one.",
    name: "Aastha Sharma",
    role: "Head of Marketing, Yastudy",
  },
  {
    quote:
      "The team thinks in systems, not screens. Every interaction felt intentional and directly improved how users navigate.",
    name: "Rajdeep Singh",
    role: "Founder, Zenfora Pvt Ltd.",
  },
  {
    quote:
      "Fast, sharp, and deeply collaborative. The new site finally matches the quality of our product and sales narrative.",
    name: "Mikael Ross",
    role: "VP Growth, Atlas",
  },
];
const testimonialVideoSrc = "/testimonial-video.mp4";
const testimonialVideoPoster = "/testimonial-video-photo.png";

export default function Home() {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((prev) => (prev + 1) % industries.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="top" className="noise-bg min-h-screen overflow-x-clip bg-white text-black">
      {/* NAVIGATION BAR */}
      <header className="fixed top-0 z-30 w-full border-b border-black/5 bg-white/90 text-[10px] uppercase tracking-[0.35em] text-black/60 backdrop-blur sm:text-xs">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10">
          <span className="text-black">SetZet</span>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold text-black/70 md:flex">
            <a className="transition hover:text-black" href="#about">
              About
            </a>
            <a className="transition hover:text-black" href="#services">
              Services
            </a>
            <a className="transition hover:text-black" href="#work">
              Work
            </a>
            <a className="transition hover:text-black" href="#testimonials">
              Testimonials
            </a>
            <a className="transition hover:text-black" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-black/20 px-4 py-2 text-[11px] font-semibold text-black transition hover:border-black md:inline-flex"
              href="#contact"
            >
              Start a Project
            </a>
            <button
              className="inline-flex h-10 items-center justify-center rounded-full border border-black/20 px-4 text-[11px] font-semibold text-black transition hover:border-black md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="mr-2">{menuOpen ? "Close" : "Menu"}</span>
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-full bg-black transition-transform duration-300 ${
                    menuOpen ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[5px] h-[2px] w-full bg-black transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[10px] h-[2px] w-full bg-black transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL (SLIDE FROM CORNER) */}
      <div
        id="mobile-menu"
        className={`fixed right-4 top-16 z-40 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-black/10 bg-white p-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/70 shadow-lg transition-all duration-300 md:hidden ${
          menuOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 -translate-y-2 opacity-0"
        }`}
      >
        <a className="block py-2 transition hover:text-black" href="#about">
          About
        </a>
        <a className="block py-2 transition hover:text-black" href="#services">
          Services
        </a>
        <a className="block py-2 transition hover:text-black" href="#work">
          Work
        </a>
        <a className="block py-2 transition hover:text-black" href="#testimonials">
          Testimonials
        </a>
        <a className="block py-2 transition hover:text-black" href="#contact">
          Contact
        </a>
      </div>

      <div className="relative z-10 min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] w-full max-w-6xl flex-col justify-center overflow-hidden px-4 pb-12 pt-24 sm:min-h-[calc(100dvh-5rem)] sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pt-28"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden" aria-hidden="true">
          <div className="aspect-square w-[min(74vw,620px)] opacity-[0.14] sm:w-[min(58vw,620px)]">
            <HeroOrb />
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="mt-8">
          {/* HERO COPY */}
          <div>
            <h1
              className="text-center text-[clamp(2.1rem,9vw,4.5rem)] font-semibold leading-[0.98] tracking-tight sm:text-left"
            >
              {heroLines.map((line) => (
                <span key={line} className="block overflow-hidden">
                  <span className="block">
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-center text-base leading-7 text-black/70 sm:mx-0 sm:text-left sm:text-lg"
              data-animate="hero"
            >
              A strategy-led design studio specializing in laying down the
              awesome sauce for{" "}
              <span
                key={industries[industryIndex]}
                className="rotate-word font-semibold text-black"
                aria-live="polite"
              >
                {industries[industryIndex]}
              </span>{" "}
              brands.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium sm:justify-start"
              data-animate="hero"
            >
              <button className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-black/85">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-16 lg:px-10 lg:pb-32"
      >
        <div className="absolute inset-0 -z-10 hidden md:block">
          <div className="absolute right-0 top-8 h-40 w-40 rounded-full border border-black/10" />
          <div className="absolute bottom-10 left-12 h-24 w-24 rounded-full border border-black/10" />
        </div>

        <div className="grid gap-10 md:grid-cols-[0.55fr_1fr]">
          <div className="md:self-start">
            <p
              className="text-xs uppercase tracking-[0.35em] text-black/60"
              data-animate="about"
            >
              About SetZet
            </p>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              data-animate="about"
            >
              A story-first studio
              <br />
              for brands that need
              <br />
              to be remembered.
            </h2>
            <p
              className="mt-6 max-w-sm text-base leading-7 text-black/70"
              data-animate="about"
            >
              We don&apos;t chase trends. We craft the narrative, then design the
              interface that makes it feel inevitable.
            </p>
            <div
              className="mt-8 overflow-hidden rounded-2xl border border-black/10"
              data-animate="about"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/about_photo.png"
                  alt="SetZet team"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div
              className="rounded-2xl border border-black/10 p-6"
              data-animate="about"
              data-about-row="true"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Chapter 01
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Strategy First
              </h3>
              <p className="mt-3 text-base leading-7 text-black/70">
                We clarify your positioning, audience, and goals so the website
                has a sharp point of view.
              </p>
            </div>

            <div
              className="rounded-2xl border border-black/10 p-6"
              data-animate="about"
              data-about-row="true"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Chapter 02
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Design With Intent
              </h3>
              <p className="mt-3 text-base leading-7 text-black/70">
                Visual language, hierarchy, and interaction are crafted to earn
                trust and keep attention.
              </p>
            </div>

            <div
              className="rounded-2xl border border-black/10 p-6"
              data-animate="about"
              data-about-row="true"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Chapter 03
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Build for Momentum
              </h3>
              <p className="mt-3 text-base leading-7 text-black/70">
                We ship fast, optimize performance, and set you up for easy
                updates and growth.
              </p>
            </div>

            <div
              className="rounded-2xl border border-black/10 p-6"
              data-animate="about"
              data-about-row="true"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Chapter 04
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Refine and Evolve
              </h3>
              <p className="mt-3 text-base leading-7 text-black/70">
                We measure, iterate, and improve so your site keeps getting
                sharper as your product grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="text-xs uppercase tracking-[0.35em] text-black/60"
              data-animate="services"
            >
              Services
            </p>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              data-animate="services"
            >
              A lean stack for
              <br />
              modern brands.
            </h2>
          </div>
          <p
            className="max-w-xl text-base leading-7 text-black/70 sm:text-lg"
            data-animate="services"
          >
            We build distinctive digital identities that feel effortless to use
            and hard to forget. Strategy, design, and engineering in one tight
            loop.
          </p>
        </div>

        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          <div
            className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
            data-animate="services"
          >
            <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                <Image
                  src="/ui-design.png"
                  alt="UI UX visual"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              01
            </p>
            <h3 className="text-2xl font-semibold">UI/UX</h3>
            <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
              <p>
                User journeys, wireframes, and interfaces that feel effortless
                and convert with clarity.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Research - Flows - Prototypes
              </p>
            </div>
          </div>

          <div
            className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
            data-animate="services"
          >
            <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                <Image
                  src="/web-design.png"
                  alt="Web design visual"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              02
            </p>
            <h3 className="text-2xl font-semibold">Web Design</h3>
            <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
              <p>
                High-end layouts, typography, and motion that communicate brand
                and build trust.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Art Direction - UI - Motion
              </p>
            </div>
          </div>

          <div
            className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
            data-animate="services"
          >
            <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                <Image
                  src="/web-development.jpg"
                  alt="Web development visual"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              03
            </p>
            <h3 className="text-2xl font-semibold">Web Development</h3>
            <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
              <p>
                Fast, modern builds with clean code, SEO, and performance baked
                in.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Next.js - SEO - CMS
              </p>
            </div>
          </div>

          <div
            className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
            data-animate="services"
          >
            <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                <Image
                  src="/mobile-app-development.png"
                  alt="App development visual"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              04
            </p>
            <h3 className="text-2xl font-semibold">App Development</h3>
            <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
              <p>
                Cross-platform apps built for speed, reliability, and a polished
                user experience.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                iOS - Android - QA
              </p>
            </div>
          </div>

          <div
            className="group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center"
            data-animate="services"
          >
            <div className="pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2">
                <Image
                  src="/crm.png"
                  alt="CRM ERP visual"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/50">
              05
            </p>
            <h3 className="text-2xl font-semibold">CRM/ERP</h3>
            <div className="flex flex-col gap-3 text-base leading-7 text-black/70">
              <p>
                Custom systems that connect teams, automate workflows, and keep
                data organized.
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Dashboards - Automation - Integrations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="work"
        className="mx-auto w-full max-w-6xl px-4 pb-12 pt-10 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6" data-animate="work">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">
              Selected Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Experimental builds
              <br />
              with editorial rhythm.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/65 sm:text-base">
            A staggered portfolio layout where each case study has its own
            composition, pacing, and visual weight.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white/80 p-4 backdrop-blur-sm sm:p-6"
              data-animate="work"
            >
              <span className="pointer-events-none absolute -right-3 -top-10 text-[6rem] font-semibold leading-none tracking-tight text-black/[0.06] sm:text-[8rem]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="grid gap-6 md:grid-cols-12 md:items-center">
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 md:col-span-7 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div
                  className={`relative md:col-span-5 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.34em] text-black/50">
                    {project.category} - {project.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-black/70">
                    {project.summary}
                  </p>
                  <a
                    className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-black/60 transition hover:text-black"
                    href={project.href}
                  >
                    View Project
                    <span className="inline-block h-px w-10 bg-black/30 transition-all duration-300 group-hover:w-14" />
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="flex items-center justify-between px-1 pt-2 text-[11px] uppercase tracking-[0.28em] text-black/50">
            <span>More projects on request</span>
            <span className="inline-block h-px w-12 bg-black/30" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        id="testimonials"
        className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">
              Testimonials
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Partner feedback,
              <br />
              framed with clarity.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/65 sm:text-base">
            A spotlight composition with one flagship quote and supporting
            voices placed as side notes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/85 px-6 py-8 sm:px-8 sm:py-10 lg:col-span-8">
            <span className="pointer-events-none absolute -left-3 -top-6 text-[8rem] leading-none text-black/[0.06] sm:text-[10rem]">
              &ldquo;
            </span>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/25 to-transparent" />

            <div className="relative mb-6 overflow-hidden rounded-2xl border border-black/10 bg-black">
              <div className="aspect-video w-full">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={testimonialVideoPoster}
                >
                  <source src={testimonialVideoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <p className="relative max-w-3xl text-lg leading-9 text-black/80 sm:text-[1.45rem] sm:leading-10">
              {testimonials[0].quote}
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
              <div>
                <p className="text-base font-semibold text-black">
                  {testimonials[0].name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-black/50">
                  {testimonials[0].role}
                </p>
              </div>
              <span className="rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-black/55">
                Featured Voice
              </span>
            </div>
          </article>

          <div className="space-y-6 lg:col-span-4">
            {testimonials.slice(1).map((item) => (
              <article
                key={item.name}
                className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-5"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
                <p className="text-sm leading-7 text-black/75">{item.quote}</p>
                <div className="mt-5 border-t border-black/10 pt-3">
                  <p className="text-sm font-semibold text-black">{item.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/50">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/85 p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border border-black/10" />
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">
              Contact Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Let&apos;s build
              <br />
              your next
              <br />
              signature launch.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-black/70">
              Share your vision, timeline, and goals. We&apos;ll map a focused
              strategy and ship a brand experience that feels unmistakably yours.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <p className="border-t border-black/10 pt-4 text-black/75">
                hello@setzet.studio
              </p>
              <p className="border-t border-black/10 pt-4 text-black/75">
                +91-9128376231
              </p>
              <p className="border-t border-black/10 pt-4 text-black/75">
                Noida, India.
              </p>
            </div>
          </div>

          <form className="relative overflow-hidden rounded-[30px] border border-black/10 bg-white/80 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                  Name
                </span>
                <input
                  className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
                  placeholder="Your full name"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                  Email
                </span>
                <input
                  className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
                  placeholder="you@company.com"
                  type="email"
                />
              </label>
            </div>

            <label className="mt-4 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                Project Type
              </span>
              <input
                className="h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35"
                placeholder="Brand site, app, redesign..."
                type="text"
              />
            </label>

            <label className="mt-4 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-black/55">
                Project Brief
              </span>
              <textarea
                className="min-h-[150px] rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-black/35"
                placeholder="Tell us about your goals, timeline, and expectations."
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-black/50">
                Response within 24 hours
              </p>
              <button
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                type="submit"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-4 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white/95">
          <div className="grid gap-8 border-b border-black/10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-black/45">
                SetZet Studio
              </p>
              <h3 className="mt-4 text-[clamp(2rem,6vw,4.6rem)] font-semibold leading-[0.9] tracking-tight">
                A DIGITAL
                <br />
                MANIFESTO
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
                We design and build expressive digital systems for brands that
                choose clarity over noise.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-black/45">Navigate</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-black/75">
                  <a className="transition hover:text-black" href="#about">About</a>
                  <a className="transition hover:text-black" href="#services">Services</a>
                  <a className="transition hover:text-black" href="#work">Work</a>
                  <a className="transition hover:text-black" href="#testimonials">Testimonials</a>
                  <a className="transition hover:text-black" href="#contact">Contact</a>
                </div>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-black/45">Reach</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-black/75">
                  <a className="transition hover:text-black" href="mailto:hello@setzet.studio">hello@setzet.studio</a>
                  <a className="transition hover:text-black" href="tel:+14155550128">+91-9128376231</a>
                  <p>Noida, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 px-6 py-5 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-center">
            <p className="text-[10px] uppercase tracking-[0.24em] text-black/45">(c) 2026 SetZet Studio</p>

            <div className="flex items-center gap-2">
              <a aria-label="Instagram" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M6.8 8.9h3.1V20H6.8zM8.3 3.9a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12.3 8.9h3v1.5h.1c.4-.8 1.4-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.9V20h-3.1v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3.1z" /></svg>
              </a>
              <a aria-label="X" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.2 3h2.9l-6.4 7.3L22 21h-5.7l-4.5-5.9L6.6 21H3.7l6.8-7.8L2 3h5.8l4 5.3zM17.2 19.3h1.6L5.9 4.6H4.2z" /></svg>
              </a>
              <a aria-label="Dribbble" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M6 7.6c2.6 1.5 7.8 2 11.9 1.1" /><path d="M8.2 18.7c1.4-2.5 4-6 8.8-7.8" /><path d="M10.2 4.1c2 2.7 4.6 7.7 5.7 13.6" /></svg>
              </a>
            </div>

            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-black/45">
              <a className="transition hover:text-black" href="#">Privacy</a>
              <a className="transition hover:text-black" href="#">Terms</a>
              <a className="transition hover:text-black" href="#top">Top</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
