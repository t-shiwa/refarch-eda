(window.webpackJsonp=window.webpackJsonp||[]).push([[100,102],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),b=a.n(l),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=l.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,b=r.subDirectory,c=l+"/edit/"+r.branch+b+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),f=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),l=a===r,c=new RegExp(r+"/?(#.*)?$"),o=n.replace(c,a);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+o},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},l))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),v=a.n(k),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(x.c,{className:v.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,d=s.tabs,O=s.title,h=s.theme,f=s.description,x=s.keywords,k=s.date,v=Object(w.a)().interiorTheme,C=Object(i.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,B=d?P.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",z=h||v;return Object(u.b)(o.a,{tabs:d,homepage:!1,theme:z,pageTitle:O,pageDescription:f,pageKeywords:x,titleType:m},Object(u.b)(g,{title:r?Object(u.b)(r,null):O,label:"label",tabs:d,theme:z}),d&&Object(u.b)(A,{title:O,slug:P,tabs:d,currentTab:B}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:p}),Object(u.b)(T,{date:k})),Object(u.b)(N.a,{pageContext:t,location:n,slug:P,tabs:d,currentTab:B}),Object(u.b)(c.a,null))}},"73He":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),b=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},o=b.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(o,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This note tries to regroup considerations and practices on how to migrate from one Kafka deployment to another: this is not version to version migration but product to product, or from on-premise VM base or bare metal to cloud, for example."),Object(l.b)("h2",null,"Things to consider before migrating"),Object(l.b)("p",null,"The important dimensions that impact migration:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The number of Kafka cluster to migrate: Production clusters can have different semantic like federation with other clusters or completely independent cluster. Which one to migrate first?. The following table can be populated:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Cluster name"),Object(l.b)("th",{parentName:"tr",align:null},"Location"),Object(l.b)("th",{parentName:"tr",align:null},"Kafka Version"),Object(l.b)("th",{parentName:"tr",align:null},"Bootstrap URL"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Dal04-eda-1"),Object(l.b)("td",{parentName:"tr",align:null},"Dallas-03"),Object(l.b)("td",{parentName:"tr",align:null},"2.6"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Build a list of clusters, with number of brokers, zookeepers, product version and expected cores, memory and storage characteristics."),Object(l.b)("li",{parentName:"ul"},"Here is a table to fill for each cluster described above")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Cluster name: Dal04-eda-1")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"# Brokers"),Object(l.b)("th",{parentName:"tr",align:null},"# Zookeepers"),Object(l.b)("th",{parentName:"tr",align:null},"# Cores/serv"),Object(l.b)("th",{parentName:"tr",align:null},"Memory"),Object(l.b)("th",{parentName:"tr",align:null},"Disk"),Object(l.b)("th",{parentName:"tr",align:null},"Storage Type"),Object(l.b)("th",{parentName:"tr",align:null},"Schema registry"),Object(l.b)("th",{parentName:"tr",align:null},"Mirroring"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"5"),Object(l.b)("td",{parentName:"tr",align:null},"3"),Object(l.b)("td",{parentName:"tr",align:null},"16"),Object(l.b)("td",{parentName:"tr",align:null},"64G"),Object(l.b)("td",{parentName:"tr",align:null},"300G"),Object(l.b)("td",{parentName:"tr",align:null},"block - NFS"),Object(l.b)("td",{parentName:"tr",align:null},"Apicurio"),Object(l.b)("td",{parentName:"tr",align:null},"MM2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Assess the consequence to stop the cluster, the maintenance window (rebuild time) or full availabilty needs"),Object(l.b)("li",{parentName:"ul"},"Current physical resource consumption on exiting clusters, and linked to the type of deployment: bare metal, VM based, or k8s based. Moving from Bare metal, with performance optimized cluster to a shared deploy on OpenShift will impact the sizing of the target"),Object(l.b)("li",{parentName:"ul"},"New server availability to deploy the new product, or cloud instances to host the new version.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If the target deployment is Kubernetes based, like OpenShift, the k8s cluster needs to have new mostly dedicated worker nodes to support the new Kafka brokers. Expect 60% of the worker node allocated to Kafka Broker. So is it possible to extend the k8s cluster easily"))),Object(l.b)("li",{parentName:"ul"},"The type of persistence storage used for append log and if the storage is based on network filesystem so can we reuse them between clusters"),Object(l.b)("li",{parentName:"ul"},"We assume no disturbance and co-existence of the existing cluster for a time period. So this means we need to list the producers for each cluster, and if they are designed to easily change broker bootstrap end points.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Assess how those producers support rolling out")))),Object(l.b)("p",null,"Here a table that can be used to gather"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Producer ref"),Object(l.b)("th",{parentName:"tr",align:null},"Type (native, REST proxy, Kafka connector"),Object(l.b)("th",{parentName:"tr",align:null},"Avg Throughput msg/s"),Object(l.b)("th",{parentName:"tr",align:null},"Message size"),Object(l.b)("th",{parentName:"tr",align:null},"Message Format"),Object(l.b)("th",{parentName:"tr",align:null},"# of instances"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"order app"),Object(l.b)("td",{parentName:"tr",align:null},"quarkus app - native API"),Object(l.b)("td",{parentName:"tr",align:null},"60 msg/s"),Object(l.b)("td",{parentName:"tr",align:null},"300k"),Object(l.b)("td",{parentName:"tr",align:null},"Avro"),Object(l.b)("td",{parentName:"tr",align:null},"3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"MQ to Kafka"),Object(l.b)("td",{parentName:"tr",align:null},"KConnector"),Object(l.b)("td",{parentName:"tr",align:null},"30 msg/s"),Object(l.b)("td",{parentName:"tr",align:null},"15k"),Object(l.b)("td",{parentName:"tr",align:null},"none"),Object(l.b)("td",{parentName:"tr",align:null},"1")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Topic metadata like: Retention time, and message size:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Topic Ref"),Object(l.b)("th",{parentName:"tr",align:null},"# Partition"),Object(l.b)("th",{parentName:"tr",align:null},"Replica"),Object(l.b)("th",{parentName:"tr",align:null},"Retention"),Object(l.b)("th",{parentName:"tr",align:null},"Type (compact/log)"),Object(l.b)("th",{parentName:"tr",align:null},"Replicated to Other Cluster"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"order"),Object(l.b)("td",{parentName:"tr",align:null},"3"),Object(l.b)("td",{parentName:"tr",align:null},"3 / 2 in sync"),Object(l.b)("td",{parentName:"tr",align:null},"20 days"),Object(l.b)("td",{parentName:"tr",align:null},"log"),Object(l.b)("td",{parentName:"tr",align:null},"replicated via mirror maker 2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For schema registry, should it be possible to coexiste or should it needs to be migrated too?",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"How easy will it be possible to swap schema registry URL and credential for each producer and consumer?"))),Object(l.b)("li",{parentName:"ul"},"Number of users / service accounts"),Object(l.b)("li",{parentName:"ul"},"Authentication security mechanism used per cluster"),Object(l.b)("li",{parentName:"ul"},"RBAC policies in place"),Object(l.b)("li",{parentName:"ul"},"How TLS certificates are managed now, how they are shareable between server? "),Object(l.b)("li",{parentName:"ul"},"Number of stream / stateful operator doing consumer - process - produce? How long will this processor take to process a single message? Can they be stopped and recovered? What percentage of inbound throughput will be outputted back into Apache Kafka? For each processing the following information can be gathered")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"App name"),Object(l.b)("th",{parentName:"tr",align:null},"Techno Type"),Object(l.b)("th",{parentName:"tr",align:null},"Processing Type"),Object(l.b)("th",{parentName:"tr",align:null},"Processing Time"),Object(l.b)("th",{parentName:"tr",align:null},"Passthrough %"),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Kstreams"),Object(l.b)("td",{parentName:"tr",align:null},"Stateful with Ktable"),Object(l.b)("td",{parentName:"tr",align:null},"120ms"),Object(l.b)("td",{parentName:"tr",align:null},"100%"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Ksql"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"Flynk"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Consumer information, type and processing time")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"App name"),Object(l.b)("th",{parentName:"tr",align:null},"Techno Type"),Object(l.b)("th",{parentName:"tr",align:null},"Processing Type"),Object(l.b)("th",{parentName:"tr",align:null},"Processing Time"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("h2",null,"Migration strategies"),Object(l.b)("h3",null,"Deploy - mirror - rollout"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Deploy new cluster with new product")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Redefine target users and security setting")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Start mirroring data to new cluster"),Object(l.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"622px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkUlEQVQoz3VTu07DMBTN37EzMHbhAxj4BeZ+AAyIhYEBCSQWEAIJMbQCBpQBKoqEkAptGuflPJzEPlw7j6apsOQ4997jc6+Pry3UQyllViEEfN8H57z1NWvz39h5noMxhiiK2pjVJyyKAnEcI8uyenMVZ6FCkqkNrCbT2A3CfiV6yNqe8RKDswjHL3Hr72Mb26oM8zVrFVifiQCGI47bWdQh7GPrChvnKqGCmwCfLpDmCpyO6RKP44fgSdI7iUJIyaaEjWo5rEZkWVf5MAW2DyX2ziVu3umSiLSkoJIlTdmRQuFtDgxOJHZPS1zY1f41DbXjiki2hgUOLoWp1FTfOUE3+egb2DkC9k8F5nFNWIoMuUipCsAj548vYX8FKHT7kO1x1VbU1SxKgV/CPk1ceMzTdZuk1qP9gfvxKxZBiayAIQ+9JcIwNARpDopVBKZPCbOkFgoS3TY5fLaA4zhIM1FpeP08wd3Y7hy62wqr2w9ihZkr4FDiUvaRKzmswGNIYr72CvqzScU8koJex39YPf4A6dZVAeKfhsQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"mirroring",title:"mirroring",src:"/refarch-eda/static/e19cc3a3781a5bcb2889523c090fb5d8/2a641/mirroring.png",srcSet:["/refarch-eda/static/e19cc3a3781a5bcb2889523c090fb5d8/7fc1e/mirroring.png 288w","/refarch-eda/static/e19cc3a3781a5bcb2889523c090fb5d8/a5df1/mirroring.png 576w","/refarch-eda/static/e19cc3a3781a5bcb2889523c090fb5d8/2a641/mirroring.png 622w"],sizes:"(max-width: 622px) 100vw, 622px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Stop consumer on source cluster, and move them to consumer from mirrored topics")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Stop producers from source, and connect to new cluster, on the new topics (not the mirrored ones)"),Object(l.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABw0lEQVQoz21Ty0rDQBTNZ/kFbsRvcOWmSz9BF24EQXQlbqSgWJVChapdCAVBwUeh4gvrKtakTWKTtjaPmTnOzTutFyYzk3vu5dx7zyiccwwGA+i6juFwCDIhhPygYPQv/C9tPB6HeNM0wRjLYqQpdPB9H67rIgiCnFPgXWN4UoMUnOyUhPCe5834FEwZjx2Oz7FcHWHpRLL/ZakvCcyYI5c0ZpgHhff4fPzsYfflB74olpXFRIuLfxhSXxzHiZjIvnLGYdgjaD92gUkUFwV3pWvoivRO/pBhvV5HpVJBrVaDqqppUsGZTBykjHjM6qMHrJwKrF4K7N8BX4OsVUqv10O5XEapVEK1WoVlWcXycq3gPEp49iKwsM0xv+Fj+QjYbAocPkZohSbbarXQaDRmJja9J/YqGe7dADvXwNyaj8UtF+fvcUICkw6JKfVxWnMTKQ1d16CRTicCmizvWzdhmzra3wzrdYaHjherQJZMvSId0srrMOmJatk4uGrhrHkP51dIDINlGuj3DYwcORXuhsyi9opZHU6XOfE9XNw+o/32WcTRlLtddDqfMEyr+FLyK19ych85UoueW/BRZfRikj3B/gGrOph3NYp9VwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Connect producers",title:"Connect producers",src:"/refarch-eda/static/28f3081acf7392b8314d84a2ace4a0a7/1b824/producertocluster.png",srcSet:["/refarch-eda/static/28f3081acf7392b8314d84a2ace4a0a7/7fc1e/producertocluster.png 288w","/refarch-eda/static/28f3081acf7392b8314d84a2ace4a0a7/a5df1/producertocluster.png 576w","/refarch-eda/static/28f3081acf7392b8314d84a2ace4a0a7/1b824/producertocluster.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Drain data from mirrored topic via the consumers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Connect consumers to original topic but on the new cluster."),Object(l.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"624px"}},"\n      ",Object(l.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVQoz4VSTUvDQBDNr/Pmyb/h1UvRS3+BHuzBP9DerHiwEBQEherJImKhQomQGpJqs5tsmo/dfe6mTWySSgcm2Y+Zt2/ejJEkCcIwRJqm0CalxKYVe/2PogiMMXDOG7GrpYSxXC7h+z7iON4JGAQBCCEloDaPSnhElDHGf8nbzgsTMicDoT5HA4aWSfO1tgrgLoY5SsWBq3GM/pTkex2SlzybzWDbdkObAqR445tJjL6AiQckqcQ8AGgYIWThX8mmaaLdbqPX64FSWl4ULtagcSZxfA3snWU4GUjcTYCXT6VrVDy6Lnk4HKLT6cCyrApY3YIEOL0HDrsC++ccBxcZbt5VvFg9qlNyhpqV4ziNhgghEFCinCJSYK7PMf8hGLscrb5E9zEpVK4QMPT8aR3rY+Ors8uHEW6fXsFUbhAyeK6DuediocYMSGt6r7wxNiVDKfD8NsWHZVdK12C6iQuf1PReM9xsQH1UkjgCz9J/td2m9S/ntFGPIyorzgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(l.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Connect consumers",title:"Connect consumers",src:"/refarch-eda/static/f691718f0da6e9ec6e37d58bbcbf9fb3/655e2/consumertocluster.png",srcSet:["/refarch-eda/static/f691718f0da6e9ec6e37d58bbcbf9fb3/7fc1e/consumertocluster.png 288w","/refarch-eda/static/f691718f0da6e9ec6e37d58bbcbf9fb3/a5df1/consumertocluster.png 576w","/refarch-eda/static/f691718f0da6e9ec6e37d58bbcbf9fb3/655e2/consumertocluster.png 624w"],sizes:"(max-width: 624px) 100vw, 624px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))))}s.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-use-cases-overview-product-migration-mdx-64d40419d360e429bb8c.js.map