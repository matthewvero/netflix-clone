import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { auth } from "../../firebase";
import {DropdownContainer, HeaderDropdownContainer, HeaderDropdownIndicator, HeaderProfileIcon, SubMenu, SubMenuLink} from './header-dropdown.styles'
const HeaderDropdown = () => {
	const [open, setOpen] = useState(false);
	const dropDownRef = useRef();
	return (
		<HeaderDropdownContainer
			onFocus={() => setOpen(true)}
			
			onBlur={() => setOpen(false)}
			tabIndex='-1'
		>
			<HeaderProfileIcon/>
			<HeaderDropdownIndicator icon={faCaretDown} className={open && 'rotate'}/>
			
			<CSSTransition in={open} classNames='dropdown' timeout={200} unmountOnExit nodeRef={dropDownRef}>
				<DropdownContainer ref={dropDownRef}>
					<SubMenu>
						<SubMenuLink onClick={() => auth.signOut()} href='/logout'>Sign out of Netflix</SubMenuLink>
					</SubMenu>
				</DropdownContainer>
			</CSSTransition>
			
		</HeaderDropdownContainer>
		);
};

export default HeaderDropdown;