const e="https://me.big.tuwien.ac.at/EAModelSet/6381b05a-ab98-4983-947c-b38dbe0460b8",a="6381b05a-ab98-4983-947c-b38dbe0460b8",d="Pattern179: YouHaveMail",c="",b=["XML","CSV","JSON","ARCHIMATE"],i="GitHub",t="raw-data/github/archimate/pattern179.archimate",f="ARCHIMATE",o="29-06-2023 09:31:39",s=[],n=[],r="en",p=[{id:"a48ce6aa-a710-4bda-9d2f-d9d3892efc8a",name:"Internal User",type:"BusinessRole",layer:"business"},{id:"27e65386-56e6-42e7-a43c-c34f339be07b",name:"External User",type:"BusinessRole",layer:"business"},{id:"260230d9-5f5d-4cfc-85af-8b448d301c05",name:"Administrator",type:"BusinessRole",layer:"business"},{id:"59fd99d8-80b0-48f7-a0d9-ac5ac1c18cff",name:"Send Email-External",type:"BusinessProcess",layer:"business"},{id:"20020865-85ab-4c47-a81f-52b58bccfeea",name:"Administrate Service",type:"BusinessProcess",layer:"business"},{id:"5c14a333-0a08-478b-923b-f184c1170b15",name:"Send Email-Internal",type:"BusinessProcess",layer:"business"},{id:"d10de43a-3156-40d5-a705-502eae99688e",name:"Manage Email",type:"BusinessProcess",layer:"business"},{id:"49ab7e59-c309-45b1-b177-5a127d7f22f5",name:"Read Email",type:"BusinessProcess",layer:"business"},{id:"7be9ad68-7503-42ce-bc43-a9ee080d5a9e",name:"Write Email",type:"BusinessProcess",layer:"business"},{id:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",name:"Send Email",type:"BusinessProcess",layer:"business"},{id:"2d3d6fb4-bfd0-499f-89d5-d52b9b98b684",name:"Login",type:"BusinessProcess",layer:"business"},{id:"06e2c91a-3a99-4635-97fa-0b03df5699e4",name:"Access Email",type:"BusinessProcess",layer:"business"},{id:"5acaa556-032c-471c-9b86-5b9680ba0026",name:"Decrypt/Verify Email",type:"BusinessProcess",layer:"business"},{id:"a1c7130a-01fe-4b99-af96-29ebf69e97b0",name:"Encrypt/Sign Email",type:"BusinessProcess",layer:"business"},{id:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",name:"Logout",type:"BusinessProcess",layer:"business"},{id:"5c54a918-c982-422e-a468-4daaf4777f09",name:"Administrate Mailbox Server",type:"BusinessProcess",layer:"business"},{id:"be424e48-cc1a-4b55-ae2f-408bb5c27687",name:"Administrate Webmail",type:"BusinessProcess",layer:"business"},{id:"0f1ae371-9f31-4367-b00e-2342054ef1ca",name:"Administrate Crypto Gateway",type:"BusinessProcess",layer:"business"},{id:"0d17b166-548d-42d0-96ea-dab6799f45bd",name:"Administrate Mobile Access",type:"BusinessProcess",layer:"business"},{id:"3b424d85-9670-45de-96bd-a231f1be438c",name:"Administrate  API",type:"BusinessProcess",layer:"business"},{id:"822f4759-2650-407a-9620-3578f060144a",name:"Administrate Backend Server",type:"BusinessProcess",layer:"business"},{id:"52ed6f21-d022-4b99-9a4e-cd3e138d7839",name:"Applications",type:"ApplicationComponent",layer:"application"},{id:"963f56e4-bd87-41a1-aa7d-67fb2809b093",name:"Access Email",type:"ApplicationProcess",layer:"application"},{id:"534d5d4f-b779-428a-ac84-862cca5a33ba",name:"Send Email",type:"ApplicationProcess",layer:"application"},{id:"8fbf5d10-baa1-430b-be86-d34364bd471c",name:"Messaging Frontend",type:"ApplicationComponent",layer:"application"},{id:"0c679c93-325d-4082-b9f9-2ef56095d95b",name:"Crypto Service",type:"ApplicationComponent",layer:"application"},{id:"08224d98-e5d0-4879-94d3-06f5044ca5b9",name:"Messaging Backbone",type:"ApplicationComponent",layer:"application"},{id:"6434abde-5615-4a0a-8e04-d3edd04adc0c",name:"Admin Interface",type:"ApplicationComponent",layer:"application"},{id:"396b9e58-c944-44d2-b93e-57e10d832669",name:"Webmail",type:"ApplicationComponent",layer:"application"},{id:"62027a38-45b7-458d-9955-b197a3ac1ddb",name:"Email Client",type:"ApplicationComponent",layer:"application"},{id:"4fb14c25-0f49-4654-a5b1-0695179aef14",name:"Mobile Messaging",type:"ApplicationComponent",layer:"application"},{id:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",name:"Messaging Service",type:"ApplicationComponent",layer:"application"},{id:"92738984-87d4-45b5-87a5-6fcdc8f8e8b8",name:"Authenticate",type:"ApplicationProcess",layer:"application"},{id:"2dcaf6c5-09d9-4d58-a0b4-e9480eb55c45",name:"Decrypt/Verify Email",type:"ApplicationProcess",layer:"application"},{id:"2dc48cff-8463-4e9a-96f1-17eefa6a11c0",name:"Encrypt/Sign Email",type:"ApplicationProcess",layer:"application"},{id:"25ea4728-bfbf-4139-825c-bf7c55cfa9b6",name:"Read Email",type:"ApplicationProcess",layer:"application"},{id:"0f9683ee-dbff-4f25-9573-cdceb47ad652",name:"Close Session",type:"ApplicationProcess",layer:"application"},{id:"b14e16ee-edd4-4efe-86eb-f85372a6f8d1",name:"Decrypt/Verify Email",type:"ApplicationService",layer:"application"},{id:"6bed9b75-b678-41f0-bfa9-469c3f497d48",name:"Encrypt/Sign Email",type:"ApplicationService",layer:"application"},{id:"397e9ce6-0312-43c8-8d86-ed520c6264ed",name:"Access Mailbox",type:"ApplicationService",layer:"application"},{id:"717cc490-5b8f-42b5-b7a3-eff5a7a51994",name:"Access Webmail",type:"ApplicationService",layer:"application"},{id:"099c32e6-ac56-4cd2-867f-734238b78988",name:"Push Mail",type:"ApplicationService",layer:"application"},{id:"f78e1724-cbb8-4e4d-9807-3e1c24f30b4f",name:"Access Mailbox",type:"ApplicationService",layer:"application"},{id:"7dca3e7a-82a5-40b6-abd4-bb5c74de85bb",name:"Store Email",type:"ApplicationService",layer:"application"},{id:"c611b413-76f0-42e1-b789-b622c4f23c3d",name:"Messaging Backend",type:"ApplicationComponent",layer:"application"},{id:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",name:"Administrate Systems",type:"ApplicationService",layer:"application"},{id:"4262d058-d060-4bfc-8ae5-a47e033b201b",name:"Send Emails",type:"ApplicationService",layer:"application"},{id:"0316c932-9da3-4943-b22d-d36239ca202c",name:"Mail Gateway",type:"SystemSoftware",layer:"technology"},{id:"54a87d8c-9cbc-49d3-bfbb-31107c42fa10",name:"Crypto Gateway",type:"SystemSoftware",layer:"technology"},{id:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",name:"Messaging Gateway",type:"SystemSoftware",layer:"technology"},{id:"cb1b57eb-1330-4f4b-b8eb-0c6c7f9485d2",name:"Web Frontend",type:"SystemSoftware",layer:"technology"},{id:"aea996ca-18b4-4176-be59-e4f7e5358b05",name:"Mobile  Access",type:"SystemSoftware",layer:"technology"},{id:"ba1407c4-4f01-4db5-9777-5893e143fd41",name:"Database/Storage",type:"SystemSoftware",layer:"technology"},{id:"fd3e3764-7f09-42b5-8851-001a036304d5",name:"Internet",type:"CommunicationNetwork",layer:"technology"},{id:"e3ce132e-984a-48fe-ae91-a1d6dfe38e63",name:"Internal Users",type:"CommunicationNetwork",layer:"technology"},{id:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",name:"Internal",type:"CommunicationNetwork",layer:"technology"},{id:"d2cc7fa2-0ff3-4d4e-a2ff-ca2f7acc325a",name:"DMZ",type:"CommunicationNetwork",layer:"technology"},{id:"bcdf23f5-0acb-4a00-9138-3afddfd679d0",name:"External",type:"CommunicationNetwork",layer:"technology"},{id:"e1ddc82e-26fe-499e-aac7-f8803d26a2e4",name:"Messaging Backbone",type:"Node",layer:"technology"},{id:"600f3625-f1b8-4416-8f35-c21b49000cb1",name:"Mail Filter",type:"Node",layer:"technology"},{id:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",name:"Mail Filter",type:"Node",layer:"technology"},{id:"de722788-7008-493d-b0f7-548840d9970b",name:"WebServices gateway",type:"Node",layer:"technology"},{id:"aa35314c-63a5-4dbd-9190-65785ea7c147",name:"Protocol Gateway",type:"Node",layer:"technology"},{id:"a25b90d7-b731-46a9-b6d8-5268ec7083b3",name:"Web Gateway",type:"Node",layer:"technology"},{id:"ea28be19-6a48-4206-8909-ce5a0f2ca7c2",name:"Application",type:"Node",layer:"technology"},{id:"88f0e95d-d423-4c82-aa78-7544e3d9b718",name:"Messaging Backbone",type:"Node",layer:"technology"},{id:"a39f72bd-517e-4f2e-a1e9-4b91c7fcd766",name:"Messaging Service",type:"Node",layer:"technology"},{id:"7fd03082-21cc-44e1-9ae5-b9815a22dfc7",name:"Mobile Messaging",type:"Node",layer:"technology"},{id:"58e86d27-701e-4c48-9729-907cc86b5bbf",name:"Web Frontend",type:"Node",layer:"technology"},{id:"a24a57b5-94c7-46b8-a795-af29adbee9e5",name:"Mailbox Server",type:"Node",layer:"technology"},{id:"3827e44c-124e-4a60-a363-75b95bc5628d",name:"Database",type:"Node",layer:"technology"},{id:"77a8b9df-5577-4522-87c2-a5f2484047f5",name:"User on the Road",type:"Device",layer:"technology"},{id:"cdc367e5-3a48-4515-b6b0-3edc522c8796",name:"Mobile User",type:"Device",layer:"technology"},{id:"20665ed0-50f9-4556-b498-105393f73f13",name:"Applications",type:"Node",layer:"technology"},{id:"b0e974a0-8a32-4c21-aedd-7c84c568207c",name:"External Mailserver",type:"Node",layer:"technology"},{id:"e1a47e6c-0df2-4937-a917-c624e45aafac",name:"Internal User",type:"Device",layer:"technology"},{id:"0ce6e6f6-0633-4585-ac18-97e2d15a0781",name:"Junction",type:"Junction",layer:"other"},{id:"a37ffec2-bc89-4530-8207-2faa75d3a0c3",name:"Junction",type:"Junction",layer:"other"},{id:"02e0f883-5e76-4ece-8c94-da123b44520b",name:"Junction",type:"Junction",layer:"other"},{id:"ff9fb996-bd48-4300-b906-7b0d6b487638",name:"Junction",type:"Junction",layer:"other"},{id:"7e0e1686-0432-4891-9dc3-783735f0c779",name:"Junction",type:"Junction",layer:"other"},{id:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",name:"Junction",type:"Junction",layer:"other"}],l=[{id:"7c0d7542-185d-47e7-850b-1803cce87170",sourceId:"260230d9-5f5d-4cfc-85af-8b448d301c05",targetId:"20020865-85ab-4c47-a81f-52b58bccfeea",type:"AssignmentRelationship"},{id:"51016db5-f324-40ee-8953-ffc55e65fef4",sourceId:"27e65386-56e6-42e7-a43c-c34f339be07b",targetId:"59fd99d8-80b0-48f7-a0d9-ac5ac1c18cff",type:"AssignmentRelationship"},{id:"a76fb2e2-a9a2-4b98-9e70-bfef95b98edb",sourceId:"52ed6f21-d022-4b99-9a4e-cd3e138d7839",targetId:"534d5d4f-b779-428a-ac84-862cca5a33ba",type:"AssignmentRelationship"},{id:"b7f41254-7316-49d8-a459-38cf140c8bf1",sourceId:"52ed6f21-d022-4b99-9a4e-cd3e138d7839",targetId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",type:"AssignmentRelationship"},{id:"0e867fa3-c6c3-4739-adc7-5a7072c5dd30",sourceId:"a48ce6aa-a710-4bda-9d2f-d9d3892efc8a",targetId:"5c14a333-0a08-478b-923b-f184c1170b15",type:"AssignmentRelationship"},{id:"b4d1d5da-dfda-447a-8ce4-c02be3d7b388",sourceId:"a48ce6aa-a710-4bda-9d2f-d9d3892efc8a",targetId:"d10de43a-3156-40d5-a705-502eae99688e",type:"AssignmentRelationship"},{id:"47ad9892-0402-4a46-b457-ddb55ee05d91",sourceId:"a48ce6aa-a710-4bda-9d2f-d9d3892efc8a",targetId:"49ab7e59-c309-45b1-b177-5a127d7f22f5",type:"AssignmentRelationship"},{id:"99df9334-4b79-4355-9102-aebbbbbe2850",sourceId:"8fbf5d10-baa1-430b-be86-d34364bd471c",targetId:"49ab7e59-c309-45b1-b177-5a127d7f22f5",type:"ServingRelationship"},{id:"94a67864-89db-47cd-a3c3-cc4f7609cd22",sourceId:"8fbf5d10-baa1-430b-be86-d34364bd471c",targetId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",type:"ServingRelationship"},{id:"9b1e8d36-b9ed-4fd7-81ee-cc9550d9d31d",sourceId:"8fbf5d10-baa1-430b-be86-d34364bd471c",targetId:"d10de43a-3156-40d5-a705-502eae99688e",type:"ServingRelationship"},{id:"3dc9c71f-c95d-4e71-af94-0a853c1d6e11",sourceId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",targetId:"5c14a333-0a08-478b-923b-f184c1170b15",type:"ServingRelationship"},{id:"a9bf4847-2505-48d2-ba19-42c4972011ca",sourceId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",targetId:"534d5d4f-b779-428a-ac84-862cca5a33ba",type:"ServingRelationship"},{id:"f6d14dce-d1f4-436b-8fec-f26412756052",sourceId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",targetId:"59fd99d8-80b0-48f7-a0d9-ac5ac1c18cff",type:"ServingRelationship"},{id:"55f60ad7-270c-4a3b-9b3c-10178d99b1ef",sourceId:"6434abde-5615-4a0a-8e04-d3edd04adc0c",targetId:"20020865-85ab-4c47-a81f-52b58bccfeea",type:"ServingRelationship"},{id:"66533a03-efa4-4e3c-8757-4642dcd2891a",sourceId:"0c679c93-325d-4082-b9f9-2ef56095d95b",targetId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",type:"ServingRelationship"},{id:"e2e7869f-1727-4b9b-bedb-9364695a5641",sourceId:"0c679c93-325d-4082-b9f9-2ef56095d95b",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"6bdb0a1b-60df-4b29-beb0-b76e356f14c8",sourceId:"396b9e58-c944-44d2-b93e-57e10d832669",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"758c6cfd-ba79-4fc6-be8c-75c933fe765b",sourceId:"62027a38-45b7-458d-9955-b197a3ac1ddb",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"a38ed50d-bc76-452e-9dff-059a1538bf7a",sourceId:"4fb14c25-0f49-4654-a5b1-0695179aef14",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"c87e872d-1fec-42e2-9a08-4cb47127ac04",sourceId:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"e8c94987-d22d-45be-8da3-1df01bba0ebf",sourceId:"0316c932-9da3-4943-b22d-d36239ca202c",targetId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",type:"ServingRelationship"},{id:"9d04394a-5d13-4f99-bfb4-406461aefbfb",sourceId:"54a87d8c-9cbc-49d3-bfbb-31107c42fa10",targetId:"0316c932-9da3-4943-b22d-d36239ca202c",type:"ServingRelationship"},{id:"5fadbc7e-cf5a-4d4f-ba80-ebe13ff57750",sourceId:"54a87d8c-9cbc-49d3-bfbb-31107c42fa10",targetId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",type:"ServingRelationship"},{id:"8cb55909-c6c3-46e1-a40e-ac3cb30c89f9",sourceId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",targetId:"62027a38-45b7-458d-9955-b197a3ac1ddb",type:"ServingRelationship"},{id:"a0d7cd71-2fe7-4b99-8e21-4982743a477f",sourceId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",targetId:"4fb14c25-0f49-4654-a5b1-0695179aef14",type:"ServingRelationship"},{id:"70122a7c-9812-4872-ab43-f2a8f75a11c2",sourceId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",targetId:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",type:"ServingRelationship"},{id:"62617b20-ad9a-41cc-a470-e4aa635801cb",sourceId:"aea996ca-18b4-4176-be59-e4f7e5358b05",targetId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",type:"ServingRelationship"},{id:"0c6eaa57-93ea-406b-b07b-b46b1fd6c9ae",sourceId:"cb1b57eb-1330-4f4b-b8eb-0c6c7f9485d2",targetId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",type:"ServingRelationship"},{id:"374b6637-d61b-4955-99b9-a8874a6a7df1",sourceId:"ba1407c4-4f01-4db5-9777-5893e143fd41",targetId:"0561e6c6-31b5-4d6a-9cde-dd23f3ec1511",type:"ServingRelationship"},{id:"dd0a768a-9a78-45dc-be56-a6e5f3c2edf6",sourceId:"cb1b57eb-1330-4f4b-b8eb-0c6c7f9485d2",targetId:"396b9e58-c944-44d2-b93e-57e10d832669",type:"ServingRelationship"},{id:"79d475ad-831c-46ae-998a-837edc0b4185",sourceId:"59fd99d8-80b0-48f7-a0d9-ac5ac1c18cff",targetId:"7be9ad68-7503-42ce-bc43-a9ee080d5a9e",type:"CompositionRelationship"},{id:"3c0adf65-8ba0-4cbd-b7b2-8e35ca72f515",sourceId:"59fd99d8-80b0-48f7-a0d9-ac5ac1c18cff",targetId:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",type:"CompositionRelationship"},{id:"224922cf-bc0f-4424-8586-e337260d54ad",sourceId:"7be9ad68-7503-42ce-bc43-a9ee080d5a9e",targetId:"0ce6e6f6-0633-4585-ac18-97e2d15a0781",type:"FlowRelationship"},{id:"1a964ff9-3951-48ba-9bab-5d851565f5ac",sourceId:"0ce6e6f6-0633-4585-ac18-97e2d15a0781",targetId:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",type:"FlowRelationship"},{id:"0b35f189-6abc-4d8a-8779-d29b437192c4",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"2d3d6fb4-bfd0-499f-89d5-d52b9b98b684",type:"CompositionRelationship"},{id:"62456c58-89b7-4025-9821-80436bc73b39",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"06e2c91a-3a99-4635-97fa-0b03df5699e4",type:"CompositionRelationship"},{id:"75bd4bbe-fb11-4de0-843f-9dd7cb3e4d75",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"5acaa556-032c-471c-9b86-5b9680ba0026",type:"CompositionRelationship"},{id:"7a740d5d-2567-4263-850d-d8b883cb7698",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"49ab7e59-c309-45b1-b177-5a127d7f22f5",type:"CompositionRelationship"},{id:"fd126cc2-6e80-41be-bf54-49454cb91596",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"d10de43a-3156-40d5-a705-502eae99688e",type:"CompositionRelationship"},{id:"aa16dbd2-7a03-49be-a03e-bdd8304ab49f",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"7be9ad68-7503-42ce-bc43-a9ee080d5a9e",type:"CompositionRelationship"},{id:"115c887f-12f7-4842-a971-b2d6c60ea08d",sourceId:"59fd99d8-80b0-48f7-a0d9-ac5ac1c18cff",targetId:"a1c7130a-01fe-4b99-af96-29ebf69e97b0",type:"CompositionRelationship"},{id:"0a139d87-e149-468c-a347-44713ecd7adf",sourceId:"0ce6e6f6-0633-4585-ac18-97e2d15a0781",targetId:"a1c7130a-01fe-4b99-af96-29ebf69e97b0",type:"FlowRelationship"},{id:"2c569eef-3e09-415b-983a-b32bc2a4f5c3",sourceId:"a1c7130a-01fe-4b99-af96-29ebf69e97b0",targetId:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",type:"FlowRelationship"},{id:"6bc6aebb-4281-4be4-8801-e7fd52787e69",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"a1c7130a-01fe-4b99-af96-29ebf69e97b0",type:"CompositionRelationship"},{id:"d7cb16ba-f6ac-48fa-9cc7-7f97e542cc8a",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",type:"CompositionRelationship"},{id:"fb7e2545-eaad-4119-a655-dc2cc2e21b4f",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"CompositionRelationship"},{id:"20456b2b-9ba4-4dc3-bc24-e3b36c07f333",sourceId:"2d3d6fb4-bfd0-499f-89d5-d52b9b98b684",targetId:"a37ffec2-bc89-4530-8207-2faa75d3a0c3",type:"FlowRelationship"},{id:"858e91ac-6682-4fbc-b9c7-c7593b0ecf87",sourceId:"a37ffec2-bc89-4530-8207-2faa75d3a0c3",targetId:"7be9ad68-7503-42ce-bc43-a9ee080d5a9e",type:"FlowRelationship"},{id:"33e89928-99b8-41a1-a3ac-b82c4eb50afb",sourceId:"a37ffec2-bc89-4530-8207-2faa75d3a0c3",targetId:"d10de43a-3156-40d5-a705-502eae99688e",type:"FlowRelationship"},{id:"bb0b7ca4-10e2-4665-b6be-f2a9f6dc792f",sourceId:"a37ffec2-bc89-4530-8207-2faa75d3a0c3",targetId:"06e2c91a-3a99-4635-97fa-0b03df5699e4",type:"FlowRelationship"},{id:"4bda0448-3a9d-49e1-b61d-850b21296abc",sourceId:"06e2c91a-3a99-4635-97fa-0b03df5699e4",targetId:"ff9fb996-bd48-4300-b906-7b0d6b487638",type:"FlowRelationship"},{id:"a215c14d-784f-48ca-be5e-37b2f754425f",sourceId:"7be9ad68-7503-42ce-bc43-a9ee080d5a9e",targetId:"02e0f883-5e76-4ece-8c94-da123b44520b",type:"FlowRelationship"},{id:"7863ad22-009f-4ae9-8dd2-ca08422df2af",sourceId:"02e0f883-5e76-4ece-8c94-da123b44520b",targetId:"a1c7130a-01fe-4b99-af96-29ebf69e97b0",type:"FlowRelationship"},{id:"98f67ee6-996a-42e5-ab7a-2e2568d9f0ef",sourceId:"02e0f883-5e76-4ece-8c94-da123b44520b",targetId:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",type:"FlowRelationship"},{id:"5f397667-b213-48ba-bbe1-4f2a8b1122df",sourceId:"ff9fb996-bd48-4300-b906-7b0d6b487638",targetId:"5acaa556-032c-471c-9b86-5b9680ba0026",type:"FlowRelationship"},{id:"284c5f09-a2af-422c-a600-cb2706168f1b",sourceId:"ff9fb996-bd48-4300-b906-7b0d6b487638",targetId:"49ab7e59-c309-45b1-b177-5a127d7f22f5",type:"FlowRelationship"},{id:"5ebb9a76-d104-488e-9252-c974f4ec4f3e",sourceId:"d10de43a-3156-40d5-a705-502eae99688e",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"99ef1f9b-9ad1-48a4-aa48-dacdfcd37abc",sourceId:"7b12008c-9e3f-4e9f-b1ca-ae41fa184e3c",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"db9b366c-6ecc-4f39-a2b1-3e28bee8a9ae",sourceId:"49ab7e59-c309-45b1-b177-5a127d7f22f5",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"9335abaf-7afd-42f9-82a2-f97a6ff60f2b",sourceId:"5acaa556-032c-471c-9b86-5b9680ba0026",targetId:"49ab7e59-c309-45b1-b177-5a127d7f22f5",type:"FlowRelationship"},{id:"fd2e84cf-27d3-444b-bf85-5da4225c5e84",sourceId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",targetId:"92738984-87d4-45b5-87a5-6fcdc8f8e8b8",type:"CompositionRelationship"},{id:"c13176f0-50d0-4544-8db5-3b5c8f487597",sourceId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",targetId:"2dcaf6c5-09d9-4d58-a0b4-e9480eb55c45",type:"CompositionRelationship"},{id:"458121e3-ef7e-4c76-a8cd-bc5cd466ce54",sourceId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",targetId:"2dc48cff-8463-4e9a-96f1-17eefa6a11c0",type:"CompositionRelationship"},{id:"76548b0a-ed83-4783-ab83-1d1310f287c7",sourceId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",targetId:"534d5d4f-b779-428a-ac84-862cca5a33ba",type:"CompositionRelationship"},{id:"e1291090-bca5-4fae-9089-a9ea4659a5ba",sourceId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",targetId:"25ea4728-bfbf-4139-825c-bf7c55cfa9b6",type:"CompositionRelationship"},{id:"a23b29f6-377e-4728-a5b8-24d865340c23",sourceId:"963f56e4-bd87-41a1-aa7d-67fb2809b093",targetId:"0f9683ee-dbff-4f25-9573-cdceb47ad652",type:"CompositionRelationship"},{id:"aaa570b8-b5ce-4681-baeb-2a6e90207998",sourceId:"92738984-87d4-45b5-87a5-6fcdc8f8e8b8",targetId:"7e0e1686-0432-4891-9dc3-783735f0c779",type:"FlowRelationship"},{id:"cb1486b0-12c9-47de-8074-f9d6adbef595",sourceId:"7e0e1686-0432-4891-9dc3-783735f0c779",targetId:"2dcaf6c5-09d9-4d58-a0b4-e9480eb55c45",type:"FlowRelationship"},{id:"f07ae319-7601-4826-b727-cad2b7a3e394",sourceId:"7e0e1686-0432-4891-9dc3-783735f0c779",targetId:"2dc48cff-8463-4e9a-96f1-17eefa6a11c0",type:"FlowRelationship"},{id:"421fd84b-40ae-4eff-b98c-bf1fd0137013",sourceId:"7e0e1686-0432-4891-9dc3-783735f0c779",targetId:"534d5d4f-b779-428a-ac84-862cca5a33ba",type:"FlowRelationship"},{id:"ccf25eae-fea2-4f69-860f-b589b7856dd7",sourceId:"7e0e1686-0432-4891-9dc3-783735f0c779",targetId:"25ea4728-bfbf-4139-825c-bf7c55cfa9b6",type:"FlowRelationship"},{id:"c774282f-d595-40f5-a1ea-c160c8fb91f8",sourceId:"2dc48cff-8463-4e9a-96f1-17eefa6a11c0",targetId:"534d5d4f-b779-428a-ac84-862cca5a33ba",type:"FlowRelationship"},{id:"a67cae33-aaa8-45ea-8ac6-df8dbbe5bcfd",sourceId:"2dcaf6c5-09d9-4d58-a0b4-e9480eb55c45",targetId:"25ea4728-bfbf-4139-825c-bf7c55cfa9b6",type:"FlowRelationship"},{id:"6baaff04-1560-48ad-83fb-38d66a2ecba0",sourceId:"25ea4728-bfbf-4139-825c-bf7c55cfa9b6",targetId:"0f9683ee-dbff-4f25-9573-cdceb47ad652",type:"FlowRelationship"},{id:"0cbbb684-4ac3-4dc6-a59e-113d8e3054ed",sourceId:"534d5d4f-b779-428a-ac84-862cca5a33ba",targetId:"0f9683ee-dbff-4f25-9573-cdceb47ad652",type:"FlowRelationship"},{id:"7d581209-a34a-4068-a3d4-f8c3e5f25595",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"2d3d6fb4-bfd0-499f-89d5-d52b9b98b684",type:"CompositionRelationship"},{id:"25042e3c-0bab-48f1-aedd-e3fc4592bc03",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"CompositionRelationship"},{id:"ef612a46-a8ea-469c-acc3-29aec59ec068",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"5c54a918-c982-422e-a468-4daaf4777f09",type:"CompositionRelationship"},{id:"428c866d-6d8d-4c14-8ad5-92f22047f9f9",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"be424e48-cc1a-4b55-ae2f-408bb5c27687",type:"CompositionRelationship"},{id:"1b1d53fa-64ad-40e5-8651-990f7a7e97db",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"0f1ae371-9f31-4367-b00e-2342054ef1ca",type:"CompositionRelationship"},{id:"1c800e48-8938-4596-a033-68c39378a592",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"0d17b166-548d-42d0-96ea-dab6799f45bd",type:"CompositionRelationship"},{id:"e93453aa-2956-46a9-b1ef-d13bc0b232a3",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"3b424d85-9670-45de-96bd-a231f1be438c",type:"CompositionRelationship"},{id:"b1df0c1d-e7b8-4afe-b4d7-b67bb4cdd259",sourceId:"20020865-85ab-4c47-a81f-52b58bccfeea",targetId:"822f4759-2650-407a-9620-3578f060144a",type:"CompositionRelationship"},{id:"adb113f6-a0dd-4ca8-95e6-8c542aca1077",sourceId:"2d3d6fb4-bfd0-499f-89d5-d52b9b98b684",targetId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",type:"FlowRelationship"},{id:"9613647d-58b8-4bbc-8e02-dd69d06d1998",sourceId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",targetId:"be424e48-cc1a-4b55-ae2f-408bb5c27687",type:"FlowRelationship"},{id:"c3b9ffb0-2e55-4a17-b250-4de2ec172953",sourceId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",targetId:"5c54a918-c982-422e-a468-4daaf4777f09",type:"FlowRelationship"},{id:"9e99d681-1bda-4382-8e80-07e6bf5e2431",sourceId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",targetId:"0f1ae371-9f31-4367-b00e-2342054ef1ca",type:"FlowRelationship"},{id:"29a5119c-7544-4b27-92d5-de127e585b87",sourceId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",targetId:"0d17b166-548d-42d0-96ea-dab6799f45bd",type:"FlowRelationship"},{id:"39512128-328c-4618-9cb6-16b66f0a8a9d",sourceId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",targetId:"3b424d85-9670-45de-96bd-a231f1be438c",type:"FlowRelationship"},{id:"51d9e477-9360-4d1c-bfc0-d81b68349274",sourceId:"b2c7bc1b-6e9d-41a4-9b85-9e6831573e57",targetId:"822f4759-2650-407a-9620-3578f060144a",type:"FlowRelationship"},{id:"d9b2658b-cb7d-4f7f-a78d-f9ce7f8290ca",sourceId:"822f4759-2650-407a-9620-3578f060144a",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"816b6ec0-7b5b-43b5-8430-35cf4e8fdf5e",sourceId:"3b424d85-9670-45de-96bd-a231f1be438c",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"544fa9b8-9f7f-4f08-ae35-5a21ff68cd29",sourceId:"0d17b166-548d-42d0-96ea-dab6799f45bd",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"73c7b21c-70bd-4a1f-956a-e0ed69833227",sourceId:"0f1ae371-9f31-4367-b00e-2342054ef1ca",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"e5e243b7-a05a-4d9f-9f0f-90d359cdd225",sourceId:"be424e48-cc1a-4b55-ae2f-408bb5c27687",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"0594e755-853a-42ad-9f2a-39f2f7163b2d",sourceId:"5c54a918-c982-422e-a468-4daaf4777f09",targetId:"9de9d1f5-d214-468a-bbc7-a9c39e421c22",type:"FlowRelationship"},{id:"7de7e184-ea6e-483e-92a7-f991fb7041f2",sourceId:"0c679c93-325d-4082-b9f9-2ef56095d95b",targetId:"b14e16ee-edd4-4efe-86eb-f85372a6f8d1",type:"RealizationRelationship"},{id:"9b843667-0ed5-475e-8d03-b465969b7687",sourceId:"0c679c93-325d-4082-b9f9-2ef56095d95b",targetId:"6bed9b75-b678-41f0-bfa9-469c3f497d48",type:"RealizationRelationship"},{id:"ce316105-21fd-434f-9e3b-629f5c41faf0",sourceId:"b14e16ee-edd4-4efe-86eb-f85372a6f8d1",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"1560eaf3-7306-4e5e-af74-84000f5e0754",sourceId:"6bed9b75-b678-41f0-bfa9-469c3f497d48",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"ab40490c-49fd-4a04-b76e-4879ab04f3bb",sourceId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",targetId:"4262d058-d060-4bfc-8ae5-a47e033b201b",type:"RealizationRelationship"},{id:"3e27b45d-52af-4e27-ad43-94bdd4e3f83f",sourceId:"6434abde-5615-4a0a-8e04-d3edd04adc0c",targetId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",type:"RealizationRelationship"},{id:"505c2f64-39eb-48b1-9a9d-ab348fdbc541",sourceId:"62027a38-45b7-458d-9955-b197a3ac1ddb",targetId:"397e9ce6-0312-43c8-8d86-ed520c6264ed",type:"RealizationRelationship"},{id:"aa372f37-ada4-49f1-8b73-5c6c380c0a0e",sourceId:"396b9e58-c944-44d2-b93e-57e10d832669",targetId:"717cc490-5b8f-42b5-b7a3-eff5a7a51994",type:"RealizationRelationship"},{id:"ea1f5444-956a-43eb-9952-67939662b682",sourceId:"4fb14c25-0f49-4654-a5b1-0695179aef14",targetId:"099c32e6-ac56-4cd2-867f-734238b78988",type:"RealizationRelationship"},{id:"058b1a52-93fe-4c13-9d53-c40da762f6f5",sourceId:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",targetId:"f78e1724-cbb8-4e4d-9807-3e1c24f30b4f",type:"RealizationRelationship"},{id:"17782a28-07bc-491c-987f-57015b0159d6",sourceId:"c611b413-76f0-42e1-b789-b622c4f23c3d",targetId:"7dca3e7a-82a5-40b6-abd4-bb5c74de85bb",type:"RealizationRelationship"},{id:"15761cfb-70f4-4050-a90a-fe71afb85564",sourceId:"4262d058-d060-4bfc-8ae5-a47e033b201b",targetId:"62027a38-45b7-458d-9955-b197a3ac1ddb",type:"ServingRelationship"},{id:"e06614de-73a2-485f-989f-900d0f3117db",sourceId:"4262d058-d060-4bfc-8ae5-a47e033b201b",targetId:"396b9e58-c944-44d2-b93e-57e10d832669",type:"ServingRelationship"},{id:"4317f08a-02d2-4285-a414-240ac82223c0",sourceId:"4262d058-d060-4bfc-8ae5-a47e033b201b",targetId:"4fb14c25-0f49-4654-a5b1-0695179aef14",type:"ServingRelationship"},{id:"9da5c375-9aab-46a7-abcc-cd3168d9a3eb",sourceId:"4262d058-d060-4bfc-8ae5-a47e033b201b",targetId:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",type:"ServingRelationship"},{id:"286e8894-387f-46b9-83a8-4c8321b96511",sourceId:"4262d058-d060-4bfc-8ae5-a47e033b201b",targetId:"c611b413-76f0-42e1-b789-b622c4f23c3d",type:"ServingRelationship"},{id:"ca5277c0-ad72-4684-aaf7-8f4298b45e4c",sourceId:"397e9ce6-0312-43c8-8d86-ed520c6264ed",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"77d003d7-00dd-4eb4-ab24-d9d4ca4be965",sourceId:"717cc490-5b8f-42b5-b7a3-eff5a7a51994",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"70691a95-d3f5-4030-8700-1de26d7f6553",sourceId:"099c32e6-ac56-4cd2-867f-734238b78988",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"3dd4d257-7653-4c47-92d7-1043e70ff478",sourceId:"f78e1724-cbb8-4e4d-9807-3e1c24f30b4f",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"65d3c374-5a2a-41a3-a2a4-e6b3533830c4",sourceId:"7dca3e7a-82a5-40b6-abd4-bb5c74de85bb",targetId:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",type:"ServingRelationship"},{id:"292db319-7f9a-45f3-a229-8cfcf45d7fcc",sourceId:"7dca3e7a-82a5-40b6-abd4-bb5c74de85bb",targetId:"4fb14c25-0f49-4654-a5b1-0695179aef14",type:"ServingRelationship"},{id:"5281aba4-be20-482c-9225-cd361b9ac2da",sourceId:"7dca3e7a-82a5-40b6-abd4-bb5c74de85bb",targetId:"396b9e58-c944-44d2-b93e-57e10d832669",type:"ServingRelationship"},{id:"1d55f046-9232-4b9d-a25e-25defd2ae6b3",sourceId:"7dca3e7a-82a5-40b6-abd4-bb5c74de85bb",targetId:"62027a38-45b7-458d-9955-b197a3ac1ddb",type:"ServingRelationship"},{id:"19312c53-08a3-4437-8886-845191680af3",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"62027a38-45b7-458d-9955-b197a3ac1ddb",type:"ServingRelationship"},{id:"e32d37ce-2e88-4a2f-b0c4-ecb1e2ace997",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"396b9e58-c944-44d2-b93e-57e10d832669",type:"ServingRelationship"},{id:"5a52e33a-48c4-41b9-b1a1-a3abcd4c0377",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"4fb14c25-0f49-4654-a5b1-0695179aef14",type:"ServingRelationship"},{id:"96b310c3-219c-49b8-90ec-791fb41b983d",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"dbb33320-e7d3-4400-be3b-aaf28d8589dd",type:"ServingRelationship"},{id:"d50090ab-e178-42d4-ae0c-dff629a9fdc5",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"c611b413-76f0-42e1-b789-b622c4f23c3d",type:"ServingRelationship"},{id:"e459a0b1-4b3f-4228-a5e7-e4789a06f652",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"08224d98-e5d0-4879-94d3-06f5044ca5b9",type:"ServingRelationship"},{id:"22c5529b-7115-4d82-8a4e-37027f6302cc",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"0c679c93-325d-4082-b9f9-2ef56095d95b",type:"ServingRelationship"},{id:"91a95e06-95eb-4316-9cfc-76adc51b8cf2",sourceId:"11cdde29-b8f5-4085-83b8-c536cdf6cca3",targetId:"8fbf5d10-baa1-430b-be86-d34364bd471c",type:"ServingRelationship"},{id:"ad950bea-8ca0-455f-b1f5-d9fcd2c3dc31",sourceId:"bcdf23f5-0acb-4a00-9138-3afddfd679d0",targetId:"e1ddc82e-26fe-499e-aac7-f8803d26a2e4",type:"AssignmentRelationship"},{id:"9f02cbca-a469-4915-b3a6-48774e9f9f9a",sourceId:"d2cc7fa2-0ff3-4d4e-a2ff-ca2f7acc325a",targetId:"600f3625-f1b8-4416-8f35-c21b49000cb1",type:"AssignmentRelationship"},{id:"dbe4b359-83e8-4755-921c-6b846c79c1ca",sourceId:"d2cc7fa2-0ff3-4d4e-a2ff-ca2f7acc325a",targetId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",type:"AssignmentRelationship"},{id:"cdeeae9b-1ae4-45d4-8eac-09d3d64c195f",sourceId:"d2cc7fa2-0ff3-4d4e-a2ff-ca2f7acc325a",targetId:"de722788-7008-493d-b0f7-548840d9970b",type:"AssignmentRelationship"},{id:"7cac59e5-f28b-439d-8441-c4e0557ee225",sourceId:"d2cc7fa2-0ff3-4d4e-a2ff-ca2f7acc325a",targetId:"aa35314c-63a5-4dbd-9190-65785ea7c147",type:"AssignmentRelationship"},{id:"79dcac1a-ca9f-4339-b4c3-7c290ea738ce",sourceId:"d2cc7fa2-0ff3-4d4e-a2ff-ca2f7acc325a",targetId:"a25b90d7-b731-46a9-b6d8-5268ec7083b3",type:"AssignmentRelationship"},{id:"09e1ad96-dd3f-4757-b5f2-63d88f0bfe04",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"ea28be19-6a48-4206-8909-ce5a0f2ca7c2",type:"AssignmentRelationship"},{id:"4ddd7d89-9420-4f48-89a3-f23187958e40",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",type:"AssignmentRelationship"},{id:"d7bafcd6-8509-4429-9e36-ea54ab429c1a",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"a39f72bd-517e-4f2e-a1e9-4b91c7fcd766",type:"AssignmentRelationship"},{id:"02890ff9-5244-4077-9933-f63989af6167",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"7fd03082-21cc-44e1-9ae5-b9815a22dfc7",type:"AssignmentRelationship"},{id:"824bf4e5-8028-42ec-94b8-8ac63e995961",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"58e86d27-701e-4c48-9729-907cc86b5bbf",type:"AssignmentRelationship"},{id:"a547e83e-4bc4-4858-8677-5f0a448cdaf5",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"a24a57b5-94c7-46b8-a795-af29adbee9e5",type:"AssignmentRelationship"},{id:"634a8222-fb7e-48db-b3d6-a779785efff1",sourceId:"4ad1299c-8bde-4969-bb0f-3d1b8e0ff627",targetId:"3827e44c-124e-4a60-a363-75b95bc5628d",type:"AssignmentRelationship"},{id:"ceb8cfe3-9531-4c82-b437-48384b03c93d",sourceId:"3827e44c-124e-4a60-a363-75b95bc5628d",targetId:"a24a57b5-94c7-46b8-a795-af29adbee9e5",type:"ServingRelationship"},{id:"57ea1534-f8e6-4280-92aa-c833555981c9",sourceId:"a24a57b5-94c7-46b8-a795-af29adbee9e5",targetId:"7fd03082-21cc-44e1-9ae5-b9815a22dfc7",type:"ServingRelationship"},{id:"f21eabe9-84e9-48cf-b1bc-1eb6ffa06d33",sourceId:"a24a57b5-94c7-46b8-a795-af29adbee9e5",targetId:"58e86d27-701e-4c48-9729-907cc86b5bbf",type:"ServingRelationship"},{id:"1c9c0924-a34c-46f8-982c-cabe076e2bbd",sourceId:"a24a57b5-94c7-46b8-a795-af29adbee9e5",targetId:"ea28be19-6a48-4206-8909-ce5a0f2ca7c2",type:"ServingRelationship"},{id:"ddfc79d3-db5d-4f3c-ba05-3f8704772890",sourceId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",targetId:"ea28be19-6a48-4206-8909-ce5a0f2ca7c2",type:"ServingRelationship"},{id:"e8cd4fd2-5ca2-4a10-af46-32cd04fe4020",sourceId:"a39f72bd-517e-4f2e-a1e9-4b91c7fcd766",targetId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",type:"ServingRelationship"},{id:"7e750c74-1528-4cc3-ade4-ecd559d2edbf",sourceId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",targetId:"a39f72bd-517e-4f2e-a1e9-4b91c7fcd766",type:"ServingRelationship"},{id:"d135447e-69cc-4e83-960b-cf6efb20bfb9",sourceId:"a39f72bd-517e-4f2e-a1e9-4b91c7fcd766",targetId:"de722788-7008-493d-b0f7-548840d9970b",type:"ServingRelationship"},{id:"bc251782-a3d6-4a2c-92f7-9fa53a4ba8f6",sourceId:"7fd03082-21cc-44e1-9ae5-b9815a22dfc7",targetId:"aa35314c-63a5-4dbd-9190-65785ea7c147",type:"ServingRelationship"},{id:"34622303-d4c2-4304-ae0b-3cc3d0cdf21d",sourceId:"58e86d27-701e-4c48-9729-907cc86b5bbf",targetId:"a25b90d7-b731-46a9-b6d8-5268ec7083b3",type:"ServingRelationship"},{id:"e9934fa3-cb73-4bdb-a574-6e5e14b7c49c",sourceId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",targetId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",type:"ServingRelationship"},{id:"6febe656-df97-4094-aafd-634f2fe8396e",sourceId:"e1ddc82e-26fe-499e-aac7-f8803d26a2e4",targetId:"600f3625-f1b8-4416-8f35-c21b49000cb1",type:"ServingRelationship"},{id:"aafd89a1-7b29-4bb9-93b4-b163d629575b",sourceId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",targetId:"e1ddc82e-26fe-499e-aac7-f8803d26a2e4",type:"ServingRelationship"},{id:"c6e740d8-d492-46f8-9af5-565aa7d73d5d",sourceId:"e1ddc82e-26fe-499e-aac7-f8803d26a2e4",targetId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",type:"ServingRelationship"},{id:"b92ba59e-9756-4f10-90f4-520ef7beecb7",sourceId:"600f3625-f1b8-4416-8f35-c21b49000cb1",targetId:"e1ddc82e-26fe-499e-aac7-f8803d26a2e4",type:"ServingRelationship"},{id:"63ab06c1-e34f-4746-a949-58d69778239f",sourceId:"de722788-7008-493d-b0f7-548840d9970b",targetId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",type:"ServingRelationship"},{id:"bd80c71e-b9b7-46c1-a94c-563444f591bd",sourceId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",targetId:"de722788-7008-493d-b0f7-548840d9970b",type:"ServingRelationship"},{id:"5d5fb8da-0851-4ed2-9fe1-76f58284a243",sourceId:"fd3e3764-7f09-42b5-8851-001a036304d5",targetId:"77a8b9df-5577-4522-87c2-a5f2484047f5",type:"AssignmentRelationship"},{id:"1884a806-8b6c-41df-9f7d-bbbacf4ab072",sourceId:"fd3e3764-7f09-42b5-8851-001a036304d5",targetId:"cdc367e5-3a48-4515-b6b0-3edc522c8796",type:"AssignmentRelationship"},{id:"d0bd8386-4542-4756-8518-014c4bcabfc1",sourceId:"fd3e3764-7f09-42b5-8851-001a036304d5",targetId:"20665ed0-50f9-4556-b498-105393f73f13",type:"AssignmentRelationship"},{id:"a9628868-1d39-4f0d-bfbf-fd5412679f7e",sourceId:"fd3e3764-7f09-42b5-8851-001a036304d5",targetId:"b0e974a0-8a32-4c21-aedd-7c84c568207c",type:"AssignmentRelationship"},{id:"1eae9ec0-8183-4786-9365-9bd79cd1acfd",sourceId:"b0e974a0-8a32-4c21-aedd-7c84c568207c",targetId:"20665ed0-50f9-4556-b498-105393f73f13",type:"ServingRelationship"},{id:"b3ab9b8b-f6d8-449c-896f-ad167d5446a6",sourceId:"de722788-7008-493d-b0f7-548840d9970b",targetId:"20665ed0-50f9-4556-b498-105393f73f13",type:"ServingRelationship"},{id:"699c588e-4950-4b69-b7be-02acdd420a50",sourceId:"aa35314c-63a5-4dbd-9190-65785ea7c147",targetId:"cdc367e5-3a48-4515-b6b0-3edc522c8796",type:"ServingRelationship"},{id:"c55ee8a6-c800-4c47-b399-8a7504a574e6",sourceId:"a25b90d7-b731-46a9-b6d8-5268ec7083b3",targetId:"cdc367e5-3a48-4515-b6b0-3edc522c8796",type:"ServingRelationship"},{id:"c298232f-1206-4059-bfca-3cadf67a20d9",sourceId:"b0e974a0-8a32-4c21-aedd-7c84c568207c",targetId:"600f3625-f1b8-4416-8f35-c21b49000cb1",type:"ServingRelationship"},{id:"1f4ccfac-9ab3-4c23-a64a-a3a46a4a93a5",sourceId:"600f3625-f1b8-4416-8f35-c21b49000cb1",targetId:"b0e974a0-8a32-4c21-aedd-7c84c568207c",type:"ServingRelationship"},{id:"4c793d2f-b213-4e3a-8cce-fad59176104a",sourceId:"6a3d2ddc-95da-4bf1-8a5c-5967da7096c7",targetId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",type:"ServingRelationship"},{id:"75e69b9d-b5db-4c3a-a9e9-93efffb30600",sourceId:"b0e974a0-8a32-4c21-aedd-7c84c568207c",targetId:"77a8b9df-5577-4522-87c2-a5f2484047f5",type:"ServingRelationship"},{id:"5a14cd3b-d297-4326-b495-ad2742cd76fb",sourceId:"e3ce132e-984a-48fe-ae91-a1d6dfe38e63",targetId:"e1a47e6c-0df2-4937-a917-c624e45aafac",type:"AssignmentRelationship"},{id:"13fac435-ac94-476f-8462-84b32c5f9771",sourceId:"a24a57b5-94c7-46b8-a795-af29adbee9e5",targetId:"e1a47e6c-0df2-4937-a917-c624e45aafac",type:"ServingRelationship"},{id:"c03f13cb-b48e-4a92-b2b9-7c1996178245",sourceId:"e1a47e6c-0df2-4937-a917-c624e45aafac",targetId:"88f0e95d-d423-4c82-aa78-7544e3d9b718",type:"ServingRelationship"}],y=[{id:"24c3c151-fc23-4013-b6b7-7e54c562b174",name:"Holistic View",viewpoint:""},{id:"8a9ce106-28d2-4b3d-afa1-2688507cc16f",name:"Send Email-External",viewpoint:"business_process_cooperation"},{id:"f1aed0a4-780c-4945-9b92-9a293a1640c3",name:"Manage Email",viewpoint:"business_process_cooperation"},{id:"ca62803b-18c1-4878-9cf5-7e961a74bd3a",name:"Access Email",viewpoint:"application_cooperation"},{id:"7b85fdaf-69d9-4f50-8879-78cb0c7f08d0",name:"Administrate Service",viewpoint:"business_process_cooperation"},{id:"aa930cce-36d6-4bc6-9afe-b857032e5d09",name:"Application View",viewpoint:"application_cooperation"},{id:"27cd82ff-bddd-40e9-8ae0-21f447d848be",name:"Technology View",viewpoint:"technology"}],I={identifier:e,archimateId:a,name:d,description:c,formats:b,source:i,sourceFile:t,sourceFormat:f,timestamp:o,tags:s,duplicates:n,language:r,elements:p,relationships:l,views:y};export{a as archimateId,I as default,c as description,n as duplicates,p as elements,b as formats,e as identifier,r as language,d as name,l as relationships,i as source,t as sourceFile,f as sourceFormat,s as tags,o as timestamp,y as views};
