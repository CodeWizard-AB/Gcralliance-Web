import NewsletterForm from "@/components/forms/newsletterForm";
import Hero from "@/components/pages/home/hero";
import Membership from "@/components/pages/home/membership";
import Mission from "@/components/pages/home/mission";

export default function Home() {
	return (
		<>
			<Hero />
			<Mission />
			<Membership />
			<NewsletterForm />
		</>
	);
}
