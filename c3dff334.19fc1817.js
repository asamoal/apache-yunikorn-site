(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(6),a=(t(0),t(131)),c={id:"cluster",title:"Cluster"},i={unversionedId:"api/cluster",id:"api/cluster",isDocsHomePage:!1,title:"Cluster",description:"\x3c!--",source:"@site/docs/api/cluster.md",slug:"/api/cluster",permalink:"/docs/next/api/cluster",version:"current",sidebar:"docs",previous:{title:"Run Tensorflow Jobs",permalink:"/docs/next/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/docs/next/api/scheduler"}},s=[{value:"Clusters",id:"clusters",children:[{value:"Success response",id:"success-response",children:[]}]}],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"clusters"},"Clusters"),Object(a.b)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL")," : ",Object(a.b)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")," : ",Object(a.b)("inlineCode",{parentName:"p"},"GET")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(a.b)("h3",{id:"success-response"},"Success response"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Code")," : ",Object(a.b)("inlineCode",{parentName:"p"},"200 OK")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Content examples")),Object(a.b)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')))}p.isMDXComponent=!0},131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(f,i(i({ref:n},l),{},{components:t})):o.a.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);