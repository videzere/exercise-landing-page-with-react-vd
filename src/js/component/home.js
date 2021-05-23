import React from "react";
import { Menu } from "./Menu.js";
import { CenterCards } from "./CenterCards.js";
import { FooterCards } from "./FooterCards.js";

//create your first component
export function Home() {
	return (
		<div>
			<Menu />
			<CenterCards />
			<FooterCards />
		</div>
	);
}
