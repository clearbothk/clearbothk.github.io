(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3nLz":function(e,t,r){"use strict";r("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rzGZ"),r("Dq+y"),r("8npG"),r("YbXK"),r("eMsz"),r("zTTH"),r("3nLz");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),l=a(r("8OQS")),s=a(r("pVnL")),d=a(r("q1tI")),c=a(r("17x9")),u=function(e){var t=(0,s.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,r=e.fixed;return p(t||r).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),r=m(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),d.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function x(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function C(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),E.set(e,t)),function(){r.unobserve(e),E.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+o+l+r+a+t+i+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(j,(0,s.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?d.default.createElement("picture",null,n(a),l):l})),j=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:r,srcSet:a,src:n},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=m(t),g[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,x=e.loading,C=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:R?1:0,transition:L?"opacity "+y+"ms":"none"},l),H="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},P=(0,s.default)((0,s.default)((0,s.default)({opacity:this.state.imgLoaded?0:1},L&&k),l),f),N={title:t,alt:this.state.isVisible?"":r,style:P,className:m,itemProp:E};if(g){var B=g,A=p(g);return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:A.maxWidth?A.maxWidth+"px":null,maxHeight:A.maxHeight?A.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&k)}),A.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:N,imageVariants:B,generateSources:O}),A.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:N,imageVariants:B,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(B),d.default.createElement(j,{alt:r,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)((0,s.default)({alt:r,title:t,loading:x},A),{},{imageVariants:B}))}}))}if(h){var q=h,W=p(h),V=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete V.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},L&&k)}),W.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:q,generateSources:O}),W.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,w(q),d.default.createElement(j,{alt:r,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:C})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)((0,s.default)({alt:r,title:t,loading:x},W),{},{imageVariants:q}))}}))}return null},t}(d.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});L.propTypes={resolutions:T,sizes:H,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([H,c.default.arrayOf(H)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=L;t.default=k},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("AqHK"),r("4DPX"),r("sc67"),r("E5k/");var a=r("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]])}return r};function s(e){return function(t){return a.createElement(d,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return a.createElement(t.tag,o({key:r},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var r,n=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,s=e.title,d=l(e,["attr","title"]);return a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:r,style:o({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},QeBL:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return re}));r("E5k/");var a=r("q1tI"),n=r.n(a),i=r("uDoD"),o=r("CjxU"),l=r("b9RQ"),s=r("Bl7J"),d=r("vrFN"),c=r("BMxC"),u=r("pVnL"),f=r.n(u),m=r("8OQS"),p=r.n(m),g=Object(a.forwardRef)((function(e,t){var r=e.gap,a=e.rowGap,i=e.columnGap,o=e.autoFlow,l=e.autoRows,s=e.autoColumns,d=e.templateRows,u=e.templateColumns,m=e.templateAreas,g=e.area,h=e.column,b=e.row,y=p()(e,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return n.a.createElement(c.a,f()({ref:t,display:"grid",gridArea:g,gridTemplateAreas:m,gridGap:r,gridRowGap:a,gridColumnGap:i,gridAutoColumns:s,gridColumn:h,gridRow:b,gridAutoFlow:o,gridAutoRows:l,gridTemplateRows:d,gridTemplateColumns:u},y))}));g.displayName="Grid";var h=g,b=r("qKvR"),y={"2xl":["4xl",null,"5xl"],xl:["3xl",null,"4xl"],lg:["xl",null,"2xl"],md:"xl",sm:"md",xs:"sm"},v=Object(a.forwardRef)((function(e,t){var r=e.size,a=void 0===r?"xl":r,n=p()(e,["size"]);return Object(b.d)(c.a,f()({ref:t,as:"h2",fontSize:y[a],lineHeight:"shorter",fontWeight:"bold",fontFamily:"heading"},n))}));v.displayName="Heading";var E=v,w=r("sK1y"),x=r("9eSz"),S=r.n(x),O=function(e){var t=e.image;return n.a.createElement(c.a,{position:"relative",id:"aboutus"},n.a.createElement(c.a,{position:"absolute",h:"100%",w:"100%",backgroundColor:"rgba(0,0,0,0.6)",zIndex:10}),n.a.createElement(S.a,{fluid:t}),n.a.createElement(h,{templateColumns:["1fr","4fr 1fr","6fr 1fr","3fr 2fr","1fr 1fr"],gap:[2,8,12,16],p:[8,8,16],position:"absolute",top:0,zIndex:100},n.a.createElement(c.a,null,n.a.createElement(E,{color:"brandYellow",fontSize:["xl","xl","3xl","5xl"]},"WE BUILD ROBOTS TO EMPOWER COMMUNITIES TO GET PLASTIC OUT OF THE OCEAN"),n.a.createElement(w.a,{color:"white",fontSize:["xs","sm","md"],lineHeight:["base","tall","taller"]},"Clearbot is a swarm of trash collecting robots that use AI-Vision to detect and collect trash from water bodies. These robots are fully autonomous, solar-powered and work as a team to remove trash. In comparison to any current solution, Clearbot is 15x cheaper, has 5x more reach and removes 2x more trash daily (24x7x365)."))))},C=function(e){var t=e.title,r=e.id,a=e.children;return n.a.createElement(c.a,{id:r},n.a.createElement(E,{textAlign:"center",fontSize:["5xl","5xl","3xl","5xl"],p:[4,4,4,8,16],color:"brandBlue"},t),a)},R=r("Weur"),I=function(e){var t=e.scmp;return n.a.createElement(C,{title:"Press",id:"press"},n.a.createElement(R.a,{justifyContent:"center"},n.a.createElement(h,{templateColumns:["1fr","1fr","1fr","3fr 2fr","3fr 2fr"],maxW:"5xl",margin:4,p:4,borderWidth:"2px",borderStyle:"solid"},n.a.createElement(c.a,null,n.a.createElement(S.a,{fluid:t})),n.a.createElement(c.a,{p:[4]},n.a.createElement(E,{color:"brandBlue",fontSize:["2xl"],lineHeight:"tall"},"High hopes for Hong Kong-designed robot marine trash hunter"),n.a.createElement(w.a,{lineHeight:"tall"},"ClearBot solar-powered, semi-submersible, US$900 rubbish scooper invention won Hong Kong student engineers and scientists a global prize.")))))},z=function(e){var t=e.awards;return n.a.createElement(C,{title:"Awards",id:"awards"},n.a.createElement(h,{id:"awards",maxW:"5xl",margin:"auto",p:4,templateColumns:["1fr","1fr","repeat("+t.length+", 1fr)","repeat("+t.length+", 1fr)","repeat("+t.length+", 1fr)"],alignItems:"center",justifyItems:"center"},t.map((function(e,t){return n.a.createElement(c.a,{key:t,w:"3xs"},n.a.createElement(S.a,{fluid:e}))}))))},j=r("pboS"),L=r("w0db"),T=function(e){var t=e.prediction;return n.a.createElement(c.a,{backgroundColor:"brandBlue",mt:"8",id:"contactus"},n.a.createElement(h,{p:20,templateColumns:["1fr","1fr","2fr 3fr","3fr 2fr","3fr 2fr"],gap:20,maxW:"5xl",margin:"auto"},n.a.createElement(c.a,null,n.a.createElement(E,{color:"white",fontSize:["3xl","5xl","5xl","5xl"]},"Here is how you can contribute")),n.a.createElement(c.a,{backgroundColor:"white"},n.a.createElement(S.a,{fluid:t}),n.a.createElement(j.a,{href:"/label"},n.a.createElement(R.a,{p:"4",borderBottom:"1px solid #f0f0f0",justifyContent:"space-between"},n.a.createElement(w.a,null,"HELP LABEL DATA"),n.a.createElement(L.a,{name:"arrow-forward",size:"24px"}))),n.a.createElement(j.a,{href:"/upload"},n.a.createElement(R.a,{p:"4",justifyContent:"space-between"},n.a.createElement(w.a,null,"CONTRIBUTE TO DATASET"),n.a.createElement(L.a,{name:"arrow-forward",size:"24px"}))))))},H=(r("U6Bt"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),Object(a.createContext)()),k=function(){return Object(a.useContext)(H)},P=Object(a.forwardRef)((function(e,t){var r=e.isInvalid,a=e.isRequired,n=e.isDisabled,i=e.isReadOnly,o=p()(e,["isInvalid","isRequired","isDisabled","isReadOnly"]),l={isRequired:a,isDisabled:n,isInvalid:r,isReadOnly:i};return Object(b.d)(H.Provider,{value:l},Object(b.d)(c.a,f()({role:"group",ref:t},o)))}));P.displayName="FormControl";var N=P,B=r("+Cyc"),A=(r("R48M"),r("+ar0"),r("xtjI"),r("JHok"),r("OeI1"),r("4DPX"),r("lSNA")),q=r.n(A),W=r("mf32"),V=r("za5s");function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(r,!0).forEach((function(t){q()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={_readOnly:{bg:"transparent",boxShadow:"none !important",userSelect:"all"}},F={bg:"transparent",px:void 0,height:void 0},_=function(e){switch(e.variant){case"flushed":return r=(t=e).theme,a=t.focusBorderColor,n=t.errorBorderColor,i=Object(V.h)(r.colors,a,a),o=Object(V.h)(r.colors,n,n),D({},M,{borderBottom:"2px",borderColor:"inherit",rounded:0,px:void 0,bg:"transparent",_focus:{zIndex:1,borderColor:i},_invalid:{borderColor:o}});case"unstyled":return F;case"filled":return function(e){var t=e.theme,r=e.focusBorderColor,a=e.errorBorderColor,n=e.colorMode,i=Object(V.h)(t.colors,r,r),o=Object(V.h)(t.colors,a,a);return D({},M,{border:"2px",borderColor:"transparent",bg:{light:"gray.100",dark:"whiteAlpha.50"}[n],_hover:{bg:{light:"gray.200",dark:"whiteAlpha.100"}[n]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,bg:"transparent",borderColor:i},_invalid:{borderColor:o}})}(e);case"outline":return function(e){var t=e.theme,r=e.colorMode,a=e.focusBorderColor,n=e.errorBorderColor,i=Object(V.h)(t.colors,a,a),o=Object(V.h)(t.colors,n,n);return D({},M,{border:"1px",borderColor:{light:"inherit",dark:"whiteAlpha.50"}[r],bg:{light:"white",dark:"whiteAlpha.100"}[r],_hover:{borderColor:{light:"gray.300",dark:"whiteAlpha.200"}[r]},_disabled:{opacity:"0.4",cursor:"not-allowed"},_focus:{zIndex:1,borderColor:i,boxShadow:"0 0 0 1px "+i},_invalid:{borderColor:o,boxShadow:"0 0 0 1px "+o}})}(e);default:return{}}var t,r,a,n,i,o},U={display:"flex",alignItems:"center",position:"relative",transition:"all 0.2s",outline:"none",appearance:"none"},J={lg:{fontSize:"lg",px:4,height:12,rounded:"md"},md:{fontSize:"md",px:4,height:10,rounded:"md"},sm:{fontSize:"sm",px:3,height:8,rounded:"sm"}},K=function(e){var t=D({},e,{theme:Object(o.b)(),colorMode:Object(W.a)().colorMode});return D({width:e.isFullWidth?"100%":void 0},U,{},function(e){return J[e.size]}(t),{},_(t))},Q=Object(a.forwardRef)((function(e,t){e.size,e.variant;var r=e.as,a=e["aria-label"],n=e["aria-describedby"],i=e.isReadOnly,o=(e.isFullWidth,e.isDisabled,e.isInvalid,e.isRequired,e.focusBorderColor,e.errorBorderColor,p()(e,["size","variant","as","aria-label","aria-describedby","isReadOnly","isFullWidth","isDisabled","isInvalid","isRequired","focusBorderColor","errorBorderColor"])),l=K(e),s=function(e){var t=k();return t?Object.keys(t).reduce((function(r,a){return r[a]=e[a],t&&null==e[a]&&(r[a]=t[a]),r}),{}):e}(e);return Object(b.d)(B.a,f()({ref:t,as:r,readOnly:s.isReadOnly,"aria-readonly":i,disabled:s.isDisabled,"aria-label":a,"aria-invalid":s.isInvalid,required:s.isRequired,"aria-required":s.isRequired,"aria-disabled":s.isDisabled,"aria-describedby":n},l,o))}));Q.displayName="Input",Q.defaultProps={size:"md",as:"input",variant:"outline",isFullWidth:!0,focusBorderColor:"blue.500",errorBorderColor:"red.500"};var X=Q,Y=Object(a.forwardRef)((function(e,t){return Object(b.d)(X,f()({py:"8px",minHeight:"80px",lineHeight:"short",ref:t,as:"textarea"},e))}));Y.displayName="Textarea";var Z=Y;Object(a.forwardRef)((function(e,t){var r=e.minHeight,n=void 0===r?"39px":r,i=e.onInput,o=p()(e,["minHeight","onInput"]),l=Object(a.useState)(0),s=l[0],d=l[1],c=Object(a.useRef)(),u=t||c;Object(a.useLayoutEffect)((function(){u.current&&d(u.current.scrollHeight)}),[u]);return Object(b.d)(Y,f()({rows:"1",onInput:function(e){u.current&&setTimeout((function(){d("auto"),d(u.current.scrollHeight)}),0),i&&i(e)},css:{height:s,resize:"none",overflow:"hidden",minHeight:n},ref:u},o))})).displayName="ExpandingTextarea";var $=r("ma3e"),ee=function(){return n.a.createElement(c.a,{id:"contactus"},n.a.createElement(h,{p:20,templateColumns:["1fr","1fr","1fr 1fr","1fr 1fr","1fr 1fr"],gap:20,maxW:"7xl",margin:"auto"},n.a.createElement(c.a,null,n.a.createElement(E,{fontSize:["3xl","3xl","3xl","3xl"],pb:"10"},"CONTACT US"),n.a.createElement(c.a,{as:"form"},n.a.createElement(N,{mb:"4"},n.a.createElement(X,{type:"name",id:"name","aria-describedby":"email-helper-text",placeholder:"Name"})),n.a.createElement(N,{mb:"4"},n.a.createElement(X,{type:"email",id:"email","aria-describedby":"email-helper-text",placeholder:"Email address"})),n.a.createElement(N,{mb:"4"},n.a.createElement(Z,{id:"comments",placeholder:"Comments"})))),n.a.createElement(c.a,null,n.a.createElement(E,{fontSize:["3xl","3xl","3xl","3xl"],pb:"10"},"FOLLOW US"),n.a.createElement(R.a,{alignItems:"center"},n.a.createElement(j.a,{href:"https://facebook.com/clearbot",fontSize:"4xl",mr:"6"},n.a.createElement($.a,null)),n.a.createElement(j.a,{href:"https://www.instagram.com/clearbothk/",fontSize:"4xl",mr:"6"},n.a.createElement($.b,null)),n.a.createElement(j.a,{href:"https://www.linkedin.com/company/clearbothk",fontSize:"4xl"},n.a.createElement($.c,null))),n.a.createElement(E,{fontSize:["3xl","3xl","3xl","3xl"],pt:"10",pb:"6"},"OR EMAIL US"),n.a.createElement(j.a,{href:"mailto:contact@clearbot.dev",fontSize:"xl",mr:"6"},n.a.createElement(w.a,null,"contact@clearbot.dev")))))},te=Object.assign({},i.a,{colors:Object.assign({},i.a.colors,{brandYellow:"#F9C100",brandBlue:"#0099AA"})}),re="3075342131";t.default=function(e){var t=e.data;return console.log(t),n.a.createElement(o.a,{theme:te},n.a.createElement(l.a,null),n.a.createElement(s.a,null,n.a.createElement(d.a,{title:"Home"}),n.a.createElement(O,{image:t.banner.childImageSharp.fluid}),n.a.createElement(I,{scmp:t.scmp.childImageSharp.fluid}),n.a.createElement(z,{awards:[t.jumpstarter.childImageSharp.fluid,t.ggcs.childImageSharp.fluid]}),n.a.createElement(T,{prediction:t.prediction.childImageSharp.fluid}),n.a.createElement(ee,null)))}},"t+fG":function(e,t,r){var a=r("P8UN"),n=r("96qb"),i=r("ap2Z"),o=/"/g,l=function(e,t,r,a){var n=String(i(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),a(a.P+a.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-997019282d044cd62e97.js.map