const uploadFoto = document.getElementById('uploadFoto');
const iconePerfil = document.getElementById('iconePerfil');

uploadFoto.addEventListener('change', function(event) {
    if (uploadFoto.files && uploadFoto.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            iconePerfil.src = e.target.result;
        };
        reader.readAsDataURL(uploadFoto.files[0]);
    }
});

function validar() {
    window.location.href = 'Menu_Princ.html'; 
    return false; 
}
