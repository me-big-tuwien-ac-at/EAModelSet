const e="https://me.big.tuwien.ac.at/EAModelSet/_mLMasNrBEeu6V7qnWRg0WQ",n="_mLMasNrBEeu6V7qnWRg0WQ",r="ArchimateTest",t="",i=["XML","CSV","JSON","ARCHIMATE"],W="GenMyModel",a="raw-data/genmymodel/_mlmasnrbeeu6v7qnwrg0wq.xml",m="XML",g="29-06-2023 09:25:26",s=[],d=[],u="fr",o=[{id:"_mLO3Q9rBEeu6V7qnWRg0WQ",name:"CICS",type:"SystemSoftware",layer:"technology"},{id:"_mLO3RdrBEeu6V7qnWRg0WQ",name:"DBMS",type:"SystemSoftware",layer:"technology"},{id:"_mLO3R9rBEeu6V7qnWRg0WQ",name:"Message Queueing",type:"SystemSoftware",layer:"technology"},{id:"_mLO3SdrBEeu6V7qnWRg0WQ",name:"Messaging Service",type:"TechnologyService",layer:"technology"},{id:"_mLO3S9rBEeu6V7qnWRg0WQ",name:"Claim Files Service",type:"TechnologyService",layer:"technology"},{id:"_mLO3TdrBEeu6V7qnWRg0WQ",name:"Customer File Service",type:"TechnologyService",layer:"technology"},{id:"_mLO3T9rBEeu6V7qnWRg0WQ",name:"Payment System",type:"ApplicationComponent",layer:"application"},{id:"_mLO3UdrBEeu6V7qnWRg0WQ",name:"Acceptance System",type:"ApplicationComponent",layer:"application"},{id:"_mLO3U9rBEeu6V7qnWRg0WQ",name:"Assessement System",type:"ApplicationComponent",layer:"application"},{id:"_mLO3VdrBEeu6V7qnWRg0WQ",name:"Customer Administration System",type:"ApplicationComponent",layer:"application"},{id:"_mLO3V9rBEeu6V7qnWRg0WQ",name:"Acceptance Service",type:"ApplicationService",layer:"application"},{id:"_mLO3WdrBEeu6V7qnWRg0WQ",name:"Assessement Service",type:"ApplicationService",layer:"application"},{id:"_mLO3W9rBEeu6V7qnWRg0WQ",name:"Customer Administration Service",type:"ApplicationService",layer:"application"},{id:"_mLO3XdrBEeu6V7qnWRg0WQ",name:"Damage Notification",type:"BusinessEvent",layer:"business"},{id:"_mLO3X9rBEeu6V7qnWRg0WQ",name:"Accept and Register Claim",type:"BusinessProcess",layer:"business"},{id:"_mLO3YdrBEeu6V7qnWRg0WQ",name:"Assess Claim",type:"BusinessProcess",layer:"business"},{id:"_mLO3Y9rBEeu6V7qnWRg0WQ",name:"Pay Claim",type:"BusinessProcess",layer:"business"},{id:"_mLO3ZdrBEeu6V7qnWRg0WQ",name:"Declaration Service",type:"BusinessService",layer:"business"},{id:"_mLO3Z9rBEeu6V7qnWRg0WQ",name:"Payment Service",type:"BusinessService",layer:"business"},{id:"_mLO3adrBEeu6V7qnWRg0WQ",name:"Mainframe",type:"Grouping",layer:"other"}],c=[{id:"_mLO3a9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3R9rBEeu6V7qnWRg0WQ",targetId:"_mLO3SdrBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3bdrBEeu6V7qnWRg0WQ",sourceId:"_mLO3RdrBEeu6V7qnWRg0WQ",targetId:"_mLO3S9rBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3b9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3RdrBEeu6V7qnWRg0WQ",targetId:"_mLO3TdrBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3cdrBEeu6V7qnWRg0WQ",sourceId:"_mLO3SdrBEeu6V7qnWRg0WQ",targetId:"_mLO3UdrBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3c9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3S9rBEeu6V7qnWRg0WQ",targetId:"_mLO3UdrBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3ddrBEeu6V7qnWRg0WQ",sourceId:"_mLO3S9rBEeu6V7qnWRg0WQ",targetId:"_mLO3U9rBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3d9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3TdrBEeu6V7qnWRg0WQ",targetId:"_mLO3VdrBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3edrBEeu6V7qnWRg0WQ",sourceId:"_mLO3UdrBEeu6V7qnWRg0WQ",targetId:"_mLO3V9rBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3e9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3U9rBEeu6V7qnWRg0WQ",targetId:"_mLO3WdrBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3fdrBEeu6V7qnWRg0WQ",sourceId:"_mLO3VdrBEeu6V7qnWRg0WQ",targetId:"_mLO3W9rBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3f9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3W9rBEeu6V7qnWRg0WQ",targetId:"_mLO3Y9rBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3gdrBEeu6V7qnWRg0WQ",sourceId:"_mLO3WdrBEeu6V7qnWRg0WQ",targetId:"_mLO3YdrBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3g9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3V9rBEeu6V7qnWRg0WQ",targetId:"_mLO3X9rBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3hdrBEeu6V7qnWRg0WQ",sourceId:"_mLO3X9rBEeu6V7qnWRg0WQ",targetId:"_mLO3ZdrBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3h9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3Y9rBEeu6V7qnWRg0WQ",targetId:"_mLO3Z9rBEeu6V7qnWRg0WQ",type:"Realization"},{id:"_mLO3idrBEeu6V7qnWRg0WQ",sourceId:"_mLO3X9rBEeu6V7qnWRg0WQ",targetId:"_mLO3YdrBEeu6V7qnWRg0WQ",type:"Triggering"},{id:"_mLO3i9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3YdrBEeu6V7qnWRg0WQ",targetId:"_mLO3Y9rBEeu6V7qnWRg0WQ",type:"Triggering"},{id:"_mLO3jdrBEeu6V7qnWRg0WQ",sourceId:"_mLO3T9rBEeu6V7qnWRg0WQ",targetId:"_mLO3UdrBEeu6V7qnWRg0WQ",type:"Serving"},{id:"_mLO3j9rBEeu6V7qnWRg0WQ",sourceId:"_mLO3XdrBEeu6V7qnWRg0WQ",targetId:"_mLO3X9rBEeu6V7qnWRg0WQ",type:"Triggering"}],R=[{id:"_mLO28NrBEeu6V7qnWRg0WQ",name:"archimate-diagram",viewpoint:""}],B={identifier:e,archimateId:n,name:r,description:t,formats:i,source:W,sourceFile:a,sourceFormat:m,timestamp:g,tags:s,duplicates:d,language:u,elements:o,relationships:c,views:R};export{n as archimateId,B as default,t as description,d as duplicates,o as elements,i as formats,e as identifier,u as language,r as name,c as relationships,W as source,a as sourceFile,m as sourceFormat,s as tags,g as timestamp,R as views};