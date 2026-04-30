"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants";

export default function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
	return (
		<NavigationMenu {...props}>
			<NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
				{navLinks.map((link) => (
					<NavigationMenuItem key={link.name}>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link href={link.href}>{link.name}</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
