const e="https://me.big.tuwien.ac.at/EAModelSet/id-9fbddf153c1d47ea9846479d7b38ebd4",d="id-9fbddf153c1d47ea9846479d7b38ebd4",a="4_4_1_Integracao",i="",c=["XML","CSV","JSON","ARCHIMATE"],b="GitHub",f="raw-data/github/archimate/4_4_1_integracao.archimate",t="ARCHIMATE",s="29-06-2023 09:31:26",o=[],n=[],r="pt",p=[{id:"id-cd6f4c0c2d0941148e28085d4cfda39b",name:"Cliente",type:"BusinessActor",layer:"business"},{id:"id-b5ab1377f3b54bce9d12b1298e36a582",name:"Fornecedor",type:"BusinessActor",layer:"business"},{id:"id-14895cfc5b0a44fa8737a9f708362710",name:"Serviço de contratação de base de dados certificados",type:"BusinessService",layer:"business"},{id:"id-2fb79a4e3b5f48a5a459196ffc5e84f8",name:"Serviço de desenvolvimento de produtos",type:"BusinessService",layer:"business"},{id:"id-fbe33f37e4ba4fca80bb447de8d6388f",name:"Processo de desenvolvimento de Produtos",type:"BusinessProcess",layer:"business"},{id:"id-04f902ba661d41ab949a3bcfc503be69",name:"Analise de Requisitos",type:"BusinessProcess",layer:"business"},{id:"id-9d3831a6e2754817a0a105e4a4979d3c",name:"Criar épicos",type:"BusinessProcess",layer:"business"},{id:"id-f34764ff0d6c4a58828b38f561fb45af",name:"Criar tarefas",type:"BusinessProcess",layer:"business"},{id:"id-4d36d8d2f1354e86b08c31702f52a370",name:"Planejar Sprint",type:"BusinessProcess",layer:"business"},{id:"id-ab8f77614fa449cfb35298ff6511bd7c",name:"Realizar Codificação",type:"BusinessProcess",layer:"business"},{id:"id-31a5c7916b4e43e0b42c77986051fcf6",name:"Realizar Demonstrações",type:"BusinessProcess",layer:"business"},{id:"id-d4a2cb2535704de09590a2ce113a2664",name:"Equipes Desenvolvimento",type:"BusinessActor",layer:"business"},{id:"id-d506fc949091410e828ab5b2ee2d0762",name:"Cliente requisita produto",type:"BusinessEvent",layer:"business"},{id:"id-01564c6d8d47405ab07da10d89a84ac9",name:"Produtos",type:"BusinessActor",layer:"business"},{id:"id-d5a952516abb47efa48288bf3ab576d8",name:"Oferece serviço de desenvolvimento de soluções",type:"BusinessProcess",layer:"business"},{id:"id-55a96de7ddd54ef7ad103407885c27cf",name:"Processo de Implantação",type:"BusinessProcess",layer:"business"},{id:"id-289e70ac26fb4d7b8e4f0e3a46d1d149",name:"Realizar Deploys",type:"BusinessProcess",layer:"business"},{id:"id-ab91117b54934c3fbf5f55e7852b6bef",name:"Realizar Análise estática de codigo",type:"BusinessProcess",layer:"business"},{id:"id-08ee9c654c464061b00e66419c72c44b",name:"Realizar Analisa de vulnerabilidades",type:"BusinessProcess",layer:"business"},{id:"id-ca8b6339156644c893fb5dfa587184ff",name:"Infraestrutura",type:"BusinessActor",layer:"business"},{id:"id-ca2bf07dda6b4a8984df965296f679b3",name:"Finalização de contrato de Desenvolvimento",type:"BusinessEvent",layer:"business"},{id:"id-b1c2bd61a7e6416da8bdfe3e7eb43245",name:"Suporte",type:"BusinessRole",layer:"business"},{id:"id-add292cd486c475389e130d1e0cf72b4",name:"Gerente de Produtos",type:"BusinessRole",layer:"business"},{id:"id-008394b744d34265b69aee67921a9458",name:"Base de dados adquirida",type:"BusinessObject",layer:"business"},{id:"id-90ce26a69e2c4750856495213025d4a8",name:"RH",type:"BusinessActor",layer:"business"},{id:"id-3994b04dc5d445728c1b6d109bace33e",name:"Gerenciar pessoas",type:"BusinessProcess",layer:"business"},{id:"id-63ca389be8ad4012a31620f09f56efc8",name:"Documento de Requisitos",type:"BusinessObject",layer:"business"},{id:"id-35e84f88602c436481613a99e955a31c",name:"Financeiro",type:"BusinessActor",layer:"business"},{id:"id-0cfa189e9b854295a076d5b169c94e62",name:"Abrir Filiais",type:"BusinessProcess",layer:"business"},{id:"id-45e09c18a5634b2587ea5eadbdb4bbc3",name:"Diretoria Filial",type:"BusinessActor",layer:"business"},{id:"id-cd899b6015c14591955f6ba05f0b3939",name:"Gera relatório de desenvolvimento da Filial",type:"BusinessProcess",layer:"business"},{id:"id-4625ec8c94e5474e961cbfd757f39cb1",name:"Gera relatório de finanças",type:"BusinessProcess",layer:"business"},{id:"id-96b768636ac14a18bccfb65b21645dce",name:"Gera relatório de Desempenho da Filial",type:"BusinessProcess",layer:"business"},{id:"id-458767555c8640b7945138f095da4a2c",name:"Criar Planejamento Estratégico (Filial)",type:"BusinessProcess",layer:"business"},{id:"id-019776553a964266819a5f0a9ea1df9f",name:"Planejamento Estratégico mensal",type:"BusinessObject",layer:"business"},{id:"id-f9cfd0abfc5e487ab9e790d3d9f5c701",name:"Diretoria Matriz",type:"BusinessActor",layer:"business"},{id:"id-e63f36b4b5114fd2bce6260f4fdc9a86",name:"Acompanhar andamento de projetos",type:"BusinessProcess",layer:"business"},{id:"id-9de551bd8fbf4b2d8eb7e023ca12c690",name:"Acompanhar desempenho das equipes de desenvolvimento",type:"BusinessProcess",layer:"business"},{id:"id-c89ee2aab78140f4bf27d26df337d5be",name:"Relatório do Projeto",type:"BusinessObject",layer:"business"},{id:"id-c23debf74b19421fb02dd57598e39c52",name:"Relatório desempenho equipes",type:"BusinessObject",layer:"business"},{id:"id-6beafd3d7955466f9c32205f8473e922",name:"Gitlab",type:"ApplicationComponent",layer:"application"},{id:"id-67c72bc2385c43868378c5cdc841c98e",name:"Microsoft Teams",type:"ApplicationComponent",layer:"application"},{id:"id-b06c003a666b45f499bdaf44190585f2",name:"Microsoft Outlook",type:"ApplicationComponent",layer:"application"},{id:"id-4beade70a5674e21bd9c52e777d6d4d4",name:"Jira",type:"ApplicationComponent",layer:"application"},{id:"id-6e78d192ce7f494089e92ebd8a9a596d",name:"Visual Studio Code",type:"ApplicationComponent",layer:"application"},{id:"id-ad8148076119457f842005cdd8dda97f",name:"Confluence",type:"ApplicationComponent",layer:"application"},{id:"id-1f8bbfba99124257bd49ed8c565f498c",name:"Sistema de consulta de banco de dados",type:"ApplicationComponent",layer:"application"},{id:"id-dbdbe95aa5c7494e8e555cd47aea3073",name:"Código e versionamento",type:"DataObject",layer:"application"},{id:"id-d960463dc9464881a8aeff084cbcaa88",name:"E-mails institucionais e avisos",type:"DataObject",layer:"application"},{id:"id-d4db6e3ed29e4c69bfde7032c1405ca6",name:"Mensagens e reuniões",type:"DataObject",layer:"application"},{id:"id-4e928e4a289945b3b16adc54e255aefd",name:"Dados oriundos dos produtos web",type:"DataObject",layer:"application"},{id:"id-9ee52b71fee34a07be3d31d82e8e23c4",name:"Documentação",type:"DataObject",layer:"application"},{id:"id-2ef5f500e2f947a1837c932111a8fa82",name:"Épicos",type:"DataObject",layer:"application"},{id:"id-7085ab4360d0491b91aa8f859297857c",name:"Tarefas",type:"DataObject",layer:"application"},{id:"id-829c9a55cc9c479299d0e87942983a5f",name:"Requisitos",type:"DataObject",layer:"application"},{id:"id-3e42371769f34c8381188bbc93aef9d2",name:"Agenda",type:"DataObject",layer:"application"},{id:"id-8766b989ec6c4f73a2dd1dd3f78e3db0",name:"Serviço de comunicação",type:"ApplicationService",layer:"application"},{id:"id-85fad48eecad4c388bd0d087297e8f54",name:"Serviço de controle de projetos e documentação",type:"ApplicationService",layer:"application"},{id:"id-1a676f3f92aa429eacbfb32aa636166b",name:"Serviço de versionamento e atualização de código-fonte",type:"ApplicationService",layer:"application"},{id:"id-5aefe8cd66a946eb980065165204517a",name:"Serviço de gerência de banco de dados",type:"ApplicationService",layer:"application"},{id:"id-99ddacbeb854499f9589bbf2fbf0444c",name:"Serviço para gerar relatórios",type:"ApplicationService",layer:"application"},{id:"id-4032cda590cd4977a78d9cadafd68eb7",name:"Serviços de troca de e-mails e avisos",type:"TechnologyService",layer:"technology"},{id:"id-f1fbdb31261c4e82a6bcc6c2134f6bfe",name:"Serviço de versionamento de código",type:"TechnologyService",layer:"technology"},{id:"id-01d12504e8894e7a9c5a9c7b8d4a909d",name:"Serviço de reuniões",type:"TechnologyService",layer:"technology"},{id:"id-72462af08e9f4c5bb4b202212129ee24",name:"Serviço de edição de código-fonte",type:"TechnologyService",layer:"technology"},{id:"id-c087674ea21b4b7fb0445031a2c8ee77",name:"Serviço de consulta e gerenciamento de banco de dados",type:"TechnologyService",layer:"technology"},{id:"id-89daea8dc9414acda8fa7c6cad6bc000",name:"Serviço de controle de tarefas",type:"TechnologyService",layer:"technology"},{id:"id-3f763be4da8e4c4b89f66ebe103aa801",name:"Serviço de disponibilização de documentos",type:"TechnologyService",layer:"technology"},{id:"id-6bc02d77a1d849dc87035cae207eef0a",name:"Serviço de geração de relatórios",type:"TechnologyService",layer:"technology"},{id:"id-07c34c8125f04aedab65ee88d6d1116b",name:"Computador/Laptop",type:"Device",layer:"technology"},{id:"id-999e5f88136c46768097e94928895b83",name:"Internet",type:"CommunicationNetwork",layer:"technology"},{id:"id-abc2ea704b7f41808a3346cc4076c158",name:"Cisco Anyconnect",type:"CommunicationNetwork",layer:"technology"},{id:"id-b9600d12c2f342cc87cea5a9b21b34bb",name:"SGBD",type:"Node",layer:"technology"},{id:"id-d8eb880201634edea2fdc9eef567154e",name:"Servidor",type:"Node",layer:"technology"}],l=[{id:"id-8e2e403fdf6447c798a2a899273955da",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-01d12504e8894e7a9c5a9c7b8d4a909d",type:"RealizationRelationship"},{id:"id-38bfef01159f4d01adb7cd7ce1a73869",sourceId:"id-d8eb880201634edea2fdc9eef567154e",targetId:"id-abc2ea704b7f41808a3346cc4076c158",type:"AssociationRelationship"},{id:"id-43e477cc9e9f4cdd9d3bed6779594e9e",sourceId:"id-9ee52b71fee34a07be3d31d82e8e23c4",targetId:"id-829c9a55cc9c479299d0e87942983a5f",type:"CompositionRelationship"},{id:"id-0ed152bf4d2d42888983eda757e85096",sourceId:"id-6e78d192ce7f494089e92ebd8a9a596d",targetId:"id-dbdbe95aa5c7494e8e555cd47aea3073",type:"AccessRelationship"},{id:"id-1ab5fdc6a33a44f69f9344bdeec0b83b",sourceId:"id-b06c003a666b45f499bdaf44190585f2",targetId:"id-d960463dc9464881a8aeff084cbcaa88",type:"AccessRelationship"},{id:"id-f161c49374634746bf9cffb1ac815fd0",sourceId:"id-4032cda590cd4977a78d9cadafd68eb7",targetId:"id-b06c003a666b45f499bdaf44190585f2",type:"ServingRelationship"},{id:"id-40b3efc76f744c4db06d174cd192dee3",sourceId:"id-67c72bc2385c43868378c5cdc841c98e",targetId:"id-d4db6e3ed29e4c69bfde7032c1405ca6",type:"AccessRelationship"},{id:"id-17d4bc1c666f434db7b18d1afee6a5a5",sourceId:"id-67c72bc2385c43868378c5cdc841c98e",targetId:"id-8766b989ec6c4f73a2dd1dd3f78e3db0",type:"RealizationRelationship"},{id:"id-b0fc5d590f684ee4aba59eb83069d690",sourceId:"id-b9600d12c2f342cc87cea5a9b21b34bb",targetId:"id-999e5f88136c46768097e94928895b83",type:"AssociationRelationship"},{id:"id-100bcdfc85bb48e69161929c785f23b8",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-3f763be4da8e4c4b89f66ebe103aa801",type:"RealizationRelationship"},{id:"id-acbf2a0ff87646e5b242a97aad8b596f",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-6bc02d77a1d849dc87035cae207eef0a",type:"RealizationRelationship"},{id:"id-5a373da04a104e158414adb61f07c31f",sourceId:"id-6bc02d77a1d849dc87035cae207eef0a",targetId:"id-4beade70a5674e21bd9c52e777d6d4d4",type:"ServingRelationship"},{id:"id-b086fa4bcecc4c19a2a3921f253d9304",sourceId:"id-2ef5f500e2f947a1837c932111a8fa82",targetId:"id-7085ab4360d0491b91aa8f859297857c",type:"CompositionRelationship"},{id:"id-d9f6b915cd724452abed2e4f837e6aeb",sourceId:"id-c087674ea21b4b7fb0445031a2c8ee77",targetId:"id-1f8bbfba99124257bd49ed8c565f498c",type:"ServingRelationship"},{id:"id-bd4e9fd5bf0b4279b553f93e869c5e57",sourceId:"id-999e5f88136c46768097e94928895b83",targetId:"id-abc2ea704b7f41808a3346cc4076c158",type:"AssociationRelationship"},{id:"id-35e83aeeb3524ae1a469ccc31204d9e9",sourceId:"id-b9600d12c2f342cc87cea5a9b21b34bb",targetId:"id-abc2ea704b7f41808a3346cc4076c158",type:"AssociationRelationship"},{id:"id-a79688979f4141ed9cfe96ac3362fd85",sourceId:"id-6beafd3d7955466f9c32205f8473e922",targetId:"id-dbdbe95aa5c7494e8e555cd47aea3073",type:"AccessRelationship"},{id:"id-6e243808ca41457c9a5e8de8a0149793",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-abc2ea704b7f41808a3346cc4076c158",type:"AssociationRelationship"},{id:"id-c9d7f69fe802467587bed170f0a2fc3a",sourceId:"id-4beade70a5674e21bd9c52e777d6d4d4",targetId:"id-85fad48eecad4c388bd0d087297e8f54",type:"RealizationRelationship"},{id:"id-3850fc4556b441e0a8826e3894ce9d67",sourceId:"id-b06c003a666b45f499bdaf44190585f2",targetId:"id-3e42371769f34c8381188bbc93aef9d2",type:"AccessRelationship"},{id:"id-30e61e5f2c8849db9eba5d86eca3a61a",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-89daea8dc9414acda8fa7c6cad6bc000",type:"RealizationRelationship"},{id:"id-6bd6074b63644c049501281c653c6b56",sourceId:"id-6bc02d77a1d849dc87035cae207eef0a",targetId:"id-ad8148076119457f842005cdd8dda97f",type:"ServingRelationship"},{id:"id-78c0c42bd0ea4062a24acb0eae11ae2c",sourceId:"id-4beade70a5674e21bd9c52e777d6d4d4",targetId:"id-2ef5f500e2f947a1837c932111a8fa82",type:"AccessRelationship"},{id:"id-79c2b4c42ca146b4ac3f603ecc06b422",sourceId:"id-72462af08e9f4c5bb4b202212129ee24",targetId:"id-6e78d192ce7f494089e92ebd8a9a596d",type:"ServingRelationship"},{id:"id-71d27c0bfd6e48a5868bc80fdfd104a2",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-4032cda590cd4977a78d9cadafd68eb7",type:"RealizationRelationship"},{id:"id-20828db87d304bd9bc27c486e6d1a97d",sourceId:"id-4beade70a5674e21bd9c52e777d6d4d4",targetId:"id-99ddacbeb854499f9589bbf2fbf0444c",type:"RealizationRelationship"},{id:"id-3229b124ab0440d086e417b71c46de6e",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-72462af08e9f4c5bb4b202212129ee24",type:"RealizationRelationship"},{id:"id-b6886602e545471aa9db6a795431eba0",sourceId:"id-89daea8dc9414acda8fa7c6cad6bc000",targetId:"id-4beade70a5674e21bd9c52e777d6d4d4",type:"ServingRelationship"},{id:"id-2cd58e7cd5f243d88ae5e62c227e4eea",sourceId:"id-d8eb880201634edea2fdc9eef567154e",targetId:"id-999e5f88136c46768097e94928895b83",type:"AssociationRelationship"},{id:"id-1c40a501490641c289d35a88802d8882",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-f1fbdb31261c4e82a6bcc6c2134f6bfe",type:"RealizationRelationship"},{id:"id-3a6ad46b9ce54d1cabed4ca0fa252e46",sourceId:"id-1f8bbfba99124257bd49ed8c565f498c",targetId:"id-4e928e4a289945b3b16adc54e255aefd",type:"AccessRelationship"},{id:"id-4681b296ec3b4b41ac9e7d0eff3c3394",sourceId:"id-2ef5f500e2f947a1837c932111a8fa82",targetId:"id-829c9a55cc9c479299d0e87942983a5f",type:"AssociationRelationship"},{id:"id-f9c6e473161e43ec959446f2fe2a6f5b",sourceId:"id-01d12504e8894e7a9c5a9c7b8d4a909d",targetId:"id-67c72bc2385c43868378c5cdc841c98e",type:"ServingRelationship"},{id:"id-e736ba2d121443ee91918cae97cec557",sourceId:"id-b06c003a666b45f499bdaf44190585f2",targetId:"id-8766b989ec6c4f73a2dd1dd3f78e3db0",type:"RealizationRelationship"},{id:"id-8c71539127f54b7fb639ea91fe2cd19c",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-999e5f88136c46768097e94928895b83",type:"AssociationRelationship"},{id:"id-42423a92499a48dfa9f71d7f5f873f6a",sourceId:"id-ad8148076119457f842005cdd8dda97f",targetId:"id-85fad48eecad4c388bd0d087297e8f54",type:"RealizationRelationship"},{id:"id-4527c74b0df84f8ca56d9ba437e6e25a",sourceId:"id-6e78d192ce7f494089e92ebd8a9a596d",targetId:"id-1a676f3f92aa429eacbfb32aa636166b",type:"RealizationRelationship"},{id:"id-a4d57ab60ef0496ebdf1032c04530809",sourceId:"id-ad8148076119457f842005cdd8dda97f",targetId:"id-9ee52b71fee34a07be3d31d82e8e23c4",type:"AccessRelationship"},{id:"id-e4cd184b03ad42f8936820ef16d22cd1",sourceId:"id-6beafd3d7955466f9c32205f8473e922",targetId:"id-6e78d192ce7f494089e92ebd8a9a596d",type:"ServingRelationship"},{id:"id-4f6ce8449d6a4a809c5cefbb147614d7",sourceId:"id-f1fbdb31261c4e82a6bcc6c2134f6bfe",targetId:"id-6beafd3d7955466f9c32205f8473e922",type:"ServingRelationship"},{id:"id-ca36b9ae6a944e3e85f25435b0267b43",sourceId:"id-ad8148076119457f842005cdd8dda97f",targetId:"id-99ddacbeb854499f9589bbf2fbf0444c",type:"RealizationRelationship"},{id:"id-d09ffe582b584670b59b650afc7e7fbb",sourceId:"id-07c34c8125f04aedab65ee88d6d1116b",targetId:"id-c087674ea21b4b7fb0445031a2c8ee77",type:"RealizationRelationship"},{id:"id-0672f4fa0bc542d1897efd3f96fd9024",sourceId:"id-1f8bbfba99124257bd49ed8c565f498c",targetId:"id-5aefe8cd66a946eb980065165204517a",type:"RealizationRelationship"},{id:"id-cd731190325542408ce78134b1aa3c12",sourceId:"id-3f763be4da8e4c4b89f66ebe103aa801",targetId:"id-ad8148076119457f842005cdd8dda97f",type:"ServingRelationship"},{id:"id-73f27238f686449db18cd54f93e6db4b",sourceId:"id-6beafd3d7955466f9c32205f8473e922",targetId:"id-1a676f3f92aa429eacbfb32aa636166b",type:"RealizationRelationship"},{id:"id-10663d7eb0624b258e2dd83b9f5107d6",sourceId:"id-b9600d12c2f342cc87cea5a9b21b34bb",targetId:"id-c087674ea21b4b7fb0445031a2c8ee77",type:"RealizationRelationship"},{id:"id-8a2ace2c944d4aa486d466bf7eca62bf",sourceId:"id-dbdbe95aa5c7494e8e555cd47aea3073",targetId:"id-1f8bbfba99124257bd49ed8c565f498c",type:"AssociationRelationship"},{id:"id-7bae12c4d9874d9ea6f4578dffe2c7a4",sourceId:"id-458767555c8640b7945138f095da4a2c",targetId:"id-019776553a964266819a5f0a9ea1df9f",type:"AssociationRelationship"},{id:"id-4f4e6a8a109a4e9ea02bb51373d3e027",sourceId:"id-ab8f77614fa449cfb35298ff6511bd7c",targetId:"id-31a5c7916b4e43e0b42c77986051fcf6",type:"TriggeringRelationship"},{id:"id-df7204e0b0764a3c911bc7f3d74bb70f",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-ab8f77614fa449cfb35298ff6511bd7c",type:"CompositionRelationship"},{id:"id-d2c65889977645cba1e3974aa6e496bf",sourceId:"id-add292cd486c475389e130d1e0cf72b4",targetId:"id-9d3831a6e2754817a0a105e4a4979d3c",type:"AssignmentRelationship"},{id:"id-d1d36bb5181b4598926854476b22d81f",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-9d3831a6e2754817a0a105e4a4979d3c",type:"CompositionRelationship"},{id:"id-261483ccc8254780b34c017dcffe0414",sourceId:"id-9de551bd8fbf4b2d8eb7e023ca12c690",targetId:"id-c23debf74b19421fb02dd57598e39c52",type:"AssociationRelationship"},{id:"id-4c0fc3f204044ab397fffacdcc434d45",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-55a96de7ddd54ef7ad103407885c27cf",type:"TriggeringRelationship"},{id:"id-4bf0edfaff614c888616831d46d456e3",sourceId:"id-ca8b6339156644c893fb5dfa587184ff",targetId:"id-b1c2bd61a7e6416da8bdfe3e7eb43245",type:"AssignmentRelationship"},{id:"id-f8162f0e64b74405a54f51db73b51b64",sourceId:"id-2fb79a4e3b5f48a5a459196ffc5e84f8",targetId:"id-cd6f4c0c2d0941148e28085d4cfda39b",type:"ServingRelationship"},{id:"id-8939c6bd55c64e8e848283956fa9efd9",sourceId:"id-45e09c18a5634b2587ea5eadbdb4bbc3",targetId:"id-c89ee2aab78140f4bf27d26df337d5be",type:"AccessRelationship"},{id:"id-a4964ee3a1d842279e8c4d62a2dcac6f",sourceId:"id-add292cd486c475389e130d1e0cf72b4",targetId:"id-e63f36b4b5114fd2bce6260f4fdc9a86",type:"AssignmentRelationship"},{id:"id-cb03ba95cad943e79979db5f9fca7690",sourceId:"id-01564c6d8d47405ab07da10d89a84ac9",targetId:"id-14895cfc5b0a44fa8737a9f708362710",type:"RealizationRelationship"},{id:"id-efcec99410f648e5b56dbb6e6970324e",sourceId:"id-55a96de7ddd54ef7ad103407885c27cf",targetId:"id-289e70ac26fb4d7b8e4f0e3a46d1d149",type:"CompositionRelationship"},{id:"id-a78dac85ef9a4f4a85a0462353f33cde",sourceId:"id-d4a2cb2535704de09590a2ce113a2664",targetId:"id-fbe33f37e4ba4fca80bb447de8d6388f",type:"AssignmentRelationship"},{id:"id-cd71dc5bb3624337b61692455ad64415",sourceId:"id-9d3831a6e2754817a0a105e4a4979d3c",targetId:"id-f34764ff0d6c4a58828b38f561fb45af",type:"TriggeringRelationship"},{id:"id-5733184e048f400eb1cf221a3eccf9ef",sourceId:"id-add292cd486c475389e130d1e0cf72b4",targetId:"id-019776553a964266819a5f0a9ea1df9f",type:"AccessRelationship"},{id:"id-59ecf54dcfad4477834c72cfc3839bae",sourceId:"id-01564c6d8d47405ab07da10d89a84ac9",targetId:"id-d5a952516abb47efa48288bf3ab576d8",type:"AssignmentRelationship"},{id:"id-19ec5b2cc2774b6d84e968ff0bb45ed6",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-31a5c7916b4e43e0b42c77986051fcf6",type:"CompositionRelationship"},{id:"id-402a588e95e74fb1aa866b8e0e81d017",sourceId:"id-35e84f88602c436481613a99e955a31c",targetId:"id-4625ec8c94e5474e961cbfd757f39cb1",type:"AssignmentRelationship"},{id:"id-caf15fdc6595411cac81e9fb3d8b3316",sourceId:"id-01564c6d8d47405ab07da10d89a84ac9",targetId:"id-add292cd486c475389e130d1e0cf72b4",type:"AssignmentRelationship"},{id:"id-f7411adfe2cb45909fe1fa806678df33",sourceId:"id-b1c2bd61a7e6416da8bdfe3e7eb43245",targetId:"id-55a96de7ddd54ef7ad103407885c27cf",type:"AssignmentRelationship"},{id:"id-01634d606303459285807b20de381da7",sourceId:"id-55a96de7ddd54ef7ad103407885c27cf",targetId:"id-08ee9c654c464061b00e66419c72c44b",type:"CompositionRelationship"},{id:"id-d056a5a172414c7eaa4be292e8656439",sourceId:"id-f9cfd0abfc5e487ab9e790d3d9f5c701",targetId:"id-458767555c8640b7945138f095da4a2c",type:"AssignmentRelationship"},{id:"id-cb58c3242f94464dad651f020d38083e",sourceId:"id-45e09c18a5634b2587ea5eadbdb4bbc3",targetId:"id-c23debf74b19421fb02dd57598e39c52",type:"AccessRelationship"},{id:"id-bcb794c31bfd4bb9b9a3fbec2efa00f5",sourceId:"id-45e09c18a5634b2587ea5eadbdb4bbc3",targetId:"id-96b768636ac14a18bccfb65b21645dce",type:"AssignmentRelationship"},{id:"id-850f2582297643a9b6c11739156fc4dc",sourceId:"id-55a96de7ddd54ef7ad103407885c27cf",targetId:"id-ab91117b54934c3fbf5f55e7852b6bef",type:"CompositionRelationship"},{id:"id-d2928ab405a44e83818c1dc091cacae6",sourceId:"id-cd6f4c0c2d0941148e28085d4cfda39b",targetId:"id-04f902ba661d41ab949a3bcfc503be69",type:"AssociationRelationship"},{id:"id-f119f76fc54f449997c8c163fcb0af00",sourceId:"id-add292cd486c475389e130d1e0cf72b4",targetId:"id-f34764ff0d6c4a58828b38f561fb45af",type:"AssignmentRelationship"},{id:"id-246d83ef8ef849fc8795c4bb84ba96b3",sourceId:"id-e63f36b4b5114fd2bce6260f4fdc9a86",targetId:"id-c89ee2aab78140f4bf27d26df337d5be",type:"AssociationRelationship"},{id:"id-d2259bab57174f869cd9338252be0cf4",sourceId:"id-f34764ff0d6c4a58828b38f561fb45af",targetId:"id-4d36d8d2f1354e86b08c31702f52a370",type:"TriggeringRelationship"},{id:"id-8049c8fd80094baaa4917c2504bcc8b3",sourceId:"id-96b768636ac14a18bccfb65b21645dce",targetId:"id-f9cfd0abfc5e487ab9e790d3d9f5c701",type:"ServingRelationship"},{id:"id-c3d24a71eb0845f6a896df91a3c24bdb",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-f34764ff0d6c4a58828b38f561fb45af",type:"CompositionRelationship"},{id:"id-2104bf324ca040f192ce449d9813119b",sourceId:"id-04f902ba661d41ab949a3bcfc503be69",targetId:"id-63ca389be8ad4012a31620f09f56efc8",type:"AssociationRelationship"},{id:"id-e4f7fd121acd4816ab01ffc2570690e0",sourceId:"id-08ee9c654c464061b00e66419c72c44b",targetId:"id-ab91117b54934c3fbf5f55e7852b6bef",type:"TriggeringRelationship"},{id:"id-63d2bb8e7b664d22a6be755ad3224984",sourceId:"id-55a96de7ddd54ef7ad103407885c27cf",targetId:"id-ca2bf07dda6b4a8984df965296f679b3",type:"FlowRelationship"},{id:"id-9bfa1b2090e84a2ab9be068781aacb6a",sourceId:"id-14895cfc5b0a44fa8737a9f708362710",targetId:"id-b5ab1377f3b54bce9d12b1298e36a582",type:"ServingRelationship"},{id:"id-58ba423aeaa54433aabe3b9485bac12b",sourceId:"id-008394b744d34265b69aee67921a9458",targetId:"id-14895cfc5b0a44fa8737a9f708362710",type:"AssociationRelationship"},{id:"id-1f6a9031d99a4a749de7bc79622f3ee4",sourceId:"id-d5a952516abb47efa48288bf3ab576d8",targetId:"id-2fb79a4e3b5f48a5a459196ffc5e84f8",type:"RealizationRelationship"},{id:"id-580241c372964af194816420fdf7bc7b",sourceId:"id-04f902ba661d41ab949a3bcfc503be69",targetId:"id-9d3831a6e2754817a0a105e4a4979d3c",type:"TriggeringRelationship"},{id:"id-5da90f2766cd4f04b99d7121fc583639",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-008394b744d34265b69aee67921a9458",type:"AccessRelationship"},{id:"id-63e947788a944cccbfdac39db276cd51",sourceId:"id-cd899b6015c14591955f6ba05f0b3939",targetId:"id-f9cfd0abfc5e487ab9e790d3d9f5c701",type:"ServingRelationship"},{id:"id-e71c0ff4531d4f278f76bb8b71bc5026",sourceId:"id-4d36d8d2f1354e86b08c31702f52a370",targetId:"id-ab8f77614fa449cfb35298ff6511bd7c",type:"TriggeringRelationship"},{id:"id-748c353585f743789b87e49dd5bc7575",sourceId:"id-90ce26a69e2c4750856495213025d4a8",targetId:"id-3994b04dc5d445728c1b6d109bace33e",type:"AssignmentRelationship"},{id:"id-9ae6c633a3d5496f84b878ac27750c9c",sourceId:"id-add292cd486c475389e130d1e0cf72b4",targetId:"id-9de551bd8fbf4b2d8eb7e023ca12c690",type:"AssignmentRelationship"},{id:"id-47c5cf5949774f9f973a59a01b281c13",sourceId:"id-ab91117b54934c3fbf5f55e7852b6bef",targetId:"id-289e70ac26fb4d7b8e4f0e3a46d1d149",type:"TriggeringRelationship"},{id:"id-492aa86330c24adb804fe0a474dbf058",sourceId:"id-d506fc949091410e828ab5b2ee2d0762",targetId:"id-fbe33f37e4ba4fca80bb447de8d6388f",type:"TriggeringRelationship"},{id:"id-89bb4d3d561d42bf9f0a2620fa79cbf3",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-4d36d8d2f1354e86b08c31702f52a370",type:"CompositionRelationship"},{id:"id-f6ce0afc57084e8fbc242ce1f78525fb",sourceId:"id-d506fc949091410e828ab5b2ee2d0762",targetId:"id-d5a952516abb47efa48288bf3ab576d8",type:"TriggeringRelationship"},{id:"id-5cb683eb3f7442a89881cf13fd01110d",sourceId:"id-d4a2cb2535704de09590a2ce113a2664",targetId:"id-55a96de7ddd54ef7ad103407885c27cf",type:"AssignmentRelationship"},{id:"id-59df60523f274e669a7fd120d162110f",sourceId:"id-fbe33f37e4ba4fca80bb447de8d6388f",targetId:"id-04f902ba661d41ab949a3bcfc503be69",type:"CompositionRelationship"},{id:"id-a6305026380148fca868bfe3db5e3dc0",sourceId:"id-4625ec8c94e5474e961cbfd757f39cb1",targetId:"id-f9cfd0abfc5e487ab9e790d3d9f5c701",type:"ServingRelationship"},{id:"id-c5ac8ab06c3f49f4b58ad075ee5a85b4",sourceId:"id-45e09c18a5634b2587ea5eadbdb4bbc3",targetId:"id-cd899b6015c14591955f6ba05f0b3939",type:"AssignmentRelationship"},{id:"id-016bac05a8dc44b89afba4d3eb264a91",sourceId:"id-add292cd486c475389e130d1e0cf72b4",targetId:"id-4d36d8d2f1354e86b08c31702f52a370",type:"AssignmentRelationship"},{id:"id-408723acdfe3433fb77181c4d619d21e",sourceId:"id-35e84f88602c436481613a99e955a31c",targetId:"id-0cfa189e9b854295a076d5b169c94e62",type:"AssignmentRelationship"},{id:"id-808b7eace229456fae42dbd607689865",sourceId:"id-8766b989ec6c4f73a2dd1dd3f78e3db0",targetId:"id-31a5c7916b4e43e0b42c77986051fcf6",type:"ServingRelationship"},{id:"id-2377f5937ce6419d88858407c9deaa97",sourceId:"id-85fad48eecad4c388bd0d087297e8f54",targetId:"id-04f902ba661d41ab949a3bcfc503be69",type:"ServingRelationship"},{id:"id-107940ebba0949e7b0767c0b200cdaa1",sourceId:"id-85fad48eecad4c388bd0d087297e8f54",targetId:"id-f34764ff0d6c4a58828b38f561fb45af",type:"ServingRelationship"},{id:"id-e70886fdb28744ce9db499ef332d15b7",sourceId:"id-85fad48eecad4c388bd0d087297e8f54",targetId:"id-9d3831a6e2754817a0a105e4a4979d3c",type:"ServingRelationship"},{id:"id-2b815a8310104af59911d51fc69afd0a",sourceId:"id-8766b989ec6c4f73a2dd1dd3f78e3db0",targetId:"id-04f902ba661d41ab949a3bcfc503be69",type:"ServingRelationship"},{id:"id-7de9496ab8524dd9b84bdb413c6dc15e",sourceId:"id-5aefe8cd66a946eb980065165204517a",targetId:"id-ab8f77614fa449cfb35298ff6511bd7c",type:"ServingRelationship"},{id:"id-10aa5940578f49d692da379ada8d1d45",sourceId:"id-1a676f3f92aa429eacbfb32aa636166b",targetId:"id-08ee9c654c464061b00e66419c72c44b",type:"ServingRelationship"},{id:"id-a596844d75c741b2b5154293639c1880",sourceId:"id-1a676f3f92aa429eacbfb32aa636166b",targetId:"id-ab91117b54934c3fbf5f55e7852b6bef",type:"ServingRelationship"},{id:"id-0ce6bc5cfaca432d9b255891ca479451",sourceId:"id-1a676f3f92aa429eacbfb32aa636166b",targetId:"id-ab8f77614fa449cfb35298ff6511bd7c",type:"ServingRelationship"},{id:"id-6620d8e0356e46898b67eaaf0c6089af",sourceId:"id-8766b989ec6c4f73a2dd1dd3f78e3db0",targetId:"id-4d36d8d2f1354e86b08c31702f52a370",type:"ServingRelationship"},{id:"id-a40d5935d1af424fa0ba089b49a8598b",sourceId:"id-99ddacbeb854499f9589bbf2fbf0444c",targetId:"id-9de551bd8fbf4b2d8eb7e023ca12c690",type:"ServingRelationship"},{id:"id-fb858d25cad84e93a6dcef2e5b40952c",sourceId:"id-99ddacbeb854499f9589bbf2fbf0444c",targetId:"id-e63f36b4b5114fd2bce6260f4fdc9a86",type:"ServingRelationship"}],y=[{id:"id-9daf3117d90a4899a2e5b3020c2d2424",name:"4_4_1_Integracao",viewpoint:""}],u={identifier:e,archimateId:d,name:a,description:i,formats:c,source:b,sourceFile:f,sourceFormat:t,timestamp:s,tags:o,duplicates:n,language:r,elements:p,relationships:l,views:y};export{d as archimateId,u as default,i as description,n as duplicates,p as elements,c as formats,e as identifier,r as language,a as name,l as relationships,b as source,f as sourceFile,t as sourceFormat,o as tags,s as timestamp,y as views};