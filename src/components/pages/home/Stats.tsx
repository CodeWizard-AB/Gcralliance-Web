import { cn } from "@/lib/utils";

const data = [
	{ name: "Research Projects", value: "100+" },
	{ name: "Executive Members", value: "25+" },
	{ name: "Senior Ambassadors", value: "100+" },
];

export default function Stats() {
	return (
		<div className="flex items-center justify-center md:justify-start">
			{data.map((item, index) => (
				<div
					key={item.name}
					className={cn(
						index === 0 ? "border-0" : "border-l pl-6",
						"border-dotted border-border",
						index === data.length - 1 ? "pr-0" : "pr-6",
					)}
				>
					<div className="tabular-nums w-full flex-none text-xl md:text-3xl font-semibold tracking-tight text-foreground">
						{item.value}
					</div>
					<div className="text-sm font-medium text-muted-foreground">
						{item.name}
					</div>
				</div>
			))}
		</div>
	);
}
