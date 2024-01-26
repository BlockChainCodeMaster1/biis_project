"use client";
import WalletProvider from "@/context/wallet";

export default function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WalletProvider>
			<section className="flex flex-row justify-center bg-[url('/home/bg.svg')] bg-cover bg-no-repeat bg-center h-full">
				{children}
			</section>
		</WalletProvider>
	);
}
