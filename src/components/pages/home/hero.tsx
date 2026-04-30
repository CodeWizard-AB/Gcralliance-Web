import { ArrowUpRight, PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video } from "@imagekit/next";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Stats from "./Stats";

export default function Hero() {
	return (
		<section className="flex items-center justify-center overflow-hidden">
			<div className="mx-auto container relative grid gap-12 px-6 lg:grid-cols-2">
				<Spotlight
					className="-top-40 left-0 md:top-0 md:-left-40 hidden dark:block"
					fill="white"
				/>
				<Spotlight
					className="-top-40 left-0 md:-top-10 md:-left-40 dark:hidden"
					fill="red"
				/>
				<div className="my-auto lg:py-20">
					<div className="flex justify-center md:justify-start">
						<Badge
							asChild
							className="rounded-full border-border py-4 px-4"
							variant="secondary"
						>
							<Link href="#">
								Advancing Cardiovascular Research{" "}
								<ArrowUpRight className="ml-1 size-4" />
							</Link>
						</Badge>
					</div>
					<h1 className="mt-6 max-w-[17ch] font-satoshi font-bold text-4xl leading-[1.2]! tracking-tight md:text-5xl md:text-left text-center lg:text-[2.75rem] xl:text-[4rem]">
						Empowering the Next Generation of
						<Cover>Medical Minds</Cover>
					</h1>
					<p className="mt-6 text-center md:text-left max-w-[60ch] text-foreground/80 text-lg">
						The Global Cardiovascular Research Alliance connects aspiring
						medical professionals with world-class mentors, cutting-edge
						research, and a global community committed to transforming heart
						health.
					</p>
					<div className="mt-12 flex items-center flex-wrap justify-center md:justify-start gap-4 mb-8">
						<Button className="text-base" size="lg">
							Explore Our Research
							<ArrowUpRight className="h-5! w-5!" />
						</Button>
						<Button
							className="text-base shadow-none"
							size="lg"
							variant="outline"
						>
							<PersonStandingIcon className="h-5! w-5!" />
							Become a Member
						</Button>
					</div>
					<Stats />
					<div className="flex flex-row items-center justify-center md:justify-start mt-10 w-full">
						<AnimatedTooltip items={people} />
					</div>
				</div>
				<div className="aspect-video w-full rounded-xl bg-accent lg:aspect-auto lg:w-250 lg:rounded-none">
					<Video
						urlEndpoint="https://ik.imagekit.io/gcralliance"
						src="/hero.mp4"
						alt="Hero Video"
						className="h-full w-full object-cover"
						loop
						autoPlay
						muted
					/>
				</div>
			</div>
		</section>
	);
}

const people = [
	{
		id: 1,
		name: "John Doe",
		designation: "Software Engineer",
		image:
			"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
	},
	{
		id: 2,
		name: "Robert Johnson",
		designation: "Product Manager",
		image:
			"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 3,
		name: "Jane Smith",
		designation: "Data Scientist",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 4,
		name: "Emily Davis",
		designation: "UX Designer",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
	},
	{
		id: 5,
		name: "Tyler Durden",
		designation: "Soap Developer",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
	},
	{
		id: 6,
		name: "Dora",
		designation: "The Explorer",
		image:
			"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
	},
];
