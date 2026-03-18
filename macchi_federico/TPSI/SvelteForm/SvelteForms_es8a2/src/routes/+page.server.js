let utenti = []; // array globale per la sessione

export const actions = {
    aggiungi: async ({ request }) => {
        const data = await request.formData();
        const importanza = data.get('importanza');

        let icona = '';
        if (importanza === 'a') icona = 'arrow_upward';
        else if (importanza === 'b') icona = 'subdirectory_arrow_left';
        else if (importanza === 'c') icona = 'arrow_downward';

        utenti.push({
            nome: data.get('nome'),
            importanza,
            icona
        });

        return { utenti };
    },

    cancella: async ({ request }) => {
        const data = await request.formData();
        const nomeDaCancellare = data.get('nome');
        utenti = utenti.filter(u => u.nome !== nomeDaCancellare);
        return { utenti };
    }
};

// load function per fornire utenti al template
export function load() {
    return { utenti };
}
