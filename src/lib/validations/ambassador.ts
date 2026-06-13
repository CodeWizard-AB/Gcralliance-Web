import z from "zod";

// * REUSABLE FIELD RULES
const requiredString = (fieldName: string) =>
	z
		.string({ error: `${fieldName} is required` })
		.trim()
		.min(1, `${fieldName} is required`);

const wordCount = (text: string) =>
	text.trim().split(/\s+/).filter(Boolean).length;

const maxWords = (max: number, fieldName: string) =>
	z
		.string({ error: `${fieldName} is required` })
		.trim()
		.min(1, `${fieldName} is required`)
		.refine(
			(val) => wordCount(val) <= max,
			`${fieldName} must be ${max} words or fewer`,
		);

// * GRADUATION YEAR OPTIONS
const CURRENT_YEAR = new Date().getFullYear();
export const GRADUATION_YEARS = Array.from({ length: 12 }, (_, i) =>
	String(CURRENT_YEAR + i),
) as [string, ...string[]];

// * CV FILE VALIDATION
const CV_MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const CV_MIME_TYPES = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const cvSchema = z
	.instanceof(File, { message: "Please upload your CV or résumé" })
	.refine((f) => f.size > 0, "File cannot be empty")
	.refine((f) => f.size <= CV_MAX_BYTES, "File must be 5 MB or smaller")
	.refine(
		(f) => CV_MIME_TYPES.includes(f.type),
		"Only PDF, DOC, or DOCX files are accepted",
	);

// * MAIN SCHEMA
export const ambassadorApplicationSchema = z.object({
	// * SECTION 1: PERSONAL INFORMATION
	fullName: requiredString("Full name")
		.min(2, "Full name must be at least 2 characters")
		.max(100, "Full name must be 100 characters or fewer")
		.regex(/^[a-zA-Z ]+$/, "Full name can only contain letters, and spaces"),

	email: z
		.email("Please enter a valid email address")
		.max(254, "Email address is too long")
		.toLowerCase(),

	phone: z
		.string()
		.trim()
		.max(20, "Phone number must be 20 characters or fewer")
		.regex(
			/^[\+]?[\d\s\-\(\)\.]+$/,
			"Please enter a valid phone number (digits, spaces, +, -, () allowed)",
		)
		.optional()
		.or(z.literal("")),

	linkedInUrl: z
		.string()
		.trim()
		.max(200, "LinkedIn URL must be 200 characters or fewer")
		.refine(
			(val) =>
				val === "" ||
				/^https?:\/\/(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9\-_%]+\/?$/.test(
					val,
				),
			"Please enter a valid LinkedIn profile URL (e.g. https://linkedin.com/in/yourname)",
		)
		.optional()
		.or(z.literal("")),

	// * SECTION 2: ACADEMIC & PROFESSIONAL BACKGROUND
	countryOfResidence: requiredString("Country of residence")
		.min(2, "Please select a country")
		.max(100, "Invalid country selection"),

	institution: requiredString("Medical school / institution")
		.min(2, "Institution name must be at least 2 characters")
		.max(200, "Institution name must be 200 characters or fewer"),

	programDegree: requiredString("Program / degree")
		.min(2, "Program name must be at least 2 characters")
		.max(150, "Program name must be 150 characters or fewer"),

	expectedGraduationYear: z.enum(GRADUATION_YEARS, {
		error: "Please select a valid graduation year",
	}),

	// * SECTION 3: AMBASSADORS QUESTIONAIRE'
	whyAmbassador: maxWords(150, "This answer").refine(
		(val) => wordCount(val) >= 30,
		"Please provide a more detailed answer (at least 30 words)",
	),

	leadershipExperience: maxWords(150, "This answer").refine(
		(val) => wordCount(val) >= 20,
		"Please provide a more detailed answer (at least 20 words)",
	),

	promotionPlan: maxWords(150, "This answer").refine(
		(val) => wordCount(val) >= 20,
		"Please provide a more detailed answer (at least 20 words)",
	),

	timeCommitment: z.enum(["yes", "no"], { error: "Please select Yes or No" }),

	// * SECTION 4: ATTACHMENTS
	cv: cvSchema,
});

// * INFERRED TYPES
export type AmbassadorApplicationType = z.infer<
	typeof ambassadorApplicationSchema
>;

// * PER-STEP SCHEMAS
export const personalInfoSchema = ambassadorApplicationSchema.pick({
	fullName: true,
	email: true,
	phone: true,
	linkedInUrl: true,
});

export const backgroundSchema = ambassadorApplicationSchema.pick({
	countryOfResidence: true,
	institution: true,
	programDegree: true,
	expectedGraduationYear: true,
});

export const questionnaireSchema = ambassadorApplicationSchema.pick({
	whyAmbassador: true,
	leadershipExperience: true,
	promotionPlan: true,
	timeCommitment: true,
});

export const attachmentsSchema = ambassadorApplicationSchema.pick({
	cv: true,
});

// * PER-STEP INFERRED TYPES
export type PersonalInfoInput = z.infer<typeof personalInfoSchema>;
export type BackgroundInput = z.infer<typeof backgroundSchema>;
export type QuestionnaireInput = z.infer<typeof questionnaireSchema>;
export type AttachmentsInput = z.infer<typeof attachmentsSchema>;
