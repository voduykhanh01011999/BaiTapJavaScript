function KiemTra(){
    var s = prompt("Nhập họ tên")
    if(s == "")
    {
        alert("Bạn chưa nhập ho tên mời bạn nhập lại!!!");
        s.focus();
        return false;
    }
    else
    {
        document.write("Họ tên là: "+s);
        return true;
   
    }
    



}
