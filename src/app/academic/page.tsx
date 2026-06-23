import Faq from "@/components/layout/common/faq";
import AcademicBanner from "@/components/pages/academic/academic-banner";
import AcademicOverview from "@/components/pages/academic/academic-overview";
import AcademicProgrammes from "@/components/pages/academic/academic-programmes";
import AcademicBenefits from "@/components/pages/academic/academic-benefits";
import { academicFaqs } from "@/lib/constants";

export default function AcademicPage() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AcademicBanner />
			<AcademicOverview />
			<AcademicProgrammes />
			<AcademicBenefits />
			<Faq
				faqs={academicFaqs}
				title="Academic FAQs"
				description="Find answers to common questions about our academic programs and resources"
			/>
		</section>
	);
}
