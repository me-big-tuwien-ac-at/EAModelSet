const e="https://me.big.tuwien.ac.at/EAModelSet/__NpqUKM4EeqEM7mFKilpXw",i="__NpqUKM4EeqEM7mFKilpXw",n="System configuration lifecycle",s="",t=["XML","CSV","JSON","ARCHIMATE"],o="GenMyModel",r="raw-data/genmymodel/__npqukm4eeqem7mfkilpxw.xml",Y="XML",_="29-06-2023 09:25:46",a=[],d=[],u="ru",E=[{id:"_BV-yAYVnEDiTOevQ30kYnA",name:"Разработка проектной и рабочей документации",type:"BusinessFunction",layer:"business"},{id:"_BrRFgYVnEDiTOevQ30kYnA",name:"Реализация системных элементов, заводские испытания (FAT)",type:"BusinessFunction",layer:"business"},{id:"_B4YUcYVnEDiTOevQ30kYnA",name:"Производство системы на площадке Субпоставщика, заводские испытания (FAT)",type:"BusinessFunction",layer:"business"},{id:"_bFs4gYVnEDiTOevQ30kYnA",name:"Программное обеспечение Субподрядчика",type:"SystemSoftware",layer:"technology"},{id:"_br_ccYVnEDiTOevQ30kYnA",name:"Оборудование Субподрядчика",type:"Equipment",layer:"technology"},{id:"_l_nBUYVnEDiTOevQ30kYnA",name:"Базовая конфигурация",type:"Artifact",layer:"technology"},{id:"_LsQz4YVoEDiTOevQ30kYnA",name:"Начало Проекта",type:"BusinessEvent",layer:"business"},{id:"_QLKBEYVoEDiTOevQ30kYnA",name:"Отгрузка продукции на АЭС ПАКШ-II",type:"BusinessEvent",layer:"business"},{id:"_jG4EMYVoEDiTOevQ30kYnA",name:"Поставка продукции Субпоставщику",type:"BusinessEvent",layer:"business"},{id:"_qiycIIVoEDiTOevQ30kYnA",name:"Приемочные испытания системы (SAT)",type:"BusinessFunction",layer:"business"},{id:"_0oWW4IVoEDiTOevQ30kYnA",name:"Выпуск базовой конфигурации",type:"BusinessProcess",layer:"business"},{id:"_Kfu54IVpEDiTOevQ30kYnA",name:"Комплексные испытания системы (CT)",type:"BusinessFunction",layer:"business"},{id:"_SvtzEYVpEDiTOevQ30kYnA",name:"Окончание Проекта",type:"BusinessEvent",layer:"business"},{id:"_hhsZoYVpEDiTOevQ30kYnA",name:"Изменение конфигурации",type:"BusinessProcess",layer:"business"},{id:"_ryCBAIVpEDiTOevQ30kYnA",name:"Текущая одобренная конфигурация",type:"Artifact",layer:"technology"},{id:"_xqFZgYVpEDiTOevQ30kYnA",name:"Эксплуатация",type:"BusinessFunction",layer:"business"},{id:"_MdxDQIZuEDi_7u_0jXXBtQ",name:"Разработка требований к системе",type:"BusinessFunction",layer:"business"},{id:"_V_PZgYZuEDi_7u_0jXXBtQ",name:"Требования",type:"Representation",layer:"business"},{id:"_bG2MgIZuEDi_7u_0jXXBtQ",name:"Документация",type:"Representation",layer:"business"},{id:"_eSlkoIhvEDipd4CKRnpS3g",name:"Function",type:"BusinessFunction",layer:"business"},{id:"_e1JfIYhvEDipd4CKRnpS3g",name:"Role",type:"BusinessRole",layer:"business"}],p=[{id:"_IRfLk4VnEDiTOevQ30kYnA",sourceId:"_BV-yAYVnEDiTOevQ30kYnA",targetId:"_BrRFgYVnEDiTOevQ30kYnA",type:"Triggering"},{id:"_j0P9A4VnEDiTOevQ30kYnA",sourceId:"_BrRFgYVnEDiTOevQ30kYnA",targetId:"_br_ccYVnEDiTOevQ30kYnA",type:"Association"},{id:"_kQd-8oVnEDiTOevQ30kYnA",sourceId:"_BrRFgYVnEDiTOevQ30kYnA",targetId:"_bFs4gYVnEDiTOevQ30kYnA",type:"Association"},{id:"_nz0UcYVoEDiTOevQ30kYnA",sourceId:"_BrRFgYVnEDiTOevQ30kYnA",targetId:"_jG4EMYVoEDiTOevQ30kYnA",type:"Triggering"},{id:"_oU6PU4VoEDiTOevQ30kYnA",sourceId:"_jG4EMYVoEDiTOevQ30kYnA",targetId:"_B4YUcYVnEDiTOevQ30kYnA",type:"Triggering"},{id:"_1hdJIYVoEDiTOevQ30kYnA",sourceId:"_B4YUcYVnEDiTOevQ30kYnA",targetId:"_0oWW4IVoEDiTOevQ30kYnA",type:"Triggering"},{id:"_6FZOYYVoEDiTOevQ30kYnA",sourceId:"_0oWW4IVoEDiTOevQ30kYnA",targetId:"_l_nBUYVnEDiTOevQ30kYnA",type:"Association"},{id:"_8L3LoYVoEDiTOevQ30kYnA",sourceId:"_0oWW4IVoEDiTOevQ30kYnA",targetId:"_QLKBEYVoEDiTOevQ30kYnA",type:"Triggering"},{id:"_8tggIoVoEDiTOevQ30kYnA",sourceId:"_QLKBEYVoEDiTOevQ30kYnA",targetId:"_qiycIIVoEDiTOevQ30kYnA",type:"Triggering"},{id:"_ObaFQoVpEDiTOevQ30kYnA",sourceId:"_qiycIIVoEDiTOevQ30kYnA",targetId:"_Kfu54IVpEDiTOevQ30kYnA",type:"Triggering"},{id:"_ka8esIVpEDiTOevQ30kYnA",sourceId:"_qiycIIVoEDiTOevQ30kYnA",targetId:"_hhsZoYVpEDiTOevQ30kYnA",type:"Association"},{id:"_k5rpIYVpEDiTOevQ30kYnA",sourceId:"_Kfu54IVpEDiTOevQ30kYnA",targetId:"_hhsZoYVpEDiTOevQ30kYnA",type:"Association"},{id:"_uLADgoVpEDiTOevQ30kYnA",sourceId:"_hhsZoYVpEDiTOevQ30kYnA",targetId:"_ryCBAIVpEDiTOevQ30kYnA",type:"Association"},{id:"_yYrk44VpEDiTOevQ30kYnA",sourceId:"_Kfu54IVpEDiTOevQ30kYnA",targetId:"_xqFZgYVpEDiTOevQ30kYnA",type:"Triggering"},{id:"_zM7FQYVpEDiTOevQ30kYnA",sourceId:"_xqFZgYVpEDiTOevQ30kYnA",targetId:"_SvtzEYVpEDiTOevQ30kYnA",type:"Triggering"},{id:"_z0MgoIVpEDiTOevQ30kYnA",sourceId:"_xqFZgYVpEDiTOevQ30kYnA",targetId:"_hhsZoYVpEDiTOevQ30kYnA",type:"Association"},{id:"_T_gWYYZuEDi_7u_0jXXBtQ",sourceId:"_LsQz4YVoEDiTOevQ30kYnA",targetId:"_MdxDQIZuEDi_7u_0jXXBtQ",type:"Triggering"},{id:"_cHH9wYZuEDi_7u_0jXXBtQ",sourceId:"_MdxDQIZuEDi_7u_0jXXBtQ",targetId:"_V_PZgYZuEDi_7u_0jXXBtQ",type:"Association"},{id:"_ckTpA4ZuEDi_7u_0jXXBtQ",sourceId:"_BV-yAYVnEDiTOevQ30kYnA",targetId:"_bG2MgIZuEDi_7u_0jXXBtQ",type:"Association"},{id:"_edafsoZuEDi_7u_0jXXBtQ",sourceId:"_MdxDQIZuEDi_7u_0jXXBtQ",targetId:"_BV-yAYVnEDiTOevQ30kYnA",type:"Triggering"},{id:"_fhaIMYhvEDipd4CKRnpS3g",sourceId:"_e1JfIYhvEDipd4CKRnpS3g",targetId:"_eSlkoIhvEDipd4CKRnpS3g",type:"Association"}],c=[{id:"__NpqU6M4EeqEM7mFKilpXw",name:"archimate-diagram",viewpoint:""}],A={identifier:e,archimateId:i,name:n,description:s,formats:t,source:o,sourceFile:r,sourceFormat:Y,timestamp:_,tags:a,duplicates:d,language:u,elements:E,relationships:p,views:c};export{i as archimateId,A as default,s as description,d as duplicates,E as elements,t as formats,e as identifier,u as language,n as name,p as relationships,o as source,r as sourceFile,Y as sourceFormat,a as tags,_ as timestamp,c as views};