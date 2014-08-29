
function opengraph(){
    //var pos=$("#sakedetails_content").offset();
    //console.log("POS : "+pos.top);
	//var pop=$("#popupBasic").popup({
		//opened: function(event, ui) { 
          //  $("#taesting_note").text($("#ninki").attr("textmemo"));
		//	draw();
		//}
	//});	
	//pop.popup("open");
}
function draw(){
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        //truc ngang
        ctx.moveTo(0,140);
        ctx.lineTo(280,140);
        ctx.moveTo(280,140);
        ctx.lineTo(270,135);
        
        ctx.moveTo(280,140);
        ctx.lineTo(270,145);
        
        //truc doc
        ctx.moveTo(140,0);
        ctx.lineTo(140,280);
        //mui ten
        ctx.moveTo(140,0);
        ctx.lineTo(135,10);
        ctx.moveTo(140,0);
        ctx.lineTo(145,10);
        
        
       // for(var i=2;i<=12;i++){
        //    ctx.moveTo(145,20*i);
        //    ctx.lineTo(155,20*i);
        //}
        ctx.stroke();
        ctx.restore();
        ctx.beginPath();
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        if(kaoric>=10)
        {
            kaoric=9.2;
        }
        if(ajic>=10)
        {
            ajic=9.2;
        }
        //ctx.arc(kaoric*20+20,280-(ajic*20),10,0,2*Math.PI);
        ctx.arc(kaoric*28+4,275-(ajic*28),10,0,2*Math.PI);
        //ctx.lineTo(25,105);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.stroke();
        ctx.font = "15px Sans-serif";
        ctx.strokeStyle = 'white';
        //ctx.lineWidth = 8;
        //var kaoric;
        //var ajic;
        //ctx.strokeText(kuchiataricurrent, (kaoric*20)+15,285-(ajic*20));
        console.log("kaoric : "+kaoric+" ajic: "+ajic);
        ctx.strokeText(kuchiataricurrent, (kaoric*28),280-ajic*28);
        ctx.font = "normal 8pt Arial";
        ctx.lineWidth = 0.7;
        ctx.strokeStyle = '#151517';
        ctx.fillStyle = '#151517';
        ctx.fillText("Sweet",5,160);
        ctx.fillText("Dry",255,160);
        } else {
        }
}
var kuchiataricurrent;//KUTHIATARI
var inputTextSearch;
var wakekindid;
var bottleiroid;
var lableiroid;
var hinshu;
var tokutei;
var koutei;
var year;
var listid;
var iwc;
var joyofsake;
var bti;
var sfwsc;
var mondeselecton;
var itqi;
var agencyaward;
var beveragescompetition;
var agencyaward2;
var other;
var startcod;
var endcod;
var currentkuramoto;
var pize;
var level;
var startyear;
var endyear;
function kuramotocurrent(id99){
    currentkuramoto=id99;
}
function subimitscoretosever(fav,lev){
    var urlload=getseverurl()+"score.php";
    var userid = window.localStorage.getItem("userid");
    if(userid==null){
        return;
    }
    $.getJSON(urlload,{id:sakecurrent,userid:userid,fav:fav,lev:lev},function(data){
              console.log(userid+""+sakecurrent);
              });
}
function savetoSever()
{
    subimitscoretosever(currentFAVORITE,scorecurrent);
    $("#ninki1").button("disable");
    window.localStorage.setItem("sakesubmit"+sakecurrent,"1");
    //$("#ninki1").attr("disabled",true);
    //$("#ninki1").css("opacity",".5");
    //alert("SUBMITED");
    $("#detailssake").trigger('pagecreate');
    
}
//open url
function openurl(){
    
    var urltoload=$("#kuramotoUrl").text();
    
    var pop=$("#popupURLkuramoto").popup({
                                   opened: function(event, ui) {
                                         $("#popupURLkuramoto").append($("<iframe />").attr("src", urltoload));                                   }
                                   });	
	pop.popup("open");
    pop.popup("close");
    
    
    console.log("aa"+urltoload);
    //$("#popupURLkuramoto").load(urltoload,function(){
     //                           $("#popupURLkuramoto").dialog("open");
     //                           });
}
//search sake
function searchsake(){
    backbutonclick=false;
    inputTextSearch=$("#search-basic").val();
    inputTextSearch=encodeURIComponent(inputTextSearch);
    wakekindid=$("#select-choice-1").val();
    var yearstart=$("#yearstart").val();
    var yearend=$("#yearend").val();
    console.log("StartYear:"+yearstart+"EndYear:"+yearend);
    if(yearstart!=""&&yearend!=""){
        yearstart=parseInt(yearstart);
        yearend=parseInt(yearend);
    if(yearend<yearstart){
        //alert("abc");
        
        navigator.notification.alert(
                                     geterrormessyear(), // message
                                     function(){
                                     },
                                     getapptitle(),// title
                                     'OK'// buttonName
                                     );
        return;
    }
    }
    
    if(wakekindid==-1){
        wakekindid="";
    }
    console.log("INPUT : "+inputTextSearch+" Wake id: "+wakekindid);
    //var i==0;
    bottleiroid="";
    $('#bottlecolor input:checked').each(function() {
                                 bottleiroid=bottleiroid+$(this).attr('v')+"-";
                                 
                                 });
    if(bottleiroid!=""){
        bottleiroid= bottleiroid.slice(0,bottleiroid.length-1);
    }
    console.log(bottleiroid);
    
    
    //
    lableiroid="";
    $('#raberucolor input:checked').each(function() {
                                 lableiroid=lableiroid+$(this).attr('v')+"-";
                                 
                                 });
    if(lableiroid!=""){
        lableiroid= lableiroid.slice(0,lableiroid.length-1);
    }
    console.log(lableiroid);
    //hinshu
    hinshu="";
    $('#hinshusearch input:checked').each(function() {
                                 hinshu=hinshu+$(this).attr('v')+"-";
                                 
                                 });
    if(hinshu!=""){
        hinshu= hinshu.slice(0,hinshu.length-1);
    }
    console.log("hinshu:"+hinshu);
    //koutei
    
    koutei="";
    $('#kouteisearch input:checked').each(function() {
                                 koutei=koutei+$(this).attr('v')+"-";
                                 
                                 });
    if(koutei!=""){
        koutei= koutei.slice(0,koutei.length-1);
    }
    //tokutei
    tokutei="";
    $('#tokuteimeshousearch input:checked').each(function() {
                                 tokutei=tokutei+$(this).attr('v')+"-";
                                 
                                 });
    if(tokutei!=""){
        tokutei= tokutei.slice(0,tokutei.length-1);
    }
    console.log("tokutei : "+tokutei);
    //year
    year="";
    $('#yearwinner input:checked').each(function() {
                                 year=year+$(this).attr('value')+"-";
                                 
                                 });
    if(year!=""){
        year= year.slice(0,year.length-1);
    }
    //ninkigaaru
    listid=null;
    $('#okinihairi input:checked').each(function() {
                                  listid=listid+$(this).attr('value')+"-";
                                        //console.log("LIST ID :"+listid);
                                  });
    if(listid!=null){
        listid=null;
        console.log("LIST ID :"+listid);
        var db = window.openDatabase("Ranksake", "1.0", "ranksake", 200000);	
        db.transaction(function(tx){
                       var querry="SELECT sake_id from rank where FAVORITE = 1";
                       console.log(querry);
                       tx.executeSql(querry,null,function(tx1,results){
                                      var len = results.rows.length;
                                      if(len>0){
                                      for(var i=0;i<len;i++){
                                        if(i!=(len-1)){
                                           listid=listid+results.rows.item(i).sake_id+"-";
                                           }else{
                                           listid=listid+results.rows.item(i).sake_id;
                                           }
                                        console.log("ID GET ID: "+results.rows.item(i).sake_id);
                                           }
                                      }
                                      },errorDB);
                       },errorDB);
        
    }
                       console.log(listid);
    //iwc
    iwc="";
    $('#iwcfiels input:checked').each(function() {
                                  iwc=iwc+$(this).attr('value')+"-";
                                  
                                  });
    if(iwc!=""){
        iwc= iwc.slice(0,iwc.length-1);
    }
    //joyofsake
    var joyofsake="";
    $('#joyofsake input:checked').each(function() {
                                  joyofsake=joyofsake+$(this).attr('value')+"-";
                                  
                                  });
    if(joyofsake!=""){
        joyofsake= joyofsake.slice(0,joyofsake.length-1);
    }
    
    //bti
    bti="";
    $('#btifiels input:checked').each(function() {
                                  bti=bti+$(this).attr('value')+"-";
                                  
                                  });
    if(bti!=""){
        bti= bti.slice(0,bti.length-1);
    }
    //SFWSC
    sfwsc="";
    $('#sfwscfields input:checked').each(function() {
                                  sfwsc=sfwsc+$(this).attr('value')+"-";
                                  
                                  });
    if(sfwsc!=""){
        sfwsc= sfwsc.slice(0,sfwsc.length-1);
    }
    
    //Monde Selecton mondeselecton
    mondeselecton="";
    $('#mondeselectonfields input:checked').each(function() {
                                  mondeselecton=mondeselecton+$(this).attr('value')+"-";
                                  
                                  });
    if(mondeselecton!=""){
        mondeselecton= mondeselecton.slice(0,mondeselecton.length-1);
    }
    
    //iTQi
    itqi="";
    $('#itqifields input:checked').each(function() {
                                  itqi=itqi+$(this).attr('value')+"-";
                                  
                                  });
    if(itqi!=""){
        itqi= itqi.slice(0,itqi.length-1);
    }
    
    //      National Tax Agency Award
    agencyaward="";
    $('#nationaltaxangencyfields input:checked').each(function() {
                                  agencyaward=agencyaward+$(this).attr('value')+"-";
                                  
                                  });
    if(agencyaward!=""){
        agencyaward= agencyaward.slice(0,agencyaward.length-1);
    }
    //National Liquer Beverages Competition
    beveragescompetition="";
    $('#nationalliquerbfields input:checked').each(function() {
                                  beveragescompetition=beveragescompetition+$(this).attr('value')+"-";
                                  
                                  });
    if(beveragescompetition!=""){
        beveragescompetition= beveragescompetition.slice(0,beveragescompetition.length-1);
    }
    
    //      National Tax Agency Award2
    agencyaward2="";
    $('#nationtax2fileds input:checked').each(function() {
                                  agencyaward2=agencyaward2+$(this).attr('value')+"-";
                                  
                                  });
    if(agencyaward2!=""){
        agencyaward2= agencyaward2.slice(0,agencyaward2.length-1);
    }
    
    //Other
    other="";
    $('#otherfields input:checked').each(function() {
                                  other=other+$(this).attr('value')+"-";
                                  
                                  });
    if(other!=""){
        other= other.slice(0,other.length-1);
    }
    
    startcod=$("#startarukouru").val();
    endcod=$("#endarukouru").val();
    pize=$("#fieldslist").val();
    if(pize==-1){
        pize="";
    }
    level=$("#lstwin").val();
    if(level==-1){
        level="";
    }
    startyear=$("#yearstart").val();
    endyear=$("#yearend").val();
    console.log("LEVEL : "+level);
    console.log("pize :"+pize);
    console.log("startyear : "+startyear);
    console.log("endyear"+endyear);
    console.log(startcod);

    $.mobile.changePage("#searchdetails");
}
function resetsearch(){
   
    $("input:checkbox").removeAttr("checked");
    $("#oninkicollap").trigger("collapse");
    $("#fieldscollap").trigger("expand");
    $("#codetocollap").trigger("collapse");
    $("#tokuteicollapse").trigger("collapse");
    $("#kouteicollapse").trigger("collapse");
    $("#hinshucollapse").trigger("collapse");
    $("#rabecolorcollapse").trigger("collapse");
    $("#bottlecolorcollapse").trigger("collapse");
    $("#selectcollapse").trigger("collapse");
    $("#searchcollapse").trigger("collapse");
   // $("input:search").value("");
    //$("input:search").text("");
    $("#yearstart").val("");
    $("#yearend").val("");
    $("#endarukouru").val("");
    $("#startarukouru").val("");
    $(".ui-input-text").val('').filter('.ui-slider-input').slider('refresh');
    //$("search-basic").val("").slider("refresh");
    //$("search-basic").trigger("refresh");
    $("#select-choice-1")[0].selectedIndex=0;
    $("#select-choice-1").selectmenu("refresh");
    //fieldslist
    $("#fieldslist")[0].selectedIndex=0;
    $("#fieldslist").selectmenu("refresh");
    //
    $("input:checkbox").checkboxradio("refresh");
    changeFields();
    //$("input[type=checkbox]").removeAttr("checked");
    //$("input:checkbox").
    console.log("UNCHECK!");
    
    $("#search").trigger('pagecreate');
   
    
}
//var tmpsakeid=-1;
var datalensearch=0;
var backbutonclick=false;
var loadsearchdetailspage=function(){
     //console.log("Back butoon click is "+backbutonclick);
    if(backbutonclick){
        console.log("Back butoon click is "+backbutonclick);
        backbutonclick=false;
        return;
    }
    var urlload=getseverurl()+"search.php";
    var topload=getlimitquery();
    var data1=[{"TOP_PAGE":topload}];
    $.mobile.loading( 'show', {
                     text: '讀懃ｴ｢荳ｭ...',
                     textVisible: true,
                     theme: 'z',
                     html: ""
                     });
    $.getJSON(urlload,
              {
              contentsearch:inputTextSearch,
              wakekindid:wakekindid,
              bottleiroid:bottleiroid,
              lableiroid:lableiroid,
              hinshu:hinshu,
              tokutei:tokutei,
              koutei:koutei,
              year:year,
              listid:listid,
              iwc:iwc,
              joyofsake:joyofsake,
              bti:bti,
              sfwsc:sfwsc,
              mondeselecton:mondeselecton,
              itqi:itqi,
              agencyaward:agencyaward,
              beveragescompetition:beveragescompetition,
              agencyaward2:agencyaward2,
              other:other,
              startcod:startcod,
              endcod:endcod,
              langid:getLanguage(),
              limit:getlimitquery(),
              pize:pize,
              level:level,
              startyear:startyear,
              endyear:endyear
              },
              function(data) {
             // var data3=[{"TOP_PAGE":topload}];	 
              var len=data.length;
              console.log("Data len to search is "+len);
              if(len==0)
              {
                $.mobile.loading( 'hide' );
                navigator.notification.alert(
                                           getNotfound(), // message
                                           function(){
                                           $.mobile.loading( 'hide' );
                                           //page_loadded=false;
                                           }, // callback
                                           getapptitle(),// title
                                           'OK'// buttonName
                                           );
              
                
                return;
              }
              var getnum=getmaxnumbertoshow();
              datalensearch=len-getnum;
              $("#listsakesearch").text("");
              console.log(len);
              for (var i=0;i<len;i++)
              {			
              if(i>getmaxnumbertoshow()-1){
              data[i].SHOW="hidesearch";
              }
              if(data[i].YEAR==null){
              data[i].SHOW_RIBBON="hideawards";
              }
              data[i].IMAGE_NAME=getsakeimage()+data[i].IMAGE_NAME;
              console.log(data[i].IMAGE_NAME);
              //if(len>0){
              $( "#sakesearchtemplate" ).tmpl(data[i]).appendTo( "#listsakesearch" );
              showorhidefavorite(data[i].SAKE_ID,false);
              //$("#searchdetails").trigger('pagecreate');
              }
              //}
              if(datalensearch>0)
              {
                if(datalensearch<topload){
                    topload=datalensearch;
                }
                var data1=[{"TOP_PAGE":topload}];
                $( "#fectrowtemplatesearch" ).tmpl( data1[0]).appendTo( "#listsakesearch" );
              
              }	
              $.mobile.loading( 'hide' );
              //showorhidefavorite();
              $("#listsakesearch").listview("refresh");
              //searchdetails
              $("#searchdetails").trigger('pagecreate');
             // console.log("Finish");
              }).error(function() {
                       navigator.notification.alert(
                                                    geterrormess(), // message
                                                    function(){
                                                     $.mobile.loading( 'hide' );
                                                    //page_loadded=false;
                                                    }, // callback
                                                    getapptitle(),// title
                                                    'OK'// buttonName
                                                    );
                       
                       });
    
    
};
$('a[data-rel="back"]').live("click",function(){
                             //alert("BACK CLICK");
                             backbutonclick=true;
                             searchmenuckick=false;
                             //alert(this.id);
                             });

var searchclick=false;
//current sake
function currentsake(id,s){
    backbutonclick=false;
	sakecurrent=id;
	//issearch=s;
    if(s==1){
        var urlload=getseverurl()+"addsearchnum.php";
        if(!searchclick){
            //$.mobile.page.prototype.options.newsandsearchid="search";
            //$("#newsandsearchid").html($("#newsandsearchid").attr("search"));
            $("#newsandsearchid").text($("#newsandsearchid").attr("search"));
            searchclick=true;
        }else{
            //$.mobile.page.prototype.options.newsandsearchid="search";
            $("#newsandsearchid").children().children().first().html($("#newsandsearchid").attr("search"));
            //$("#newsandsearchid").html($("#newsandsearchid").attr("search"));
        }
        $.getJSON(urlload,{id:sakecurrent},function(data){
                    console.log("ADD SEARCH NUMBER SUCCESS");
                  
        });
    }else{
       // $("#newsandsearchid span span").text("abc");
        if(!searchclick){
            $("#newsandsearchid").text($("#newsandsearchid").attr("new"));
            //$("#newsandsearchid").button("refresh");
            //$("#newsandsearchid").text($("#newsandsearchid").attr("new"));
            searchclick=true;
        }else{
            $("#newsandsearchid").children().children().first().html($("#newsandsearchid").attr("new"));
            //$("#newsandsearchid").val("NEW");
            //$("#newsandsearchid").button("refresh");
            //$.mobile.page.prototype.options.newsandsearchid="search";
            //$("#newsandsearchid").text($("#newsandsearchid").attr("new"));
        }
    }
    //detailssake
    $("#detailssake").trigger('pagecreate');
}
var sakecurrent=0;
var issearch=false;
//hide link
function hidelink(){
	document.documentElement.style.webkitTouchCallout = 'none';
}
//reg user
function reg_user(){
		  //alert("test");
          var userid = window.localStorage.getItem("userid");
          if(userid==null){
              var tmpuser=GUID();
              var url=getseverurl();
              $.getJSON(url+"reg_user.php",{
                        id:tmpuser
                        },function(data){
                        if(data[0]==1){
                            //alert(1);
                            window.localStorage.setItem("userid",tmpuser);
                        }
                        });
          }else{
             // if (confirm("Exit App?")) navigator.app.exitApp();
               //alert("registered");
               //navigator.device.exitApp();
			  // alert("NOt reg");
              
          }
}
function loadnewsake(){
    console.log("loadnewsake_page : "+loadnewsake_page);
    if(!loadnewsake_page){
	 var topload=getlimitquery();
	 var data1=[{"TOP_PAGE":topload}];	 
	 var urlload=getseverurl()+"new.php";
        $.mobile.loading( 'show', {
                         text: '繝ｭ繝ｼ繝�繧｣繝ｳ繧ｰ...',
                         textVisible: true,
                         theme: 'z',
                         html: ""
                         });
	 $.getJSON(urlload,{langid:getLanguage()},function(data){
		
        //$("#listsake").html("");
        var shownum=getmaxnumbertoshow();
               console.log("SHOW NUMMBER"+shownum);
		var len=data.length;
        console.log("LIST COUNT : "+len);
        datalennewtoshow=len-shownum;//get data length of news page
               //alert(len);
		for (var i=0;i<len;i++)
		{			
			if(i>shownum-1){
				data[i].SHOW="hide";
			}
			if(data[i].YEAR==null){
				data[i].SHOW_RIBBON="hideawards";
			}
               data[i].IMAGE_NAME=getsakeimage()+data[i].IMAGE_NAME;
               console.log(data[i].IMAGE_NAME);
               
			$("#saketemplate").tmpl(data[i]).appendTo( "#listsake1" );
               showorhidefavorite(data[i].SAKE_ID,true);
               

		}
		if(len>shownum)
		{
               if((len-shownum)<topload){
                    topload=len-shownum;
               }
              // alert(topload);
               var data1=[{"TOP_PAGE":topload}];
               //$( "#fectrowtemplate" ).tmpl( data1[0]).appendTo( "#listsake1" );
               $( "#fectrowtemplate" ).tmpl( data1[0]).insertAfter( "#listsake1" );
               //
               
		}
               
        loadnewsake_page=true;
		$.mobile.loading('hide');
        $("#listsake1").listview("refresh");
        $("#newsake").trigger('pagecreate');
        //
        
        
	 }).error(function() {
              //alert("ERROR!");
              //console.log(geterrormess());
              navigator.notification.alert(
                                        geterrormess(), // message
                                        function(){
                                           loadnewsake_page=false;
                                           $.mobile.loading( 'hide' );	
                                           }, // callback
                                        getapptitle(),// title
                                        'OK'// buttonName
                                        );
              
              
    });
    }
    else{
        console.log("Page loaded");
       // $.mobile.loading( 'hide' );
    }
	 	
}
var loadnewsake_page=false;//kiem tra xem trang new da load chua? true neu load roi
function showorhidefavorite(id,b){
    var db = window.openDatabase("Ranksake", "1.0", "ranksake", 200000);	
	db.transaction(function(tx1){
                   var querry="SELECT LIKING_LEVEL,FAVORITE from rank where sake_id="+id;
                   console.log(querry);
                   tx1.executeSql(querry,null,function(tx2,results){
                                  var len = results.rows.length;
                                  if(len==0){
                                  //$('#star').raty({score:0,click:vote});
                                    console.log("get liking success - no rows");
                                  }else{
                                  //$('#star').raty({score:results.rows.item(0).LIKING_LEVEL,click:vote});
                                  if(results.rows.item(0).FAVORITE==1){
                                    currentFAVORITE=results.rows.item(0).FAVORITE;
                                  if(b){
                                    $("#favoriteid"+id).removeClass("hideimg");
                                    $("#favoriteids1"+id).removeClass("hideimg");
                                  }else{
                                    $("#searchfavoriteid"+id).removeClass("hideimg");
                                    $("#searchfavoriteid"+id).removeClass("hideimg");
                                  }
                                  }
                                    console.log("get liking success");
                                  }   
                                  
                                  },errorDB);
                   },errorDB);
}
//var issearchclickfirst=true;
function showsearch(count){
    datalensearch=datalensearch-count;
    if(datalensearch<count){
        $("#showtopnumbersearch").text(datalensearch);
    }

    $(".hidesearch").slice(0,count).removeClass("hidesearch");
    if($(".hidesearch").slice(0,count).length==0){
        $(".showtopsearch").hide("slow");
    }
    //$(".hide").removeClass("hide");
    //$(".showtop").hide("slow");
    $("#listsakesearch").listview("refresh");
}
var datalennewtoshow=0;
function show(count){
        datalennewtoshow=datalennewtoshow-count;
    if(datalennewtoshow<count){
        $("#showtopnumbernew").text(datalennewtoshow);
    }
		$(".hide").slice(0,count).removeClass("hide");
		if($(".hide").slice(0,count).length==0){
			$(".showtop").hide("slow");
		}
		//$(".hide").removeClass("hide");
		//$(".showtop").hide("slow");
		$("#listsake1").listview("refresh");
}
$( "#popupBasic" ).popup({
    beforeposition: function( event, ui ) {
		//alert("foo!");
	}
});
var loaddetailsake=function(){
    if(backbutonclick){
        backbutonclick=false;// comment back button click
        $("#bg_main_content_detail").removeClass("hide");
        return;
    }
    //if(tmpsakeid==sakecurrent){
     //   return;
    //}
    $("#bg_main_content_detail").addClass("hide");
	$("#bg_main_content_detail").text("");
	$.mobile.loading( 'show', {
				text: '繝ｭ繝ｼ繝�繧｣繝ｳ繧ｰ...',
				textVisible: true,
				theme: 'z',
				html: ""
				});
    
	//$("#sakedetails").listview("refresh");
	var url=getseverurl();
    var idlang=getLanguage();
	var status=true;
	$.getJSON(url+"details.php",{id:sakecurrent,langid: idlang},function(data){
		if(data[0]!=null){
			$.getJSON(url+"getprize.php",{id:sakecurrent},function(data1){
				//alert(data.length);
				data[0].IMAGE_NAME=getsakeimage()+data[0].IMAGE_NAME;
                      console.log(data[0].IMAGE_NAME);
                      data[0].SAKE_ID=sakecurrent;
				data[0].PRIZES=[];
				if(data[0].YEAR==null){
					data[0].YEAR="hideawards";
                      
				}
				for(var j=0;j<data1.length;j++){
					data[0].PRIZES[j]=data1[j];
				}
                data[0].Botoiros=[];
				$.getJSON(url+"getinfo.php",{sakeid: sakecurrent,pid: 0,langid: idlang},function(data2){
					
					for(var j=0;j<data2.length;j++){
						data[0].Botoiros[j]=data2[j];
                          console.log(data2[j]);
					}
					data[0].raberuiro=[];
					$.getJSON(url+"getinfo.php",{sakeid: sakecurrent,pid: 1,langid: idlang},function(data3){
						for(var j=0;j<data3.length;j++){
							data[0].raberuiro[j]=data3[j];
                            console.log(data3[j]);
						}
						data[0].ryouri=[];
						$.getJSON(url+"getinfo.php",{sakeid: sakecurrent,pid: 16,langid: idlang},function(data4){
							for(var j=0;j<data4.length;j++){
								data[0].ryouri[j]=data4[j];
							}
                                  console.log(data[0]);
                            console.log("aaaa");
							$("#sakedetailstemplate").tmpl(data[0]).appendTo("#bg_main_content_detail");
                                  tmpsakeid=data[0].SAKE_ID;
                                  console.log("aaaaabbbb");
                                  kuchiataricurrent=data[0].KUTHIATARI;
                                  kaoric=data[0].KAORI;
                                  ajic=data[0].AZI;
                            console.log("bbb");
                                  
							//$("#bg_main_content_detail").listview("refresh");
							$.mobile.loading( 'hide' );
                            $("#bg_main_content_detail").removeClass("hide");
                            getrank();
                             $("#detailssake").trigger('pagecreate');
                                  
						});
					});
				});
			});
		}		
              }).error(function() {
                       navigator.notification.alert(
                                                    geterrormess(), // message
                                                    function(){
                                                    $.mobile.loading( 'hide' );
                                                    $("#bg_main_content_detail").removeClass("hide");
                                                    //page_loadded=false;
                                                    }, // callback
                                                    getapptitle(),// title
                                                    'OK'// buttonName
                                                    );
                       
                       });	
};

var kaoric;
var ajic;


var vote=function(score,evt){
    //alert(score);
    scorecurrent=score;
    window.localStorage.removeItem("sakesubmit"+sakecurrent);
    $("#ninki1").button("enable");
    var db = window.openDatabase("Ranksake", "1.0", "ranksake", 200000);
    db.transaction(function(tx){
                   tx.executeSql("delete from rank where sake_id="+sakecurrent);
                   if(score>0){
                   tx.executeSql("INSERT INTO rank (sake_id,FAVORITE,LIKING_LEVEL) VALUES ("+sakecurrent+","+currentFAVORITE+","+score+")");
                   //subimitscoretosever(currentFAVORITE,scorecurrent);
                   
                   //enable submit remove store
                   
                   }
                   }, errorDB);	
    
}
function oninki(){
    if(currentFAVORITE==0){
        currentFAVORITE=1;
        //$("#favorite").addClass("hide");
        //$("#favoriteid"+sakecurrent).addClass("hideimg");
        $("#ninki").children().first().text($("#ninki").attr("on"));
        $("#favoriteids1"+sakecurrent).removeClass("hideimg");
        $("#searchfavoriteid"+sakecurrent).removeClass("hideimg");
        //searchfavoriteid
        $("#favoriteid"+sakecurrent).removeClass("hideimg");
        //$("#detailssake").trigger("pagecreate");
        
    }else{
        currentFAVORITE=0;
        //$("#favorite").removeClass("hide");
        //$("#favoriteid"+sakecurrent).removeClass("hideimg");
        $("#ninki").children().first().text($("#ninki").attr("off"));
        $("#favoriteids1"+sakecurrent).addClass("hideimg");
        $("#searchfavoriteid"+sakecurrent).addClass("hideimg");
        $("#favoriteid"+sakecurrent).addClass("hideimg");
        //$("#detailssake").trigger("pagecreate");
    }
    window.localStorage.removeItem("sakesubmit"+sakecurrent);
    $("#ninki1").button("enable");
    var db = window.openDatabase("Ranksake", "1.0", "ranksake", 200000);
    db.transaction(function(tx){
                   tx.executeSql("delete from rank where sake_id="+sakecurrent);
                   
                   tx.executeSql("INSERT INTO rank (sake_id,FAVORITE,LIKING_LEVEL) VALUES ("+sakecurrent+","+currentFAVORITE+","+scorecurrent+")");
                   console.log("currentFAVORITE :"+currentFAVORITE+"scorecurrent :"+scorecurrent);
                   
                  // subimitscoretosever(currentFAVORITE,scorecurrent);
                   }, errorDB);	
   // subimitscoretosever(currentFAVORITE,scorecurrent);

    
}
//var ninki=0;
var currentFAVORITE=0;
var scorecurrent=0;
function getSuccess(tx1,results){
    //alert("a");
    //return;
    var hasubmit=window.localStorage.getItem("sakesubmit"+sakecurrent);
    if(hasubmit!=null)
    {
        $("#ninki1").button("disable");
    }
    
    var len = results.rows.length;
    if(len==0){
        $('#star').raty({starOn:'StarOn.png',starOff:'starOff.png',width:300,score:0,click:vote});
        currentFAVORITE=0;
        scorecurrent=0;
        console.log("get liking success - no rows");
        $("#ninki").children().first().text($("#ninki").attr("off"));
        $("#favoriteids1"+sakecurrent).addClass("hideimg");
        console.log("CURRENTSAKE :"+sakecurrent);
        $("#detailssake").trigger("pagecreate");
        //return;
    }else{
        console.log("HAS ROWS");
        scorecurrent=results.rows.item(0).LIKING_LEVEL;
        //currentFAVORITE=
        //scorecurrent=results.rows.item(0)
        $('#star').raty({starOn:'StarOn.png',starOff:'starOff.png',width:300,score:scorecurrent,click:vote});
        currentFAVORITE=results.rows.item(0).FAVORITE;
        if(currentFAVORITE==1){
            //currentFAVORITE=1;
            //$("#favorite").removeClass("hide");
            $("#ninki").children().first().text($("#ninki").attr("on"));
            $("#favoriteids1"+sakecurrent).removeClass("hideimg");
            $("#detailssake").trigger("pagecreate");
            console.log("has faviours");
            
        }
        //currentFAVORITE=results.rows.item(0).LIKING_LEVEL;
        //console.log("get liking success");
        //$("#detailssake").trigger("pagecreate");
    }
    //get in sever +)
    //getrank.php
    var urlload1=getseverurl()+"getrank.php";
    var uiid = window.localStorage.getItem("userid");
    console.log("UIID:"+uiid);
    console.log("currentsake : "+sakecurrent);
    console.log(urlload1);
    $.getJSON(urlload1,{sakeid:sakecurrent,userid:uiid},function(data99){
              console.log("GET LINKING IN SEVER ");
              if(data99[0]!=null){
                console.log("GET LINKING FROM SEVER HAD ROW");
                console.log("LEVEL : "+data99[0].LIKING_LEVEL+"FAVIOUS :"+data99[0].FAVORITE);
                if(currentFAVORITE!=data99[0].FAVORITE||scorecurrent!=data99[0].LIKING_LEVEL){
                    //save to sever
                    savetoSever();
                    console.log("SAVE TO SEVER");
                }
              }
              
              });
    
    
    
}
function getrankfromdb(tx1){
    var querry="SELECT LIKING_LEVEL,FAVORITE from rank where sake_id="+sakecurrent;
    console.log(querry);
    tx1.executeSql(querry,null,getSuccess,errorDB);
    //alert("ECUTE");
}
function getrank(){
   
	var db = window.openDatabase("Ranksake", "1.0", "ranksake", 200000);	
	db.transaction(getrankfromdb,errorDB);
}
var page_loadded=false;
var filldata=function(){
    if(page_loadded){
        if(searchmenuckick){
            searchmenuckick=false;
            resetsearch();
            
        }
        return;
    }
    //var yearcurrent=new Date().getFullYear();
    //for(var i=1;i<=5;i++){
     //   $("#lcheckbox-1b").text((yearcurrent-i+1));
     //   $("#lcheckbox-1b").attr("value",yearcurrent-i+1);
    //}
    $("#search").trigger('pagecreate');
    //alert(yearcurrent);
    var url=getseverurl();
    var urlload=url+"getwideuse.php";
    //alert(urlload);
    //load wakekindid
    $.getJSON(urlload,
              {
              langid:getLanguage(),
              pid:5
              },function(data) {
              $("#select-choice-1").text("");
              $( "#sakeoptiontemplatezero" ).tmpl( null).appendTo( "#select-choice-1" );
              $.each(data, function(i,item){
                     $("#select-choice-1").append("<option value=\""+item.C_ID+"\">"+item.NAME+"</option>");
                     });
              
              });
    //load 繝懊ヨ繝ｫ縺ｮ濶ｲ
    $.getJSON(urlload,{langid:getLanguage(),pid:0},function(data){
              $( "#bottlecolor").text("");
              $.each(data, function(i,item){
                     //alert(item.NAME);
                     //bottlecolortemplate
                     $( "#bottlecolortemplate").tmpl(item).appendTo( "#bottlecolor");
                     });
                $("#search").trigger('pagecreate');
                //$("#bottlecolortemplate").listview('refresh');
              
              });
    //Load 繝ｩ繝吶Ν縺ｮ濶ｲ
    $.getJSON(urlload,{langid:getLanguage(),
              pid:1},function(data){
              $( "#raberucolor" ).text("");
              $.each(data,function(i,item){
                      console.log(i);
                      $( "#bottlecolortemplate" ).tmpl(item).appendTo( "#raberucolor");
                     });
              $("#search").trigger('pagecreate');
              
              });
    //Load 蜩∫ｨｮ
    $.getJSON(urlload,{langid:getLanguage(),
              pid:2},function(data){
              $( "#hinshusearch" ).text("");
              $.each(data,function(i,item){
                     console.log(i);
                     $( "#bottlecolortemplate" ).tmpl(item).appendTo( "#hinshusearch");
                     });
              $("#search").trigger('pagecreate');
              });
    
    //load 蟾･遞�
    $.getJSON(urlload,{langid:getLanguage(),
              pid:3},function(data){
              $( "#kouteisearch" ).text("");
              $.each(data,function(i,item){
                     console.log("蟾･遞�"+i);
                     $( "#bottlecolortemplate" ).tmpl(item).appendTo( "#kouteisearch");
                     });
              $("#search").trigger('pagecreate');
              });
    //tokuteimeshousearch
    //load 迚ｹ螳壼錐遘ｰ
    $.getJSON(urlload,{langid:getLanguage(),
              pid:4},function(data){
              $( "#tokuteimeshousearch" ).text("");
              $.each(data,function(i,item){
                     console.log(i);
                     $( "#bottlecolortemplate" ).tmpl(item).appendTo( "#tokuteimeshousearch");
                     page_loadded=true;
                     });
              $("#search").trigger('pagecreate');
              }).error(function() {
                       navigator.notification.alert(
                                                    geterrormess(), // message
                                                    function(){
                                                    $.mobile.loading( 'hide' );
                                                    //page_loadded=false;
                                                    }, // callback
                                                    getapptitle(),// title
                                                    'OK'// buttonName
                                                    );
                       
                       });
    
    //$("#search").trigger('pagecreate');
    

}
var kuramotoload=function(){
    //var id=$.url().param('id');
    //var urlreturn=$.url().param('urlreturn');
    $("#kuramotodetails").text("");
    var url=getseverurl();
    var idlang=getLanguage();
    //alert(currentkuramoto);
    $.getJSON(url+"kuramoto.php",
              {
              id: currentkuramoto,
              langid:getLanguage(),
              tagmode: "any",
              format: "json"
              },
              function(data) {
              $.each(data, function(i,item){
                     item.IMAGE_NAME=getkuramotoimage()+item.IMAGE_NAME;
                     console.log(item.IMAGE_NAME);
                     $( "#kuramototemplate" ).tmpl(item).appendTo( "#kuramotodetails" );
                     $("#kuramotodetails").listview("refresh");
                     })}).error(function() {
                                navigator.notification.alert(
                                                             geterrormess(), // message
                                                             function(){
                                                             $.mobile.loading( 'hide' );
                                                             //page_loadded=false;
                                                             }, // callback
                                                             getapptitle(),// title
                                                             'OK'// buttonName
                                                             );
                                
                                });
            
}
function changeFields(){
    var selectchange=$("#fieldslist").val();
    if(selectchange==-1)
    {
        $("#lstwin").text("");
        $( "#sakeoptiontemplatezero" ).tmpl( null).appendTo( "#lstwin" );
        $("#lstwin").selectmenu('refresh', true);
        return;
        
    }else{
        $("#lstwin").text("");
        $( "#sakeoptiontemplatezero" ).tmpl( null).appendTo( "#lstwin" );
        var urlload=getseverurl()+"getwideuse.php";
        $.getJSON(urlload,{langid:getLanguage(),pid:selectchange},function(data){
                  $.each(data, function(i,item){
                         $( "#sakeoptiontemplate" ).tmpl( item).appendTo( "#lstwin" );
                         });
                  $("#lstwin").selectmenu('refresh', true);
                  });
        
    }

}
$("#fieldslist").live("change",function(e){
                      changeFields();
                      //alert($("#fieldslist").val());
                      });
//load details page
$("#newsake").live("pageshow",function(){
                   loadnewsake();
                   });
//$("#listsake").html("");
$("newsake").live("pagebeforeshow",function(){
                  if(!loadnewsake_page){
                    $("#listsake").text("");
                  }
                  });
$("#detailssake").live("pageshow",loaddetailsake);
$("#kuramotopage").live("pageshow",kuramotoload);
$("#kuramotopage").live("pagebeforeshow",function(){
                        $("#kuramotodetails").text("");
                        //$("#kuramotodetails").listview("refresh");
                        
                        });

$("#searchdetails").live("pageshow",loadsearchdetailspage);
$("#searchdetails").live("pagebeforeshow",function(e){
                         if(backbutonclick){
                            return;
                         }
                         $("#listsakesearch").text("");
                         //$("#listsakesearch").listview("refresh");
                         });
//$("#search").live("pageshow",filldata);
$("#search").live("pagebeforeshow",filldata);
//$("#search").live("pagecreate",filldata);
$("#detailssake").live("pagebeforeshow",function(){
                       if(backbutonclick){
                        //backbutonclick=false;
                        return;
                       }
                       $("#bg_main_content_detail").html("");
                       //$("#sakedetails").listview("refresh");
                       $("#bg_main_content_detail").addClass("hide");
                       });
$("#closepopup").live("click",function(){
                      //$.mobile.popup.prototype.option.history=false;
                      //$("#sakedetails_content").scrollTop(100);
                      //$("#sakedetails_content").animate({ scrollTop: 1000 }, 2500);
                      $.mobile.silentScroll(450);
                      $("#popupBasic").popup("close");
                       });
function onDeviceReady() {		
            hidelink();
			var db = window.openDatabase("Ranksake", "1.0", "ranksake", 200000);
			db.transaction(populateDB, errorDB, successDB);		
            //loadnewsake();
}
var searchmenuckick=false;
function firstclick(menuclick){
    if(menuclick==2){
        //alert("Search click");
        searchmenuckick=true;
    }
}
function populateDB(tx){
	var value = window.localStorage.getItem("dbCreate");
	if(value==null){
		//CREATE  TABLE "main"."rank" ("SAKE_ID" INTEGER PRIMARY KEY  NOT NULL , "FAVORITE" INTEGER NOT NULL , "LIKING_LEVEL" INTEGER NOT NULL )
        //alert("DB create");
		tx.executeSql('DROP TABLE IF EXISTS rank');
		tx.executeSql('CREATE TABLE rank (sake_id INTEGER PRIMARY KEY  NOT NULL , FAVORITE INTEGER NOT NULL,LIKING_LEVEL INTEGER NOT NULL)');
        window.localStorage.setItem("dbCreate", "dbCreated");
	}else{
        console.log("database created");
		return;
	}
}

function errorDB(err){
	//alert("Error processing SQL: "+err.code);
    console.log(err.message);
}
function successDB(){
    console.log("DB had been created");
}
var onDocumentReady = function(){
	document.addEventListener("deviceready", onDeviceReady, false);	
	reg_user();
	//loadnewsake();
};
$(document).bind("mobileinit", function() {
		$.mobile.defaultPageTransition = 'slide';
		$.mobile.ajaxEnabled = false;
	}).ready(onDocumentReady);
