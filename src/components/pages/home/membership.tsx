import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ArrowRight, BookOpenText, CircleDollarSign } from "lucide-react";
import Link from "next/link";
import { tiers } from "@/lib/constants";

export default function Membership() {
	return (
		<section className="flex items-center justify-center overflow-hidden">
			<div className="mx-auto container relative px-6">
				<div className="relative grid gap-8 border-b border-border/70 pb-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-8">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
							<BookOpenText className="size-3.5" />
							Join the Alliance
						</div>
						<h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
							Your Research Journey Starts <Cover>Here.</Cover>
						</h2>
						<p className="mt-5 max-w-[65ch] text-foreground/80 text-base leading-relaxed sm:text-lg">
							Whether you&apos;re a first-year medical student curious about
							research or a senior resident ready to publish your next
							manuscript, GCRAlliance membership opens doors you didn&apos;t
							know existed. Gain access to mentorship, webinars, research tools,
							peer networks, and global opportunities - all in one place.
						</p>
					</div>

					<div className="lg:col-span-4 lg:justify-self-end">
						<div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/8 p-4 text-sm sm:text-base">
							<CircleDollarSign className="mt-0.5 size-5 shrink-0 text-primary" />
							<p className="text-foreground">
								Discounted and fully subsidized memberships available for
								students from underserved regions.
							</p>
						</div>
					</div>
				</div>

				<div className="relative mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
					{tiers.map(({ title, icon: Icon, featured, points, cta, href }) => (
						<div
							key={title}
							className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
								featured
									? "border-primary/40 bg-linear-to-br from-primary/10 via-primary/5 to-transparent shadow-md"
									: "border-border/70 bg-background/70 hover:shadow-sm"
							}`}
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<p className="text-xs font-medium tracking-wide text-primary uppercase">
										Membership Tier
									</p>
									<h3 className="mt-1 text-xl font-semibold">{title}</h3>
								</div>
								<div className="flex size-10 items-center justify-center rounded-xl border border-primary/30 bg-background/80">
									<Icon className="size-5 text-primary" />
								</div>
							</div>

							<ul className="mt-6 flex-1 space-y-4 text-sm text-foreground/90">
								{points.map((point) => (
									<li key={point} className="flex items-start gap-2">
										<span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
										<span className="leading-relaxed">{point}</span>
									</li>
								))}
							</ul>

							<Button
								asChild
								className="mt-5 w-full"
								size="lg"
								variant={featured ? "default" : "outline"}
							>
								<Link href={href}>
									{cta}
									<ArrowRight className="size-4" />
								</Link>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
