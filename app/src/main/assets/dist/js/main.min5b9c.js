!function(e){function t(t){var n=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=n;var a=this,o=e("#scroll-btn"),r=(o.find("i"),o.find(".current")),s=o.find(".total"),l=e(".related-posts");this.canvas=t,this.canvas.width=188,this.canvas.height=188,this.context=this.canvas.getContext("2d"),this.context.lineWidth=6,this.context.strokeStyle="#ffffff",this.x=this.canvas.width/2,this.y=this.canvas.height/2,this.radius=this.canvas.height/4,this.endPercent=1,this.curPerc=0,this.counterClockwise=!1,this.circ=2*Math.PI,this.quart=Math.PI/2,this.speed=1,this.animate=function(e){var t=this;t.context.clearRect(0,0,t.canvas.width,t.canvas.height),t.context.beginPath(),t.context.arc(t.x,t.y,t.radius,-t.quart,t.circ*e-t.quart,!1),t.context.stroke(),t.curPerc<=t.endPercent?(t.curPerc+=t.speed,t.curPerc<=t.endPercent&&n(function(){t.animate(t.curPerc/100)})):(t.curPerc-=t.speed,t.curPerc>=t.endPercent&&n(function(){t.animate(t.curPerc/100)}))},this.setScrollColor=function(e){void 0!==e&&(a.context.strokeStyle=e)},this.update=function(e,t){var n=e/t*100;r.html(i(e+1)),s.html(i(t+1)),this.endPercent=n,this.animate(),e==t?(o.addClass("is-last"),l.addClass("active")):(o.removeClass("is-last"),l.removeClass("active"))}}function n(t){var n=t.css("color");q.setScrollColor(n),e(".scroll-viewport, .breadcrumb").css("color",n)}function a(){var n=e("#loader"),a=e(".scroll-page"),i=a.children(),o=i.length-1;return n.length?(q=new t(n[0]),void q.update(0,o)):!1}function i(e){return e=e.toString(),e.length<2?"0"+e:e}function o(){return e(window).width()<992?!0:!1}function r(e){if(e.indexOf("?")>-1)return console.log(e),e=e.split("?")[0],console.log(e),e;e=e.slice(0,-1);var t=e.lastIndexOf("/");return t=-1==t?e.length:t+1,e=e.substring(0,t)}function s(e){e=e.replace("+","");var t=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return t.test(e)}function l(e){for(var t=[],n=0;e>n;n++)t.push(n);for(var a,i,o=t.length;0!==o;)i=Math.floor(Math.random()*o),o-=1,a=t[o],t[o]=t[i],t[i]=a;return t}function c(e,t){t=t||location.search,e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)"),a=n.exec(t);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}function d(){L=window.getComputedStyle(O[0],":after").getPropertyValue("content").replace(/"|'/g,""),F.reset(),e(document).off("touchmove"),"small"==L&&(F.destroySlider(),b()),"large"==L&&(F.init(),e("#header").removeClass("scroll-down nav-down"))}function f(){return O=e("#js-mediaquery-reference"),Modernizr.mq("only all")?(O.on("webkitTransitionEnd MSTransitionEnd oTransitionEnd transitionend",d),void d()):!1}function u(){var t=e(".section__gallery:not(.section__gallery--team)");t.length&&t.each(function(t){for(var n=e(this),a=n.children().length,i="gallery_pager_"+t,o=e('<div class="bx-pager" id="'+i+'"></div>'),r=n.closest("section"),s=e('<button class="slider-next">View More</button>'),l=0,d=n.hasClass("section_gallery--team"),f=0;a>f;f++)o.append('<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+(f+1)+"</a></div>");var u={mode:"fade",pager:!0,controls:!1,infiniteLoop:!0,prevText:"",nextText:"",pagerCustom:"#"+i,speed:500,startSlide:l,onSliderLoad:function(){o.addClass("active"),n.addClass("active")}};d&&(s.prependTo(o).on("click",function(){h.goToNextSlide()}),window.teamPage&&(u.startSlide=teamPage),c("p")&&(u.startSlide=parseInt(c("p")-1)),u.onSlideBefore=function(e,t,n){window.teamPage=n}),r.append(o);var h=n.bxSlider(u)})}function h(){var t=e(".section_gallery--team");t.length&&t.each(function(t){for(var n=e(this),a=n.children().length,i="team_pager_"+t,o=e('<div class="bx-pager" id="'+i+'"></div>'),r=n.closest("section"),s=e('<button class="slider-next">View More</button>'),l=0,d=0;a>d;d++)o.append('<div class="bx-pager-item"><a href="" data-slide-index="'+d+'" class="bx-pager-link">'+(d+1)+"</a></div>");var f={mode:"fade",pager:!0,controls:!1,infiniteLoop:!0,prevText:"",nextText:"",pagerCustom:"#"+i,speed:500,startSlide:l,onSliderLoad:function(){o.addClass("active"),n.addClass("active")}};s.prependTo(o).on("click",function(){u.goToNextSlide()}),window.teamPage&&(f.startSlide=teamPage),c("p")&&(f.startSlide=parseInt(c("p")-1)),f.onSlideBefore=function(e,t,n){window.teamPage=n},r.append(o);var u=n.bxSlider(f);e(document).on("afterPaneChange",function(){u.reloadSlider(f)})})}function v(){var t=window.location.pathname,n=e(".nav__links a");return"/"==t?void n.removeClass("active"):void n.each(function(n){var a=e(this),i=a.attr("href");t.indexOf(i)>-1?a.addClass("active"):a.removeClass("active")})}function g(){var t=e("[data-theme]"),n=e("#page-wrapper");t.length?n.removeClass().addClass(t.data("theme")):n.removeClass()}function m(){e("#burger, #page-content").removeClass("active"),e("#header").removeClass("scroll-down nav-down"),e("#scroll-btn").off("click"),g(),a(),F.init(),Y.destroy(),Y.init(),u(),w(),picturefill(),D.run(0),_(),v()}function p(){if(c("slide")){var t=c("slide");e("#"+t).addClass("active").siblings().removeClass("active")}}function w(){var t=e(".scroll-page"),a=t.children(),i=a.length-1,r=(e(".pane-header").css("background-color"),e(".scroll-page__section"));t.length&&o()&&n(a.first());r.waypoint(function(t){if(!o())return!1;var a=e(this.element),r=a.index(),r="down"==t||0==r?r:r-1;a.addClass("active visited").siblings().removeClass("active"),a.data("trigger")&&e(document).trigger(a.data("trigger")),q.update(r,i),n(a)},{offset:function(){return e(window).height()-60}}),r.waypoint(function(t){var n=e(this.element),a=(n.index(),"down"==t?n:n.prev());a.length?a.addClass("current").siblings().removeClass("current"):r.removeClass("current")},{offset:10})}function b(){e("#scroll-btn").off("click").on("click",function(){var t=e(".scroll-page__section.current").next();t.length||(t=e(".scroll-page__section:first"));var n=t.length?t.offset().top:e(".scroll-page").offset().top;e("body, html").animate({scrollTop:n},1e3)})}function C(){function t(){var t=e(this).scrollTop();Math.abs(r-t)<=s||(t>r&&t>l?e("header").removeClass("nav-down").addClass("nav-up"):t+e(window).height()<e(document).height()&&e("header").removeClass("nav-up").addClass("nav-down"),r=t)}
var n=e("#header"),a=n.find(".bg"),i=e(".pane--left .bg").css("background-color");a.css("background-color",i);var o,r=(e(".pane--right").waypoint(function(e){"down"==e?n.addClass("scroll-down"):"up"==e&&n.removeClass("scroll-down")},{offset:70}),0),s=5,l=n.outerHeight();e(window).scroll(function(e){o=!0}),setInterval(function(){o&&(t(),o=!1)},250)}
			 function x(t){
				 var n={},a=t.find(".form-control");
				 a.each(function(){var t=e(this),a=t.data("entry"),i=t.val();a&&(n[a]=i)}),e.ajax({type:"POST",url:t.attr("action"),data:n,dataType:"json",statusCode:{0:function(){},200:function(){}}})}function y(t,n){var a=t.find("#form--contact__name").val(),i=t.find("#form--contact__email").val(),o=t.find("#form--contact__message").val();e.get(baseurl+"/contact-email.html",function(t){var r=e(t);
				 r.find("#contact_name").html(a).end().find("#contact_email").html(i).end().find("#contact_message").html(o),e.ajax({type:"POST",url:"",data:{key:"0kX5m11zVMRobcF1FH5YRQ",message:{from_email:i,to:[{email:"",name:"Keith Scandone",type:"to"},{email:"",name:"Mike Gadsby",type:"to"},{email:"",name:"Barry Golombeck",type:"to"}],autotext:"true",subject:"New Contact from o3world.com",preserve_recipients:"true",html:r.html()}}}).done(function(e){console.log(e),n&&n()})})}function S(t,n){var a=t.serialize();e.ajax({type:"GET",url:t.data(""),data:a,cache:!1,dataType:"jsonp",jsonp:"c",contentType:"application/json; charset=utf-8",error:function(e){console.log("error ")},success:function(t){t.msg.indexOf("already subscribed")>-1&&(t.msg="You are already subscribed to the newsletter."),t.msg.indexOf("Almost finished")>-1&&(t.msg="Almost finished... We need to confirm your email address to complete the subscription process. Please click the link in the email we just sent you."),e(".form-message").addClass("active").find(".message").html(t.msg).find("a").remove().end(),n&&n()}})}function _(){k(),e(".collapse").collapse({toggle:!1})}function k(){if(c("job")){var t=c("job");e('a[href*="?job='+t+'"]').addClass("active").siblings(".collapse").addClass("in"),T()}}function P(t){var n=t.parent().find(".container-post");if(n.hasClass("loaded"))return void t.toggleClass("active").parent().find(".collapse").collapse("show");var a=t.attr("href");e.get(a).success(function(a){var i=e(a).find(".post__content").contents();n.addClass("loaded").append(i),t.toggleClass("active").parent().find(".collapse").collapse("show")})}function T(){var t=e(".trigger.active");if(!t.length)return!1;if(o()){var n=t.offset().top;e("body, html").animate({scrollTop:n},600)}else{var n=t.offset().top+e(".allow-scroll .section").scrollTop()-20;e(".allow-scroll .section").animate({scrollTop:n},600)}}function M(){var t=e(".section_gallery--team"),n=t.find(".team-list"),a=1,i=0;A||(A=l(teamCount));var o=e("[data-team-index]:last").data("team-index");if(o&&!window.teamPage){i=A.indexOf(o);for(var r=0;r<A.length;r++){var s=A[r];if(r==i&&a>1){var c=e(".breadcrumb a"),d=c.attr("href").split("&p=")[0];c.attr("href",d+"&p="+a)}(r+1)%9==0&&a++}}if(t.length&&!(n.length>1))for(var f=n.children(),u=(e('<li><ul class="team-list list--unstyled"></li>'),n),r=0;r<A.length;r++){var s=A[r],h=f.eq(s);h.appendTo(u),(r+1)%9==0&&(a++,t.append('<li><ul class="team-list list--unstyled"></li>'),u=e(".team-list:last"))}}function j(){p(),E=e(".loader-bar"),E.children().last().on("webkitTransitionEnd MSTransitionEnd oTransitionEnd transitionend",function(){setTimeout(function(){E.removeClass("loading")},500)}),e("#burger").on("click",function(){e("#burger, #page-content, #header").toggleClass("active")}),e(".nav-boxes a").on("click",function(){e(this).addClass("active").parent().siblings().children().removeClass("active")}),FastClick.attach(document.body),M(),C(),g(),a(),z.init(),Y.init(),f(),h(),u(),w(),D.run(0),_()}var q,L,O,E,R=!1,A=!1,z=new function(){var t=this;this.setStartSlide=function(e){var t=c("slide");return t&&e.find("#"+t).addClass("active").siblings().removeClass("active"),e},this.loadPanes=function(n,a){var i=e(n).find(".pane"),o=e(".pane"),r=o.children(),s=(e("#page-content"),"forward"==a?"":" back");i=t.setStartSlide(i),e(document).trigger("beforePaneChange"),i.each(function(t){var n=e(this),a=n.children(),i=n.data("pane"),r=o.filter("[data-pane='"+i+"']");r.attr("class",n.attr("class")),a.addClass("is-loading"+s),r.append(a)}),e(document).trigger("beforePaneAnimate"),setTimeout(function(){e(".pane__inner").addClass("animating"+s).last().one("otransitionend oTransitionEnd transitionend",function(){e(".pane__inner").removeClass("animating is-loading back"),r.remove(),e(document).trigger("afterPaneChange")})},1200)},this.getPanes=function(t,n){n="undefined"!=typeof n?n:"forward";var a=!1;e(document).trigger("beforePaneExit"),e.get(t).success(function(i){a=!0;var o=e(i).filter("title").text(),r='meta[property^="og"], link[rel="canonical"], meta[name="description"]',s=e(r),l=e(i).filter(r);s.remove(),e("head").append(l),History.pushState(o,o,t),z.loadPanes(i,n)}).error(function(){window.location=t}),setTimeout(function(){a||(window.location=t)},5e3)},this.getPaneDirection=function(e){var t=window.location.pathname,n=e.split("/"),a=t.split("/");return e==t?!1:n.length>=a.length?"forward":"back"},this.init=function(){var n=(document.domain,'a[href^="/"]:not(.no-ajax), a[href^="http://o3world.com"]');e(document).on("click",n,function(n){if(!o()&&Modernizr.csstransforms3d){R=!0,n.preventDefault();var a=e(this),i=a.attr("href").replace("http://o3world.com",""),r=a.data("direction")?a.data("direction"):z.getPaneDirection(i);return r?void t.getPanes(i,r):(e("#burger, #page-content, #header").removeClass("active"),!1)}})}};e(window).on("statechange",function(){if(1==R)return R=!1,!1;var e=(History.getState(),History.savedStates),t=e[e.length-1].url,n=e[e.length-2].url,a=t.split("/"),i=n.split("/");return t.split("?")[0]==n.split("?")[0]?!1:void(o()?window.location.href=t:a.length>=i.length?z.getPanes(t):z.getPanes(t,"back"))});var F=new function(){var t=this,a=null;this.setMousewheel=function(){var t;e(".scroll-page").off("mousewheel").on("mousewheel",function(e){e.deltaY>1&&1!==t&&(a.goToPrevSlide(),t=1),e.deltaY<-1&&2!==t&&(a.goToNextSlide(),t=2),(1==e.deltaY||-1==e.deltaY)&&(t=0)})},this.reset=function(){e(".scroll-page").off("mousewheel"),e("#scroll-btn").off("click")},this.destroySlider=function(){null!==a&&(a.destroySlider(),a=null)},this.loadScrollSlider=function(){var i=e(".scroll-page"),o=i.children(),r=o.length-1,s=e("#scroll-btn"),l=(s.find("i"),s.find(".current"),s.find(".total"),0);if(c("slide")){var d=e("#"+c("slide")).index();d>-1&&(l=d)}q.update(l,r),n(o.eq(l)),a=e(".scroll-page").bxSlider({mode:"vertical",pager:!1,controls:!1,infiniteLoop:!1,speed:600,preventDefaultSwipeY:!0,startSlide:l,onSliderLoad:function(n){t.setMousewheel(),s.off("click").on("click",function(){e(this).hasClass("is-last")?a.goToSlide(0):a.goToNextSlide()}),e(document).one("beforePaneExit",function(){a.destroySlider()})},onSlideBefore:function(t,a,i){e(".scroll-page__section").eq(a).removeClass("active"),q.update(i,r),n(t)},onSlideAfter:function(t,n,a){t.addClass("active").siblings().removeClass("active"),t.data("trigger")&&e(document).trigger(t.data("trigger")),window.location.search&&History.pushState(null,null,window.location.pathname.split("?")[0])}})},this.init=function(){if(!e(".scroll-page").length)return!1;e(".scroll-page");t.loadScrollSlider(),t.setMousewheel()}},Y=new function(){var t;this.init=function(){e(".pane--right .video-js").each(function(){var t=e(this);videojs(this,{height:"",width:""},function(){t.parent().data("vidApi",this)})}),Modernizr.touch||e(".bg-vid").each(function(){var n=e(this);vidURL=n.data("src"),t=new e.BigVideo({container:e(".bg-vid")}),t.init(),t.show([{type:"video/webm",src:vidURL+".webm"},{type:"video/mp4",src:vidURL+".mp4"}],{doLoop:!0,ambient:!0}),e(document).one("beforePaneChange",function(){})})},this.destroy=function(){t&&(e("#big-video-vid").css("visibility","hidden"),t.dispose(),t=!1,console.log("removing "+vidURL))}};e.fn.randomize=function(t){var n=t?e(this).find(t):e(this).children(),a=n.parent();return a.each(function(){e(this).children(t).sort(function(){return Math.round(Math.random())-.5}).detach().appendTo(this)}),this},e(document).on("beforePaneExit",function(){e("#page-wrapper").removeClass(),E.addClass("loading")}).on("afterPaneChange",m).on("beforePaneAnimate",function(){M(),h()}).on("vidLoad",function(){e(".bg-vid").addClass("vid-loaded")}).on("click",".social-links--share a",function(t){var n=e(this).attr("href");if(!(n.indexOf("mailto")>-1)){t.preventDefault();var a=n.indexOf("facebook")>-1?"980px":"600px",i=n.indexOf("facebook")>-1?"570px":"440px";window.open(e(this).attr("href"),"targetWindow","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+a+",height="+i)}});var D=new function(){var t,n=this,a=[[0,"#d62a26"],[.635,"#d62a26"],[.636,"#e2bb00"],[.795,"#e2bb00"],[.796,"#9fd925"],[1,"#9fd925"]],i={lines:12,angle:0,lineWidth:.18,pointer:{length:.6,strokeWidth:.47,percentColors:a},percentColors:a,limitMax:"true",colorStart:"#6fadcf",colorStop:"#8fc0da",strokeColor:"#e0e0e0",generateGradient:!0};this.run=function(n){var a=e("#gauge_demo canvas"),o=e("#gauge_demo .gauge-value");return void 0!==t&&0!==t.value&&0!==n||!a.length?!1:(t=new Gauge(a[0]).setOptions(i),t.setTextField(o[0]),t.maxValue=125,void t.set(n))},e(document).on("runGauge",function(){n.run(103)})};e(document).on("submit",".form--contact",function(t){function n(){l.removeClass("loading").addClass("loaded"),o.val(""),setTimeout(function(){l.removeClass("loaded").children(".form__submit__val>span").text("Submit")},3e3)}t.preventDefault();var a=e(this),i=a.find("#form--contact__newsletter").prop("checked"),o=a.find(".form-control"),r=a.find(".form__hp"),l=a.find(".btn-submit"),c=!1;return""!==r.val()?!1:(o.filter(".required").each(function(){var t=e(this);""==t.val()?(t.addClass("warning").after('<p class="validation-message">This field is required</p>'),c=!0):t.is('[type="email"]')&&(s(t.val())||(t.addClass("warning").after('<p class="validation-message">This is not a valid email.</p>'),c=!0))}),c===!0?!1:(l.addClass("loading").children(".form__submit__val>span").text("Sending"),a.hasClass("form--newsletter")?S(a,function(){a.addClass("hidden"),a.closest(".remodal").find(".section__title").text("Thank You!"),n()}):(x(a),y(a,function(){n()}),i&&S(a)),!1))}),e(document).on("focus",".form-control",function(t){e(this).removeClass("warning").siblings(".validation-message").fadeOut(400,function(){e(this).remove()})}),e(document).on("click",".trigger",function(t){t.preventDefault();var n,a=e(t.target).closest("a"),i=a.attr("href"),o=a.find(".post-header__title").text();a.hasClass("active")?(n=r(i),a.remove("active").parent().find(".collapse").collapse("hide").siblings(".trigger").removeClass("active")):(n=i,P(a)),R=!0,History.pushState(null,o,n),a.closest("li").siblings().find(".collapse.in").collapse("hide").siblings(".trigger").removeClass("active"),setTimeout(T,800)}),e.fn.setSlideLink=function(e){if(1>=e)return this;var t=this.find("a"),n=t.attr("href");return t.attr("href",n+"?p="+e),this},j()}(jQuery);