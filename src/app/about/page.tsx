import AboutBanner from "@/components/pages/about/about-banner";
import FoundationalPillars from "@/components/pages/about/foundational-pillars";
import MembershipCta from "@/components/pages/about/membership-cta";
import MissionVision from "@/components/pages/about/mission-vision";
import TeamMember from "@/components/pages/about/team-member";

export default function AboutPage() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AboutBanner />
			<MissionVision />
			<TeamMember />
			<FoundationalPillars />
			<MembershipCta />
		</section>
	);
}
