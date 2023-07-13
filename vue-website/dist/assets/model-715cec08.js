const a="https://me.big.tuwien.ac.at/EAModelSet/3958abf2-9ff0-44f3-a1d5-3482c19aa420",e="3958abf2-9ff0-44f3-a1d5-3482c19aa420",s="Data model test",t="",c=["XML","JSON"],n="GenMyModel",i="raw-data/genmymodel/3958abf2-9ff0-44f3-a1d5-3482c19aa420.xml",p="XML",o="29-06-2023 09:25:50",l=[],r=[],D="en",d=[{id:"_fnk9ITsHEDaQfcpB0MHjlw",name:"HR Contracts",type:"Grouping",layer:"other"},{id:"_z4TEUTsHEDaQfcpB0MHjlw",name:"Contract",type:"BusinessObject",layer:"business"},{id:"_4DddMDsHEDaQfcpB0MHjlw",name:"Employment Contract",type:"BusinessObject",layer:"business"},{id:"_95I3ITsHEDaQfcpB0MHjlw",name:"Presentation",type:"BusinessObject",layer:"business"},{id:"_-TBWwTsHEDaQfcpB0MHjlw",name:"Non-disclosure Agreement (NDA)",type:"BusinessObject",layer:"business"},{id:"_-nntwTsHEDaQfcpB0MHjlw",name:"Project Contract",type:"BusinessObject",layer:"business"},{id:"_Q8QiwDsIEDaQfcpB0MHjlw",name:"Legal Contracts",type:"Grouping",layer:"other"},{id:"_RUk8ITsIEDaQfcpB0MHjlw",name:"Procurement Contracts",type:"Grouping",layer:"other"},{id:"_g1FcoTsIEDaQfcpB0MHjlw",name:"Memorandum of Understanding (MoU)",type:"BusinessObject",layer:"business"},{id:"_lkubkDsIEDaQfcpB0MHjlw",name:"Spare Parts Contract",type:"BusinessObject",layer:"business"},{id:"_BrOzQTsJEDaQfcpB0MHjlw",name:"SAP Employee Master",type:"DataObject",layer:"application"},{id:"_RpGlMDsJEDaQfcpB0MHjlw",name:"SAP HCM",type:"ApplicationComponent",layer:"application"},{id:"_yjKLcTsJEDaQfcpB0MHjlw",name:"HR CMS",type:"ApplicationComponent",layer:"application"},{id:"_gWvB0DsKEDaQfcpB0MHjlw",name:"Physical Contract",type:"Product",layer:"business"},{id:"_oNMAsTsKEDaQfcpB0MHjlw",name:"Process",type:"BusinessProcess",layer:"business"},{id:"_jK8ZYTsLEDacUOSgnFJpfA",name:"SAP Outline Agreement",type:"DataObject",layer:"application"},{id:"_lj-GQTsLEDacUOSgnFJpfA",name:"SAP ECC",type:"ApplicationComponent",layer:"application"},{id:"_05bNUTsLEDacUOSgnFJpfA",name:"SAP Position",type:"DataObject",layer:"application"},{id:"_jKLu8TsMEDacUOSgnFJpfA",name:"Scanned contract storage",type:"Capability",layer:"strategy"},{id:"_pDg-MDsqEDacUOSgnFJpfA",name:"Manage Employee Information",type:"Capability",layer:"strategy"}],f=[{id:"_g1HR0DsIEDaQfcpB0MHjlw",sourceId:"_Q8QiwDsIEDaQfcpB0MHjlw",targetId:"_g1FcoTsIEDaQfcpB0MHjlw",type:"Composition"},{id:"_lkubnjsIEDaQfcpB0MHjlw",sourceId:"_RUk8ITsIEDaQfcpB0MHjlw",targetId:"_lkubkDsIEDaQfcpB0MHjlw",type:"Composition"},{id:"_NqI1QjsJEDaQfcpB0MHjlw",sourceId:"_BrOzQTsJEDaQfcpB0MHjlw",targetId:"_4DddMDsHEDaQfcpB0MHjlw",type:"Realization"},{id:"_YFHmYDsJEDaQfcpB0MHjlw",sourceId:"_RpGlMDsJEDaQfcpB0MHjlw",targetId:"_BrOzQTsJEDaQfcpB0MHjlw",type:"Association"},{id:"_cQsO8zsJEDaQfcpB0MHjlw",sourceId:"_z4TEUTsHEDaQfcpB0MHjlw",targetId:"_fnk9ITsHEDaQfcpB0MHjlw",type:"Composition"},{id:"_d6NxgzsJEDaQfcpB0MHjlw",sourceId:"_z4TEUTsHEDaQfcpB0MHjlw",targetId:"_Q8QiwDsIEDaQfcpB0MHjlw",type:"Composition"},{id:"_jlVEwjsKEDaQfcpB0MHjlw",sourceId:"_gWvB0DsKEDaQfcpB0MHjlw",targetId:"_4DddMDsHEDaQfcpB0MHjlw",type:"Realization"},{id:"_ql16IjsKEDaQfcpB0MHjlw",sourceId:"_yjKLcTsJEDaQfcpB0MHjlw",targetId:"_gWvB0DsKEDaQfcpB0MHjlw",type:"Association"},{id:"_I9ywATsLEDacUOSgnFJpfA",sourceId:"_z4TEUTsHEDaQfcpB0MHjlw",targetId:"_RUk8ITsIEDaQfcpB0MHjlw",type:"Composition"},{id:"_n8CJ0DsLEDacUOSgnFJpfA",sourceId:"_lj-GQTsLEDacUOSgnFJpfA",targetId:"_jK8ZYTsLEDacUOSgnFJpfA",type:"Association"},{id:"_rtZioDsLEDacUOSgnFJpfA",sourceId:"_jK8ZYTsLEDacUOSgnFJpfA",targetId:"_-nntwTsHEDaQfcpB0MHjlw",type:"Realization"},{id:"_s4F0IzsLEDacUOSgnFJpfA",sourceId:"_jK8ZYTsLEDacUOSgnFJpfA",targetId:"_lkubkDsIEDaQfcpB0MHjlw",type:"Realization"},{id:"_Ovi2wjsMEDacUOSgnFJpfA",sourceId:"_RpGlMDsJEDaQfcpB0MHjlw",targetId:"_05bNUTsLEDacUOSgnFJpfA",type:"Association"},{id:"_l8jI4TsMEDacUOSgnFJpfA",sourceId:"_yjKLcTsJEDaQfcpB0MHjlw",targetId:"_jKLu8TsMEDacUOSgnFJpfA",type:"Realization"},{id:"_s1NHIzsqEDacUOSgnFJpfA",sourceId:"_RpGlMDsJEDaQfcpB0MHjlw",targetId:"_pDg-MDsqEDacUOSgnFJpfA",type:"Realization"},{id:"_KrSmETsrEDacUOSgnFJpfA",sourceId:"_BrOzQTsJEDaQfcpB0MHjlw",targetId:"_05bNUTsLEDacUOSgnFJpfA",type:"Association"}],E=[{id:"_WZsIAljZEeioG62n2D5JZQ",name:"Data model test",viewpoint:""},{id:"_T1-DsZGgEDaaMc96clAAAA",name:"archimate-diagram",viewpoint:""}],j={identifier:a,archimateId:e,name:s,description:t,formats:c,source:n,sourceFile:i,sourceFormat:p,timestamp:o,tags:l,duplicates:r,language:D,elements:d,relationships:f,views:E};export{e as archimateId,j as default,t as description,r as duplicates,d as elements,c as formats,a as identifier,D as language,s as name,f as relationships,n as source,i as sourceFile,p as sourceFormat,l as tags,o as timestamp,E as views};
