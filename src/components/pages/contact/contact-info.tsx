import Link from "next/link";
import { MapPin, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactDetails, socialLinks } from "@/lib/constants";

export default function ContactInfo() {
	return (
		<div className="flex h-full flex-col gap-6">
			<header>
				<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
					<MapPin className="size-3.5" aria-hidden />
					Contact Information
				</div>
				<h2 className="mt-3 text-xl font-medium sm:text-2xl">
					Reach GCRAlliance
				</h2>
				<p className="mt-1 text-sm text-muted-foreground">
					Connect with our team through the channels below. We welcome
					collaborations, membership inquiries, and general questions.
				</p>
			</header>

			<ul className="space-y-3" aria-label="Contact details">
				{contactDetails.map((detail) => (
					<li key={detail.label}>
						<ContactDetailRow {...detail} />
					</li>
				))}
			</ul>

			<div className="mt-auto rounded-2xl border border-border/70 bg-muted/40 p-5">
				<div className="flex items-center gap-2 text-sm font-semibold text-foreground">
					<Share2 className="size-4 text-primary" aria-hidden />
					Social Media
				</div>
				<p className="mt-1 text-sm text-muted-foreground">
					Follow us for research highlights, events, and community updates.
				</p>
				<div
					className="mt-4 flex flex-wrap items-center gap-2"
					role="list"
					aria-label="Social media profiles"
				>
					{socialLinks.map(({ name, handle, href, icon: Icon }) => (
						<Link
							key={name}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							role="listitem"
							aria-label={`${name}: ${handle}`}
							title={handle}
							className={cn(
								"flex size-11 items-center justify-center rounded-xl border border-border/80 bg-background text-muted-foreground transition-all duration-300",
								"hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-sm",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
							)}
						>
							<Icon className="size-5" />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

function ContactDetailRow({
	icon: Icon,
	label,
	value,
	href,
}: (typeof contactDetails)[number]) {
	const content = (
		<>
			<p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
				{label}
			</p>
			<p
				className={cn(
					"mt-0.5 text-sm font-medium text-foreground sm:text-base",
					href && "transition-colors group-hover:text-primary",
				)}
			>
				{value}
			</p>
		</>
	);

	return (
		<div className="group flex gap-4 rounded-2xl border border-border/70 bg-background/60 p-4 transition-all duration-300 hover:border-primary/25 hover:bg-background hover:shadow-sm">
			<div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
				<Icon className="size-5" aria-hidden />
			</div>
			<div className="min-w-0 flex-1">
				{href ? (
					<Link
						href={href}
						className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
						{...(href.startsWith("http") && {
							target: "_blank",
							rel: "noopener noreferrer",
						})}
					>
						{content}
					</Link>
				) : (
					content
				)}
			</div>
		</div>
	);
}
