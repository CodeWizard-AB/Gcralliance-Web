import {
	BadgeCheck,
	BookOpenText,
	Globe2,
	HeartPulse,
	Stethoscope,
	UsersRound,
} from "lucide-react";
import Image from "next/image";

export default function Mission() {
	return (
		<section className="flex items-center justify-center overflow-hidden py-16 md:py-20">
			<div className="mx-auto relative grid w-full max-w-(--breakpoint-xl) items-stretch gap-8 px-6 md:gap-12 lg:auto-rows-fr lg:grid-cols-2">
				<div className="relative order-2 h-full lg:order-1">
					<div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
					<div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-chart-2/20 blur-3xl dark:bg-chart-2/15" />
					<div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-border/70 bg-card shadow-lg lg:min-h-[680px]">
						<Image
							src="https://ik.imagekit.io/gcralliance/mission-vision"
							alt="A team of doctors and young researchers collaborating in a modern clinical setting"
							className="h-full w-full object-cover"
							loading="lazy"
							width={1000}
							height={1000}
						/>
						<div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 via-black/35 to-transparent p-5 sm:p-6">
							<p className="max-w-[35ch] text-sm font-medium text-white sm:text-base">
								&quot;Our legacy is built on equity, excellence, and
								impact.&quot;
							</p>
						</div>

						<div className="absolute top-3 right-3 left-3 flex flex-col gap-2 sm:top-5 sm:right-5 sm:left-5 sm:flex-row sm:items-center sm:justify-between">
							<div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
								<HeartPulse className="size-4" />
								Cardiovascular Impact
							</div>
							<div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:self-end sm:text-sm">
								<Globe2 className="size-4" />
								Global Research Network
							</div>
						</div>
					</div>
				</div>

				<div className="order-1 h-full lg:order-2">
					<div className="flex h-full min-h-[420px] flex-col rounded-3xl border border-border/70 bg-card/70 p-6 shadow-lg backdrop-blur-sm sm:p-8 lg:min-h-[680px]">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
							<BadgeCheck className="size-4" />
							Our Mission & Legacy
						</div>
						<h2 className="mt-3 text-balance font-satoshi text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
							Democratizing Cardiovascular Research Globally
						</h2>

						<div className="mt-6 space-y-5 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
							<p>
								The Global Cardiovascular Research Alliance was founded on a
								single, powerful belief: where you are born should never
								determine how far your ideas can reach.
							</p>
							<p>
								We exist to break down the barriers that prevent talented
								medical students and young professionals from stepping into the
								world of research. Through structured mentorship, collaborative
								networks, and institutional partnerships, GCRA has helped
								hundreds of aspiring researchers find their voice and get it
								published.
							</p>
							<p>
								Our legacy is built on equity, excellence, and impact. We are
								founded by medical students, supported by experienced
								physicians, and driven by a shared passion for a healthier
								world.
							</p>
						</div>

						<div className="mt-8 grid gap-3 sm:grid-cols-3">
							<div className="rounded-2xl border border-border/70 bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
								<BookOpenText className="size-5 text-primary" />
								<p className="mt-2 text-sm font-semibold text-foreground">
									Structured Mentorship
								</p>
							</div>
							<div className="rounded-2xl border border-border/70 bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
								<UsersRound className="size-5 text-primary" />
								<p className="mt-2 text-sm font-semibold text-foreground">
									Collaborative Networks
								</p>
							</div>
							<div className="rounded-2xl border border-border/70 bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
								<Stethoscope className="size-5 text-primary" />
								<p className="mt-2 text-sm font-semibold text-foreground">
									Physician Supported
								</p>
							</div>
						</div>

						<blockquote className="mt-8 rounded-2xl border border-primary/25 bg-primary/8 p-4 text-base font-medium text-foreground sm:p-5 sm:text-lg dark:border-primary/35 dark:bg-primary/12">
							&quot;We don&apos;t just mentor researchers, we build the
							scientists who will change cardiology&quot;
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}
