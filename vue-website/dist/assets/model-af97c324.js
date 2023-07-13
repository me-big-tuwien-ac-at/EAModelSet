const e="https://me.big.tuwien.ac.at/EAModelSet/id-001bf72f",i="id-001bf72f",d="export.uploader",a="",t=["XML","CSV","JSON","ARCHIMATE"],o="GitHub",c="raw-data/github/xml/deployment.xml",p="XML",r="29-06-2023 09:28:14",n=[],l=[],y="en",f=[{id:"b50b6938",name:"uploader",type:"ApplicationComponent",layer:"application"},{id:"id-9948bfc3",name:"Mongo",type:"ApplicationComponent",layer:"application"},{id:"a6516cda",name:"mongo port",type:"ApplicationInterface",layer:"application"},{id:"id-999297fe",name:"Uploaded files Storage",type:"ApplicationService",layer:"application"},{id:"a0899c71",name:"Order Repository",type:"ApplicationService",layer:"application"},{id:"d17eb8d8",name:"Order MetaData storage",type:"ApplicationService",layer:"application"},{id:"d338b9a5",name:"FileStorage",type:"ApplicationService",layer:"application"},{id:"fdcbfcbb",name:"Application Function",type:"ApplicationFunction",layer:"application"},{id:"ac9f728b",name:"FileSystem",type:"ApplicationComponent",layer:"application"},{id:"id-4b5a3184",name:"UploadView. Show uploaded",type:"ApplicationFunction",layer:"application"},{id:"id-9546242f",name:"UploadView. Load/Save/Update",type:"ApplicationFunction",layer:"application"},{id:"id-2ec6cb85",name:"UploadView. LoadSaved",type:"ApplicationFunction",layer:"application"},{id:"id-2d753f00",name:"UploadView. Uploaded PDF's Icon consumer",type:"ApplicationFunction",layer:"application"},{id:"id-92494173",name:"REST images aware",type:"ApplicationService",layer:"application"},{id:"id-655ca226",name:"FileSystem",type:"ApplicationComponent",layer:"application"},{id:"id-9a1f4fea",name:"read-files-rest",type:"ApplicationComponent",layer:"application"},{id:"id-6092013f",name:"Saved files Storage",type:"ApplicationService",layer:"application"},{id:"id-4105f712",name:"FileStorage",type:"ApplicationService",layer:"application"},{id:"id-8b5e92e1",name:"FileSystem",type:"ApplicationComponent",layer:"application"},{id:"c6788869",name:"PDF to Icon converter",type:"ApplicationService",layer:"application"},{id:"id-54a43dde",name:"imagemagic / ghost",type:"ApplicationComponent",layer:"application"},{id:"id-2e296f29",name:"FindView. upload",type:"ApplicationFunction",layer:"application"},{id:"f1b48347",name:"Barcode from image recognizer",type:"ApplicationService",layer:"application"},{id:"id-3a262f21",name:"zbarimg",type:"ApplicationComponent",layer:"application"},{id:"id-7c69c460",name:"Storage. Order print",type:"ApplicationFunction",layer:"application"},{id:"d44eac25",name:"one PDF generator",type:"ApplicationService",layer:"application"},{id:"f0ba8878",name:"Ghostscript",type:"ApplicationComponent",layer:"application"},{id:"id-08ea6a16",name:"REST Merged PDF files aware",type:"ApplicationService",layer:"application"},{id:"id-561d1b43",name:"read-files-rest",type:"ApplicationComponent",layer:"application"},{id:"id-28aeef00",name:"FileSystem",type:"ApplicationComponent",layer:"application"},{id:"id-46313df2",name:"FileStorage",type:"ApplicationService",layer:"application"},{id:"dbd7f186",name:"FileStorage",type:"ApplicationService",layer:"application"},{id:"c3beeee1",name:"Print BarCode",type:"ApplicationFunction",layer:"application"},{id:"f2467fcb",name:"Barcode generator",type:"ApplicationService",layer:"application"},{id:"id-089f9b2e",name:"barcode",type:"ApplicationComponent",layer:"application"},{id:"f91fdd5a",name:"user finder",type:"ApplicationFunction",layer:"application"},{id:"id-4786032b",name:"read from datastorage",type:"ApplicationService",layer:"application"},{id:"id-062843fe",name:"User Storage",type:"ApplicationService",layer:"application"},{id:"id-21291fef",name:"H2 filedatabase",type:"ApplicationComponent",layer:"application"},{id:"id-2e14cfd5",name:"bpmn-ui",type:"ApplicationComponent",layer:"application"},{id:"f913625e",name:"usermanager",type:"ApplicationComponent",layer:"application"},{id:"id-0864df40",name:"mongoDB",type:"ApplicationComponent",layer:"application"},{id:"f603b874",name:"MariaDB",type:"ApplicationComponent",layer:"application"},{id:"a9d7fcc9",name:"user data",type:"DataObject",layer:"application"},{id:"id-79265359",name:"http",type:"ApplicationInterface",layer:"application"},{id:"id-185dfdeb",name:"shell",type:"ApplicationInterface",layer:"application"},{id:"id-3f114695",name:"Docker container",type:"Node",layer:"technology"},{id:"id-7d679f3b",name:"application.properties",type:"Artifact",layer:"technology"},{id:"id-6bdfc12c",name:"FileSystem",type:"TechnologyService",layer:"technology"},{id:"id-7daff944",name:"Icon",type:"Artifact",layer:"technology"},{id:"id-959e2ce6",name:"Original Upload files",type:"Artifact",layer:"technology"},{id:"id-52ba25af",name:"Upload files. Temporary",type:"Artifact",layer:"technology"},{id:"id-5279de34",name:"merged PDF",type:"Artifact",layer:"technology"},{id:"ce71f657",name:"usermanager DB file",type:"Artifact",layer:"technology"},{id:"id-03c394f9",name:"Mongo FileStorage",type:"Artifact",layer:"technology"},{id:"id-37b77eb7",name:"hdocker container",type:"Node",layer:"technology"},{id:"id-2eb44014",name:"Document storage permanent",type:"Artifact",layer:"technology"},{id:"c95e239e",name:"Document storage temporary",type:"Artifact",layer:"technology"},{id:"id-4947abc9",name:"Document storage icons",type:"Artifact",layer:"technology"},{id:"id-098cddae",name:"application.properties",type:"Artifact",layer:"technology"},{id:"id-2bc097b8",name:"docker container",type:"Node",layer:"technology"},{id:"id-54afd24b",name:"MariaDB filestorage",type:"Artifact",layer:"technology"}],g=[{id:"id-4f19ebd3",sourceId:"id-9948bfc3",targetId:"a6516cda",type:"Association"},{id:"id-255b15e6",sourceId:"b50b6938",targetId:"id-999297fe",type:"Assignment"},{id:"c982caf9",sourceId:"b50b6938",targetId:"a0899c71",type:"Assignment"},{id:"id-0e3461b3",sourceId:"a0899c71",targetId:"d17eb8d8",type:"Triggering"},{id:"id-52f6139f",sourceId:"id-9948bfc3",targetId:"d17eb8d8",type:"Realization"},{id:"id-3900dfc3",sourceId:"id-7d679f3b",targetId:"b50b6938",type:"Serving"},{id:"id-4c6c8e60",sourceId:"id-999297fe",targetId:"d338b9a5",type:"Triggering"},{id:"ea5d1683",sourceId:"d338b9a5",targetId:"fdcbfcbb",type:"Realization"},{id:"c2fa0012",sourceId:"ac9f728b",targetId:"d338b9a5",type:"Realization"},{id:"id-108748ec",sourceId:"id-999297fe",targetId:"id-4b5a3184",type:"Serving"},{id:"id-69558de1",sourceId:"id-4b5a3184",targetId:"b50b6938",type:"Serving"},{id:"b34f38e1",sourceId:"id-4b5a3184",targetId:"id-2d753f00",type:"Aggregation"},{id:"id-09d9adb8",sourceId:"id-92494173",targetId:"id-2d753f00",type:"Serving"},{id:"id-9ab41d75",sourceId:"id-9a1f4fea",targetId:"id-92494173",type:"Realization"},{id:"id-0dc3dfd7",sourceId:"id-655ca226",targetId:"id-9a1f4fea",type:"Serving"},{id:"id-9b793f98",sourceId:"id-6092013f",targetId:"id-9546242f",type:"Serving"},{id:"id-442dc1a3",sourceId:"id-9546242f",targetId:"b50b6938",type:"Serving"},{id:"id-9a9f06f4",sourceId:"id-6092013f",targetId:"id-4105f712",type:"Triggering"},{id:"id-9d8daf7a",sourceId:"id-8b5e92e1",targetId:"id-4105f712",type:"Realization"},{id:"id-43241e37",sourceId:"a0899c71",targetId:"id-9546242f",type:"Serving"},{id:"b5bcac12",sourceId:"id-999297fe",targetId:"id-9546242f",type:"Serving"},{id:"d3db9729",sourceId:"id-999297fe",targetId:"c6788869",type:"Aggregation"},{id:"aa1e49c9",sourceId:"id-54a43dde",targetId:"c6788869",type:"Realization"},{id:"e5461ce3",sourceId:"id-54a43dde",targetId:"id-7daff944",type:"Association"},{id:"id-0f11d866",sourceId:"id-54a43dde",targetId:"id-655ca226",type:"Triggering"},{id:"id-680a445a",sourceId:"id-655ca226",targetId:"id-7daff944",type:"Association"},{id:"e017840f",sourceId:"id-8b5e92e1",targetId:"id-959e2ce6",type:"Association"},{id:"id-1602d20e",sourceId:"ac9f728b",targetId:"id-52ba25af",type:"Association"},{id:"id-34595bd8",sourceId:"f1b48347",targetId:"id-2e296f29",type:"Serving"},{id:"id-5041a09f",sourceId:"id-3a262f21",targetId:"f1b48347",type:"Realization"},{id:"a00285aa",sourceId:"d44eac25",targetId:"id-7c69c460",type:"Serving"},{id:"d23f5ba4",sourceId:"f0ba8878",targetId:"d44eac25",type:"Realization"},{id:"id-83449d87",sourceId:"id-08ea6a16",targetId:"id-7c69c460",type:"Serving"},{id:"id-6b06f91e",sourceId:"id-561d1b43",targetId:"id-08ea6a16",type:"Realization"},{id:"e648526b",sourceId:"id-28aeef00",targetId:"id-561d1b43",type:"Serving"},{id:"fef725b9",sourceId:"f0ba8878",targetId:"id-5279de34",type:"Association"},{id:"e4e63181",sourceId:"id-5279de34",targetId:"id-28aeef00",type:"Association"},{id:"id-5701216f",sourceId:"f0ba8878",targetId:"id-28aeef00",type:"Triggering"},{id:"ec99a571",sourceId:"id-655ca226",targetId:"id-92494173",type:"Serving"},{id:"ff3485fe",sourceId:"id-28aeef00",targetId:"id-08ea6a16",type:"Serving"},{id:"de9ed631",sourceId:"id-655ca226",targetId:"id-46313df2",type:"Serving"},{id:"id-05865258",sourceId:"id-46313df2",targetId:"id-4b5a3184",type:"Serving"},{id:"id-53ca917b",sourceId:"id-28aeef00",targetId:"dbd7f186",type:"Serving"},{id:"id-0f08b904",sourceId:"dbd7f186",targetId:"id-7c69c460",type:"Serving"},{id:"eb44de74",sourceId:"f2467fcb",targetId:"c3beeee1",type:"Serving"},{id:"id-24ad1b66",sourceId:"id-089f9b2e",targetId:"f2467fcb",type:"Realization"},{id:"id-2134460d",sourceId:"id-4786032b",targetId:"f91fdd5a",type:"Serving"},{id:"fcd0fcf8",sourceId:"id-4786032b",targetId:"id-062843fe",type:"Triggering"},{id:"id-2c545447",sourceId:"id-21291fef",targetId:"id-062843fe",type:"Realization"},{id:"e40fac47",sourceId:"ce71f657",targetId:"id-2e14cfd5",type:"Serving"},{id:"id-7fbcceeb",sourceId:"ce71f657",targetId:"f913625e",type:"Serving"},{id:"id-2b8fd4f0",sourceId:"id-2e14cfd5",targetId:"id-0864df40",type:"Triggering"},{id:"c930a389",sourceId:"id-03c394f9",targetId:"id-0864df40",type:"Serving"},{id:"e7df0b5f",sourceId:"c95e239e",targetId:"id-2e14cfd5",type:"Serving"},{id:"a8325573",sourceId:"id-4947abc9",targetId:"id-2e14cfd5",type:"Serving"},{id:"id-23efd14e",sourceId:"id-2eb44014",targetId:"id-2e14cfd5",type:"Serving"},{id:"id-14c34ac8",sourceId:"id-098cddae",targetId:"id-2e14cfd5",type:"Serving"},{id:"f30be1b5",sourceId:"id-2e14cfd5",targetId:"f603b874",type:"Triggering"},{id:"e0667660",sourceId:"id-54afd24b",targetId:"f603b874",type:"Serving"},{id:"eea31a82",sourceId:"id-2e14cfd5",targetId:"a9d7fcc9",type:"Access"},{id:"d1317078",sourceId:"f913625e",targetId:"a9d7fcc9",type:"Access"},{id:"b4c6cd0e",sourceId:"a9d7fcc9",targetId:"f603b874",type:"Association"},{id:"id-325bba52",sourceId:"id-2e14cfd5",targetId:"id-79265359",type:"Aggregation"},{id:"id-149a4f2c",sourceId:"id-2e14cfd5",targetId:"id-79265359",type:"Composition"},{id:"id-30496928",sourceId:"id-2e14cfd5",targetId:"id-185dfdeb",type:"Composition"}],s=[{id:"c4879842",name:"uploader",viewpoint:""},{id:"id-07f3fd83",name:"uploader-local",viewpoint:""},{id:"id-7581af55",name:"deployment",viewpoint:""}],I={identifier:e,archimateId:i,name:d,description:a,formats:t,source:o,sourceFile:c,sourceFormat:p,timestamp:r,tags:n,duplicates:l,language:y,elements:f,relationships:g,views:s};export{i as archimateId,I as default,a as description,l as duplicates,f as elements,t as formats,e as identifier,y as language,d as name,g as relationships,o as source,c as sourceFile,p as sourceFormat,n as tags,r as timestamp,s as views};