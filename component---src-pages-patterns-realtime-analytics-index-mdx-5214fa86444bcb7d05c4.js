(window.webpackJsonp=window.webpackJsonp||[]).push([[63,73,123],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),s=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),u=a.n(m),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(d.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,o=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),v=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===i,o=new RegExp(i+"/?(#.*)?$"),c=n.replace(o,a);return Object(d.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(d.b)(s.Link,{className:v.link,to:""+c},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:v.list},r))))))},t}(i.a.Component),N=a("MjG9"),x=a("CzIb"),A=a("Asxa"),w=a("OIbQ"),T=a.n(w),k=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(A.c,{className:T.a.row},Object(d.b)(A.a,null,Object(d.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,u=b.tabs,h=b.title,O=b.theme,v=b.description,A=b.keywords,w=b.date,T=Object(x.a)().interiorTheme,S=Object(s.useStaticQuery)("2456312558").site.pathPrefix,P=S?n.pathname.replace(S,""):n.pathname,B=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=O||T;return Object(d.b)(c.a,{tabs:u,homepage:!1,theme:I,pageTitle:h,pageDescription:v,pageKeywords:A,titleType:m},Object(d.b)(g,{title:i?Object(d.b)(i,null):h,label:"label",tabs:u,theme:I}),u&&Object(d.b)(y,{title:h,slug:P,tabs:u,currentTab:B}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:p}),Object(d.b)(k,{date:w})),Object(d.b)(j.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:B}),Object(d.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},r836:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),{}),o={_frontmatter:s},c=l.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Realtime Analytics"),Object(r.b)("p",null,"One of the essential elements of modern event-driven solutions is the ability to process continuous event streams to derive real time insights and intelligence."),Object(r.b)("p",null,"In this section we will take more detailed look at what this means in terms of required capabilities and the technology choices that are available to provide these as part of the Event Driven Architecture."),Object(r.b)("h2",null,"Streaming analytics (near real-time analytics)"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.ibm.com/catalog/services/streaming-analytics"},"Streaming analytics")," provides the capabilities to look into and understand the events flowing through unbounded real-time event streams. Streaming applications process the event flow and allow data and analytical functions to be applied to information in the stream. Streaming applications are written as multistep flows across the following capabilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Ingest")," many sources of events."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Prepare")," data by transforming, filtering, correlating, aggregating on some metrics and leveraging other data sources for data enrichment."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Detect and predict")," event patterns using scoring and classification."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Decide")," by applying business rules and business logic."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Act")," by directly executing an action, or in event-driven systems publishing an event notification or command.")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"910px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAADHUlEQVQozy2Ra0hTARTH7wfrg6VGBhFRX4KCoKCPESJkhhVGYXX39FX5rGw1p3c1V3vflTinbnPLPYpKo6RMiojKHmuWtLSo5bza3Nyc5V53c2lzO91BH/78OP8D5xz+B5FFTb14xOzCo5bZqxFDhSTSc4WqZxURs09C9ghEIUMN1fMpYxavjDRqBEFdCU6aZxRhs1seNfULQrr9eMwygZOWSTx+8zOiiFk80kk94L9MIFkwaq4GDINiVzeI3Xqghg8I/d2Glm+dIPzSCSK/fqQlrFdKfDdA9LMbpCGjRxgxYHLSDGlPuXgLEFG0Z0JGmkC+YIHLIV3bxUDnA35QB2mdj2runw+3a3juDmh0qoAT7hqqDstF/Hkt8Oe0wIvpxqsX5DXNIS1gQV2CT3YnkaaAhmgi1IB5u4Ab6FCxfLL+SocUSj0KuNDGnj+t5vjLJhVQ7pBA7ZNLcw0Dd11stwJKJ6Rwyi4Mcp4Z31TMXIeKUVGq0q9MIbXua0SdQwn1xHWo8SpVeU5uf+EnHuQ5scRZzsEUyjuZyh/HkvljXGCY6xeqTHcX851YqtCBwaGn9dGqPr2r4IcA9tu4yQKieRlhzEoJ9ncxsKakwPZKVBkj6OCmISZssDJh9Tv0eZYN7c210WHDaxqsGGWMZFpPqLM+0iH3FQorv7LciP3QuVV2BuTYaJA5ygKk0NVMHBhrhgPUxj0BAb5+sJhTV1IAlax9sPFTGZbrREv3Ghp+o0psad0YTbFlqvzIjoFT3w4bmqJrPx7T7rLXFG9+xXhBszT61lhL+pBtjjpiu+MMbCXOQmNjHtH1UOjkvlED/2VbQrV8h1Qlb0XE3v54y9TjROu8MYTP9ZCt4XsRqefR3/bE7WBr4na0PdYbUPseLbUv3vEjGXa6KyN96jgz2Xl0J/AuMuA4qKAsogTWjBzYkzIonZZAmUcMTOoxDCoe9k8qnuk0ZRTlwPwlB8a8lKICEGSo6DXytggQW9FSQ9Wut7u1xY4VY/RE9gc0nv2BFs+2UnyXFu1P9jAtnjP837NSfE9xGI1njdAo0Rcphv8BBGT8jPGXNGAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/0bd8aa31dc879bcd75b7eb8c0e54b4d5/48853/rt-analytics-app-pattern.png",srcSet:["/refarch-eda/static/0bd8aa31dc879bcd75b7eb8c0e54b4d5/7fc1e/rt-analytics-app-pattern.png 288w","/refarch-eda/static/0bd8aa31dc879bcd75b7eb8c0e54b4d5/a5df1/rt-analytics-app-pattern.png 576w","/refarch-eda/static/0bd8aa31dc879bcd75b7eb8c0e54b4d5/48853/rt-analytics-app-pattern.png 910w"],sizes:"(max-width: 910px) 100vw, 910px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h3",null,"Basic streaming analytics capabilities"),Object(r.b)("p",null,"To support the near real-time analytical processing of the unbounded event streams, the following capabilities are essential to the event stream processing component:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Continuous event ingestion and analytical processing."),Object(r.b)("li",{parentName:"ul"},"Processing across multiple event streams."),Object(r.b)("li",{parentName:"ul"},"Low latency processing, where data do not have to be stored."),Object(r.b)("li",{parentName:"ul"},"Processing of high-volume and high-velocity streams of data."),Object(r.b)("li",{parentName:"ul"},"Continuous query and analysis of the feed."),Object(r.b)("li",{parentName:"ul"},"Correlation across events and streams."),Object(r.b)("li",{parentName:"ul"},"Windowing and stateful processing."),Object(r.b)("li",{parentName:"ul"},"Query and analysis of stored data."),Object(r.b)("li",{parentName:"ul"},"Development and execution of data pipelines."),Object(r.b)("li",{parentName:"ul"},"Development and execution of analytics pipelines."),Object(r.b)("li",{parentName:"ul"},"Scoring of machine learning models in line in the near real-time event stream processing.")),Object(r.b)("h3",null,"Support for near real-time analytics and decision-making"),Object(r.b)("p",null,"Beyond the basic capabilities, consider supporting other frequently-seen event stream types and processing capabilities in your event stream processing component. By creating functions for these stream types and processes in the streaming application code, you can simplify the problem and reduce the development time."),Object(r.b)("p",null,"These capabilities include the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Geospatial",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Location-based analytics"),Object(r.b)("li",{parentName:"ul"},"Geofencing & map matching"),Object(r.b)("li",{parentName:"ul"},"Spatio-temporal hangout detection"))),Object(r.b)("li",{parentName:"ul"},"Time series analysis",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Timestamped data analysis"),Object(r.b)("li",{parentName:"ul"},"Anomaly detection & forecasting"))),Object(r.b)("li",{parentName:"ul"},"Text analytics",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Natural Language Processing & Natural Language Understanding"),Object(r.b)("li",{parentName:"ul"},"Sentiment analysis & entity extraction"))),Object(r.b)("li",{parentName:"ul"},"Video and audio",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Speech-to-text conversion"),Object(r.b)("li",{parentName:"ul"},"Image recognition"))),Object(r.b)("li",{parentName:"ul"},"Rules",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Decisions described as business logic"))),Object(r.b)("li",{parentName:"ul"},"Complex Event Processing (CEP)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Temporal pattern detection"))),Object(r.b)("li",{parentName:"ul"},"Entity Analytics",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Relationships between entities"),Object(r.b)("li",{parentName:"ul"},"Probabilistic matching")))),Object(r.b)("h3",null,"Application programming languages and standards"),Object(r.b)("p",null,"Few standards exist for event stream applications and languages. Typically, streaming engines have provided language-specific programming models tied to a specific platform.  The commonly used languages include the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Python supports working with data and is popular with data scientists and data engineers."),Object(r.b)("li",{parentName:"ul"},"Java is the pervasive application development language. Kafka Streams offers a DSL to support most of the event streaming processing implementation."),Object(r.b)("li",{parentName:"ul"},"Scala adds functional programming and immutable objects to Java.")),Object(r.b)("p",null,"Other platform specific languages have emerged when near real-time processing demands stringent performance requirements real time processing performance is required."),Object(r.b)("p",null,"More recently Google initiated the Apache Beam project ",Object(r.b)("a",{parentName:"p",href:"https://beam.apache.org/"},"https://beam.apache.org/")," to provide a unified programming model for streaming analytics applications."),Object(r.b)("p",null,"Beam is a higher-level unified programming model that provides a standard way of writing streaming analytics applications in many supported languages, including Java, Python, Go and SQL."),Object(r.b)("p",null,"Streaming analytics engines typically support this unified programming model through a Beam runner that takes the code and converts it to platform-native executable code for the specific engine."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"https://beam.apache.org/documentation/runners/capability-matrix/"},"https://beam.apache.org/documentation/runners/capability-matrix/")," for details of supporting engines and the capabilities.  Leading engines include Google Cloud DataFlow, ",Object(r.b)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", Apache Spark, Apache Apex, and IBM Streams."),Object(r.b)("h3",null,"Run time characteristics"),Object(r.b)("p",null,"In operational terms streaming analytics engines must receive and analyze arriving data continuously:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The “Feed Never Ends”"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The collection is unbounded."),Object(r.b)("li",{parentName:"ul"},"Not a request response set based model."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The “Firehose Doesn’t Stop”"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Keep drinking and keep up."),Object(r.b)("li",{parentName:"ul"},"The processing rate is greater than or equal to the feed rate."),Object(r.b)("li",{parentName:"ul"},"The analytics engine must be resilient and self-healing.")))),Object(r.b)("p",null,"These specialized demands and concerns, which are not found in many other information processing environments, have led to highly-optimized runtimes and engines for stateful, parallel processing of analytical workloads across multiple event streams."),Object(r.b)("h2",null,"Products"),Object(r.b)("h3",null,"Streaming Analytics"),Object(r.b)("p",null,"The market for streaming analytics products is quite confused with lots of different offering and very few standards to bring them together.  The potential product selection list for the streaming analytics component in the event driven architecture would need to consider:"),Object(r.b)("p",null,"Top Open Source projects:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Flink - real time streaming engine, both real time and batch analytics in one tool."),Object(r.b)("li",{parentName:"ul"},"Spark Streaming - micro batch processing through spark engine."),Object(r.b)("li",{parentName:"ul"},"Storm - Has not shown enough adoption."),Object(r.b)("li",{parentName:"ul"},"Kafka Streams - new/emerging API access for processing event streams in Kafka using a graph of operators")),Object(r.b)("p",null,"Major Cloud Platform Providers support:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Google Cloud DataFlow – proprietary engine open source streams application language ( Beam )"),Object(r.b)("li",{parentName:"ul"},"Azure Stream Analytics – proprietary engine , SQL interface"),Object(r.b)("li",{parentName:"ul"},"Amazon Kinesis - proprietary AWS")),Object(r.b)("p",null,"IBM offerings"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"IBM Streams/streaming Analytics (High performing parallel processing engine for real time analytics work loads)"),Object(r.b)("li",{parentName:"ul"},"IBM Event streams (Kafka based event log/streaming platform)")),Object(r.b)("p",null,"Evaluation of the various options, highlights"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The proprietary engines from the major providers, Google, MicroSoft, Amazon and IBM Streams continue to provide significant benefits in terms of performance and functionality for real time analysis of high volume realtime event streams."),Object(r.b)("li",{parentName:"ul"},"Kafka streams provides a convenient programming model for microservices to interact with the event stream data, but doesnt provide the optimized stream processing engine required for high volume real time analytics.")),Object(r.b)("p",null,"Our decision for the Event Driven Architecture is to include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"IBM streams as the performant, functionally rich real time event stream processing engine"),Object(r.b)("li",{parentName:"ul"},"Event Streams (",Object(r.b)("a",{parentName:"li",href:"/refarch-eda/technology/kafka-streams/"},"Kafka Streams"),"), for manipulation of event streams within microservices")),Object(r.b)("p",null,"IBM streams also supports Apache Beam as the open source Streams Application language,  which would allow portability of streams applications across, Flink, Spark, Google DataFlow.."),Object(r.b)("h2",null,"An anomaly detection in event-driven solutions"),Object(r.b)("p",null,"We have implemented a separate solution based on the fresh food delivery to do anomaly detection for Refrigerated container in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-reefer-ml"},"this repository")," with the following high level component view:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAACC0lEQVQoz22Sy08TURTG+1+4cWHi2qUxcWF0b6L/gC41MWxMfEUiajAkNdG4cYcxJoixgEGhsEBrCZDa0jqUOhakMhTog9J2bKfTaef18zKlTXyc5J5zcu7N+c733eNb+5Hh6u2bXO9/yJuFIl1zXFd4F897OUQzOrOSSliuMbpUZmVL52/zZQsFltd2iKVzKLvbxNMKktLoNHVc2oZFu2WDbXPrVZpjfQmOXvvKxaFv7BR0xr5UeBku8eLzHsmsjm8pucEF/yrn/TKn7iY4+2CZuVTFa2iJhpZl99CbTZ3xWImRhRKZTBmz0eby8w1O9qc4ciXO02Ae36ekzLlHEqfvpTjeF+PSMwnDbJIr7bFdyJMVMaHUaLRMOsStHoAtAH9WVdbyOvfHdpgRcvhWvq/yPiETkrLEUutsZrcoqzXeTQcZmZxgOPCW12EFrWVhOhaGJaLtYNmup61tdxm4HoDvEPYP0w2DxWiUcDRCrljo1d3/vP3nU9zD0Q+O4zheUa3VmZyZYvTDRyG6itE00LQmjpiq0bRQ6yaBSJlwui5Q2qhqlcR6XmyJ0LC7Egexm2t6C/VXnZpmsLvfoFjcp1LVvLvxyD5nBlKcuCExHKoiJ+MM+B9zZ3CIYGhRUO7RcXucDvRpmzYt0xK/bHWi3ZleXi8xGNjmyaxCMq+wtZllYnqKufl59spVfgO3d4c6DC1xkwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/572b302a5d4b049faa2dbf9130b1cce2/3cbba/cp-solution-view.png",srcSet:["/refarch-eda/static/572b302a5d4b049faa2dbf9130b1cce2/7fc1e/cp-solution-view.png 288w","/refarch-eda/static/572b302a5d4b049faa2dbf9130b1cce2/a5df1/cp-solution-view.png 576w","/refarch-eda/static/572b302a5d4b049faa2dbf9130b1cce2/3cbba/cp-solution-view.png 1152w","/refarch-eda/static/572b302a5d4b049faa2dbf9130b1cce2/008fa/cp-solution-view.png 1566w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-realtime-analytics-index-mdx-5214fa86444bcb7d05c4.js.map