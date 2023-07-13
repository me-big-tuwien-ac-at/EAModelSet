const s="https://me.big.tuwien.ac.at/EAModelSet/_CbEkYKNAEeqEM7mFKilpXw",i="_CbEkYKNAEeqEM7mFKilpXw",e="Software configuration lifecycle",E="",d=["XML","CSV","JSON","ARCHIMATE"],t="GenMyModel",I="raw-data/genmymodel/_cbekyknaeeqem7mfkilpxw.xml",u="XML",g="29-06-2023 09:26:07",n=[],l=[],p="ru",r=[{id:"_EdvI8IVuEDilIsBgxLNkpQ",name:"Начало Проекта",type:"BusinessEvent",layer:"business"},{id:"_EdvwAYVuEDilIsBgxLNkpQ",name:"Разработка программного обеспечения",type:"BusinessFunction",layer:"business"},{id:"_EdwXEIVuEDilIsBgxLNkpQ",name:"Релиз-тестирование",type:"BusinessFunction",layer:"business"},{id:"_EdwXEoVuEDilIsBgxLNkpQ",name:"Выпуск базовой конфигурации",type:"BusinessProcess",layer:"business"},{id:"_EdwXFIVuEDilIsBgxLNkpQ",name:"Инсталляция, конфигурирование, заводские испытания с применением поставочного оборудования и эмуляторов (FAT)",type:"BusinessFunction",layer:"business"},{id:"_EdwXFoVuEDilIsBgxLNkpQ",name:"Квалификация, сертификация, метрологическая аттестация",type:"BusinessFunction",layer:"business"},{id:"_Edw-IIVuEDilIsBgxLNkpQ",name:"Поставка Субпоставщику",type:"BusinessEvent",layer:"business"},{id:"_Edw-IoVuEDilIsBgxLNkpQ",name:"Применение на площадке Субпоставщика в составе Системы",type:"BusinessFunction",layer:"business"},{id:"_Edw-JIVuEDilIsBgxLNkpQ",name:"Ввод в эксплуатацию и эксплуатация на площадке АЭС ПАКШ-II",type:"BusinessFunction",layer:"business"},{id:"_EdxlMYVuEDilIsBgxLNkpQ",name:"Поставка на АЭС ПАКШ-II",type:"BusinessEvent",layer:"business"},{id:"_EdxlM4VuEDilIsBgxLNkpQ",name:"Окончание Проекта",type:"BusinessEvent",layer:"business"},{id:"_EdyMQYVuEDilIsBgxLNkpQ",name:"Базовая конфигурация 1",type:"Artifact",layer:"technology"},{id:"_EdyMQ4VuEDilIsBgxLNkpQ",name:"Управление изменениями конфигурации",type:"BusinessProcess",layer:"business"},{id:"_EdyzUYVuEDilIsBgxLNkpQ",name:"Текущая одобренная конфигурация 2",type:"Artifact",layer:"technology"},{id:"_EdyzU4VuEDilIsBgxLNkpQ",name:"Управление изменениями конфигурации",type:"BusinessProcess",layer:"business"},{id:"_EdyzVYVuEDilIsBgxLNkpQ",name:"Текущая одобренная конфигурация 1",type:"Artifact",layer:"technology"},{id:"_EdyzV4VuEDilIsBgxLNkpQ",name:"Выпуск базовой конфигурации",type:"BusinessProcess",layer:"business"},{id:"_EdzaYIVuEDilIsBgxLNkpQ",name:"Базовая конфигурация 2",type:"Artifact",layer:"technology"},{id:"_i8OrsIVuEDiUVr09QWEGdw",name:"Разработка требований",type:"BusinessFunction",layer:"business"}],o=[{id:"_EdzaZIVuEDilIsBgxLNkpQ",sourceId:"_EdvwAYVuEDilIsBgxLNkpQ",targetId:"_EdwXEIVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_EdzaZoVuEDilIsBgxLNkpQ",sourceId:"_EdwXEIVuEDilIsBgxLNkpQ",targetId:"_EdwXEoVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed0BcYVuEDilIsBgxLNkpQ",sourceId:"_EdwXEoVuEDilIsBgxLNkpQ",targetId:"_EdyMQYVuEDilIsBgxLNkpQ",type:"Association"},{id:"_Ed0Bc4VuEDilIsBgxLNkpQ",sourceId:"_EdwXEoVuEDilIsBgxLNkpQ",targetId:"_EdwXFoVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed0ogYVuEDilIsBgxLNkpQ",sourceId:"_EdwXFoVuEDilIsBgxLNkpQ",targetId:"_EdwXFIVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed1PkIVuEDilIsBgxLNkpQ",sourceId:"_EdwXFIVuEDilIsBgxLNkpQ",targetId:"_EdyzV4VuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed1PloVuEDilIsBgxLNkpQ",sourceId:"_EdyzV4VuEDilIsBgxLNkpQ",targetId:"_Edw-IIVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed3EwIVuEDilIsBgxLNkpQ",sourceId:"_EdyzV4VuEDilIsBgxLNkpQ",targetId:"_EdzaYIVuEDilIsBgxLNkpQ",type:"Association"},{id:"_Ed1PkoVuEDilIsBgxLNkpQ",sourceId:"_EdwXFoVuEDilIsBgxLNkpQ",targetId:"_EdyzU4VuEDilIsBgxLNkpQ",type:"Association"},{id:"_Ed1PlIVuEDilIsBgxLNkpQ",sourceId:"_Edw-IIVuEDilIsBgxLNkpQ",targetId:"_Edw-IoVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed12oYVuEDilIsBgxLNkpQ",sourceId:"_Edw-IoVuEDilIsBgxLNkpQ",targetId:"_EdyMQ4VuEDilIsBgxLNkpQ",type:"Association"},{id:"_Ed12o4VuEDilIsBgxLNkpQ",sourceId:"_Edw-IoVuEDilIsBgxLNkpQ",targetId:"_EdxlMYVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed12pYVuEDilIsBgxLNkpQ",sourceId:"_EdxlMYVuEDilIsBgxLNkpQ",targetId:"_Edw-JIVuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed2dsIVuEDilIsBgxLNkpQ",sourceId:"_Edw-JIVuEDilIsBgxLNkpQ",targetId:"_EdyMQ4VuEDilIsBgxLNkpQ",type:"Association"},{id:"_Ed2dsoVuEDilIsBgxLNkpQ",sourceId:"_Edw-JIVuEDilIsBgxLNkpQ",targetId:"_EdxlM4VuEDilIsBgxLNkpQ",type:"Triggering"},{id:"_Ed2dtIVuEDilIsBgxLNkpQ",sourceId:"_EdyMQ4VuEDilIsBgxLNkpQ",targetId:"_EdyzUYVuEDilIsBgxLNkpQ",type:"Association"},{id:"_Ed2dtoVuEDilIsBgxLNkpQ",sourceId:"_EdyzU4VuEDilIsBgxLNkpQ",targetId:"_EdyzVYVuEDilIsBgxLNkpQ",type:"Association"},{id:"_lPaPQoVuEDiUVr09QWEGdw",sourceId:"_EdvI8IVuEDilIsBgxLNkpQ",targetId:"_i8OrsIVuEDiUVr09QWEGdw",type:"Triggering"},{id:"_luFvUoVuEDiUVr09QWEGdw",sourceId:"_i8OrsIVuEDiUVr09QWEGdw",targetId:"_EdvwAYVuEDilIsBgxLNkpQ",type:"Triggering"}],a=[{id:"_CbEkY6NAEeqEM7mFKilpXw",name:"archimate-diagram",viewpoint:""}],B={identifier:s,archimateId:i,name:e,description:E,formats:d,source:t,sourceFile:I,sourceFormat:u,timestamp:g,tags:n,duplicates:l,language:p,elements:r,relationships:o,views:a};export{i as archimateId,B as default,E as description,l as duplicates,r as elements,d as formats,s as identifier,p as language,e as name,o as relationships,t as source,I as sourceFile,u as sourceFormat,n as tags,g as timestamp,a as views};