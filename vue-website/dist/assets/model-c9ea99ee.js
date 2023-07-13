const e="https://me.big.tuwien.ac.at/EAModelSet/id-afd6472a530d4ddea115f1753d1b38c7",d="id-afd6472a530d4ddea115f1753d1b38c7",a="Trabalho_AOTI",i="",s=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",b="raw-data/github/archimate/processos_trabaoti.archimate",f="ARCHIMATE",t="29-06-2023 09:30:26",r=[],n=[],o="pt",u=[{id:"id-b46a98c3d9114625bde584d8087081ae",name:"Matricular Aluno",type:"BusinessProcess",layer:"business"},{id:"id-af57b2c334484f5f897afc88ace56712",name:"Aluno quer se matricular",type:"BusinessEvent",layer:"business"},{id:"id-a6813e2e0c3d410b8bb74b9e754661e4",name:"Aguardar Ficha de Cadastro",type:"BusinessProcess",layer:"business"},{id:"id-cf52d99c8f734397afaf7862fc9574c8",name:"Escolhe curso disponível",type:"BusinessProcess",layer:"business"},{id:"id-7483257820d94191b07a85157b628152",name:"Gerar Contrato",type:"BusinessProcess",layer:"business"},{id:"id-c3345e8712e64c4e804ff3822d65a58e",name:"Assina Contrato",type:"BusinessProcess",layer:"business"},{id:"id-28a6a898b83d4d29a127ec8f3b6f1402",name:"Encaminha para setor administrativo",type:"BusinessProcess",layer:"business"},{id:"id-6988b3440a9141a892589a478982f685",name:"Aguarda pagamento",type:"BusinessProcess",layer:"business"},{id:"id-8ca022b2107b43479877e474876ee453",name:"Confirma Matrícula",type:"BusinessProcess",layer:"business"},{id:"id-43e11556eddd4df4a1b4947447fab494",name:"Cancela processo",type:"BusinessProcess",layer:"business"},{id:"id-94417e88b3254aa58dc57c55016ebff1",name:"Definir turmas e horários",type:"BusinessProcess",layer:"business"},{id:"id-7b0eb35ba2de4e2790ecbf49dd4afb0c",name:"Aluno",type:"BusinessActor",layer:"business"},{id:"id-4312066a51d9494ea30571934d11b6fd",name:"Coordenadoria",type:"BusinessActor",layer:"business"},{id:"id-8b7372e138ec4217af0a74e139c486f0",name:"Administrativo",type:"BusinessActor",layer:"business"},{id:"id-b738cbbf1fc940bd8c1feb730c9a4bfa",name:"Verifica quantidade de alunos",type:"BusinessProcess",layer:"business"},{id:"id-a8530a6824354df4b79de5449438e906",name:"Aloca alunos em turmas de até 15",type:"BusinessProcess",layer:"business"},{id:"id-872915bf40ce4682abfe85d06f1e9ec0",name:"Verifica preferências",type:"BusinessProcess",layer:"business"},{id:"id-ef6e3d9305c944348b3496c600b4ea8b",name:"Define as turmas",type:"BusinessProcess",layer:"business"},{id:"id-883f436900414e5a8e4d3e56ecfde790",name:"Monta horários",type:"BusinessProcess",layer:"business"},{id:"id-15912e6fa9db49639ef41bc5347cd2f4",name:"Diretoria Pedagógica",type:"BusinessActor",layer:"business"},{id:"id-aa6bd83675e8406bb0e177b63a438c22",name:"Cobrança",type:"BusinessProcess",layer:"business"},{id:"id-ce47e17b7e5b4d9997a1617607bbae32",name:"Verifica validade da cobrança",type:"BusinessProcess",layer:"business"},{id:"id-c1514ab0c36f4a2f92ab6947796d7d47",name:"Verifica pagamento",type:"BusinessProcess",layer:"business"},{id:"id-b9fe97712ed74728b5a930617b19e1c3",name:"Pagamento em dia",type:"BusinessProcess",layer:"business"},{id:"id-90d9a66ad71a482aafbb85f7a1f1c999",name:"Emite email de cobrança com novo boleto",type:"BusinessProcess",layer:"business"},{id:"id-c78a21699bec43a68643ff6d2bbbe36f",name:"Três meses de pagamento atrasado",type:"BusinessEvent",layer:"business"},{id:"id-9584219f98c0493fbce5b4e4fce4618e",name:"Encaminha para cobrança judicial",type:"BusinessProcess",layer:"business"},{id:"id-1c84fbce13dd46d5a0e97720a1bbbbff",name:"Cancela matrícula de aluno",type:"BusinessProcess",layer:"business"},{id:"id-96f87fcb18474d80864b5c2b146d615f",name:"Preparação do conteúdo do curso",type:"BusinessProcess",layer:"business"},{id:"id-5d203d365a5b44c980ca25ed5ca32b87",name:"Define conteúdo programático",type:"BusinessProcess",layer:"business"},{id:"id-6efa2ba6c2bb4ef2b6029d0cdb02a2d3",name:"Define objetivos",type:"BusinessProcess",layer:"business"},{id:"id-0314083b4623407584929ccf1ac121a9",name:"Define metodologia",type:"BusinessProcess",layer:"business"},{id:"id-a340b5258f934a7cb8645b718aaf0369",name:"Define métodos de avaliação de aprendizagem",type:"BusinessProcess",layer:"business"},{id:"id-1acabd37a97c47e0a0cfe01b73dd21cf",name:"Diretoria Pedagógica",type:"BusinessActor",layer:"business"},{id:"id-c89df6e04a0a4ac1a06a87a31561596a",name:"Professores",type:"BusinessActor",layer:"business"},{id:"id-224eb6af6322440fbe63d7a8b4ee6c76",name:"Separa conteúdos ",type:"BusinessProcess",layer:"business"},{id:"id-df32912adac244d79cd5cd4a6e8ca868",name:"Aloca professores",type:"BusinessProcess",layer:"business"},{id:"id-43397d2710c54ce480293c781acf54da",name:"Diretoria Administrativa",type:"BusinessActor",layer:"business"},{id:"id-0bb417035f204e64a3402f1c8b13d9e8",name:"Elaboração de provas",type:"BusinessProcess",layer:"business"},{id:"id-7a8bacf6e04b425285de5c49081a6432",name:"Define conteúdo que será abordado",type:"BusinessProcess",layer:"business"},{id:"id-e9137c76903e44f1959a92ba1c9a3539",name:"Validação do conteúdo definido",type:"BusinessProcess",layer:"business"},{id:"id-62d938200a584d0f89f6045ee5e03ed5",name:"Cria questões a partir do conteúdo",type:"BusinessProcess",layer:"business"},{id:"id-5f4b444257cd4c1da08426a3795f26ad",name:"Envia para pedagógico",type:"BusinessProcess",layer:"business"},{id:"id-f9081e17ebb94265b4d9b7c5edd1e8a7",name:"Valida questões ",type:"BusinessProcess",layer:"business"},{id:"id-ec58ea0bfa1649f3bd501954f973778c",name:"Monta prova",type:"BusinessProcess",layer:"business"},{id:"id-41ea2f0738bc42acb09770249fbf03d7",name:"Envia para professor responsável",type:"BusinessProcess",layer:"business"},{id:"id-fa5e3082660d4639b360873a0863591e",name:"Refaz questão",type:"BusinessProcess",layer:"business"},{id:"id-8e71a905056f4216a991be47a43bcfae",name:"Professor",type:"BusinessActor",layer:"business"},{id:"id-dc6a4cba95e34fb49e2be4801da093e3",name:"Diretoria Pedagógica",type:"BusinessActor",layer:"business"},{id:"id-ee79da59f3bf4029bba6f5cc95f7130d",name:"Elaboração de apostilas",type:"BusinessProcess",layer:"business"},{id:"id-9f7faf5d1b254671a0b8a0a6db62225f",name:"Verifica conteúdo programático",type:"BusinessProcess",layer:"business"},{id:"id-57639d3ab1894da2bc5897616b2ba938",name:"Escreve texto teórico  do conteúdo",type:"BusinessProcess",layer:"business"},{id:"id-8fe7f17a70fd4901a361d983d76de1dd",name:"Cria questões de fixação",type:"BusinessProcess",layer:"business"},{id:"id-c11c2071468540e5ba7facf1d38e5e98",name:"Envia para pedagógico",type:"BusinessProcess",layer:"business"},{id:"id-52df8ef827294efca39af45de4f39a98",name:"Valida textos e questões",type:"BusinessProcess",layer:"business"},{id:"id-029ee80835134fdc99a4d301f61b6206",name:"Monta apostila",type:"BusinessProcess",layer:"business"},{id:"id-f27dec88a0a846c684a86cde26bc4fdc",name:"Envia para professor responsável (copy)",type:"BusinessProcess",layer:"business"},{id:"id-917edb21360c4ce69de459c6985e228e",name:"Refaz texto ou questão ",type:"BusinessProcess",layer:"business"},{id:"id-24a2437f3e5046eab5138c727c4b5257",name:"Professor",type:"BusinessActor",layer:"business"},{id:"id-0dc085cf28374cf1ada447befde5ffa4",name:"Diretoria Pedagógica",type:"BusinessActor",layer:"business"},{id:"id-09d435cb51374874bc28b192cc53de68",name:"Envia para gráfica",type:"BusinessProcess",layer:"business"},{id:"id-f68048b7f8d247e1b975b82ecef9cbae",name:"Impressão de Apostila",type:"BusinessProcess",layer:"business"},{id:"id-e7a25dfb9e2c40479e347d335b604b4f",name:"Apostila aprovada",type:"BusinessEvent",layer:"business"},{id:"id-f89be65c20d3418ebd0cf150aacfe08e",name:"Formata apostila",type:"BusinessProcess",layer:"business"},{id:"id-86a54ce2ec664ba78822968b818fa9e6",name:"Cria capa da apostila",type:"BusinessProcess",layer:"business"},{id:"id-2cbcd689892b4fdeb7e9ef292051daae",name:"Verifica quantidade de alunos",type:"BusinessProcess",layer:"business"},{id:"id-46dbdd13cb6b4383a0c8f23f2768c155",name:"Imprime apostila de acordo com quantidade de alunos",type:"BusinessProcess",layer:"business"},{id:"id-a773e9a59a964ef384fdf95da2dc0d5b",name:"Coordenadoria",type:"BusinessActor",layer:"business"},{id:"id-f6043d4ca0ad46caa4df06872e60f7db",name:"Marketing",type:"BusinessActor",layer:"business"},{id:"id-27c7863314ec497b943d094c347af2ef",name:"Aula",type:"BusinessProcess",layer:"business"},{id:"id-7cccab0dc9554d499361880d94fcb2af",name:"Verifica conteúdo programático",type:"BusinessProcess",layer:"business"},{id:"id-c6b92ebec23342d69713c72cbe90d726",name:"Apresenta conteúdo",type:"BusinessProcess",layer:"business"},{id:"id-c2eafa12b78941888cf93a37a5c7970b",name:"Esclarece dúvidas",type:"BusinessProcess",layer:"business"},{id:"id-7aac8ca483f84a138636d6c865bf2d3a",name:"Dúvida",type:"BusinessEvent",layer:"business"},{id:"id-e1652504a5c845be9e37637876d5ee15",name:"Esclarece dúvida",type:"BusinessProcess",layer:"business"},{id:"id-dee72201694b465b9201b439a6240f4b",name:"Professor",type:"BusinessActor",layer:"business"},{id:"id-5410105277b845f8b4a27cc29a2ecd94",name:"Aluno",type:"BusinessActor",layer:"business"},{id:"id-81e658da64c64bf09d758bddb65121ba",name:"Meta",type:"BusinessActor",layer:"business"},{id:"id-ebe782f53e9844a484b96817e6fb3d04",name:"Recepção",type:"BusinessProcess",layer:"business"},{id:"id-06b92b80c53b459686d61fe2419e0e26",name:"Diretoria Pedagógica",type:"BusinessProcess",layer:"business"},{id:"id-1d0f9ab496364f25affcbe3c2ae55e8f",name:"Business Actor",type:"BusinessActor",layer:"business"},{id:"id-69cce27974604e609e13d9f3682bb67b",name:"Diretoria Pedagógica",type:"BusinessActor",layer:"business"},{id:"id-24046609b1914b9c89a055f81e4170f8",name:"Coordenador",type:"BusinessActor",layer:"business"},{id:"id-f58b5269e6714b7b84ee0957d29f65d0",name:"Diretor Pedagógico",type:"BusinessActor",layer:"business"},{id:"id-53cd4afc9fa84418a4d8e322e8e96bc6",name:"Corpo docente",type:"BusinessActor",layer:"business"},{id:"id-3342c973a1604de292e162627070aca5",name:"Alunos ",type:"BusinessActor",layer:"business"},{id:"id-7c31e6fa72334f64bbf9e5ec6bbf0e84",name:"Professores",type:"BusinessActor",layer:"business"},{id:"id-b15aec83ec0a4ac282856a5ef915cce4",name:"Gráfica",type:"BusinessProcess",layer:"business"},{id:"id-640968c2228b41f1a920b7b6885f5106",name:"Business Process",type:"BusinessProcess",layer:"business"},{id:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",name:"Gráfica",type:"BusinessActor",layer:"business"},{id:"id-b0db7e854f0f4b92a30a21a4f455f0d6",name:"Sala de Reunião",type:"BusinessActor",layer:"business"},{id:"id-0f169376a05342db8d598c7cd92db0d4",name:"Business Actor",type:"BusinessActor",layer:"business"},{id:"id-539b145c6c9547518fa5f8e483f6a2b1",name:"Coordenador",type:"BusinessActor",layer:"business"},{id:"id-159f50c96c984d678c08982fd876e2d9",name:"Sala de Aula",type:"BusinessActor",layer:"business"},{id:"id-6974ee2a744b4032bf90fd596fb6a872",name:"Sala de Descanso",type:"BusinessActor",layer:"business"},{id:"id-58f19c9cee8f4d34bcaebb1115808f13",name:"Diretoria Administrativa",type:"BusinessActor",layer:"business"},{id:"id-1c264a142460456285175939fdf6d1d5",name:"Diretor Administrativo",type:"BusinessActor",layer:"business"},{id:"id-618c4133e74c49e6b9f76aff0505d6af",name:"Marketing",type:"BusinessActor",layer:"business"},{id:"id-9ae815d379b54ec592847c78d66cf4fa",name:"Agente de Marketing",type:"BusinessActor",layer:"business"},{id:"id-285843d1116f4d35adc69d398a00dd50",name:"Financeiro",type:"BusinessActor",layer:"business"},{id:"id-b514eff0722d4b18ae6f2dc65256e941",name:"Aluno",type:"BusinessRole",layer:"business"},{id:"id-f3264adc55ee4362857f659ba79cee49",name:"Cliente",type:"BusinessRole",layer:"business"},{id:"id-315595d1b897423fba1b13fbe8f8d733",name:"Banco",type:"BusinessRole",layer:"business"},{id:"id-e092fd0bbe53406880c8d31b8ed41f66",name:"Acompanhamento de pagamento",type:"BusinessProcess",layer:"business"},{id:"id-eac08c4ad62c4181a339a4e0b59c7464",name:"Aguardar pagamento",type:"BusinessProcess",layer:"business"},{id:"id-ffdb8ffa71e94c1c958b75992990cfc8",name:"Deposita dinheiro",type:"BusinessProcess",layer:"business"},{id:"id-c47461e964c3497cb01ee79386ab69ca",name:"Emite comprovante de depósito",type:"BusinessProcess",layer:"business"},{id:"id-9d759678d62b45048a63e8b2995b6d5c",name:"Verifica conta bancária",type:"BusinessProcess",layer:"business"},{id:"id-c0246dea61404e838265eb1e7d11386c",name:"Registra em planilha",type:"BusinessProcess",layer:"business"},{id:"id-56c184f5309f4188a54be8ee216a4acc",name:"Gera cobrança",type:"BusinessProcess",layer:"business"},{id:"id-d017a888321a45cfb0e0cff9bc25ab27",name:"Contabilidade Mensal",type:"BusinessProcess",layer:"business"},{id:"id-c8256a757c614546acbb221b92b31879",name:"Reunir documentos e movimentações",type:"BusinessProcess",layer:"business"},{id:"id-205c03e8c25b4dd38a155016926b990a",name:"Gerar Relatório Contábil",type:"BusinessProcess",layer:"business"},{id:"id-d743eadbe2e24ca5bbd38498c048a9a4",name:"Analisar planilha de pagamentos",type:"BusinessProcess",layer:"business"},{id:"id-a13b1ba3e7b74e339e4d49e9577070e8",name:"Realiza Cadastro",type:"BusinessProcess",layer:"business"},{id:"id-ffcf0cfb205a4700940a1c2903350e25",name:"Cadastra turma",type:"BusinessProcess",layer:"business"},{id:"id-b729aaa4f1664386b414756271c6a89c",name:"Cadastra Horários",type:"BusinessProcess",layer:"business"},{id:"id-72008caee60f400f9d3cc6d856a388cd",name:"Disponibilizar Aula Online",type:"BusinessProcess",layer:"business"},{id:"id-065c2aae9eaf46f3bb32660419ed504a",name:"Gravar Aula",type:"BusinessProcess",layer:"business"},{id:"id-498b0a228d934181b565f9932abc9fff",name:"Editar recurso visual",type:"BusinessProcess",layer:"business"},{id:"id-acc16a04d5864ed2be6dfebe1d1adea3",name:"Cadastrar aula na turma",type:"BusinessProcess",layer:"business"},{id:"id-c5f4e8ccf482408889e56a062f229b90",name:"Definir turma ",type:"BusinessProcess",layer:"business"},{id:"id-a64445e1fcae46fbbecdba7d796db7e0",name:"Preparar equipamento de gravação",type:"BusinessActor",layer:"business"},{id:"id-e8d37987176e458d8fce9dd44a5eef19",name:"Preparar equipamento de gravação",type:"BusinessProcess",layer:"business"},{id:"id-406ae4f4b5a74606b51e14cbb3758d67",name:"Profissional de Multimídia",type:"BusinessActor",layer:"business"},{id:"id-1e38ed494374492ab4100bb277317cf9",name:"Junction",type:"Junction",layer:"other"},{id:"id-682d29e2d4e948b88b69a349079a4374",name:"Junction",type:"Junction",layer:"other"},{id:"id-89ba95e3c50a4cb3b8a14306f3639131",name:"Junction",type:"Junction",layer:"other"},{id:"id-75a8ef2e7c1841168a96da215d7b648d",name:"Junction",type:"Junction",layer:"other"},{id:"id-9fede54870104bbcba35e817bd8380d2",name:"Junction",type:"Junction",layer:"other"},{id:"id-3d0157950c6941ac87a87386d321ab98",name:"Junction",type:"Junction",layer:"other"},{id:"id-89a9c27b7cd246b5a393d87e833ecdca",name:"Junction (copy)",type:"Junction",layer:"other"},{id:"id-43e00fd2bbdb4084a44dc8da72bd2f57",name:"Junction",type:"Junction",layer:"other"},{id:"id-519d0a000a0c47169eda17b29b8ee28d",name:"Junction",type:"Junction",layer:"other"},{id:"id-01369c45a4b24b069408c682656eaf61",name:"Junction",type:"Junction",layer:"other"}],p=[{id:"id-7690d466d46c45c892b3377dd16bc9e9",sourceId:"id-af57b2c334484f5f897afc88ace56712",targetId:"id-a6813e2e0c3d410b8bb74b9e754661e4",type:"TriggeringRelationship"},{id:"id-d00a2b59a324412dba93184e1693acf7",sourceId:"id-a6813e2e0c3d410b8bb74b9e754661e4",targetId:"id-cf52d99c8f734397afaf7862fc9574c8",type:"TriggeringRelationship"},{id:"id-a27809e2bf75472d8051a55fe54864b8",sourceId:"id-cf52d99c8f734397afaf7862fc9574c8",targetId:"id-7483257820d94191b07a85157b628152",type:"TriggeringRelationship"},{id:"id-9db7d5ae2b054e27979dcc0c7edc7ff4",sourceId:"id-7483257820d94191b07a85157b628152",targetId:"id-c3345e8712e64c4e804ff3822d65a58e",type:"TriggeringRelationship"},{id:"id-29fe3599bd4649329d34c9e4e2edeb9e",sourceId:"id-c3345e8712e64c4e804ff3822d65a58e",targetId:"id-28a6a898b83d4d29a127ec8f3b6f1402",type:"TriggeringRelationship"},{id:"id-fdbd2c10d5db484bae5ba8de6e4a5aad",sourceId:"id-28a6a898b83d4d29a127ec8f3b6f1402",targetId:"id-6988b3440a9141a892589a478982f685",type:"TriggeringRelationship"},{id:"id-b444dd0d31fb4c088d6777a2a9593624",sourceId:"id-6988b3440a9141a892589a478982f685",targetId:"id-1e38ed494374492ab4100bb277317cf9",type:"TriggeringRelationship"},{id:"id-918b16c3517546c5afab95c2caffb752",sourceId:"id-1e38ed494374492ab4100bb277317cf9",targetId:"id-8ca022b2107b43479877e474876ee453",type:"TriggeringRelationship"},{id:"id-6bb795b1c72f48f0b7d16f693cc71eee",sourceId:"id-1e38ed494374492ab4100bb277317cf9",targetId:"id-43e11556eddd4df4a1b4947447fab494",type:"TriggeringRelationship"},{id:"id-e18c3acfdad149bcbaedd557b9614652",sourceId:"id-7b0eb35ba2de4e2790ecbf49dd4afb0c",targetId:"id-a6813e2e0c3d410b8bb74b9e754661e4",type:"AssignmentRelationship"},{id:"id-8ac4892454404ee8b36e057e0662965f",sourceId:"id-4312066a51d9494ea30571934d11b6fd",targetId:"id-7483257820d94191b07a85157b628152",type:"AssignmentRelationship"},{id:"id-c909cc5bccc14fc482e97a3aa17fed04",sourceId:"id-8b7372e138ec4217af0a74e139c486f0",targetId:"id-8ca022b2107b43479877e474876ee453",type:"AssignmentRelationship"},{id:"id-e8f9f28429de4e429dc6b4d5a5ba21d3",sourceId:"id-b738cbbf1fc940bd8c1feb730c9a4bfa",targetId:"id-872915bf40ce4682abfe85d06f1e9ec0",type:"TriggeringRelationship"},{id:"id-5e28e295fb4d4e28b448e33e3cf77fa2",sourceId:"id-872915bf40ce4682abfe85d06f1e9ec0",targetId:"id-a8530a6824354df4b79de5449438e906",type:"TriggeringRelationship"},{id:"id-f0d08556b9e24ede92e7fd2d716c8b0a",sourceId:"id-a8530a6824354df4b79de5449438e906",targetId:"id-ef6e3d9305c944348b3496c600b4ea8b",type:"TriggeringRelationship"},{id:"id-d65bbfa56158461482bf3759cc79811b",sourceId:"id-ef6e3d9305c944348b3496c600b4ea8b",targetId:"id-883f436900414e5a8e4d3e56ecfde790",type:"TriggeringRelationship"},{id:"id-e485511cce1b45abb220a9cf55351157",sourceId:"id-15912e6fa9db49639ef41bc5347cd2f4",targetId:"id-b738cbbf1fc940bd8c1feb730c9a4bfa",type:"AssignmentRelationship"},{id:"id-ef2adbf2dc8749d8874381ba37061d66",sourceId:"id-ce47e17b7e5b4d9997a1617607bbae32",targetId:"id-c1514ab0c36f4a2f92ab6947796d7d47",type:"TriggeringRelationship"},{id:"id-8626e43d648d4afa8d489b188b6839dd",sourceId:"id-c1514ab0c36f4a2f92ab6947796d7d47",targetId:"id-682d29e2d4e948b88b69a349079a4374",type:"TriggeringRelationship"},{id:"id-654076b283a444539f245666c1d4539d",sourceId:"id-682d29e2d4e948b88b69a349079a4374",targetId:"id-b9fe97712ed74728b5a930617b19e1c3",type:"TriggeringRelationship"},{id:"id-0f83a1daf41a45efab783f0c41843dd5",sourceId:"id-682d29e2d4e948b88b69a349079a4374",targetId:"id-90d9a66ad71a482aafbb85f7a1f1c999",type:"TriggeringRelationship"},{id:"id-daa5c9265a354e94b2dbc1271543f3ff",sourceId:"id-90d9a66ad71a482aafbb85f7a1f1c999",targetId:"id-89ba95e3c50a4cb3b8a14306f3639131",type:"TriggeringRelationship"},{id:"id-1781feee5b1049c893850bd813014942",sourceId:"id-89ba95e3c50a4cb3b8a14306f3639131",targetId:"id-b9fe97712ed74728b5a930617b19e1c3",type:"TriggeringRelationship"},{id:"id-1b0348a28b2740648ff6eb1d7c404ceb",sourceId:"id-89ba95e3c50a4cb3b8a14306f3639131",targetId:"id-c78a21699bec43a68643ff6d2bbbe36f",type:"TriggeringRelationship"},{id:"id-737f30dc942e4b28a1b57da1f9d12da6",sourceId:"id-c78a21699bec43a68643ff6d2bbbe36f",targetId:"id-9584219f98c0493fbce5b4e4fce4618e",type:"TriggeringRelationship"},{id:"id-0b5948809188417babedfbd838f03712",sourceId:"id-9584219f98c0493fbce5b4e4fce4618e",targetId:"id-1c84fbce13dd46d5a0e97720a1bbbbff",type:"TriggeringRelationship"},{id:"id-e9eb90d8a68d407185390aac12360d2c",sourceId:"id-5d203d365a5b44c980ca25ed5ca32b87",targetId:"id-6efa2ba6c2bb4ef2b6029d0cdb02a2d3",type:"TriggeringRelationship"},{id:"id-ec1a064c4a324ad09877de00a1e2a0b1",sourceId:"id-6efa2ba6c2bb4ef2b6029d0cdb02a2d3",targetId:"id-0314083b4623407584929ccf1ac121a9",type:"TriggeringRelationship"},{id:"id-113a80e92076461fb535aed9581397b9",sourceId:"id-0314083b4623407584929ccf1ac121a9",targetId:"id-a340b5258f934a7cb8645b718aaf0369",type:"TriggeringRelationship"},{id:"id-b9f3a485a1414c9f93c7eb19d0142c46",sourceId:"id-1acabd37a97c47e0a0cfe01b73dd21cf",targetId:"id-5d203d365a5b44c980ca25ed5ca32b87",type:"AssignmentRelationship"},{id:"id-d1b21c8ce820493598979179a19cbe7e",sourceId:"id-c89df6e04a0a4ac1a06a87a31561596a",targetId:"id-0314083b4623407584929ccf1ac121a9",type:"AssignmentRelationship"},{id:"id-483ed4a3913e4cfba475ca12a0bcf1ce",sourceId:"id-a340b5258f934a7cb8645b718aaf0369",targetId:"id-224eb6af6322440fbe63d7a8b4ee6c76",type:"TriggeringRelationship"},{id:"id-93a024b5df6940df880d3a96cff8874d",sourceId:"id-224eb6af6322440fbe63d7a8b4ee6c76",targetId:"id-df32912adac244d79cd5cd4a6e8ca868",type:"TriggeringRelationship"},{id:"id-4ba566ad8e7b4ebda8f396ac708e0b04",sourceId:"id-43397d2710c54ce480293c781acf54da",targetId:"id-ce47e17b7e5b4d9997a1617607bbae32",type:"AssignmentRelationship"},{id:"id-c8e516db65f242bf9d1e23915f13d2af",sourceId:"id-7a8bacf6e04b425285de5c49081a6432",targetId:"id-e9137c76903e44f1959a92ba1c9a3539",type:"TriggeringRelationship"},{id:"id-92bd5dadab8846e380f722a6f7c8fef4",sourceId:"id-e9137c76903e44f1959a92ba1c9a3539",targetId:"id-62d938200a584d0f89f6045ee5e03ed5",type:"TriggeringRelationship"},{id:"id-be4585eed7144ccdbc9ea0f88c7a2bf6",sourceId:"id-62d938200a584d0f89f6045ee5e03ed5",targetId:"id-5f4b444257cd4c1da08426a3795f26ad",type:"TriggeringRelationship"},{id:"id-0a4da029f34642458ee2399c808bfccb",sourceId:"id-5f4b444257cd4c1da08426a3795f26ad",targetId:"id-f9081e17ebb94265b4d9b7c5edd1e8a7",type:"TriggeringRelationship"},{id:"id-d5bb66cd81184ebca19d88eff357301b",sourceId:"id-f9081e17ebb94265b4d9b7c5edd1e8a7",targetId:"id-3d0157950c6941ac87a87386d321ab98",type:"TriggeringRelationship"},{id:"id-e06d57aa53ba431aba7ac43670515b48",sourceId:"id-3d0157950c6941ac87a87386d321ab98",targetId:"id-41ea2f0738bc42acb09770249fbf03d7",type:"TriggeringRelationship"},{id:"id-f589b197f178479b8505217e3da439ad",sourceId:"id-41ea2f0738bc42acb09770249fbf03d7",targetId:"id-fa5e3082660d4639b360873a0863591e",type:"TriggeringRelationship"},{id:"id-f3f2633dcf594550872bfcc176d3f175",sourceId:"id-fa5e3082660d4639b360873a0863591e",targetId:"id-5f4b444257cd4c1da08426a3795f26ad",type:"TriggeringRelationship"},{id:"id-c3ba65c066474f9090cb7eded3df69d8",sourceId:"id-3d0157950c6941ac87a87386d321ab98",targetId:"id-ec58ea0bfa1649f3bd501954f973778c",type:"TriggeringRelationship"},{id:"id-629dbd6c62df4db58876abdde398f3af",sourceId:"id-8e71a905056f4216a991be47a43bcfae",targetId:"id-7a8bacf6e04b425285de5c49081a6432",type:"AssignmentRelationship"},{id:"id-1e56ae62a87f4633ac6e8cc9661b6e3f",sourceId:"id-dc6a4cba95e34fb49e2be4801da093e3",targetId:"id-e9137c76903e44f1959a92ba1c9a3539",type:"AssignmentRelationship"},{id:"id-03884bf798d54ba58d879a3dd8cc2743",sourceId:"id-8e71a905056f4216a991be47a43bcfae",targetId:"id-62d938200a584d0f89f6045ee5e03ed5",type:"AssignmentRelationship"},{id:"id-7748c3d9c1a046358fd6f435a47eb1a6",sourceId:"id-24a2437f3e5046eab5138c727c4b5257",targetId:"id-9f7faf5d1b254671a0b8a0a6db62225f",type:"AssignmentRelationship"},{id:"id-72c74f892dab43b7b7c58e25f24d119a",sourceId:"id-9f7faf5d1b254671a0b8a0a6db62225f",targetId:"id-57639d3ab1894da2bc5897616b2ba938",type:"TriggeringRelationship"},{id:"id-de7f13da508a4e6582d12560ffd8ab97",sourceId:"id-89a9c27b7cd246b5a393d87e833ecdca",targetId:"id-f27dec88a0a846c684a86cde26bc4fdc",type:"TriggeringRelationship"},{id:"id-01f7e62dae6644269856be6941d95216",sourceId:"id-89a9c27b7cd246b5a393d87e833ecdca",targetId:"id-029ee80835134fdc99a4d301f61b6206",type:"TriggeringRelationship"},{id:"id-61bb1906573b495e93cc0d9daa6028d4",sourceId:"id-24a2437f3e5046eab5138c727c4b5257",targetId:"id-8fe7f17a70fd4901a361d983d76de1dd",type:"AssignmentRelationship"},{id:"id-75964c89a78440709cc069ba4ad225d7",sourceId:"id-8fe7f17a70fd4901a361d983d76de1dd",targetId:"id-c11c2071468540e5ba7facf1d38e5e98",type:"TriggeringRelationship"},{id:"id-9eda66ef68fe4e8f9986f746eac571c0",sourceId:"id-57639d3ab1894da2bc5897616b2ba938",targetId:"id-8fe7f17a70fd4901a361d983d76de1dd",type:"TriggeringRelationship"},{id:"id-4be23113b12444e1b188aa65bfafb7f5",sourceId:"id-0dc085cf28374cf1ada447befde5ffa4",targetId:"id-57639d3ab1894da2bc5897616b2ba938",type:"AssignmentRelationship"},{id:"id-a80fed49c5314189b246fc8064bebb83",sourceId:"id-52df8ef827294efca39af45de4f39a98",targetId:"id-89a9c27b7cd246b5a393d87e833ecdca",type:"TriggeringRelationship"},{id:"id-ead65c47102243b7b27104cd9732003d",sourceId:"id-c11c2071468540e5ba7facf1d38e5e98",targetId:"id-52df8ef827294efca39af45de4f39a98",type:"TriggeringRelationship"},{id:"id-b99ffada1556439ca3b4e101f0b5e69a",sourceId:"id-f27dec88a0a846c684a86cde26bc4fdc",targetId:"id-917edb21360c4ce69de459c6985e228e",type:"TriggeringRelationship"},{id:"id-09cef33cf67e43e7b1b42bf49ad584fd",sourceId:"id-917edb21360c4ce69de459c6985e228e",targetId:"id-c11c2071468540e5ba7facf1d38e5e98",type:"TriggeringRelationship"},{id:"id-a2d8a1ff28bd430d8b4b6fb24eb85f0d",sourceId:"id-029ee80835134fdc99a4d301f61b6206",targetId:"id-09d435cb51374874bc28b192cc53de68",type:"TriggeringRelationship"},{id:"id-39d262014b12469ba89e85d2bf6fd723",sourceId:"id-24a2437f3e5046eab5138c727c4b5257",targetId:"id-9f7faf5d1b254671a0b8a0a6db62225f",type:"AssignmentRelationship"},{id:"id-de88edff8e3c4909ba546036d71ceedf",sourceId:"id-e7a25dfb9e2c40479e347d335b604b4f",targetId:"id-f89be65c20d3418ebd0cf150aacfe08e",type:"TriggeringRelationship"},{id:"id-3741bde5d63a4a348be22d3843dd1851",sourceId:"id-f89be65c20d3418ebd0cf150aacfe08e",targetId:"id-86a54ce2ec664ba78822968b818fa9e6",type:"TriggeringRelationship"},{id:"id-66cf80297e0b4999ba85b0b91db41d1e",sourceId:"id-86a54ce2ec664ba78822968b818fa9e6",targetId:"id-2cbcd689892b4fdeb7e9ef292051daae",type:"TriggeringRelationship"},{id:"id-9b8a76d101884e10b950d35c4133be55",sourceId:"id-2cbcd689892b4fdeb7e9ef292051daae",targetId:"id-46dbdd13cb6b4383a0c8f23f2768c155",type:"TriggeringRelationship"},{id:"id-80720afb18dc4245bef1aae50b1c6e21",sourceId:"id-a773e9a59a964ef384fdf95da2dc0d5b",targetId:"id-46dbdd13cb6b4383a0c8f23f2768c155",type:"AssignmentRelationship"},{id:"id-0771dcde30a9460e8eb7e635bd9c4ee5",sourceId:"id-f6043d4ca0ad46caa4df06872e60f7db",targetId:"id-86a54ce2ec664ba78822968b818fa9e6",type:"AssignmentRelationship"},{id:"id-9aa8232bf0cb40b68bdbd6da3c9d83b2",sourceId:"id-7cccab0dc9554d499361880d94fcb2af",targetId:"id-c6b92ebec23342d69713c72cbe90d726",type:"TriggeringRelationship"},{id:"id-3a165e828e0045248779b30a59846094",sourceId:"id-c6b92ebec23342d69713c72cbe90d726",targetId:"id-7aac8ca483f84a138636d6c865bf2d3a",type:"TriggeringRelationship"},{id:"id-7f887f7a83284494bc7bcc87b58bf48d",sourceId:"id-7aac8ca483f84a138636d6c865bf2d3a",targetId:"id-27c7863314ec497b943d094c347af2ef",type:"TriggeringRelationship"},{id:"id-393ed462d8084ac58f1f4262054242dd",sourceId:"id-7aac8ca483f84a138636d6c865bf2d3a",targetId:"id-e1652504a5c845be9e37637876d5ee15",type:"TriggeringRelationship"},{id:"id-aa8de2a2b8cd4985a31b9a0986556094",sourceId:"id-dee72201694b465b9201b439a6240f4b",targetId:"id-7cccab0dc9554d499361880d94fcb2af",type:"AssignmentRelationship"},{id:"id-ea2167cc7e1c4f688603c98cfcaf6bc5",sourceId:"id-dee72201694b465b9201b439a6240f4b",targetId:"id-c6b92ebec23342d69713c72cbe90d726",type:"AssignmentRelationship"},{id:"id-fe54c87d552846878886490f77209260",sourceId:"id-5410105277b845f8b4a27cc29a2ecd94",targetId:"id-7aac8ca483f84a138636d6c865bf2d3a",type:"AssignmentRelationship"},{id:"id-c6215b68908b48dfbb1a0328d691a641",sourceId:"id-f58b5269e6714b7b84ee0957d29f65d0",targetId:"id-b514eff0722d4b18ae6f2dc65256e941",type:"FlowRelationship"},{id:"id-99b0364ce0914804b44937b3ddc7a359",sourceId:"id-69cce27974604e609e13d9f3682bb67b",targetId:"id-618c4133e74c49e6b9f76aff0505d6af",type:"FlowRelationship"},{id:"id-439b16b4cd3d467d86fd510e2eb95406",sourceId:"id-7c31e6fa72334f64bbf9e5ec6bbf0e84",targetId:"id-f58b5269e6714b7b84ee0957d29f65d0",type:"FlowRelationship"},{id:"id-9f05b569271b44ddb29c28716d9e5b40",sourceId:"id-24046609b1914b9c89a055f81e4170f8",targetId:"id-1c264a142460456285175939fdf6d1d5",type:"FlowRelationship"},{id:"id-53c0aeccdd82433987047777657efcf2",sourceId:"id-1c264a142460456285175939fdf6d1d5",targetId:"id-618c4133e74c49e6b9f76aff0505d6af",type:"FlowRelationship"},{id:"id-35e96ec7dcc249ac8891562ea2750fd0",sourceId:"id-f58b5269e6714b7b84ee0957d29f65d0",targetId:"id-618c4133e74c49e6b9f76aff0505d6af",type:"FlowRelationship"},{id:"id-5be43c15e37a423687838d11219a4b86",sourceId:"id-618c4133e74c49e6b9f76aff0505d6af",targetId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",type:"FlowRelationship"},{id:"id-858438ac81e1446fb7148c882fab5f9f",sourceId:"id-618c4133e74c49e6b9f76aff0505d6af",targetId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",type:"FlowRelationship"},{id:"id-8ba202278bb94793a7f9efcd7c6e3aeb",sourceId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",targetId:"id-618c4133e74c49e6b9f76aff0505d6af",type:"FlowRelationship"},{id:"id-f4507c87e9a842deaa483d72ebf49998",sourceId:"id-24046609b1914b9c89a055f81e4170f8",targetId:"id-1c264a142460456285175939fdf6d1d5",type:"FlowRelationship"},{id:"id-68098394fac6412db3394692f2139c79",sourceId:"id-1c264a142460456285175939fdf6d1d5",targetId:"id-24046609b1914b9c89a055f81e4170f8",type:"FlowRelationship"},{id:"id-b237236b27ee42c69dcaa8f18aa3cbd6",sourceId:"id-f58b5269e6714b7b84ee0957d29f65d0",targetId:"id-7c31e6fa72334f64bbf9e5ec6bbf0e84",type:"FlowRelationship"},{id:"id-e0507ed1144e4bdda4b76897308a4f1d",sourceId:"id-7c31e6fa72334f64bbf9e5ec6bbf0e84",targetId:"id-f58b5269e6714b7b84ee0957d29f65d0",type:"FlowRelationship"},{id:"id-058bcb0c2e4944639a2954973496f4d5",sourceId:"id-f58b5269e6714b7b84ee0957d29f65d0",targetId:"id-7c31e6fa72334f64bbf9e5ec6bbf0e84",type:"FlowRelationship"},{id:"id-acc437a858a34d7b9e7b774619e585f9",sourceId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",targetId:"id-f58b5269e6714b7b84ee0957d29f65d0",type:"FlowRelationship"},{id:"id-233138fb138f4105abefae7f572ff170",sourceId:"id-f58b5269e6714b7b84ee0957d29f65d0",targetId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",type:"FlowRelationship"},{id:"id-29e719931cfe4d53aca479858eaa3e2b",sourceId:"id-24046609b1914b9c89a055f81e4170f8",targetId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",type:"FlowRelationship"},{id:"id-b929c981c16e44f6880b323b13ee09e2",sourceId:"id-ff71732d40d84f7e960fd7bcc7f3fb8c",targetId:"id-24046609b1914b9c89a055f81e4170f8",type:"FlowRelationship"},{id:"id-1a6d02ede20d44d99abf283df4470395",sourceId:"id-1c264a142460456285175939fdf6d1d5",targetId:"id-285843d1116f4d35adc69d398a00dd50",type:"FlowRelationship"},{id:"id-cc6952398001424393d7798ed98a8327",sourceId:"id-285843d1116f4d35adc69d398a00dd50",targetId:"id-1c264a142460456285175939fdf6d1d5",type:"FlowRelationship"},{id:"id-4130de2148594b59b5dbe7e93e5b8782",sourceId:"id-24046609b1914b9c89a055f81e4170f8",targetId:"id-7c31e6fa72334f64bbf9e5ec6bbf0e84",type:"FlowRelationship"},{id:"id-d6cfed77d33d4a2dba83a5aabcd3cf9a",sourceId:"id-519d0a000a0c47169eda17b29b8ee28d",targetId:"id-ffdb8ffa71e94c1c958b75992990cfc8",type:"TriggeringRelationship"},{id:"id-1d9771bdbd1f4c0590e1251de511395b",sourceId:"id-eac08c4ad62c4181a339a4e0b59c7464",targetId:"id-519d0a000a0c47169eda17b29b8ee28d",type:"TriggeringRelationship"},{id:"id-01ba4e03f94143898e15ec3975cc9e2d",sourceId:"id-519d0a000a0c47169eda17b29b8ee28d",targetId:"id-9d759678d62b45048a63e8b2995b6d5c",type:"TriggeringRelationship"},{id:"id-ee16b1dc20ac4e33ac9342fa3a785a96",sourceId:"id-ffdb8ffa71e94c1c958b75992990cfc8",targetId:"id-c47461e964c3497cb01ee79386ab69ca",type:"TriggeringRelationship"},{id:"id-a78e9723caeb416eb983d00d090f936e",sourceId:"id-c47461e964c3497cb01ee79386ab69ca",targetId:"id-c0246dea61404e838265eb1e7d11386c",type:"TriggeringRelationship"},{id:"id-89e323f6f2054285a3dbcd9ec2966d8f",sourceId:"id-9d759678d62b45048a63e8b2995b6d5c",targetId:"id-c0246dea61404e838265eb1e7d11386c",type:"TriggeringRelationship"},{id:"id-807fdec27d6a4baea88099f242423ff7",sourceId:"id-9d759678d62b45048a63e8b2995b6d5c",targetId:"id-01369c45a4b24b069408c682656eaf61",type:"TriggeringRelationship"},{id:"id-325b281eaf144a8d93d2f79dc03ed3f3",sourceId:"id-01369c45a4b24b069408c682656eaf61",targetId:"id-c0246dea61404e838265eb1e7d11386c",type:"TriggeringRelationship"},{id:"id-fbae4f3b7d154679885894b83eb1d052",sourceId:"id-01369c45a4b24b069408c682656eaf61",targetId:"id-56c184f5309f4188a54be8ee216a4acc",type:"TriggeringRelationship"},{id:"id-bbd729bd3e4e4d799c29f33d81c53140",sourceId:"id-c8256a757c614546acbb221b92b31879",targetId:"id-d743eadbe2e24ca5bbd38498c048a9a4",type:"TriggeringRelationship"},{id:"id-4240be31bec94ad2b3ca3ab03bb6b758",sourceId:"id-d743eadbe2e24ca5bbd38498c048a9a4",targetId:"id-205c03e8c25b4dd38a155016926b990a",type:"TriggeringRelationship"},{id:"id-827945c17487404882ed461ef2146054",sourceId:"id-a6813e2e0c3d410b8bb74b9e754661e4",targetId:"id-cf52d99c8f734397afaf7862fc9574c8",type:"TriggeringRelationship"},{id:"id-da5b9528def449f58147fd4b1565feb2",sourceId:"id-cf52d99c8f734397afaf7862fc9574c8",targetId:"id-a13b1ba3e7b74e339e4d49e9577070e8",type:"TriggeringRelationship"},{id:"id-e3fac570278f41a396a65bfcd58bb63b",sourceId:"id-4312066a51d9494ea30571934d11b6fd",targetId:"id-a13b1ba3e7b74e339e4d49e9577070e8",type:"AssignmentRelationship"},{id:"id-14def9ef8dcf46c795c0253d9c0a54e5",sourceId:"id-a13b1ba3e7b74e339e4d49e9577070e8",targetId:"id-7483257820d94191b07a85157b628152",type:"TriggeringRelationship"},{id:"id-c6916456f441406aa2c00b5e1f7195d6",sourceId:"id-ef6e3d9305c944348b3496c600b4ea8b",targetId:"id-ffcf0cfb205a4700940a1c2903350e25",type:"TriggeringRelationship"},{id:"id-9ffda26bd64e4ac0ad41f03b1fa89f31",sourceId:"id-ffcf0cfb205a4700940a1c2903350e25",targetId:"id-883f436900414e5a8e4d3e56ecfde790",type:"TriggeringRelationship"},{id:"id-5103d867a052431bbb71285cfd76c66e",sourceId:"id-883f436900414e5a8e4d3e56ecfde790",targetId:"id-b729aaa4f1664386b414756271c6a89c",type:"TriggeringRelationship"},{id:"id-62c8524eb7af4f91b40a25f7530ddf63",sourceId:"id-406ae4f4b5a74606b51e14cbb3758d67",targetId:"id-e8d37987176e458d8fce9dd44a5eef19",type:"AssignmentRelationship"},{id:"id-dd92db9ed9fd48b3b3c4b8044ea5703e",sourceId:"id-e8d37987176e458d8fce9dd44a5eef19",targetId:"id-065c2aae9eaf46f3bb32660419ed504a",type:"TriggeringRelationship"},{id:"id-5c3098854aa848e59f658f24e5a92c43",sourceId:"id-065c2aae9eaf46f3bb32660419ed504a",targetId:"id-498b0a228d934181b565f9932abc9fff",type:"TriggeringRelationship"},{id:"id-936022a6c7b7439c831dad5b664d8529",sourceId:"id-498b0a228d934181b565f9932abc9fff",targetId:"id-acc16a04d5864ed2be6dfebe1d1adea3",type:"TriggeringRelationship"}],g=[{id:"id-dd1a99f2808b4947a74e45a26fa535b4",name:"Processos",viewpoint:""},{id:"id-53287306e43f4590a74c0b024773fe16",name:"Organização",viewpoint:""},{id:"id-293030e21e504f4387820296ad6e476d",name:"Modelo Sistemico",viewpoint:""},{id:"id-a74031b26d2f470396f3d812dfe0861d",name:"Processos - Futuro",viewpoint:""},{id:"id-2fa45c38472d4a32aca04908c38c1260",name:"Processos2",viewpoint:""},{id:"id-86eea07d229b45cb9695fa676d96fc7b",name:"Processos - Futuro2",viewpoint:""}],y={identifier:e,archimateId:d,name:a,description:i,formats:s,source:c,sourceFile:b,sourceFormat:f,timestamp:t,tags:r,duplicates:n,language:o,elements:u,relationships:p,views:g};export{d as archimateId,y as default,i as description,n as duplicates,u as elements,s as formats,e as identifier,o as language,a as name,p as relationships,c as source,b as sourceFile,f as sourceFormat,r as tags,t as timestamp,g as views};