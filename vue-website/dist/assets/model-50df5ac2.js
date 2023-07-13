const e="https://me.big.tuwien.ac.at/EAModelSet/id-7037984b",i="id-7037984b",d="Archi StyledHtml module",a=`<ul><li>You have designed something, you have the Archimate model on it. But you have to create a documentation in the form requested by your client.</li>
<li>You are designing something complex. You want to make sure that you have thought about all aspects and interdependencies.</li>
<li>You work with junior architects or developers. You are tired of checking their models for trivial errors and omissions.</li>
<li>You are doing detailed design, and it is boring to do the trivial task of converting the model to config file by hand.</li>
</ul>
If any of the above happens, this module and the underlying concepts are developed for you.

This module makes possible to <ul>
<li> define and document enterprise architecture policies</li>
<li>check architecture models against those policies</li>
<li>define documentation styles for various stakeholders, and generate those documentations from the model</li>
<li>generate configuration and code directly from the model</li>
</ul>

This model tries to fulfill multiple purposes:
- Show how Archimate can be used in the goovernance of IT
- Document the styledhtml Archi module
- Serve as an example for both of the above
- The webpage of the styledhtml module is generated from it. See http://archistyledhtml.sourceforge.net/

You can find user documentation in the Use Cases section.`,t=["XML","JSON"],o="GitHub",c="raw-data/github/xml/archi_styledhtml_module.xml",r="XML",n="29-06-2023 09:26:32",p=["DUPLICATE"],s=["raw-data/github/xml/example_extension_by_specialisation.xml"],y="en",l=[{id:"id-62870b91",name:"Archi community",type:"BusinessCollaboration",layer:"business"},{id:"fbe5dc11",name:"Archi users",type:"BusinessCollaboration",layer:"business"},{id:"id-0ec67e85",name:"Archi developers",type:"BusinessCollaboration",layer:"business"},{id:"id-16abaafb",name:"Phil Beauvoir",type:"BusinessActor",layer:"business"},{id:"id-91d6a6a9",name:"Árpád Magosányi",type:"BusinessActor",layer:"business"},{id:"id-813739e2",name:"Download Archi",type:"BusinessProcess",layer:"business"},{id:"id-91fbfb11",name:"Archi download site",type:"BusinessInterface",layer:"business"},{id:"id-4a0fac0e",name:"Download the StyledHtml package",type:"BusinessProcess",layer:"business"},{id:"id-91d0932d",name:"StyledHtml download site",type:"BusinessInterface",layer:"business"},{id:"e9d01fe3",name:"Install Archi",type:"BusinessProcess",layer:"business"},{id:"c7e00f6d",name:"install the StyledHtml package",type:"BusinessProcess",layer:"business"},{id:"id-885b265c",name:"start Archi",type:"BusinessProcess",layer:"business"},{id:"f541b667",name:"Check the module",type:"BusinessProcess",layer:"business"},{id:"id-135eefa1",name:"installation",type:"BusinessProcess",layer:"business"},{id:"d9379bc5",name:"Checkout the provided styles",type:"BusinessProcess",layer:"business"},{id:"d1e86fa1",name:"Configure the style used",type:"BusinessProcess",layer:"business"},{id:"id-28574436",name:"Configure output directory",type:"BusinessProcess",layer:"business"},{id:"a1a62c11",name:"Create your own style",type:"BusinessProcess",layer:"business"},{id:"dbeb1455",name:"Configuration",type:"BusinessProcess",layer:"business"},{id:"id-9f9acbbf",name:"Create a report",type:"BusinessProcess",layer:"business"},{id:"id-87d27326",name:"Edit your model",type:"BusinessProcess",layer:"business"},{id:"b764bde9",name:"Preview output",type:"BusinessProcess",layer:"business"},{id:"a2276966",name:"Preview the export log",type:"BusinessProcess",layer:"business"},{id:"e4b300fb",name:"Problem occured",type:"BusinessEvent",layer:"business"},{id:"id-88c3be26",name:"Look at the problem report dialog",type:"BusinessProcess",layer:"business"},{id:"id-92473e34",name:"Look at the application log",type:"BusinessProcess",layer:"business"},{id:"d0800141",name:"application log file",type:"BusinessObject",layer:"business"},{id:"c4f191cb",name:"look at stdout/stderr",type:"BusinessProcess",layer:"business"},{id:"id-37ae8baf",name:"Analyse problem",type:"BusinessProcess",layer:"business"},{id:"id-89e82cde",name:"Problem identified",type:"BusinessEvent",layer:"business"},{id:"b50d0d06",name:"No clue",type:"BusinessEvent",layer:"business"},{id:"id-62e86c50",name:"Remediate problem",type:"BusinessProcess",layer:"business"},{id:"id-7dac06bd",name:"report problem",type:"BusinessProcess",layer:"business"},{id:"b424ea38",name:"Being happy",type:"BusinessProcess",layer:"business"},{id:"id-7b1cec77",name:"sketchtotable",type:"Gap",layer:"implementation_migration"},{id:"dd43710e",name:"define the objectClass by direct property",type:"BusinessProcess",layer:"business"},{id:"c104622c",name:"define the objectClass by indirect property",type:"BusinessProcess",layer:"business"},{id:"id-98087399",name:"define the objectClass with a Group or Folder",type:"BusinessProcess",layer:"business"},{id:"c71b91e1",name:"define the objectClass by specialisation",type:"BusinessProcess",layer:"business"},{id:"id-5834034d",name:"objectClass",type:"DataObject",layer:"application"},{id:"id-72b37366",name:"parent",type:"DataObject",layer:"application"},{id:"id-81c4876a",name:"there is a specialisation relationship from the ancestor to the objectClass",type:"DataObject",layer:"application"},{id:"c496f50f",name:"abstract",type:"DataObject",layer:"application"},{id:"id-80c1003b",name:"attrib",type:"DataObject",layer:"application"},{id:"d07f34b8",name:"A composition relationship points from here to the attribute",type:"DataObject",layer:"application"},{id:"id-6ab69c29",name:"attribute",type:"DataObject",layer:"application"},{id:"id-8d960b3e",name:"type",type:"DataObject",layer:"application"},{id:"id-3b4e5bbc",name:"minOccurs",type:"DataObject",layer:"application"},{id:"id-974790c3",name:"maxOccurs",type:"DataObject",layer:"application"},{id:"id-378950dd",name:"structural",type:"DataObject",layer:"application"},{id:"id-972588ae",name:"def",type:"DataObject",layer:"application"},{id:"id-1c076398",name:"A composition relation points to the default from the attribute",type:"DataObject",layer:"application"},{id:"id-7aba69d1",name:"default",type:"DataObject",layer:"application"},{id:"id-0dff4259",name:"description",type:"DataObject",layer:"application"},{id:"id-36fbd768",name:"name of the parent node + the documentation of the parent node",type:"DataObject",layer:"application"},{id:"id-77f11989",name:"order",type:"DataObject",layer:"application"},{id:"cdc8f974",name:"select",type:"DataObject",layer:"application"},{id:"id-547c517e",name:"multi",type:"DataObject",layer:"application"},{id:"id-34b7b9da",name:"always",type:"DataObject",layer:"application"},{id:"id-07ee5607",name:"ArchimateObjectClass",type:"DataObject",layer:"application"},{id:"d2886808",name:"abstractNamed",type:"DataObject",layer:"application"},{id:"a99529e2",name:"description",type:"DataObject",layer:"application"},{id:"id-139f9bab",name:"documentation of the parent node",type:"DataObject",layer:"application"},{id:"id-9bdf194e",name:"name",type:"DataObject",layer:"application"},{id:"id-47ca6523",name:"name of the parent node",type:"DataObject",layer:"application"},{id:"id-4666bdc0",name:"admContact",type:"DataObject",layer:"application"},{id:"b6b62bd4",name:"Application",type:"DataObject",layer:"application"},{id:"id-0a4a1c24",name:"ApplicationCollection",type:"DataObject",layer:"application"},{id:"id-4f571b31",name:"The place where the physical hardware of the server is located",type:"DataObject",layer:"application"},{id:"id-6ea847ae",name:"ipAddress",type:"DataObject",layer:"application"},{id:"id-31b06206",name:"lifeCycleStatus",type:"DataObject",layer:"application"},{id:"id-871fc2f2",name:"location",type:"DataObject",layer:"application"},{id:"id-5f4cdc11",name:"networkZone",type:"DataObject",layer:"application"},{id:"d63b56c2",name:"operatingSystem",type:"DataObject",layer:"application"},{id:"bfd0d4dc",name:"physicalHardware",type:"DataObject",layer:"application"},{id:"fe5c65b7",name:"Server",type:"DataObject",layer:"application"},{id:"id-05aed334",name:"serverRole",type:"DataObject",layer:"application"},{id:"df2abf25",name:"technicalContact",type:"DataObject",layer:"application"},{id:"e07cded6",name:"This is the physical hardware the server is running on",type:"DataObject",layer:"application"},{id:"id-803d1beb",name:"The network zone the server runs on",type:"DataObject",layer:"application"},{id:"id-64e3b89e",name:"This is the operating system of the server",type:"DataObject",layer:"application"},{id:"id-03787811",name:"This is the role of the server in the big picture",type:"DataObject",layer:"application"},{id:"id-1d75ebdd",name:"The life cycle phase",type:"DataObject",layer:"application"},{id:"id-524c00b1",name:"The technically responsible person",type:"DataObject",layer:"application"},{id:"id-72ecce09",name:"The administratively responsible person",type:"DataObject",layer:"application"},{id:"id-7a35712e",name:"Mainframe",type:"ApplicationFunction",layer:"application"},{id:"a716e9b8",name:"name",type:"DataObject",layer:"application"},{id:"id-4979990b",name:"Name of the object",type:"DataObject",layer:"application"},{id:"id-05ec65d6",name:"shortName",type:"DataObject",layer:"application"},{id:"c012a502",name:"server",type:"DataObject",layer:"application"},{id:"id-94ef9402",name:"The server which realizes the application",type:"DataObject",layer:"application"},{id:"e128b98a",name:"Salary app",type:"ApplicationComponent",layer:"application"},{id:"id-221f9269",name:"salary1.infirmary",type:"Node",layer:"technology"},{id:"id-88d277df",name:"c64.infirmary",type:"Node",layer:"technology"},{id:"d12e9581",name:"infirmary network",type:"CommunicationNetwork",layer:"technology"},{id:"id-6dc8eb9a",name:"uClinux",type:"SystemSoftware",layer:"technology"},{id:"id-3c2976b7",name:"File server",type:"ApplicationFunction",layer:"application"},{id:"id-32820434",name:"hurd",type:"SystemSoftware",layer:"technology"},{id:"id-561685a8",name:"Financial apps",type:"ApplicationComponent",layer:"application"},{id:"id-1b8ab55e",name:"Tax avoidance flash applet",type:"ApplicationComponent",layer:"application"},{id:"id-070226e2",name:"in preparation",type:"Plateau",layer:"implementation_migration"},{id:"bce828e2",name:"in production",type:"Plateau",layer:"implementation_migration"},{id:"d99d40ed",name:"in test",type:"Plateau",layer:"implementation_migration"},{id:"fde629f6",name:"liquidated",type:"Plateau",layer:"implementation_migration"},{id:"id-5e780ae3",name:"under liquidation",type:"Plateau",layer:"implementation_migration"},{id:"c1164ece",name:"Application",type:"ApplicationComponent",layer:"application"},{id:"ee68b27d",name:"Server",type:"Node",layer:"technology"},{id:"id-25df4f32",name:"NetworkZone",type:"CommunicationNetwork",layer:"technology"},{id:"id-588de21e",name:"OperatingSystem",type:"SystemSoftware",layer:"technology"},{id:"id-7378d9ce",name:"LifeCycleStatus",type:"Plateau",layer:"implementation_migration"},{id:"id-200ad530",name:"ServerRole",type:"ApplicationFunction",layer:"application"},{id:"f1911570",name:"OrganisationalPerson",type:"BusinessActor",layer:"business"},{id:"df11e1b5",name:"ApplicationCollection",type:"ApplicationComponent",layer:"application"},{id:"cc2694e8",name:"Legate Nesall",type:"BusinessActor",layer:"business"},{id:"id-19fcbcca",name:"IT Architecture dept.",type:"BusinessCollaboration",layer:"business"},{id:"id-151d0d88",name:"Odo",type:"BusinessActor",layer:"business"},{id:"id-460239bb",name:"IT Security dept.",type:"BusinessCollaboration",layer:"business"},{id:"id-8484165f",name:"Quark",type:"BusinessActor",layer:"business"},{id:"bc8e44f0",name:"Quark's",type:"BusinessCollaboration",layer:"business"},{id:"c3347f07",name:"DS9",type:"BusinessCollaboration",layer:"business"},{id:"b2ad7581",name:"3. Business Specification Acceptance",type:"BusinessEvent",layer:"business"},{id:"f1864e14",name:"2. Business Specification Overview",type:"BusinessEvent",layer:"business"},{id:"f9623e86",name:"1. Creating business specification",type:"BusinessProcess",layer:"business"},{id:"c400f4ad",name:"0.1",type:"Product",layer:"business"},{id:"baf3b224",name:"0.2",type:"Product",layer:"business"},{id:"id-81cb1dd3",name:"1.0.7",type:"Product",layer:"business"},{id:"d3da8982",name:"2.2.0",type:"Plateau",layer:"implementation_migration"},{id:"id-61091710",name:"archimate:BusinessCollaboration",type:"DataObject",layer:"application"},{id:"id-2a8bae66",name:"archimate:Folder",type:"DataObject",layer:"application"},{id:"id-38feb060",name:"archimate:DataObject",type:"DataObject",layer:"application"},{id:"id-87ea8b49",name:"archimate:BusinessActor",type:"DataObject",layer:"application"},{id:"id-14a5901d",name:"archimate:Product",type:"DataObject",layer:"application"},{id:"id-26cbd61e",name:"archimate:BusinessEvent",type:"DataObject",layer:"application"},{id:"id-093d55e2",name:"archimate:BusinessProcess",type:"DataObject",layer:"application"},{id:"id-3ecd2e2a",name:"archimate:Plateau",type:"DataObject",layer:"application"},{id:"b42ede3c",name:"archimate:model",type:"DataObject",layer:"application"},{id:"fd882843",name:"archimate:Node",type:"DataObject",layer:"application"},{id:"ac66eeae",name:"archimate:ApplicationComponent",type:"DataObject",layer:"application"},{id:"c73e22bc",name:"report",type:"DataObject",layer:"application"},{id:"id-5850f515",name:"part",type:"DataObject",layer:"application"},{id:"e2ac9f22",name:"DocumentVersion",type:"DataObject",layer:"application"},{id:"id-6f01bf3a",name:"releasedate",type:"DataObject",layer:"application"},{id:"ed7baa8b",name:"versionnumber",type:"DataObject",layer:"application"},{id:"id-50b2059e",name:"name of the parent node",type:"DataObject",layer:"application"},{id:"id-4ef928e8",name:"authorid",type:"DataObject",layer:"application"},{id:"f6a7fd9f",name:"A Realisation relation should point from the author to the document version",type:"DataObject",layer:"application"},{id:"dfaa4387",name:"GovernanceStep",type:"DataObject",layer:"application"},{id:"e314799d",name:"state",type:"DataObject",layer:"application"},{id:"id-94d50d97",name:"the default state is 'not started'",type:"DataObject",layer:"application"},{id:"id-3352c46b",name:"actor",type:"DataObject",layer:"application"},{id:"id-4b847644",name:"A used by relationship points from the author to the process step",type:"DataObject",layer:"application"},{id:"id-229a7d9f",name:"OrganisationalUnit",type:"DataObject",layer:"application"},{id:"e7aa271c",name:"OrganisationalPerson",type:"DataObject",layer:"application"},{id:"id-694b17c2",name:"position",type:"DataObject",layer:"application"},{id:"id-2d7a05b4",name:"organisation",type:"DataObject",layer:"application"},{id:"id-8c50cc08",name:'More organisational units contains (Composition) the person, and one of the relations have a property with "primary" property.',type:"DataObject",layer:"application"},{id:"id-4983c1c8",name:"Exactly one organisational unit contains (Composition) the person.",type:"DataObject",layer:"application"},{id:"id-523d0f25",name:"memberOf",type:"DataObject",layer:"application"},{id:"id-590f7495",name:"Organisational units containing (Composition) the person.",type:"DataObject",layer:"application"},{id:"id-4173c76a",name:"Archi",type:"ApplicationComponent",layer:"application"},{id:"d7177a48",name:"Styledhtml module",type:"ApplicationComponent",layer:"application"},{id:"bd2e073d",name:"Enterprise repository",type:"ApplicationComponent",layer:"application"},{id:"id-1be308a1",name:"browser module",type:"ApplicationComponent",layer:"application"},{id:"id-609f7882",name:"StyledHtml distribution",type:"ApplicationComponent",layer:"application"},{id:"id-17ba5f53",name:"default style",type:"ApplicationComponent",layer:"application"},{id:"ceee856a",name:"structured style",type:"ApplicationComponent",layer:"application"},{id:"a1656467",name:"sketchtotable style",type:"ApplicationComponent",layer:"application"},{id:"d3bfc49d",name:"Shipped styles",type:"ApplicationComponent",layer:"application"},{id:"e60c5446",name:"documentcontrol style",type:"ApplicationComponent",layer:"application"},{id:"b882dd33",name:"styled html export",type:"ApplicationInterface",layer:"application"},{id:"aee68911",name:"rich format export",type:"ApplicationInterface",layer:"application"},{id:"id-549b978f",name:"Styled preference page",type:"ApplicationInterface",layer:"application"},{id:"id-64c094c8",name:"Enricher",type:"ApplicationComponent",layer:"application"},{id:"id-83915b05",name:"IPreferenceConstants",type:"ApplicationInterface",layer:"application"},{id:"ac4cbac6",name:"NSResolver",type:"ApplicationComponent",layer:"application"},{id:"c5bb1d0f",name:"RichExport",type:"ApplicationComponent",layer:"application"},{id:"afebcbc3",name:"StyledHtml",type:"ApplicationComponent",layer:"application"},{id:"id-589cf609",name:"StyledHtmlPlugin",type:"ApplicationComponent",layer:"application"},{id:"id-0787a1e1",name:"StyledPreferencePage",type:"ApplicationComponent",layer:"application"},{id:"id-6a651a1c",name:"VarResolver",type:"ApplicationComponent",layer:"application"},{id:"id-4e5276d5",name:"Widgets",type:"ApplicationComponent",layer:"application"},{id:"e18c6fa0",name:"Properties tab",type:"ApplicationInterface",layer:"application"},{id:"d21f3e47",name:"file dialog",type:"ApplicationInterface",layer:"application"},{id:"id-9b4d2892",name:"problem report",type:"ApplicationInterface",layer:"application"},{id:"id-61cdef08",name:"browser window",type:"ApplicationInterface",layer:"application"},{id:"id-48a2a5b4",name:"Styled Export menu entry",type:"ApplicationInterface",layer:"application"},{id:"a458af17",name:"Rich export menu entry",type:"ApplicationInterface",layer:"application"},{id:"id-54c46059",name:"Stylesheet location",type:"ApplicationInterface",layer:"application"},{id:"id-9d9e8720",name:"Output dir",type:"ApplicationInterface",layer:"application"},{id:"id-4b027005",name:"Template install",type:"ApplicationInterface",layer:"application"},{id:"id-33f4221f",name:"xmlitem",type:"DataObject",layer:"application"},{id:"id-46a217b3",name:"parent",type:"DataObject",layer:"application"},{id:"id-22516748",name:"type",type:"DataObject",layer:"application"},{id:"f95d7b28",name:"name",type:"DataObject",layer:"application"},{id:"id-6e87982f",name:"value",type:"DataObject",layer:"application"},{id:"id-359391c5",name:"label",type:"DataObject",layer:"application"},{id:"afaaeacc",name:"report:part",type:"Meaning",layer:"motivation"},{id:"id-2299ccbc",name:"report:role",type:"Meaning",layer:"motivation"},{id:"b6f6c99f",name:"from-folder",type:"Meaning",layer:"motivation"},{id:"d8cc38f9",name:"copy-image",type:"Meaning",layer:"motivation"},{id:"id-6b785ba9",name:"part",type:"Meaning",layer:"motivation"},{id:"a7fb8276",name:"noroot",type:"Meaning",layer:"motivation"},{id:"id-9eb5059d",name:"role",type:"Meaning",layer:"motivation"},{id:"b5b72aa9",name:"IPAddress",type:"Value",layer:"motivation"},{id:"id-97a51643",name:"Silly question",type:"Gap",layer:"implementation_migration"},{id:"f10d54c7",name:"Move around",type:"Gap",layer:"implementation_migration"},{id:"id-05cb6a4f",name:"Enterprise repository",type:"Gap",layer:"implementation_migration"},{id:"id-80816c1d",name:"Persistence layer",type:"Gap",layer:"implementation_migration"},{id:"f780d28c",name:"Junction",type:"AndJunction",layer:"other"},{id:"f82f963f",name:"Junction",type:"AndJunction",layer:"other"},{id:"ccf9b28a",name:"Junction",type:"AndJunction",layer:"other"},{id:"id-2da4ddd4",name:"Infirmary",type:"Location",layer:"other"},{id:"id-4704c7c8",name:"Location",type:"Location",layer:"other"}],b=[{id:"id-702922fa",sourceId:"d3bfc49d",targetId:"id-17ba5f53",type:"Composition"},{id:"id-94e189ed",sourceId:"d3bfc49d",targetId:"ceee856a",type:"Composition"},{id:"id-8aab1343",sourceId:"d3bfc49d",targetId:"a1656467",type:"Composition"},{id:"a9c981e1",sourceId:"d7177a48",targetId:"d3bfc49d",type:"Composition"},{id:"bea6a05d",sourceId:"d7177a48",targetId:"b882dd33",type:"Composition"},{id:"id-43ed1d38",sourceId:"d7177a48",targetId:"aee68911",type:"Composition"},{id:"fb5e5288",sourceId:"d7177a48",targetId:"id-549b978f",type:"Composition"},{id:"aa3f5ff4",sourceId:"f1864e14",targetId:"b2ad7581",type:"Triggering"},{id:"id-45ae11e4",sourceId:"f9623e86",targetId:"f1864e14",type:"Triggering"},{id:"e9e45a36",sourceId:"id-19fcbcca",targetId:"cc2694e8",type:"Composition"},{id:"id-376585bc",sourceId:"id-460239bb",targetId:"id-151d0d88",type:"Composition"},{id:"c4b5224c",sourceId:"cc2694e8",targetId:"f1864e14",type:"Serving"},{id:"b5a28f21",sourceId:"id-151d0d88",targetId:"f1864e14",type:"Serving"},{id:"b213cb5d",sourceId:"id-8484165f",targetId:"f1864e14",type:"Serving"},{id:"f60e442d",sourceId:"bc8e44f0",targetId:"id-8484165f",type:"Composition"},{id:"dded41f5",sourceId:"c3347f07",targetId:"id-19fcbcca",type:"Composition"},{id:"id-021dc8a0",sourceId:"c3347f07",targetId:"id-460239bb",type:"Composition"},{id:"id-8a062144",sourceId:"id-62870b91",targetId:"fbe5dc11",type:"Composition"},{id:"id-3a861c29",sourceId:"id-62870b91",targetId:"id-0ec67e85",type:"Composition"},{id:"a2731bcd",sourceId:"id-0ec67e85",targetId:"id-16abaafb",type:"Composition"},{id:"a6b2842a",sourceId:"id-0ec67e85",targetId:"id-91d6a6a9",type:"Composition"},{id:"id-247b6982",sourceId:"fbe5dc11",targetId:"f1864e14",type:"Serving"},{id:"id-635619ab",sourceId:"id-91d6a6a9",targetId:"f9623e86",type:"Serving"},{id:"d3bab346",sourceId:"d3bfc49d",targetId:"e60c5446",type:"Composition"},{id:"beb413b2",sourceId:"c73e22bc",targetId:"id-5850f515",type:"Composition"},{id:"id-44d03440",sourceId:"id-9bdf194e",targetId:"id-47ca6523",type:"Composition"},{id:"id-551f0dbd",sourceId:"id-5834034d",targetId:"id-72b37366",type:"Composition"},{id:"ec5bc064",sourceId:"id-72b37366",targetId:"id-81c4876a",type:"Composition"},{id:"e6e96650",sourceId:"a99529e2",targetId:"id-139f9bab",type:"Composition"},{id:"id-949af28a",sourceId:"id-6ab69c29",targetId:"id-8d960b3e",type:"Composition"},{id:"id-92ab92fc",sourceId:"id-6ab69c29",targetId:"id-3b4e5bbc",type:"Composition"},{id:"id-31d92b7f",sourceId:"id-6ab69c29",targetId:"id-974790c3",type:"Composition"},{id:"id-30bd4a8c",sourceId:"id-6ab69c29",targetId:"id-378950dd",type:"Composition"},{id:"id-18038aad",sourceId:"id-7aba69d1",targetId:"id-0dff4259",type:"Composition"},{id:"id-1c326b6c",sourceId:"id-0dff4259",targetId:"id-36fbd768",type:"Composition"},{id:"id-9b6ed989",sourceId:"id-7aba69d1",targetId:"id-77f11989",type:"Composition"},{id:"b1b36355",sourceId:"id-7aba69d1",targetId:"cdc8f974",type:"Composition"},{id:"id-0771a031",sourceId:"id-7aba69d1",targetId:"id-547c517e",type:"Composition"},{id:"id-978a73fc",sourceId:"e7aa271c",targetId:"id-694b17c2",type:"Composition"},{id:"id-7f0d830b",sourceId:"id-2d7a05b4",targetId:"id-4983c1c8",type:"Composition"},{id:"id-04724ef4",sourceId:"id-2d7a05b4",targetId:"id-8c50cc08",type:"Composition"},{id:"id-60e12cc0",sourceId:"e7aa271c",targetId:"id-2d7a05b4",type:"Composition"},{id:"id-3f664d0a",sourceId:"id-523d0f25",targetId:"id-590f7495",type:"Composition"},{id:"id-28a022b8",sourceId:"e7aa271c",targetId:"id-523d0f25",type:"Composition"},{id:"id-421cc1a2",sourceId:"e2ac9f22",targetId:"id-6f01bf3a",type:"Composition"},{id:"id-11dea7b2",sourceId:"e2ac9f22",targetId:"ed7baa8b",type:"Composition"},{id:"id-35554867",sourceId:"ed7baa8b",targetId:"id-50b2059e",type:"Composition"},{id:"id-8783603b",sourceId:"e2ac9f22",targetId:"id-4ef928e8",type:"Composition"},{id:"id-23e3500a",sourceId:"id-4ef928e8",targetId:"f6a7fd9f",type:"Composition"},{id:"d0737f98",sourceId:"dfaa4387",targetId:"e314799d",type:"Composition"},{id:"cac1f033",sourceId:"e314799d",targetId:"id-94d50d97",type:"Composition"},{id:"id-397fbc46",sourceId:"d2886808",targetId:"a99529e2",type:"Composition"},{id:"b3ed2271",sourceId:"d2886808",targetId:"id-9bdf194e",type:"Composition"},{id:"a2dc9886",sourceId:"id-5834034d",targetId:"c496f50f",type:"Composition"},{id:"id-75ac11df",sourceId:"id-5834034d",targetId:"id-80c1003b",type:"Composition"},{id:"id-25eb7eb0",sourceId:"id-80c1003b",targetId:"d07f34b8",type:"Composition"},{id:"ed258b49",sourceId:"id-6ab69c29",targetId:"id-972588ae",type:"Composition"},{id:"id-4d9f244b",sourceId:"id-972588ae",targetId:"id-1c076398",type:"Composition"},{id:"id-9b7f8ab9",sourceId:"e7aa271c",targetId:"id-9bdf194e",type:"Composition"},{id:"id-4bb9c8c8",sourceId:"dfaa4387",targetId:"id-3352c46b",type:"Composition"},{id:"id-48a220fd",sourceId:"id-3352c46b",targetId:"id-4b847644",type:"Composition"},{id:"b09a4bd9",sourceId:"id-609f7882",targetId:"id-1be308a1",type:"Composition"},{id:"d31f3ee3",sourceId:"id-609f7882",targetId:"d7177a48",type:"Composition"},{id:"id-82625f2c",sourceId:"id-813739e2",targetId:"id-91fbfb11",type:"Serving"},{id:"id-33993dbf",sourceId:"id-813739e2",targetId:"id-4a0fac0e",type:"Triggering"},{id:"e7edc131",sourceId:"id-4a0fac0e",targetId:"id-91d0932d",type:"Serving"},{id:"ad7abe2a",sourceId:"id-813739e2",targetId:"e9d01fe3",type:"Triggering"},{id:"id-37460964",sourceId:"id-4a0fac0e",targetId:"c7e00f6d",type:"Triggering"},{id:"id-3b9b9fbb",sourceId:"e9d01fe3",targetId:"c7e00f6d",type:"Triggering"},{id:"id-66a02ded",sourceId:"c7e00f6d",targetId:"id-885b265c",type:"Triggering"},{id:"ebd045b5",sourceId:"id-885b265c",targetId:"f541b667",type:"Triggering"},{id:"de1fb15f",sourceId:"id-135eefa1",targetId:"c7e00f6d",type:"Composition"},{id:"id-831632cb",sourceId:"id-135eefa1",targetId:"e9d01fe3",type:"Composition"},{id:"id-7b33ebba",sourceId:"id-135eefa1",targetId:"id-4a0fac0e",type:"Composition"},{id:"id-1583ec6b",sourceId:"id-135eefa1",targetId:"id-813739e2",type:"Composition"},{id:"id-19a3e9d6",sourceId:"id-135eefa1",targetId:"f541b667",type:"Composition"},{id:"id-17a7b467",sourceId:"id-135eefa1",targetId:"id-885b265c",type:"Composition"},{id:"fe7a2e6b",sourceId:"a458af17",targetId:"f541b667",type:"Serving"},{id:"id-49e4e021",sourceId:"e18c6fa0",targetId:"f541b667",type:"Serving"},{id:"ef4afa5f",sourceId:"id-48a2a5b4",targetId:"f541b667",type:"Serving"},{id:"d29ec3a7",sourceId:"d21f3e47",targetId:"d9379bc5",type:"Serving"},{id:"fe936b45",sourceId:"e18c6fa0",targetId:"id-54c46059",type:"Composition"},{id:"id-7b21adad",sourceId:"e18c6fa0",targetId:"id-9d9e8720",type:"Composition"},{id:"c281ca63",sourceId:"e18c6fa0",targetId:"id-4b027005",type:"Composition"},{id:"id-18197e36",sourceId:"d21f3e47",targetId:"id-54c46059",type:"Serving"},{id:"id-1ac9bcac",sourceId:"d21f3e47",targetId:"id-9d9e8720",type:"Serving"},{id:"id-0f21c77c",sourceId:"d21f3e47",targetId:"id-4b027005",type:"Serving"},{id:"a04301c4",sourceId:"id-4b027005",targetId:"d9379bc5",type:"Serving"},{id:"f16ec2a9",sourceId:"id-54c46059",targetId:"d1e86fa1",type:"Serving"},{id:"a893be9a",sourceId:"id-9d9e8720",targetId:"id-28574436",type:"Serving"},{id:"id-4ba7d77e",sourceId:"a1a62c11",targetId:"d1e86fa1",type:"Triggering"},{id:"id-4c9e48c6",sourceId:"d9379bc5",targetId:"d1e86fa1",type:"Triggering"},{id:"id-318ab1bd",sourceId:"d1e86fa1",targetId:"id-9f9acbbf",type:"Triggering"},{id:"id-79c37a8a",sourceId:"id-28574436",targetId:"id-9f9acbbf",type:"Triggering"},{id:"id-562abb29",sourceId:"dbeb1455",targetId:"id-28574436",type:"Composition"},{id:"c4d19c9a",sourceId:"dbeb1455",targetId:"d1e86fa1",type:"Composition"},{id:"id-33eaa1e1",sourceId:"dbeb1455",targetId:"d9379bc5",type:"Composition"},{id:"id-816daa6d",sourceId:"dbeb1455",targetId:"a1a62c11",type:"Composition"},{id:"ee8b72e8",sourceId:"id-135eefa1",targetId:"dbeb1455",type:"Triggering"},{id:"id-06ab106c",sourceId:"id-48a2a5b4",targetId:"id-9f9acbbf",type:"Serving"},{id:"id-8c719a6b",sourceId:"d21f3e47",targetId:"id-9f9acbbf",type:"Serving"},{id:"ea1a904a",sourceId:"id-9f9acbbf",targetId:"e4b300fb",type:"Triggering"},{id:"id-5f929eb8",sourceId:"id-9b4d2892",targetId:"e4b300fb",type:"Serving"},{id:"c1985841",sourceId:"id-9f9acbbf",targetId:"b764bde9",type:"Triggering"},{id:"id-1784843d",sourceId:"id-9f9acbbf",targetId:"a2276966",type:"Triggering"},{id:"c88df80f",sourceId:"id-87d27326",targetId:"id-9f9acbbf",type:"Triggering"},{id:"e265fca2",sourceId:"a2276966",targetId:"id-87d27326",type:"Triggering"},{id:"id-19ffaeda",sourceId:"b764bde9",targetId:"id-87d27326",type:"Triggering"},{id:"id-2bd8b515",sourceId:"id-88c3be26",targetId:"id-92473e34",type:"Triggering"},{id:"ad84bffe",sourceId:"id-92473e34",targetId:"d0800141",type:"Access"},{id:"id-8c2d4422",sourceId:"id-92473e34",targetId:"c4f191cb",type:"Triggering"},{id:"id-40a2cc9b",sourceId:"id-37ae8baf",targetId:"id-88c3be26",type:"Composition"},{id:"id-311d3418",sourceId:"id-37ae8baf",targetId:"id-92473e34",type:"Composition"},{id:"id-60ee7d53",sourceId:"id-37ae8baf",targetId:"c4f191cb",type:"Composition"},{id:"id-5c74e971",sourceId:"e4b300fb",targetId:"id-37ae8baf",type:"Triggering"},{id:"id-5f5275e3",sourceId:"id-9b4d2892",targetId:"id-88c3be26",type:"Serving"},{id:"c9f9dac1",sourceId:"id-37ae8baf",targetId:"ccf9b28a",type:"Triggering"},{id:"ea1e9d6a",sourceId:"ccf9b28a",targetId:"id-89e82cde",type:"Triggering"},{id:"id-2cf4bca6",sourceId:"ccf9b28a",targetId:"b50d0d06",type:"Triggering"},{id:"id-3a1dadfa",sourceId:"id-89e82cde",targetId:"f82f963f",type:"Triggering"},{id:"id-791522c0",sourceId:"f82f963f",targetId:"id-62e86c50",type:"Triggering"},{id:"id-6c4becad",sourceId:"f82f963f",targetId:"b50d0d06",type:"Triggering"},{id:"id-24c2a7ad",sourceId:"b50d0d06",targetId:"id-7dac06bd",type:"Triggering"},{id:"id-1f297e2c",sourceId:"id-62e86c50",targetId:"f780d28c",type:"Triggering"},{id:"id-8e131e64",sourceId:"f780d28c",targetId:"id-7dac06bd",type:"Triggering"},{id:"eb6529f4",sourceId:"id-62e86c50",targetId:"b424ea38",type:"Triggering"},{id:"id-28e4c025",sourceId:"id-91d6a6a9",targetId:"id-81cb1dd3",type:"Realization"},{id:"cc6588eb",sourceId:"id-91d6a6a9",targetId:"c400f4ad",type:"Realization"},{id:"d39e4f02",sourceId:"id-91d6a6a9",targetId:"baf3b224",type:"Realization"},{id:"id-1d4f117f",sourceId:"id-61cdef08",targetId:"b764bde9",type:"Serving"},{id:"id-909597d0",sourceId:"id-61cdef08",targetId:"a2276966",type:"Serving"},{id:"bd6b9455",sourceId:"id-33f4221f",targetId:"id-46a217b3",type:"Composition"},{id:"id-05315aca",sourceId:"id-33f4221f",targetId:"id-22516748",type:"Composition"},{id:"id-9e2644eb",sourceId:"id-33f4221f",targetId:"id-359391c5",type:"Composition"},{id:"cadb0f11",sourceId:"id-33f4221f",targetId:"id-6e87982f",type:"Composition"},{id:"id-843013a4",sourceId:"id-33f4221f",targetId:"f95d7b28",type:"Composition"},{id:"id-03fb04e4",sourceId:"id-91d6a6a9",targetId:"d3da8982",type:"Association"},{id:"bc504d82",sourceId:"id-97a51643",targetId:"id-28574436",type:"Association"},{id:"id-01546bf3",sourceId:"id-05cb6a4f",targetId:"bd2e073d",type:"Association"},{id:"id-8862f574",sourceId:"f10d54c7",targetId:"id-4173c76a",type:"Association"},{id:"e1b3879d",sourceId:"id-80816c1d",targetId:"id-4173c76a",type:"Association"},{id:"id-6d8f0420",sourceId:"id-05cb6a4f",targetId:"id-80816c1d",type:"Composition"},{id:"id-068e8d03",sourceId:"id-80816c1d",targetId:"id-609f7882",type:"Association"},{id:"id-30ab1456",sourceId:"fe5c65b7",targetId:"bfd0d4dc",type:"Composition"},{id:"deaa5799",sourceId:"fe5c65b7",targetId:"id-871fc2f2",type:"Composition"},{id:"id-459cac36",sourceId:"fe5c65b7",targetId:"id-6ea847ae",type:"Composition"},{id:"id-204ee826",sourceId:"fe5c65b7",targetId:"id-5f4cdc11",type:"Composition"},{id:"c52ba795",sourceId:"fe5c65b7",targetId:"id-31b06206",type:"Composition"},{id:"e3861035",sourceId:"fe5c65b7",targetId:"d63b56c2",type:"Composition"},{id:"id-4f24d8d3",sourceId:"fe5c65b7",targetId:"id-05aed334",type:"Composition"},{id:"e40d597a",sourceId:"fe5c65b7",targetId:"df2abf25",type:"Composition"},{id:"id-5b71b110",sourceId:"b6b62bd4",targetId:"df2abf25",type:"Composition"},{id:"f62624fa",sourceId:"b6b62bd4",targetId:"id-4666bdc0",type:"Composition"},{id:"id-21e4d64b",sourceId:"id-0a4a1c24",targetId:"id-4666bdc0",type:"Composition"},{id:"ae814378",sourceId:"id-2da4ddd4",targetId:"id-221f9269",type:"Assignment"},{id:"id-4da98705",sourceId:"id-871fc2f2",targetId:"id-4f571b31",type:"Composition"},{id:"id-46298dac",sourceId:"id-88d277df",targetId:"id-221f9269",type:"Composition"},{id:"id-83c5ff92",sourceId:"id-2da4ddd4",targetId:"id-88d277df",type:"Assignment"},{id:"id-08696327",sourceId:"bfd0d4dc",targetId:"e07cded6",type:"Composition"},{id:"cf51df42",sourceId:"id-221f9269",targetId:"d12e9581",type:"Association"},{id:"id-1b389251",sourceId:"id-5f4cdc11",targetId:"id-803d1beb",type:"Composition"},{id:"a9696683",sourceId:"id-221f9269",targetId:"id-6dc8eb9a",type:"Composition"},{id:"d97af0bb",sourceId:"d63b56c2",targetId:"id-64e3b89e",type:"Composition"},{id:"id-14ee726d",sourceId:"id-221f9269",targetId:"id-3c2976b7",type:"Realization"},{id:"id-7c493138",sourceId:"id-05aed334",targetId:"id-03787811",type:"Composition"},{id:"id-41d82fdb",sourceId:"fde629f6",targetId:"id-221f9269",type:"Aggregation"},{id:"id-6b19b581",sourceId:"id-31b06206",targetId:"id-1d75ebdd",type:"Composition"},{id:"adf6d4d8",sourceId:"id-221f9269",targetId:"id-151d0d88",type:"Serving"},{id:"d4cb0f86",sourceId:"id-221f9269",targetId:"id-8484165f",type:"Serving"},{id:"d2759ef1",sourceId:"id-4666bdc0",targetId:"id-72ecce09",type:"Composition"},{id:"id-8d09276d",sourceId:"df2abf25",targetId:"id-524c00b1",type:"Composition"},{id:"id-7ced8c96",sourceId:"id-88d277df",targetId:"d12e9581",type:"Association"},{id:"b01816b3",sourceId:"id-070226e2",targetId:"id-88d277df",type:"Aggregation"},{id:"id-2fcb352f",sourceId:"id-88d277df",targetId:"id-8484165f",type:"Serving"},{id:"id-55b13812",sourceId:"id-88d277df",targetId:"id-151d0d88",type:"Serving"},{id:"e8077e74",sourceId:"id-88d277df",targetId:"id-7a35712e",type:"Realization"},{id:"id-9981edc1",sourceId:"id-88d277df",targetId:"id-32820434",type:"Composition"},{id:"id-47280c41",sourceId:"id-88d277df",targetId:"id-88d277df",type:"Composition"},{id:"id-42ea704e",sourceId:"e128b98a",targetId:"id-151d0d88",type:"Serving"},{id:"id-02b49599",sourceId:"e128b98a",targetId:"id-151d0d88",type:"Serving"},{id:"id-6de3a583",sourceId:"id-561685a8",targetId:"id-8484165f",type:"Serving"},{id:"id-6c2f8573",sourceId:"id-561685a8",targetId:"e128b98a",type:"Composition"},{id:"id-97cc03c6",sourceId:"id-1b8ab55e",targetId:"id-8484165f",type:"Serving"},{id:"id-9fc84170",sourceId:"id-1b8ab55e",targetId:"id-8484165f",type:"Serving"},{id:"id-431b6571",sourceId:"id-05ec65d6",targetId:"id-4979990b",type:"Composition"},{id:"id-2d0c7055",sourceId:"fe5c65b7",targetId:"id-05ec65d6",type:"Composition"},{id:"id-1b99ad77",sourceId:"b6b62bd4",targetId:"id-05ec65d6",type:"Composition"},{id:"c10145d0",sourceId:"id-0a4a1c24",targetId:"id-05ec65d6",type:"Composition"},{id:"id-72d3156f",sourceId:"id-229a7d9f",targetId:"d2886808",type:"Specialization"},{id:"de417761",sourceId:"id-221f9269",targetId:"e128b98a",type:"Realization"},{id:"id-9dc95b34",sourceId:"id-88d277df",targetId:"id-1b8ab55e",type:"Realization"},{id:"id-46c6ea7f",sourceId:"id-88d277df",targetId:"e128b98a",type:"Realization"},{id:"id-34f6395b",sourceId:"b6b62bd4",targetId:"c012a502",type:"Composition"},{id:"id-89e1904d",sourceId:"c012a502",targetId:"id-94ef9402",type:"Composition"},{id:"b2648e75",sourceId:"ee68b27d",targetId:"b5b72aa9",type:"Association"},{id:"id-4c6a6f40",sourceId:"ee68b27d",targetId:"id-4704c7c8",type:"Association"},{id:"id-47bb1f76",sourceId:"ee68b27d",targetId:"ee68b27d",type:"Aggregation"},{id:"af42e899",sourceId:"ee68b27d",targetId:"id-25df4f32",type:"Association"},{id:"c8f79991",sourceId:"id-588de21e",targetId:"ee68b27d",type:"Serving"},{id:"fdf02722",sourceId:"ee68b27d",targetId:"id-200ad530",type:"Realization"},{id:"id-0230dd26",sourceId:"id-7378d9ce",targetId:"ee68b27d",type:"Aggregation"},{id:"afc46c36",sourceId:"ee68b27d",targetId:"f1911570",type:"Serving"},{id:"id-44e21017",sourceId:"c1164ece",targetId:"f1911570",type:"Serving"},{id:"id-9415eac1",sourceId:"ee68b27d",targetId:"c1164ece",type:"Realization"},{id:"id-7871b762",sourceId:"c1164ece",targetId:"f1911570",type:"Serving"},{id:"cb77baae",sourceId:"df11e1b5",targetId:"c1164ece",type:"Composition"},{id:"a851dfdb",sourceId:"id-561685a8",targetId:"id-1b8ab55e",type:"Composition"},{id:"ce822551",sourceId:"id-229a7d9f",targetId:"id-61091710",type:"Specialization"},{id:"c017ee74",sourceId:"c73e22bc",targetId:"id-2a8bae66",type:"Specialization"},{id:"id-6f7dcc7d",sourceId:"id-7aba69d1",targetId:"id-38feb060",type:"Specialization"},{id:"id-55aa4f44",sourceId:"e7aa271c",targetId:"id-87ea8b49",type:"Specialization"},{id:"id-460e525a",sourceId:"e2ac9f22",targetId:"id-14a5901d",type:"Specialization"},{id:"id-85b98263",sourceId:"dfaa4387",targetId:"id-26cbd61e",type:"Specialization"},{id:"id-47fcaa26",sourceId:"dfaa4387",targetId:"id-093d55e2",type:"Specialization"},{id:"d5e804a1",sourceId:"d2886808",targetId:"id-38feb060",type:"Specialization"},{id:"b2a96cda",sourceId:"id-5834034d",targetId:"d2886808",type:"Specialization"},{id:"id-176f0c4a",sourceId:"id-6ab69c29",targetId:"d2886808",type:"Specialization"},{id:"id-34a38d41",sourceId:"dfaa4387",targetId:"d2886808",type:"Specialization"},{id:"a86d70fb",sourceId:"id-07ee5607",targetId:"d2886808",type:"Specialization"},{id:"c2859fb2",sourceId:"id-07ee5607",targetId:"id-38feb060",type:"Specialization"},{id:"cdfc27f5",sourceId:"e2ac9f22",targetId:"id-3ecd2e2a",type:"Specialization"},{id:"fdc419be",sourceId:"c73e22bc",targetId:"b42ede3c",type:"Specialization"},{id:"id-61c79cca",sourceId:"fe5c65b7",targetId:"fd882843",type:"Specialization"},{id:"id-5030dd13",sourceId:"fe5c65b7",targetId:"d2886808",type:"Specialization"},{id:"id-97da8929",sourceId:"b6b62bd4",targetId:"d2886808",type:"Specialization"},{id:"a2cf0508",sourceId:"id-0a4a1c24",targetId:"d2886808",type:"Specialization"},{id:"dadfb138",sourceId:"b6b62bd4",targetId:"ac66eeae",type:"Specialization"},{id:"id-0ad602c8",sourceId:"id-0a4a1c24",targetId:"ac66eeae",type:"Specialization"}],m=[],f={identifier:e,archimateId:i,name:d,description:a,formats:t,source:o,sourceFile:c,sourceFormat:r,timestamp:n,tags:p,duplicates:s,language:y,elements:l,relationships:b,views:m};export{i as archimateId,f as default,a as description,s as duplicates,l as elements,t as formats,e as identifier,y as language,d as name,b as relationships,o as source,c as sourceFile,r as sourceFormat,p as tags,n as timestamp,m as views};