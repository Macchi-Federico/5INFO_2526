let utenti = [];
import Database from 'better-sqlite3';

const db = new Database("USER.db");

export function load() {

	const query = db.prepare("SELECT * FROM Utente");
	const utenti = query.all();
    console.log(utenti)
	return { utenti };
}

export const actions = {

	create: async ({ request }) => {

		const data = await request.formData();

		const user = {
			nome: data.get("nome"),
			cognome: data.get("cognome"),
			indirizzo: data.get("indirizzo"),
			telefono: data.get("telefono")
		};

		if (!user.nome || !user.cognome || !user.indirizzo || !user.telefono) {
			return {
				form_error: true,
				form_vals: user
			};
		}

		const query = db.prepare(
			"INSERT INTO Utente (nome, cognome, indirizzo, telefono) VALUES (@nome, @cognome, @indirizzo, @telefono)"
		);

		query.run(user);

		return { success: true };
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get("id");

		const query = db.prepare("DELETE FROM Utente WHERE id = ?");
		query.run(id);

		return { success: true };
	}
};
