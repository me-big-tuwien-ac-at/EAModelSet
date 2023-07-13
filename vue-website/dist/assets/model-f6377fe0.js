const e="https://me.big.tuwien.ac.at/EAModelSet/34aad189-81b4-4a89-bfc7-aea45b63a783",a="34aad189-81b4-4a89-bfc7-aea45b63a783",d="CA Felles API-katalog",c=`Løsningsarkitektur for Felles API-katalog\r
\r
For en overordnet arkitektur, se https://github.com/DIG-Informasjonsforvaltning/SA_Informasjonsforvaltning`,i=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",f="raw-data/github/grafico/ca_felles_api-katalog.archimate",b="ARCHIMATE",n="29-06-2023 09:29:26",p=[],o=[],s="nn",r=[{id:"7ef91728-dd81-40b6-a83f-24bc445db0fd",name:"API-forvalter",type:"BusinessRole",layer:"business"},{id:"50c9bd25-04cc-48a9-b85f-f3d0175a9999",name:"API-konsument (design time)",type:"BusinessRole",layer:"business"},{id:"51f268ae-77eb-4f1a-8881-6c583836ac2c",name:"API-konsument (design time)",type:"BusinessRole",layer:"business"},{id:"3b9fdfbd-8ee4-496b-9773-e0f927207c5c",name:"“Den registrerte/subjektet”",type:"BusinessRole",layer:"business"},{id:"4a102ef2-3808-4535-9b55-1e6217f933b5",name:"API-katalog eier",type:"BusinessRole",layer:"business"},{id:"d77a82e7-1c98-44c7-b7e5-6b2940df8862",name:"API-tilbyder",type:"BusinessRole",layer:"business"},{id:"0fa67d26-8086-4663-956b-aa9aa6f6d5d6",name:"Felles API-katalog Admin",type:"BusinessRole",layer:"business"},{id:"12861608-1acf-4cd3-9ae9-54de78f94884",name:"API-katalogen",type:"BusinessService",layer:"business"},{id:"1624f0a3-dd38-4bab-9da8-f65c115834e9",name:"SMP (Service Metadata Publishing) (run time) ",type:"BusinessRole",layer:"business"},{id:"26b3a524-a0ad-4bd5-8570-d878544d39a4",name:"API-mangement",type:"BusinessRole",layer:"business"},{id:"341528be-2e3e-4c0b-b982-3b7995078fe1",name:"Søk GUI",type:"ApplicationInterface",layer:"application"},{id:"41220e27-d97f-4258-b344-b80e6b2a757f",name:"Registrere API-beskrivelser",type:"ApplicationService",layer:"application"},{id:"f25d3fa8-7fd8-414e-8257-3fe414a05da7",name:"Datalagring",type:"ApplicationComponent",layer:"application"},{id:"b1c435a5-43f8-436f-8871-588340b807a5",name:"Datasett registrering",type:"ApplicationComponent",layer:"application"},{id:"854d533e-3988-4c4f-8752-5cc521abe927",name:"Publisere datasett",type:"ApplicationService",layer:"application"},{id:"c1c20a05-e45f-47db-ade9-878adbc66c85",name:"API søketjeneste",type:"ApplicationService",layer:"application"},{id:"074f98eb-c805-4b8f-90a2-af990b7cb090",name:"API registreringstjeneste backend",type:"ApplicationComponent",layer:"application"},{id:"85fbf293-79c8-4ddd-b85a-5952d7c1e242",name:"Indeksere API-beskrivelser",type:"ApplicationService",layer:"application"},{id:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",name:"API-katalog søke-API",type:"ApplicationInterface",layer:"application"},{id:"85cc641c-6522-4e9e-b773-da599818ad59",name:"Search",type:"ApplicationComponent",layer:"application"},{id:"ec1dc982-dba9-4de5-bbc0-466d2432a371",name:"Referansedata-oppslag",type:"ApplicationInterface",layer:"application"},{id:"314e0656-3b24-4d2d-b6e6-f1804f5ae468",name:"Registrering GUI",type:"ApplicationInterface",layer:"application"},{id:"a9235301-e754-448c-9d0c-2797feea7b51",name:"Oppdaterings-API",type:"ApplicationInterface",layer:"application"},{id:"55d033ce-b3a8-4687-a5ca-7eaf367747e9",name:"Publisere refereansedata",type:"ApplicationService",layer:"application"},{id:"d513680d-85df-4318-8f56-e5681d095784",name:"API search",type:"ApplicationComponent",layer:"application"},{id:"55c79a31-a66f-4e90-aec0-7c2cfc3f5057",name:"Harvester",type:"ApplicationComponent",layer:"application"},{id:"6f156f6b-9b8d-41e4-b17f-143e4ab95727",name:"Søk",type:"ApplicationComponent",layer:"application"},{id:"a0f12518-c4d8-4a50-ad6f-091a0e54c4cf",name:"Publisering API",type:"ApplicationInterface",layer:"application"},{id:"e217bd5e-a6e4-48ab-ade7-f613b6d23959",name:"Søk API",type:"ApplicationInterface",layer:"application"},{id:"2f39b775-cfa3-4280-ae7e-ea7ea9294fb8",name:"Harvester Admin-GUI",type:"ApplicationComponent",layer:"application"},{id:"82db13b9-4b5a-4fc0-9251-6dce575153bd",name:"API-registrering",type:"ApplicationComponent",layer:"application"},{id:"fbdb5c93-29c4-4c5d-ad73-f50286b0c2bc",name:"Harvester API",type:"ApplicationInterface",layer:"application"},{id:"1f392da9-5d66-4221-a980-ce182338fc24",name:"Referansedata-oppdatering",type:"ApplicationInterface",layer:"application"},{id:"d7996c68-9e16-46b3-a864-45241a4861a3",name:"Datasett lagring",type:"ApplicationComponent",layer:"application"},{id:"70fda8c3-ab04-4848-a50d-fe1d1982c73c",name:"Publisere API-beskrivelser",type:"ApplicationService",layer:"application"},{id:"fba29e1a-ff70-4e55-b5e7-8b261a2cb5fb",name:"API-backend",type:"ApplicationComponent",layer:"application"},{id:"7c84d522-a56a-4235-8640-26fd7efd8fc9",name:"Referansedata håndtering",type:"ApplicationComponent",layer:"application"},{id:"3c3d68c2-0710-4805-8813-d82a28d85bd0",name:"Service Metadata Publisher (SMP)",type:"ApplicationComponent",layer:"application"},{id:"abf1c45b-eeda-4f7c-8e2c-2b0121b22d54",name:"Oppdaterings-GUI",type:"ApplicationComponent",layer:"application"},{id:"c0e7bafe-5d69-4769-ba80-970c23f4dec9",name:"Søk på tvers i kataloger",type:"ApplicationService",layer:"application"},{id:"cb400ec2-eed1-469a-bc15-a804ce079426",name:"Oppdaterings-api",type:"ApplicationInterface",layer:"application"},{id:"e3c2f615-9bcf-4427-8a80-9115a2fa5a43",name:"Søke-GUI",type:"ApplicationInterface",layer:"application"},{id:"175fc82e-542f-4438-a487-9eeea6de8356",name:"Indeksere datasett",type:"ApplicationService",layer:"application"},{id:"34e60d9a-e6b4-4c3d-a38b-6ed49cbbcf03",name:"Harvester",type:"ApplicationComponent",layer:"application"},{id:"b0a020df-85f4-4915-a490-6416bc6e2def",name:"API-beskrivelse lagring",type:"ApplicationComponent",layer:"application"},{id:"5ba45fb2-41b3-48c9-af60-77b4231b1c41",name:"Registreringsapplikasjon",type:"ApplicationComponent",layer:"application"},{id:"2b9b4def-536c-4223-a322-f2773212b1b5",name:"Registrere datasett",type:"ApplicationService",layer:"application"},{id:"da08be48-1722-4220-a945-d773807848ca",name:"Admin info lagring",type:"ApplicationComponent",layer:"application"},{id:"017dbe34-4881-4980-9741-84e8d5ffdaf1",name:"API-katalog registrerings-API",type:"ApplicationInterface",layer:"application"},{id:"aacb89a5-aab5-4ddf-8ff6-8c0e59057432",name:"API høstetjeneste",type:"ApplicationService",layer:"application"},{id:"7b471359-9ba0-4f0b-8d81-45e2a6884f99",name:"Oppdatere referansedata",type:"ApplicationService",layer:"application"},{id:"740907f8-ba6b-4683-ab14-9094af2bc9a3",name:"Publisere datasett",type:"ApplicationService",layer:"application"},{id:"77f16962-60ce-4dc1-8260-58fc75602d71",name:"Felles GUI",type:"ApplicationComponent",layer:"application"},{id:"3add27a2-a186-46cd-83f0-ba3ac515f44e",name:"API katalog harvester-API",type:"ApplicationInterface",layer:"application"},{id:"4d84630a-ad56-49aa-abf9-40c70b390e06",name:"API-beskrivelse lagring",type:"ApplicationComponent",layer:"application"},{id:"07f2cefe-3fd9-4914-b52a-567a5896f3d3",name:"API-søkemotor",type:"ApplicationComponent",layer:"application"},{id:"ff58e4a0-173b-45ec-8a98-b9ad0f0e76ab",name:"API-oppdatering",type:"ApplicationComponent",layer:"application"},{id:"f14d3720-a4af-40b0-bf85-6ab319d24233",name:"Lokal API-katalog",type:"ApplicationComponent",layer:"application"},{id:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",name:"Datasettkatalog",type:"ApplicationComponent",layer:"application"},{id:"1e25d66a-6179-415a-9e84-2433cad6bfcb",name:"API-katalog registrering",type:"ApplicationComponent",layer:"application"},{id:"ff356fe4-e139-4d29-a326-8761552f1dcd",name:"Publisere API-beskrivelser",type:"ApplicationService",layer:"application"},{id:"efe4a670-80c9-4ef7-9d18-ebf78bb61849",name:"Harvester admin",type:"ApplicationInterface",layer:"application"},{id:"1843ed7e-13df-42e8-b3cd-c43466368691",name:"Felles Datasettkatalog",type:"ApplicationComponent",layer:"application"},{id:"c4840221-1c7d-4fb0-af48-5ffc5f2c88c8",name:"Felles Informasjonsmodell-katalog",type:"ApplicationComponent",layer:"application"},{id:"3d28f424-2cf8-4264-836e-c2d6e828cca1",name:"Datasett lagring",type:"ApplicationComponent",layer:"application"},{id:"5fc749bc-cba3-43da-b8bd-e29c69c0ab34",name:"API registreringstjeneste datalagring",type:"ApplicationComponent",layer:"application"},{id:"dee1b99f-df00-403e-bfe4-4153f5ea0e9d",name:"Datasett registrering",type:"ApplicationComponent",layer:"application"},{id:"870a08c7-cc55-45fb-91bd-cec5025936f6",name:"Søk API",type:"ApplicationInterface",layer:"application"},{id:"989acac2-2b43-43a9-b55b-83bafa4e57d2",name:"Reference-data",type:"ApplicationComponent",layer:"application"},{id:"f67941fc-196e-48b6-a733-621397a6fdd5",name:"Søk GUI",type:"ApplicationInterface",layer:"application"},{id:"62c21f0a-a284-415f-97a8-0a08ee7994f0",name:"API-katalog",type:"ApplicationComponent",layer:"application"},{id:"162a4685-1432-4da8-83cc-56bc1441ca34",name:"Referansedata lagring",type:"ApplicationComponent",layer:"application"},{id:"4509a7f7-afda-4b0c-981d-da8df7f20682",name:"API høstetjeneste datalagring",type:"ApplicationComponent",layer:"application"},{id:"05b0171b-dfdb-4834-a047-84c4f9791207",name:"API registrering",type:"ApplicationComponent",layer:"application"},{id:"f884bae6-09b6-47c9-bb01-f8e9e9381e7d",name:"API registreringstjeneste",type:"ApplicationService",layer:"application"},{id:"1b58721d-dcf6-4364-9b20-cd09763cbd85",name:"Innhøsting administrasjon",type:"ApplicationInterface",layer:"application"},{id:"0b61e53b-2770-4497-9335-b11c7b90bbaa",name:"API-beskrivelse harvester",type:"ApplicationComponent",layer:"application"},{id:"207af9b7-83c3-499e-b934-953d69a9dd29",name:"API katalog harvester",type:"ApplicationComponent",layer:"application"},{id:"db9b81de-e4a6-4b08-83fd-eeba063f15ba",name:"Registrering GUI",type:"ApplicationInterface",layer:"application"},{id:"59847d7d-05c3-4f52-ae52-828d998c4933",name:"Publisering API",type:"ApplicationInterface",layer:"application"}],l=[{id:"9cc92883-2b09-4629-ad86-7bd96371e71b",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"5ba45fb2-41b3-48c9-af60-77b4231b1c41",type:"CompositionRelationship"},{id:"22398fa2-0b55-46f0-92c4-4b1994aefe6d",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"a9235301-e754-448c-9d0c-2797feea7b51",type:"CompositionRelationship"},{id:"61fdee84-b9d6-4a8b-bbe3-5f3ec7720a70",sourceId:"59847d7d-05c3-4f52-ae52-828d998c4933",targetId:"ff356fe4-e139-4d29-a326-8761552f1dcd",type:"AssignmentRelationship"},{id:"9d086ab6-05eb-498b-9cad-c47d75fe3b29",sourceId:"989acac2-2b43-43a9-b55b-83bafa4e57d2",targetId:"1f392da9-5d66-4221-a980-ce182338fc24",type:"CompositionRelationship"},{id:"7fe78250-c6af-4c64-be0a-89c8a11e1e1a",sourceId:"3b9fdfbd-8ee4-496b-9773-e0f927207c5c",targetId:"12861608-1acf-4cd3-9ae9-54de78f94884",type:"AssignmentRelationship"},{id:"49e0c930-a181-4259-81b5-e14ce2770963",sourceId:"b1c435a5-43f8-436f-8871-588340b807a5",targetId:"a0f12518-c4d8-4a50-ad6f-091a0e54c4cf",type:"CompositionRelationship"},{id:"b93538ba-faef-40ee-ad2d-bfa830638fd3",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"c1c20a05-e45f-47db-ade9-878adbc66c85",type:"AssignmentRelationship"},{id:"c2cc4c2a-974b-4fa6-819a-afd1bca02a11",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"2f39b775-cfa3-4280-ae7e-ea7ea9294fb8",type:"CompositionRelationship"},{id:"04c528a0-e308-4469-8d95-0882dfc4fc02",sourceId:"5fc749bc-cba3-43da-b8bd-e29c69c0ab34",targetId:"074f98eb-c805-4b8f-90a2-af990b7cb090",type:"ServingRelationship"},{id:"ccb7fdf1-c767-4467-a501-c0f1c34d1421",sourceId:"ff58e4a0-173b-45ec-8a98-b9ad0f0e76ab",targetId:"85fbf293-79c8-4ddd-b85a-5952d7c1e242",type:"RealizationRelationship"},{id:"bd19a771-0cf2-401c-8e80-a4aec3b3e0b2",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"70fda8c3-ab04-4848-a50d-fe1d1982c73c",type:"AssignmentRelationship"},{id:"2d59188f-a125-4487-940d-4fa5a88b5283",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"85fbf293-79c8-4ddd-b85a-5952d7c1e242",type:"AssignmentRelationship"},{id:"68c1f0bf-c8ba-43c0-ba65-dc2bd7acbd8d",sourceId:"77f16962-60ce-4dc1-8260-58fc75602d71",targetId:"6f156f6b-9b8d-41e4-b17f-143e4ab95727",type:"CompositionRelationship"},{id:"1b30433e-49d7-44cc-8f9d-f4decc0818ce",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"fbdb5c93-29c4-4c5d-ad73-f50286b0c2bc",type:"CompositionRelationship"},{id:"ff49fc2c-0f40-4221-93fe-3cbdc8b80ddc",sourceId:"05b0171b-dfdb-4834-a047-84c4f9791207",targetId:"4d84630a-ad56-49aa-abf9-40c70b390e06",type:"CompositionRelationship"},{id:"e7890337-fd81-48d2-9add-3fdcb323c26d",sourceId:"074f98eb-c805-4b8f-90a2-af990b7cb090",targetId:"f884bae6-09b6-47c9-bb01-f8e9e9381e7d",type:"RealizationRelationship"},{id:"4f424884-8dd9-4ebe-b67f-b99a265ef2a5",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"b0a020df-85f4-4915-a490-6416bc6e2def",type:"CompositionRelationship"},{id:"d521928d-6de9-4b3a-8738-a58a5c0ea4cf",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"c4840221-1c7d-4fb0-af48-5ffc5f2c88c8",type:"ServingRelationship"},{id:"81209ffd-f146-422d-9973-3414e8c95f98",sourceId:"da08be48-1722-4220-a945-d773807848ca",targetId:"34e60d9a-e6b4-4c3d-a38b-6ed49cbbcf03",type:"ServingRelationship"},{id:"1e43077b-3056-48fb-941d-90bb757da2d2",sourceId:"3add27a2-a186-46cd-83f0-ba3ac515f44e",targetId:"aacb89a5-aab5-4ddf-8ff6-8c0e59057432",type:"AssignmentRelationship"},{id:"e04a6fa3-52e6-4f99-bef2-c521d1f671fc",sourceId:"82db13b9-4b5a-4fc0-9251-6dce575153bd",targetId:"41220e27-d97f-4258-b344-b80e6b2a757f",type:"RealizationRelationship"},{id:"8ee50f0f-fc48-4c88-b4bd-597c923d2d68",sourceId:"017dbe34-4881-4980-9741-84e8d5ffdaf1",targetId:"f884bae6-09b6-47c9-bb01-f8e9e9381e7d",type:"AssignmentRelationship"},{id:"0c762739-e739-4e57-a0a3-18f2b2046774",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"abf1c45b-eeda-4f7c-8e2c-2b0121b22d54",type:"CompositionRelationship"},{id:"343c6b79-6406-4c9b-9c00-55581dfa12c9",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"fba29e1a-ff70-4e55-b5e7-8b261a2cb5fb",type:"CompositionRelationship"},{id:"7f9b2552-fe54-46c8-b182-da8d1ff2275a",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"34e60d9a-e6b4-4c3d-a38b-6ed49cbbcf03",type:"CompositionRelationship"},{id:"a6a36a9c-5679-47da-8319-20eaf7374ba7",sourceId:"b0a020df-85f4-4915-a490-6416bc6e2def",targetId:"07f2cefe-3fd9-4914-b52a-567a5896f3d3",type:"ServingRelationship"},{id:"f99f769f-286d-4f57-ad34-c934fd832dd1",sourceId:"989acac2-2b43-43a9-b55b-83bafa4e57d2",targetId:"ec1dc982-dba9-4de5-bbc0-466d2432a371",type:"CompositionRelationship"},{id:"5731a7da-cacb-4a58-ac7c-86acbc6fa775",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"4509a7f7-afda-4b0c-981d-da8df7f20682",type:"CompositionRelationship"},{id:"d7cad06a-1bd9-4a3e-a975-a2bdd71f7aaa",sourceId:"989acac2-2b43-43a9-b55b-83bafa4e57d2",targetId:"7c84d522-a56a-4235-8640-26fd7efd8fc9",type:"CompositionRelationship"},{id:"ee8acf1b-f41b-484a-a722-d5d4686425d9",sourceId:"5ba45fb2-41b3-48c9-af60-77b4231b1c41",targetId:"d77a82e7-1c98-44c7-b7e5-6b2940df8862",type:"ServingRelationship"},{id:"54247c79-ed77-4593-a5a3-5da6cecc1b66",sourceId:"82db13b9-4b5a-4fc0-9251-6dce575153bd",targetId:"ff356fe4-e139-4d29-a326-8761552f1dcd",type:"RealizationRelationship"},{id:"a1f533af-0ffa-460c-b48e-7b307655908e",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"f67941fc-196e-48b6-a733-621397a6fdd5",type:"CompositionRelationship"},{id:"b878d011-6369-48ad-907f-1d081a0dd7f8",sourceId:"7c84d522-a56a-4235-8640-26fd7efd8fc9",targetId:"55d033ce-b3a8-4687-a5ca-7eaf367747e9",type:"RealizationRelationship"},{id:"82ee118f-e33e-4176-b413-b097fe2497c7",sourceId:"50c9bd25-04cc-48a9-b85f-f3d0175a9999",targetId:"12861608-1acf-4cd3-9ae9-54de78f94884",type:"AssignmentRelationship"},{id:"ecdeb99b-1783-4705-b25e-2c93fa20204b",sourceId:"fba29e1a-ff70-4e55-b5e7-8b261a2cb5fb",targetId:"c1c20a05-e45f-47db-ade9-878adbc66c85",type:"RealizationRelationship"},{id:"ddc7fbcc-ef45-41b3-a27f-c10505215216",sourceId:"05b0171b-dfdb-4834-a047-84c4f9791207",targetId:"314e0656-3b24-4d2d-b6e6-f1804f5ae468",type:"CompositionRelationship"},{id:"7b18dba0-2b38-4335-bbf0-160f7e81f259",sourceId:"341528be-2e3e-4c0b-b982-3b7995078fe1",targetId:"6f156f6b-9b8d-41e4-b17f-143e4ab95727",type:"ServingRelationship"},{id:"cb23bb40-acd2-458a-b1e6-063c86c8e662",sourceId:"a0f12518-c4d8-4a50-ad6f-091a0e54c4cf",targetId:"cb400ec2-eed1-469a-bc15-a804ce079426",type:"ServingRelationship"},{id:"f56df8f7-0bd7-4025-90c1-39f2f14d8efe",sourceId:"05b0171b-dfdb-4834-a047-84c4f9791207",targetId:"82db13b9-4b5a-4fc0-9251-6dce575153bd",type:"CompositionRelationship"},{id:"0e313acc-93d9-46a4-83ba-ce09ca21ffb2",sourceId:"1624f0a3-dd38-4bab-9da8-f65c115834e9",targetId:"12861608-1acf-4cd3-9ae9-54de78f94884",type:"AssignmentRelationship"},{id:"7179d919-5606-4f52-948a-aafa0ca333bb",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"3add27a2-a186-46cd-83f0-ba3ac515f44e",type:"CompositionRelationship"},{id:"1659b54a-1e71-49f4-bac0-e8f09f96ca52",sourceId:"4509a7f7-afda-4b0c-981d-da8df7f20682",targetId:"0b61e53b-2770-4497-9335-b11c7b90bbaa",type:"ServingRelationship"},{id:"413a8c42-77b3-4159-897d-6c93f92f26ed",sourceId:"db9b81de-e4a6-4b08-83fd-eeba063f15ba",targetId:"2b9b4def-536c-4223-a322-f2773212b1b5",type:"AssignmentRelationship"},{id:"0d4fc3fb-f203-471d-83a3-3c37b8eb35af",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"d513680d-85df-4318-8f56-e5681d095784",type:"ServingRelationship"},{id:"b3eaf5cc-75b2-4113-9e85-2bcb0bfd6a7a",sourceId:"d7996c68-9e16-46b3-a864-45241a4861a3",targetId:"34e60d9a-e6b4-4c3d-a38b-6ed49cbbcf03",type:"ServingRelationship"},{id:"4c78659e-ef86-45f2-bb7b-924896362a38",sourceId:"05b0171b-dfdb-4834-a047-84c4f9791207",targetId:"41220e27-d97f-4258-b344-b80e6b2a757f",type:"AssignmentRelationship"},{id:"cb3f0d7e-0e03-4532-83f3-99c8298f6275",sourceId:"870a08c7-cc55-45fb-91bd-cec5025936f6",targetId:"740907f8-ba6b-4683-ab14-9094af2bc9a3",type:"AssignmentRelationship"},{id:"e3a5ec70-89e2-47ac-a650-4202d83aafd0",sourceId:"34e60d9a-e6b4-4c3d-a38b-6ed49cbbcf03",targetId:"175fc82e-542f-4438-a487-9eeea6de8356",type:"RealizationRelationship"},{id:"7dffaaa5-2203-4cf4-9937-d72de9d0d90e",sourceId:"f67941fc-196e-48b6-a733-621397a6fdd5",targetId:"740907f8-ba6b-4683-ab14-9094af2bc9a3",type:"AssignmentRelationship"},{id:"26509bef-2c83-4601-b190-703b8155cd62",sourceId:"0b61e53b-2770-4497-9335-b11c7b90bbaa",targetId:"aacb89a5-aab5-4ddf-8ff6-8c0e59057432",type:"RealizationRelationship"},{id:"10f8d6c9-7678-4be6-9e46-ed0607a07875",sourceId:"2f39b775-cfa3-4280-ae7e-ea7ea9294fb8",targetId:"0fa67d26-8086-4663-956b-aa9aa6f6d5d6",type:"ServingRelationship"},{id:"61682a87-16a6-4855-b982-f750f2553b49",sourceId:"59847d7d-05c3-4f52-ae52-828d998c4933",targetId:"a9235301-e754-448c-9d0c-2797feea7b51",type:"TriggeringRelationship"},{id:"c1835036-2708-49ec-a18e-03a7ca98e3b9",sourceId:"d7996c68-9e16-46b3-a864-45241a4861a3",targetId:"85cc641c-6522-4e9e-b773-da599818ad59",type:"ServingRelationship"},{id:"02f45cbd-ad4a-4193-b0ea-7d14fd3eeee1",sourceId:"6f156f6b-9b8d-41e4-b17f-143e4ab95727",targetId:"c0e7bafe-5d69-4769-ba80-970c23f4dec9",type:"RealizationRelationship"},{id:"75f7da00-3a53-40dd-9b3b-422bcb3c83d8",sourceId:"7c84d522-a56a-4235-8640-26fd7efd8fc9",targetId:"7b471359-9ba0-4f0b-8d81-45e2a6884f99",type:"RealizationRelationship"},{id:"f5f84766-079f-435d-b0de-cb9d0728fde3",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"1b58721d-dcf6-4364-9b20-cd09763cbd85",type:"CompositionRelationship"},{id:"5b6ea035-1719-4cf7-8bb3-18f016fe0715",sourceId:"017dbe34-4881-4980-9741-84e8d5ffdaf1",targetId:"1e25d66a-6179-415a-9e84-2433cad6bfcb",type:"ServingRelationship"},{id:"281fc5cb-fe11-40ae-8ff5-f1bea4bb121a",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"5ba45fb2-41b3-48c9-af60-77b4231b1c41",type:"ServingRelationship"},{id:"81c6f607-e908-4e33-96ce-8b72fe1b06ef",sourceId:"3add27a2-a186-46cd-83f0-ba3ac515f44e",targetId:"207af9b7-83c3-499e-b934-953d69a9dd29",type:"ServingRelationship"},{id:"ab88aaaf-eb87-4dd7-a53c-bcfaad0b84cd",sourceId:"989acac2-2b43-43a9-b55b-83bafa4e57d2",targetId:"55d033ce-b3a8-4687-a5ca-7eaf367747e9",type:"AssignmentRelationship"},{id:"5e7095f0-437f-4dd2-b7b7-4aefdcc83f83",sourceId:"b1c435a5-43f8-436f-8871-588340b807a5",targetId:"3d28f424-2cf8-4264-836e-c2d6e828cca1",type:"CompositionRelationship"},{id:"d1702c10-e62b-4d9e-83f7-68f656721472",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"1843ed7e-13df-42e8-b3cd-c43466368691",type:"ServingRelationship"},{id:"3d54aa30-0dc9-4202-8006-dbe376d86f4a",sourceId:"b1c435a5-43f8-436f-8871-588340b807a5",targetId:"854d533e-3988-4c4f-8752-5cc521abe927",type:"AssignmentRelationship"},{id:"04317023-7f00-47d9-8645-6a85e4ab438f",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"ff58e4a0-173b-45ec-8a98-b9ad0f0e76ab",type:"CompositionRelationship"},{id:"7ac79ea9-665f-422f-b949-6ee008cf3605",sourceId:"55c79a31-a66f-4e90-aec0-7c2cfc3f5057",targetId:"2f39b775-cfa3-4280-ae7e-ea7ea9294fb8",type:"ServingRelationship"},{id:"2ea0321d-1e76-49dd-ab66-806c9b37f2e7",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"341528be-2e3e-4c0b-b982-3b7995078fe1",type:"CompositionRelationship"},{id:"9aab090d-b194-4485-896a-9f262330f70f",sourceId:"989acac2-2b43-43a9-b55b-83bafa4e57d2",targetId:"7b471359-9ba0-4f0b-8d81-45e2a6884f99",type:"AssignmentRelationship"},{id:"c6f9045f-cb2e-4385-8aaf-0b89942d627c",sourceId:"85cc641c-6522-4e9e-b773-da599818ad59",targetId:"740907f8-ba6b-4683-ab14-9094af2bc9a3",type:"RealizationRelationship"},{id:"3b9db533-5f88-44bc-b817-d3476aaeecdf",sourceId:"162a4685-1432-4da8-83cc-56bc1441ca34",targetId:"7c84d522-a56a-4235-8640-26fd7efd8fc9",type:"ServingRelationship"},{id:"ec22feb5-b154-4937-9b8d-32394d4708ce",sourceId:"e217bd5e-a6e4-48ab-ade7-f613b6d23959",targetId:"70fda8c3-ab04-4848-a50d-fe1d1982c73c",type:"AssignmentRelationship"},{id:"579c6832-9164-4cef-93cc-e4d867bc0f8a",sourceId:"341528be-2e3e-4c0b-b982-3b7995078fe1",targetId:"70fda8c3-ab04-4848-a50d-fe1d1982c73c",type:"AssignmentRelationship"},{id:"39755259-0d14-4655-8983-590df7be140f",sourceId:"12861608-1acf-4cd3-9ae9-54de78f94884",targetId:"50c9bd25-04cc-48a9-b85f-f3d0175a9999",type:"ServingRelationship"},{id:"3111b8f3-38ca-4701-b7bc-f38867f7fe37",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"740907f8-ba6b-4683-ab14-9094af2bc9a3",type:"AssignmentRelationship"},{id:"52f0686f-b582-46c9-85a9-d45eae3dd0ed",sourceId:"abf1c45b-eeda-4f7c-8e2c-2b0121b22d54",targetId:"85fbf293-79c8-4ddd-b85a-5952d7c1e242",type:"AssignmentRelationship"},{id:"df6dfc56-282f-49bb-8664-cd530bc6bc95",sourceId:"ec1dc982-dba9-4de5-bbc0-466d2432a371",targetId:"55d033ce-b3a8-4687-a5ca-7eaf367747e9",type:"AssignmentRelationship"},{id:"36736570-b3a6-4a29-8f68-3c66b9339c8f",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"e217bd5e-a6e4-48ab-ade7-f613b6d23959",type:"CompositionRelationship"},{id:"c7b3d959-3e27-4c99-98c9-d7b02ad655ab",sourceId:"efe4a670-80c9-4ef7-9d18-ebf78bb61849",targetId:"175fc82e-542f-4438-a487-9eeea6de8356",type:"AssignmentRelationship"},{id:"9cd1b6ef-8a40-408c-8c9b-e6810d17444d",sourceId:"1b58721d-dcf6-4364-9b20-cd09763cbd85",targetId:"85fbf293-79c8-4ddd-b85a-5952d7c1e242",type:"AssignmentRelationship"},{id:"05f7b481-cdb8-498f-860a-d25a7b21a408",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"175fc82e-542f-4438-a487-9eeea6de8356",type:"AssignmentRelationship"},{id:"3828afb4-56dd-4e42-bdc1-b23f3db7fb8b",sourceId:"a0f12518-c4d8-4a50-ad6f-091a0e54c4cf",targetId:"854d533e-3988-4c4f-8752-5cc521abe927",type:"AssignmentRelationship"},{id:"fa5a5702-82ad-4fdf-bf55-803d0893d61e",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"da08be48-1722-4220-a945-d773807848ca",type:"CompositionRelationship"},{id:"85d3d565-9a0a-4419-ade4-42d1fae184e1",sourceId:"dee1b99f-df00-403e-bfe4-4153f5ea0e9d",targetId:"854d533e-3988-4c4f-8752-5cc521abe927",type:"RealizationRelationship"},{id:"e0389ee4-95f6-459f-9fe3-54684e03c5a0",sourceId:"f67941fc-196e-48b6-a733-621397a6fdd5",targetId:"6f156f6b-9b8d-41e4-b17f-143e4ab95727",type:"ServingRelationship"},{id:"00227d6c-97b9-403e-a9e8-c9e43b65593b",sourceId:"b1c435a5-43f8-436f-8871-588340b807a5",targetId:"db9b81de-e4a6-4b08-83fd-eeba063f15ba",type:"CompositionRelationship"},{id:"c31c0c95-afb2-4159-a91c-e56e3e915cff",sourceId:"07f2cefe-3fd9-4914-b52a-567a5896f3d3",targetId:"70fda8c3-ab04-4848-a50d-fe1d1982c73c",type:"RealizationRelationship"},{id:"d16992cc-340e-473e-86b9-a2ebed556349",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"017dbe34-4881-4980-9741-84e8d5ffdaf1",type:"CompositionRelationship"},{id:"e6fae0af-d35f-4309-90f5-60f9830ed910",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"efe4a670-80c9-4ef7-9d18-ebf78bb61849",type:"CompositionRelationship"},{id:"b4b82bf3-bd02-4525-895d-57935faffaea",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"3c3d68c2-0710-4805-8813-d82a28d85bd0",type:"ServingRelationship"},{id:"10e33441-d956-4743-bd12-50b055d367d8",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"f25d3fa8-7fd8-414e-8257-3fe414a05da7",type:"CompositionRelationship"},{id:"8317b791-2019-4479-88e4-262aeb76db68",sourceId:"314e0656-3b24-4d2d-b6e6-f1804f5ae468",targetId:"41220e27-d97f-4258-b344-b80e6b2a757f",type:"AssignmentRelationship"},{id:"5fae1e95-8ede-47a3-9ca5-9d19f568fa87",sourceId:"d513680d-85df-4318-8f56-e5681d095784",targetId:"51f268ae-77eb-4f1a-8881-6c583836ac2c",type:"ServingRelationship"},{id:"092b7f58-aef6-4944-a1b1-69fe0828b09c",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"d7996c68-9e16-46b3-a864-45241a4861a3",type:"CompositionRelationship"},{id:"ca7d9d8c-537c-4a39-ad89-91e94bdf41c0",sourceId:"b0a020df-85f4-4915-a490-6416bc6e2def",targetId:"ff58e4a0-173b-45ec-8a98-b9ad0f0e76ab",type:"ServingRelationship"},{id:"32a28b35-298d-4fc0-8176-94c6485f2850",sourceId:"e3c2f615-9bcf-4427-8a80-9115a2fa5a43",targetId:"c0e7bafe-5d69-4769-ba80-970c23f4dec9",type:"AssignmentRelationship"},{id:"4af5bf18-340a-486e-91b7-f040d4fc0599",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"0b61e53b-2770-4497-9335-b11c7b90bbaa",type:"CompositionRelationship"},{id:"c35db209-f7ab-4e26-8ea1-ff81e14d0538",sourceId:"7ef91728-dd81-40b6-a83f-24bc445db0fd",targetId:"12861608-1acf-4cd3-9ae9-54de78f94884",type:"AssignmentRelationship"},{id:"53988855-f9e4-4695-82ec-6ccd3673eb29",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"55c79a31-a66f-4e90-aec0-7c2cfc3f5057",type:"ServingRelationship"},{id:"13c5c0c4-b746-4570-a675-7f72b420c767",sourceId:"989acac2-2b43-43a9-b55b-83bafa4e57d2",targetId:"162a4685-1432-4da8-83cc-56bc1441ca34",type:"CompositionRelationship"},{id:"9ce18e01-99ca-4d81-b6e1-e4712ea785fc",sourceId:"cb400ec2-eed1-469a-bc15-a804ce079426",targetId:"175fc82e-542f-4438-a487-9eeea6de8356",type:"AssignmentRelationship"},{id:"99ee609b-2e50-4c17-aa27-8e61d33b2d1e",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"55c79a31-a66f-4e90-aec0-7c2cfc3f5057",type:"CompositionRelationship"},{id:"ce83986c-020d-4fb4-8f3b-ab22e76dbafa",sourceId:"26b3a524-a0ad-4bd5-8570-d878544d39a4",targetId:"12861608-1acf-4cd3-9ae9-54de78f94884",type:"AssignmentRelationship"},{id:"5694ff31-757c-474d-acbc-b5c381d064e8",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"cb400ec2-eed1-469a-bc15-a804ce079426",type:"CompositionRelationship"},{id:"e6af78dd-2a55-44dd-9c7d-3887996e1c2d",sourceId:"b1c435a5-43f8-436f-8871-588340b807a5",targetId:"2b9b4def-536c-4223-a322-f2773212b1b5",type:"AssignmentRelationship"},{id:"0d5009f3-4e61-4a90-9355-8e4473955f75",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",type:"CompositionRelationship"},{id:"702be1a3-254f-459f-a4ef-cbe471683155",sourceId:"4a102ef2-3808-4535-9b55-1e6217f933b5",targetId:"12861608-1acf-4cd3-9ae9-54de78f94884",type:"AssignmentRelationship"},{id:"57c6cb31-0ec9-431c-b889-ab6c859855fa",sourceId:"05b0171b-dfdb-4834-a047-84c4f9791207",targetId:"59847d7d-05c3-4f52-ae52-828d998c4933",type:"CompositionRelationship"},{id:"dfb2ee11-da3c-41fa-ba8e-62b129ad5754",sourceId:"1f392da9-5d66-4221-a980-ce182338fc24",targetId:"7b471359-9ba0-4f0b-8d81-45e2a6884f99",type:"AssignmentRelationship"},{id:"cf3549bd-38af-4e65-b2fa-44c64760a754",sourceId:"f25d3fa8-7fd8-414e-8257-3fe414a05da7",targetId:"fba29e1a-ff70-4e55-b5e7-8b261a2cb5fb",type:"ServingRelationship"},{id:"a3113566-f31e-4c74-b67e-051520398f78",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"870a08c7-cc55-45fb-91bd-cec5025936f6",type:"CompositionRelationship"},{id:"57875d9e-8526-44dc-8b3d-3fd253f5f34e",sourceId:"c77bc45c-9354-4d5b-ad9e-7d95d24a55fc",targetId:"85cc641c-6522-4e9e-b773-da599818ad59",type:"CompositionRelationship"},{id:"60ea0a8f-2dfd-49b5-ba94-70e7d817bb8b",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"074f98eb-c805-4b8f-90a2-af990b7cb090",type:"CompositionRelationship"},{id:"afa2b35b-d594-43e3-9c14-c7b8e7e79a57",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"07f2cefe-3fd9-4914-b52a-567a5896f3d3",type:"CompositionRelationship"},{id:"1baa0750-de87-47da-9bd7-85898e95c043",sourceId:"dee1b99f-df00-403e-bfe4-4153f5ea0e9d",targetId:"2b9b4def-536c-4223-a322-f2773212b1b5",type:"RealizationRelationship"},{id:"f95de825-8edc-4088-b142-40d18d59a46d",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"aacb89a5-aab5-4ddf-8ff6-8c0e59057432",type:"AssignmentRelationship"},{id:"ac04663d-52eb-4fc3-9a80-d50ee75e3694",sourceId:"55c79a31-a66f-4e90-aec0-7c2cfc3f5057",targetId:"fbdb5c93-29c4-4c5d-ad73-f50286b0c2bc",type:"RealizationRelationship"},{id:"70ff03f2-42b0-4c53-95ad-1285e698f295",sourceId:"77f16962-60ce-4dc1-8260-58fc75602d71",targetId:"c0e7bafe-5d69-4769-ba80-970c23f4dec9",type:"AssignmentRelationship"},{id:"e6290f7d-f2f8-467e-b4b2-d253856b428c",sourceId:"a9235301-e754-448c-9d0c-2797feea7b51",targetId:"85fbf293-79c8-4ddd-b85a-5952d7c1e242",type:"AssignmentRelationship"},{id:"c2113b7d-8b7c-4080-9b4f-768168958f10",sourceId:"3d28f424-2cf8-4264-836e-c2d6e828cca1",targetId:"dee1b99f-df00-403e-bfe4-4153f5ea0e9d",type:"ServingRelationship"},{id:"05fe5a7e-9e85-43c1-807f-f86c5f0d4318",sourceId:"fbdb5c93-29c4-4c5d-ad73-f50286b0c2bc",targetId:"f14d3720-a4af-40b0-bf85-6ab319d24233",type:"ServingRelationship"},{id:"e5df2d80-fde9-476a-b4c5-e23ea2ce6336",sourceId:"b1c435a5-43f8-436f-8871-588340b807a5",targetId:"dee1b99f-df00-403e-bfe4-4153f5ea0e9d",type:"CompositionRelationship"},{id:"869af75a-87bf-4c12-bb9a-9d31fd9086e8",sourceId:"77f16962-60ce-4dc1-8260-58fc75602d71",targetId:"e3c2f615-9bcf-4427-8a80-9115a2fa5a43",type:"CompositionRelationship"},{id:"b786c559-0f48-40fc-9aca-77116599aea9",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"f884bae6-09b6-47c9-bb01-f8e9e9381e7d",type:"AssignmentRelationship"},{id:"00d3e811-5461-43fb-9814-8b3b5358e877",sourceId:"62c21f0a-a284-415f-97a8-0a08ee7994f0",targetId:"5fc749bc-cba3-43da-b8bd-e29c69c0ab34",type:"CompositionRelationship"},{id:"74ce8633-8b67-46e2-85ec-42ce2ae7e62f",sourceId:"05b0171b-dfdb-4834-a047-84c4f9791207",targetId:"ff356fe4-e139-4d29-a326-8761552f1dcd",type:"AssignmentRelationship"},{id:"b70f70b1-ed1d-419b-857a-9f4c41bea3c2",sourceId:"4a53fdeb-08a6-4de3-a594-9b9bc4ebb8d6",targetId:"c1c20a05-e45f-47db-ade9-878adbc66c85",type:"AssignmentRelationship"},{id:"c77f282f-8d68-4394-bfe4-8d7f0d5a58d0",sourceId:"ec1dc982-dba9-4de5-bbc0-466d2432a371",targetId:"ff58e4a0-173b-45ec-8a98-b9ad0f0e76ab",type:"ServingRelationship"},{id:"5f3b4441-84ee-4248-b301-28c60d80d5b5",sourceId:"4d84630a-ad56-49aa-abf9-40c70b390e06",targetId:"82db13b9-4b5a-4fc0-9251-6dce575153bd",type:"ServingRelationship"}],I=[{id:"08b42641-3023-41d4-90b8-f3b454b5b8db",name:"Roller",viewpoint:""},{id:"b90777b4-4c7f-4839-b9b8-dac13491a784",name:"02_Container diagram",viewpoint:""},{id:"b68372f9-3bd0-486e-ae2c-6bf5ac05171d",name:"FDK-APIK_Container diagram",viewpoint:""}],g={identifier:e,archimateId:a,name:d,description:c,formats:i,source:t,sourceFile:f,sourceFormat:b,timestamp:n,tags:p,duplicates:o,language:s,elements:r,relationships:l,views:I};export{a as archimateId,g as default,c as description,o as duplicates,r as elements,i as formats,e as identifier,s as language,d as name,l as relationships,t as source,f as sourceFile,b as sourceFormat,p as tags,n as timestamp,I as views};