function waForm(){
    var nama = document.getElementById('wa-nama').value;
    var kota = document.getElementById('wa-kota').value;
    if(nama==""||kota==""){
        alert("Form harus di isi lengkap!!!");
    }else{
        window.location.replace("https://api.whatsapp.com/send?phone=6285695611430&text=Halo%2C%20Nama%20saya%20"+nama+"%2C%20Saya%20dari%20"+kota+".%0AIngin%20bertanya%20tentang%20produk%20Andalani%20%3F!");
    }
}