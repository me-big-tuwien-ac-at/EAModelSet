const e="https://me.big.tuwien.ac.at/EAModelSet/_UgEiUIXfEeyxbevs_zeV6g",g="_UgEiUIXfEeyxbevs_zeV6g",t="DR - system architecture",c="",i=["XML","CSV","JSON","ARCHIMATE"],d="GenMyModel",s="raw-data/genmymodel/_ugeiuixfeeyxbevs_zev6g.xml",a="XML",_="29-06-2023 09:25:41",n=[],y=[],o="en",r=[{id:"_809PMGgOEDqXTcHVZdv_yg",name:"Google Scholar",type:"Artifact",layer:"technology"},{id:"_9GuUoGgOEDqXTcHVZdv_yg",name:"PubMed",type:"Artifact",layer:"technology"},{id:"_AQxOwGgPEDqXTcHVZdv_yg",name:"JAMA",type:"Artifact",layer:"technology"},{id:"_SRawwGgPEDqXTcHVZdv_yg",name:"Knowledge base",type:"BusinessRole",layer:"business"},{id:"_roLksGgPEDqXTcHVZdv_yg",name:"Object",type:"BusinessObject",layer:"business"},{id:"_a_A9kGgQEDqXTcHVZdv_yg",name:"Triplets Formation",type:"BusinessObject",layer:"business"},{id:"_cA7tkGgQEDqXTcHVZdv_yg",name:"Information Ranking",type:"BusinessObject",layer:"business"},{id:"_ck2S8GgQEDqXTcHVZdv_yg",name:"Normalizaiton",type:"BusinessObject",layer:"business"},{id:"_tftRkGgQEDqXTcHVZdv_yg",name:"Knowledge Graph",type:"CommunicationNetwork",layer:"technology"},{id:"_AU91cGgTEDqXTcHVZdv_yg",name:"Preprocessing",type:"Grouping",layer:"other"},{id:"_Zl2q4GgTEDqXTcHVZdv_yg",name:"Grouping",type:"Grouping",layer:"other"},{id:"_QAlEoGgREDqXTcHVZdv_yg",name:"Network Embedding",type:"BusinessObject",layer:"business"},{id:"_UsDVQGgREDqXTcHVZdv_yg",name:"Link Prediciton",type:"BusinessObject",layer:"business"},{id:"_9kGa4GgTEDqXTcHVZdv_yg",name:"Repurposed Drug",type:"Goal",layer:"motivation"}],T=[{id:"_dnROsGgPEDqXTcHVZdv_yg",sourceId:"_809PMGgOEDqXTcHVZdv_yg",targetId:"_SRawwGgPEDqXTcHVZdv_yg",type:"Serving"},{id:"_eJhAIGgPEDqXTcHVZdv_yg",sourceId:"_9GuUoGgOEDqXTcHVZdv_yg",targetId:"_SRawwGgPEDqXTcHVZdv_yg",type:"Serving"},{id:"_ghqjQGgPEDqXTcHVZdv_yg",sourceId:"_AQxOwGgPEDqXTcHVZdv_yg",targetId:"_SRawwGgPEDqXTcHVZdv_yg",type:"Serving"},{id:"_oitMEGgQEDqXTcHVZdv_yg",sourceId:"_cA7tkGgQEDqXTcHVZdv_yg",targetId:"_ck2S8GgQEDqXTcHVZdv_yg",type:"Specialization"},{id:"_p8gQkGgQEDqXTcHVZdv_yg",sourceId:"_a_A9kGgQEDqXTcHVZdv_yg",targetId:"_cA7tkGgQEDqXTcHVZdv_yg",type:"Specialization"},{id:"_kMDqAGgSEDqXTcHVZdv_yg",sourceId:"_QAlEoGgREDqXTcHVZdv_yg",targetId:"_UsDVQGgREDqXTcHVZdv_yg",type:"Specialization"},{id:"_PVvtAGgTEDqXTcHVZdv_yg",sourceId:"_SRawwGgPEDqXTcHVZdv_yg",targetId:"_AU91cGgTEDqXTcHVZdv_yg",type:"Triggering"},{id:"_VpHIgGgTEDqXTcHVZdv_yg",sourceId:"_AU91cGgTEDqXTcHVZdv_yg",targetId:"_tftRkGgQEDqXTcHVZdv_yg",type:"Triggering"},{id:"_nxPLgGgTEDqXTcHVZdv_yg",sourceId:"_tftRkGgQEDqXTcHVZdv_yg",targetId:"_Zl2q4GgTEDqXTcHVZdv_yg",type:"Triggering"},{id:"_BBRFUGgUEDqXTcHVZdv_yg",sourceId:"_Zl2q4GgTEDqXTcHVZdv_yg",targetId:"_9kGa4GgTEDqXTcHVZdv_yg",type:"Influence"}],v=[{id:"_UgEiU4XfEeyxbevs_zeV6g",name:"archimate-diagram",viewpoint:""}],E={identifier:e,archimateId:g,name:t,description:c,formats:i,source:d,sourceFile:s,sourceFormat:a,timestamp:_,tags:n,duplicates:y,language:o,elements:r,relationships:T,views:v};export{g as archimateId,E as default,c as description,y as duplicates,r as elements,i as formats,e as identifier,o as language,t as name,T as relationships,d as source,s as sourceFile,a as sourceFormat,n as tags,_ as timestamp,v as views};