window.onload=function(){

}
new Vue({
     el:"#main",
     data:{
    	 userInfo: null,
    	 topNavList: null,
    	 currentNavList: null,
    	 moved:0,
    	 unitList: null,
         checkedOrgNum:null,
         checkedOrgFourNum:null,
         orgUnitList:null,
         orgUnitFiveList:null,
         checkedOrgFiveNum:null,
         orgUnitSixList:null,
         checkedOrgSixNum:null,
         orgUnitThreeList:null,
         orgUserList:null,
         onclickUnitName:null,
         checkedOrgFourNum:null

     },
     created() {
         // this.arrow();
    	 on();
    	 nav();
    	    myHandle();
    	    myLocation();
    	    leftNavtab();
    	    navRight();
    	    selectPer();
        this.getUserInfo();
        	this.initCass();
          // this.findOrgUserBydeptcode();
       },
   /* updated()
    {
        // orgQueryListImg();
    },*/
     methods: {

         arrow(){
             // debugger;
              this.target;
             $('.arrow').find('img').toggleClass('icon_transform');
             $('.sel_title').slideToggle();
             // $('.nav_con').not($(this).next()).hide();

         },





initCass() {
             var height = $(document).height();
             // console.log($('.con').offset())
             var sTop = $('.con').offset().top;//169
             var h = height - sTop;
             $(window).resize(function () {
                 location.reload()
             });
             $('.con_leftnav').height(h);
             var lheight = $('.tab_content').height();
             $('.con_right').height(lheight - 20);
         },
         getUserInfo() {
             axios.get('system/user/info?empnumber=00100001')
                 .then((response) => {
                 var systemInfo = response.data.data;
             this.userInfo = systemInfo;
             if (this.userInfo !== null) {
                 this.topNavList = this.userInfo.navList;
                 for (var key in this.userInfo.navList) {
                     this.currentNavList = this.topNavList[key];
                     break;
                 }
             }
             $(".nav_left_click").addClass("disabled");
             if (this.moved >= this.topNavList.length - 7) {
                 $(".nav_right_click").addClass("disabled");
             }
             console.log(systemInfo);
         })
         .
             catch((error) => {
                 console.log(error);
         })
             ;
         },
         leftNavItemClick(item) {
             if (item.subList == null) {
                 if (item.appPath != null && $('#' + item.appPath) != null) {
                     $(".right_tab_con .system_con").hide();
                     $('#' + item.appPath).show();

                     this[$('#' + item.appPath).data("initclick")]();
                 }
                 console.log(item.appName);
             }
         },
         initBumenguanliClick() {
             console.log("初始化部门管理");
             axios.get('system/unit/all?unitParentcode=1')
                 .then((response) => {
                 this.unitList = response.data.data;
             console.log(systemInfo);
         })
         .
             catch((error) => {
                 console.log(error);
         })
             ;
         },
         showSelectUser() {
             $('.model_bg').show();
         },
         closeSelectUser() {
             $('.model_bg').hide();
         },
         navItemClick(key) {
             this.currentNavList = this.topNavList[key];
         },
         navRightClick(e) {
             let navLi = $('.nav_list>li');
             if (!$(".nav_right_click").is(".disabled")) {
                 this.moved++;
                 $('.nav_list').css("margin-left", -106 * this.moved);
                 $('.nav_left_click').removeClass("disabled");
                 if (this.moved == navLi.length - 7) {
                     $(".nav_right_click").addClass("disabled");
                 }
             }
         },
         navLeftClick(e) {
             let navLi = $('.nav_list>li');
             if (!$(".nav_left_click").is(".disabled")) {
                 this.moved--;
                 $('.nav_list').css("margin-left", -106 * this.moved);
                 $('.nav_right_click').removeClass("disabled");
                 if (this.moved == 0) {
                     $(".nav_left_click").addClass("disabled");
                 }
             }
         },


         // 查询全部二级公司
         initUserClick() {
             alert("user 初始化")
             axios.get('system/unit/findbyunitpropertylevel2?unitpropertylevel=2')
                 .then((response) => {
                 this.orgUnitList = response.data;
         })
             ;
         },

         // 查询分公司下的员工信息
         findOrgUserBydeptcode(unitdeptcode,unitName,e) {
             alert(unitName);
             this.onclickUnitName = unitName || "";
             this.orgUserList = null;
             axios.get('system/byuserdeptcode?userdeptcode=' + unitdeptcode)
                 .then((response) => {
                 this.orgUserList = response.data.data;
                }).catch(function (error) {
                 alert("查询" + unit + "失败！");
                 console.log(error);
             });
         },
         tranformSanjiao(e,list,num){
             for(var  i = 0;i<this.orgUnitList.length;i++){
                 if(this.orgUnitList[i].unitDeptcode != num)
                 this.orgUnitList[i].isXia = false;
                 else{
                     this.orgUnitList[i].isXia = (this.orgUnitList[i].isXia==null||!this.orgUnitList[i].isXia)?true:false;
                 }
             }
             console.log(e,list);
             if (list.isXia === undefined || list.isXia === null || !list.isXia){
                 e.target.setAttribute("class","icon_transform");
                 this.checkedOrgNum = null;

             }

             else{
                 e.target.setAttribute("class","");
                axios.get('system/unit/findbyunitparentcode3?unitparentcode='+ num + "&integer=3")
                    .then((response) => {
                    this.checkedOrgNum = num;
                this.orgUnitThreeList = response.data;
             })

             }

            // 查询三级公司

            // e.target.transform = 'rotate(180deg)';
             //$('.arrow2').slideToggle();
         },
         // 最大括弧
         tranformFourOrg(e,list,num){
             for(var  i = 0;i<this.orgUnitThreeList.length;i++){
                 if(this.orgUnitThreeList[i].unitDeptcode != num)
                     this.orgUnitThreeList[i].isXia = false;
                 else{
                     this.orgUnitThreeList[i].isXia = (this.orgUnitThreeList[i].isXia==null||!this.orgUnitThreeList[i].isXia)?true:false;
                 }
             }
             console.log(e,list);
             if (list.isXia === undefined || list.isXia === null || !list.isXia){
                 e.target.setAttribute("class","icon_transform");
                 this.checkedOrgFourNum = null;

             }

             else{
                e.target.setAttribute("class","");
                axios.get('system/unit/findbyunitparentcode3?unitparentcode='+ num + "&integer=4")
                    .then((response) => {
                    this.checkedOrgFourNum = num;
                this.orgUnitFourList = response.data;
             })

             }

             // 查询三级公司

             // e.target.transform = 'rotate(180deg)';
             //$('.arrow2').slideToggle();
         },
         tranformFiveOrg(e,list,num){
             for(var  i = 0;i<this.orgUnitFourList.length;i++){
                 if(this.orgUnitFourList[i].unitDeptcode != num)
                     this.orgUnitFourList[i].isXia = false;
                 else{
                     this.orgUnitFourList[i].isXia = (this.orgUnitFourList[i].isXia==null||!this.orgUnitFourList[i].isXia)?true:false;
                 }
             }
             console.log(e,list);
             if (list.isXia === undefined || list.isXia === null || !list.isXia){
                 e.target.setAttribute("class","icon_transform");
                 this.checkedOrgFiveNum = null;
             }

             else{
                 e.target.setAttribute("class","");
                 axios.get('system/unit/findbyunitparentcode3?unitparentcode='+ num + "&integer=5")
                     .then((response) => {
                     this.checkedOrgFiveNum = num;
                 this.orgUnitFiveList = response.data;

             })
             }

             // 查询三级公司

             // e.target.transform = 'rotate(180deg)';
             //$('.arrow2').slideToggle();
         }
}
 })
// 时间
function on() {
    var date1 =new Date;
    var date1 =new Date;
    var  year=date1.getFullYear();
    var  month=date1.getMonth();
    var day=date1.getDate()
    var xinqi=date1.getDay();
    var weekday=["日","一","二","三","四","五","六"];
    var time=year+"-"+(month+1)+"-"+day+"   星期"+weekday[xinqi]+"  ";
    document.getElementById("myTime").innerHTML = time;
}
//导航
function nav(){
    var moved=0;
    var navLi=$('.nav_list>li');
    $('.nav_left_click').click(function(){
        if(!$(this).is(".disabled")){
            moved--;
            $('.nav_list').css("margin-left",-106*moved);
            $('.nav_right_click').removeClass("disabled");
            if(moved==0){
                $(this).addClass("disabled");
            }
        }
    });
    $('.nav_right_click').click(function(){
        if(!$(this).is(".disabled")){
            moved++;
            $('.nav_list').css("margin-left",-106*moved);
            $('.nav_left_click').removeClass("disabled");
            if(moved==navLi.length-7){
                    $(this).addClass("disabled");
            }
        }
    });
}
// 导航右侧选项卡
function navRight(){
    $(".right_tab_con").hide();
    $(".xitongguanli").show();
    $('.nav_list li').click(function(){
　　　　 var index = $(this).index();
        $(".right_tab_con").hide().eq(index).show();
    })
}

$(".right_tab_con:not(:first)").hide();
    var index = $(this).index();
    $('.nav_list li').click(function(){
        $(".right_tab_con").hide().eq(index).show();
    })
// 我的待办
function myHandle(){
    var tableLi=$(".table_left_list>li");
    tableLi.click(function(){
        //获取点击的元素给其添加样式，讲其兄弟元素的样式移除
    　　　　$(this).addClass("tableactive").siblings().removeClass("tableactive");
    　　　　//获取选中元素的下标
    　　　　var index = $(this).index();
    　　　　$(this).parent().siblings().children().eq(index).css("display",'block')
    　　　　.siblings().css("display","none");
    })
}
// 您的位置
function myLocation(){
        $('.nav_list li').click(function(){
            $('.location').text('');
            $('.location').text(($(this).text())+">");
        })
}
//左侧导航选项卡
function leftNavtab(){
    $(".con_right_tab").hide();
    $(".system_con:not(:first)").hide();
    $('.panel-body ul li').click(function(){
        $(this).addClass('leftActive').siblings().removeClass('leftActive');
　　　　 var index = $(this).index();
        $(".con_right_tab").hide().eq(index).show();
        $(".system_con").hide().eq(index).show();
    })
}
/*function orgQueryListImg(){
        var imgUl = document.getElementById("orgQueryList").childNodes;
        for(var i = 0;i<imgUl.length;i++){
            debugger;
            var li = imgUl[i].childNodes;
            for(var j = 0;j<li.length;j++){
                if(imgUl[i].childNodes[j].nodeName == "IMG"){
                    imgUl[i].childNodes[j].onclick = tranform(imgUl[i].childNodes[j]);
                };
            }
        }
}*/
/*function tranform(e){
        debugger;
    e.target.transform = 'rotate(180deg)';
}*/
// 选择人员
function selectPer(){
    $('.select_person').click(function(){
         $('.model_bg').show();
        //  $(".model_bg").fadeIn(3000);
    })
    $('.close_icon').click(function(){
        $('.model_bg').hide();
    })
    // 选择人员折叠
  /*  $('.arrow').click(function(){
        alert(1111);
        $(this).find('img').toggleClass('icon_transform')
        $(this).next().slideToggle();
        $('.nav_con').not($(this).next()).hide();
    })*/
    // 部门管理折叠
    $('.department_list_title').click(function(){
        $(this).parent().siblings().slideToggle();
        // $('.nav_con').not($(this).next()).hide();
    })
}

// $(document).click(function(){
//     $('.model_bg').css('display','none');
// })

// height=$(window).height();
// console.log(height)
// sTop = $('.con_right').offset().top;//169
// var h=height-sTop;
// $(window).resize(function(){
//     location.reload()
// });
// $('.con_leftnav').height(h);
// var lheight=$('.tab_content').height();
// $('.con_right').height(lheight-20);


