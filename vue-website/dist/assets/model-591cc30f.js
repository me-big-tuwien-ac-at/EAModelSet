const o="https://me.big.tuwien.ac.at/EAModelSet/_1dQksEUSEeufTvxJgLajhw",d="_1dQksEUSEeufTvxJgLajhw",C="SGGM-102 SW architecture",e="",t=["XML","CSV","JSON","ARCHIMATE"],i="GenMyModel",a="raw-data/genmymodel/_1dqkseuseeuftvxjglajhw.xml",s="XML",n="29-06-2023 09:25:05",p=[],m=[],c="la",r=[{id:"_C08gwCdBEDmCHdCPXos9Ug",name:"Suse Linux 15 (host)",type:"Grouping",layer:"other"},{id:"__PZ9cCdAEDmCHdCPXos9Ug",name:"Windows 7 x64",type:"Grouping",layer:"other"},{id:"_UCyFwCdBEDmCHdCPXos9Ug",name:"WDM",type:"ApplicationService",layer:"application"},{id:"_XYD_gCdBEDmCHdCPXos9Ug",name:"Genie-2000",type:"ApplicationComponent",layer:"application"},{id:"_psfZICdBEDmCHdCPXos9Ug",name:"SGL-Canberra-driver",type:"ApplicationInteraction",layer:"application"},{id:"__Y9soCdBEDmCHdCPXos9Ug",name:"SGL-102-core",type:"ApplicationComponent",layer:"application"},{id:"_yfiGoCdCEDmCHdCPXos9Ug",name:"SQLite",type:"ApplicationComponent",layer:"application"},{id:"_4SXn8CdCEDmCHdCPXos9Ug",name:"Коммуникационный модуль (ModBus, обращение к SGL-Canberra-driver, работа с WAGO и т.п.)",type:"ApplicationComponent",layer:"application"},{id:"_GdoMwCdDEDmCHdCPXos9Ug",name:"Модуль бизнес-логики (реализация режимов работы)",type:"ApplicationComponent",layer:"application"},{id:"_QpEGACdDEDmCHdCPXos9Ug",name:"LibSpectrum",type:"ApplicationComponent",layer:"application"},{id:"_AIUtACdCEDmCHdCPXos9Ug",name:"SGL-102-GUI",type:"ApplicationComponent",layer:"application"},{id:"_tRTuQCdCEDmCHdCPXos9Ug",name:"Database (archive data)",type:"ApplicationFunction",layer:"application"},{id:"_Yq1kECdDEDmCHdCPXos9Ug",name:"Спектрометрические функции",type:"ApplicationFunction",layer:"application"},{id:"_d-AG0CdDEDmCHdCPXos9Ug",name:"Математические функции",type:"ApplicationFunction",layer:"application"},{id:"_0yy_MCdBEDmCHdCPXos9Ug",name:"LYNX",type:"Equipment",layer:"technology"},{id:"_5uZ9kCdBEDmCHdCPXos9Ug",name:"GC3018",type:"Equipment",layer:"technology"}],g=[{id:"_aRUEkCdBEDmCHdCPXos9Ug",sourceId:"_XYD_gCdBEDmCHdCPXos9Ug",targetId:"_UCyFwCdBEDmCHdCPXos9Ug",type:"Association"},{id:"_xYnXUCdBEDmCHdCPXos9Ug",sourceId:"_UCyFwCdBEDmCHdCPXos9Ug",targetId:"_psfZICdBEDmCHdCPXos9Ug",type:"Association"},{id:"_9XS6YCdCEDmCHdCPXos9Ug",sourceId:"_psfZICdBEDmCHdCPXos9Ug",targetId:"_4SXn8CdCEDmCHdCPXos9Ug",type:"Association"},{id:"_NYK9ACdDEDmCHdCPXos9Ug",sourceId:"_GdoMwCdDEDmCHdCPXos9Ug",targetId:"_yfiGoCdCEDmCHdCPXos9Ug",type:"Association"},{id:"_OISyYCdDEDmCHdCPXos9Ug",sourceId:"_GdoMwCdDEDmCHdCPXos9Ug",targetId:"_4SXn8CdCEDmCHdCPXos9Ug",type:"Association"},{id:"_ix1CMCdDEDmCHdCPXos9Ug",sourceId:"_GdoMwCdDEDmCHdCPXos9Ug",targetId:"_QpEGACdDEDmCHdCPXos9Ug",type:"Association"},{id:"_GWQ18CdCEDmCHdCPXos9Ug",sourceId:"__Y9soCdBEDmCHdCPXos9Ug",targetId:"_AIUtACdCEDmCHdCPXos9Ug",type:"Association"},{id:"_hyyAACdDEDmCHdCPXos9Ug",sourceId:"_Yq1kECdDEDmCHdCPXos9Ug",targetId:"_d-AG0CdDEDmCHdCPXos9Ug",type:"Association"},{id:"_2hNo0CdBEDmCHdCPXos9Ug",sourceId:"_0yy_MCdBEDmCHdCPXos9Ug",targetId:"_psfZICdBEDmCHdCPXos9Ug",type:"Association"},{id:"_7e31oCdBEDmCHdCPXos9Ug",sourceId:"_5uZ9kCdBEDmCHdCPXos9Ug",targetId:"_0yy_MCdBEDmCHdCPXos9Ug",type:"Association"}],D=[{id:"_1dQks0USEeufTvxJgLajhw",name:"archimate-diagram",viewpoint:""}],l={identifier:o,archimateId:d,name:C,description:e,formats:t,source:i,sourceFile:a,sourceFormat:s,timestamp:n,tags:p,duplicates:m,language:c,elements:r,relationships:g,views:D};export{d as archimateId,l as default,e as description,m as duplicates,r as elements,t as formats,o as identifier,c as language,C as name,g as relationships,i as source,a as sourceFile,s as sourceFormat,p as tags,n as timestamp,D as views};