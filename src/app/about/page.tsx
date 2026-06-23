import AboutBanner from "@/components/pages/about/about-banner";
import AdvisoryMembers from "@/components/pages/about/advisory-members";
import ExecutiveMembers from "@/components/pages/about/executive-members";
import FoundationalPillars from "@/components/pages/about/foundational-pillars";
import LeadershipMembers from "@/components/pages/about/leadership-members";
import MembershipCta from "@/components/pages/about/membership-cta";
import MissionVision from "@/components/pages/about/mission-vision";

export default function AboutPage() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AboutBanner />
			<MissionVision />
			<FoundationalPillars />
			<LeadershipMembers />
			<ExecutiveMembers />
			<AdvisoryMembers />
			<MembershipCta />
		</section>
	);
}
