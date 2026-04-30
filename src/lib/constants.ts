import { Building2, Stethoscope, UserRound } from "lucide-react";

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
]
