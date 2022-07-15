import React from "react";
import Image from "next/image";
import { userService } from "../services/user.service";

const Navbar = ({ props }) => {
	try {
		if (props.length > 1) {
			var show = props[1];
		} else {
			var show = "none";
		}
		var username = props[0][0]["username"];
	} catch (error) {
		//console.log(error);
		var username = "";
	}
	function toggleNavbar() {
		var navbar = document.getElementsByClassName("sidebar")[0];
		var sd_button = document.getElementsByClassName("sidebar-button")[0];
		var sd_icon = document.getElementById("sidebar-button-icon");
		if (navbar.className === "sidebar") {
			navbar.className += " show";
			sd_icon.className = " fa-solid fa-times rotate-180";
		} else {
			navbar.className = "sidebar";
			sd_button.className = "sidebar-button px-2 mx-2 ";
			sd_icon.className = "fa-solid fa-bars rotate-backward-180";
		}
	}

	return (
		<div className=" pt-4 pb-4" style={{ display: show }}>
			<div className="flex flex-row justify-between items-center max-w-screen-xl mx-auto ">
				<div className="ml-4 flex flex-row items-center font-oc neonText">
					<button
						className="sidebar-button px-2 mx-2 "
						onClick={toggleNavbar}
					>
						<i
							id="sidebar-button-icon"
							className="fa-solid fa-bars"
						></i>
					</button>
				</div>

				<div className="mr-4 "></div>
			</div>
		</div>
	);
};

export default Navbar;
