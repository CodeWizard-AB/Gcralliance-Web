import {
	Award,
	Building2,
	Compass,
	Eye,
	Globe2,
	GraduationCap,
	Handshake,
	Mail,
	Scale,
	Stethoscope,
	UserRound,
	Users,
} from "lucide-react";
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
] as const;

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
] as const;

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

export const contactOptions = [
	{
		title: "Membership Inquiries",
		description:
			"Interested in joining GCRAlliance or learning about membership tiers?",
		icon: UserRound,
		links: [
			{ label: "Membership Page", href: "/#membership" },
			{ label: "send us a message above", href: "#contact-form", form: true },
		],
	},
	{
		title: "Research & Mentorship Inquiries",
		description:
			"Looking to start or continue your research journey with GCRAlliance?",
		icon: Compass,
		links: [
			{ label: "Research Mentorship Page", href: "/#mission" },
			{ label: "reach out directly", href: "#contact-form", form: true },
		],
	},
	{
		title: "Ambassador Program Inquiries",
		description: "Want to represent GCRAlliance in your region?",
		icon: Users,
		links: [
			{ label: "Ambassadors Page", href: "/ambassadors" },
			{
				label: "contact us via the form above",
				href: "#contact-form",
				form: true,
			},
		],
	},
	{
		title: "Institutional Partnerships",
		description:
			"Is your university or hospital interested in collaborating with GCRAlliance?",
		icon: Building2,
		links: [
			{
				label: "Send us a message",
				href: "#contact-form",
				form: true,
				note: 'with the subject line "Institutional Partnership."',
			},
		],
	},
] as const;

export const foundationalPillarsSection = {
	eyebrow: "What We Stand On",
	heading: "Our Foundational Pillars",
	description:
		"Five principles that shape every fellowship, mentorship pathway, and collaboration we build across the alliance.",
} as const;

export const foundationalPillars = [
	{
		id: "equity",
		index: "01",
		title: "Uncompromising Equity",
		body: "We declare that access to scientific discovery is a right, not a privilege. We engineer robust pathways for scholars of all backgrounds through subsidized fellowships, elite mentorship, and universally accessible clinical resources.",
		icon: Scale,
	},
	{
		id: "excellence",
		index: "02",
		title: "Absolute Excellence",
		body: "We hold our methodology, our mentorship, and our community to the most exacting academic and ethical standards. Every manuscript, symposium, and collaboration is a testament to superior quality.",
		icon: Award,
	},
	{
		id: "collaboration",
		index: "03",
		title: "Strategic Collaboration",
		body: "The most revolutionary breakthroughs occur at the nexus of diverse intellects. We actively forge alliances across borders, disciplines, and prestigious institutions to accelerate clinical discovery.",
		icon: Handshake,
	},
	{
		id: "education",
		index: "04",
		title: "Advanced Education",
		body: "From intricate case report masterclasses to international academic congresses, our commitment to forging scientific confidence and profound research literacy is relentless.",
		icon: GraduationCap,
	},
	{
		id: "impact",
		index: "05",
		title: "Global Impact",
		body: "The true measure of our work is the lives it ultimately transforms. We strategically align our research architecture with the most pressing cardiovascular disease priorities worldwide.",
		icon: Globe2,
	},
] as const;

export const missionVisions = [
	{
		label: "Our Mission",
		icon: Compass,
		body: "To unequivocally democratize access to cardiovascular research by uniting aspiring medical professionals with world-class mentorship, elite resources, and global networks transcending geography, background, and institutional limitations.",
		cardClassName:
			"border-primary/30 bg-linear-to-br from-primary/12 via-primary/5 to-transparent hover:border-primary/40",
		iconClassName:
			"border-primary/30 bg-primary/15 text-primary group-hover:border-primary/40 group-hover:bg-primary/20",
	},
	{
		label: "Our Vision",
		icon: Eye,
		body: "A future where every brilliant medical mind possesses an unimpeded pathway to pioneer cardiovascular science and profoundly elevate global patient outcomes.",
		cardClassName:
			"border-chart-2/35 bg-linear-to-br from-chart-2/15 via-chart-2/5 to-transparent hover:border-chart-2/45 dark:border-chart-5/35 dark:from-chart-5/15 dark:via-chart-5/5 dark:hover:border-chart-5/45",
		iconClassName:
			"border-chart-2/35 bg-chart-2/15 text-chart-2 group-hover:border-chart-2/45 group-hover:bg-chart-2/20 dark:border-chart-5/35 dark:bg-chart-5/15 dark:text-chart-5 dark:group-hover:border-chart-5/45 dark:group-hover:bg-chart-5/20",
	},
] as const;
