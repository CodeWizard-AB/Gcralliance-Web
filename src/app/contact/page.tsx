import Banner from "@/components/layout/common/banner";
import ContactForm from "@/components/forms/contactForm";
import ContactInfo from "@/components/pages/contact/contact-info";
import ContactAdditionals from "@/components/pages/contact/contact-additionals";
import { Cover } from "@/components/ui/cover";

export default function Contact() {
	return (
		<section className="container mx-auto px-4 sm:px-6">
			<Banner>
				<Cover>
					<h1 className="text-5xl font-bold">Get in Touch</h1>
				</Cover>
				<p className="text-lg text-muted-foreground">
					Have a question, a collaboration idea, or just want to learn more
					about GCRAlliance? We&apos;d love to hear from you. Our team typically
					responds within 1-2 business days.
				</p>
			</Banner>
			<section>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
					<ContactInfo />
					<ContactForm />
				</div>
			</section>
			<section>
				<ContactAdditionals />
			</section>
		</section>
	);
}
