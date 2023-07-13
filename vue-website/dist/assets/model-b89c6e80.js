const e="https://me.big.tuwien.ac.at/EAModelSet/id-b4cceb89754f441b8621a5b22c62a242",a="id-b4cceb89754f441b8621a5b22c62a242",d="checkpoint3",i="",c=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",o="raw-data/github/archimate/untitled.archimate",b="ARCHIMATE",f="29-06-2023 09:31:20",s=[],n=[],r="pt",p=[{id:"id-1daaf77296c240f9b26d6305fd8c5990",name:"Processo de entrega",type:"BusinessProcess",layer:"business"},{id:"id-d8394a7fcaed467a8dc81aeebff2c51a",name:"Iniciar processo de entrega",type:"BusinessEvent",layer:"business"},{id:"id-5bbfb15e8b8b4d7c846f6222360786e9",name:"CIA de entrega",type:"BusinessService",layer:"business"},{id:"id-6a8914c934b54db5983d3be776bd5648",name:"Identificação do cliente",type:"BusinessFunction",layer:"business"},{id:"id-7a1d803adb4048d294defc7bf2e72077",name:"Fazer entrega",type:"BusinessFunction",layer:"business"},{id:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",name:"Confirmar entrega",type:"BusinessFunction",layer:"business"},{id:"id-c77ab62de1c048938aede92d9d2fad38",name:"Solicitação da avaliação",type:"BusinessFunction",layer:"business"},{id:"id-757044f1b10647e688a215aae30c4ed3",name:"Não realizar a entrega",type:"BusinessFunction",layer:"business"},{id:"id-7e63b5b8aef14170b0f08216d7bd7eb4",name:"Cliente não identificado",type:"BusinessFunction",layer:"business"},{id:"id-ed61c58753c94be59afe076a7c83d3fb",name:"Business Function",type:"BusinessFunction",layer:"business"},{id:"id-3f2fc7b9783e46c88eb648e23d1f2c30",name:"Registrar avaliação",type:"BusinessFunction",layer:"business"},{id:"id-da8952461fd84c328eb6bd3498b2809f",name:"Finalizar entrega",type:"BusinessFunction",layer:"business"},{id:"id-cadd39ce79a3450392e25bb3fdafbbb5",name:"Ponto único de contato com o cliente",type:"BusinessRole",layer:"business"},{id:"id-a7082325e3d5495bbc24c20327b2df81",name:"Entregador",type:"BusinessActor",layer:"business"},{id:"id-e230b8499bed4a4c9e8375d546ff7b6f",name:"Interface de usuário",type:"ApplicationService",layer:"application"},{id:"id-ed6f88689ec64a51823b650cf6c62a75",name:"Frontend em react native para validar dados do cliente",type:"ApplicationComponent",layer:"application"},{id:"id-801a3d5fb10b421c9dd16ca73c729338",name:"Comunicação entre as aplicações",type:"ApplicationService",layer:"application"},{id:"id-128024fa29364a7f9944afc88ebb8b61",name:"JSON",type:"ApplicationInteraction",layer:"application"},{id:"id-fea1cb211782426fb1c51bdd40657195",name:"Processamento de regras de negocio",type:"ApplicationService",layer:"application"},{id:"id-25bc658acb0f414eb8fb34cf4562adf0",name:"JSON (copy)",type:"ApplicationInteraction",layer:"application"},{id:"id-300330c2706f4d2bacdc0b0cd7caff8b",name:"Backend em Java para acessar dados do cliente",type:"ApplicationComponent",layer:"application"},{id:"id-cb6a96c4559f4e0dacb6f4417f7ef989",name:"Persistencia de dados",type:"ApplicationService",layer:"application"},{id:"id-6ea4a48486f74b9a97ee2b072eca2d7a",name:"Backend em Java para acessar dados do cliente (copy)",type:"ApplicationComponent",layer:"application"},{id:"id-a02d390864eb404488370e2724ce05df",name:"Repositorio de dados dos cliente",type:"DataObject",layer:"application"},{id:"id-1665cf0f86914d4c9352b274e40b6ede",name:"Frontend em react native para registrar avaliação do cliente",type:"ApplicationComponent",layer:"application"},{id:"id-99fa3f586a7b457d93265225aec3770a",name:"JSON",type:"ApplicationInteraction",layer:"application"},{id:"id-08cfe8c8043343af8465eb0201cf61a4",name:"Backend em Java para registrar uma nova avaliação",type:"ApplicationComponent",layer:"application"},{id:"id-8388e2254a2245a6a3485e7485e615d0",name:"Repositorios de avaliações",type:"DataObject",layer:"application"},{id:"id-4679f51055ee4c6a8bc6a44b4a9e7a0e",name:"Chamada com passagem de parâmetros",type:"ApplicationCollaboration",layer:"application"},{id:"id-06c2a13242ab4e76a52afa741c3af8a1",name:"Chamada com passagem de parametros",type:"ApplicationCollaboration",layer:"application"},{id:"id-e9efebdf90824bbca3f4d6010418230b",name:"Janela de confirmação da entrega",type:"ApplicationComponent",layer:"application"},{id:"id-b7bc2ef938804a0fabb0fa9b3c4ecdd9",name:"JSON",type:"ApplicationInteraction",layer:"application"},{id:"id-e41e213f677a4b1899107b0671ea893f",name:"Backend em Java para registrar uma entrega finalizada",type:"ApplicationComponent",layer:"application"},{id:"id-c62cd501b17e47408533dfedc643a54e",name:"Repositorio de entregas",type:"DataObject",layer:"application"},{id:"id-7e8d30f1cfac48a4b99f02adeb9a01a5",name:"Acesso via aplicativo",type:"TechnologyService",layer:"technology"},{id:"id-8a211bc95a614bfdb3edc10ffe0c13c4",name:"Celular com android acima do 8 ou IOS 12. 4GB de RAM, snapdragon 652",type:"Device",layer:"technology"},{id:"id-5d1eb028aeea4a80ba8796ea1d27a628",name:"Rede movel",type:"Path",layer:"technology"},{id:"id-5abaebd8f9b345f38ae44e5910199184",name:"Servidor em cloud azure, Intel Xeon, 8GB de RAM, 2TB HD",type:"Device",layer:"technology"},{id:"id-4a1f597c5f0342d299be2967250c1b53",name:"Linux CentOS, banco oracle",type:"SystemSoftware",layer:"technology"},{id:"id-bf657a3f8ae9429c9b53fd59c6230613",name:"Empresa de vendas por marketplace",type:"Stakeholder",layer:"motivation"},{id:"id-260fe87fc05746d5b319ec1f13fab7f5",name:"Garantir a satisfação dos clientes nas entregas",type:"Driver",layer:"motivation"},{id:"id-4690306757334beea4ede10d6c70a4ad",name:"Confirmação do recebecimento das entregas",type:"Driver",layer:"motivation"},{id:"id-9f8ef8a9d04e4f9381efd33f4d803764",name:"Avaliar qualidade da entrega",type:"Assessment",layer:"motivation"},{id:"id-2e2bb8c3369b43aaaf81502d0f2c5de5",name:"Registro em software",type:"Assessment",layer:"motivation"},{id:"id-947f6d91e72d4993bf0728a2438ffb09",name:"Computar confirmação da entrega",type:"Assessment",layer:"motivation"},{id:"id-8197ec35e8ef476eafdb7024a67cb7b6",name:"Avaliação de 1 a 5 referente a qualidade de entrega, e observação sobre a integridade do produto e embalagem",type:"Goal",layer:"motivation"},{id:"id-5311435dab784b2f914e04fdd8ba8d5e",name:"Guardar dados do cliente",type:"Goal",layer:"motivation"},{id:"id-a0efba2ff3294329816a8daa3e8a1da7",name:"Acompanhamento do processo de atendimento",type:"Goal",layer:"motivation"},{id:"id-89ef4647bdb7499a81306a4998b3bb8e",name:"Observação é opcional e avaliação de 1 a 5 é obrigatorio na hora da entrega",type:"Principle",layer:"motivation"},{id:"id-5be8b2c8ba234efdbcda19219fbbd190",name:"A avaliação será feita na hora da entrega com o entregador",type:"Principle",layer:"motivation"},{id:"id-0ec7821be6df4753a9ad8297f0c1462f",name:"Realizar avaliação com o cliente",type:"Requirement",layer:"motivation"},{id:"id-67b352e3cf534cd8af1a60cf26289eb1",name:"Coletar respostas feitas pelo cliente",type:"Requirement",layer:"motivation"},{id:"id-43440106e3e34431b5ab3acb682a2eb8",name:"Coletar e/ou checar informações cadastrais do cliente",type:"Requirement",layer:"motivation"},{id:"id-5d330fe62d504c9bb26afcb11cd5453e",name:"Confirmar entrega",type:"Requirement",layer:"motivation"},{id:"id-6f149dd52fb54a59883d4430f7ee22cc",name:"Alimentar base de avaliações",type:"Requirement",layer:"motivation"},{id:"id-a209862f0b79492582df0b61875d560a",name:"Solicitação de classificação da entrega, classificação de 1 a 5 da qualidade da embalagem e integridade do produto; Sendo 1 -  Muito insatisfeito, 2 - Insatisfeito, 3 - Imparcial, 4 - Satisfação, 5 - Muito satisfeito.",type:"Constraint",layer:"motivation"},{id:"id-58100fabb515402f991a11a661f2662b",name:"Respostas coletas pelo entregador na hora da entrega, seguindo os padrões que o sistema empoẽm",type:"Constraint",layer:"motivation"},{id:"id-91be13b55076408f92c81972fa78cb89",name:"Inclui nota de 1 a 5 e observação (descrição) feita pelo cliente",type:"Constraint",layer:"motivation"},{id:"id-1a507c5d597e43e0a39aeb94babd6104",name:"Checar se todas as informações do cliente condizem com o sistema, se não, cadastrar essas informações",type:"Constraint",layer:"motivation"},{id:"id-abdad002d87b4e7ab24c9d9575895930",name:"Incluir: id do entregador, id do cliente, avaliação do cliente, observação do cliente, data e hora da entrega",type:"Constraint",layer:"motivation"},{id:"id-38b7972de8244aedb5c0914c8673757b",name:"Meaning",type:"Meaning",layer:"motivation"},{id:"id-6351140ea9d8456a9b780b576b416a13",name:"Registrar feedback dos usuários",type:"Assessment",layer:"motivation"},{id:"id-357e1b246dcf456d99fce36f5c90f5ba",name:"Gerar análise dos feedbacks numérica em proporção de usuários satisfeitos e não satisfeitos com o produto",type:"Goal",layer:"motivation"},{id:"id-c3f03389ec1249eba22539d3c3ee8c4e",name:"Pareamento do dispositivo com o sistema",type:"Assessment",layer:"motivation"},{id:"id-e01f9f0930cd49398b09182ed4971020",name:"Registro de cadastramento do usuário no sistema (copy)",type:"Assessment",layer:"motivation"},{id:"id-80e042cf085340a091cd81d867286846",name:"Registro de cadastramento das plantas do usuário no sistema (copy)",type:"Assessment",layer:"motivation"},{id:"id-8e3d71daba6547708be08544f37807e6",name:"Registro de cadastramento das tarefas das plantas no sistema (copy)",type:"Assessment",layer:"motivation"},{id:"id-42be2f54ffc447729fae81ac86a9eb7f",name:"Registro de cadastramento da rotina das plantas no sistema (copy)",type:"Assessment",layer:"motivation"},{id:"id-02845859f434432d90093a7f9142a83c",name:"Registro de login do usuário no sistema (copy)",type:"Assessment",layer:"motivation"},{id:"id-89daa424413d4f1e88756f5a12c8ed8b",name:"Mecanismo de Gestão de Tarefas",type:"Goal",layer:"motivation"},{id:"id-956c14f27a6d48eb8a654459d13e2c16",name:"Registrar tarefa da planta",type:"Requirement",layer:"motivation"},{id:"id-d143a483830148c9916c0f58eef6b56c",name:"Só possível criar uma tarefa com uma ação registrada",type:"Principle",layer:"motivation"},{id:"id-c88d07061c28472fb9877b5655bd6e66",name:"Ao registrar uma tarefa devem existir os campos: Nome da Tarefa e Ação da Tarefa",type:"Constraint",layer:"motivation"},{id:"id-cbbf8c0ba9f4498482953b7308d44889",name:"Alterar/Exibir Tarefas das Plantas",type:"Requirement",layer:"motivation"},{id:"id-7a7e1240eb1a447eb3d3f1aa2c3b47d2",name:"O usuário poderá alterar os seguintes campos: nome, descricao, ação da tarefa",type:"Constraint",layer:"motivation"},{id:"id-59a6e4d65edf48c782c038fe12f146c3",name:"Deletar uma rotina",type:"Requirement",layer:"motivation"},{id:"id-f4fe940c68e24d2a9f46e10c7f61445b",name:"O usuário deverá clicar no botão de lixeira para deletar  uma tarefa logicamente",type:"Constraint",layer:"motivation"},{id:"id-37c9cee1261f442ab6495f0c6f1a2f8c",name:"Residência do cliente",type:"Location",layer:"other"}],l=[{id:"id-230f87fb4c0242aaa2154decfdc67f77",sourceId:"id-260fe87fc05746d5b319ec1f13fab7f5",targetId:"id-bf657a3f8ae9429c9b53fd59c6230613",type:"AssociationRelationship"},{id:"id-43c0e481035f4ea09290adab6035610a",sourceId:"id-4690306757334beea4ede10d6c70a4ad",targetId:"id-bf657a3f8ae9429c9b53fd59c6230613",type:"AssociationRelationship"},{id:"id-7c86f97a132646c3a00ace4535f73cf8",sourceId:"id-9f8ef8a9d04e4f9381efd33f4d803764",targetId:"id-260fe87fc05746d5b319ec1f13fab7f5",type:"AssociationRelationship"},{id:"id-ce3303e822384c648f518c6aa59e88f1",sourceId:"id-2e2bb8c3369b43aaaf81502d0f2c5de5",targetId:"id-4690306757334beea4ede10d6c70a4ad",type:"AssociationRelationship"},{id:"id-6c58b50e96964335bb3c579aa7429880",sourceId:"id-947f6d91e72d4993bf0728a2438ffb09",targetId:"id-4690306757334beea4ede10d6c70a4ad",type:"AssociationRelationship"},{id:"id-96e5ab39e3934f1bb259895e83cc0c33",sourceId:"id-8197ec35e8ef476eafdb7024a67cb7b6",targetId:"id-9f8ef8a9d04e4f9381efd33f4d803764",type:"AssociationRelationship"},{id:"id-548a4f29f5e94076a0b4db159b119759",sourceId:"id-5311435dab784b2f914e04fdd8ba8d5e",targetId:"id-2e2bb8c3369b43aaaf81502d0f2c5de5",type:"AssociationRelationship"},{id:"id-d5817a62a7154c81b211d4ed4a3427f3",sourceId:"id-5311435dab784b2f914e04fdd8ba8d5e",targetId:"id-947f6d91e72d4993bf0728a2438ffb09",type:"AssociationRelationship"},{id:"id-e27c83cbd53c467d8b4d671918f54f9d",sourceId:"id-a0efba2ff3294329816a8daa3e8a1da7",targetId:"id-947f6d91e72d4993bf0728a2438ffb09",type:"AssociationRelationship"},{id:"id-01a1945e84bd43488644e90756a98280",sourceId:"id-89ef4647bdb7499a81306a4998b3bb8e",targetId:"id-8197ec35e8ef476eafdb7024a67cb7b6",type:"AssociationRelationship"},{id:"id-16d185bed2d04b4c96d0c790483ba802",sourceId:"id-5be8b2c8ba234efdbcda19219fbbd190",targetId:"id-8197ec35e8ef476eafdb7024a67cb7b6",type:"AssociationRelationship"},{id:"id-a98608d49a494708b903a7026430b4de",sourceId:"id-0ec7821be6df4753a9ad8297f0c1462f",targetId:"id-8197ec35e8ef476eafdb7024a67cb7b6",type:"AssociationRelationship"},{id:"id-4d95e1ae5edc43cca879320beb56994e",sourceId:"id-67b352e3cf534cd8af1a60cf26289eb1",targetId:"id-8197ec35e8ef476eafdb7024a67cb7b6",type:"AssociationRelationship"},{id:"id-81aaac0de985435cb1a9ed15cb5dc628",sourceId:"id-67b352e3cf534cd8af1a60cf26289eb1",targetId:"id-5311435dab784b2f914e04fdd8ba8d5e",type:"AssociationRelationship"},{id:"id-38e20e19cb8c4df48478019bb73facfe",sourceId:"id-43440106e3e34431b5ab3acb682a2eb8",targetId:"id-5311435dab784b2f914e04fdd8ba8d5e",type:"AssociationRelationship"},{id:"id-e4bc450d4139437ba231306b9cf91b25",sourceId:"id-5d330fe62d504c9bb26afcb11cd5453e",targetId:"id-a0efba2ff3294329816a8daa3e8a1da7",type:"AssociationRelationship"},{id:"id-6260fdd2738242fea1618cb2e9941a89",sourceId:"id-6f149dd52fb54a59883d4430f7ee22cc",targetId:"id-5311435dab784b2f914e04fdd8ba8d5e",type:"AssociationRelationship"},{id:"id-cfc0aba606c24efe87d0d7801b4e9774",sourceId:"id-0ec7821be6df4753a9ad8297f0c1462f",targetId:"id-a209862f0b79492582df0b61875d560a",type:"CompositionRelationship"},{id:"id-24f3bdc500ff4729b317fc7a11c274db",sourceId:"id-67b352e3cf534cd8af1a60cf26289eb1",targetId:"id-58100fabb515402f991a11a661f2662b",type:"CompositionRelationship"},{id:"id-696849c8bb4d4d5fa845cab6d646f3bb",sourceId:"id-6f149dd52fb54a59883d4430f7ee22cc",targetId:"id-91be13b55076408f92c81972fa78cb89",type:"CompositionRelationship"},{id:"id-13284f6e33ef4d0c97d303a3340424ef",sourceId:"id-43440106e3e34431b5ab3acb682a2eb8",targetId:"id-1a507c5d597e43e0a39aeb94babd6104",type:"CompositionRelationship"},{id:"id-3658b6dd87c44520b8e76d1dd6a8dfe4",sourceId:"id-5d330fe62d504c9bb26afcb11cd5453e",targetId:"id-abdad002d87b4e7ab24c9d9575895930",type:"CompositionRelationship"},{id:"id-4550904a0e764dd6b888724ac021d192",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-6a8914c934b54db5983d3be776bd5648",type:"CompositionRelationship"},{id:"id-a77c26e0dc304e499f88500eab7f264f",sourceId:"id-6a8914c934b54db5983d3be776bd5648",targetId:"id-d8394a7fcaed467a8dc81aeebff2c51a",type:"AssociationRelationship"},{id:"id-b45fc962334643b1a39e10b5f8a1ac91",sourceId:"id-7a1d803adb4048d294defc7bf2e72077",targetId:"id-6a8914c934b54db5983d3be776bd5648",type:"AssociationRelationship"},{id:"id-655782d2932140ecad78f5cc0ca007d7",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",type:"CompositionRelationship"},{id:"id-01a00554c0184539b0464b752a19c85f",sourceId:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",targetId:"id-7a1d803adb4048d294defc7bf2e72077",type:"AssociationRelationship"},{id:"id-acdbc804a97c4c07b5b332ed0a6b0e88",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-c77ab62de1c048938aede92d9d2fad38",type:"CompositionRelationship"},{id:"id-fd671d405be147bcba7007521a661727",sourceId:"id-c77ab62de1c048938aede92d9d2fad38",targetId:"id-7a1d803adb4048d294defc7bf2e72077",type:"AssociationRelationship"},{id:"id-9175a09d875e4c86bbbaae785ede1661",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-757044f1b10647e688a215aae30c4ed3",type:"CompositionRelationship"},{id:"id-8d2cdf8684284f0fa7ffbfa4660e8e4d",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-7e63b5b8aef14170b0f08216d7bd7eb4",type:"CompositionRelationship"},{id:"id-f5317b8c5586428ea650bcd2c637d876",sourceId:"id-7e63b5b8aef14170b0f08216d7bd7eb4",targetId:"id-6a8914c934b54db5983d3be776bd5648",type:"AssociationRelationship"},{id:"id-d9e93409ffaa41f1842408209714ff97",sourceId:"id-757044f1b10647e688a215aae30c4ed3",targetId:"id-7e63b5b8aef14170b0f08216d7bd7eb4",type:"AssociationRelationship"},{id:"id-a423928ede514336834464211a01c764",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-ed61c58753c94be59afe076a7c83d3fb",type:"CompositionRelationship"},{id:"id-da3e3ed40baf4c229db4f63f1167d2d8",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-3f2fc7b9783e46c88eb648e23d1f2c30",type:"CompositionRelationship"},{id:"id-84b6608294694d8bbb921541902ea198",sourceId:"id-c77ab62de1c048938aede92d9d2fad38",targetId:"id-3f2fc7b9783e46c88eb648e23d1f2c30",type:"AssociationRelationship"},{id:"id-fb5e7ed0d05b4bf19eef8bbf83168f1e",sourceId:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",targetId:"id-3f2fc7b9783e46c88eb648e23d1f2c30",type:"AssociationRelationship"},{id:"id-bdd4aa8c7e274f23b781f500e1e604ac",sourceId:"id-da8952461fd84c328eb6bd3498b2809f",targetId:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",type:"AssociationRelationship"},{id:"id-0fc7285890b1443dbf00bd98abba20c5",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-5bbfb15e8b8b4d7c846f6222360786e9",type:"AssociationRelationship"},{id:"id-096131ed06b0468ab1deb902d5b444b9",sourceId:"id-37c9cee1261f442ab6495f0c6f1a2f8c",targetId:"id-1daaf77296c240f9b26d6305fd8c5990",type:"AssociationRelationship"},{id:"id-7f45fd9b87e74bf289103e140a7b33a7",sourceId:"id-1daaf77296c240f9b26d6305fd8c5990",targetId:"id-cadd39ce79a3450392e25bb3fdafbbb5",type:"AssociationRelationship"},{id:"id-eebedfca514c4fd0bab0a55e3302fbc3",sourceId:"id-a7082325e3d5495bbc24c20327b2df81",targetId:"id-cadd39ce79a3450392e25bb3fdafbbb5",type:"AssociationRelationship"},{id:"id-760ad3fe26704acf911eb613b7069336",sourceId:"id-6a8914c934b54db5983d3be776bd5648",targetId:"id-1a507c5d597e43e0a39aeb94babd6104",type:"InfluenceRelationship"},{id:"id-b4873f62e8244feab6e3557f5151496c",sourceId:"id-c77ab62de1c048938aede92d9d2fad38",targetId:"id-a209862f0b79492582df0b61875d560a",type:"InfluenceRelationship"},{id:"id-d996601e3357493c81aef2986cac1af4",sourceId:"id-3f2fc7b9783e46c88eb648e23d1f2c30",targetId:"id-58100fabb515402f991a11a661f2662b",type:"RealizationRelationship"},{id:"id-dd3ae13655594907b0e14f35ea70b8e8",sourceId:"id-3f2fc7b9783e46c88eb648e23d1f2c30",targetId:"id-91be13b55076408f92c81972fa78cb89",type:"RealizationRelationship"},{id:"id-dbfb9a30c7e24ff2a8265ee86e6b1059",sourceId:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",targetId:"id-abdad002d87b4e7ab24c9d9575895930",type:"RealizationRelationship"},{id:"id-6e0ff9fc8633417bb3a7451cad27094c",sourceId:"id-128024fa29364a7f9944afc88ebb8b61",targetId:"id-ed6f88689ec64a51823b650cf6c62a75",type:"AssociationRelationship"},{id:"id-8a9c4c1191864f56ad3d7e696b4bd827",sourceId:"id-300330c2706f4d2bacdc0b0cd7caff8b",targetId:"id-128024fa29364a7f9944afc88ebb8b61",type:"AssociationRelationship"},{id:"id-2527f64e39174afe8537d90ecae0e073",sourceId:"id-cb6a96c4559f4e0dacb6f4417f7ef989",targetId:"id-a02d390864eb404488370e2724ce05df",type:"AccessRelationship"},{id:"id-3b9e4ad0b8d24101ba3e0924d42c370a",sourceId:"id-a02d390864eb404488370e2724ce05df",targetId:"id-300330c2706f4d2bacdc0b0cd7caff8b",type:"AssociationRelationship"},{id:"id-8f3f8b6b89824655a4bf843f62efd6b7",sourceId:"id-99fa3f586a7b457d93265225aec3770a",targetId:"id-1665cf0f86914d4c9352b274e40b6ede",type:"AssociationRelationship"},{id:"id-5dd1adbc4f7c4fcb9657881331e16ea1",sourceId:"id-08cfe8c8043343af8465eb0201cf61a4",targetId:"id-99fa3f586a7b457d93265225aec3770a",type:"AssociationRelationship"},{id:"id-4d8702bbc4d04b45a0814b20daccb5d4",sourceId:"id-cb6a96c4559f4e0dacb6f4417f7ef989",targetId:"id-8388e2254a2245a6a3485e7485e615d0",type:"AccessRelationship"},{id:"id-cd844bd1258443f7b0b1c7a0d8a6bff5",sourceId:"id-8388e2254a2245a6a3485e7485e615d0",targetId:"id-08cfe8c8043343af8465eb0201cf61a4",type:"AssociationRelationship"},{id:"id-30e4f7e0413e475ca4f7631b028c0a7c",sourceId:"id-06c2a13242ab4e76a52afa741c3af8a1",targetId:"id-1665cf0f86914d4c9352b274e40b6ede",type:"AssociationRelationship"},{id:"id-c1f900c8a5e34e538b05e4a6392f65e5",sourceId:"id-e9efebdf90824bbca3f4d6010418230b",targetId:"id-06c2a13242ab4e76a52afa741c3af8a1",type:"AssociationRelationship"},{id:"id-15dd69903c0f44a093ae64fd0f654dd8",sourceId:"id-b7bc2ef938804a0fabb0fa9b3c4ecdd9",targetId:"id-e9efebdf90824bbca3f4d6010418230b",type:"AssociationRelationship"},{id:"id-38cd039ed6c241739cafe1ef825dcc3d",sourceId:"id-cb6a96c4559f4e0dacb6f4417f7ef989",targetId:"id-c62cd501b17e47408533dfedc643a54e",type:"AccessRelationship"},{id:"id-cba049d88698425da13ccb2bbd465b9a",sourceId:"id-c62cd501b17e47408533dfedc643a54e",targetId:"id-e41e213f677a4b1899107b0671ea893f",type:"AssociationRelationship"},{id:"id-62d17512b811494c827c0e527f078096",sourceId:"id-e41e213f677a4b1899107b0671ea893f",targetId:"id-b7bc2ef938804a0fabb0fa9b3c4ecdd9",type:"AssociationRelationship"},{id:"id-022a63133b5543d9ab55ecfb0f27df20",sourceId:"id-ed6f88689ec64a51823b650cf6c62a75",targetId:"id-6a8914c934b54db5983d3be776bd5648",type:"RealizationRelationship"},{id:"id-259426248fd74a94a6019423b689b5cc",sourceId:"id-1665cf0f86914d4c9352b274e40b6ede",targetId:"id-3f2fc7b9783e46c88eb648e23d1f2c30",type:"RealizationRelationship"},{id:"id-ef7db80d6547446087b700976a64656d",sourceId:"id-e9efebdf90824bbca3f4d6010418230b",targetId:"id-1c07fa0d210a4dc5ab76dd3d7cb00733",type:"RealizationRelationship"},{id:"id-0a545a993c3d492c86b3f696483eb12a",sourceId:"id-e230b8499bed4a4c9e8375d546ff7b6f",targetId:"id-7e8d30f1cfac48a4b99f02adeb9a01a5",type:"AssociationRelationship"},{id:"id-291a9913952f4a699edb5ce67fcc4229",sourceId:"id-8a211bc95a614bfdb3edc10ffe0c13c4",targetId:"id-7e8d30f1cfac48a4b99f02adeb9a01a5",type:"AssociationRelationship"},{id:"id-d3ed29f25fcc44ca82dec95b4a40a4b9",sourceId:"id-5d1eb028aeea4a80ba8796ea1d27a628",targetId:"id-8a211bc95a614bfdb3edc10ffe0c13c4",type:"AssociationRelationship"},{id:"id-1063706fd1b9402f902cc75bafe39c87",sourceId:"id-5abaebd8f9b345f38ae44e5910199184",targetId:"id-4a1f597c5f0342d299be2967250c1b53",type:"CompositionRelationship"},{id:"id-774d5c188a8841e58005762a6b0e21aa",sourceId:"id-5abaebd8f9b345f38ae44e5910199184",targetId:"id-5d1eb028aeea4a80ba8796ea1d27a628",type:"AssociationRelationship"},{id:"id-bdacdfd2e39143eaba85973595d1eb63",sourceId:"id-59a6e4d65edf48c782c038fe12f146c3",targetId:"id-f4fe940c68e24d2a9f46e10c7f61445b",type:"CompositionRelationship"},{id:"id-58cbef30a4d24625a8a3546619e35492",sourceId:"id-956c14f27a6d48eb8a654459d13e2c16",targetId:"id-c88d07061c28472fb9877b5655bd6e66",type:"CompositionRelationship"},{id:"id-b17b92045bc343b2add04d2cf2bd49e2",sourceId:"id-cbbf8c0ba9f4498482953b7308d44889",targetId:"id-7a7e1240eb1a447eb3d3f1aa2c3b47d2",type:"CompositionRelationship"},{id:"id-73f8fba335eb4eea9cca9de6b3136a6f",sourceId:"id-6351140ea9d8456a9b780b576b416a13",targetId:"id-357e1b246dcf456d99fce36f5c90f5ba",type:"AssociationRelationship"},{id:"id-c64b4269c810462f95e8f16ee8089baa",sourceId:"id-89daa424413d4f1e88756f5a12c8ed8b",targetId:"id-cbbf8c0ba9f4498482953b7308d44889",type:"AssociationRelationship"},{id:"id-b65b3645c46f47ebb85c594928244e6e",sourceId:"id-89daa424413d4f1e88756f5a12c8ed8b",targetId:"id-59a6e4d65edf48c782c038fe12f146c3",type:"AssociationRelationship"},{id:"id-bccb0c641ea04bad96fc5ebe75f599bb",sourceId:"id-89daa424413d4f1e88756f5a12c8ed8b",targetId:"id-956c14f27a6d48eb8a654459d13e2c16",type:"AssociationRelationship"},{id:"id-0a92d28de70e4ce89bd581ee1647d11b",sourceId:"id-89daa424413d4f1e88756f5a12c8ed8b",targetId:"id-d143a483830148c9916c0f58eef6b56c",type:"AssociationRelationship"}],m=[{id:"id-5486d5b79f3a4be2bd1d7bcf618dd24c",name:"Default View",viewpoint:""}],y={identifier:e,archimateId:a,name:d,description:i,formats:c,source:t,sourceFile:o,sourceFormat:b,timestamp:f,tags:s,duplicates:n,language:r,elements:p,relationships:l,views:m};export{a as archimateId,y as default,i as description,n as duplicates,p as elements,c as formats,e as identifier,r as language,d as name,l as relationships,t as source,o as sourceFile,b as sourceFormat,s as tags,f as timestamp,m as views};