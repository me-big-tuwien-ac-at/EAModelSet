const e="https://me.big.tuwien.ac.at/EAModelSet/1b494c8e",i="1b494c8e",a="Pacemaker_Android",t="",s=["XML","CSV","JSON","ARCHIMATE"],d="GitHub",n="raw-data/github/archimate/pacemaker_architecture.archimate",o="ARCHIMATE",c="29-06-2023 09:31:10",p=[],r=[],y="en",l=[{id:"978c6331",name:"Pacemaker User",type:"BusinessRole",layer:"business"},{id:"62416aba",name:"Activity Capabilities",type:"BusinessFunction",layer:"business"},{id:"b80da905",name:"List, Log, Create and Delete Activities",type:"BusinessFunction",layer:"business"},{id:"c7214f66",name:"Progress Reports on Finished Activities",type:"BusinessFunction",layer:"business"},{id:"368ac454",name:"Suggested Workouts Based on Desired Results and Previous Activities",type:"BusinessFunction",layer:"business"},{id:"37c9e605",name:"Compare Workouts with Friends",type:"BusinessFunction",layer:"business"},{id:"37c60a8c",name:"Friend Capabilities",type:"BusinessFunction",layer:"business"},{id:"b7c91763",name:"List and Add/Delete Friends",type:"BusinessFunction",layer:"business"},{id:"fe62888a",name:"Dashboard List",type:"BusinessFunction",layer:"business"},{id:"f08de984",name:"New Activity Created in Android App",type:"BusinessEvent",layer:"business"},{id:"8a03d2d5",name:"Activity Edited in Android App",type:"BusinessEvent",layer:"business"},{id:"bc34587d",name:"Friend Accepted in Android App",type:"BusinessEvent",layer:"business"},{id:"561ad9a2",name:"Friend Added in Android App",type:"BusinessEvent",layer:"business"},{id:"7a5e7c12",name:"Friend Deleted in Android App",type:"BusinessEvent",layer:"business"},{id:"eac12f97",name:"REST POST/PUT/DELETE Request",type:"BusinessEvent",layer:"business"},{id:"13607afb",name:"Pacemaker Website",type:"BusinessProcess",layer:"business"},{id:"70443a4e",name:"DELETE request",type:"BusinessFunction",layer:"business"},{id:"76aaba18",name:"DELETE Request",type:"BusinessProcess",layer:"business"},{id:"38634daa",name:"If Item is Found",type:"BusinessProcess",layer:"business"},{id:"85b1a746",name:"Process Request",type:"BusinessProcess",layer:"business"},{id:"91299eaf",name:"PUT Request",type:"BusinessProcess",layer:"business"},{id:"738452bd",name:"POST Request",type:"BusinessProcess",layer:"business"},{id:"7d2acee8",name:"JSON to Object Parser If Needed",type:"BusinessProcess",layer:"business"},{id:"a21ed30e",name:"Log In",type:"BusinessFunction",layer:"business"},{id:"07ab1dec",name:"Select a Displaying Option in Dashboard",type:"BusinessProcess",layer:"business"},{id:"1d36f3b5",name:"Android (Local) Data Processing",type:"BusinessProcess",layer:"business"},{id:"da23df9f",name:"List Activities",type:"BusinessProcess",layer:"business"},{id:"d12efb7e",name:"GET Activities Request to Website",type:"BusinessProcess",layer:"business"},{id:"663a47fe",name:"Render Obtained Activites via an Activity Adapter",type:"BusinessProcess",layer:"business"},{id:"3edb29cd",name:"Render Obtained Results to Screen",type:"BusinessProcess",layer:"business"},{id:"972e80d6",name:"JSON to Activity Objects",type:"BusinessProcess",layer:"business"},{id:"75cea3b2",name:"Get Activities",type:"BusinessProcess",layer:"business"},{id:"6b8eecdb",name:"GET Activity Request to Website",type:"BusinessProcess",layer:"business"},{id:"ee310135",name:"JSON to Activity Objects",type:"BusinessProcess",layer:"business"},{id:"7c4bd915",name:"Get Friends",type:"BusinessProcess",layer:"business"},{id:"2965925a",name:"GET Friends Request to Website",type:"BusinessProcess",layer:"business"},{id:"f9d73313",name:"JSON to Friend Objects",type:"BusinessProcess",layer:"business"},{id:"034ed501",name:"Progress Reports",type:"BusinessProcess",layer:"business"},{id:"60990ebd",name:"Process Finished Activities",type:"BusinessProcess",layer:"business"},{id:"7bf89b59",name:"Calculate Progress",type:"BusinessProcess",layer:"business"},{id:"1d4fc2cb",name:"Suggested Workouts",type:"BusinessProcess",layer:"business"},{id:"ef9acb01",name:"Get Finished Activities",type:"BusinessProcess",layer:"business"},{id:"38958b33",name:"Calculate Suggested Workouts",type:"BusinessProcess",layer:"business"},{id:"4a4002be",name:"Compare Workouts",type:"BusinessProcess",layer:"business"},{id:"b13be432",name:"User",type:"BusinessProcess",layer:"business"},{id:"32d1c70c",name:"Friend",type:"BusinessProcess",layer:"business"},{id:"eb9e2266",name:"Compare",type:"BusinessProcess",layer:"business"},{id:"1a06f27b",name:"Extract",type:"BusinessProcess",layer:"business"},{id:"ce03f4a8",name:"Transform",type:"BusinessProcess",layer:"business"},{id:"50b79f4a",name:"Load",type:"BusinessProcess",layer:"business"},{id:"b106e071",name:"Android Screen",type:"BusinessObject",layer:"business"},{id:"616d7129",name:"Pacemaker Database (MySQL)",type:"ApplicationComponent",layer:"application"},{id:"bda0aa0d",name:"User Activities",type:"DataObject",layer:"application"},{id:"9f783976",name:"Distnace (km)",type:"DataObject",layer:"application"},{id:"e2a11390",name:"Exercise Type (Run, Walk, etc.)",type:"DataObject",layer:"application"},{id:"18b01dd8",name:"Location",type:"DataObject",layer:"application"},{id:"3f9d2fb7",name:"Activity Start Time",type:"DataObject",layer:"application"},{id:"b75ce66c",name:"Activity Duration",type:"DataObject",layer:"application"},{id:"a29bac60",name:"User Friends",type:"DataObject",layer:"application"},{id:"5cb5a2dc",name:"User Id",type:"DataObject",layer:"application"},{id:"e0421bf6",name:"Friend Id",type:"DataObject",layer:"application"},{id:"485e08f7",name:"Has Friend Accepted Request",type:"DataObject",layer:"application"},{id:"1bb71afd",name:"Activity Functions",type:"ApplicationFunction",layer:"application"},{id:"add89549",name:"Pacemaker Dashboard",type:"ApplicationComponent",layer:"application"},{id:"721a92ff",name:"List Activities",type:"ApplicationFunction",layer:"application"},{id:"4dbf1be8",name:"Edit Activity",type:"ApplicationFunction",layer:"application"},{id:"0147da37",name:"Create Activity",type:"ApplicationFunction",layer:"application"},{id:"40b8f964",name:"Progress Reports",type:"ApplicationFunction",layer:"application"},{id:"57ac8972",name:"Suggested Workouts",type:"ApplicationFunction",layer:"application"},{id:"307e9789",name:"Friends List",type:"ApplicationFunction",layer:"application"},{id:"504cd33f",name:"Accept Friends",type:"ApplicationFunction",layer:"application"},{id:"f8f555bd",name:"Add Friends",type:"ApplicationFunction",layer:"application"},{id:"f12d7f4b",name:"Logout",type:"ApplicationFunction",layer:"application"},{id:"520f8ee9",name:"User Authentication",type:"ApplicationFunction",layer:"application"},{id:"3502aa1d",name:"Inbound Port ( HTTP : REST)",type:"ApplicationInterface",layer:"application"},{id:"288a1950",name:"Inbound Adapters",type:"ApplicationComponent",layer:"application"},{id:"adf8f973",name:"JSON to Object",type:"ApplicationFunction",layer:"application"},{id:"5c5e9c4d",name:"Pacemaker Website",type:"ApplicationCollaboration",layer:"application"},{id:"a5672327",name:"Application Components",type:"ApplicationComponent",layer:"application"},{id:"3b54763c",name:"Outbound Adapter",type:"ApplicationComponent",layer:"application"},{id:"b20aa0ab",name:"Object to JSON",type:"ApplicationFunction",layer:"application"},{id:"1f423739",name:"Outbound Port (HTTP : REST)",type:"ApplicationInterface",layer:"application"},{id:"ce687eac",name:"Web Desktop UI",type:"ApplicationInterface",layer:"application"},{id:"8974e93e",name:"Android Mobile App",type:"ApplicationComponent",layer:"application"},{id:"9cce3ebf",name:"Activity Tracking",type:"ApplicationFunction",layer:"application"},{id:"410fa20d",name:"Friends",type:"ApplicationFunction",layer:"application"},{id:"9f835ad9",name:"Pacemaker Website Endpoint",type:"ApplicationComponent",layer:"application"},{id:"217e033f",name:"Activities",type:"DataObject",layer:"application"},{id:"fd416fed",name:"Users",type:"DataObject",layer:"application"},{id:"344ea9d9",name:"Friends",type:"DataObject",layer:"application"},{id:"c3e63403",name:"Activity Calculations",type:"ApplicationComponent",layer:"application"},{id:"f48f1186",name:"Android Application",type:"ApplicationInterface",layer:"application"},{id:"37f21007",name:"Webserver Component",type:"ApplicationComponent",layer:"application"},{id:"d433ecf6",name:"Request Activities",type:"ApplicationFunction",layer:"application"},{id:"48e3c3fe",name:"Request Users",type:"ApplicationFunction",layer:"application"},{id:"85ea1089",name:"REST Request",type:"ApplicationFunction",layer:"application"},{id:"75abbe0c",name:"Pacemaker MySQL Database",type:"SystemSoftware",layer:"technology"},{id:"2dcebf5c",name:"Persist Data to DB",type:"TechnologyFunction",layer:"technology"},{id:"c9f6dda1",name:"Channel",type:"Path",layer:"technology"},{id:"c62bf266",name:"Challen",type:"Path",layer:"technology"},{id:"c69bca7e",name:"Web Server",type:"Device",layer:"technology"},{id:"b5d9dfae",name:"colmcarew.com",type:"TechnologyService",layer:"technology"},{id:"a0304ba3",name:"Android",type:"Device",layer:"technology"},{id:"a52e9d05",name:"Web",type:"CommunicationNetwork",layer:"technology"},{id:"768ab3cf",name:"Firewall",type:"Node",layer:"technology"},{id:"aac85a21",name:"Communication Path",type:"Path",layer:"technology"},{id:"824e1657",name:"Raspberry Pi 1b, Debian Jesse Image",type:"Node",layer:"technology"},{id:"d90290f8",name:"Java 1.8.0_65-b17 (running the Jar files obtained from Play)",type:"SystemSoftware",layer:"technology"},{id:"6ec68dd1",name:"MySQL Server 5.5.44",type:"SystemSoftware",layer:"technology"}],b=[{id:"ef22784b",sourceId:"bda0aa0d",targetId:"9f783976",type:"CompositionRelationship"},{id:"93dc0455",sourceId:"bda0aa0d",targetId:"e2a11390",type:"CompositionRelationship"},{id:"636875c3",sourceId:"bda0aa0d",targetId:"18b01dd8",type:"CompositionRelationship"},{id:"9bd2de80",sourceId:"bda0aa0d",targetId:"3f9d2fb7",type:"CompositionRelationship"},{id:"486a9fbd",sourceId:"bda0aa0d",targetId:"b75ce66c",type:"CompositionRelationship"},{id:"6778af10",sourceId:"a29bac60",targetId:"5cb5a2dc",type:"CompositionRelationship"},{id:"ee823f7b",sourceId:"a29bac60",targetId:"e0421bf6",type:"CompositionRelationship"},{id:"dd740c54",sourceId:"a29bac60",targetId:"485e08f7",type:"CompositionRelationship"},{id:"481dd589",sourceId:"978c6331",targetId:"62416aba",type:"FlowRelationship"},{id:"e9b4e077",sourceId:"bda0aa0d",targetId:"62416aba",type:"AssociationRelationship"},{id:"27f79d41",sourceId:"62416aba",targetId:"b80da905",type:"CompositionRelationship"},{id:"c68fa150",sourceId:"62416aba",targetId:"c7214f66",type:"CompositionRelationship"},{id:"c6bc8c27",sourceId:"62416aba",targetId:"368ac454",type:"CompositionRelationship"},{id:"82b6a2ba",sourceId:"37c9e605",targetId:"62416aba",type:"UsedByRelationship"},{id:"6065efb6",sourceId:"37c9e605",targetId:"37c60a8c",type:"UsedByRelationship"},{id:"7baa5701",sourceId:"37c60a8c",targetId:"a29bac60",type:"AssociationRelationship"},{id:"ac023a32",sourceId:"37c60a8c",targetId:"b7c91763",type:"CompositionRelationship"},{id:"190e071e",sourceId:"978c6331",targetId:"37c60a8c",type:"FlowRelationship"},{id:"09b8e89e",sourceId:"978c6331",targetId:"37c9e605",type:"FlowRelationship"},{id:"019e000c",sourceId:"add89549",targetId:"62416aba",type:"AssignmentRelationship"},{id:"1f4acfd5",sourceId:"add89549",targetId:"978c6331",type:"TriggeringRelationship"},{id:"c8e0b9b9",sourceId:"add89549",targetId:"fe62888a",type:"AssignmentRelationship"},{id:"140160b5",sourceId:"721a92ff",targetId:"4dbf1be8",type:"CompositionRelationship"},{id:"9d363604",sourceId:"616d7129",targetId:"add89549",type:"FlowRelationship"},{id:"92d6dfd0",sourceId:"f08de984",targetId:"eac12f97",type:"SpecialisationRelationship"},{id:"4878b56a",sourceId:"8a03d2d5",targetId:"eac12f97",type:"SpecialisationRelationship"},{id:"9fbe86f1",sourceId:"bc34587d",targetId:"eac12f97",type:"SpecialisationRelationship"},{id:"3d527844",sourceId:"561ad9a2",targetId:"eac12f97",type:"SpecialisationRelationship"},{id:"9fcd02a4",sourceId:"7a5e7c12",targetId:"eac12f97",type:"SpecialisationRelationship"},{id:"02ce387a",sourceId:"eac12f97",targetId:"13607afb",type:"TriggeringRelationship"},{id:"2f377f02",sourceId:"13607afb",targetId:"70443a4e",type:"CompositionRelationship"},{id:"3bb88bec",sourceId:"13607afb",targetId:"76aaba18",type:"CompositionRelationship"},{id:"f1587509",sourceId:"13607afb",targetId:"38634daa",type:"CompositionRelationship"},{id:"375b05ec",sourceId:"13607afb",targetId:"85b1a746",type:"CompositionRelationship"},{id:"4e2ee339",sourceId:"85b1a746",targetId:"2dcebf5c",type:"AssociationRelationship"},{id:"12331198",sourceId:"13607afb",targetId:"91299eaf",type:"CompositionRelationship"},{id:"5770d7ca",sourceId:"13607afb",targetId:"738452bd",type:"CompositionRelationship"},{id:"93a5e139",sourceId:"76aaba18",targetId:"38634daa",type:"TriggeringRelationship"},{id:"80044df4",sourceId:"91299eaf",targetId:"38634daa",type:"TriggeringRelationship"},{id:"99ce39ca",sourceId:"38634daa",targetId:"85b1a746",type:"TriggeringRelationship"},{id:"7504912a",sourceId:"738452bd",targetId:"85b1a746",type:"TriggeringRelationship"},{id:"7e650c7a",sourceId:"13607afb",targetId:"7d2acee8",type:"CompositionRelationship"},{id:"4212e9b3",sourceId:"38634daa",targetId:"7d2acee8",type:"TriggeringRelationship"},{id:"a7bc2c9a",sourceId:"738452bd",targetId:"7d2acee8",type:"TriggeringRelationship"},{id:"edb3cb3d",sourceId:"7d2acee8",targetId:"85b1a746",type:"TriggeringRelationship"},{id:"ea9529fc",sourceId:"a21ed30e",targetId:"978c6331",type:"TriggeringRelationship"},{id:"29f04a68",sourceId:"520f8ee9",targetId:"a21ed30e",type:"AssociationRelationship"},{id:"4a9d2b84",sourceId:"a21ed30e",targetId:"07ab1dec",type:"TriggeringRelationship"},{id:"fae4df31",sourceId:"07ab1dec",targetId:"1d36f3b5",type:"TriggeringRelationship"},{id:"3375fef8",sourceId:"1d36f3b5",targetId:"da23df9f",type:"CompositionRelationship"},{id:"1d775ab9",sourceId:"1d36f3b5",targetId:"d12efb7e",type:"CompositionRelationship"},{id:"b239dce3",sourceId:"1d36f3b5",targetId:"663a47fe",type:"CompositionRelationship"},{id:"2ec0263d",sourceId:"1d36f3b5",targetId:"3edb29cd",type:"TriggeringRelationship"},{id:"ae124373",sourceId:"1d36f3b5",targetId:"972e80d6",type:"CompositionRelationship"},{id:"d3ae2506",sourceId:"da23df9f",targetId:"d12efb7e",type:"TriggeringRelationship"},{id:"c769e40e",sourceId:"d12efb7e",targetId:"972e80d6",type:"TriggeringRelationship"},{id:"c74a2b8e",sourceId:"1d36f3b5",targetId:"75cea3b2",type:"CompositionRelationship"},{id:"f456d047",sourceId:"75cea3b2",targetId:"6b8eecdb",type:"CompositionRelationship"},{id:"a1345766",sourceId:"75cea3b2",targetId:"ee310135",type:"CompositionRelationship"},{id:"2b6ab7ca",sourceId:"6b8eecdb",targetId:"ee310135",type:"TriggeringRelationship"},{id:"3b81b4aa",sourceId:"1d36f3b5",targetId:"7c4bd915",type:"CompositionRelationship"},{id:"cf510ab5",sourceId:"7c4bd915",targetId:"2965925a",type:"CompositionRelationship"},{id:"8128571e",sourceId:"7c4bd915",targetId:"f9d73313",type:"CompositionRelationship"},{id:"01f72fac",sourceId:"2965925a",targetId:"f9d73313",type:"TriggeringRelationship"},{id:"61204ac7",sourceId:"1d36f3b5",targetId:"034ed501",type:"CompositionRelationship"},{id:"48f3a72e",sourceId:"034ed501",targetId:"75cea3b2",type:"CompositionRelationship"},{id:"8d438842",sourceId:"034ed501",targetId:"60990ebd",type:"CompositionRelationship"},{id:"8931a29f",sourceId:"034ed501",targetId:"7bf89b59",type:"CompositionRelationship"},{id:"b88ec2ec",sourceId:"75cea3b2",targetId:"60990ebd",type:"TriggeringRelationship"},{id:"044bc2fd",sourceId:"60990ebd",targetId:"7bf89b59",type:"TriggeringRelationship"},{id:"4bacda4f",sourceId:"1d36f3b5",targetId:"1d4fc2cb",type:"CompositionRelationship"},{id:"8e0850f1",sourceId:"1d36f3b5",targetId:"ef9acb01",type:"CompositionRelationship"},{id:"02f80771",sourceId:"ef9acb01",targetId:"75cea3b2",type:"CompositionRelationship"},{id:"bc0010e5",sourceId:"ef9acb01",targetId:"60990ebd",type:"CompositionRelationship"},{id:"875bbce7",sourceId:"034ed501",targetId:"ef9acb01",type:"CompositionRelationship"},{id:"3fe8aedd",sourceId:"ef9acb01",targetId:"7bf89b59",type:"TriggeringRelationship"},{id:"3e2cc3da",sourceId:"1d4fc2cb",targetId:"ef9acb01",type:"CompositionRelationship"},{id:"af7bd2f2",sourceId:"1d4fc2cb",targetId:"38958b33",type:"CompositionRelationship"},{id:"bbf9d76a",sourceId:"ef9acb01",targetId:"38958b33",type:"TriggeringRelationship"},{id:"672759aa",sourceId:"1d36f3b5",targetId:"4a4002be",type:"CompositionRelationship"},{id:"dfc55a64",sourceId:"4a4002be",targetId:"b13be432",type:"CompositionRelationship"},{id:"5addb87a",sourceId:"4a4002be",targetId:"32d1c70c",type:"CompositionRelationship"},{id:"1c1ee5af",sourceId:"4a4002be",targetId:"034ed501",type:"CompositionRelationship"},{id:"2e24650d",sourceId:"b13be432",targetId:"034ed501",type:"TriggeringRelationship"},{id:"98368b87",sourceId:"32d1c70c",targetId:"034ed501",type:"TriggeringRelationship"},{id:"e3481ad2",sourceId:"4a4002be",targetId:"eb9e2266",type:"CompositionRelationship"},{id:"d39c7ffb",sourceId:"034ed501",targetId:"eb9e2266",type:"TriggeringRelationship"},{id:"98db8aca",sourceId:"288a1950",targetId:"adf8f973",type:"AssignmentRelationship"},{id:"8d57beaf",sourceId:"3502aa1d",targetId:"288a1950",type:"UsedByRelationship"},{id:"c1b41d97",sourceId:"288a1950",targetId:"5c5e9c4d",type:"UsedByRelationship"},{id:"f3fa909b",sourceId:"5c5e9c4d",targetId:"a5672327",type:"CompositionRelationship"},{id:"e3df7576",sourceId:"3b54763c",targetId:"b20aa0ab",type:"AssignmentRelationship"},{id:"0c4ca4e2",sourceId:"3b54763c",targetId:"5c5e9c4d",type:"UsedByRelationship"},{id:"2b0aa281",sourceId:"1f423739",targetId:"3b54763c",type:"UsedByRelationship"},{id:"3c695820",sourceId:"5c5e9c4d",targetId:"ce687eac",type:"CompositionRelationship"},{id:"9c152987",sourceId:"8974e93e",targetId:"1f423739",type:"UsedByRelationship"},{id:"68d2afa0",sourceId:"8974e93e",targetId:"3502aa1d",type:"UsedByRelationship"},{id:"5e5eb0ae",sourceId:"a5672327",targetId:"9cce3ebf",type:"AssignmentRelationship"},{id:"d73387a2",sourceId:"a5672327",targetId:"410fa20d",type:"AssignmentRelationship"},{id:"9aaf3230",sourceId:"5c5e9c4d",targetId:"616d7129",type:"CompositionRelationship"},{id:"23360561",sourceId:"616d7129",targetId:"9f835ad9",type:"FlowRelationship"},{id:"5ddf86e5",sourceId:"c3e63403",targetId:"57ac8972",type:"AssignmentRelationship"},{id:"0c381b2e",sourceId:"c3e63403",targetId:"40b8f964",type:"AssignmentRelationship"},{id:"02fa8219",sourceId:"9f835ad9",targetId:"c3e63403",type:"FlowRelationship"},{id:"5413d758",sourceId:"c3e63403",targetId:"8974e93e",type:"FlowRelationship"},{id:"e507b752",sourceId:"f48f1186",targetId:"ce687eac",type:"FlowRelationship"},{id:"5221a4ad",sourceId:"ce687eac",targetId:"616d7129",type:"FlowRelationship"},{id:"20b6cafe",sourceId:"616d7129",targetId:"ce687eac",type:"FlowRelationship"},{id:"4381db4d",sourceId:"ce687eac",targetId:"37f21007",type:"FlowRelationship"},{id:"ed984cd5",sourceId:"37f21007",targetId:"616d7129",type:"FlowRelationship"},{id:"d6d44c8f",sourceId:"616d7129",targetId:"37f21007",type:"FlowRelationship"},{id:"3df0585f",sourceId:"37f21007",targetId:"d433ecf6",type:"AssignmentRelationship"},{id:"4b55245a",sourceId:"37f21007",targetId:"48e3c3fe",type:"AssignmentRelationship"},{id:"02f6b72f",sourceId:"c69bca7e",targetId:"b5d9dfae",type:"AssociationRelationship"},{id:"032b7cc5",sourceId:"a52e9d05",targetId:"768ab3cf",type:"AssociationRelationship"},{id:"a7deb135",sourceId:"768ab3cf",targetId:"aac85a21",type:"AssociationRelationship"},{id:"8a8ea4cd",sourceId:"824e1657",targetId:"d90290f8",type:"CompositionRelationship"},{id:"9373e330",sourceId:"824e1657",targetId:"6ec68dd1",type:"CompositionRelationship"}],u=[{id:"833d3e43",name:"System Context",viewpoint:""},{id:"722a5e7e",name:"System Features",viewpoint:""},{id:"c095c7ea",name:"Data Persistence",viewpoint:""},{id:"b47967f4",name:"Data Rendering",viewpoint:""},{id:"43607655",name:"Ports and Adapters",viewpoint:""},{id:"50243e37",name:"Analytics Data Flow",viewpoint:""},{id:"40708aa0",name:"Rendering Data Flow",viewpoint:""},{id:"65950c64",name:"Infrastructure",viewpoint:""},{id:"ead03659",name:"Models",viewpoint:""}],I={identifier:e,archimateId:i,name:a,description:t,formats:s,source:d,sourceFile:n,sourceFormat:o,timestamp:c,tags:p,duplicates:r,language:y,elements:l,relationships:b,views:u};export{i as archimateId,I as default,t as description,r as duplicates,l as elements,s as formats,e as identifier,y as language,a as name,b as relationships,d as source,n as sourceFile,o as sourceFormat,p as tags,c as timestamp,u as views};
