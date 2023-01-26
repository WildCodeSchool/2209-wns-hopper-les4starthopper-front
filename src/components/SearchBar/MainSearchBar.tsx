import React, { ChangeEvent, useState } from "react";
import styles from "./mainSearchBar.module.css";

interface IData {
	link: string;
	title: string;
}

interface IProps {
	placeholder: string;
	data: IData[];
}

export function MainSearchBar({ placeholder, data }: IProps) {
	const [filteredRow, setFilteredRow] = useState<IData[]>([]);

	const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
		const enteredWord = event.target.value;
		const newFilter = data.filter((value) => {
			return value.title
				.toLowerCase()
				.includes(enteredWord.toLowerCase());
		});
		enteredWord.length === 0
			? setFilteredRow([])
			: setFilteredRow(newFilter);
	};
	return (
		<div className={styles.searchContainer}>
			<div className={styles.searchInputs}>
				<input
					onChange={handleFilter}
					type='text'
					placeholder={placeholder}
				/>
				<div className={styles.searchIcon}>
					<div className={styles.lens}>Lens</div>
				</div>
			</div>

			{filteredRow.length !== 0 && (
				<div className={styles.dataResult}>
					{filteredRow.slice(0, 10).map((value, key) => {
						return (
							<a
								className={styles.dataBox}
								href={value.link}
								target='_blank'
								rel='noreferrer'
							>
								<p>{value.title}</p>
							</a>
						);
					})}
				</div>
			)}
		</div>
	);
}
