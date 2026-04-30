export default function Membership() {
	return (
		<section className="flex items-center justify-center overflow-hidden">
			<div className="mx-auto relative grid w-full max-w-(--breakpoint-xl) items-stretch gap-8 px-6 md:gap-12 lg:auto-rows-fr lg:grid-cols-2">
				<div className="relative order-2 h-full lg:order-1">
					<div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
					<div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-chart-2/20 blur-3xl dark:bg-chart-2/15" />
				</div>
			</div>
		</section>
	);
}
