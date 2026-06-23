import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ArrowRight, CircleDollarSign, Globe2, UsersRound } from "lucide-react";
import Link from "next/link";

export default function MembershipCta() {
	return (
		<section
			id="membership-cta"
			className="scroll-mt-24 mt-20 md:mt-24"
			aria-labelledby="membership-cta-heading"
		>
			<div className="container relative mx-auto">
				<div className="pointer-events-none absolute inset-0 -z-10">
					<div className="absolute top-1/2 left-1/3 h-56 w-56 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl" />
					<div className="absolute top-1/2 right-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-chart-2/15 blur-3xl dark:bg-chart-5/15" />
				</div>

				<div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/12 via-card/90 to-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-12">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
						<div className="absolute -right-20 -bottom-28 h-64 w-64 rounded-full bg-chart-2/20 blur-3xl dark:bg-chart-5/15" />
						<div
							className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
							style={{
								backgroundImage:
									"radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
								backgroundSize: "24px 24px",
							}}
							aria-hidden
						/>
					</div>

					<div className="relative mx-auto max-w-3xl text-center">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
							<UsersRound className="size-4" aria-hidden />
							Membership
						</div>

						<h2
							id="membership-cta-heading"
							className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
						>
							Ready to Join the{" "}
							<Cover className="text-3xl sm:text-4xl lg:text-5xl">
								Alliance?
							</Cover>
						</h2>

						<p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
							GCRAlliance membership isn&apos;t just a subscription, it&apos;s
							an investment in your career, your research, and the future of
							cardiovascular medicine. Join a community that believes in your
							potential.
						</p>

						<div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
							<Button asChild size="lg" className="text-base">
								<Link href="/#membership">
									View Membership Options
									<ArrowRight className="size-4" aria-hidden />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-primary/25 bg-background/60 text-base shadow-none backdrop-blur-sm hover:bg-background"
							>
								<Link href="/contact#contact-form">
									<CircleDollarSign className="size-4" aria-hidden />
									Apply for a Subsidized Membership
								</Link>
							</Button>
						</div>

						<aside
							className="mx-auto mt-10 max-w-2xl border-t border-border/50 pt-8"
							aria-label="Subsidized membership availability"
						>
							<div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/6 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-5">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
									<Globe2 className="size-5" aria-hidden />
								</div>

								<div className="min-w-0 space-y-2.5 text-center sm:text-left">
									<p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
										Equity in access
									</p>
									<p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
										<span className="font-semibold text-foreground">
											Discounted and fully subsidized memberships
										</span>{" "}
										are available for students from{" "}
										<span className="font-medium text-foreground/90">
											underserved regions
										</span>
										.
									</p>
									<div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
										<span className="rounded-full border border-primary/20 bg-background/80 px-2.5 py-0.5 text-xs font-medium text-primary">
											Discounted
										</span>
										<span className="rounded-full border border-primary/20 bg-background/80 px-2.5 py-0.5 text-xs font-medium text-primary">
											Fully subsidized
										</span>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
}
