import { Cover } from "@/components/ui/cover";
import { sanity } from "@/lib/sanity";
import { UsersRound } from "lucide-react";
import Image from "next/image";

export default async function TeamMember() {
	const teamMembers = await sanity.fetch(
		'*[_type == "teamMember"] | order(displayOrder asc){name, title, "imageUrl": photo.asset->url}',
	);

	return (
		<section
			id="team-member"
			className="flex scroll-mt-24 items-center justify-center overflow-hidden mt-24 md:mt-32"
			aria-labelledby="team-member-heading"
		>
			<div className="container relative mx-auto">
				<div className="mx-auto max-w-3xl text-center">
					<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
						<UsersRound className="size-4" aria-hidden />
						Our Leadership
					</div>
					<h2
						id="team-member-heading"
						className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
					>
						Meet Our
						<Cover className="text-3xl sm:text-4xl lg:text-5xl">
							Leadership
						</Cover>
					</h2>
					<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
						GCRAlliance is driven by a passionate team united by a shared
						mission to make research accessible and open doors to opportunities
						worldwide.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-8 max-sm:justify-center sm:mt-18 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
					{teamMembers.map(
						(
							member: { name: string; title: string; imageUrl: string },
							index: number,
						) => (
							<div
								className="relative flex items-center gap-x-6 gap-y-10"
								key={index}
							>
								<div className="aspect-square overflow-hidden rounded-lg sm:aspect-4/5">
									<Image
										alt={member.name}
										className="size-full object-cover object-top"
										src={member.imageUrl}
										width={600}
										height={600}
									/>
								</div>
								<div className="absolute right-0 bottom-0 left-0 isolate overflow-hidden rounded-b-lg bg-linear-to-t from-foreground/90 via-foreground/80 p-4 pt-16">
									<p className="font-medium text-background text-lg">
										{member.name}
									</p>
									<p className="mt-0.5 font-medium text-background/75 text-sm">
										{member.title}
									</p>
								</div>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
}
