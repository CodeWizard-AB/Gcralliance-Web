import { Cover } from "@/components/ui/cover";
import TeamMember from "./team-member";
import { sanity } from "@/lib/sanity";
import { Crown } from "lucide-react";

export default async function ExecutiveMembers() {
	const executiveMembers = await sanity.fetch(
		'*[_type == "teamMember" && department == "executiveCommittee"] | order(displayOrder asc){name, title, "imageUrl": photo.asset->url}',
	);

	return (
		<section
			id="executive-members"
			className="flex scroll-mt-24 items-center justify-center overflow-hidden mt-24 md:mt-32"
			aria-labelledby="executive-members-heading"
		>
			<div className="container relative mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<Crown className="size-4" aria-hidden />
						Our Executive
					</div>
					<h2
						id="executive-members-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						Meet Our{" "}
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">
							Executive Committee
						</Cover>
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						The GCRAlliance Executive Committee commands the strategic
						trajectory of the alliance, orchestrating high level programs and
						ensuring our operations execute the mission with absolute precision
						and integrity
					</p>
				</div>

				<TeamMember members={executiveMembers} />
			</div>
		</section>
	);
}
