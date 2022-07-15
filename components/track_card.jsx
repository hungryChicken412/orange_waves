import React from "react";
import { useEffect } from "react/cjs/react.production.min";
import { userService } from "../services/user.service";

const TrackCard = ({ props }) => {
	const track = props[1];
	const name = props[0];
	const text = props[2];

	function setNewTrack() {
		var audio = document.getElementById("audio");
		var playpause = document.getElementById("play");
		var text_para = document.getElementById("podcast-text-paragraphs");
		var dlink = document.getElementById("mp3-download");

		text_para.innerHTML = text;
		dlink.href = track;
		playpause.title = "Pause";

		audio.src = track;
		audio.play();

		playpause.checked = true;
	}

	return (
		<div className="card track-card ">
			<div className="card-content neonText">{name}</div>
			<div>
				<table class="player">
					<td>
						<span class="play" onClick={setNewTrack}></span>
					</td>
					{/* <td>
						<input type="checkbox" id="likeTrack_1" />
						<label class="love" for="likeTrack_1"></label>
					</td>
					<td>
						<input type="checkbox" id="shareTrack_1" />
						<label class="shuffle" for="shareTrack_1"></label>
					</td> */}
				</table>
			</div>
		</div>
	);
};

export default TrackCard;
