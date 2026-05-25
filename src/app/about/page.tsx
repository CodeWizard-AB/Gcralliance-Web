import AboutBanner from "@/components/pages/about/about-banner";
import FoundationalPillars from "@/components/pages/about/foundational-pillars";
import MembershipCta from "@/components/pages/about/membership-cta";
import MissionVision from "@/components/pages/about/mission-vision";

export default function AboutPage() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AboutBanner />
			<MissionVision />
			<FoundationalPillars />
			<MembershipCta />
		</section>
	);
}
