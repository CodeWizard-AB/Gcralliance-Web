import { Button } from "@/components/ui/button";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import NavigationSheet from "./navigation-sheet";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {
	return (
		<nav className="h-16 md:h-20 border-b bg-background">
			<div className="mx-auto flex h-full container items-center justify-between px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-12">
					<Logo />

					{/* Desktop Menu */}
					<NavMenu className="hidden md:block" />
				</div>

				<div className="flex items-center gap-3">
					<Button>Join Our Community</Button>
					<AnimatedThemeToggler />

					{/* Mobile Menu */}
					<div className="md:hidden">
						<NavigationSheet />
					</div>
				</div>
			</div>
		</nav>
	);
}
