$(document).ready(function () {

    // get list valaue by click

    //LINES to EDIT BY KILI

    $('#hotelValue li').click(function () {        
        var text = $(this).text();        
        $('#hotelMenu').show();
        $('#hotelHead').text(text);

        $.ajax({
            type: "POST",
            url: "/showHotel",
            data: {hotelName : $(this).text()}, 
        }).done(function(data){        
            console.log(data);
                    
            $('#datatable').load(' #datatable')                              
        });
    // LINES to EDIT BY KILI END
    });    

    $('#hotelMenu').hide();

 //------------------------------------------------------   ---------------------------   ---------------------------   
    //register model
    $('#registerhotel').click(
        function () {  
            console.log('register');
            //register button
            $('#regHotelButton').click(function (e) { 
                $.ajax({
                    type: "POST",
                    url: "/reg",
                    data: {name : $('#hotelnameReg').val()},                      
                }).done(function(data) {
                    $('#sidebar-wrapper').load(' #sidebar-wrapper')
                    //console.log(data.name);                                        
                    $('#hotelnameReg').val(''),    
                    $('#hotelMenu').hide();       
                    console.log("done");
                              
                });
            e.preventDefault();
               
           });
        }        
    );    

//------------------------------------------------------   ---------------------------   ---------------------------   
    //update model

    $('#updateHotel').click(function () {
        console.log('update')
        //add menu
        $('#addMenu').click(function (e) { 
            console.log('');
            $.ajax({
                type: "POST",
                url: "/addupdate",
                data: {
                    updatename : $('#updateHotelname').val(),      
                    menuItem : $('#menuItem').val(),
                    menuPrice : $('#menuPrice').val()
                }                                
            }).done(function (data) {
                console.log(data.updateName);
                console.log(data.menuItem);
                console.log(data.menuPrice);                                                          
                $('#updateHotelname').val(''),
                $('#menuItem').val(''),
                $('#menuPrice').val(''),
                $('#hotelMenu').hide();
              });
            e.preventDefault();
            
        });




        //update menu
        $('#updatemenu').click(function (e) { 
            console.log('');
            $.ajax({
                type: "POST",
                url: "/updateupdate",
                data: {
                    updatename : $('#updateHotelname').val(),      
                    menuItem : $('#menuItem').val(),
                    menuPrice : $('#menuPrice').val()
                }                                
            }).done(function (data) {
                console.log(data.updateName);
                console.log(data.menuItem);
                console.log(data.menuPrice);                                                          
                $('#updateHotelname').val(''),
                $('#menuItem').val(''),
                $('#menuPrice').val(''),
                $('#hotelMenu').hide();
              });
            e.preventDefault();
            
        });



        //delete Menu
        $('#deleteMenu').click(function (e) { 
            console.log('');
            $.ajax({
                type: "POST",
                url: "/deleteupdate",
                data: {
                    updatename : $('#updateHotelname').val(),      
                    menuItem : $('#menuItem').val(),
                    menuPrice : $('#menuPrice').val()
                }                                
            }).done(function (data) {
                console.log(data.updateName);
                console.log(data.menuItem);
                console.log(data.menuPrice);                                                          
                $('#updateHotelname').val(''),
                $('#menuItem').val(''),
                $('#menuPrice').val(''),
                $('#hotelMenu').hide();
              });
            e.preventDefault();
            
        });
    });        

//------------------------------------------------------   ---------------------------   ---------------------------   
    //delete model
    $('#deleteHotelModel').click(
        function () {  
            console.log('delete');
            //register button
            $('#deletehotelperm').click(function (e) {                             
                $.ajax({
                    type: "POST",
                    url: "/del",
                    data: {delhname : $('#delhname').val()},            
                }).done(function(data) {
                    
                    $('#sidebar-wrapper').load(' #sidebar-wrapper')                    

                    //console.log(data.delhname);
                    $('#delhname').val('');
                    $('#hotelMenu').hide();
                });
            e.preventDefault();
               
           });
        }
    );    

   
   
});
