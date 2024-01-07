import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { BG, BgLine,TwitterIcon,TelegramIcon, Logo } from "@/components/icons";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className=" absolute left-0 right-0 top-0">
						<BG />
					</div>
					<div className=" absolute left-0 right-0 top-[10rem] sm:top-[80rem] flex justify-center">
						<BgLine />
					</div>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-8 sm:pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className=" mx-auto max-w-7xl w-full flex  flex-col sm:flex-row items-center py-3 justify-between px-6">
							<div className=" w-full sm:w-auto px-4 sm:px-0 text-[#989EAF]">
								<Logo />
								<p>© 2023 Biis Technologies, Inc.</p>
								<p className="py-6 flex gap-2">
									<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
										<TwitterIcon className="text-default-500" />
									</Link>
									<Link isExternal href={siteConfig.links.telegram} aria-label="Twitter">
										<TelegramIcon className="text-default-500" />
									</Link>
								</p>
							</div>
							<div>
								<ul className=" flex flex-row text-[#989EAF] text-xs sm:text-base leading-4 sm:leading-8 gap-8 sm:gap-0 ">
									<li className="sm:w-48">
										<h1 className=" text-xl sm:text-3xl text-[#272B3F]">Product</h1>
										<p>Batch Distribution</p>
										<p>Batch Collection</p>
										<p>Proxy Signature</p>
										<p>Batch Multi-Signature</p>
										<p>Cross-Chain</p>
									</li>
									<li className="sm:w-48">
										<h1 className="text-xl sm:text-3xl text-[#272B3F]">Company</h1>
										<p>About</p>
										<p>Batch Partner</p>
										<p>Terms</p>
										<p>Privacy & Polivy</p>
										<p>API SDK</p>
									</li>
									<li className="sm:w-48">
										<h1 className="text-xl sm:text-3xl text-[#272B3F]">Support</h1>
										<p>Get Help</p>
										<p>FAQ</p>
									</li>
								</ul>
							</div>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
