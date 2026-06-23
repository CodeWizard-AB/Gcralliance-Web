import { type LucideIcon } from "lucide-react";

export type FrequentlyAskedQuestion = {
	question: string;
	answer: string;
	icon: LucideIcon;
};

export type AcademicProgramme = {
	id: string;
	index: string;
	title: string;
	description: string;
	format: string;
	level?: string;
	icon: LucideIcon;
	iconClassName: string;
	cardClassName: string;
};
