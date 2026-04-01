"use client";

import { fadeUpVariants, staggeredRevealVariants } from "@/shared/lib/animations";
import { motion } from "motion/react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import AuthField from "./AuthField";
import AuthShell from "./AuthShell";

import type { FormEvent } from "react";

import { useAuth } from "../model/useAuth";
import { useValidation } from "../model/useValidation";
import { useState } from "react";
import { FormErrors, RegisterProfileDraft } from "@/types/RegisterTypes";

import { supabase } from "@/lib/supabase/client";

const registerMetrics = [
  { value: "05 min", label: "to get started" },
  { value: "Tiny wins", label: "stack daily" },
  { value: "Clear streaks", label: "see progress" },
];

const registerHighlights = [
  "A minimalist setup that keeps early momentum from turning into clutter.",
  "Visible progress cues to help small habits feel rewarding and repeatable.",
  "A cleaner way to turn busy days into something you can still count as a win.",
];

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
    >
      <path
        fillRule="evenodd"
        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function RegisterForm() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [submitSuccess, setSubmitSuccess] = useState<string>("");


  const { registerValues, updateRegisterField } = useAuth();
  const { validateRegisterForm } = useValidation();

  const [errors, setErrors] = useState<FormErrors<RegisterProfileDraft>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitError("")
    setSubmitSuccess("");

    const result = validateRegisterForm(registerValues);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setIsSubmitting(true)

    const { error } = await supabase.auth.signUp({
      email: registerValues.email,
      password: registerValues.password,
      options: {
        data: {
          full_name: registerValues.name
        }
      }
    });

    if (error) {
      setSubmitError(error.message);
    } else {
      setSubmitSuccess("Account created. Check Your Email.");

      updateRegisterField("name", "");
      updateRegisterField("email", "");
      updateRegisterField("password", "");
      updateRegisterField("confirmPassword", "");
      updateRegisterField("agreedToTerms", false);

      router.push("/dashboard");
    }

    setIsSubmitting(false);
  }

  const handleFieldChange = <TField extends keyof RegisterProfileDraft>(
    field: TField,
    value: RegisterProfileDraft[TField],
  ) => {
    updateRegisterField(field, value);

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  return (
    <AuthShell
      badge="Start fresh"
      spotlight="Build momentum before motivation shows up."
      spotlightCopy="Set up a simple routine, stay clear on what matters today, and turn the smallest wins into a rhythm you can keep."
      metrics={registerMetrics}
      highlights={registerHighlights}
      eyebrow="Create account"
      title="Join HabitFlow"
      description="Start with a cleaner signup flow, create your account, and set the tone for a routine that feels calm enough to keep."
    >
      <motion.form
        variants={staggeredRevealVariants}
        className="space-y-5"
        onSubmit={handleSubmit}
      >
        <motion.div
          variants={fadeUpVariants}
          className="grid gap-3 rounded-[28px] border border-[#d7f5e1] bg-[linear-gradient(135deg,rgba(240,253,244,0.95),rgba(255,255,255,0.96))] p-4 sm:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.18em] text-habit-accent">
              New account
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-6 text-slate-600">
              Create your profile, lock in a password, and start shaping a routine that is easy to come back to every day.
            </p>
          </div>
          <div className="flex items-start sm:items-center">
            <div className="rounded-2xl bg-[#121936] px-4 py-3 text-right text-white shadow-[0_18px_38px_rgba(15,23,42,0.16)]">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                Focus
              </div>
              <div className="mt-1 text-[15px] font-black tracking-[-0.03em]">
                Calm consistency
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariants}>
          <AuthField
            id="register-name"
            name="name"
            type="text"
            label="Full Name"
            placeholder="Your full name"
            autoComplete="name"
            icon={<UserIcon />}
            value={registerValues.name}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            description={errors.name}
          />
        </motion.div>

        <motion.div variants={fadeUpVariants}>
          <AuthField
            id="register-email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="name@example.com"
            autoComplete="email"
            icon={<MailIcon />}
            value={registerValues.email}
            onChange={(e) => handleFieldChange("email", e.target.value)}
            description={errors.email}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="grid gap-5 lg:grid-cols-2"
        >
          <AuthField
            id="register-password"
            name="password"
            type="password"
            label="Password"
            placeholder="Create a password"
            autoComplete="new-password"
            icon={<LockIcon />}
            hint=""
            value={registerValues.password}
            onChange={(e) => handleFieldChange("password", e.target.value)}
            description={errors.password}
          />
          <AuthField
            id="confirm-password"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Repeat your password"
            autoComplete="new-password"
            icon={<LockIcon />}
            value={registerValues.confirmPassword}
            onChange={(e) => handleFieldChange("confirmPassword", e.target.value)}
            description={errors.confirmPassword}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4"
        >
          <label
            htmlFor="terms"
            className="flex items-start gap-3 text-[14px] font-semibold leading-6 text-slate-600"
          >
            <input
              id="terms"
              type="checkbox"
              checked={registerValues.agreedToTerms}
              onChange={(ev) => {
                handleFieldChange("agreedToTerms", ev.target.checked)
              }}
              className={`mt-1 size-4 rounded border-slate-300 accent-habit-primary`}
            />
            I agree to create my HabitFlow account and use this profile to track my habits and progress.
          </label>
        </motion.div>

        {errors.agreedToTerms ? <p>{errors.agreedToTerms}</p> : null}

        <motion.div variants={fadeUpVariants} className="pt-1">
          <button type="submit" disabled={isSubmitting || !registerValues.agreedToTerms} className="group flex w-full items-center justify-center gap-2 rounded-[22px] bg-habit-primary px-5 py-4 text-[15px] font-black text-white shadow-[0_24px_48px_rgba(74,222,128,0.28)] transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:bg-gray-400 disabled:shadow-none">
            <span>{isSubmitting ? "Creating..." : "Create Account"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </button>
          {submitError ? <p>{submitError}</p> : null}
          {submitSuccess ? <p className="text-[14px] font-semibold text-habit-accent/60 ml-1 mt-5">✔️ {submitSuccess}</p> : null}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 sm:grid-cols-3"
        >
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
              Less clutter
            </div>
            <div className="mt-2 text-[14px] font-bold text-slate-900">
              Cleaner screens and a calmer first run.
            </div>
          </div>
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
              More clarity
            </div>
            <div className="mt-2 text-[14px] font-bold text-slate-900">
              See your rhythm without digging through noise.
            </div>
          </div>
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
              Faster start
            </div>
            <div className="mt-2 text-[14px] font-bold text-slate-900">
              Go from signup to your first habit in minutes.
            </div>
          </div>
        </motion.div>
      </motion.form>

      <motion.div
        variants={fadeUpVariants}
        className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-6 text-[14px] font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>Already tracking with HabitFlow? Head back to your account.</p>
        <Link
          href="/login"
          className="font-black text-habit-accent transition-colors hover:text-[#1d4f3c]"
        >
          Sign in instead
        </Link>
      </motion.div>
    </AuthShell>
  );
}
