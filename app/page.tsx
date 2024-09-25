import Link from "next/link";
import Image from "next/image";
import shriProperty from "public/logos/shriProperty.png";
import a2infinite from "public/logos/a2infinite.png";
import tap from "public/logos/tapico.png";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import wt from "public/logos/wt.png";
import vibraniumsoft from "public/logos/vibraniumsoft.jpeg";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mohammed Junaid - Full Stack Developer",
	description:
		"Mohammed Junaid is a Full Stack Developer working on creating seamless, user-friendly digital experiences. He has contributed to projects like BanquetBliss, ShriProperty, A2INFINITE, and more.",
	openGraph: {
		title: "Mohammed Junaid - Full Stack Developer",
		description:
			"Discover the work and projects of Mohammed Junaid, a Full Stack Developer contributing to BanquetBliss, ShriProperty, A2INFINITE, and other innovative projects.",
		url: "https://junaidpeshimam.com", // Replace with your actual URL
		siteName: "Mohammed Junaid's Portfolio",
		images: [
			{
				url: "/ogs/ogs-bg.png", // Add the path to your Open Graph image
				width: 1200,
				height: 630,
				alt: "Mohammed Junaid - Full Stack Developer",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Mohammed Junaid - Full Stack Developer",
		description:
			"Explore Mohammed Junaid’s work as a Full Stack Developer and his projects, including BanquetBliss, ShriProperty, A2INFINITE, and more.",
		images: ["/ogs/ogs-bg.png"], // Add the path to your Twitter card image
	},
};

export default function Page() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tight font-["monospace"]'>
				Sup, I'm Mohammed Junaid 👋
			</h1>

			<p className="prose prose-neutral dark:prose-invert">
				I’m a Full Stack Web Developer from Andhra Pradesh, India, trying to make the
				internet a bit cooler one website at a time.
			</p>

			<br />

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Work Life</strong>
					<br />
					My job is to create user-friendly digital experiences, and I’ve worked
					on various projects that showcase my technical skills and creativity.
					Recently, I completed a UI/UX internship at{" "}
					<span className="not-prose">
						<Badge href="https://www.clumoss.com">
							<Image
								src={tap}
								alt="Clumoss"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Clumoss
						</Badge>
					</span>
					, where I designed a complete banquet hall website. Additionally, I work as a{" "}
					<strong>Freelance Developer</strong> with{" "}
					<span className="not-prose">
						<Badge href="https://www.linkedin.com/company/vibraniumsoft/posts/?feedView=all">
							<Image
								src={vibraniumsoft}
								alt="Vibranium Soft"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Vibranium Soft
						</Badge>
					</span>
					. In my free time, I contribute to open-source projects and experiment with new technologies.
				</p>
				<p>
					One of my proudest achievements is creating
					<span className="not-prose">
						<Badge href="https://shriproperty.com">
							<Image
								src={shriProperty}
								alt="shriProperty"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							ShriProperty
						</Badge>
					</span>
					, a real estate website that simplifies finding a dream home. I also
					built
					<span className="not-prose">
						<Badge href="https://www.a2infinite.com/">
							<Image
								src={a2infinite}
								alt="A2INFINITE"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							A2INFINITE
						</Badge>
					</span>
					, a platform for educational worksheets, making learning more
					accessible.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Leadership and Community Involvement:</strong>
					<br />
					As the Design Team Lead at{" "}
					<a href="http://www.tedxgpcet.com" target="_blank">
						TEDxGPCET
					</a>{" "}
					I’ve led a team to design branding materials and improve event visibility. I’m also a{" "}
					<a href="https://mvp.microsoft.com/en-US/studentambassadors/profile/745f2eb1-624a-44bb-8ac7-868e5d531857" target="_blank">
						Microsoft Learn Student Ambassador
					</a>
					, where I organize workshops to help students improve their tech skills.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Personal Interests:</strong>
					<br />
					Away from work, I explore new technologies, websites, and play chess to unwind. I also write articles
					that aim to help aspiring engineers grow in their careers.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I’ve been trying my hand at <Link href="/blog">writing</Link>{" "}
					articles that aim to help people become better engineers, regardless
					of their career paths. Stay tuned for more content!
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
