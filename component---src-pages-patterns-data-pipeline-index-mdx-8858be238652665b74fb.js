(window.webpackJsonp=window.webpackJsonp||[]).push([[45,92],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(u.b)("div",{className:d()(p.pageHeader,(t={},t[p.withTabs]=i.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),w=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,s=new RegExp(n+"/?(#.*)?$"),l=a.replace(s,i);return Object(u.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(u.b)(c.Link,{className:w.link,to:""+l},e))}));return Object(u.b)("div",{className:w.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:w.list},i))))))},t}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,h=b.tabs,O=b.title,w=b.theme,v=b.description,x=b.keywords,y=Object(c.useStaticQuery)("2456312558").site.pathPrefix,A=y?n.pathname.replace(y,""):n.pathname,k=h?A.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"";return Object(u.b)(l.a,{tabs:h,homepage:!1,theme:w,pageTitle:O,pageDescription:v,pageKeywords:x,titleType:p},Object(u.b)(m,{title:i?Object(u.b)(i,null):O,label:"label",tabs:h}),h&&Object(u.b)(f,{slug:A,tabs:h,currentTab:k}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:d})),Object(u.b)(j.a,{pageContext:t,location:n,slug:A,tabs:h,currentTab:k}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WxBR:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n,i=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component '"+n+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:s},d=c.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"Update 02/09/21")," - UNDER CONSTRUCTION"),Object(o.b)("p",null,"In this article we are highlighting some practices to design and develop data intensive application in the context of microservice solution. This is strongly linked to the adoption of event-driven microservices, but addresses the data consistency and eventual data consistency discussions, as well as the establishment of a data services."),Object(o.b)("h2",null,"Context"),Object(o.b)("p",null,"A typical modern business solution will include a set of microservices working together in choreography to exchange data. The adoption of event-driven microservice, with all the related design patterns, is described in separate articles that you can read ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/refarch-eda/patterns/"}),"here"),". "),Object(o.b)("p",null,"When zooming to a particular data intensive microservice we will find a set of important data centric features that may look like in the diagram below, which presents one component of a bigger distributed system."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"871px"}},"\n      ",Object(o.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8ElEQVQoz02SW3faMBCE+f//oi99bx96kjQhJGnStIADIdwvMeDgYFwTbGNbvvBVElC6x0erWUmz45FKyLDNOcZzi8FghOm90LYeCayNWmK326lBfRRyKPR8xzF0vdivqyixKxjdG3y5+8n51S0PPYPv/QaPbQ9f6COHzScSFUVRaKL/66pRSU1mPjzZ0HKgMYO2ykuYeIU+oM5t4pxKb8tFM8CYJhR7Cqx1yk17S89ONS6pof8uKI8S7sYx5daGm2HEtcQdW+hNuSQUWYHphNQ6U1rDOUvHJc9SBsuYTxWXH/3gRLjcCMarhIm9ZSDlqjyR2P4QZFKe5CJICh76IeXmB43pljTLNYHpCj7/iqgMkhNh14657MtiN+BSKryW+WoQ8fwW/zNcZDtezD/cPo2p9+a8Ld4Jg1CLuR8GdBbR0UPZxcuoWbn0RlB7FRimoG5ljN1Mb1IeKqUrT+CHuXYvlziXF5MdlGprJNaEr25C1dxSH/lU+z71oU9N4pGTaIWKMM0LLEewdLfEUUASx7pZIjK9fmygCdt2wlk34qzq8u23y7nhcSFxw0r0u1MeqhzLiTHZUGkumTmBVirSfP8XJ0II4xQvSJguHIamxcxesQ4FQZQens3+rYUi1x5/rXrM16muRbFgtXLxpZ+K+C+h4PW2e5jMjQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Data Intensive App",title:"Data Intensive App",src:"/refarch-eda/static/002943972281880dced3a672b1facbe5/1c25a/data-intensive-app.png",srcSet:["/refarch-eda/static/002943972281880dced3a672b1facbe5/7fc1e/data-intensive-app.png 288w","/refarch-eda/static/002943972281880dced3a672b1facbe5/a5df1/data-intensive-app.png 576w","/refarch-eda/static/002943972281880dced3a672b1facbe5/1c25a/data-intensive-app.png 871w"],sizes:"(max-width: 871px) 100vw, 871px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(o.b)("p",null,"The services involved include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"API to define the service contract"),Object(o.b)("li",{parentName:"ul"},"Databases to store data for long term - document oriented or SQL based"),Object(o.b)("li",{parentName:"ul"},"Caches to speed up retrieving data from expensive queries"),Object(o.b)("li",{parentName:"ul"},"Search indexes to support search on a corpus"),Object(o.b)("li",{parentName:"ul"},"Stream processing to pub/sub messages, which are now also considered as long duration datastore (Kafka)."),Object(o.b)("li",{parentName:"ul"},"Interactive queries on top of data streaming"),Object(o.b)("li",{parentName:"ul"},"Message contract and schemas"),Object(o.b)("li",{parentName:"ul"},"Unified data service which includes big data storage, but also data catalog and queries on data at rest.")),Object(o.b)("p",null,"When designing such application we need to address a set of important subjects:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What is the type of workload on the database? Read heavy, global access query, write heavy or balanced. "),Object(o.b)("li",{parentName:"ul"},"Expected throughtput? Is there any fluctuation during the day? does it need to scale over time?"),Object(o.b)("li",{parentName:"ul"},"How much data to store? what will be the pattern for this size (Always grow)? How content is access via which expected security and access control?"),Object(o.b)("li",{parentName:"ul"},"What will be the expected durability? Week or forever?"),Object(o.b)("li",{parentName:"ul"},"Expected latency and number of concurrent users?"),Object(o.b)("li",{parentName:"ul"},"How the data model is modeled, does it need to support relationship integrity? Join queries? Structured or semi-structured content?"),Object(o.b)("li",{parentName:"ul"},"Do we need strong schema, or more flexible one?"),Object(o.b)("li",{parentName:"ul"},"Do we need search on unstructured data? NoSql?"),Object(o.b)("li",{parentName:"ul"},"How to ensure data correctness and completeness?"),Object(o.b)("li",{parentName:"ul"},"How to address good performance when exposing data, even when app is running slowly?"),Object(o.b)("li",{parentName:"ul"},"How to scale and address increase in transaction volume and data size?"),Object(o.b)("li",{parentName:"ul"},"What data to expose to other services via messaging ? Which formats?"),Object(o.b)("li",{parentName:"ul"},"What data to expose to other services via APIs ?"),Object(o.b)("li",{parentName:"ul"},"How to support application reliability when some components are not performing within their SLA? How to be fault-tolerant?"),Object(o.b)("li",{parentName:"ul"},"How to test fault-tolerance?"),Object(o.b)("li",{parentName:"ul"},"How does adding horizontal compute power impact the data access?"),Object(o.b)("li",{parentName:"ul"},"How to support disaster recovery?")),Object(o.b)("p",null,"In modern big data applications, hardware redundancy is not suffisant, the design needs to support unexpected faults, to avoid cascading failures and to support new version deployment with rolling-upgrade capability. "),Object(o.b)("p",null,"When addressing scalability and load growth, we need to define the load parameters: number of transactions per second, the number of read and write operations, the number of active sessions, … on average and at peak. Each microservice in a solution will have its own load characteristics. "),Object(o.b)("p",null,"From there, we need to address the following issues:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How does load growth impact performance while keeping existing compute resources?"),Object(o.b)("li",{parentName:"ul"},"What is the increase of compute resource needed to support same performance while load growth?")),Object(o.b)("p",null,"The solution problem is a combination of different characteristics to address: read volume, write volume, data store volume, data complexity and size, response time, access logic…"),Object(o.b)("p",null,"For batch processing the measurement is the throughput: number of records per second or time to process n records. For real time processing the response time measures the time to get a response from a client’s point of view after sending a request."),Object(o.b)("p",null,"When defining service level agreement, it is important to use the median response time and a percentile of outliers. An example the median could be at 300ms at P99 (99/100) under 1s."),Object(o.b)("p",null,"Tail latencies, or high percentiles of response time, impact directly user experience and cost money."),Object(o.b)("h2",null,"Distributed data"),Object(o.b)("p",null,"Adopting microservice architecture, means distributed systems and distributed data. The main motivations for that are scalability (load data operations could not be supported by one server), high availability (by sharing the same processing between multiple machines), and reducing latency to distribute data close to the end users."),Object(o.b)("p",null,"Vertical scaling is still bounded by hardware resources, so at higher load we need to support horizontal scaling by adding more machines to the cluster or cross multiple clusters.  When adding machines, we may want to adopt different techniques for data sharing: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"shared memory"),Object(o.b)("li",{parentName:"ul"},"shared storage"),Object(o.b)("li",{parentName:"ul"},"shared nothing: cpu, memory and disk are per node. Cluster manages node orchestration over network. This architecture brings new challenges. ")),Object(o.b)("h2",null,"Compendium"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=sr_1_3?crid=F3G6F7KYQZMH&keywords=designing+data+intensive+applications&qid=1572566804&sprefix=designing+data+%2Caps%2C204&sr=8-3"}),"Designing data intensive application - Martin Kleppmann"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/culture/assemble-team-for-data-driven-project"}),"Assemble the team to support a data-driven project - author: Stacey Ronaghan"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/culture/valuation-of-data/"}),"The valuation of data - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/discover/build-a-business-objective"}),"Define business objectives - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/discover/recognize-value-of-data"}),"Recognize the value of data - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloudcontent.mybluemix.net/cloud/garage/practices/discover/business-problem-to-ai-data-science-solution"}),"Translate a business problem into an AI and Data Science solution - authors: Tommy Eunice, Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/code/data-preparation-ai-data-science/"}),"Prepare your data for AI and data science - authors: Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/think/define-data-strategy/"}),"Define your data strategy -authors: Beth Ackerman, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/think/normalize-data/"}),"Normalize data to its atomic level - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/think/data-needs-for-ai-data-science/"}),"Understand data needs to support AI and Data Science solutions - authors: Tommy Eunice, Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/think/thought-experiments-and-hypothesis-driven-analysis/"}),"Run thought experiments by using hypothesis-driven analysis - author: Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/code/deliver-singular-data-function/"}),"Deliver a singular data function - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/code/construct-data-topology/"}),"Construct your data topology - authors: Neal Fishman, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/code/build-data-lake-design/"}),"Build your data lake design - author: Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/reason/put-ai-data-science-to-work"}),"Put AI and data science to work in your organization - authors: Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/reason/dispel-magic-of-ai"}),"Look behind the curtain of AI - author: Edd Biddle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/reason/model-selection-development-ai-data-science"}),"Select and develop an AI and data science model - author: Edd Biddle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/reason/optimize-train-ai-model"}),"Enhance and optimize your AI and data science models - author: Edd Biddle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/manage/establish-data-governance"}),"Establish data governance - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/run/deploy-ai-model/"}),"Deploy an AI model - author: Sujatha Perepa")," "))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-data-pipeline-index-mdx-8858be238652665b74fb.js.map