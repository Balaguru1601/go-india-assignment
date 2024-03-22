"use client";

import Image from "next/image";
import { getData } from "../_utils/getData";

type Props = {
	data: "d" | "m";
};

function Content({ data }: Props) {
	const discussionContent = getData("d").map((item) => (
		<div
			key={Math.random()}
			className="my-4 flex bg-gray-100 rounded shadow-gray-600 shadow-md"
		>
			<Image
				src={item.image}
				alt={item.image}
				className="w-10 h-10 rounded-full mx-3 mt-2"
				width={40}
				height={40}
			/>

			<div className="py-2">
				<p className="text-lg">
					{item.title}
					<span className="ml-4 px-2 py-1 text-nowrap bg-blue-900 text-white rounded-lg text-sm">
						Sender 2
					</span>
				</p>
				<p>{item.description}</p>
				<div className="flex justify-between mt-2 flex-wrap gap-1 sm:gap-0">
					<span>
						<Image
							src={"/heart.png"}
							width={24}
							height={24}
							alt="heart"
							className="inline-block mr-1"
						/>
						3
					</span>
					<span>
						<Image
							src={"/view.png"}
							width={24}
							height={24}
							alt="view"
							className="inline-block mr-1"
						/>
						24
					</span>
					<span>
						<Image
							src={"/comment.png"}
							width={24}
							height={24}
							alt="comment"
							className="inline-block mr-1"
						/>
						Comments
					</span>
					<span>
						<Image
							src={"/share.png"}
							width={24}
							height={24}
							alt="share"
							className="inline-block mr-1"
						/>
						Share
					</span>
				</div>
			</div>
			<p className="text-blue-900 text-wrap sm:text-nowrap text-sm mr-2 mt-2 font-medium">
				2 mins ago
			</p>
		</div>
	));

	const marketContent = getData("m").map((item) => (
		<div key={Math.random()} className="my-4 rounded overflow-hidden border shadow">
			<Image
				src={item.image}
				width={500}
				height={250}
				alt="background"
				className="w-full h-40"
			/>
			<div className="p-4">
				<p className="text-xl font-semibold mb-2 text-blue-900 capitalize">{item.title}</p>
				<p>{item.description}</p>
			</div>
		</div>
	));

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 ">
			{/* first div for mobile view of 1 content based on selection */}
			<div className="block sm:hidden text-black">
				{data === "d" ? discussionContent : marketContent}
			</div>
			{/* These 2 are for the content view in larget screens, both at same time */}
			<div className="hidden sm:block bg-white col-span-2 text-black p-2">
				{discussionContent}
			</div>
			<div className="bg-white hidden sm:block text-black p-2">{marketContent}</div>
		</div>
	);
}

export default Content;
