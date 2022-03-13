/**
 * Tìm ngày trước và ngày tới
 * Đầu vào : Ngày tháng năm được nhập từ người dùng
 * Xử lí:
 * - Tạo 3 biến nhận giá trị từ người dùng nhập vào
 * - if xét kiểm tra năm nhuận
 * - trong if trên kiểm tra tháng và ngày
 * - xét năm nhuận và không nhuận
 * - kiểm tra các tháng đặc biệt trước (7 2 đối với next và 8 3 đối với prev)
 * - nếu quá ngày của tháng thì tháng + 1 và ngày về 1
 * - ngược lại với tìm ngày trước
 * Đầu ra: show kết quả
 */

document.getElementById("next").onclick = function () {
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;

    if((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0 ){
        if(thang == 7){
            if(ngay == 31){
                ngay = 1;
                thang = 8;
            }else{
                ngay++;
                
            }
        }else if(thang == 2){
            if(ngay == 29){
                ngay = 1;
                thang = 3;
            }else{
                ngay++;
                
            }
        }else if(thang % 2 != 0 && thang < 8){
            if(ngay == 31){
                ngay = 1;
                thang++;
            }else{
                ngay++;
                
            }
        }else if(thang % 2 == 0 && thang >= 8){
            if(thang == 12 && ngay == 31){
                ngay = 1;
                thang = 1;
                nam++;
            }else{
                if(ngay == 31){
                    ngay = 1;
                    thang++;
                }else{
                    ngay++;
                }
                    
            }
        }else{
            if(ngay == 30){
                ngay = 1;
                thang++;
            }else{
                ngay++;
            }
        }
    }else{
        if(thang == 2){
            if(ngay == 28){
                ngay = 1;
                thang = 3;
            }else{
                ngay++;
                
            }
        }else if(thang == 7){
            if(ngay == 31){
                ngay = 1;
                thang = 8;
            }else{
                ngay++;
                
            }
        }else if(thang % 2 != 0 && thang < 8){
            if(ngay == 31){
                ngay = 1;
                thang++;
            }else{
                ngay++;
                
            }
        }else if(thang % 2 == 0 && thang >= 8){
            if(thang == 12 && ngay == 31){
                ngay = 1;
                thang = 1;
                nam++;
            }else{
                if(ngay == 31){
                    ngay = 1;
                    thang++;
                }else{
                    ngay++;
                }
                    
            }
        }else{
            if(ngay == 30){
                ngay = 1;
                thang++;
            }else{
                ngay++;
            }
        }
    }
    document.getElementById("kq1").innerHTML = ngay + " " + thang + " " + nam;
}

document.getElementById("prev").onclick = function(){
    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;

    if((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0 ){
        if(thang == 8){
            if(ngay == 1){
                thang = 7;
                ngay = 31;
            }else{
                ngay--;

            }
        }else if(thang == 3){
            if(ngay == 1){
                thang = 2;
                ngay = 29;
            }else{
                ngay--;
            }
        }else if(thang % 2 != 0 && thang < 8){
            if(thang == 1){
                if(ngay == 1){
                    ngay = 31;
                    thang = 12;
                    nam--;
                }
            }else{
                if(ngay == 1){
                    thang--;
                    ngay = 30;
                }else{
                    ngay--;
                }
            }
            
        }else if(thang % 2 == 0 && thang >= 8){
            if(ngay == 1){
                thang--;
                ngay = 30;
            }else{
                ngay--;
            }
        }else{
            if(ngay == 1){
                ngay = 31;
                thang--;
            }else{
                ngay--;
            }
        }
    }else{
        if(thang == 8){
            if(ngay == 1){
                thang = 7;
                ngay = 31;
            }else{
                ngay--;

            }
        }else if(thang == 3){
            if(ngay == 1){
                thang = 2;
                ngay = 28;
            }else{
                ngay--;
            }
        }else if(thang % 2 != 0 && thang < 8){
            if(thang == 1){
                if(ngay == 1){
                    ngay = 31;
                    thang = 12;
                    nam--;
                }
            }else{
                if(ngay == 1){
                    thang--;
                    ngay = 30;
                }else{
                    ngay--;
                }
            }
            
        }else if(thang % 2 == 0 && thang >= 8){
            if(ngay == 1){
                thang--;
                ngay = 30;
            }else{
                ngay--;
            }
        }else{
            if(ngay == 1){
                ngay = 31;
                thang--;
            }else{
                ngay--;
            }
        }
    }
    document.getElementById("kq1").innerHTML = ngay + " " + thang + " " + nam;
}

/**
 * Chương trình nhập vào tháng năm cho biết tháng có bao nhiêu ngày
 * Đầu vào: tháng năm nhập từ người dùng
 * Xử lí:
 * - Tạo biến ngày nhận kq
 * - Xét năm nhuận để cho tháng 2 số ngày thích hợp
 * - Các tháng còn lại mặc định ngày
 * - dùng if else so sánh tháng năm của người dùng nhập vào và đưa ra kết quả
 * Đầu ra: show kết quả
 */

document.getElementById("tinhNgay").onclick = function(){
    var thang = document.getElementById("thang1").value * 1;
    var nam = document.getElementById("nam1").value * 1;
    var ngay;

    if((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0 ){
        if(thang == 2){
            ngay = 29;
        }else if(thang == 7){
            ngay = 31;
        }else if(thang % 2 != 0 && thang < 8){
            ngay = 31;
        }else if(thang % 2 == 0 && thang >= 8){
            ngay = 31;
        }else{
            ngay = 30;
        }
    }else{
        if(thang == 2){
            ngay = 28;
        }else if(thang == 7){
            ngay = 31;
        }else if(thang % 2 != 0 && thang < 8){
            ngay = 31;
        }else if(thang % 2 == 0 && thang >= 8){
            ngay = 31;
        }else{
            ngay = 30;
        }
    }

    document.getElementById("kq2").innerHTML = "Tháng "+ thang + " có " + ngay + " ngày";
}


/**
 * Viết chương trình nhập vào số nguyên có 3 chữ số in ra cách đọc
 * Đầu vào: số nguyên có 3 chữ số
 * Xử lí:
 * - tạo biến nhận số nguyên người dùng nhập
 * - tạo 3 biến hangDonVi hangChuc hangTram để lấy giá trị sau khi tách số người dùng nhập
 * - tạo biến result nhận kq
 * - tạo function đọc từng đơn vị
 * - Dùng if để xét cách đọc cho từng trường hợp (đơn vị, chục ,trăm) và cộng kết quả vào result
 * Đầu ra: xuất kết quả
 */

document.getElementById("doc").onclick = function(){
    var soNguyen = document.getElementById("soNguyen").value * 1;
    var hangTram = Math.floor(soNguyen/100);
    var hangChuc = Math.floor((soNguyen - (hangTram*100))/10);
    var hangDonVi = Math.floor(soNguyen%10);

    var result = docHangTram(hangTram) + " ";
    if(hangChuc == 0 && hangDonVi == 0){
        result += " ";
    }else if(hangChuc == 0 && hangDonVi !=0){
        if(hangDonVi == 1){
            result += "lẻ một"
        }else{
            result += "lẻ " + docHangDonVi(hangDonVi);
        }
    }else if(hangChuc != 0){
        if(hangDonVi == 1 && hangChuc == 1){
            result += docHangChuc(hangChuc) + " một";
        }else if(hangDonVi == 1){
            result += docHangChuc(hangChuc) + " mốt";
        }
        else if(hangDonVi == 5){
            result += docHangChuc(hangChuc) + " lăm";
        }
        else{
            result += docHangChuc(hangChuc) + " " + docHangDonVi(hangDonVi);
        }
    }else{

    }
    // result += docHangDonVi(hangDonVi);
    document.getElementById("kq3").innerHTML = result;
}

function docHangDonVi(hangDonVi) {
    if(hangDonVi == 1){
        return "mốt";
    }else if(hangDonVi == 2){
        return "hai";
    }else if(hangDonVi == 3){
        return "ba";
    }else if (hangDonVi == 4) {
        return "bốn";
    }else if (hangDonVi == 5) {
        return "năm";
    }else if (hangDonVi == 6) {
        return "sáu";
    }else if (hangDonVi == 7) {
        return "bảy";
    }else if (hangDonVi == 8) {
        return "tám";
    }else if(hangDonVi == 9){
        return "chín";
    }else{
        return "";
    }
}
function docHangChuc(hangChuc){
    
        if(hangChuc == 1){
            return "mười";
        }else if(hangChuc == 2){
            return "hai mươi";
        }else if(hangChuc == 3){
            return "ba mươi";
        }else if (hangChuc == 4) {
            return "bốn mươi";
        }else if (hangChuc == 5) {
            return "năm mươi";
        }else if (hangChuc == 6) {
            return "sáu mươi";
        }else if (hangChuc == 7) {
            return "bảy mươi";
        }else if (hangChuc == 8) {
            return "tám mươi";
        }else if(hangChuc == 9){
            return "chín mươi";
        }else{
            return "";
        }
    
}

function docHangTram(hangTram) {
    if(hangTram == 1){
        return "Một trăm";
    }else if(hangTram == 2){
        return "Hai trăm";
    }else if(hangTram == 3){
        return "Ba trăm";
    }else if (hangTram == 4) {
        return "Bốn trăm";
    }else if (hangTram == 5) {
        return "Năm trăm";
    }else if (hangTram == 6) {
        return "Sáu trăm";
    }else if (hangTram == 7) {
        return "Bảy trăm";
    }else if (hangTram == 8) {
        return "Tám trăm";
    }else if(hangTram == 9){
        return "Chín trăm";
    }else{
        return "";
    }
}


/**
 * Nhập tọa độ và tên của 3 sinh viên
 * Đầu vào: Nhận dữ liệu từ 3 người dùng bao gồm tên và tọa độ
 * Xử lí:
 * - Tạo 9 biến nhận dữ liệu từ 3 người dùng
 * - Tạo function tinh khoang cách từ từng người đến trường đại học
 * - dùng if else tìm cự li xa nhất
 * Đầu ra: show kết quả
 */

document.getElementById("kt").onclick = function(){
    var ten1 = document.getElementById("ten1").value;
    var x1 = document.getElementById("x1").value * 1;
    var y1 = document.getElementById("y1").value * 1;

    var ten2 = document.getElementById("ten2").value;
    var x2 = document.getElementById("x2").value * 1;
    var y2 = document.getElementById("y2").value * 1;

    var ten3 = document.getElementById("ten3").value;
    var x3 = document.getElementById("x3").value * 1;
    var y3 = document.getElementById("y3").value * 1;

    var kc1 = tinhKhoangCach(x1,y1);
    var kc2 = tinhKhoangCach(x2,y2);
    var kc3 = tinhKhoangCach(x3,y3);

    var result;
    if(kc1 > kc2 && kc1 > kc3){
        result = "Họ tên sinh viên: " + ten1;
    }else if(kc2 > kc3){
        result = "Họ tên sinh viên: " + ten2;
    }else{
        result = "Họ tên sinh viên: " + ten3;
    }
    document.getElementById("kq4").innerHTML = result;
}

function tinhKhoangCach(x,y) {
    //tọa độ mặc định của trường, thay đổi tùy ý
    var truongX = 50;
    var truongY = 50;
    var khoangCach = Math.sqrt(Math.pow(x - truongX,2) + Math.pow(y - truongY,2));
    return khoangCach;
}