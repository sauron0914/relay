(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},945:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(1142)),o={id:"migration-setup",title:"Migration Setup",original_id:"migration-setup"},l={unversionedId:"migration-setup",id:"version-v6.0.0/migration-setup",isDocsHomePage:!1,title:"Migration Setup",description:"Installation",source:"@site/versioned_docs/version-v6.0.0/Modern-MigrationSetup.md",slug:"/migration-setup",permalink:"/docs/v6.0.0/migration-setup",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v6.0.0/Modern-MigrationSetup.md",version:"v6.0.0",lastUpdatedBy:"Rick Hanlon",lastUpdatedAt:1619206942},c=[{value:"Installation",id:"installation",children:[]},{value:"Set up babel-plugin-relay for Relay Classic",id:"set-up-babel-plugin-relay-for-relay-classic",children:[]},{value:"Set up babel-plugin-relay for &quot;compatibility mode&quot;",id:"set-up-babel-plugin-relay-for-compatibility-mode",children:[]},{value:"Additional Options",id:"additional-options",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Follow the installation instructions from the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./installation-and-setup"}),"Installation and Setup")," guide."),Object(i.b)("h2",{id:"set-up-babel-plugin-relay-for-relay-classic"},"Set up babel-plugin-relay for Relay Classic"),Object(i.b)("p",null,"With some additional configuration, the ",Object(i.b)("inlineCode",{parentName:"p"},'"relay"')," babel plugin can also translate\nRelay Classic ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.QL")," literals. Most importantly, include a reference to your GraphQL Schema as either a json file or graphql schema file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "plugins": [\n    ["relay", {"schema": "path/schema.graphql"}]\n  ]\n}\n')),Object(i.b)("h2",{id:"set-up-babel-plugin-relay-for-compatibility-mode"},'Set up babel-plugin-relay for "',Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"./relay-compat"}),"compatibility mode"),'"'),Object(i.b)("p",null,"When incrementally converting a Relay Classic app to Relay Modern, ",Object(i.b)("inlineCode",{parentName:"p"},"graphql"),"\nliterals can be translated to be usable by ",Object(i.b)("em",{parentName:"p"},"both")," runtimes if configured to use\ncompatibility mode:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "plugins": [\n    ["relay", {"compat": true, "schema": "path/schema.graphql"}]\n  ]\n}\n')),Object(i.b)("h2",{id:"additional-options"},"Additional Options"),Object(i.b)("p",null,"The Relay Classic and Relay Compat modes produce generated content inline and may\ncatch and log any detected GraphQL validation errors, leaving those errors to be\nthrown at runtime."),Object(i.b)("p",null,"When compiling code for production deployment, the plugin can be configured to immediately throw upon encountering a validation problem. The plugin can be further customized for different environments with the following options:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "plugins": [\n    ["relay", {\n      "compat": true,\n      "schema": "path/schema.graphql",\n    }]\n  ]\n}\n')))}u.isMDXComponent=!0}}]);