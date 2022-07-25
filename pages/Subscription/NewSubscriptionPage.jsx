import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

export default function NewSubscriptionPage(props) {
	return (
		<>
			<Navbar />

			<div
				className="max-w-screen-xl  mx-auto w-full"
				id="create-app-form"
			>
				<h1 className="mx-2 text-blueGray-700 text-Left text-4xl font-ligh my-6 hover:underline neonText text-white">
					.
				</h1>

				<div className="mx-4 bg-white p-8 rounded-md">
					<div className="plan-banner">
						<div className="plan-thanks">
							<div>
								<h1>Thanks for choosing Orange Waves</h1>
								<p>
									Start using orange waves today with our sole
									plan of 5$/month, applied at the end of each
									month! meaning get your first month for
									free!
								</p>
								<button
									className="btn btn-custom p-6 text-white "
									style={{ color: "white" }}
								>
									Subscribe Now{" "}
									<span className="">
										<i className="fas fa-arrow-right"></i>
									</span>
								</button>
							</div>
						</div>
						<div className="plan-image">
							<img
								src="http://orangewaves.tech/dist/images/hero-media-illustration-light.svg"
								alt="placeholder"
							/>
						</div>
					</div>
					<div className="subscription-info justify-center flex justify-center align-center">
						<form>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3"></div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
