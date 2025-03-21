// Fungsi untuk menghitung jejak karbon
document.getElementById('karbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai input
    const listrik = parseFloat(document.getElementById('listrik').value);
    const transportasi = parseFloat(document.getElementById('transportasi').value);
    const makanan = parseFloat(document.getElementById('makanan').value);

    // Faktor emisi (contoh sederhana)
    const faktorListrik = 0.85; // kg CO2 per kWh
    const faktorTransportasi = 0.2; // kg CO2 per km
    const faktorMakanan = 15; // kg CO2 per kg daging

    // Hitung total jejak karbon
    const totalKarbon = (listrik * faktorListrik) + (transportasi * faktorTransportasi) + (makanan * faktorMakanan);

    // Tampilkan hasil
    document.getElementById('totalKarbon').textContent = totalKarbon.toFixed(2) + " kg CO2/bulan";
    document.getElementById('hasil').style.display = 'block';
});

// Fungsi untuk smooth scroll ke section yang sesuai
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default link

        // Ambil target section dari atribut href
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll ke section target dengan efek smooth
            targetSection.scrollIntoView({
                behavior: 'smooth', // Efek scroll halus
                block: 'start' // Mulai dari bagian atas section
            });
        }
    });
});