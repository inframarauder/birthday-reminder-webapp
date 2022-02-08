import React from "react";
import { Search } from "./Icons";

const SearchBar = ({ searchBirthdaysByName }) => {
	return (
		<div className="flex justify-center">
			<div className="pt-2 relative mx-auto text-gray-600">
				<input
					className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-400"
					placeholder="Search by friend's name"
					onChange={(e) => {
						searchBirthdaysByName(e.target.value);
					}}
				/>
				<span className="absolute right-0 top-0 mt-5 mr-4">
					<Search />
				</span>
			</div>
		</div>
	);
};

export default SearchBar;
