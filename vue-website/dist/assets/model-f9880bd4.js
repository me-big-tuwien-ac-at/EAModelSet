const e="https://me.big.tuwien.ac.at/EAModelSet/id-867264cfe09a4daaa8e3d1e0c3e680b3",d="id-867264cfe09a4daaa8e3d1e0c3e680b3",a="car-rental-application",i="",c=["XML","CSV","JSON","ARCHIMATE"],t="GitHub",b="raw-data/github/archimate/car-rental-application.archimate",f="ARCHIMATE",o="29-06-2023 09:30:51",n=[],r=[],s="eo",p=[{id:"id-ea7e2c4f814448989c3c8bd469da4f9c",name:"client",type:"BusinessActor",layer:"business"},{id:"id-b1f24df5bdb6420cb34edfedb8bd517a",name:"car-service",type:"ApplicationService",layer:"application"},{id:"id-112f77c940a24982aa75704995033eff",name:"rent-service",type:"ApplicationService",layer:"application"},{id:"id-2e6952b5b43a47279b77c72e5bd81fd2",name:"location-service",type:"ApplicationService",layer:"application"},{id:"id-86dcc84aca854de2b783fbc9b6e5e1e9",name:"api-gateway",type:"ApplicationService",layer:"application"},{id:"id-32e659b02c1d469bba51e9014dafb510",name:"car-service",type:"ApplicationService",layer:"application"},{id:"id-76f2f8d1229048c082e402f9b690b0d7",name:"rent-service",type:"ApplicationService",layer:"application"},{id:"id-45566399130845288b2a566da0983cef",name:"location-service",type:"ApplicationService",layer:"application"},{id:"id-974a863ad92c42a79d43890453613c8a",name:"discovery-service",type:"ApplicationService",layer:"application"},{id:"id-0d8b169acc064f23946857f6e850c18a",name:"config-service",type:"ApplicationService",layer:"application"},{id:"id-d26e9f65fae64aa7ae88443227426a68",name:"end-point-get-cars",type:"TechnologyInterface",layer:"technology"},{id:"id-4df68c9bca2348ffa6b4e660e3c207ce",name:"end-point-get-manufacturers",type:"TechnologyInterface",layer:"technology"},{id:"id-aba996cfba8f466da16f26e293233f94",name:"end-point-get-manufacturer-cars",type:"TechnologyInterface",layer:"technology"},{id:"id-5b476da6704a4f18ab7d82fe304f4ac8",name:"end-point-get-car",type:"TechnologyInterface",layer:"technology"},{id:"id-92cb55bbd36749aa9e85745f740c235e",name:"proxy-end-point-get-cars",type:"TechnologyInterface",layer:"technology"},{id:"id-611ffbdf02a1497ba4bc0134b805ff3b",name:"proxy-end-point-get-manufacturers",type:"TechnologyInterface",layer:"technology"},{id:"id-d21bddc7567a4192a255b26b499ebfcc",name:"proxy-end-point-get-manufacturer-cars",type:"TechnologyInterface",layer:"technology"},{id:"id-8942da403fbb41dd80dc38ba3e5778af",name:"proxy-end-point-get-car",type:"TechnologyInterface",layer:"technology"},{id:"id-7bb130ee917b458cba060ee2791e9609",name:"api-gateway",type:"TechnologyService",layer:"technology"},{id:"id-e6f2b4d9e78b479590b2c242ef011ef6",name:"car-db",type:"Node",layer:"technology"},{id:"id-894eba7631464259a2e7499114a71cbb",name:"car-db",type:"TechnologyService",layer:"technology"},{id:"id-307f43b05c9743d1ba5df894eb9bdc61",name:"end-point-get-cars-specification",type:"Artifact",layer:"technology"},{id:"id-491be5d6176040818d71ae6db6932b66",name:"end-point-get-manufacturers-specification",type:"Artifact",layer:"technology"},{id:"id-5d2c631c5f9a4451a22391b2abcbb80f",name:"end-point-get-manufacturer-cars-specification",type:"Artifact",layer:"technology"},{id:"id-546f2e211f174ebfb216128ddb0f3cd4",name:"end-point-get-car-specification",type:"Artifact",layer:"technology"},{id:"id-fe03082df336434fba6cfcb01045aa00",name:"endpoint-get-rent",type:"TechnologyInterface",layer:"technology"},{id:"id-fa397e26f40c4909bf2f082849f44754",name:"endpoint-get-rent-specification",type:"Artifact",layer:"technology"},{id:"id-ae33a1b571644bbf91076b2dffcf6190",name:"proxy-endpoint-get-rent",type:"TechnologyInterface",layer:"technology"},{id:"id-e912ee2c412f41b5a629f2485fefe44b",name:"endpoint-get-distance",type:"TechnologyInterface",layer:"technology"},{id:"id-8998240739924937871c53a550a646a0",name:"endpoint-get-distance-specification",type:"Artifact",layer:"technology"},{id:"id-1fdca3a8921b48f488d83b41f29d3580",name:"endpoint-get-locations-specifications",type:"Artifact",layer:"technology"},{id:"id-dc81a8184d8d4c01956696b265065399",name:"endpoint-get-locations",type:"TechnologyInterface",layer:"technology"},{id:"id-b403587125be4fe985d7e2b6ea65cc85",name:"proxy-endpoint-get-distance",type:"TechnologyInterface",layer:"technology"},{id:"id-d4ee7047f251497d9d2f544312f39505",name:"proxy-endpoint-get-locations",type:"TechnologyInterface",layer:"technology"},{id:"id-19e9d301373d40c0848181bed97c029a",name:"endpoint-get-location",type:"TechnologyInterface",layer:"technology"},{id:"id-14cd94082608446d9b21eccf602fe313",name:"endpoint-get-location-specifiacations",type:"Artifact",layer:"technology"},{id:"id-c31569cd2ef34697aa34d382f303384c",name:"proxy-endpoint-get-location",type:"TechnologyInterface",layer:"technology"},{id:"id-a1c5f46bb0324e4db87c430b42cccdc8",name:"locations-db",type:"TechnologyService",layer:"technology"},{id:"id-e44ddc85fa524fc188f86eff9d9a4750",name:"discovery-service",type:"TechnologyService",layer:"technology"},{id:"id-ca1767dc25fa41d39bc812a0f7346a97",name:"config-service",type:"TechnologyService",layer:"technology"},{id:"id-0ef53ba9c53e47859e78aefe35cb9dd4",name:"docker-container_car-db instance#1",type:"Node",layer:"technology"},{id:"id-c016114f8f42417c93b664d09a88a823",name:"postgres",type:"SystemSoftware",layer:"technology"},{id:"id-a39f633d56114c65ba2d27e5effdcd26",name:"docker-image_car-db",type:"Artifact",layer:"technology"},{id:"id-ce3f6d2ef1ba4de0a7aa2416f356e697",name:"car-db",type:"TechnologyService",layer:"technology"},{id:"id-de0c0c2bce174a329e5026c0fcc7252c",name:"docker-container_location-db instance#1",type:"Node",layer:"technology"},{id:"id-bf5149b5a43d4fb98fbaf8f41e0f1823",name:"postgres",type:"SystemSoftware",layer:"technology"},{id:"id-1ed836202c1d4426a73fcdee931e3ba5",name:"location-db",type:"TechnologyService",layer:"technology"},{id:"id-e7d359657bc041638348908e6e907b5c",name:"docker-image_location-db",type:"Artifact",layer:"technology"},{id:"id-484d8d910398408cb81389228798e026",name:"docker-container_api-gateway instance#1",type:"Node",layer:"technology"},{id:"id-aae1e2a799994cf9bafad09c7a7c94e8",name:"springboot",type:"SystemSoftware",layer:"technology"},{id:"id-b836dd78eee9456ca1b6a758a81b8445",name:"docker-image_api-gateway",type:"Artifact",layer:"technology"},{id:"id-a486d122a142422a9a23886197dad155",name:"docker-container_car instance#1",type:"Node",layer:"technology"},{id:"id-504ba2d667964fbbb936addf54b2aaae",name:"springboot",type:"SystemSoftware",layer:"technology"},{id:"id-a360ef8683bd4885b1610cf913196329",name:"docker-image_car",type:"Artifact",layer:"technology"},{id:"id-10ab403192a6413ab55ba05d00abea60",name:"docker-container_rent instance#1",type:"Node",layer:"technology"},{id:"id-10149873916544b3a1af184a34db88e3",name:"springboot",type:"SystemSoftware",layer:"technology"},{id:"id-b603650a9da44997888766b1269a8121",name:"docker-image_rent",type:"Artifact",layer:"technology"},{id:"id-ba838e66a9b64aa289c10deae82f7a63",name:"docker-container_location instance#1",type:"Node",layer:"technology"},{id:"id-70ff83e03123452b93c7ee8545cd8919",name:"springboot",type:"SystemSoftware",layer:"technology"},{id:"id-78a5b198299a4101a51c78f960fd36ad",name:"docker-image_location",type:"Artifact",layer:"technology"},{id:"id-3614a3b114bf4f2f8e8821452c414186",name:"docker-container_dicovery instance#1",type:"Node",layer:"technology"},{id:"id-eabb7835b56e4859882c76c6590e45ff",name:"springboot",type:"SystemSoftware",layer:"technology"},{id:"id-1d46ac3d617e4b139330648dff18417f",name:"docker-image_discovery",type:"Artifact",layer:"technology"},{id:"id-121f5fdc115f4087a23c1c78945f1ed5",name:"docker-container_config instance#1",type:"Node",layer:"technology"},{id:"id-bc64c52ae8164c069dffa36db9cff77d",name:"springboot",type:"SystemSoftware",layer:"technology"},{id:"id-8c89c40da55148dc8d3c84a70f18bd74",name:"docker-image_config",type:"Artifact",layer:"technology"},{id:"id-52b3f4babd954cde843e68db91b51032",name:"docker",type:"SystemSoftware",layer:"technology"},{id:"id-30de907b2cb94760ac3ce96cec23d315",name:"docker-host-os",type:"SystemSoftware",layer:"technology"},{id:"id-4fd01f9e56a543c3a61d22aacaf9dddd",name:"docker-host-device",type:"Device",layer:"technology"},{id:"id-fe6d6b9867b8418483b7850627eecdce",name:"docker-volume_mysql_bkp_car",type:"Artifact",layer:"technology"},{id:"id-b9ea6d3a6a4d434ea93abf049f151415",name:"docker-volume_mysql_bkp_location",type:"Artifact",layer:"technology"},{id:"id-d9d388f6c290496b972e562e735b4a29",name:"api-gateway",type:"TechnologyService",layer:"technology"},{id:"id-7e269a2e6ffb403ebbca5c635666e909",name:"discovery-service",type:"TechnologyService",layer:"technology"},{id:"id-bf7047a7a3854ef49d3b5226dbe6c2bf",name:"config-service",type:"TechnologyService",layer:"technology"}],y=[{id:"id-16189e4d939f47c0ad491ed0f3202b94",sourceId:"id-b1f24df5bdb6420cb34edfedb8bd517a",targetId:"id-d26e9f65fae64aa7ae88443227426a68",type:"ServingRelationship"},{id:"id-da636df2c31741b0976aefdcc14eb43e",sourceId:"id-b1f24df5bdb6420cb34edfedb8bd517a",targetId:"id-4df68c9bca2348ffa6b4e660e3c207ce",type:"ServingRelationship"},{id:"id-203d87f8995b44d3a845744bbfaa76a7",sourceId:"id-b1f24df5bdb6420cb34edfedb8bd517a",targetId:"id-aba996cfba8f466da16f26e293233f94",type:"ServingRelationship"},{id:"id-73fd3ad85d8e4ce190ba6abcfaa105f4",sourceId:"id-b1f24df5bdb6420cb34edfedb8bd517a",targetId:"id-5b476da6704a4f18ab7d82fe304f4ac8",type:"ServingRelationship"},{id:"id-2ec112fa9f7c4eb69303d94aff08f0fc",sourceId:"id-d26e9f65fae64aa7ae88443227426a68",targetId:"id-92cb55bbd36749aa9e85745f740c235e",type:"ServingRelationship"},{id:"id-6d089f30ddb74cf487a841352362eeb9",sourceId:"id-4df68c9bca2348ffa6b4e660e3c207ce",targetId:"id-611ffbdf02a1497ba4bc0134b805ff3b",type:"ServingRelationship"},{id:"id-0a0b33693ad84866a2b8ebc208956029",sourceId:"id-aba996cfba8f466da16f26e293233f94",targetId:"id-d21bddc7567a4192a255b26b499ebfcc",type:"ServingRelationship"},{id:"id-6f49912c302645ff8b6281baa1644b5a",sourceId:"id-5b476da6704a4f18ab7d82fe304f4ac8",targetId:"id-8942da403fbb41dd80dc38ba3e5778af",type:"ServingRelationship"},{id:"id-28f3b176141c4b66888044962e780ea0",sourceId:"id-894eba7631464259a2e7499114a71cbb",targetId:"id-b1f24df5bdb6420cb34edfedb8bd517a",type:"ServingRelationship"},{id:"id-3569eeddd2a1432abe129529f0c44124",sourceId:"id-307f43b05c9743d1ba5df894eb9bdc61",targetId:"id-d26e9f65fae64aa7ae88443227426a68",type:"AssociationRelationship"},{id:"id-b86e341eaf2c4f28b24ae4ee7e16a49d",sourceId:"id-491be5d6176040818d71ae6db6932b66",targetId:"id-4df68c9bca2348ffa6b4e660e3c207ce",type:"AssociationRelationship"},{id:"id-8b2f2840e0bb4e66813e76e060e3620a",sourceId:"id-491be5d6176040818d71ae6db6932b66",targetId:"id-b1f24df5bdb6420cb34edfedb8bd517a",type:"AssociationRelationship"},{id:"id-e6cb3332158f44a68120f2299ae45bc0",sourceId:"id-307f43b05c9743d1ba5df894eb9bdc61",targetId:"id-b1f24df5bdb6420cb34edfedb8bd517a",type:"AssociationRelationship"},{id:"id-7ffbafde6da149bb9969977c41a75670",sourceId:"id-5d2c631c5f9a4451a22391b2abcbb80f",targetId:"id-aba996cfba8f466da16f26e293233f94",type:"AssociationRelationship"},{id:"id-1c041014b2ae44ebb4193cb2506462ff",sourceId:"id-5d2c631c5f9a4451a22391b2abcbb80f",targetId:"id-b1f24df5bdb6420cb34edfedb8bd517a",type:"AssociationRelationship"},{id:"id-4e86ebcb8e9c463eb9b88ffa8b253e23",sourceId:"id-546f2e211f174ebfb216128ddb0f3cd4",targetId:"id-5b476da6704a4f18ab7d82fe304f4ac8",type:"AssociationRelationship"},{id:"id-27eab17ace554ec6a56d25b284496840",sourceId:"id-546f2e211f174ebfb216128ddb0f3cd4",targetId:"id-b1f24df5bdb6420cb34edfedb8bd517a",type:"AssociationRelationship"},{id:"id-ca397f56054f4f5cacc0261adcd10561",sourceId:"id-fa397e26f40c4909bf2f082849f44754",targetId:"id-fe03082df336434fba6cfcb01045aa00",type:"AssociationRelationship"},{id:"id-e1b317c33e8c43779d3164ac0c80ccdb",sourceId:"id-112f77c940a24982aa75704995033eff",targetId:"id-fe03082df336434fba6cfcb01045aa00",type:"ServingRelationship"},{id:"id-8696a7b6f4a64079846de599d28918ac",sourceId:"id-fe03082df336434fba6cfcb01045aa00",targetId:"id-ae33a1b571644bbf91076b2dffcf6190",type:"ServingRelationship"},{id:"id-46c80eed355b44ca8b6f827c56de430d",sourceId:"id-fa397e26f40c4909bf2f082849f44754",targetId:"id-112f77c940a24982aa75704995033eff",type:"AssociationRelationship"},{id:"id-7944dcaa24ed4c0e89bde4d5ac39fa54",sourceId:"id-112f77c940a24982aa75704995033eff",targetId:"id-5b476da6704a4f18ab7d82fe304f4ac8",type:"ServingRelationship"},{id:"id-f5393def5d284c57a70daf031b2a0874",sourceId:"id-2e6952b5b43a47279b77c72e5bd81fd2",targetId:"id-e912ee2c412f41b5a629f2485fefe44b",type:"ServingRelationship"},{id:"id-e9ffed2a398043148e10f8e8ca89a811",sourceId:"id-8998240739924937871c53a550a646a0",targetId:"id-e912ee2c412f41b5a629f2485fefe44b",type:"AssociationRelationship"},{id:"id-aedd2930e0914b008bc3171c148c8d6a",sourceId:"id-8998240739924937871c53a550a646a0",targetId:"id-2e6952b5b43a47279b77c72e5bd81fd2",type:"AssociationRelationship"},{id:"id-885cb8afb33b4bd1b4a35d08b61a8988",sourceId:"id-1fdca3a8921b48f488d83b41f29d3580",targetId:"id-dc81a8184d8d4c01956696b265065399",type:"AssociationRelationship"},{id:"id-c2fa7214e57c48d28b99a5d3f993e6fd",sourceId:"id-1fdca3a8921b48f488d83b41f29d3580",targetId:"id-2e6952b5b43a47279b77c72e5bd81fd2",type:"AssociationRelationship"},{id:"id-481cac73bb774c859bc6bf3d5244ca26",sourceId:"id-2e6952b5b43a47279b77c72e5bd81fd2",targetId:"id-dc81a8184d8d4c01956696b265065399",type:"ServingRelationship"},{id:"id-aaa139c10d6a49eab10a80d5777814b0",sourceId:"id-e912ee2c412f41b5a629f2485fefe44b",targetId:"id-b403587125be4fe985d7e2b6ea65cc85",type:"ServingRelationship"},{id:"id-69e3c115c28b40aba698191afe703904",sourceId:"id-dc81a8184d8d4c01956696b265065399",targetId:"id-d4ee7047f251497d9d2f544312f39505",type:"ServingRelationship"},{id:"id-1b70526e984a4800962c764cc1d63229",sourceId:"id-14cd94082608446d9b21eccf602fe313",targetId:"id-19e9d301373d40c0848181bed97c029a",type:"AssociationRelationship"},{id:"id-7b0d7719159a4923bc699a7106c4e286",sourceId:"id-14cd94082608446d9b21eccf602fe313",targetId:"id-2e6952b5b43a47279b77c72e5bd81fd2",type:"AssociationRelationship"},{id:"id-e35da7b03c3c4e49ab8a1ccd7c3d2a52",sourceId:"id-19e9d301373d40c0848181bed97c029a",targetId:"id-c31569cd2ef34697aa34d382f303384c",type:"ServingRelationship"},{id:"id-0a3375b99ca34f1a919d9029482b2f58",sourceId:"id-2e6952b5b43a47279b77c72e5bd81fd2",targetId:"id-19e9d301373d40c0848181bed97c029a",type:"ServingRelationship"},{id:"id-7119a5b1b1a94553a7ad92a6e31aea24",sourceId:"id-112f77c940a24982aa75704995033eff",targetId:"id-e912ee2c412f41b5a629f2485fefe44b",type:"ServingRelationship"},{id:"id-5df028720f924684962a2d1d44f1062e",sourceId:"id-a1c5f46bb0324e4db87c430b42cccdc8",targetId:"id-2e6952b5b43a47279b77c72e5bd81fd2",type:"ServingRelationship"},{id:"id-1e919a8fbfef40c498c3029adf023592",sourceId:"id-92cb55bbd36749aa9e85745f740c235e",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-92c71600d63d4039a9369f71e67f9af5",sourceId:"id-611ffbdf02a1497ba4bc0134b805ff3b",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-dd0aa6a483ad49a086b1b1c5c9840a3a",sourceId:"id-d21bddc7567a4192a255b26b499ebfcc",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-39303e1d6e134000af50ce87977f1d6d",sourceId:"id-8942da403fbb41dd80dc38ba3e5778af",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-e1f8d59dadf2410eb27c833974d5cede",sourceId:"id-ae33a1b571644bbf91076b2dffcf6190",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-1c03ee6aa87143e5a9862abb4230669d",sourceId:"id-b403587125be4fe985d7e2b6ea65cc85",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-d5040f8f919948c4aaeb02dcae6ba99b",sourceId:"id-d4ee7047f251497d9d2f544312f39505",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-95be1c833a42425f99653a27c16bdd5d",sourceId:"id-c31569cd2ef34697aa34d382f303384c",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-d81ac4b1aef144ae9dafb56b4aba8164",sourceId:"id-e44ddc85fa524fc188f86eff9d9a4750",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-e7c82dbc5a6548f69c13d5c5d9f5ed0f",sourceId:"id-e44ddc85fa524fc188f86eff9d9a4750",targetId:"id-112f77c940a24982aa75704995033eff",type:"ServingRelationship"},{id:"id-088fcb3db0824ecd8b6424bf789ef39c",sourceId:"id-ca1767dc25fa41d39bc812a0f7346a97",targetId:"id-7bb130ee917b458cba060ee2791e9609",type:"ServingRelationship"},{id:"id-c47b09b04b42416dadba72e1866cd017",sourceId:"id-ca1767dc25fa41d39bc812a0f7346a97",targetId:"id-2e6952b5b43a47279b77c72e5bd81fd2",type:"ServingRelationship"},{id:"id-6b7c34ebeae64100a28dc986d1eee9de",sourceId:"id-ca1767dc25fa41d39bc812a0f7346a97",targetId:"id-112f77c940a24982aa75704995033eff",type:"ServingRelationship"},{id:"id-402a10b50e9944e6989770ba23d10f8a",sourceId:"id-ca1767dc25fa41d39bc812a0f7346a97",targetId:"id-b1f24df5bdb6420cb34edfedb8bd517a",type:"ServingRelationship"},{id:"id-716fb0b680454ed08f482b0848bd6338",sourceId:"id-7bb130ee917b458cba060ee2791e9609",targetId:"id-ea7e2c4f814448989c3c8bd469da4f9c",type:"ServingRelationship"},{id:"id-063e20d757dc46e994ff6050efacc4f9",sourceId:"id-a39f633d56114c65ba2d27e5effdcd26",targetId:"id-0ef53ba9c53e47859e78aefe35cb9dd4",type:"RealizationRelationship"},{id:"id-e4ffd0d675954f058faad8b8848553fb",sourceId:"id-c016114f8f42417c93b664d09a88a823",targetId:"id-ce3f6d2ef1ba4de0a7aa2416f356e697",type:"RealizationRelationship"},{id:"id-e7ea8124f09b4477bb93784d007d4725",sourceId:"id-bf5149b5a43d4fb98fbaf8f41e0f1823",targetId:"id-1ed836202c1d4426a73fcdee931e3ba5",type:"RealizationRelationship"},{id:"id-2f845aaf35a0488193b38e0b9f064504",sourceId:"id-e7d359657bc041638348908e6e907b5c",targetId:"id-de0c0c2bce174a329e5026c0fcc7252c",type:"RealizationRelationship"},{id:"id-dd66e5e147f64010bbc0c052130aa388",sourceId:"id-b836dd78eee9456ca1b6a758a81b8445",targetId:"id-484d8d910398408cb81389228798e026",type:"RealizationRelationship"},{id:"id-60c046679c8f463e801c809ff936f2af",sourceId:"id-aae1e2a799994cf9bafad09c7a7c94e8",targetId:"id-86dcc84aca854de2b783fbc9b6e5e1e9",type:"RealizationRelationship"},{id:"id-3a8289e9277242448454f36e0bf14532",sourceId:"id-a360ef8683bd4885b1610cf913196329",targetId:"id-a486d122a142422a9a23886197dad155",type:"RealizationRelationship"},{id:"id-4b95b4ddc24e4b1c999ac6a169c5ee09",sourceId:"id-504ba2d667964fbbb936addf54b2aaae",targetId:"id-32e659b02c1d469bba51e9014dafb510",type:"RealizationRelationship"},{id:"id-91c01303fe5c4fceb70a97e000b3f29c",sourceId:"id-b603650a9da44997888766b1269a8121",targetId:"id-10ab403192a6413ab55ba05d00abea60",type:"RealizationRelationship"},{id:"id-c07bf4ec2d5044b7818ed010d24df713",sourceId:"id-10149873916544b3a1af184a34db88e3",targetId:"id-76f2f8d1229048c082e402f9b690b0d7",type:"RealizationRelationship"},{id:"id-ec87b90a730343588ca6e9b3d0a67291",sourceId:"id-70ff83e03123452b93c7ee8545cd8919",targetId:"id-45566399130845288b2a566da0983cef",type:"RealizationRelationship"},{id:"id-f39a56e0f87a49bd86db8abd0c241073",sourceId:"id-78a5b198299a4101a51c78f960fd36ad",targetId:"id-ba838e66a9b64aa289c10deae82f7a63",type:"RealizationRelationship"},{id:"id-fe666e4908a543b4bf4338db39eab940",sourceId:"id-1d46ac3d617e4b139330648dff18417f",targetId:"id-3614a3b114bf4f2f8e8821452c414186",type:"RealizationRelationship"},{id:"id-6d84128e67774d5a8eb3c6306a72c3cd",sourceId:"id-eabb7835b56e4859882c76c6590e45ff",targetId:"id-974a863ad92c42a79d43890453613c8a",type:"RealizationRelationship"},{id:"id-1e396e90a106497bbe991f48da3c3211",sourceId:"id-8c89c40da55148dc8d3c84a70f18bd74",targetId:"id-121f5fdc115f4087a23c1c78945f1ed5",type:"RealizationRelationship"},{id:"id-6a34c23197ea48d496473c175ebd93fa",sourceId:"id-bc64c52ae8164c069dffa36db9cff77d",targetId:"id-0d8b169acc064f23946857f6e850c18a",type:"RealizationRelationship"},{id:"id-5066ab30a9c54cc58cd4a2cd9971d5e5",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-a39f633d56114c65ba2d27e5effdcd26",type:"AccessRelationship"},{id:"id-70bdeff842b6408cbdcb8982522626e2",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-a360ef8683bd4885b1610cf913196329",type:"AccessRelationship"},{id:"id-5e7cab78dbb344a1b2c67358361bec22",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-b603650a9da44997888766b1269a8121",type:"AccessRelationship"},{id:"id-87110383daf94592b1e1b7176073aaf8",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-78a5b198299a4101a51c78f960fd36ad",type:"AccessRelationship"},{id:"id-9b9f279b0c494c24a9b6e7366c6baa6a",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-e7d359657bc041638348908e6e907b5c",type:"AccessRelationship"},{id:"id-912dc5497774411ab087385a2562db61",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-b836dd78eee9456ca1b6a758a81b8445",type:"AccessRelationship"},{id:"id-9e8b77b0932849899c13261f3bfb953c",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-1d46ac3d617e4b139330648dff18417f",type:"AccessRelationship"},{id:"id-1170b23d0e4c4613b9ff42adb7de9c13",sourceId:"id-52b3f4babd954cde843e68db91b51032",targetId:"id-8c89c40da55148dc8d3c84a70f18bd74",type:"AccessRelationship"},{id:"id-2dee82d3e0284f85a9ad95eece88852b",sourceId:"id-30de907b2cb94760ac3ce96cec23d315",targetId:"id-52b3f4babd954cde843e68db91b51032",type:"AssignmentRelationship"},{id:"id-8e3bd82c85364355a7a6cd1d17254aac",sourceId:"id-4fd01f9e56a543c3a61d22aacaf9dddd",targetId:"id-30de907b2cb94760ac3ce96cec23d315",type:"AssignmentRelationship"},{id:"id-89cf0cd44c0f47cebec6c8f7ad4bde7c",sourceId:"id-0ef53ba9c53e47859e78aefe35cb9dd4",targetId:"id-fe6d6b9867b8418483b7850627eecdce",type:"AccessRelationship"},{id:"id-4023434aa76a4778b5d4692dfe621b60",sourceId:"id-de0c0c2bce174a329e5026c0fcc7252c",targetId:"id-b9ea6d3a6a4d434ea93abf049f151415",type:"AccessRelationship"},{id:"id-a2abbcd36d8e4c5fa120dd6f4a05dfa1",sourceId:"id-484d8d910398408cb81389228798e026",targetId:"id-a486d122a142422a9a23886197dad155",type:"AssociationRelationship"},{id:"id-53717faab1814953b60a50f58357c53f",sourceId:"id-484d8d910398408cb81389228798e026",targetId:"id-10ab403192a6413ab55ba05d00abea60",type:"AssociationRelationship"},{id:"id-29bc0e39e5d34343a744e3a3dd4f31a4",sourceId:"id-484d8d910398408cb81389228798e026",targetId:"id-ba838e66a9b64aa289c10deae82f7a63",type:"AssociationRelationship"},{id:"id-4d54adfe04304b58b9e72733bd037e6e",sourceId:"id-484d8d910398408cb81389228798e026",targetId:"id-3614a3b114bf4f2f8e8821452c414186",type:"AssociationRelationship"},{id:"id-b60c0fe2728c4f5e98eeaeb7d499a9f8",sourceId:"id-484d8d910398408cb81389228798e026",targetId:"id-121f5fdc115f4087a23c1c78945f1ed5",type:"AssociationRelationship"},{id:"id-0f44065582c94dc88444db81ee7c0947",sourceId:"id-10ab403192a6413ab55ba05d00abea60",targetId:"id-a486d122a142422a9a23886197dad155",type:"AssociationRelationship"},{id:"id-b8071681b2d34c00a52aae27c88a17ec",sourceId:"id-10ab403192a6413ab55ba05d00abea60",targetId:"id-ba838e66a9b64aa289c10deae82f7a63",type:"AssociationRelationship"},{id:"id-f1313d2e5e7f4b9d9d028a8361a736f4",sourceId:"id-10ab403192a6413ab55ba05d00abea60",targetId:"id-3614a3b114bf4f2f8e8821452c414186",type:"AssociationRelationship"},{id:"id-e8028ac53a9f476faee3ef8479fa2af1",sourceId:"id-ba838e66a9b64aa289c10deae82f7a63",targetId:"id-121f5fdc115f4087a23c1c78945f1ed5",type:"AssociationRelationship"},{id:"id-61b6feed34da404193dc2fe0b9479539",sourceId:"id-10ab403192a6413ab55ba05d00abea60",targetId:"id-121f5fdc115f4087a23c1c78945f1ed5",type:"AssociationRelationship"},{id:"id-926e92c7e1ef43598343e2843c4451a9",sourceId:"id-a486d122a142422a9a23886197dad155",targetId:"id-121f5fdc115f4087a23c1c78945f1ed5",type:"AssociationRelationship"},{id:"id-f117b78d01084f5eb78ffac25b6d471c",sourceId:"id-a486d122a142422a9a23886197dad155",targetId:"id-0ef53ba9c53e47859e78aefe35cb9dd4",type:"AssociationRelationship"},{id:"id-170f828550324fe2a0dab8b3cf4cbc73",sourceId:"id-ba838e66a9b64aa289c10deae82f7a63",targetId:"id-de0c0c2bce174a329e5026c0fcc7252c",type:"AssociationRelationship"},{id:"id-0ebcd7ceb97448548c0eefa1491bcf39",sourceId:"id-5b476da6704a4f18ab7d82fe304f4ac8",targetId:"id-112f77c940a24982aa75704995033eff",type:"ServingRelationship"},{id:"id-52874d2731b344689bdcdd5278bfd59e",sourceId:"id-e912ee2c412f41b5a629f2485fefe44b",targetId:"id-112f77c940a24982aa75704995033eff",type:"ServingRelationship"},{id:"id-7cf2c18d8a0d4b1bb125f46f5e97a6ac",sourceId:"id-bc64c52ae8164c069dffa36db9cff77d",targetId:"id-bf7047a7a3854ef49d3b5226dbe6c2bf",type:"RealizationRelationship"},{id:"id-2c555e13562a4e7fa80f608a5704bb82",sourceId:"id-eabb7835b56e4859882c76c6590e45ff",targetId:"id-7e269a2e6ffb403ebbca5c635666e909",type:"RealizationRelationship"},{id:"id-755b65dbce75471b9a6e95f2b9a7477d",sourceId:"id-aae1e2a799994cf9bafad09c7a7c94e8",targetId:"id-d9d388f6c290496b972e562e735b4a29",type:"RealizationRelationship"}],l=[{id:"id-caf6e37d79a24bef97acde425c954e67",name:"application-view",viewpoint:""},{id:"id-b60a9baa106a490dae1ac24538823709",name:"deployment-view",viewpoint:""}],g={identifier:e,archimateId:d,name:a,description:i,formats:c,source:t,sourceFile:b,sourceFormat:f,timestamp:o,tags:n,duplicates:r,language:s,elements:p,relationships:y,views:l};export{d as archimateId,g as default,i as description,r as duplicates,p as elements,c as formats,e as identifier,s as language,a as name,y as relationships,t as source,b as sourceFile,f as sourceFormat,n as tags,o as timestamp,l as views};
