// return a simple form

import { createRef, useRef } from "react";
import { userService } from "../services/user.service.js";
import { customHelpers } from "../helpers/custom-helpers";
import { verifiers } from "../helpers/form-verifiers.js";
import axios from "axios";
import { useRouter } from "next/router";

import Navbar from "../components/Navbar";
import { useState } from "react";

import { useAlert } from "react-alert";

import CreditCard from "../components/CreditCard.jsx";

export default function BillingPage(props) {
	const alert = useAlert();
	const router = useRouter();
	const [isAuthenticated, cookie] = customHelpers.checkAuth(
		router,
		"/",
		false
	);
	const [formState, setFormState] = useState(1);
	if (isAuthenticated) {
		var data = userService.getBillingData(cookie);
		var firstName = createRef();
		var lastName = createRef();
		var _companyUrl = createRef();
		var planType = createRef();
		var _username = createRef();

		try {
			var subscription_plan = data[0]["subscriptionPlan"];

			switch (subscription_plan) {
				case 1:
					subscription_plan = "Free";
					break;
				case 2:
					subscription_plan = "Standard";
					break;
				case 3:
					subscription_plan = "Premium";
					break;
				default:
					subscription_plan = "Free";
					break;
			}

			var credits = data[0]["credits"];
			var first_name = data[0]["first_name"];
			var username = data[0]["username"];
			var last_name = data[0]["last_name"];
			var expires = data[0]["expires"];
			var companyUrl = data[0]["companyUrl"];
			var email = data[0]["email"];
		} catch {
			var subscription_plan = "...";
			var credits = "...";
			var first_name = "...";
			var last_name = "...";
			var username = "...";
			var companyUrl = "...";
			var email = "...";
			//PASS;
		}

		var props = {
			subscription_plan,
			credits,
			first_name,
			last_name,
			expires,
			username,
		};
	}

	function submitChanges() {
		data = {
			first_name: firstName.current.value,
			last_name: lastName.current.value,
			companyUrl: _companyUrl.current.value,
			planType: planType.current.value,
			username: _username.current.value,
		};

		return userService
			.updateProfile(data)
			.then(() => {
				// get return url from query parameters or default to '/'

				router.reload();
				//router.push("/billing");
				router.reload();
				alert.success("Profile Updated!");
				console.log("ok");
			})
			.catch((error) => {
				alert.error("Something's Wrong!");
				console.log(error);
			});
	}

	return (
		<>
			<Navbar props={[data, "block"]} />

			<div
				className="max-w-screen-xl  mx-auto w-full"
				id="create-app-form"
			>
				<h1 className="mx-2 text-blueGray-700 text-Left text-4xl font-ligh my-6 hover:underline neonText">
					Billing
				</h1>

				<div className="mx-4 bg-white shadow-md p-8 rounded-md">
					<div className="max-w-screen-xl mx-auto w-fulls py-4 mt-4 mb-4 flex flex-wrap justify-around">
						<CreditCard props={props} />
					</div>
					<div className="subscription-info">
						<p>
							Enter / Change any value to change then press save.
						</p>
						<hr></hr>
						<br></br>
						<form>
							<div
								className="relative w-full mb-3"
								style={{ display: "none" }}
							>
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Username
								</label>

								<input
									type="text"
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder={username}
									ref={_username}
									required
									name="username"
								/>
							</div>

							<div
								className="relative w-full mb-3"
								style={{ display: "none" }}
							>
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									First Name
								</label>

								<input
									type="text"
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder={first_name}
									ref={firstName}
									required
									name="First Name"
								/>
							</div>

							<div
								className="relative w-full mb-3"
								style={{ display: "none" }}
							>
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Last Name
								</label>

								<input
									type="text"
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder={last_name}
									required
									ref={lastName}
									name="Last Name"
								/>
							</div>
							<div
								className="relative w-full mb-3"
								style={{ display: "none" }}
							>
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Company URL
								</label>

								<input
									type="url"
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder={companyUrl}
									required
									ref={_companyUrl}
									name="companyUrl"
								/>
							</div>

							<div className="relative w-full mb-3">
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Plan Type
								</label>

								<select
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									name="Plan Type"
									defaultValue={subscription_plan}
									required
									ref={planType}
								>
									<option>Select A Plan</option>
									<option value="1">Free</option>
									<option value="2">Basic</option>
									<option value="3">Premium</option>
									<option value="4">Enterprise</option>
								</select>
							</div>
							<small className="text-bold font-bold pt-8 pb-8">
								<span className="rounded-full bg-indigo-500 uppercase px-2 py-1 font-white text-white text-xs font-bold mr-3">
									Note
								</span>
								The Subscription changes will be reflected in
								your account after the next billing cycle.
							</small>

							<hr className="mt-4 mb-4"></hr>
							<div className="relative w-full mb-3">
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Credits Left
								</label>

								<input
									type="text"
									disabled
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder={credits}
									name="Credits"
								/>
							</div>
							<div className="relative w-full mb-3">
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Email
								</label>

								<input
									type="text"
									disabled
									className="border-0 customBorder px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder={email}
									name="email"
								/>
							</div>

							<div className="mt-6">
								<button
									className="btn-custom pt-2 pb-2 text-white px-4 disabled:opacity-50 "
									type="button"
									onClick={submitChanges}
								>
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
