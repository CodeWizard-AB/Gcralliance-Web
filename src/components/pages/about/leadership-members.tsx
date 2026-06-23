import { Cover } from "@/components/ui/cover";
import { sanity } from "@/lib/sanity";
import { UsersRound } from "lucide-react";
import TeamMember from "./team-member";

export default async function LeadershipMembers() {
	const leadershipMembers = await sanity.fetch(
		'*[_type == "teamMember" && department == "leadership"] | order(displayOrder asc){name, title, "imageUrl": photo.asset->url}',
	);

	return (
		<section
			id="leadership-members"
			className="flex scroll-mt-24 items-center justify-center overflow-hidden mt-24 md:mt-32"
			aria-labelledby="leadership-members-heading"
		>
			<div className="container relative mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<UsersRound className="size-4" aria-hidden />
						Our Leadership
					</div>
					<h2
						id="leadership-members-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						Meet Our{" "}
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">
							Leadership
						</Cover>
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						GCRAlliance is driven by a passionate team united by a shared
						mission to make research accessible and open doors to opportunities
						worldwide
					</p>
				</div>

				<TeamMember members={leadershipMembers} />
			</div>
		</section>
	);
}
