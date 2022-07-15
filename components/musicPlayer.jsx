import React from "react";
import Link from "next/link";
import StatCard from "./StatCard";
import AppTable from "./AppTable";
import "../styles/music.module.css";

const MusicPlayer = ({ props }) => {
	var data = props.data;

	const [duration, setDuration] = React.useState("0:00");
	const [currentTime, setCurrentTime] = React.useState("0:00");
	var wakelock = null;

	if ("wakelock" in navigator) {
		wakeLock = navigator.wakeLock.request("screen");
	}

	function togglePlayPause() {
		var audio = document.getElementById("audio");
		var playpause = document.getElementById("play");
		if (audio.paused || audio.ended) {
			playpause.title = "Pause";
			audio.play();
		} else {
			playpause.title = "Play";
			audio.pause();
		}
	}

	function convertTime(time) {
		var minutes = Math.floor(time / 60);
		var seconds = Math.floor(time - minutes * 60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		return minutes + ":" + seconds;
	}
	function playerUpdate() {
		var audio = document.getElementById("audio");
		var playpause = document.getElementById("play");
		var playerDurationSlider = document.getElementById(
			"playerDurationSlider"
		);
		//var loop = document.getElementById("shuffle");

		var currentTime = audio.currentTime;
		var duration = audio.duration;

		var width = (currentTime / duration) * 100;

		setDuration(convertTime(duration));
		setCurrentTime(convertTime(currentTime));

		playerDurationSlider.style.width = width + "%";

		if (audio.ended) {
			console.log("ended");
			if (1 == 2) {
				playpause.title = "Pause";
				audio.play();
			} else {
				playpause.title = "Play";
				playpause.checked = false;
				audio.currentTime = 0;
				audio.pause();
			}
		}
	}

	function seekLeft() {
		var audio = document.getElementById("audio");
		var currentTime = audio.currentTime;
		var duration = audio.duration;
		var newTime = currentTime - 10;
		if (newTime < 0) {
			newTime = 0;
		}
		if (newTime > duration) {
			newTime = duration - 1;
		} else {
			audio.currentTime = newTime;
		}
	}
	function seekRight() {
		var audio = document.getElementById("audio");
		var currentTime = audio.currentTime;
		var duration = audio.duration;
		var newTime = currentTime + 10;
		if (newTime < 0) {
			newTime = 0;
		}
		if (newTime > duration) {
			newTime = duration - 1;
		} else {
			audio.currentTime = newTime;
		}
	}

	function VolumeSlider() {
		var audio = document.getElementById("audio");
		var volume = document.getElementById("volume");
		audio.volume = volume.value / 100;
	}

	function showText() {
		var text = document.getElementById("podcast-text");
		text.classList.toggle("show-podcast-info");
	}

	return (
		<div className="lightmode">
			<div className=" music-player" id="borderimg3">
				<div className="media-controls">
					<table className="player ">
						{/* <td><input type="checkbox" id="love" /><label className="love smol" htmlFor="love"></label></td> */}

						<td className="player-btn-bg">
							<label
								className="backward"
								htmlFor="backward"
							></label>
							<input
								type="checkbox"
								id="backward"
								onInput={seekLeft}
							/>
						</td>
						<td className="player-btn-bg">
							<input
								type="checkbox"
								id="play"
								title="Play"
								onClick={togglePlayPause}
							/>
							<label className="play" htmlFor="play"></label>
						</td>
						<td className="player-btn-bg">
							<input
								type="checkbox"
								onInput={seekRight}
								id="forward"
							/>
							<label
								className="forward"
								htmlFor="forward"
							></label>
						</td>

						<td>
							<button className="" onClick={showText}>
								<i className="fa-solid fa-book"></i>
							</button>
						</td>
					</table>

					<div className="media-title ">#Title</div>

					{/*<td><input className="volumeSlider" type="range" onInput={VolumeSlider} id="volume" name="vol" min="0" max="50"/></td>*/}

					<div className="media-progress">
						<div className="progress-time-current milli">
							{currentTime}
						</div>
						<div className="progress-bar-wrapper progress">
							<div
								className="progress-bar"
								id="playerDurationSlider"
							></div>
						</div>

						<div className="progress-time-total milli">
							{duration}
						</div>
					</div>
				</div>
			</div>

			<div className="podcast-text" id="podcast-text">
				<div className="podcast-text-title">
					<h1>#Title</h1>
				</div>
				<div className="podcast-text-body">
					<p id="podcast-text-paragraphs">
						{/* Lorem ipsum */}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec euismod, nisl eget consectetur sagittis, nisl nisi
						consectetur nisi, euismod consectetur nisi nisi euismod.
						Donec euismod, nisl eget consectetur sagittis, nisl nisi
						consectetur nisi, euismod consectetur nisi nisi euismod.
						Donec euismod, nisl eget consectetur sagittis, nisl nisi
						consectetur nisi, euismod consectetur nisi nisi Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Donec
						euismod, nisl eget consectetur sagittis, nisl nisi
						consectetur nisi, euismod consectetur nisi nisi euismod.
						Donec euismod, nisl eget consectetur sagittis, nisl nisi
						consectetur nisi, euismod consectetur nisi nisi euismod.
						Donec euismod, nisl eget consectetur sagittis, nisl nisi
						consectetur nisi, euismod consectetur nisi nisi
					</p>
					<p style={{ color: "black" }}>
						{/* Download link */}
						<a
							className=""
							id="mp3-download"
							href="#"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Mp3{" "}
						</a>
					</p>
					<br></br>
					<hr></hr>
					<p className="pt-2" style={{ color: "black" }}>
						Thanks for using my app! Here's a cat for you.
					</p>
					<p>
						<img
							src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
							alt=""
							width={window.innerWidth}
							height="100px"
						/>
					</p>
				</div>
			</div>

			<audio
				className="audio"
				preload="no"
				id="audio"
				controls
				onTimeUpdate={playerUpdate}
			>
				<source src="http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3" />
				<source src="http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.ogg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};

export default MusicPlayer;
