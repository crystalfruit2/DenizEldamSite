"use client";

import { useLanguage } from "@/lib/language-context";
import { ui } from "@/lib/ui-strings";
import Reveal from "@/components/Reveal";
import SectionDivider from "@/components/SectionDivider";
import {
  cvHeader,
  cvProfile,
  cvBooks,
  cvAwards,
  cvSelectedPublications,
  cvLiteraryExperience,
  cvCurrentProjects,
  cvEducation,
  cvLanguages,
  cvReferences,
  cvSectionHeadings,
  type CvEntry,
} from "@/lib/cv";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-sm uppercase tracking-[0.25em] text-muted">
      {children}
    </h2>
  );
}

function EntryRow({ entry, language }: { entry: CvEntry; language: "en" | "tr" }) {
  return (
    <div className="mt-5 first:mt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-serif text-lg text-foreground">{entry.title[language]}</p>
        {entry.date && (
          <p className="whitespace-nowrap text-sm italic text-muted">{entry.date}</p>
        )}
      </div>
      {entry.body && (
        <p className="mt-1 text-foreground/85">{entry.body[language]}</p>
      )}
      {entry.bullets && (
        <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/85">
          {entry.bullets[language].map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CvContent() {
  const { language } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <Reveal>
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl">
            {cvHeader.name}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-muted">
            {cvHeader.tagline[language]}
          </p>
          <p className="mt-4 text-sm text-muted">
            {cvHeader.email} · {cvHeader.site}
          </p>
          <a
            href="/cv/Deniz-Eldam-CV.docx"
            download
            className="group mt-8 inline-flex items-center gap-2 border border-accent px-6 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-background"
          >
            {ui.cv.downloadLabel[language]}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Reveal>

      <div className="mt-16 space-y-14">
        <SectionDivider />

        <Reveal>
          <section>
            <SectionHeading>{cvSectionHeadings.profile[language]}</SectionHeading>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground/85">
              {cvProfile[language]}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>{cvSectionHeadings.books[language]}</SectionHeading>
            <div className="mt-4">
              {cvBooks.map((entry, i) => (
                <EntryRow key={i} entry={entry} language={language} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>{cvSectionHeadings.awards[language]}</SectionHeading>
            <div className="mt-4">
              {cvAwards.map((entry, i) => (
                <EntryRow key={i} entry={entry} language={language} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>
              {cvSectionHeadings.selectedPublications[language]}
            </SectionHeading>
            <p className="mt-4 max-w-2xl leading-relaxed text-foreground/85">
              {cvSelectedPublications[language]}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>
              {cvSectionHeadings.literaryExperience[language]}
            </SectionHeading>
            <div className="mt-4">
              {cvLiteraryExperience.map((entry, i) => (
                <EntryRow key={i} entry={entry} language={language} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>
              {cvSectionHeadings.currentProjects[language]}
            </SectionHeading>
            <div className="mt-4">
              {cvCurrentProjects.map((entry, i) => (
                <EntryRow key={i} entry={entry} language={language} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>{cvSectionHeadings.education[language]}</SectionHeading>
            <div className="mt-4">
              {cvEducation.map((entry, i) => (
                <EntryRow key={i} entry={entry} language={language} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>{cvSectionHeadings.languages[language]}</SectionHeading>
            <p className="mt-4 text-foreground/85">{cvLanguages[language]}</p>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <SectionHeading>{cvSectionHeadings.references[language]}</SectionHeading>
            <p className="mt-4 text-foreground/85">{cvReferences[language]}</p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
