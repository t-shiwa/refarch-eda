(window.webpackJsonp=window.webpackJsonp||[]).push([[66,101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),s=a.n(o),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),u=a("TSYQ"),p=a.n(u),b=a("QH2O"),m=a.n(b),h=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(h.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.a.text},a)))))},f=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,s=r.subDirectory,c=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?Object(h.b)("div",{className:"bx--row "+f.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),k=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(h.b)("li",{key:e,className:p()((t={},t[k.selectedItem]=o,t),k.listItem)},Object(h.b)(i.Link,{className:k.link,to:""+l},e))}));return Object(h.b)("div",{className:k.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:k.list},o))))))},t}(r.a.Component),w=a("MjG9"),v=a("CzIb"),N=a("Asxa"),S=a("OIbQ"),T=a.n(S),x=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(N.c,{className:T.a.row},Object(h.b)(N.a,null,Object(h.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,u=void 0===o?{}:o,p=t.relativePagePath,b=t.titleType,m=u.tabs,f=u.title,j=u.theme,k=u.description,N=u.keywords,S=u.date,T=Object(v.a)().interiorTheme,K=Object(i.useStaticQuery)("2456312558").site.pathPrefix,A=K?n.pathname.replace(K,""):n.pathname,P=m?A.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",C=j||T;return Object(h.b)(l.a,{tabs:m,homepage:!1,theme:C,pageTitle:f,pageDescription:k,pageKeywords:N,titleType:b},Object(h.b)(d,{title:r?Object(h.b)(r,null):f,label:"label",tabs:m,theme:C}),m&&Object(h.b)(y,{title:f,slug:A,tabs:m,currentTab:P}),Object(h.b)(w.a,{padded:!0},a,Object(h.b)(g,{relativePagePath:p}),Object(h.b)(x,{date:S})),Object(h.b)(O.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:P}),Object(h.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Gn6w:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},l=s.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Basic questions"),Object(o.b)("h3",null,"What is Kafka?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"pub/sub middleware to share data between applications"),Object(o.b)("li",{parentName:"ul"},"Open source, started in 2011 by Linkedin"),Object(o.b)("li",{parentName:"ul"},"based on append log to persist immutable records ordered by arrival."),Object(o.b)("li",{parentName:"ul"},"support data partitioning, distributed brokers, horizontal scaling, low-latency and high throughput."),Object(o.b)("li",{parentName:"ul"},"producer has no knowledge of consumer"),Object(o.b)("li",{parentName:"ul"},"records stay even after being consumed"),Object(o.b)("li",{parentName:"ul"},"durability with replication to avoid loosing data for high availability")),Object(o.b)("h3",null,"What are the major components?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Topic, consumer, producer, brokers"),Object(o.b)("li",{parentName:"ul"},"Rich API to control the producer semantic, and consumer"),Object(o.b)("li",{parentName:"ul"},"Consumer groups"),Object(o.b)("li",{parentName:"ul"},"Kafka streams API to support data streaming with stateful operations and stream processing topology"),Object(o.b)("li",{parentName:"ul"},"Kafka connect for source and sink connection to external systems"),Object(o.b)("li",{parentName:"ul"},"Topic replication with Mirror Maker 2")),Object(o.b)("h3",null,"Major use cases?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Modern data pipeline with buffering to data lake"),Object(o.b)("li",{parentName:"ul"},"Data hub, to continuously expose business entities to event-driven applications and microservices"),Object(o.b)("li",{parentName:"ul"},"Real time analytics with aggregate computation, and complex event processing"),Object(o.b)("li",{parentName:"ul"},"The communication layer for Event-driven, reactive microservice.")),Object(o.b)("h3",null,"Why does Kafka use zookeeper?"),Object(o.b)("p",null,"Kafka as a distributed system using cluster, it needs to keep cluster states, sharing configuration like topic, assess which node is still alive within the cluster, support registering new node added to the cluster, being able to support dynamic restart. Zookeeper is an orchestrator for distributed system, it maintains Kafka cluster integrity, select broker leader… "),Object(o.b)("p",null,"Zookeeper is also used to manage offset commit, and to the leader selection process."),Object(o.b)("h3",null,"What is a replica?"),Object(o.b)("p",null,"A lit of nodes responsible to participate into the data replication process for a given partition. "),Object(o.b)("p",null,"It is a critical feature to ensure durability, be able to continue to consume records, or to ensure a certain level of data loss safety is guaranteed when producing records."),Object(o.b)("h3",null,"What are a leader and follower in Kafka?"),Object(o.b)("p",null,"Topic has 1 to many partition, which are append logs. Every partition in Kafka has a server that plays the role of ",Object(o.b)("strong",{parentName:"p"},"leader"),". When replication is set in a topic, follower brokers will pull data from the leader to ensure replication, up to the specified replication factor."),Object(o.b)("p",null,"If the leader fails, one of the followers needs to take over as the leader’s role. The leader election process involves zookeeper and assess which follower was the most in-synch with the leader."),Object(o.b)("p",null,"Leader is the end point for read and write operations on the partition. (Exception is the new feature to read from local follower)."),Object(o.b)("p",null,"To get the list of In-synch Replication for a given topic the following tool can be used:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"kafka-topics.sh --bootstrap-server :9092 --describe --topic <topicname>\n")),Object(o.b)("h3",null,"What is Offset?"),Object(o.b)("p",null,"A unique identifier of records inside a partition. It is automatically created by the broker, and producer can get it from the broker response."),Object(o.b)("p",null,"Consumer uses it to commit its read. It means, in case of consumer restarts, it will read from the last committed offset."),Object(o.b)("h3",null,"What is a consumer group?"),Object(o.b)("p",null,"It groups consumers of one to many topics. Each partition is consumed by exactly one consumer within each subscribing consumer group."),Object(o.b)("p",null,"Consumer group is specified via the ",Object(o.b)("inlineCode",{parentName:"p"},"group.id")," consumer’s property, and when consumers subscribe to topic(s)."),Object(o.b)("p",null,"There is a protocol to manage consumers within a group so that partition can be reallocated when a consumer lefts the group. The ",Object(o.b)("em",{parentName:"p"},"group leader")," is responsible to do the partition assignment."),Object(o.b)("p",null,"When using the ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#consumerconfigs_group.instance.id"},"group.instance.id")," properties, consumer is treated as a static member, which means there will be no partition rebalance when consumer lefts a group for a short time period. When not set the group coordinator (a broker) will allocate ids to group members, and reallocation will occur. For Kafka Streams application it is recommended to use static membership."),Object(o.b)("p",null,"Brokers keep offsets until a ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#brokerconfigs_offsets.retention.minutes"},"retention period")," within which consumer group can lose all its consumers. After that period, offsets are discarded. The consumer group can be deleted manually, or automatically when the last committed offset for that group expires."),Object(o.b)("p",null,"When the group coordinator receives an OffsetCommitRequest, it appends the request to a special compacted Kafka topic named __consumer_offsets. Ack from the broker is done once all replicas on this hidden topics are successful."),Object(o.b)("p",null,"The tool ",Object(o.b)("inlineCode",{parentName:"p"},"kafka-consumer-group.sh")," helps getting details of consumer group:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"# Inside a Kafka broker container\nbin/kafka-consumer-groups.sh --bootstrap-server kafka:9092 --describe --group order-group --members --verbose\n")),Object(o.b)("h3",null,"Support to multi-tenancy?"),Object(o.b)("p",null,"Multi-tenant means multiple different groups of application can produce and consumer messages isolated from other. So by constructs, topics and brokers are multi-tenant.\nNow the control will be at the access control level policy, the use of service account, and naming convention on the topic name.\nConsumer and producer authenticate themselves using dedicated service account users, with SCRAM user or Mutual TLS user. Each topic can have security policy to control read, write, creation operations."),Object(o.b)("h2",null,"How client access Kafka cluster metadata?"),Object(o.b)("p",null,"Provide a list of Kafka brokers, minimum two, so the client API will get the metadata once connected to one of the broker."),Object(o.b)("h2",null,"How to get at most once delivery?"),Object(o.b)("p",null,"Set producer acknowledge level (acks) property to 0 or 1."),Object(o.b)("h2",null,"How to support exactly once delivery?"),Object(o.b)("p",null,"The goal is to address that if a producer sends a message twice the system will send only one message to the consumer, and once the consumer commits the read offset, it will not receive the message again even if it restarts."),Object(o.b)("p",null,"See the section in the producer implementation considerations ",Object(o.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-eda/technology/kafka-producers-consumers/#how-to-support-exactly-once-delivery"},"note"),"."),Object(o.b)("p",null,"The consumer needs to always read from its last committed offset."),Object(o.b)("p",null,"Also it is important to note that the Kafka Stream API supports exactly once semantics with the config: ",Object(o.b)("inlineCode",{parentName:"p"},"processing.guarantee=exactly_once"),". Each task within a read-process-write flow may fail so this setting is important to be sure the right answer is delivered, even in case of task failure, and the process is executed exactly once."),Object(o.b)("p",null,"Exactly-once delivery for other destination systems generally requires cooperation with such systems which may be possible by using the offset processing."),Object(o.b)("h2",null,"What is range partition assignment strategy?"),Object(o.b)("p",null,"There are multiple partition assignment strategy for a consumer, part of a consumer group , to get its partition to fetch data from. Members of the consumer group subscribe to the topics they are interested in and forward their subscriptions to a Kafka broker serving as the group coordinator. The coordinator selects one member to perform the group assignment and propagates the subscriptions of all members to it. Then assign(Cluster, GroupSubscription) is called to perform the assignment and the results are forwarded back to each respective members."),Object(o.b)("p",null,"Range assignor works on a per-topic basis: it lays out the available partitions in numeric order and the consumers in lexicographic order, and assign partition to each consumer so partition with the same id will be in the same consumer: topic-1-part-0 and topic-2-part-0 will be processed by consumer-0"),Object(o.b)("h2",null,"What is sticky assignor?"),Object(o.b)("p",null,"The CooperativeStickyAssignor helps supporting incremental cooperative rebalancing to the clients’ group protocol, which allows consumers to keep all of their assigned partitions during a rebalance and at the end revoke only those which must be migrated to another consumer for overall cluster balance."),Object(o.b)("p",null,"The goal is to reduce unnecessary downtime due to unnecessary partition migration, by leveraging the sticky assignor which link consumer to partition id. See ",Object(o.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/KAFKA/KIP-429%3A+Kafka+Consumer+Incremental+Rebalance+Protocol"},"KIP 429 for details.")," "),Object(o.b)("h2",null,"How to get an homogeneous distribution of message to partitions?"),Object(o.b)("p",null,"Design the message key and hash coding for even distributed. Or implement a customer partitioner by implementing the ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/24/javadoc/?org/apache/kafka/clients/producer/Partitioner.html"},"Partitioner")," interface. "),Object(o.b)("h2",null,"How to ensure efficient join between two topics?"),Object(o.b)("p",null,"Need to use co-partitioning, which means having the same key in both topic, the same number of partitions and the same producer partitioner, which most likely should be the default one that uses the following formula: ",Object(o.b)("em",{parentName:"p"},"partition = hash(key) % numPartitions"),"."),Object(o.b)("h2",null,"What is transaction in Kafka?"),Object(o.b)("p",null,"Producer can use transaction begin, commit and rollback API while publishing events to a multi partition topic. This is done by setting a unique transactionId as part of its configuration (with idempotence and min  inflight record set to 1).  Either all messages are successfully written or none of them are."),Object(o.b)("p",null,"There are some producer exception to consider to abort the transaction: any KafkaException for sure, but also OutOfSequenceTx which may happen when the PID is greater than the last one seen by the producer."),Object(o.b)("p",null,"See explanations ",Object(o.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/refarch-eda/technology/kafka-producers-consumers/#how-to-support-exactly-once-delivery"},"here"),"."),Object(o.b)("p",null,"And the ",Object(o.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/KAFKA/KIP-98+-+Exactly+Once+Delivery+and+Transactional+Messaging"},"KIP 98")),Object(o.b)("h2",null,"What is the high watermark?"),Object(o.b)("p",null,"The high watermark offset is the offset of the last message that was successfully copied to all of the log’s replicas. A consumer can only read up to the high watermark offset to prevent reading un-replicated messages."),Object(o.b)("h2",null,"Retention time for topic what does it mean?"),Object(o.b)("p",null,"The message sent to a cluster is kept for a max period of time or until a max size is reached. Those topic properties are: ",Object(o.b)("inlineCode",{parentName:"p"},"retention.ms")," and ",Object(o.b)("inlineCode",{parentName:"p"},"retention.bytes"),". Messages stay in the log even if they are consumed. The oldest messages are marked for deletion or compaction depending of the cleanup policy (delete or compact) set to ",Object(o.b)("inlineCode",{parentName:"p"},"cleanup.policy")," topic’s parameter."),Object(o.b)("p",null,"See the Kafka documentation on ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#topicconfigs"},"topic configuration parameters"),"."),Object(o.b)("p",null,"Here is a command to create a topic with specific retention properties:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"bin/kafka-configs --zookeeper XX.XX.XX.XX:2181 --entity-type topics --entity-name orders --alter --add-config  retention.ms=55000 --add-config  retention.byte=100000\n")),Object(o.b)("p",null,"But there is also the ",Object(o.b)("inlineCode",{parentName:"p"},"offsets.retention.minutes")," property, set at the cluster level to control when the offset information will be deleted. It is defaulted to 1 day, but the max possible value is 7 days. This is to avoid keeping too much information in the broker memory and avoid to miss data when consumers do not run continuously. So consumers need to commit their offset. If the consumer settings define: ",Object(o.b)("inlineCode",{parentName:"p"},"auto.offset.reset=earliest"),", the consumer will reprocess all the events each time it restarts, (or skips to the latest if set to ",Object(o.b)("inlineCode",{parentName:"p"},"latest"),"). When using ",Object(o.b)("inlineCode",{parentName:"p"},"latest"),", if the consumers are offline for more than the offsets retention time window, they will lose events."),Object(o.b)("h2",null,"What are the topic characteristics I need to define during requirements?"),Object(o.b)("p",null,"This is a requirement gathering related question, to understand what need to be done for configuration topic configuration but also consumer and producer configuration, as well as retention strategy."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of brokers in the cluster"),Object(o.b)("li",{parentName:"ul"},"retention time and size"),Object(o.b)("li",{parentName:"ul"},"Need for HA, set replicas to number of broker or at least the value of 3, with in-synch replica to 2"),Object(o.b)("li",{parentName:"ul"},"Type of data to transport to assess message size"),Object(o.b)("li",{parentName:"ul"},"Plan to use schema management to control change to the payload definition"),Object(o.b)("li",{parentName:"ul"},"volume per day with peak and average"),Object(o.b)("li",{parentName:"ul"},"Need to do geo replication to other Kafka cluster"),Object(o.b)("li",{parentName:"ul"},"Network filesystem used on the target Kubernetes cluster and current storage class")),Object(o.b)("h2",null,"What are the impacts of having not enough resource for Kafka?"),Object(o.b)("p",null,"The table in this ",Object(o.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/installing/prerequisites/#helm-resource-requirements"},"Event Streams product documentation")," illustrates the resource requirements for a getting started cluster. When resources start to be at stress, then Kafka communication to ZooKeeper and/or other Kafka brokers can suffer resulting in out-of-sync partitions and container restarts perpetuating the issue. Resource constraints is one of the first things we consider when diagnosing ES issues."),Object(o.b)("h2",null,"What should we do for queue full exception or timeout exception on producer?"),Object(o.b)("p",null,"The brokers are running behind, so we need to add more brokers and redistribute partitions."),Object(o.b)("h2",null,"How to send large messages?"),Object(o.b)("p",null,"We can set some properties at the broker, topic, consumer and producer level:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Broker: consider the ",Object(o.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#brokerconfigs_message.max.bytes"},"message.max.bytes")," and ",Object(o.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#brokerconfigs_replica.fetch.max.bytes"},"replica.fetch.max.bytes")),Object(o.b)("li",{parentName:"ul"},"Consumer: ",Object(o.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#consumerconfigs_max.partition.fetch.bytes"},"max.partition.fetch.bytes"),". Records are fetched in batches by the consumer, so this properties gives the max amount of data per partition the server will return. Default 1 Megabyte")),Object(o.b)("h2",null,"How to maximize throughput?"),Object(o.b)("p",null,"For producer if you want to maximize throughput over low latency, set ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#producerconfigs_batch.size"},"batch.size")," and ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#producerconfigs_linger.ms"},"linger.ms")," to higher value. Linger delay producer, it will wait for up to the given delay to allow other records to be sent so that the sends can be batched together."),Object(o.b)("h2",null,"Why Kafka Stream applications may impact cluster performance?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"They may use internal hidden topics to persist their states for Ktable and GlobalKTable."),Object(o.b)("li",{parentName:"ul"},"Process input and output topics")),Object(o.b)("h2",null,"How message schema version is propagated?"),Object(o.b)("p",null,"The record includes a byte with the version number from the schema registry."),Object(o.b)("h2",null,"Consumers do not see message in topic, what happens?"),Object(o.b)("p",null,"The brokers may have an issue on this partition. If a broker, part of the ISR list fails, then new leader election may delay the broker commit from a producer."),Object(o.b)("p",null,"The consumer has a communication issue, or fails, so the consumer group rebalance is underway."),Object(o.b)("h2",null,"How compression schema used is known by the consumer?"),Object(o.b)("p",null,"The record header includes such metadata. So it is possible to have different schema per record."),Object(o.b)("h2",null,"What does out-of-synch partition mean and occur?"),Object(o.b)("p",null,"With partition leader and replication to the followers, the number of in-synch replicas is at least the number of expected replicas. For example for a replicas = 3 the in-synch is set to 2, and it represents the minimum number of replicas that must acknowledge a write for the write to be considered successful. The record is considered “committed” when all ISRs for a partition wrote to their log. Only committed records are readable from consumer."),Object(o.b)("p",null,"So out-of-synch will happen if the followers are not able to send their acknowledge to the replica leader as quickly as expected."),Object(o.b)("h2",null,"Security in Kafka"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Encrypt data in transit between producer and Kafka brokers"),Object(o.b)("li",{parentName:"ul"},"Client authentication"),Object(o.b)("li",{parentName:"ul"},"Client authorization")),Object(o.b)("h2",null,"How to protect data at rest?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use encrypted file system for each brokers"),Object(o.b)("li",{parentName:"ul"},"Encrypt data at the producer level, using some API, and then decode at the consumer level. The data in the appeld log will be encrypted.")),Object(o.b)("h2",null,"How to remove personal identifying information?"),Object(o.b)("p",null,"From the source connector, it is possible to add processing class to process the records before publishing them to Kafka topic, so that any Kafka Streams apps will not see PII."),Object(o.b)("h2",null,"How to handle variable workload with Kafka Connector source connector?"),Object(o.b)("p",null,"Increase and decrease the number of Kafka connect workers based upon current application load."),Object(o.b)("h2",null,"Competitors to Kafka"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:""},"NATS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://vectorized.io/"},"Redpanda")," a Modern streaming platform for mission critical workloads, and is compatible with Kafka API. It is a cluster of brokers without any zookeepers. It also leverage the SSD technology to improve I/O operations."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://jbcodeforce.github.io/architecture/aws/#kinesis"},"AWS Kinesis"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cloud service, managed by AWS staff, paid as you go, proportional to the shard (like partition) used."),Object(o.b)("li",{parentName:"ul"},"24h to 7 days persistence"),Object(o.b)("li",{parentName:"ul"},"Number of shards are adaptable with throughput."),Object(o.b)("li",{parentName:"ul"},"Uses the concept of Kinesis data streams, which uses shards: data records are composed of a sequence number, a partition key and a data blob."),Object(o.b)("li",{parentName:"ul"},"restrictions on message size (1 MB) and consumption rate of messages (5 reads /s, < 2MB per shard, 1000 write /s)"),Object(o.b)("li",{parentName:"ul"},"Server side encryption using master key managed by AWS KMS"))),Object(o.b)("li",{parentName:"ul"},"GCP Pub/sub"),Object(o.b)("li",{parentName:"ul"},"Solace"),Object(o.b)("li",{parentName:"ul"},"Active MQ:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Java based messaging server to be the JMS reference implementation, so it supports transactional messaging. "),Object(o.b)("li",{parentName:"ul"},"various messaging protocols including AMQP, STOMP, and MQTT"),Object(o.b)("li",{parentName:"ul"},"It maintains the delivery state of every message resulting in lower throughput."),Object(o.b)("li",{parentName:"ul"},"Can apply JMS message selector to consumer specific message"),Object(o.b)("li",{parentName:"ul"},"Point to point or pub/sub, but servers push messages to consumer/subscribers"),Object(o.b)("li",{parentName:"ul"},"Performance of both queue and topic degrades as the number of consumers rises"))),Object(o.b)("li",{parentName:"ul"},"Rabbit MQ:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Support queues, with messages removed once consumed"),Object(o.b)("li",{parentName:"ul"},"Add the concept of Exchange to route message to queues"),Object(o.b)("li",{parentName:"ul"},"Limited throughput, but can send large message"),Object(o.b)("li",{parentName:"ul"},"Support JMS, AMQP protocols, and participation to transaction"),Object(o.b)("li",{parentName:"ul"},"Smart broker / dumb consumer model that focuses on consistently delivering messages to consumers.")))),Object(o.b)("h2",null,"Differences between Akka and Kafka?"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://akka.io/"},"Akka")," is a open source toolkit for Scala or Java to simplify multithreading programming and makes application more reactive by adopting an asynchronous mechanism to access to io: database or HTTP request. To support asynchronous communication between ‘actors’, it uses messaging, internal to the JVM.\nKafka is part of the architecture, while Akka is an implementation choice for one of the component of the business application deployed inside the architecture."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://vertx.io/"},"vert.x")," is another open source implementation of such internal messaging mechanism but supporting more language:  Java, Groovy, Ruby, JavaScript, Ceylon, Scala, and Kotlin."),Object(o.b)("h2",null,"Run Kafka Test Container with TopologyTestDriver"),Object(o.b)("p",null,"Topology Test Driver is used without kafka, so there is no real need to use test container. "),Object(o.b)("h2",null,"Event streams resource requirements"),Object(o.b)("p",null,"See the ",Object(o.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/installing/prerequisites/#helm-resource-requirements"},"detailed tables")," in the product documentation."),Object(o.b)("h2",null,"Security setting"),Object(o.b)("p",null,"On Kubernetes, Kafka can be configured with external and internal URLs. With Strimzi internal URLs are using TLS or Plain authentication, then TLS for encryption. "),Object(o.b)("p",null,"If no authentication property is specified then the listener does not authenticate clients which connect through that listener. The listener will accept all connections without authentication."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Mutual TLS authentication for internal communication looks like:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"- name: tls\n    port: 9093\n    type: internal\n    tls: true\n    authentication:\n      type: tls\n")),Object(o.b)("p",null,"To connect any app (producer, consumer) we need a TLS user like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"piVersion: kafka.strimzi.io/v1beta1\nkind: KafkaUser\nmetadata:\n  name: tls-user\n  labels:\n    strimzi.io/cluster: vaccine-kafka\nspec:\n  authentication:\n    type: tls\n")),Object(o.b)("p",null,"Then the following configurations need to be done for each app. For example in Quarkus app, we need to specify where to find the client certificate (for each Kafka TLS user a secret is created with the certificate (ca.crt) and a user password)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"oc describe secret tls-user\nData\n====\nca.crt:         1164 bytes\nuser.crt:       1009 bytes\nuser.key:       1704 bytes\nuser.p12:       2374 bytes\nuser.password:  12 bytes\n")),Object(o.b)("p",null,"For Java client we need the following security settings, to specify from which secret to get the keystore password and certificate. The certificate will be mounted to ",Object(o.b)("inlineCode",{parentName:"p"},"/deployments/certs/user"),". "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"%prod.kafka.security.protocol=SSL\n%prod.kafka.ssl.keystore.location=/deployments/certs/user/user.p12\n%prod.kafka.ssl.keystore.type=PKCS12\nquarkus.openshift.env.mapping.KAFKA_SSL_KEYSTORE_PASSWORD.from-secret=${KAFKA_USER:tls-user}\nquarkus.openshift.env.mapping.KAFKA_SSL_KEYSTORE_PASSWORD.with-key=user.password\nquarkus.openshift.mounts.user-cert.path=/deployments/certs/user\nquarkus.openshift.secret-volumes.user-cert.secret-name=${KAFKA_USER:tls-user}\n# To validate server side certificate we will mount it too with the following declaration\nquarkus.openshift.env.mapping.KAFKA_SSL_TRUSTSTORE_PASSWORD.from-secret=${KAFKA_CA_CERT_NAME:kafka-cluster-ca-cert}\nquarkus.openshift.env.mapping.KAFKA_SSL_TRUSTSTORE_PASSWORD.with-key=ca.password\nquarkus.openshift.mounts.kafka-cert.path=/deployments/certs/server\nquarkus.openshift.secret-volumes.kafka-cert.secret-name=${KAFKA_CA_CERT_NAME:kafka-cluster-ca-cert}\n")),Object(o.b)("p",null,"For the server side certificate, it will be in a truststore, which is mounted to  ",Object(o.b)("inlineCode",{parentName:"p"},"/deployments/certs/server")," and from a secret (this secret is created at the cluster level)."),Object(o.b)("p",null,"Also because we also use TLS for encryption we need:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"%prod.kafka.ssl.protocol=TLSv1.2\n")),Object(o.b)("p",null,"Mutual TLS authentication is always used for the communication between Kafka brokers and ZooKeeper pods. For mutual, or two-way, authentication, both the server and the client present certificates."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"SCRAM: (Salted Challenge Response Authentication Mechanism) is an authentication protocol that can establish mutual authentication using passwords. Strimzi can configure Kafka to use SASL (Simple Authentication and Security Layer) SCRAM-SHA-512 to provide authentication on both unencrypted and encrypted client connections."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The listener declaration:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"")))),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"name: external\nport: 9094\ntype: route\ntls: true\nauthentication:\ntype: scram-sha-512",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"")))),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Need a scram-user:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kafka.strimzi.io/v1beta1\nkind: KafkaUser\nmetadata:\nname: scram-user\nlabels:\n    strimzi.io/cluster: vaccine-kafka\nspec:\nauthentication:\n    type: scram-sha-512\n")))))),Object(o.b)("p",null,"Then the app properties need:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"security.protocol=SASL_SSL\n%prod.quarkus.openshift.env.mapping.KAFKA_SSL_TRUSTSTORE_PASSWORD.from-secret=${KAFKA_CA_CERT_NAME:kafka-cluster-ca-cert}\n%prod.quarkus.openshift.env.mapping.KAFKA_SSL_TRUSTSTORE_PASSWORD.with-key=ca.password\n%prod.quarkus.openshift.env.mapping.KAFKA_SCRAM_PWD.from-secret=${KAFKA_USER:scram-user}\n%prod.quarkus.openshift.env.mapping.KAFKA_SCRAM_PWD.with-key=password\n%prod.quarkus.openshift.mounts.kafka-cert.path=/deployments/certs/server\n%prod.quarkus.openshift.secret-volumes.kafka-cert.secret-name=${KAFKA_CA_CERT_NAME:kafka-cluster-ca-cert}\n")),Object(o.b)("h2",null,"Verify consumer connection"),Object(o.b)("p",null,"Here is an example of TLS authentication for Event streams"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"ConsumerConfig values: \n    bootstrap.servers = [eda-dev-kafka-bootstrap.eventstreams.svc:9093]\n    check.crcs = true\n    client.dns.lookup = default\n    client.id = cold-chain-agent-c2c11228-d876-4db2-a16a-ea7826e358d2-StreamThread-1-restore-consumer\n    client.rack = \n    connections.max.idle.ms = 540000\n    default.api.timeout.ms = 60000\n    enable.auto.commit = false\n    exclude.internal.topics = true\n    fetch.max.bytes = 52428800\n    fetch.max.wait.ms = 500\n    fetch.min.bytes = 1\n    group.id = null\n    group.instance.id = null\n    heartbeat.interval.ms = 3000\n    interceptor.classes = []\n    internal.leave.group.on.close = false\n    isolation.level = read_uncommitted\n    key.deserializer = class org.apache.kafka.common.serialization.ByteArrayDeserializer\n    sasl.client.callback.handler.class = null\n    sasl.jaas.config = null\n    sasl.kerberos.kinit.cmd = /usr/bin/kinit\n    sasl.kerberos.min.time.before.relogin = 60000\n    sasl.kerberos.service.name = null\n    sasl.kerberos.ticket.renew.jitter = 0.05\n    sasl.kerberos.ticket.renew.window.factor = 0.8\n    sasl.login.callback.handler.class = null\n    sasl.login.class = null\n    sasl.login.refresh.buffer.seconds = 300\n    sasl.login.refresh.min.period.seconds = 60\n    sasl.login.refresh.window.factor = 0.8\n    sasl.login.refresh.window.jitter = 0.05\n    sasl.mechanism = GSSAPI\n    security.protocol = SSL\n    security.providers = null\n    send.buffer.bytes = 131072\n    session.timeout.ms = 10000\n    ssl.cipher.suites = null\n    ssl.enabled.protocols = [TLSv1.2]\n    ssl.endpoint.identification.algorithm = https\n    ssl.key.password = null\n    ssl.keymanager.algorithm = SunX509\n    ssl.keystore.location = /deployments/certs/user/user.p12\n    ssl.keystore.password = [hidden]\n    ssl.keystore.type = PKCS12\n    ssl.protocol = TLSv1.2\n    ssl.provider = null\n    ssl.secure.random.implementation = null\n    ssl.trustmanager.algorithm = PKIX\n    ssl.truststore.location = /deployments/certs/server/ca.p12\n    ssl.truststore.password = [hidden]\n    ssl.truststore.type = PKCS12\n    value.deserializer = class org.apache.kafka.common.serialization.ByteArrayDeserializer\n")),Object(o.b)("h2",null,"Other FAQs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-faqs"},"IBM Event streams on Cloud FAQ")," ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/KAFKA/FAQ#FAQ-HowareKafkabrokersdependonZookeeper?"},"FAQ from Confluent")))))}u.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-faq-index-mdx-d7aef34299d53ab40e50.js.map