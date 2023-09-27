const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			newContact: {
				email: "",
				full_name: "",
				address: "",
				phone: "",
			},
			isNew: true,
		},
		actions: {
			fetchContacts: () => {
				const baseUrl = "https://playground.4geeks.com/apis/fake/contact";
				const getContactsUrl = `${baseUrl}/agenda/agenda_bea`;

				fetch(getContactsUrl)
					.then((response) => response.json())
					.then((data) => setStore({ contacts: data }));
			},
			addNewContact: async () => {
				const store = getStore();
				const newContact = store.newContact;
				const baseUrl = "https://playground.4geeks.com/apis/fake/contact";

				const body = JSON.stringify({
					...newContact,
					agenda_slug: "agenda_bea",
				});

				await fetch(baseUrl, {
					method: "POST",
					body: body,
					headers: {
						"Content-Type": "application/json",
					},
				


				});
				

				setStore({
					newContact: {
						email: "",
						full_name: "",
						address: "",
						phone: "",
					},
				});
			},
			updateContact: async () => {
				const store = getStore();
				const contactToUpdate = store.newContact;
				const baseUrl = "https://playground.4geeks.com/apis/fake/contact/";
				const updateUrl = `${baseUrl}${contactToUpdate.id}`;

				const body = JSON.stringify(contactToUpdate);

				await fetch(updateUrl, {
					method: "PUT",
					body: body,
					headers: {
						"Content-Type": "application/json",
					},
				});
			},

			handleNewContactChange: (key, value) => {
				const store = getStore();
				const prevContact = store.newContact;

				setStore({ newContact: { ...prevContact, [key]: value } });
			},
			setContactForUpdate: (selectedContact) => {
				setStore({
					newContact: selectedContact,
					isNew: false,
				});
			},
			deleteContact: async (id) => {
				const baseUrl = "https://playground.4geeks.com/apis/fake/contact/";
				const deleteUrl = `${baseUrl}${id}`;
				const contacts = getStore().contacts;

				const filteredContacts = contacts.filter(
					(contact) => contact.id !== id
				);

				await fetch(deleteUrl, { method: "DELETE" });
				setStore({ contacts: filteredContacts });
			},
		},
	};
};

export default getState;