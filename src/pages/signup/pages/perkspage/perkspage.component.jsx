/** @format */

import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import { Button } from "../../../../components/buttons.styles";

import { Heading } from "../../../../components/misc/text.styles";
import { ListIcon } from "../../signuppage.styles";
import { PerksContainer } from "./perkspage.styles";

const PerksPage = ({ $ref }) => {
	const history = useHistory();
	return (
		<PerksContainer
			onSubmit={(e) => {
				e.preventDefault();
				history.push("/signup/plans");
				const popStateEvent = new PopStateEvent("popstate");
				dispatchEvent(popStateEvent);
			}}
			ref={$ref}
		>
			<FontAwesomeIcon icon={faCheckCircle} className="perksicon" />
			<p className="step">
				Step <span>1</span> of <span>3</span>
			</p>
			<Heading className="perksheading">Choose your plan.</Heading>
			<ul className="perkspage">
				<li>
					<ListIcon icon={faCheck} />
					<p>No commitments, cancel at any time.</p>
				</li>
				<li>
					<ListIcon icon={faCheck} />
					<p>Everything on Netflix for one low price.</p>
				</li>
				<li>
					<ListIcon icon={faCheck} />
					<p>Unlimited viewing on all your devices.</p>
				</li>
			</ul>
			<Button className="perksbutton">Next</Button>
		</PerksContainer>
	);
};

export default PerksPage;
