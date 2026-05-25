import AboutBanner from "@/components/pages/about/about-banner";
import MissionVision from "@/components/pages/about/mission-vision";

export default function AboutPage() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AboutBanner />
			<MissionVision />
		</section>
	);
}
