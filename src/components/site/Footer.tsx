import Image from "next/image";
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/80">
      {/* premium dark background depth */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="container-x relative py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          {/* brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white shadow-lg">
                <Image
                  src="/assets/logo-mark.png"
                  alt="Arise Masters logo mark"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </span>
              <span className="font-display text-2xl text-white md:text-[1.7rem]">
                Arise Masters
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Corporate training, leadership development and placement
              consulting for companies, colleges and MSMEs. Your rise begins here.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={[
              "Programs",
              "Industries",
              "Why Us",
              "Method",
              "Stories",
              "Gallery",
              "Contact",
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              "Soft Skills Training",
              "Corporate Training",
              "Leadership",
              "Placement",
              "POSH Training",
              "HR Programs",
            ]}
          />

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              Contact
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-primary" />
                arisemastersacademy@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                +91 87541 89669
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                Chennai
              </li>
            </ul>
          </div>
        </div>

        {/* elegant separator */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* business enquiry CTA */}
        <div className="mt-14 grid place-items-center">
          <div className="w-full max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_80px_rgba(255,255,255,0.02)]">
            <p className="font-semibold uppercase tracking-[0.28em] text-xs text-primary">
              LET&apos;S WORK TOGETHER
            </p>
            <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-white md:text-4xl">
              Let&apos;s build your next learning journey.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              Tell us what you&apos;re trying to solve, and we&apos;ll help you design the right learning experience for your people.
            </p>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Start a conversation ↗
            </a>

            <p className="mt-4 max-w-sm text-sm text-white/55">
              Corporate training • Leadership development • Academic programs
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Arise Masters. All rights reserved.</p>
          <p className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="#" className="transition-colors hover:text-white">POSH Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  const linkMap: Record<string, string> = {
    Programs: "/#programs",
    Industries: "/#industries",
    "Why Us": "/#why",
    Method: "/#methodology",
    Stories: "/#stories",
    Gallery: "/gallery",
    Contact: "/#contact",
    "Soft Skills Training": "/#programs",
    "Corporate Training": "/#programs",
    Leadership: "/#programs",
    Placement: "/#programs",
    "POSH Training": "/#programs",
    "HR Programs": "/#programs",
  };

  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
        {title}
      </h4>
      <ul className="mt-6 space-y-3.5 text-sm text-white/70">
        {items.map((i) => (
          <li key={i}>
            <a
              href={linkMap[i] ?? "#"}
              className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-white"
            >
              <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
