/** @format */

import React from "react";
import { minToHourConverter } from "../../helpers/utilities";
import { GenreContentRow, Rating } from "../carousel-item/carousel-item.styles";
import { MetaDataText } from "./title-meta-data.styles";

const TitleMetaData = ({ info }) => {
	if(info?.releaseInfo &&
		info.releaseInfo.hasOwnProperty("iso_3166_1")) return (
		
		<GenreContentRow>
					<Rating>
						{info.releaseInfo.release_dates[0]
							.certification === "12A"
							? "12"
							: info.releaseInfo.release_dates[0]
									.certification}
					</Rating>
			
				<MetaDataText>
					{minToHourConverter(info.titleInfo.runtime)}
				</MetaDataText>
			
		</GenreContentRow>
		);
	else {
		return null
	}
};

export default TitleMetaData;
