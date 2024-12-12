$(document).ready(function(){$(document).on("keydown",".notDecimal",function(e){if(69==e.keyCode||189==e.keyCode||190==e.keyCode||109==e.keyCode||110==e.keyCode)return!1;$(this).attr("min","0")}),$(document).on("keydown","input[type='number']",function(e){if(69==e.keyCode||189==e.keyCode||109==e.keyCode||107==e.keyCode||187==e.keyCode)return!1;$(this).attr("min","0")}),$(document).on("click","#rope",function(){$("#curtain1").animate({width:"18px"},2e3),$("#curtain2").animate({width:"18px"},2e3),$("#curtain_buttons").hide(4e3)}),$(document).on("focusout",".ng-pristine",function(){$(this).removeClass("ng-pristine"),$(this).addClass("ng-dirty")}),$("*").each(function(){var e=this,n=$(this).css("font-size");n=n.substring(0,n.length-2);var t=parseInt(n),o=t-1,a=t+1;$(document).on("click",".dec",function(){$(e).css("font-size",+o)}),$(document).on("click",".nml",function(){$(e).css("font-size",+n)}),$(document).on("click",".inc",function(){$(e).css("font-size",+a)})}), $(document).on("keypress","input[type='number']",function(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8)){
     return false;
     }
   else {
     var len = $(this).val().length;
     var index = $(this).val().indexOf('.');
     if (index > 0 && charCode == 46) {
       return false;
     }
   }
      if (index > 0) {
       var CharAfterdot = (len + 1) - index;
       if (CharAfterdot > 3) {
         return false;
       }
     }
     
     });
     $(document).on("focusout","input[type='text']:not('.textNotTrim'), textarea",function(evt){
      var inputValue = $(this).val().trim()
      $(this).val(inputValue)
     })
     $(document).on("click",".moreLinkTd .showMore",function(){
      $(this).siblings("div").removeClass("textViewMore")
      $(this).siblings(".hideMore").show()
      $(this).hide()
     });
     $(document).on("click",".moreLinkTd .hideMore",function(){
      $(this).siblings("div").addClass("textViewMore")
      $(this).hide()
      $(this).siblings(".showMore").show()
     });
     
    //  $(document).on('click','#mapOpenProject', function(){

    //    sessionStorage.setItem("openMapProject","YES")
    //  })
// if(sessionStorage.getItem("S_A_Token")==null && window.location.hostname!="rerauat.gujarat.gov.in"){
//   var imported = document.createElement('script');
//   imported.src = '../assets/js/sdk.js';
//   document.head.appendChild(imported);
//     SDK.applicationId="4577300589570128702",SDK.backlinkURL="https://www.botlibre.com/login?affiliate=ankitjoshi",SDK.lang="en";var sdk=new SDKConnection,web=new WebChatbotListener;function gtag(){dataLayer.push(arguments)}function gtag(){dataLayer.push(arguments)}web.connection=sdk,web.instance="31321392",web.instanceName="GujRERA",web.prefix="botplatform",web.caption="Chat Now",web.greeting="how can i help you?",web.boxLocation="bottom-right",web.color="#009900",web.background="#fff",web.css="https://www.botlibre.com/css/chatlog.css",web.version=6,web.bubble=!0,web.backlink=!0,web.showMenubar=!0,web.showBoxmax=!0,web.showSendImage=!0,web.showChooseLanguage=!1,web.allowSpeech=!1,web.avatar=!1,web.chatLog=!0,web.popupURL="https://www.botlibre.com/chat?&id=31321392&embedded=true&avatar=false&chatLog=true&speak=disable&facebookLogin=false&application=4577300589570128702&bubble=true&menubar=true&chooseLanguage=false&sendImage=true&background=%23fff&prompt=You+say&send=&css=https://www.botlibre.com/css/chatlog.css&greeting=how+can+i+help+you%3F&language=en",web.createBox(),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-131807221-3");
//     }

$(document).on("mousemove scroll load", function(){
  $(".tableTotalCount").each(function(){
    if(!$(this).siblings().hasClass("countHide")){
      $(this).after("<strong class='countHide'>Total Result - 0/</strong>")
    }
    let pagCount = $(this).text()
    if(pagCount!="Total Result - 10/"){
      $(this).removeClass("d-none")
      $(this).siblings(".countHide").addClass("d-none")
    }else{
      $(this).siblings(".countHide").removeClass("d-none")
      $(this).addClass("d-none")
    }
  })
})

})



window.onscroll = function() {myFunction()};



function myFunction() {
    if(document.documentElement.scrollTop>=400){
      $("#validateFoem .ng-pristine").each(function(){
        $(this).removeClass("ng-pristine")
        $(this).addClass("ng-dirty")
      })
      $(".noValidForm .ng-dirty").each(function(){
        $(this).removeClass("ng-dirty")
        $(this).addClass("ng-pristine")
      })
    }
  };