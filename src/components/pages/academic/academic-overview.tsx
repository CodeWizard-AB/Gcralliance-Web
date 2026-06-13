import { Cover } from "@/components/ui/cover";
import { focusAreas } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GraduationCap, Stethoscope } from "lucide-react";

export default function AcademicOverview() {
	return (
		<section
			id="academic-overview"
			className="scroll-mt-24 py-20 md:py-32"
			aria-labelledby="academic-overview-heading"
		>
			<div className="container relative mx-auto">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute top-1/4 left-0 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
					<div className="absolute right-0 bottom-1/4 h-64 w-64 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
				</div>

				<div className="grid items-stretch gap-8 md:gap-12 lg:grid-cols-2 lg:gap-14">
					<div className="order-2 lg:order-1">
						<div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
							<div className="pointer-events-none absolute inset-0">
								<div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
								<div className="absolute -right-12 -bottom-20 h-48 w-48 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
							</div>

							<div className="relative flex flex-col gap-4 sm:gap-5">
								{focusAreas.map(
									({ icon: Icon, title, description, iconClassName }) => (
										<article
											key={title}
											className="group flex gap-4 rounded-2xl border border-border/60 bg-background/80 p-5 transition-all duration-300 sm:gap-5 sm:p-6 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/6 hover:shadow-md"
										>
											<div
												className={cn(
													"flex size-12 shrink-0 items-center justify-center rounded-xl border transition-colors",
													iconClassName,
												)}
											>
												<Icon className="size-6" aria-hidden />
											</div>
											<div className="min-w-0 flex-1 pt-0.5">
												<h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
													{title}
												</h3>
												<p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
													{description}
												</p>
											</div>
										</article>
									),
								)}
							</div>

							<div className="relative mt-6 flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/8 p-4 sm:mt-8 sm:p-5 dark:border-primary/35 dark:bg-primary/12">
								<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_28px_-6px] shadow-primary/50">
									<Stethoscope className="size-5" aria-hidden />
								</div>
								<p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
									Specialist-led sessions designed around what you actually need
									to know.
								</p>
							</div>
						</div>
					</div>

					<div className="order-1 flex h-full lg:order-2">
						<div className="flex h-full w-full flex-col rounded-3xl border border-border/70 bg-card/70 p-6 backdrop-blur-sm sm:p-8">
							<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
								<GraduationCap className="size-4" aria-hidden />
								Academic Affairs
							</div>

							<h2
								id="academic-overview-heading"
								className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
							>
								Academic Affairs at{" "}
								<Cover className="text-3xl sm:text-4xl lg:text-5xl">
									GCRAlliance
								</Cover>
							</h2>

							<p className="mt-3 text-pretty text-lg font-medium text-primary sm:text-xl">
								Board Prep Meets Clinical Depth
							</p>

							<div className="mt-6 space-y-5 text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
								<p>
									Medical school demands more than memorisation, it demands
									understanding. The GCRAlliance Academic Affairs Division
									bridges the gap between textbook knowledge and clinical
									application through structured, specialist-led teaching
									sessions designed around what you actually need to know.
								</p>
								<p>
									Whether you&apos;re building your foundations for USMLE Step
									1, sharpening your clinical reasoning for Step 2 CK, or
									deepening your understanding of high-yield cardiovascular
									topics, our Academic Affairs programming gives you direct
									access to experienced clinicians who have been exactly where
									you are.
								</p>
							</div>

							<blockquote className="mt-8 rounded-2xl border border-primary/25 bg-primary/8 p-4 text-base font-medium text-foreground sm:p-5 sm:text-lg dark:border-primary/35 dark:bg-primary/12">
								&quot;Our sessions are concise, high-yield, and built around the
								learner, not the lecture hall.&quot;
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
