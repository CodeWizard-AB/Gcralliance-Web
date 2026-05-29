import NewsletterForm from "@/components/forms/newsletterForm";
import Faq from "@/components/layout/common/faq";
import ResearchBanner from "@/components/pages/research/research-banner";
import ResearchProcess from "@/components/pages/research/research-process";
import ResearchSupport from "@/components/pages/research/research-support";

export default function Research() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<ResearchBanner />
			<ResearchProcess />
			<ResearchSupport />
			<Faq />
			<NewsletterForm />
		</section>
	);
}
