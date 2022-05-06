(window.webpackJsonp=window.webpackJsonp||[]).push([[26,73,123],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),v=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(m.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(m.b)(c.Link,{className:v.link,to:""+l},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:v.list},i))))))},t}(r.a.Component),y=a("MjG9"),k=a("CzIb"),w=a("Asxa"),A=a("OIbQ"),I=a.n(A),E=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:I.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,d=b.tabs,g=b.title,j=b.theme,v=b.description,w=b.keywords,A=b.date,I=Object(k.a)().interiorTheme,x=Object(c.useStaticQuery)("2456312558").site.pathPrefix,S=x?n.pathname.replace(x,""):n.pathname,C=d?S.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",B=j||I;return Object(m.b)(l.a,{tabs:d,homepage:!1,theme:B,pageTitle:g,pageDescription:v,pageKeywords:w,titleType:u},Object(m.b)(h,{title:r?Object(m.b)(r,null):g,label:"label",tabs:d,theme:B}),d&&Object(m.b)(N,{title:g,slug:S,tabs:d,currentTab:C}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:p}),Object(m.b)(E,{date:A})),Object(m.b)(O.a,{pageContext:t,location:n,slug:S,tabs:d,currentTab:C}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},GRwf:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),s={_frontmatter:c},l=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(l,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Implementing cloud native, event-driven solution with microservices deployed on kubernetes involves a broad skill set. In this article, we are proposing a deep dive learning journey for developers to adopt event-driven microservice implementation."),Object(i.b)("p",null,"This EDA project includes best practices around the technologies used in any event-driven microservice solution implementation. Our ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc"},"Reefer solution implementation")," tries to illustrate most of those patterns. It includes a set of technologies that represent the modern landscape of cloud native applications (Kafka, maven, java, microprofile, kafka API, Kafka Stream API, Spring boot, Python, Nodejs, and Postgresql) but also some specific analytics and AI components like IBM Streams analytics and machine learning with Jupyter notebook to develop predictive scoring model."),Object(i.b)("p",null,"A developer who wants to consume this content does not need to know everything at the expert level. You can progress steps by steps and it will take a 2 to 3 weeks to digest everything."),Object(i.b)("p",null,"!!! note\nWe expect you have some good understanding of the following technologies:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* Nodejs / Javascript / Typescripts\n* Java 1.8 amd microprofile architecture\n* Python 3.6\n* Angular 7, HTML, CSS  - This is for the user interface but this is more optional.\n* Maven, npm, bash\n* WebSphere Liberty or OpenLiberty\n* Docker\n* Docker compose\n* Helm\n* Kubernetes\n* Apache Kafka, Kafka API\n\nWe have build a getting started and tutorial list for you to study [here](core-techno-getstarted.md).\n")),Object(i.b)("h2",null,"Event Driven Concepts"),Object(i.b)("p",null,"Now the development of event driven solution involves specific technologies and practices. The following links should be studied in the proposed order:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture"},"Why Event Driven Architecture now?"))),Object(i.b)("h3",null,"1- Reading: Understand EDA fundamentals (8 hours)"),Object(i.b)("p",null,"The following content is for architects, and developers who want to understand the technologies and capabilities of an event driven architecture."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Understand the ",Object(i.b)("a",{parentName:"li",href:"../concepts/README.md"},"Key EDA concepts")," like events, event streams, events and messages differences…"),Object(i.b)("li",{parentName:"ul"},"Be confortable with the ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/reference-architecture"},"EDA reference architecture with event backbone, microservices and real time analytics"),"."),Object(i.b)("li",{parentName:"ul"},"Which is extended ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenExtendedArchitecture"},"with machine learning and AI integrated with real time analytics reference architecture"),", integrating machine learning workbench and event sourcing as data source, and real time analytics for deployment."),Object(i.b)("li",{parentName:"ul"},"Review ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-event-sources"},"Event sources - as event producers article"),"."),Object(i.b)("li",{parentName:"ul"},"Read the concept of ",Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-event-backbone"},"Event backbone where Kafka is the main implementation"),"."),Object(i.b)("li",{parentName:"ul"},"As kafka is the event backbone, review its ",Object(i.b)("a",{parentName:"li",href:"../kafka/readme.md"},"key concepts and building blocks")," and then review how to support ",Object(i.b)("a",{parentName:"li",href:"../kafka/arch.md"},"high availability (HA) and disaster recovery (DR) with IBM Event Streams or Kafka Architecture Considerations"),"."),Object(i.b)("li",{parentName:"ul"},"Review one of the common industry use case using Kafka, to perform ",Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/preparation/data-replication/"},"data replication using kafka and Change Data Capture"),".")),Object(i.b)("h3",null,"2- Hands on Lab: Getting started with Event Streams and Kafka (3 hours)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start by creating an Event Stream service in IBM Cloud by performing the ",Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-getting_started&locale=en-US"},"IBM Event Stream Getting started"),". To provision your service, go to the IBM Cloud Catalog and search for ",Object(i.b)("inlineCode",{parentName:"li"},"Event Streams"),". It is in the ",Object(i.b)("em",{parentName:"li"},"Integration")," category. Create the service and specify a name, a region/location (select the same as your cluster), and a resource group, add a tag if you want to, then select the standard plan.")),Object(i.b)("p",null,"!!! warning\nIf you are using a non default resource group, you need to be sure your userid as editor role to the resource group to be able to create service under the resource group."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"908px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVQoz32Si3KDIBBF/f/P60xfadKaGBNUxBeCoOb2wrTpu8ycWWCXy7JL4qYVteqJQilrFKXEoDXCuFwuX/ht7zsJGKdHS0ZMk4OxFt7P+Dkub/w/knGaETBugfUrLK3h+t324xQJ/sB7/F8k+7zE7VOKzcsRj88Z7rZ73BPZaAYsOIoK2zRDVbe8ZIafV0x+gQtwHvCRJe4naV7g5mGL280L7Q4Pu0OcZ0JGwbYfKd6hkAp123OtoY3DwDJ1g0GvDVraZrAsl0dS1D0P1zicJfJCodPhiTxgfCQ9CqTZGXteLKoG2bmK/qrp6Qv7ItqiGTEvbErRWJxrAzV4yI61YlbazlEsWNUNyEUJxezmZY1PDbUaKBqyFhV/B8thYkOZoZAtDqcyCpSNoai9igV7KhX2ov/SEOPemujWayOvTTmyVhmfO1IglyPR1+eGANVq+mve7uJ3ct5/4D4RfTNeAf6vtXcpoN70AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IES service",title:"IES service",src:"/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/013af/IES-service.png",srcSet:["/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/7fc1e/IES-service.png 288w","/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/a5df1/IES-service.png 576w","/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/013af/IES-service.png 908w"],sizes:"(max-width: 908px) 100vw, 908px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"../deployments/eventstreams//es-ibm-cloud.md"},"this note")," for creating Event Stream with Enterprise plan."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Review another getting started from ",Object(i.b)("a",{parentName:"li",href:"https://kafka.apache.org/quickstart"},"Apache Kafka quickstart")),Object(i.b)("li",{parentName:"ul"},"Finally review the Confluent point of view on ",Object(i.b)("a",{parentName:"li",href:"https://www.confluent.io/blog/apache-kafka-getting-started/"},"getting started")," as it covers some of the persona involved in a kafka based solution.")),Object(i.b)("h3",null,"3 - Readings : Methodology (2 hours read)"),Object(i.b)("p",null,"It is important to understand how to start a project using event. This lab persents how to start an event driven solution implementation using the event storming and domain driven design:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We are proposing a ",Object(i.b)("a",{parentName:"li",href:"../methodology/readme.md"},"set of activities")," to develop and release an event-driven solution based on the agile development approach described in the IBM Garage method."),Object(i.b)("li",{parentName:"ul"},"The adopted approach for event identification is the ",Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-eda/methodology/readme/"},"Event storming methodology")," introduced by Alberto Brandolini in “Introducing event storming book”. We have extended it with the event insight practice used to identify potential real time analytics use cases."),Object(i.b)("li",{parentName:"ul"},"Once the event storming deliver events, commands, aggregates we can start doing some ",Object(i.b)("a",{parentName:"li",href:"../methodology/ddd/"},"Domain Design Driven")," exercises and apply it to the business application.")),Object(i.b)("p",null,"For those of you, who are interested to know how to apply the event storming and domain driven design methodology to the Reefer shipment process,  you can review the following articles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/introduction"},"The solution introduction")," to get a sense of the goals of this application. (10 minutes read)"),Object(i.b)("li",{parentName:"ul"},"followed by the ",Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/analysis/readme/"},"event storming analysis report")," (30 minutes read)."),Object(i.b)("li",{parentName:"ul"},"and ",Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/design/readme/"},"the derived design")," from this analysis. (15 minutes reading)")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Hands-on labs"),Object(i.b)("p",null,"As next steps beyond getting started and reading our technical point of view, you can try different hands-on exercises based on our ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc"},"“Reefer container shipment solution”"),". This application is quite complex and includes different components. You do not need to do all, but you should get a good understanding of all those component implementation as most of the code and approach is reusable for your future implementation."),Object(i.b)("p",null,"!!! note\nAt the end of this training you should have the following solution up and running (See detailed description ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc/design/architecture/#components-view"},"here"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"![](../images/kc-mvp-components.png)\n")),Object(i.b)("p",null,"You can run the solution locally, on IBM Cloud Private, on IBM Kubernetes Services or Openshift."),Object(i.b)("h3",null,"4 - Hands on lab: Prepare your local environment (30 mn)"),Object(i.b)("p",null,"!!! goals\nInstall Kafka - zookeeper and postgresql docker images and start them in docker-compose or minikube environment"),Object(i.b)("p",null,"First be sure to complete the pre-requisites by following ",Object(i.b)("a",{parentName:"p",href:"ttps://ibm-cloud-architecture.github.io/refarch-kc/pre-requisites.md"},"those steps"),"."),Object(i.b)("p",null,"Then do one of the following choice:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"To run a local Kafka / zookeeper backbone using docker compose, in less than 3 minutes follow ",Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/local/#start-kafka-and-zookeeper"},"the steps described in this note"),"."),Object(i.b)("li",{parentName:"ol"},"Or use ",Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/minikube/#pre-requisites"},"Minikube/ docker kubernetes")," to get kafka, zookeeper and postgreSQl up and running on a unique node kubernetes cluster.")),Object(i.b)("h3",null,"5 - Hands on lab: Prepare IBM Cloud IKS Openshift environment"),Object(i.b)("p",null,"You can run the solution locally, but you can also deploy it to a kubernetes cluster. So this lab is more optional or you can do it later when you are familar with the solution. If you want to build and run the solution locally go to step 8 below."),Object(i.b)("p",null,"So if you are interested by a public cloud deployment, you can follow this tutorial: ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-openshift_tutorial"},"“Creating an IBM Cloud Red Hat OpenShift Container Platform cluster”"),"."),Object(i.b)("p",null,"Be sure to have administration privilege, within your account, to be able to create cluster. It will take less than 30 minutes to get the cluster provisioned."),Object(i.b)("p",null,"You can follow the steps to create the cluster with the console or use the IBM Cloud CLI."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Be sure to be logged to your IBM Cloud account:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"ibmcloud login -a https://cloud.ibm.com  -u <userid> -p <password> -c <accoundID>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get the private and public vlan IP address for your zone:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"ibmcloud ks vlans --zone wdc06\n")),Object(i.b)("p",{parentName:"li"},"It will return something like"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"ID        Name                     Number   Type      Router         Supports Virtual Workers\n<private_VLAN_ID to keep secret>          2445     private   bcr01a.wdc06   true\n<public_VLAN_ID to keep secret>           1305    public    fcr01a.wdc06   true\n\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a 3 nodes kubernetes cluster using the small hardware footprint, and openshift 3.11 image:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"ibmcloud ks cluster-create --name greencluster --location wdc06 --kube-version 3.11_openshift --machine-type b3c.4x16.encrypted  --workers 3 --public-vlan <public_VLAN_ID> --private-vlan <private_VLAN_ID>\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify your cluster once created:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"ibmcloud ks cluster-get --cluster  greencluster\n")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"Retrieving cluster greencluster...\nOK\n\nName:                           greencluster\nID:                             <keep it secret>\nState:                          normal\nCreated:                        2019-07-16T20:47:34+0000\nLocation:                       wdc06\nMaster URL:                     https://<secret_too>.us-east.containers.cloud.ibm.com:21070\nPublic Service Endpoint URL:    https://<secret_too>.us-east.containers.cloud.ibm.com:21070\nPrivate Service Endpoint URL:   -\nMaster Location:                Washington D.C.\nMaster Status:                  Ready (2 days ago)\nMaster State:                   deployed\nMaster Health:                  normal\nIngress Subdomain:              greencluster.us-east.containers.appdomain.cloud\nIngress Secret:                 greencluster\nWorkers:                        3\nWorker Zones:                   wdc06\nVersion:                        3.11.104_1507_openshift\nOwner:                          <secret_too>\nMonitoring Dashboard:           -\nResource Group ID:              <secret_too>\nResource Group Name:            default\n\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the configuration files to connect to your cluster"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"ibmcloud ks cluster-config --cluster greencluster\n")),Object(i.b)("p",{parentName:"li"},"Then export the KUBECONFIG variable."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"export KUBECONFIG=/Users/<you on your computer>/.bluemix/plugins/container-service/clusters/greencluster/kube-config-wdc06-greencluster.yml\n")),Object(i.b)("p",{parentName:"li"},"Now any ",Object(i.b)("inlineCode",{parentName:"p"},"oc")," command will work against your remote cluster.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Access the Openshift container platform console using the master URL"),Object(i.b)("p",{parentName:"li"},"Something like: https://<secret_too>.us-east.containers.cloud.ibm.com:21070"),Object(i.b)("img",{parentName:"li",src:"os-console.png",alt:null}))),Object(i.b)("h3",null,"6 - Hands on lab: Create Kafka topics and get service credentials"),Object(i.b)("p",null,"From the Event Stream services you created in ",Object(i.b)("a",{parentName:"p",href:"#lab-2-getting-started-with-event-streams-and-kafka-3-hours"},"Lab 2")," go to the service credentials page, create new credentials to get the Kafka brokers list, the admim URL and the api_key needed to authenticate the consumer or producer code."),Object(i.b)("p",null," ",Object(i.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPElEQVQ4y21Ty24TQRD0nyMufEIQzgUOXOMEcQgXjICjIy5IECUhJE78jHdn5/3YddHda7CIMlJv72Omuqq7dhBjhvMBjTYw1sI6B22M5K7rsN1u/wU/t237dNC3XAoGnsCqWsFaJyB8X6sGPgQpYOg9Zy7CB2UR+FOr0PeBdUEOOe8FhDMzDiFSAf9fhJgQOVKivRFV47Ch4MzPnr4NeBPLXW9qebmXuCfTdS06qt51W5HG6/7B4vmbCZ69nuDF229YVBY5lx6Q5RjrkXImZkF6xVFKRokebfIoOaAtSYqxdGZZa2pTyNAu0btOFAyUtlisN+CcS0egreRaaUzvZlBKwTtNUh2C13Joua6JhJd9DMSsYypwgQArZbB4UJjTpnWlpaKNBXVjMVuscD/nmGNT11BNLT27mhucTytcLy1qm2B8woZwLOUBXzxZJ5J+KoiQslRSWqNpeOLMpiEX9FaKpCCxknbb59LKecdEmCFfuHer5Rq3t1OMx2OcHJ9gNDrG0dEI79+d4OeP76irDRzZJ1PBxJOmAQZxw84lDOh3gNyX8/MLnJ5+wPDVkOIQBwcvMRwe4uvnL/j0cYyzyZl4VZFHm0ZLZCLCA3LEnHtvfewBM9G+owHMZks5oGlAfECTnZaLJVbUS87G2P4HYEYEQuYSC1lizi0TQEMX8RUBMsvLiyvKl7j+9Rt30xm14R63N1PcUDCjx4ttFILfA7Ju/mUMsenlNDQI1TMkfzJLvWP7V+LjYM/GneQ/+f7ghSROO/sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IES IC credentials",title:"IES IC credentials",src:"/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/2faef/IES-IC-credentials.png",srcSet:["/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/7fc1e/IES-IC-credentials.png 288w","/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/a5df1/IES-IC-credentials.png 576w","/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/2faef/IES-IC-credentials.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("p",null,"The Event streams broker API key is needed to connect any consumers or producers to access the service in IBM Cloud."),Object(i.b)("p",null,"When those producers and consumers are deployed to kubernetes, the way to share security keys, is to define a kubernetes secret and deploy it to the IKS cluster."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Define a Event Stream API key secret: to configure a secret under the ",Object(i.b)("inlineCode",{parentName:"p"},"greencompute")," namespace."),Object(i.b)("p",{parentName:"li"},"  For kubernetes platform:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-shell"},"kubectl create secret generic eventstreams-apikey --from-literal=binding='<replace with api key>' -n greencompute\n")),Object(i.b)("p",{parentName:"li"},"  For Openshift use the name of the project as namespace"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"kubectl create secret generic eventstreams-apikey --from-literal=binding='<replace with api key>' -n reefer-shipment-solution\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Verify the secrets:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"kubectl describe secrets -n greencompute\n")),Object(i.b)("p",{parentName:"li"},"  or for openshift using project:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"kubectl describe secrets -n reefer-shipment-solution\n")))),Object(i.b)("p",null,"This secret is used by all the solution microservices which are using Kafka / Event Streams. The detail of how we use it with environment variables, is described in one of the project ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/blob/master/fleet-ms/README.md#run-on-ibm-cloud-with-kubernetes-service"},"here.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Finally in the ",Object(i.b)("em",{parentName:"p"},"Manage")," panel add the topics needed for the solution. We need at least the following:"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABcUlEQVQoz31Si26DMAzk/z+wlUpR1cFUCiS8y5ubz226jXazdCQ49uXO4HXdhLKqkRclTF7ACjKbIzM5rOSWZcE21nXFX+GRLDNWSeumVTIj4AVNe9NLeFZUle6Zc6Tv4PFBFS6xjWWRc635rvsvvK2V3X6PJE0RJyn6fnhRcye+k88PLA88FbpbmTydTjgejzgcfETRp9i3qtBFJdaJn7PlBV3fo+u6u0JHyLWXg6IsZYYFpmlSMPphkFkbXR2xzXMFe54z/G0JMFWH88ViF4TIqh62HmAEUVLCP8eIbSO5Ef5HjCBKEIQJLqaWvgHdMG8JVzRNozYPvo9LHGMQRbTStq2q5fvtdlMHszoYnzXzvCFksNEKYSCz9INAbY7jqHlaYzNXEro9V+KVUMBGIyTnMEQqX7sWxSzeEnJ2bu/wViEtU9U1SbSIVgjmXSPfORa3d+tbQn7Fqq4RRhHi61VV8BdxlgjOspYa/RcfOYLvXwcapkw2p1vAAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IES IC topics",title:"IES IC topics",src:"/refarch-eda/static/06136378d9189e30a9a689054d146864/3cbba/IES-IC-topics.png",srcSet:["/refarch-eda/static/06136378d9189e30a9a689054d146864/7fc1e/IES-IC-topics.png 288w","/refarch-eda/static/06136378d9189e30a9a689054d146864/a5df1/IES-IC-topics.png 576w","/refarch-eda/static/06136378d9189e30a9a689054d146864/3cbba/IES-IC-topics.png 1152w","/refarch-eda/static/06136378d9189e30a9a689054d146864/3fe90/IES-IC-topics.png 1674w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("p",null,"!!! Note\nIn your local deployment the kafka topics are created automatically using the launch script."),Object(i.b)("h3",null,"7 - Hands on lab: Get a simple getting started event producer deployed on openshift with Event Stream"),Object(i.b)("p",null,"!!! Note\nFor local deployment, ",Object(i.b)("a",{parentName:"p",href:"#perform-the-smoke-tests-locally"},"smoke test")," scripts helps to show the event produced and consumed."),Object(i.b)("p",null,"To validate the IBM Event Stream and the openshift app are communicating, we use a simple order producer app we have developed as part of the Reefer container solution. It is done with python and can be found in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/jbcodeforce/order-producer-python"},"this repository"),". We use Openshift source to image workflow to deploy this app to Openshift. Follow the steps in the readme as part of the lab."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"543px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABqElEQVQoz4WRT2sTQRiH96jXfgDPHtSjnvQjiKDQk0qR4kUvgvWgkvZSqIpo/ABSUBBKqfVieilt8U/Sze4m26ZiSLeNm3R3kzSBtkma2dl9nERyECq+L795Z2Deh987o5X3qmxu71JwXBzXYbevikOpXKJ1cEA/4jj+r4b3tPRmkZtvbEZfb3Hjhcn151muzhjcTuq4QeMvoNrxrxhCtS92iSuTNpenCozctTg1ZnJ6zOLCRBbHqxGpPJahWiFUTUJKRC9EyogwjBBCVRkjo5io7/CrXeTSkxznH20w+izD9AebazM5zj7Q+RXsDxozpkU2Z/PdMKn4/sCJEPJEp9piMcO9OZ3JuR0Wl7/h/DSYXzZ5OGvi1f8Al1ZW+ZhaYuFzinUFb+w3Oer2+GS0mF2r8U7p7WqNrUoH7f3CPHfGb5GYesyKvs6alSedz6HbBn6jQU/EHHZ6Sse0u4Kg3qLqBTQPBRefbnDmvsG5iTwj4zrJlIdmpdNMJxK8fJVkx3XZq9dw/YCy5ytAdzCGjKLBG/Xr8FvUke2gS6HS5ke1Q8Ft0zwK+Q2lfurCwIPcXQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"order producer python",title:"order producer python",src:"/refarch-eda/static/6be0126181bb70957f28d462b4231777/55a9e/order-producer-python.png",srcSet:["/refarch-eda/static/6be0126181bb70957f28d462b4231777/7fc1e/order-producer-python.png 288w","/refarch-eda/static/6be0126181bb70957f28d462b4231777/55a9e/order-producer-python.png 543w"],sizes:"(max-width: 543px) 100vw, 543px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"There are other tools to use to quickly"),Object(i.b)("h3",null,"8 - Hands on lab: Build and run the solution locally"),Object(i.b)("p",null,"!!! goals\nBuild and run the solution so you can understand the Java-maven, Nodejs build process with docker stage build."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/local/"},"Build and deploy the solution locally using docker compose"))),Object(i.b)("h3",null,"9 - Hands on: Perform tests"),Object(i.b)("h4",null,"Perform the smoke tests locally"),Object(i.b)("p",null,"Finally, run the smoke tests to assess all the components are running well. For that in the ",Object(i.b)("inlineCode",{parentName:"p"},"refarch-kc")," project run the script:"),Object(i.b)("p",null,"For docker-compose:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"./scripts/smokeTests.sh LOCAL\n")),Object(i.b)("p",null,"for MINIKUBE:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"./scripts/smokeTests.sh MINIKUBE\n")),Object(i.b)("p",null,"You should see an Order created for the “GoodManuf” customer. Then the order is visible in the command and the query microservices."),Object(i.b)("p",null,"!!! warning\nTo stop docker-compose deployment use the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"```\n./scripts/stopLocalEnv.sh  LOCAL\n```\nor for the minikube\n```\nstopLocalEnv.sh  MINIKUBE\n```\n")),Object(i.b)("h4",null,"Optional: Execute integration tests on the local environment"),Object(i.b)("p",null," ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc/itg-tests/"},"Execute the integration tests")," to validate the solution end to end."),Object(i.b)("h4",null,"Optional: Execute the demonstration script"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc/demo/readme/"},"Execute the demonstration script")),Object(i.b)("h3",null,"10 - Reading: Review the CQRS patterns implementation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Read ",Object(i.b)("a",{parentName:"p",href:"../design-patterns/ED-patterns.md"},"Event driven design patterns for microservice")," with the Command Query Responsability Segregation, event sourcing and saga patterns.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Review the ",Object(i.b)("a",{parentName:"p",href:"../design-patterns/event-sourcing.md"},"Event sourcing design pattern explanations")," and how it is tested with some integration tests:")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Review the ",Object(i.b)("a",{parentName:"p",href:"../design-patterns/cqrs.md"},"CQRS pattern"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Review the CQRS code in the ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc-order-ms"},"order management microservice implementation"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/confluentinc/confluent-kafka-python"},"Kafka Python API")," and some examples in our ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc/itg-tests/"},"integration tests project"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc-ms/voyagems/"},"Kafka Nodejs API used in the voyage microservice")))),Object(i.b)("h3",null,"Lab 11: Run the solution on IBM Cloud"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/iks"},"Deploying the solution on IBM Cloud Kubernetes Service"))),Object(i.b)("p",null,"Perform smokeTests locally on the solution running on IKS."),Object(i.b)("h3",null,"Lab 12: Optional - Run the solution on IBM Cloud Private"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/icp"},"Deploying the solution on IBM Cloud Private"))),Object(i.b)("h3",null,"Lab 13: Data replication with Kafka"),Object(i.b)("p",null,"One of the common usage of using Kafka is to combine it with a Change Data Capture component to get update from a “legacy” data base to the new microservice runtime environment."),Object(i.b)("p",null,"We are detailing an approach in ",Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/preparation/data-replication/"},"this article"),"."),Object(i.b)("h3",null,"Lab 14: Real time analytics and Machine learning"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/catalog/services/streaming-analytics"},"IBM Cloud Streaming Analytics introduction")," and ",Object(i.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/StreamingAnalytics?topic=StreamingAnalytics-gettingstarted#gettingstarted"},"getting started"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc-container-ms/metrics/"},"Apply predictive analytics on container metrics for predictive maintenance use case")))),Object(i.b)("h3",null,"Other subjects"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-kc-container-ms/cicd/"},"Develop a toolchain for one of the container manager service"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-integration/blob/master/docs/icp/troubleshooting.md"},"Our Kubernetes troubleshooting notes"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"../kafka/monitoring.md"},"Kafka monitoring")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://developer.ibm.com/streamsdev/docs/detect-events-with-streams/"},"IBM Event Streams - stream analytics app")," Event detection on continuous feed using Streaming Analytics in IBM Cloud.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Read how to ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-event-streams"},"process continuous streaming events"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-cloud-native-apps"},"Event-driven cloud-native applications"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Cloud Private ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/event-streams"},"IBM Event Streams")," product running on  private cloud")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Read introduction to ",Object(i.b)("a",{parentName:"p",href:"../evt-action/README.md"},"act on events with IBM Cloud Functions")))),Object(i.b)("h2",null,"Slack channel"),Object(i.b)("p",null,"Contact us on ‘#eda-ac` channel under the ",Object(i.b)("a",{parentName:"p",href:"http://ibmcase.slack.com"},"ibmcase.slack.com")," workspace."))}b.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-training-eda-skill-journey-mdx-6b5d3dcffdbeb505cf59.js.map