(window.webpackJsonp=window.webpackJsonp||[]).push([[84,73,123],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),s=a.n(r),c=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),m=a.n(p),u=a("qKvR"),f=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,i=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},k=a("FCXl"),A=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),l=n.replace(i,a);return Object(u.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(c.Link,{className:O.link,to:""+l},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(o.a.Component),y=a("MjG9"),w=a("CzIb"),N=a("Asxa"),x=a("OIbQ"),v=a.n(x),C=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(N.c,{className:v.a.row},Object(u.b)(N.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,m=b.tabs,g=b.title,A=b.theme,O=b.description,N=b.keywords,x=b.date,v=Object(w.a)().interiorTheme,S=Object(c.useStaticQuery)("2456312558").site.pathPrefix,T=S?n.pathname.replace(S,""):n.pathname,I=m?T.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",E=A||v;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:E,pageTitle:g,pageDescription:O,pageKeywords:N,titleType:p},Object(u.b)(f,{title:o?Object(u.b)(o,null):g,label:"label",tabs:m,theme:E}),m&&Object(u.b)(j,{title:g,slug:T,tabs:m,currentTab:I}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:d}),Object(u.b)(C,{date:x})),Object(u.b)(k.a,{pageContext:t,location:n,slug:T,tabs:m,currentTab:I}),Object(u.b)(i.a,null))}},"8o4X":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("qKvR"),{}),i={_frontmatter:c},l=s.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#connect"},"Kafka connect")," is an open source component\nfor easily integrate external systems with Kafka. It works with any Kafka product like IBM Event Streams, Strimzi, AMQ Streams, Confluent.\nIt uses the concepts of source and sink connectors to ingest or deliver data to / from  Kafka topics."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACLklEQVQoz01Ty24TQRD0d8MNiQMgTjxkwYELEeSM4BKUSEFAQAGCIkAKSmTs2MSvXe9rvNsz7qJ61o5ZqdQ9O7011dO1nbTwGbEkXJJ7l1XiyqV3hWujq4nGu2rZwtYVYXtt3SaXJWPRSfIgVa1YNorCrTDPBPwQ3MSM+WDSoE+MU4kYzgRXiWC6kLhvdTw8gnkwwrpwyoUqCZVFjD5iNBc9HzURJNP+WPRHT7R3JUrC+K6qG6U6LVsRQkJf59UKWbXS3AUUlQArjyCeQeBlq8AUDadNVJezLskFvQlwOVMtW4W+Q/Y6LQSmJi8Fp0PBzjfBq5+C3e+CN78ErhYsuJcUgaSBRIECxESg+2IPh8dnKgE8pDFCz5Y9iymfp7w7F9zcEzz4KLi1L3jEOOXdpSSbL0pMkxJJVpHUY54rbtx5jNf7H1QBHrAmtP7TNeFRT3D7QPDks+DeoeDZseByIlFVSiIjXOQVZgvPISnudnfw9v1XXeFa4bZlu78vfcFDqnrOtrufBC9PeDc8KC2t7RCRxsj3dMf9p7s4ODrRoGvCpPB1LCqC5lWIH9tQvAg0+JjTh7zH2AUt08TYTpW1fGQFtSHFofCi66xUnhhtEyeZO5usN9X4PWxwNmjwlzntgtOLBhej1pPmR6oybGzjow8dpdfSEv5vbLPHgPf3Z9xgQgIjpRdjtD3D2thabGzDX44KzQZBF4VHVm7db8TWqrVseVW3a4trRZs/5JrwHwzijs+cg/IeAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Kafka component",title:"Kafka component",src:"/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/3cbba/kafka-components.png",srcSet:["/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/7fc1e/kafka-components.png 288w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/a5df1/kafka-components.png 576w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/3cbba/kafka-components.png 1152w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/b1c97/kafka-components.png 1189w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"The general concepts are detailed in the ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connecting/connectors/"},"IBM Event streams product documentation"),", and ",Object(r.b)("a",{parentName:"p",href:"https://talks.rmoff.net/DQkDj3"},"Robin Moffatt’s video"),". Here is a quick summary:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Connector")," represents a logical job to move data from / to kafka  to / from external systems. A lot of ",Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/connectors/"},"existing connectors"),", ",Object(r.b)("a",{parentName:"li",href:"https://camel.apache.org/camel-kafka-connector/1.0.x/index.html"},"Apache Camel Kafka connectors")," can be reused, or you can ",Object(r.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#connect_development"},"implement your own"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Workers")," are JVMs running the connectors. For production deployment workers run in cluster or “distributed mode”, and leverage the Kafka consumer group management protocol to scale tasks horizontally."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tasks"),": each worker coordinates a set of tasks to copy data. In distributed mode, task states are saved in Kafka topics. They can be started, stopped at any time to support resilience, and scalable data pipeline."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"REST API")," to configure the connectors and monitors the tasks.")),Object(r.b)("p",null,"The following figure illustrates a classical ‘distributed’ deployment of a Kafka Connect cluster.\nWorkers are the running processes to execute connectors and tasks.",Object(r.b)("br",{parentName:"p"}),"\n","Each Connector is responsible for defining and updating a set of Tasks that actually copy the data. Tasks are threads in a JVM.\nFor fault tolerance and offset management, Kafka Connect uses Kafka topics (suffix name as ",Object(r.b)("inlineCode",{parentName:"p"},"-offsets, -config, -status"),") to persist its states.\nWhen a connector is first submitted to the cluster, the workers rebalance the full set of connectors\nin the cluster with their tasks so that each worker has approximately the same amount of work. "),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"813px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeElEQVQoz22Sy2sTcRDHf22sCioKtioIPoqgqLS12oM1Bz34N0g9eNGTlv4H/gXipYKKHizooWLBgz0oqPSVR5sa6CZNdtNms7vZzb7fm+4rZvxtBE8OfGEGfvOZmd8MEkVxxHGcCbreOGE55jvD0sG0dTBM/RkA7LMdjzFMFyzbA6Eljble+2biG5YLpuWQb9+8PkmS5GWe5+9KknQGYSDQNA2GYTRoofG+RFeAqG8DJ/PPMXCgLihsoVyDGidCnROuabY3SbEt2KzswC4vl5Z//riNQb8tywKKoppIUZSHtu282C5t3WEF7QNFS0A1ZJA0exYD94uGIO40SeA1DrgWe8NqG2le5aDSoKCpsPTqUuYCy7GPBEGYIQjiAfI8D+HEnjRVmW1yTVfgRRf7T69fOYsLqgW+ySt4EleS5Eu+749KouQxjKDIkpy1HedgHMe9fNM0UQJM4SB19NgRVCXJ05lsdnJlhUivr5NXW636qS2CnFhY+J5eXFxOZzK7w/k8PfxlcSX9+fO3W5ns2jhZrQ3g/L6EYdt2P0oMj50KwxDpun4vjiNZ06xd1w24TicSVFVnfD9sdLtdOooiPlGn06Fx3AiCgMWdn8dCeAd9c3NzPR7CY6TwA9Rut6eDIAT8F7C3tweJ5fLreJs2/M/CMAJNUy9iIXwpf7tLLGkVA5IqU67rqhzH0b4fsNCNakqLLkHslgDiWhCGbBSFDJ6GiaOIqbISu7TFnVsmmujXjtj3D1gsFlGhUEC5XO4Avqmhal0ZAtg4NP5EmBqdMeZHprX5scfCfYC1w2sblaFyuTxYqWwPrm6Sx1/O5/tffcyjT1+LPdYfTBMesRbir1UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Connectors and tasks",title:"Connectors and tasks",src:"/refarch-eda/static/ff7ddd3b32da58598d61d5797899b9c8/25f8d/connector-tasks.png",srcSet:["/refarch-eda/static/ff7ddd3b32da58598d61d5797899b9c8/7fc1e/connector-tasks.png 288w","/refarch-eda/static/ff7ddd3b32da58598d61d5797899b9c8/a5df1/connector-tasks.png 576w","/refarch-eda/static/ff7ddd3b32da58598d61d5797899b9c8/25f8d/connector-tasks.png 813w"],sizes:"(max-width: 813px) 100vw, 813px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Connector and tasks are not guaranteed to run on the same instance in the cluster,\nespecially if you have multiple tasks and multiple instances in your kafka connect cluster."),Object(r.b)("li",{parentName:"ul"},"The connector may be configured to add ",Object(r.b)("inlineCode",{parentName:"li"},"Converters")," (code used to translate data between Connect and the system sending or receiving data),\nand ",Object(r.b)("inlineCode",{parentName:"li"},"Transforms"),": simple logic to alter each message produced by or sent to a connector.")),Object(r.b)("p",null,"Connector keeps state into three topics, which may be created when the connectors start are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"connect-configs"),": This topic stores the connector and task configurations."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"connect-offsets"),": This topic stores offsets for Kafka Connect."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"connect-status"),": This topic stores status updates of connectors and tasks.")),Object(r.b)("h2",null,"Characteristics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy vast quantity of data from source to kafka: work at the datasource level. So when the source is a database, it uses JDBC API for example."),Object(r.b)("li",{parentName:"ul"},"Support streaming and batch."),Object(r.b)("li",{parentName:"ul"},"Scale from standalone, mono connector approach to start small, to run in parallel on distributed cluster."),Object(r.b)("li",{parentName:"ul"},"Copy data, externalizing transformation in other framework."),Object(r.b)("li",{parentName:"ul"},"Kafka Connect defines three models: data model, worker model and connector model. Worker model allows Kafka Connect to scale the application.\nKafka Connect cluster can serve multiple applications and so may be organized as a service.")),Object(r.b)("h2",null,"Connector cluster configuration"),Object(r.b)("p",null,"The following configurations are important to review:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"group.id"),": one per connect cluster. It is ised by source connectors only."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"heartbeat.interval.ms"),": The expected time between heartbeats to the group coordinator when using Kafka’s group management facilities.")),Object(r.b)("h2",null,"Fault tolerance"),Object(r.b)("p",null,"When a worker fails: "),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"754px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAACC0lEQVQoz12SS28SURiG+SX+AteudOleGzfuXDQmRtO0K42bGl2ZJkYUS2KIxkQXJhVNK0U7XAppmUDLpZZAgZZLp3KZogzDtVD6eBhKrb7JO2/Ot3jOm/ONqbCv4A7usBLcNTJfUKjXNcJbSeRYmkA0xY9EimazSSaTJJoJENnfZCsZRK2oDHVycmJ4KNOaHGLy6XduPPEa6VsPUlJyzFqdXH+8yrVHbl5+WOFXqYTD94U39pt8fHWZd18fkkikz4Dia6QptBnh/ryX6XmZ6Rce1oMRyj8LPH/vZkbMpixrvP3kpapWcPsdpCYukb16gY3Zu8TSe+itPnqzT6d32jAcDiNJLryrq0YOz4VCAYdTYumbl0WnB8nloSga+t1O4rcnKF25SGxqku1szoCUG78pqjW63e4I6HJJyLIsgBLRaBRFUXBJK4Q3goTkAH6fj1KxiC8gE/i8RNr6Gr/kJpsbAastDb3RoNMRwFarhabV0XWdmqahqirtdpuyyMTuHtuZDPmDA/r9PlqtRq3ZIF+vE04m2RHAo16P8zLxn1KpFPv5PAnhexYLd8xmHthsHIrLxpLjcW7NzTFjtVKsVo3ZYDAYLWW88qGPj4/P1q+LlrblZZ4tLGC226mIdmMp5Qp28a6LHh810fb8r2P6u3aRgxF0aE5nY40uHLXoirdSK4dUhLvdo3+AfwC0+Hl0heDBMgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"fault 1",title:"fault 1",src:"/refarch-eda/static/6c8841977f2bb41453e495d0a21fb1f5/5ee13/fault-1.png",srcSet:["/refarch-eda/static/6c8841977f2bb41453e495d0a21fb1f5/7fc1e/fault-1.png 288w","/refarch-eda/static/6c8841977f2bb41453e495d0a21fb1f5/a5df1/fault-1.png 576w","/refarch-eda/static/6c8841977f2bb41453e495d0a21fb1f5/5ee13/fault-1.png 754w"],sizes:"(max-width: 754px) 100vw, 754px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"Tasks allocated in the failed worker are reallocated to existing workers, and the task’s state, read offsets, source record mapping to offset are reloaded from the different topics."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"611px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACXklEQVQoz22S7U9SYRjG+R9bH6y2NtNPNbfWVpt9SFc5V1Q6nTmzNt/QWku3RohCgLwICkwEwWZomaJTDgfwgLwdfj3nIMpW19m955zzXPd1X/f9PIaMlMYXjGHxbWPxJrD6EmzFtzkvFtnd3cUb3GJlPS4iQSAc4yiVQkO9Xr+M5rcGw6/kD56/M3Oj30Fbn50Oo50F8zJS+gSny0PXwBKdr53cfuGge9hMPLpBA3WaaIrpgvt7OwxMOuh4FeTuYIhO4ypfrS5k6RSPz0/XoJd2Y5Bb/es8GXUSj0UoVkA5r1Is1ahU1QvRhrBwuMf7LzM8/ThC36cRns2+xWJbEg7TeIVg39QcPdMzPJ6Y4o3JRDQSRSnVyRZKpLJnSPkyqlq7ajm5s89nmxGT7w7Tng5mPfewO82cnqTxrwYwOe/zwd3GhPcmM98fEttM6Ik18fyU/nAieKdpCfVSMJlkcXEJ98qqEAhit7lwOBxI4rD8fj/WZQtevxuX28E3i5loNKYnqurV3FpnaSiXy2SzWXL5HHJWJpfLkc/nqdVq+n9JyoiQxXuOnAhFUYSYqu+XRO5ZoYAibsR5qaQP0tBaQSOGQiE017IsM2mz0Ts1Sf/cHEMLCxTLpUa7auMg7OEwXcPDPBgdxRIINFpuvU/ValW4kXSH1UqFofl5rvX00P7yJdd7e4mIQhqqwp0GVyTCo7ExusfHsa6tNQRb71HtgtjEcSbDsnC8srmJTaySKNTsRIOUkYlE44Q3YvzeP/hXUCNqLjVhbf3f0DV32n5dcBWlwGHqmIPDIzJyVuf8BcMKDrje0ZxYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"fault 2",title:"fault 2",src:"/refarch-eda/static/115f7b23211f88ba4959f1c89624c5b4/599e8/fault-2.png",srcSet:["/refarch-eda/static/115f7b23211f88ba4959f1c89624c5b4/7fc1e/fault-2.png 288w","/refarch-eda/static/115f7b23211f88ba4959f1c89624c5b4/a5df1/fault-2.png 576w","/refarch-eda/static/115f7b23211f88ba4959f1c89624c5b4/599e8/fault-2.png 611w"],sizes:"(max-width: 611px) 100vw, 611px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"Both figure above are illustrating a MongoDB sink connector."),Object(r.b)("h2",null,"MQ Source connector"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging/kafka-connect-mq-source"},"source code is in this repo")," and uses JMS as protocol to integrate with MQ.\nWhen the connector encounters a message that it cannot process, it stops rather than throwing the message away.\nThe MQ source connector does not currently make much use of message keys. It is possible to use CorrelationID as a key\nby defining MQ source ",Object(r.b)("inlineCode",{parentName:"p"},"mq.record.builder.key.header")," property:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    key.converter: org.apache.kafka.connect.storage.StringConverter\n    value.converter: org.apache.kafka.connect.converters.ByteArrayConverter\n    mq.record.builder: com.ibm.eventstreams.connect.mqsource.builders.DefaultRecordBuilder\n    mq.connection.mode: client\n    mq.message.body.jms: true\n    mq.record.builder.key.header: JMSCorrelationID\n")),Object(r.b)("p",null,"The record builder helps to transform the input message to a kafka record, using or not a schema."),Object(r.b)("p",null,"Always keep the coherence between body.jms, record builder and data converter. "),Object(r.b)("p",null,"The MQ source task starts a unique JMS Reader that will read n messages from the queue. The `poll() function\nreturns the list of MQ source records, and will commit to JMS if the number of message read match the batch size or\nif there is no more records. Once the Kafka Producer gets acknowledge that records are received by Brokers then use callback on the source\ntask to commit MQ transaction for example. "),Object(r.b)("p",null,"Any producer configuration can be modified in the source connector configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"producer.override.acks: 1\n")),Object(r.b)("h2",null,"Installation"),Object(r.b)("p",null,"The  Kafka connect framework fits well into a kubernetes deployment.\nIn 2021 we have different options for that deployment: the ",Object(r.b)("a",{parentName:"p",href:"https://strimzi.io/docs/0.22.0/#kafka-connect-str"},"Strimzi Kafka connect operator"),",\nIBM ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connecting/setting-up-connectors/"},"Event Streams Connector"),",\nRed Hat ",Object(r.b)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_amq/2021.q3/html/using_amq_streams_on_openshift/assembly-deployment-configuration-str#assembly-kafka-connect-str"},"AMQ Streams (2021.Q3) connector"),"\nor one of the ",Object(r.b)("a",{parentName:"p",href:"https://www.confluent.io/hub/"},"Confluent connector"),"."),Object(r.b)("h3",null,"IBM Event Streams Cloud Pak for Integration"),Object(r.b)("p",null,"If you are using IBM Event Streams 2021.x on Cloud Pak for Integration, the connectors setup is part of the user admin console toolbox:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTElEQVQoz3VRwU7DMAztn3JF/AIX/oEbExIDIU0rA01sSBx2gAkQJ34B7TJ1bdd2TdM0ifNIMtSOAZYsW/Hzs58TRHGOPC/AOUdVVd5dvuvurWQcdV3/qu3jgk2lYQz+NbI1pQkFkyCi7t3mxja6qC1IW5xUhCCJV1gsFlgul63neY6yLCGl/G43SNPU11zMsgxN00AI4Uk70wiaRviCk7PrQtR2osbVK3D+THZLbbfRvi2KIoRhiNFohHA4QO8xxukM6M8tIRdbycZ0ErZyyBMO3zWuXyQ2XLeS4zjGZDLBdPqA8fgOl7MVek/A4K1BkBZ2O9G0RB2h2ZFDSCyOVRzCbv+3GY8LsnV3myRJfEzTNZSSHdQSV6z0tyuKwp+EMeZ/VSnVDnaLBFrrH1Ldj7pJnzHhqE84vCAc3ygISS35Pvb+g3BwRji5VfgCjPRh0zKEE38AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Event Streams connector",title:"Event Streams connector",src:"/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/3cbba/es-connectors.png",srcSet:["/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/7fc1e/es-connectors.png 288w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/a5df1/es-connectors.png 576w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/3cbba/es-connectors.png 1152w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/f9628/es-connectors.png 1343w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Deploying connectors against an IBM Event Streams cluster, you need to have a Kafka user with Manager role, to be able to create topic, produce and consume messages for all topics.")),Object(r.b)("p",null,"As an extendable framework, Kafka Connect, can have new connector plugins. To deploy new connector, you need to use the kafka docker\nimage which needs to be updated with the connector jars and redeployed to kubernetes cluster\nor to other environment. With IBM Event Streams on Openshift, the toolbox includes a\nkafka connect environment packaging, that defines a Dockerfile and configuration files\nto build your own image with the connectors jar files you need. The configuration files\ndefines the properties to connect to Event Streams kafka brokers using API keys and SASL."),Object(r.b)("p",null,"The following ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging"},"public IBM messaging github account")," includes\nsupported, open sourced, connectors (search for ",Object(r.b)("inlineCode",{parentName:"p"},"connector"),")."),Object(r.b)("p",null,"Here is the ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connectors/"},"list of supported connectors")," for IBM Event Streams."),Object(r.b)("p",null,"Event Stream Kafka connector use custom resource definition defined by Strimzi. So configuration for Strimzi works for\nEvent Streams."),Object(r.b)("p",null,"Normally you define one Kafka connect cluster, with a custom docker image which has all the necessary\njars file for any connector you want to use. Then you configure each connector so they can start\nprocessing events or producing events.\nA Kafka connect cluster is identified with a group.id and then it saves its states in topics. The example\nbelow are for the configuration in cluster, also named distributed."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"  config:\n    group.id: connect-cluster\n    offset.storage.topic: connect-cluster-offsets\n    config.storage.topic: connect-cluster-configs\n    status.storage.topic: connect-cluster-status\n")),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/eda-rt-inventory-gitops"},"real-time inventory gitops repository")," includes a MQ Source connector to push message to Kafka. It uses\nArgoCD to maintain states of Kafka Cluster, topics, users, and Kafka connector."),Object(r.b)("p",null,"Once the connector pods are running we need to start the connector tasks. "),Object(r.b)("h3",null,"Strimzi"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://strimzi.io/docs/operators/latest/using.html#proc-kafka-connect-config-str"},"KafkaConnector resources")," allow you to create and manage connector instances for Kafka Connect in a Kubernetes-native way.\nTo manage connectors, you can use the Kafka Connect REST API, or use KafkaConnector custom resources.\nIn case of GitOps methodology we will define connector cluster and connector instance as yamls.\nConnector configuration is passed to Kafka Connect as part of an HTTP request and stored within Kafka itself."),Object(r.b)("h2",null,"Further Readings"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#connect"},"Apache Kafka connect documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.confluent.io/current/connect/index.html"},"Confluent Connector Documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/connecting/connectors/"},"IBM Event Streams Connectors")," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/connectors/"},"List of supported connectors by Event Streams")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/mongodb/mongo-kafka"},"MongoDB Connector for Apache Kafka"))))}b.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-connect-index-mdx-8c1039de11dd41b938da.js.map