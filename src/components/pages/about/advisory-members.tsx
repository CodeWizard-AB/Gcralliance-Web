import { Cover } from "@/components/ui/cover";
import TeamMember from "./team-member";
import { sanity } from "@/lib/sanity";
import { Brain } from "lucide-react";

export default async function AdvisoryMembers() {
	const advisoryMembers = await sanity.fetch(
		'*[_type == "teamMember" && department == "advisoryBoard"] | order(displayOrder asc){name, title, "imageUrl": photo.asset->url}',
	);

	return (
		<section
			id="advisory-members"
			className="flex scroll-mt-24 items-center justify-center overflow-hidden mt-24 md:mt-32"
			aria-labelledby="advisory-members-heading"
		>
			<div className="container relative mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<Brain className="size-4" aria-hidden />
						Our Advisory
					</div>
					<h2
						id="advisory-members-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						Meet Our{" "}
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">
							Advisory Board
						</Cover>
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						Our esteemed Advisory Board comprises veteran physicians,
						extensively published researchers, and visionary academic leaders
						who provide authoritative clinical oversight, expert counsel, and
						profound institutional credibility
					</p>
				</div>

				<TeamMember members={advisoryMembers} />
			</div>
		</section>
	);
}
