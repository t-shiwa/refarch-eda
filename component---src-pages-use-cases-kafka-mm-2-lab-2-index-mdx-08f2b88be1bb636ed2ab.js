(window.webpackJsonp=window.webpackJsonp||[]).push([[110,73,123],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),p=a("TSYQ"),b=a.n(p),u=a("QH2O"),m=a.n(u),d=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:b()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===r,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,r=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,o=n.baseUrl,i=n.subDirectory,s=o+"/edit/"+n.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),k=a("dI71"),j=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(k.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===n,s=new RegExp(n+"/?(#.*)?$"),l=r.replace(s,a);return Object(d.b)("li",{key:e,className:b()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(d.b)(c.Link,{className:j.link,to:""+l},e))}));return Object(d.b)("div",{className:j.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:j.list},o))))))},t}(n.a.Component),y=a("MjG9"),w=a("CzIb"),v=a("Asxa"),S=a("OIbQ"),A=a.n(S),C=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(v.c,{className:A.a.row},Object(d.b)(v.a,null,Object(d.b)("div",{className:A.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,o=t.frontmatter,p=void 0===o?{}:o,b=t.relativePagePath,u=t.titleType,m=p.tabs,g=p.title,k=p.theme,j=p.description,v=p.keywords,S=p.date,A=Object(w.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,x=T?r.pathname.replace(T,""):r.pathname,M=m?x.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",I=k||A;return Object(d.b)(l.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:j,pageKeywords:v,titleType:u},Object(d.b)(h,{title:n?Object(d.b)(n,null):g,label:"label",tabs:m,theme:I}),m&&Object(d.b)(N,{title:g,slug:x,tabs:m,currentTab:M}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:b}),Object(d.b)(C,{date:S})),Object(d.b)(O.a,{pageContext:t,location:r,slug:x,tabs:m,currentTab:M}),Object(d.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kDoQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var r=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=s("AnchorLinks"),p=s("AnchorLink"),b={_frontmatter:c},u=i.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Scenario Prerequisites"),Object(o.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(o.b)(p,{mdxType:"AnchorLink"},"Start Strimzi Kafka Cluster"),Object(o.b)(p,{mdxType:"AnchorLink"},"Produce messages to source cluster"),Object(o.b)(p,{mdxType:"AnchorLink"},"Start Mirror Maker 2"),Object(o.b)(p,{mdxType:"AnchorLink"},"Start Consumer from target cluster"),Object(o.b)(p,{mdxType:"AnchorLink"},"Clean up")),Object(o.b)("p",null,"Updated 01/22/2021"),Object(o.b)("h2",null,"Overview"),Object(o.b)("p",null,"For this scenario, the source cluster will be an IBM Event Streams instance on OpenShift and the target cluster will be another Kafka cluster (using ",Object(o.b)("a",{parentName:"p",href:"https://strimzi.io/"},"Strimzi"),") running locally on your workstation. Mirror Maker 2 will also run locally on your workstation. This lab is similar to the previous ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/kafka-mm2/lab-1/"},"Lab 1"),", but instead it uses IBM Event Streams within the Cloud Pak for Integration as illustrated in the figure below:"),Object(o.b)("p",null," ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.93055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABsElEQVQoz12STW/TQBCG/fsqfhISqsSBXxB6QYIjB070yA0JVJUghaakapOmUVsaqGM7ju31fnifvnYEB1YaaXf0zswzM5tYF2nbjq4D5yHdwJ9HqKpICPI5sBaiLp2RtXJKG/OSsCkINhAGv4Tek9R1GJKlm5z5YsX695Zia6lqR6agYlthmg6TV2SbmuwxZzm/oVBVXxu8C3jrsU1f0JKkWcX17Zrp2YTRaMTZdIoPViYSPF1s2e0Cu6zGR5hdzHh9dMTJeIyTxorcd0Fd+oEyqZV18euBdOfYbA1FIaLWKpFlfh1ELbEIyrzVCDoV8tRNI22lJCpWVUoqAKexKS5ZLjtevks5/LDg0yQTvuHb8YKPr77y5sUFkx+etrHsCjuMpj9RpMbFoQBx7/N6D4SXl4HT7wpSm32Xpz+v+HJ+znh2xX2+GtouykBdOQSqJUVq40mLRoszevfUDIRR20v2s4r8LXXfphx8PuTZyXMO3r7nTjkbaUzZaNsavmS9Bf4/cfgOSWOi5iCCZm9V7cnLlrIxzGYd64duCHY3K/ztnb6MXppdb/GfWaJph6/1BLDTYELDE+7kAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/74ca371414a018d8447324ea7c849865/3cbba/mm2-lab2.png",srcSet:["/refarch-eda/static/74ca371414a018d8447324ea7c849865/7fc1e/mm2-lab2.png 288w","/refarch-eda/static/74ca371414a018d8447324ea7c849865/a5df1/mm2-lab2.png 576w","/refarch-eda/static/74ca371414a018d8447324ea7c849865/3cbba/mm2-lab2.png 1152w","/refarch-eda/static/74ca371414a018d8447324ea7c849865/5227e/mm2-lab2.png 1588w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Mirror Maker 2 runs locally on your workstation."),Object(o.b)("li",{parentName:"ol"},"A producer to send records to the ",Object(o.b)("inlineCode",{parentName:"li"},"products")," topic that also runs locally although it could be deployed on OpenShift as a ",Object(o.b)("strong",{parentName:"li"},"job")," as well."),Object(o.b)("li",{parentName:"ol"},"A Kafka cluster running locally on your workstation that will contain the replicated topic and a Kafka console consumer to see the replicated messages.")),Object(o.b)("h2",null,"Scenario Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An IBM Event Streams instance running on OpenShift. See ",Object(o.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/installing/installing/"},"here")," for more detail about installing IBM Event Streams."),Object(o.b)("li",{parentName:"ul"},"Docker Compose"),Object(o.b)("li",{parentName:"ul"},"Git CLI")),Object(o.b)("p",null,"Complete the following steps in order to get ready for executing this lab scenario"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the ",Object(o.b)("inlineCode",{parentName:"p"},"products")," topic in your IBM Event Streams instance running on OpenShift. ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Create the topic with just ",Object(o.b)("strong",{parentName:"p"},"1 partition"),". To do so, please review the instructions in the Common pre-requisites of this website ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/overview/pre-requisites#create-event-streams-topics"},"here"),". ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," If you are sharing the IBM Event Streams instance, append a unique identifier to the ",Object(o.b)("inlineCode",{parentName:"p"},"products")," topic name so that you don’t collide with anyone else.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you did not complete ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/kafka-mm2/lab-1/"},"Lab 1"),", clone the following GitHub repository to your local workstation to get the Mirror Maker 2 configuration files for this lab:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/ibm-cloud-architecture/refarch-eda-tools\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Change directory into ",Object(o.b)("inlineCode",{parentName:"p"},"refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"cd refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rename the ",Object(o.b)("inlineCode",{parentName:"p"},".env-tmpl")," properties file to ",Object(o.b)("inlineCode",{parentName:"p"},".env")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"mv .env-tmpl .env\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the IBM Event Streams TLS certificate so that your Kafka Connect framework local instance can establish secure communication with your IBM Event Streams instance. ",Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," download the PKCS12 certificate. How to get the certificate in the ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/overview/pre-requisites/"},"Common pre-requisites")," section. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("inlineCode",{parentName:"p"},".env")," properties file will contain the properties needed for Mirror Maker 2 to be able to connect with your IBM Event Streams instance running on Openshift. Therefore, replace the following placeholder in the properties file:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REPLACE_WITH_YOUR_BOOTSTRAP_URL"),": Your IBM Event Streams bootstrap url."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REPLACE_WITH_YOUR_PKCS12_CERTIFICATE_PASSWORD"),": Your PCKS12 TLS certificate password."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REPLACE_WITH_YOUR_SCRAM_USERNAME"),": Your SCRAM service credentials username."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REPLACE_WITH_YOUR_SCRAM_PASSWORD"),": Your SCRAM service credentials password."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"REPLACE_WITH_YOUR_TOPIC"),": Name of the topic you created above.")),Object(o.b)("p",{parentName:"li"},"Review the ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/overview/pre-requisites/"},"Common pre-requisites")," instructions if you don’t know how to find out any of the config properties above. "))),Object(o.b)("h2",null,"Start Strimzi Kafka Cluster"),Object(o.b)("p",null,"In this section, we are going to deploy and start a local ",Object(o.b)("a",{parentName:"p",href:"https://strimzi.io/"},"Strimzi Kafka cluster")," which will act as your target cluster for Mirror Maker 2 to mirror the messages getting into the ",Object(o.b)("inlineCode",{parentName:"p"},"products")," topic in your IBM Event Streams instance to. In order to deploy this local Strimzi Kafka cluster, we are providing a ",Object(o.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," file that will coordinate the startup of all the components in this Strimzi Kafka cluster."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure you are in ",Object(o.b)("inlineCode",{parentName:"p"},"refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Execute the following command"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The above command should start all the components in ",Object(o.b)("inlineCode",{parentName:"p"},"detached")," mode (",Object(o.b)("inlineCode",{parentName:"p"},"-d"),") and you should see the following output:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"Creating zookeeper1 ... done\nCreating kafka1     ... done\nCreating kafka2     ... done\nCreating kafka3     ... done\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You should see the following Docker containers running on your workstation at the moment"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'docker ps\nCONTAINER ID   IMAGE                              COMMAND                  CREATED         STATUS         PORTS                                              NAMES\n1981f1913ab6   strimzi/kafka:latest-kafka-2.6.0   "sh -c \'bin/kafka-se…"   2 minutes ago   Up 2 minutes   0.0.0.0:9093->9093/tcp, 0.0.0.0:29093->29093/tcp   kafka3\n5f8fd3e80406   strimzi/kafka:latest-kafka-2.6.0   "sh -c \'bin/kafka-se…"   2 minutes ago   Up 2 minutes   0.0.0.0:9091->9091/tcp, 0.0.0.0:29091->29091/tcp   kafka1\nb19a05bd74dd   strimzi/kafka:latest-kafka-2.6.0   "sh -c \'bin/kafka-se…"   2 minutes ago   Up 2 minutes   0.0.0.0:9092->9092/tcp, 0.0.0.0:29092->29092/tcp   kafka2\n93f500c8517a   strimzi/kafka:latest-kafka-2.6.0   "sh -c \'bin/zookeepe…"   2 minutes ago   Up 2 minutes   0.0.0.0:2181->2181/tcp                             zookeeper1\n')))),Object(o.b)("h2",null,"Produce messages to source cluster"),Object(o.b)("p",null,"In this section, we are going to finally send events to the ",Object(o.b)("inlineCode",{parentName:"p"},"products")," topic in your IBM Event streams instance, which is your source cluster, and then verify those messages get mirrored by Mirror Maker 2 into your local Strimzi Kafka cluster, which is your target cluster. We are going to use a shell script which, in turn, will run a Python application that will send the messages to the source cluster."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Since the application sending the messages to the source cluster is not a Java application, we will first need to download the ",Object(o.b)("inlineCode",{parentName:"p"},"PEM")," TLS certificate to allow the secure connection from the python application sending the messages to IBM Event Streams. Make sure you are in the ",Object(o.b)("inlineCode",{parentName:"p"},"refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local")," directory.  Download the ",Object(o.b)("inlineCode",{parentName:"p"},"PEM")," TLS certificate there. Review the ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/overview/pre-requisites/"},"Common pre-requisites")," instructions if you don’t remember how to download the certificate.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now we are going to send five records. In a new terminal window, make sure you are in the ",Object(o.b)("inlineCode",{parentName:"p"},"refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local")," directory and execute the following bash script."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"./sendProductRecords.sh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You should see the following output indicating your messages have been delivered to the source cluster topic"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"--- This is the configuration for the producer: ---\n[KafkaProducer] - {'bootstrap.servers': 'kafka-bootstrap-integration.apps.net:443', 'group.id': 'ProductsProducer', 'delivery.timeout.ms': 15000, 'request.timeout.ms': 15000, 'security.protocol': 'SASL_SSL', 'sasl.mechanisms': 'SCRAM-SHA-512', 'sasl.username': 'test_user', 'sasl.password': '******', 'ssl.ca.location': '/home/es-cp4i-to-local/es-cert.pem'}\n---------------------------------------------------\n{'product_id': 'P01', 'description': 'Carrots', 'target_temperature': 4, 'target_humidity_level': 0.4, 'content_type': 1}\n{'product_id': 'P02', 'description': 'Banana', 'target_temperature': 6, 'target_humidity_level': 0.6, 'content_type': 2}\n{'product_id': 'P03', 'description': 'Salad', 'target_temperature': 4, 'target_humidity_level': 0.4, 'content_type': 1}\n{'product_id': 'P04', 'description': 'Avocado', 'target_temperature': 6, 'target_humidity_level': 0.4, 'content_type': 1}\n{'product_id': 'P05', 'description': 'Tomato', 'target_temperature': 4, 'target_humidity_level': 0.4, 'content_type': 2}\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n[KafkaProducer] - Message delivered to products [0]\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you go to the IBM Event Streams console, you should also see those messages in the topic"),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSElEQVQoz62RT0vDMBiH8w3nh3CwuUMRD3ryG4jgad1E3MX5JTx6UEEEmeDBiwy3tSu0aZOmSbufedu1zKkHwcBD/r5P3jdhrdYOHGcf7fYuut0uOp2Ope7/Rq+3BzYeX4PaarXCfzTmDoYwWmO5DDD98KFUCqM4Cp3YWzIgTy0SxmhLjjz/GZVVsJPTM3ieh9lsDhkHGN3EOBwJHF8JHFwkcAYcR5ch3hcCuVagQqiazYqqcQU7Hw7LxSjiSKXAy5uPu+c5HiYL3D5NcT/x8PgaIOQCUghkWdaIhJ1LKRspwfp9dy0MwXlsd/T6eFGWW2hhxxoqTZFYQR1I1OVurjHXrYUR4jguMyjshtamzDoMI0grE1vZ/f4pW8LUBhtjqodWqplTabSv7QeSeBs6S/0XYZIkjZgEBGVWi4Mg+Ibv+/apeAnFfwLHp46vjo3p+QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es products topic",title:"es products topic",src:"/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/3cbba/es-products-topic.png",srcSet:["/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/7fc1e/es-products-topic.png 288w","/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/a5df1/es-products-topic.png 576w","/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/3cbba/es-products-topic.png 1152w","/refarch-eda/static/e11d46b6c36c0dfb1d2e62db3873e185/1d1d1/es-products-topic.png 1565w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("h2",null,"Start Mirror Maker 2"),Object(o.b)("p",null,"In this section, we are going to go through the steps to get Mirror Maker 2 running locally on your workstation and configure it so that it replicates the messages from the ",Object(o.b)("inlineCode",{parentName:"p"},"products")," topic in your IBM Event Streams instance running on OpenShift to the local Strimzi Kafka cluster you deployed in the previous section as the target cluster for those messages."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure you are in ",Object(o.b)("inlineCode",{parentName:"p"},"refarch-eda-tools/labs/mirror-maker2/es-cp4i-to-local")," and you have done all steps in the ",Object(o.b)("a",{parentName:"p",href:"#scenario-prerequisites"},"Scenario Prerequisites")," section.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start your local Mirror Maker 2 instance by executing the following bash script."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"./launchMM2.sh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After quite some long output on your screen, you should see the following messages with the name of your topic. Don’t worry if you dont find these as there is a lot of ouput. You will make sure the messages are replicated in the next section."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"INFO [Consumer clientId=consumer-null-14, groupId=null] Subscribed to partition(s): products-0 (org.apache.kafka.clients.consumer.KafkaConsumer:1120)\nINFO Starting with 1 previously uncommitted partitions. (org.apache.kafka.connect.mirror.MirrorSourceTask:94)\nINFO [Consumer clientId=consumer-null-14, groupId=null] Seeking to offset 0 for partition products-0 (org.apache.kafka.clients.consumer.KafkaConsumer:1596)\nINFO [Consumer clientId=consumer-null-15, groupId=null] Subscribed to partition(s): heartbeats-0 (org.apache.kafka.clients.consumer.KafkaConsumer:1120)\nINFO task-thread-MirrorSourceConnector-0 replicating 1 topic-partitions es-cp4i->target: [products-0]. (org.apache.kafka.connect.mirror.MirrorSourceTask:98)\nINFO WorkerSourceTask{id=MirrorSourceConnector-0} Source task finished initialization and start (org.apache.kafka.connect.runtime.WorkerSourceTask:233)\nINFO Starting with 1 previously uncommitted partitions. (org.apache.kafka.connect.mirror.MirrorSourceTask:94)\nINFO [Consumer clientId=consumer-null-15, groupId=null] Seeking to offset 0 for partition heartbeats-0 (org.apache.kafka.clients.consumer.KafkaConsumer:1596)\nINFO task-thread-MirrorSourceConnector-1 replicating 1 topic-partitions es-cp4i->target: [heartbeats-0]. (org.apache.kafka.connect.mirror.MirrorSourceTask:98)\nINFO WorkerSourceTask{id=MirrorSourceConnector-1} Source task finished initialization and start (org.apache.kafka.connect.runtime.WorkerSourceTask:233)\n")))),Object(o.b)("h2",null,"Start consumer from target cluster"),Object(o.b)("p",null,"In this section, we are going to start a consumer to consume messages from the target cluster (your local Strimzi Kafka cluster) to make sure we receive mirrored messages from your source cluster (your IBM Event Streams instance running on OpenShift). We are going to use a couple of Apache Kafka tools comming with the open source Strimzi Kafka Docker image you already have running."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure your target mirrored topic has been created executing the following command on a new terminal window."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'docker exec kafka2 bash -c "/opt/kafka/bin/kafka-topics.sh --list --bootstrap-server kafka1:9091" \n\n__consumer_offsets\nes-cp4i.checkpoints.internal\nes-cp4i.heartbeats\nes-cp4i.products\nheartbeats\nmm2-configs.es-cp4i.internal\nmm2-offsets.es-cp4i.internal\nmm2-status.es-cp4i.internal\n')),Object(o.b)("p",{parentName:"li"},"You should see a topic called ",Object(o.b)("inlineCode",{parentName:"p"},"es-cp4i.YOUR_TOPIC")," where ",Object(o.b)("inlineCode",{parentName:"p"},"YOUR_TOPIC")," should be the name of the topic you created before in the ",Object(o.b)("a",{parentName:"p",href:"#scenario-prerequisites"},"Scenario Prerequisites")," section.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now, execute the following command replacing the ",Object(o.b)("inlineCode",{parentName:"p"},"TOPIC_NAME")," placeholder with the name of the topic you verified above (",Object(o.b)("inlineCode",{parentName:"p"},"ex-cp4i.YOUR_TOPIC"),")"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'docker exec -ti kafka2 bash -c "/opt/kafka/bin/kafka-console-consumer.sh --bootstrap-server kafka1:9091 --topic TOPIC_NAME --from-beginning" \n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You should see the mirrored messages now in your replicated topic in your target local Strimzi Kafka cluster"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'{"product_id": "P01", "description": "Carrots", "target_temperature": 4, "target_humidity_level": 0.4, "content_type": 1}\n{"product_id": "P02", "description": "Banana", "target_temperature": 6, "target_humidity_level": 0.6, "content_type": 2}\n{"product_id": "P03", "description": "Salad", "target_temperature": 4, "target_humidity_level": 0.4, "content_type": 1}\n{"product_id": "P04", "description": "Avocado", "target_temperature": 6, "target_humidity_level": 0.4, "content_type": 1}\n{"product_id": "P05", "description": "Tomato", "target_temperature": 4, "target_humidity_level": 0.4, "content_type": 2}\n')))),Object(o.b)("h2",null,"Clean up"),Object(o.b)("p",null,"You have now successfully finished the lab. You can stop the consumer and the Mirror Maker 2 console output pressing ",Object(o.b)("inlineCode",{parentName:"p"},"ctrl+c")," in their respective terminals. You can also stop and remove the Docker containers for both the Mirror Maker 2 and Strimzi Kafka clusters running on your workstation by executing the following script:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"./cleanLab.sh\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-mm-2-lab-2-index-mdx-08f2b88be1bb636ed2ab.js.map