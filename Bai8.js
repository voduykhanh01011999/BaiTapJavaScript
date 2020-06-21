function PhuongTrinhBacNhat(){
    var a = eval(f.txtnhapsoa.value);
    var b = eval(f.txtnhapsob.value);
    var c;
    if(a==0)
    {
        if(b==0)
        {
            c= "Phương trình vô số nghiệm";
        }
        else
        {
            c="Phương trình vô nghiệm";
        }
    }
    else
    {
        c= "Phương trình có nghiệm x = ";
        c+=-b/a;
    }
    f.txtketqua.value = c;
}