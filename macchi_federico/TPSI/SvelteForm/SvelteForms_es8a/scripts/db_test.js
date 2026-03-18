// scripts/db_test.js
import Database from 'better-sqlite3';

// Crea (o apre) il database
const db = new Database('utenti.db');

// Crea la tabella Utente se non esiste
db.prepare(`
  CREATE TABLE IF NOT EXISTS Utente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    eta INTEGER NOT NULL
  )
`).run();


const insert = db.prepare('INSERT INTO Utente (nome, eta) VALUES (?, ?)');
insert.run('Alice', 16);
insert.run('Bob', 22);
insert.run('Carlo', 18);


console.log('\nUtenti con età > 18:');
const maggiorenni = db.prepare('SELECT * FROM Utente WHERE eta > 18').all();
console.log(maggiorenni);

console.log('\nUtenti con età = 16:');
const sedicenni = db.prepare('SELECT * FROM Utente WHERE eta = 16').all();
console.log(sedicenni);


db.prepare('UPDATE Utente SET eta = ? WHERE nome = ?').run(25, 'Bob');

console.log('\nDopo l’update:');
const utentiAggiornati = db.prepare('SELECT * FROM Utente').all();
console.log(utentiAggiornati);

db.prepare('DELETE FROM Utente WHERE nome = ?').run('Alice');

console.log('\nDopo la rimozione di Alice:');
const utentiFinali = db.prepare('SELECT * FROM Utente').all();
console.log(utentiFinali);

// Chiude il database
db.close();
