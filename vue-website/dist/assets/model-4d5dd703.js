const e="https://me.big.tuwien.ac.at/EAModelSet/id-331497f3",i="id-331497f3",t="10 Money",d="",a=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",o="raw-data/github/xml/money.xml",n="XML",p="29-06-2023 09:27:44",r=[],s=[],y="en",l=[{id:"id-21fb2ce3",name:"class money",type:"ApplicationComponent",layer:"application"},{id:"aba25289",name:"amount LONG",type:"DataObject",layer:"application"},{id:"id-7ed92f97",name:"REF to currency",type:"DataObject",layer:"application"},{id:"f2abd58e",name:"+ (money object)",type:"ApplicationFunction",layer:"application"},{id:"id-1d08ac9a",name:"- (money object)",type:"ApplicationFunction",layer:"application"},{id:"id-3cb65afe",name:"* (bigdecimal, rounding mode)",type:"ApplicationFunction",layer:"application"},{id:"id-65841406",name:"allocate(proportions X:Y:Z)",type:"ApplicationFunction",layer:"application"},{id:"c0338fec",name:">",type:"ApplicationFunction",layer:"application"},{id:"ba5e9d70",name:"<",type:"ApplicationFunction",layer:"application"},{id:"id-98c75c3d",name:">=",type:"ApplicationFunction",layer:"application"},{id:"id-4001b3a0",name:"<=",type:"ApplicationFunction",layer:"application"},{id:"b64ba578",name:"=",type:"ApplicationFunction",layer:"application"},{id:"id-36132d44",name:"Application Process",type:"ApplicationProcess",layer:"application"},{id:"id-34328e8c",name:"money left over after rounding distributed between all parts of the proportion $:$:$ of randomly",type:"ApplicationProcess",layer:"application"},{id:"id-19f9348a",name:"return $,$,$",type:"ApplicationProcess",layer:"application"},{id:"id-312f0e35",name:"find $,$,$                        where    $:$:$=X:Y:Z             and  $+$+$=amount",type:"ApplicationProcess",layer:"application"},{id:"f81b343d",name:"class currency",type:"ApplicationComponent",layer:"application"},{id:"id-39fe1275",name:"get default fraction digits",type:"ApplicationFunction",layer:"application"},{id:"dc9d47db",name:"currency",type:"DataObject",layer:"application"},{id:"id-31e83fad",name:"construnctor (amount, currency obj)",type:"ApplicationFunction",layer:"application"},{id:"id-96001353",name:"amount *10^currencyObj.getDefaultFractionDigits",type:"ApplicationProcess",layer:"application"},{id:"id-8d2aee58",name:"fabric for dollars (amount)",type:"ApplicationFunction",layer:"application"},{id:"id-7ec0541c",name:"return Money(amount, Currency.USD)",type:"ApplicationProcess",layer:"application"},{id:"ffe5adda",name:"equals (some object)",type:"ApplicationFunction",layer:"application"},{id:"id-3a83d854",name:"equals (money object)",type:"ApplicationFunction",layer:"application"},{id:"id-0ba19a9b",name:"validate that object of Money type",type:"ApplicationProcess",layer:"application"},{id:"id-94ae56d1",name:"some object EQUAL this",type:"ApplicationProcess",layer:"application"},{id:"id-0517fd9a",name:"validate that  object.currency EQUAL this.currency",type:"ApplicationProcess",layer:"application"},{id:"id-48d26aba",name:"validate that  object.amount == this.amount",type:"ApplicationProcess",layer:"application"},{id:"id-5f781f9e",name:"hashCode ()",type:"ApplicationFunction",layer:"application"},{id:"id-4cf8022b",name:"return (int) (amount ^ (amount >>> 32))",type:"ApplicationProcess",layer:"application"},{id:"c19c7fd3",name:"check that the money in the same currency",type:"ApplicationProcess",layer:"application"},{id:"id-596e2af0",name:"return Money (this.amount +moneyObj.amount)",type:"ApplicationProcess",layer:"application"},{id:"fe93d6dd",name:"check that the money in the same currency",type:"ApplicationProcess",layer:"application"},{id:"id-2bb210fc",name:"return Money (this.amount - moneyObj.amount )",type:"ApplicationProcess",layer:"application"},{id:"id-9446333b",name:"check that the money in the same currency",type:"ApplicationProcess",layer:"application"},{id:"id-8a5a6c74",name:"return Money (this.amount *moneyObj.amount, currency,rounding mode)",type:"ApplicationProcess",layer:"application"},{id:"id-74e410f7",name:"Currency Converter",type:"ApplicationComponent",layer:"application"},{id:"id-1723971b",name:"compare (some object)",type:"ApplicationFunction",layer:"application"},{id:"id-9f683978",name:"compare (money object)",type:"ApplicationFunction",layer:"application"},{id:"e1a642d8",name:"call",type:"ApplicationProcess",layer:"application"},{id:"id-76bfbc4b",name:"check that the money in the same currency",type:"ApplicationProcess",layer:"application"},{id:"id-81f6e521",name:"if this.amount>object.amount",type:"ApplicationProcess",layer:"application"},{id:"id-5ce7b2ee",name:"return true",type:"ApplicationProcess",layer:"application"},{id:"id-0daaebae",name:"else return false",type:"ApplicationProcess",layer:"application"},{id:"c7d49d32-2acf-46ef-8917-42b7e960396e",name:"amount()",type:"ApplicationFunction",layer:"application"},{id:"id-10fd17f6-eae9-4cd6-8431-9379dc0e633e",name:"return amount *10^(-currencyObj.getDefaultFractionDigits)",type:"ApplicationProcess",layer:"application"}],m=[{id:"da43ca9e",sourceId:"id-21fb2ce3",targetId:"aba25289",type:"Access"},{id:"d47aa070",sourceId:"id-21fb2ce3",targetId:"id-7ed92f97",type:"Access"},{id:"cfa73f61",sourceId:"id-21fb2ce3",targetId:"f2abd58e",type:"Assignment"},{id:"id-6e07808d",sourceId:"id-21fb2ce3",targetId:"id-1d08ac9a",type:"Assignment"},{id:"id-124362ab",sourceId:"id-21fb2ce3",targetId:"id-3cb65afe",type:"Assignment"},{id:"a706f368",sourceId:"id-21fb2ce3",targetId:"id-65841406",type:"Assignment"},{id:"id-0570a2bf",sourceId:"id-21fb2ce3",targetId:"c0338fec",type:"Assignment"},{id:"id-5379fb17",sourceId:"id-21fb2ce3",targetId:"ba5e9d70",type:"Assignment"},{id:"id-232eef49",sourceId:"id-21fb2ce3",targetId:"id-98c75c3d",type:"Assignment"},{id:"bdee38ce",sourceId:"id-21fb2ce3",targetId:"id-4001b3a0",type:"Assignment"},{id:"id-395c970a",sourceId:"id-21fb2ce3",targetId:"b64ba578",type:"Assignment"},{id:"id-916a7630",sourceId:"id-65841406",targetId:"id-36132d44",type:"Composition"},{id:"d3182254",sourceId:"id-65841406",targetId:"id-34328e8c",type:"Composition"},{id:"dae596a7",sourceId:"id-65841406",targetId:"id-19f9348a",type:"Composition"},{id:"id-7d4d3022",sourceId:"id-65841406",targetId:"id-312f0e35",type:"Composition"},{id:"id-45930da5",sourceId:"f81b343d",targetId:"id-39fe1275",type:"Assignment"},{id:"id-2b2c1f23",sourceId:"id-7ed92f97",targetId:"f81b343d",type:"Association"},{id:"e3e56127",sourceId:"f81b343d",targetId:"dc9d47db",type:"Access"},{id:"id-314aca76",sourceId:"id-21fb2ce3",targetId:"id-31e83fad",type:"Assignment"},{id:"id-9aef9514",sourceId:"id-31e83fad",targetId:"id-96001353",type:"Composition"},{id:"id-50a0c84c",sourceId:"id-96001353",targetId:"id-39fe1275",type:"Triggering"},{id:"id-60a1152a",sourceId:"id-21fb2ce3",targetId:"id-8d2aee58",type:"Assignment"},{id:"b20e4fc7",sourceId:"id-8d2aee58",targetId:"id-7ec0541c",type:"Composition"},{id:"ca99e40e",sourceId:"id-7ec0541c",targetId:"id-31e83fad",type:"Triggering"},{id:"id-3338c4e7",sourceId:"id-21fb2ce3",targetId:"ffe5adda",type:"Assignment"},{id:"id-8582dc4e",sourceId:"id-21fb2ce3",targetId:"id-3a83d854",type:"Assignment"},{id:"id-5806bfa4",sourceId:"ffe5adda",targetId:"id-0ba19a9b",type:"Composition"},{id:"f6e84fe0",sourceId:"ffe5adda",targetId:"id-94ae56d1",type:"Composition"},{id:"id-20f5617b",sourceId:"id-94ae56d1",targetId:"id-3a83d854",type:"Triggering"},{id:"id-6e90b884",sourceId:"id-3a83d854",targetId:"id-0517fd9a",type:"Composition"},{id:"id-7e5c833b",sourceId:"id-3a83d854",targetId:"id-48d26aba",type:"Composition"},{id:"id-4c794baa",sourceId:"id-21fb2ce3",targetId:"id-5f781f9e",type:"Assignment"},{id:"id-6efea019",sourceId:"id-5f781f9e",targetId:"id-4cf8022b",type:"Composition"},{id:"id-76072d6d",sourceId:"f2abd58e",targetId:"c19c7fd3",type:"Composition"},{id:"ad0c0c31",sourceId:"f2abd58e",targetId:"id-596e2af0",type:"Composition"},{id:"a7c59f5a",sourceId:"id-1d08ac9a",targetId:"fe93d6dd",type:"Composition"},{id:"id-10720e9a",sourceId:"id-1d08ac9a",targetId:"id-2bb210fc",type:"Composition"},{id:"id-263047da",sourceId:"id-3cb65afe",targetId:"id-9446333b",type:"Composition"},{id:"a447baef",sourceId:"id-3cb65afe",targetId:"id-8a5a6c74",type:"Composition"},{id:"fae8c7eb",sourceId:"id-21fb2ce3",targetId:"id-1723971b",type:"Assignment"},{id:"id-315d2698",sourceId:"id-21fb2ce3",targetId:"id-9f683978",type:"Assignment"},{id:"d09e187b",sourceId:"id-1723971b",targetId:"e1a642d8",type:"Composition"},{id:"id-00b2568b",sourceId:"e1a642d8",targetId:"id-9f683978",type:"Triggering"},{id:"id-8769bb04",sourceId:"id-9f683978",targetId:"id-76bfbc4b",type:"Composition"},{id:"id-67ca0c56",sourceId:"id-9f683978",targetId:"id-81f6e521",type:"Composition"},{id:"fdb654ff",sourceId:"id-81f6e521",targetId:"id-5ce7b2ee",type:"Composition"},{id:"d79a6718",sourceId:"id-81f6e521",targetId:"id-0daaebae",type:"Composition"},{id:"id-8a6e74e2",sourceId:"c0338fec",targetId:"id-9f683978",type:"Triggering"},{id:"id-748e0945",sourceId:"ba5e9d70",targetId:"id-9f683978",type:"Triggering"},{id:"ee315675",sourceId:"id-21fb2ce3",targetId:"id-9f683978",type:"Triggering"},{id:"d9862f9d",sourceId:"id-4001b3a0",targetId:"id-9f683978",type:"Triggering"},{id:"id-0ecdd05f",sourceId:"id-98c75c3d",targetId:"id-9f683978",type:"Triggering"},{id:"id-600181f3-8d05-4fc6-b52a-43deb22c56fb",sourceId:"c7d49d32-2acf-46ef-8917-42b7e960396e",targetId:"id-10fd17f6-eae9-4cd6-8431-9379dc0e633e",type:"Composition"},{id:"id-24e19d51-4c57-4234-9541-75e62491e300",sourceId:"id-10fd17f6-eae9-4cd6-8431-9379dc0e633e",targetId:"id-39fe1275",type:"Triggering"}],f=[{id:"id-9db917b5",name:"Money",viewpoint:""}],u={identifier:e,archimateId:i,name:t,description:d,formats:a,source:c,sourceFile:o,sourceFormat:n,timestamp:p,tags:r,duplicates:s,language:y,elements:l,relationships:m,views:f};export{i as archimateId,u as default,d as description,s as duplicates,l as elements,a as formats,e as identifier,y as language,t as name,m as relationships,c as source,o as sourceFile,n as sourceFormat,r as tags,p as timestamp,f as views};
