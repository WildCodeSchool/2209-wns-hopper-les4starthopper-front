import React, { ChangeEvent, useState } from "react";
import "./searchBar.scss";
import mapPointer from "../../assets/images/mapPointer.svg";

interface IData {
	link: string;
	city: string;
}

interface IProps {
	placeholder: string;
	data: IData[];
	className: string;
}

export function SearchBar({ placeholder, data }: IProps) {
	const [filteredRow, setFilteredRow] = useState<IData[]>([]);

	const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
		const enteredWord = event.target.value;
		const newFilter = data.filter((value) => {
			return value.city
				.toLowerCase()
				.includes(enteredWord.toLowerCase());
		});
		enteredWord.length === 0
			? setFilteredRow([])
			: setFilteredRow(newFilter);
	};
	return (
		<div className='searchBar'>
			<div className='searchBar__input'>
				<input
					onChange={handleFilter}
					type='text'
					placeholder={placeholder}
				/>
				<div className='searchBar__icon'>
					<img src={mapPointer} alt='mapsearch' />
				</div>
			</div>

			{filteredRow.length !== 0 && (
				<div className='searchBar__result'>
					<div className='searchBar__result__dataResult'>
						{filteredRow.slice(0, 10).map((value, key) => {
							return (
								<a href={value.link} target='_blank' rel='noreferrer'>
									{value.city}
								</a>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
