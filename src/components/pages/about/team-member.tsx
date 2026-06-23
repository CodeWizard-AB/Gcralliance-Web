import Image from "next/image";

export default async function TeamMember({
	members,
}: {
	members: { name: string; title: string; imageUrl: string }[];
}) {
	return (
		<div className="mt-12 grid grid-cols-1 gap-8 max-sm:justify-center sm:mt-18 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
			{members.map((member, index) => (
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
						<p className="font-medium text-background text-lg">{member.name}</p>
						<p className="mt-0.5 font-medium text-background/75 text-sm">
							{member.title}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
