import { Cover } from "@/components/ui/cover";
import { academicProgrammes, academicProgrammesSection } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CalendarClock, GraduationCap, Layers } from "lucide-react";

export default function AcademicProgrammes() {
	const { eyebrow, heading, headingAccent, subheading } =
		academicProgrammesSection;

	const headingPrefix = heading.replace(headingAccent, "").trim();

	return (
		<section
			id="academic-programmes"
			className="scroll-mt-24 mt-20 md:mt-32"
			aria-labelledby="academic-programmes-heading"
		>
			<div className="container relative mx-auto">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute top-0 left-1/4 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
					<div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
				</div>

				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<GraduationCap className="size-4" aria-hidden />
						{eyebrow}
					</div>

					<h2
						id="academic-programmes-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
					>
						{headingPrefix}{" "}
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">
							{headingAccent}
						</Cover>
					</h2>

					<p className="mt-4 text-pretty text-base font-medium text-muted-foreground sm:text-lg">
						{subheading}
					</p>
				</div>

				<div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
					{academicProgrammes.map(
						({
							id,
							index,
							title,
							description,
							format,
							level,
							icon: Icon,
							iconClassName,
							cardClassName,
						}) => (
							<article
								key={id}
								className={cn(
									"group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 sm:p-6",
									"hover:-translate-y-1 hover:shadow-md",
									cardClassName,
								)}
							>
								<div className="flex items-start justify-between gap-4">
									<div
										className={cn(
											"flex size-12 shrink-0 items-center justify-center rounded-xl border transition-colors",
											iconClassName,
										)}
									>
										<Icon className="size-6" aria-hidden />
									</div>
									<span className="font-mono text-xs font-medium tracking-wider text-muted-foreground/70">
										{index}
									</span>
								</div>

								<h3 className="mt-5 text-base font-semibold leading-snug text-foreground sm:text-lg">
									{title}
								</h3>

								<p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
									{description}
								</p>

								<div className="mt-5 space-y-2 border-t border-border/60 pt-4">
									<div className="flex items-start gap-2 text-sm text-foreground/85">
										<CalendarClock
											className="mt-0.5 size-4 shrink-0 text-primary"
											aria-hidden
										/>
										<span>
											<span className="font-medium">Format:</span> {format}
										</span>
									</div>

									{level && (
										<div className="flex items-start gap-2 text-sm text-foreground/85">
											<Layers
												className="mt-0.5 size-4 shrink-0 text-primary"
												aria-hidden
											/>
											<span>
												<span className="font-medium">Level:</span> {level}
											</span>
										</div>
									)}
								</div>
							</article>
						),
					)}
				</div>
			</div>
		</section>
	);
}
