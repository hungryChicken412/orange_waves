import React, { createRef } from "react";
import { useEffect } from "react/cjs/react.production.min";
import { userService } from "../services/user.service";
import TrackCard from "./track_card";
import axios from "axios";
import { useRouter } from "next/router";

import { useAlert } from "react-alert";

import Link from "next/link";

const AppTable = ({ props }) => {
	var data = userService.getApps(props[0].cookie);

	console.log(data);
	const router = useRouter();
	const alert = useAlert();

	const [submitting, setSubmitting] = React.useState(false);

	var po_file = createRef();

	function newTTS() {
		var form = document.getElementById("new-tts-form");
		console.log("itworks");
		if (form.style.display == "flex") {
			form.style.display = "none";
		} else {
			form.style.display = "flex";
		}
	}

	function readGoogleService() {
		var icon = document.getElementById("GoogleServiceFile").files[0];
		document.getElementById("GoogleServiceFileLabel").innerHTML = icon.name;
	}

	function submitForm() {
		var icon = document.getElementById("GoogleServiceFile").files[0];
		if (icon == undefined) {
			alert("Please select a file");
			return;
		} else {
			var form = document.getElementById("new-tts-form");
			//form.style.display = "none";
			var formData = new FormData();
			formData.append("file", icon);
			formData.append(
				"name",
				document.getElementById("GoogleServiceFile").files[0].name
			);
			formData.append(
				"language",
				document.getElementById("language").value
			);
			formData.append(
				"ttsFile",
				document.getElementById("GoogleServiceFile").files[0]
			);

			setSubmitting(true);
			axios
				.post(
					"https://orange-waves.herokuapp.com/api-info/register/tts/", //https://netive-backend.herokuapp.com/api-info/register/app/
					formData,
					{ headers: { Authorization: `Token ${props[0].cookie}` } }
				)
				.then((res) => {
					console.log(res);
					alert.success("Successfully uploaded");
					router.reload();
				})
				.catch((err) => {
					console.log("Error! Creating App!");
					alert.error(
						"Error! Creating App! Please Contact Support if the error persists."
					);
					router.push("/");

					console.log(err);
				});
		}
	}

	return (
		<div className="max-w-screen-xl  mx-auto w-full">
			<div className="  mx-4 overflow-x-hidden rounded-md">
				<div className="container mx-auto flex w-full justify-left flex-wrap  items-center border-indigo-600	">
					<h1 className="mx-2 text-blueGray-700 text-Left text-4xl font-ligh my-6 hover:underline neonText">
						My Tracks
					</h1>

					<button
						type="button"
						className="btn btn-custom-createnow flex text-white items-center md:display-none display-hide-md"
						style={{ height: "40px" }}
						onClick={newTTS}
					>
						<span>
							<i class="fa-solid fa-plus mx-1 "></i>
						</span>
						Create New
					</button>
				</div>
				<div
					className="overflow-x-scroll w-full  "
					style={{ display: "flex", "flex-wrap": "wrap" }}
				>
					{data?.map((app, index) => (
						<TrackCard props={[app.name, app.file, app.text]} />
					))}

					{/* Music track list */}
				</div>

				{/* <div className="container mx-auto my-5 flex w-full justify-between		">
					<h1 className="mx-2 text-blueGray-700 text-Left text-4xl font-light my-6 hover:underline neonText">
						<span>
							<i className="fa-solid fa-fire mx-4"></i>
						</span>
						Popular
					</h1>
				</div>
				<div
					className="overflow-x-scroll w-full  "
					style={{ display: "flex", "flex-wrap": "wrap" }}
				>
					
					<TrackCard
						track={
							"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
						}
					/>
				</div> */}
			</div>

			<div
				className="btn-floating display-show-md"
				onClick={newTTS}
			></div>

			<div className="new-tts-form" id="new-tts-form">
				<div className="btn-floating-x" onClick={newTTS}></div>
				<div
					className="container"
					style={{ display: submitting ? "none" : "block" }}
				>
					<div className="flex flex-wrap justify-center items-center w-full h-full">
						<form>
							<div className="form_step_content_input_file iosInputs mt-4">
								<label
									htmlFor="GoogleServiceFile"
									id="GoogleServiceFileLabel"
									className="inputSelector"
								>
									<i className="fa fa-cloud-upload"></i>{" "}
									Attach GoogleService-Info.plist
								</label>
								<input
									type="file"
									className="input-file"
									onChange={readGoogleService}
									id="GoogleServiceFile"
									ref={po_file}
								/>
							</div>
							<div className="form_step_content_input_file iosInputs mt-4">
								<select
									id="language"
									className="p-4 border-2 px-8 rounded-lg border-gray-300 focus:outline-none focus:border-gray-500"
								>
									<option value="Justin">Justin - US</option>
									<option selected value="Matthew">
										Matthew - US
									</option>
									<option value="Joanna">Joanna - US</option>
									<option value="Emma">Emma - British</option>
									<option value="Ivy">Ivy - US</option>
									<option value="Kendra">Kendra - US</option>
								</select>
							</div>
							<div className="form_step_content_input_file iosInputs mt-4">
								<button
									type="button"
									className="btn btn-custom-createnow flex text-white items-center "
									style={{ height: "40px" }}
									onClick={submitForm}
								>
									<span>
										<i class="fa-solid fa-plus mx-1 "></i>
									</span>
									Create New
								</button>
							</div>
						</form>
					</div>
				</div>
				<div
					className="container"
					style={{ display: submitting ? "block" : "none" }}
				>
					<div className="flex flex-wrap justify-center items-center w-full h-full">
						<div className="loader">
							<img
								src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-28.jpg"
								className="w-full h-10 w-10"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppTable;
