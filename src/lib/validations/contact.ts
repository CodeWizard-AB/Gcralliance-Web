import z from "zod";

export const contactFormSchema = z.object({
	firstName: z
		.string()
		.min(1, "First name is required")
		.max(50, "First name must be less than 50 characters"),
	lastName: z
		.string()
		.min(1, "Last name is required")
		.max(50, "Last name must be less than 50 characters"),
	email: z.email(),
	phone: z
		.string()
		.min(1, "Phone number is required")
		.max(15, "Phone number must be less than 15 characters"),
	subject: z
		.string()
		.min(1, "Subject is required")
		.max(100, "Subject must be less than 100 characters"),
	message: z
		.string()
		.min(1, "Message is required")
		.max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
