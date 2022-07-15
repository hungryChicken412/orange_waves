import React from "react";
import Link from "next/link";
import StatCard from "./StatCard";
import AppTable from "./AppTable";

const AdminHeader = ({ props }) => {
	var data = props.data;

	try {
		var build = data[0]["build"];
		var failed = data[0]["failed"];
		var ready = data[0]["ready"];
		var pending = data[0]["pending"];
		var username = data[0]["username"];
		var email_verified = data[0]["email_confirmed"];
		var credits = data[0]["credits"];
	} catch {
		//PASS
	}
	function readGoogleService() {
		document.getElementById("GoogleServiceFileLabel").innerHTML =
			document.getElementById("GoogleServiceFile").files[0].name;
	}
	return (
		<>
			<div className="m-4  bg-custom" style={{ "border-radius": "6px " }}>
				<div className="container mx-auto flex w-full justify-between		">
					<h1 className="mx-2 text-blueGray-700 text-Left text-4xl font-light my-6 neonText hover:underline">
						<i className="fa-regular fa-lightbulb"></i> New
					</h1>
				</div>
				<div className="text-justify px-4"></div>
				<form className="w-full">
					<div className="form_step_content_input justify-center">
						<div className="form_step_content_input_file">
							<label
								htmlFor="GoogleServiceFile"
								id="GoogleServiceFileLabel"
								className="inputSelector"
							>
								<i className="fa fa-cloud-upload"></i> Attach a
								file
							</label>
							<input
								type="file"
								onChange={readGoogleService}
								className="input-file"
								id="GoogleServiceFile"
							/>
							{/*<div className="inputSelector">
								<label
									htmlFor="checkboxPublic"
									id="checkboxPublicLabel"
									className="px-4"
								>
									Share Publicly?
								</label>
								<input
									type="checkbox"
									className="px-4 mx-4 input-checkbox"
									name="checkboxPublic"
									id="checkboxPublic"
									value="1"
									defaultChecked
								/>
							</div>*/}

							<button
								className="btn btn-primary btn-custom py-2 px-4 m-6"
								type="submit"
							>
								Convert Now!
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default AdminHeader;
