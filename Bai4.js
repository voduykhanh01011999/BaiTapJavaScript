function NgayThangNam(){
    var d= new Date();
    var ngay = d.getDate();
    var thang = d.getMonth()+1;
    var nam = d.getYear()+1900;
    var thu = d.getDay();

    if(ngay<10)
    ngay="0"+ngay;
    if(thang<10)
    thang="0"+thang;
    switch(thu)
    {
        case 0: thu="Chủ nhật"; break;
        case 1: thu="Thứ hai"; break;
        case 2: thu="Thứ ba"; break;
        case 3: thu="Thứ tư"; break;
        case 4: thu="Thứ năm"; break;
        case 5: thu="Thứ sáu"; break;
        case 6: thu="Thứ bảy"; break;
    }
    document.write("Hôm nay là: "+thu+" "+"Ngày"+ngay+"/"+"Tháng"+thang+"/"+"Năm"+nam);
}