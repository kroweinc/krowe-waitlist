export type WorkspaceActivity = {
  initial: string
  avatarClass: string
  actionPrefix: string
  actionTarget: string
  quote: string | null
  time: string
  badge: string | null
}

export const featuredWorkspace = {
  eyebrow: "FEATURED WORKSPACE — ACME CO.",
  title: "Brand Kit v2 — three days from sign-off",
  avatars: [
    { initial: "P", className: "bg-blue-500/15 text-blue-700" },
    { initial: "M", className: "bg-primary/15 text-primary" },
    { initial: "Y", className: "bg-gray-200 text-gray-600" },
  ],
  stats: [
    { label: "OPEN ITEMS", value: "3", highlight: false },
    { label: "COMMENTS", value: "5", highlight: true },
    { label: "DAYS TO SIGN-OFF", value: "3", highlight: false },
    { label: "FILES", value: "14", highlight: false },
  ],
  activities: [
    {
      initial: "P",
      avatarClass: "bg-blue-500/15 text-blue-700",
      actionPrefix: "commented on",
      actionTarget: "Logo set v2",
      quote: '"Love variant B — let\'s go with that one."',
      time: "14 minutes ago",
      badge: null,
    },
    {
      initial: "Y",
      avatarClass: "bg-gray-200 text-gray-600",
      actionPrefix: "delivered",
      actionTarget: "Brand guidelines draft.pdf",
      quote: null,
      time: "2 hours ago",
      badge: null,
    },
    {
      initial: "M",
      avatarClass: "bg-primary/15 text-primary",
      actionPrefix: "approved",
      actionTarget: "Scope addendum",
      quote: null,
      time: "Yesterday",
      badge: "SIGNED",
    },
  ] satisfies WorkspaceActivity[],
  nudge:
    "A small nudge from Krowe: Priya hasn't seen the latest deliverable yet — want me to send a gentle ping with the diff highlighted?",
}

export const clientStatusCards = [
  {
    client: "Ridge Media",
    badge: "Onboarding",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    quote: '"The revised scope looks great — ready to proceed."',
    footer: "— Marcus · 2 hrs ago",
  },
  {
    client: "FounderOS",
    badge: "Awaiting sign-off",
    badgeClass: "bg-primary/5 text-primary border-primary/10",
    quote: '"Sending over the brand bible for final review tomorrow."',
    footer: "— Sarah · 4 hrs ago",
  },
] as const

export const clientProgress = [
  { name: "Acme Co.", percent: 72 },
  { name: "Ridge Media", percent: 38 },
  { name: "FounderOS", percent: 91 },
  { name: "Northwind", percent: 14 },
] as const

export const ctaCopy = {
  headline: "Set up your first workspace in under 2 minutes.",
  subtext: "No card, no demo call. Just bring a client and start.",
  primaryLabel: "Create an account",
  secondaryLabel: "See a demo →",
}
