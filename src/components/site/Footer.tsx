import { Instagram, Linkedin, Facebook, Youtube, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

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
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-white shadow-lg">
                <span className="font-display text-2xl leading-none">A</span>
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
              {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            items={["About", "Trainers", "Careers", "Press", "Contact"]}
          />
          <FooterCol
            title="Services"
            items={[
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
                hello@arisemasters.com
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                +91 98000 00000
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                Bengaluru · Mumbai · Chennai
              </li>
            </ul>
          </div>
        </div>

        {/* elegant separator */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* newsletter + map placeholder */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
            <h4 className="font-display text-xl text-white">Stay ahead of the curve</h4>
            <p className="mt-2 max-w-sm text-sm text-white/55">
              Facilitation insights and program updates — no spam, ever.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] p-1.5 pl-5"
            >
              <input
                type="email"
                required
                placeholder="Email for insights"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white transition-transform duration-300 hover:scale-105">
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>

          <a
            href="https://www.google.com/maps?q=Bengaluru%20India"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-between gap-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-white/20"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                <MapPin size={18} />
              </span>
              <h4 className="mt-5 font-display text-xl text-white">Find us on the map</h4>
              <p className="mt-2 text-sm text-white/55">Bengaluru, Karnataka, India</p>
            </div>
            <span className="relative flex shrink-0 items-center gap-1.5 text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
              View map
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
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
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
        {title}
      </h4>
      <ul className="mt-6 space-y-3.5 text-sm text-white/70">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
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
