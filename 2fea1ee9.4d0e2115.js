(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{139:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},144:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},145:function(e,t,n){"use strict";var r=n(0),a=n(144);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},152:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(145),o=n(141),c=n(47),u=n.n(c),s=37,l=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,m=e.groupId,p=Object(i.a)(),d=p.tabGroupChoices,f=p.setTabGroupChoices,h=Object(r.useState)(c),j=h[0],O=h[1],y=Object(r.useState)(!1),v=y[0],g=y[1];if(null!=m){var w=d[m];null!=w&&w!==j&&b.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=m&&f(m,e)},k=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",C)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),i=(n(0),n(139)),o=n(152),c=n(153),u={id:"get_involved",title:"Get Involved",hide_title:!0},s={permalink:"/community/get_involved",source:"@site/community/get_invovled.md",description:"\x3c!--",date:"2020-08-10T17:30:57.566Z",tags:[],title:"Get Involved",readingTime:1.75,truncated:!1,nextItem:{title:"How To Contribute",permalink:"/community/how_to_contribute"}},l=[{value:"Communication Channels",id:"communication-channels",children:[]},{value:"Community Meetings",id:"community-meetings",children:[]}],b={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'Apache YuniKorn (Incubating) community is quite diverse, we have engineers from Alibaba, Apple,\nCloudera, Linkedin, Microsoft, Nvidia, Tencent, Uber, etc. (sorted by alphabet). The community deeply believes in the\nimportance of this diversity and the value of "the Apache Way".  We welcome any form of contributions, code, documentation or suggestions!\n\ud83d\ude03 Don\'t wait, join us now!'),Object(i.b)("h2",{id:"communication-channels"},"Communication Channels"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Mailing lists:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"for people wanting to contribute to or discuss the project development: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:dev@yunikorn.apache.org"}),"dev@yunikorn.apache.org"),Object(i.b)("br",{parentName:"li"}),"subscribe to: dev@ ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:dev-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20dev%20list%22"}),"subscribe")," (",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:dev-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20dev%20list%22"}),"unsubscribe")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://lists.apache.org/list.html?dev@yunikorn.apache.org"}),"archives"),")"),Object(i.b)("li",{parentName:"ul"},"for JIRA issue updates subscribe to: issues@ ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:issues-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20issues%20list%22"}),"subscribe")," (",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:issues-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20issues%20list%22"}),"unsubscribe")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://lists.apache.org/list.html?issues@yunikorn.apache.org"}),"archives"),")"),Object(i.b)("li",{parentName:"ul"},"for GitHub pull requests messages subscribe to: reviews@ ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:reviews-subscribe@yunikorn.apache.org?subject=%22subscribe%20to%20YuniKorn%20reviews%20list%22"}),"subscribe")," (",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:reviews-unsubscribe@yunikorn.apache.org?subject=%22unsubscribe%20from%20YuniKorn%20reviews%20list%22"}),"unsubscribe")," ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://lists.apache.org/list.html?reviews@yunikorn.apache.org"}),"archives"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://slack.com/"}),"Slack")," as our collaboration system, you can join us by accessing ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://join.slack.com/t/yunikornworkspace/shared_invite/enQtNzAzMjY0OTI4MjYzLTBmMDdkYTAwNDMwNTE3NWVjZWE1OTczMWE4NDI2Yzg3MmEyZjUyYTZlMDE5M2U4ZjZhNmYyNGFmYjY4ZGYyMGE"}),"this link"),".\nCurrently, we have following channels in the workspace: ",Object(i.b)("inlineCode",{parentName:"p"},"#yunikorn-dev")," and ",Object(i.b)("inlineCode",{parentName:"p"},"#yunikorn-user"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We have periodically community sync ups in multiple timezones and languages, please find ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#community-meetings"}),"Community Syncup")," to attend online sync ups."))),Object(i.b)("h2",{id:"community-meetings"},"Community Meetings"),Object(i.b)("h4",{id:"target-audiences"},"Target Audiences:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Developers who are interested to contribute to YuniKorn project."),Object(i.b)("li",{parentName:"ul"},"Users who are using or interested to learn about the project.")),Object(i.b)("h4",{id:"schedule"},"Schedule"),Object(i.b)(o.a,{defaultValue:"scheduleEN",values:[{label:"America/EU/India",value:"scheduleEN"},{label:"\u4e2d\u6587/Mandarin",value:"scheduleCN"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"scheduleEN",mdxType:"TabItem"},"Bi-weekly 9:30 AM US Pacific Time on Wednesdays."),Object(i.b)(c.a,{value:"scheduleCN",mdxType:"TabItem"},"Every 4 weeks 12:30 PM China Standard Time (GMT+8) on Thursdays.")),Object(i.b)("h4",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Meeting Notes: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.google.com/document/d/165gzC7uhcKc5XDWiMYSRKBiPQBy2tDtXADUPuhGlUa0/edit#heading=h.461goivmz24v"}),"Google Doc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Calendar: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://calendar.google.com/calendar/b/3/r/week/2020/3/26?cid=YXBhY2hlLnl1bmlrb3JuQGdtYWlsLmNvbQ"}),"Google Calendar")," \ud83d\udc48"))))}m.isMDXComponent=!0}}]);