$(Document).ready(function() {

    function kiemTraTen() {
        var name = $('#ip_Ten').val()
        var nameRegex = /^([A-ZÀ-Ỵ][a-zà-ỹ]+\s)*[A-ZÀ-Ỵ][a-zà-ỹ]+$/;

        if (name == "") {
            $("#txt_Ten").text("khong de rong");
            $("#ip_Ten").focus();
            return false;
        } else if (!nameRegex.test(name)) {
            $("#txt_Ten").text("viet hoa chu cai dau");
            $("#ip_Ten").focus();
            return false;
        } else {
            $("#txt_Ten").text("*");
            return true;
        }
    }

    $("#ip_Ten").blur(function() {
        kiemTraTen();
    })

    function kiemSoDienThoai() {
        var Sdt = $('#ip_Dt').val()
        var SdtRegex = /^(08||09||02)\d{3}$/;
        if (Sdt == "") {
            $("#txt_Dt").text("khong de rong");
            $("#ip_Dt").focus();
            return false;
        } else if (!SdtRegex.test(Sdt)) {
            $("#txt_Dt").text("bat dau bang 08,09,02 va co 5 so");
            $("#ip_Dt").focus();
            return false;
        } else {
            $("#txt_Dt").text("*");
            return true;
        }
    }

    $("#ip_Dt").blur(function() {
        kiemSoDienThoai();
    })

    function kiemDiaChi() {
        var Sdc = $('#ip_Dc').val()
        if (Sdc == "") {
            $("#txt_Dc").text("khong de rong");
            $("#ip_Dc").focus();
            return false;
        } else {
            $("#txt_Dc").text("*");
            return true;
        }
    }

    $("#ip_Dc").blur(function() {
        kiemDiaChi();
    })

    function kiemCsp() {
        var SCsp = $('#ip_Csp').val()
        if (SCsp == "") {
            $("#txt_Csp").text("khong de rong");
            $("#ip_Csp").focus();
            return false;
        } else {
            $("#txt_Csp").text("*");
            return true;
        }
    }

    $("#ip_Csp").blur(function() {
        kiemCsp();
    })

    function setDonGia() {
        var value = $("#ip_Csp").val()
        if (value == "") {
            $("#ip_Dg").val("");
            return false;
        } else if (value == "Ao thung cay thong") {
            $("#ip_Dg").val("30000");
            return true;
        } else if (value == "Dam cong so") {
            $("#ip_Dg").val("50000");
            return true;
        } else if (value == "Chan vay cotton") {
            $("#ip_Dg").val("60000");
            return true;
        }
    }
    $("#ip_Csp").change(function() {
        setDonGia();
    })

    function kiemSoLuong() {
        var SSl = $('#ip_Sl').val();
        var SSlRegex = /^\d+$/;

        if (SSl == "") {
            $("#txt_Sl").text("khong de rong");
            $("#ip_Sl").focus();
            return false;
        } else if (!SSlRegex.test(SSl)) {
            $("#txt_Sl").text("chi duoc nhap so");
            $("#ip_Sl").focus();
            return false;
        } else {
            $("#txt_Sl").text("*");
            return true;
        }
    }

    $("#ip_Sl").blur(function() {
        kiemSoLuong();
    })

    function chonPT() {
        var valueRadio = $("#ip_Cpt").val();
        if (valueRadio == "") {
            $("#txt_Cpt").text("khong de rong");
            $("#ip_Cpt").focus();
            return false;
        } else {
            $("#txt_Cpt").text("*");
            return true;
        }
    }

    $("#ip_Cpt").blur(function() {
        chonPT();
    })

    function setThanhTien() {
        var value1 = $("#ip_Dg").val()
        var value2 = $("#ip_Sl").val()
        if (value2 == "") {
            $("#txt_Sl").text("khong de rong");
            return false;
        } else if (value1 == "") {
            $("#txt_Dg").text("khong de rong");
            return false;
        } else {
            var tongTien = value1 * value2;
            $("#ip_Tt").val(tongTien);
            return true;
        }
    }
    $("#ip_Sl").blur(function() {
        setThanhTien();
    })


    var i = 1;
    $("#submit-btn").click(function(e) {
        if (kiemTraTen() && kiemSoDienThoai() && kiemDiaChi() && kiemCsp() && setDonGia() && kiemSoLuong() && chonPT() && setThanhTien()) {
            var name = $('#ip_Ten').val()
            var Sdt = $('#ip_Dt').val()
            var Sdc = $('#ip_Dc').val()
            var SCsp = $('#ip_Csp').val()
            var SSl = $('#ip_Sl').val();
            var valueRadio = $("#ip_Cpt").val();
            var Tt = $("#ip_Tt").val()
            var Sdg = $("#ip_Dg").val();

            var tdnew = "<tr><td>" + i +
                "</td><td>" + name +
                "</td><td>" + Sdt +
                "</td><td>" + Sdc +
                "</td><td>" + SCsp +
                "</td><td>" + SSl +
                "</td><td>" + valueRadio +
                "</td><td>" + Tt +
                "</td><td>" + Sdg +
                "</td></tr>";
            $("#myTable").append(tdnew);
            i++;
            $("#modelId").modal("hide");
        } else {
            alert("vui long dien day du thong tin");
        }

    });
})