(window.webpackJsonp=window.webpackJsonp||[]).push([[101,73,123],{"013z":function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),i=t("NmYn"),r=t.n(i),s=t("Wbzz"),c=t("Xrax"),l=t("k4MR"),m=t("TSYQ"),p=t.n(m),u=t("QH2O"),b=t.n(u),d=t("qKvR"),f=function(e){var n,t=e.title,a=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(d.b)("div",{className:p()(b.a.pageHeader,(n={},n[b.a.withTabs]=i.length,n[b.a.darkMode]="dark"===a,n))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:b.a.text},t)))))},k=t("BAC9"),h=function(e){var n=e.relativePagePath,t=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=t||a,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+n;return i?Object(d.b)("div",{className:"bx--row "+k.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:k.link,href:c},"Edit this page on GitHub"))):null},g=t("FCXl"),O=t("dI71"),v=t("I8xM"),j=function(e){function n(){return e.apply(this,arguments)||this}return Object(O.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.title,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var n,t=r()(e,{lower:!0,strict:!0}),i=t===o,c=new RegExp(o+"/?(#.*)?$"),l=a.replace(c,t);return Object(d.b)("li",{key:e,className:p()((n={},n[v.selectedItem]=i,n),v.listItem)},Object(d.b)(s.Link,{className:v.link,to:""+l},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":n},Object(d.b)("ul",{className:v.list},i))))))},n}(o.a.Component),y=t("MjG9"),N=t("CzIb"),S=t("Asxa"),q=t("OIbQ"),A=t.n(q),C=function(e){var n=e.date,t=new Date(n);return n?Object(d.b)(S.c,{className:A.a.row},Object(d.b)(S.a,null,Object(d.b)("div",{className:A.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};n.a=function(e){var n=e.pageContext,t=e.children,a=e.location,o=e.Title,i=n.frontmatter,m=void 0===i?{}:i,p=n.relativePagePath,u=n.titleType,b=m.tabs,k=m.title,O=m.theme,v=m.description,S=m.keywords,q=m.date,A=Object(N.a)().interiorTheme,w=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=w?a.pathname.replace(w,""):a.pathname,E=b?T.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",M=O||A;return Object(d.b)(l.a,{tabs:b,homepage:!1,theme:M,pageTitle:k,pageDescription:v,pageKeywords:S,titleType:u},Object(d.b)(f,{title:o?Object(d.b)(o,null):k,label:"label",tabs:b,theme:M}),b&&Object(d.b)(j,{title:k,slug:T,tabs:b,currentTab:E}),Object(d.b)(y.a,{padded:!0},t,Object(d.b)(h,{relativePagePath:p}),Object(d.b)(C,{date:q})),Object(d.b)(g.a,{pageContext:n,location:a,slug:T,tabs:b,currentTab:E}),Object(d.b)(c.a,null))}},BAC9:function(e,n,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,n,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},JD4x:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return u}));var a,o=t("wx14"),i=t("zLVn"),r=(t("q1tI"),t("7ljp")),s=t("013z"),c=(t("qKvR"),{}),l=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={_frontmatter:c},p=s.a;function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this example we are using IBM Event Streams running on Openshift as\nthe Kafka data source and different MQ deployment as the destination."),Object(r.b)("h2",null,"Deploying MQ Sink Connector on virtual or baremetal server"),Object(r.b)("p",null,"We are using our own laptop for the baremetal dedployment, but this chapter will work the same on virtual server."),Object(r.b)("h3",null,"Pre-requisites"),Object(r.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("strong",null,"TODO")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Pull in necessary pre-req context from ",Object(r.b)("a",{parentName:"em",href:"/refarch-eda/scenarios/realtime-inventory/#general-pre-requisites"},"Realtime Inventory Pre-reqs"),".")),Object(r.b)("p",null,"We assume that you have an instance of Event Streams already running on IBM Cloud with at least on manager-level credentials created.  The credentials will come in the form of a JSON document as seen in the previous section.\nYou will need the ",Object(r.b)("inlineCode",{parentName:"p"},"kafka_brokers_sasl")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password")," atribute to configure the sink connector."),Object(r.b)("p",null,"This scenario uses the ",Object(r.b)("inlineCode",{parentName:"p"},"inventory")," topic created in the Scenario Setup in previous section."),Object(r.b)("h3",null,"Create Local IBM MQ Instance"),Object(r.b)("p",null,"Here we will use Docker to create a local MQ instance.  First create a data directory to mount in the container."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mkdir qm1data")),Object(r.b)("p",null,"Then create the container."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker run                     \\\n  --name mq                    \\\n  --detach                     \\\n  --publish 1414:1414          \\\n  --publish 9443:9443          \\\n  --publish 9157:9157          \\\n  --volume qm1data:/mnt/mqm    \\\n  --env LICENSE=accept         \\\n  --env MQ_QMGR_NAME=QM1       \\\n  --env MQ_APP_PASSWORD=admin  \\\n  --env MQ_ENABLE_METRICS=true \\\n  ibmcom/mq\n")),Object(r.b)("p",null,"You should be able to log into the MQ server on port 9443 with default user ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," and password ",Object(r.b)("inlineCode",{parentName:"p"},"passw0rd"),"."),Object(r.b)("p",null,"Connect to the running MQ instance to create a Channel and Queue as described on the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging/kafka-connect-mq-sink/blob/master/UsingMQwithKafkaConnect.md"},"Using IBM MQ with Kafka Connect")," page."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker exec -ti mq bash\nstrmqm QM1\nrunmqsc QM1\nDEFINE CHANNEL(KAFKA.CHANNEL) CHLTYPE(SVRCONN)\nSET CHLAUTH(KAFKA.CHANNEL) TYPE(BLOCKUSER) USERLIST('nobody')\nSET CHLAUTH('*') TYPE(ADDRESSMAP) ADDRESS('*') USERSRC(NOACCESS)\nSET CHLAUTH(KAFKA.CHANNEL) TYPE(ADDRESSMAP) ADDRESS('*') USERSRC(CHANNEL) CHCKCLNT(REQUIRED)\nALTER AUTHINFO(SYSTEM.DEFAULT.AUTHINFO.IDPWOS) AUTHTYPE(IDPWOS) ADOPTCTX(YES)\nREFRESH SECURITY TYPE(CONNAUTH)\nDEFINE QLOCAL(INVENTORY)\nSET AUTHREC OBJTYPE(QMGR) PRINCIPAL('admin') AUTHADD(CONNECT,INQ)\nSET AUTHREC PROFILE(INVENTORY) OBJTYPE(QUEUE) PRINCIPAL('admin') AUTHADD(ALLMQI)\nEND\n")),Object(r.b)("p",null,"Exit the session and continue on to create the MQ Connector Sink."),Object(r.b)("h3",null,"Create MQ Kafka Connector Sink"),Object(r.b)("p",null,"The MQ Connector Sink can be downloaded from ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging/kafka-connect-mq-sink"},"Github"),".  The Github site includes exhaustive instructions and an abridged version follows."),Object(r.b)("p",null,"Clone the repository with the following command:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git clone https://github.com/ibm-messaging/kafka-connect-mq-sink.git")),Object(r.b)("p",null,"Change directory into the kafka-connect-mq-sink directory:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cd kafka-connect-mq-sink")),Object(r.b)("p",null,"Build the connector using Maven:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mvn clean package")),Object(r.b)("p",null,"Next, create a directory to contain the Kafka Connector configuration."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mkdir config && cd config")),Object(r.b)("p",null,"Create a configuration file called ",Object(r.b)("inlineCode",{parentName:"p"},"connect-distributed.properties")," for Kafka Connect based on the template below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-properties"},'# A list of host/port pairs to use for establishing the initial connection to the Kafka cluster.\nbootstrap.servers=broker-1- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-0- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093\nssl.enabled.protocols=TLSv1.2\nssl.protocol=TLS\nsecurity.protocol=SASL_SSL\nsasl.mechanism=PLAIN\nsasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="bA ... Qp";\n\n# Consumer side configuration\nconsumer.bootstrap.servers=broker-1- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-0- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093\nconsumer.security.protocol=SASL_SSL\nconsumer.ssl.protocol=TLSv1.2\nconsumer.sasl.mechanism=PLAIN\nconsumer.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="bA ... Qp";\n\n# Producer Side\nproducer.security.protocol=SASL_SSL\nproducer.ssl.protocol=TLSv1.2\nproducer.sasl.mechanism=PLAIN\nproducer.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="bA ... Qp";\nproducer.bootstrap.servers=broker-1- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-0- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093\n\n\nplugin.path=/opt/kafka/libs\n\n# unique name for the cluster, used in forming the Connect cluster group. Note that this must not conflict with consumer group IDs\ngroup.id=mq-sink-cluster\n\n# The converters specify the format of data in Kafka and how to translate it into Connect data. Every Connect user will\n# need to configure these based on the format they want their data in when loaded from or stored into Kafka\nkey.converter=org.apache.kafka.connect.json.JsonConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\n# Converter-specific settings can be passed in by prefixing the Converter\'s setting with the converter we want to apply\n# it to\nkey.converter.schemas.enable=true\nvalue.converter.schemas.enable=true\n\n# Topic to use for storing offsets. T\noffset.storage.topic=connect-offsets\noffset.storage.replication.factor=3\n#offset.storage.partitions=25\n\n# Topic to use for storing connector and task configurations; note that this should be a single partition, highly replicated, and compacted topic.\nconfig.storage.topic=connect-configs\nconfig.storage.replication.factor=3\n\n# Topic to use for storing statuses. This topic can have multiple partitions and should be replicated and compacted.\nstatus.storage.topic=connect-status\nstatus.storage.replication.factor=3\nstatus.storage.partitions=5\n\n# Flush much faster than normal, which is useful for testing/debugging\noffset.flush.interval.ms=10000\n')),Object(r.b)("p",null,"Save this file in the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," directory."),Object(r.b)("p",null,"Next, create a log4j configuration file named ",Object(r.b)("inlineCode",{parentName:"p"},"connect-log4j.properties")," based on the template below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-properties"},"log4j.rootLogger=DEBUG, stdout\n\nlog4j.appender.stdout=org.apache.log4j.ConsoleAppender\nlog4j.appender.stdout.layout=org.apache.log4j.PatternLayout\nlog4j.appender.stdout.layout.ConversionPattern=[%d] %p %m (%c:%L)%n\n\nlog4j.logger.org.apache.kafka=INFO\n")),Object(r.b)("p",null,"Save this file to the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," directory as well."),Object(r.b)("p",null,"Finally, create a JSON configuraiton file for the MQ sink.  This can be stored anywhere but it can be conveniently created in the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," directory.  We name this file ",Object(r.b)("inlineCode",{parentName:"p"},"mq-sink.json"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "mq-sink",\n    "config":\n    {\n        "connector.class": "com.ibm.eventstreams.connect.mqsink.MQSinkConnector",\n        "tasks.max": "1",\n        "topics": "inventory",\n\n        "key.converter": "org.apache.kafka.connect.storage.StringConverter",\n        "value.converter": "org.apache.kafka.connect.storage.StringConverter",\n\n        "mq.queue.manager": "QM1",\n        "mq.connection.name.list": "mq(1414)",\n        "mq.user.name": "admin",\n        "mq.password": "passw0rd",\n        "mq.user.authentication.mqcsp": true,\n        "mq.channel.name": "KAFKA.CHANNEL",\n        "mq.queue": "INVENTORY",\n        "mq.message.builder": "com.ibm.eventstreams.connect.mqsink.builders.DefaultMessageBuilder"\n    }\n}\n')),Object(r.b)("p",null,"Back out one directory to the ",Object(r.b)("inlineCode",{parentName:"p"},"kafka-connect-mq-sink")," directory."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cd ..")),Object(r.b)("p",null,"Build docker image\n",Object(r.b)("inlineCode",{parentName:"p"},"docker build -t kafkaconnect-with-mq-sink:1.3.0 .")),Object(r.b)("p",null,"Finally, run the Kafka Connect MQ Sink container."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"docker run                                 \\\n  --name mq-sink                           \\\n  --detach                                 \\\n  --volume $(pwd)/config:/opt/kafka/config \\\n  --publish 8083:8083                      \\\n  --link mq:mq                             \\\n  kafkaconnect-with-mq-sink:1.3.0\n")),Object(r.b)("p",null,"You should now have a working MQ sink."),Object(r.b)("p",null,"As an alternate approach, when you have a Kafka Connect isntance up and running, with the dependant jar files, it is possible to configure the connector with a POST operation like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-Shell"},'curl -X POST -H "Content-Type: application/json" http://localhost:8083/connectors   --data "@./mq-sink.json"\n\n# The response returns the metadata about the connector\n{"name":"mq-sink","config":{"connector.class":"com.ibm.eventstreams.connect.mqsink.MQSinkConnector","tasks.max":"1","topics":"inventory","key.converter":"org.apache.kafka.connect.storage.StringConverter","value.converter":"org.apache.kafka.connect.storage.StringConverter","mq.queue.manager":"QM1","mq.connection.name.list":"ibmmq(1414)","mq.user.name":"admin","mq.password":"passw0rd","mq.user.authentication.mqcsp":"true","mq.channel.name":"KAFKA.CHANNEL","mq.queue":"INVENTORY","mq.message.builder":"com.ibm.eventstreams.connect.mqsink.builders.DefaultMessageBuilder","name":"mq-sink"},"tasks":[{"connector":"mq-sink","task":0}],"type":"sink"}\n')),Object(r.b)("p",null,"Once the connector is up and running, we can use some tool to send inventory message. In the ",Object(r.b)("inlineCode",{parentName:"p"},"integration-tests")," folder we have some python code to produce message. If you have a python environment with kafka api you can use yours, or we have also provided a Dockerfile to prepare a local python environment, which will not impact yours."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# if you change the name of the image\ndocker build -t ibmcase/python37 .\n# ... then update the script ./startPython.sh\n./startPython.sh\n# Now in the new bash session you should see ProduceInventoryEvent.py,... start it by sending 2 events\npython ProduceInventoryEvent.py --size 2\n# Events are random but use stores and items known by the database downstream.\n sending -> {'storeName': 'NYC01', 'itemCode': 'IT06', 'quantity': 15, 'price': 163, 'id': 1, 'timestamp': '23-Jun-2020 04:32:38'}\n# the following trace demonstrates Kafka received the message\n[KafkaProducer] - Message delivered to inventory [0]\nsending -> {'storeName': 'SC01', 'itemCode': 'IT06', 'quantity': 15, 'price': 178, 'id': 2, 'timestamp': '23-Jun-2020 04:32:38'}\n[KafkaProducer] - Message delivered to inventory [0]\n")),Object(r.b)("p",null,"In the Kafka Connect trace we can see:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"kconnect_1  | [2020-06-23 04:23:16,270] INFO WorkerSinkTask{id=mq-sink-0} Committing offsets asynchronously using sequence number 26: {inventory-0=OffsetAndMetadata{offset=44, leaderEpoch=null, metadata=''}} (org.apache.kafka.connect.runtime.WorkerSinkTask:349)\nkconnect_1  | [2020-06-23 04:32:46,382] INFO WorkerSinkTask{id=mq-sink-0} Committing offsets asynchronously using sequence number 83: {inventory-0=OffsetAndMetadata{offset=48, leaderEpoch=null, metadata=''}} (org.apache.kafka.connect.runtime.WorkerSinkTask:349)\n")),Object(r.b)("p",null,"And in the IBM MQ Console, under the Local Queue: Inventory we can see the messages:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIklEQVQoz5WSa26DMBCEOXWv08O0N2il/Og/8sIOELABv4DpjlXUNFKk1NInr63Z8e5Coese53OFpqmFJjPPM7jWdf03hbUGxhj0fQ9rLYZhQEopmz5LEmKa4UNAoS8XVFWFtm0RY8wC7s8SmJOi9BORokMxTWOubJqmXNmt+P78yOxqI953C0olhvv9Hhep8ng84nA4QCmF0+mUKcsSWuuHKKXR1gqfXxovr1e8fRgUbTfAWAcjM2TbnCErJjxztrds8yZd12V9DE5alg7DIB9lkjAAIXgRmT+t0nQcx5xEGHM02x3NqeOaV8A5j2L0EoRVDEMWcc/z+TkzeYNmGzzzQeq2X8Y5maExowQB3vssXJbl93eQSu+5v+fjzGUeDb8BC3C5EK2Bd2EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibmq q inventory",title:"ibmq q inventory",src:"/refarch-eda/static/447c1faaa01eaff3324f6362e0215573/3cbba/ibmq-q-inventory.png",srcSet:["/refarch-eda/static/447c1faaa01eaff3324f6362e0215573/7fc1e/ibmq-q-inventory.png 288w","/refarch-eda/static/447c1faaa01eaff3324f6362e0215573/a5df1/ibmq-q-inventory.png 576w","/refarch-eda/static/447c1faaa01eaff3324f6362e0215573/3cbba/ibmq-q-inventory.png 1152w","/refarch-eda/static/447c1faaa01eaff3324f6362e0215573/e1971/ibmq-q-inventory.png 1256w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"To remove the connector do the following command. Do this specially if you go to scenario 2 next."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"curl -X DELETE http://localhost:8083/connectors/mq-sink\n")),Object(r.b)("h2",null,"Deploying MQ Sink Connector to OpenShift"),Object(r.b)("p",null," We could have used MQ broker as part of Cloud Pak for integration or ",Object(r.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/mqcloud/index.html"},"as a service in IBM Cloud"),"."),Object(r.b)("h3",null,"Prerequisites"),Object(r.b)("p",null,"We are assuming you already have an instance of IBM EventStreams running on IBM Cloud from previous scenarios.  Also, we assume you have a running instance of OpenShift with a project created to run the MQ Sink.  Finally, we assume you’re familiar with OpenShift and Kubernetes and know how to work with the configuration files provided below."),Object(r.b)("h3",null,"MQ on OpenShift"),Object(r.b)("p",null,"Strictly speaking you don’t need to move the instance of MQ previously used onto OpenShift for the MQ Sink to work however the configuration to do so is provided.  Note that this is not a production configuration and is intended for POC purposes only."),Object(r.b)("p",null,"Create a ConfigMap on OpenShift with the following definition:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: mq-config\n  namespace: mq-demo\ndata:\n    LICENSE: accept\n    MQ_QMGR_NAME: QM1\n    MQ_APP_PASSWORD: admin\n    MQ_ENABLE_METRICS: "true"\n')),Object(r.b)("p",null,"This will make it easier to update the MQ configuration if needed without editing everything in the Pod definition."),Object(r.b)("p",null,"Next, create the MQ Pod with the following definition:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: ibm-mq\n  labels:\n    app: mq-kafka-sink-demo-app\n  namespace: mq-demo\nspec:\n  containers:\n    - name: ibm-mq\n      image: ibmcom/mq\n      ports:\n        - containerPort: 1414\n          protocol: TCP\n        - containerPort: 9443\n          protocol: TCP\n        - containerPort: 9157\n          protocol: TCP\n      envFrom:\n        - configMapRef:\n            name: mq-config\n")),Object(r.b)("p",null,"Next, define a Service to point to the MQ Pod."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: mq-service\n  namespace: mq-demo\nspec:\n  selector:\n    app: mq-kafka-sink-demo-app\n  ports:\n    - name: mq-port\n      protocol: TCP\n      port: 1414\n      targetPort: 1414\n    - name: mq-portal\n      protocol: TCP\n      port: 9443\n      targetPort: 9443\n    - name: mq-dunno\n      protocol: TCP\n      port: 9157\n      targetPort: 9157\n")),Object(r.b)("p",null,"Finally, define a Route to be able to access the admin UI."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"kind: Route\napiVersion: route.openshift.io/v1\nmetadata:\n  name: mq-route\n  namespace: mq-demo\nspec:\n  host: ibmmq.bnpp.apps.openshift.proxmox.lab\n  to:\n    kind: Service\n    name: mq-service\n    weight: 100\n  port:\n    targetPort: mq-portal\n  tls:\n    termination: passthrough\n    insecureEdgeTerminationPolicy: Redirect\n  wildcardPolicy: None\n")),Object(r.b)("p",null,"You will want to connect to the container and run the setup commands as described in a previous scenario.  At this point, IBM MQ should be running and available on OpenShift."),Object(r.b)("p",null,"To run the Kafka Connect MQ Sink on OpenShift or any container platform, you will need to build a container that has Kafka installed as well as the MQ Sink and proper configuration.  Typically we would use the Strimzi containerized Kafka solution to run on OpenShift, but in this case to illustrate all the components we are building a container from scratch.  The following is the Dockerfile:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM ubuntu:20.04\n\nADD https://mirrors.koehn.com/apache/kafka/2.5.0/kafka_2.12-2.5.0.tgz /tmp/\n\nRUN apt update                                                                                                     && \\\n    apt install -y curl git maven                                                                                  && \\\n    tar -C /opt -xvf /tmp/kafka_2.12-2.5.0.tgz                                                                     && \\\n    rm -f /tmp/kafka_2.12-2.5.0.tgz                                                                                && \\\n    ln -s /opt/kafka_2.12-2.5.0 /opt/kafka                                                                         && \\\n    mv -f /opt/kafka/config/connect-distributed.properties /opt/kafka/config/connect-distributed.properties.bak    && \\\n    cd /opt                                                                                                        && \\\n    git clone https://github.com/ibm-messaging/kafka-connect-mq-sink.git                                           && \\\n    cd /opt/kafka-connect-mq-sink                                                                                  && \\\n    mvn clean package                                                                                              && \\\n    ln -s /opt/kafka-connect-mq-sink/target/kafka-connect-mq-sink-1.3.0-jar-with-dependencies.jar /opt/kafka/libs/ && \\\n    mv -f /opt/kafka-connect-mq-sink/config/mq-sink.json /opt/kafka-connect-mq-sink/config/mq-sink.json.bak\n\nCOPY connect-distributed.properties /opt/kafka/config/connect-distributed.properties\nCOPY mq-sink-connector-config.json /opt/kafka-connect-mq-sink/config/mq-sink.json\nCOPY entrypoint.sh /entrypoint.sh\n\nENTRYPOINT ["/entrypoint.sh"]\n')),Object(r.b)("p",null,"We start with a vanilla Linux container, install the binary distribution of Kafka for Linux, clone the MQ Sink repository from Github, build the MQ Sink, and finally copy in some template files.  Finally the container runs a custom entrypoint script as shown below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n\nset -x\n\nsed -i "s/KAFKA_BOOTSTRAP_SERVERS/${KAFKA_BOOTSTRAP_SERVERS}/g" /opt/kafka/config/connect-distributed.properties\nsed -i "s/KAFKA_API_KEY/${KAFKA_API_KEY}/g"                     /opt/kafka/config/connect-distributed.properties\n\n\nsed -i "s/KAFKA_TOPICS/${KAFKA_TOPICS}/g"         /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_QUEUE_MANAGER/${MQ_QUEUE_MANAGER}/g" /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_HOST/${MQ_HOST}/g"                   /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_PORT/${MQ_PORT}/g"                   /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_USER/${MQ_USER}/g"                   /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_PASSWORD/${MQ_PASSWORD}/g"           /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_CHANNEL/${MQ_CHANNEL}/g"             /opt/kafka-connect-mq-sink/config/mq-sink.json\nsed -i "s/MQ_QUEUE/${MQ_QUEUE}/g"                 /opt/kafka-connect-mq-sink/config/mq-sink.json\n\n/opt/kafka/bin/connect-distributed.sh /opt/kafka/config/connect-distributed.properties &\n\nsleep 60\ncurl -X DELETE -H "Content-Type: application/json" http://localhost:8083/connectors/mq-sink-connector\ncurl -X POST -H "Content-Type: application/json" http://localhost:8083/connectors --data "@/opt/kafka-connect-mq-sink/config/mq-sink.json"\n\ntail -f /dev/null\n')),Object(r.b)("p",null,"Again this is not a production-ready entrypoint container script; it’s intended for POC purposes.  The script updates the template files copied into the container with values from the environment (either ",Object(r.b)("inlineCode",{parentName:"p"},"--env")," using Docker, or from a ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigMap")," in OpenShift) and then starts Kafka Connect in distributed mode.  It pauses the script for 1 minute to let Kafka Connect start, then finally activates the MQ Sink by POSTing the MQ Sink configuration using ",Object(r.b)("inlineCode",{parentName:"p"},"cURL"),"."),Object(r.b)("p",null,"The two template configuration files that are copied into the container are shown below."),Object(r.b)("h3",null,"connect-distributed.properties:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'# A list of host/port pairs to use for establishing the initial connection to the Kafka cluster.\nbootstrap.servers=KAFKA_BOOTSTRAP_SERVERS\nssl.enabled.protocols=TLSv1.2\nssl.protocol=TLS\nsecurity.protocol=SASL_SSL\nsasl.mechanism=PLAIN\nsasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="KAFKA_API_KEY";\n\n# Consumer side configuration\nconsumer.bootstrap.servers=KAFKA_BOOTSTRAP_SERVERS\nconsumer.security.protocol=SASL_SSL\nconsumer.ssl.protocol=TLSv1.2\nconsumer.sasl.mechanism=PLAIN\nconsumer.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="KAFKA_API_KEY";\n\n# Producer Side\nproducer.bootstrap.servers=KAFKA_BOOTSTRAP_SERVERS\nproducer.security.protocol=SASL_SSL\nproducer.ssl.protocol=TLSv1.2\nproducer.sasl.mechanism=PLAIN\nproducer.sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="KAFKA_API_KEY";\n\nplugin.path=/opt/kafka/libs\n\n# unique name for the cluster, used in forming the Connect cluster group. Note that this must not conflict with consumer group IDs\ngroup.id=mq-sink-cluster\n\n# The converters specify the format of data in Kafka and how to translate it into Connect data. Every Connect user will\n# need to configure these based on the format they want their data in when loaded from or stored into Kafka\nkey.converter=org.apache.kafka.connect.json.JsonConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\n# Converter-specific settings can be passed in by prefixing the Converter\'s setting with the converter we want to apply\n# it to\nkey.converter.schemas.enable=true\nvalue.converter.schemas.enable=true\n\n# Topic to use for storing offsets. This topic should have many partitions and be replicated and compacted.\n# Kafka Connect will attempt to create the topic automatically when needed, but you can always manually create\n# the topic before starting Kafka Connect if a specific topic configuration is needed.\n# Most users will want to use the built-in default replication factor of 3 or in some cases even specify a larger value.\n# Since this means there must be at least as many brokers as the maximum replication factor used, we\'d like to be able\n# to run this example on a single-broker cluster and so here we instead set the replication factor to 1.\noffset.storage.topic=connect-offsets\noffset.storage.replication.factor=3\n#offset.storage.partitions=25\n\n# Topic to use for storing connector and task configurations; note that this should be a single partition, highly replicated,\n# and compacted topic. Kafka Connect will attempt to create the topic automatically when needed, but you can always manually create\n# the topic before starting Kafka Connect if a specific topic configuration is needed.\n# Most users will want to use the built-in default replication factor of 3 or in some cases even specify a larger value.\n# Since this means there must be at least as many brokers as the maximum replication factor used, we\'d like to be able\n# to run this example on a single-broker cluster and so here we instead set the replication factor to 1.\nconfig.storage.topic=connect-configs\nconfig.storage.replication.factor=3\n\n# Topic to use for storing statuses. This topic can have multiple partitions and should be replicated and compacted.\n# Kafka Connect will attempt to create the topic automatically when needed, but you can always manually create\n# the topic before starting Kafka Connect if a specific topic configuration is needed.\n# Most users will want to use the built-in default replication factor of 3 or in some cases even specify a larger value.\n# Since this means there must be at least as many brokers as the maximum replication factor used, we\'d like to be able\n# to run this example on a single-broker cluster and so here we instead set the replication factor to 1.\nstatus.storage.topic=connect-status\nstatus.storage.replication.factor=3\n\n#status.storage.partitions=5\n\n# Flush much faster than normal, which is useful for testing/debugging\noffset.flush.interval.ms=10000\n')),Object(r.b)("h3",null,"mq-sink-connector-config.json:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "mq-sink-connector",\n  "config":\n  {\n      "connector.class": "com.ibm.eventstreams.connect.mqsink.MQSinkConnector",\n      "tasks.max": "1",\n      "topics": "KAFKA_TOPICS",\n\n      "key.converter": "org.apache.kafka.connect.storage.StringConverter",\n      "value.converter": "org.apache.kafka.connect.storage.StringConverter",\n\n      "mq.queue.manager": "MQ_QUEUE_MANAGER",\n      "mq.connection.name.list": "MQ_HOST(MQ_PORT)",\n      "mq.user.name": "MQ_USER",\n      "mq.password": "MQ_PASSWORD",\n      "mq.user.authentication.mqcsp": true,\n      "mq.channel.name": "MQ_CHANNEL",\n      "mq.queue": "MQ_QUEUE",\n      "mq.message.builder": "com.ibm.eventstreams.connect.mqsink.builders.DefaultMessageBuilder"\n  }\n}\n')),Object(r.b)("p",null,"Notice in these two files there are several capitalized variables which are replaced by the entrypoint.sh script at container startup."),Object(r.b)("p",null,"To deploy the container on OpenShift, we create a ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigMap")," with information about the IBM EventStreams on IBM Cloud instance as well as the local instance of MQ on OpenShift."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: mq-kafka-sink-demo-config\n  namespace: mq-demo\ndata:\n  KAFKA_API_KEY: bA ... Qp\n  KAFKA_BOOTSTRAP_SERVERS: >-\n    broker-1- ... eventstreams.cloud.ibm.com:9093,broker-0- ... eventstreams.cloud.ibm.com:9093,broker-4- ... eventstreams.cloud.ibm.com:9093,broker-2- ... eventstreams.cloud.ibm.com:9093,broker-5- ... eventstreams.cloud.ibm.com:9093,broker-3- ... eventstreams.cloud.ibm.com:9093\n  KAFKA_TOPICS: inventory\n  MQ_HOST: mq-service\n  MQ_PORT: "1414"\n  MQ_USER: admin\n  MQ_QUEUE_MANAGER: QM1\n  MQ_PASSWORD: passw0rd\n  MQ_CHANNEL: KAFKA.CHANNEL\n  MQ_QUEUE: INVENTORY\n')),Object(r.b)("p",null,"Finally to deploy the MQ Sink container, we create a Pod definition on OpenShift:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: mq-kafka-sink-demo\n  labels:\n    app: mq-kafka-sink-demo-app\n  namespace: mq-demo\nspec:\n  containers:\n    - name: mq-kafka-sink-demo\n      image: registry/mq-kafka-sink-demo:0.0.1\n      envFrom:\n        - configMapRef:\n            name: mq-kafka-sink-demo-config\n")),Object(r.b)("p",null,"With the correct credentials for IBM EventStreams and IBM MQ, Kafka Connect should connect to both services and pull data from the EventStreams topic configured to the MQ Queue configured.  You will see signs of success in the container output (via oc logs, or in the UI):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'+ curl -X POST -H Content-Type: application/json http://localhost:8083/connectors --data @/opt/kafka-connect-mq-sink/config/mq-sink.json\n...\n{"name":"mq-sink-connector","config":{"connector.class":"com.ibm.eventstreams.connect.mqsink.MQSinkConnector","tasks.max":"1","topics":"inventory","key.converter":"org.apache.kafka.connect.storage.StringConverter","value.converter":"org.apache.kafka.connect.storage.StringConverter","mq.queue.manager":"QM1","mq.connection.name.list":"mq-service(1414)","mq.user.name":"admin","mq.password":"passw0rd","mq.user.authentication.mqcsp":"true","mq.channel.name":"KAFKA.CHANNEL","mq.queue":"INVENTORY","mq.message.builder":"com.ibm.eventstreams.connect.mqsink.builders.DefaultMessageBuilder","name":"mq-sink-connector"},"tasks":[{"connector":"mq-sink-connector","task":0}],"type":"sink"}\n...\n[2020-06-23 04:26:26,054] INFO Creating task mq-sink-connector-0 (org.apache.kafka.connect.runtime.Worker:419)\n...[2020-06-23 04:26:26,449] INFO Connection to MQ established (com.ibm.eventstreams.connect.mqsink.JMSWriter:229)\n[2020-06-23 04:26:26,449] INFO WorkerSinkTask{id=mq-sink-connector-0} Sink task finished initialization and start (org.apache.kafka.connect.runtime.WorkerSinkTask:306)\n')),Object(r.b)("p",null,"You should now have the Kafka Connector MQ Sink running on OpenShift."))}u.isMDXComponent=!0},OIbQ:function(e,n,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,n,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-use-cases-connect-mq-index-copy-mdx-7b7789b09413023edb20.js.map