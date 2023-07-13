const e="https://me.big.tuwien.ac.at/EAModelSet/id-7ae983b97def44a599b037454232f869",d="id-7ae983b97def44a599b037454232f869",a="(new model)",i="",c=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",t="raw-data/github/archimate/proc.archimate",p="ARCHIMATE",f="29-06-2023 09:29:40",o=[],n=[],r="ru",s=[{id:"id-075b554b8b94430091a25a32585d2e1f",name:"Парсинг параметров командной строки",type:"ApplicationProcess",layer:"application"},{id:"id-fb05d4969c094a268324be32add1ddd6",name:"Создание полного набора параметров отчета",type:"ApplicationProcess",layer:"application"},{id:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",name:"Проверка корректности параметров командной строки",type:"ApplicationProcess",layer:"application"},{id:"id-2a469c95b91b43439cac6b317d11f9cb",name:"Создание сценария работы",type:"ApplicationProcess",layer:"application"},{id:"id-2c737e8eefe443228e04cca610f65096",name:"Создание заголовка отчета",type:"ApplicationProcess",layer:"application"},{id:"id-02fc42d2b3b14c75976353d39dcec507",name:"Создание описательной части отчета",type:"ApplicationProcess",layer:"application"},{id:"id-de4e41498df540c780a8e45e17a76d7b",name:"Создание детализированной части отчета",type:"ApplicationProcess",layer:"application"},{id:"id-652c7ee541c1403c876517de1611e4b9",name:"Создание агрегированной части отчета",type:"ApplicationProcess",layer:"application"},{id:"id-42375b3e68e047e4a543d5be0364c669",name:"Создание отчета",type:"ApplicationProcess",layer:"application"},{id:"id-37e56a0036044355a35a03d42750241d",name:"Вывод представления отчета",type:"ApplicationProcess",layer:"application"},{id:"id-935acf5d2dd0425f9ee04c9a1468f613",name:"Формирование задачи",type:"ApplicationProcess",layer:"application"},{id:"id-58cafbfc5ab64a1eb405c440ab345504",name:"Проверка доступности путей",type:"ApplicationProcess",layer:"application"},{id:"id-aa23f47247cb49e1856419c762c5398e",name:"Проверка готовности к работе",type:"ApplicationProcess",layer:"application"},{id:"id-794999b4e99f4733b87df230b58a3e37",name:"Вывод в md файл",type:"ApplicationProcess",layer:"application"},{id:"id-4e5a201b5fdd403496ec0965e9edda7a",name:"Вывод на экран",type:"ApplicationProcess",layer:"application"},{id:"id-9c22db2b3bc741468ccc84398e0cbb48",name:"Вывод DataFrame в json файл",type:"ApplicationProcess",layer:"application"},{id:"id-cb4dd13fcdb4453a9ec29468ef0fd683",name:"ETL",type:"ApplicationProcess",layer:"application"},{id:"id-aafdc35d05ba48319b3b6a3bd886d85d",name:"Парсинг файлов заметок на наличие записей о помидорках по датам",type:"ApplicationProcess",layer:"application"},{id:"id-d7cb75f3eac44c01a5cdc92499104b47",name:"Загрузка записей о помидорках в DataFrame",type:"ApplicationProcess",layer:"application"},{id:"id-cda85979ca134b7e803b83599379f688",name:"Трансформация записей для DataFrame ",type:"ApplicationProcess",layer:"application"},{id:"id-89d0492a64da4c14838d83e73b7a5abd",name:"Заполнение пустых значений",type:"ApplicationProcess",layer:"application"},{id:"id-ba4f23f3006e4ed7a2ef410826b60867",name:"Загрузка файла в PowerBI",type:"ApplicationProcess",layer:"application"},{id:"id-5dab73bae7b94063a3f52d178e80057b",name:"Формирование представления отчета в PowerBI",type:"ApplicationProcess",layer:"application"},{id:"id-ee393b3b6d8f48eb878d8e602ae60b42",name:"Запуск скрипта",type:"ApplicationEvent",layer:"application"},{id:"id-f4f26459306c4b059fa5fc7a54e7ee75",name:"Запуск логера",type:"ApplicationProcess",layer:"application"},{id:"id-9efa6d87433f44b3bfd46fb0c71cac02",name:"Ведение лога выполнения",type:"ApplicationProcess",layer:"application"},{id:"id-a9e2bab3851846b9b28d9336ceb86905",name:"ReportManager",type:"ApplicationComponent",layer:"application"},{id:"id-4a047705c26a44f5aee454acbb48172e",name:"Logger",type:"ApplicationComponent",layer:"application"},{id:"id-1da9c5f0cb8b4dd6b575a44ecc13e3f5",name:"SettingsParser",type:"ApplicationComponent",layer:"application"},{id:"id-97155d2be4b04d8bbc2867910a1bda84",name:"CLParser",type:"ApplicationComponent",layer:"application"},{id:"id-f5414ed7cfa147d397add1ecb6842fdc",name:"argparse",type:"ApplicationComponent",layer:"application"},{id:"id-41eef4ae330347f5995e89c899226ad5",name:"TaskManager",type:"ApplicationComponent",layer:"application"},{id:"id-d9ec7dbb218b47efb62e47d312467142",name:"Input",type:"DataObject",layer:"application"},{id:"id-03e11359c48a437eace2497870c0ee2a",name:"Task",type:"DataObject",layer:"application"},{id:"id-406f57e974f74f3a8d5f874d2344f73d",name:"ScenarioMaker",type:"ApplicationComponent",layer:"application"},{id:"id-4de1a59313e242f8b0caa475b782b0ac",name:"json",type:"ApplicationComponent",layer:"application"},{id:"id-daa5b20702be448cbb6cdeb46ae5e544",name:"Scenario",type:"DataObject",layer:"application"},{id:"id-87fb5d5137d24581abfc9955fe4cd2c6",name:"settings",type:"DataObject",layer:"application"},{id:"id-b1b08ee64ea14513a36573011bc32525",name:"Создание метаданных отчета",type:"ApplicationProcess",layer:"application"},{id:"id-6afb7b9575144d0ea73eb27b3da7e2ba",name:"Extractor",type:"ApplicationComponent",layer:"application"},{id:"id-0855b28c8f104a86b5d2aa793f887942",name:"Transformer",type:"ApplicationComponent",layer:"application"},{id:"id-615c36187f4c46adb92862229eb184c2",name:"Loader",type:"ApplicationComponent",layer:"application"},{id:"id-cac9c6057e8a443d8dc55d673948a070",name:"ETLManager",type:"ApplicationComponent",layer:"application"},{id:"id-eb9a7b8e13384673a23740668fdd7c3d",name:"TitlePartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-7b3edfe63e614043a8ac5603876fa011",name:"Создание части отчета со связями",type:"ApplicationProcess",layer:"application"},{id:"id-a8f4f86d2ba245c9910599a183e581d3",name:"Создание части с источниками",type:"ApplicationProcess",layer:"application"},{id:"id-6879aac0b7134b0e8bb50d05a9b335c0",name:"PeriodPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-a83aea2202314049b43f6692ebaed31a",name:"DetailedPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-958e97c7cd46447da08c7a6260142966",name:"AggregatedPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-bd012c6adb9c4b67a016101715ee338b",name:"LinkedPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-c7989397ca9d4f77885e0ea803386f2a",name:"SourcePartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-4736007acdf64881a2c777b61f027b8c",name:"MetadataPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-eb22bf3acd37427d8cf080404f71788a",name:"PartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-e86500389a2a478ca3cba022fc7b3296",name:"MarkdownExporter",type:"ApplicationComponent",layer:"application"},{id:"id-9b0e43ffbfb94d50b6054665d7af4f55",name:"JSONExporter",type:"ApplicationComponent",layer:"application"},{id:"id-54e48b9125b241a1ad4bc7fcf8c06be3",name:"ScreenVisualizer",type:"ApplicationComponent",layer:"application"},{id:"id-88b3df5483eb43b19689d82cb4a2355a",name:"PeriodAggregatedPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-5d999bfe5939496195d672a65dc74bc8",name:"EntityAggregatedPart",type:"ApplicationComponent",layer:"application"},{id:"id-40972532ccb249deb2f3210584bc43a8",name:"CrUpOpPartMaker",type:"ApplicationComponent",layer:"application"},{id:"id-1b4235e43a0e409c8819d13166520b7d",name:"Exporter",type:"ApplicationComponent",layer:"application"}],l=[{id:"id-1beaf89d932f433ba2b8c5ed9b72a1ff",sourceId:"id-075b554b8b94430091a25a32585d2e1f",targetId:"id-fb05d4969c094a268324be32add1ddd6",type:"FlowRelationship"},{id:"id-089a7e4ad5074ac99180f986f70b7a28",sourceId:"id-fb05d4969c094a268324be32add1ddd6",targetId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",type:"FlowRelationship"},{id:"id-27b73e103d554237afe3f82df36bfa3b",sourceId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",targetId:"id-2a469c95b91b43439cac6b317d11f9cb",type:"FlowRelationship"},{id:"id-9b2ed8e3a4cd40f086a4dab0b6d6e45c",sourceId:"id-2a469c95b91b43439cac6b317d11f9cb",targetId:"id-42375b3e68e047e4a543d5be0364c669",type:"FlowRelationship"},{id:"id-309db4aea2c84e598f8958de1ac92741",sourceId:"id-de4e41498df540c780a8e45e17a76d7b",targetId:"id-652c7ee541c1403c876517de1611e4b9",type:"FlowRelationship"},{id:"id-7db3a0ea79b345c5bfc56c5013909a60",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-2c737e8eefe443228e04cca610f65096",type:"CompositionRelationship"},{id:"id-cf98a7c3627c4faa80c1b442e50bbb3b",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-02fc42d2b3b14c75976353d39dcec507",type:"CompositionRelationship"},{id:"id-33f451c20d7e4df78fca3c89b052c4bc",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-de4e41498df540c780a8e45e17a76d7b",type:"CompositionRelationship"},{id:"id-9b25ebfdf3be4299a126b5104a5141c3",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-652c7ee541c1403c876517de1611e4b9",type:"CompositionRelationship"},{id:"id-196af4297cc2400bb3a0b3356ee40cd6",sourceId:"id-935acf5d2dd0425f9ee04c9a1468f613",targetId:"id-075b554b8b94430091a25a32585d2e1f",type:"CompositionRelationship"},{id:"id-9cccf3afc3d247aab83350962ae22f45",sourceId:"id-935acf5d2dd0425f9ee04c9a1468f613",targetId:"id-fb05d4969c094a268324be32add1ddd6",type:"CompositionRelationship"},{id:"id-7b0047c45f5c4021aa0ba4143a86203b",sourceId:"id-935acf5d2dd0425f9ee04c9a1468f613",targetId:"id-2a469c95b91b43439cac6b317d11f9cb",type:"CompositionRelationship"},{id:"id-19e65ffcc3b14bb5bb9a585925294ef1",sourceId:"id-fb05d4969c094a268324be32add1ddd6",targetId:"id-2a469c95b91b43439cac6b317d11f9cb",type:"FlowRelationship"},{id:"id-047a04bf536c43208cb65f857621d8c0",sourceId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",targetId:"id-935acf5d2dd0425f9ee04c9a1468f613",type:"FlowRelationship"},{id:"id-07db984c5adb4d92a998a44a38d7c1ad",sourceId:"id-935acf5d2dd0425f9ee04c9a1468f613",targetId:"id-42375b3e68e047e4a543d5be0364c669",type:"FlowRelationship"},{id:"id-8742f414c58646968aa31a675ce0dc4d",sourceId:"id-aa23f47247cb49e1856419c762c5398e",targetId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",type:"CompositionRelationship"},{id:"id-ca9dd047a54a4bddbd7a4d4a201de898",sourceId:"id-aa23f47247cb49e1856419c762c5398e",targetId:"id-58cafbfc5ab64a1eb405c440ab345504",type:"CompositionRelationship"},{id:"id-e409f6c5d7ce41e2b7c596b1e8ac3cd6",sourceId:"id-aa23f47247cb49e1856419c762c5398e",targetId:"id-935acf5d2dd0425f9ee04c9a1468f613",type:"FlowRelationship"},{id:"id-edec4721297741e982b74bd453ac6ac1",sourceId:"id-58cafbfc5ab64a1eb405c440ab345504",targetId:"id-aa23f47247cb49e1856419c762c5398e",type:"FlowRelationship"},{id:"id-52d44cf8082243ec90fdc3765441e991",sourceId:"id-58cafbfc5ab64a1eb405c440ab345504",targetId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",type:"FlowRelationship"},{id:"id-46a48a25c64c45058b15e60b86dcce5a",sourceId:"id-794999b4e99f4733b87df230b58a3e37",targetId:"id-37e56a0036044355a35a03d42750241d",type:"SpecializationRelationship"},{id:"id-50afd5184456430d8b95ded7eaa0d61b",sourceId:"id-4e5a201b5fdd403496ec0965e9edda7a",targetId:"id-37e56a0036044355a35a03d42750241d",type:"SpecializationRelationship"},{id:"id-18d016dbe5184927a08157b2a6698fd5",sourceId:"id-935acf5d2dd0425f9ee04c9a1468f613",targetId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",type:"FlowRelationship"},{id:"id-7e92fe2f5f044fb6af823bc64b639fdf",sourceId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",targetId:"id-42375b3e68e047e4a543d5be0364c669",type:"FlowRelationship"},{id:"id-44526c10fc304e40969e90cf6840864f",sourceId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",targetId:"id-aafdc35d05ba48319b3b6a3bd886d85d",type:"CompositionRelationship"},{id:"id-f28f9188528345a7a52d5c93e961f058",sourceId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",targetId:"id-d7cb75f3eac44c01a5cdc92499104b47",type:"CompositionRelationship"},{id:"id-23f77bda7b264ceab322028cabae9cd0",sourceId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",targetId:"id-cda85979ca134b7e803b83599379f688",type:"CompositionRelationship"},{id:"id-d38197cd11f54c349c07c017ce00f839",sourceId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",targetId:"id-89d0492a64da4c14838d83e73b7a5abd",type:"CompositionRelationship"},{id:"id-b266aaaa05dc40f1acb859c4759a106f",sourceId:"id-aafdc35d05ba48319b3b6a3bd886d85d",targetId:"id-cda85979ca134b7e803b83599379f688",type:"FlowRelationship"},{id:"id-91ebd053b2514d93aebc7d8ee327d741",sourceId:"id-cda85979ca134b7e803b83599379f688",targetId:"id-89d0492a64da4c14838d83e73b7a5abd",type:"FlowRelationship"},{id:"id-d0ba86868a8d4400a04c4b05d855e047",sourceId:"id-89d0492a64da4c14838d83e73b7a5abd",targetId:"id-d7cb75f3eac44c01a5cdc92499104b47",type:"FlowRelationship"},{id:"id-b136ecda099c4b1a826de7194fe73f3f",sourceId:"id-ba4f23f3006e4ed7a2ef410826b60867",targetId:"id-5dab73bae7b94063a3f52d178e80057b",type:"FlowRelationship"},{id:"id-b1ca89ea74254017839340f6dc21fd2e",sourceId:"id-ee393b3b6d8f48eb878d8e602ae60b42",targetId:"id-aa23f47247cb49e1856419c762c5398e",type:"FlowRelationship"},{id:"id-f33c448aa4f9416f821fa174873dfe68",sourceId:"id-aa23f47247cb49e1856419c762c5398e",targetId:"id-f4f26459306c4b059fa5fc7a54e7ee75",type:"CompositionRelationship"},{id:"id-1a15b5ab7b1548eebd728756547a490f",sourceId:"id-f4f26459306c4b059fa5fc7a54e7ee75",targetId:"id-58cafbfc5ab64a1eb405c440ab345504",type:"FlowRelationship"},{id:"id-4a00388ff6384324854f2cb448332f2a",sourceId:"id-aa23f47247cb49e1856419c762c5398e",targetId:"id-9efa6d87433f44b3bfd46fb0c71cac02",type:"FlowRelationship"},{id:"id-1c7d1099ec1e475b942345e45bd563d6",sourceId:"id-97155d2be4b04d8bbc2867910a1bda84",targetId:"id-f5414ed7cfa147d397add1ecb6842fdc",type:"AggregationRelationship"},{id:"id-3587e68c4dac41de8056937e9eded289",sourceId:"id-97155d2be4b04d8bbc2867910a1bda84",targetId:"id-d9ec7dbb218b47efb62e47d312467142",type:"AccessRelationship"},{id:"id-06091039dc964694b561e717c1ad90cd",sourceId:"id-41eef4ae330347f5995e89c899226ad5",targetId:"id-d9ec7dbb218b47efb62e47d312467142",type:"AccessRelationship"},{id:"id-44e31f512ce64b21a825173037a29158",sourceId:"id-a9e2bab3851846b9b28d9336ceb86905",targetId:"id-aa23f47247cb49e1856419c762c5398e",type:"ServingRelationship"},{id:"id-5beed7c4e9cb4861b765fe45df4dc929",sourceId:"id-4a047705c26a44f5aee454acbb48172e",targetId:"id-9efa6d87433f44b3bfd46fb0c71cac02",type:"ServingRelationship"},{id:"id-945293b71275450b9744d3702aa64d98",sourceId:"id-4a047705c26a44f5aee454acbb48172e",targetId:"id-f4f26459306c4b059fa5fc7a54e7ee75",type:"ServingRelationship"},{id:"id-df4a95d975fa44aca5591b1a0bb34ef3",sourceId:"id-1da9c5f0cb8b4dd6b575a44ecc13e3f5",targetId:"id-58cafbfc5ab64a1eb405c440ab345504",type:"ServingRelationship"},{id:"id-777e0a86d1d74cfe90aa5035a2e96b8a",sourceId:"id-f5414ed7cfa147d397add1ecb6842fdc",targetId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",type:"ServingRelationship"},{id:"id-76e213206c964b97875bb895604dbe16",sourceId:"id-97155d2be4b04d8bbc2867910a1bda84",targetId:"id-075b554b8b94430091a25a32585d2e1f",type:"ServingRelationship"},{id:"id-fbe0135117fc40289a9cfabf0dbc67ed",sourceId:"id-41eef4ae330347f5995e89c899226ad5",targetId:"id-fb05d4969c094a268324be32add1ddd6",type:"ServingRelationship"},{id:"id-81102fc53a5745a2a30f7cd2fc6a21c0",sourceId:"id-41eef4ae330347f5995e89c899226ad5",targetId:"id-03e11359c48a437eace2497870c0ee2a",type:"AccessRelationship"},{id:"id-4831cf42316b4266a0ed73e1b580d0a3",sourceId:"id-406f57e974f74f3a8d5f874d2344f73d",targetId:"id-03e11359c48a437eace2497870c0ee2a",type:"AccessRelationship"},{id:"id-53a26599b91143aba778e00aa3186b54",sourceId:"id-406f57e974f74f3a8d5f874d2344f73d",targetId:"id-2a469c95b91b43439cac6b317d11f9cb",type:"ServingRelationship"},{id:"id-4eb8df9b426147398eb005b0a2bc5bef",sourceId:"id-a9e2bab3851846b9b28d9336ceb86905",targetId:"id-935acf5d2dd0425f9ee04c9a1468f613",type:"ServingRelationship"},{id:"id-63c0d501df37449fae4dc4664dd66221",sourceId:"id-97155d2be4b04d8bbc2867910a1bda84",targetId:"id-c21a7554b3b340b6a4d2d7b7fd7b6bfa",type:"ServingRelationship"},{id:"id-593c80b7d8ea426b980a54adfaf4ca38",sourceId:"id-1da9c5f0cb8b4dd6b575a44ecc13e3f5",targetId:"id-4de1a59313e242f8b0caa475b782b0ac",type:"AggregationRelationship"},{id:"id-92db3095acec4961833e69b74354b1b6",sourceId:"id-406f57e974f74f3a8d5f874d2344f73d",targetId:"id-daa5b20702be448cbb6cdeb46ae5e544",type:"AccessRelationship"},{id:"id-5035e0ef9cc54976a1555dde6ffe2cc8",sourceId:"id-1da9c5f0cb8b4dd6b575a44ecc13e3f5",targetId:"id-87fb5d5137d24581abfc9955fe4cd2c6",type:"AccessRelationship"},{id:"id-8fc10d5f84834b07931ea13912b156c2",sourceId:"id-41eef4ae330347f5995e89c899226ad5",targetId:"id-87fb5d5137d24581abfc9955fe4cd2c6",type:"AccessRelationship"},{id:"id-7136226795bb483cbb4785d0697fb7b0",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-b1b08ee64ea14513a36573011bc32525",type:"CompositionRelationship"},{id:"id-6d5d8c3cb253443ba3af4af761a1e344",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-37e56a0036044355a35a03d42750241d",type:"FlowRelationship"},{id:"id-b58b033f834b4f979992f925069a11db",sourceId:"id-6afb7b9575144d0ea73eb27b3da7e2ba",targetId:"id-aafdc35d05ba48319b3b6a3bd886d85d",type:"ServingRelationship"},{id:"id-ea318108989e42af825d9fc15e5140ed",sourceId:"id-0855b28c8f104a86b5d2aa793f887942",targetId:"id-cda85979ca134b7e803b83599379f688",type:"ServingRelationship"},{id:"id-656fa3ed358e447daf62f5f97be01b7a",sourceId:"id-615c36187f4c46adb92862229eb184c2",targetId:"id-89d0492a64da4c14838d83e73b7a5abd",type:"ServingRelationship"},{id:"id-2a85a753f5db4027bc7db9b45cd8deb1",sourceId:"id-615c36187f4c46adb92862229eb184c2",targetId:"id-d7cb75f3eac44c01a5cdc92499104b47",type:"ServingRelationship"},{id:"id-081b3cbacc2d4c59967306a9cf67e5e4",sourceId:"id-cac9c6057e8a443d8dc55d673948a070",targetId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",type:"ServingRelationship"},{id:"id-48b6e31cb030486e88cc896c4db1ca57",sourceId:"id-6afb7b9575144d0ea73eb27b3da7e2ba",targetId:"id-cac9c6057e8a443d8dc55d673948a070",type:"AggregationRelationship"},{id:"id-07dd881249bc4542920e8dab93633c10",sourceId:"id-0855b28c8f104a86b5d2aa793f887942",targetId:"id-cac9c6057e8a443d8dc55d673948a070",type:"AggregationRelationship"},{id:"id-1b9a72ef996f4f8db55aa3d712c9e0c9",sourceId:"id-615c36187f4c46adb92862229eb184c2",targetId:"id-cac9c6057e8a443d8dc55d673948a070",type:"AggregationRelationship"},{id:"id-f4f0a5f26c974d2590c32571f109c436",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-7b3edfe63e614043a8ac5603876fa011",type:"CompositionRelationship"},{id:"id-0496a3c4d6244eeeb6b442034491f3da",sourceId:"id-652c7ee541c1403c876517de1611e4b9",targetId:"id-7b3edfe63e614043a8ac5603876fa011",type:"FlowRelationship"},{id:"id-2403a86a35f249d6beac1c89d13da1c0",sourceId:"id-42375b3e68e047e4a543d5be0364c669",targetId:"id-a8f4f86d2ba245c9910599a183e581d3",type:"CompositionRelationship"},{id:"id-5cac5e88f4ed4533bcdf8afe0ef0aa2e",sourceId:"id-7b3edfe63e614043a8ac5603876fa011",targetId:"id-a8f4f86d2ba245c9910599a183e581d3",type:"FlowRelationship"},{id:"id-dd3af9616bfc482ab5f3bc1158f202b9",sourceId:"id-eb9a7b8e13384673a23740668fdd7c3d",targetId:"id-2c737e8eefe443228e04cca610f65096",type:"ServingRelationship"},{id:"id-8117513ff36643c29338b3d32b4c1ce9",sourceId:"id-6879aac0b7134b0e8bb50d05a9b335c0",targetId:"id-02fc42d2b3b14c75976353d39dcec507",type:"ServingRelationship"},{id:"id-edf08a0d520c458bae5a31ec6dfa72e6",sourceId:"id-a83aea2202314049b43f6692ebaed31a",targetId:"id-de4e41498df540c780a8e45e17a76d7b",type:"ServingRelationship"},{id:"id-e85b7753733f4173a1b1c09541551307",sourceId:"id-958e97c7cd46447da08c7a6260142966",targetId:"id-652c7ee541c1403c876517de1611e4b9",type:"ServingRelationship"},{id:"id-55862fec9a994358a99e2728d30b7be3",sourceId:"id-bd012c6adb9c4b67a016101715ee338b",targetId:"id-7b3edfe63e614043a8ac5603876fa011",type:"ServingRelationship"},{id:"id-bbe49c8ab0f440b787b01c8813fbbde3",sourceId:"id-c7989397ca9d4f77885e0ea803386f2a",targetId:"id-a8f4f86d2ba245c9910599a183e581d3",type:"ServingRelationship"},{id:"id-b5f4174670494437950f82ee0ea786f8",sourceId:"id-4736007acdf64881a2c777b61f027b8c",targetId:"id-b1b08ee64ea14513a36573011bc32525",type:"ServingRelationship"},{id:"id-e9960dbe56224f32982d89d485a319b5",sourceId:"id-e86500389a2a478ca3cba022fc7b3296",targetId:"id-794999b4e99f4733b87df230b58a3e37",type:"ServingRelationship"},{id:"id-093cf0d623e94d84ba77f1212aaff927",sourceId:"id-9b0e43ffbfb94d50b6054665d7af4f55",targetId:"id-9c22db2b3bc741468ccc84398e0cbb48",type:"ServingRelationship"},{id:"id-d31f1447c69f428097d5a8d1599be260",sourceId:"id-54e48b9125b241a1ad4bc7fcf8c06be3",targetId:"id-4e5a201b5fdd403496ec0965e9edda7a",type:"ServingRelationship"},{id:"id-965a2bc89f4546d894f0d5731539cfc1",sourceId:"id-eb9a7b8e13384673a23740668fdd7c3d",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-bf6eedf30efe47eca4503037a03b6d0e",sourceId:"id-6879aac0b7134b0e8bb50d05a9b335c0",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-401eb1335d1044a2a8e530b0863d8c81",sourceId:"id-a83aea2202314049b43f6692ebaed31a",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-b93789e24c85440486ed486ec64bb665",sourceId:"id-958e97c7cd46447da08c7a6260142966",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-c1497ba2711c43ea84ae5eabf701cbd9",sourceId:"id-bd012c6adb9c4b67a016101715ee338b",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-95c3943e3a404aa3aaf160fdc3895d38",sourceId:"id-c7989397ca9d4f77885e0ea803386f2a",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-d21e1c3d7a504ef1ba743937e606e0ff",sourceId:"id-4736007acdf64881a2c777b61f027b8c",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-4a95d204c2a64b049cdf8b120b04d81a",sourceId:"id-b1b08ee64ea14513a36573011bc32525",targetId:"id-02fc42d2b3b14c75976353d39dcec507",type:"FlowRelationship"},{id:"id-048fb243de2f4cfd86eaaea448b2be95",sourceId:"id-02fc42d2b3b14c75976353d39dcec507",targetId:"id-2c737e8eefe443228e04cca610f65096",type:"FlowRelationship"},{id:"id-d460a0b6de2c4d8982875e14c519bd6f",sourceId:"id-2c737e8eefe443228e04cca610f65096",targetId:"id-de4e41498df540c780a8e45e17a76d7b",type:"FlowRelationship"},{id:"id-c2c573ba744948d4b4329f4d62697144",sourceId:"id-88b3df5483eb43b19689d82cb4a2355a",targetId:"id-958e97c7cd46447da08c7a6260142966",type:"SpecializationRelationship"},{id:"id-c7cbea7651bb4b098575836649291157",sourceId:"id-5d999bfe5939496195d672a65dc74bc8",targetId:"id-958e97c7cd46447da08c7a6260142966",type:"SpecializationRelationship"},{id:"id-b7ae5db4688f4b0e9a778c565b768bf6",sourceId:"id-88b3df5483eb43b19689d82cb4a2355a",targetId:"id-652c7ee541c1403c876517de1611e4b9",type:"ServingRelationship"},{id:"id-ac113f9b504343fd90abf2732d4773c8",sourceId:"id-5d999bfe5939496195d672a65dc74bc8",targetId:"id-652c7ee541c1403c876517de1611e4b9",type:"ServingRelationship"},{id:"id-0c2f1868a20f4242bbf6fd75ad3631a9",sourceId:"id-40972532ccb249deb2f3210584bc43a8",targetId:"id-7b3edfe63e614043a8ac5603876fa011",type:"ServingRelationship"},{id:"id-994aa6dbace14aed8879f42cd3fdaeb6",sourceId:"id-e86500389a2a478ca3cba022fc7b3296",targetId:"id-1b4235e43a0e409c8819d13166520b7d",type:"SpecializationRelationship"},{id:"id-9afc2236d794479cb64bb0da014c6b16",sourceId:"id-9b0e43ffbfb94d50b6054665d7af4f55",targetId:"id-1b4235e43a0e409c8819d13166520b7d",type:"SpecializationRelationship"},{id:"id-94d77426a74a42faae4d673c942cdc5e",sourceId:"id-cac9c6057e8a443d8dc55d673948a070",targetId:"id-eb22bf3acd37427d8cf080404f71788a",type:"SpecializationRelationship"},{id:"id-f0ea322c92354749b81f75652799303e",sourceId:"id-9c22db2b3bc741468ccc84398e0cbb48",targetId:"id-ba4f23f3006e4ed7a2ef410826b60867",type:"FlowRelationship"},{id:"id-04c2c50463f44143abc368fd47747af5",sourceId:"id-cb4dd13fcdb4453a9ec29468ef0fd683",targetId:"id-9c22db2b3bc741468ccc84398e0cbb48",type:"FlowRelationship"},{id:"id-2f0b601202fe48479a1537f0e898014f",sourceId:"id-54e48b9125b241a1ad4bc7fcf8c06be3",targetId:"id-1b4235e43a0e409c8819d13166520b7d",type:"SpecializationRelationship"}],y=[{id:"id-d6df30050d0644929f5057d29c822a3e",name:"Описание процесса Report Maker 2.0",viewpoint:""},{id:"id-d036eab44a064706988579b123962e0a",name:"Привязка процесса к классам на этапе подготовки",viewpoint:""},{id:"id-60f38a4cf7564f7f98f44efa9e07770e",name:"Привязка процесса к классам на этапе создания отчета",viewpoint:""}],I={identifier:e,archimateId:d,name:a,description:i,formats:c,source:b,sourceFile:t,sourceFormat:p,timestamp:f,tags:o,duplicates:n,language:r,elements:s,relationships:l,views:y};export{d as archimateId,I as default,i as description,n as duplicates,s as elements,c as formats,e as identifier,r as language,a as name,l as relationships,b as source,t as sourceFile,p as sourceFormat,o as tags,f as timestamp,y as views};