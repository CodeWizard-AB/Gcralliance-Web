import Image from "next/image";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/">
			<Image
				src="https://ik.imagekit.io/gcralliance/gcra-logo-1.jpg"
				alt="Gcralliance Logo"
				width={50}
				height={50}
				loading="eager"
			/>
		</Link>
	);
}
