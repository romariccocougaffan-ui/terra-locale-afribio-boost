```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription - AFRIBIO BOOST</title>

    <style>
        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial, sans-serif;
        }

        body{
            background:#f5f7f2;
            display:flex;
            justify-content:center;
            align-items:center;
            min-height:100vh;
            padding:20px;
        }

        .container{
            width:100%;
            max-width:500px;
            background:white;
            padding:40px;
            border-radius:20px;
            box-shadow:0 5px 20px rgba(0,0,0,0.1);
        }

        .logo{
            text-align:center;
            margin-bottom:20px;
        }

        .logo h1{
            color:#2d5016;
            font-size:32px;
        }

        .logo p{
            color:#777;
            margin-top:5px;
        }

        .input-group{
            margin-bottom:20px;
        }

        .input-group label{
            display:block;
            margin-bottom:8px;
            font-weight:bold;
            color:#333;
        }

        .input-group input,
        .input-group select{
            width:100%;
            padding:14px;
            border:1px solid #ccc;
            border-radius:10px;
            font-size:16px;
        }

        .input-group input:focus,
        .input-group select:focus{
            outline:none;
            border-color:#2d5016;
        }

        .btn{
            width:100%;
            padding:15px;
            background:#2d5016;
            color:white;
            border:none;
            border-radius:10px;
            font-size:17px;
            cursor:pointer;
            transition:0.3s;
        }

        .btn:hover{
            background:#3f6d21;
        }

        .message{
            margin-top:20px;
            text-align:center;
            font-weight:bold;
        }

        .success{
            color:green;
        }

        .error{
            color:red;
        }
    </style>
</head>

<body>

    <div class="container">

        <div class="logo">
            <h1>AFRIBIO BOOST</h1>
            <p>Créer votre compte</p>
        </div>

        <form id="registerForm">

            <div class="input-group">
                <label>Nom complet</label>
                <input type="text" id="nom" required>
            </div>

            <div class="input-group">
                <label>Téléphone</label>
                <input type="tel" id="telephone" required>
            </div>

            <div class="input-group">
                <label>Email</label>
                <input type="email" id="email" required>
            </div>

            <div class="input-group">
                <label>Commune / Ville</label>
                <input type="text" id="ville" required>
            </div>

            <div class="input-group">
                <label>Type d'utilisateur</label>
                <select id="typeUtilisateur" required>
                    <option value="">Sélectionner</option>
                    <option>Producteur</option>
                    <option>Acheteur</option>
                    <option>Formateur</option>
                    <option>Partenaire</option>
                </select>
            </div>

            <div class="input-group">
                <label>Mot de passe</label>
                <input type="password" id="password" required>
            </div>

            <div class="input-group">
                <label>Confirmer le mot de passe</label>
                <input type="password" id="confirmPassword" required>
            </div>

            <button type="submit" class="btn">
                S'inscrire
            </button>

            <div class="message" id="message"></div>

        </form>

    </div>

    <script>

        const form = document.getElementById('registerForm');
        const message = document.getElementById('message');

        form.addEventListener('submit', function(e){

            e.preventDefault();

            const nom = document.getElementById('nom').value;
            const telephone = document.getElementById('telephone').value;
            const email = document.getElementById('email').value;
            const ville = document.getElementById('ville').value;
            const typeUtilisateur = document.getElementById('typeUtilisateur').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if(password.length < 6){
                message.innerHTML = "Le mot de passe doit contenir au moins 6 caractères";
                message.className = "message error";
                return;
            }

            if(password !== confirmPassword){
                message.innerHTML = "Les mots de passe ne correspondent pas";
                message.className = "message error";
                return;
            }

            // Génération ID utilisateur
            const userID = "AFB-" + Math.floor(Math.random() * 100000);

            // Objet utilisateur
            const utilisateur = {
                id: userID,
                nom,
                telephone,
                email,
                ville,
                typeUtilisateur
            };

            // Sauvegarde locale
            localStorage.setItem('utilisateur', JSON.stringify(utilisateur));

            message.innerHTML = "Inscription réussie !";
            message.className = "message success";

            console.log(utilisateur);

            // Redirection après 2 secondes
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);

        });

    </script>

</body>
</html>
```
