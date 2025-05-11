/** Función para mostrar u ocultar la contraseña en el formulario de login **/
function togglePassword() {
    const passwordField = document.getElementById('ci');
    const showPasswordCheckbox = document.getElementById('show-password');
    if (showPasswordCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}
/*------------------------------------------------------------------------------*/

