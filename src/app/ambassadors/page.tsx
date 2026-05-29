import AmbassadorsBanner from "@/components/pages/ambassodors/ambassadors-banner";
import AmbassadorsMembers from "@/components/pages/ambassodors/ambassadors-members";

export default function Ambassadors() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<AmbassadorsBanner />
			<AmbassadorsMembers />
		</section>
	);
}
