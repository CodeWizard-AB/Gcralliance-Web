import Banner from "@/components/layout/common/banner";
import { Cover } from "@/components/ui/cover";

export default function AboutBanner() {
	return (
		<Banner>
			<Cover>
				<h1 className="text-5xl font-bold">Who We Are</h1>
			</Cover>
			<p className="text-lg text-muted-foreground">
				A Global Alliance Dedicated to Advancing Cardiovascular Science and
				Cultivating Tomorrow&apos;s Medical Leaders
			</p>
		</Banner>
	);
}
