// About.jsx — Mashed Potatoes team profile (keeps PawPal palette & flair)
import React from "react";
import { useNavigate } from "react-router-dom";

const TEAM = [
  {
    name: "Epshita Jahan",
    university: "Bangladesh University of Engineering and Technology",
    department: "Department: CSE",
    
    github: "https://github.com/laurefindele-o-catto",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop", // replace later
  },
  {
    name: "Pritom Biswas",
    university: "Bangladesh University of Engineering and Technology",
    department: "Department: CSE",
    github: "https://github.com/Pritom2357",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rubaiyat Zaman Raisa",
    university: "Bangladesh University of Engineering and Technology",
    department: "Department: CSE",
    github: "https://github.com/RaisaZirus",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Khandoker Md Tanjinul Islam",
    university: "Bangladesh University of Engineering and Technology",
    department: "Department: CSE",
    github: "https://github.com/Lucius-40",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#edfdfd] text-slate-900 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 bg-[#fdd142]/50 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-32 right-12 h-64 w-64 border-[18px] border-[#fdd142]/20 rounded-full animate-[spin_28s_linear_infinite]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 bg-gradient-to-tr from-[#fdd142]/30 to-transparent rounded-[42%] blur-2xl animate-[morph_14s_ease-in-out_infinite]" />

      {/* Dashboard Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-6 left-6 flex items-center px-4 py-2 bg-black text-[#ffffff] rounded-lg shadow hover:bg-gray-700 transition z-20"
        aria-label="Back to dashboard"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Dashboard
      </button>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-12">
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0f172a] text-[#edfdfd] px-3 py-1 rounded-full text-xs font-semibold">
                <span>🐾 PawPal</span>
                <span className="h-1 w-1 rounded-full bg-[#fdd142]"></span>
                <span>About Us</span>
              </div>
              <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                Mashed Potatoes — the team behind PawPal
              </h1>
              <p className="mt-2 text-slate-600 max-w-2xl">
                We’re a BUET‑rooted group building helpful, humane tools for pet care. Simple, friendly, and grounded in real users’ needs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#team"
                className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] text-[#edfdfd] px-5 py-3 font-semibold shadow hover:shadow-lg hover:bg-slate-900 transition"
              >
                Meet the Team
              </a>
              <a
                href="mailto:pawmeowmanool@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold shadow hover:shadow-md transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section id="team" className="mx-auto max-w-6xl px-4 mt-10">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Team Members</h2>
            <p className="text-sm text-slate-600">BUET students • Building PawPal with ❤️</p>
          </div>
          <div className="hidden md:block h-10 w-10 rounded-full bg-[#fdd142] opacity-70" />
        </div>

        <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          {TEAM.map((m, idx) => (
            <article
              key={m.name}
              className="group bg-white/90 border border-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition grid grid-cols-1 md:grid-cols-[180px_1fr]"
            >
              <div
                className={`h-44 md:h-auto w-full md:w-[180px] bg-cover bg-center ${idx % 2 ? "md:order-2" : ""}`}
                style={{ backgroundImage: `url(${m.avatar})` }}
              />
              <div className={`p-5 ${idx % 2 ? "md:order-1" : ""}`}>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {m.name}
                  <span className="text-xs bg-[#fdd142] text-black px-2 py-0.5 rounded-full">Mashed Potatoes</span>
                </h3>
                <p className="mt-1 text-sm text-slate-700">{m.university}</p>
                <p className="text-sm text-slate-700">{m.department}</p>
                <p className="text-sm text-slate-700">{m.certificate}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] text-[#edfdfd] px-4 py-2 text-sm font-semibold shadow hover:bg-slate-900 transition"
                    aria-label={`GitHub profile of ${m.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.425 2.865 8.178 6.839 9.5.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.699-2.782.606-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.622.069-.609.069-.609 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.254-4.555-1.113-4.555-4.952 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.503.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.376.203 2.393.1 2.646.64.7 1.028 1.594 1.028 2.687 0 3.849-2.337 4.695-4.565 4.943.36.31.68.917.68 1.85 0 1.335-.012 2.412-.012 2.739 0 .267.18.579.688.48C19.138 20.195 22 16.444 22 12.02 22 6.486 17.523 2 12 2Z" clipRule="evenodd"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 mt-10 mb-24">
        <div className="bg-white/85 backdrop-blur-md border border-white rounded-2xl shadow p-6">
          <h2 className="text-xl md:text-2xl font-bold">Our Values</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <ValueCard title="Empathy" text="We design for real pet parents and their daily rhythms." />
            <ValueCard title="Clarity" text="Simple words, fewer steps, delightful details." />
            <ValueCard title="Reliability" text="Consistent UX, responsive performance, thoughtful QA." />
            <ValueCard title="Learning" text="We iterate with user feedback and modern best practices." />
            <ValueCard title="Openness" text="We embrace collaboration and share what we learn." />
            <ValueCard title="Care" text="We build with respect for animals and their humans." />
          </div>
        </div>
      </section>

      {/* Keyframes */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes spin { from{transform:rotate(0)} to{transform:rotate(360deg)} }
        @keyframes morph { 0%{border-radius:40% 60% 50% 50%/50% 40% 60% 50%} 50%{border-radius:60% 40% 60% 40%/40% 60% 40% 60%} 100%{border-radius:40% 60% 50% 50%/50% 40% 60% 50%} }
      `}</style>
    </div>
  );
}

function ValueCard({ title, text }) {
  return (
    <article className="bg-white/90 border border-white rounded-2xl shadow p-5 hover:shadow-lg transition">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 text-slate-700">{text}</p>
    </article>
  );
}