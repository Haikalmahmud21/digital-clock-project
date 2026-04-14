function updateJam() {
    const now = new Date();

  
    let jam = now.getHours();
    let menit = now.getMinutes();
    let detik = now.getSeconds();

    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    document.getElementById("waktu").innerText =
        `${jam}:${menit}:${detik}`;


    const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulanList = [
        "Januari", "Februari", "Maret", "April",
        "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ];

    const hari = hariList[now.getDay()];
    const tanggal = now.getDate();
    const bulan = bulanList[now.getMonth()];
    const tahun = now.getFullYear();

    document.getElementById("tanggal").innerText =
        `${hari}, ${tanggal} ${bulan} ${tahun}`;
}


setInterval(updateJam, 1000);
updateJam();