<script>
    export let data;
</script>


<center><h1>Welcome to SvelteKit</h1></center>
<form method="POST" action="?/aggiungi">
    

    <div class="form-row">
        <input type="text" id="nome" name="nome" placeholder="Inserisci nome">
        <select name="importanza" id="importanza">
            <option value="a">Alta</option>
            <option value="b">Media</option>
            <option value="c">Bassa</option>
        </select>
        <button type="submit" class="on">
            <span class="material-icons icon">add</span>
        </button>
    </div>

    <div class="linea"></div>   
</form>

<ul>
    {#each data.utenti as utente}
        <li class="row {utente.importanza}">
            <span>{utente.nome}</span>

         
            

            <div class="buttons">
                <span class="material-icons icon extra">{utente.icona}</span>   

                <button class="ok">
                    <span class="material-icons icon">check</span>
                </button>

               
                <form method="POST" action="?/cancella">
                    <input type="hidden" name="nome" value="{utente.nome}" />
                    <button class="del" type="submit">
                        <span class="material-icons icon">delete</span>
                    </button>
                </form>
            </div>
        </li>
    {/each}
</ul>
<style>

form {
    width: 50%;
    margin: 0 auto;
}

.form-row {
    display: flex;
    justify-content: center;   
    align-items: center;
    gap: 10px;                  
    margin-bottom: 20px;
}

input, select {
    height: 30px;
    border-radius: 6px;
    padding: 0 8px;
    border: 1px solid #ccc;
}

button {
    height: 30px;
    border: none;
    background: #eee;
    border-radius: 6px;
    cursor: pointer;
}

button .icon {
    vertical-align: middle;
}

.linea {
    width: 100%;
    height: 1px;
    background-color: #ccc4;
    margin-bottom: 20px;
}


ul {
    width: 50%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
}

.row {
    display: flex;            
    justify-content: space-between; 
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.buttons {
    display: flex;
    gap: 10px;                 
}

.row button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.row button .icon {
    color: #444;
}

.row button.ok .icon {
    color: green;
}

.row button.del .icon {
    color: red;
}

.form-row button.on .icon {
    color: rgb(21, 255, 0);
}

.row.a .icon.extra { color: red; }      /* Alta importanza */
.row.b .icon.extra { color: orange; }   /* Media importanza */
.row.c .icon.extra { color: green; }    /* Bassa importanza */
</style>