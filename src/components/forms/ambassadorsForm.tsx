"use client";

import { useState } from "react";
import { Controller, useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Info } from "lucide-react";
import {
	ambassadorApplicationSchema,
	type AmbassadorApplicationType,
	GRADUATION_YEARS,
} from "@/lib/validations/ambassador";
import { COUNTRIES } from "@/lib/constants/countries";
import { cn } from "@/lib/utils";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { STEPS, TOTAL_STEPS } from "@/lib/constants";

const defaultValues: DefaultValues<AmbassadorApplicationType> = {
	fullName: "",
	email: "",
	phone: "",
	linkedInUrl: "",
	countryOfResidence: "",
	institution: "",
	programDegree: "",
	whyAmbassador: "",
	leadershipExperience: "",
	promotionPlan: "",
};

const inputClassName =
	"rounded-md border-0 bg-muted shadow-none focus-visible:ring-primary/30";

const selectClassName = cn(inputClassName, "w-full");

const labelClassName =
	"text-[11px] font-semibold tracking-widest text-muted-foreground uppercase";

const helperClassName = "text-xs text-muted-foreground";

function getWordCount(text: string) {
	return text.trim().split(/\s+/).filter(Boolean).length;
}

export default function AmbassadorsForm() {
	const [currentStep, setCurrentStep] = useState(0);
	const step = STEPS[currentStep];

	const form = useForm<AmbassadorApplicationType>({
		resolver: zodResolver(ambassadorApplicationSchema),
		defaultValues,
		mode: "onChange",
	});

	async function handleNext() {
		const isValid = await form.trigger([...step.fields]);
		if (isValid) {
			setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
		}
	}

	function handleBack() {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
	}

	async function onSubmit(data: AmbassadorApplicationType) {
		console.log(data);
	}

	const isLastStep = currentStep === TOTAL_STEPS - 1;

	return (
		<section className="rounded-3xl bg-muted/40 px-5 py-12 sm:px-8 md:py-16">
			<div className="grid gap-8 lg:grid-cols-[minmax(280px,320px)_1fr] lg:gap-12">
				<aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
					<div>
						<p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
							Ambassadors Program
						</p>
						<h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground">
							Apply to Be an Ambassador
						</h2>
						<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
							Please complete the following steps to submit your ambassador
							application for GCRAlliance review.
						</p>
					</div>

					<nav aria-label="Application steps" className="flex flex-col gap-2">
						{STEPS.map((item, index) => {
							const isActive = index === currentStep;
							const isCompleted = index < currentStep;

							return (
								<button
									key={item.id}
									type="button"
									onClick={() => index < currentStep && setCurrentStep(index)}
									disabled={index > currentStep}
									className={cn(
										"flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all",
										isActive && "bg-card shadow-sm ring-1 ring-border/70",
										index < currentStep && "cursor-pointer hover:bg-card/80",
										index > currentStep && "cursor-default opacity-70",
									)}
								>
									<span
										className={cn(
											"flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
											isActive &&
												"bg-primary text-primary-foreground shadow-sm",
											isCompleted &&
												"bg-primary/10 text-primary ring-1 ring-primary/20",
											!isActive &&
												!isCompleted &&
												"bg-muted text-muted-foreground ring-1 ring-border",
										)}
									>
										{isCompleted ? <Check className="size-4" /> : item.id}
									</span>
									<span
										className={cn(
											"text-sm font-medium",
											isActive ? "text-foreground" : "text-muted-foreground",
										)}
									>
										{item.label}
									</span>
								</button>
							);
						})}
					</nav>

					<div className="mt-auto rounded-xl bg-card p-4 shadow-sm ring-1 ring-border/60">
						<div className="flex gap-3">
							<Info className="mt-0.5 size-4 shrink-0 text-primary" />
							<p className="text-sm leading-relaxed text-muted-foreground">
								Typical review period:{" "}
								<span className="font-semibold text-foreground">
									3–5 business days
								</span>
								. All data is encrypted at rest and in transit.
							</p>
						</div>
					</div>
				</aside>

				<Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-lg ring-1 ring-border/50">
					<CardHeader className="border-b bg-card px-6 py-6">
						<p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
							Step {step.id} of {TOTAL_STEPS}
						</p>
						<CardTitle className="mt-1 text-2xl font-bold tracking-tight">
							{step.title}
						</CardTitle>
					</CardHeader>

					<form onSubmit={form.handleSubmit(onSubmit)}>
						<CardContent className="px-6 py-6">
							<FieldGroup className="gap-6">
								{currentStep === 0 && (
									<div className="grid gap-6 sm:grid-cols-2">
										<Controller
											name="fullName"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel
														htmlFor="fullName"
														className={labelClassName}
													>
														Full Legal Name
													</FieldLabel>
													<Input
														{...field}
														id="fullName"
														aria-invalid={fieldState.invalid}
														placeholder="Dr. Jane Smith"
														className={inputClassName}
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
													<FieldLabel
														htmlFor="email"
														className={labelClassName}
													>
														Institutional Email
													</FieldLabel>
													<Input
														{...field}
														id="email"
														type="email"
														aria-invalid={fieldState.invalid}
														placeholder="jane.smith@university.edu"
														className={inputClassName}
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
													<FieldLabel
														htmlFor="phone"
														className={labelClassName}
													>
														Phone Number
													</FieldLabel>
													<Input
														{...field}
														id="phone"
														type="tel"
														aria-invalid={fieldState.invalid}
														placeholder="+1 (555) 000-0000"
														className={inputClassName}
													/>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="linkedInUrl"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel
														htmlFor="linkedInUrl"
														className={labelClassName}
													>
														LinkedIn Profile
													</FieldLabel>
													<Input
														{...field}
														id="linkedInUrl"
														type="url"
														aria-invalid={fieldState.invalid}
														placeholder="https://linkedin.com/in/yourname"
														className={inputClassName}
													/>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
									</div>
								)}

								{currentStep === 1 && (
									<div className="grid gap-6 sm:grid-cols-2">
										<Controller
											name="countryOfResidence"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel className={labelClassName}>
														Country of Residence
													</FieldLabel>
													<Select
														value={field.value || undefined}
														onValueChange={field.onChange}
													>
														<SelectTrigger
															className={selectClassName}
															aria-invalid={fieldState.invalid}
														>
															<SelectValue placeholder="Select your country" />
														</SelectTrigger>
														<SelectContent>
															{COUNTRIES.map((country) => (
																<SelectItem key={country} value={country}>
																	{country}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="expectedGraduationYear"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel className={labelClassName}>
														Expected Graduation Year
													</FieldLabel>
													<Select
														value={field.value || undefined}
														onValueChange={field.onChange}
													>
														<SelectTrigger
															className={selectClassName}
															aria-invalid={fieldState.invalid}
														>
															<SelectValue placeholder="Select year" />
														</SelectTrigger>
														<SelectContent>
															{GRADUATION_YEARS.map((year) => (
																<SelectItem key={year} value={year}>
																	{year}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="institution"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field
													data-invalid={fieldState.invalid}
													className="sm:col-span-2"
												>
													<FieldLabel
														htmlFor="institution"
														className={labelClassName}
													>
														Medical School / Institution
													</FieldLabel>
													<Input
														{...field}
														id="institution"
														aria-invalid={fieldState.invalid}
														placeholder="University of Medicine"
														className={inputClassName}
													/>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="programDegree"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field
													data-invalid={fieldState.invalid}
													className="sm:col-span-2"
												>
													<FieldLabel
														htmlFor="programDegree"
														className={labelClassName}
													>
														Program / Degree
													</FieldLabel>
													<Input
														{...field}
														id="programDegree"
														aria-invalid={fieldState.invalid}
														placeholder="MD, MBBS, or equivalent"
														className={inputClassName}
													/>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
									</div>
								)}

								{currentStep === 2 && (
									<div className="flex flex-col gap-6">
										<Controller
											name="whyAmbassador"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel
														htmlFor="whyAmbassador"
														className={labelClassName}
													>
														Why do you want to be a GCRAlliance Ambassador?
													</FieldLabel>
													<Textarea
														{...field}
														id="whyAmbassador"
														aria-invalid={fieldState.invalid}
														placeholder="Share your motivation and goals (30–150 words)"
														className={cn(inputClassName, "min-h-28 resize-y")}
													/>
													<p className={helperClassName}>
														{getWordCount(field.value ?? "")} / 150 words
													</p>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="leadershipExperience"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel
														htmlFor="leadershipExperience"
														className={labelClassName}
													>
														Leadership & Community Experience
													</FieldLabel>
													<Textarea
														{...field}
														id="leadershipExperience"
														aria-invalid={fieldState.invalid}
														placeholder="Describe relevant leadership roles or community work (20–150 words)"
														className={cn(inputClassName, "min-h-28 resize-y")}
													/>
													<p className={helperClassName}>
														{getWordCount(field.value ?? "")} / 150 words
													</p>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="promotionPlan"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel
														htmlFor="promotionPlan"
														className={labelClassName}
													>
														How will you promote GCRAlliance?
													</FieldLabel>
													<Textarea
														{...field}
														id="promotionPlan"
														aria-invalid={fieldState.invalid}
														placeholder="Outline your outreach plan (20–150 words)"
														className={cn(inputClassName, "min-h-28 resize-y")}
													/>
													<p className={helperClassName}>
														{getWordCount(field.value ?? "")} / 150 words
													</p>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
										<Controller
											name="timeCommitment"
											control={form.control}
											render={({ field, fieldState }) => (
												<Field data-invalid={fieldState.invalid}>
													<FieldLabel className={labelClassName}>
														Can you commit 3–5 hours per month?
													</FieldLabel>
													<RadioGroup
														value={field.value ?? ""}
														onValueChange={field.onChange}
														className="flex flex-wrap gap-4"
													>
														<label
															htmlFor="time-yes"
															className="flex min-w-28 cursor-pointer items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm font-medium transition-colors has-data-checked:bg-primary/10 has-data-checked:ring-1 has-data-checked:ring-primary/30"
														>
															<RadioGroupItem
																value="yes"
																id="time-yes"
																className="size-4"
															/>
															Yes
														</label>
														<label
															htmlFor="time-no"
															className="flex min-w-28 cursor-pointer items-center gap-2 rounded-lg bg-muted px-4 py-3 text-sm font-medium transition-colors has-data-checked:bg-primary/10 has-data-checked:ring-1 has-data-checked:ring-primary/30"
														>
															<RadioGroupItem
																value="no"
																id="time-no"
																className="size-4"
															/>
															No
														</label>
													</RadioGroup>
													{fieldState.invalid && (
														<FieldError errors={[fieldState.error]} />
													)}
												</Field>
											)}
										/>
									</div>
								)}

								{currentStep === 3 && (
									<Controller
										name="cv"
										control={form.control}
										render={({
											field: { onChange, value, ...field },
											fieldState,
										}) => (
											<Field data-invalid={fieldState.invalid}>
												<FieldLabel htmlFor="cv" className={labelClassName}>
													CV / Résumé
												</FieldLabel>
												<Input
													{...field}
													id="cv"
													type="file"
													accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
													aria-invalid={fieldState.invalid}
													className={cn(
														inputClassName,
														"h-auto cursor-pointer py-2 file:mr-3 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-sm file:font-medium file:text-primary",
													)}
													onChange={(event) => {
														const file = event.target.files?.[0];
														onChange(file);
													}}
												/>
												{value instanceof File && (
													<p className={helperClassName}>
														Selected: {value.name} (
														{(value.size / 1024 / 1024).toFixed(2)} MB)
													</p>
												)}
												<p className={helperClassName}>
													PDF, DOC, or DOCX — max 5 MB
												</p>
												{fieldState.invalid && (
													<FieldError errors={[fieldState.error]} />
												)}
											</Field>
										)}
									/>
								)}
							</FieldGroup>
						</CardContent>

						<CardFooter className="flex flex-col gap-4 border-t bg-muted/20 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
							{step.nextLabel ? (
								<p className="flex items-center gap-2 text-sm text-muted-foreground">
									<span className="size-1.5 rounded-full bg-primary" />
									Next step:{" "}
									<span className="font-medium text-foreground">
										{step.nextLabel}
									</span>
								</p>
							) : (
								<p className="text-sm text-muted-foreground">
									Review your answers before submitting.
								</p>
							)}

							<div className="flex w-full gap-3 sm:w-auto">
								{currentStep > 0 && (
									<Button
										type="button"
										variant="outline"
										onClick={handleBack}
										className="flex-1 sm:flex-none"
									>
										Back
									</Button>
								)}
								{isLastStep ? (
									<Button
										type="submit"
										size="lg"
										className="flex-1 tracking-wide uppercase sm:flex-none"
									>
										Submit Application
										<ArrowRight className="size-4" />
									</Button>
								) : (
									<Button
										type="button"
										size="lg"
										onClick={handleNext}
										className="flex-1 tracking-wide uppercase sm:flex-none"
									>
										Continue Application
										<ArrowRight className="size-4" />
									</Button>
								)}
							</div>
						</CardFooter>
					</form>
				</Card>
			</div>
		</section>
	);
}
