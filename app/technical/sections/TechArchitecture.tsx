"use client";

import { motion } from "framer-motion";

export function TechArchitecture() {
  return (
    <section id="architecture" className="relative z-10 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
            Architecture
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-cream-100 md:text-5xl">
            PitchIQ: AI sales trainer.
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="mb-12">
              <h3 className="mb-3 text-xl font-semibold text-cream-100">Problem</h3>
              <p className="text-cream-300">
                Sales reps need realistic practice, but human coaching is expensive and inconsistent.
                Reps either rehearse alone or wait days for feedback.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="mb-3 text-xl font-semibold text-cream-100">System</h3>
              <p className="text-cream-300">
                A voice-to-voice AI roleplay platform that simulates buyers, adapts difficulty, tracks performance,
                and generates structured post-call coaching. The experience feels like a senior sales coach in your pocket.
              </p>
            </div>

            <div className="mb-12 rounded-2xl border border-border/40 bg-forest-900/60 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-cream-100">System diagram</h3>
              <svg viewBox="0 0 600 320" className="w-full" aria-label="PitchIQ architecture diagram">
                <rect x="220" y="10" width="160" height="40" rx="8" fill="rgba(193,122,75,0.15)" stroke="#c17a4b" strokeWidth="1.5" />
                <text x="300" y="35" textAnchor="middle" fill="#f3e9d9" fontSize="13" fontWeight="500">User (web app)</text>

                <rect x="220" y="80" width="160" height="40" rx="8" fill="rgba(193,122,75,0.15)" stroke="#c17a4b" strokeWidth="1.5" />
                <text x="300" y="105" textAnchor="middle" fill="#f3e9d9" fontSize="13" fontWeight="500">Flask API (Render)</text>

                <rect x="40" y="150" width="140" height="40" rx="8" fill="rgba(243,233,217,0.08)" stroke="#f3e9d9" strokeWidth="1" strokeOpacity="0.3" />
                <text x="110" y="175" textAnchor="middle" fill="#f3e9d9" fontSize="12" fontWeight="500">Deepgram</text>

                <rect x="230" y="150" width="140" height="40" rx="8" fill="rgba(243,233,217,0.08)" stroke="#f3e9d9" strokeWidth="1" strokeOpacity="0.3" />
                <text x="300" y="175" textAnchor="middle" fill="#f3e9d9" fontSize="12" fontWeight="500">GPT-4o / Claude</text>

                <rect x="420" y="150" width="140" height="40" rx="8" fill="rgba(243,233,217,0.08)" stroke="#f3e9d9" strokeWidth="1" strokeOpacity="0.3" />
                <text x="490" y="175" textAnchor="middle" fill="#f3e9d9" fontSize="12" fontWeight="500">Cartesia</text>

                <rect x="230" y="220" width="140" height="40" rx="8" fill="rgba(243,233,217,0.08)" stroke="#f3e9d9" strokeWidth="1" strokeOpacity="0.3" />
                <text x="300" y="245" textAnchor="middle" fill="#f3e9d9" fontSize="12" fontWeight="500">PostgreSQL</text>

                <rect x="220" y="280" width="160" height="30" rx="6" fill="rgba(193,122,75,0.1)" stroke="#c17a4b" strokeWidth="1" strokeDasharray="4 4" />
                <text x="300" y="298" textAnchor="middle" fill="#f3e9d9" fontSize="12" fontWeight="500">Netlify key proxies</text>

                <line x1="300" y1="50" x2="300" y2="80" stroke="#f3e9d9" strokeOpacity="0.3" strokeWidth="1.5" />
                <line x1="300" y1="120" x2="110" y2="150" stroke="#f3e9d9" strokeOpacity="0.3" strokeWidth="1.5" />
                <line x1="300" y1="120" x2="300" y2="150" stroke="#f3e9d9" strokeOpacity="0.3" strokeWidth="1.5" />
                <line x1="300" y1="120" x2="490" y2="150" stroke="#f3e9d9" strokeOpacity="0.3" strokeWidth="1.5" />
                <line x1="300" y1="190" x2="300" y2="220" stroke="#f3e9d9" strokeOpacity="0.3" strokeWidth="1.5" />
                <line x1="300" y1="260" x2="300" y2="280" stroke="#f3e9d9" strokeOpacity="0.3" strokeWidth="1.5" />
              </svg>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-cream-100">Architecture layers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <div>
                    <span className="font-medium text-cream-100">Live conversation layer</span>
                    <p className="text-sm text-sage-500">Deepgram voice agent streams audio and text to the buyer/coach personas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <div>
                    <span className="font-medium text-cream-100">Persona / state manager</span>
                    <p className="text-sm text-sage-500">Tracks who is in the call, emotional state, and coaching objectives.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <div>
                    <span className="font-medium text-cream-100">Scenario generator</span>
                    <p className="text-sm text-sage-500">Creates buyer context, objections, and call goals based on the rep&apos;s profile.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <div>
                    <span className="font-medium text-cream-100">Feedback / scoring agent</span>
                    <p className="text-sm text-sage-500">Turns the conversation into structured coaching, not generic AI advice.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <div>
                    <span className="font-medium text-cream-100">User progress tracking</span>
                    <p className="text-sm text-sage-500">PostgreSQL stores call metrics, weaknesses, and improvement curves over time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-terracotta-500" />
                  <div>
                    <span className="font-medium text-cream-100">Cost-controlled model routing</span>
                    <p className="text-sm text-sage-500">Fast/cheap models for live chat; heavier models for background reasoning and feedback.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="mb-12 rounded-2xl border border-border/40 bg-forest-900/60 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-cream-100">Tradeoffs</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-cream-300">Fast model for live conversation; heavier model for coaching reasoning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-cream-300">Structured feedback instead of loose &quot;AI advice&quot; — reps need actionable scores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-cream-300">Model routing and caching to keep the cost per coached call around ¢5.</span>
                </li>
              </ul>
            </div>

            <div className="mb-12 rounded-2xl border border-border/40 bg-forest-900/60 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-cream-100">What broke</h3>
              <ul className="space-y-3 text-cream-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage-500" />
                  <span>Voice latency and turn-taking made early roleplays feel robotic. Fixed by tightening the state machine and turn boundaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage-500" />
                  <span>Personas drifted into generic responses. Solved with stricter prompt templates and bias filtering.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage-500" />
                  <span>Token costs spiked when using one model for everything. Splitting the work across specialized models fixed it.</span>
                </li>
              </ul>
            </div>

            <div className="mb-12 rounded-2xl border border-border/40 bg-forest-900/60 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-cream-100">Product snapshots</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-border/60">
                  <img
                    src="/pitchiq-screenshot.png"
                    alt="PitchIQ live call interface"
                    className="w-full object-cover"
                  />
                  <p className="bg-forest-900/90 px-4 py-2 text-xs text-sage-500">Live call interface</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/60 p-6 text-center">
                  <p className="mb-2 text-sm font-medium text-cream-100">Feedback output screenshot</p>
                  <p className="text-xs text-sage-500">Add a screenshot of the post-call coaching report.</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/60 p-6 text-center sm:col-span-2">
                  <p className="mb-2 text-sm font-medium text-cream-100">Demo clip or GIF</p>
                  <p className="text-xs text-sage-500">Add a short screen recording of a call + feedback flow.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/40 bg-forest-900/60 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-cream-100">What I learned</h3>
              <ul className="space-y-3 text-cream-300">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>The cost target is a design constraint. It forces model selection, caching, and routing decisions from day one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Voice UX is mostly state management. If the state machine is sloppy, the conversation feels broken before the model is the problem.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>Structured feedback beats open-ended coaching. Users want to know what to fix, not read an essay.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
