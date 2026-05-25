import { Cover } from "@/components/ui/cover";
import {
	foundationalPillars,
	foundationalPillarsSection,
} from "@/lib/constants";
import { Layers } from "lucide-react";

export default function FoundationalPillars() {
	const { eyebrow, heading, description } = foundationalPillarsSection;

	return (
		<section
			id="foundational-pillars"
			className="scroll-mt-24 py-12 md:py-16"
			aria-labelledby="foundational-pillars-heading"
		>
			<div className="container relative mx-auto">
				<div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,380px)_1fr]">
					<div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
							<Layers className="size-4" aria-hidden />
							{eyebrow}
						</div>
						<h2
							id="foundational-pillars-heading"
							className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
						>
							<Cover className="text-3xl sm:text-4xl lg:text-[2.75rem]">
								{heading}
							</Cover>
						</h2>
						<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
							{description}
						</p>

						<div className="mt-8 hidden items-center gap-3 lg:flex" aria-hidden>
							<div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent" />
							<span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
								5 pillars
							</span>
						</div>
					</div>

					<ol className="flex flex-col gap-4 sm:gap-5">
						{foundationalPillars.map(
							({ id, index, title, body, icon: Icon }) => (
								<li key={id}>
									<article className="group flex w-full gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors duration-300 sm:gap-5 sm:p-6 hover:border-primary/20 hover:bg-primary/6 hover:shadow-md">
										<div className="flex shrink-0 flex-col items-center gap-2">
											<div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/50 transition-transform duration-300 group-hover:scale-105">
												<Icon className="size-6" aria-hidden />
											</div>
											<span className="font-mono text-xs font-medium tracking-wider text-muted-foreground/70">
												{index}
											</span>
										</div>

										<div className="min-w-0 flex-1 pt-0.5">
											<h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
												{title}
											</h3>
											<p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
												{body}
											</p>
										</div>
									</article>
								</li>
							),
						)}
					</ol>
				</div>
			</div>
		</section>
	);
}
