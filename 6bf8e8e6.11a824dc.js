(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||r;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var a=t(2),o=t(6),r=(t(0),t(131)),c={id:"scheduler",title:"Scheduler"},s={unversionedId:"api/scheduler",id:"api/scheduler",isDocsHomePage:!1,title:"Scheduler",description:"\x3c!--",source:"@site/docs/api/scheduler.md",slug:"/api/scheduler",permalink:"/docs/next/api/scheduler",version:"current",sidebar:"docs",previous:{title:"Cluster",permalink:"/docs/next/api/cluster"},next:{title:"System",permalink:"/docs/next/api/system"}},i=[{value:"Queues",id:"queues",children:[{value:"Success response",id:"success-response",children:[]}]},{value:"Applications",id:"applications",children:[{value:"Success response",id:"success-response-1",children:[]}]},{value:"Nodes",id:"nodes",children:[{value:"Success response",id:"success-response-2",children:[]}]},{value:"Goroutines info",id:"goroutines-info",children:[{value:"Success response",id:"success-response-3",children:[]}]},{value:"Metrics",id:"metrics",children:[{value:"Success response",id:"success-response-4",children:[]}]},{value:"Configuration validation",id:"configuration-validation",children:[{value:"Success response",id:"success-response-5",children:[]}]},{value:"Application history",id:"application-history",children:[{value:"Success response",id:"success-response-6",children:[]}]},{value:"Container history",id:"container-history",children:[{value:"Success response",id:"success-response-7",children:[]}]}],l={rightToc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"queues"},"Queues"),Object(r.b)("p",null,"Displays general information about the queues like name, status, capacities and properties.\nThe queues' hierarchy is kept in the response json.  "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/queues")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("p",null,"For the default queue hierarchy (only ",Object(r.b)("inlineCode",{parentName:"p"},"root.default")," leaf queue exists) a similar response to the following is sent back to the client:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "partitionName": "[mycluster]default",\n    "capacity": {\n        "capacity": "map[ephemeral-storage:75850798569 hugepages-1Gi:0 hugepages-2Mi:0 memory:80000 pods:110 vcore:60000]",\n        "usedcapacity": "0"\n    },\n    "nodes": null,\n    "queues": {\n        "queuename": "root",\n        "status": "Active",\n        "capacities": {\n            "capacity": "[]",\n            "maxcapacity": "[ephemeral-storage:75850798569 hugepages-1Gi:0 hugepages-2Mi:0 memory:80000 pods:110 vcore:60000]",\n            "usedcapacity": "[memory:8000 vcore:8000]",\n            "absusedcapacity": "[memory:54 vcore:80]"\n        },\n        "queues": [\n            {\n                "queuename": "default",\n                "status": "Active",\n                "capacities": {\n                    "capacity": "[]",\n                    "maxcapacity": "[]",\n                    "usedcapacity": "[memory:8000 vcore:8000]",\n                    "absusedcapacity": "[]"\n                },\n                "queues": null,\n                "properties": {}\n            }\n        ],\n        "properties": {}\n    }\n}\n')),Object(r.b)("h2",{id:"applications"},"Applications"),Object(r.b)("p",null,"Displays general information about the applications like used resources, queue name, submission time and allocations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/apps")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Query Params")," : "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"queue=<fully qualified queue name",">")),Object(r.b)("p",null,'The fully qualified queue name used to filter the applications that run within the given queue. For example, "/ws/v1/apps?queue=root.default" returns the applications running in "root.default" queue.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-1"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("p",null,"In the example below there are three allocations belonging to two applications. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "applicationID": "application-0002",\n        "usedResource": "[memory:4000 vcore:4000]",\n        "partition": "[mycluster]default",\n        "queueName": "root.default",\n        "submissionTime": 1595939756253216000,\n        "allocations": [\n            {\n                "allocationKey": "deb12221-6b56-4fe9-87db-ebfadce9aa20",\n                "allocationTags": null,\n                "uuid": "9af35d44-2d6f-40d1-b51d-758859e6b8a8",\n                "resource": "[memory:4000 vcore:4000]",\n                "priority": "<nil>",\n                "queueName": "root.default",\n                "nodeId": "node-0001",\n                "applicationId": "application-0002",\n                "partition": "default"\n            }\n        ],\n        "applicationState": "Running"\n    },\n    {\n        "applicationID": "application-0001",\n        "usedResource": "[memory:4000 vcore:4000]",\n        "partition": "[mycluster]default",\n        "queueName": "root.default",\n        "submissionTime": 1595939756253460000,\n        "allocations": [\n            {\n                "allocationKey": "54e5d77b-f4c3-4607-8038-03c9499dd99d",\n                "allocationTags": null,\n                "uuid": "08033f9a-4699-403c-9204-6333856b41bd",\n                "resource": "[memory:2000 vcore:2000]",\n                "priority": "<nil>",\n                "queueName": "root.default",\n                "nodeId": "node-0001",\n                "applicationId": "application-0001",\n                "partition": "default"\n            },\n            {\n                "allocationKey": "af3bd2f3-31c5-42dd-8f3f-c2298ebdec81",\n                "allocationTags": null,\n                "uuid": "96beeb45-5ed2-4c19-9a83-2ac807637b3b",\n                "resource": "[memory:2000 vcore:2000]",\n                "priority": "<nil>",\n                "queueName": "root.default",\n                "nodeId": "node-0002",\n                "applicationId": "application-0001",\n                "partition": "default"\n            }\n        ],\n        "applicationState": "Running"\n    }\n]\n')),Object(r.b)("h2",{id:"nodes"},"Nodes"),Object(r.b)("p",null,"Displays general information about the nodes managed by YuniKorn.\nNode details include host and rack name, capacity, resources and allocations."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/nodes")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-2"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("p",null,"Here you can see an example response from a 2-node cluster having 3 allocations."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "partitionName": "[mycluster]default",\n        "nodesInfo": [\n            {\n                "nodeID": "node-0001",\n                "hostName": "",\n                "rackName": "",\n                "capacity": "[ephemeral-storage:75850798569 hugepages-1Gi:0 hugepages-2Mi:0 memory:14577 pods:110 vcore:10000]",\n                "allocated": "[memory:6000 vcore:6000]",\n                "occupied": "[memory:154 vcore:750]",\n                "available": "[ephemeral-storage:75850798569 hugepages-1Gi:0 hugepages-2Mi:0 memory:6423 pods:110 vcore:1250]",\n                "allocations": [\n                    {\n                        "allocationKey": "54e5d77b-f4c3-4607-8038-03c9499dd99d",\n                        "allocationTags": null,\n                        "uuid": "08033f9a-4699-403c-9204-6333856b41bd",\n                        "resource": "[memory:2000 vcore:2000]",\n                        "priority": "<nil>",\n                        "queueName": "root.default",\n                        "nodeId": "node-0001",\n                        "applicationId": "application-0001",\n                        "partition": "default"\n                    },\n                    {\n                        "allocationKey": "deb12221-6b56-4fe9-87db-ebfadce9aa20",\n                        "allocationTags": null,\n                        "uuid": "9af35d44-2d6f-40d1-b51d-758859e6b8a8",\n                        "resource": "[memory:4000 vcore:4000]",\n                        "priority": "<nil>",\n                        "queueName": "root.default",\n                        "nodeId": "node-0001",\n                        "applicationId": "application-0002",\n                        "partition": "default"\n                    }\n                ],\n                "schedulable": true\n            },\n            {\n                "nodeID": "node-0002",\n                "hostName": "",\n                "rackName": "",\n                "capacity": "[ephemeral-storage:75850798569 hugepages-1Gi:0 hugepages-2Mi:0 memory:14577 pods:110 vcore:10000]",\n                "allocated": "[memory:2000 vcore:2000]",\n                "occupied": "[memory:154 vcore:750]",\n                "available": "[ephemeral-storage:75850798569 hugepages-1Gi:0 hugepages-2Mi:0 memory:6423 pods:110 vcore:1250]",\n                "allocations": [\n                    {\n                        "allocationKey": "af3bd2f3-31c5-42dd-8f3f-c2298ebdec81",\n                        "allocationTags": null,\n                        "uuid": "96beeb45-5ed2-4c19-9a83-2ac807637b3b",\n                        "resource": "[memory:2000 vcore:2000]",\n                        "priority": "<nil>",\n                        "queueName": "root.default",\n                        "nodeId": "node-0002",\n                        "applicationId": "application-0001",\n                        "partition": "default"\n                    }\n                ],\n                "schedulable": true\n            }\n        ]\n    }\n]\n')),Object(r.b)("h2",{id:"goroutines-info"},"Goroutines info"),Object(r.b)("p",null,"Dumps the stack traces of the currently running goroutines."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/stack")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-3"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"goroutine 356 [running\n]:\ngithub.com/apache/incubator-yunikorn-core/pkg/webservice.getStackInfo.func1(0x30a0060,\n0xc003e900e0,\n0x2)\n    /yunikorn/go/pkg/mod/github.com/apache/incubator-yunikorn-core@v0.0.0-20200717041747-f3e1c760c714/pkg/webservice/handlers.go: 41 +0xab\ngithub.com/apache/incubator-yunikorn-core/pkg/webservice.getStackInfo(0x30a0060,\n0xc003e900e0,\n0xc00029ba00)\n    /yunikorn/go/pkg/mod/github.com/apache/incubator-yunikorn-core@v0.0.0-20200717041747-f3e1c760c714/pkg/webservice/handlers.go: 48 +0x71\nnet/http.HandlerFunc.ServeHTTP(0x2df0e10,\n0x30a0060,\n0xc003e900e0,\n0xc00029ba00)\n    /usr/local/go/src/net/http/server.go: 1995 +0x52\ngithub.com/apache/incubator-yunikorn-core/pkg/webservice.Logger.func1(0x30a0060,\n0xc003e900e0,\n0xc00029ba00)\n    /yunikorn/go/pkg/mod/github.com/apache/incubator-yunikorn-core@v0.0.0-20200717041747-f3e1c760c714/pkg/webservice/webservice.go: 65 +0xd4\nnet/http.HandlerFunc.ServeHTTP(0xc00003a570,\n0x30a0060,\n0xc003e900e0,\n0xc00029ba00)\n    /usr/local/go/src/net/http/server.go: 1995 +0x52\ngithub.com/gorilla/mux.(*Router).ServeHTTP(0xc00029cb40,\n0x30a0060,\n0xc003e900e0,\n0xc0063fee00)\n    /yunikorn/go/pkg/mod/github.com/gorilla/mux@v1.7.3/mux.go: 212 +0x140\nnet/http.serverHandler.ServeHTTP(0xc0000df520,\n0x30a0060,\n0xc003e900e0,\n0xc0063fee00)\n    /usr/local/go/src/net/http/server.go: 2774 +0xcf\nnet/http.(*conn).serve(0xc0000eab40,\n0x30a61a0,\n0xc003b74000)\n    /usr/local/go/src/net/http/server.go: 1878 +0x812\ncreated by net/http.(*Server).Serve\n    /usr/local/go/src/net/http/server.go: 2884 +0x4c5\n\ngoroutine 1 [chan receive,\n    26 minutes\n]:\nmain.main()\n    /yunikorn/pkg/shim/main.go: 52 +0x67a\n\ngoroutine 19 [syscall,\n    26 minutes\n]:\nos/signal.signal_recv(0x1096f91)\n    /usr/local/go/src/runtime/sigqueue.go: 139 +0x9f\nos/signal.loop()\n    /usr/local/go/src/os/signal/signal_unix.go: 23 +0x30\ncreated by os/signal.init.0\n    /usr/local/go/src/os/signal/signal_unix.go: 29 +0x4f\n\n...\n")),Object(r.b)("h2",{id:"metrics"},"Metrics"),Object(r.b)("p",null,"Endpoint to retrieve metrics from the Prometheus server.\nThe metrics are dumped with help messages and type information."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/metrics")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-4"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.\n# TYPE go_gc_duration_seconds summary\ngo_gc_duration_seconds{quantile="0"} 2.567e-05\ngo_gc_duration_seconds{quantile="0.25"} 3.5727e-05\ngo_gc_duration_seconds{quantile="0.5"} 4.5144e-05\ngo_gc_duration_seconds{quantile="0.75"} 6.0024e-05\ngo_gc_duration_seconds{quantile="1"} 0.00022528\ngo_gc_duration_seconds_sum 0.021561648\ngo_gc_duration_seconds_count 436\n# HELP go_goroutines Number of goroutines that currently exist.\n# TYPE go_goroutines gauge\ngo_goroutines 82\n# HELP go_info Information about the Go environment.\n# TYPE go_info gauge\ngo_info{version="go1.12.17"} 1\n# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.\n# TYPE go_memstats_alloc_bytes gauge\ngo_memstats_alloc_bytes 9.6866248e+07\n\n...\n\n# HELP yunikorn_scheduler_vcore_nodes_usage Nodes resource usage, by resource name.\n# TYPE yunikorn_scheduler_vcore_nodes_usage gauge\nyunikorn_scheduler_vcore_nodes_usage{range="(10%, 20%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(20%,30%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(30%,40%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(40%,50%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(50%,60%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(60%,70%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(70%,80%]"} 1\nyunikorn_scheduler_vcore_nodes_usage{range="(80%,90%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="(90%,100%]"} 0\nyunikorn_scheduler_vcore_nodes_usage{range="[0,10%]"} 0\n')),Object(r.b)("h2",{id:"configuration-validation"},"Configuration validation"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/validate-conf")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"POST")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-5"},"Success response"),Object(r.b)("p",null,"Regardless whether the configuration is allowed or not if the server was able to process the request, it will yield a 200 HTTP status code."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("h4",{id:"allowed-configuration"},"Allowed configuration"),Object(r.b)("p",null,"Sending the following simple configuration yields an accept"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: default\n    queues:\n      - name: root\n        queues:\n          - name: test\n")),Object(r.b)("p",null,"Reponse"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "allowed": true,\n    "reason": ""\n}\n')),Object(r.b)("h4",{id:"disallowed-configuration"},"Disallowed configuration"),Object(r.b)("p",null,'The following configuration is not allowed due to the "wrong_text" field put into the yaml file.'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"partitions:\n  - name: default\n    queues:\n      - name: root\n        queues:\n          - name: test\n  - wrong_text\n")),Object(r.b)("p",null,"Reponse"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "allowed": false,\n    "reason": "yaml: unmarshal errors:\\n  line 7: cannot unmarshal !!str `wrong_text` into configs.PartitionConfig"\n}\n')),Object(r.b)("h2",{id:"application-history"},"Application history"),Object(r.b)("p",null,"Endpoint to retrieve historical data about the number of total applications by timestamp."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/history/apps")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-6"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "timestamp": 1595939966153460000,\n        "totalApplications": "1"\n    },\n    {\n        "timestamp": 1595940026152892000,\n        "totalApplications": "1"\n    },\n    {\n        "timestamp": 1595940086153799000,\n        "totalApplications": "2"\n    },\n    {\n        "timestamp": 1595940146154497000,\n        "totalApplications": "2"\n    },\n    {\n        "timestamp": 1595940206155187000,\n        "totalApplications": "2"\n    }\n]\n')),Object(r.b)("h2",{id:"container-history"},"Container history"),Object(r.b)("p",null,"Endpoint to retrieve historical data about the number of total containers by timestamp."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"URL")," : ",Object(r.b)("inlineCode",{parentName:"p"},"/ws/v1/history/containers")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Method")," : ",Object(r.b)("inlineCode",{parentName:"p"},"GET")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Auth required")," : NO"),Object(r.b)("h3",{id:"success-response-7"},"Success response"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code")," : ",Object(r.b)("inlineCode",{parentName:"p"},"200 OK")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Content examples")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n        "timestamp": 1595939966153460000,\n        "totalContainers": "1"\n    },\n    {\n        "timestamp": 1595940026152892000,\n        "totalContainers": "1"\n    },\n    {\n        "timestamp": 1595940086153799000,\n        "totalContainers": "3"\n    },\n    {\n        "timestamp": 1595940146154497000,\n        "totalContainers": "3"\n    },\n    {\n        "timestamp": 1595940206155187000,\n        "totalContainers": "3"\n    }\n]\n')))}u.isMDXComponent=!0}}]);