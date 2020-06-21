function htGio(){
    var d = new Date();
    var gio = d.getHours();
    var phut = d.getMinutes();
    var giay = d.getSeconds();
//toán tử 3 ngôi nếu giờ lớn hơn 12 thì giờ = giờ -12 ngược lại giờ <12 giờ = giờ
    var s = (gio>12) ? (gio-12) : gio; 
     s += ((phut<10) ? ':0' : ':') +phut; //nếu phút<10 thì hiển thị ra là 09 08 07 phút ngược lại hiện thị 11 12 13 14....
     s += ((giay<10) ? ':0' : ':') +giay; // giây giống như phút
     s += (gio>12) ? 'Chiều' : 'Sáng';
     document.getElementById("dongho").innerHTML = s;
     var t = setTimeout("htGio()",1000); // cho time chạy 


}