import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function Banner({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="flex items-center justify-center overflow-hidden py-10 md:py-32 relative container">
			<GridPattern
				width={60}
				height={60}
				strokeDasharray="5"
				className={cn(
					"mask-[radial-gradient(1000px_circle_at_center,white,transparent)] opacity-50 lg:opacity-80",
				)}
			/>
			<div className="text-center space-y-6 max-w-4xl">{children}</div>
		</section>
	);
}
