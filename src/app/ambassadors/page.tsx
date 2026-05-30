import NewsletterForm from "@/components/forms/newsletterForm";
import Faq from "@/components/layout/common/faq";
import AmbassadorsBanner from "@/components/pages/ambassodors/ambassadors-banner";
import AmbassadorsMembers from "@/components/pages/ambassodors/ambassadors-members";
import { ambassadorFaqs } from "@/lib/constants";

export default function Ambassadors() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AmbassadorsBanner />
			<AmbassadorsMembers />
			<Faq
				faqs={ambassadorFaqs}
				title="Ambassador FAQs"
				description="Find answers to common questions about eligibility, responsibilities, benefits, and the application process for becoming a GCRAlliance Ambassador"
			/>
			<NewsletterForm
				title=" Be the First to Know About Ambassador Opportunities
"
				description="New ambassador openings, regional events, and global health initiatives — delivered straight to your inbox."
				buttonText="Join the GCRAlliance Newsletter
"
				privacyText="No spam. Just research and community.
"
				placeholder="Enter your email"
			/>
		</section>
	);
}
