"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";
import { FormEvent, useState } from "react";

type NewsletterFormProps = {
	className?: string;
	title?: string;
	description?: string;
	placeholder?: string;
	buttonText?: string;
	privacyText?: string;
	defaultEmail?: string;
	onSubmit?: (email: string) => void | Promise<void>;
	loading?: boolean;
};

export default function NewsletterForm({
	className,
	title = "Stay Connected",
	description = "Join thousands of medical professionals receiving the GCRAlliance newsletter packed with research highlights, event invitations, member spotlights, and career tips",
	placeholder = "Enter your email address",
	buttonText = "Subscribe Now",
	privacyText = "We respect your privacy. Unsubscribe at any time.",
	defaultEmail = "",
	onSubmit,
	loading = false,
}: NewsletterFormProps) {
	const [email, setEmail] = useState(defaultEmail);
	const [isSubmitting, setIsSubmitting] = useState(false);

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (!email.trim()) return;

		if (!onSubmit) return;

		setIsSubmitting(true);
		try {
			await onSubmit(email.trim());
		} finally {
			setIsSubmitting(false);
		}
	}

	const isDisabled = loading || isSubmitting;

	return (
		<section
			className={cn(
				"flex items-center justify-center overflow-hidden",
				className,
			)}
		>
			<div className="mx-auto relative w-full max-w-(--breakpoint-xl) px-6">
				<div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10">
					<div className="pointer-events-none absolute inset-0">
						<div className="absolute -top-16 -left-10 h-36 w-36 rounded-full bg-primary/12 blur-3xl" />
						<div className="absolute -right-12 -bottom-20 h-44 w-44 rounded-full bg-chart-2/20 blur-3xl dark:bg-chart-5/20" />
					</div>

					<div className="relative">
						<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
							<Mail className="size-4" />
							Newsletter
						</div>

						<h2 className="mt-4 font-satoshi text-3xl font-bold tracking-tight sm:text-4xl">
							{title}
						</h2>
						<p className="mt-3 max-w-[75ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
							{description}
						</p>

						<form
							onSubmit={handleSubmit}
							className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]"
						>
							<label htmlFor="newsletter-email" className="sr-only">
								Email address
							</label>
							<input
								id="newsletter-email"
								name="email"
								type="email"
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								placeholder={placeholder}
								required
								className="h-11 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/30 sm:text-base"
							/>
							<Button
								type="submit"
								size="lg"
								disabled={isDisabled}
								className="h-11 w-full sm:w-auto"
							>
								{buttonText}
								<SendHorizonal className="size-4" />
							</Button>
						</form>

						<p className="mt-3 text-xs text-muted-foreground sm:text-sm">
							{privacyText}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
