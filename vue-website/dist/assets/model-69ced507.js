const e="https://me.big.tuwien.ac.at/EAModelSet/9c94935f",t="9c94935f",a="Proxy",i="",d=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",c="raw-data/github/archimate/7_proxy_v1.archimate",p="ARCHIMATE",n="29-06-2023 09:31:24",s=[],r=[],l="en",y=[{id:"ee7d1892",name:"create proxy",type:"ApplicationProcess",layer:"application"},{id:"0a616382",name:"call cheaper method 2",type:"ApplicationProcess",layer:"application"},{id:"cce38234",name:"interface of subject",type:"ApplicationInterface",layer:"application"},{id:"ab41b7c2",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"add627e6",name:"class proxy",type:"ApplicationComponent",layer:"application"},{id:"9db9ac49",name:"constructor (REF to real subject)",type:"ApplicationFunction",layer:"application"},{id:"84d71e64",name:"create adaptee",type:"ApplicationProcess",layer:"application"},{id:"1af4d74e",name:"method 1 (get instance)",type:"ApplicationFunction",layer:"application"},{id:"e2ab482c",name:"call SUPER.method 2",type:"ApplicationProcess",layer:"application"},{id:"9df4268c",name:"class  real subject",type:"ApplicationComponent",layer:"application"},{id:"b2210664",name:"method 1",type:"ApplicationFunction",layer:"application"},{id:"c2b1d45a",name:"filename",type:"DataObject",layer:"application"},{id:"05b8b432",name:"REF to real subject",type:"DataObject",layer:"application"},{id:"3e354f60",name:"method 2 (get fake data)",type:"ApplicationFunction",layer:"application"},{id:"7540664d",name:"call SUPER.method 2 (copy)",type:"ApplicationProcess",layer:"application"},{id:"aacb5df1",name:"method 1 (require real object data)",type:"ApplicationFunction",layer:"application"},{id:"106f8fbe",name:"get REAL instance already exists",type:"ApplicationProcess",layer:"application"},{id:"83e140e1",name:"create instance by filename",type:"ApplicationFunction",layer:"application"},{id:"1f1d5781",name:"write instance into REF",type:"ApplicationProcess",layer:"application"},{id:"47efccb1",name:"create REAL instance",type:"ApplicationProcess",layer:"application"},{id:"d9f1406f",name:"write instance into REF",type:"ApplicationProcess",layer:"application"},{id:"d5723452",name:"call some real object method",type:"ApplicationProcess",layer:"application"},{id:"fa42bb82",name:"call method on instance already exists",type:"ApplicationProcess",layer:"application"},{id:"d026671d",name:"return some fake data",type:"ApplicationProcess",layer:"application"},{id:"2ad5f926",name:"write instance into REF (copy)",type:"ApplicationProcess",layer:"application"},{id:"c0b04eec",name:"Application Process",type:"ApplicationProcess",layer:"application"},{id:"1b04826a",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"894b3b22",name:"method 2",type:"ApplicationFunction",layer:"application"},{id:"d050a2a7",name:"call real method 1 through the proxy",type:"ApplicationProcess",layer:"application"},{id:"4f84251b",name:"client",type:"ApplicationComponent",layer:"application"},{id:"983a5c83",name:"Junction",type:"Junction",layer:"other"},{id:"25eb41da",name:"Junction (copy)",type:"Junction",layer:"other"}],b=[{id:"1920a7a5",sourceId:"cce38234",targetId:"ee7d1892",type:"ServingRelationship"},{id:"faecae4c",sourceId:"9db9ac49",targetId:"84d71e64",type:"CompositionRelationship"},{id:"5cd93f5a",sourceId:"1af4d74e",targetId:"ab41b7c2",type:"RealizationRelationship"},{id:"3a097726",sourceId:"add627e6",targetId:"9db9ac49",type:"AssignmentRelationship"},{id:"dbbe0ccd",sourceId:"add627e6",targetId:"cce38234",type:"RealizationRelationship"},{id:"514aa235",sourceId:"1af4d74e",targetId:"e2ab482c",type:"CompositionRelationship"},{id:"12adda13",sourceId:"add627e6",targetId:"1af4d74e",type:"AssignmentRelationship"},{id:"3bdc568f",sourceId:"cce38234",targetId:"ab41b7c2",type:"AssociationRelationship"},{id:"eeca2f3b",sourceId:"b2210664",targetId:"e2ab482c",type:"ServingRelationship"},{id:"f9b58dc0",sourceId:"894b3b22",targetId:"0a616382",type:"ServingRelationship"},{id:"bcb6eab7",sourceId:"9df4268c",targetId:"b2210664",type:"AssignmentRelationship"},{id:"41deeca8",sourceId:"ee7d1892",targetId:"0a616382",type:"FlowRelationship"},{id:"f2e43802",sourceId:"9df4268c",targetId:"84d71e64",type:"ServingRelationship"},{id:"f115b5ce",sourceId:"9df4268c",targetId:"cce38234",type:"RealizationRelationship"},{id:"ae750189",sourceId:"05b8b432",targetId:"9df4268c",type:"AssociationRelationship"},{id:"0b629ddf",sourceId:"9db9ac49",targetId:"c2b1d45a",type:"AccessRelationship"},{id:"3dc0fe3a",sourceId:"add627e6",targetId:"c2b1d45a",type:"AssociationRelationship"},{id:"6462d1bb",sourceId:"add627e6",targetId:"05b8b432",type:"AssociationRelationship"},{id:"dcac6eb4",sourceId:"3e354f60",targetId:"7540664d",type:"CompositionRelationship"},{id:"b5b72740",sourceId:"add627e6",targetId:"3e354f60",type:"AssignmentRelationship"},{id:"78451c6c",sourceId:"983a5c83",targetId:"106f8fbe",type:"TriggeringRelationship"},{id:"eb87b398",sourceId:"aacb5df1",targetId:"106f8fbe",type:"CompositionRelationship"},{id:"2cbe63fd",sourceId:"983a5c83",targetId:"83e140e1",type:"TriggeringRelationship"},{id:"5098dfc3",sourceId:"83e140e1",targetId:"1f1d5781",type:"CompositionRelationship"},{id:"2dafb9a9",sourceId:"aacb5df1",targetId:"983a5c83",type:"TriggeringRelationship"},{id:"45c04dbf",sourceId:"aacb5df1",targetId:"83e140e1",type:"CompositionRelationship"},{id:"4d43eb23",sourceId:"aacb5df1",targetId:"983a5c83",type:"AssignmentRelationship"},{id:"ada809a1",sourceId:"106f8fbe",targetId:"05b8b432",type:"AccessRelationship"},{id:"161a2e13",sourceId:"9df4268c",targetId:"83e140e1",type:"RealizationRelationship"},{id:"3276e9e5",sourceId:"9df4268c",targetId:"83e140e1",type:"ServingRelationship"},{id:"222c81a8",sourceId:"1f1d5781",targetId:"05b8b432",type:"AccessRelationship"},{id:"ec140b9f",sourceId:"47efccb1",targetId:"d9f1406f",type:"CompositionRelationship"},{id:"dfa7eca1",sourceId:"aacb5df1",targetId:"47efccb1",type:"CompositionRelationship"},{id:"3b51be0d",sourceId:"983a5c83",targetId:"47efccb1",type:"TriggeringRelationship"},{id:"e1242453",sourceId:"d9f1406f",targetId:"05b8b432",type:"AccessRelationship"},{id:"82ae1899",sourceId:"9df4268c",targetId:"47efccb1",type:"ServingRelationship"},{id:"3c3aedc2",sourceId:"aacb5df1",targetId:"d5723452",type:"CompositionRelationship"},{id:"ff1d2141",sourceId:"106f8fbe",targetId:"d5723452",type:"FlowRelationship"},{id:"c2a3ffe5",sourceId:"47efccb1",targetId:"d5723452",type:"FlowRelationship"},{id:"363a42dc",sourceId:"b2210664",targetId:"d5723452",type:"ServingRelationship"},{id:"cfb5d6db",sourceId:"25eb41da",targetId:"d026671d",type:"TriggeringRelationship"},{id:"d3dd2245",sourceId:"d026671d",targetId:"2ad5f926",type:"CompositionRelationship"},{id:"fb0f8108",sourceId:"25eb41da",targetId:"fa42bb82",type:"TriggeringRelationship"},{id:"a245d2a5",sourceId:"3e354f60",targetId:"fa42bb82",type:"CompositionRelationship"},{id:"e94729b7",sourceId:"3e354f60",targetId:"25eb41da",type:"AssignmentRelationship"},{id:"ef952520",sourceId:"3e354f60",targetId:"d026671d",type:"CompositionRelationship"},{id:"2afa3b1e",sourceId:"9df4268c",targetId:"1b04826a",type:"AssignmentRelationship"},{id:"1add6fd8",sourceId:"1b04826a",targetId:"fa42bb82",type:"ServingRelationship"},{id:"82334943",sourceId:"894b3b22",targetId:"cce38234",type:"AssociationRelationship"},{id:"dd790562",sourceId:"0a616382",targetId:"d050a2a7",type:"FlowRelationship"},{id:"9d841846",sourceId:"ab41b7c2",targetId:"d050a2a7",type:"ServingRelationship"},{id:"9c7d676d",sourceId:"add627e6",targetId:"aacb5df1",type:"AssignmentRelationship"},{id:"b71d590c",sourceId:"cce38234",targetId:"4f84251b",type:"ServingRelationship"},{id:"c6e2ed87",sourceId:"9df4268c",targetId:"add627e6",type:"ServingRelationship"},{id:"0117b6c7",sourceId:"add627e6",targetId:"c2b1d45a",type:"AccessRelationship"},{id:"91c6596c",sourceId:"add627e6",targetId:"05b8b432",type:"AccessRelationship"},{id:"acee6a15",sourceId:"894b3b22",targetId:"3e354f60",type:"FlowRelationship"},{id:"74744ca6",sourceId:"ab41b7c2",targetId:"aacb5df1",type:"FlowRelationship"},{id:"3eca3d5d",sourceId:"d5723452",targetId:"b2210664",type:"FlowRelationship"},{id:"361d100e",sourceId:"fa42bb82",targetId:"1b04826a",type:"FlowRelationship"},{id:"e69788d2",sourceId:"9db9ac49",targetId:"05b8b432",type:"AccessRelationship"}],I=[{id:"0824fc0f",name:"proxy",viewpoint:""},{id:"5e77373b",name:"uml",viewpoint:""}],g={identifier:e,archimateId:t,name:a,description:i,formats:d,source:o,sourceFile:c,sourceFormat:p,timestamp:n,tags:s,duplicates:r,language:l,elements:y,relationships:b,views:I};export{t as archimateId,g as default,i as description,r as duplicates,y as elements,d as formats,e as identifier,l as language,a as name,b as relationships,o as source,c as sourceFile,p as sourceFormat,s as tags,n as timestamp,I as views};