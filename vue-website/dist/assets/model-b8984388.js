const e="https://me.big.tuwien.ac.at/EAModelSet/id-0886eda541c445b79a6c8f0ef8650077",d="id-0886eda541c445b79a6c8f0ef8650077",a="Delivery_future",i="",c=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",t="raw-data/github/archimate/delivery_future.archimate",f="ARCHIMATE",o="29-06-2023 09:29:41",n=[],s=[],r="ru",p=[{id:"id-d1975748609f444daedabea520368d8b",name:"Сервис доставки груза",type:"BusinessService",layer:"business"},{id:"id-f7f48b1649c6422e973349afaaedda1c",name:"Телефон",type:"BusinessInterface",layer:"business"},{id:"id-a213077cd5ca4189b6d5912366b895ba",name:"Офис",type:"BusinessInterface",layer:"business"},{id:"id-072b6753c76e4d7e8d455e08ca1c92bb",name:"Счёт на оплату клиенту",type:"BusinessObject",layer:"business"},{id:"id-bb0fd33ddcbf4468848581aba003ab15",name:"Клиент",type:"BusinessActor",layer:"business"},{id:"id-6aae77e1daf34428ad4224f8d975134c",name:"Специалист приема заявок на доставку",type:"BusinessRole",layer:"business"},{id:"id-cbcb6646c4464c4da9a50ea7213ff878",name:"Доставка отправлений адресатам",type:"BusinessProcess",layer:"business"},{id:"id-249302d4d929406a8e853ef857f99297",name:"Прием груза",type:"BusinessProcess",layer:"business"},{id:"id-7151ccd853c34116ad04f300c32528d2",name:"Хранение груза",type:"BusinessProcess",layer:"business"},{id:"id-96c4571322d64df5869819ddd923cffa",name:"Обработка груза",type:"BusinessProcess",layer:"business"},{id:"id-c8e290d32a8e471794efbb148b56db25",name:"Доставка груза",type:"BusinessProcess",layer:"business"},{id:"id-56ae59a8ba4a4e1c810e22810c5d2d73",name:"Заявка на доставку груза",type:"BusinessEvent",layer:"business"},{id:"id-5ab6635d75b74fab9ba0a311b31865f1",name:"Груз доставлен",type:"BusinessEvent",layer:"business"},{id:"id-bd1b0972d8f04460bedda381772fc4cb",name:"сайт",type:"BusinessInterface",layer:"business"},{id:"id-ba067f94219d4ab8b7dcc0f7f6e95bc0",name:"Сервис мониторинга транспорта",type:"ApplicationService",layer:"application"},{id:"id-1fd2691b857441a480b5dc1ffe41b3dd",name:"Сервис учета произведенных доставок",type:"ApplicationService",layer:"application"},{id:"id-7ce25f9dd68c44d28794807c74ab1126",name:"Оформление грузовых отправлений",type:"ApplicationService",layer:"application"},{id:"id-3c419a4f6f7b48bb955e166bcc6ce52f",name:"Сервис приема отправлений",type:"ApplicationService",layer:"application"},{id:"id-13808443b8c44372b22782d6de4c300c",name:"Excel ",type:"ApplicationComponent",layer:"application"},{id:"id-300bef86cdc948b6813b14cda95ca2d7",name:"ИС 1С: Бухгалтерия",type:"ApplicationComponent",layer:"application"},{id:"id-17003da7524d443ab2f7e0680abf0ac8",name:"Мониторинг транспорта",type:"ApplicationComponent",layer:"application"},{id:"id-2550c17a7533435683ece1a2de07c2df",name:"Реест отправлений",type:"ApplicationComponent",layer:"application"},{id:"id-c6ae691fce474260a14a72c51c1720c0",name:"Сервис мониторинга статуса груза",type:"ApplicationService",layer:"application"},{id:"id-13d101dc1d714b948426176519fc24d0",name:"Сервис мониторинга курьеров",type:"ApplicationService",layer:"application"},{id:"id-3ed6b67058f24c94a7d4e00ca7053b2c",name:"Геолокация курьера ",type:"ApplicationComponent",layer:"application"},{id:"id-957df2d4066046b797de25d162d2ab8f",name:" Локальная сеть",type:"CommunicationNetwork",layer:"technology"},{id:"id-7a4d0a18e43645f59bcf31ea37a9396e",name:"APM сотрудника",type:"Device",layer:"technology"},{id:"id-3183b051dd684be580246ca074e2e2ae",name:"Сервер хранения файлов",type:"Node",layer:"technology"},{id:"id-cbb8c54c328b4f139b7ff3638b69e4e7",name:"СУБД Access ",type:"SystemSoftware",layer:"technology"},{id:"id-40594bde6b4a4305a1c1e39761de52f5",name:"Очередь сообщений",type:"SystemSoftware",layer:"technology"},{id:"id-6e681332666048639e049c26167c3028",name:"Windows 7, 8, IOS (СО ПК и планшетов)",type:"SystemSoftware",layer:"technology"},{id:"id-e319cc3339744250a76b4b507f658bbf",name:"Компьютер",type:"Device",layer:"technology"},{id:"id-fb9b83e84f584346b78ca80f41a32140",name:"Планшет",type:"Device",layer:"technology"},{id:"id-43cd89e31d18431aa483974eabc7bf3b",name:"Microsoft Office версий 2007, 2010  (на ПК)",type:"SystemSoftware",layer:"technology"},{id:"id-0769d5ff71634334b22f5043d280b1cc",name:"Мониторинг транспорта",type:"SystemSoftware",layer:"technology"},{id:"id-9e0a3aebacb64721bacbd8c2ef3cc466",name:"Сервер 1С Бухгалтерия",type:"Node",layer:"technology"},{id:"id-ce301d9f90c946e198abf23be9c4dd97",name:"Отчетность",type:"SystemSoftware",layer:"technology"},{id:"id-eec812f617a64e9ba9fb267a2206c613",name:"Финансовые проводки",type:"SystemSoftware",layer:"technology"},{id:"id-9b92665f43c44ca9bd46efc82773b1b3",name:"Очередь сообщений",type:"SystemSoftware",layer:"technology"},{id:"id-99b97bb6d1174ca8871ca950d9bf581d",name:"Компьютер ",type:"Device",layer:"technology"},{id:"id-baca253dc8ab4c2d94bf057a5271b2e2",name:"Телефон",type:"Device",layer:"technology"},{id:"id-84537e51d6bc49339c9c28e71e1ec8b1",name:"ОАО «Мобильные ТелеСистемы»  и ОАО «МегаФон»",type:"CommunicationNetwork",layer:"technology"},{id:"id-6b894271364b4b8c85f5cc298424348c",name:"Сервис 1С",type:"TechnologyService",layer:"technology"},{id:"id-1a1af0a5a6d14d75a61610d60524e4ad",name:"Сервис баз данных",type:"TechnologyService",layer:"technology"},{id:"id-b4932cf24be041789bc48234771c2eb9",name:"Сервис обмена сообщениями",type:"TechnologyService",layer:"technology"},{id:"id-2769e843406a46b48dd8e4308806bf2d",name:"Сервис мониторинга транспорта",type:"TechnologyService",layer:"technology"},{id:"id-5896490826b9419bb68b7b96f8c57744",name:"Сервис мониторинга курьеров",type:"TechnologyService",layer:"technology"},{id:"id-f6873667acb74385af221b232d20e264",name:"Сервер почтовой инфрастукутуры",type:"Node",layer:"technology"},{id:"id-d22710dd4f0b4afc8a37b970cf5e7666",name:"Microsoft Exchange ",type:"SystemSoftware",layer:"technology"},{id:"id-0d108a7e5d30439ab97286537be71e17",name:"Очередь сообщений",type:"SystemSoftware",layer:"technology"},{id:"id-b05427cf13cb4b94a08171f56d019d90",name:"Компьютер  ",type:"Device",layer:"technology"},{id:"id-97d8d83945e74e4e99f269089babfd18",name:"Единая база данных на все регионы",type:"TechnologyService",layer:"technology"}],y=[{id:"id-9f86fb397f6f4ac89978e736aa02de05",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-43cd89e31d18431aa483974eabc7bf3b",type:"CompositionRelationship"},{id:"id-0624decbdae442ad96c989c327ed194e",sourceId:"id-b4932cf24be041789bc48234771c2eb9",targetId:"id-17003da7524d443ab2f7e0680abf0ac8",type:"TriggeringRelationship"},{id:"id-df317549aecf4884909d943f2ee5782e",sourceId:"id-f6873667acb74385af221b232d20e264",targetId:"id-957df2d4066046b797de25d162d2ab8f",type:"AssociationRelationship"},{id:"id-34dc3b7e50b242b5b0eab7045b2fa908",sourceId:"id-1fd2691b857441a480b5dc1ffe41b3dd",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"TriggeringRelationship"},{id:"id-7949895cea0a47b3aa0db045974ec1c4",sourceId:"id-3c419a4f6f7b48bb955e166bcc6ce52f",targetId:"id-249302d4d929406a8e853ef857f99297",type:"TriggeringRelationship"},{id:"id-118fd7d2da914901a3754565f1a1f523",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-cbb8c54c328b4f139b7ff3638b69e4e7",type:"CompositionRelationship"},{id:"id-83818af13e7a4095b90724d39fc9bbc2",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-96c4571322d64df5869819ddd923cffa",type:"CompositionRelationship"},{id:"id-dc49df99d3fd405aa55747ca7d4a8edf",sourceId:"id-9e0a3aebacb64721bacbd8c2ef3cc466",targetId:"id-957df2d4066046b797de25d162d2ab8f",type:"AssociationRelationship"},{id:"id-67b54134c3a84ab3a2a5ed17c5dc9109",sourceId:"id-9e0a3aebacb64721bacbd8c2ef3cc466",targetId:"id-9b92665f43c44ca9bd46efc82773b1b3",type:"CompositionRelationship"},{id:"id-2faa93ef8ba8425886223191c0e83de5",sourceId:"id-96c4571322d64df5869819ddd923cffa",targetId:"id-7151ccd853c34116ad04f300c32528d2",type:"TriggeringRelationship"},{id:"id-dce31554e9154822b1972a51ad0336be",sourceId:"id-17003da7524d443ab2f7e0680abf0ac8",targetId:"id-ba067f94219d4ab8b7dcc0f7f6e95bc0",type:"RealizationRelationship"},{id:"id-87352e17f70e4d278d09d88c4387727c",sourceId:"id-9e0a3aebacb64721bacbd8c2ef3cc466",targetId:"id-99b97bb6d1174ca8871ca950d9bf581d",type:"CompositionRelationship"},{id:"id-11cc0e8d9dfe49df992ed6a49836bde5",sourceId:"id-f6873667acb74385af221b232d20e264",targetId:"id-d22710dd4f0b4afc8a37b970cf5e7666",type:"CompositionRelationship"},{id:"id-68af7ae3a98246d592d8da785f8cbdf9",sourceId:"id-7ce25f9dd68c44d28794807c74ab1126",targetId:"id-7151ccd853c34116ad04f300c32528d2",type:"TriggeringRelationship"},{id:"id-0ea766c55f25420a83c6d3f283fc9061",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-e319cc3339744250a76b4b507f658bbf",type:"CompositionRelationship"},{id:"id-1576afce6d6845bc81a22f83ad922473",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-40594bde6b4a4305a1c1e39761de52f5",type:"CompositionRelationship"},{id:"id-6b077baab87544a98012317752cc6c08",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-fb9b83e84f584346b78ca80f41a32140",type:"CompositionRelationship"},{id:"id-9308d412ad0f4d6cb3546bc1e01b190e",sourceId:"id-7151ccd853c34116ad04f300c32528d2",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"TriggeringRelationship"},{id:"id-6f62a12aa98b49b0beb936ec8790469c",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-0769d5ff71634334b22f5043d280b1cc",type:"CompositionRelationship"},{id:"id-260bab089d724ca6a65e955bbba3c2ee",sourceId:"id-6aae77e1daf34428ad4224f8d975134c",targetId:"id-f7f48b1649c6422e973349afaaedda1c",type:"ServingRelationship"},{id:"id-26fb7ecc076e4a55a63dcd372d5b4ef0",sourceId:"id-7ce25f9dd68c44d28794807c74ab1126",targetId:"id-96c4571322d64df5869819ddd923cffa",type:"TriggeringRelationship"},{id:"id-55950a37c87944328cc57add3c050237",sourceId:"id-f6873667acb74385af221b232d20e264",targetId:"id-b05427cf13cb4b94a08171f56d019d90",type:"CompositionRelationship"},{id:"id-e7f0bb6b4050467c9e83094c73578852",sourceId:"id-1a1af0a5a6d14d75a61610d60524e4ad",targetId:"id-13808443b8c44372b22782d6de4c300c",type:"TriggeringRelationship"},{id:"id-be017ec64ef7488b8b06153ae6700d97",sourceId:"id-1a1af0a5a6d14d75a61610d60524e4ad",targetId:"id-2550c17a7533435683ece1a2de07c2df",type:"TriggeringRelationship"},{id:"id-687c783ad6114196821898bec63e12c6",sourceId:"id-f6873667acb74385af221b232d20e264",targetId:"id-0d108a7e5d30439ab97286537be71e17",type:"CompositionRelationship"},{id:"id-c1494a4ebdfb443c97357f32fc6dfc6e",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-7151ccd853c34116ad04f300c32528d2",type:"CompositionRelationship"},{id:"id-a4b0880d9bf54cbbbe20502cab745a9b",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-d1975748609f444daedabea520368d8b",type:"RealizationRelationship"},{id:"id-c564a39282fd47f0a4096256d773fe37",sourceId:"id-9e0a3aebacb64721bacbd8c2ef3cc466",targetId:"id-eec812f617a64e9ba9fb267a2206c613",type:"CompositionRelationship"},{id:"id-f0584ac95f53426eae0173f262905e73",sourceId:"id-7a4d0a18e43645f59bcf31ea37a9396e",targetId:"id-957df2d4066046b797de25d162d2ab8f",type:"AssociationRelationship"},{id:"id-8fb843f0708b4ab2849220b9b2282fe3",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"CompositionRelationship"},{id:"id-b8e41ef6f2244901afa84d48137e2d1a",sourceId:"id-f7f48b1649c6422e973349afaaedda1c",targetId:"id-d1975748609f444daedabea520368d8b",type:"AssignmentRelationship"},{id:"id-ff157ab8be9e473b9b7c9f44e0aed51a",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-5ab6635d75b74fab9ba0a311b31865f1",type:"TriggeringRelationship"},{id:"id-6e11dc14d4c6419f8ab8b2d2223e17db",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-957df2d4066046b797de25d162d2ab8f",type:"AssociationRelationship"},{id:"id-f8e1d978e3584d6dbc191562e2e68c07",sourceId:"id-56ae59a8ba4a4e1c810e22810c5d2d73",targetId:"id-cbcb6646c4464c4da9a50ea7213ff878",type:"TriggeringRelationship"},{id:"id-a086a76f255c4da78873fde9db36bbcc",sourceId:"id-6aae77e1daf34428ad4224f8d975134c",targetId:"id-a213077cd5ca4189b6d5912366b895ba",type:"ServingRelationship"},{id:"id-4c55b2c17f8d49c3bb9359cabb7661ab",sourceId:"id-13808443b8c44372b22782d6de4c300c",targetId:"id-1fd2691b857441a480b5dc1ffe41b3dd",type:"RealizationRelationship"},{id:"id-a2643bc4ecb64c3c980896d2e350329d",sourceId:"id-300bef86cdc948b6813b14cda95ca2d7",targetId:"id-7ce25f9dd68c44d28794807c74ab1126",type:"RealizationRelationship"},{id:"id-d230af6b08cc4d9fb140dd0a193422ff",sourceId:"id-f6873667acb74385af221b232d20e264",targetId:"id-b4932cf24be041789bc48234771c2eb9",type:"RealizationRelationship"},{id:"id-687eee28f87145619867ba50104330ca",sourceId:"id-baca253dc8ab4c2d94bf057a5271b2e2",targetId:"id-84537e51d6bc49339c9c28e71e1ec8b1",type:"AssociationRelationship"},{id:"id-363de594512d48e6a3b24521a0b50a88",sourceId:"id-6b894271364b4b8c85f5cc298424348c",targetId:"id-300bef86cdc948b6813b14cda95ca2d7",type:"TriggeringRelationship"},{id:"id-ae98cddbf30b439eabcfb11b2afa7ac8",sourceId:"id-9e0a3aebacb64721bacbd8c2ef3cc466",targetId:"id-ce301d9f90c946e198abf23be9c4dd97",type:"CompositionRelationship"},{id:"id-7f5e6f570e15420c906d766d452e3ecb",sourceId:"id-ba067f94219d4ab8b7dcc0f7f6e95bc0",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"TriggeringRelationship"},{id:"id-d132b889f1ee4bc8ad8ab61466825318",sourceId:"id-2769e843406a46b48dd8e4308806bf2d",targetId:"id-17003da7524d443ab2f7e0680abf0ac8",type:"TriggeringRelationship"},{id:"id-cc1272e335d441e1a65c9d82e4b8e1f6",sourceId:"id-2550c17a7533435683ece1a2de07c2df",targetId:"id-3c419a4f6f7b48bb955e166bcc6ce52f",type:"RealizationRelationship"},{id:"id-30fdbf0374324347ae66f0dbcdd1057d",sourceId:"id-9e0a3aebacb64721bacbd8c2ef3cc466",targetId:"id-6b894271364b4b8c85f5cc298424348c",type:"RealizationRelationship"},{id:"id-f12d7337aca64696acc4b9e65e179ddb",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-249302d4d929406a8e853ef857f99297",type:"CompositionRelationship"},{id:"id-d21cf899dfd24070af3d33dc8852369b",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-b4932cf24be041789bc48234771c2eb9",type:"RealizationRelationship"},{id:"id-a065458b7cf74426959bfddeebeadfe2",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-6e681332666048639e049c26167c3028",type:"CompositionRelationship"},{id:"id-decb251a05754375912dfca6524d7061",sourceId:"id-a213077cd5ca4189b6d5912366b895ba",targetId:"id-d1975748609f444daedabea520368d8b",type:"AssignmentRelationship"},{id:"id-dc4e2069dc974e61ae95ea736456e03e",sourceId:"id-d1975748609f444daedabea520368d8b",targetId:"id-bb0fd33ddcbf4468848581aba003ab15",type:"ServingRelationship"},{id:"id-416af5d9b7464ea286abd3b153e42b12",sourceId:"id-249302d4d929406a8e853ef857f99297",targetId:"id-96c4571322d64df5869819ddd923cffa",type:"TriggeringRelationship"},{id:"id-fc351568c1044ee5972c4f5ebdd7c500",sourceId:"id-cbcb6646c4464c4da9a50ea7213ff878",targetId:"id-072b6753c76e4d7e8d455e08ca1c92bb",type:"AccessRelationship"},{id:"id-c1c518962a9e444595e1ac63f96eb6ea",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-2769e843406a46b48dd8e4308806bf2d",type:"RealizationRelationship"},{id:"id-ed25684bcc304e1e868f2b09bed30e7c",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-1a1af0a5a6d14d75a61610d60524e4ad",type:"RealizationRelationship"},{id:"id-a8a9ee18ce0b41b882f4f88372866ec0",sourceId:"id-baca253dc8ab4c2d94bf057a5271b2e2",targetId:"id-5896490826b9419bb68b7b96f8c57744",type:"RealizationRelationship"},{id:"id-258aaccbd0fc46d3a4ccc544761774f4",sourceId:"id-5896490826b9419bb68b7b96f8c57744",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"TriggeringRelationship"},{id:"id-6293a723fb5749cfb208f33f828158ad",sourceId:"id-c6ae691fce474260a14a72c51c1720c0",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"TriggeringRelationship"},{id:"id-62addf2e706b48d681c8c024fd53eacb",sourceId:"id-17003da7524d443ab2f7e0680abf0ac8",targetId:"id-c6ae691fce474260a14a72c51c1720c0",type:"RealizationRelationship"},{id:"id-80ed07ce60324b45bb07879c4c0552e7",sourceId:"id-13d101dc1d714b948426176519fc24d0",targetId:"id-c8e290d32a8e471794efbb148b56db25",type:"TriggeringRelationship"},{id:"id-517825167ba84a1db48551559565ba4f",sourceId:"id-3ed6b67058f24c94a7d4e00ca7053b2c",targetId:"id-13d101dc1d714b948426176519fc24d0",type:"RealizationRelationship"},{id:"id-4cd41445059240e98cb17ccdfc9e5a0c",sourceId:"id-3ed6b67058f24c94a7d4e00ca7053b2c",targetId:"id-c6ae691fce474260a14a72c51c1720c0",type:"RealizationRelationship"},{id:"id-74e28aaeb94f44f78deb9a53d6ccc40b",sourceId:"id-3183b051dd684be580246ca074e2e2ae",targetId:"id-97d8d83945e74e4e99f269089babfd18",type:"RealizationRelationship"},{id:"id-9029693321ab49beb9d3d0ebfa51f97b",sourceId:"id-1a1af0a5a6d14d75a61610d60524e4ad",targetId:"id-97d8d83945e74e4e99f269089babfd18",type:"TriggeringRelationship"},{id:"id-56bafd7fe57549099540fbf573a64711",sourceId:"id-97d8d83945e74e4e99f269089babfd18",targetId:"id-c6ae691fce474260a14a72c51c1720c0",type:"TriggeringRelationship"},{id:"id-6f4c6e6fa18e41e5bfae2cd4d4d30155",sourceId:"id-bd1b0972d8f04460bedda381772fc4cb",targetId:"id-d1975748609f444daedabea520368d8b",type:"AssignmentRelationship"},{id:"id-656de2c82bae48b68dac6f82c4869102",sourceId:"id-6aae77e1daf34428ad4224f8d975134c",targetId:"id-bd1b0972d8f04460bedda381772fc4cb",type:"ServingRelationship"},{id:"id-f66a065c168b41a8b50c9bccb012a169",sourceId:"id-5896490826b9419bb68b7b96f8c57744",targetId:"id-3ed6b67058f24c94a7d4e00ca7053b2c",type:"ServingRelationship"},{id:"id-76b534754d6c415585bfd1dce9cc134c",sourceId:"id-5896490826b9419bb68b7b96f8c57744",targetId:"id-3ed6b67058f24c94a7d4e00ca7053b2c",type:"TriggeringRelationship"}],l=[{id:"id-aaae29c5e46f4201bd2b5609131a213e",name:"Default View",viewpoint:""}],g={identifier:e,archimateId:d,name:a,description:i,formats:c,source:b,sourceFile:t,sourceFormat:f,timestamp:o,tags:n,duplicates:s,language:r,elements:p,relationships:y,views:l};export{d as archimateId,g as default,i as description,s as duplicates,p as elements,c as formats,e as identifier,r as language,a as name,y as relationships,b as source,t as sourceFile,f as sourceFormat,n as tags,o as timestamp,l as views};
