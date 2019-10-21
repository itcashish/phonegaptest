let url = 'http://www.patelashish.com/apps/workout/dataout.asp?apikey=5647382910&q=wktype';
      const get = async () => {
              // do the API call and get JSON response

              $.ajax({
                      type: "GET",
                      url: url,
                      cache: false,
                      crossDomain: true,
                      success: function(data,status,xhr){
                        //ons.notification.alert(data);
                        addOption(JSON.parse(data));
                      },
                      error: function (Xhr, textStatus, errorMessage) { 
                                ons.notification.alert(errorMessage);
                            }
                    });
              let url1 = 'http://www.patelashish.com/apps/workout/dataout.asp?apikey=5647382910&q=wktrainer'; 
              $.ajax({
                      type: "GET",
                      url: url1,
                      cache: false,
                      crossDomain: true,
                      success: function(data,status,xhr){
                        //ons.notification.alert(data);
                        addOption1(JSON.parse(data));
                      },
                      error: function (Xhr, textStatus, errorMessage) { 
                                ons.notification.alert(errorMessage);
                            }
                    });
           
           };
		// PhoneGap event handler
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            console.log("PhoneGap is ready");
            get();
       };
       function Save(){
        
        var wdate = document.getElementById('wdate').value
        var wtype = document.getElementById('wtype').value
        var wtrainer = document.getElementById('wtrainer').value
         var acalories = document.getElementById('acalories').value
         var totalcalories = document.querySelector('#totalcalories').value;
         var totaltime = document.querySelector('#totaltime').value;
         var bpm = document.querySelector('#bpm').value;
         var lowbpm = document.querySelector('#lowbpm').value;
         var highbpm = document.querySelector('#highbpm').value;
         var starttime = document.querySelector('#starttime').value;
         var endtime = document.querySelector('#endtime').value;
         var remark = document.querySelector('#remark').value;

          
         wdata = {};
         wdata.wdate = wdate;
         wdata.wtype = wtype;
         wdata.wtrainer = wtrainer;
         wdata.acalories = acalories;
         wdata.totalcalories = totalcalories;
         wdata.totaltime = totaltime;
         wdata.bpm = bpm;
         wdata.lowbpm = lowbpm;
         wdata.highbpm = highbpm;
         wdata.starttime = starttime;
         wdata.endtime = endtime;
         wdata.remark = remark;
         wdata.rectype = 'workout';
         //ons.notification.alert(JSON.stringify(wdata));
        let url2 = 'http://www.patelashish.com/apps/workout/saveexp.asp'; 
              $.ajax({
                      type: "POST",
                      url: url2,
                      cache: false,
                      crossDomain: true,
                      data: wdata,
                      success: function(data,status,xhr){
                          ons.notification.alert(data);
                          document.getElementById('acalories').value = '';
                          document.querySelector('#totalcalories').value = '';
                          document.querySelector('#totaltime').value = '';
                          document.querySelector('#bpm').value = '';
                          document.querySelector('#lowbpm').value = '';
                          document.querySelector('#highbpm').value = '';
                          document.querySelector('#starttime').value = '';
                          document.querySelector('#endtime').value = '';
                          document.querySelector('#remark').value = '';
                                          
                      },
                      error: function (Xhr, textStatus, errorMessage) { 
                                ons.notification.alert(errorMessage);
                            }
                    });
      };
  
      function addOption(tydata) { 

          var n = 1
          var x = document.getElementById("wtype");
          for (d in tydata.Data) {
              //document.getElementById("demo").innerHTML += myObj[x];
              var c = document.createElement("option");
              c.text = tydata.Data[d].TYNAME;
              c.value = tydata.Data[d].ID;
              
              x.options.add(c, n);
              n = n + 1;
              
            }	
        } ;
      
      function addOption1(tydata) { 

          var n = 1
          var x = document.getElementById("wtrainer");
          for (d in tydata.Data) {
              //document.getElementById("demo").innerHTML += myObj[x];
              var c = document.createElement("option");
              c.text = tydata.Data[d].tyname;
              c.value = tydata.Data[d].id;
              x.options.add(c, n);
              n = n + 1;
              
            }	
        }