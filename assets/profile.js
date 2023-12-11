$(document).ready(function(){
    // Tambahkan smooth scrolling ke semua link
    $("a").on('click', function(event) {

      // Pastikan this.hash memiliki nilai sebelum mengganti perilaku default
    if (this.hash !== "") {
        // Mencegah perilaku klik tautan default
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Menggunakan metode animate() jQuery untuk menambahkan scroll halaman yang smooth
         // Bilangan opsional (1000) menentukan jumlah milidetik yang diperlukan untuk melakukan scrolling ke area yang ditentukan
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function(){

          // Tambahkan hash (#) ke URL setelah selesai scrolling (perilaku klik default)
            window.location.hash = hash;
        });
      } // End if
    });
    });