(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4968],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return l},withMDXComponents:function(){return m}});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){return function(t){var n=l(t.components);return r.createElement(e,o({},t,{components:n}))}},l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),c=a,v=m["".concat(i,".").concat(c)]||m[c]||u[c]||o;return n?r.createElement(v,p(p({ref:t},d),{},{components:n})):r.createElement(v,p({ref:t},d))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},61808:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(2784),n(3905)),i=["components"],p={title:"getInputProps()",id:"get-input-props"},s=void 0,d={unversionedId:"get-input-props",id:"get-input-props",isDocsHomePage:!1,title:"getInputProps()",description:"Available from v2.0.",source:"@site/docs/get-input-props.md",sourceDirName:".",slug:"/get-input-props",permalink:"/docs/get-input-props",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/get-input-props.md",tags:[],version:"current",frontMatter:{title:"getInputProps()",id:"get-input-props"},sidebar:"someSidebar",previous:{title:"interpolateColors()",permalink:"/docs/interpolate-colors"},next:{title:"measureSpring()",permalink:"/docs/measure-spring"}},m=[{value:"API",id:"api",children:[]},{value:"See also",id:"see-also",children:[]}],l={toc:m};function c(e){var t=e.components,n=(0,a.default)(e,i);return(0,o.mdx)("wrapper",(0,r.default)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Available from v2.0"),"."),(0,o.mdx)("p",null,"Using this method, you can retrieve inputs that you pass in from the command line using ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli"},(0,o.mdx)("inlineCode",{parentName:"a"},"--props")),", or the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ssr#render-a-video-programmatically"},(0,o.mdx)("inlineCode",{parentName:"a"},"inputProps"))," parameter if you are using the Node.JS API."),(0,o.mdx)("p",null,"You should whenever possible prefer to retrieve props directly in your composition, like you would read props from a component if you were to code a React application, but this method is useful if you want to retrieve the input props outside of a composition."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"This method is not available when inside a Remotion Player. Instead, get the props as React props from the component you passed as the ",(0,o.mdx)("inlineCode",{parentName:"p"},"component")," prop to the player."))),(0,o.mdx)("h2",{id:"api"},"API"),(0,o.mdx)("p",null,"Pass in a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli"},"parseable")," JSON representation using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--props")," flag to either ",(0,o.mdx)("inlineCode",{parentName:"p"},"remotion preview")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"remotion render"),":"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"npx remotion render --props="),(0,o.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'\'{"hello": "world"}\''),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," src/index.tsx my-composition out/video.mp4"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"npx remotion render --props="),(0,o.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},'\'{"hello": "world"}\''),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," src/index.tsx my-composition out/video.mp4")))))),(0,o.mdx)("p",null,"You can then access the props in JavaScript:"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {"),(0,o.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'const hello: "world"'},"hello")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'const getInputProps: () => {\n    readonly hello: "world";\n}'},"getInputProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"() "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},'// "world"'))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'const hello: "world"'},"hello")),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'const getInputProps: () => {\n    readonly hello: "world";\n}'},"getInputProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"() "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},'// "world"')))))),(0,o.mdx)("p",null,"In this example, the props also get passed to the component of the composition with the id ",(0,o.mdx)("inlineCode",{parentName:"p"},"my-composition"),"."),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/dynamic-metadata"},"Dynamic duration, FPS & dimensions"))))}c.isMDXComponent=!0}}]);