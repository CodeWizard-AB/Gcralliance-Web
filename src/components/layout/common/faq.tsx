import { FrequentlyAskedQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MessageCircleQuestion } from "lucide-react";

export default function Faq({
	title = "Frequently Asked Questions",
	description = "Find answers to common questions about our products and services",
	faqs,
}: {
	title?: string;
	description?: string;
	faqs: FrequentlyAskedQuestion[];
}) {
	return (
		<section className="container mx-auto">
			<div className="px-6 text-center">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<MessageCircleQuestion className="size-4" aria-hidden />
						Frequently Asked Questions
					</div>
					<h2
						id="ambassadors-members-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						{title}
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						{description}
					</p>
				</div>

				<div className="mx-auto mt-12 grid grid-cols-1 sm:mt-16 md:grid-cols-2">
					{faqs.map((faq, index) => (
						<div
							className={cn(
								"relative -ms-px -mt-px overflow-hidden border bg-card p-6 text-start",
								"first:rounded-t-lg last:rounded-b-lg md:nth-[2]:rounded-tr-lg md:nth-last-[2]:rounded-bl-lg md:last:rounded-bl-none md:first:rounded-tr-none",
							)}
							key={index}
						>
							<div className="isolate">
								<div className="flex items-center gap-2 font-medium text-lg tracking-tight">
									<faq.icon className="mr-2.5 size-5 shrink-0 text-primary" />
									{faq.question}
								</div>
								<div className="mt-2 pl-10 text-start text-base text-foreground/80">
									{faq.answer}
								</div>
							</div>

							<div
								className="absolute inset-0 z-0 -ms-px -mt-0.5"
								style={{
									backgroundImage: `
        linear-gradient(to right, oklch(from var(--card-foreground) l c h / 0.12) 1px, transparent 1px),
        linear-gradient(to bottom, oklch(from var(--card-foreground) l c h / 0.12) 1px, transparent 1px)
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
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
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
