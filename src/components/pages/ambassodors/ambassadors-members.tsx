import { Cover } from "@/components/ui/cover";
import { sanity } from "@/lib/sanity";
import { Globe2, MapPin } from "lucide-react";
import Image from "next/image";

export default async function AmbassadorsMembers() {
	const ambassodors = await sanity.fetch(
		'*[_type == "ambassador"]{name, country, "imageUrl": photo.asset->url}',
	);

	return (
		<section
			id="ambassadors-members"
			className="scroll-mt-24 overflow-hidden"
			aria-labelledby="ambassadors-members-heading"
		>
			<div className="mx-auto max-w-3xl text-center">
				<div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
					<Globe2 className="size-4" aria-hidden />
					Leadership Network
				</div>
				<h2
					id="ambassadors-members-heading"
					className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
				>
					<Cover className="text-3xl sm:text-4xl lg:text-5xl">
						Our Ambassadors
					</Cover>
				</h2>
				<p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
					A diverse community of student leaders and medical professionals
					united by a passion for cardiovascular research
				</p>
			</div>

			<div className="mt-10 md:mt-14 grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
				{ambassodors.map(
					(member: { name: string; country: string; imageUrl: string }) => (
						<div key={member.name}>
							<Image
								alt={member.name}
								className="aspect-square w-full rounded-lg bg-secondary object-cover object-top"
								height={600}
								src={member.imageUrl}
								width={600}
							/>
							<h3 className="mt-4 font-medium text-lg">{member.name}</h3>
							<div className="flex gap-2 items-center">
								<MapPin className="text-primary" size={20} />
								<p>{member.country}</p>
							</div>
						</div>
					),
				)}
			</div>
		</section>
	);
}
