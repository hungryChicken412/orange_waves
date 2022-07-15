import React from "react";

const CreditCard = (props) => {
	const card = {
		cardNumber: props["props"]["subscription_plan"],
		cardHolder: props["props"]["username"],
		cardExpiry: props["props"]["expires"],
		cardPlan: "1231241233333333333333333",
		cardCredits: props["props"]["credits"],
	};

	return (
		<>
			<p>Tap on your card to see your credits</p>
			<div className="card">
				<div className="card__front card__part">
					<img
						className="card__front-square card__square"
						src="cc.png"
					/>
					<img
						className="card__front-logo card__logo"
						src="logo.png"
					/>
					<p className="card_numer">Plan Type : {card.cardNumber}</p>
					<div className="card__space-75">
						<span className="card__label">Name</span>
						<p className="card__info">{card.cardHolder}</p>
					</div>
					<div className="card__space-25">
						<span className="card__label">Duration</span>
						<p className="card__info">{card.cardExpiry} Months</p>
					</div>
				</div>

				<div className="card__back card__part">
					<div className="card__black-line"></div>
					<div className="card__back-content">
						<div className="card__secret">
							<p className="card__secret--last">
								{card.cardCredits}$
							</p>
						</div>
						<img
							className="card__back-square card__square"
							src="cc.png"
						/>
						<img
							className="card__back-logo card__logo"
							src="logo.png"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreditCard;
