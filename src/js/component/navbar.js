import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<h1 className="mt-2">Bea's Agenda</h1>
			<Link to="/"></Link>
			<div className="ml-auto">
				<button
					onClick={() => navigate("/new-contact")}
					className="btn btn-success"
				>
					Add new contact
				</button>

			</div>
		</nav>
	);
};
