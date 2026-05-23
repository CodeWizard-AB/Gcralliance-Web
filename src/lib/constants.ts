import { Building2, Globe2, Mail, Stethoscope, UserRound } from "lucide-react";
import {
	FaXTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa6";

export const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Blog", href: "/blog" },
	{ name: "Ambassadors", href: "/ambassadors" },
	{ name: "Contact Us", href: "/contact" },
];

export const tiers = [
	{
		title: "Student Member",
		points: [
			"Ideal for medical students and pre-med researchers beginning their academic research journey",
			"Access guided webinars, peer learning circles, and practical case report mentorship sessions",
			"Build confidence with step-by-step support for first abstracts, posters, and manuscript drafts",
			"Connect early with a global cardiovascular research community and collaborative student network",
			"Learn core methods, publication ethics, and scientific writing standards used in real journals",
		],
		cta: "Join as a Student Member",
		icon: UserRound,
		href: "#",
		featured: false,
	},
	{
		title: "Professional Member",
		points: [
			"Designed for residents, fellows, and early-career physicians advancing serious clinical research goals",
			"Unlock full research tools, collaboration pathways, and opportunities for congress participation worldwide",
			"Receive expert mentorship for manuscript development, journal targeting, and submission strategy planning",
			"Get priority access to multicenter initiatives, advanced workshops, and high-impact project teams",
			"Lead collaborative studies, publish stronger outcomes, and expand your long-term academic portfolio",
		],
		cta: "Join as a Professional Member",
		icon: Stethoscope,
		href: "#",
		featured: true,
	},
	{
		title: "Institutional Member",
		points: [
			"Built for universities, hospitals, and research organizations shaping future medical investigators globally",
			"Partner with GCRAlliance to expand research capacity for both students and faculty teams",
			"Co-design structured training pathways for student researchers, residents, and junior physician scholars",
			"Improve institutional visibility through collaborative publications and recognized academic research outputs",
			"Create scalable long-term partnerships that strengthen mentorship systems and research productivity together",
		],
		cta: "Partner with Us",
		icon: Building2,
		href: "#",
		featured: false,
	},
];

export const ORGANIZATION =
	"Global Cardiovascular Research Alliance (GCRAlliance)";
export const WEBSITE = "www.GCRAlliancelliance.org";
export const EMAIL = "info@GCRAlliancelliance.org";

export const contactDetails = [
	{
		icon: Building2,
		label: "Organization",
		value: ORGANIZATION,
		href: undefined,
	},
	{
		icon: Globe2,
		label: "Website",
		value: WEBSITE,
		href: `https://${WEBSITE}`,
	},
	{
		icon: Mail,
		label: "Email",
		value: EMAIL,
		href: `mailto:${EMAIL}`,
	},
] as const;

export const socialLinks = [
	{
		name: "Instagram",
		handle: "@GCRAlliancelliance",
		href: "https://instagram.com/GCRAlliancelliance",
		icon: FaInstagram,
	},
	{
		name: "LinkedIn",
		handle: "Global Cardiovascular Research Alliance",
		href: "https://www.linkedin.com/company/gcralliance",
		icon: FaLinkedin,
	},
	{
		name: "X (Twitter)",
		handle: "@GCRAlliancelliance",
		href: "https://x.com/GCRAlliancelliance",
		icon: FaXTwitter,
	},
	{
		name: "Facebook",
		handle: "GCRAlliancelliance",
		href: "https://facebook.com/GCRAlliancelliance",
		icon: FaFacebook,
	},
] as const;
