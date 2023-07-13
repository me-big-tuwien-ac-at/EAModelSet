const e="https://me.big.tuwien.ac.at/EAModelSet/7abb42b7",a="7abb42b7",t="HealthDB",i="",c=["XML","CSV","JSON","ARCHIMATE"],d="GitHub",o="raw-data/github/archimate/healthdb.archimate",n="ARCHIMATE",r="29-06-2023 09:30:58",p=[],s=[],b="pt",l=[{id:"f9ba95bc",name:"Atenção à saúde",type:"BusinessService",layer:"business"},{id:"b7cefc03",name:"Atender paciente",type:"BusinessProcess",layer:"business"},{id:"eba4a5b7",name:"Consultar informação do paciente",type:"ApplicationService",layer:"application"},{id:"5337c92b",name:"Registrar informação do paciente",type:"ApplicationService",layer:"application"},{id:"7d742c04",name:"Sistema de Informação em Saúde (SIS)",type:"ApplicationComponent",layer:"application"},{id:"555548ee",name:"SGBD   HealthDB",type:"ApplicationComponent",layer:"application"},{id:"a9a6dbbd-aa4d-4c8f-a36e-badba7ccbb26",name:"Domínio",type:"ApplicationComponent",layer:"application"},{id:"5a0e489e-76de-49f0-871d-70f126eda930",name:"Interface gráfica",type:"ApplicationComponent",layer:"application"},{id:"f1933a2e-7488-4601-9d91-94a515c736d7",name:"Acesso à Informação em Saúde",type:"ApplicationService",layer:"application"},{id:"e97c9843",name:"Reduzir esforço de produção de SIS interoperável",type:"Goal",layer:"motivation"},{id:"29e3398e",name:"Programa HealthDB (P&D)",type:"WorkPackage",layer:"implementation_migration"},{id:"fec394d2-e96b-4703-a9c0-e6702692cd23",name:"Produto HealthDB",type:"Deliverable",layer:"implementation_migration"},{id:"61a0e48c-4b05-446d-8a28-1dffa856bea9",name:"Software HealthDB",type:"Deliverable",layer:"implementation_migration"},{id:"117d71a8-4896-43e9-8ffc-795e55f37ed9",name:"Documentação, instalador e outros.",type:"Deliverable",layer:"implementation_migration"}],f=[{id:"18157099",sourceId:"b7cefc03",targetId:"f9ba95bc",type:"RealizationRelationship"},{id:"4535d9a4",sourceId:"eba4a5b7",targetId:"b7cefc03",type:"ServingRelationship"},{id:"1fcbd0a8",sourceId:"5337c92b",targetId:"b7cefc03",type:"ServingRelationship"},{id:"bd35940a",sourceId:"7d742c04",targetId:"eba4a5b7",type:"RealizationRelationship"},{id:"f9f1937b",sourceId:"7d742c04",targetId:"5337c92b",type:"RealizationRelationship"},{id:"125310e0",sourceId:"555548ee",targetId:"e97c9843",type:"RealizationRelationship"},{id:"575eb1b9",sourceId:"555548ee",targetId:"7d742c04",type:"ServingRelationship"},{id:"c6cbc32a-34c0-4c06-9f99-b3bcbb1a24d8",sourceId:"555548ee",targetId:"a9a6dbbd-aa4d-4c8f-a36e-badba7ccbb26",type:"ServingRelationship"},{id:"48582bb5-a97c-4964-b7a9-34f9f87dda3e",sourceId:"a9a6dbbd-aa4d-4c8f-a36e-badba7ccbb26",targetId:"5a0e489e-76de-49f0-871d-70f126eda930",type:"ServingRelationship"},{id:"43b2ec11-6ac5-4c77-9f96-d37c5d222ad0",sourceId:"7d742c04",targetId:"f1933a2e-7488-4601-9d91-94a515c736d7",type:"AssociationRelationship"},{id:"00d6a7f0-45a3-4b78-98f3-85172af58fb5",sourceId:"7d742c04",targetId:"f1933a2e-7488-4601-9d91-94a515c736d7",type:"FlowRelationship"},{id:"55652c7d-ce0f-4b88-acae-f1030b88a513",sourceId:"f1933a2e-7488-4601-9d91-94a515c736d7",targetId:"7d742c04",type:"FlowRelationship"},{id:"6601636a-8b95-4e82-943e-99b7f1755c19",sourceId:"fec394d2-e96b-4703-a9c0-e6702692cd23",targetId:"555548ee",type:"RealizationRelationship"},{id:"04b513ac-ca54-4836-be9f-9825f839e8af",sourceId:"fec394d2-e96b-4703-a9c0-e6702692cd23",targetId:"61a0e48c-4b05-446d-8a28-1dffa856bea9",type:"CompositionRelationship"},{id:"cae31563-05cb-4c26-8c39-1d91008a1ec1",sourceId:"fec394d2-e96b-4703-a9c0-e6702692cd23",targetId:"117d71a8-4896-43e9-8ffc-795e55f37ed9",type:"CompositionRelationship"},{id:"72dbf578-e560-4a3a-a53e-8571caebacb2",sourceId:"29e3398e",targetId:"fec394d2-e96b-4703-a9c0-e6702692cd23",type:"RealizationRelationship"}],m=[{id:"ccd2252a",name:"01 - CONTEXTO SIS",viewpoint:""},{id:"0696e662-6a2c-4144-a69c-5573887f5525",name:"02 - CONTEXTO HEALTHDB",viewpoint:""}],y={identifier:e,archimateId:a,name:t,description:i,formats:c,source:d,sourceFile:o,sourceFormat:n,timestamp:r,tags:p,duplicates:s,language:b,elements:l,relationships:f,views:m};export{a as archimateId,y as default,i as description,s as duplicates,l as elements,c as formats,e as identifier,b as language,t as name,f as relationships,d as source,o as sourceFile,n as sourceFormat,p as tags,r as timestamp,m as views};
