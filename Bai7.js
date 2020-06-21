function KiemTra(){
    var namhientai = 2020;
    var namsinh=f.optNamSinh.value;
    var thongtin = f.txtThongTin.value;
    if(namhientai - namsinh<16)
    {
        alert("Tuổi của ứng viên phải từ 16!!");
        return false;
    }
    if(f.radGioiTinh[0].checked == false && f.radGioiTinh[1].checked == false)
    {
        alert("Bạn phải chọn giới tính của mình");
        return false;
    }
    if(f.chkHinhThucToanTG.checked==false && f.chkHinhThucBanTG.checked==false)
    {
        alert("Bạn phải chọn hình thức làm việc!!!");
        return false;
    }
    if(thongtin == "")
    {
        alert("Bạn phải nhập thông tin!!!");
        thongtin.focus();
        return false;
    }
    if(isNaN(f.txtMucLuong.value))
    {
        alert("Mức lương phải là số!!!");
        return false;
    }
    if(f.txtHoTen.value =="")
    {
        alert("Họ tên không được bỏ trống!!!");
        return false;
    }
    return true;
}
function Windows()
{
    var cuaso = window.open();
    cuaso.document.write("<br>Họ tên là:"+f.txtHoTen.value);
    cuaso.document.write("<br>Mức lương:"+f.txtMucLuong.value);
    cuaso.document.write("<br>Thông tin ứng viên:"+f.txtThongTin.value);
    cuaso.document.write("<br>Năm sinh:"+f.optNamSinh.value);
    cuaso.document.write("<br>Giới tính:");
    if(f.radGioiTinh[0].checked==true)
    {
        cuaso.document.write("Nam");
    }
    else
    {
        cuaso.document.write("Nữ");
    }
    cuaso.document.write("<br>Thời hạn làm việc:");
    if(f.chkHinhThucBanTG.checked==true)
    {
        cuaso.document.write("Hình thức bán thời gian");
    }
    else
    {
        cuaso.document.write("hình thức toàn thời gian");
    }
}