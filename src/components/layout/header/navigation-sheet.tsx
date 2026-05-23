"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import { useState } from "react";

export default function NavigationSheet() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button size="icon" variant="outline">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className="px-6 py-3">
				<Logo />
				<NavMenu
					className="mt-6 [&>div]:h-full"
					orientation="vertical"
					onLinkClick={() => setOpen(false)}
				/>
			</SheetContent>
		</Sheet>
	);
}
