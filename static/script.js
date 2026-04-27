async function Calcola_IMC() {

    const peso = document.getElementById("peso").value;
    const altezza = document.getElementById("altezza").value;

    if (!peso || !altezza) 
        return alert("Scrivi peso e altezza");

    const res = await fetch(`/IMC?peso=${peso}&altezza=${altezza}`);
    const json = await res.json();
    
    if (json.imc == 11){
        alert("Inserisci valori sopra lo zero o validi");
    }
    else if(json.Valutazione == -1){
        document.getElementById("risultato").innerText = "Il tuo IMC è: "+ json.imc + ". Sei sottopeso";
    }
    else if(json.Valutazione == 1){
        document.getElementById("risultato").innerText = "Il tuo IMC è: "+ json.imc + ". Sei sovrappeso";
    }
    else {
        document.getElementById("risultato").innerText = "Il tuo IMC è: "+ json.imc + ". Sei normopeso";
    }
    

}


async function Calcola_post() {

    const peso = document.getElementById("peso").value;
    const altezza = document.getElementById("altezza").value;

    if (!peso || !altezza) 
        return alert("Scrivi peso e altezza");

    const res = await fetch("/IMC2", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `peso=${peso}&altezza=${altezza}`
    });

    const json = await res.json();
    
    if (json.imc == 11){
        alert("Inserisci valori sopra lo zero o validi");
    }
    else if(json.Valutazione == -1){
        document.getElementById("risultato2").innerText = "Il tuo IMC è: "+ json.imc + ". Sei sottopeso (con post)";
    }
    else if(json.Valutazione == 1){
        document.getElementById("risultato2").innerText = "Il tuo IMC è: "+ json.imc + ". Sei sovrappeso (con post)";
    }
    else {
        document.getElementById("risultato2").innerText = "Il tuo IMC è: "+ json.imc + ". Sei normopeso (con post)";
    }
    
}


document.getElementById('bottone').addEventListener('click', Calcola_post);
document.getElementById('bottone').addEventListener('click', Calcola_IMC);
