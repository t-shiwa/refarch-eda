(window.webpackJsonp=window.webpackJsonp||[]).push([[91,73,123],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),o=a("NmYn"),n=a.n(o),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),d=a("QH2O"),u=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===r,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},f=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,r=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,o=i.baseUrl,n=i.subDirectory,c=o+"/edit/"+i.branch+n+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},k=a("FCXl"),A=a("dI71"),w=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),o=a===i,c=new RegExp(i+"/?(#.*)?$"),l=r.replace(c,a);return Object(m.b)("li",{key:e,className:p()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+l},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},o))))))},t}(i.a.Component),v=a("MjG9"),O=a("CzIb"),N=a("Asxa"),y=a("OIbQ"),x=a.n(y),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(N.c,{className:x.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,u=b.tabs,f=b.title,A=b.theme,w=b.description,N=b.keywords,y=b.date,x=Object(O.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,z=C?r.pathname.replace(C,""):r.pathname,I=u?z.split("/").filter(Boolean).slice(-1)[0]||n()(u[0],{lower:!0}):"",B=A||x;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:B,pageTitle:f,pageDescription:w,pageKeywords:N,titleType:d},Object(m.b)(g,{title:i?Object(m.b)(i,null):f,label:"label",tabs:u,theme:B}),u&&Object(m.b)(j,{title:f,slug:z,tabs:u,currentTab:I}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:p}),Object(m.b)(T,{date:y})),Object(m.b)(k.a,{pageContext:t,location:r,slug:z,tabs:u,currentTab:I}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WkFd:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),n=a("013z"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("AnchorLinks"),b=c("AnchorLink"),p={_frontmatter:s},d=n.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this article we are summarizing what Apache ",Object(o.b)("a",{parentName:"p",href:"https://Kafka.apache.org"},Object(o.b)("strong",{parentName:"a"},"Kafka"))," is and grouping some references, notes and tips we gathered working with Kafka while producing the different assets for this Event Driven Architecture references. This content does not replace ",Object(o.b)("a",{parentName:"p",href:"https://Kafka.apache.org/intro"},"the excellent introduction")," every developer using Kafka should read."),Object(o.b)(l,{mdxType:"AnchorLinks"},Object(o.b)(b,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(b,{mdxType:"AnchorLink"},"Kafka Components")),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://Kafka.apache.org"},"Kafka")," is a distributed real time event streaming platform with the following key capabilities:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Publish and subscribe streams of records. Data are stored so consuming applications can pull the information they need, and keep track of what they have seen so far."),Object(o.b)("li",{parentName:"ul"},"It can handle hundreds of read and write operations per second from many producers and consumers."),Object(o.b)("li",{parentName:"ul"},"Atomic broadcast, send a record once, every subscriber gets it once."),Object(o.b)("li",{parentName:"ul"},"Store streams of data records on disk and replicate them within the distributed cluster for fault-tolerance. Persist data for a given time period before delete."),Object(o.b)("li",{parentName:"ul"},"Can grow elastically and transparently with no downtime."),Object(o.b)("li",{parentName:"ul"},"Built on top of the ZooKeeper synchronization service to keep topic, partitions and metadata highly available.")),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/aj9CDZm0Glc",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("h2",null,"Kafka Components"),Object(o.b)("p",null,"The diagram below presents Kafka’s key components:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAAB4ElEQVQoz12S22/aMBTG+ccn7XWatJc9VnvYKqGtExNquwGF0kGhS1m55OaEsFyAkARwEicOboAkLLDCSo8sS+f4+33yOXaGhMuZ47t44fgLGwUoIHGSbHaR/FvJZl/YF3epNMGZgIQjyzYhMubu2HLSfblexnGU7CTPsReRHmUOfmkgvJjZ+DHckDDBZJVWojgm4WrxuEqvs46icLmMoujAb2GMgz+KZpom9KIiK+XoL9UBc9nB736Y74vmVc+ucfPUHXk+B/r6xDyCoYNuKI7mJOiu6n3jekA1ZLXC4GzT/tyENR7dATvtYw5RlWKBpG2S+D9su+jnPcMJA8uOzjtitn1aAN1vLf91bvL20ij1UFNwkngL31AMkNQjGNpO/a7N8oLjrbuaca9RjD5qK6Qp4V8S7sqeDkkqm0HUeBBEeZS8gCuNDs0JbrDJ0+BT76QErDNq8eqr8ebc+t5FNd5NZXPoFCr1Hsvv5/s0MB/wnD4eTqHXFVVa6gNFZ+Vpg9FbgjGeInlsBRjp49HD79ZQU48Gtnu0rZkoih9ytY8FPl+mLsqNs2twUWPypdvTIpst88Wrqu+hg/gJTpM43rbhIsQrFhihwXDWVya0YgsaHKgTToXi0FG1ISHk+T/5C+UQVrVavepYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"kafka architecture",title:"kafka architecture",src:"/refarch-eda/static/a87e9bc7cc0449b738232ac658865d92/2faef/kafka-hl-view.png",srcSet:["/refarch-eda/static/a87e9bc7cc0449b738232ac658865d92/7fc1e/kafka-hl-view.png 288w","/refarch-eda/static/a87e9bc7cc0449b738232ac658865d92/a5df1/kafka-hl-view.png 576w","/refarch-eda/static/a87e9bc7cc0449b738232ac658865d92/2faef/kafka-hl-view.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("h2",null,"Brokers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Kafka")," runs as a cluster of ",Object(o.b)("strong",{parentName:"li"},"broker")," servers that can, in theory, span multiple data centers. Each brokers manages data replication, topic/partition management, offset management.\nTo cover multiple data centers within the same cluster, the network latency between data centers needs to be very low, at the 15ms or less, as there is a lot of communication between kafka brokers and between kafka brokers and zookeeper servers."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("strong",{parentName:"li"},"Kafka")," cluster stores streams of records in ",Object(o.b)("strong",{parentName:"li"},"topics"),". Topic is referenced by producer to send data to, and subscribed by consumers to get data. Data in topic is persisted to file systems for a retention time period (Defined at the topic level). The file system can be network based.")),Object(o.b)("p",null,"In the figure above, the ",Object(o.b)("strong",{parentName:"p"},"Kafka")," brokers are allocated on three servers, with data within the topic are replicated two times. In production, it is recommended to use at least five nodes to authorize planned failure and un-planned failure, and when doing replicas, use a replica factor at least equals to three."),Object(o.b)("h2",null,"Zookeeper"),Object(o.b)("p",null,"Zookeeper is used to persist the component and platform states and it runs in cluster to ensure high availability. One zookeeper server is the leader and other are used in backup."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Kafka does not keep state regarding consumers and producers."),Object(o.b)("li",{parentName:"ul"},"Depends on kafka version, offsets are maintained in Zookeeper or in ",Object(o.b)("strong",{parentName:"li"},"Kafka"),": newer versions use an internal Kafka topic called __consumer_offsets. In any case consumers can read next message (or from a specific offset) correctly even during broker server outrages."),Object(o.b)("li",{parentName:"ul"},"Access Controls are saved in Zookeeper")),Object(o.b)("p",null,"As of Kafka 2.8+ Zookeeper is becoming optional."),Object(o.b)("h2",null,"Topics"),Object(o.b)("p",null,"Topics represent end points to publish and consume records."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each record consists of a key, a value (the data payload as byte array), a timestamp and some metadata."),Object(o.b)("li",{parentName:"ul"},"Producers publish data records to topic and consumers subscribe to topics. When a record is produced without specifying a partition, a partition will be chosen using a hash of the key. If the record did not provide a timestamp, the producer will stamp the record with its current time (creation time or log append time). Producers hold a pool of buffers to keep records not yet transmitted to the server."),Object(o.b)("li",{parentName:"ul"},"Kafka store log data in its ",Object(o.b)("inlineCode",{parentName:"li"},"log.dir")," and topic maps to subdirectories in this log directory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Kafka")," uses topics with a pub/sub combined with queue model: it uses the concept of consumer group to divide the processing over a collection of consumer processes, running in parallel, and messages can be broadcasted to multiple groups."),Object(o.b)("li",{parentName:"ul"},"Consumer performs asynchronous pull to the connected brokers via the subscription to a topic.")),Object(o.b)("p",null,"The figure below illustrates one topic having multiple partitions, replicated within the broker cluster:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAvXAAAL1wElddLwAAABbElEQVQoz52RX0/CMBTF9/2/iDEmiC8i8h9NFNYuMAaTjWiCMChb222lbGzrZmNUMPKgntyHntv8mnN7lZBHs1f0uiGLDaUhnyMyX2PHpS+O63i+EHnxQ/l7z1oyhfNov0+KvAgYxzTAfiBtmmYupq5HiR/kIo+i2PWILD9gx08oyT7DKAhwqA5nZ7dGpQPWjkdwWK+p1bL60B/F23SxQNVK/+ZSBZopskMWJU0E9ZhP2HBoV0ug2QJrhClhzQasl2EPjGOerpzN9Z1+3jChbotUHOAsFT5mPg51fVYrwVYbIoSlvbnXLxpPj5qZ8NRZuc0arF9pA93KjmE5ksiEDKNP7U4PtvvAI5Rtdx0Au0CDxqQQBfJwRwVdFY6m1vHPKV+nlYuG5mRkWdvdbp8khj2DxvhluZRXjHN9OtXGkwVCp+G5HT6bJI7j4tc6wMazP7C8OI4+N/Ghk/YbLJu5nD4XxV+kFP+SjCCEeAMXOGsYpKl68wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"topics",title:"topics",src:"/refarch-eda/static/03145e13f75200b825ab6c20d3faef02/2faef/kafka-topic-partition.png",srcSet:["/refarch-eda/static/03145e13f75200b825ab6c20d3faef02/7fc1e/kafka-topic-partition.png 288w","/refarch-eda/static/03145e13f75200b825ab6c20d3faef02/a5df1/kafka-topic-partition.png 576w","/refarch-eda/static/03145e13f75200b825ab6c20d3faef02/2faef/kafka-topic-partition.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("h2",null,"Partitions"),Object(o.b)("p",null,"Partitions are basically used to parallelize the event processing when a single server would not be able to process all events, using the broker clustering. So to manage increase in the load of messages, Kafka uses partitions."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"708px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.72222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAACCklEQVQ4y31U23ajMAzk//+s2ybZnuZGws3gGxho+wVajagpoXQf5jh25NGMJJO0bUtLdF0nGPpAWa7oeXeR8xC6+b9l3BpJDIhBWK115JynprF0zyrZT/APcVvEyfIQKrRxVKmWyqqlvHC876mquwl8bph4qXJNnCDgz8uZnp7PdDxnVNeWtB2ZaKSi4gvdJzn/Qb79YNJAu0Mq5fiNVBQaAyWWL3pRqFiNKCw91U3g/YRKdZTeKqkt7MPRugdSw3Ec6J0xDL0EFqVhu5oyRs119JwINfW+5dheVpA22sqdCFGIwGta0uVakFKaa+QZsDxQqQIngD3uMgcjtihq0kzUNIbvlHL3dq9kRaIE3Xt9u9HhNZ2tOP8upFXNit1EiOyIvd8V19kIIOJ4yul0yXnNxMmX5V7Q90EIK2XFNtBoJ4Sx6IjDmrNSkMJqvL85NsZ4bojnhjhWbFllK3vUEv/XbBUW0cjNpmBsdvsrvewvYgEXMTaNHpi043H5lN8YJ8OTcDznc/KlmIexgXRVaxkdKGz0NMwFj451o+xBCJIQwv8He8oWZqBTmEWtI6ysON969z8I48FkYTpEc9aY1H3XGsk333LMAttRhZk/Bo/AxyK+LMT/ahkDu/+bSiCeH0aiKBsZ4oiS9yduCC6nt5L2h+us8odl+f59PZ11Tb/RzR8FlADxW5b/AST06Mr3s8BzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"partitions",title:"partitions",src:"/refarch-eda/static/b6195a8260b27831c27527b4f4cd99d0/3c52b/topic-part-offset.png",srcSet:["/refarch-eda/static/b6195a8260b27831c27527b4f4cd99d0/7fc1e/topic-part-offset.png 288w","/refarch-eda/static/b6195a8260b27831c27527b4f4cd99d0/a5df1/topic-part-offset.png 576w","/refarch-eda/static/b6195a8260b27831c27527b4f4cd99d0/3c52b/topic-part-offset.png 708w"],sizes:"(max-width: 708px) 100vw, 708px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each broker may have zero or more partitions per topic. When creating topic we specify the number of partition to use."),Object(o.b)("li",{parentName:"ul"},"Kafka tolerates up to N-1 server failures without losing any messages. N is the replication factor for a given partition."),Object(o.b)("li",{parentName:"ul"},"Each partition is a time ordered immutable sequence of records, that are persisted for a long time period. It is a log. Topic is a labelled log."),Object(o.b)("li",{parentName:"ul"},"Consumers see messages in the order they are stored in the log."),Object(o.b)("li",{parentName:"ul"},"Each partition is replicated across a configurable number of servers for fault tolerance. The number of partition will depend on characteristics like the number of consumers, the traffic pattern, etc… You can have 2000 partitions per broker."),Object(o.b)("li",{parentName:"ul"},"Each partitioned message has a unique sequence id called ",Object(o.b)("strong",{parentName:"li"},"offset")," (“abcde, ab, a …” in the figure above are offsets). Those offset ids are defined when events arrived at the broker level, and are local to the partition. They are immutable."),Object(o.b)("li",{parentName:"ul"},"When a consumer reads a topic, it actually reads data from all the partitions. As a consumer reads data from a partition, it advances its offset. To read an event the consumer needs to use the topic name, the partition number and the last offset to read from."),Object(o.b)("li",{parentName:"ul"},"Brokers keep offset information in an hidden topic."),Object(o.b)("li",{parentName:"ul"},"Partitions guarantee that data with the same keys will be sent to the same consumer and in order."),Object(o.b)("li",{parentName:"ul"},"Partitions are saved to disk as append log. The older records are deleted after a given time period or if the size of log goes over a limit.\nIt is possible to compact the log. The log compaction means, the last known value for each message key is kept. Compacted Topics\nare used in Streams processing for stateful operator to keep aggregate or grouping by key. You can read more about ",Object(o.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#design_compactionbasics"},"log compaction from the kafka doc"),".")),Object(o.b)("h2",null,"Replication"),Object(o.b)("p",null,"Each partition can be replicated across a number of servers. The replication factor is captured by the number of brokers to be used for replication. To ensure high availability it should be set to at least a value of three.\nPartitions have one leader and zero or more followers."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"904px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAEDElEQVQ4y1VTXUxURxQeYmMRBIOI0LJrqzUiSrExAdGqQFkXRLBFqw+IgKkxaR+qSRtjTRvatE2osaZpHzRNfTHVNI3WgMYfQKoYFSj/4MLuXtiFXRaWXWDv/947M3d6dkXSTvLlO3PuOWe+e+YMqq2X0VLrPCr6TEzcdVLcUnBKSEM5c+j4eTlmiWUeFZ8W43efFNYDMi2fi4lJ5SH08QUJIdSB8k/x5l2f8lmQY0KIQ7/dlhFijC2ipl7O3vaJmNBuw9G9y0ejfLBOeqPiK2kdQoMxPQ4S9ckqRVtP8CuOfC9moZ1zcRGfqBgINXVpsWCsAUfa3Q49Q9GMdLDNbf164sgEScXEWGP30PXcJH3LMAyz3UPSngzpCf55ulaQqbnbrm+E+Nfd02Rttx0vQ5F14rx4Yd8ZXvnonOgpP8vzh78RmiFo5eAYzuq2ayXXHqgH/mhVKzps2l6nF7895MKp3CQputOul11p0g532LB1eJwUwkHJUfnHz4nfffAl74WCgx/W8a5DXws3wJ/k8Bob/3Ewy+8P2PtXW9n+9hFmGfezzIFRPWXIRXdfadJLLzXqFdfbsHVkgu549lxPQr1OHK+E6c5AiJR4ZrB1ehYXhzVqsXvYam4ilHGntWPvrebHe261PN7T2Pys1OGe3ez0sVWCTCzQR6umUwsvkZKQRAtAdSLqHCHLJIWUiAqplVVSJcqkRlbxIfcMS+kccG369qfLNV/UX6w++8PF6roffz32tMeR7Q2xlRBzQJBwLeCoKONjUKNsyEUSUB+Hl6thugNUvgcogFMLdUwLhlxGqi+gbBjh3EX9w6MFAwCbw1XkC8iZz90sRQzT/IBIC2dBWVCihbxC33V6yArUZSdxoK44JOJqXsKVwFWg9CC0ImVOMDapGquSw+wIoBLs6nnRyObG9eT7TlJxuQsfvdKLK4GrWzhSigVQ2O0gcaAqX1JoOXApFC+DHpb0c3j1LE8y4NfKoQ37IpAUvH9OIJuHXTi510et9xy0rGWUlt5zkPI+Hy0MBqCHfU49EW40R5Kk3Mkp/3YRGPZ5cJOv8ZKxgTGSN+UP5PkDwTzGjG0ws5l9nJ4WiZElPndmxr+dETUH9rk2N05Crb3aUs8MTff4dZPLp5om/Hr61Cw1P+zTl8MQJ0ds95Rmck+FTb4gMTu9ZNXfvVq8N0DNLvBzk6pp3I8B1ARzGIu8AbLw9HSAsMAMPerkogzrFcCSl4j4bGPzCznqQs6LGkGeIDQ9R//znsmirRsMTXjG0M3bN2MiaLjbgNqetMA3CQWFl/HG/3JgFhH6+S8F/fkwjG60aej6oxe438NQ1emr0WcZu24revXNLYB3UEx6ZjTxzC/dqOEpW4yP5EZqXGpU0b+QMRtXf4y72gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"topic replication",title:"topic replication",src:"/refarch-eda/static/02b8fd9e2dfa188a76de2b96a9732618/bbf1d/topic-replication.png",srcSet:["/refarch-eda/static/02b8fd9e2dfa188a76de2b96a9732618/7fc1e/topic-replication.png 288w","/refarch-eda/static/02b8fd9e2dfa188a76de2b96a9732618/a5df1/topic-replication.png 576w","/refarch-eda/static/02b8fd9e2dfa188a76de2b96a9732618/bbf1d/topic-replication.png 904w"],sizes:"(max-width: 904px) 100vw, 904px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"The leader manages all the read and write requests for the partition. The followers replicate the leader content. We are addressing data replication in the high availability section below."),Object(o.b)("h2",null,"Consumer group"),Object(o.b)("p",null,"This is the way to group consumers so the processing of event is parallelized.\nThe number of consumers in a group is the same as the number of partition defined in a topic.\nWe are detailing consumer group implementation in ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/technology/kafka-consumers/#consumer-group"},"this note")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-overview-index-mdx-86362f5c77d6cccc43bf.js.map