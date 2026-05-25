import Banner from "@/components/layout/common/banner";
import { Cover } from "@/components/ui/cover";

export default function ResearchBanner() {
	return (
		<Banner>
			<h1 className="text-5xl font-bold">
				<Cover>Research</Cover> at the Heart of Everything We Do
			</h1>
			<p className="text-lg text-muted-foreground">
				A Global Alliance Dedicated to Advancing Cardiovascular Science and
				Cultivating Tomorrow&apos;s Medical Leaders
			</p>
		</Banner>
	);
}
