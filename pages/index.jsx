import AdminHeader from "../components/AdminHeader";
import Navbar from "../components/Navbar";
import AppTable from "../components/AppTable";
import { useRouter } from "next/router";
import { userService } from "../services/user.service";
import VerifyEmail from "../components/VerifyEmail";
import MusicPlayer from "../components/musicPlayer";

export default function Home(props) {
	var router = useRouter();
	var haventRecievedData = true;

	if (
		!props.isAuthenticated &&
		typeof window !== "undefined" &&
		router.pathname !== "/auth/register"
	) {
		router.push("auth/login");
	} else {
		var data = userService.getDashboardData(props.cookie);
		console.log(email_verified);

		try {
			var email_verified = data[0]["email_confirmed"];
			haventRecievedData = false;
		} catch {
			var email_verified = false;
			haventRecievedData = true;
			//PASS;
		}
	}

	var childProps = {
		props,
		data,
	};

	function refreshPage() {
		router.reload();
	}

	return (
		<>
			<Navbar props={[data, "block"]} />

			{/*<div className="pb-40 mt-14" style={{ marginBottom: "-8rem" }}>
				<div className="max-w-screen-xl text-center p-4 m-3 bg-custom-2 adsetup2"></div>
			</div>*/}

			{haventRecievedData && (
				<div className="loader">
					<img
						src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-28.jpg"
						className="w-full h-10 w-10"
					/>
				</div>
			)}

			{email_verified && !haventRecievedData && (
				<>
					<AppTable props={[props, refreshPage]} />
					<MusicPlayer props={childProps} />
				</>
			)}

			{!email_verified && !haventRecievedData && (
				<VerifyEmail props={props} />
			)}

			{/* <div
				className="m-4 py-8 bg-custom"
				style={{ "border-radius": "6px " }}
			>
				<div className="container mx-auto flex w-full justify-between		">
					<h1 className="mx-2 text-blueGray-700 text-Left text-4xl font-light my-6 neonText hover:underline">
						<i className="fa-solid fa-pencil"></i> A note from the
						dev!
					</h1>
				</div>
				<div className="text-justify px-4">
					Thank you for using our service. We are currently working on
					multiple features and improvements. We hope you enjoy our
					service as much as we do.
					<br />
					We are always looking to improve our service and we would
					love to hear from you. Please email us at{" "}
					<a href="mailto:EMAIL">EMAIL</a> or
					<a href="https://twitter.com/EMAIL">@EMAIL</a> if you have
					any questions.
				</div>
			</div> */}

			{/*<div className="pb-40 mt-14">
				<div className="max-w-screen-xl text-center p-4 m-3 bg-custom-2 adsetup2"></div>
			</div>*/}
		</>
	);
}
