
<script>
    export let data;
</script>

<h1 class="main-title">Rubrica JS</h1>

<form method="post">
   <table>
    <thead>
        <tr>
            <th>Cognome</th>
            <th>Nome</th>
            <th>Indirizzo</th>
            <th>Telefono</th>
            <th colspan="2">Azioni</th>
        </tr>
    </thead>

    <tbody>
        <tr class="inputx">
            <td><input type="text" name="cognome" /></td>
            <td><input type="text" name="nome" /></td>
            <td><input type="text" name="indirizzo" /></td>
            <td><input type="text" name="telefono" /></td>
            <td><button type="submit" name="action" value="cerca">Cerca</button></td>
            <td><button type="submit">Salva</button></td>
        </tr>

        {#each data.utenti as utente}
        <tr>
            <td>{utente.cognome}</td>
            <td>{utente.nome}</td>
            <td>{utente.indirizzo}</td>
            <td>{utente.telefono}</td>
            <td colspan="2">
                <button>Rimuovi</button>
            </td>
        </tr>
        {/each}
    </tbody>
   </table>

</form> 

<style>
.main-title {
    text-align: center;
    font-family: 'Bebas Neue';
    font-size: 60px;
}

table {
    margin: auto;
    width: 40%;
    border-spacing: 0px 15px;
    text-align: center;
}

th {
    font-size: 20px;
}
</style>
