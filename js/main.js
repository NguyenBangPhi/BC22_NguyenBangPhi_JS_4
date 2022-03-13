/**
 * Sắp xếp 3 số
 * Đầu vào : 3 số nguyên được nhập vào
 * Xử lí:
 * Tạo 3 biến nhận giá trị nhập vào
 * Dùng if else if(tìm số bé nhất) và hoán đổi vị trí theo thứ tự tăng dần
 * Dùng if để kiểm tra 2 số cuối cùng, nếu so2 > so3 thì hoán đổi lại giá
 * Đầu ra: xuất kết quả
 */

 document.getElementById("sapXep").onclick = function (){
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;

    if(so1 > so2){
        var temp = so1;
        so1 = so2;
        so2 = temp;
    }else if(so1 > so3){
        var temp = so1;
        so1 = so3;
        so3 = temp;
    }
    if(so2 > so3){
        var temp = so2;
        so2 = so3;
        so3 = temp;
    }
    console.log("Các số sau khi sắp xếp: " + so1 + "" + so2 + "" + so3);
 }


//cách khác
// document.getElementById("sapXep").onclick = function () {
//     var so1 = document.getElementById("so1").value * 1;
//     var so2 = document.getElementById("so2").value * 1;
//     var so3 = document.getElementById("so3").value * 1;

//     var arr = [so1,so2,so3];
//     console.log("Kết quả sau sắp xếp: " + arr.sort(function(a,b){return a-b;}));
//     document.getElementById("kq1").innerText = "Kết quả sau sắp xếp: " + arr.sort(function(a,b){return a-b;});
// }




/**
 * Chương trình chào hỏi
 * Đầu vào: Người dùng chọn chức vụ trong gia đình
 * Xử lí:
 * Lấy chức vụ vừa được chọn lưu vào biến
 * Xét từng if để đưa ra lời chào phù hợp
 * Đầu ra: show kết quả
 */

document.getElementById("chao").onclick = function (){
    var chucVu = document.getElementById("chucVu").value;
    var result;
    if(chucVu == "B"){
        result = "Xin chào Ba";
    }else if(chucVu == "M"){
        result = "Xin chào Mẹ";
    }else if(chucVu == "AT"){
        result = "Xin chào anh trai";
    }else{
        result = "Xin chào em gái";
    }
    document.getElementById("kq2").innerHTML = result;
}


/**
 * Đếm số chẳn lẻ
 * Đầu vào : 3 số được nhập từ người dùng
 * Xử lí :
 * Tạo 3 biến nhận dữ liệu từ người dùng
 * tạo biến soLe và soChan
 * if else kiểm tra từng số
 * nếu là số chẵn tăng biến soChan lên 1
 * nếu là số lẻ tăng soLe lên 1
 * Đầu ra: show kết quả
 */

document.getElementById("demChanLe").onclick = function(){
    var so1 = document.getElementById("so_1").value * 1;
    var so2 = document.getElementById("so_2").value * 1;
    var so3 = document.getElementById("so_3").value * 1;

    var soChan = 0;
    var soLe = 0;
    if(so1 % 2 == 0){
        soChan++;
    }else{
        soLe++;
    }

    if(so2 % 2 == 0){
        soChan++;
    }else{
        soLe++;
    }

    if(so3 % 2 == 0){
        soChan++;
    }else{
        soLe++;
    }

    document.getElementById("kq3").innerHTML = "Số chẵn là: " + soChan + " Số lẻ là: " + soLe;
}


/**
 * Kiểm tra tam giác
 * Đầu vào: 3 cạnh tam giác nhập từ người dùng
 * Xử lí:
 * Tạo 3 biến nhận 3 cạnh nhập từ người dùng
 * Tạo 1 result
 * dùng if else để kiểm tra phải tam giác không
 * Trong câu lệnh if trên lồng thêm if else if để kiểm tra loại tam giác
 * Đầu ra: show kết quả
 */

document.getElementById("kiemTra").onclick = function(){
    var a = document.getElementById("canh1").value * 1;
    var b = document.getElementById("canh2").value * 1;
    var c = document.getElementById("canh3").value * 1;

    var result;
    if ((a + b > c) && (a + c > b) && (b + c > a) && (a > 0) && (b > 0) && (c > 0)) {
        if ((a == b) && (b == c)) {
            result = "Tam giác đều";
        } else if ((a == b) || (a == c) || (b == c)) {
            result = "Tam giác cân";
        } else if ((a * a == b * b + c * c) ||
                    (b * b == a * a + c * c) ||
                    (c * c == a * a + b * b)) {
                        result = "Tam giác vuông";
        } else if (((a * a + b * b == c * c) && (a == b)) ||
                    ((a * a + c * c == b * b) && (a == c)) ||
                    ((b * b + c * c == a * a) && (b == c))) {
                        result = "Tam giác vuông cân";
        } else {
                result = "Tam giác thường";
        }
    } else {
        result = "3 cạnh của tam giác không thỏa mãn điều kiện lập thành tam giác";
    }
    document.getElementById("kq4").innerHTML = result;
}