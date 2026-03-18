"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react";

type AuthFieldProps = {
  label: string;
  icon: ReactNode;
  hint?: string;
  description?: string;
  inputClassName?: string;
} & ComponentPropsWithoutRef<"input">;

export default function AuthField({
  label,
  icon,
  hint,
  description,
  inputClassName = "",
  id,
  ...inputProps
}: AuthFieldProps) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2.5">
      <span className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          {label}
        </span>
        {hint ? (
          <span className="text-[12px] font-semibold text-slate-400">{hint}</span>
        ) : null}
      </span>
      <span className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/90 px-3.5 py-3 transition-all duration-200 focus-within:-translate-y-0.5 focus-within:border-emerald-300 focus-within:bg-white focus-within:shadow-[0_18px_36px_rgba(74,222,128,0.12)]">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-slate-400 shadow-[inset_0_0_0_1px_rgba(226,232,240,0.9)] transition-colors duration-200 group-focus-within:text-habit-accent">
          {icon}
        </span>
        <input
          id={id}
          className={`h-11 w-full border-0 bg-transparent text-[15px] font-semibold text-slate-900 outline-none placeholder:font-semibold placeholder:text-slate-400 ${inputClassName}`}
          {...inputProps}
        />
      </span>
      {description ? (
        <p className="pl-1 text-[12px] font-semibold leading-5 text-slate-500">
          {description}
        </p>
      ) : null}
    </label>
  );
}
