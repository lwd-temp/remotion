(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6958],{3905:function(e,n,a){"use strict";a.r(n),a.d(n,{MDXContext:function(){return s},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return l}});var t=a(2784);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){return function(n){var a=p(n.components);return t.createElement(e,o({},n,{components:a}))}},p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},N=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=p(a),c=r,N=l["".concat(i,".").concat(c)]||l[c]||u[c]||o;return a?t.createElement(N,d(d({ref:n},s),{},{components:a})):t.createElement(N,d({ref:n},s))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=N;var d={};for(var m in n)hasOwnProperty.call(n,m)&&(d[m]=n[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}N.displayName="MDXCreateElement"},15930:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return u}});var t=a(22122),r=a(19756),o=(a(2784),a(3905)),i=["components"],d={slug:"1-1",title:"Remotion 1.1",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},m=void 0,s={permalink:"/blog/1-1",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-02-11-remotion1-1.md",source:"@site/blog/2021-02-11-remotion1-1.md",title:"Remotion 1.1",description:"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!",date:"2021-02-11T00:00:00.000Z",formattedDate:"February 11, 2021",tags:[],readingTime:1.96,truncated:!1,authors:[{name:"Jonny Burger",title:"Indie Hacker",url:"https://github.com/JonnyBurger",imageURL:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"}],prevItem:{title:"Remotion 1.2",permalink:"/blog/1-2"},nextItem:{title:"Introducing Remotion",permalink:"/blog/introducing-remotion"}},l={authorsImageUrls:[void 0]},p=[{value:"Customizing Webpack configuration",id:"customizing-webpack-configuration",children:[]},{value:"New <code>&lt;Img /&gt;</code> and <code>&lt;IFrame /&gt;</code> components",id:"new-img--and-iframe--components",children:[{value:"Bonus: ESLint rule",id:"bonus-eslint-rule",children:[]}]},{value:"Upgrading is easy",id:"upgrading-is-easy",children:[]}],c={toc:p};function u(e){var n=e.components,a=(0,r.default)(e,i);return(0,o.mdx)("wrapper",(0,t.default)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"What an extraordinary launch! In less than 24 hours, the Remotion announcement video has gotten more than 100'000 views on Twitter. The feedback was absolutely overwhelming!"),(0,o.mdx)("p",null,"Now it's time to iterate and make Remotion better. This release contains two new features: Customizing the Webpack configuration and new ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Img>")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"</IFrame>")," components!"),(0,o.mdx)("h2",{id:"customizing-webpack-configuration"},"Customizing Webpack configuration"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"/docs/webpack"},"See docs"))),(0,o.mdx)("p",null,"People had wild ideas on what to do with Remotion like importing MDX files or using React Native components. Now it is possible!"),(0,o.mdx)("p",null,"When providing the possibility on how to configure Remotion, it was of big importance to provide both a high degree of flexibility and a good developer experience. This is how you update the webpack config:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {overrideWebpackConfig} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#032F62"}},"'@remotion/bundler'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"}),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"overrideWebpackConfig"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"(("),(0,o.mdx)("span",{parentName:"div",style:{color:"#E36209"}},"currentConfiguration"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"..."),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"currentConfiguration,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    module: {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"..."),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"currentConfiguration.module,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      rules: [")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"..."),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"currentConfiguration.module.rules,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// Add more loaders here")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      ],")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    },")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  };")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"});"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {overrideWebpackConfig} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#9ECBFF"}},"'@remotion/bundler'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},";")),(0,o.mdx)("div",{parentName:"code",className:"line"}),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"overrideWebpackConfig"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"(("),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"currentConfiguration"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"..."),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"currentConfiguration,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    module: {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"..."),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"currentConfiguration.module,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      rules: [")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"..."),(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"currentConfiguration.module.rules,")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// Add more loaders here")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"      ],")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"    },")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"  };")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#E1E4E8"}},"});")))))),(0,o.mdx)("p",null,"There is a new Remotion config file, that you can write in Typescript. Updating the Webpack config uses the ",(0,o.mdx)("strong",{parentName:"p"},"reducer pattern"),": You get the default configuration and it is your responsibility to return an updated Webpack config. You get type checking, auto completion and the flexibility to either only update a single property or pass in a completely new configuration. No black magic here - since this is just a pure function, the outcome will be very predictable."),(0,o.mdx)("h2",{id:"new-img--and-iframe--components"},"New ",(0,o.mdx)("inlineCode",{parentName:"h2"},"<Img />")," and ",(0,o.mdx)("inlineCode",{parentName:"h2"},"<IFrame />")," components"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("a",{parentName:"strong",href:"/docs/use-img-and-iframe"},"See docs"))),(0,o.mdx)("p",null,"The purpose of these new components is to help with something that is easy to overlook in Remotion: Images or Iframes are being rendered, but Remotion does not wait until the loading of these network resources are complete. The result: Flicker in the end result! The correct thing is ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data-fetching#telling-remotion-to-wait-until-the-data-is-loaded"},"to wait using the ",(0,o.mdx)("inlineCode",{parentName:"a"},"delayRender")," API"),", but this is not very obvious. Now Remotion comes with built-in components that will wait until assets are loaded."),(0,o.mdx)("h3",{id:"bonus-eslint-rule"},"Bonus: ESLint rule"),(0,o.mdx)("p",null,(0,o.mdx)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1629785/107443059-62829e00-6b38-11eb-9d0e-fb12b68fa2a9.png",alt:"ESLint rule 'warn-native-media-tag'"})),(0,o.mdx)("p",null,"To prevent shooting yourself into your foot, Remotion now comes with an ESLint rule that warns if you use the native ",(0,o.mdx)("inlineCode",{parentName:"p"},"<img>"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"<iframe>"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"<video>")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"<audio>")," tags. These tags work better when you use the Remotion-wrapped versions instead."),(0,o.mdx)("h2",{id:"upgrading-is-easy"},"Upgrading is easy"),(0,o.mdx)("p",null,"Simply type"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}},(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},"npm run upgrade"))),(0,o.mdx)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}},(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},"npm run upgrade")))),(0,o.mdx)("p",null,"in your project and you'll get all the newest Remotion packages! Maybe you also noticed that there is a banner in the editor that notifies you when an upgrade is available."))}u.isMDXComponent=!0}}]);