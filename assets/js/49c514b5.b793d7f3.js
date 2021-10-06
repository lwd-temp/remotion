(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9662],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return i},withMDXComponents:function(){return o}});var n=t(2784);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),o=function(e){return function(a){var t=i(a.components);return n.createElement(e,s({},a,{components:t}))}},i=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(d.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),o=i(t),c=r,v=o["".concat(m,".").concat(c)]||o[c]||N[c]||s;return t?n.createElement(v,p(p({ref:a},d),{},{components:t})):n.createElement(v,p({ref:a},d))}));function x(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,m=new Array(s);m[0]=v;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var d=2;d<s;d++)m[d]=t[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},39192:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return o},default:function(){return c}});var n=t(22122),r=t(19756),s=(t(2784),t(3905)),m=["components"],p={title:"useCurrentFrame()",id:"use-current-frame"},l=void 0,d={unversionedId:"use-current-frame",id:"use-current-frame",isDocsHomePage:!1,title:"useCurrentFrame()",description:"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is 0, the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about the fundamentals.",source:"@site/docs/use-current-frame.md",sourceDirName:".",slug:"/use-current-frame",permalink:"/docs/use-current-frame",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/use-current-frame.md",tags:[],version:"current",frontMatter:{title:"useCurrentFrame()",id:"use-current-frame"},sidebar:"someSidebar",previous:{title:"spring()",permalink:"/docs/spring"},next:{title:"useVideoConfig()",permalink:"/docs/use-video-config"}},o=[{value:"See also",id:"see-also",children:[]}],i={toc:o};function c(e){var a=e.components,t=(0,r.default)(e,m);return(0,s.mdx)("wrapper",(0,n.default)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"With this hook, you can retrieve the current frame of the video. Frames are 0-indexed, meaning the first frame is ",(0,s.mdx)("inlineCode",{parentName:"p"},"0"),", the last frame is the duration of the composition in frames minus one. To learn more about how Remotion works with time, read the page about ",(0,s.mdx)("a",{parentName:"p",href:"/docs/the-fundamentals"},"the fundamentals"),"."),(0,s.mdx)("p",null,"If the component you are writing is wrapped in a ",(0,s.mdx)("inlineCode",{parentName:"p"},"<Sequence>"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return the frame relative to when the Sequence starts."),(0,s.mdx)("p",null,"Say the timeline marker is positioned at frame 25. In the example below, ",(0,s.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame")," will return ",(0,s.mdx)("inlineCode",{parentName:"p"},"25"),", except within the Subtitle component, where it will return ",(0,s.mdx)("inlineCode",{parentName:"p"},"15")," because it is within a sequence that starts at frame 10."),(0,s.mdx)("div",{className:"shiki-twoslash-fragment"},(0,s.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#fff",color:"#24292e"}},(0,s.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.mdx)("div",{parentName:"pre",className:"code-container"},(0,s.mdx)("code",{parentName:"div"},(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Sequence: React.FC<SequenceProps>\nimport Sequence"},"Sequence"),", ",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useCurrentFrame: () => number\nimport useCurrentFrame"},"useCurrentFrame"),"} "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#032F62"}},"'remotion'")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"() "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// 25")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">{",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,s.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"() "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// 15")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">{",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,s.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"() "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// 25")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," />")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Sequence: React.FC<SequenceProps>\nimport Sequence"},"Sequence")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) from: number"},"from")),(0,s.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{"),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"10"),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}>")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," />")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      </"),(0,s.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Sequence: React.FC<SequenceProps>\nimport Sequence"},"Sequence")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    </"),(0,s.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  )")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,s.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,s.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,s.mdx)("div",{parentName:"pre",className:"code-container"},(0,s.mdx)("code",{parentName:"div"},(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Sequence: React.FC<SequenceProps>\nimport Sequence"},"Sequence"),", ",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const useCurrentFrame: () => number\nimport useCurrentFrame"},"useCurrentFrame"),"} "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},"'remotion'")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," () "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"() "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// 25")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">{",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,s.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," () "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"() "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// 15")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">{",(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame"),"}</"),(0,s.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," () "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const frame: number"},"frame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) useCurrentFrame(): number\nimport useCurrentFrame"},"useCurrentFrame")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"() "),(0,s.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// 25")),(0,s.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," (")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Title: () => JSX.Element"},"Title")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," />")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Sequence: React.FC<SequenceProps>\nimport Sequence"},"Sequence")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,s.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) from: number"},"from")),(0,s.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"{"),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"10"),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}>")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        <"),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"const Subtitle: () => JSX.Element"},"Subtitle")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," />")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      </"),(0,s.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Sequence: React.FC<SequenceProps>\nimport Sequence"},"Sequence")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    </"),(0,s.mdx)("span",{parentName:"div",style:{color:"#85E89D"}},(0,s.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},">")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  )")),(0,s.mdx)("div",{parentName:"code",className:"line"},(0,s.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"}")))))),(0,s.mdx)("h2",{id:"see-also"},"See also"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("a",{parentName:"li",href:"/docs/use-video-config"},"useVideoConfig()"))))}c.isMDXComponent=!0}}]);