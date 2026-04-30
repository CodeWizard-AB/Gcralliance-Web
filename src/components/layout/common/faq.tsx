import {
	CircleDollarSign,
	Clock,
	FileText,
	GraduationCap,
	type LucideIcon,
	ShieldPlus,
	Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

type FrequentlyAskedQuestion = {
	question: string;
	answer: string;
	icon: LucideIcon;
};

const faqs: FrequentlyAskedQuestion[] = [
	{
		question:
			"Do I need prior research experience to participate in GCRA's mentorship program?",
		answer:
			"Not at all. Our program is specifically designed for beginners. We meet you exactly where you are and build your confidence step by step.",
		icon: Users,
	},
	{
		question: "What types of research can I produce through GCRA?",
		answer:
			"We primarily support case reports, literature reviews, systematic reviews, and original clinical research with a focus on cardiovascular topics.",
		icon: FileText,
	},
	{
		question: "How long does it take to publish a paper with GCRA's help?",
		answer:
			"Timelines vary depending on the study type and journal requirements, but most members publish their first case report within 3-6 months of starting the process.",
		icon: Clock,
	},
	{
		question: "Is my research confidential?",
		answer:
			"Yes. All research discussions, drafts, and patient information shared within the mentorship program are treated with strict confidentiality.",
		icon: ShieldPlus,
	},
	{
		question: "Are there free or discounted research mentorship options?",
		answer:
			"Yes. GCRA is committed to equity. We offer subsidized and fully free mentorship access for students from low- and middle-income countries and underserved communities.",
		icon: CircleDollarSign,
	},
	{
		question:
			"Can I participate in research if I'm not a medical student yet?",
		answer:
			"Pre-medical students and undergraduates interested in cardiovascular research are welcome to apply. Contact us to discuss your background and goals.",
		icon: GraduationCap,
	},
];

export default function Faq() {
	return (
		<section className="container mx-auto">
			<div className="px-6 text-center">
				<h2 className="text-balance text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
					Frequently Asked Questions
				</h2>
				<p className="mt-3 text-balance text-center text-lg text-muted-foreground md:text-2xl md:tracking-[-0.015em]">
					Find answers to common questions about our products and services
				</p>

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
