webpackJsonp([0,1],[function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(2),r=n(3);n(4);var a=n(9),s=n(16),l=n(21),c=function(e){function t(){e.call(this);var t=this;t.state={errors:[],renderCount:0},s.config.error=function(e){t.state.errors.push(e),t.setState({errors:t.state.errors});var n=setTimeout(function(){var o=t.state.errors,i=o.indexOf(e);t.setState({errors:o.slice(0,i).concat(o.slice(i+1,o.length))}),clearTimeout(n)},1500)}}return o(t,e),t.prototype.render=function(){var e=this;return i.createElement("div",{style:{width:"100%",height:"100%"}},i.createElement(a.Desktop,{appIcons:e.props.widgets,showStartmenu:!0}),e.state.errors?e.state.errors.map(function(e,t){return i.createElement("div",{key:t,style:{position:"fixed",top:55*t+20,right:20,width:300,height:53,zIndex:9999999},className:"alert alert-danger alert-dismissible fade in",role:"alert"},i.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},i.createElement("span",{"aria-hidden":"true"},"×")),i.createElement("strong",null,e))}):null)},t}(i.Component);!function(){document.body.removeChild(document.getElementById("preloading-style")),document.body.removeChild(document.getElementById("precontainer"));var e=document.getElementById("container");e.style.display="",r.render(i.createElement(c,{widgets:[{text:"Bing",icon:n(23),url:"https://www.bing.com"},{text:"Google",icon:n(24),url:"https://www.google.com"},{text:"Jolie",icon:n(25),content:i.createElement("img",{src:n(26),alt:"图片查看",style:{maxHeight:700}})},l.app]}),e)}()},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.id,o,""]]);n(8)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,i,img,input,li,ol,p,pre,td,textarea,th,u,ul{list-style:none;padding:0;margin:0}overlay{background:#000;filter:alpha(opacity=50);opacity:.5;display:none;position:absolute;top:0;left:0;z-index:100}body,html{width:100%;height:100%}*{-moz-user-select:none;-webkit-user-select:none;user-select:none}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background-color:#fff}::-webkit-scrollbar-thumb{background-color:#ccc}::-webkit-scrollbar-thumb:hover{background-color:#ccd}::-webkit-scrollbar-thumb:active{background-color:#cce}body{font-family:Microsoft Yahei;background:url("+n(7)+");background-position:50%;background-repeat:no-repeat;background-attachment:fixed}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){e.exports=n.p+"eea84b22.jpg"},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=h[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(c(o.parts[r],t));h[o.id]={id:o.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],s=i[2],l=i[3],c={css:a,media:s,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=g(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var n,o,i;if(t.singleton){var r=b++;n=x||(x=s(t)),o=p.bind(null,n,r,!1),i=p.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=u.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=d.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function p(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var h={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),x=null,b=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=h[s.id];l.refs--,r.push(l)}if(e){var c=i(e);o(c,t)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete h[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(10),r=n(11),a=n(12),s=n(13);n(14);var l=n(2),c=n(16),p=n(17),d=function(e){function t(){e.call(this),this.itemWidth=88,this.itemHeight=96,this.objectIndexCount=0,this.lastOpenWindowTime=new Date(1997,7);var t=this;t.state={renderCount:0,openedIcons:[],currentIndex:0},window.onresize=function(){t.setState({renderCount:t.state.renderCount+1,showStartmenu:!1})},c.config.openUrl=function(e,n,o){t.handleClick({text:n,icon:o||a,title:n,url:e})},c.config.openContent=function(e,n,o){t.handleClick({text:n,icon:o||i,title:n,content:e})},c.config.openImage=function(e,n){t.handleClick({text:n||"图片查看",icon:s,title:n||"图片查看",covered:!0,top:(document.body.clientHeight-700)/2,zIndex:1e6,content:l.createElement("img",{src:e,alt:n||"图片查看",style:{maxHeight:700}})})},document.oncontextmenu=function(){return event.cancelBubble=!0,event.returnValue=!1,!1},document.onmousedown=function(e){if(window.Event){if(2==e.which||3==e.which)return!1}else if(2==event.button||3==event.button)return event.cancelBubble=!0,event.returnValue=!1,!1}}return o(t,e),t.prototype.handleClick=function(e){var t=this,n=new Date,o=n.getTime()-t.lastOpenWindowTime.getTime();if(o<500)return void c.config.error("请求打开窗体频率太快,请稍候再试");t.lastOpenWindowTime=n;var i=t.state.openedIcons,r=t.state.openedIcons.length;if(r+1>10)c.config.error("打开的窗体太多,请关掉一部分");else{var a=5,s=80;i.push({text:e.text,icon:e.icon,content:e.content,title:e.title,maximum:e.maximum,covered:e.covered,url:e.url,zIndex:e.zIndex,left:(r/a+r%a)*s+s,top:void 0==e.top?r%a*s+s:e.top,index:++t.objectIndexCount}),t.setState({renderCount:t.state.renderCount+1,openedIcons:i,currentIndex:t.objectIndexCount})}},t.prototype.handleSelected=function(e){var t=this;t.setState({renderCount:t.state.renderCount+1,currentIndex:e.index})},t.prototype.handleClose=function(e,t,n){for(var o=this,i=o.state.openedIcons,r=[],t=0;t<i.length;t++){var a=i[t];a.index!=e.index&&r.push(a)}var s=r.length;o.setState({renderCount:o.state.renderCount+1,openedIcons:r,currentIndex:s>1?r[s-1].index:0})},t.prototype.render=function(){var e,t,n=this,o=(document.body.clientWidth,document.body.clientHeight-n.itemHeight-48),a=-1,s=0;if(n.state.openedIcons){var c=n.state.openedIcons;e=c.map(function(e){return l.createElement(p.Widget,{content:e.content,title:e.title||e.text,icon:e.icon,top:e.top,left:e.left,zIndex:e.zIndex?e.zIndex:e.index==n.state.currentIndex?101:100,show:n.state.showStartmenu?void 0:n.hiddenStartmenuing?void 0:e.index==n.state.currentIndex||void 0,onSelected:function(t){return n.handleSelected.bind(n)(e,e.index)},key:e.index,url:e.url,maximum:e.maximum,covered:e.covered,onClosd:function(t){return n.handleClose.bind(n)(e,e.index,t)}})}),t=c.map(function(e,t){return l.createElement("div",{className:"taskbar-item",key:e.index,style:{left:129*t+(n.props.showStartmenu?32:0),paddingLeft:5,background:e.index==n.state.currentIndex?"linear-gradient( #4169E1, rgba(0, 0, 0, 1), #4169E1)":""},onClick:function(t){n.handleSelected.bind(n)(e),t.stopPropagation(),t.preventDefault()}},l.createElement("img",{src:e.icon||i,alt:e.text}),l.createElement("span",null,e.text))})}return n.hiddenStartmenuing&&(n.hiddenStartmenuing=!1),l.createElement("div",{style:{width:"100%",height:"100%"}}," ",l.createElement("div",{className:"desktop"},n.props.appIcons?n.props.appIcons.map(function(e,t){var r=n.itemHeight*++a+10;r>o&&(r=10,a=0,s++);var c=n.itemWidth*s+10;return l.createElement("div",{className:"appIcon",onClick:function(t){return n.handleClick.bind(n)(e)},key:t,style:{width:n.itemWidth,height:n.itemHeight,top:r,left:c}},l.createElement("img",{src:e.icon||i,alt:e.text}),l.createElement("span",null,e.text))}):null),l.createElement("div",{className:"taskbar"},n.props.showStartmenu?l.createElement("div",{className:"start",onClick:function(e){return n.setState({showStartmenu:!0}),e.stopPropagation(),e.preventDefault(),!0}},l.createElement("img",{src:r,alt:"开始"})):null,t),n.state.showStartmenu?l.createElement("div",{className:"startmenu-cover",onClick:function(e){n.hiddenStartmenuing=!0,n.setState({showStartmenu:!1}),e.stopPropagation(),e.preventDefault()}},l.createElement("div",{className:"startmenu-container"},l.createElement("div",{className:"startmenu"},n.props.appIcons?n.props.appIcons.filter(function(e){return!(!e.url&&!e.content)}).map(function(e,t){return l.createElement("div",{className:"startmenu-item",onClick:function(t){return n.handleClick.bind(n)(e)},key:t},l.createElement("img",{src:e.icon||i,alt:e.text}),l.createElement("span",null,e.text))}):null))):null,e)},t}(l.Component);t.Desktop=d},function(e,t,n){e.exports=n.p+"f9da347a.png"},function(e,t,n){e.exports=n.p+"d57f982c.png"},function(e,t,n){e.exports=n.p+"f7b1609a.png"},function(e,t,n){e.exports=n.p+"4a6db391.png"},function(e,t,n){var o=n(15);"string"==typeof o&&(o=[[e.id,o,""]]);n(8)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".desktop{width:100%;height:calc(100% - 32px);padding:30px;overflow:hidden}.taskbar{width:calc(100% - 32x);margin-left:32px}.start,.taskbar{height:32px;background:linear-gradient(#eaeaea,rgba(0,0,0,.1),#eaeaea)}.start{position:absolute;width:32px;bottom:0;margin-left:-32px;border-right:1px solid #000}.start img{width:28px;height:28px}.start:hover{background:linear-gradient(#5e84a7,#ccc,#5e84a7)}.startmenu-cover{width:100%;height:100%;background:#000;left:0;top:0;opacity:.8;filter:alpha(opacity=80);position:fixed}.startmenu-container{width:100%;height:100%;position:relative}.startmenu{width:290px;height:500px;position:absolute;opacity:1;background:hsla(0,0%,96%,.5);border-radius:0 0 0 0;bottom:32px;overflow:auto}.startmenu-item{height:48px;width:280px;margin-left:5px;margin-top:5px;background:hsla(0,0%,96%,.1);border:1px solid rgba(0,0,0,.1)}.startmenu-item:hover{border:1px solid #000;background:hsla(0,0%,96%,.3)}.startmenu-item img{width:32px;height:32px;border-radius:3px;margin-top:6px;margin-left:6px}.startmenu-item span{width:70px;height:48px;overflow:hidden;margin-left:6px;line-height:48px;text-align:left;text-overflow:ellipsis;white-space:nowrap}.taskbar-item{height:32px;cursor:pointer;position:absolute;width:128px;margin-right:2px;border-radius:2px;color:#fff;background:linear-gradient(#6495ed,rgba(0,0,0,.8),#6495ed)}.taskbar-item img{width:28px;height:28px;border-radius:3px;margin-top:2px}.taskbar-item span{width:70px;height:32px;display:block;float:left;overflow:hidden;position:absolute;top:0;left:36px;line-height:32px;text-align:left;text-overflow:ellipsis;white-space:nowrap}.appIcon{padding:10px;text-align:center;position:absolute;z-index:1;cursor:pointer;border-radius:5px;-webkit-transition:background .2s;transition:background .2s}.appIcon:hover{background:rgba(0,0,0,.3);filter:progid: DXImageTransform.Microsoft.gradient(startcolorstr=#3F000000,endcolorstr=#3F000000)}.appIcon img{border-radius:3px;display:block;margin:0 auto;width:48px;height:48px}.appIcon span{width:70px;border-radius:10px;color:#fff;display:block;height:20px;line-height:20px;margin-top:8px;overflow:hidden;padding:0 5px;position:relative;text-align:center;text-overflow:ellipsis;white-space:nowrap;z-index:1;background:rgba(0,0,0,.3);cursor:pointer}",""])},function(e,t){"use strict";var n=function(){function e(){this.defaultErrorTimeout=2e3}return e}();t.config=new n},function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(2);n(18);var r=function(e){function t(){e.call(this),this.innerOperation=!1,this.moving=!1,this.state={hidden:!1}}return o(t,e),t.prototype.handleResizs=function(){var e=this;this.setState({maxing:!e.state.maxing,hidden:!1})},t.prototype.handleMin=function(e){var t=this;t.innerOperation=!0,t.setState({hidden:!0})},t.prototype.handleClose=function(){var e=this;e.props.onClosd(e)},t.prototype.handldeMouseMove=function(e){var t=this;if(t.moving){var n=e.pageX-t.x,o=e.pageY-t.y,i=ReactDOM.findDOMNode(t.refs.layer),r=document.body.clientWidth-i.clientWidth,a=document.body.clientHeight-i.clientHeight;n<0&&(n=0),o<0&&(o=0),n>r&&(n=r),o>a&&(o=a),this.setState({top:o,left:n})}},t.prototype.handldeMouseDown=function(e){var t=this;t.props.onSelected(t),t.moving=!0,t.x=e.pageX-t.state.left,t.y=e.pageY-t.state.top;var n=document.onmousemove;document.onmousemove=function(e){return t.handldeMouseMove.bind(t)(e)},document.onmouseup=function(e){t.moving=!1,document.onmousemove=n}},t.prototype.componentDidMount=function(){var e=this,t=ReactDOM.findDOMNode(e.refs.layer),n=document.body.clientWidth-t.clientWidth,o=document.body.clientHeight-t.clientHeight;e.state.left<0&&(e.state.left=0),e.state.left>n&&(e.state.left=n),e.state.top<0&&(e.state.top=0),e.state.top>o&&(e.state.top=o),this.setState({top:e.state.top,left:e.state.left})},t.prototype.render=function(){var e=this;void 0==e.state.top&&(e.state.top=void 0==e.props.top?50:e.props.top),void 0==e.state.left&&(e.state.left=void 0==e.props.left?50:e.props.left);var t={};return!e.innerOperation&&e.state.hidden&&e.props.show===!0&&(e.state.hidden=!1),e.innerOperation&&(e.innerOperation=void 0),t.visibility=e.state.hidden?"hidden":"visible",e.props.zIndex&&(t.zIndex=e.props.zIndex),i.createElement("div",{className:"widget-layer "+(e.props.url?"widget-full":e.state.maxing?"widget-full":""),style:t,onClick:function(t){return e.props.onSelected(e)}},e.props.covered?i.createElement("div",{className:"widget-shade"}):null,i.createElement("div",{className:"widget-box show",ref:"layer",style:{left:e.state.left,top:e.state.top}},i.createElement("div",{className:"widget-title widget-move",onMouseDown:function(t){return e.handldeMouseDown.bind(e)(t)}},i.createElement("img",{src:e.props.icon||n(10),alt:e.props.title}),i.createElement("span",null,e.props.title)),0==e.props.minimum?null:i.createElement("div",{className:"widget-min widget-ico",onClick:function(t){return e.handleMin.bind(e)(t)}}),i.createElement("div",{className:"widget-close widget-ico",onClick:function(t){return e.handleClose.bind(e)()}}),e.props.url?null:e.props.maximum?i.createElement("div",{className:"widget-resize widget-ico",onClick:function(t){return e.handleResizs.bind(e)()}}):null,e.props.content?i.createElement("div",{className:"widget-con"},e.props.content):e.props.url?i.createElement("iframe",{src:e.props.url,style:{width:"100%",height:"100%"}}):null))},t}(i.Component);t.Widget=r},function(e,t,n){var o=n(19);"string"==typeof o&&(o=[[e.id,o,""]]);n(8)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,".widget-ico{background:url("+n(20)+") no-repeat;height:16px;width:16px}.widget-layer{position:relative;z-index:100}.widget-box{position:fixed;min-width:240px;max-width:960px;background-color:#fff;box-shadow:1px 1px 50px rgba(0,0,0,.3);left:40%;top:150px;overflow:hidden}.widget-shade{position:fixed;width:100%;height:100%;background:#000;left:0;top:0;opacity:.5;filter:alpha(opacity=50)}.widget-full .widget-box{width:100%!important;height:100%!important;left:0!important;top:0!important;max-width:100%!important}.widget-box.show{animation:bouncedelay linear .03s;-webkit-animation:bouncedelay linear .03s}.widget-move{cursor:move}.widget-title{width:100%;background-color:#eaeaea;border-bottom:1px solid #d5d5d5;color:#333;font-size:14px;height:35px;line-height:35px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:move}.widget-title span{padding-left:2px}.widget-title img{margin-left:10px;margin-top:-2px;width:28px;height:28px}.widget-con{line-height:22px;word-break:break-all;overflow:hidden}.widget-min{background-position:-120px 0;position:absolute;right:30px;top:12px;cursor:pointer}.widget-min:hover{background-position:-140px 0}.widget-close{background-position:0 0;position:absolute;right:10px;top:12px;cursor:pointer}.widget-close:hover{background-position:-20px 0}.widget-resize{background-position:-40px 0;position:absolute;right:50px;top:12px;cursor:pointer}.widget-resize:hover{background-position:-80px 0}.widget-full .widget-resize{background-position:-60px 0}.widget-full .widget-resize:hover{background-position:-100px 0}@-webkit-keyframes bouncedelay{0%{opacity:0;-webkit-transform:scale(0)}to{opacity:1;-webkit-transform:scale(1)}}@keyframes bouncedelay{0%{opacity:0;transform:scale(0);-webkit-transform:scale(0)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1)}}",""])},function(e,t,n){e.exports=n.p+"ff942907.png"},function(e,t,n){"use strict";var o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=n(2),r=function(e){function t(){e.call(this),this.state={loading:!0,error:null,data:null}}return o(t,e),t.prototype.componentDidMount=function(){var e=this;$.getJSON("https://api.github.com/search/repositories?q=javascript&sort=stars").then(function(t){return e.setState({loading:!1,data:t})},function(t){return e.setState({loading:!1,error:t})})},t.prototype.render=function(){var e=this;return i.createElement("div",{style:{height:500,width:400,overflow:"auto"}},e.state.loading?i.createElement("span",null,"Loading..."):e.state.error?i.createElement("span",null,"Error: ",e.state.error.message):e.state.data.items?i.createElement("ul",{className:"list-group"},e.state.data.items.map(function(e,t){return i.createElement("li",{key:t,className:"list-group-item",style:{cursor:"pointer",marginBottom:0,wordBreak:"break-word"},onClick:function(t){window.open(e.html_url,e.name)}},i.createElement("span",{className:"badge"},e.stargazers_count),i.createElement("h3",null,e.name),i.createElement("p",{className:"list-group-item-text"},e.description))})," "):null)},t}(i.Component);t.app={text:"Github",title:"Most Popular JavaScript Projects in Github",icon:n(22),content:i.createElement(r,null)}},function(e,t,n){e.exports=n.p+"cd6b1fb1.png"},function(e,t,n){e.exports=n.p+"fa453e59.png"},function(e,t,n){e.exports=n.p+"98ed8ae5.png"},function(e,t,n){e.exports=n.p+"eec78817.png"},function(e,t,n){e.exports=n.p+"58ca06b0.jpg"}]);