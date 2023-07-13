const e="https://me.big.tuwien.ac.at/EAModelSet/id-80671cb1-c9f8-410a-8acf-2195f8cd8abf",d="id-80671cb1-c9f8-410a-8acf-2195f8cd8abf",a="(new model)",c="",i=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",f="raw-data/github/xml/modelo1.xml",t="XML",o="29-06-2023 09:27:40",r=[],n=[],s="pt",p=[{id:"fd118a30-b5dd-4d03-8bfa-6dd19c595e61",name:"Usuario",type:"BusinessActor",layer:"business"},{id:"id-9da51216-ca4b-4537-bc33-b7976cc46c22",name:"Login",type:"BusinessProcess",layer:"business"},{id:"id-937284b8-4db9-4969-b0b8-4f683880cf36",name:"Pesquisar Produto",type:"BusinessProcess",layer:"business"},{id:"id-32e01fc9-224a-4011-b100-875e3c952cfb",name:"Visualizar detalhe do pedido",type:"BusinessProcess",layer:"business"},{id:"id-0fa0cdf6-79e0-49b1-b444-f719ae019942",name:"Finalizar Compra",type:"BusinessProcess",layer:"business"},{id:"a7714598-220f-43bc-88fc-26a9101fbdf5",name:"BackOffice",type:"BusinessActor",layer:"business"},{id:"f111e0f2-b193-48d9-a10e-0e52a0ef3112",name:"Loja Principal",type:"BusinessActor",layer:"business"},{id:"id-0c46afd9-0977-40aa-82e2-2a4ee3169b04",name:"Call Center",type:"BusinessActor",layer:"business"},{id:"id-75f7d0e1-7e6f-4322-89c2-6cda22ec277f",name:"Loja Parceira",type:"BusinessActor",layer:"business"},{id:"id-3aa302d3-ce46-4f64-abdf-badb4932d9d1",name:"CRUD de estoque",type:"BusinessService",layer:"business"},{id:"id-6e3f6f5e-a20f-4ea0-b379-7c8b9b484766",name:"Pesquisar quantidade de Itens no estoque",type:"BusinessService",layer:"business"},{id:"id-365443df-128d-4fba-b514-25304c365d7f",name:"Alocar Item do estoque",type:"BusinessService",layer:"business"},{id:"id-8e3638a3-1ea5-4227-94ea-14719251f168",name:"Desalocar Item do estoque",type:"BusinessService",layer:"business"},{id:"id-47385d18-84c4-4dae-924a-8c50d7ac1274",name:"Microserviço X",type:"ApplicationService",layer:"application"},{id:"id-9d8c4a0d-2064-47df-af55-981098bbea94",name:"Hazelcast Cluster",type:"ApplicationService",layer:"application"},{id:"id-4bcc46c5-5df7-4c34-82ae-02b54c99d130",name:"Hazelcast Server 01",type:"ApplicationComponent",layer:"application"},{id:"b5f01274-5b2a-45cd-a0d6-f36fb801293c",name:"Hazelcast server 02",type:"ApplicationComponent",layer:"application"},{id:"d733ffa9-9a0c-4499-bedf-0c7093bf146d",name:"Hazelcast Server 03",type:"ApplicationComponent",layer:"application"},{id:"f3b6004f-0e6a-43ba-91ed-a55c8dbcf609",name:"Hazelcast Server x",type:"ApplicationComponent",layer:"application"},{id:"id-90850670-2606-4177-a999-c0726c62712a",name:"MicroServiço X 02",type:"ApplicationComponent",layer:"application"},{id:"id-41a0380e-0591-4621-a91f-3d07a22545bc",name:"Sessao",type:"ApplicationProcess",layer:"application"},{id:"id-377d27e9-8c9c-41bd-be14-602010c1f963",name:"JPA ou Spring Data",type:"ApplicationProcess",layer:"application"},{id:"d9483cce-d20a-4c01-b343-67a3029dcd83",name:"MicroServiço X 01",type:"ApplicationComponent",layer:"application"},{id:"id-04eeea9e-0976-47d2-ab73-a1fde5209460",name:"JPA ou Spring Data (copy)",type:"ApplicationProcess",layer:"application"},{id:"fa80e2ca-b51b-4d81-a1f3-c9d6ffa298a1",name:"Sessao (copy)",type:"ApplicationProcess",layer:"application"},{id:"id-930dafa8-f48f-4e3d-9317-f2edc4bd6b98",name:"MicroServiço X ...",type:"ApplicationComponent",layer:"application"},{id:"fa6bc83b-b102-445b-bbaf-c1836ee8d56d",name:"JPA ou Spring Data (copy)",type:"ApplicationProcess",layer:"application"},{id:"id-79e32220-e7ee-4621-bb07-4f73225575fa",name:"Sessao (copy)",type:"ApplicationProcess",layer:"application"},{id:"a5e848ed-ab59-4895-ba7a-30d868667db6",name:"Aplicação",type:"ApplicationComponent",layer:"application"},{id:"id-29db957c-2251-4e59-8fa1-2de2b53fc194",name:"Aplicação ...",type:"ApplicationComponent",layer:"application"},{id:"id-9642a4c0-2d0a-46ba-b8d7-726abe7f933d",name:"Aplicação",type:"ApplicationComponent",layer:"application"},{id:"b61500db-96e0-497e-b90a-a763c98b356d",name:"Aplicação ...",type:"ApplicationComponent",layer:"application"},{id:"de00d941-6083-43ae-8c31-a893726c3980",name:"Consumidor 01",type:"ApplicationService",layer:"application"},{id:"id-51ec7caa-7242-462e-a6b3-8b11cb86b17e",name:"Consumidor ...",type:"ApplicationService",layer:"application"},{id:"id-76c63de0-a195-43e2-8ae3-1f2401c5d1a7",name:"Consumidor 09",type:"ApplicationService",layer:"application"},{id:"id-7b3c91a2-42d4-492e-80b8-db9e198d949f",name:"Micro serviço CEP",type:"ApplicationComponent",layer:"application"},{id:"id-5a16b26c-1646-4f5e-88d0-49b184deed0b",name:"Micro serviço CEP",type:"ApplicationComponent",layer:"application"},{id:"id-03500f74-3d72-4ece-aa8d-4966f268e237",name:"Micro serviço de pesquisa em estoque",type:"ApplicationService",layer:"application"},{id:"bfc3f2ed-831c-4b13-9ea4-9100eedb68d8",name:"Micro serviço de alocar item do estoque",type:"ApplicationService",layer:"application"},{id:"id-3151481a-a8a5-4aba-95ea-8c2c96da623d",name:"Micro serviço de Desalocar item do estoque",type:"ApplicationService",layer:"application"},{id:"id-398431e8-4199-405e-8f06-32ddeab2c1bf",name:"Micro serviços de CRUD de estoque",type:"ApplicationService",layer:"application"},{id:"id-50eeb743-a712-42f2-a406-40998b5de902",name:"Equipment",type:"Equipment",layer:"technology"},{id:"df7efd35-e579-4602-aa10-db79972d81a7",name:"Database Principal",type:"TechnologyService",layer:"technology"},{id:"id-6bdca826-d135-4082-a847-add270348242",name:"Database Replica",type:"TechnologyService",layer:"technology"},{id:"c8955a60-e1a2-413e-9fee-07fe76a566ef",name:"Database Replica x",type:"TechnologyService",layer:"technology"},{id:"f0d4f163-c7da-42d0-861d-c6ff2dfcd83e",name:"NFS 4.1, AWS S3 ou aws EFS para Storage Service",type:"TechnologyService",layer:"technology"},{id:"id-825feddf-7db5-4ac5-8e2d-3130025c8db1",name:"DNS com Failover multiplos ips para o mesmo dominio",type:"TechnologyService",layer:"technology"},{id:"c7293e5d-d53c-4c10-9795-285b53a21504",name:"Servidor Nginx plus ou Netscaler",type:"TechnologyService",layer:"technology"},{id:"f304cce0-b1ca-422d-bb40-74d4eada1aad",name:"Reverse Proxy e balanceador Farm",type:"Node",layer:"technology"},{id:"b69865d6-bb0a-4d58-894c-cdff52ce6658",name:"Servidor Nginx plus ou Netscaler (copy)",type:"TechnologyService",layer:"technology"},{id:"id-43a7ef55-31db-455e-a942-04ed4367e334",name:"Aplication servers Farm Producao",type:"Node",layer:"technology"},{id:"id-33e64a87-4645-4e87-bccd-2751687d0e37",name:"DNS",type:"Node",layer:"technology"},{id:"id-1a4dd4ca-b6c9-463b-b854-79735a5aa6a9",name:"DNS com Failover multiplos ips para o mesmo dominio",type:"TechnologyService",layer:"technology"},{id:"id-322bc78a-cc0a-4541-ad5c-a8b8fedd5cec",name:"CDN Farm",type:"Node",layer:"technology"},{id:"dd0b9636-f449-43a9-8062-7bc841da07e1",name:"Nginx com Varnish",type:"TechnologyService",layer:"technology"},{id:"id-9cf35d01-1fe4-47b5-94a2-b91aa83c2f29",name:"Nginx com Varnish",type:"TechnologyService",layer:"technology"},{id:"id-00e29b0c-4805-44b2-81e1-cb3b6e456b98",name:"FireWall",type:"Node",layer:"technology"},{id:"id-8f990090-e4f5-43e9-a728-643f6f25d176",name:"Communication Network",type:"CommunicationNetwork",layer:"technology"},{id:"id-623d0e7a-b257-4b0f-91d9-54a7eca6bfe1",name:"AWS EC2 ou Containers Docker",type:"TechnologyService",layer:"technology"},{id:"id-68d9de2e-da92-4347-a380-f7a985a4d8f2",name:"AWS EC2 ou Containers Docker (copy)",type:"TechnologyService",layer:"technology"},{id:"id-0146af85-3aaa-43d2-8722-7adbaeed23dd",name:"Aplication servers Farm Homologação",type:"Node",layer:"technology"},{id:"id-6fa0e922-2ffe-408d-a8f6-5411237b8192",name:"AWS EC2 ou Containers Docker (copy)",type:"TechnologyService",layer:"technology"},{id:"c17fb5e0-4c8f-4c42-b9dd-0c2c5481cd20",name:"AWS EC2 ou Containers Docker (copy) (copy)",type:"TechnologyService",layer:"technology"},{id:"id-5f6336a7-dc6a-4940-881e-5b111d014b05",name:"Farm de Serviços como Hazelcast, Database ou outros Produção",type:"Node",layer:"technology"},{id:"aad07a6d-96aa-49f6-bddf-5dbd243aa91a",name:"Servidor de Serviço",type:"TechnologyService",layer:"technology"},{id:"id-327bd18f-9d48-4eb8-8a44-670fb2e850a0",name:"Servidor de Serviço",type:"TechnologyService",layer:"technology"},{id:"id-1aaa10c2-db57-4038-aa4e-32ca1234c54f",name:"Farm de Serviços como Hazelcast, Database ou outros Homologação",type:"Node",layer:"technology"},{id:"id-9fbd6f4b-3070-47ec-8672-a39a00f3ccf2",name:"Servidor de Serviço",type:"TechnologyService",layer:"technology"},{id:"ce37b8ba-fed2-4935-b887-fd27a90cd224",name:"Servidor de Serviço",type:"TechnologyService",layer:"technology"},{id:"id-2826d303-7133-4927-9a10-9d40b6bcf575",name:"Fila Queue",type:"TechnologyService",layer:"technology"},{id:"ab989cfe-39b0-48cf-aa52-d0bc48f19ce6",name:"Enviar Pedido",type:"TechnologyProcess",layer:"technology"},{id:"d9bcb06e-ae80-4144-ab68-d103852ae220",name:"BackOffice XPTO 01",type:"TechnologyService",layer:"technology"},{id:"a6a8aa06-1452-4ec1-a14b-bc6ba68b94ca",name:"BackOffice XPTO ...",type:"TechnologyService",layer:"technology"},{id:"f5e633f0-ac24-4c1b-bbfd-a4f91449f87a",name:"BackOffice XPTO 09",type:"TechnologyService",layer:"technology"},{id:"bb620119-1f93-4922-96d7-34a5c0eee003",name:"Acões de Negocio",type:"Grouping",layer:"other"},{id:"cb2f726b-30b3-4a91-a50e-c41da11bde90",name:"Micro serviços em cluster",type:"Grouping",layer:"other"},{id:"id-827d0685-8aeb-4851-9d89-f697b937fdd3",name:"Banco de dados e Storage Server",type:"Grouping",layer:"other"},{id:"c29e5fc0-8873-4e34-9272-95ac48e797ed",name:"Estrutura de Rede e Serviços relacionados",type:"Grouping",layer:"other"},{id:"id-54f481f2-2a94-4619-ae14-347c2d9af9fe",name:"Zona Desmilitarizada DMZ",type:"Grouping",layer:"other"},{id:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",name:"Zona Militarizada (Segura) AWS VPC",type:"Grouping",layer:"other"},{id:"id-0aa71435-48be-45d9-865a-31cd03dc69f8",name:"Negocio",type:"Grouping",layer:"other"},{id:"a870241e-69d9-4b32-81b6-f03aaa94faf7",name:"Micro Serviços",type:"Grouping",layer:"other"}],y=[{id:"id-059b0da3-800c-49ec-b264-cf95fef38c3d",sourceId:"fd118a30-b5dd-4d03-8bfa-6dd19c595e61",targetId:"id-9da51216-ca4b-4537-bc33-b7976cc46c22",type:"Triggering"},{id:"aef7f5cc-81fd-41d1-bddc-0c377b675176",sourceId:"fd118a30-b5dd-4d03-8bfa-6dd19c595e61",targetId:"id-937284b8-4db9-4969-b0b8-4f683880cf36",type:"Triggering"},{id:"afe4f5c5-5ed5-45f9-afb3-ad15d9b79a53",sourceId:"fd118a30-b5dd-4d03-8bfa-6dd19c595e61",targetId:"id-32e01fc9-224a-4011-b100-875e3c952cfb",type:"Triggering"},{id:"id-6f409e76-4c17-488e-8636-41d37f393258",sourceId:"fd118a30-b5dd-4d03-8bfa-6dd19c595e61",targetId:"id-0fa0cdf6-79e0-49b1-b444-f719ae019942",type:"Serving"},{id:"id-6b0c6c04-dd39-4cbc-9f85-25d44ec0384f",sourceId:"fd118a30-b5dd-4d03-8bfa-6dd19c595e61",targetId:"id-0fa0cdf6-79e0-49b1-b444-f719ae019942",type:"Triggering"},{id:"id-83c073dc-34fe-4105-a0ed-bfc2ffb53f34",sourceId:"id-9da51216-ca4b-4537-bc33-b7976cc46c22",targetId:"id-937284b8-4db9-4969-b0b8-4f683880cf36",type:"Triggering"},{id:"e0ff42c5-6e18-4ef5-b633-6ca610dfc29b",sourceId:"id-937284b8-4db9-4969-b0b8-4f683880cf36",targetId:"id-32e01fc9-224a-4011-b100-875e3c952cfb",type:"Triggering"},{id:"id-85f45f29-557d-4222-94c4-f6335cc45c15",sourceId:"id-32e01fc9-224a-4011-b100-875e3c952cfb",targetId:"id-0fa0cdf6-79e0-49b1-b444-f719ae019942",type:"Triggering"},{id:"id-054a4dee-e6e5-4c92-9d0a-0a81b0b33c0b",sourceId:"b5f01274-5b2a-45cd-a0d6-f36fb801293c",targetId:"d733ffa9-9a0c-4499-bedf-0c7093bf146d",type:"Association"},{id:"b72d08d5-6240-4c32-a481-99f5d9387ded",sourceId:"id-4bcc46c5-5df7-4c34-82ae-02b54c99d130",targetId:"b5f01274-5b2a-45cd-a0d6-f36fb801293c",type:"Association"},{id:"id-0cf2dea1-0293-465b-a581-725a65e65e85",sourceId:"id-4bcc46c5-5df7-4c34-82ae-02b54c99d130",targetId:"d733ffa9-9a0c-4499-bedf-0c7093bf146d",type:"Association"},{id:"id-92f02709-0968-41d9-a9f2-816514e29424",sourceId:"d733ffa9-9a0c-4499-bedf-0c7093bf146d",targetId:"f3b6004f-0e6a-43ba-91ed-a55c8dbcf609",type:"Association"},{id:"id-90288841-3f5a-4f28-a437-416cbb78c2f9",sourceId:"b5f01274-5b2a-45cd-a0d6-f36fb801293c",targetId:"f3b6004f-0e6a-43ba-91ed-a55c8dbcf609",type:"Association"},{id:"id-9c8a0c4b-0029-4642-b7a2-4bb01e97d444",sourceId:"id-4bcc46c5-5df7-4c34-82ae-02b54c99d130",targetId:"f3b6004f-0e6a-43ba-91ed-a55c8dbcf609",type:"Association"},{id:"id-8a328a05-c1de-4a93-80af-1f99d54d6127",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-41a0380e-0591-4621-a91f-3d07a22545bc",type:"Serving"},{id:"id-3f87e92e-eaa0-4c72-986e-a97a22c6710e",sourceId:"id-90850670-2606-4177-a999-c0726c62712a",targetId:"id-377d27e9-8c9c-41bd-be14-602010c1f963",type:"Realization"},{id:"b8a05298-e64b-4510-bfaa-712d25dd2b3d",sourceId:"id-90850670-2606-4177-a999-c0726c62712a",targetId:"id-41a0380e-0591-4621-a91f-3d07a22545bc",type:"Realization"},{id:"id-0528a972-d47e-4686-bc3f-6a4876b5a8af",sourceId:"d9483cce-d20a-4c01-b343-67a3029dcd83",targetId:"fa80e2ca-b51b-4d81-a1f3-c9d6ffa298a1",type:"Realization"},{id:"id-00517fcf-2230-40fd-a5fc-86703c8f8183",sourceId:"d9483cce-d20a-4c01-b343-67a3029dcd83",targetId:"id-04eeea9e-0976-47d2-ab73-a1fde5209460",type:"Realization"},{id:"id-28821494-e109-4adb-b9dd-6a3eca1c1e69",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-377d27e9-8c9c-41bd-be14-602010c1f963",type:"Serving"},{id:"id-2faac31f-adbe-4443-8fab-41d0addda9cc",sourceId:"id-04eeea9e-0976-47d2-ab73-a1fde5209460",targetId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",type:"Serving"},{id:"bbc63960-66ad-401b-a0a1-9c351ba58414",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-04eeea9e-0976-47d2-ab73-a1fde5209460",type:"Serving"},{id:"cb0c9192-68a5-4bda-b593-0ce1a975c1c8",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"fa80e2ca-b51b-4d81-a1f3-c9d6ffa298a1",type:"Serving"},{id:"id-4cfb0233-aeb1-47e8-b4b2-80fa64f7bfa6",sourceId:"id-930dafa8-f48f-4e3d-9317-f2edc4bd6b98",targetId:"id-79e32220-e7ee-4621-bb07-4f73225575fa",type:"Realization"},{id:"id-11ba6172-063c-4319-a9f7-3cb54d14dc6f",sourceId:"id-930dafa8-f48f-4e3d-9317-f2edc4bd6b98",targetId:"fa6bc83b-b102-445b-bbaf-c1836ee8d56d",type:"Realization"},{id:"id-9c433f95-1974-47bb-a6c9-0ee6d55ea303",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-79e32220-e7ee-4621-bb07-4f73225575fa",type:"Serving"},{id:"id-9b967482-c9d6-4dc1-ae82-aab88443f6dc",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"fa6bc83b-b102-445b-bbaf-c1836ee8d56d",type:"Serving"},{id:"id-35b9b2d9-304e-457c-9d80-3a3b5e7854e1",sourceId:"bb620119-1f93-4922-96d7-34a5c0eee003",targetId:"id-32e01fc9-224a-4011-b100-875e3c952cfb",type:"Composition"},{id:"id-1d5d152c-6314-42ac-898c-f99067275a0e",sourceId:"bb620119-1f93-4922-96d7-34a5c0eee003",targetId:"id-0fa0cdf6-79e0-49b1-b444-f719ae019942",type:"Composition"},{id:"id-7aed5058-84cc-4d43-a3e9-06d06ee7310d",sourceId:"bb620119-1f93-4922-96d7-34a5c0eee003",targetId:"id-937284b8-4db9-4969-b0b8-4f683880cf36",type:"Composition"},{id:"id-90e58adb-d83f-4a7d-b5ea-efc7bd9ecfa2",sourceId:"bb620119-1f93-4922-96d7-34a5c0eee003",targetId:"id-9da51216-ca4b-4537-bc33-b7976cc46c22",type:"Composition"},{id:"id-797cc988-41a3-443b-ba4e-c881bcc49455",sourceId:"cb2f726b-30b3-4a91-a50e-c41da11bde90",targetId:"id-47385d18-84c4-4dae-924a-8c50d7ac1274",type:"Composition"},{id:"f93e9562-dda5-42e0-beeb-7a6173a1cf5c",sourceId:"cb2f726b-30b3-4a91-a50e-c41da11bde90",targetId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",type:"Composition"},{id:"id-9ef06a3b-f20a-464f-8c7f-e44571e9ab88",sourceId:"df7efd35-e579-4602-aa10-db79972d81a7",targetId:"id-6bdca826-d135-4082-a847-add270348242",type:"Triggering"},{id:"dc9a612c-eaab-4ae8-90cf-405346430a8a",sourceId:"df7efd35-e579-4602-aa10-db79972d81a7",targetId:"c8955a60-e1a2-413e-9fee-07fe76a566ef",type:"Triggering"},{id:"ddb1d76a-baab-44e8-a86b-accff9187857",sourceId:"id-827d0685-8aeb-4851-9d89-f697b937fdd3",targetId:"df7efd35-e579-4602-aa10-db79972d81a7",type:"Composition"},{id:"a6a2cc00-0095-4018-9b9e-35562f53b998",sourceId:"id-827d0685-8aeb-4851-9d89-f697b937fdd3",targetId:"id-6bdca826-d135-4082-a847-add270348242",type:"Composition"},{id:"id-14467f5b-db24-4d4b-8044-cbe731d42422",sourceId:"id-827d0685-8aeb-4851-9d89-f697b937fdd3",targetId:"c8955a60-e1a2-413e-9fee-07fe76a566ef",type:"Composition"},{id:"d4449252-6ae3-452d-b1d2-0fc3a2e74963",sourceId:"id-827d0685-8aeb-4851-9d89-f697b937fdd3",targetId:"f0d4f163-c7da-42d0-861d-c6ff2dfcd83e",type:"Composition"},{id:"f29b72ba-f291-4691-9d05-7ee67b04ac12",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"c7293e5d-d53c-4c10-9795-285b53a21504",type:"Realization"},{id:"id-0773f450-4753-4e35-b2b0-05a985a087d3",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"b69865d6-bb0a-4d58-894c-cdff52ce6658",type:"Realization"},{id:"id-60d8b155-e963-4216-ba57-375f9c6240f3",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",type:"Realization"},{id:"d4d3c0f9-4e0f-4414-a42c-51ee0918da09",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"id-825feddf-7db5-4ac5-8e2d-3130025c8db1",type:"Realization"},{id:"c5575f01-9d28-4652-8327-c55bc801fc28",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"id-43a7ef55-31db-455e-a942-04ed4367e334",type:"Realization"},{id:"da3cc95b-3708-442c-bc50-4f27bffa2780",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"id-33e64a87-4645-4e87-bccd-2751687d0e37",type:"Realization"},{id:"id-7dd125c6-2f79-46a7-b670-ff1e0eff560d",sourceId:"id-33e64a87-4645-4e87-bccd-2751687d0e37",targetId:"id-825feddf-7db5-4ac5-8e2d-3130025c8db1",type:"Realization"},{id:"id-23a3447e-c3b7-46a0-8b62-02d9a2c96e0b",sourceId:"id-33e64a87-4645-4e87-bccd-2751687d0e37",targetId:"id-1a4dd4ca-b6c9-463b-b854-79735a5aa6a9",type:"Realization"},{id:"id-6cd992f6-c3cc-4b3c-b667-2951cb5cad98",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"id-322bc78a-cc0a-4541-ad5c-a8b8fedd5cec",type:"Realization"},{id:"id-478e40d3-1c36-4f62-a421-0cc9ad9264a0",sourceId:"id-322bc78a-cc0a-4541-ad5c-a8b8fedd5cec",targetId:"dd0b9636-f449-43a9-8062-7bc841da07e1",type:"Realization"},{id:"id-98b5268f-817e-4bcb-953e-70ea90a90e05",sourceId:"id-322bc78a-cc0a-4541-ad5c-a8b8fedd5cec",targetId:"id-9cf35d01-1fe4-47b5-94a2-b91aa83c2f29",type:"Realization"},{id:"id-4383400d-f88f-4cd2-a7c3-6e724e32d4f4",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"id-54f481f2-2a94-4619-ae14-347c2d9af9fe",type:"Assignment"},{id:"a8435d94-c3e6-4a3e-9e77-4bdd45d65d8f",sourceId:"id-54f481f2-2a94-4619-ae14-347c2d9af9fe",targetId:"id-33e64a87-4645-4e87-bccd-2751687d0e37",type:"Composition"},{id:"id-83a7d92f-5458-44f2-b13e-1f885949705c",sourceId:"id-54f481f2-2a94-4619-ae14-347c2d9af9fe",targetId:"id-322bc78a-cc0a-4541-ad5c-a8b8fedd5cec",type:"Composition"},{id:"id-67cc47c7-a1e7-4e7c-afec-10847127fcce",sourceId:"c29e5fc0-8873-4e34-9272-95ac48e797ed",targetId:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",type:"Composition"},{id:"id-7981f086-65bd-41dc-8f05-593fd5bf77c3",sourceId:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",targetId:"id-43a7ef55-31db-455e-a942-04ed4367e334",type:"Composition"},{id:"fc0885c0-f619-4cbb-9af1-3b328cbbb49e",sourceId:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",targetId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",type:"Composition"},{id:"id-50140126-21ad-4377-abce-f3bd47209a22",sourceId:"id-54f481f2-2a94-4619-ae14-347c2d9af9fe",targetId:"id-00e29b0c-4805-44b2-81e1-cb3b6e456b98",type:"Composition"},{id:"id-5bbdcd94-7a05-4aeb-988c-4cab05facade",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"id-00e29b0c-4805-44b2-81e1-cb3b6e456b98",type:"Association"},{id:"id-42e4166f-8347-4f6a-9abf-8eb13b6c644f",sourceId:"id-00e29b0c-4805-44b2-81e1-cb3b6e456b98",targetId:"id-33e64a87-4645-4e87-bccd-2751687d0e37",type:"Association"},{id:"a8f4010a-77f6-4844-8e4f-0cdcff8f51ba",sourceId:"id-322bc78a-cc0a-4541-ad5c-a8b8fedd5cec",targetId:"id-33e64a87-4645-4e87-bccd-2751687d0e37",type:"Association"},{id:"ac355f6e-3762-4fe8-8265-f8f422696cf2",sourceId:"d9483cce-d20a-4c01-b343-67a3029dcd83",targetId:"df7efd35-e579-4602-aa10-db79972d81a7",type:"Serving"},{id:"id-22334550-a707-43f4-be44-f103c05d63be",sourceId:"d9483cce-d20a-4c01-b343-67a3029dcd83",targetId:"f0d4f163-c7da-42d0-861d-c6ff2dfcd83e",type:"Serving"},{id:"id-2de59cb3-63ca-4f83-8d34-480aa90961fa",sourceId:"id-43a7ef55-31db-455e-a942-04ed4367e334",targetId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",type:"Association"},{id:"dc987c3b-97e2-44e9-ab12-517df103dda8",sourceId:"id-43a7ef55-31db-455e-a942-04ed4367e334",targetId:"id-623d0e7a-b257-4b0f-91d9-54a7eca6bfe1",type:"Assignment"},{id:"id-9ac53d37-2159-4924-8f42-1f3f359746a1",sourceId:"id-43a7ef55-31db-455e-a942-04ed4367e334",targetId:"id-68d9de2e-da92-4347-a380-f7a985a4d8f2",type:"Assignment"},{id:"id-548e8520-f680-4294-bf2a-da9642052b39",sourceId:"id-0146af85-3aaa-43d2-8722-7adbaeed23dd",targetId:"c17fb5e0-4c8f-4c42-b9dd-0c2c5481cd20",type:"Assignment"},{id:"d34fc3f2-3dbd-41db-9c71-d18555f9bda5",sourceId:"id-0146af85-3aaa-43d2-8722-7adbaeed23dd",targetId:"id-6fa0e922-2ffe-408d-a8f6-5411237b8192",type:"Assignment"},{id:"fb1095bc-8377-43cb-85fc-c62fce80daa4",sourceId:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",targetId:"id-0146af85-3aaa-43d2-8722-7adbaeed23dd",type:"Composition"},{id:"id-5da4b868-7c9a-4288-8bd7-1fac2baf5be5",sourceId:"id-0146af85-3aaa-43d2-8722-7adbaeed23dd",targetId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",type:"Association"},{id:"id-63f5d575-af9f-49fe-911f-7615779a847a",sourceId:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",targetId:"id-5f6336a7-dc6a-4940-881e-5b111d014b05",type:"Composition"},{id:"id-9177412d-9fd3-4051-bf38-43331166fb1a",sourceId:"id-5f6336a7-dc6a-4940-881e-5b111d014b05",targetId:"aad07a6d-96aa-49f6-bddf-5dbd243aa91a",type:"Assignment"},{id:"id-186a5e2b-04cc-405d-8709-0606b9cd792e",sourceId:"id-5f6336a7-dc6a-4940-881e-5b111d014b05",targetId:"id-327bd18f-9d48-4eb8-8a44-670fb2e850a0",type:"Assignment"},{id:"id-525e331b-849e-4dbd-b228-aaeebc6c1434",sourceId:"id-1aaa10c2-db57-4038-aa4e-32ca1234c54f",targetId:"ce37b8ba-fed2-4935-b887-fd27a90cd224",type:"Assignment"},{id:"c797f7f1-1ea7-4b33-bcf0-405a54d922fb",sourceId:"id-1aaa10c2-db57-4038-aa4e-32ca1234c54f",targetId:"id-9fbd6f4b-3070-47ec-8672-a39a00f3ccf2",type:"Assignment"},{id:"id-9302b2d6-4422-455a-aded-88d1d8842e97",sourceId:"c8b5b280-7bf0-463e-8de3-cfe4d1c36cb2",targetId:"id-1aaa10c2-db57-4038-aa4e-32ca1234c54f",type:"Composition"},{id:"id-5b49543a-9a8b-4baa-b276-78886e456c70",sourceId:"id-5f6336a7-dc6a-4940-881e-5b111d014b05",targetId:"id-43a7ef55-31db-455e-a942-04ed4367e334",type:"Association"},{id:"c2db0395-b343-426c-9cd8-050da367ca02",sourceId:"id-1aaa10c2-db57-4038-aa4e-32ca1234c54f",targetId:"id-0146af85-3aaa-43d2-8722-7adbaeed23dd",type:"Association"},{id:"id-2f24778e-95f3-42c4-81e6-b1cad1605808",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"a5e848ed-ab59-4895-ba7a-30d868667db6",type:"Triggering"},{id:"id-782be9db-6ced-4d36-9dc6-0b58cb783b08",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"id-29db957c-2251-4e59-8fa1-2de2b53fc194",type:"Triggering"},{id:"afcb940d-ca81-4f7a-a33d-5f11d7e757f7",sourceId:"df7efd35-e579-4602-aa10-db79972d81a7",targetId:"a5e848ed-ab59-4895-ba7a-30d868667db6",type:"Serving"},{id:"id-29b42a09-7f05-4236-a7fb-34dedac0eb23",sourceId:"df7efd35-e579-4602-aa10-db79972d81a7",targetId:"id-29db957c-2251-4e59-8fa1-2de2b53fc194",type:"Serving"},{id:"e2336192-da9d-4440-8ee5-2baaa4ec2931",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"id-9642a4c0-2d0a-46ba-b8d7-726abe7f933d",type:"Serving"},{id:"id-54110084-6ca8-43bd-ba8d-069a03440229",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"id-9642a4c0-2d0a-46ba-b8d7-726abe7f933d",type:"Triggering"},{id:"e381d258-63f9-41de-8d76-bce6802427df",sourceId:"f304cce0-b1ca-422d-bb40-74d4eada1aad",targetId:"b61500db-96e0-497e-b90a-a763c98b356d",type:"Triggering"},{id:"id-045017d2-4f2f-455c-8cf4-fcfe5946c9e9",sourceId:"id-6bdca826-d135-4082-a847-add270348242",targetId:"id-9642a4c0-2d0a-46ba-b8d7-726abe7f933d",type:"Serving"},{id:"f4447cab-f305-4013-a770-82ad89711023",sourceId:"c8955a60-e1a2-413e-9fee-07fe76a566ef",targetId:"b61500db-96e0-497e-b90a-a763c98b356d",type:"Serving"},{id:"afd8de34-50d2-4112-acd1-18762a22c006",sourceId:"id-9642a4c0-2d0a-46ba-b8d7-726abe7f933d",targetId:"ab989cfe-39b0-48cf-aa52-d0bc48f19ce6",type:"Triggering"},{id:"da84cd63-ea1a-4651-b62b-3b277ed19118",sourceId:"a5e848ed-ab59-4895-ba7a-30d868667db6",targetId:"ab989cfe-39b0-48cf-aa52-d0bc48f19ce6",type:"Triggering"},{id:"id-66a7381b-4279-490e-88fa-e1c61d6a6b36",sourceId:"ab989cfe-39b0-48cf-aa52-d0bc48f19ce6",targetId:"id-2826d303-7133-4927-9a10-9d40b6bcf575",type:"Triggering"},{id:"id-03c91eec-f69c-43cc-b84c-3b5d2e86bcb2",sourceId:"id-2826d303-7133-4927-9a10-9d40b6bcf575",targetId:"de00d941-6083-43ae-8c31-a893726c3980",type:"Serving"},{id:"id-1be4b279-251b-43a9-83e0-e91c5693e286",sourceId:"de00d941-6083-43ae-8c31-a893726c3980",targetId:"d9bcb06e-ae80-4144-ab68-d103852ae220",type:"Triggering"},{id:"id-774ccad0-2291-402b-9424-e939ae58c7b9",sourceId:"id-51ec7caa-7242-462e-a6b3-8b11cb86b17e",targetId:"a6a8aa06-1452-4ec1-a14b-bc6ba68b94ca",type:"Triggering"},{id:"id-2e492e6e-eead-4419-afc2-56cfa9aee4d8",sourceId:"id-76c63de0-a195-43e2-8ae3-1f2401c5d1a7",targetId:"f5e633f0-ac24-4c1b-bbfd-a4f91449f87a",type:"Triggering"},{id:"id-5d1fcb1e-4d5c-407a-8a07-3238ac497286",sourceId:"id-2826d303-7133-4927-9a10-9d40b6bcf575",targetId:"id-51ec7caa-7242-462e-a6b3-8b11cb86b17e",type:"Serving"},{id:"id-942c1aed-3980-45ca-9cad-154a00b4dd52",sourceId:"id-2826d303-7133-4927-9a10-9d40b6bcf575",targetId:"id-76c63de0-a195-43e2-8ae3-1f2401c5d1a7",type:"Serving"},{id:"id-56fe09ba-f1de-4de7-a390-94ae4a72963e",sourceId:"a7714598-220f-43bc-88fc-26a9101fbdf5",targetId:"id-3aa302d3-ce46-4f64-abdf-badb4932d9d1",type:"Triggering"},{id:"d98b5f6a-08d4-480c-9ae0-64e8230e996e",sourceId:"f111e0f2-b193-48d9-a10e-0e52a0ef3112",targetId:"id-6e3f6f5e-a20f-4ea0-b379-7c8b9b484766",type:"Triggering"},{id:"id-5ec308b4-6b3d-4342-ae90-cca06c313265",sourceId:"id-0c46afd9-0977-40aa-82e2-2a4ee3169b04",targetId:"id-6e3f6f5e-a20f-4ea0-b379-7c8b9b484766",type:"Triggering"},{id:"id-4e7430f5-6894-438a-acb1-2f6ff625566d",sourceId:"id-75f7d0e1-7e6f-4322-89c2-6cda22ec277f",targetId:"id-6e3f6f5e-a20f-4ea0-b379-7c8b9b484766",type:"Triggering"},{id:"id-74c485e9-4519-4b9b-8b47-705431a642ce",sourceId:"f111e0f2-b193-48d9-a10e-0e52a0ef3112",targetId:"id-365443df-128d-4fba-b514-25304c365d7f",type:"Triggering"},{id:"id-36725ba1-5130-4e47-ab94-e687a80706e3",sourceId:"id-0c46afd9-0977-40aa-82e2-2a4ee3169b04",targetId:"id-365443df-128d-4fba-b514-25304c365d7f",type:"Triggering"},{id:"ea641d42-a2c7-447a-b184-4e7790ba6e55",sourceId:"id-75f7d0e1-7e6f-4322-89c2-6cda22ec277f",targetId:"id-365443df-128d-4fba-b514-25304c365d7f",type:"Triggering"},{id:"de965bb0-65c5-4855-801a-af234cdb4f0f",sourceId:"a7714598-220f-43bc-88fc-26a9101fbdf5",targetId:"id-365443df-128d-4fba-b514-25304c365d7f",type:"Triggering"},{id:"id-007bb5a0-6c76-4e16-94c1-bc6bb1ae7eb5",sourceId:"id-75f7d0e1-7e6f-4322-89c2-6cda22ec277f",targetId:"id-8e3638a3-1ea5-4227-94ea-14719251f168",type:"Triggering"},{id:"id-1ea05011-a550-48d0-850e-0730fad74e59",sourceId:"id-0c46afd9-0977-40aa-82e2-2a4ee3169b04",targetId:"id-8e3638a3-1ea5-4227-94ea-14719251f168",type:"Triggering"},{id:"id-70a58244-9a04-44aa-98bb-f54c3adfc3b3",sourceId:"f111e0f2-b193-48d9-a10e-0e52a0ef3112",targetId:"id-8e3638a3-1ea5-4227-94ea-14719251f168",type:"Triggering"},{id:"id-23572f02-8281-44ce-8a29-48c1aebad00d",sourceId:"a7714598-220f-43bc-88fc-26a9101fbdf5",targetId:"id-8e3638a3-1ea5-4227-94ea-14719251f168",type:"Triggering"},{id:"id-4ee27ae4-129e-4804-b3f2-a420903deb44",sourceId:"a7714598-220f-43bc-88fc-26a9101fbdf5",targetId:"id-6e3f6f5e-a20f-4ea0-b379-7c8b9b484766",type:"Triggering"},{id:"a02559a7-573e-4669-8f31-c3d2bbf2eab4",sourceId:"id-0aa71435-48be-45d9-865a-31cd03dc69f8",targetId:"a7714598-220f-43bc-88fc-26a9101fbdf5",type:"Composition"},{id:"id-9dd1b839-2b38-4289-9b4a-39544a32f7fe",sourceId:"id-0aa71435-48be-45d9-865a-31cd03dc69f8",targetId:"f111e0f2-b193-48d9-a10e-0e52a0ef3112",type:"Composition"},{id:"id-1231951b-88c4-484d-95e4-6d2fd20e2f9e",sourceId:"id-0aa71435-48be-45d9-865a-31cd03dc69f8",targetId:"id-75f7d0e1-7e6f-4322-89c2-6cda22ec277f",type:"Composition"},{id:"id-00e6b8e3-c355-44e5-b968-e83ebb097fd3",sourceId:"id-0aa71435-48be-45d9-865a-31cd03dc69f8",targetId:"id-0c46afd9-0977-40aa-82e2-2a4ee3169b04",type:"Composition"},{id:"id-1919f8b1-f5e4-4ddd-bde9-efca6c876bba",sourceId:"a870241e-69d9-4b32-81b6-f03aaa94faf7",targetId:"id-03500f74-3d72-4ece-aa8d-4966f268e237",type:"Composition"},{id:"id-81d0329f-8c4b-4ea2-9190-50834e135e13",sourceId:"a870241e-69d9-4b32-81b6-f03aaa94faf7",targetId:"bfc3f2ed-831c-4b13-9ea4-9100eedb68d8",type:"Composition"},{id:"id-7b98e0b8-4156-425e-b19c-4ca58669d845",sourceId:"a870241e-69d9-4b32-81b6-f03aaa94faf7",targetId:"id-398431e8-4199-405e-8f06-32ddeab2c1bf",type:"Composition"},{id:"id-79ff0ee8-4311-4eaf-ae33-bcaabffb8e78",sourceId:"a870241e-69d9-4b32-81b6-f03aaa94faf7",targetId:"id-3151481a-a8a5-4aba-95ea-8c2c96da623d",type:"Composition"},{id:"a1777c49-c3db-4336-ae10-48928e84aa07",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"bfc3f2ed-831c-4b13-9ea4-9100eedb68d8",type:"Serving"},{id:"id-12d08062-6e93-4381-8430-9bdeb9c5e6dc",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-3151481a-a8a5-4aba-95ea-8c2c96da623d",type:"Serving"},{id:"id-2cbd3185-dffb-4740-a704-488048ba53c3",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-398431e8-4199-405e-8f06-32ddeab2c1bf",type:"Serving"},{id:"id-17e0fb72-f843-437f-b7b6-7985e24024e3",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-5a16b26c-1646-4f5e-88d0-49b184deed0b",type:"Serving"},{id:"de4177dc-c08c-40ff-8ab7-cd40862802f9",sourceId:"id-9d8c4a0d-2064-47df-af55-981098bbea94",targetId:"id-7b3c91a2-42d4-492e-80b8-db9e198d949f",type:"Serving"},{id:"id-7dd836c1-89f7-44f8-9292-bef1994a15f5",sourceId:"df7efd35-e579-4602-aa10-db79972d81a7",targetId:"id-5a16b26c-1646-4f5e-88d0-49b184deed0b",type:"Serving"},{id:"cee46744-ca7b-481f-86af-f33b54aaedfa",sourceId:"df7efd35-e579-4602-aa10-db79972d81a7",targetId:"id-7b3c91a2-42d4-492e-80b8-db9e198d949f",type:"Serving"}],g=[{id:"cdb1c4ec-50bc-4b1f-9dc7-d5122ee805f6",name:"geral",viewpoint:""},{id:"d25c57cd-5092-4a06-a2b0-b11f300bb48f",name:"R1-1",viewpoint:""},{id:"id-3496e8ed-814e-434b-9fac-47374929af5f",name:"R1-2",viewpoint:""},{id:"id-41928176-42e7-456a-95bd-219b9402c5c6",name:"R2",viewpoint:""},{id:"efd869ea-f53e-4f2f-b45b-864155bc0a61",name:"R3",viewpoint:""},{id:"e604efab-d3fd-4deb-8c7d-8f39c7209d02",name:"R5",viewpoint:""}],l={identifier:e,archimateId:d,name:a,description:c,formats:i,source:b,sourceFile:f,sourceFormat:t,timestamp:o,tags:r,duplicates:n,language:s,elements:p,relationships:y,views:g};export{d as archimateId,l as default,c as description,n as duplicates,p as elements,i as formats,e as identifier,s as language,a as name,y as relationships,b as source,f as sourceFile,t as sourceFormat,r as tags,o as timestamp,g as views};