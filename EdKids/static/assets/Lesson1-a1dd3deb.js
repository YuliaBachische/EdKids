import{j as o,c as ie,g as re,R as F,r as O,u as _e,M as Pe,H as be,B as A,L as Ce}from"./index-7cf5c50d.js";import{M as xe}from"./ModalRoute-61100f28.js";import{H as we}from"./HeaderFireSvg-6ba546b9.js";const Ne="_modalOverlay_1d8de_1",Se="_modalContent_1d8de_5",Ee="_lessonContainer_1d8de_9",ke="_lessonBlock_1d8de_15",je="_lessonTitle_1d8de_23",Te="_lessonFill_1d8de_30",Ae="_youTube_1d8de_36",Oe="_lessonNumTitle_1d8de_40",Re="_lessonNumBlock_1d8de_49",Ie="_list_1d8de_59",Be="_item_1d8de_62",Ve="_lessonNumList_1d8de_79",De="_descr_1d8de_104",Le="_lessonNumImg_1d8de_111",Me="_boxbtn_1d8de_115",We="_lessonNumBtn_1d8de_122",v={modalOverlay:Ne,modalContent:Se,lessonContainer:Ee,lessonBlock:ke,lessonTitle:je,lessonFill:Te,youTube:Ae,lessonNumTitle:Oe,lessonNumBlock:Re,list:Ie,item:Be,lessonNumList:Ve,descr:De,lessonNumImg:Le,boxbtn:Me,lessonNumBtn:We},Fe=()=>o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M9.57 5.92999L3.5 12L9.57 18.07",stroke:"#B8B5B5",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M20.5 12H3.66998",stroke:"#B8B5B5",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})]}),Ye="_progressbar_xvzsh_1",Ue="_progressbar__fill_xvzsh_9",Ge="_progressbar__text_xvzsh_16",G={progressbar:Ye,progressbar__fill:Ue,progressbar__text:Ge};function qe({value:t,max:e,className:r="",textProg:n,classNamefill:s="",colorFill:a="#6740f6",children:c}){const h=t/e*100,d=t!==e?a:"#6740f6";return o.jsxs("div",{className:ie(G.progressbar,{},[r]),children:[o.jsx("div",{className:ie(G.progressbar__fill,{},[s]),style:{width:`${h}%`,backgroundColor:d},children:c}),n&&o.jsx("div",{className:G.progressbar__text,children:`${t}/${e}`})]})}const $e="/assets/pageRobot-67a3d7c7.png";var fe={exports:{}},ze="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qe=ze,He=Qe;function pe(){}function he(){}he.resetWarningCache=pe;var Je=function(){function t(n,s,a,c,h,d){if(d!==He){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}t.isRequired=t;function e(){return t}var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:he,resetWarningCache:pe};return r.PropTypes=r,r};fe.exports=Je();var Ze=fe.exports;const g=re(Ze);var Ke=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,s,a;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(s=n;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(a=Object.keys(e),n=a.length,n!==Object.keys(r).length)return!1;for(s=n;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,a[s]))return!1;for(s=n;s--!==0;){var c=a[s];if(!t(e[c],r[c]))return!1}return!0}return e!==e&&r!==r};const Xe=re(Ke);var q={exports:{}},ye;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/ye=function(){var t={},e={};return t.on=function(r,n){var s={name:r,handler:n};return e[r]=e[r]||[],e[r].unshift(s),s},t.off=function(r){var n=e[r.name].indexOf(r);n!==-1&&e[r.name].splice(n,1)},t.trigger=function(r,n){var s=e[r],a;if(s)for(a=s.length;a--;)s[a].handler(n)},t};var et=ye,$={exports:{}},tt=function(e,r,n){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},a.type=r.type||"text/javascript",a.charset=r.charset||"utf8",a.async="async"in r?!!r.async:!0,a.src=e,r.attrs&&rt(a,r.attrs),r.text&&(a.text=""+r.text);var c="onload"in a?le:nt;c(a,n),a.onload||le(a,n),s.appendChild(a)};function rt(t,e){for(var r in e)t.setAttribute(r,e[r])}function le(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function nt(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=tt,n=s(r);function s(a){return a&&a.__esModule?a:{default:a}}e.default=function(a){var c=new Promise(function(h){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){h(window.YT);return}else{var d=window.location.protocol==="http:"?"http:":"https:";(0,n.default)(d+"//www.youtube.com/iframe_api",function(l){l&&a.trigger("error",l)})}var i=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){i&&i(),h(window.YT)}});return c},t.exports=e.default})($,$.exports);var ot=$.exports,z={exports:{}},Q={exports:{}},H={exports:{}},B=1e3,V=B*60,D=V*60,L=D*24,at=L*365.25,st=function(t,e){e=e||{};var r=typeof t;if(r==="string"&&t.length>0)return it(t);if(r==="number"&&isNaN(t)===!1)return e.long?ut(t):lt(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function it(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*at;case"days":case"day":case"d":return r*L;case"hours":case"hour":case"hrs":case"hr":case"h":return r*D;case"minutes":case"minute":case"mins":case"min":case"m":return r*V;case"seconds":case"second":case"secs":case"sec":case"s":return r*B;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function lt(t){return t>=L?Math.round(t/L)+"d":t>=D?Math.round(t/D)+"h":t>=V?Math.round(t/V)+"m":t>=B?Math.round(t/B)+"s":t+"ms"}function ut(t){return W(t,L,"day")||W(t,D,"hour")||W(t,V,"minute")||W(t,B,"second")||t+" ms"}function W(t,e,r){if(!(t<e))return t<e*1.5?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}(function(t,e){e=t.exports=s.debug=s.default=s,e.coerce=d,e.disable=c,e.enable=a,e.enabled=h,e.humanize=st,e.names=[],e.skips=[],e.formatters={};var r;function n(i){var l=0,u;for(u in i)l=(l<<5)-l+i.charCodeAt(u),l|=0;return e.colors[Math.abs(l)%e.colors.length]}function s(i){function l(){if(l.enabled){var u=l,y=+new Date,f=y-(r||y);u.diff=f,u.prev=r,u.curr=y,r=y;for(var p=new Array(arguments.length),_=0;_<p.length;_++)p[_]=arguments[_];p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var m=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(P,x){if(P==="%%")return P;m++;var C=e.formatters[x];if(typeof C=="function"){var j=p[m];P=C.call(u,j),p.splice(m,1),m--}return P}),e.formatArgs.call(u,p);var b=l.log||e.log||console.log.bind(console);b.apply(u,p)}}return l.namespace=i,l.enabled=e.enabled(i),l.useColors=e.useColors(),l.color=n(i),typeof e.init=="function"&&e.init(l),l}function a(i){e.save(i),e.names=[],e.skips=[];for(var l=(typeof i=="string"?i:"").split(/[\s,]+/),u=l.length,y=0;y<u;y++)l[y]&&(i=l[y].replace(/\*/g,".*?"),i[0]==="-"?e.skips.push(new RegExp("^"+i.substr(1)+"$")):e.names.push(new RegExp("^"+i+"$")))}function c(){e.enable("")}function h(i){var l,u;for(l=0,u=e.skips.length;l<u;l++)if(e.skips[l].test(i))return!1;for(l=0,u=e.names.length;l<u;l++)if(e.names[l].test(i))return!0;return!1}function d(i){return i instanceof Error?i.stack||i.message:i}})(H,H.exports);var dt=H.exports;(function(t,e){e=t.exports=dt,e.log=s,e.formatArgs=n,e.save=a,e.load=c,e.useColors=r,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:h(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(d){try{return JSON.stringify(d)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}};function n(d){var i=this.useColors;if(d[0]=(i?"%c":"")+this.namespace+(i?" %c":" ")+d[0]+(i?"%c ":" ")+"+"+e.humanize(this.diff),!!i){var l="color: "+this.color;d.splice(1,0,l,"color: inherit");var u=0,y=0;d[0].replace(/%[a-zA-Z%]/g,function(f){f!=="%%"&&(u++,f==="%c"&&(y=u))}),d.splice(y,0,l)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(d){try{d==null?e.storage.removeItem("debug"):e.storage.debug=d}catch{}}function c(){var d;try{d=e.storage.debug}catch{}return!d&&typeof process<"u"&&"env"in process&&(d={}.DEBUG),d}e.enable(c());function h(){try{return window.localStorage}catch{}}})(Q,Q.exports);var ct=Q.exports,J={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],t.exports=e.default})(J,J.exports);var ft=J.exports,Z={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],t.exports=e.default})(Z,Z.exports);var pt=Z.exports,K={exports:{}},X={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},t.exports=e.default})(X,X.exports);var ht=X.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=ht,n=s(r);function s(a){return a&&a.__esModule?a:{default:a}}e.default={pauseVideo:{acceptableStates:[n.default.ENDED,n.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[n.default.ENDED,n.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[n.default.ENDED,n.default.PLAYING,n.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},t.exports=e.default})(K,K.exports);var yt=K.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=ct,n=l(r),s=ft,a=l(s),c=pt,h=l(c),d=yt,i=l(d);function l(f){return f&&f.__esModule?f:{default:f}}var u=(0,n.default)("youtube-player"),y={};y.proxyEvents=function(f){var p={},_=function(T){var N="on"+T.slice(0,1).toUpperCase()+T.slice(1);p[N]=function(E){u('event "%s"',N,E),f.trigger(T,E)}},m=!0,b=!1,P=void 0;try{for(var x=h.default[Symbol.iterator](),C;!(m=(C=x.next()).done);m=!0){var j=C.value;_(j)}}catch(M){b=!0,P=M}finally{try{!m&&x.return&&x.return()}finally{if(b)throw P}}return p},y.promisifyPlayer=function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,_={},m=function(N){p&&i.default[N]?_[N]=function(){for(var E=arguments.length,R=Array(E),S=0;S<E;S++)R[S]=arguments[S];return f.then(function(w){var k=i.default[N],ve=w.getPlayerState(),ne=w[N].apply(w,R);return k.stateChangeRequired||Array.isArray(k.acceptableStates)&&k.acceptableStates.indexOf(ve)===-1?new Promise(function(oe){var ge=function ae(){var me=w.getPlayerState(),se=void 0;typeof k.timeout=="number"&&(se=setTimeout(function(){w.removeEventListener("onStateChange",ae),oe()},k.timeout)),Array.isArray(k.acceptableStates)&&k.acceptableStates.indexOf(me)!==-1&&(w.removeEventListener("onStateChange",ae),clearTimeout(se),oe())};w.addEventListener("onStateChange",ge)}).then(function(){return ne}):ne})}:_[N]=function(){for(var E=arguments.length,R=Array(E),S=0;S<E;S++)R[S]=arguments[S];return f.then(function(w){return w[N].apply(w,R)})}},b=!0,P=!1,x=void 0;try{for(var C=a.default[Symbol.iterator](),j;!(b=(j=C.next()).done);b=!0){var M=j.value;m(M)}}catch(T){P=!0,x=T}finally{try{!b&&C.return&&C.return()}finally{if(P)throw x}}return _},e.default=y,t.exports=e.default})(z,z.exports);var vt=z.exports;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},n=et,s=i(n),a=ot,c=i(a),h=vt,d=i(h);function i(u){return u&&u.__esModule?u:{default:u}}var l=void 0;e.default=function(u){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,p=(0,s.default)();if(l||(l=(0,c.default)(p)),y.events)throw new Error("Event handlers cannot be overwritten.");if(typeof u=="string"&&!document.getElementById(u))throw new Error('Element "'+u+'" does not exist.');y.events=d.default.proxyEvents(p);var _=new Promise(function(b){if((typeof u>"u"?"undefined":r(u))==="object"&&u.playVideo instanceof Function){var P=u;b(P)}else l.then(function(x){var C=new x.Player(u,y);return p.on("ready",function(){b(C)}),null})}),m=d.default.promisifyPlayer(_,f);return m.on=p.on,m.off=p.off,m},t.exports=e.default})(q,q.exports);var gt=q.exports;const mt=re(gt);var _t=Object.defineProperty,Pt=Object.defineProperties,bt=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,de=(t,e,r)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ee=(t,e)=>{for(var r in e||(e={}))Ct.call(e,r)&&de(t,r,e[r]);if(ue)for(var r of ue(e))xt.call(e,r)&&de(t,r,e[r]);return t},te=(t,e)=>Pt(t,bt(e)),wt=(t,e,r)=>new Promise((n,s)=>{var a=d=>{try{h(r.next(d))}catch(i){s(i)}},c=d=>{try{h(r.throw(d))}catch(i){s(i)}},h=d=>d.done?n(d.value):Promise.resolve(d.value).then(a,c);h((r=r.apply(t,e)).next())});function Nt(t,e){var r,n;if(t.videoId!==e.videoId)return!0;const s=((r=t.opts)==null?void 0:r.playerVars)||{},a=((n=e.opts)==null?void 0:n.playerVars)||{};return s.start!==a.start||s.end!==a.end}function ce(t={}){return te(ee({},t),{height:0,width:0,playerVars:te(ee({},t.playerVars),{autoplay:0,start:0,end:0})})}function St(t,e){return t.videoId!==e.videoId||!Xe(ce(t.opts),ce(e.opts))}function Et(t,e){var r,n,s,a;return t.id!==e.id||t.className!==e.className||((r=t.opts)==null?void 0:r.width)!==((n=e.opts)==null?void 0:n.width)||((s=t.opts)==null?void 0:s.height)!==((a=e.opts)==null?void 0:a.height)||t.iframeClassName!==e.iframeClassName||t.title!==e.title}var kt={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},jt={videoId:g.string,id:g.string,className:g.string,iframeClassName:g.string,style:g.object,title:g.string,loading:g.oneOf(["lazy","eager"]),opts:g.objectOf(g.any),onReady:g.func,onError:g.func,onPlay:g.func,onPause:g.func,onEnd:g.func,onStateChange:g.func,onPlaybackRateChange:g.func,onPlaybackQualityChange:g.func},Y=class extends F.Component{constructor(t){super(t),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var r,n;return(n=(r=this.props).onReady)==null?void 0:n.call(r,e)},this.onPlayerError=e=>{var r,n;return(n=(r=this.props).onError)==null?void 0:n.call(r,e)},this.onPlayerStateChange=e=>{var r,n,s,a,c,h,d,i;switch((n=(r=this.props).onStateChange)==null||n.call(r,e),e.data){case Y.PlayerState.ENDED:(a=(s=this.props).onEnd)==null||a.call(s,e);break;case Y.PlayerState.PLAYING:(h=(c=this.props).onPlay)==null||h.call(c,e);break;case Y.PlayerState.PAUSED:(i=(d=this.props).onPause)==null||i.call(d,e);break}},this.onPlayerPlaybackRateChange=e=>{var r,n;return(n=(r=this.props).onPlaybackRateChange)==null?void 0:n.call(r,e)},this.onPlayerPlaybackQualityChange=e=>{var r,n;return(n=(r=this.props).onPlaybackQualityChange)==null?void 0:n.call(r,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=te(ee({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=mt(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(r=>{this.props.title&&r.setAttribute("title",this.props.title),this.props.loading&&r.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(r=>{this.props.id?r.setAttribute("id",this.props.id):r.removeAttribute("id"),this.props.iframeClassName?r.setAttribute("class",this.props.iframeClassName):r.removeAttribute("class"),this.props.opts&&this.props.opts.width?r.setAttribute("width",this.props.opts.width.toString()):r.removeAttribute("width"),this.props.opts&&this.props.opts.height?r.setAttribute("height",this.props.opts.height.toString()):r.removeAttribute("height"),this.props.title?r.setAttribute("title",this.props.title):r.setAttribute("title","YouTube video player"),this.props.loading?r.setAttribute("loading",this.props.loading):r.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,r,n,s;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let a=!1;const c={videoId:this.props.videoId};if((r=this.props.opts)!=null&&r.playerVars&&(a=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),a){(n=this.internalPlayer)==null||n.loadVideoById(c);return}(s=this.internalPlayer)==null||s.cueVideoById(c)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(t){return wt(this,null,function*(){Et(t,this.props)&&this.updatePlayer(),St(t,this.props)&&(yield this.resetPlayer()),Nt(t,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return F.createElement("div",{className:this.props.className,style:this.props.style},F.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},U=Y;U.propTypes=jt;U.defaultProps=kt;U.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var Tt=U;const At="_goodWorkBlock_myatf_1",Ot="_goodWorkTitle_myatf_8",Rt="_goodWorkImg_myatf_16",It="_goodWorkGrid_myatf_20",Bt="_goodWorkBtn_myatf_52",I={goodWorkBlock:At,goodWorkTitle:Ot,goodWorkImg:Rt,goodWorkGrid:It,goodWorkBtn:Bt},Vt="/assets/goodWork-ebafccd5.png",Dt=()=>o.jsxs("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("g",{clipPath:"url(#clip0_55_295)",children:o.jsx("path",{d:"M11.7686 24.0001C11.441 23.9989 11.1175 23.9265 10.8206 23.7881C10.3356 23.5721 9.94612 23.1865 9.72518 22.7038C9.50424 22.221 9.46706 21.6743 9.62062 21.1661L11.1816 16.0001H7.50362C7.03502 16.0006 6.57281 15.8914 6.15402 15.6812C5.73524 15.4709 5.37152 15.1655 5.09203 14.7894C4.81254 14.4133 4.62505 13.9769 4.54457 13.5153C4.4641 13.0536 4.49288 12.5796 4.62862 12.1311L7.65262 2.13105C7.83695 1.51253 8.21691 0.970475 8.73547 0.58624C9.25403 0.202005 9.88323 -0.00368163 10.5286 4.98893e-05H14.2216C14.6414 0.000401032 15.0548 0.102376 15.4266 0.29726C15.7983 0.492143 16.1174 0.774141 16.3565 1.11915C16.5956 1.46417 16.7476 1.86193 16.7995 2.27847C16.8514 2.695 16.8017 3.11791 16.6546 3.51105L14.9716 8.00005H17.5286C18.0737 8.00001 18.6084 8.14846 19.0755 8.42946C19.5425 8.71046 19.9242 9.11338 20.1795 9.59496C20.4347 10.0765 20.554 10.6186 20.5244 11.1628C20.4949 11.7071 20.3176 12.233 20.0116 12.6841L13.6116 22.9841C13.4138 23.2939 13.1414 23.5492 12.8195 23.7267C12.4975 23.9042 12.1362 23.9982 11.7686 24.0001Z",fill:"#77C93C"})}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_55_295",children:o.jsx("rect",{width:"24",height:"24",fill:"white",transform:"translate(0.5)"})})})]}),Lt=({isSuccess:t})=>{const[e,r]=O.useState(!1),n=_e(),s=()=>{r(!1),n("/courses")};return O.useEffect(()=>{t&&r(!0)},[t]),o.jsx(Pe,{lazy:!0,isOpen:e,children:o.jsxs("div",{className:I.goodWorkBlock,children:[o.jsx("img",{className:I.goodWorkImg,src:Vt,alt:""}),o.jsx("h1",{className:I.goodWorkTitle,children:"Отличный урок!"}),o.jsxs("ul",{className:I.goodWorkGrid,children:[o.jsx("li",{children:o.jsxs("p",{children:[o.jsx(we,{}),o.jsx("span",{children:"10"})]})}),o.jsx("li",{children:o.jsxs("p",{children:[o.jsx(Dt,{}),o.jsx("span",{children:"100%"})]})}),o.jsx("li",{children:o.jsxs("p",{children:[o.jsx(be,{}),o.jsx("span",{children:"4"})]})})]}),o.jsx(A,{onClick:s,className:I.goodWorkBtn,children:"Продолжить"})]})})},Mt=[{id:1,value:3},{id:2,value:9},{id:3,value:6},{id:4,value:5}],Ut=()=>{const[t,e]=O.useState(),[r,n]=O.useState(!1),[s,a]=O.useState(!1),c=f=>{e(f)},h=()=>{e(null)},d=()=>{n(!0)};O.useEffect(()=>{const f=setTimeout(()=>{},2e3);return clearTimeout(f)},[]);const i="E4WtDC9PtWo",l={height:"188px",width:"100%",playerVars:{autoplay:1}},u=f=>{f.target.playVideo()},y=t?t===3?{backgroundColor:"#CBE8FF"}:{backgroundColor:"#FFCBCB"}:{};return o.jsxs(xe,{classNameOverlay:v.modalOverlay,classNameContent:v.modalContent,children:[o.jsxs("div",{className:v.lessonContainer,children:[o.jsx(Ce,{to:"/courses",children:o.jsx(Fe,{})}),o.jsx(qe,{value:7,max:100})]}),o.jsxs("div",{className:v.lessonBlock,children:[o.jsx("h1",{className:v.lessonTitle,children:"Учимся..."}),o.jsx("div",{className:v.lessonFill,children:o.jsx(Tt,{iframeClassName:v.youTube,onReady:u,videoId:i,opts:l,onEnd:()=>a(!0)})}),o.jsxs("h3",{className:v.lessonNumTitle,children:[o.jsx("div",{children:s&&o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Сколько животных было на экране?"}),t!=null&&o.jsx("ul",{className:v.list,children:o.jsx("li",{className:v.item,children:o.jsx(A,{children:t})})})]})}),o.jsx("div",{className:v.boxRobot,children:o.jsx("img",{className:v.lessonNumImg,src:$e,alt:""})})]}),o.jsx("div",{className:v.lessonNumBlock,children:o.jsx("ul",{className:v.lessonNumList,children:Mt.map(f=>o.jsx(F.Fragment,{children:t!==f.value&&o.jsx("li",{children:o.jsx(A,{isDisabled:!!t||!s,onClick:()=>c(f.value),children:f.value})})},f.id))})}),o.jsxs("div",{className:v.boxbtn,style:y,children:[t!=null?t===3?o.jsx("p",{className:v.descr,style:{color:"#358fd2"},children:"ПРАВИЛЬНО!"}):o.jsx("p",{className:v.descr,style:{color:"#d23535"},children:"Давай попробуем ещё!"}):"",t?o.jsx(o.Fragment,{children:t===3?o.jsx(A,{onClick:d,className:v.lessonNumBtn,children:"Продолжить"}):o.jsx(A,{onClick:h,className:v.lessonNumBtn,children:"Попробовать"})}):o.jsx(A,{className:v.lessonNumBtn,isDisabled:!t,children:"Ответить"})]}),o.jsx(Lt,{isSuccess:r})]})]})};export{Ut as default};
