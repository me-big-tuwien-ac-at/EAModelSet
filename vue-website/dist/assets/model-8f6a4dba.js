const i="https://me.big.tuwien.ac.at/EAModelSet/id-cb15537a-7007-4f84-857e-c80a835b2d4c",e="id-cb15537a-7007-4f84-857e-c80a835b2d4c",d="ArchiSurance Health",t="",a=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",s="raw-data/github/xml/archisurance_health.xml",r="XML",n="29-06-2023 09:28:03",c=[],p=[],y="en",u=[{id:"id-448",name:"DMZ",type:"CommunicationNetwork",layer:"technology"},{id:"id-342",name:"Public internet",type:"CommunicationNetwork",layer:"technology"},{id:"id-240",name:"LAN",type:"CommunicationNetwork",layer:"technology"},{id:"id-11944",name:"Customer data transmission",type:"Path",layer:"technology"},{id:"id-243",name:"Content management server",type:"Device",layer:"technology"},{id:"id-344",name:"Customer PC",type:"Device",layer:"technology"},{id:"id-694",name:"Employee PC",type:"Device",layer:"technology"},{id:"id-449",name:"DBMS",type:"SystemSoftware",layer:"technology"},{id:"id-590",name:"External firewall",type:"Node",layer:"technology"},{id:"id-591",name:"Internal firewall",type:"Node",layer:"technology"},{id:"id-242",name:"Web server",type:"Device",layer:"technology"},{id:"id-450",name:"Database server",type:"Device",layer:"technology"},{id:"id-451",name:"Database tables",type:"Artifact",layer:"technology"},{id:"id-11945",name:"Encrypted data records",type:"Artifact",layer:"technology"},{id:"id-245",name:"Content repository",type:"Artifact",layer:"technology"},{id:"id-7527",name:"Database encryption",type:"TechnologyService",layer:"technology"},{id:"id-7716",name:"Anti-virus software",type:"TechnologyService",layer:"technology"},{id:"id-6812",name:"Network partitioning",type:"TechnologyService",layer:"technology"},{id:"id-6792",name:"Network filtering",type:"TechnologyService",layer:"technology"},{id:"id-7579",name:"Database backup procedure",type:"TechnologyService",layer:"technology"},{id:"id-7744",name:"CMS backup procedure",type:"TechnologyService",layer:"technology"},{id:"id-175",name:"Content manager",type:"BusinessActor",layer:"business"},{id:"id-137",name:"Customer",type:"BusinessActor",layer:"business"},{id:"id-57",name:"Anybody",type:"BusinessActor",layer:"business"},{id:"id-138",name:"Authorized employee",type:"BusinessActor",layer:"business"},{id:"id-2041",name:"Retrieve customer file",type:"BusinessFunction",layer:"business"},{id:"id-2337",name:"Authenticate content manager",type:"BusinessFunction",layer:"business"},{id:"id-2294",name:"Retrieve claim file",type:"BusinessFunction",layer:"business"},{id:"id-2042",name:"Update fields",type:"BusinessFunction",layer:"business"},{id:"id-2043",name:"Store customer file",type:"BusinessFunction",layer:"business"},{id:"id-2292",name:"Authenticate customer",type:"BusinessFunction",layer:"business"},{id:"id-2293",name:"Select claim",type:"BusinessFunction",layer:"business"},{id:"id-2264",name:"Authenticate employee",type:"BusinessFunction",layer:"business"},{id:"id-2338",name:"Upload new content",type:"BusinessFunction",layer:"business"},{id:"id-2437",name:"Browse public web site",type:"BusinessProcess",layer:"business"},{id:"id-2335",name:"Adapt public web site information",type:"BusinessProcess",layer:"business"},{id:"id-2045",name:"Update customer information",type:"BusinessProcess",layer:"business"},{id:"id-2419",name:"Retrieve customer information",type:"BusinessProcess",layer:"business"},{id:"id-2242",name:"Retrieve claim status",type:"BusinessProcess",layer:"business"},{id:"id-6798",name:"Browser selection",type:"BusinessService",layer:"business"},{id:"id-58",name:"Public web site information retrieval",type:"BusinessService",layer:"business"},{id:"id-140",name:"Customer information retrieval",type:"BusinessService",layer:"business"},{id:"id-672",name:"Customer information update",type:"BusinessService",layer:"business"},{id:"id-176",name:"Public web site information adaptation",type:"BusinessService",layer:"business"},{id:"id-219",name:"Claim status retrieval",type:"BusinessService",layer:"business"},{id:"id-59",name:"Public web site information",type:"BusinessObject",layer:"business"},{id:"id-139",name:"Customer information",type:"BusinessObject",layer:"business"},{id:"id-218",name:"Transaction information",type:"BusinessObject",layer:"business"},{id:"id-684",name:"Data entry application",type:"ApplicationComponent",layer:"application"},{id:"id-336",name:"Web browser",type:"ApplicationComponent",layer:"application"},{id:"id-968",name:"Transaction database",type:"ApplicationComponent",layer:"application"},{id:"id-440",name:"Customer database",type:"ApplicationComponent",layer:"application"},{id:"id-231",name:"Content management system",type:"ApplicationComponent",layer:"application"},{id:"id-335",name:"Web hosting application",type:"ApplicationComponent",layer:"application"},{id:"id-685",name:"Data entry",type:"ApplicationCollaboration",layer:"application"},{id:"id-815",name:"Data retrieval",type:"ApplicationCollaboration",layer:"application"},{id:"id-6440",name:"End-to-end encryption",type:"ApplicationService",layer:"application"},{id:"id-7548",name:"Smartcard protection",type:"ApplicationService",layer:"application"},{id:"id-6768",name:"Password protection",type:"ApplicationService",layer:"application"},{id:"id-11950",name:"Customer data",type:"DataObject",layer:"application"},{id:"id-969",name:"Transaction data",type:"DataObject",layer:"application"},{id:"id-233",name:"Public web site content",type:"DataObject",layer:"application"},{id:"id-6737",name:"Customer site",type:"Location",layer:"other"},{id:"id-1164",name:"ArchiSurance Health Office",type:"Location",layer:"other"},{id:"id-6738",name:"Internal",type:"Location",layer:"other"},{id:"id-6736",name:"DMZ",type:"Location",layer:"other"},{id:"id-12140",name:"Junction",type:"AndJunction",layer:"other"},{id:"id-9770",name:"Junction",type:"AndJunction",layer:"other"},{id:"id-9738",name:"Junction",type:"AndJunction",layer:"other"}],I=[{id:"id-6793",sourceId:"id-6792",targetId:"id-590",type:"Association"},{id:"id-4482",sourceId:"id-450",targetId:"id-968",type:"Realization"},{id:"id-7745",sourceId:"id-7744",targetId:"id-245",type:"Association"},{id:"id-248",sourceId:"id-243",targetId:"id-245",type:"Assignment"},{id:"id-593",sourceId:"id-590",targetId:"id-448",type:"Association"},{id:"id-454",sourceId:"id-449",targetId:"id-451",type:"Assignment"},{id:"id-626",sourceId:"id-242",targetId:"id-448",type:"Association"},{id:"id-7131",sourceId:"id-448",targetId:"id-6812",type:"Association"},{id:"id-250",sourceId:"id-243",targetId:"id-240",type:"Association"},{id:"id-350",sourceId:"id-344",targetId:"id-336",type:"Realization"},{id:"id-595",sourceId:"id-591",targetId:"id-240",type:"Association"},{id:"id-348",sourceId:"id-242",targetId:"id-245",type:"Access"},{id:"id-592",sourceId:"id-590",targetId:"id-342",type:"Association"},{id:"id-456",sourceId:"id-450",targetId:"id-240",type:"Association"},{id:"id-7717",sourceId:"id-7716",targetId:"id-694",type:"Association"},{id:"id-594",sourceId:"id-448",targetId:"id-591",type:"Association"},{id:"id-620",sourceId:"id-448",targetId:"id-242",type:"Association"},{id:"id-699",sourceId:"id-694",targetId:"id-684",type:"Realization"},{id:"id-12153",sourceId:"id-451",targetId:"id-11950",type:"Realization"},{id:"id-345",sourceId:"id-242",targetId:"id-335",type:"Realization"},{id:"id-349",sourceId:"id-342",targetId:"id-344",type:"Association"},{id:"id-7528",sourceId:"id-7527",targetId:"id-451",type:"Association"},{id:"id-11981",sourceId:"id-11945",targetId:"id-11950",type:"Realization"},{id:"id-6814",sourceId:"id-6812",targetId:"id-448",type:"Association"},{id:"id-698",sourceId:"id-694",targetId:"id-240",type:"Association"},{id:"id-249",sourceId:"id-243",targetId:"id-231",type:"Realization"},{id:"id-251",sourceId:"id-245",targetId:"id-233",type:"Realization"},{id:"id-6813",sourceId:"id-240",targetId:"id-6812",type:"Association"},{id:"id-7587",sourceId:"id-7579",targetId:"id-449",type:"Association"},{id:"id-7132",sourceId:"id-6812",targetId:"id-240",type:"Association"},{id:"id-982",sourceId:"id-449",targetId:"id-968",type:"Realization"},{id:"id-6794",sourceId:"id-6792",targetId:"id-591",type:"Association"},{id:"id-11949",sourceId:"id-240",targetId:"id-450",type:"Association"},{id:"id-453",sourceId:"id-449",targetId:"id-440",type:"Realization"},{id:"id-4483",sourceId:"id-450",targetId:"id-440",type:"Realization"},{id:"id-11982",sourceId:"id-450",targetId:"id-11945",type:"Assignment"},{id:"id-11948",sourceId:"id-11944",targetId:"id-11945",type:"Access"},{id:"id-452",sourceId:"id-450",targetId:"id-449",type:"Assignment"},{id:"id-983",sourceId:"id-451",targetId:"id-969",type:"Realization"},{id:"id-2298",sourceId:"id-2292",targetId:"id-2293",type:"Triggering"},{id:"id-2340",sourceId:"id-2335",targetId:"id-2338",type:"Composition"},{id:"id-323",sourceId:"id-2335",targetId:"id-176",type:"Realization"},{id:"id-6799",sourceId:"id-6798",targetId:"id-336",type:"Association"},{id:"id-2446",sourceId:"id-2338",targetId:"id-59",type:"Access"},{id:"id-7436",sourceId:"id-6798",targetId:"id-137",type:"Association"},{id:"id-442",sourceId:"id-2419",targetId:"id-140",type:"Realization"},{id:"id-2091",sourceId:"id-672",targetId:"id-139",type:"Access"},{id:"id-2073",sourceId:"id-2041",targetId:"id-2042",type:"Triggering"},{id:"id-2438",sourceId:"id-2437",targetId:"id-59",type:"Access"},{id:"id-2339",sourceId:"id-2335",targetId:"id-2337",type:"Composition"},{id:"id-2424",sourceId:"id-2419",targetId:"id-2292",type:"Composition"},{id:"id-2075",sourceId:"id-2041",targetId:"id-139",type:"Access"},{id:"id-673",sourceId:"id-2043",targetId:"id-139",type:"Access"},{id:"id-222",sourceId:"id-219",targetId:"id-137",type:"Serving"},{id:"id-143",sourceId:"id-140",targetId:"id-139",type:"Access"},{id:"id-2047",sourceId:"id-2045",targetId:"id-2042",type:"Composition"},{id:"id-675",sourceId:"id-672",targetId:"id-138",type:"Serving"},{id:"id-2074",sourceId:"id-2042",targetId:"id-2043",type:"Triggering"},{id:"id-221",sourceId:"id-219",targetId:"id-218",type:"Access"},{id:"id-178",sourceId:"id-176",targetId:"id-175",type:"Serving"},{id:"id-144",sourceId:"id-140",targetId:"id-138",type:"Serving"},{id:"id-179",sourceId:"id-176",targetId:"id-59",type:"Access"},{id:"id-2365",sourceId:"id-2337",targetId:"id-2338",type:"Triggering"},{id:"id-2422",sourceId:"id-2292",targetId:"id-2041",type:"Triggering"},{id:"id-2046",sourceId:"id-2045",targetId:"id-2041",type:"Composition"},{id:"id-2297",sourceId:"id-2242",targetId:"id-2294",type:"Composition"},{id:"id-2295",sourceId:"id-2242",targetId:"id-2292",type:"Composition"},{id:"id-61",sourceId:"id-58",targetId:"id-57",type:"Serving"},{id:"id-2217",sourceId:"id-2264",targetId:"id-2041",type:"Triggering"},{id:"id-785",sourceId:"id-2045",targetId:"id-672",type:"Realization"},{id:"id-2048",sourceId:"id-2045",targetId:"id-2043",type:"Composition"},{id:"id-2296",sourceId:"id-2242",targetId:"id-2293",type:"Composition"},{id:"id-337",sourceId:"id-2437",targetId:"id-58",type:"Realization"},{id:"id-2299",sourceId:"id-2293",targetId:"id-2294",type:"Triggering"},{id:"id-2267",sourceId:"id-2045",targetId:"id-2264",type:"Composition"},{id:"id-142",sourceId:"id-140",targetId:"id-137",type:"Serving"},{id:"id-2300",sourceId:"id-2294",targetId:"id-218",type:"Access"},{id:"id-60",sourceId:"id-58",targetId:"id-59",type:"Access"},{id:"id-981",sourceId:"id-2242",targetId:"id-219",type:"Realization"},{id:"id-4432",sourceId:"id-968",targetId:"id-815",type:"Serving"},{id:"id-236",sourceId:"id-231",targetId:"id-233",type:"Access"},{id:"id-446",sourceId:"id-336",targetId:"id-137",type:"Serving"},{id:"id-6795",sourceId:"id-6768",targetId:"id-336",type:"Association"},{id:"id-7551",sourceId:"id-7548",targetId:"id-684",type:"Association"},{id:"id-12142",sourceId:"id-6768",targetId:"id-12140",type:"Realization"},{id:"id-11983",sourceId:"id-684",targetId:"id-137",type:"Serving"},{id:"id-692",sourceId:"id-11950",targetId:"id-139",type:"Realization"},{id:"id-2436",sourceId:"id-815",targetId:"id-2437",type:"Realization"},{id:"id-980",sourceId:"id-335",targetId:"id-969",type:"Access"},{id:"id-7095",sourceId:"id-335",targetId:"id-6440",type:"Association"},{id:"id-338",sourceId:"id-335",targetId:"id-233",type:"Access"},{id:"id-12141",sourceId:"id-7548",targetId:"id-12140",type:"Realization"},{id:"id-6769",sourceId:"id-6440",targetId:"id-336",type:"Association"},{id:"id-2334",sourceId:"id-231",targetId:"id-2335",type:"Realization"},{id:"id-12152",sourceId:"id-440",targetId:"id-11950",type:"Access"},{id:"id-796",sourceId:"id-684",targetId:"id-138",type:"Serving"},{id:"id-7133",sourceId:"id-335",targetId:"id-6768",type:"Association"},{id:"id-787",sourceId:"id-685",targetId:"id-440",type:"Aggregation"},{id:"id-322",sourceId:"id-233",targetId:"id-59",type:"Realization"},{id:"id-2368",sourceId:"id-815",targetId:"id-2242",type:"Realization"},{id:"id-7747",sourceId:"id-231",targetId:"id-175",type:"Serving"},{id:"id-2336",sourceId:"id-685",targetId:"id-2045",type:"Realization"},{id:"id-689",sourceId:"id-335",targetId:"id-336",type:"Flow"},{id:"id-816",sourceId:"id-815",targetId:"id-336",type:"Aggregation"},{id:"id-786",sourceId:"id-685",targetId:"id-684",type:"Aggregation"},{id:"id-6797",sourceId:"id-335",targetId:"id-6440",type:"Association"},{id:"id-2418",sourceId:"id-815",targetId:"id-2419",type:"Realization"},{id:"id-7550",sourceId:"id-6768",targetId:"id-684",type:"Association"},{id:"id-6796",sourceId:"id-335",targetId:"id-6768",type:"Association"},{id:"id-817",sourceId:"id-815",targetId:"id-335",type:"Aggregation"},{id:"id-1262",sourceId:"id-969",targetId:"id-218",type:"Realization"},{id:"id-11986",sourceId:"id-684",targetId:"id-11950",type:"Access"},{id:"id-690",sourceId:"id-335",targetId:"id-440",type:"Flow"},{id:"id-4431",sourceId:"id-440",targetId:"id-815",type:"Serving"},{id:"id-340",sourceId:"id-336",targetId:"id-57",type:"Serving"},{id:"id-979",sourceId:"id-968",targetId:"id-969",type:"Access"}],l=[{id:"id-5946",name:"Risk and security",viewpoint:""},{id:"id-7452",name:"Update customer information - U model",viewpoint:"Layered"},{id:"id-7742",name:"Adapt public web site information - U model",viewpoint:"Introductory"},{id:"id-6941",name:"Retrieve claim status - U model",viewpoint:"Layered"},{id:"id-7616",name:"Retrieve public web site information - U model",viewpoint:"Introductory"},{id:"id-6615",name:"Retrieve customer information - U model",viewpoint:"Introductory"},{id:"id-6831",name:"Realization of control measures",viewpoint:""},{id:"id-4239",name:"Layered view",viewpoint:""},{id:"id-2448",name:"Business",viewpoint:"Business Process"},{id:"id-1173",name:"Application",viewpoint:"Application Co-operation"},{id:"id-999",name:"Technology",viewpoint:"Technology"},{id:"id-700",name:"Update customer information",viewpoint:"Layered"},{id:"id-800",name:"Retrieve claim status",viewpoint:"Introductory"},{id:"id-255",name:"Adapt public web site information",viewpoint:"Introductory"},{id:"id-351",name:"Retrieve public web site information",viewpoint:"Introductory"},{id:"id-457",name:"Retrieve customer information",viewpoint:"Introductory"},{id:"id-11867",name:"Vulnerabilities",viewpoint:""},{id:"id-5977",name:"Security principles",viewpoint:""},{id:"id-51",name:"Use cases",viewpoint:""},{id:"id-17",name:"Control measures",viewpoint:""},{id:"id-12075",name:"Heat maps",viewpoint:""},{id:"id-1292",name:"Weak authentication",viewpoint:""}],g={identifier:i,archimateId:e,name:d,description:t,formats:a,source:o,sourceFile:s,sourceFormat:r,timestamp:n,tags:c,duplicates:p,language:y,elements:u,relationships:I,views:l};export{e as archimateId,g as default,t as description,p as duplicates,u as elements,a as formats,i as identifier,y as language,d as name,I as relationships,o as source,s as sourceFile,r as sourceFormat,c as tags,n as timestamp,l as views};
