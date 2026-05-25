import { Cover } from "@/components/ui/cover";
import { supports } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function ResearchSupport() {
	return (
		<section
			id="research-support"
			className="flex scroll-mt-24 pb-20 md:pb-32 items-center justify-center overflow-hidden"
			aria-labelledby="research-support-heading"
		>
			<div className="container relative mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<ShieldCheck className="size-4" aria-hidden />
						Dedicated Support
					</div>
					<h2
						id="research-support-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						Comprehensive Research{" "}
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">Support</Cover>
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						You&apos;re never alone in your research journey at GCRAlliance.
					</p>
				</div>

				<div className="mt-10 md:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{supports.map((support, index) => (
						<div
							className="relative overflow-hidden rounded-xl border bg-card p-6 dark:border-card-foreground/7"
							key={index}
						>
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-primary/10">
								<support.icon />
							</div>
							<h3 className="mt-5 font-medium text-lg tracking-[-0.005em]">
								{support.title}
							</h3>
							<p className="mt-2 text-foreground/80">{support.description}</p>

							<div
								className="absolute inset-0 -top-px z-0"
								style={{
									backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
									backgroundSize: "20px 20px",
									backgroundPosition: "0 0, 0 0",
									maskImage: `
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 100% 0%, #000 50%, transparent 100%)
      `,
									WebkitMaskImage: `
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      `,
									maskComposite: "intersect",
									WebkitMaskComposite: "source-in",
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
