"use client";

import { motion } from "framer-motion";
import { CollapsibleDiagram } from "../../components/CollapsibleDiagram";

export function PitchIQArchitecture() {
  return (
    <div className="mt-16">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage-500">
        Architecture
      </p>
      <h2 className="mb-12 text-3xl font-semibold tracking-tight text-cream-100 md:text-4xl">
        Diagnosing reps, using roleplay as the vehicle.
      </h2>

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
              Sales reps don&apos;t know exactly why they&apos;re losing deals. Human coaching is expensive, inconsistent, and rarely diagnostic.
              Reps either rehearse alone or wait days for vague feedback.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="mb-3 text-xl font-semibold text-cream-100">System</h3>
            <p className="text-cream-300">
              The call itself is just the vehicle. A voice-to-voice AI roleplay simulates a buyer, adapts difficulty, and tracks
              performance in order to generate the real product: a structured diagnosis of exactly where a rep is losing the deal.
            </p>
          </div>

          <div className="mb-12">
            <CollapsibleDiagram
              title="System diagram"
              src="/pitchiq_per_turn_ground_truth.png"
              alt="PitchIQ per-turn ground truth flow chart"
            />
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
                  <span className="font-medium text-cream-100">Feedback / scoring agent — the actual product</span>
                  <p className="text-sm text-sage-500">Turns the call transcript into a precise diagnosis of what went wrong, not generic AI advice.</p>
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
                <span className="text-cream-300">Model routing and caching to keep the cost per coached call around ¢10.</span>
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
  );
}
