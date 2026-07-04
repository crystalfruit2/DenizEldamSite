// An asterism (⁂) — the typographic mark books use to separate sections.
// Replaces plain hairline borders so section breaks read like page breaks.
export default function SectionDivider() {
  return (
    <div aria-hidden className="flex items-center gap-6">
      <span className="h-px flex-1 bg-line" />
      <span className="font-serif text-lg text-muted/70">⁂</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
