import { Cover } from "@/components/ui/cover";
import { academicBenefits, academicBenefitsSection } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function AcademicBenefits() {
	const { eyebrow, heading, headingAccent, subheading } =
		academicBenefitsSection;

	const [headingBefore, headingAfter = ""] = heading.split(headingAccent);

	return (
		<section
			id="academic-benefits"
			className="scroll-mt-24 my-20 md:my-32"
			aria-labelledby="academic-benefits-heading"
		>
			<div className="container relative mx-auto">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute top-1/3 left-0 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
					<div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
				</div>

				<div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,380px)_1fr]">
					<div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
							<Sparkles className="size-4" aria-hidden />
							{eyebrow}
						</div>

						<h2
							id="academic-benefits-heading"
							className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
						>
							{headingBefore}
							<Cover className="text-3xl sm:text-4xl lg:text-[2.75rem]">
								{headingAccent}
							</Cover>
							{headingAfter}
						</h2>

						<p className="mt-4 text-pretty text-base font-medium leading-relaxed text-muted-foreground sm:text-lg">
							{subheading}
						</p>

						<div className="mt-8 hidden items-center gap-3 lg:flex" aria-hidden>
							<div className="h-px flex-1 bg-linear-to-r from-primary/50 to-transparent" />
							<span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
								5 reasons
							</span>
						</div>
					</div>

					<ol className="relative flex flex-col gap-4 sm:gap-5">
						<div
							className="pointer-events-none absolute top-8 bottom-8 left-7 hidden w-px bg-linear-to-b from-transparent via-border to-transparent lg:block"
							aria-hidden
						/>

						{academicBenefits.map(
							({
								id,
								index,
								title,
								description,
								icon: Icon,
								iconClassName,
								cardClassName,
							}) => (
								<li key={id}>
									<article
										className={cn(
											"group relative flex w-full gap-4 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 sm:gap-5 sm:p-6",
											"hover:-translate-y-0.5 hover:shadow-md",
											cardClassName,
										)}
									>
										<div className="flex shrink-0 flex-col items-center gap-2">
											<div
												className={cn(
													"relative z-10 flex size-14 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105",
													iconClassName,
												)}
											>
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
												{description}
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
