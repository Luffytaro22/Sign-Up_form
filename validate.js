const password = document.getElementById('password');
        const val_password = document.getElementById('pss-confirm');

        function validate () {
            if(val_password.value !== password.value){
                val_password.setCustomValidity('Passwords do not match');
            } else {
                val_password.setCustomValidity('');
            }
        }
        
        val_password.addEventListener('input', validate);
        password.addEventListener('input', validate);
