import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let redLight = "";
	let yellowLight = "";
	let greenLight = "";
	const [clicked, setClicked] = useState("red");
	if (clicked === "red") {
		redLight = "light";
	}
	if (clicked === "yellow") {
		yellowLight = "light";
	}
	if (clicked === "green") {
		greenLight = "light";
	}
	return (
		<>
			<div className="bar" />
			<div className="text-center traffic">
				<div
					onClick={() => setClicked("red")}
					className={"red " + redLight}
				/>
				<div
					onClick={() => setClicked("yellow")}
					className={"yellow " + yellowLight}
				/>
				<div
					onClick={() => setClicked("green")}
					className={"green " + greenLight}
				/>
			</div>
		</>
	);
}
