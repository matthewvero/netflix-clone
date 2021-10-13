/** @format */

import React from "react";
import { minToHourConverter } from "../../helpers/utilities";
import { GenreContentRow, Rating } from "../carousel-item/carousel-item.styles";
import { MetaDataText } from "./title-meta-data.styles";

const TitleMetaData = ({ info, large }) => {
	return (
		<GenreContentRow>
			{info.releaseInfo &&
				info.releaseInfo.hasOwnProperty("iso_3166_1") && (
					<Rating>
						{info.releaseInfo.release_dates[0]
							.certification === "12A"
							? "12"
							: info.releaseInfo.release_dates[0]
									.certification}
					</Rating>
				)}
			{info.titleInfo && (
				<MetaDataText>
					{minToHourConverter(info.titleInfo.runtime)}
				</MetaDataText>
			)}
		</GenreContentRow>
	);
};

export default TitleMetaData;
