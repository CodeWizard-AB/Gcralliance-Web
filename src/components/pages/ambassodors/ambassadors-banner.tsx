import Banner from "@/components/layout/common/banner";
import { Cover } from "@/components/ui/cover";

export default function AmbassadorsBanner() {
	return (
		<Banner>
			<h1 className="text-5xl leading-normal font-bold">
				Meet the GCRAlliance <Cover>Global Ambassadors</Cover>
			</h1>
			<p className="text-lg text-muted-foreground">
				Our Ambassadors are the beating heart of the alliance, passionate
				student leaders and young clinicians who champion cardiovascular
				research access in their communities, universities, and countries
			</p>
		</Banner>
	);
}
