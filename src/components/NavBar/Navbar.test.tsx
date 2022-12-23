import NavBar from "./NavBar";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("navbar CustomLink li is Active or not", () => {
	render(
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	);

	expect(screen.getByTestId("listitem-link-Accueil")).toHaveClass(
		"active"
	);
	expect(screen.getByTestId("listitem-link-Villes")).not.toHaveClass(
		"active"
	);
	expect(screen.getByTestId("listitem-link-Contact")).not.toHaveClass(
		"active"
	);
});

test("navbar CustomLink li is Active on click", () => {
	render(
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	);

	expect(screen.getByTestId("listitem-link-Accueil")).toHaveClass(
		"active"
	);
	expect(screen.getByTestId("listitem-link-Villes")).not.toHaveClass(
		"active"
	);
	expect(screen.getByTestId("listitem-link-Contact")).not.toHaveClass(
		"active"
	);

  // testing 
  fireEvent.click(screen.getByText('Villes'))

  expect(screen.getByTestId("listitem-link-Accueil")).not.toHaveClass(
		"active"
	);
	expect(screen.getByTestId("listitem-link-Villes")).toHaveClass(
		"active"
	);
	expect(screen.getByTestId("listitem-link-Contact")).not.toHaveClass(
		"active"
	);
});
