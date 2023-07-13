const e="https://me.big.tuwien.ac.at/EAModelSet/3cb9dcfa-8771-47fb-ba64-6d552f47eccc",a="3cb9dcfa-8771-47fb-ba64-6d552f47eccc",d="2 Observations and Measurements",c="",b=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",s="raw-data/github/archimate/2_observations_and_measurements.archimate",t="ARCHIMATE",f="29-06-2023 09:31:41",n=[],o=[],r="en",p=[{id:"697a878a-24ee-442d-b802-851a670e13b2",name:"timepoint",type:"BusinessObject",layer:"business"},{id:"c3874ebe-f636-4258-8cbc-0c8adef148b8",name:"Business Object",type:"BusinessObject",layer:"business"},{id:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",name:"observation concept",type:"BusinessObject",layer:"business"},{id:"0637dbb9-3095-4164-8b32-f40bc348692e",name:"quantity",type:"BusinessObject",layer:"business"},{id:"f6629b9f-ac8d-413a-ab04-6a398cc199fe",name:"protocol",type:"BusinessObject",layer:"business"},{id:"bd3ced3d-2b1f-4b84-bd78-33ebd3ee65ac",name:"phenomenon",type:"BusinessObject",layer:"business"},{id:"66ddb440-c8e6-4476-87ce-5ad31b705cb5",name:"phenomenon type",type:"BusinessObject",layer:"business"},{id:"79b929cb-db8b-4e03-9acb-7069868ba975",name:"conversion ratio",type:"BusinessObject",layer:"business"},{id:"89303441-ee40-43fa-82a3-60185d502d1f",name:"time record",type:"BusinessObject",layer:"business"},{id:"a09a0f7e-4313-4fa8-a48e-6f0f66bee233",name:"person",type:"BusinessObject",layer:"business"},{id:"c495986f-db5f-448b-b56b-f9521b82ebb4",name:"atomic unit",type:"BusinessObject",layer:"business"},{id:"526a3e31-ee37-45be-9bed-77cc4320a3af",name:"amount",type:"BusinessObject",layer:"business"},{id:"df60ee61-96ef-4d10-9085-3deecbc0b835",name:"absence",type:"BusinessObject",layer:"business"},{id:"7c009abb-25a9-43c1-ae4f-0879ed6a2bc8",name:"measurement",type:"BusinessObject",layer:"business"},{id:"547d2824-9ace-4978-97ee-a43e8fe9476d",name:"compound unit",type:"BusinessObject",layer:"business"},{id:"d55821aa-b287-4874-b557-04259e6db5d8",name:"presence",type:"BusinessObject",layer:"business"},{id:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",name:"category observation",type:"BusinessObject",layer:"business"},{id:"451026fc-144f-4f63-ab6a-23d3fda01ce9",name:"observation",type:"BusinessObject",layer:"business"},{id:"a36cb7f2-074a-47a1-bdbf-d6b2df3637ff",name:"unit",type:"BusinessObject",layer:"business"},{id:"3d230584-e152-41d5-a692-a4bda91515b6",name:"+",type:"BusinessFunction",layer:"business"},{id:"bc93d5df-2c79-4dbf-ba7f-ddebd000fa5a",name:"-",type:"BusinessFunction",layer:"business"},{id:"c257a55f-175b-40b2-ab0e-d88e866f30a2",name:"*",type:"BusinessFunction",layer:"business"},{id:"532d9da8-9142-4af8-8d41-6587e527131e",name:"/",type:"BusinessFunction",layer:"business"},{id:"d06fe64b-9466-4107-a4a7-4a2e6b3a88a4",name:"=",type:"BusinessFunction",layer:"business"},{id:"ff4780e8-d461-46c4-85d7-32c0298d7c1c",name:">",type:"BusinessFunction",layer:"business"},{id:"4a6b9f2d-8e3f-4b6f-8cf5-e5b25bd67306",name:"<",type:"BusinessFunction",layer:"business"},{id:"f3bff4ba-d323-409d-ac1c-9fee94dad65c",name:"time period",type:"BusinessObject",layer:"business"},{id:"2d6e3eb0-3f8b-46f4-be29-26a18a8ffc09",name:"rejected observation",type:"BusinessObject",layer:"business"},{id:"0f37f708-a0d9-4ad7-bf96-0afa09a386fe",name:"hypotesis",type:"BusinessObject",layer:"business"},{id:"4f69cc93-812f-4002-9563-d8f3d1553bb9",name:"active observation",type:"BusinessObject",layer:"business"},{id:"6f04e64a-123e-4171-ba85-6146cafd1e7a",name:"projection",type:"BusinessObject",layer:"business"},{id:"f2cc2cd1-f316-4215-8b6b-304747a14e97",name:"associated observation",type:"BusinessObject",layer:"business"},{id:"a2f686cb-4ce1-40c2-8c77-52c42e9ecf13",name:"associative function",type:"BusinessObject",layer:"business"},{id:"54091498-ca43-449b-a2a6-6ec10358ba29",name:"process of observation",type:"BusinessProcess",layer:"business"},{id:"57d88f06-c119-4d9d-982b-5ab80c4ee0aa",name:"make observation A,B",type:"BusinessProcess",layer:"business"},{id:"5b9a1484-292b-4c61-8f13-da9ef27e2a63",name:"find associative function, where arguments=A,B",type:"BusinessProcess",layer:"business"},{id:"a38edfa7-e651-408b-8ac6-a63c9354e5de",name:"find conclusion observation concept",type:"BusinessProcess",layer:"business"},{id:"a8b3a4f0-8914-476c-8081-0d298979a9c5",name:"create hypotesis",type:"BusinessProcess",layer:"business"},{id:"9e957711-33cc-4b9d-ae00-93d8a9665ea9",name:"make new observations",type:"BusinessProcess",layer:"business"},{id:"46dcd3e0-e654-4ddf-8577-bf3d495c5335",name:"Business Process",type:"BusinessProcess",layer:"business"},{id:"d4345acb-3618-4ce7-bbbd-9bddcf9cab0f",name:"propose intervention",type:"BusinessProcess",layer:"business"},{id:"43b084e1-94ee-43b3-9ff4-b4c52db831e2",name:"reject observation",type:"BusinessProcess",layer:"business"},{id:"d5e1cdc3",name:"no type",type:"BusinessObject",layer:"business"},{id:"d7c01734",name:"no type",type:"BusinessObject",layer:"business"},{id:"f2992967",name:"one invers OR two direct units",type:"Constraint",layer:"motivation"},{id:"618bdac2-48c2-4794-a2a6-1ba076571145",name:"Junction",type:"Junction",layer:"other"},{id:"aab84d74",name:"Junction",type:"Junction",layer:"other"},{id:"5cbda897",name:"Junction",type:"Junction",layer:"other"},{id:"52ee599f",name:"Junction",type:"Junction",layer:"other"},{id:"5484e5cd",name:"Junction",type:"Junction",layer:"other"}],u=[{id:"4f4a7c81-9de4-4243-93e2-de21c1b9b59c",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"526a3e31-ee37-45be-9bed-77cc4320a3af",type:"AggregationRelationship"},{id:"77aaff03-7c88-4841-8a26-cae47b44cabe",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"3d230584-e152-41d5-a692-a4bda91515b6",type:"AssociationRelationship"},{id:"a8401651-4b3c-445d-95e6-8bee2e3e9832",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"bc93d5df-2c79-4dbf-ba7f-ddebd000fa5a",type:"AssociationRelationship"},{id:"0bad4041-b6c7-40a4-8faa-e4eb08fbcfa8",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"c257a55f-175b-40b2-ab0e-d88e866f30a2",type:"AssociationRelationship"},{id:"ac22141f-8f75-4c86-a8de-2df823fa1457",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"532d9da8-9142-4af8-8d41-6587e527131e",type:"AssociationRelationship"},{id:"8b818af7-5e93-448f-a218-1a3ea51d45bb",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"d06fe64b-9466-4107-a4a7-4a2e6b3a88a4",type:"AssociationRelationship"},{id:"eef8bf5e-cd91-4b85-a5b7-6b9219742fd8",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"ff4780e8-d461-46c4-85d7-32c0298d7c1c",type:"AssociationRelationship"},{id:"3d3376f0-6012-48d6-8651-9f5611e41d23",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"4a6b9f2d-8e3f-4b6f-8cf5-e5b25bd67306",type:"AssociationRelationship"},{id:"07a0c86e-afba-4d3b-8798-55c90678e822",sourceId:"c495986f-db5f-448b-b56b-f9521b82ebb4",targetId:"a36cb7f2-074a-47a1-bdbf-d6b2df3637ff",type:"SpecializationRelationship"},{id:"b5a2a0a8-27cd-4f68-b991-32e9bde13fb5",sourceId:"547d2824-9ace-4978-97ee-a43e8fe9476d",targetId:"a36cb7f2-074a-47a1-bdbf-d6b2df3637ff",type:"SpecializationRelationship"},{id:"041eef6d-d73b-48f1-9c21-57819ac57017",sourceId:"c495986f-db5f-448b-b56b-f9521b82ebb4",targetId:"547d2824-9ace-4978-97ee-a43e8fe9476d",type:"AssociationRelationship"},{id:"47ea2ab9-be0a-479a-bc0d-f2c3db6b61de",sourceId:"c495986f-db5f-448b-b56b-f9521b82ebb4",targetId:"547d2824-9ace-4978-97ee-a43e8fe9476d",type:"AssociationRelationship"},{id:"b0562a3f-10e7-41d5-88e4-a5d70b36111e",sourceId:"7c009abb-25a9-43c1-ae4f-0879ed6a2bc8",targetId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",type:"SpecializationRelationship"},{id:"82380d7e-7b0b-468c-9ad6-0c0492fe454d",sourceId:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",targetId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",type:"SpecializationRelationship"},{id:"4ff23180-8a68-481e-8539-55ce0149988f",sourceId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",targetId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",type:"AssociationRelationship"},{id:"dec72365-355c-412f-8bf6-a6362b46664a",sourceId:"bd3ced3d-2b1f-4b84-bd78-33ebd3ee65ac",targetId:"c3874ebe-f636-4258-8cbc-0c8adef148b8",type:"SpecializationRelationship"},{id:"cb50c689-1759-4823-a504-3934fe6382ba",sourceId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",targetId:"c3874ebe-f636-4258-8cbc-0c8adef148b8",type:"SpecializationRelationship"},{id:"1105c729-a960-4465-bb8d-8d9b62a33e58",sourceId:"bd3ced3d-2b1f-4b84-bd78-33ebd3ee65ac",targetId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",type:"SpecializationRelationship"},{id:"0704728c-8ca7-46e4-a0f9-9cce0188e162",sourceId:"2d6e3eb0-3f8b-46f4-be29-26a18a8ffc09",targetId:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",type:"SpecializationRelationship"},{id:"776be1f3-93cb-47f9-b28a-7b48157b356e",sourceId:"f2cc2cd1-f316-4215-8b6b-304747a14e97",targetId:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",type:"SpecializationRelationship"},{id:"b5e12a53-68ac-4ec3-91e4-30934de57953",sourceId:"f2cc2cd1-f316-4215-8b6b-304747a14e97",targetId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",type:"AssociationRelationship"},{id:"98f01d24-7fdb-4184-a5c2-9478f56cb5b8",sourceId:"a2f686cb-4ce1-40c2-8c77-52c42e9ecf13",targetId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",type:"AssociationRelationship"},{id:"f62a8391-147f-46ea-bb25-52a3391c4ab9",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"57d88f06-c119-4d9d-982b-5ab80c4ee0aa",type:"CompositionRelationship"},{id:"d06be35c-0803-4723-ba18-011500402e85",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"5b9a1484-292b-4c61-8f13-da9ef27e2a63",type:"CompositionRelationship"},{id:"d5936474-5f3f-492c-84b1-fc85388c8520",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"a38edfa7-e651-408b-8ac6-a63c9354e5de",type:"CompositionRelationship"},{id:"418f9575-fa73-4bba-ad18-f3f52fb5e928",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"a8b3a4f0-8914-476c-8081-0d298979a9c5",type:"CompositionRelationship"},{id:"879b9217-4fe3-48f3-a19f-a1c77011900c",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"9e957711-33cc-4b9d-ae00-93d8a9665ea9",type:"CompositionRelationship"},{id:"d7744194-f0f1-452f-801e-fbe9cca8501d",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"46dcd3e0-e654-4ddf-8577-bf3d495c5335",type:"CompositionRelationship"},{id:"00a4f208-007f-4251-8f51-84a4bca11c71",sourceId:"57d88f06-c119-4d9d-982b-5ab80c4ee0aa",targetId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",type:"AccessRelationship"},{id:"501bee2a-cf1d-4598-acb2-57f490ae9294",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"d4345acb-3618-4ce7-bbbd-9bddcf9cab0f",type:"CompositionRelationship"},{id:"b3e73148-9e3a-4b2e-a80d-701f1cb5ea23",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"43b084e1-94ee-43b3-9ff4-b4c52db831e2",type:"CompositionRelationship"},{id:"8f66e993-eb2e-424d-97ab-fa0217ca7bbb",sourceId:"57d88f06-c119-4d9d-982b-5ab80c4ee0aa",targetId:"5b9a1484-292b-4c61-8f13-da9ef27e2a63",type:"FlowRelationship"},{id:"f13b724f-819f-4f02-852d-2c18983ed7ff",sourceId:"5b9a1484-292b-4c61-8f13-da9ef27e2a63",targetId:"a38edfa7-e651-408b-8ac6-a63c9354e5de",type:"FlowRelationship"},{id:"76238952-917d-4aad-ad14-c39fda4b56d2",sourceId:"54091498-ca43-449b-a2a6-6ec10358ba29",targetId:"618bdac2-48c2-4794-a2a6-1ba076571145",type:"AssignmentRelationship"},{id:"075bed89-a752-4438-9554-4cd180418896",sourceId:"a38edfa7-e651-408b-8ac6-a63c9354e5de",targetId:"618bdac2-48c2-4794-a2a6-1ba076571145",type:"FlowRelationship"},{id:"f464b621-1e80-4a41-8e54-d25ec3647cd0",sourceId:"618bdac2-48c2-4794-a2a6-1ba076571145",targetId:"a8b3a4f0-8914-476c-8081-0d298979a9c5",type:"TriggeringRelationship"},{id:"ddc44487-2148-4a83-ae6e-55955e5df3ff",sourceId:"618bdac2-48c2-4794-a2a6-1ba076571145",targetId:"d4345acb-3618-4ce7-bbbd-9bddcf9cab0f",type:"TriggeringRelationship"},{id:"330ea711-c94d-4979-858c-e8f884430a2e",sourceId:"618bdac2-48c2-4794-a2a6-1ba076571145",targetId:"43b084e1-94ee-43b3-9ff4-b4c52db831e2",type:"TriggeringRelationship"},{id:"d372ff41-d856-4043-99b7-08dfbffd35fc",sourceId:"a8b3a4f0-8914-476c-8081-0d298979a9c5",targetId:"9e957711-33cc-4b9d-ae00-93d8a9665ea9",type:"FlowRelationship"},{id:"89d83a58-c14a-4a4a-9a92-82490fe95862",sourceId:"5b9a1484-292b-4c61-8f13-da9ef27e2a63",targetId:"a2f686cb-4ce1-40c2-8c77-52c42e9ecf13",type:"AccessRelationship"},{id:"9d1341da-870b-49c4-92dc-cc68b34c5f9b",sourceId:"a38edfa7-e651-408b-8ac6-a63c9354e5de",targetId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",type:"AccessRelationship"},{id:"13cba784-494f-4892-a7ca-d0114d785111",sourceId:"9e957711-33cc-4b9d-ae00-93d8a9665ea9",targetId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",type:"AccessRelationship"},{id:"a7b06c44-cfb0-41a2-8163-1005c4b0636f",sourceId:"a8b3a4f0-8914-476c-8081-0d298979a9c5",targetId:"0f37f708-a0d9-4ad7-bf96-0afa09a386fe",type:"AccessRelationship"},{id:"a40c22a4",sourceId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",targetId:"a09a0f7e-4313-4fa8-a48e-6f0f66bee233",type:"AssociationRelationship"},{id:"b1967c6d",sourceId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",targetId:"89303441-ee40-43fa-82a3-60185d502d1f",type:"AssociationRelationship"},{id:"7a470b3b",sourceId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",targetId:"89303441-ee40-43fa-82a3-60185d502d1f",type:"AssociationRelationship"},{id:"01663752",sourceId:"7c009abb-25a9-43c1-ae4f-0879ed6a2bc8",targetId:"66ddb440-c8e6-4476-87ce-5ad31b705cb5",type:"AssociationRelationship"},{id:"a71d2a86",sourceId:"66ddb440-c8e6-4476-87ce-5ad31b705cb5",targetId:"bd3ced3d-2b1f-4b84-bd78-33ebd3ee65ac",type:"AssociationRelationship"},{id:"d60e3422",sourceId:"a2f686cb-4ce1-40c2-8c77-52c42e9ecf13",targetId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",type:"AssociationRelationship"},{id:"00d41e39",sourceId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",targetId:"f6629b9f-ac8d-413a-ab04-6a398cc199fe",type:"AssociationRelationship"},{id:"bd74ef40",sourceId:"f2cc2cd1-f316-4215-8b6b-304747a14e97",targetId:"a2f686cb-4ce1-40c2-8c77-52c42e9ecf13",type:"AssociationRelationship"},{id:"9e7847af",sourceId:"7c009abb-25a9-43c1-ae4f-0879ed6a2bc8",targetId:"0637dbb9-3095-4164-8b32-f40bc348692e",type:"AssociationRelationship"},{id:"c463a4e7",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"a36cb7f2-074a-47a1-bdbf-d6b2df3637ff",type:"AssociationRelationship"},{id:"caa03f8a",sourceId:"79b929cb-db8b-4e03-9acb-7069868ba975",targetId:"a36cb7f2-074a-47a1-bdbf-d6b2df3637ff",type:"AssociationRelationship"},{id:"0546a1f9",sourceId:"79b929cb-db8b-4e03-9acb-7069868ba975",targetId:"a36cb7f2-074a-47a1-bdbf-d6b2df3637ff",type:"AssociationRelationship"},{id:"a9cbcfed",sourceId:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",targetId:"e27bb7f9-338c-4857-b9c2-6bbbf6d7677c",type:"AssociationRelationship"},{id:"bda8ecee",sourceId:"2d6e3eb0-3f8b-46f4-be29-26a18a8ffc09",targetId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",type:"AssociationRelationship"},{id:"b14e13ac",sourceId:"547d2824-9ace-4978-97ee-a43e8fe9476d",targetId:"f2992967",type:"AssociationRelationship"},{id:"02ddf494",sourceId:"aab84d74",targetId:"df60ee61-96ef-4d10-9085-3deecbc0b835",type:"RealizationRelationship"},{id:"05b0b95f",sourceId:"aab84d74",targetId:"d55821aa-b287-4874-b557-04259e6db5d8",type:"RealizationRelationship"},{id:"5068ea13",sourceId:"5cbda897",targetId:"6f04e64a-123e-4171-ba85-6146cafd1e7a",type:"RealizationRelationship"},{id:"5ffb3302",sourceId:"5cbda897",targetId:"4f69cc93-812f-4002-9563-d8f3d1553bb9",type:"RealizationRelationship"},{id:"a8f087c6",sourceId:"5cbda897",targetId:"0f37f708-a0d9-4ad7-bf96-0afa09a386fe",type:"RealizationRelationship"},{id:"48d4aaab",sourceId:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",targetId:"aab84d74",type:"RealizationRelationship"},{id:"85c258d8",sourceId:"d481a0ab-fe18-42c4-8a0d-71663bc7a60c",targetId:"5cbda897",type:"RealizationRelationship"},{id:"3eec3683",sourceId:"89303441-ee40-43fa-82a3-60185d502d1f",targetId:"697a878a-24ee-442d-b802-851a670e13b2",type:"SpecializationRelationship"},{id:"8eb03696",sourceId:"89303441-ee40-43fa-82a3-60185d502d1f",targetId:"f3bff4ba-d323-409d-ac1c-9fee94dad65c",type:"SpecializationRelationship"},{id:"c6f6bf73",sourceId:"f3bff4ba-d323-409d-ac1c-9fee94dad65c",targetId:"697a878a-24ee-442d-b802-851a670e13b2",type:"AssociationRelationship"},{id:"8ba12c9d",sourceId:"f3bff4ba-d323-409d-ac1c-9fee94dad65c",targetId:"697a878a-24ee-442d-b802-851a670e13b2",type:"AssociationRelationship"},{id:"2fed1172",sourceId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",targetId:"52ee599f",type:"RealizationRelationship"},{id:"0d562bdb",sourceId:"52ee599f",targetId:"2d6e3eb0-3f8b-46f4-be29-26a18a8ffc09",type:"RealizationRelationship"},{id:"8c11bc2e",sourceId:"52ee599f",targetId:"d5e1cdc3",type:"RealizationRelationship"},{id:"70a3e806",sourceId:"451026fc-144f-4f63-ab6a-23d3fda01ce9",targetId:"5484e5cd",type:"RealizationRelationship"},{id:"cd7972e0",sourceId:"5484e5cd",targetId:"d7c01734",type:"RealizationRelationship"},{id:"8b7b5862",sourceId:"5484e5cd",targetId:"f2cc2cd1-f316-4215-8b6b-304747a14e97",type:"RealizationRelationship"},{id:"3b75e278",sourceId:"0637dbb9-3095-4164-8b32-f40bc348692e",targetId:"526a3e31-ee37-45be-9bed-77cc4320a3af",type:"AssociationRelationship"}],y=[{id:"81560f84-b7ff-4444-b9ea-93c36456e164",name:"Observations and Measurements",viewpoint:""},{id:"bf005bee-ed1d-4ec1-b00f-171fc9b9c8ba",name:"1 Quantity",viewpoint:""},{id:"c15528b8-4b7f-4919-ad1d-d9d2b8aeccb4",name:"2 Conversion Ratio",viewpoint:""},{id:"95eff264-72cc-404f-9733-d158293e724d",name:"3 Compound Units",viewpoint:""},{id:"c65c4bb3-7d56-437c-968c-305cff13300c",name:"4 Measurement",viewpoint:""},{id:"3dddcc72-296d-4950-b5a1-de0c89285097",name:"5 Observation",viewpoint:""},{id:"289ff492-7c8a-4efa-bc8c-e12476323c7d",name:"6 Subtyping Observation Concepts",viewpoint:""},{id:"40b3606e-deb1-410f-9eeb-2ff3f1e5bb13",name:"7 Protocol",viewpoint:""},{id:"4d5d9d48-9225-4441-b1c2-c5c382376c6a",name:"8 Dual Time Record",viewpoint:""},{id:"eb4118aa-530b-4e6a-a7c5-2ae88a8da8d3",name:"9 Rejected Observation",viewpoint:""},{id:"b1bd5fd3-7c0f-4a5f-b613-8321e84e03e7",name:"10 Active Observation, Hypothesis, and Projection",viewpoint:""},{id:"2d29603a-cd1b-4ae1-9c97-c0c30b53a43f",name:"11 Associated Observation ",viewpoint:""},{id:"e5e1abed-74d2-4925-b0fb-9bca5088c122",name:"12 Process of Observation",viewpoint:""}],l={identifier:e,archimateId:a,name:d,description:c,formats:b,source:i,sourceFile:s,sourceFormat:t,timestamp:f,tags:n,duplicates:o,language:r,elements:p,relationships:u,views:y};export{a as archimateId,l as default,c as description,o as duplicates,p as elements,b as formats,e as identifier,r as language,d as name,u as relationships,i as source,s as sourceFile,t as sourceFormat,n as tags,f as timestamp,y as views};