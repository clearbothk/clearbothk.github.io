(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),l=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,w=E&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+c+l+o+a+r+t+i+n+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,l=e.ariaHidden,o=c.default.createElement(R,(0,s.default)({ref:t,src:a},i,{ariaHidden:l}));return r.length>1?c.default.createElement("picture",null,n(r),o):o})),R=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,w=e.Tag,y=e.itemProp,S=e.loading,j=e.draggable,C=g||h;if(!C)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:z?1:0,transition:k?"opacity "+E+"ms":"none"},o),H="boolean"==typeof b?"lightgray":b,N={transitionDelay:E+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},k&&N,o,f),W={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:y},V=this.state.isHydrated?p(C):C[0];if(g)return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),H&&c.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&N)}),V.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:W,imageVariants:C,generateSources:O}),V.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:W,imageVariants:C,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,v(C),c.default.createElement(R,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:a,title:t,loading:S},V,{imageVariants:C}))}}));if(h){var G=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete G.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},H&&c.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:H,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},k&&N)}),V.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:W,imageVariants:C,generateSources:O}),V.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:W,imageVariants:C,generateSources:x}),this.state.isVisible&&c.default.createElement("picture",null,v(C),c.default.createElement(R,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,s.default)({alt:a,title:t,loading:S},V,{imageVariants:C}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function H(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}z.propTypes={resolutions:k,sizes:T,fixed:H(d.default.oneOfType([k,d.default.arrayOf(k)])),fluid:H(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var N=z;t.default=N},F2j1:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a("sKyC"),n=a("U6LL"),i=a("pr4h"),l=a("x9W9"),o=a("BXwj"),s=a("q1tI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var u=Object(r.a)((function(e,t){var a=e.area,r=e.templateAreas,i=e.gap,l=e.rowGap,o=e.columnGap,u=e.column,f=e.row,m=e.autoFlow,p=e.autoRows,g=e.templateRows,h=e.autoColumns,b=e.templateColumns,E=d(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),w={display:"grid",gridArea:a,gridTemplateAreas:r,gridGap:i,gridRowGap:l,gridColumnGap:o,gridAutoColumns:h,gridColumn:u,gridRow:f,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:g,gridTemplateColumns:b};return s.createElement(n.a.div,c({ref:t,__css:w},E))}));function f(e){return Object(l.d)(e,(function(e){return"auto"===e?"auto":"span "+e+"/span "+e}))}i.a&&(u.displayName="Grid");var m=Object(r.a)((function(e,t){var a=e.colSpan,r=e.colStart,i=e.colEnd,l=e.rowEnd,u=e.rowSpan,m=e.rowStart,p=d(e,["colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"]),g=Object(o.a)({gridColumn:f(a),gridRow:f(u),gridColumnStart:r,gridColumnEnd:i,gridRowStart:m,gridRowEnd:l});return s.createElement(n.a.div,c({ref:t,__css:g},p))}))},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function s(e){return function(t){return r.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function c(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var i=e.attr,s=e.title,c=o(e,["attr","title"]);return r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:a,style:l({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},PwBK:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("155x"),n=a("sKyC"),i=a("4jWa"),l=a("CRla"),o=a("U6LL"),s=a("BXwj"),c=a("epLR"),d=a("pr4h"),u=a("q1tI");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var m=Object(n.a)((function(e,t){var a=Object(i.b)("Textarea",e),n=Object(l.b)(e),d=n.className,m=n.rows,p=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(n,["className","rows"]),g=Object(r.a)(p),h=m?Object(s.f)(a,["h","minH","height","minHeight"]):a;return u.createElement(o.a.textarea,f({ref:t,rows:m},g,{className:Object(c.c)("chakra-textarea",d),__css:h}))}));d.a&&(m.displayName="Textarea")},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),l=a("vrFN"),o=a("v7Hm"),s=a("rGDf"),c=function(e){var t=e.title,a=e.id,r=e.children;return n.a.createElement(o.a,{id:a},n.a.createElement(s.a,{textAlign:"center",fontSize:["5xl","5xl","3xl","5xl"],p:[4,4,4,8,16],color:"brandBlue"},t),r)},d=a("tofy"),u=a("zHD3"),f=a("F2j1"),m=a("MAJE"),p=a("vG+z"),g=a("9eSz"),h=a.n(g),b=function(e){var t=e.scmp;return n.a.createElement(c,{title:"Press",id:"press"},n.a.createElement(d.a,{direction:["column","column","row","row","row"]},n.a.createElement(d.a,{justifyContent:"center"},n.a.createElement(u.a,{href:"https://www.scmp.com/lifestyle/article/3039950/robot-marine-plastic-pollution-collector-hong-kong-students-invented"},n.a.createElement(f.a,{templateColumns:"1fr",maxW:"5xl",margin:4,p:4},n.a.createElement(o.a,null,n.a.createElement(h.a,{fluid:t})),n.a.createElement(o.a,{p:[4]},n.a.createElement(s.a,{color:"brandBlue",fontSize:["2xl"],lineHeight:"tall"},"High hopes for Hong Kong-designed robot marine trash hunter"),n.a.createElement(m.a,{fontWeight:900,mb:3},"South China Morning Post"),n.a.createElement(m.a,{lineHeight:"tall"},"ClearBot solar-powered, semi-submersible, US$900 rubbish scooper invention won Hong Kong student engineers and scientists a global prize."))))),n.a.createElement(d.a,{justifyContent:"center"},n.a.createElement(u.a,{href:"https://www.wsj.com/articles/best-of-ces-2021-the-virtual-tech-shows-weirdest-and-most-wondrous-gadgets-11610719200"},n.a.createElement(f.a,{templateColumns:"1fr",maxW:"5xl",margin:4,p:4},n.a.createElement(o.a,null,n.a.createElement(p.a,{src:"https://images.wsj.net/im-285749/IM"})),n.a.createElement(o.a,{p:[4]},n.a.createElement(s.a,{color:"brandBlue",fontSize:["2xl"],lineHeight:"tall"},"Best of CES 2021: The (Virtual) Tech Show’s Weirdest and Most Wondrous Gadgets"),n.a.createElement(m.a,{fontWeight:900},"Wall Street Journal")))))))},E=function(e){var t=e.awards;return n.a.createElement(c,{title:"Awards",id:"awards"},n.a.createElement(f.a,{id:"awards",maxW:"2xl",margin:"auto",p:4,templateColumns:["1fr","1fr","repeat("+t.length+", 1fr)","repeat("+t.length+", 1fr)","repeat("+t.length+", 1fr)"],alignItems:"center",justifyItems:"center",gridGap:10},t.map((function(e,t){return n.a.createElement(o.a,{key:t,w:"3xs"},n.a.createElement(h.a,{fluid:e}))}))))},w=function(e){e.prediction;var t=e.helpus;return n.a.createElement(o.a,{backgroundColor:"brandBlue",mt:"8",id:"contactus",pos:"relative"},n.a.createElement(h.a,{fluid:t}),n.a.createElement(d.a,{p:[2,4,8,12,16,20],pos:"absolute",top:"0",left:"0",flexDir:"column",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.4)"},n.a.createElement(o.a,null,n.a.createElement(s.a,{color:"white",fontSize:["xl","2xl","3xl","5xl","5xl"],py:4},"Here is how you can contribute")),n.a.createElement(o.a,{color:"white"},n.a.createElement(u.a,{href:"/label"},n.a.createElement(d.a,{py:4,justifyContent:"space-between"},n.a.createElement(m.a,{fontSize:["xs","sm","md","lg","xl"]},"HELP LABEL DATA"))),n.a.createElement(u.a,{href:"/upload"},n.a.createElement(d.a,{py:4,justifyContent:"space-between"},n.a.createElement(m.a,{fontSize:["xs","sm","md","lg","xl"]},"CONTRIBUTE TO DATASET"))))))},y=a("kiPq"),v=a("+QmB"),S=a("PwBK"),x=a("ma3e"),O=function(){return n.a.createElement(o.a,{id:"contactus"},n.a.createElement(f.a,{p:20,templateColumns:["1fr","1fr","1fr 1fr","1fr 1fr","1fr 1fr"],gap:20,maxW:"7xl",margin:"auto"},n.a.createElement(o.a,null,n.a.createElement(s.a,{fontSize:["3xl","3xl","3xl","3xl"],pb:"10"},"CONTACT US"),n.a.createElement(o.a,{as:"form"},n.a.createElement(y.a,{mb:"4"},n.a.createElement(v.a,{type:"name",id:"name","aria-describedby":"email-helper-text",placeholder:"Name",fontFamily:"body"})),n.a.createElement(y.a,{mb:"4"},n.a.createElement(v.a,{type:"email",id:"email","aria-describedby":"email-helper-text",placeholder:"Email address",fontFamily:"body"})),n.a.createElement(y.a,{mb:"4"},n.a.createElement(S.a,{id:"comments",placeholder:"Comments",fontFamily:"body"})))),n.a.createElement(o.a,null,n.a.createElement(s.a,{fontSize:["3xl","3xl","3xl","3xl"],pb:"10"},"FOLLOW US"),n.a.createElement(d.a,{alignItems:"center"},n.a.createElement(u.a,{href:"https://facebook.com/clearbot",fontSize:"4xl",mr:"6"},n.a.createElement(x.a,null)),n.a.createElement(u.a,{href:"https://www.instagram.com/clearbothk/",fontSize:"4xl",mr:"6"},n.a.createElement(x.b,null)),n.a.createElement(u.a,{href:"https://www.linkedin.com/company/clearbothk",fontSize:"4xl"},n.a.createElement(x.c,null))),n.a.createElement(s.a,{fontSize:["3xl","3xl","3xl","3xl"],pt:"10",pb:"6"},"OR EMAIL US"),n.a.createElement(u.a,{href:"mailto:contact@clearbot.dev",fontSize:"xl",mr:"6"},n.a.createElement(m.a,null,"contact@clearbot.dev")))))},j=function(e){var t=e.vidSrc;return n.a.createElement(o.a,{position:"relative",width:"100%"},n.a.createElement(d.a,{opacity:"0.4",position:"absolute",width:"100%",height:"100%",top:"0",left:"0",backgroundColor:"#000"}),n.a.createElement(d.a,{position:"absolute",width:"100%",height:"100%",top:"0",left:"0",p:10},n.a.createElement(f.a,{templateColumns:["1fr","4fr 1fr","6fr 1fr","3fr 2fr","1fr 1fr"],gap:[2,8,12,16],p:[8,8,16],position:"absolute",top:0,zIndex:100},n.a.createElement(o.a,null,n.a.createElement(s.a,{color:"brandYellow",fontSize:["xl","xl","3xl","5xl"]},"WE BUILD ROBOTS TO GET PLASTIC OUT OF THE OCEAN"),n.a.createElement(m.a,{color:"white",fontSize:["xs","sm","md"],lineHeight:["base","tall","taller"]},"Clearbot is a swarm of trash collecting robots that use AI-Vision to detect and collect trash from water bodies. These robots are fully autonomous, solar-powered and work as a team to remove trash. In comparison to any current solution, Clearbot is 15x cheaper, has 5x more reach and removes 2x more trash daily (24x7x365).")))),n.a.createElement("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,loop:!0},n.a.createElement("source",{src:t,type:"video/mp4"})))},C=a("mOt1"),I=a.n(C);t.default=function(e){var t=e.data;return n.a.createElement(i.a,null,n.a.createElement(l.a,{title:"Home"}),n.a.createElement(j,{vidSrc:I.a}),n.a.createElement(b,{scmp:t.scmp.childImageSharp.fluid}),n.a.createElement(E,{awards:[t.jumpstarter.childImageSharp.fluid,t.ggcs.childImageSharp.fluid]}),n.a.createElement(w,{prediction:t.prediction.childImageSharp.fluid,helpus:t.helpus.childImageSharp.fluid}),n.a.createElement(O,null))}},mOt1:function(e,t,a){e.exports=a.p+"static/clearbot-7dd55c2791b61f440e6c5aa6b24fcc08.mp4"},"vG+z":function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return m}));var r=a("sKyC"),n=a("U6LL"),i=a("BXwj"),l=a("pr4h"),o=a("q1tI"),s=a("yGVr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var u=o.forwardRef((function(e,t){var a=e.htmlWidth,r=e.htmlHeight,n=e.alt,i=d(e,["htmlWidth","htmlHeight","alt"]);return o.createElement("img",c({width:a,height:r,ref:t,alt:n},i))})),f=Object(r.a)((function(e,t){var a=e.fallbackSrc,r=e.fallback,l=e.src,f=e.align,m=e.fit,p=e.loading,g=e.ignoreFallback,h=e.crossOrigin,b=d(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),E=null!=p||g,w=Object(s.a)(c({},e,{ignoreFallback:E})),y=c({ref:t,objectFit:m,objectPosition:f},E?b:Object(i.f)(b,["onError","onLoad"]));return"loaded"!==w?r||o.createElement(n.a.img,c({as:u,className:"chakra-image__placeholder",src:a},y)):o.createElement(n.a.img,c({as:u,src:l,crossOrigin:h,loading:p,className:"chakra-image"},y))})),m=Object(r.a)((function(e,t){return o.createElement(n.a.img,c({ref:t,as:u,className:"chakra-image"},e))}));l.a&&(f.displayName="Image")},yGVr:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a("ODXe"),n=a("zlS4"),i=a("q1tI");function l(e){var t=e.src,a=e.srcSet,l=e.onLoad,o=e.onError,s=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,u=Object(i.useState)("pending"),f=Object(r.a)(u,2),m=f[0],p=f[1];Object(i.useEffect)((function(){p(t?"loading":"pending")}),[t]);var g=Object(i.useRef)(),h=Object(i.useCallback)((function(){if(t){b();var e=new Image;e.src=t,s&&(e.crossOrigin=s),a&&(e.srcset=a),c&&(e.sizes=c),e.onload=function(e){b(),p("loaded"),null==l||l(e)},e.onerror=function(e){b(),p("failed"),null==o||o(e)},g.current=e}}),[t,s,a,c,l,o]),b=function(){g.current&&(g.current.onload=null,g.current.onerror=null,g.current=null)};return Object(n.a)((function(){if(!d)return"loading"===m&&h(),function(){b()}}),[m,h,d]),d?"loaded":m}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c87964f7d0f6fcf952dc.js.map