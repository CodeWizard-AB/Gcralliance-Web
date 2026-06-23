import AcademicBanner from "@/components/pages/academic/academic-banner";
import AcademicOverview from "@/components/pages/academic/academic-overview";
import AcademicProgrammes from "@/components/pages/academic/academic-programmes";

export default function AcademicPage() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AcademicBanner />
			<AcademicOverview />
			<AcademicProgrammes />
		</section>
	);
}
