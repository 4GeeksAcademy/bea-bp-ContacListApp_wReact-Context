const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			

		},
		actions: {
			fetchContacts: () => {
				const baseUrl = "https://playground.4geeks.com/apis/fake/contact/agenda/agenda_bea";
				const getContactsUrl = `${baseUrl}/agenda/agenda_bea`
				fetch(getContactsUrl)
				.then(data.json())
				.then(data => setStore({ contacts: data }))
				
			},
			
		}
	};
};

export default getState;
