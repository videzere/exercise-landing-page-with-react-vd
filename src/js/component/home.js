import React from "react";
import { Menu } from "./Menu.js";
import { Center } from "./Center.js";
import { Footer } from "./Footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Menu />
			<Center />
			<Footer />
		</div>
	);
}
