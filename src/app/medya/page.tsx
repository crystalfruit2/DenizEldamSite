import type { Metadata } from "next";
import { media } from "@/lib/media";
import VideoCard from "@/components/VideoCard";
import Reveal from "@/components/Reveal";
import MediaHeading from "./MediaHeading";

export const metadata: Metadata = {
  title: "Media",
};

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Reveal>
        <MediaHeading />
      </Reveal>
      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {media.map((item, i) => (
          <Reveal key={item.id} delay={(i % 2) * 0.08}>
            <VideoCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
