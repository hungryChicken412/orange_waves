import React from "react";
import Image from "next/image";
import { userService } from "../services/user.service";
import Link from "next/link";

const Sidebar = ({ props }) => {
	try {
		var isAuthenticated = props;
	} catch {
		var isAuthenticated = false;
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
		<>
			<div className="sidebar">
				<div className="sidebar-header">
					<img
						src="/Untitled-1.png"
						alt="logo"
						className="logo"
						width={"200px"}
					/>
				</div>
				<div className="sidebar-body">
					{isAuthenticated && (
						<div className="w-full">
							<div className="sidebar-link">
								<Link href="/">
									<div className="sidebar-icon">
										<a href="#" onClick={toggleNavbar}>
											Dashboard
										</a>
									</div>
								</Link>
							</div>

							<div className="sidebar-link">
								<Link href="/billing">
									<div className="sidebar-icon">
										<a href="#" onClick={toggleNavbar}>
											Settings
										</a>
									</div>
								</Link>
							</div>

							<div className="sidebar-link">
								<Link href="/auth/login">
									<div className="sidebar-icon">
										<a
											href="#"
											onClick={userService.logout}
										>
											Log out
										</a>
									</div>
								</Link>
							</div>
						</div>
					)}
					{!isAuthenticated && (
						<div className="w-full">
							<div className="sidebar-link">
								<Link href="/auth/login">
									<div className="sidebar-icon">
										<a href="#" onClick={toggleNavbar}>
											Login
										</a>
									</div>
								</Link>
							</div>
							<div className="sidebar-link">
								<Link href="/auth/register">
									<div className="sidebar-icon">
										<a href="#" onClick={toggleNavbar}>
											Register
										</a>
									</div>
								</Link>
							</div>
						</div>
					)}
				</div>
				<div className="text-gray-400">
					v0.8B <br /> Moon-Light
				</div>
			</div>
		</>
	);
};

export default Sidebar;
