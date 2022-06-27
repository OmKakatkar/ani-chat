import { forwardRef } from "react";
import "./ModalCard.css";

const ModalCard = forwardRef(({ position = "", children }, ref) => {
	return (
		<div className={`modal-card text-white ${position}`} ref={ref}>
			{children}
		</div>
	);
});
export default ModalCard;
