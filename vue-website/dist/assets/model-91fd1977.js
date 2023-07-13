const e="https://me.big.tuwien.ac.at/EAModelSet/id-36b3539fd2ba491ebe6261a883f3a4f1",d="id-36b3539fd2ba491ebe6261a883f3a4f1",a="Docker networking",c="",i=["XML","CSV","JSON","ARCHIMATE"],f="GitHub",b="raw-data/github/archimate/docker-networking.archimate",t="ARCHIMATE",o="29-06-2023 09:31:15",n=[],r=[],s="en",l=[{id:"id-01f3ee5f55da42beb11cf7946f89bee4",name:"Swarm service 1",type:"ApplicationService",layer:"application"},{id:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",name:"(default) bridge (e.g. 172.x.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-798accac014d4049853ee408b32e38c8",name:"host",type:"CommunicationNetwork",layer:"technology"},{id:"id-31c4b2a4d41a419c96fae46404723ae1",name:"ipvlan",type:"CommunicationNetwork",layer:"technology"},{id:"id-0a52855e64c74b47a085090a27913e72",name:"macvlan",type:"CommunicationNetwork",layer:"technology"},{id:"id-fb93e4bdf51c439b803a3b26daa04f8b",name:"none / custom network driver",type:"CommunicationNetwork",layer:"technology"},{id:"id-eb16addab9ca4e1f81d794971f3ab097",name:"user-defined bridge (e.g. 172.x.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-33f121aae62c44a79296a611c6f64453",name:"docker_gwbridge (e.g. 172.x.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-c67b0f2a43154529840fcd86f1f8816f",name:"ingress (e.g. 10.x.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-c0933ae1499f42acbfbffa06d2c87e6c",name:"user-defined overlay",type:"CommunicationNetwork",layer:"technology"},{id:"id-7ebd5d37bdf94650b610e574cccde65c",name:"Host 1",type:"Device",layer:"technology"},{id:"id-1f2c1e38650849daa11793ff50c71fb8",name:"Docker daemon",type:"SystemSoftware",layer:"technology"},{id:"id-3fb837395f89463bbd2a21be7ab58634",name:"Network interface",type:"Equipment",layer:"technology"},{id:"id-10e623fe19734a1fad2795e330a0f1b8",name:"Standalone container 1",type:"Node",layer:"technology"},{id:"id-f22ba1f882064226a86c9062913b2adc",name:"Standalone container 2",type:"Node",layer:"technology"},{id:"id-8c53a936b87c488da7790fc581417289",name:"Standalone container 3",type:"Node",layer:"technology"},{id:"id-5804f99d56b9450c99f51b094dcf91b4",name:"Service container 4",type:"Node",layer:"technology"},{id:"id-2cc30487144a4f17ab8c9cae2c1c9b92",name:"IPv4 / IPv6 layer",type:"TechnologyInterface",layer:"technology"},{id:"id-e0a768b84ad84968854f8fedf861d4b2",name:"MAC address 2",type:"TechnologyInterface",layer:"technology"},{id:"id-93b8d1fc13e04c2cb314b27a3f6514c9",name:"Default MAC address",type:"TechnologyInterface",layer:"technology"},{id:"id-b52c83f72d644dd08e9ddd469b82d56f",name:"[swarm] Container network discovery on TCP+UDP:7946",type:"TechnologyInterface",layer:"technology"},{id:"id-ad98329e5d1d416ea03ddcb7e4d82734",name:"[swarm] Overlay network on UDP:4789",type:"TechnologyInterface",layer:"technology"},{id:"id-062fb8b25be44dc6ada6deecbe16013e",name:"user-defined overlay",type:"CommunicationNetwork",layer:"technology"},{id:"id-9d1cda529e644725b6f02f18dc8280bc",name:"ingress (e.g. 10.x.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-2ca572e4576243a2b94d7a001175c023",name:"docker_gwbridge (e.g. 172.x.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-0e9b3886625f457a84c388fe15fe4aa3",name:"Host 2",type:"Node",layer:"technology"},{id:"id-79716bf447214ac5afd64732bfdf1bdb",name:"Network interface",type:"Equipment",layer:"technology"},{id:"id-8756b769f13a4059a337f822eaee75fe",name:"Service container 1",type:"Node",layer:"technology"},{id:"id-adf30559513d4f1f93cfb360f538e4b1",name:"Docker daemon",type:"SystemSoftware",layer:"technology"},{id:"id-1e95c08b2f4e4f4e91e4088ec64b9390",name:"[swarm] Container network discovery on TCP+UDP:7946",type:"TechnologyInterface",layer:"technology"},{id:"id-3797acce9a7b4d3e9df13b62ffaee1e6",name:"[swarm] Overlay network on UDP:4789",type:"TechnologyInterface",layer:"technology"},{id:"id-7b359bfc8fb14cb3a739dabab95f2eff",name:"overlay",type:"CommunicationNetwork",layer:"technology"},{id:"id-fe02ca83e8894a42a3cea3dadd79e739",name:"bridge (172.17.x.x)",type:"CommunicationNetwork",layer:"technology"},{id:"id-dc15f1d120874e73bb2f77c978abc4d3",name:"Automatic DNS resolution between containers",type:"TechnologyService",layer:"technology"},{id:"id-8dab3a3a34d1477d86e4070a08396d88",name:"user-defined bridge",type:"CommunicationNetwork",layer:"technology"},{id:"id-267d1c5cf30741d2aa4d8303eddfd45b",name:"Attach and detach container from network on the fly",type:"TechnologyService",layer:"technology"},{id:"id-06392b3d52ea4986b4898d124172dfc3",name:"Load balancing",type:"TechnologyService",layer:"technology"},{id:"id-2e1833e156a44cfcbe0c56c7d532f980",name:"Physical network infrastructure",type:"CommunicationNetwork",layer:"technology"},{id:"id-c06cdec6439444bfb549e5296a88e518",name:"Swarm",type:"Grouping",layer:"other"}],p=[{id:"id-20f2bec751054f3e89989bb0f0bf8470",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-10e623fe19734a1fad2795e330a0f1b8",type:"CompositionRelationship"},{id:"id-d3ad484ce19c4408931e93f412f9ae29",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-f22ba1f882064226a86c9062913b2adc",type:"CompositionRelationship"},{id:"id-eb03d9455e4b409d98fcfda69979391c",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-8c53a936b87c488da7790fc581417289",type:"CompositionRelationship"},{id:"id-fe87e99034034223a5354df1a3858f16",sourceId:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-e88065f41da24bd0bf487811f98204bf",sourceId:"id-10e623fe19734a1fad2795e330a0f1b8",targetId:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",type:"FlowRelationship"},{id:"id-6be21616671f432ab35fea167f290d5e",sourceId:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",targetId:"id-f22ba1f882064226a86c9062913b2adc",type:"FlowRelationship"},{id:"id-69243b048aa84209b6a9a9bb69063eec",sourceId:"id-f22ba1f882064226a86c9062913b2adc",targetId:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",type:"FlowRelationship"},{id:"id-b765bf05592a4466ba01dc2d7c27c407",sourceId:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",targetId:"id-10e623fe19734a1fad2795e330a0f1b8",type:"FlowRelationship"},{id:"id-b70db87f012d49859dda5d5fbe5287f9",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-3fb837395f89463bbd2a21be7ab58634",type:"CompositionRelationship"},{id:"id-cd68267f843d456faaaccc1e2605e3e0",sourceId:"id-798accac014d4049853ee408b32e38c8",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-adb9300f8a8748fc919b9ee2ce21dfa7",sourceId:"id-8c53a936b87c488da7790fc581417289",targetId:"id-798accac014d4049853ee408b32e38c8",type:"FlowRelationship"},{id:"id-3c7bc0c41d55411fa850a83e1a626299",sourceId:"id-798accac014d4049853ee408b32e38c8",targetId:"id-3fb837395f89463bbd2a21be7ab58634",type:"FlowRelationship"},{id:"id-1b2239a92b2a48cfb84e96735f6d537f",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-798accac014d4049853ee408b32e38c8",type:"FlowRelationship"},{id:"id-7ba7bf15a4164fd0a982d24fc39529eb",sourceId:"id-798accac014d4049853ee408b32e38c8",targetId:"id-8c53a936b87c488da7790fc581417289",type:"FlowRelationship"},{id:"id-3470ff25c4394b129820fdac727b00d1",sourceId:"id-93b8d1fc13e04c2cb314b27a3f6514c9",targetId:"id-2e1833e156a44cfcbe0c56c7d532f980",type:"FlowRelationship"},{id:"id-2c34640fb90c468fa4a5e7dc3fe04f4e",sourceId:"id-2e1833e156a44cfcbe0c56c7d532f980",targetId:"id-93b8d1fc13e04c2cb314b27a3f6514c9",type:"FlowRelationship"},{id:"id-a3077c0b47c142dd8ac6fb0994ccd6f5",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-1f2c1e38650849daa11793ff50c71fb8",type:"CompositionRelationship"},{id:"id-07f51d40f8ab476e840a60ce0cbc5db4",sourceId:"id-c06cdec6439444bfb549e5296a88e518",targetId:"id-0e9b3886625f457a84c388fe15fe4aa3",type:"AggregationRelationship"},{id:"id-ba55835d2f0b49c4bcd8f0d1b9a9756c",sourceId:"id-c06cdec6439444bfb549e5296a88e518",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AggregationRelationship"},{id:"id-3f02874b455b4a12b562da30bd09a54f",sourceId:"id-0e9b3886625f457a84c388fe15fe4aa3",targetId:"id-79716bf447214ac5afd64732bfdf1bdb",type:"CompositionRelationship"},{id:"id-2069bd1ec2794512b5afffb0d9189efb",sourceId:"id-2e1833e156a44cfcbe0c56c7d532f980",targetId:"id-1e95c08b2f4e4f4e91e4088ec64b9390",type:"FlowRelationship"},{id:"id-715509cf1a1e403aa478296ca2db5b5c",sourceId:"id-1e95c08b2f4e4f4e91e4088ec64b9390",targetId:"id-2e1833e156a44cfcbe0c56c7d532f980",type:"FlowRelationship"},{id:"id-51252c4c5e2f4c7db8c4ab6e6db23aa5",sourceId:"id-062fb8b25be44dc6ada6deecbe16013e",targetId:"id-0e9b3886625f457a84c388fe15fe4aa3",type:"AssignmentRelationship"},{id:"id-dd4b3c6ea59e480a94a03c2cdb98585d",sourceId:"id-c0933ae1499f42acbfbffa06d2c87e6c",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-5fd9b76808934c94912f9fc36889998e",sourceId:"id-0e9b3886625f457a84c388fe15fe4aa3",targetId:"id-8756b769f13a4059a337f822eaee75fe",type:"CompositionRelationship"},{id:"id-1161bd777bb949d9b3d7450db33da577",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-5804f99d56b9450c99f51b094dcf91b4",type:"CompositionRelationship"},{id:"id-e4abdac6ccb2463688b42500b9a40c71",sourceId:"id-5804f99d56b9450c99f51b094dcf91b4",targetId:"id-01f3ee5f55da42beb11cf7946f89bee4",type:"RealizationRelationship"},{id:"id-9d8071cdc6644e18ae7dbf315bc24a02",sourceId:"id-8756b769f13a4059a337f822eaee75fe",targetId:"id-01f3ee5f55da42beb11cf7946f89bee4",type:"RealizationRelationship"},{id:"id-25dd3a3b96204ba7874f3709f5f15ea2",sourceId:"id-0e9b3886625f457a84c388fe15fe4aa3",targetId:"id-adf30559513d4f1f93cfb360f538e4b1",type:"CompositionRelationship"},{id:"id-c9754a9687904c029399ddef91513a07",sourceId:"id-adf30559513d4f1f93cfb360f538e4b1",targetId:"id-062fb8b25be44dc6ada6deecbe16013e",type:"FlowRelationship"},{id:"id-7ad0f95f1bda4b608b3179282922c54e",sourceId:"id-062fb8b25be44dc6ada6deecbe16013e",targetId:"id-adf30559513d4f1f93cfb360f538e4b1",type:"FlowRelationship"},{id:"id-b9f06d22d16e4d2898ca94d825c6afd0",sourceId:"id-1f2c1e38650849daa11793ff50c71fb8",targetId:"id-c0933ae1499f42acbfbffa06d2c87e6c",type:"FlowRelationship"},{id:"id-6f9e064b25a44d5487c45035e9445135",sourceId:"id-c0933ae1499f42acbfbffa06d2c87e6c",targetId:"id-1f2c1e38650849daa11793ff50c71fb8",type:"FlowRelationship"},{id:"id-878bcaaab35e4364aa6c1fb5a7224390",sourceId:"id-c0933ae1499f42acbfbffa06d2c87e6c",targetId:"id-062fb8b25be44dc6ada6deecbe16013e",type:"FlowRelationship"},{id:"id-998d5c7db63e400f9b917270699d1c70",sourceId:"id-062fb8b25be44dc6ada6deecbe16013e",targetId:"id-c0933ae1499f42acbfbffa06d2c87e6c",type:"FlowRelationship"},{id:"id-1ef937a55eaf4b9098c4f2ceb3bc4344",sourceId:"id-5804f99d56b9450c99f51b094dcf91b4",targetId:"id-c0933ae1499f42acbfbffa06d2c87e6c",type:"FlowRelationship"},{id:"id-4d5b3b137107445ebdf4e4bc2e191000",sourceId:"id-c0933ae1499f42acbfbffa06d2c87e6c",targetId:"id-5804f99d56b9450c99f51b094dcf91b4",type:"FlowRelationship"},{id:"id-e20ab4ca9f2b4409ae16750c639ce293",sourceId:"id-062fb8b25be44dc6ada6deecbe16013e",targetId:"id-8756b769f13a4059a337f822eaee75fe",type:"FlowRelationship"},{id:"id-cd7ee20acb664cd88c2f7cc531249bbd",sourceId:"id-8756b769f13a4059a337f822eaee75fe",targetId:"id-062fb8b25be44dc6ada6deecbe16013e",type:"FlowRelationship"},{id:"id-0a9c604c20f54798b7e5cc47dd8bf14d",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-2cc30487144a4f17ab8c9cae2c1c9b92",type:"CompositionRelationship"},{id:"id-268e40a1b41a4e86b052a02863103a77",sourceId:"id-2cc30487144a4f17ab8c9cae2c1c9b92",targetId:"id-3fb837395f89463bbd2a21be7ab58634",type:"FlowRelationship"},{id:"id-8330a91d5f7147debd5da1e7ce3e03bf",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-2cc30487144a4f17ab8c9cae2c1c9b92",type:"FlowRelationship"},{id:"id-416fb63b0cca417d9cefb64a1ead3d00",sourceId:"id-31c4b2a4d41a419c96fae46404723ae1",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-7ce0f5f639844e7a8e767b6217887fe5",sourceId:"id-2cc30487144a4f17ab8c9cae2c1c9b92",targetId:"id-31c4b2a4d41a419c96fae46404723ae1",type:"FlowRelationship"},{id:"id-7f9d8dffc18642eda5bd2893390559ba",sourceId:"id-31c4b2a4d41a419c96fae46404723ae1",targetId:"id-2cc30487144a4f17ab8c9cae2c1c9b92",type:"FlowRelationship"},{id:"id-d47f715052f743d19ee53a1d6b235059",sourceId:"id-0a52855e64c74b47a085090a27913e72",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-503378cd47254ebdbf1eab87e4c12dc2",sourceId:"id-e0a768b84ad84968854f8fedf861d4b2",targetId:"id-0a52855e64c74b47a085090a27913e72",type:"FlowRelationship"},{id:"id-317c4d88fcea4dd6a1fbffdf3b3ccbfb",sourceId:"id-0a52855e64c74b47a085090a27913e72",targetId:"id-e0a768b84ad84968854f8fedf861d4b2",type:"FlowRelationship"},{id:"id-9bd69c5f3caf48f7a61e9254828347eb",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-e0a768b84ad84968854f8fedf861d4b2",type:"CompositionRelationship"},{id:"id-7f40a2dd0b0c4959b0ca9973cc357805",sourceId:"id-2e1833e156a44cfcbe0c56c7d532f980",targetId:"id-e0a768b84ad84968854f8fedf861d4b2",type:"FlowRelationship"},{id:"id-6d9ab98c66ee4f07b18af2a65a53af52",sourceId:"id-e0a768b84ad84968854f8fedf861d4b2",targetId:"id-2e1833e156a44cfcbe0c56c7d532f980",type:"FlowRelationship"},{id:"id-29d15436c9ac43e0bfa6c3957bd6cfff",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-93b8d1fc13e04c2cb314b27a3f6514c9",type:"CompositionRelationship"},{id:"id-3365c7245e3043b5a9a56706db955369",sourceId:"id-fb93e4bdf51c439b803a3b26daa04f8b",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-77ff996eea87414e9321e2a4bc09d80d",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-7b359bfc8fb14cb3a739dabab95f2eff",type:"SpecializationRelationship"},{id:"id-98309a946a104ea285a6f0b7d150380d",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-16cc2fb79e954f539c9e9cb541b43579",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-c06cdec6439444bfb549e5296a88e518",type:"ServingRelationship"},{id:"id-6e37897735f44a3d8020d5f89e76bbe9",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-c06cdec6439444bfb549e5296a88e518",type:"ServingRelationship"},{id:"id-b69cd87d6980435e94815b2b24c0b4b7",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-0e9b3886625f457a84c388fe15fe4aa3",type:"AssignmentRelationship"},{id:"id-083b6935575b47c399fe10a9073a5586",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-7b359bfc8fb14cb3a739dabab95f2eff",type:"SpecializationRelationship"},{id:"id-8fdce8b507084d808fd2d1f72b84ba84",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-9d1cda529e644725b6f02f18dc8280bc",type:"FlowRelationship"},{id:"id-16064937c67b485780fecc542d60fec0",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-c67b0f2a43154529840fcd86f1f8816f",type:"FlowRelationship"},{id:"id-3ecc0ecc2b9142e6957776c6a2584bf5",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-06392b3d52ea4986b4898d124172dfc3",type:"RealizationRelationship"},{id:"id-31435c6872ef4c31892010c7ae2f3fc5",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-06392b3d52ea4986b4898d124172dfc3",type:"RealizationRelationship"},{id:"id-b350f7fa949a4baa8f779c95298aa3a5",sourceId:"id-33f121aae62c44a79296a611c6f64453",targetId:"id-fe02ca83e8894a42a3cea3dadd79e739",type:"SpecializationRelationship"},{id:"id-3cc63d27fc8a41e392d6d5ea309b66fe",sourceId:"id-33f121aae62c44a79296a611c6f64453",targetId:"id-7ebd5d37bdf94650b610e574cccde65c",type:"AssignmentRelationship"},{id:"id-6aab6d7bcd3d41f282d467320b9585c8",sourceId:"id-33f121aae62c44a79296a611c6f64453",targetId:"id-3fb837395f89463bbd2a21be7ab58634",type:"FlowRelationship"},{id:"id-5f3fe14c86e0496b85fe2a17ae13257c",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-33f121aae62c44a79296a611c6f64453",type:"FlowRelationship"},{id:"id-181a2538b1a648be9430b1cae0c8955c",sourceId:"id-1f2c1e38650849daa11793ff50c71fb8",targetId:"id-33f121aae62c44a79296a611c6f64453",type:"FlowRelationship"},{id:"id-fa4b9de376f5418e93e2093fa306a243",sourceId:"id-33f121aae62c44a79296a611c6f64453",targetId:"id-1f2c1e38650849daa11793ff50c71fb8",type:"FlowRelationship"},{id:"id-1a64f371714840d6a6294bfe5aa18b9c",sourceId:"id-c0933ae1499f42acbfbffa06d2c87e6c",targetId:"id-7b359bfc8fb14cb3a739dabab95f2eff",type:"SpecializationRelationship"},{id:"id-9815618612114a9ca7882037cd1d1b95",sourceId:"id-062fb8b25be44dc6ada6deecbe16013e",targetId:"id-7b359bfc8fb14cb3a739dabab95f2eff",type:"SpecializationRelationship"},{id:"id-a7571047f20248bf8521bdccdb95eec3",sourceId:"id-1546b9cc9f7c4441b11d75f7fa0fcb0b",targetId:"id-fe02ca83e8894a42a3cea3dadd79e739",type:"SpecializationRelationship"},{id:"id-24c36886a1c3401fbd024ade922a2311",sourceId:"id-8dab3a3a34d1477d86e4070a08396d88",targetId:"id-fe02ca83e8894a42a3cea3dadd79e739",type:"SpecializationRelationship"},{id:"id-bcbb05667bd34c8fa9dc391db5c6ddec",sourceId:"id-8dab3a3a34d1477d86e4070a08396d88",targetId:"id-dc15f1d120874e73bb2f77c978abc4d3",type:"RealizationRelationship"},{id:"id-1fe09ebcb7a6411198bc45d943383178",sourceId:"id-eb16addab9ca4e1f81d794971f3ab097",targetId:"id-8dab3a3a34d1477d86e4070a08396d88",type:"SpecializationRelationship"},{id:"id-ad4f527a29cc4944a7d13376b2d8185d",sourceId:"id-8dab3a3a34d1477d86e4070a08396d88",targetId:"id-267d1c5cf30741d2aa4d8303eddfd45b",type:"RealizationRelationship"},{id:"id-38c208b6196343bba7fb49a2dd9e4573",sourceId:"id-8756b769f13a4059a337f822eaee75fe",targetId:"id-9d1cda529e644725b6f02f18dc8280bc",type:"FlowRelationship"},{id:"id-5f631e89bb6a41a69208694ac64ccea9",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-8756b769f13a4059a337f822eaee75fe",type:"FlowRelationship"},{id:"id-d5519af0baa7449ba5a54e8bff9b6f65",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-5804f99d56b9450c99f51b094dcf91b4",type:"FlowRelationship"},{id:"id-17cd384373f444f6a61f4b0a6ee77b07",sourceId:"id-5804f99d56b9450c99f51b094dcf91b4",targetId:"id-c67b0f2a43154529840fcd86f1f8816f",type:"FlowRelationship"},{id:"id-edd90893fc6b45f0a8dff8eac3947ae6",sourceId:"id-33f121aae62c44a79296a611c6f64453",targetId:"id-c67b0f2a43154529840fcd86f1f8816f",type:"FlowRelationship"},{id:"id-ff6e48cf6941402f84aabf9e8512c771",sourceId:"id-c67b0f2a43154529840fcd86f1f8816f",targetId:"id-33f121aae62c44a79296a611c6f64453",type:"FlowRelationship"},{id:"id-418a22fd9d5949338608e27012c5ac36",sourceId:"id-33f121aae62c44a79296a611c6f64453",targetId:"id-c0933ae1499f42acbfbffa06d2c87e6c",type:"FlowRelationship"},{id:"id-f69fed977ede426eaaea434decf6629e",sourceId:"id-c0933ae1499f42acbfbffa06d2c87e6c",targetId:"id-33f121aae62c44a79296a611c6f64453",type:"FlowRelationship"},{id:"id-cf26ea4e1b6a480ea522e77dfbb1b5f7",sourceId:"id-2ca572e4576243a2b94d7a001175c023",targetId:"id-9d1cda529e644725b6f02f18dc8280bc",type:"FlowRelationship"},{id:"id-2692154f45294fa59dccdb62a7a01677",sourceId:"id-9d1cda529e644725b6f02f18dc8280bc",targetId:"id-2ca572e4576243a2b94d7a001175c023",type:"FlowRelationship"},{id:"id-4c5a8dcb1aa04aaf9704e009b279bb31",sourceId:"id-2ca572e4576243a2b94d7a001175c023",targetId:"id-79716bf447214ac5afd64732bfdf1bdb",type:"FlowRelationship"},{id:"id-3b17bd60ea70477ea35d55d63d145470",sourceId:"id-79716bf447214ac5afd64732bfdf1bdb",targetId:"id-2ca572e4576243a2b94d7a001175c023",type:"FlowRelationship"},{id:"id-1aff4367f78c438d9177dca9dc2416a5",sourceId:"id-2ca572e4576243a2b94d7a001175c023",targetId:"id-062fb8b25be44dc6ada6deecbe16013e",type:"FlowRelationship"},{id:"id-c9533e5d33e0448c9a25f2e0b7f708ee",sourceId:"id-062fb8b25be44dc6ada6deecbe16013e",targetId:"id-2ca572e4576243a2b94d7a001175c023",type:"FlowRelationship"},{id:"id-9092d7e8a06446cb8e11b586d9e45dc1",sourceId:"id-b52c83f72d644dd08e9ddd469b82d56f",targetId:"id-3fb837395f89463bbd2a21be7ab58634",type:"FlowRelationship"},{id:"id-3e7a199c4b1f4d47a881bc2a3d1f3587",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-b52c83f72d644dd08e9ddd469b82d56f",type:"FlowRelationship"},{id:"id-58f4e1849b9d4ff9a268e521e305444d",sourceId:"id-3fb837395f89463bbd2a21be7ab58634",targetId:"id-ad98329e5d1d416ea03ddcb7e4d82734",type:"FlowRelationship"},{id:"id-de82b753cddb419ca18389c781079b06",sourceId:"id-ad98329e5d1d416ea03ddcb7e4d82734",targetId:"id-3fb837395f89463bbd2a21be7ab58634",type:"FlowRelationship"},{id:"id-038e52b7e36b4230b4e475c506e860ad",sourceId:"id-ad98329e5d1d416ea03ddcb7e4d82734",targetId:"id-2e1833e156a44cfcbe0c56c7d532f980",type:"FlowRelationship"},{id:"id-4782155e43904625bc4012a261f7e777",sourceId:"id-2e1833e156a44cfcbe0c56c7d532f980",targetId:"id-ad98329e5d1d416ea03ddcb7e4d82734",type:"FlowRelationship"},{id:"id-1b32dc2da6fb4580a65eafb16815ae20",sourceId:"id-2e1833e156a44cfcbe0c56c7d532f980",targetId:"id-b52c83f72d644dd08e9ddd469b82d56f",type:"FlowRelationship"},{id:"id-11b54edcf13c492ba7d1ef4d377d874e",sourceId:"id-b52c83f72d644dd08e9ddd469b82d56f",targetId:"id-2e1833e156a44cfcbe0c56c7d532f980",type:"FlowRelationship"},{id:"id-e19d48ee3a4e40abac7f837af8e73fb0",sourceId:"id-79716bf447214ac5afd64732bfdf1bdb",targetId:"id-3797acce9a7b4d3e9df13b62ffaee1e6",type:"FlowRelationship"},{id:"id-03efb202477f437694cf88da0399b13b",sourceId:"id-3797acce9a7b4d3e9df13b62ffaee1e6",targetId:"id-79716bf447214ac5afd64732bfdf1bdb",type:"FlowRelationship"},{id:"id-2efec5eb0c4247f6a9a81323d2ad1152",sourceId:"id-1e95c08b2f4e4f4e91e4088ec64b9390",targetId:"id-79716bf447214ac5afd64732bfdf1bdb",type:"FlowRelationship"},{id:"id-4eca70da2dfc4cf0859af07bfa4880eb",sourceId:"id-79716bf447214ac5afd64732bfdf1bdb",targetId:"id-1e95c08b2f4e4f4e91e4088ec64b9390",type:"FlowRelationship"},{id:"id-7e97061f228348d7b5eaad2e11657935",sourceId:"id-3797acce9a7b4d3e9df13b62ffaee1e6",targetId:"id-2e1833e156a44cfcbe0c56c7d532f980",type:"FlowRelationship"},{id:"id-80648729d6764b66b475d0bf73cb757a",sourceId:"id-2e1833e156a44cfcbe0c56c7d532f980",targetId:"id-3797acce9a7b4d3e9df13b62ffaee1e6",type:"FlowRelationship"},{id:"id-ad39cff6a90347b594d5a26bdbc99a42",sourceId:"id-0e9b3886625f457a84c388fe15fe4aa3",targetId:"id-3797acce9a7b4d3e9df13b62ffaee1e6",type:"AggregationRelationship"},{id:"id-19faaaceab414720a56de7c5b12619ef",sourceId:"id-0e9b3886625f457a84c388fe15fe4aa3",targetId:"id-1e95c08b2f4e4f4e91e4088ec64b9390",type:"AggregationRelationship"},{id:"id-8a22ed3131224d8fbd21f565b1dfb72f",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-ad98329e5d1d416ea03ddcb7e4d82734",type:"AggregationRelationship"},{id:"id-9f413fe7a2864448adf623d3dc43ad63",sourceId:"id-7ebd5d37bdf94650b610e574cccde65c",targetId:"id-b52c83f72d644dd08e9ddd469b82d56f",type:"AggregationRelationship"}],y=[{id:"id-214f9da5f02240cab53def71afababc4",name:"Default View",viewpoint:""},{id:"id-17a32de9ec1b4312b9e937af44a304c7",name:"Swarm networking",viewpoint:""}],I={identifier:e,archimateId:d,name:a,description:c,formats:i,source:f,sourceFile:b,sourceFormat:t,timestamp:o,tags:n,duplicates:r,language:s,elements:l,relationships:p,views:y};export{d as archimateId,I as default,c as description,r as duplicates,l as elements,i as formats,e as identifier,s as language,a as name,p as relationships,f as source,b as sourceFile,t as sourceFormat,n as tags,o as timestamp,y as views};