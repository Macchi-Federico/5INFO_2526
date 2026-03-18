<script>
    export let data;
</script>

<h1 class="main-title">Rubrica JS</h1>

<form method="post" action="?/create">
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
    </tbody>
   </table>
</form>

<table>
<tbody>
{#each data.utenti as utente}
<tr>
    <td>{utente.cognome}</td>
    <td>{utente.nome}</td>
    <td>{utente.indirizzo}</td>
    <td>{utente.telefono}</td>
    <td colspan="2">
        <form method="post" action="?/delete">
            <input type="hidden" name="id" value="{utente.id}" />
            <button type="submit">Rimuovi</button>
        </form>
    </td>
</tr>
{/each}
</tbody>
</table>



<style>
.main-title {
    text-align: center;
    font-family: 'Bebas Neue';
    font-size: 60px;
}

table,
td {
    border: 1px solid black;
    border-collapse: collapse;
    padding:10px;
    margin-top: 50px;
}

thead {
    font-size: 20px;
    font-weight: bolder;
}


.edit,
.remove{
    color:white;
    background-color: green;
    border-color: green;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    font-weight: bolder;
}


.remove{
    background-color: red;
    border-color:red;
}
</style>
