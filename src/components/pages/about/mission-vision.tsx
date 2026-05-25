import { Cover } from "@/components/ui/cover";
import { missionVisions } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HeartHandshake } from "lucide-react";

export default function MissionVision() {
	return (
		<section
			id="mission-vision"
			className="flex scroll-mt-24 items-center justify-center overflow-hidden"
			aria-labelledby="mission-vision-heading"
		>
			<div className="container relative mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<HeartHandshake className="size-4" aria-hidden />
						Purpose & Direction
					</div>
					<h2
						id="mission-vision-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						Mission{" "}
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">& Vision</Cover>
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						Two commitments that guide every program, partnership, and
						opportunity we build for the next generation of cardiovascular
						researchers.
					</p>
				</div>

				<div className="relative mt-10 md:mt-14">
					<div className="pointer-events-none absolute inset-0 -z-10">
						<div className="absolute top-1/2 left-1/4 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
						<div className="absolute top-1/2 right-1/4 h-56 w-56 -translate-y-1/2 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
					</div>

					<div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-10">
						<div className="pointer-events-none absolute inset-0">
							<div className="absolute -top-20 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
							<div className="absolute -right-12 -bottom-24 h-48 w-48 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
						</div>

						<div className="relative grid gap-6 lg:grid-cols-2 lg:gap-8">
							{missionVisions.map(
								({ label, icon: Icon, body, cardClassName, iconClassName }) => (
									<article
										key={label}
										className={cn(
											"group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8",
											"hover:-translate-y-1 hover:shadow-md",
											cardClassName,
										)}
									>
										<div className="flex items-start gap-4">
											<div
												className={cn(
													"flex size-12 shrink-0 items-center justify-center rounded-xl border transition-colors",
													iconClassName,
												)}
											>
												<Icon className="size-6" aria-hidden />
											</div>
											<h3 className="min-w-0 pt-1 text-xl font-semibold text-foreground sm:text-2xl">
												{label}
											</h3>
										</div>
										<p className="mt-6 flex-1 text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
											{body}
										</p>
									</article>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
