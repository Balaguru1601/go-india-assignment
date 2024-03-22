"use client";

import { useState } from "react";
import Content from "./_components/Content";
import Navbar from "./_components/Navbar";

export default function Home() {
	// Data based on choice for small device
	const [data, setData] = useState<"d" | "m">("d");
	return (
		<main className="min-h-screen w-full relative flex bg-gray-100">
			<Navbar />
			<div className="w-full p-2 sm:p-4">
				<div className="grid grid-cols-2 sm:grid-cols-3 w-full mt-1 sm:mt-2 border-t-2 border-black ">
					<div className="sm:col-span-2 sm:p-2">
						<button
							className={`block sm:hidden py-1 bg-blue-900 border-b-4 border-transparent uppercase text-white text-center w-full text-lg font-semibold ${
								data === "d" ? " border-b-red-500" : ""
							}`}
							onClick={() => setData("d")}
						>
							Discussion forum
						</button>
						<p className="hidden sm:inline-block bg-gray-200 text-red-400 font-bold uppercase text-xl p-2">
							Discussion forum
						</p>
					</div>
					<div className="sm:p-2">
						<button
							className={`block h-full  sm:hidden py-1 bg-blue-900 border-b-4 border-transparent uppercase text-white text-center w-full text-lg font-semibold ${
								data === "m" ? " border-b-red-500" : ""
							}`}
							onClick={() => setData("m")}
						>
							market Stories
						</button>
						<p className="hidden sm:inline-block bg-gray-200 text-red-400 font-bold uppercase text-xl p-2">
							market Stories
						</p>
					</div>
				</div>
				<Content data={data} />
			</div>
		</main>
	);
}
