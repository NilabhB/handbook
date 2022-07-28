"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(v,o(o({ref:t},p),{},{components:n})):i.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],d={id:"dev-guide-web",title:"Developer Guide (Web)",sidebar_label:"Start"},l=void 0,s={unversionedId:"dev-guide/dev-guide-web",id:"dev-guide/dev-guide-web",title:"Developer Guide (Web)",description:"Welcome to the developers guide for web! This guide will help you setup a development",source:"@site/docs/dev-guide/web.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-web",permalink:"/handbook/docs/dev-guide/dev-guide-web",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/web.md",tags:[],version:"current",lastUpdatedAt:1658998894,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"dev-guide-web",title:"Developer Guide (Web)",sidebar_label:"Start"},sidebar:"docs",previous:{title:"Contributing Guidelines",permalink:"/handbook/docs/dev-guide/dev-guide-contributing"},next:{title:"Modifying lib-jitsi-meet",permalink:"/handbook/docs/dev-guide/dev-guide-ljm"}},p={},u=[{value:"Building the sources",id:"building-the-sources",level:2},{value:"Running with webpack-dev-server for development",id:"running-with-webpack-dev-server-for-development",level:3},{value:"Certificate Error",id:"certificate-error",level:4},{value:"Building .debs",id:"building-debs",level:3},{value:"Running from source on existing deployment",id:"running-from-source-on-existing-deployment",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the developers guide for web! This guide will help you setup a development\nenvironment to start working on the Jitsi Meet applications."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Building the apps / SDKs is not supported on Windows."))),(0,r.kt)("h2",{id:"building-the-sources"},"Building the sources"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Node.js >= 16 and npm >= 8 are required."))),(0,r.kt)("p",null,"On Debian/Ubuntu systems, the required packages can be installed with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Download "Linux Binaries (x64)" from ',(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,r.kt)("li",{parentName:"ul"},"Install Node.js following these instructions: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/wiki/Installation"},"https://github.com/nodejs/help/wiki/Installation"))),(0,r.kt)("p",null,"Then go ahead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone https://github.com/jitsi/jitsi-meet\ncd ./jitsi-meet\n\nnpm install\n\n# To build the Jitsi Meet application, just type\nmake\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"DO NOT")," run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm update")," or use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," or delete ",(0,r.kt)("inlineCode",{parentName:"p"},"package-lock.json"),". Dependencies are pinned for a reason."))),(0,r.kt)("h3",{id:"running-with-webpack-dev-server-for-development"},"Running with webpack-dev-server for development"),(0,r.kt)("p",null,"Use the following command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make dev\n")),(0,r.kt)("p",null,"By default the backend deployment used is ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha.jitsi.net"),". You can point the Jitsi Meet app at a different backend by using a proxy server. To do this, set the WEBPACK_DEV_SERVER_PROXY_TARGET variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WEBPACK_DEV_SERVER_PROXY_TARGET=https://your-example-server.com\nmake dev\n")),(0,r.kt)("p",null,"The app should be running at https://localhost:8080/"),(0,r.kt)("h4",{id:"certificate-error"},"Certificate Error"),(0,r.kt)("p",null,"Browsers may show a certificate error since the development certificate is self-signed. It's safe to disregard those\nwarning and continue to your site."),(0,r.kt)("h3",{id:"building-debs"},"Building .debs"),(0,r.kt)("p",null,"To make a deb you can easily deploy to a public test server, ensure you have the lib-jitsi-meet sources you wish, then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install\nmake\ndpkg-buildpackage -A -rfakeroot -us -uc -tc\n")),(0,r.kt)("p",null,"You'll have a bunch of .deb files in the parent directory, and can push the updated source to your server and install it with the jitsi-meet-web deb file."),(0,r.kt)("h3",{id:"running-from-source-on-existing-deployment"},"Running from source on existing deployment"),(0,r.kt)("p",null,"Follow the document ",(0,r.kt)("a",{parentName:"p",href:"https://community.jitsi.org/t/how-to-how-to-build-jitsi-meet-from-source-a-developers-guide/75422"},"https://community.jitsi.org/t/how-to-how-to-build-jitsi-meet-from-source-a-developers-guide/75422")))}m.isMDXComponent=!0}}]);