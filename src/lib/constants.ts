import {
	Award,
	Building2,
	Compass,
	Eye,
	FileEdit,
	Globe2,
	GraduationCap,
	Handshake,
	Mail,
	Presentation,
	Scale,
	Stethoscope,
	UserCheck,
	UserRound,
	Users,
	Lightbulb,
	ClipboardCheck,
	Database,
	FileText,
	BadgeCheck,
	Clock,
	ShieldPlus,
	CircleDollarSign,
	Globe,
	Clock3,
	FlaskConical,
	FileCheck,
	UserPlus,
	FileSearch,
	CalendarClock,
	ShieldCheck,
	HandHeart,
	BookOpen,
	HeartPulse,
	Brain,
	Activity,
	Pill,
} from "lucide-react";
import {
	FaXTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa6";
import { FrequentlyAskedQuestion, AcademicProgramme } from "./types";

export const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Research", href: "/research" },
	{ name: "Academic", href: "/academic" },
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
export const WEBSITE = "www.GCRAlliance.org";
export const EMAIL = "info@GCRAlliance.org";

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

export const supports = [
	{
		title: "One-on-One Mentorship",
		description:
			"Get paired with a dedicated mentor who has walked the path before you. From brainstorming to publication, your mentor is with you every step of the way.",
		icon: UserCheck,
	},
	{
		title: "Group Webinars & Workshops",
		description:
			"Participate in live, interactive sessions on case report writing, research methodology, statistical analysis, and manuscript preparation — led by published researchers and experienced clinicians.",
		icon: Presentation,
	},
	{
		title: "Peer Collaboration",
		description:
			"Connect with co-authors, reviewers, and research partners from the GCRAlliance global network. Collaboration accelerates publication and broadens your perspective.",
		icon: Users,
	},
	{
		title: "Editorial Feedback",
		description:
			"Receive structured, constructive feedback on your drafts before submission helping you put your best work forward.",
		icon: FileEdit,
	},
] as const;

export const researchProcesses = [
	{
		id: "research-question",
		index: "01",
		title: "Identify Your Research Question",
		body: "We help you discover compelling cardiovascular topics aligned with your clinical interests and the current needs of the literature. Not sure where to begin? Our mentors will guide you.",
		icon: Lightbulb,
	},
	{
		id: "study-design",
		index: "02",
		title: "Design Your Study",
		body: "From case reports to systematic reviews, our team helps you design a rigorous, publishable study with appropriate methodology and ethical considerations.",
		icon: ClipboardCheck,
	},
	{
		id: "data-analysis",
		index: "03",
		title: "Collect & Analyze Data",
		body: "Access templates, tools, and expert support for data collection and statistical analysis — no experience required to get started.",
		icon: Database,
	},
	{
		id: "manuscript-writing",
		index: "04",
		title: "Write Your Manuscript",
		body: "Our writing webinars, templates, and one-on-one feedback sessions transform raw findings into polished manuscripts ready for journal submission.",
		icon: FileText,
	},
	{
		id: "submit-publish",
		index: "05",
		title: "Submit & Publish",
		body: "We guide you through journal selection, peer review response, and the final publication process — including open-access options.",
		icon: BadgeCheck,
	},
] as const;

export const frequentFaqs: FrequentlyAskedQuestion[] = [
	{
		question:
			"Do I need prior research experience to participate in GCRA's mentorship program?",
		answer:
			"Not at all. Our program is specifically designed for beginners. We meet you exactly where you are and build your confidence step by step.",
		icon: Users,
	},
	{
		question: "What types of research can I produce through GCRA?",
		answer:
			"We primarily support case reports, literature reviews, systematic reviews, and original clinical research with a focus on cardiovascular topics.",
		icon: FileText,
	},
	{
		question: "How long does it take to publish a paper with GCRA's help?",
		answer:
			"Timelines vary depending on the study type and journal requirements, but most members publish their first case report within 3-6 months of starting the process.",
		icon: Clock,
	},
	{
		question: "Is my research confidential?",
		answer:
			"Yes. All research discussions, drafts, and patient information shared within the mentorship program are treated with strict confidentiality.",
		icon: ShieldPlus,
	},
	{
		question: "Are there free or discounted research mentorship options?",
		answer:
			"Yes. GCRA is committed to equity. We offer subsidized and fully free mentorship access for students from low- and middle-income countries and underserved communities.",
		icon: CircleDollarSign,
	},
	{
		question: "Can I participate in research if I'm not a medical student yet?",
		answer:
			"Pre-medical students and undergraduates interested in cardiovascular research are welcome to apply. Contact us to discuss your background and goals.",
		icon: GraduationCap,
	},
] as const;

export const researchFaqs: FrequentlyAskedQuestion[] = [
	{
		question:
			"Do I need prior research experience to participate in GCRAlliance's mentorship program?",
		answer:
			"Not at all. Our program is specifically designed for beginners. We meet you exactly where you are and build your confidence step by step.",
		icon: GraduationCap,
	},
	{
		question: "What types of research can I produce through GCRAlliance?",
		answer:
			"We primarily support case reports, literature reviews, systematic reviews, and original clinical research with a focus on cardiovascular topics.",
		icon: FileSearch,
	},
	{
		question:
			"How long does it take to publish a paper with GCRAlliance's help?",
		answer:
			"Timelines vary depending on the study type and journal requirements, but most members publish their first case report within 3–6 months of starting the process.",
		icon: CalendarClock,
	},
	{
		question: "Is my research confidential?",
		answer:
			"Yes. All research discussions, drafts, and patient information shared within the mentorship program are treated with strict confidentiality.",
		icon: ShieldCheck,
	},
	{
		question: "Are there free or discounted research mentorship options?",
		answer:
			"Yes. GCRAlliance is committed to equity. We offer subsidized and fully free mentorship access for students from low- and middle-income countries and underserved communities.",
		icon: HandHeart,
	},
	{
		question: "Can I participate in research if I'm not a medical student yet?",
		answer:
			"Pre-medical students and undergraduates interested in cardiovascular research are welcome to apply. Contact us to discuss your background and goals.",
		icon: BookOpen,
	},
] as const;

export const ambassadorFaqs: FrequentlyAskedQuestion[] = [
	{
		question: "Do I need research experience to become an Ambassador?",
		answer:
			"No. Enthusiasm, leadership potential, and a genuine passion for cardiovascular medicine are what matter most. We'll provide the training and support.",
		icon: UserPlus,
	},
	{
		question:
			"Is the Ambassador Program open to students outside the United States?",
		answer:
			"Absolutely. In fact, we actively encourage applications from students in underserved and underrepresented regions. Global diversity is core to what GCRAlliance stands for.",
		icon: Globe,
	},
	{
		question: "How many hours per month does the role require?",
		answer:
			"Typically 5–8 hours per month. This includes attending virtual ambassador meetings, organizing or participating in at least one local event per semester, and engaging with the GCRAlliance community online.",
		icon: Clock3,
	},
	{
		question:
			"Can I be an Ambassador and still participate in research mentorship?",
		answer:
			"Yes — and we encourage it. Many of our most impactful Ambassadors are also active researchers. Being involved in both enriches your experience and your contributions to the community.",
		icon: FlaskConical,
	},
	{
		question: "What happens after my Ambassador term ends?",
		answer:
			"Ambassadors who complete their term in good standing receive recognition, a recommendation letter, and are invited to join our Alumni Ambassador network — a lifelong connection to the GCRAlliance community.",
		icon: Award,
	},
	{
		question: "How do I apply?",
		answer:
			'Click the "Apply to Be an Ambassador" button above. Applications are reviewed on a rolling basis. Shortlisted candidates will be invited for a brief virtual interview.',
		icon: FileCheck,
	},
] as const;

export const STEPS = [
	{
		id: 1,
		label: "Personal Identity",
		title: "Personal Information",
		nextLabel: "Academic & Professional Background",
		fields: ["fullName", "email", "phone", "linkedInUrl"] as const,
	},
	{
		id: 2,
		label: "Professional Background",
		title: "Academic & Professional Background",
		nextLabel: "Ambassador Questionnaire",
		fields: [
			"countryOfResidence",
			"institution",
			"programDegree",
			"expectedGraduationYear",
		] as const,
	},
	{
		id: 3,
		label: "Ambassador Questionnaire",
		title: "Tell Us About Yourself",
		nextLabel: "Attachments",
		fields: [
			"whyAmbassador",
			"leadershipExperience",
			"promotionPlan",
			"timeCommitment",
		] as const,
	},
	{
		id: 4,
		label: "Attachments",
		title: "Upload Your CV",
		nextLabel: null,
		fields: ["cv"] as const,
	},
] as const;

export const TOTAL_STEPS = STEPS.length;

export const focusAreas = [
	{
		icon: BookOpen,
		title: "USMLE Step 1",
		description:
			"Build strong foundations with high-yield, concept-driven teaching.",
		iconClassName:
			"border-primary/25 bg-primary/10 text-primary group-hover:bg-primary/15",
	},
	{
		icon: Brain,
		title: "Step 2 CK",
		description:
			"Sharpen clinical reasoning through specialist-led case discussions.",
		iconClassName:
			"border-chart-2/30 bg-chart-2/10 text-chart-2 group-hover:bg-chart-2/15 dark:border-chart-5/30 dark:bg-chart-5/10 dark:text-chart-5",
	},
	{
		icon: HeartPulse,
		title: "Cardiovascular Topics",
		description: "Deepen understanding of high-yield cardiology content.",
		iconClassName:
			"border-primary/25 bg-primary/10 text-primary group-hover:bg-primary/15",
	},
] as const;

export const academicProgrammesSection = {
	eyebrow: "Programmes",
	heading: "Academic Programmes & Masterclasses",
	headingAccent: "Masterclasses",
	subheading:
		"Expert-Led. High-Yield. Built for Medical Students and Allied Sciences",
} as const;

export const academicProgrammes: AcademicProgramme[] = [
	{
		id: "step-1-cv-masterclass",
		index: "01",
		title: "Step 1 Cardiovascular Masterclass",
		description:
			"A focused deep-dive into the cardiovascular content most heavily tested on USMLE Step 1. Covers cardiac physiology, pharmacology, pathology, and clinical correlates — taught by physicians who know exactly how boards test this material.",
		format: "Live virtual sessions + recorded replays",
		level: "Open to all members",
		icon: HeartPulse,
		iconClassName:
			"border-primary/25 bg-primary/10 text-primary group-hover:bg-primary/15",
		cardClassName: "hover:border-primary/20 hover:bg-primary/6",
	},
	{
		id: "step-2-ck-cardiology",
		index: "02",
		title: "Step 2 CK Clinical Cardiology Series",
		description:
			"Case-based teaching sessions designed to sharpen your clinical reasoning for USMLE Step 2 CK. Each session presents real-world cardiovascular presentations and walks through diagnostic approach, management, and the high-yield teaching points behind each case.",
		format: "Weekly live case sessions",
		level: "Intermediate",
		icon: Brain,
		iconClassName:
			"border-chart-2/30 bg-chart-2/10 text-chart-2 group-hover:bg-chart-2/15 dark:border-chart-5/30 dark:bg-chart-5/10 dark:text-chart-5",
		cardClassName:
			"hover:border-chart-2/25 hover:bg-chart-2/6 dark:hover:border-chart-5/25 dark:hover:bg-chart-5/6",
	},
	{
		id: "cv-pathology-bootcamp",
		index: "03",
		title: "Cardiovascular Pathology Bootcamp",
		description:
			"From MI and heart failure to cardiomyopathies and valvular disease — this bootcamp breaks down the pathophysiology, diagnostic findings, and exam pearls for the most commonly tested cardiovascular conditions.",
		format: "4-week intensive",
		level: "Beginner to intermediate",
		icon: FlaskConical,
		iconClassName:
			"border-primary/25 bg-primary/10 text-primary group-hover:bg-primary/15",
		cardClassName: "hover:border-primary/20 hover:bg-primary/6",
	},
	{
		id: "ecg-masterclass",
		index: "04",
		title: "ECG Interpretation Masterclass",
		description:
			"A step-by-step, clinically grounded programme covering ECG interpretation from the basics through to complex arrhythmias. Perfect for students preparing for boards or clinical rotations.",
		format: "3-part live series + practice sets",
		level: "All levels",
		icon: Activity,
		iconClassName:
			"border-chart-2/30 bg-chart-2/10 text-chart-2 group-hover:bg-chart-2/15 dark:border-chart-5/30 dark:bg-chart-5/10 dark:text-chart-5",
		cardClassName:
			"hover:border-chart-2/25 hover:bg-chart-2/6 dark:hover:border-chart-5/25 dark:hover:bg-chart-5/6",
	},
	{
		id: "pharmacology-series",
		index: "05",
		title: "Pharmacology High-Yield Series",
		description:
			"A targeted review of cardiovascular pharmacology — antihypertensives, antiarrhythmics, heart failure medications, anticoagulants, and more — taught with mechanisms, mnemonics, and board-style question practice built in.",
		format: "On-demand video modules + live Q&A",
		level: "All levels",
		icon: Pill,
		iconClassName:
			"border-primary/25 bg-primary/10 text-primary group-hover:bg-primary/15",
		cardClassName: "hover:border-primary/20 hover:bg-primary/6",
	},
	{
		id: "clinical-reasoning",
		index: "06",
		title: "Clinical Reasoning & Presentation Skills",
		description:
			"Prepares students for OSCEs, shelf exams, and clinical rotations by developing structured clinical reasoning, differential diagnosis frameworks, and confident patient presentation skills in cardiology and beyond.",
		format: "Small group live sessions",
		level: "Intermediate to advanced",
		icon: Presentation,
		iconClassName:
			"border-chart-2/30 bg-chart-2/10 text-chart-2 group-hover:bg-chart-2/15 dark:border-chart-5/30 dark:bg-chart-5/10 dark:text-chart-5",
		cardClassName:
			"hover:border-chart-2/25 hover:bg-chart-2/6 dark:hover:border-chart-5/25 dark:hover:bg-chart-5/6",
	},
];
