'use client'

export function OrganicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 ethiopian-pattern opacity-35" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(13,93,59,0.14),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(247,184,1,0.18),transparent_28%),radial-gradient(circle_at_50%_85%,rgba(214,40,40,0.10),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,249,237,0.82),rgba(255,249,237,0.96))]" />
    </div>
  )
}
