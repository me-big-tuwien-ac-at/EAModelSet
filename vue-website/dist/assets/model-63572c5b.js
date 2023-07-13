const i="https://me.big.tuwien.ac.at/EAModelSet/_qr8KYNMHEeqgY5yD8SByCQ",e="_qr8KYNMHEeqgY5yD8SByCQ",n="Техническая поддержка",s="",_=["XML","CSV","JSON","ARCHIMATE"],L="GenMyModel",t="raw-data/genmymodel/_qr8kynmheeqgy5yd8sbycq.xml",g="XML",l="29-06-2023 09:24:40",a=[],r=[],B="ru",E=[{id:"_Amv-ELU2EDinBL3x_lC9Xg",name:"Запрос на оказание услуг по реализации процесса сопровождения продукции",type:"BusinessEvent",layer:"business"},{id:"_GyKXcLU2EDinBL3x_lC9Xg",name:"Эксплуатирующая организация",type:"BusinessRole",layer:"business"},{id:"_Io858LU2EDinBL3x_lC9Xg",name:"Непосредственный заказчик",type:"BusinessRole",layer:"business"},{id:"_MPimILU2EDinBL3x_lC9Xg",name:"Запрос на оказание услуг по реализации процесса передачи и валидации продукции",type:"BusinessEvent",layer:"business"},{id:"_crIO0LU2EDinBL3x_lC9Xg",name:"Сотрудник компании, получивший обращение",type:"BusinessRole",layer:"business"},{id:"_mAmJYLU2EDinBL3x_lC9Xg",name:"Руководитель рабочей группы заказа",type:"BusinessRole",layer:"business"},{id:"_x4VzcLU2EDinBL3x_lC9Xg",name:"Регистрация запроса в Wrike",type:"BusinessFunction",layer:"business"},{id:"_0OoVYLU2EDinBL3x_lC9Xg",name:"Адресат/автор запроса со стороны компании",type:"BusinessRole",layer:"business"},{id:"_-C0MQLU2EDinBL3x_lC9Xg",name:"Обработка запроса",type:"BusinessFunction",layer:"business"},{id:"_HmsWQLU3EDinBL3x_lC9Xg",name:"Диспетчер технической поддержки",type:"BusinessRole",layer:"business"},{id:"_KmLmMLU3EDinBL3x_lC9Xg",name:"Уточнение деталей запроса, связь с эксплуатирующей организацией, оценка необходимых мероприятий, предварительная оценка ресурсов",type:"Representation",layer:"business"},{id:"_SxgB0LU3EDinBL3x_lC9Xg",name:"Формирование временной рабочей группы",type:"BusinessFunction",layer:"business"},{id:"_bUq8wLU3EDinBL3x_lC9Xg",name:"Рабочая группа может включать основных специалистов группы ремонта и ТО или привлекаемых специалистов ОРПО, ООКР, ОИПП и т.д.",type:"Representation",layer:"business"},{id:"_mq_UwLU3EDinBL3x_lC9Xg",name:"Планирование задач рабочей группы",type:"BusinessFunction",layer:"business"},{id:"_sVmHILU3EDinBL3x_lC9Xg",name:"Руководитель рабочей группы",type:"BusinessRole",layer:"business"},{id:"_vHltoLU3EDinBL3x_lC9Xg",name:"Задачи в Wrike конкретным исполнителем, согласованные с их руководством",type:"Representation",layer:"business"},{id:"_02H9wLU3EDinBL3x_lC9Xg",name:"Исполнение запроса",type:"BusinessFunction",layer:"business"},{id:"_5OxZALU3EDinBL3x_lC9Xg",name:"Оказание услуг по технической поддержке",type:"Representation",layer:"business"},{id:"_Ik51gLU4EDinBL3x_lC9Xg",name:"Установление рабочего канала взаимодействия с эксплуатирующей организацией",type:"BusinessFunction",layer:"business"},{id:"_SQMPELU4EDinBL3x_lC9Xg",name:"Закрытие запроса и информирование автора о результатах",type:"BusinessFunction",layer:"business"},{id:"_TAayILU4EDinBL3x_lC9Xg",name:"Рабочая группа",type:"BusinessCollaboration",layer:"business"},{id:"_ZE9HcLU4EDinBL3x_lC9Xg",name:"Диспетчер технической поддержки",type:"BusinessRole",layer:"business"},{id:"_dDgnsLU4EDinBL3x_lC9Xg",name:"Запрос закрыт",type:"BusinessEvent",layer:"business"},{id:"_LmeBsLU7EDinBL3x_lC9Xg",name:"Отчетная документация: акты ШМ и (Ш)ПНР, наладки/испытаний, дефектов и т.п.",type:"Representation",layer:"business"}],o=[{id:"_KbkHELU2EDinBL3x_lC9Xg",sourceId:"_GyKXcLU2EDinBL3x_lC9Xg",targetId:"_Amv-ELU2EDinBL3x_lC9Xg",type:"Association"},{id:"_LOLPwLU2EDinBL3x_lC9Xg",sourceId:"_Io858LU2EDinBL3x_lC9Xg",targetId:"_Amv-ELU2EDinBL3x_lC9Xg",type:"Association"},{id:"_f_W_sLU2EDinBL3x_lC9Xg",sourceId:"_crIO0LU2EDinBL3x_lC9Xg",targetId:"_Amv-ELU2EDinBL3x_lC9Xg",type:"Association"},{id:"_nwVBoLU2EDinBL3x_lC9Xg",sourceId:"_mAmJYLU2EDinBL3x_lC9Xg",targetId:"_MPimILU2EDinBL3x_lC9Xg",type:"Association"},{id:"_2-E-MLU2EDinBL3x_lC9Xg",sourceId:"_0OoVYLU2EDinBL3x_lC9Xg",targetId:"_x4VzcLU2EDinBL3x_lC9Xg",type:"Association"},{id:"_5wKEQLU2EDinBL3x_lC9Xg",sourceId:"_Amv-ELU2EDinBL3x_lC9Xg",targetId:"_x4VzcLU2EDinBL3x_lC9Xg",type:"Triggering"},{id:"_6O2ycLU2EDinBL3x_lC9Xg",sourceId:"_MPimILU2EDinBL3x_lC9Xg",targetId:"_x4VzcLU2EDinBL3x_lC9Xg",type:"Triggering"},{id:"__0u10LU2EDinBL3x_lC9Xg",sourceId:"_x4VzcLU2EDinBL3x_lC9Xg",targetId:"_-C0MQLU2EDinBL3x_lC9Xg",type:"Triggering"},{id:"_J7zMcLU3EDinBL3x_lC9Xg",sourceId:"_HmsWQLU3EDinBL3x_lC9Xg",targetId:"_-C0MQLU2EDinBL3x_lC9Xg",type:"Association"},{id:"_SRd24LU3EDinBL3x_lC9Xg",sourceId:"_-C0MQLU2EDinBL3x_lC9Xg",targetId:"_KmLmMLU3EDinBL3x_lC9Xg",type:"Association"},{id:"_X251YLU3EDinBL3x_lC9Xg",sourceId:"_-C0MQLU2EDinBL3x_lC9Xg",targetId:"_SxgB0LU3EDinBL3x_lC9Xg",type:"Triggering"},{id:"_ZLkiQLU3EDinBL3x_lC9Xg",sourceId:"_HmsWQLU3EDinBL3x_lC9Xg",targetId:"_SxgB0LU3EDinBL3x_lC9Xg",type:"Association"},{id:"_j9a7QLU3EDinBL3x_lC9Xg",sourceId:"_SxgB0LU3EDinBL3x_lC9Xg",targetId:"_bUq8wLU3EDinBL3x_lC9Xg",type:"Association"},{id:"_t6dMILU3EDinBL3x_lC9Xg",sourceId:"_sVmHILU3EDinBL3x_lC9Xg",targetId:"_mq_UwLU3EDinBL3x_lC9Xg",type:"Association"},{id:"_ymwjMLU3EDinBL3x_lC9Xg",sourceId:"_mq_UwLU3EDinBL3x_lC9Xg",targetId:"_vHltoLU3EDinBL3x_lC9Xg",type:"Association"},{id:"_3VYOcLU3EDinBL3x_lC9Xg",sourceId:"_mq_UwLU3EDinBL3x_lC9Xg",targetId:"_02H9wLU3EDinBL3x_lC9Xg",type:"Triggering"},{id:"_7BQqULU3EDinBL3x_lC9Xg",sourceId:"_02H9wLU3EDinBL3x_lC9Xg",targetId:"_02H9wLU3EDinBL3x_lC9Xg",type:"Triggering"},{id:"_AvpwgLU4EDinBL3x_lC9Xg",sourceId:"_5OxZALU3EDinBL3x_lC9Xg",targetId:"_02H9wLU3EDinBL3x_lC9Xg",type:"Association"},{id:"_NEZfoLU4EDinBL3x_lC9Xg",sourceId:"_SxgB0LU3EDinBL3x_lC9Xg",targetId:"_Ik51gLU4EDinBL3x_lC9Xg",type:"Triggering"},{id:"_Ndxo8LU4EDinBL3x_lC9Xg",sourceId:"_Ik51gLU4EDinBL3x_lC9Xg",targetId:"_mq_UwLU3EDinBL3x_lC9Xg",type:"Triggering"},{id:"_N42bYLU4EDinBL3x_lC9Xg",sourceId:"_sVmHILU3EDinBL3x_lC9Xg",targetId:"_Ik51gLU4EDinBL3x_lC9Xg",type:"Association"},{id:"_UY2ksLU4EDinBL3x_lC9Xg",sourceId:"_TAayILU4EDinBL3x_lC9Xg",targetId:"_02H9wLU3EDinBL3x_lC9Xg",type:"Association"},{id:"_bUI70LU4EDinBL3x_lC9Xg",sourceId:"_ZE9HcLU4EDinBL3x_lC9Xg",targetId:"_SQMPELU4EDinBL3x_lC9Xg",type:"Association"},{id:"_bsZDwLU4EDinBL3x_lC9Xg",sourceId:"_02H9wLU3EDinBL3x_lC9Xg",targetId:"_SQMPELU4EDinBL3x_lC9Xg",type:"Triggering"},{id:"_ghKaULU4EDinBL3x_lC9Xg",sourceId:"_SQMPELU4EDinBL3x_lC9Xg",targetId:"_dDgnsLU4EDinBL3x_lC9Xg",type:"Triggering"},{id:"_Q6ECQLU7EDinBL3x_lC9Xg",sourceId:"_SQMPELU4EDinBL3x_lC9Xg",targetId:"_LmeBsLU7EDinBL3x_lC9Xg",type:"Association"}],d=[{id:"_qr8KY9MHEeqgY5yD8SByCQ",name:"archimate-diagram",viewpoint:""}],x={identifier:i,archimateId:e,name:n,description:s,formats:_,source:L,sourceFile:t,sourceFormat:g,timestamp:l,tags:a,duplicates:r,language:B,elements:E,relationships:o,views:d};export{e as archimateId,x as default,s as description,r as duplicates,E as elements,_ as formats,i as identifier,B as language,n as name,o as relationships,L as source,t as sourceFile,g as sourceFormat,a as tags,l as timestamp,d as views};
