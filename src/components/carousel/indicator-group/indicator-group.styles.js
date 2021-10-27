import styled from 'styled-components';

export const IndicatorGroupContainer = styled.div`
	opacity: 0;
	position: absolute;
	top: -20px;
	right: 30px;
	height: 2px;
	width: auto;
	display: flex;
`;

export const Indicator = styled.div`
	height: 2px;
	width: 12px;
	background-color: ${(props) =>
		props.$activePage === props.$idx ? "white" : "#333333"};
	margin: 1px;
`;
