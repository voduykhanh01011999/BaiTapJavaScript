function KiemTra(){
    var tk= f.txtnhapten.value;
    var mk = f.txtnhapmatkhau.value;
    var xnmk=f.txtxacnhanmk.value;
    if(tk ==""|| mk ==""||(xnmk =="" ))
    {
        alert("Không được bỏ trống!!!");
        return false;
    }
    if(mk != xnmk)
    {
        alert("mật khẩu không khớp với xác nhận mật khẩu !!!");
        return false;
    }
    if(tk.length<6)
    {
        alert("Tên đăng nhập phải từ 7 ký tự");
        return false;
    }
    return true;
    

    
}
function LoadWinDows(){
    var cuaso = window.open();
    cuaso.document.write("<br>Tên tài khoản là: "+f.txtnhapten.value);
    cuaso.document.write("<br>Mật khẩu là:"+f.txtnhapmatkhau.value);
    cuaso.document.write("<br>Xác nhận mật khẩu:"+f.txtxacnhanmk.value);
}