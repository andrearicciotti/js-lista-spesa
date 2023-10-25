# Esercizio

---

## Lista della spesa

---

### Testo dell' esercizio

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

---

### Algoritmo di svolgimento

**1.
Raccolta dati**

- Creo array con lista della spesa.
- Creo variabile associata ad elemento HTML sul quale vorremmo andare a stampare i nostri risultati.
- Inizializzo variabile senza contenuto (" ") dentro la quale andremo a raccogliere i risultai del nostro ciclo, che andranno inserito nell' innerHTML della variabile associata all' elemento.

**2. Logica del programma**

- Creo un ciclo while che compia tante iterazioni quanti gli indici del nostro array.
- Ad ogni Iterazione:
_ Crea variabile col valore dell' array associato al numero dell' iterazione [1].
_ Recupera variabile globale alla quale aggiunge la costante creata dentro un template literal per creare un elemento lista HTML.
_ incrementa i di 1 per proseguire con la prossima iterazione.

- Preparo il messaggio di output assegnando all' innerHTML della nostra costante collegata ad elemento UL il risultato in uscita dal nostro ciclo stampato nella variabile.

**3. Output**

- Aggiungo ad elemento HTML il risultao del nostro programma e stampo il messaggio.