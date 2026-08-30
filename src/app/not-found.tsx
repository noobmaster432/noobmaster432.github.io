import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/resume";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: `Page not found — ${profile.name}`,
};

export default function NotFound() {
  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-accent"
          >
            {profile.name.split(" ")[0].toLowerCase()}
            <span className="text-accent">.</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              404
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              This route isn&rsquo;t in the build. The link is probably stale, or
              the page never existed in the first place.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-surface p-4 font-mono text-xs leading-relaxed sm:text-sm">
              <p>
                <span className="text-accent">$</span> cat requested-page
              </p>
              <p className="mt-1 text-muted">
                cat: requested-page: No such file or directory
              </p>
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent bg-accent-soft px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </div>

          <div className="order-first flex justify-center lg:order-last">
            <Image
              src="/not-found/astronaut.webp"
              alt=""
              aria-hidden="true"
              width={1004}
              height={918}
              priority
              sizes="(min-width: 1024px) 420px, 260px"
              className={`${styles.float} w-56 max-w-full sm:w-72 lg:w-[420px]`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
