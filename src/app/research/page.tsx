import Faq from "@/components/layout/common/faq";
import ResearchBanner from "@/components/pages/research/research-banner";
import ResearchSupport from "@/components/pages/research/research-support";

export default function Research() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<ResearchBanner />
			<ResearchSupport />
			<Faq />
		</section>
	);
}
