const form = document.getElementById("areaForm")
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let  longueur = parseFloat(document.getElementById('longueur').value);
    let  largeur = parseFloat(document.getElementById('largeur').value);
   
      // Vérifie que les valeurs sont des nombres valides
      if (isNaN(longueur) || isNaN(largeur) || longueur <= 0 || largeur <= 0) {
        document.getElementById('result').innerText = "Veuillez entrer des valeurs valides pour la longueur et la largeur.";
        return;
    }

     // Calcule l'aire
     const area = longueur * largeur;

    //  console.log(area);
     document.getElementById('result').textContent = `L'aire de la surface est de ${area} mètres carrés.`;
     
     
})
