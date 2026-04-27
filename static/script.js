async function calcoloIMC() {
  
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altezza = parseFloat(document.getElementById('altezza').value);
    
    if (peso <= 0 || altezza <= 0) {
       return alert('Inserisci valori validi per peso e altezza.');
       const response = await fetch(`/IMC?peso=${peso}&altezza=${altezza}`);
        const data = await response.json();
          let categoria = '';
        if (data.imc < 18.5) categoria = 'Sottopeso';
        else if (data.imc < 25) categoria = 'Normopeso';
        else if (data.imc < 30) categoria = 'Sovrappeso';
        else categoria = 'Obeso';
        document.getElementById('risultato').innerHTML = `Il tuo IMC è ${data.imc.toFixed(2)} (${categoria})`;
        
     }}