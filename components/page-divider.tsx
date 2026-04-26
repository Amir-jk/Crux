interface PageDividerProps {
  title?: string
  eyebrow?: string
}

export function PageDivider({ title, eyebrow }: PageDividerProps) {
  return (
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-12 bg-primary" />
        <span className="h-3 w-3 rotate-45 border border-accent bg-background" />
        <span className="h-px w-12 bg-red-700" />
      </div>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
          {title}
        </h2>
      )}
    </div>
  )
}
