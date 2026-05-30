"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations/contact";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ContactForm() {
	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: ContactFormSchema) {
		console.log(data);
	}

	return (
		<Card id="contact-form" className="flex h-full scroll-mt-24 flex-col">
			<CardHeader>
				<CardTitle>Send Us a Message</CardTitle>
				<CardDescription>
					Fill out the form below and our team will get back to you as soon as
					possible.
				</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent className="flex flex-1 flex-col">
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<Controller
								name="firstName"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="firstName">First Name</FieldLabel>
										<Input
											{...field}
											id="firstName"
											aria-invalid={fieldState.invalid}
											placeholder="David"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="lastName"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="lastName">Last Name</FieldLabel>
										<Input
											{...field}
											id="lastName"
											aria-invalid={fieldState.invalid}
											placeholder="Doe"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="email"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="email">Email</FieldLabel>
										<Input
											{...field}
											id="email"
											aria-invalid={fieldState.invalid}
											placeholder="david.doe@example.com"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
							<Controller
								name="phone"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<FieldLabel htmlFor="phone">Phone</FieldLabel>
										<Input
											{...field}
											id="phone"
											aria-invalid={fieldState.invalid}
											placeholder="123-456-7890"
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
						</div>
						<Controller
							name="subject"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="subject">Subject</FieldLabel>
									<Input
										{...field}
										id="subject"
										aria-invalid={fieldState.invalid}
										placeholder="I have question regarding a program"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							name="message"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="message">Message</FieldLabel>
									<Textarea
										{...field}
										id="message"
										aria-invalid={fieldState.invalid}
										placeholder="I have a question about the program"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					</FieldGroup>
					<Button type="submit" className="mt-6">
						Send Message
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
