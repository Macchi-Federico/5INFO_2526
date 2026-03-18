let utenti = [];

export function load({params}){

    return {utenti}
}




export const actions = {
    default: async ({cookies,request}) => {
        const data = await request.formData();
        console.log("I VALORI DEL FORM SNO ", data)


        const user = {
            nome: data.get("nome"),
            cognome: data.get('cognome'),
            indirizzo: data.get('indirizzo'),
            telefono: data.get('telefono')
        }
        if (user.nome && user.cognome && user.eta){
            utenti.push(user);

        } else {
            
            return {
                form_error:true,
                form_vals: user
            }
         }
    }
 };


