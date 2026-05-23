import Link from "next/link";
import { ArrowUpRight, MessageSquareMore } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactOptions } from "@/lib/constants";

type ContactOption = (typeof contactOptions)[number];
type ContactOptionLinkItem = ContactOption["links"][number];

export default function ContactAdditionals() {
	return (
		<section
			className="mt-4 border-t border-border/70 pt-10"
			aria-labelledby="additional-contact-heading"
		>
			<div className="max-w-2xl">
				<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
					<MessageSquareMore className="size-3.5" aria-hidden />
					Additional Contact Options
				</div>
				<h2
					id="additional-contact-heading"
					className="mt-3 text-xl font-medium sm:text-2xl"
				>
					How can we help you?
				</h2>
				<p className="mt-1 text-sm text-muted-foreground sm:text-base">
					Choose the path that best matches your inquiry. Each option links to
					the right page or our contact form.
				</p>
			</div>

			<ul className="mt-8 grid gap-4 sm:grid-cols-2">
				{contactOptions.map((option) => (
					<li key={option.title}>
						<ContactOptionCard {...option} />
					</li>
				))}
			</ul>
		</section>
	);
}

function ContactOptionCard({
	title,
	description,
	icon: Icon,
	links,
}: ContactOption) {
	const [primaryLink, secondaryLink] = links;

	return (
		<article
			className={cn(
				"group flex h-full flex-col rounded-2xl border border-border/70 bg-background/60 p-5 transition-all duration-300",
				"hover:border-primary/25 hover:bg-background hover:shadow-sm",
			)}
		>
			<div className="flex items-start gap-4">
				<div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/15">
					<Icon className="size-5" aria-hidden />
				</div>
				<div className="min-w-0 flex-1">
					<h3 className="text-base font-semibold text-foreground sm:text-lg">
						{title}
					</h3>
					<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
						{description}
					</p>
				</div>
			</div>

			<div className="mt-5 flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 px-3.5 py-3 text-sm leading-relaxed text-foreground/90">
				<ArrowUpRight
					className="mt-0.5 size-4 shrink-0 text-primary"
					aria-hidden
				/>
				<p>
					{secondaryLink ? (
						<>
							Visit our <ContactOptionLink {...primaryLink} /> or{" "}
							<ContactOptionLink {...secondaryLink} />.
						</>
					) : (
						<>
							<ContactOptionLink {...primaryLink} />
							{"note" in primaryLink && primaryLink.note ? (
								<span className="text-muted-foreground">
									{" "}
									{primaryLink.note}
								</span>
							) : null}
							.
						</>
					)}
				</p>
			</div>
		</article>
	);
}

function ContactOptionLink({ label, href }: ContactOptionLinkItem) {
	const isExternal = href.startsWith("http");

	return (
		<Link
			href={href}
			className={cn(
				"font-medium text-primary underline-offset-4 transition-colors",
				"hover:text-primary/80 hover:underline",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm",
			)}
			{...(isExternal && {
				target: "_blank",
				rel: "noopener noreferrer",
			})}
		>
			{label}
		</Link>
	);
}
