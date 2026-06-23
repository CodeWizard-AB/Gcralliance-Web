import Banner from "@/components/layout/common/banner";
import { Cover } from "@/components/ui/cover";

export default function AcademicBanner() {
	return (
		<Banner>
			<h1 className="text-5xl font-bold leading-normal">
				Master the Science Behind the <Cover>Medicine</Cover>
			</h1>
			<p className="sm:text-lg text-base text-muted-foreground mt-4">
				GCRAlliance Academic Affairs delivers high-yield, expert-led
				masterclasses and study resources to help medical students conquer their
				board exams and build a foundation of clinical excellence.
			</p>
		</Banner>
	);
}
