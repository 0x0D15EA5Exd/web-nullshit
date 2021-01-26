
function verifyPassword() {
    var password = document.getElementById("ID_DU_MOT_DE_PASSE").value;
    var passwordC = document.getElementById("ID_DU_MOT_DE_PASSE_DE_VERIFICATION").value;

    if (passwordC != password) {
        document.getElementById("message").innerHTML="Mot de passe différent"; // message = <span id="message" 
        return false;

    }
    if (password.length < 4) {
        document.getElementById("message").innerHTML="Pas assez long"
    }


}






































/*<tr>
					<td>Vos coordonnées</td>
				</tr>
					<tr>
						<td>Civilité :
							<select name="civilité" id="civ">
								<option value="Monsieur">Monsieur</option>
								<option value="Monsieur">Madame</option>
								<option value="Monsieur">Mademoiselle</option>
							</select>
						</td>
					</tr>
					<tr rowspan="2">				
						<td> Nom : <input type="text" id="Nom" name="name" required size="10"></td>				
						<td> Prenom : <input type="text" id="Prénom" name="pRE" required size="10"></td>
					</tr>
					<tr>
						<td>
							Remarques : 
						</td>
					</tr>
					<tr>
						<td>
							<textarea rows="5" cols="33">
							Entrer le texte &#13;&#10
							Entrer plus de texte
							</textarea>
						</td>
					</tr> */