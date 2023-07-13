const e="https://me.big.tuwien.ac.at/EAModelSet/9ec7e367-4ee8-4ae2-b491-0c9bb1ef4db4",a="9ec7e367-4ee8-4ae2-b491-0c9bb1ef4db4",d="Pattern169: VendingMachine",c="",i=["XML","CSV","JSON","ARCHIMATE"],f="GitHub",t="raw-data/github/archimate/pattern169.archimate",b="ARCHIMATE",o="29-06-2023 09:30:44",n=[],s=[],r="en",p=[{id:"445faea3-0d31-42da-aaad-62546f081647",name:"Administrator",type:"BusinessRole",layer:"business"},{id:"547dea96-57ee-4727-bb73-2ec3e544933a",name:"Customer",type:"BusinessRole",layer:"business"},{id:"37c75b23-6ac9-45de-90e6-229d20220fed",name:"Manage Vending Machine",type:"BusinessProcess",layer:"business"},{id:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",name:"Buy Goods from Vending Machine",type:"BusinessProcess",layer:"business"},{id:"2c154ebb-2e4c-4479-b664-23154709c877",name:"Login",type:"BusinessProcess",layer:"business"},{id:"b4beafed-a13e-4652-a450-6afd78679f49",name:"Manage Catalog",type:"BusinessProcess",layer:"business"},{id:"1162f52d-b768-4e47-a6d9-d2d898852caf",name:"Manage Customers",type:"BusinessProcess",layer:"business"},{id:"7f100b98-09ed-4fdf-b3d9-67410acc99ca",name:"Manage Invoices",type:"BusinessProcess",layer:"business"},{id:"6d9285bf-dc17-4e78-af79-3fd3bb5403fe",name:"Manage Orders and Payments",type:"BusinessProcess",layer:"business"},{id:"62a633a9-3c3c-4aaf-bc2b-04e5475ebb22",name:"Manage Conditions",type:"BusinessProcess",layer:"business"},{id:"acf1ad76-7e87-4b75-a73f-daa04fee7505",name:"Logout",type:"BusinessProcess",layer:"business"},{id:"e4f5d546-56e4-4b8a-bce0-2177cb3d9275",name:"Open Shop URL",type:"BusinessProcess",layer:"business"},{id:"62ff58d7-78c7-4d51-8d9a-24440a6dc655",name:"Browse Catalog",type:"BusinessProcess",layer:"business"},{id:"a1feefbf-7c51-4031-ad32-b596c8bfcada",name:"Put into Cart",type:"BusinessProcess",layer:"business"},{id:"6a542bad-4354-4f56-8c30-8670841e9d18",name:"Register",type:"BusinessProcess",layer:"business"},{id:"7a4a5bee-846b-4284-9760-6823dc4d447b",name:"Login",type:"BusinessProcess",layer:"business"},{id:"8b22d7fb-a012-4c07-a706-64370cff812a",name:"Manage Profile",type:"BusinessProcess",layer:"business"},{id:"653538de-8892-4802-9909-62f10fff9d14",name:"Checkout",type:"BusinessProcess",layer:"business"},{id:"b057239e-ced5-4b1e-8b77-784051f29c5a",name:"Logout",type:"BusinessProcess",layer:"business"},{id:"320fde44-1576-48b8-8b71-49d8c0d90007",name:"Vending Machine Backend",type:"ApplicationComponent",layer:"application"},{id:"c21a5124-c51e-40d7-a37a-51a6fcb876af",name:"Vending Machine Frontend",type:"ApplicationComponent",layer:"application"},{id:"120c041f-247d-4186-b8cc-f8c5c53af237",name:"Catalog",type:"ApplicationComponent",layer:"application"},{id:"0ae9de12-16a8-488b-8f6b-85758f697d10",name:"Orders, Payments and Invoices ",type:"ApplicationComponent",layer:"application"},{id:"90497c18-09e1-47fc-912f-c20555a8a828",name:"Customers",type:"ApplicationComponent",layer:"application"},{id:"c735dc18-589e-4554-9dd2-b2e4b2f26362",name:"Conditions",type:"ApplicationComponent",layer:"application"},{id:"5b94f126-cf63-4645-bb01-13c5112eeec1",name:"Manage Backend",type:"ApplicationService",layer:"application"},{id:"15abe46c-2e4d-48fc-93ed-4432f188d618",name:"Send Email to Customers",type:"ApplicationService",layer:"application"},{id:"e3b81542-6f61-46d3-9f53-de026dfaf0e0",name:"Configure Pages",type:"ApplicationService",layer:"application"},{id:"3e4e405a-111f-4788-9ca5-9d5d913e22a6",name:"Get Statistics",type:"ApplicationService",layer:"application"},{id:"5d6e961f-2129-4bbc-ae88-e1b213c1304c",name:"Manage Conditions",type:"ApplicationService",layer:"application"},{id:"43b94604-fc8d-45c7-824e-7fc7e8f1dac8",name:"Buy Goods from Vending Machine",type:"ApplicationService",layer:"application"},{id:"550a84f6-1882-468d-ba12-df2c852e7c49",name:"Browse Catalog",type:"ApplicationService",layer:"application"},{id:"58029861-f9ff-4b5d-a45f-97eb4b6ca464",name:"Manage Articles",type:"ApplicationService",layer:"application"},{id:"ee7a3bb4-13a2-4d36-9de0-704ddd9efe3c",name:"Manage Catalog",type:"ApplicationService",layer:"application"},{id:"58b2be12-5003-48d1-955a-3c0db8ddf5fd",name:"Place Order",type:"ApplicationService",layer:"application"},{id:"dd1ca232-3b29-4be4-8827-2fa2fe953da4",name:"Manage Orders",type:"ApplicationService",layer:"application"},{id:"35c91d46-1b80-40de-987b-5a2e0ea33c1a",name:"Manage Payments",type:"ApplicationService",layer:"application"},{id:"8e66e314-8b0a-42b0-b88f-04e72d5d10e1",name:"Manage Invoices",type:"ApplicationService",layer:"application"},{id:"da283651-0913-4990-941d-c083ad43dbd4",name:"Manage my Profile",type:"ApplicationService",layer:"application"},{id:"3892cb85-24db-4ef1-9ae9-f613044fafe7",name:"Manage Customers",type:"ApplicationService",layer:"application"},{id:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",name:"Vending Machine WebServer",type:"SystemSoftware",layer:"technology"},{id:"23ff5167-ad0c-4154-b032-c40700abe721",name:"Vending Machine DB",type:"SystemSoftware",layer:"technology"},{id:"82ec60a4-7b94-4476-ac6d-f845e9a2cb6a",name:"Backend Network",type:"CommunicationNetwork",layer:"technology"},{id:"96b30912-0889-40a4-83a4-9584923300ab",name:"Employee Network",type:"CommunicationNetwork",layer:"technology"},{id:"44453148-5933-4d29-ad10-43f89f2799a6",name:"DMZ",type:"CommunicationNetwork",layer:"technology"},{id:"990a5863-b6d1-497e-ac54-862e6990c5d3",name:"Vending Application Server",type:"Node",layer:"technology"},{id:"43e7d7a5-282c-41c3-afb4-55474a1f7e03",name:"Vending Machine Database Server",type:"Node",layer:"technology"},{id:"2c314480-023f-4388-ad31-b37839c95960",name:"Vending Machine Index Server",type:"Node",layer:"technology"},{id:"8e714571-8cd9-4056-bc5d-4cd702bc66f4",name:"Index Server",type:"SystemSoftware",layer:"technology"},{id:"e44b93c1-18f3-482f-84fe-5d8a08801a59",name:"Integration Server",type:"Node",layer:"technology"},{id:"73bc998f-427d-491d-a1f3-ef29f1837209",name:"Enterprise Service Bus",type:"SystemSoftware",layer:"technology"},{id:"41d20dc0-9a9d-4cf6-9b71-22311798b981",name:"Administrator",type:"Device",layer:"technology"},{id:"7a32de96-b607-4b09-836d-3a7753387d8d",name:"Internet",type:"CommunicationNetwork",layer:"technology"},{id:"0048346a-9901-4aec-85c1-7ebeac77431b",name:"Customer",type:"Device",layer:"technology"},{id:"783c5de2-33e7-47e8-a48d-f4dae34982a7",name:"Junction",type:"Junction",layer:"other"},{id:"e1571fc6-f6c6-4317-98cd-b5039238f711",name:"Junction",type:"Junction",layer:"other"},{id:"1c414f05-b0c5-42af-834b-9e60381a59e7",name:"Junction",type:"Junction",layer:"other"},{id:"e4b6cca1-8f36-481c-ab45-e800753073d6",name:"Junction",type:"Junction",layer:"other"},{id:"bbca9004-a43b-4f4a-b923-4fd754204a25",name:"Junction",type:"Junction",layer:"other"},{id:"7f4c640f-c156-4294-87f3-f191ce9dfd18",name:"Junction",type:"Junction",layer:"other"}],l=[{id:"fed93b9a-1ce4-47ad-9809-f8993f608d0e",sourceId:"445faea3-0d31-42da-aaad-62546f081647",targetId:"37c75b23-6ac9-45de-90e6-229d20220fed",type:"AssignmentRelationship"},{id:"1b2e9b9a-4ab9-40d8-b8e2-ec0532be8c05",sourceId:"547dea96-57ee-4727-bb73-2ec3e544933a",targetId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",type:"AssignmentRelationship"},{id:"7352b454-18c7-45f6-843e-8d52923b45bb",sourceId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",targetId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",type:"ServingRelationship"},{id:"6fe51407-1e64-4e01-94a6-6b328cd71f1a",sourceId:"320fde44-1576-48b8-8b71-49d8c0d90007",targetId:"37c75b23-6ac9-45de-90e6-229d20220fed",type:"ServingRelationship"},{id:"74e216bf-06f7-48e6-b8ea-95da840ea848",sourceId:"120c041f-247d-4186-b8cc-f8c5c53af237",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"8d77c898-3623-445c-9d76-9272b14c9fda",sourceId:"120c041f-247d-4186-b8cc-f8c5c53af237",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"1f5f3698-4c2f-4f65-976a-85de6a28cfa7",sourceId:"0ae9de12-16a8-488b-8f6b-85758f697d10",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"36736315-dd3e-49f2-9c8d-f74d5ac6b325",sourceId:"0ae9de12-16a8-488b-8f6b-85758f697d10",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"6f1dbc84-510e-42d0-a474-22646b4a8cff",sourceId:"90497c18-09e1-47fc-912f-c20555a8a828",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"bfac2fd9-edb8-4295-961d-124860547742",sourceId:"90497c18-09e1-47fc-912f-c20555a8a828",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"fc0cee2a-62be-48ae-b886-2b1b8d48a63d",sourceId:"c735dc18-589e-4554-9dd2-b2e4b2f26362",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"6c9b92ba-648d-4d0f-8139-4952cd65fd7d",sourceId:"c735dc18-589e-4554-9dd2-b2e4b2f26362",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"ce7c5b99-46e2-4692-be3d-45a45f380add",sourceId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"786f0a17-247e-4e18-87f1-e33408c55ce2",sourceId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"8bc94b91-0d11-47f8-884a-5d48412ca75f",sourceId:"23ff5167-ad0c-4154-b032-c40700abe721",targetId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",type:"ServingRelationship"},{id:"bb4c3cd8-7f7d-41b6-adf2-f2afbebcc798",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"2c154ebb-2e4c-4479-b664-23154709c877",type:"CompositionRelationship"},{id:"b47adf1d-c00a-498a-b76a-112efc12d571",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"b4beafed-a13e-4652-a450-6afd78679f49",type:"CompositionRelationship"},{id:"86a518c8-0d2a-4732-bd86-5f58ef3e053c",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"1162f52d-b768-4e47-a6d9-d2d898852caf",type:"CompositionRelationship"},{id:"3913890a-4d2e-4949-8ecb-fae6814ea412",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"7f100b98-09ed-4fdf-b3d9-67410acc99ca",type:"CompositionRelationship"},{id:"7a29e4a5-e61a-4b70-9f4b-b66d3911839a",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"6d9285bf-dc17-4e78-af79-3fd3bb5403fe",type:"CompositionRelationship"},{id:"368a493e-c362-488e-8c7d-a7d75fae2873",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"62a633a9-3c3c-4aaf-bc2b-04e5475ebb22",type:"CompositionRelationship"},{id:"c3231118-bb1c-46f4-ba71-a15e6e7c0ebc",sourceId:"2c154ebb-2e4c-4479-b664-23154709c877",targetId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",type:"FlowRelationship"},{id:"a26e7a24-2672-422c-bb3d-265da3cf617c",sourceId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",targetId:"b4beafed-a13e-4652-a450-6afd78679f49",type:"FlowRelationship"},{id:"d66e5614-bf1a-4890-9e3c-fb1f52fdd48d",sourceId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",targetId:"1162f52d-b768-4e47-a6d9-d2d898852caf",type:"FlowRelationship"},{id:"167cea44-2e10-4214-90de-bbe6ded9b670",sourceId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",targetId:"7f100b98-09ed-4fdf-b3d9-67410acc99ca",type:"FlowRelationship"},{id:"46ef6c4e-1b84-427d-a0b0-0f1b054f87da",sourceId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",targetId:"6d9285bf-dc17-4e78-af79-3fd3bb5403fe",type:"FlowRelationship"},{id:"1f10faa3-4a4c-401c-9538-f7e90e8073b8",sourceId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",targetId:"62a633a9-3c3c-4aaf-bc2b-04e5475ebb22",type:"FlowRelationship"},{id:"563b71d1-481d-45a0-80ff-3c3f8f953a05",sourceId:"37c75b23-6ac9-45de-90e6-229d20220fed",targetId:"acf1ad76-7e87-4b75-a73f-daa04fee7505",type:"CompositionRelationship"},{id:"079d0a22-3cdb-4089-9224-c1fcec404d77",sourceId:"b4beafed-a13e-4652-a450-6afd78679f49",targetId:"e1571fc6-f6c6-4317-98cd-b5039238f711",type:"FlowRelationship"},{id:"a563fdfe-04e6-4be2-ab68-2ad697e38bc9",sourceId:"1162f52d-b768-4e47-a6d9-d2d898852caf",targetId:"e1571fc6-f6c6-4317-98cd-b5039238f711",type:"FlowRelationship"},{id:"c334bb29-11f1-411a-bfe0-7fed23f5cc68",sourceId:"7f100b98-09ed-4fdf-b3d9-67410acc99ca",targetId:"e1571fc6-f6c6-4317-98cd-b5039238f711",type:"FlowRelationship"},{id:"ee3edd63-e2a3-46ed-a683-625abe6dd125",sourceId:"6d9285bf-dc17-4e78-af79-3fd3bb5403fe",targetId:"e1571fc6-f6c6-4317-98cd-b5039238f711",type:"FlowRelationship"},{id:"9c25df02-54c4-4e6d-993b-df498b88cd8f",sourceId:"62a633a9-3c3c-4aaf-bc2b-04e5475ebb22",targetId:"e1571fc6-f6c6-4317-98cd-b5039238f711",type:"FlowRelationship"},{id:"4c8a12c8-8a55-427c-918a-106452ed11fb",sourceId:"e1571fc6-f6c6-4317-98cd-b5039238f711",targetId:"acf1ad76-7e87-4b75-a73f-daa04fee7505",type:"FlowRelationship"},{id:"1051a8c3-64da-4498-aed4-42aa4131672a",sourceId:"e1571fc6-f6c6-4317-98cd-b5039238f711",targetId:"783c5de2-33e7-47e8-a48d-f4dae34982a7",type:"FlowRelationship"},{id:"c4822d9e-2d22-4ea0-9db8-6d29a6fd307f",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"e4f5d546-56e4-4b8a-bce0-2177cb3d9275",type:"CompositionRelationship"},{id:"a9444888-4f79-4a94-8b00-f560c47ad137",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"62ff58d7-78c7-4d51-8d9a-24440a6dc655",type:"CompositionRelationship"},{id:"5b875970-7153-495f-95a9-4e4300c31c7e",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"a1feefbf-7c51-4031-ad32-b596c8bfcada",type:"CompositionRelationship"},{id:"db0cb5cc-2687-46d2-ab79-70b797305590",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"6a542bad-4354-4f56-8c30-8670841e9d18",type:"CompositionRelationship"},{id:"703ca8c2-aa38-4d42-b21a-6f4d05d7962c",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"7a4a5bee-846b-4284-9760-6823dc4d447b",type:"CompositionRelationship"},{id:"9c73f3ed-2057-4673-9d6f-06a8ad6f8faa",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"8b22d7fb-a012-4c07-a706-64370cff812a",type:"CompositionRelationship"},{id:"0834a931-060a-4f66-98b6-cf8f11d15787",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"653538de-8892-4802-9909-62f10fff9d14",type:"CompositionRelationship"},{id:"7e1a2cea-3acb-4b6c-b089-474a0429c4dc",sourceId:"6e1eecc5-e170-4280-bbe0-edd0e2d5cff1",targetId:"b057239e-ced5-4b1e-8b77-784051f29c5a",type:"CompositionRelationship"},{id:"9c60807f-6bc0-4d10-9c2c-838b6249f556",sourceId:"e4f5d546-56e4-4b8a-bce0-2177cb3d9275",targetId:"1c414f05-b0c5-42af-834b-9e60381a59e7",type:"FlowRelationship"},{id:"3273566c-356e-4318-9f96-77dbf565c320",sourceId:"1c414f05-b0c5-42af-834b-9e60381a59e7",targetId:"62ff58d7-78c7-4d51-8d9a-24440a6dc655",type:"FlowRelationship"},{id:"d1794754-ec4f-4ab1-9b34-927949400211",sourceId:"62ff58d7-78c7-4d51-8d9a-24440a6dc655",targetId:"a1feefbf-7c51-4031-ad32-b596c8bfcada",type:"FlowRelationship"},{id:"a93079de-cd67-4b12-9fd4-0dc0b7fba0e5",sourceId:"a1feefbf-7c51-4031-ad32-b596c8bfcada",targetId:"e4b6cca1-8f36-481c-ab45-e800753073d6",type:"FlowRelationship"},{id:"87fdcbd9-0502-4841-bf24-e6d0104d89f7",sourceId:"e4b6cca1-8f36-481c-ab45-e800753073d6",targetId:"6a542bad-4354-4f56-8c30-8670841e9d18",type:"FlowRelationship"},{id:"e898b197-7735-45c8-a948-8f2db222ab85",sourceId:"6a542bad-4354-4f56-8c30-8670841e9d18",targetId:"7a4a5bee-846b-4284-9760-6823dc4d447b",type:"FlowRelationship"},{id:"fd10a41b-d716-4d29-8ecd-f521141f23a0",sourceId:"e4b6cca1-8f36-481c-ab45-e800753073d6",targetId:"7a4a5bee-846b-4284-9760-6823dc4d447b",type:"FlowRelationship"},{id:"117fdb4b-a98f-4521-adce-ad725f3f0c8c",sourceId:"1c414f05-b0c5-42af-834b-9e60381a59e7",targetId:"7a4a5bee-846b-4284-9760-6823dc4d447b",type:"FlowRelationship"},{id:"23c627c2-b5ef-4e39-bdf6-62b8ba1f1035",sourceId:"7a4a5bee-846b-4284-9760-6823dc4d447b",targetId:"7f4c640f-c156-4294-87f3-f191ce9dfd18",type:"FlowRelationship"},{id:"a77bd84a-02a8-44a4-b34a-7f422418057d",sourceId:"7f4c640f-c156-4294-87f3-f191ce9dfd18",targetId:"8b22d7fb-a012-4c07-a706-64370cff812a",type:"FlowRelationship"},{id:"a84ce9a2-010c-49ff-bc70-1b68d784d537",sourceId:"7f4c640f-c156-4294-87f3-f191ce9dfd18",targetId:"653538de-8892-4802-9909-62f10fff9d14",type:"FlowRelationship"},{id:"7319f277-76e4-44ef-a4e0-3a527471d3e1",sourceId:"653538de-8892-4802-9909-62f10fff9d14",targetId:"bbca9004-a43b-4f4a-b923-4fd754204a25",type:"FlowRelationship"},{id:"2346bc96-5bf0-4c7f-9803-136f0a94c10b",sourceId:"bbca9004-a43b-4f4a-b923-4fd754204a25",targetId:"b057239e-ced5-4b1e-8b77-784051f29c5a",type:"FlowRelationship"},{id:"46f0aaf2-6a97-457c-8f09-aeae5a8626d1",sourceId:"bbca9004-a43b-4f4a-b923-4fd754204a25",targetId:"1c414f05-b0c5-42af-834b-9e60381a59e7",type:"FlowRelationship"},{id:"6c736e56-c7af-4473-9865-b2010f3f7308",sourceId:"8b22d7fb-a012-4c07-a706-64370cff812a",targetId:"bbca9004-a43b-4f4a-b923-4fd754204a25",type:"FlowRelationship"},{id:"113d6d59-429f-4115-9bd0-5e1c3df5d386",sourceId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",targetId:"43b94604-fc8d-45c7-824e-7fc7e8f1dac8",type:"RealizationRelationship"},{id:"d0325ff2-6b94-44dd-9f1e-69ae54fe54ef",sourceId:"120c041f-247d-4186-b8cc-f8c5c53af237",targetId:"550a84f6-1882-468d-ba12-df2c852e7c49",type:"RealizationRelationship"},{id:"5ffe96f7-b59b-4e22-9a0c-e7e883109eca",sourceId:"0ae9de12-16a8-488b-8f6b-85758f697d10",targetId:"58b2be12-5003-48d1-955a-3c0db8ddf5fd",type:"RealizationRelationship"},{id:"ddcced63-3d2f-45fc-944c-52296455493f",sourceId:"90497c18-09e1-47fc-912f-c20555a8a828",targetId:"da283651-0913-4990-941d-c083ad43dbd4",type:"RealizationRelationship"},{id:"accb6a12-4dd2-4d2b-ba21-7ff2dd55cb42",sourceId:"c735dc18-589e-4554-9dd2-b2e4b2f26362",targetId:"5d6e961f-2129-4bbc-ae88-e1b213c1304c",type:"RealizationRelationship"},{id:"928041fa-c58f-432c-91e2-a613f2381bca",sourceId:"90497c18-09e1-47fc-912f-c20555a8a828",targetId:"3892cb85-24db-4ef1-9ae9-f613044fafe7",type:"RealizationRelationship"},{id:"2b660bac-4c71-4f3d-8eab-a9fcaeb6487a",sourceId:"0ae9de12-16a8-488b-8f6b-85758f697d10",targetId:"dd1ca232-3b29-4be4-8827-2fa2fe953da4",type:"RealizationRelationship"},{id:"b89e6dd3-46cc-4edd-a3ac-fd7b6e360f5f",sourceId:"0ae9de12-16a8-488b-8f6b-85758f697d10",targetId:"35c91d46-1b80-40de-987b-5a2e0ea33c1a",type:"RealizationRelationship"},{id:"355c95be-175b-4890-b463-e8cc0e06bdb3",sourceId:"0ae9de12-16a8-488b-8f6b-85758f697d10",targetId:"8e66e314-8b0a-42b0-b88f-04e72d5d10e1",type:"RealizationRelationship"},{id:"0ae43dab-2d05-44ee-9ce1-211df1998a0c",sourceId:"120c041f-247d-4186-b8cc-f8c5c53af237",targetId:"58029861-f9ff-4b5d-a45f-97eb4b6ca464",type:"RealizationRelationship"},{id:"b2fff53b-2eb1-469e-87b7-efd8a1ddf3a3",sourceId:"120c041f-247d-4186-b8cc-f8c5c53af237",targetId:"ee7a3bb4-13a2-4d36-9de0-704ddd9efe3c",type:"RealizationRelationship"},{id:"5142bbd1-d069-487d-a301-43f29e4db5b5",sourceId:"320fde44-1576-48b8-8b71-49d8c0d90007",targetId:"15abe46c-2e4d-48fc-93ed-4432f188d618",type:"RealizationRelationship"},{id:"48c78aae-4b0b-4d02-82f9-14156df69b1b",sourceId:"320fde44-1576-48b8-8b71-49d8c0d90007",targetId:"3e4e405a-111f-4788-9ca5-9d5d913e22a6",type:"RealizationRelationship"},{id:"d606a284-8a19-4950-81ef-d1b456f1ded8",sourceId:"320fde44-1576-48b8-8b71-49d8c0d90007",targetId:"e3b81542-6f61-46d3-9f53-de026dfaf0e0",type:"RealizationRelationship"},{id:"8994b4cc-b993-4476-bd82-cef0841b8509",sourceId:"320fde44-1576-48b8-8b71-49d8c0d90007",targetId:"5b94f126-cf63-4645-bb01-13c5112eeec1",type:"RealizationRelationship"},{id:"3574858e-fc3a-4232-8343-52a540c27dda",sourceId:"550a84f6-1882-468d-ba12-df2c852e7c49",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"7097810a-8894-4580-8cc6-9be6a8f4919b",sourceId:"58b2be12-5003-48d1-955a-3c0db8ddf5fd",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"60f3a7c7-64f4-4b5b-b561-1a087392048b",sourceId:"da283651-0913-4990-941d-c083ad43dbd4",targetId:"c21a5124-c51e-40d7-a37a-51a6fcb876af",type:"ServingRelationship"},{id:"dce93dab-0989-4918-b47e-4dc0acb3ca51",sourceId:"58029861-f9ff-4b5d-a45f-97eb4b6ca464",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"dfc8318c-ae06-4d6a-b3e8-4ecb6958722f",sourceId:"ee7a3bb4-13a2-4d36-9de0-704ddd9efe3c",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"aeb47cdd-9f70-406d-a3c9-4e8dcdc244e8",sourceId:"dd1ca232-3b29-4be4-8827-2fa2fe953da4",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"c8275e80-478f-4e40-a480-510cd651a511",sourceId:"35c91d46-1b80-40de-987b-5a2e0ea33c1a",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"36f23ef2-8b0f-49a8-be15-341d559e5200",sourceId:"8e66e314-8b0a-42b0-b88f-04e72d5d10e1",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"1a8f3e22-bfcc-4ec2-ad2d-fc5a6ce20491",sourceId:"3892cb85-24db-4ef1-9ae9-f613044fafe7",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"a2a8f017-7715-4423-add8-0a7279a61861",sourceId:"5d6e961f-2129-4bbc-ae88-e1b213c1304c",targetId:"320fde44-1576-48b8-8b71-49d8c0d90007",type:"ServingRelationship"},{id:"9ac247bf-bd37-49c7-9fc2-eb8721195558",sourceId:"44453148-5933-4d29-ad10-43f89f2799a6",targetId:"990a5863-b6d1-497e-ac54-862e6990c5d3",type:"AssignmentRelationship"},{id:"b8424780-c357-4b9f-9dd5-5564a29a9c05",sourceId:"44453148-5933-4d29-ad10-43f89f2799a6",targetId:"43e7d7a5-282c-41c3-afb4-55474a1f7e03",type:"AssignmentRelationship"},{id:"a548ce71-7a79-46f9-bbe4-de8aae3be031",sourceId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",targetId:"990a5863-b6d1-497e-ac54-862e6990c5d3",type:"AssignmentRelationship"},{id:"6f416292-c1cb-4573-a697-cfc652c6ef6e",sourceId:"23ff5167-ad0c-4154-b032-c40700abe721",targetId:"43e7d7a5-282c-41c3-afb4-55474a1f7e03",type:"AssignmentRelationship"},{id:"24ade656-6a44-4261-9fea-f192b3ef0a1b",sourceId:"44453148-5933-4d29-ad10-43f89f2799a6",targetId:"2c314480-023f-4388-ad31-b37839c95960",type:"AssignmentRelationship"},{id:"8ed88355-f1fc-42c7-b5af-161df1a5267c",sourceId:"8e714571-8cd9-4056-bc5d-4cd702bc66f4",targetId:"2c314480-023f-4388-ad31-b37839c95960",type:"AssignmentRelationship"},{id:"20bd422e-183c-466b-bf56-8a5eb76a2faa",sourceId:"8e714571-8cd9-4056-bc5d-4cd702bc66f4",targetId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",type:"ServingRelationship"},{id:"8d4ae48a-2c6e-4bfc-a111-e4a4df700bb9",sourceId:"73bc998f-427d-491d-a1f3-ef29f1837209",targetId:"e44b93c1-18f3-482f-84fe-5d8a08801a59",type:"AggregationRelationship"},{id:"d2e81abc-8211-4be1-b70b-554c5024fe58",sourceId:"82ec60a4-7b94-4476-ac6d-f845e9a2cb6a",targetId:"e44b93c1-18f3-482f-84fe-5d8a08801a59",type:"AssignmentRelationship"},{id:"a154ec6d-2c67-4451-816a-843181ad8ae2",sourceId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",targetId:"73bc998f-427d-491d-a1f3-ef29f1837209",type:"FlowRelationship"},{id:"7f5b4826-feaf-405e-85fd-f209c4300fa2",sourceId:"96b30912-0889-40a4-83a4-9584923300ab",targetId:"41d20dc0-9a9d-4cf6-9b71-22311798b981",type:"AssignmentRelationship"},{id:"13aa337d-9b1f-40ca-b316-5bb0f4e3eaad",sourceId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",targetId:"41d20dc0-9a9d-4cf6-9b71-22311798b981",type:"ServingRelationship"},{id:"2ef6d2df-4798-4f95-9e0b-11afe7bf560d",sourceId:"7a32de96-b607-4b09-836d-3a7753387d8d",targetId:"0048346a-9901-4aec-85c1-7ebeac77431b",type:"AssignmentRelationship"},{id:"b4e56209-0833-4048-a828-dd54ae999fbb",sourceId:"0df7b2cc-f0ce-4000-99b6-a2d99a60fc91",targetId:"0048346a-9901-4aec-85c1-7ebeac77431b",type:"ServingRelationship"}],y=[{id:"7bf79ad1-5dfe-46a9-a6c4-bbe50be37a9f",name:"Holistic View",viewpoint:""},{id:"5f2140a2-fdcc-435b-afcf-b3b21bddf0e0",name:"Manage Vending Machine",viewpoint:"business_process_cooperation"},{id:"b0027718-f8cc-49aa-9140-4977201c756e",name:"Buy Goods from Vending Machine",viewpoint:"business_process_cooperation"},{id:"9dac4493-0bf9-49b5-8939-3e26790b4755",name:"Application View",viewpoint:"application_cooperation"},{id:"6eb7390d-873c-4ffd-affb-118f1963443b",name:"Technology View",viewpoint:"technology"}],I={identifier:e,archimateId:a,name:d,description:c,formats:i,source:f,sourceFile:t,sourceFormat:b,timestamp:o,tags:n,duplicates:s,language:r,elements:p,relationships:l,views:y};export{a as archimateId,I as default,c as description,s as duplicates,p as elements,i as formats,e as identifier,r as language,d as name,l as relationships,f as source,t as sourceFile,b as sourceFormat,n as tags,o as timestamp,y as views};
