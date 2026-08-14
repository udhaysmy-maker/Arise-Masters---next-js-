"use client";

import { useState } from "react";
import { Building2, Sun } from "lucide-react";
import type { Activity, ActivityTag } from "@/data/activities";

const CATEGORY_ICON = {
  Indoor: Building2,
  Outdoor: Sun,
} as const;

const FILTERS = [
  "All Activities",
  "Indoor",
  "Outdoor",
  "Trust-Building",
  "Leadership",
  "Communication",
  "Strategy",
] as const;

type FilterKey = (typeof FILTERS)[number];

function matchesFilter(activity: Activity, filter: FilterKey) {
  if (filter === "All Activities") return true;
  if (filter === "Indoor" || filter === "Outdoor") return activity.category === filter;
  return activity.tags.includes(filter as ActivityTag);
}

export function ActivityGrid({ activities }: { activities: Activity[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All Activities");

  const filtered = activities.filter((a) => matchesFilter(a, activeFilter));

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {FILTERS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setActiveFilter(label)}
            aria-pressed={activeFilter === label}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
              activeFilter === label
                ? "border-primary bg-primary text-white"
                : "border-ink/10 bg-white text-ink-soft hover:border-primary/40 hover:text-primary"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((activity, i) => {
          const Icon = CATEGORY_ICON[activity.category];
          const number = String(i + 1).padStart(2, "0");
          return (
            <div key={activity.slug} className="card-premium !rounded-2xl flex h-full flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="font-display text-4xl font-semibold leading-none text-ink/10">
                  {number}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-1.5">
                <span className="rounded-full border border-ink/10 px-2.5 py-0.5 text-xs font-medium text-ink-soft">
                  {activity.category}
                </span>
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 font-display text-xl leading-tight text-ink">{activity.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft/70">
                {activity.focus}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{activity.purpose}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft/80">{activity.benefits}</p>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-soft">
          No activities match this filter yet.
        </p>
      )}
    </>
  );
}
