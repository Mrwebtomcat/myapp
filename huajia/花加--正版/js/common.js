var server = 'http://hm.tzxmkj.cn'
//var server = 'http://localhost:1619'

var reg = new RegExp("\\[([^\\[\\]]*?)\\]", 'igm');
function GetQueryString(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    var r = window.location.search.substr(1).match(reg);

    if (r != null) return unescape(r[2]); return null;

}

//var html=document.getElementsByTagName("html")[0];
//var w=document.documentElement.clientWidth||document.body.clientWidth;
//html.style.fontSize=w/750+'px'
