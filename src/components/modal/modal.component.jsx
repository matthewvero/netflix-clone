/** @format */

import reactDom from "react-dom";

const Modal = ({ children, domNode }) => {
	return reactDom.createPortal(children, domNode);
};

export default Modal;
