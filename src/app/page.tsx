"use client";

import { cv } from "@/content/cv";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useState } from "react";

/* ────────────────────────────────────────────────────────────
   ICONS (inline SVGs to avoid extra dependencies)
──────────────────────────────────────────────────────────── */
function IconGitHub({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconExternalLink({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconArrowDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19,12 12,19 5,12" />
    </svg>
  );
}

function IconPhone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconMapPin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   NAV LINKS
──────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ────────────────────────────────────────────────────────────
   SKILL GROUPS
──────────────────────────────────────────────────────────── */
const skillGroups = [
  { title: "Languages & Frameworks", items: cv.skills.languagesAndFrameworks },
  { title: "Libraries & Tools", items: cv.skills.librariesAndTools },
  { title: "APIs & Integration", items: cv.skills.apisAndIntegration },
  { title: "Version Control & Other", items: cv.skills.versionControlAndOther },
];

/* ────────────────────────────────────────────────────────────
   PAGE
──────────────────────────────────────────────────────────── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Default to showing live projects, or the first 4 if none are live
  const liveProjects = cv.projects.filter((p) => p.live);
  const defaultProjects = liveProjects.length > 0 ? liveProjects : cv.projects.slice(0, 4);
  const displayedProjects = showAllProjects ? cv.projects : defaultProjects;

  return (
    <div className="w-full min-h-full">
      {/* ═══════════════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            MF<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* ═══════════════════════════════════════════════════════
          MAIN
      ═══════════════════════════════════════════════════════ */}
      <main className="mx-auto w-full max-w-5xl px-5 sm:px-8">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="flex min-h-[92svh] flex-col items-center justify-center pt-16 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {cv.name}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-accent sm:text-xl">
              {cv.title} — {cv.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {cv.bio}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-white transition-all hover:bg-accent-muted hover:shadow-lg hover:shadow-accent/20"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <a
              href="#about"
              className="mt-16 flex flex-col items-center gap-2 text-sm text-dim transition-colors hover:text-muted"
            >
              Scroll down
              <IconArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </Reveal>
        </section>

        <div className="section-divider" />

        {/* ── ABOUT ────────────────────────────────────────── */}
        <Section id="about" title="About Me" subtitle="A brief introduction">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted">
                  {cv.bio}
                </p>
                <p className="text-base leading-relaxed text-muted">
                  With 3+ years of hands-on experience, I&apos;ve delivered 8+ enterprise-grade projects
                  at Addicta — from SaaS fitness platforms and ERP systems to yacht service dashboards.
                  I thrive on building modular, scalable architectures with React 18/19, TypeScript,
                  Redux Toolkit, and GraphQL, always focusing on clean code and seamless user experiences.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-dim">
                  Quick Info
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <IconMapPin className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{cv.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconMail className="h-4 w-4 shrink-0 text-accent" />
                    <span className="text-muted">{cv.email}</span>
                  </div>
                  {cv.phones.map((phone) => (
                    <div key={phone} className="flex items-center gap-3">
                      <IconPhone className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-muted">{phone}</span>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </Section>

        <div className="section-divider" />

        {/* ── SKILLS ───────────────────────────────────────── */}
        <Section id="skills" title="Skills" subtitle="Technologies I work with">
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-hover">
                  <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* ── EXPERIENCE ───────────────────────────────────── */}
        <Section id="experience" title="Experience" subtitle="My professional journey">
          <div className="space-y-6">
            {cv.experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-hover">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-accent">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="mt-1 text-xs font-medium text-dim sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* ── PROJECTS ─────────────────────────────────────── */}
        <Section id="projects" title="Projects" subtitle="Some things I've built">
          <div className="grid gap-5 sm:grid-cols-2">
            {displayedProjects.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-hover">
                  {/* Title + links */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {project.name}
                    </h3>
                    <div className="flex shrink-0 gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dim transition-colors hover:text-foreground"
                          aria-label={`${project.name} GitHub`}
                        >
                          <IconGitHub className="h-4 w-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dim transition-colors hover:text-foreground"
                          aria-label={`${project.name} live`}
                        >
                          <IconExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-2 border-t border-border">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-background px-2 py-0.5 text-[11px] font-medium text-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {cv.projects.length > defaultProjects.length && (
            <Reveal delay={0.1}>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-surface px-6 text-sm font-medium text-foreground transition-all hover:border-border-hover hover:bg-surface-hover hover:text-accent focus:outline-none"
                >
                  {showAllProjects ? "Show Less" : "Show More Projects"}
                </button>
              </div>
            </Reveal>
          )}
        </Section>

        <div className="section-divider" />

        {/* ── EDUCATION ────────────────────────────────────── */}
        <Section id="education" title="Education" subtitle="Academic background">
          <div className="grid gap-5 sm:grid-cols-2">
            {cv.education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-hover">
                  <h3 className="text-base font-semibold text-foreground">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-accent">{edu.school}</p>
                  <p className="mt-2 text-xs font-medium text-dim">{edu.period}</p>
                  {edu.note && (
                    <p className="mt-2 inline-flex items-center rounded-md border border-accent/20 bg-accent-glow px-2.5 py-1 text-xs font-medium text-accent">
                      {edu.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <div className="section-divider" />

        {/* ── CONTACT ──────────────────────────────────────── */}
        <Section id="contact" title="Contact" subtitle="Let's work together">
          <Reveal>
            <div className="mx-auto max-w-lg text-center">
              <p className="text-base leading-relaxed text-muted">
                I&apos;m currently open to new opportunities. Whether you have a project
                in mind or just want to connect, feel free to reach out.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`mailto:${cv.email}`}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-white transition-all hover:bg-accent-muted hover:shadow-lg hover:shadow-accent/20 sm:w-auto"
                >
                  <IconMail className="h-4 w-4" />
                  Send Email
                </a>
                <a
                  href={cv.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface sm:w-auto"
                >
                  <IconLinkedIn className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface sm:w-auto"
                >
                  <IconGitHub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between sm:px-8">
          <p className="text-sm text-dim">
            © {new Date().getFullYear()} {cv.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={cv.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <IconGitHub className="h-5 w-5" />
            </a>
            <a
              href={cv.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${cv.email}`}
              className="text-dim transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <IconMail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
