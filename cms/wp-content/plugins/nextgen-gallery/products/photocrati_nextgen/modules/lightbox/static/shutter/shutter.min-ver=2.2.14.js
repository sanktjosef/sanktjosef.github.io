shutterReloaded={I:function(e){return document.getElementById(e)},settings:function(){var e=this,t=shutterSettings;e.imageCount=t.imageCount||0,e.msgLoading=t.msgLoading||"L O A D I N G",e.msgClose=t.msgClose||"Click to Close"},init:function(e){var t,i,n,s,o,d,l,h=this;for(shutterLinks={},shutterSets={},"object"!=typeof shutterSettings&&(shutterSettings={}),h.mobileOS="undefined"!=typeof orientation,s=0;s<document.links.length;s++)t=document.links[s],n=t.href.indexOf("?")==-1?t.href.slice(-4).toLowerCase():t.href.substring(0,t.href.indexOf("?")).slice(-4).toLowerCase(),".jpg"!=n&&".png"!=n&&".gif"!=n&&"jpeg"!=n||"sh"==e&&t.className.toLowerCase().indexOf("shutter")==-1||"lb"==e&&t.rel.toLowerCase().indexOf("lightbox")==-1||(t.className.toLowerCase().indexOf("shutterset")!=-1?o=t.className.replace(/\s/g,"_"):t.rel.toLowerCase().indexOf("lightbox[")!=-1?o=t.rel.replace(/\s/g,"_"):(o=0,d=-1),o&&(shutterSets[o]||(shutterSets[o]=[]),d=shutterSets[o].push(s)),l=t.href.slice(t.href.lastIndexOf("/")+1),i=t.title&&t.title!=l?t.title:"",shutterLinks[s]={link:t.href,num:d,set:o,title:i},t.onclick=new Function('shutterReloaded.make("'+s+'");return false;'));h.settings()},make:function(e,t){var i,n,s,o,d,l,h,r,a=this,u="",m="";if(a.Top||("undefined"!=typeof window.pageYOffset?a.Top=window.pageYOffset:a.Top=document.documentElement.scrollTop>0?document.documentElement.scrollTop:document.body.scrollTop),window.parent){var c=window.parent;if("undefined"!=typeof c.ngg_get_measures_for_frame){var g=c.ngg_get_measures_for_frame(window.frameElement);a.Top=a.Top+g.scrollTop}}"undefined"==typeof a.pgHeight&&(a.pgHeight=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight)),t?a.FS=t>0?1:0:a.FS=shutterSettings.FS||0,a.resizing&&(a.resizing=null),1==a.mobileOS?window.onorientationchange=new Function('shutterReloaded.resize("'+e+'");'):window.onresize=new Function('shutterReloaded.resize("'+e+'");'),document.documentElement.style.overflowX="hidden",a.VP||(a._viewPort(),a.VP=!0),(l=a.I("shShutter"))||(l=document.createElement("div"),l.setAttribute("id","shShutter"),document.getElementsByTagName("body")[0].appendChild(l),a.hideTags()),(d=a.I("shDisplay"))||(d=document.createElement("div"),d.setAttribute("id","shDisplay"),d.style.top=a.Top+"px",document.getElementsByTagName("body")[0].appendChild(d)),l.style.height=a.pgHeight+"px";var w=a.textBtns?" | ":"";shutterLinks[e].num>1?(i=shutterSets[shutterLinks[e].set][shutterLinks[e].num-2],u='<a href="#" id="prevpic" onclick="shutterReloaded.make('+i+');return false">&lt;&lt;</a>'+w,s=new Image,s.src=shutterLinks[i].link):u="",shutterLinks[e].num!=-1&&shutterLinks[e].num<shutterSets[shutterLinks[e].set].length?(n=shutterSets[shutterLinks[e].set][shutterLinks[e].num],m='<a href="#" id="nextpic" onclick="shutterReloaded.make('+n+');return false">&gt;&gt;</a>'+w,o=new Image,o.src=shutterLinks[n].link):m="",h=shutterLinks[e].num>0&&a.imageCount?'<div id="shCount">&nbsp;(&nbsp;'+shutterLinks[e].num+"&nbsp;/&nbsp;"+shutterSets[shutterLinks[e].set].length+"&nbsp;)&nbsp;</div>":"",r='<div id="shTitle"><div id="shPrev">'+u+'</div><div id="shNext">'+m+'</div><div id="shName">'+shutterLinks[e].title+"</div>"+h+"</div>",d.innerHTML='<div id="shWrap"><img src="'+shutterLinks[e].link+'" id="shTopImg" title="'+a.msgClose+'" onload="shutterReloaded.showImg();" onclick="shutterReloaded.hideShutter();" />'+r+"</div>",document.onkeydown=function(e){shutterReloaded.handleArrowKeys(e)},document.getElementById("shTopImg").src=shutterLinks[e].link,window.setTimeout(function(){shutterReloaded.loading()},1e3)},loading:function(){var e,t,i,n=this;(i=n.I("shWrap"))&&"visible"==i.style.visibility||(e=n.I("shShutter"))&&(n.I("shWaitBar")||(t=document.createElement("div"),t.setAttribute("id","shWaitBar"),t.style.top=n.Top+"px",t.style.marginTop=n.pgHeight/2+"px",t.innerHTML=n.msgLoading,e.appendChild(t)))},hideShutter:function(){var e,t,i=this;(e=i.I("shDisplay"))&&e.parentNode.removeChild(e),(t=i.I("shShutter"))&&t.parentNode.removeChild(t),i.hideTags(!0),window.scrollTo(0,i.Top),window.onresize=i.FS=i.Top=i.VP=null,document.documentElement.style.overflowX="",document.onkeydown=null},resize:function(e){var t=this;if(!t.resizing&&t.I("shShutter")){var i=t.I("shWrap");i&&(i.style.visibility="hidden"),window.setTimeout(function(){shutterReloaded.resizing=null},500),window.setTimeout(new Function('shutterReloaded.VP = null;shutterReloaded.make("'+e+'");'),100),t.resizing=!0}},_viewPort:function(){var e=this,t=window.innerHeight?window.innerHeight:0,i=document.body.clientHeight?document.body.clientHeight:0,n=document.documentElement?document.documentElement.clientHeight:0;t>0?(e.wHeight=t-i>1&&t-i<30?i:t,e.wHeight=e.wHeight-n>1&&e.wHeight-n<30?n:e.wHeight):e.wHeight=n>0?n:i,document.getElementsByTagName("body")[0].className.match(/admin-bar/)&&null!==document.getElementById("wpadminbar")&&(e.wHeight=e.wHeight-document.getElementById("wpadminbar").offsetHeight);var s=document.documentElement?document.documentElement.clientWidth:0,o=window.innerWidth?window.innerWidth:document.body.clientWidth;e.wWidth=s>1?s:o},showImg:function(){var e,t,i,n,s,o,d=this,l=d.I("shShutter"),h=d.I("shDisplay"),r=d.I("shTopImg"),a=d.I("shTitle"),u=(d.I("shNavBar"),0);if(l&&(!(e=d.I("shWrap"))||"visible"!=e.style.visibility)){if((t=d.I("shWaitBar"))&&t.parentNode.removeChild(t),l.style.width=h.style.width="",a.style.width=r.width-4+"px",i=d.wHeight-50,window.parent){var m=window.parent;if("undefined"!=typeof m.ngg_get_measures_for_frame){var c=m.ngg_get_measures_for_frame(window.frameElement);i=c.scrollHeight-50}}d.FS?(r.width>d.wWidth-10&&(l.style.width=h.style.width=r.width+10+"px"),document.documentElement.style.overflowX=""):(window.scrollTo(0,d.Top),r.height>i&&(r.width=r.width*(i/r.height),r.height=i,u=1),r.width>d.wWidth-16&&(r.height=r.height*((d.wWidth-16)/r.width),r.width=d.wWidth-16,u=1),a.style.width=r.width-4+"px"),n=d.Top+r.height+10,n>d.pgHeight&&(l.style.height=n+"px"),window.scrollTo(0,d.Top),s=.45*(i-r.height),o=s>3?Math.floor(s):3,document.getElementsByTagName("body")[0].className.match(/admin-bar/)&&null!==document.getElementById("wpadminbar")&&(o+=document.getElementById("wpadminbar").offsetHeight),h.style.top=d.Top+o+"px",e.style.visibility="visible"}},hideTags:function(e){var t=document.getElementsByTagName("select"),n=document.getElementsByTagName("object"),s=document.getElementsByTagName("embed"),o=document.getElementsByTagName("iframe"),d=e?"visible":"hidden";for(i=0;i<t.length;i++)t[i].style.visibility=d;for(i=0;i<n.length;i++)n[i].style.visibility=d;for(i=0;i<s.length;i++)s[i].style.visibility=d;for(i=0;i<o.length;i++)o[i].style.visibility=d},handleArrowKeys:function(e){var t=0;if(!e)var e=window.event;e.keyCode?t=e.keyCode:e.which&&(t=e.which);var i=document.getElementById("prevpic"),n=document.getElementById("nextpic"),s=document.getElementById("shTopImg");switch(t){case 39:n&&n.onclick();break;case 37:i&&i.onclick();break;case 27:s&&s.onclick()}}},shutterOnload=function(){shutterReloaded.init("sh")},"function"==typeof shutterOnload&&("undefined"!=typeof jQuery?jQuery(document).ready(function(){shutterOnload()}):"function"!=typeof window.onload?window.onload=shutterOnload:(oldonld=window.onload,window.onload=function(){oldonld&&oldonld(),shutterOnload()}));