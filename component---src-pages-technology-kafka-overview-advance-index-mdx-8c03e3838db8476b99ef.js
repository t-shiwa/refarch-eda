(window.webpackJsonp=window.webpackJsonp||[]).push([[81,111],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),s=a.n(r),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),p=a.n(d),u=a("QH2O"),b=a.n(u),h=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(h.b)("div",{className:p()(b.a.pageHeader,(t={},t[b.a.withTabs]=r.length,t[b.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:b.a.text},a)))))},f=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,l=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(h.b)("div",{className:"bx--row "+f.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},k=a("FCXl"),y=a("dI71"),v=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===o,l=new RegExp(o+"/?(#.*)?$"),c=n.replace(l,a);return Object(h.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(h.b)(i.Link,{className:v.link,to:""+c},e))}));return Object(h.b)("div",{className:v.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:v.list},r))))))},t}(o.a.Component),O=a("MjG9"),j=a("CzIb"),N=a("Asxa"),T=a("OIbQ"),x=a.n(T),I=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(N.c,{className:x.a.row},Object(h.b)(N.a,null,Object(h.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,d=void 0===r?{}:r,p=t.relativePagePath,u=t.titleType,b=d.tabs,f=d.title,y=d.theme,v=d.description,N=d.keywords,T=d.date,x=Object(j.a)().interiorTheme,K=Object(i.useStaticQuery)("2456312558").site.pathPrefix,C=K?n.pathname.replace(K,""):n.pathname,P=b?C.split("/").filter(Boolean).slice(-1)[0]||s()(b[0],{lower:!0}):"",z=y||x;return Object(h.b)(c.a,{tabs:b,homepage:!1,theme:z,pageTitle:f,pageDescription:v,pageKeywords:N,titleType:u},Object(h.b)(m,{title:o?Object(h.b)(o,null):f,label:"label",tabs:b,theme:z}),b&&Object(h.b)(w,{title:f,slug:C,tabs:b,currentTab:P}),Object(h.b)(O.a,{padded:!0},a,Object(h.b)(g,{relativePagePath:p}),Object(h.b)(I,{date:T})),Object(h.b)(k.a,{pageContext:t,location:n,slug:C,tabs:b,currentTab:P}),Object(h.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},z4kH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),i=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=l("AnchorLinks"),d=l("AnchorLink"),p={_frontmatter:i},u=s.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"AnchorLinks"},Object(r.b)(d,{mdxType:"AnchorLink"},"High Availability"),Object(r.b)(d,{mdxType:"AnchorLink"},"Performance Considerations"),Object(r.b)(d,{mdxType:"AnchorLink"},"Disaster Recovery"),Object(r.b)(d,{mdxType:"AnchorLink"},"Solution Considerations")),Object(r.b)("h1",null,"High Availability"),Object(r.b)("p",null,"As a distributed cluster, kafka brokers ensure high availability to process new events. Topic has replication factor to support not loosing data in case of broker failure. You need at least 3 brokers to ensure availability and a replication factor set to 3 for each topic, so no data should be lost.\nIn production it is recommended to use 5 brokers cluster to ensure the quorum is always set, but replica factor can still be set to 3."),Object(r.b)("p",null,"The brokers need to run on separate physical machines, and when cluster extends over multiple availability zone, a rack awareness configuration can be defined."),Object(r.b)("p",null,"Partition enables data locality, elasticity, scalability, high performance, parallelism, and fault tolerance. Each partition is replicated at least 3 times and allocated in different brokers. One replicas is the ",Object(r.b)("strong",{parentName:"p"},"leader"),". In the case of broker failure (broker 1 in figure below), one of the existing partition in the remaining running brokers will take the leader role (e.g. red partition in broker 3):"),Object(r.b)("img",{src:"../images/kafka-ha.png",alt:"Replication and partition leadership"}),Object(r.b)("h2",null,"Replication and partition leadership"),Object(r.b)("p",null,"The keys in the data record determine the partitioning of data in ",Object(r.b)("strong",{parentName:"p"},"Kafka"),". The records with the same key will be in the same partition."),Object(r.b)("p",null,"As kafka is keeping its cluster states in ",Object(r.b)("a",{parentName:"p",href:"http://zookeeper.apache.org/"},"Apache Zookeeper"),", you also need to have at least a three node cluster for zookeeper.\nWrites to Zookeeper are only be performed on changes to the membership of consumer groups or on changes to the Kafka cluster itself.\nAssuming you are using the most recent kafka version (after 0.9), it is possible to have a unique zookeeper cluster for multiple\nkafka clusters. But the latency between Kafka and zookeeper needs to be under few milliseconds (< 15ms) anyway.\nZookeepers and Brokers should have high availability communication via dual network, and each broker and node allocated on different racks and blades."),Object(r.b)("img",{src:"../images/ha-comp.png",alt:"Dual network"}),Object(r.b)("p",null,"Consumers and producers are using a list of bootstrap server names (also named advertiser.listeners) to contact the cluster.\nThe list is used for cluster discovery, it does not need to keep the full set of server names or ip addresses.\nA Kafka cluster has exactly one broker that acts as the controller."),Object(r.b)("p",null,"Per design Kafka aims to run within a single data center. But it is still recommended to use multiple racks connected with low latency dual networks.\nWith multiple racks you will have better fault tolerance, as one rack failure will impact only one broker. There is a configuration property\nto assign kafka broker using rack awareness. (See ",Object(r.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#brokerconfigs"},"this configuration")," from the product documentation)."),Object(r.b)("p",null,"As introduced on the topic section above, data are replicated between brokers. The following diagram illustrates the best case scenario where followers fetch data from\nthe partition leader, acknowledge the replications:"),Object(r.b)("img",{src:"../images/topic-replica-seq.png",alt:null}),Object(r.b)("p",null,"Usually replicas is done in-sync, and the configuration settings specify the number of replicas in-sync needed: for example, a replicas 3 can have a minimum in-sync of 2,\nto tolerate 1 out of sync replica (1 broker outage)."),Object(r.b)("p",null,"The leader maintains a set of in-sync-replicas (ISR) brokers: all the nodes which are up-to-date with the leader’s log, and actively acknowledging new writes.\nEvery write goes through the leader and is propagated to every node in the In Sync Replica set, or ISR."),Object(r.b)("p",null,"Followers consume messages from the leader just as a normal Kafka consumer would and apply them to their own log.\nHaving the followers pull from the leader has the nice property of allowing the follower to naturally batch together\nlog entries they are applying to their log."),Object(r.b)("p",null,"Once all nodes in the ISR have acknowledged the request, the leader considers it committed, and can acknowledge to the client."),Object(r.b)("p",null,"A message is considered committed when all in-sync replicas for that partition have applied it to their log."),Object(r.b)("p",null,"If a leader fails, followers elect a new one. The leadership of partitions is dynamic and changes as servers come and go.\nApplications do not need to take specific actions to handle the change in the leadership of a partition. The Kafka client library automatically reconnects to the new leader, although you will see increased latency while the cluster settles.\nAny replica in the ISR is eligible to be elected leader."),Object(r.b)("img",{src:"../images/topic-replica-fail.png",alt:null}),Object(r.b)("p",null,"When a leader waits to get acknowledge before committing a message there will be more potential leaders. With (#failure + 1) replicas there is no data lost.\nBut there is a risk of having the single broker separated from the zookeeper cluster when network partition occurs. To tolerate f failures, both the majority\nvote and the ISR approach will wait for the same number of replicas to acknowledge before committing a message."),Object(r.b)("p",null,"Having higher replicas number like 5, will duplicate 5 times the data (more disk used) and impact throughput as data is sent 1+4 times over the network."),Object(r.b)("p",null,"Another important design distinction is that Kafka does not require that crashed nodes recover with all their data intact. \nKafka protocol for allowing a replica to rejoin the ISR ensures that before rejoining, it must fully re-sync again even if\nit lost unflushed data in its crash."),Object(r.b)("p",null,"When a producer sends message, it can control how to get the response from the committed message: wait for all replicas to succeed, wait for one acknowledge, fire and forget.\nConsumers receive only committed messages."),Object(r.b)("p",null,"Always assess the latency requirements and consumers needs. Throughput is linked to the number of partitions within a topic and having more consumers running in parallel.\nConsumers and producers should better run on separate servers than the brokers nodes. Running in parallel, also means the order of event arrivals will be lost.\nMost of the time, consumers are processing events from a unique partition and Kafka record to partition assignment will guarantee that records with the same key hashcode will be in the same partition. So orders are preserved within a partition. But if consumer needs to read from multiple partitions then if ordered records is needed, the consumer needs to rebuild the order with some complex logic."),Object(r.b)("p",null,"For high availability assess any potential single point of failure, such as server, rack, network, power supply… We recommend reading ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/installing/planning/"},"this event stream article")," for planning your kafka on Kubernetes installation."),Object(r.b)("p",null,"For the consumers code update, the recreation of the consumer instance within the consumer group will trigger the partition rebalancing. This includes all the state of the aggregated data calculations that were persisted on disk. Until this process is finished real-time events are not processed. It is possible to limit this impact by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"group.initial.rebalance.delay.ms")," to delay the rebalancing process one one instance of the consumer dies. Nevertheless the rebalancing will still occur when the updated consumer will rejoin the consumer group. When consumers are stream processing using Kafka streams, it is important to note that during the rollover the downstream processing will see a lag in event arrival: the time for the consumer to reread from the last committed offset. So if end to end timing is becoming important, we need to setup a standby consumer cluster (cluster B). This consumer group has different name, but does the same processing logic, and is consuming the same events from the same topic as the active consumer group cluster (cluster A). The difference is that they do not send events to the downstream topic until they are set up active. So to process the release cluster B is set active while cluster A is set inactive. The downstream will not be that much impacted.\nFinally to be exhaustive, the control of the segment size for the change log topic, may be considered to avoid having the stream processing doing a lot of computation to reload its state when it restarts."),Object(r.b)("p",null,"To add new broker, you can deploy the runtime to a new server / rack / blade, and give it a unique ID. Broker will process new topic, but it is possible to use tool to migrate some existing topic/ partitions to the new server. The tool is used to reassign partitions across brokers. An ideal partition distribution would ensure even data load and partition sizes across all brokers."),Object(r.b)("h2",null,"High Availability in the context of Kubernetes deployment"),Object(r.b)("p",null,"The combination of kafka with Kubernetes seems to be a sound approach, but it is not that easy to achieve. Kubernetes workloads prefer to be stateless,\nKafka is a stateful platform and manages its own brokers, and replications across known servers. It knows the underlying infrastructure.\nIn Kubernetes, nodes and pods may change dynamically. Clients need to be able to access each of the broker directly once they get the connection metadata.\nHaving a service which will round robin across all brokers in the cluster will not work with Kafka."),Object(r.b)("p",null,"The figure below illustrates a Kubernetes deployment, where zookeeper and kafka brokers are allocated to 3 worker nodes, with some event driven microservices deployed\nin separate worker nodes. Those microservices are consumers and producers of events from one to many topics."),Object(r.b)("img",{src:"../images/k8s-deploy.png",alt:"kubernetes deployment"}),Object(r.b)("p",null,"The advantages of deploying Kafka on Kubernetes cluster is to facilitate the management of stateful sets, by scheduling both the persistence volume and broker pods in a clean rolling rehydration. Services add a logical name to access brokers for any deployed workload within the cluster. The virtual network also enables transparent TLS communication between components."),Object(r.b)("p",null,"For any Kubernetes deployment real high availability is constrained by the application / workload deployed on it. The Kubernetes platform supports high availability by having at least the following configuration:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"At least three master nodes (always an odd number of nodes). One is active at master, the others are in standby. The election of the master is using the quorum algorithm."),Object(r.b)("li",{parentName:"ul"},"Three proxy nodes."),Object(r.b)("li",{parentName:"ul"},"At least three worker nodes, but with zookeeper and Kafka clusters, we may need to have at least three more nodes as we do not want to have zookeeper and Kafka brokers sharing the same host as other pods if the Kakfa traffic is supposed to grow."),Object(r.b)("li",{parentName:"ul"},"Externalize the management stack to three manager nodes"),Object(r.b)("li",{parentName:"ul"},"Shared storage outside of the cluster to support private image registry, audit logs, and statefulset data persistence (like the Kakfa broker file systems)."),Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"etcd")," cluster: See recommendations ",Object(r.b)("a",{parentName:"li",href:"https://github.com/coreos/etcd/blob/master/Documentation/op-guide/clustering.md"},"from this article"),". The virtual IP manager assigns virtual IP addresses to master and proxy nodes and monitors the health of the cluster. It leverages ",Object(r.b)("inlineCode",{parentName:"li"},"etcd")," for storing information, so it is important that ",Object(r.b)("inlineCode",{parentName:"li"},"etcd")," is high available too and connected to low latency network below 10ms.")),Object(r.b)("p",null,"Traditionally disaster recovery and high availability were always consider separated subjects. Now active/active deployment where workloads are deployed in different data centers, is becoming a common request."),Object(r.b)("p",null,"For sure, you need multiple Kafka Brokers, which will connect to the same ZooKeeper Ensemble running at least five nodes (you can tolerate the loss of one server during the planned maintenance of another server).\nOne Zookeeper server acts as a lead and the two others as stand-by."),Object(r.b)("p",null,"The diagram above illustrates a simple deployment where zookeeper servers and kafka brokers are running in pods, in different worker nodes.\nIt is a viable solution to start deploying solution on top of kafka. When you have bigger cluster, it may be interesting to separate Zookeeper from ",Object(r.b)("strong",{parentName:"p"},"Kafka")," nodes\nto limit the risk of failover, as zookeeper keeps state of the ",Object(r.b)("strong",{parentName:"p"},"Kafka")," cluster topology and metadata. You will limit to have both the zookeeper leader and\none kafka broker dying at the same time. We use Kubernetes ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity"},"anti-affinity"),"\nto ensure they are scheduled onto separate worker nodes that the ones used by zookeeper. It uses the labels on pods with a rule like:\n",Object(r.b)("inlineCode",{parentName:"p"},"**Kafka** pod should not run on same node as zookeeper pods"),"."),Object(r.b)("p",null,"Here is an example of such spec:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: with-pod-affinity\nspec:\n  affinity:\n    podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            labelSelector:\n            matchExpressions:\n            - key: name\n              operator: In\n              values:\n              - gc-zookeeper\n          topologyKey: kubernetes.io/hostname\n")),Object(r.b)("p",null,"We recommend reading the ",Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/stateful-application/zookeeper"},"“running zookeeper in k8s tutorial”")," for understanding such configuration."),Object(r.b)("p",null,"For optimum performance, provision a ",Object(r.b)("strong",{parentName:"p"},"fast storage class")," for persistence volume."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kafka")," uses the ",Object(r.b)("inlineCode",{parentName:"p"},"log.dirs")," property to configure the driver to persist logs. So you need to define multiple volumes/ drives to support ",Object(r.b)("inlineCode",{parentName:"p"},"log.dirs"),"."),Object(r.b)("p",null,"Zookeeper should not be used by other applications deployed in k8s cluster, it has to be dedicated for one ",Object(r.b)("strong",{parentName:"p"},"Kafka")," cluster only."),Object(r.b)("p",null,"In a multi-cluster configuration being used for disaster recovery purposes, messages sent between clusters will have different offsets in the two clusters. It is usual to use timestamps for position information when restarting applications for recovery after a disaster."),Object(r.b)("p",null,"For ",Object(r.b)("strong",{parentName:"p"},"Kafka")," streaming with stateful processing like joins, event aggregation and correlation coming from multiple partitions, it is not easy to achieve high availability cross clusters: in the strictest case every event must be processed by the streaming service exactly once. Which means:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"producer emits data to different sites and be able to re-emit in case of failure. Brokers are known by producer via a list of hostnames and port numbers."),Object(r.b)("li",{parentName:"ul"},"communications between zookeepers and cluster nodes are redundant and safe for data losses"),Object(r.b)("li",{parentName:"ul"},"consumers ensure idempotence… They have to tolerate data duplication and manage data integrity in their persistence layer.")),Object(r.b)("p",null,"Within Kafka’s boundary, data will not be lost, when doing proper configuration, also to support high availability the complexity moves to the producer and the consumer implementation."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Kafka")," configuration is an art and you need to tune the parameters by use case:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Partition replication for at least 3 replicas. Recall that in case of node failure,  coordination of partition re-assignments is provided with ZooKeeper."),Object(r.b)("li",{parentName:"ul"},"End to end latency needs to be measured from producer (when a message is sent) to consumer (when it is read). A consumer is able to get a message when the brokers finish replicating to all in-synch replicas."),Object(r.b)("li",{parentName:"ul"},"Use the producer buffering capability to pace the message to the broker. Can use memory or time based threshold via producer properties."),Object(r.b)("li",{parentName:"ul"},"Define the number of partitions to drive consumer parallelism. More consumers running in parallel the higher is the throughput. When using multiple partitions the global ordering of message is lost."),Object(r.b)("li",{parentName:"ul"},"Assess the retention hours to control when old messages in topic can be deleted. It is possible to keep messages forever, and for some application it makes fully sense."),Object(r.b)("li",{parentName:"ul"},"Control the maximum message size the server can receive.")),Object(r.b)("p",null,"Zookeeper is not CPU intensive and each server should have a least 2 GB of heap space and 4GB reserved. Two CPUs per server should be sufficient. Servers keep their entire state machine in memory, and write every mutation to a durable WAL (Write Ahead Log) on persistent storage. To prevent the WAL from growing without bound, ZooKeeper servers periodically snapshot their in memory state to storage. Use fast and dynamically provisioned persistence storage for both WAL and snapshot."),Object(r.b)("h1",null,"Performance Considerations"),Object(r.b)("p",null,"Performance will vary depending of the current kafka broker nodes load: in Kubernetes deployment, with small production topology, nodes may shared with other pods. It is recommended to control the environment with dedicated nodes for Kafka to achieve higher throughput.  Performance will always depend on\nnumerous factors including message throughput, message size, hardware, configuration settings, …"),Object(r.b)("p",null,"Performance may be linked to different focuses:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Resilience: ensuring replication and not loosing data"),Object(r.b)("li",{parentName:"ul"},"Throughput: ensuring message processing performance"),Object(r.b)("li",{parentName:"ul"},"Payload size: support larger message")),Object(r.b)("h2",null,"Resilience"),Object(r.b)("p",null,"When defining a topic, we need to specify the replicas factor to match the be at least 3 and then set the minimum number of in-sync replicas that specifies how may replicas must acknowledge a write to satisfy a producer that requests acknowledgments from all replicas. (",Object(r.b)("inlineCode",{parentName:"p"},"min.insync.replicas"),")."),Object(r.b)("p",null,"The replication of message data between brokers can consume a lot of network bandwidth so isolating replication traffic from application traffic can benefit performance. To achieve this, all replication traffic is configured to flow on a dedicated internal network."),Object(r.b)("h2",null,"Throughput"),Object(r.b)("p",null,"To achieve higher throughput the messages are not replicated across brokers and the acknowledgement can be set to only one broker. Expose resiliency to failures."),Object(r.b)("p",null,"The number of producers and consumers are aligned, and the number of partitions matches the number of consumers. All consumers are in the same consumer group. Measurement has to be done from the producer code.\nWith 12 producers on a 3 brokers cluster and small payload (128 bytes), with 24 consumers the measured throughput is around 2.3 M messages / second."),Object(r.b)("h2",null,"Payload size"),Object(r.b)("p",null,"From measurement tests done using Kafka producer performance tool, there is a 1/log(s) curve, where below 10k bytes the performances are correct and then slowly degrade from 3000 msg /s (10k bytes msg) to 65 msg/s (515kb msg)."),Object(r.b)("p",null,"To do performance test the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/IBM/event-streams-sample-producer"},"event-streams-sample-producer")," github provides producer tool in Java, using a group of threads to run in multi cores machine. This project can be dockerized, and deployed in k8s. It uses the kafka tool named: ",Object(r.b)("inlineCode",{parentName:"p"},"ProducerPerformance.java")," in the jar:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.kafka</groupId>\n  <artifactId>kafka-tools</artifactId>\n</dependency>\n")),Object(r.b)("h2",null,"Parameter considerations"),Object(r.b)("p",null,"There are a lot of factors and parameters that needs to be tuned to improve performance at the brokers threading level (",Object(r.b)("inlineCode",{parentName:"p"},"num.replica.fetchers, num.io.threads, num.network.threads, log.cleaner.threads")," ) and the pod resources constraints. See ",Object(r.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#configuration"},"configuration documentation"),"."),Object(r.b)("h2",null,"Openshift specifics"),Object(r.b)("p",null,"When exposing the kafka broker via Routes, the traffic is encrypted with TLS, so client needs to deal with TLS certificates and encryption. Routes are exposed via DNS and HAProxy router. The router will act as middleman between kafka clients and brokers, adding latency, and it can become bottleneck. The traffic generated by client needs to be sized and in case of the router needs to be scaled up, and even isolate the routing by adding a separate router for the kafka routes."),Object(r.b)("h1",null,"Disaster Recovery"),Object(r.b)("p",null,"With the current implementation it is recommended to have one cluster per data center / availability zone. Consumers and producers are co-located to the brokers cluster. When there are needs to keep some part of the data replicated in both data center, you need to assess what kind of data can be aggregated, and if Kafka mirroring tool can be used. The tool consumes from a source cluster, from a given topic, and produces to a destination cluster with the same named topic. It keeps the message key for partitioning, so order is preserved."),Object(r.b)("img",{src:"../images/ha-dc1.png",alt:"High availability cross data centers"}),Object(r.b)("p",null,"The above diagram is using Kafka MirrorMaker with a master to slave deployment. Within the data center 2, the brokers are here to manage the topics and events. When there is no consumer running, nothing happen. Consumers and producers can be started when DC1 fails. This is the active/passive model. In fact, we could have consumers within the DC2 processing topics to manage a read-only model, keeping in memory their projection view, as presented in the ",Object(r.b)("a",{parentName:"p",href:"../../patterns/cqrs/"},"CQRS pattern"),"."),Object(r.b)("p",null,"The second solution is to use one mirror maker in each site, for each topic. This is an active - active topology: consumers and producers are on both sites. But to avoid infinite loop, we need to use naming convention for the topic, or only produce in the cluster of the main topic. Consumers consume from the replicated topic."),Object(r.b)("img",{src:"../images/ha-dc2.png",alt:"High availability cross data centers"}),Object(r.b)("p",null,"When you want to deploy solution that spreads over multiple regions to support global streaming, you need to address the following challenges:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"How do you make data available to applications across multiple data centers?"),Object(r.b)("li",{parentName:"ul"},"How to serve data closer to the geography?"),Object(r.b)("li",{parentName:"ul"},"How to be compliant on regulations, like GDPR?"),Object(r.b)("li",{parentName:"ul"},"How to address no duplication of records?")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.confluent.io/blog/apache-kafka-2-4-latest-version-updates/"},"Kafka 2.4")," introduces the capability for a consumer to read messages from the closest replica using some rack-id and specific algorithm. This capability will help to extend the cluster to multiple data center and avoid having consumers going over WAN communication."),Object(r.b)("h1",null,"Solution Considerations"),Object(r.b)("p",null,"There are a set of design considerations to assess for each ",Object(r.b)("strong",{parentName:"p"},"Kafka")," solution:"),Object(r.b)("h2",null,"Topics"),Object(r.b)("p",null,"Performance is more a function of number of partitions than topics. Expect that each topic has at least one partition. When considering latency you should aim for limiting to hundreds of topic-partition per broker node."),Object(r.b)("p",null,"What of the most important question is what topics to use?. What is an event type? Should we use one topic to support multiple event types?\nLet define that an event type is linked to a main business entity like an Order, a ship, a FridgeredContainer. OrderCreated, OrderCancelled, OrderUpdated, OrderClosed are events linked to the states of the Order. The order of those events matter. So the natural approach is to use one topic per data type or schema, specially when using the topic as Event Sourcing where event order is important to build the audit log. You will use a unique partition to support that. The orderID is the partition key and all events related to the order are in the same topic."),Object(r.b)("p",null,"The important requirement to consider is the sequencing or event order. When event order is very important then use a unique partition, and use the entity unique identifier as key. Ordering is not preserved across partitions."),Object(r.b)("p",null,"When dealing with entity, independent entities may be in separate topics, when strongly related one may stay together."),Object(r.b)("p",null,"Other best practices:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When event order is important use the same topic and use the entity unique identifier as partition key."),Object(r.b)("li",{parentName:"ul"},"When two entities are related together by containment relationship then they can be in the same topic."),Object(r.b)("li",{parentName:"ul"},"Different entities are separated to different topics."),Object(r.b)("li",{parentName:"ul"},"It is possible to group topics in coarse grained one when we discover that several consumers are listening to the same topics."),Object(r.b)("li",{parentName:"ul"},"Clearly define the partition key as it could be an compound key based on multiple entities.")),Object(r.b)("p",null,"With ",Object(r.b)("strong",{parentName:"p"},"Kafka")," stream, state store or KTable, you should separate the changelog topic from the others."),Object(r.b)("h2",null,"Producers"),Object(r.b)("p",null,"When developing a record producer you need to assess the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"What is the expected throughput to send events? Event size * average throughput combined with the expected latency help to compute buffer size."),Object(r.b)("li",{parentName:"ul"},"Can the producer batch events together to send them in batch over one send operation?"),Object(r.b)("li",{parentName:"ul"},"Is there a risk for loosing communication? Tune the RETRIES_CONFIG and buffer size"),Object(r.b)("li",{parentName:"ul"},"Assess ",Object(r.b)("em",{parentName:"li"},"once to exactly once")," delivery requirement. Look at idempotent producer.")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"../kafka-producers-consumers/#kafka-producers"},"implementation considerations discussion")),Object(r.b)("h2",null,"Consumers"),Object(r.b)("p",null,"From the consumer point of view a set of items need to be addressed during design phase:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Do you need to group consumers for parallel consumption of events?"),Object(r.b)("li",{parentName:"ul"},"What is the processing done once the record is processed out of the topic? And how a record is supposed to be consumed?."),Object(r.b)("li",{parentName:"ul"},"How to persist consumer committed position? (the last offset that has been stored securely)"),Object(r.b)("li",{parentName:"ul"},"Assess if offsets need to be persisted outside of Kafka?. From version 0.9 offset management is more efficient, and synchronous or asynchronous operations can be done from the consumer code."),Object(r.b)("li",{parentName:"ul"},"Does record time sensitive, and it is possible that consumers fall behind, so when a consumer restarts he can bypass missed records?"),Object(r.b)("li",{parentName:"ul"},"Do the consumer needs to perform joins, aggregations between multiple partitions?")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"../kafka-producers-consumers/#kafka-consumers"},"implementation considerations discussion")),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"../../additional-reading/"},"also the compendium note")," for more readings."),Object(r.b)("h1",null,"Deployment"),Object(r.b)("p",null,"In this section we provide the instructions for getting kafka deployed in your vanilla kubernetes environment through the Strimzi kubernetes operator or getting the IBM Event Streams product (based on Kafka) deployed on your IBM Cloud Private/OpenShift cluster or in your IBM Cloud account as a managed service."),Object(r.b)("h2",null,"Kubernetes Operator"),Object(r.b)("p",null,"It is important to note that the deployment and management of stateful application in Kubernetes should, now, use the proposed ",Object(r.b)("a",{parentName:"p",href:"https://github.com/operator-framework"},"Operator Framework")," introduced by Red Hat and Google. One important contribution is the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/strimzi/strimzi-kafka-operator"},"Strimzi Kafka operator")," that simplifies the deployment of Kafka within k8s by adding a set of operators to deploy and manage Kafka clusters, topics, users and more."),Object(r.b)("h2",null,"IBM Event Streams"),Object(r.b)("p",null,"IBM Event Streams is an event-streaming platform based on the open-source Apache Kafka® project. It can be installed on IBM Cloud Private (ICP) cluster, OpenShift cluster or as a hosted service in IBM Cloud."),Object(r.b)("p",null,"Instructions for installing IBM Event Streams on your cluster as well as getting an instance as a hosted service in IBM Cloud can be found ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/"},"here")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-overview-advance-index-mdx-8c03e3838db8476b99ef.js.map