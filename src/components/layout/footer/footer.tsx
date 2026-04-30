import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

export default function Footer() {
	return (
		<div className="flex flex-col mt-16 md:mt-32">
			<footer className="border-t">
				<div className="mx-auto container">
					<div className="flex flex-col items-center justify-start py-12">
						{/* Logo */}
						<Image
							src="https://ik.imagekit.io/gcralliance/gcra-logo-2.jpg?updatedAt=1777451220731"
							alt="Official Gcralliance Logo"
							width={200}
							height={200}
						/>

						<ul className="mt-6 px-6 flex flex-wrap items-center justify-center gap-4">
							{navLinks.map(({ name, href }) => (
								<li key={name}>
									<Link
										className="text-muted-foreground hover:text-foreground"
										href={href}
									>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<Separator />
					<div className="flex flex-col-reverse items-center justify-center gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
						{/* Copyright */}
						<span className="text-muted-foreground">
							&copy; {new Date().getFullYear()}{" "}
							<Link href="/" target="_blank">
								Global Cardiovascular Research Alliance
							</Link>
							. All rights reserved.
						</span>

						{/* <div className="flex items-center gap-5 text-muted-foreground"></div> */}
					</div>
				</div>
			</footer>
		</div>
	);
}
