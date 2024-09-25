import Link from "next/link";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Peshimam Mohammed Junaid - Full Stack Developer",
	description:
		"Peshimam Mohammed Junaid is a Full Stack Developer creating seamless, user-friendly digital experiences. He has contributed to projects like BanquetBliss, Fuel Delivery Bot, and Pitch Potential Predictor.",
	openGraph: {
		title: "Peshimam Mohammed Junaid - Full Stack Developer",
		description:
			"Discover the work and projects of Peshimam Mohammed Junaid, a Full Stack Developer contributing to BanquetBliss, Fuel Delivery Bot, and Pitch Potential Predictor.",
		url: "https://junaidpeshimam.com", // Replace with your actual URL
		siteName: "Junaid's Portfolio",
		images: [
			{
				url: "/ogs/ogs-bg.png", // Add the path to your Open Graph image
				width: 1200,
				height: 630,
				alt: "Peshimam Mohammed Junaid - Full Stack Developer",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Peshimam Mohammed Junaid - Full Stack Developer",
		description:
			"Explore Peshimam Mohammed Junaid’s work as a Full Stack Developer and his projects, including BanquetBliss, Fuel Delivery Bot, and Pitch Potential Predictor.",
		images: ["/ogs/ogs-bg.png"], // Add the path to your Twitter card image
	},
};

export default function Page() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tight font-["monospace"]'>
				Sup, I'm Peshimam Mohammed Junaid 👋
			</h1>

			<p className="prose prose-neutral dark:prose-invert">
				I’m a Full Stack Web Developer from Andhra Pradesh, India, working to build better and smarter web experiences.
			</p>

			<br />

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Work Life</strong>
					<br />
					My job is to create user-friendly digital experiences, and I’ve worked on various projects that showcase my technical skills and creativity. Recently, I interned as a <strong>UI/UX Intern</strong> at <strong>BanquetBliss</strong>, where I designed the complete banquet hall website. I have also developed a <strong>Fuel Delivery Bot</strong>, using Python and Google Maps API for location-based fuel delivery, and a <strong>Pitch Potential Predictor</strong> that integrates AI for evaluating business pitches.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Leadership and Community Involvement:</strong>
					<br />
					I am the Design Team Lead at <a href="https://www.tedxgpcet.com" target="_blank">TEDxGPCET</a>, where I lead the design efforts for our events and manage the branding. As a <a href="https://mvp.microsoft.com/en-US/studentambassadors/profile/745f2eb1-624a-44bb-8ac7-868e5d531857" target="_blank">Microsoft Learn Student Ambassador</a>, I organize technical workshops, teaching students about Microsoft technologies and cloud skills.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Personal Interests:</strong>
					<br />
					When I’m not working on code, I’m exploring new technologies, websites, or playing chess. I am also passionate about staying involved with open-source projects and continuously learning.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I’ve also been trying my hand at <Link href="/blog">writing</Link> articles that aim to help developers improve their skills, regardless of their career paths.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<article className={"text-xs sm:hidden lg:block"}>
					Press ⌘+K to navigate with your keyboard.
				</article>
			</div>

			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/junaidpeshimam"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Follow me</p>
					</a>
				</li>
			</ul>

			<div>
				<a
					className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
					rel="noopener noreferrer"
					target="_blank"
					href="mailto:junaidpeshimam@gmail.com?subject=Hello Junaid!"
				>
					<p className="h-7">
						<span className="mr-2 text-neutral-600">📧</span>
						junaidpeshimam@gmail.com
					</p>
				</a>
			</div>
		</section>
	);
}
