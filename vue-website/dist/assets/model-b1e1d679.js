const e="https://me.big.tuwien.ac.at/EAModelSet/id-7fc544e33c4f4180a08c7aa9afffe52f",a="id-7fc544e33c4f4180a08c7aa9afffe52f",d="(new model)",i="",c=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",o="raw-data/github/archimate/projetogovernança1304.archimate",b="ARCHIMATE",f="29-06-2023 09:30:19",s=["DUPLICATE"],n=["raw-data/github/archimate/projetogovernaça3sia.archimate"],r="pt",p=[{id:"id-df75fa91711c48f1929ccc21f6370f39",name:"Suporte tecnico ao cliente",type:"BusinessProcess",layer:"business"},{id:"id-339273d2fc854190930580b4a65446c1",name:"Assistenci ao cliente do produto de sofhouse",type:"BusinessService",layer:"business"},{id:"id-2081373f5881449981f4abb12a8980eb",name:"Cliente aciona o suporte",type:"BusinessEvent",layer:"business"},{id:"id-c55c9496a07d4ae79246dd4e938484f7",name:"Registrar o contato do cliente",type:"BusinessFunction",layer:"business"},{id:"id-3f50873d1bd64403b811c41fdc985c5b",name:"Detalhar o sintoma do problema",type:"BusinessFunction",layer:"business"},{id:"id-438b64362fb14d1cbd257374a585e283",name:"Buscar solução conhecida",type:"BusinessFunction",layer:"business"},{id:"id-d9909c8b290d48f9aaaada77a4e9b315",name:"Registrar solução do chamado com uma solução conhecida",type:"BusinessFunction",layer:"business"},{id:"id-8e1c1f8e787641feac397f101db26cd9",name:"Trabalhar uma nova solução",type:"BusinessFunction",layer:"business"},{id:"id-90fb26d50aaa42019a96a57172d31421",name:"Fechar o chamado",type:"BusinessFunction",layer:"business"},{id:"id-00951a8770e440c79e23783240f405ca",name:"Registrar nova solução no chamdo",type:"BusinessFunction",layer:"business"},{id:"id-93c87753d477498cb778baf6e22b1bc0",name:"Adicionar solução no banco de soluções",type:"BusinessFunction",layer:"business"},{id:"id-db8dd238b49344ca943093676e66957d",name:"Transferir chamado para outro analista",type:"BusinessFunction",layer:"business"},{id:"id-c7b45c770f554a5bbae3a7f2abe6dc49",name:"Avaliar atendimento",type:"BusinessProcess",layer:"business"},{id:"id-3a3a1cab30cb41cea59a341e7ef87590",name:"Chamado resolvido",type:"BusinessEvent",layer:"business"},{id:"id-2f1e1c13ab2e4cdb9f2528eba6963c64",name:"Enviar e-mail de pesquisa",type:"BusinessFunction",layer:"business"},{id:"id-94837869ce71403ba73b203b64e22f18",name:"Atribuir nota",type:"BusinessFunction",layer:"business"},{id:"id-3812ee0629ac4d91a86cf00ebc3829d8",name:"Chamado avaliado",type:"BusinessEvent",layer:"business"},{id:"id-101e5266db194698acc98e65a0a9edb2",name:"Chamado não avaliado",type:"BusinessEvent",layer:"business"},{id:"id-0940bd89dfd747babe572200045b9bc6",name:"Analista de suporte",type:"BusinessActor",layer:"business"},{id:"id-4fa401fdeba4474eb53ff9b259a69d5a",name:"DBA",type:"BusinessActor",layer:"business"},{id:"id-f9a4a109ba3d451794cadac5f8d6e910",name:"Analista de Redes",type:"BusinessActor",layer:"business"},{id:"id-d32c4fa7951d4d91a3778057e3507873",name:"Analista de segurança",type:"BusinessActor",layer:"business"},{id:"id-3428c368d1c84aa088364939adb1216d",name:"Solucionador",type:"BusinessRole",layer:"business"},{id:"id-30cbddc11d8645bb8d9104e580a5dc73",name:"Analista de sistemas",type:"BusinessActor",layer:"business"},{id:"id-d19013c8b0be426691c9c9455509d72b",name:"Contato de cliente",type:"BusinessRole",layer:"business"},{id:"id-4cbf5b16676a4ea58882f7411a0327d9",name:"WEB",type:"ApplicationInterface",layer:"application"},{id:"id-36952169063b462584cb58a865589369",name:"Sistema de mensageria eletronica",type:"ApplicationInterface",layer:"application"},{id:"id-23e3850e3d134944a5676cf0ba4c2879",name:"Tela de login do atendente",type:"ApplicationComponent",layer:"application"},{id:"id-9ee8ea0ba5cc48ed9ccd4d4a2cb7f0e0",name:"Tela de indentificação do cliente e descrição de novo chamado(programado em React)",type:"ApplicationComponent",layer:"application"},{id:"id-da975cc73b5c40e68ef9e68bf430af38",name:"Aplicação de confirmação de dados de login de atendente",type:"ApplicationComponent",layer:"application"},{id:"id-1f0f48d81860410d89e835ad28032347",name:"Validação de credenciais informadas",type:"ApplicationCollaboration",layer:"application"},{id:"id-ab082b57261f4d99b1ded7b8e06fe0bb",name:"Base de dados de registros de credenciais (Id e senha do usuario)de acesso de colaboradores para sistemas",type:"DataObject",layer:"application"},{id:"id-70efae8b3a18405b9f556db44abbc810",name:"Comuniação via XML para transitar informações digitadas pelo usuario e retornar se as credenciais são validas ou não para acessar o sistema de help desk",type:"ApplicationInteraction",layer:"application"},{id:"id-222ad496ad51413394bc6b6a7d26454f",name:"Autenticação",type:"ApplicationFunction",layer:"application"},{id:"id-25548f0917644dc491de6608f93a73f3",name:"Camada de segurança da aplicação",type:"ApplicationService",layer:"application"},{id:"id-388f35ebd45a4eabbdc116273000e70a",name:"Aplicação de geração de protocolo de chamado",type:"ApplicationComponent",layer:"application"},{id:"id-8acc904e8e5c43d8b552fd136041997a",name:"Aplicação de inclução de novo chamado",type:"ApplicationComponent",layer:"application"},{id:"id-9d1e0b44ef3543e9840c06efe922439a",name:"Guarda dos dados informando sobra uma ocorrencia de um cliente, gerando um protocolo de acompanhamento",type:"ApplicationCollaboration",layer:"application"},{id:"id-9528698c579e44ecb275ebd4ff62d7bb",name:"Comuniação via XML para transitar informações digitadas pelo usuario e  retomar um protocolo que confirma a  guarda dos dados do chamado em um banco de dados",type:"ApplicationInteraction",layer:"application"},{id:"id-a252404067044c78baa9e36cae3c8983",name:"Geração de protocolo numerado sequencialmente para idetificar o chamado",type:"ApplicationCollaboration",layer:"application"},{id:"id-669d0086b3c04ec8ba8a24a8a85a5c7c",name:"Comunicação por parâmetros dos programas em JAVA",type:"ApplicationInteraction",layer:"application"},{id:"id-41c0f785f1024c2ba5e924f2dee7f4b3",name:"Registrar ocorrencia do cliente",type:"ApplicationFunction",layer:"application"},{id:"id-aec810e25122483b8c2169511a21085e",name:"Chamado técnico(idprotocolo, dt e hr d registro, id cliente , id protocolo suportado, descrição d sintoma)",type:"DataObject",layer:"application"},{id:"id-4ef3cf9f165746739f27b35416b5ac65",name:"Interface com usuario final",type:"ApplicationService",layer:"application"},{id:"id-1206293f789646e4a52667867603fb86",name:"Procssamento de regras de negocios e acessos a dados(back-end)",type:"ApplicationService",layer:"application"},{id:"id-afbb722130da4a90b0208ee3e2ab04a2",name:"PC do usuario em homeoffice(8GB RAM, 1TB HD, Intel Core Pentium, Interface WiFi)",type:"Device",layer:"technology"},{id:"id-377725332d464a2995d198fac72a29cb",name:"Internet",type:"CommunicationNetwork",layer:"technology"},{id:"id-8bd1348fa44b4f518a3c1b606eddb93a",name:"Windows com navegador Fire, Chrome ou Edger",type:"Device",layer:"technology"},{id:"id-b35f37d34159420086a20f2797f15160",name:"Windows com navegado Fireox, Chrome ou Edge",type:"SystemSoftware",layer:"technology"},{id:"id-b974906912134acd9d17b3f9b684d265",name:"Firewall(PIX Cisco)",type:"Node",layer:"technology"},{id:"id-9395014e9fbe4e5e96ab24404beda727",name:"LAN(ethernet)",type:"CommunicationNetwork",layer:"technology"},{id:"id-eda43ffd1f0145258676dcc7bea7dcb7",name:"Sinal de rede sem fio",type:"Path",layer:"technology"},{id:"id-3a953e405f304698a94a80266ec29ca4",name:"Hotspot WiFi Cisco",type:"Node",layer:"technology"},{id:"id-3770d811b91b4ba988ba211aa965c003",name:"Fibra otica",type:"Path",layer:"technology"},{id:"id-998e2d6174b44c29b6d52f1d64850c35",name:"Router e internet",type:"Node",layer:"technology"},{id:"id-978ab329506c4b26a5b8c6ea2ff69ea6",name:"Cabeamento par trançado(Categoria 5e)",type:"Path",layer:"technology"},{id:"id-06756041ebc447d5a953d2770ab4ee3a",name:"Switch router colapsador",type:"Node",layer:"technology"},{id:"id-2e51fadba19340eab58c9f2741f528a4",name:"Cabeamento par trançado(Categoria 5e)",type:"Path",layer:"technology"},{id:"id-ac13fe5b1e124a588fa6177ef3db829c",name:"App Server( 20gb Ram, 2TB HD interno, Intel Quad processado, interface rede ethernet, dual fonte , discos hot swap com RAID5)",type:"Node",layer:"technology"},{id:"id-09a926b33caa4fb8acd835055fdc844f",name:"LINUX, Apache",type:"SystemSoftware",layer:"technology"},{id:"id-3c4b898ac1664c69a86ff562ba1fd443",name:"DB Server( 20gb Ram, 2TB HD interno, Intel Quad processado, interface rede ethernet dual, dual fonte , discos hot swap com RAID1)",type:"Node",layer:"technology"},{id:"id-965dec3b598b46d9b2e3bfec49343fb1",name:"UNIX, ORACLE",type:"SystemSoftware",layer:"technology"},{id:"id-c8cbbabe45434cbdb5d1b797282bdc71",name:"Storage EMC2(14TB HD em RAID5, com discos HotSwap , 2 fontes de energia , 2 interfaces de rede ethernet, 10 portas FCAL para servidores)",type:"Node",layer:"technology"},{id:"id-f9c46119cc2447068c9627a61efb50ab",name:"Fibra otica",type:"Path",layer:"technology"},{id:"id-52b8afe6a0c84034af58d21583b7cdd9",name:"Dono da softhose",type:"Stakeholder",layer:"motivation"},{id:"id-b86ff09b5bef4d31bf57c389d31dec9b",name:"Controle formal sobre os chamados",type:"Driver",layer:"motivation"},{id:"id-123ac5de2bb24a36adf1f31deb9ea085",name:"Registre funcionarios e seus atendimentos ",type:"Assessment",layer:"motivation"},{id:"id-47f31a6d7e0a4096b8a9f52fca8cbf10",name:"Conhecer a satisfação do cliente com o atendimento",type:"Assessment",layer:"motivation"},{id:"id-10a74ed33d764c66ae5002d5762c95a2",name:"Gestão da equipe de suporte",type:"Goal",layer:"motivation"},{id:"id-7982215fddb84800b7d37c1baa0df86a",name:"Gestão sobre clientes com acesso ao suporte",type:"Goal",layer:"motivation"},{id:"id-fa9331e19e204828b5691215966af21f",name:"Gestão dos chamados técnicos",type:"Goal",layer:"motivation"},{id:"id-3c56e0afa46740fcb74ce713b7dc0fb3",name:"Avaliação geral de satisfação do cliente",type:"Goal",layer:"motivation"},{id:"id-abc2270821b643ffb77a47aaeb1f2018",name:"Avaliações são opcionais",type:"Principle",layer:"motivation"},{id:"id-2b2672d0786d4e0381933c1ae0658d90",name:"100% dos chamados devem ser registrados",type:"Principle",layer:"motivation"},{id:"id-bd634c0ecf3945eabe7811134d200c9b",name:"Cadastrar analistas de suporte ",type:"Requirement",layer:"motivation"},{id:"id-184cec66f2f444ce938745c294ff488b",name:"Cadastrar especialidades vinculadas aos analistas",type:"Requirement",layer:"motivation"},{id:"id-886ae7b5625d4eb2b5adb83df913ff2f",name:"Cadstro de cliente com direito a suporte",type:"Requirement",layer:"motivation"},{id:"id-1b7137241a9148348f5304d5079f1784",name:"Produtos implantados no cliente",type:"Requirement",layer:"motivation"},{id:"id-fd02181892974ab9b03094ea862c6379",name:"Registrar o contato do cliente",type:"Requirement",layer:"motivation"},{id:"id-0166a0f427f44279956241e4ffe74eab",name:"Registrar o sintoma do problema",type:"Requirement",layer:"motivation"},{id:"id-73a5e3392f6844a58819cc44c8d5a5cc",name:"Pesquisar solução catalogada",type:"Requirement",layer:"motivation"},{id:"id-632978010d72467ab8f60d07d55617e1",name:"Movimentar chamado entre analista",type:"Requirement",layer:"motivation"},{id:"id-d9c558eef7e54f9ca801caa5c04d70c3",name:"Registrar solução",type:"Requirement",layer:"motivation"},{id:"id-2b8185a3fa774f57873a4f095f8e19d6",name:"Consultar fila de chamados em aberto",type:"Requirement",layer:"motivation"},{id:"id-b6fccbd5d83d452c80fc7d7d26692d79",name:"Permitir avaliação pelo cliente sobre o atendimento recebido",type:"Requirement",layer:"motivation"},{id:"id-652b9c9487f3497b8f5584cc65e9cb27",name:"Cadastrar detalhes de id_funcionario, nome, setor, especialidade",type:"Constraint",layer:"motivation"},{id:"id-50f32059f12e47a58d60710cc1591efe",name:"Cadastrar id_funcionalidade, descrição_fução",type:"Constraint",layer:"motivation"},{id:"id-67432cf554b94bcbb661792d55c51574",name:"Informar id_cliente, nome, cnpj, endereço, telefone",type:"Constraint",layer:"motivation"},{id:"id-2521a483996d4064bf553e6772261aa6",name:"Informar id_produto, Nome_produto, id_clienteassociado",type:"Constraint",layer:"motivation"},{id:"id-2079585f8e7946e69d0a1569d61ce560",name:"Informar numero_chamado, data_chamdo, id_cliente,  id_produto",type:"Constraint",layer:"motivation"},{id:"id-5fcc4c0520024a2088e8789c7f5af0e5",name:"Descrever em forma de texto o problema sentido pelo usuário",type:"Requirement",layer:"motivation"},{id:"id-e86a415a8ade473ea9a129a88d7fdbfb",name:"",type:"Requirement",layer:"motivation"},{id:"id-8bbabf224bd04fe8bd04ac9f61e2237f",name:"Banco de dados de soluções conhecidas para sintomas pré_cadastradas",type:"Constraint",layer:"motivation"},{id:"id-5232125a4e52495899950f876cfb9cbb",name:"Transferencia entre analistas de especialidades igual ou diferente é livre",type:"Constraint",layer:"motivation"},{id:"id-5a81cabe2cb64c3f919c2abda8035bc5",name:"Atualizar o registro de chamada com a solução aplicada, guardando a data e hora do fechamento do atendimento",type:"Requirement",layer:"motivation"},{id:"id-5ab7ca0bd03d421398eb25199bb0b1dc",name:"Alimentar o banco de soluções com a nova solução conhecida para um novo sitema",type:"Constraint",layer:"motivation"},{id:"id-3c331dabf23141108ada383f1c150a3e",name:"Listar os chamados por ordem data de abertura e prioridade",type:"Constraint",layer:"motivation"},{id:"id-4760304668064f918cff4fb5efd5bf95",name:"Enviar mensagem de pesquisa de satisfação via e-mail",type:"Constraint",layer:"motivation"},{id:"id-62dfa1604bf94660a03dd78a8025f6de",name:"Atualizar o registro de chamada com a solução aplicada, guardando a data e hora do fechamento do atendimento",type:"Requirement",layer:"motivation"},{id:"id-6ff3b53d46564dfebf8835e781179d90",name:"Atualizar o registro de chamada com a solução aplicada, guardando a data e hora do fechamento do atendimento",type:"Constraint",layer:"motivation"},{id:"id-e3aef913280d4eef8d464eecfd23ac99",name:"Descrever em forma de texto o problema sentido pelo usuário",type:"Constraint",layer:"motivation"},{id:"id-32fa8a45dce04576ba91f34c31d6066b",name:"Meaning",type:"Meaning",layer:"motivation"},{id:"id-3935d655e9d0410ca444ad7bb5ff818c",name:"Sede da softerhouse",type:"Location",layer:"other"},{id:"id-cdf671a498d64dbd97f3418403eb5e6e",name:"Homeoffice",type:"Location",layer:"other"}],l=[{id:"id-edc29f7d1b634b3c9e4a8c19dd26d31d",sourceId:"id-52b8afe6a0c84034af58d21583b7cdd9",targetId:"id-b86ff09b5bef4d31bf57c389d31dec9b",type:"AssociationRelationship"},{id:"id-0011771e86df42d9861fb7e8d30a5345",sourceId:"id-b86ff09b5bef4d31bf57c389d31dec9b",targetId:"id-123ac5de2bb24a36adf1f31deb9ea085",type:"AssociationRelationship"},{id:"id-e86767f437234828993986eaacaa0793",sourceId:"id-b86ff09b5bef4d31bf57c389d31dec9b",targetId:"id-47f31a6d7e0a4096b8a9f52fca8cbf10",type:"AssociationRelationship"},{id:"id-575399fcfe804bf6a22aa434cc31f9d4",sourceId:"id-47f31a6d7e0a4096b8a9f52fca8cbf10",targetId:"id-3c56e0afa46740fcb74ce713b7dc0fb3",type:"AssociationRelationship"},{id:"id-70c8f92f93de4c61b26e987db64e4f41",sourceId:"id-123ac5de2bb24a36adf1f31deb9ea085",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-a560f2c9b1bf4ba984847a1856deb81a",sourceId:"id-7982215fddb84800b7d37c1baa0df86a",targetId:"id-123ac5de2bb24a36adf1f31deb9ea085",type:"AssociationRelationship"},{id:"id-5e4b30106c2f48ebb93f7e499d9daca3",sourceId:"id-10a74ed33d764c66ae5002d5762c95a2",targetId:"id-123ac5de2bb24a36adf1f31deb9ea085",type:"AssociationRelationship"},{id:"id-6d1ca895e19b4856953792db848b6e8d",sourceId:"id-3c56e0afa46740fcb74ce713b7dc0fb3",targetId:"id-abc2270821b643ffb77a47aaeb1f2018",type:"AssociationRelationship"},{id:"id-cc8ee31ec0234341b3177233c304e835",sourceId:"id-fa9331e19e204828b5691215966af21f",targetId:"id-2b2672d0786d4e0381933c1ae0658d90",type:"AssociationRelationship"},{id:"id-619009398393426f917d5d836d5fe825",sourceId:"id-bd634c0ecf3945eabe7811134d200c9b",targetId:"id-10a74ed33d764c66ae5002d5762c95a2",type:"AssociationRelationship"},{id:"id-00fab083df9f48cba234d51dba8665c0",sourceId:"id-184cec66f2f444ce938745c294ff488b",targetId:"id-10a74ed33d764c66ae5002d5762c95a2",type:"AssociationRelationship"},{id:"id-799c55d6bde44b3fbec703793ea9f241",sourceId:"id-7982215fddb84800b7d37c1baa0df86a",targetId:"id-886ae7b5625d4eb2b5adb83df913ff2f",type:"AssociationRelationship"},{id:"id-b0fe5cbceda94cdb9d21b22e779fd99d",sourceId:"id-1b7137241a9148348f5304d5079f1784",targetId:"id-7982215fddb84800b7d37c1baa0df86a",type:"AssociationRelationship"},{id:"id-57accaa50b734fc0957af291c53528ac",sourceId:"id-fd02181892974ab9b03094ea862c6379",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-33c8496a1d924910a91c83adc92dac18",sourceId:"id-0166a0f427f44279956241e4ffe74eab",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-1291acccb6de496585b5f68a2cbd8a96",sourceId:"id-73a5e3392f6844a58819cc44c8d5a5cc",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-1c4c2b53698545fda09a6dba314bb44e",sourceId:"id-632978010d72467ab8f60d07d55617e1",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-ceb4db507b8b4d1685b3674a61f4293c",sourceId:"id-2b8185a3fa774f57873a4f095f8e19d6",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-7c85dabf0b6f4fbe914ec5fe502e1338",sourceId:"id-d9c558eef7e54f9ca801caa5c04d70c3",targetId:"id-fa9331e19e204828b5691215966af21f",type:"AssociationRelationship"},{id:"id-9509da328e5041b39a3e04c415ecc87d",sourceId:"id-3c56e0afa46740fcb74ce713b7dc0fb3",targetId:"id-b6fccbd5d83d452c80fc7d7d26692d79",type:"AssociationRelationship"},{id:"id-868b6c81b7104147893775f3da235cc8",sourceId:"id-bd634c0ecf3945eabe7811134d200c9b",targetId:"id-652b9c9487f3497b8f5584cc65e9cb27",type:"CompositionRelationship"},{id:"id-dd247851a3574c0383edf93647c09d4c",sourceId:"id-184cec66f2f444ce938745c294ff488b",targetId:"id-50f32059f12e47a58d60710cc1591efe",type:"CompositionRelationship"},{id:"id-e14f40ce725a4fe6be43710761ea5ffc",sourceId:"id-886ae7b5625d4eb2b5adb83df913ff2f",targetId:"id-67432cf554b94bcbb661792d55c51574",type:"CompositionRelationship"},{id:"id-8c4b590b24bb4e079114b693bec26254",sourceId:"id-1b7137241a9148348f5304d5079f1784",targetId:"id-2521a483996d4064bf553e6772261aa6",type:"CompositionRelationship"},{id:"id-2959b28a21e2484fa38922b53b33daeb",sourceId:"id-fd02181892974ab9b03094ea862c6379",targetId:"id-2079585f8e7946e69d0a1569d61ce560",type:"CompositionRelationship"},{id:"id-f0477975363d413f914ce8398538288b",sourceId:"id-0166a0f427f44279956241e4ffe74eab",targetId:"id-5fcc4c0520024a2088e8789c7f5af0e5",type:"CompositionRelationship"},{id:"id-6b8737b0419f4f76a03494d1fa14060c",sourceId:"id-73a5e3392f6844a58819cc44c8d5a5cc",targetId:"id-8bbabf224bd04fe8bd04ac9f61e2237f",type:"CompositionRelationship"},{id:"id-e1341e9d9a6248e792e2de59748af6d1",sourceId:"id-632978010d72467ab8f60d07d55617e1",targetId:"id-5232125a4e52495899950f876cfb9cbb",type:"CompositionRelationship"},{id:"id-75b09c95e4e64b1dbbcb9345f50fcbeb",sourceId:"id-2b8185a3fa774f57873a4f095f8e19d6",targetId:"id-5a81cabe2cb64c3f919c2abda8035bc5",type:"CompositionRelationship"},{id:"id-31b7feeda32342ae81d8e1940af18c74",sourceId:"id-2b8185a3fa774f57873a4f095f8e19d6",targetId:"id-5ab7ca0bd03d421398eb25199bb0b1dc",type:"CompositionRelationship"},{id:"id-f239455429484e1fa252644a2b6dc42e",sourceId:"id-d9c558eef7e54f9ca801caa5c04d70c3",targetId:"id-5a81cabe2cb64c3f919c2abda8035bc5",type:"CompositionRelationship"},{id:"id-20bc316cf91b4ac1a2108d1fad686b7a",sourceId:"id-d9c558eef7e54f9ca801caa5c04d70c3",targetId:"id-5ab7ca0bd03d421398eb25199bb0b1dc",type:"CompositionRelationship"},{id:"id-6502b275ea2446688e744cc14be81cbd",sourceId:"id-2b8185a3fa774f57873a4f095f8e19d6",targetId:"id-3c331dabf23141108ada383f1c150a3e",type:"CompositionRelationship"},{id:"id-72befc11fdd64e40b961e3013c955172",sourceId:"id-b6fccbd5d83d452c80fc7d7d26692d79",targetId:"id-4760304668064f918cff4fb5efd5bf95",type:"CompositionRelationship"},{id:"id-f5b93de8c79e4a0085dcb72e0d449274",sourceId:"id-d9c558eef7e54f9ca801caa5c04d70c3",targetId:"id-6ff3b53d46564dfebf8835e781179d90",type:"CompositionRelationship"},{id:"id-4ab32faa0afb434ab41b93d64afbfe84",sourceId:"id-0166a0f427f44279956241e4ffe74eab",targetId:"id-e3aef913280d4eef8d464eecfd23ac99",type:"CompositionRelationship"},{id:"id-f3b9cda793624b51a2a272d51c417ad1",sourceId:"id-339273d2fc854190930580b4a65446c1",targetId:"id-df75fa91711c48f1929ccc21f6370f39",type:"AssociationRelationship"},{id:"id-c97ff333c2a1426cb5241386fcbd2633",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-c55c9496a07d4ae79246dd4e938484f7",type:"CompositionRelationship"},{id:"id-f787661478e94eec88b3336cc68be350",sourceId:"id-2081373f5881449981f4abb12a8980eb",targetId:"id-c55c9496a07d4ae79246dd4e938484f7",type:"TriggeringRelationship"},{id:"id-6b24a31b54a741f798ef75f4327a965a",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-3f50873d1bd64403b811c41fdc985c5b",type:"CompositionRelationship"},{id:"id-abbca525be9d45868415d976ee5fdaca",sourceId:"id-c55c9496a07d4ae79246dd4e938484f7",targetId:"id-3f50873d1bd64403b811c41fdc985c5b",type:"FlowRelationship"},{id:"id-9dee50cb648e4de79bfedf91bf50c2da",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-438b64362fb14d1cbd257374a585e283",type:"CompositionRelationship"},{id:"id-e79680f741a64843868df4a9fb165f19",sourceId:"id-3f50873d1bd64403b811c41fdc985c5b",targetId:"id-438b64362fb14d1cbd257374a585e283",type:"FlowRelationship"},{id:"id-b6293721dfa946adb8c814fb3a8703a0",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-d9909c8b290d48f9aaaada77a4e9b315",type:"CompositionRelationship"},{id:"id-b343dc9131a14d0a89a4ecf9f45634f7",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-8e1c1f8e787641feac397f101db26cd9",type:"CompositionRelationship"},{id:"id-0ca4b5c5d84145588dff7fad8adc7616",sourceId:"id-438b64362fb14d1cbd257374a585e283",targetId:"id-d9909c8b290d48f9aaaada77a4e9b315",type:"FlowRelationship"},{id:"id-0e72211f358a41b19aa681b683b34655",sourceId:"id-438b64362fb14d1cbd257374a585e283",targetId:"id-8e1c1f8e787641feac397f101db26cd9",type:"FlowRelationship"},{id:"id-22fa7a178c4d45c4b0704592ab8c30ff",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-90fb26d50aaa42019a96a57172d31421",type:"CompositionRelationship"},{id:"id-8f39be16372a40eaa668081c4d6b20ad",sourceId:"id-d9909c8b290d48f9aaaada77a4e9b315",targetId:"id-90fb26d50aaa42019a96a57172d31421",type:"FlowRelationship"},{id:"id-ac3ffba48eef44eeb039b1201e4ae037",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-00951a8770e440c79e23783240f405ca",type:"CompositionRelationship"},{id:"id-75d315fb4afb4c10851c194444d544e0",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-93c87753d477498cb778baf6e22b1bc0",type:"CompositionRelationship"},{id:"id-d39172443b434b54bd057b5893236367",sourceId:"id-8e1c1f8e787641feac397f101db26cd9",targetId:"id-00951a8770e440c79e23783240f405ca",type:"FlowRelationship"},{id:"id-04bc813f474b4916bcfa2372ca2170d2",sourceId:"id-00951a8770e440c79e23783240f405ca",targetId:"id-93c87753d477498cb778baf6e22b1bc0",type:"FlowRelationship"},{id:"id-cdd25d4c1a8d484fa3a2ff038100a436",sourceId:"id-93c87753d477498cb778baf6e22b1bc0",targetId:"id-90fb26d50aaa42019a96a57172d31421",type:"FlowRelationship"},{id:"id-123a28e321784f59addbb9a4831794f2",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-db8dd238b49344ca943093676e66957d",type:"CompositionRelationship"},{id:"id-f689026d513b4b449c5f8b7b61a01c98",sourceId:"id-8e1c1f8e787641feac397f101db26cd9",targetId:"id-db8dd238b49344ca943093676e66957d",type:"FlowRelationship"},{id:"id-fd00c657e364459bb24c0831c490b82b",sourceId:"id-db8dd238b49344ca943093676e66957d",targetId:"id-8e1c1f8e787641feac397f101db26cd9",type:"FlowRelationship"},{id:"id-fe7b034cd53445db9c920b42bdbca12d",sourceId:"id-90fb26d50aaa42019a96a57172d31421",targetId:"id-3a3a1cab30cb41cea59a341e7ef87590",type:"ServingRelationship"},{id:"id-f3d18bcaf14f444d977fc605a54e41af",sourceId:"id-c7b45c770f554a5bbae3a7f2abe6dc49",targetId:"id-2f1e1c13ab2e4cdb9f2528eba6963c64",type:"CompositionRelationship"},{id:"id-afe8a8f353c746dba733b2820b413990",sourceId:"id-c7b45c770f554a5bbae3a7f2abe6dc49",targetId:"id-94837869ce71403ba73b203b64e22f18",type:"CompositionRelationship"},{id:"id-cbd8c53ed1f4433ab8f30785657ce5ed",sourceId:"id-3a3a1cab30cb41cea59a341e7ef87590",targetId:"id-2f1e1c13ab2e4cdb9f2528eba6963c64",type:"TriggeringRelationship"},{id:"id-8245fd90c0304532a8774efc9dc6cf76",sourceId:"id-90fb26d50aaa42019a96a57172d31421",targetId:"id-3a3a1cab30cb41cea59a341e7ef87590",type:"TriggeringRelationship"},{id:"id-c28764426ecb4c5ba2e02ccb82ff2e48",sourceId:"id-2f1e1c13ab2e4cdb9f2528eba6963c64",targetId:"id-94837869ce71403ba73b203b64e22f18",type:"FlowRelationship"},{id:"id-29dc7168e486471d8b20e4e4c9ee562a",sourceId:"id-2f1e1c13ab2e4cdb9f2528eba6963c64",targetId:"id-101e5266db194698acc98e65a0a9edb2",type:"TriggeringRelationship"},{id:"id-ab2005a08b994543a6e6b476ec8efca3",sourceId:"id-94837869ce71403ba73b203b64e22f18",targetId:"id-3812ee0629ac4d91a86cf00ebc3829d8",type:"TriggeringRelationship"},{id:"id-f2e8b7fac448417e99cd818fb85efc48",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-0940bd89dfd747babe572200045b9bc6",type:"AssociationRelationship"},{id:"id-98daf6adf0e64f3b954ade1d1a7aefc2",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-4fa401fdeba4474eb53ff9b259a69d5a",type:"AssociationRelationship"},{id:"id-bd7e10e3c5f748a5b7f3dc58b8d980db",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-f9a4a109ba3d451794cadac5f8d6e910",type:"AssociationRelationship"},{id:"id-e798319d51cc4872a1a4bd4202c6c71e",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-d32c4fa7951d4d91a3778057e3507873",type:"AssociationRelationship"},{id:"id-f62a1abb229f474e8a435ae7acfff243",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-30cbddc11d8645bb8d9104e580a5dc73",type:"AssociationRelationship"},{id:"id-c1db36bcaef64eadb0328fe3b5ca54e6",sourceId:"id-d19013c8b0be426691c9c9455509d72b",targetId:"id-0940bd89dfd747babe572200045b9bc6",type:"AssociationRelationship"},{id:"id-93a77bca66b24416aa903bea7e9ee0ed",sourceId:"id-d19013c8b0be426691c9c9455509d72b",targetId:"id-c55c9496a07d4ae79246dd4e938484f7",type:"AssignmentRelationship"},{id:"id-82021c6d46f04f55a9671013a7233e33",sourceId:"id-d19013c8b0be426691c9c9455509d72b",targetId:"id-3f50873d1bd64403b811c41fdc985c5b",type:"AssignmentRelationship"},{id:"id-1a8c4fdd975e49f5b9403f98f7dd652a",sourceId:"id-d19013c8b0be426691c9c9455509d72b",targetId:"id-438b64362fb14d1cbd257374a585e283",type:"AssignmentRelationship"},{id:"id-ae639d2c4e7745ea83132745f118c14e",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-8e1c1f8e787641feac397f101db26cd9",type:"AssignmentRelationship"},{id:"id-26d6e35418a049eda12c6234f87197cd",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-db8dd238b49344ca943093676e66957d",type:"AssignmentRelationship"},{id:"id-e27f0a029b92486ca4899f64534a3e17",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-00951a8770e440c79e23783240f405ca",type:"AssignmentRelationship"},{id:"id-95f16aa81ebe498aaa9aa38f5663369d",sourceId:"id-d19013c8b0be426691c9c9455509d72b",targetId:"id-d9909c8b290d48f9aaaada77a4e9b315",type:"AssignmentRelationship"},{id:"id-232711ac313d46ea966cb9323d7fbddf",sourceId:"id-d19013c8b0be426691c9c9455509d72b",targetId:"id-90fb26d50aaa42019a96a57172d31421",type:"AssignmentRelationship"},{id:"id-9bbd16ecf15c4f1293543f6f8075239c",sourceId:"id-3428c368d1c84aa088364939adb1216d",targetId:"id-93c87753d477498cb778baf6e22b1bc0",type:"AssignmentRelationship"},{id:"id-39fded943ab944f3835cce7f6fd54adb",sourceId:"id-3935d655e9d0410ca444ad7bb5ff818c",targetId:"id-df75fa91711c48f1929ccc21f6370f39",type:"AssociationRelationship"},{id:"id-18e1057f3151417abd7b92ab46341e83",sourceId:"id-cdf671a498d64dbd97f3418403eb5e6e",targetId:"id-df75fa91711c48f1929ccc21f6370f39",type:"AssociationRelationship"},{id:"id-e250b09dbe3643aaa180edf13e07d407",sourceId:"id-df75fa91711c48f1929ccc21f6370f39",targetId:"id-4cbf5b16676a4ea58882f7411a0327d9",type:"AssociationRelationship"},{id:"id-403a237356494210a3a36cc2983b6fdd",sourceId:"id-36952169063b462584cb58a865589369",targetId:"id-c7b45c770f554a5bbae3a7f2abe6dc49",type:"AssociationRelationship"},{id:"id-61b71406968a4ce58a411f0023db870f",sourceId:"id-23e3850e3d134944a5676cf0ba4c2879",targetId:"id-4cbf5b16676a4ea58882f7411a0327d9",type:"AssociationRelationship"},{id:"id-db75aca436c24c609616c23297ed7b3a",sourceId:"id-9ee8ea0ba5cc48ed9ccd4d4a2cb7f0e0",targetId:"id-4cbf5b16676a4ea58882f7411a0327d9",type:"AssociationRelationship"},{id:"id-7db9d490ed2e487c8d08887394eac864",sourceId:"id-1f0f48d81860410d89e835ad28032347",targetId:"id-23e3850e3d134944a5676cf0ba4c2879",type:"AssociationRelationship"},{id:"id-913e47c8f17b4b73952a848ae8a38aff",sourceId:"id-da975cc73b5c40e68ef9e68bf430af38",targetId:"id-1f0f48d81860410d89e835ad28032347",type:"AssociationRelationship"},{id:"id-babcb0c73cfa4b50a4bc0b7e2408954c",sourceId:"id-da975cc73b5c40e68ef9e68bf430af38",targetId:"id-ab082b57261f4d99b1ded7b8e06fe0bb",type:"AssociationRelationship"},{id:"id-d7527346ae4949909efef6875afd5766",sourceId:"id-222ad496ad51413394bc6b6a7d26454f",targetId:"id-ab082b57261f4d99b1ded7b8e06fe0bb",type:"AccessRelationship"},{id:"id-cad016ee77d14cd8a52815934618839d",sourceId:"id-da975cc73b5c40e68ef9e68bf430af38",targetId:"id-ab082b57261f4d99b1ded7b8e06fe0bb",type:"AccessRelationship"},{id:"id-ca21b9062b0247a9ad8270327e2c1674",sourceId:"id-222ad496ad51413394bc6b6a7d26454f",targetId:"id-70efae8b3a18405b9f556db44abbc810",type:"CompositionRelationship"},{id:"id-8078e3916157495c9ac49113621c4c60",sourceId:"id-70efae8b3a18405b9f556db44abbc810",targetId:"id-1f0f48d81860410d89e835ad28032347",type:"AssociationRelationship"},{id:"id-e5f03fd8122e47d897032112aebfb0bf",sourceId:"id-25548f0917644dc491de6608f93a73f3",targetId:"id-222ad496ad51413394bc6b6a7d26454f",type:"AssociationRelationship"},{id:"id-5ff3987eb00a413f8aeb36ba3e2e7aef",sourceId:"id-9d1e0b44ef3543e9840c06efe922439a",targetId:"id-9ee8ea0ba5cc48ed9ccd4d4a2cb7f0e0",type:"AssociationRelationship"},{id:"id-534b4d0a75bf4600844415d2390106ee",sourceId:"id-9528698c579e44ecb275ebd4ff62d7bb",targetId:"id-9d1e0b44ef3543e9840c06efe922439a",type:"AssociationRelationship"},{id:"id-7a6cc1738529477c95b264628dc54433",sourceId:"id-8acc904e8e5c43d8b552fd136041997a",targetId:"id-9d1e0b44ef3543e9840c06efe922439a",type:"AssociationRelationship"},{id:"id-8c9fe79bf22443caa0f73e4a0d788d16",sourceId:"id-8acc904e8e5c43d8b552fd136041997a",targetId:"id-a252404067044c78baa9e36cae3c8983",type:"AssociationRelationship"},{id:"id-87062f74aa83470882a1b09f6548454b",sourceId:"id-a252404067044c78baa9e36cae3c8983",targetId:"id-669d0086b3c04ec8ba8a24a8a85a5c7c",type:"AssociationRelationship"},{id:"id-cf2ed8d6d65f428a901525762f610216",sourceId:"id-388f35ebd45a4eabbdc116273000e70a",targetId:"id-a252404067044c78baa9e36cae3c8983",type:"AssociationRelationship"},{id:"id-8ab1f2da43fd4c6e95ef1d5d711bf780",sourceId:"id-41c0f785f1024c2ba5e924f2dee7f4b3",targetId:"id-9528698c579e44ecb275ebd4ff62d7bb",type:"CompositionRelationship"},{id:"id-32bce19118344b2f8907c50dacdfccb2",sourceId:"id-41c0f785f1024c2ba5e924f2dee7f4b3",targetId:"id-669d0086b3c04ec8ba8a24a8a85a5c7c",type:"CompositionRelationship"},{id:"id-64f5ef1d58f8490db150ca2acbfd69b0",sourceId:"id-41c0f785f1024c2ba5e924f2dee7f4b3",targetId:"id-aec810e25122483b8c2169511a21085e",type:"AccessRelationship"},{id:"id-de37b01e1e71422086c2c3c337b30a60",sourceId:"id-8acc904e8e5c43d8b552fd136041997a",targetId:"id-aec810e25122483b8c2169511a21085e",type:"AccessRelationship"},{id:"id-8b1abffda56d4ef59912f332faaceee4",sourceId:"id-388f35ebd45a4eabbdc116273000e70a",targetId:"id-aec810e25122483b8c2169511a21085e",type:"AccessRelationship"},{id:"id-bd45fad797e0433a8f540992fbcdb161",sourceId:"id-4ef3cf9f165746739f27b35416b5ac65",targetId:"id-9ee8ea0ba5cc48ed9ccd4d4a2cb7f0e0",type:"AssociationRelationship"},{id:"id-9ab9adf96ec24fbd9d283a07c412ef1d",sourceId:"id-1206293f789646e4a52667867603fb86",targetId:"id-388f35ebd45a4eabbdc116273000e70a",type:"AssociationRelationship"},{id:"id-bd25fe7fd00d49b78103697584173c01",sourceId:"id-1206293f789646e4a52667867603fb86",targetId:"id-8acc904e8e5c43d8b552fd136041997a",type:"AssociationRelationship"},{id:"id-bb932bc765fd4ba08ce5cd1c2f25d953",sourceId:"id-377725332d464a2995d198fac72a29cb",targetId:"id-4cbf5b16676a4ea58882f7411a0327d9",type:"AssociationRelationship"},{id:"id-7d914d685420492ba0c774688ab85fc2",sourceId:"id-afbb722130da4a90b0208ee3e2ab04a2",targetId:"id-377725332d464a2995d198fac72a29cb",type:"AssociationRelationship"},{id:"id-c5045b77366e4f2ea4696798187b3530",sourceId:"id-afbb722130da4a90b0208ee3e2ab04a2",targetId:"id-8bd1348fa44b4f518a3c1b606eddb93a",type:"AggregationRelationship"},{id:"id-74e2ea6918f9467d9ed76b7280beade8",sourceId:"id-afbb722130da4a90b0208ee3e2ab04a2",targetId:"id-b35f37d34159420086a20f2797f15160",type:"AggregationRelationship"},{id:"id-3dd683be271543e59884b121e29a3520",sourceId:"id-b974906912134acd9d17b3f9b684d265",targetId:"id-377725332d464a2995d198fac72a29cb",type:"AssociationRelationship"},{id:"id-3d7051a3fddf496d93e3ab8d07dfd6f3",sourceId:"id-9395014e9fbe4e5e96ab24404beda727",targetId:"id-b974906912134acd9d17b3f9b684d265",type:"AssociationRelationship"},{id:"id-7e6b8050610645f6a636bbacb9354876",sourceId:"id-afbb722130da4a90b0208ee3e2ab04a2",targetId:"id-eda43ffd1f0145258676dcc7bea7dcb7",type:"AssociationRelationship"},{id:"id-ec710e26125d409f8dc4615bc6f0fe75",sourceId:"id-eda43ffd1f0145258676dcc7bea7dcb7",targetId:"id-3a953e405f304698a94a80266ec29ca4",type:"AssociationRelationship"},{id:"id-21bde3562ef447dcbdd22ec9df63f6c9",sourceId:"id-3a953e405f304698a94a80266ec29ca4",targetId:"id-377725332d464a2995d198fac72a29cb",type:"AssociationRelationship"},{id:"id-355266387581477bb1b0856d00a4f90f",sourceId:"id-3770d811b91b4ba988ba211aa965c003",targetId:"id-377725332d464a2995d198fac72a29cb",type:"AssociationRelationship"},{id:"id-0365978b7c8546958b8c96f776b30768",sourceId:"id-b974906912134acd9d17b3f9b684d265",targetId:"id-3770d811b91b4ba988ba211aa965c003",type:"AssociationRelationship"},{id:"id-87bb0844fe4b45a787116f76df25cb83",sourceId:"id-3770d811b91b4ba988ba211aa965c003",targetId:"id-998e2d6174b44c29b6d52f1d64850c35",type:"AssociationRelationship"},{id:"id-d0f11773052e4aaca779c1d7f4238c85",sourceId:"id-377725332d464a2995d198fac72a29cb",targetId:"id-998e2d6174b44c29b6d52f1d64850c35",type:"AssociationRelationship"},{id:"id-5f5ebbf77c4744ccafce93b0576e3943",sourceId:"id-978ab329506c4b26a5b8c6ea2ff69ea6",targetId:"id-b974906912134acd9d17b3f9b684d265",type:"AssociationRelationship"},{id:"id-2bff73af27364618a243828d70c84fe0",sourceId:"id-9395014e9fbe4e5e96ab24404beda727",targetId:"id-978ab329506c4b26a5b8c6ea2ff69ea6",type:"AssociationRelationship"},{id:"id-b90ae60d6b0f4791b0977ca83f991035",sourceId:"id-06756041ebc447d5a953d2770ab4ee3a",targetId:"id-2e51fadba19340eab58c9f2741f528a4",type:"AssociationRelationship"},{id:"id-388321b0aec5450f831d881b2e6e3685",sourceId:"id-2e51fadba19340eab58c9f2741f528a4",targetId:"id-9395014e9fbe4e5e96ab24404beda727",type:"AssociationRelationship"},{id:"id-d66fa444466c412f96f79253c61ccb05",sourceId:"id-ac13fe5b1e124a588fa6177ef3db829c",targetId:"id-09a926b33caa4fb8acd835055fdc844f",type:"AggregationRelationship"},{id:"id-9075f7754cb34378a68a1c6673d26362",sourceId:"id-3c4b898ac1664c69a86ff562ba1fd443",targetId:"id-965dec3b598b46d9b2e3bfec49343fb1",type:"AggregationRelationship"},{id:"id-c2a39231eae34bc6a60a89ead5a5cb31",sourceId:"id-3c4b898ac1664c69a86ff562ba1fd443",targetId:"id-9395014e9fbe4e5e96ab24404beda727",type:"AssociationRelationship"},{id:"id-644e4d68c22346238e2dc142ccc6c201",sourceId:"id-ac13fe5b1e124a588fa6177ef3db829c",targetId:"id-9395014e9fbe4e5e96ab24404beda727",type:"AssociationRelationship"},{id:"id-3b6e6b4b6c694d0bb3f42198ad02900f",sourceId:"id-f9c46119cc2447068c9627a61efb50ab",targetId:"id-c8cbbabe45434cbdb5d1b797282bdc71",type:"AssociationRelationship"},{id:"id-3bf3c1c1939b45eab2077f80b3707066",sourceId:"id-f9c46119cc2447068c9627a61efb50ab",targetId:"id-3c4b898ac1664c69a86ff562ba1fd443",type:"AssociationRelationship"}],y=[{id:"id-819be6176e8c42d69cc17256e4281089",name:"Default View",viewpoint:""}],m={identifier:e,archimateId:a,name:d,description:i,formats:c,source:t,sourceFile:o,sourceFormat:b,timestamp:f,tags:s,duplicates:n,language:r,elements:p,relationships:l,views:y};export{a as archimateId,m as default,i as description,n as duplicates,p as elements,c as formats,e as identifier,r as language,d as name,l as relationships,t as source,o as sourceFile,b as sourceFormat,s as tags,f as timestamp,y as views};
