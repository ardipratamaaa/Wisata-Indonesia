function tampilWaktu() {
    const waktu = new Date();
    document.getElementById("waktu").innerHTML =
        waktu.toLocaleTimeString();
}
setInterval(tampilWaktu, 1000);