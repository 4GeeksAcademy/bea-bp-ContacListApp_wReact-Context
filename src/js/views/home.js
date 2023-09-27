import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const location = useLocation();

	const { contacts } = store;

	useEffect(() => {
		actions.fetchContacts(); 
	}, [location.pathname]); 
	
	const editContact = (contact) => {
		actions.setContactForUpdate(contact);
		navigate("/new-contact");
	};

	const handleDelete = (contactId) => {
		actions.deleteContact(contactId);
	};

	return (
		<div className="text-center mt-2">	{contacts.map((contact) => {
			return (

				<span key={contact.id}>

					<img
						alt="img alt"
						height="80px"
						width="80px"
						style={{ borderRadius: "50%", border: "2px solid gray", marginTop: "50px" }}
						src="data:image/png;base64,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"
					/>
					<section>
						<h4>{contact.full_name}</h4>

						<div className="flex-container">
							<i className="fas fa-map-marker-alt" style={{ color: "#000000", margin: "10px" }}></i>
							<span>{contact.address}</span>
						</div>

						<div className="flex-container">
							<i className="far fa-envelope" style={{ color: "#000000", margin: "10px" }}></i>
							<span>{contact.email}</span>
						</div>

						<div className="flex-container">
							<i className="fas fa-phone" style={{ color: "#000000", margin: "10px" }}></i>
							<span>{contact.phone}</span>
						</div>

					</section>
					<section>
						<i
							onClick={() => editContact(contact)}
							className="fas fa-pencil-alt"
							style={{ margin: "10px" }}
						></i>
						<i
							onClick={() => handleDelete(contact.id)}
							className="fas fa-trash-alt"
						></i>
					</section>
				</span>


			);
		})}
		</div>
	);
};