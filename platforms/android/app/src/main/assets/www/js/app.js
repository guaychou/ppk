var Application = {
    initApplication : function(){
        $(window).load('pageinit','#page-one',function(){
            Application.initShowMhs();
        })
        $(document).on('click','#detail-mhs',function(){
            var nim = $(this).data('nimmhs');
            Application.initShowDetailMhs(nim);
        })
        },
        initShowMhs : function(){
            $.ajax({
                url : 'http://192.168.100.113/web_service.php',
                type : 'get',
                beforeSend : function() {
                    $.mobile.loading('show', {
                        text : 'please wait while retrieveing data',
                        textVisible : true
                    });
                },
                success : function(dataObject) {
                var appendList = '<li> <a href="#page-two?id='+dataObject.NIM+'" target="_self" id="detail-mhs" data-nimmhs="'+dataObject.NIM+'">\
                <h2>'+dataObject.nama+'</h2><p>' + dataObject.NIM+'</p><p><b>'+dataObject.Fakultas+'</b></p></a></li>'
                $('#list-mhs').append(appendList);
                $('#list-mhs').listview('refresh');
                console.log();
                },
                complete : function() {
                    $.mobile.loading('hide');
                    
                }
            });
        },

        initShowDetailMhs : function(nim){
            $.ajax({
                url : 'http://192.168.100.113/web_service.php',
                type : 'get',
                beforeSend : function() {
                    $.mobile.loading('show', {
                        text : 'please wait while retrieveing data',
                        textVisible : true
                    });
                }, success : function(dataObject) {
                    $('#p-nim, #p-nama, #p-jurusan, #p-fakultas, #p-alamat, #p-nohp').empty();
                    $('#p-nim').append('<b>NIM : </b>'+dataObject.NIM);
                    $('#p-nama').append('<b>nama : </b>'+dataObject.nama);
                    $('#p-jurusan').append('<b>jurusan : </b>'+dataObject.Jurusan);
                    $('#p-fakultas').append('<b>fakultas : </b>'+dataObject.Fakultas);
                    $('#p-alamat').append('<b>alamat : </b>'+dataObject.Alamat);
                    $('#p-nohp').append('<b>nohp : </b>'+dataObject.NoHp);
                },
                complete : function(){
                    $.mobile.loading('hide');
                }
            });
             
        }
    }
