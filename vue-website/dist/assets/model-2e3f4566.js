const e="https://me.big.tuwien.ac.at/EAModelSet/id-27d94fb5929d4a5d81f9b9690fe72f24",d="id-27d94fb5929d4a5d81f9b9690fe72f24",a="Webstreet",i="",c=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",b="raw-data/github/archimate/webstreet.archimate",f="ARCHIMATE",s="29-06-2023 09:30:47",n=["DUPLICATE"],o=["raw-data/github/archimate/webstreet_final.archimate"],r="fr",p=[{id:"id-ceb3defc04d9432baa105e888cc5c7d6",name:"[A-1] Équipe de développement Webstreet",type:"BusinessActor",layer:"business"},{id:"id-42d1f64750df4303b7025060f04f157e",name:"[A-2] Webmasters Webstreet",type:"BusinessActor",layer:"business"},{id:"id-5cb28ab048c14f9494d829ce8fa640a6",name:"[A-3] Utilisateur final des site web",type:"BusinessActor",layer:"business"},{id:"id-7ee21a696bd348cf9018e96debc751a3",name:"[BP-1] Création et personnalisation des sites web",type:"BusinessProcess",layer:"business"},{id:"id-5985e55f844f4466b8c4d450131b007c",name:"[BP-2] Maintien et enrichissement de la bibliothèque de composants",type:"BusinessProcess",layer:"business"},{id:"id-235031eca28c4c4196e6b3f93ab24558",name:"[BP-3] Administration et mise à jour des sites web",type:"BusinessProcess",layer:"business"},{id:"id-43675c3b517e4dd5892733c130380b4f",name:"[BE-1] S'authentifie",type:"BusinessEvent",layer:"business"},{id:"id-23866142819046fdbfb9bcb5c6511695",name:"[A-5] Client Webstreet",type:"BusinessActor",layer:"business"},{id:"id-db8f0ad12df546eaa2808d6d366a8a1c",name:"[BP-3] Administration des serveurs",type:"BusinessProcess",layer:"business"},{id:"id-6f492e980fd3498c93f8df886e0f12e2",name:"[BP-4] Accède aux données de son site web",type:"BusinessProcess",layer:"business"},{id:"id-5e18c105ddeb4e7484846882bc8c7882",name:"[A-4] Équipe exploitation Webstreet",type:"BusinessActor",layer:"business"},{id:"id-28ec7d076c194bf689d98ea06f4056c1",name:"[D-1] Bibliothèque de composants logiciels",type:"DataObject",layer:"application"},{id:"id-5ad5e0c398834c9c8315e6a35cb85928",name:"[D-2.1] Templates",type:"DataObject",layer:"application"},{id:"id-37b16efae59c4731b611dbce36db6332",name:"[D-2.2] Site Atoms",type:"DataObject",layer:"application"},{id:"id-f5c75bdd9bf741648d98cc2647bfc8f0",name:"[D-2] Données des sites web clients ",type:"DataObject",layer:"application"},{id:"id-a7e8fc2ce126498f99990b912cc31c27",name:"[D-3] Sauvegarde des données de site web",type:"DataObject",layer:"application"},{id:"id-f2c003716b484bd6a5b12b5f3dae3e70",name:"[SC-1] Outil de Génération et d'Administration des sites web ",type:"ApplicationComponent",layer:"application"},{id:"id-0bb4b5bf04d844408d46e7f85f43b4a8",name:"[SC-2.1] Back-end - Site web",type:"ApplicationComponent",layer:"application"},{id:"id-48130afee7374773921506cc4753eaa3",name:"[SC-2.2] Front-end - Site web",type:"ApplicationComponent",layer:"application"},{id:"id-002908a81e5249c4ba68461c9e24aafb",name:"[SC-2] Site web client",type:"ApplicationCollaboration",layer:"application"},{id:"id-1a83e9795acf4961a99aa43da8edc4c1",name:"[D-4] Identité et droits d'accès des Clients Webstreet",type:"DataObject",layer:"application"},{id:"id-24a57be868374e93b3805e212a15e791",name:"[SC-4] IAM (Identity / Access Management)",type:"ApplicationComponent",layer:"application"},{id:"id-7c91b81fab4740419ecfa3ce395d6178",name:'[SC-5] "Gestionnaire" de fichier Web',type:"ApplicationComponent",layer:"application"},{id:"id-bd6da167b4d7475bb42ca061c7b66549",name:"[SF-1] Authentification des utilisateurs",type:"ApplicationFunction",layer:"application"},{id:"id-cad5f785bb3045ebb5a2a7e6c3b48c79",name:"[SF-1] : Vérification de la disponibilité et application des mises à jours",type:"ApplicationFunction",layer:"application"},{id:"id-1a093a283d4d4b37ab34cd77197eb3e4",name:"[CN-3] Fournisseur SASS",type:"CommunicationNetwork",layer:"technology"},{id:"id-18ce16038a834545bca26500a052acde",name:"[CN-3] Réseau Client Webstreet",type:"CommunicationNetwork",layer:"technology"},{id:"id-b8f044b6a338424fa7ee802d43a3c7a9",name:"[CN-1] Réseau Web Street (Interne + DMZ)",type:"CommunicationNetwork",layer:"technology"},{id:"id-cd1c37aaf54942b3b0e369815cd46339",name:"[CN-2] Internet",type:"CommunicationNetwork",layer:"technology"},{id:"id-55bfd7e038a146de86c7ad4ce7cd2e8b",name:"[TC-1] Serveur d'hébergement Webstreet",type:"Device",layer:"technology"},{id:"id-b1495cbf2f9042c4ad526a464c2ba05e",name:"[TC-2] Serveur de base de données Webstreet",type:"Device",layer:"technology"},{id:"id-e78e8599a3ff498cbc6806f5b828eedc",name:"[TC-3] Serveur de Sauvegarde Webstreet",type:"Device",layer:"technology"},{id:"id-6fdd9d651f0545bd9ca38d5bae910bec",name:"[TC-1] Serveur d'hébergement client",type:"Device",layer:"technology"},{id:"id-5b325b96acd04a9cb0727c5c088b08de",name:"[TC-2] Serveur de base de données client",type:"Device",layer:"technology"},{id:"id-47a3a0edac00434a905186a937343507",name:"[TC-3] Serveur de Sauvegarde client",type:"Device",layer:"technology"}],l=[{id:"id-c2d91998d9c04e3e9613ab9d0cfafdf2",sourceId:"id-5ad5e0c398834c9c8315e6a35cb85928",targetId:"id-37b16efae59c4731b611dbce36db6332",type:"AggregationRelationship"},{id:"id-aa6993dc419e4961b38d362695ded4e4",sourceId:"id-28ec7d076c194bf689d98ea06f4056c1",targetId:"id-5ad5e0c398834c9c8315e6a35cb85928",type:"CompositionRelationship"},{id:"id-c6b1864af2cc4a5d9e1578aec3dbdb96",sourceId:"id-28ec7d076c194bf689d98ea06f4056c1",targetId:"id-37b16efae59c4731b611dbce36db6332",type:"CompositionRelationship"},{id:"id-06673d258f7f41c38bc9e293816192a9",sourceId:"id-f2c003716b484bd6a5b12b5f3dae3e70",targetId:"id-28ec7d076c194bf689d98ea06f4056c1",type:"AccessRelationship"},{id:"id-ad1c8a1da3174aabb034e9f7dc9359ed",sourceId:"id-002908a81e5249c4ba68461c9e24aafb",targetId:"id-0bb4b5bf04d844408d46e7f85f43b4a8",type:"AggregationRelationship"},{id:"id-6b3a81e95e3046b3a77179520095a881",sourceId:"id-002908a81e5249c4ba68461c9e24aafb",targetId:"id-48130afee7374773921506cc4753eaa3",type:"AggregationRelationship"},{id:"id-d85a92300b7c42e28d1dae01127029f7",sourceId:"id-0bb4b5bf04d844408d46e7f85f43b4a8",targetId:"id-48130afee7374773921506cc4753eaa3",type:"ServingRelationship"},{id:"id-0b5162258fc54998b9a790fce940eba2",sourceId:"id-0bb4b5bf04d844408d46e7f85f43b4a8",targetId:"id-f5c75bdd9bf741648d98cc2647bfc8f0",type:"AccessRelationship"},{id:"id-157a441631ab4acc9db8e4551329617c",sourceId:"id-f2c003716b484bd6a5b12b5f3dae3e70",targetId:"id-002908a81e5249c4ba68461c9e24aafb",type:"ServingRelationship"},{id:"id-1a9b486bdd1c4d3cb2fe9dd91667ff9c",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-28ec7d076c194bf689d98ea06f4056c1",type:"AccessRelationship"},{id:"id-c0ef1d4db10543eaa3f3c7ab288e3852",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-f2c003716b484bd6a5b12b5f3dae3e70",type:"RealizationRelationship"},{id:"id-8c1df80f99ae4d4aaeca2fa442924dd1",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-002908a81e5249c4ba68461c9e24aafb",type:"RealizationRelationship"},{id:"id-ccec5f63362b48ca87f0e03a68113816",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-f5c75bdd9bf741648d98cc2647bfc8f0",type:"AccessRelationship"},{id:"id-2bb5b331560a449f89012d64ecec2574",sourceId:"id-cd1c37aaf54942b3b0e369815cd46339",targetId:"id-5cb28ab048c14f9494d829ce8fa640a6",type:"AssignmentRelationship"},{id:"id-07fe3a660f9c4acaaae6e886c26afea8",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-235031eca28c4c4196e6b3f93ab24558",type:"AssignmentRelationship"},{id:"id-ecdf0f4f50204bf3ae70813204ad94d6",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-ceb3defc04d9432baa105e888cc5c7d6",type:"AssignmentRelationship"},{id:"id-2b8d477954dd4b8bb99e9247b98f9e2c",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-42d1f64750df4303b7025060f04f157e",type:"AssignmentRelationship"},{id:"id-fa3868ff9874423e91cc3c6c91fcfe08",sourceId:"id-42d1f64750df4303b7025060f04f157e",targetId:"id-235031eca28c4c4196e6b3f93ab24558",type:"AssignmentRelationship"},{id:"id-6eb6152524d44ecca5176636bda77d3d",sourceId:"id-f2c003716b484bd6a5b12b5f3dae3e70",targetId:"id-235031eca28c4c4196e6b3f93ab24558",type:"ServingRelationship"},{id:"id-9e719281df554fbb920e5ad7773b17ee",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-7ee21a696bd348cf9018e96debc751a3",type:"AssignmentRelationship"},{id:"id-0a2f20d597964ee6bcb4d58765f16909",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-5985e55f844f4466b8c4d450131b007c",type:"AssignmentRelationship"},{id:"id-8582ac5e95f243a7b9f10fcf552fecc4",sourceId:"id-ceb3defc04d9432baa105e888cc5c7d6",targetId:"id-5985e55f844f4466b8c4d450131b007c",type:"AssignmentRelationship"},{id:"id-9022368f188743f1bcc1ddef6e926d42",sourceId:"id-ceb3defc04d9432baa105e888cc5c7d6",targetId:"id-7ee21a696bd348cf9018e96debc751a3",type:"AssignmentRelationship"},{id:"id-d9baa02544154441a5adf066ca607c55",sourceId:"id-5985e55f844f4466b8c4d450131b007c",targetId:"id-28ec7d076c194bf689d98ea06f4056c1",type:"AccessRelationship"},{id:"id-59e8f35660844d8fb72da7371fcc8e83",sourceId:"id-f2c003716b484bd6a5b12b5f3dae3e70",targetId:"id-7ee21a696bd348cf9018e96debc751a3",type:"ServingRelationship"},{id:"id-74782af6d64646969cfabcee02bdef32",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-a7e8fc2ce126498f99990b912cc31c27",type:"AccessRelationship"},{id:"id-648970ec39324d3aa3a788ace62c89ea",sourceId:"id-a7e8fc2ce126498f99990b912cc31c27",targetId:"id-f5c75bdd9bf741648d98cc2647bfc8f0",type:"CompositionRelationship"},{id:"id-d139bce2bcd84deda7169e34901f7403",sourceId:"id-cd1c37aaf54942b3b0e369815cd46339",targetId:"id-23866142819046fdbfb9bcb5c6511695",type:"AssignmentRelationship"},{id:"id-aba1743352f54724849464844625b590",sourceId:"id-002908a81e5249c4ba68461c9e24aafb",targetId:"id-5cb28ab048c14f9494d829ce8fa640a6",type:"ServingRelationship"},{id:"id-916f490c4dea4a4cb174837e21f921ba",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-b1495cbf2f9042c4ad526a464c2ba05e",type:"AssignmentRelationship"},{id:"id-6899d08f79624d898188ec53dccf38f7",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-55bfd7e038a146de86c7ad4ce7cd2e8b",type:"AssignmentRelationship"},{id:"id-09d71e57c6734089b768633c7b2903c3",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-e78e8599a3ff498cbc6806f5b828eedc",type:"AssignmentRelationship"},{id:"id-f2b02d0297474d2f8548eb4a09959744",sourceId:"id-55bfd7e038a146de86c7ad4ce7cd2e8b",targetId:"id-002908a81e5249c4ba68461c9e24aafb",type:"AssociationRelationship"},{id:"id-ee5a7fbda01c4813865946038bfd7ac8",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-7c91b81fab4740419ecfa3ce395d6178",type:"RealizationRelationship"},{id:"id-aa6e815353bb4966b54952809b9dedb5",sourceId:"id-b1495cbf2f9042c4ad526a464c2ba05e",targetId:"id-f5c75bdd9bf741648d98cc2647bfc8f0",type:"AssociationRelationship"},{id:"id-87fe3313ca91471c9a5c96fdcee2f2d9",sourceId:"id-e78e8599a3ff498cbc6806f5b828eedc",targetId:"id-a7e8fc2ce126498f99990b912cc31c27",type:"AssociationRelationship"},{id:"id-be0c92497f1748e487c13fd2fd9fd320",sourceId:"id-7c91b81fab4740419ecfa3ce395d6178",targetId:"id-55bfd7e038a146de86c7ad4ce7cd2e8b",type:"FlowRelationship"},{id:"id-323ae54bc27d4496b03eab2e454f6004",sourceId:"id-7c91b81fab4740419ecfa3ce395d6178",targetId:"id-e78e8599a3ff498cbc6806f5b828eedc",type:"FlowRelationship"},{id:"id-27fe3921f1254171ac45103b797f48e7",sourceId:"id-24a57be868374e93b3805e212a15e791",targetId:"id-1a83e9795acf4961a99aa43da8edc4c1",type:"AccessRelationship"},{id:"id-178946e1b3ae45c687f07a421a66a2ff",sourceId:"id-1a093a283d4d4b37ab34cd77197eb3e4",targetId:"id-24a57be868374e93b3805e212a15e791",type:"RealizationRelationship"},{id:"id-c1f0c59ae4b6469f8fe69f9f40a091e5",sourceId:"id-24a57be868374e93b3805e212a15e791",targetId:"id-bd6da167b4d7475bb42ca061c7b66549",type:"RealizationRelationship"},{id:"id-a126b0722aaa4f7eb47f90c107b18084",sourceId:"id-bd6da167b4d7475bb42ca061c7b66549",targetId:"id-7c91b81fab4740419ecfa3ce395d6178",type:"ServingRelationship"},{id:"id-b5c27eccda724cbbb2a33b2e56cc65f6",sourceId:"id-23866142819046fdbfb9bcb5c6511695",targetId:"id-6f492e980fd3498c93f8df886e0f12e2",type:"AssignmentRelationship"},{id:"id-e29e9c7621a7488f94559c8230df917f",sourceId:"id-7c91b81fab4740419ecfa3ce395d6178",targetId:"id-6f492e980fd3498c93f8df886e0f12e2",type:"ServingRelationship"},{id:"id-dfbc197786c34e668a321b6af987823e",sourceId:"id-23866142819046fdbfb9bcb5c6511695",targetId:"id-43675c3b517e4dd5892733c130380b4f",type:"TriggeringRelationship"},{id:"id-3e74d9e9b042411cbfced8d7e0e0bb24",sourceId:"id-24a57be868374e93b3805e212a15e791",targetId:"id-43675c3b517e4dd5892733c130380b4f",type:"ServingRelationship"},{id:"id-304c000033f24ddabf460e7e558c12e9",sourceId:"id-18ce16038a834545bca26500a052acde",targetId:"id-002908a81e5249c4ba68461c9e24aafb",type:"RealizationRelationship"},{id:"id-f229cbdee8d74d059cea797bf0ea0eee",sourceId:"id-18ce16038a834545bca26500a052acde",targetId:"id-6fdd9d651f0545bd9ca38d5bae910bec",type:"AggregationRelationship"},{id:"id-8a7611ea5ab94ae081beac17cc99b2e6",sourceId:"id-18ce16038a834545bca26500a052acde",targetId:"id-5b325b96acd04a9cb0727c5c088b08de",type:"AggregationRelationship"},{id:"id-4f9eead5a29640b0bb5e4a62bc7805eb",sourceId:"id-18ce16038a834545bca26500a052acde",targetId:"id-47a3a0edac00434a905186a937343507",type:"AggregationRelationship"},{id:"id-1326439075e94e85895e23f9f2e11d87",sourceId:"id-47a3a0edac00434a905186a937343507",targetId:"id-a7e8fc2ce126498f99990b912cc31c27",type:"AssociationRelationship"},{id:"id-f30e05819eb1417cb5c3c460dd6f5a4c",sourceId:"id-5b325b96acd04a9cb0727c5c088b08de",targetId:"id-f5c75bdd9bf741648d98cc2647bfc8f0",type:"AssociationRelationship"},{id:"id-f59f997845bc4e16866a38a91ccd77cd",sourceId:"id-6fdd9d651f0545bd9ca38d5bae910bec",targetId:"id-002908a81e5249c4ba68461c9e24aafb",type:"AssociationRelationship"},{id:"id-2190b3ef935247ae970d88f79d25b26d",sourceId:"id-18ce16038a834545bca26500a052acde",targetId:"id-23866142819046fdbfb9bcb5c6511695",type:"AssignmentRelationship"},{id:"id-76494b2e35204bf8803f7e4b5eb19750",sourceId:"id-db8f0ad12df546eaa2808d6d366a8a1c",targetId:"id-6fdd9d651f0545bd9ca38d5bae910bec",type:"FlowRelationship"},{id:"id-fcf273521ddf4d96b24a71053bd47db2",sourceId:"id-db8f0ad12df546eaa2808d6d366a8a1c",targetId:"id-47a3a0edac00434a905186a937343507",type:"FlowRelationship"},{id:"id-695d9c86bd994e1e87f62bf76a010c7a",sourceId:"id-db8f0ad12df546eaa2808d6d366a8a1c",targetId:"id-5b325b96acd04a9cb0727c5c088b08de",type:"FlowRelationship"},{id:"id-145d7d48938e4081879d8afdc2d2546c",sourceId:"id-23866142819046fdbfb9bcb5c6511695",targetId:"id-db8f0ad12df546eaa2808d6d366a8a1c",type:"AssignmentRelationship"},{id:"id-1a86a348dd724ceb97a66ead57012624",sourceId:"id-002908a81e5249c4ba68461c9e24aafb",targetId:"id-6f492e980fd3498c93f8df886e0f12e2",type:"ServingRelationship"},{id:"id-0067bb8d91744fd0a8def6dc4fe18ad6",sourceId:"id-6f492e980fd3498c93f8df886e0f12e2",targetId:"id-f5c75bdd9bf741648d98cc2647bfc8f0",type:"AccessRelationship"},{id:"id-84f21039b55142bca480fecb21b1901d",sourceId:"id-db8f0ad12df546eaa2808d6d366a8a1c",targetId:"id-b1495cbf2f9042c4ad526a464c2ba05e",type:"FlowRelationship"},{id:"id-8ee5e1c6855b4602941a2b1cff4929fa",sourceId:"id-db8f0ad12df546eaa2808d6d366a8a1c",targetId:"id-e78e8599a3ff498cbc6806f5b828eedc",type:"FlowRelationship"},{id:"id-690f2f77ac454e6b9f4cb2e5c6a118de",sourceId:"id-db8f0ad12df546eaa2808d6d366a8a1c",targetId:"id-55bfd7e038a146de86c7ad4ce7cd2e8b",type:"FlowRelationship"},{id:"id-7bef968019ed4553b461e38a3f206f24",sourceId:"id-b8f044b6a338424fa7ee802d43a3c7a9",targetId:"id-5e18c105ddeb4e7484846882bc8c7882",type:"AssignmentRelationship"},{id:"id-2349160f8d1343d29f2166d376df06c2",sourceId:"id-5e18c105ddeb4e7484846882bc8c7882",targetId:"id-db8f0ad12df546eaa2808d6d366a8a1c",type:"AssignmentRelationship"},{id:"id-748eb81e3e2143ab87480ea5a4eb2f36",sourceId:"id-0bb4b5bf04d844408d46e7f85f43b4a8",targetId:"id-cad5f785bb3045ebb5a2a7e6c3b48c79",type:"AssignmentRelationship"},{id:"id-6d29e58fb5b242de9225c988c2f79000",sourceId:"id-f2c003716b484bd6a5b12b5f3dae3e70",targetId:"id-cad5f785bb3045ebb5a2a7e6c3b48c79",type:"ServingRelationship"}],y=[{id:"id-9a646569d9a043f2a8a4f013b0344c71",name:"High Level - Baseline Architecture",viewpoint:""},{id:"id-944e1bb1913e47f88c5cbf0bca814df3",name:"High Level - Architecture - Solution A",viewpoint:""},{id:"id-315c67eb5cbf470989bb250d5423debc",name:"High Level - Architecture - Solution B",viewpoint:""}],g={identifier:e,archimateId:d,name:a,description:i,formats:c,source:t,sourceFile:b,sourceFormat:f,timestamp:s,tags:n,duplicates:o,language:r,elements:p,relationships:l,views:y};export{d as archimateId,g as default,i as description,o as duplicates,p as elements,c as formats,e as identifier,r as language,a as name,l as relationships,t as source,b as sourceFile,f as sourceFormat,n as tags,s as timestamp,y as views};