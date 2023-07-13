const e="https://me.big.tuwien.ac.at/EAModelSet/_57r9IKeREeuXgcfNRvw02A",r="_57r9IKeREeuXgcfNRvw02A",m="PractiveManagementSystem",n="",g=["XML","CSV","JSON","ARCHIMATE"],d="GenMyModel",t="raw-data/genmymodel/_57r9ikereeuxgcfnrvw02a.xml",I="XML",i="29-06-2023 09:26:14",o=[],a=[],D="en",c=[{id:"_6bhAgInAEDmOmLXeiJ3PjQ",name:"API Consumers",type:"Grouping",layer:"other"},{id:"_CTqogInBEDmOmLXeiJ3PjQ",name:"Web Site",type:"Device",layer:"technology"},{id:"_DCW6gInBEDmOmLXeiJ3PjQ",name:"Mobil Device",type:"Device",layer:"technology"},{id:"_DZircInBEDmOmLXeiJ3PjQ",name:"HR Management",type:"Device",layer:"technology"},{id:"_JLmJoInBEDmOmLXeiJ3PjQ",name:"Web Application",type:"Device",layer:"technology"},{id:"_85Vb4InCEDmJPrmLAgYdeQ",name:"DAL",type:"Grouping",layer:"other"},{id:"_7_ilwInFEDmJPrmLAgYdeQ",name:"Data Model",type:"TechnologyService",layer:"technology"},{id:"_hwNVoInGEDmJPrmLAgYdeQ",name:"Unit Of Work",type:"TechnologyService",layer:"technology"},{id:"_nE7XkInGEDmJPrmLAgYdeQ",name:"Repository Pattern",type:"TechnologyService",layer:"technology"},{id:"_axG84InDEDmJPrmLAgYdeQ",name:"Logging",type:"TechnologyService",layer:"technology"},{id:"_bBCPQInDEDmJPrmLAgYdeQ",name:"Caching",type:"TechnologyService",layer:"technology"},{id:"_bQYS0InDEDmJPrmLAgYdeQ",name:"API Controller",type:"TechnologyService",layer:"technology"},{id:"_-TMVUInDEDmJPrmLAgYdeQ",name:"Auth Service",type:"TechnologyService",layer:"technology"},{id:"_qnfKQInEEDmJPrmLAgYdeQ",name:"Web API",type:"Grouping",layer:"other"},{id:"_zDge4InFEDmJPrmLAgYdeQ",name:"Business Logic",type:"Grouping",layer:"other"},{id:"_Cwt-oInGEDmJPrmLAgYdeQ",name:"Query Handler",type:"TechnologyService",layer:"technology"},{id:"_Dz7vIInGEDmJPrmLAgYdeQ",name:"Command Handler",type:"TechnologyService",layer:"technology"},{id:"_TaQjwInGEDmJPrmLAgYdeQ",name:"Validation Process",type:"TechnologyService",layer:"technology"},{id:"_1auGgInIEDmJPrmLAgYdeQ",name:"SQL Server",type:"Device",layer:"technology"},{id:"_7SLCEInIEDmJPrmLAgYdeQ",name:"Existing PMS",type:"Device",layer:"technology"}],E=[{id:"_ewACEInIEDmJPrmLAgYdeQ",sourceId:"_nE7XkInGEDmJPrmLAgYdeQ",targetId:"_Cwt-oInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_oiUGIInHEDmJPrmLAgYdeQ",sourceId:"_Cwt-oInGEDmJPrmLAgYdeQ",targetId:"_TaQjwInGEDmJPrmLAgYdeQ",type:"Serving"},{id:"_pmvXkInHEDmJPrmLAgYdeQ",sourceId:"_Dz7vIInGEDmJPrmLAgYdeQ",targetId:"_TaQjwInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_5nYJoInHEDmJPrmLAgYdeQ",sourceId:"_TaQjwInGEDmJPrmLAgYdeQ",targetId:"_Dz7vIInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_74yyoInHEDmJPrmLAgYdeQ",sourceId:"_Cwt-oInGEDmJPrmLAgYdeQ",targetId:"_TaQjwInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_8grSAInHEDmJPrmLAgYdeQ",sourceId:"_TaQjwInGEDmJPrmLAgYdeQ",targetId:"_Cwt-oInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_VHKfkInIEDmJPrmLAgYdeQ",sourceId:"_Cwt-oInGEDmJPrmLAgYdeQ",targetId:"_bBCPQInDEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_eRaooInIEDmJPrmLAgYdeQ",sourceId:"_Cwt-oInGEDmJPrmLAgYdeQ",targetId:"_nE7XkInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_m4YB8InJEDmJPrmLAgYdeQ",sourceId:"_Dz7vIInGEDmJPrmLAgYdeQ",targetId:"_hwNVoInGEDmJPrmLAgYdeQ",type:"Serving"},{id:"_uBHRIInHEDmJPrmLAgYdeQ",sourceId:"_bBCPQInDEDmJPrmLAgYdeQ",targetId:"_Cwt-oInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_wGnlEInHEDmJPrmLAgYdeQ",sourceId:"_bQYS0InDEDmJPrmLAgYdeQ",targetId:"_bBCPQInDEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_1j-loInHEDmJPrmLAgYdeQ",sourceId:"_bQYS0InDEDmJPrmLAgYdeQ",targetId:"_Dz7vIInGEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_CDn9MInIEDmJPrmLAgYdeQ",sourceId:"_-TMVUInDEDmJPrmLAgYdeQ",targetId:"_axG84InDEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_Ckt4EInIEDmJPrmLAgYdeQ",sourceId:"_axG84InDEDmJPrmLAgYdeQ",targetId:"_bQYS0InDEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_G1dUgInIEDmJPrmLAgYdeQ",sourceId:"_bBCPQInDEDmJPrmLAgYdeQ",targetId:"_6bhAgInAEDmOmLXeiJ3PjQ",type:"Triggering"},{id:"_LD2nkInIEDmJPrmLAgYdeQ",sourceId:"_6bhAgInAEDmOmLXeiJ3PjQ",targetId:"_-TMVUInDEDmJPrmLAgYdeQ",type:"Triggering"},{id:"_27FGAInIEDmJPrmLAgYdeQ",sourceId:"_85Vb4InCEDmJPrmLAgYdeQ",targetId:"_1auGgInIEDmJPrmLAgYdeQ",type:"Serving"},{id:"_37jEgInIEDmJPrmLAgYdeQ",sourceId:"_1auGgInIEDmJPrmLAgYdeQ",targetId:"_85Vb4InCEDmJPrmLAgYdeQ",type:"Serving"},{id:"_9Us6gInIEDmJPrmLAgYdeQ",sourceId:"_7SLCEInIEDmJPrmLAgYdeQ",targetId:"_1auGgInIEDmJPrmLAgYdeQ",type:"Serving"},{id:"_9zERgInIEDmJPrmLAgYdeQ",sourceId:"_1auGgInIEDmJPrmLAgYdeQ",targetId:"_7SLCEInIEDmJPrmLAgYdeQ",type:"Serving"}],Q=[{id:"_57r9I6eREeuXgcfNRvw02A",name:"archimate-diagram",viewpoint:""}],A={identifier:e,archimateId:r,name:m,description:n,formats:g,source:d,sourceFile:t,sourceFormat:I,timestamp:i,tags:o,duplicates:a,language:D,elements:c,relationships:E,views:Q};export{r as archimateId,A as default,n as description,a as duplicates,c as elements,g as formats,e as identifier,D as language,m as name,E as relationships,d as source,t as sourceFile,I as sourceFormat,o as tags,i as timestamp,Q as views};