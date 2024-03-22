"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {};

function Navbar({}: Props) {
	const [open, setOpen] = useState(false);
	function toggleOpen() {
		setOpen((prev) => !prev);
	}
	return (
		<>
			<div>
				{/* This div is to adjust screen width on bigger devices for nav open */}
				<div
					className={`bg-gray-900 top-0 absolute sm:relative transition-all duration-300 ease-in-out ${
						open ? "w-[50vw] sm:w-[25vw] md:w-[20vw]" : "w-0"
					}`}
				></div>
			</div>
			<div className="flex h-screen fixed">
				{/* The fixed navbar */}
				<div
					className={`bg-blue-900 top-0 absolute z-20 sm:relative h-full transition-all duration-300 ease-in-out ${
						open ? "w-[50vw] sm:w-[25vw] md:w-[20vw]" : "w-0"
					}`}
				>
					<div
						className={`transition-all duration-100 ease-in-out p-2 ${
							open ? "visible" : "invisible"
						}`}
					>
						<div className="flex justify-between mt-3 pb-4 border-b">
							<p>
								<Image
									src={"/user.png"}
									width={32}
									height={32}
									alt="user"
									className="inline-block mr-1"
								/>
								Hello, User
							</p>
							<Image src={"/notification.png"} width={32} height={32} alt="notif" />
						</div>
						<p className="text-lg my-4 mt-6">Discussion Forum</p>
						<p className="text-lg my-4">Market Stories</p>
						<p className="text-lg my-4">Sentiment</p>
						<p className="text-lg my-4">Market</p>
						<p className="text-lg my-4">Sector</p>
						<p className="text-lg my-4">Watchlist</p>
						<p className="text-lg my-4">Events</p>
					</div>
				</div>
				<button
					onClick={toggleOpen}
					className={`self-center bg-blue-900 text-xl font-bold px-1 py-4 rounded-r-lg transition-all duration-300 ease-in-out translate-y--1/2 fixed ${
						open ? "left-[50%] sm:left-[calc(25%+4px)] md:left-[20%]" : "left-0"
					}`}
				>
					{">"}
				</button>
			</div>
		</>
	);
}

export default Navbar;
