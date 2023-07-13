const e="https://me.big.tuwien.ac.at/EAModelSet/9bbd7fb2",t="9bbd7fb2",a="app example 3 (REST)",i="",o=["XML","CSV","JSON","ARCHIMATE"],c="GitHub",n="raw-data/github/archimate/32_app_example_3.archimate",p="ARCHIMATE",d="29-06-2023 09:30:07",s=["WARNING"],r=[],l="en",y=[{id:"2272b3bb",name:"IFollowerDirectory",type:"ApplicationInterface",layer:"application"},{id:"461a15da",name:"List<Follower> FindUsersFollowers (string accountId)",type:"ApplicationProcess",layer:"application"},{id:"0c055819",name:"Follower",type:"ApplicationComponent",layer:"application"},{id:"c6eb43cd",name:"FollowerId",type:"DataObject",layer:"application"},{id:"75ac705b",name:"SocialTags[]",type:"DataObject",layer:"application"},{id:"b3fca1fb",name:"FollowerName",type:"DataObject",layer:"application"},{id:"e61924b1",name:"FollowerDirectory",type:"ApplicationComponent",layer:"application"},{id:"a910da7c",name:"List<Follower> FindUsersFollowers (string accountId) ",type:"ApplicationProcess",layer:"application"},{id:"59cb2834",name:"EntryPointController",type:"ApplicationComponent",layer:"application"},{id:"4d2a8269",name:"EntryPointRepresentation Get() {HTTP GET}",type:"ApplicationFunction",layer:"application"},{id:"cdf2a8ee",name:"Follower ",type:"ApplicationComponent",layer:"application"},{id:"f19bc08d",name:"FollowerId ",type:"DataObject",layer:"application"},{id:"a5715b56",name:"SocialTags[] ",type:"DataObject",layer:"application"},{id:"2a725037",name:"FollowerName ",type:"DataObject",layer:"application"},{id:"c1158b79",name:"Recommender",type:"ApplicationComponent",layer:"application"},{id:"79d9d56b",name:"List<string> GetRecommendedUsers(string accountId)",type:"ApplicationFunction",layer:"application"},{id:"c23476b6",name:"IRecommender",type:"ApplicationInterface",layer:"application"},{id:"53bfacee",name:"List<string> GetRecommendedUsers(string accountId)",type:"ApplicationFunction",layer:"application"},{id:"1f988cf9",name:"Follower ",type:"ApplicationComponent",layer:"application"},{id:"6256e972",name:"FollowerId ",type:"DataObject",layer:"application"},{id:"1a91d3c9",name:"SocialTags[] ",type:"DataObject",layer:"application"},{id:"fccbd006",name:"FollowerName ",type:"DataObject",layer:"application"},{id:"1e84dc44",name:"FollowerDirectoryClient",type:"ApplicationComponent",layer:"application"},{id:"a9521761",name:"List<Follower> FindUsersFollowers (string accountId)  ",type:"ApplicationProcess",layer:"application"},{id:"05142199",name:"WebApiConfig",type:"ApplicationComponent",layer:"application"},{id:"d6efe369",name:"Register (HttpConfiguration config)",type:"ApplicationFunction",layer:"application"},{id:"a8ee8795",name:"/accountmanagement -> EntryPointControler()",type:"ApplicationProcess",layer:"application"},{id:"aab2e980",name:"WebApiApplication",type:"ApplicationComponent",layer:"application"},{id:"28fe1ee0",name:"Application_Start()",type:"ApplicationFunction",layer:"application"},{id:"dac581b1",name:"set HAL-JSON as default",type:"ApplicationProcess",layer:"application"},{id:"d496da61",name:"EntryPointBaseUrl",type:"DataObject",layer:"application"},{id:"12f32271",name:"AccountsBaseUrl",type:"DataObject",layer:"application"},{id:"f1b548a3",name:"create JSON with links to entry points (accounts)",type:"ApplicationProcess",layer:"application"},{id:"44fcdd3d",name:"WebApiConfig ",type:"ApplicationComponent",layer:"application"},{id:"9c970f90",name:"Register (HttpConfiguration config) ",type:"ApplicationFunction",layer:"application"},{id:"ba0b2aa0",name:"/accountmanagement/accounts -> AccountsControler.index()",type:"ApplicationProcess",layer:"application"},{id:"73f26451",name:"accountmanagement/accounts/{accountId} -> AccountsControler.account()",type:"ApplicationProcess",layer:"application"},{id:"fe880ef5",name:"AccountsController",type:"ApplicationComponent",layer:"application"},{id:"2c9bd0fb",name:"AccountsRepresentation Index() {HTTP GET} ",type:"ApplicationFunction",layer:"application"},{id:"a7f46b71",name:"create JSON with links to Accounts",type:"ApplicationProcess",layer:"application"},{id:"eb8e3d27",name:"EntryPointBaseUrl ",type:"DataObject",layer:"application"},{id:"63f0fb70",name:"AccountsBaseUrl ",type:"DataObject",layer:"application"},{id:"551786c2",name:"Enable CORS",type:"ApplicationProcess",layer:"application"},{id:"073974d0",name:"AccountsRepresentation Account (string accountId) {HTTP GET}",type:"ApplicationFunction",layer:"application"},{id:"c69d7259",name:"create JSON with links to AccountFollowersMenu for Account by ID",type:"ApplicationProcess",layer:"application"},{id:"b8fb79cf",name:"AccountRepresentation",type:"ApplicationComponent",layer:"application"},{id:"8d892a42",name:"AccountId",type:"DataObject",layer:"application"},{id:"f5027502",name:"Name",type:"DataObject",layer:"application"},{id:"32f7af32",name:"accountmanagement/accounts/{accountId}/followers -> FollowersController.Index()",type:"ApplicationProcess",layer:"application"},{id:"149de91a",name:"FollowersController",type:"ApplicationComponent",layer:"application"},{id:"a7fa4d9f",name:"AccountsBaseUrl",type:"DataObject",layer:"application"},{id:"d2d5ff9b",name:"FollowersRepresentation Index (string accountId) {HTTP GET}",type:"ApplicationFunction",layer:"application"},{id:"75eaf240",name:"FollowersRepresentation",type:"ApplicationComponent",layer:"application"},{id:"764d4bcb",name:"followers[]",type:"DataObject",layer:"application"},{id:"49d7d048",name:"Name (copy)",type:"DataObject",layer:"application"},{id:"4c5a15e8",name:"create JSON with links to Followers",type:"ApplicationProcess",layer:"application"},{id:"42353705",name:"IndexPOST(string accountId, Follower follower)",type:"ApplicationFunction",layer:"application"},{id:"c3059711",name:"BeganFollowing",type:"ApplicationComponent",layer:"application"},{id:"0e0b4575",name:"AccountId",type:"DataObject",layer:"application"},{id:"37cc4cf0",name:"FollowerId",type:"DataObject",layer:"application"},{id:"1f3462e2",name:"sve to store",type:"ApplicationProcess",layer:"application"},{id:"75e6469b",name:"EventPersister",type:"ApplicationComponent",layer:"application"},{id:"4efb44bb",name:"PersistEvent(object ev)",type:"ApplicationFunction",layer:"application"},{id:"21fe1ef8",name:"config",type:"DataObject",layer:"application"},{id:"ac9ccc41",name:"accountmanagement/beganfollowing -> BeganFollowingController.Feed()",type:"DataObject",layer:"application"},{id:"06235a52",name:"BeganFollowingController",type:"ApplicationComponent",layer:"application"},{id:"9ac9c23e",name:"BeganFollowingBaseUrl",type:"DataObject",layer:"application"},{id:"be4d1b24",name:"HttpResponseMessage Feed() {HTTP GET}",type:"ApplicationFunction",layer:"application"},{id:"d3693fe1",name:"get from store",type:"ApplicationProcess",layer:"application"},{id:"a33114ab",name:"EventRetriever",type:"ApplicationComponent",layer:"application"},{id:"45ca7810",name:"IEnumerable<ResolvedEvent> RecentEvents(string stream)",type:"ApplicationFunction",layer:"application"},{id:"9095d7ca",name:"create ATOM with feeds",type:"ApplicationProcess",layer:"application"},{id:"ca0a40a9",name:"BeganFollowingPollingFeedConsumer",type:"ApplicationComponent",layer:"application"},{id:"4c2c51ec",name:"EntryPointUrl",type:"DataObject",layer:"application"},{id:"cb05e122",name:"LastEventIdProcessed",type:"DataObject",layer:"application"},{id:"b93dd2ac",name:"Main()",type:"ApplicationFunction",layer:"application"},{id:"acdb4e5d",name:"infinite loop",type:"ApplicationProcess",layer:"application"},{id:"d4767110",name:"get unprocessed event",type:"ApplicationProcess",layer:"application"},{id:"9480a96a",name:"FetchFeed()",type:"ApplicationFunction",layer:"application"},{id:"e8f50ee1",name:"call account context",type:"ApplicationProcess",layer:"application"},{id:"20dcbb18",name:"Technology Function",type:"TechnologyFunction",layer:"technology"},{id:"c325a498",name:"Technology Function",type:"TechnologyFunction",layer:"technology"},{id:"5014ebdb",name:"Technology Function",type:"TechnologyFunction",layer:"technology"},{id:"d0d4b84b",name:"network",type:"TechnologyService",layer:"technology"},{id:"3d07a689",name:"event store",type:"TechnologyFunction",layer:"technology"},{id:"3e1fe537",name:"account management",type:"Grouping",layer:"other"},{id:"037bfd41",name:"AccountManagement.Accounts. Api",type:"Grouping",layer:"other"},{id:"c2aa831d",name:" AccountManagement.EntryPoint.Api.Controllers",type:"Grouping",layer:"other"},{id:"46e885a0",name:"marketing",type:"Grouping",layer:"other"},{id:"bcc4903f",name:"User’s Homepage",type:"Grouping",layer:"other"},{id:"1e2e80cc",name:"Discovery",type:"Grouping",layer:"other"},{id:"821f3e6a",name:"Discovery.Recommendations.Followers",type:"Grouping",layer:"other"},{id:"f9b69534",name:"Discovery.Followers.BeganFollowingConsumer",type:"Grouping",layer:"other"},{id:"9fdc1d3c",name:"payment provider",type:"Grouping",layer:"other"},{id:"9e77e08a",name:"shipping provider",type:"Grouping",layer:"other"},{id:"b37b5820",name:"internet",type:"Grouping",layer:"other"},{id:"aee8a19e",name:"AccountManagement.EntryPoint.Api",type:"Grouping",layer:"other"},{id:"94446089",name:"AccountManagement.Accounts.Api.Controllers",type:"Grouping",layer:"other"},{id:"3f490911",name:"AccountManagement. RegularAccounts.BeganFollowing ",type:"Grouping",layer:"other"}],b=[{id:"fba59633",sourceId:"1e2e80cc",targetId:"f9b69534",type:"CompositionRelationship"},{id:"db1330eb",sourceId:"20dcbb18",targetId:"461a15da",type:"FlowRelationship"},{id:"fed9aa12",sourceId:"821f3e6a",targetId:"c23476b6",type:"CompositionRelationship"},{id:"3b90fcda",sourceId:"f9b69534",targetId:"1e84dc44",type:"CompositionRelationship"},{id:"19952c51",sourceId:"c325a498",targetId:"d0d4b84b",type:"AssociationRelationship"},{id:"32bbb763",sourceId:"e61924b1",targetId:"2272b3bb",type:"RealizationRelationship"},{id:"94805154",sourceId:"1f988cf9",targetId:"1a91d3c9",type:"AccessRelationship"},{id:"6c5ae185",sourceId:"cdf2a8ee",targetId:"a5715b56",type:"AccessRelationship"},{id:"02afbeb8",sourceId:"0c055819",targetId:"b3fca1fb",type:"AccessRelationship"},{id:"9bceea65",sourceId:"79d9d56b",targetId:"a9521761",type:"FlowRelationship"},{id:"19ee8e35",sourceId:"037bfd41",targetId:"0c055819",type:"CompositionRelationship"},{id:"ae95f948",sourceId:"3e1fe537",targetId:"c2aa831d",type:"CompositionRelationship"},{id:"8489923e",sourceId:"1e2e80cc",targetId:"821f3e6a",type:"CompositionRelationship"},{id:"6387d726",sourceId:"1e2e80cc",targetId:"5014ebdb",type:"CompositionRelationship"},{id:"0ec0b8d4",sourceId:"bcc4903f",targetId:"c325a498",type:"CompositionRelationship"},{id:"e840b968",sourceId:"1f988cf9",targetId:"fccbd006",type:"AccessRelationship"},{id:"af8a560a",sourceId:"1f988cf9",targetId:"6256e972",type:"AccessRelationship"},{id:"cd185f4e",sourceId:"037bfd41",targetId:"e61924b1",type:"CompositionRelationship"},{id:"274dfdb0",sourceId:"0c055819",targetId:"75ac705b",type:"AccessRelationship"},{id:"bc599d4c",sourceId:"20dcbb18",targetId:"d0d4b84b",type:"AssociationRelationship"},{id:"366259d2",sourceId:"3e1fe537",targetId:"20dcbb18",type:"CompositionRelationship"},{id:"4ef31a7c",sourceId:"c2aa831d",targetId:"59cb2834",type:"CompositionRelationship"},{id:"4cf71dc0",sourceId:"0c055819",targetId:"1f988cf9",type:"AssociationRelationship"},{id:"a0c4da51",sourceId:"cdf2a8ee",targetId:"f19bc08d",type:"AccessRelationship"},{id:"50d9c903",sourceId:"037bfd41",targetId:"2272b3bb",type:"CompositionRelationship"},{id:"fd674009",sourceId:"cdf2a8ee",targetId:"2a725037",type:"AccessRelationship"},{id:"a3066079",sourceId:"f9b69534",targetId:"1f988cf9",type:"CompositionRelationship"},{id:"528b9ba7",sourceId:"b37b5820",targetId:"d0d4b84b",type:"CompositionRelationship"},{id:"c2b2eb5d",sourceId:"0c055819",targetId:"c6eb43cd",type:"AccessRelationship"},{id:"861e68b3",sourceId:"c1158b79",targetId:"c23476b6",type:"RealizationRelationship"},{id:"1aa82c57",sourceId:"a9521761",targetId:"5014ebdb",type:"FlowRelationship"},{id:"955efd64",sourceId:"1e84dc44",targetId:"a9521761",type:"AssignmentRelationship"},{id:"c69e68ff",sourceId:"e61924b1",targetId:"a910da7c",type:"AssignmentRelationship"},{id:"6b6520c8",sourceId:"3e1fe537",targetId:"037bfd41",type:"CompositionRelationship"},{id:"898841d9",sourceId:"59cb2834",targetId:"4d2a8269",type:"AssignmentRelationship"},{id:"78588b88",sourceId:"c1158b79",targetId:"79d9d56b",type:"AssignmentRelationship"},{id:"17e05c85",sourceId:"c2aa831d",targetId:"cdf2a8ee",type:"CompositionRelationship"},{id:"40c070e0",sourceId:"821f3e6a",targetId:"c1158b79",type:"CompositionRelationship"},{id:"0aa8d98c",sourceId:"5014ebdb",targetId:"d0d4b84b",type:"AssociationRelationship"},{id:"e442217d",sourceId:"3e1fe537",targetId:"aee8a19e",type:"CompositionRelationship"},{id:"db6b53d8",sourceId:"aee8a19e",targetId:"05142199",type:"CompositionRelationship"},{id:"e11c9bc3",sourceId:"05142199",targetId:"d6efe369",type:"AssignmentRelationship"},{id:"96851528",sourceId:"d6efe369",targetId:"a8ee8795",type:"CompositionRelationship"},{id:"a8c792ce",sourceId:"aee8a19e",targetId:"aab2e980",type:"CompositionRelationship"},{id:"ceb62fc3",sourceId:"aab2e980",targetId:"28fe1ee0",type:"AssignmentRelationship"},{id:"dc37bf4a",sourceId:"28fe1ee0",targetId:"dac581b1",type:"CompositionRelationship"},{id:"a2169261",sourceId:"59cb2834",targetId:"d496da61",type:"AccessRelationship"},{id:"d2132295",sourceId:"59cb2834",targetId:"12f32271",type:"AccessRelationship"},{id:"bc4f9358",sourceId:"4d2a8269",targetId:"f1b548a3",type:"CompositionRelationship"},{id:"21d9fd04",sourceId:"f1b548a3",targetId:"d496da61",type:"AccessRelationship"},{id:"559be726",sourceId:"f1b548a3",targetId:"12f32271",type:"AccessRelationship"},{id:"99a86104",sourceId:"20dcbb18",targetId:"59cb2834",type:"FlowRelationship"},{id:"b88f7353",sourceId:"44fcdd3d",targetId:"9c970f90",type:"AssignmentRelationship"},{id:"483c0f06",sourceId:"9c970f90",targetId:"ba0b2aa0",type:"CompositionRelationship"},{id:"b5ddfd9d",sourceId:"037bfd41",targetId:"44fcdd3d",type:"CompositionRelationship"},{id:"bd577063",sourceId:"9c970f90",targetId:"73f26451",type:"CompositionRelationship"},{id:"a827cad4",sourceId:"fe880ef5",targetId:"63f0fb70",type:"AccessRelationship"},{id:"4be83721",sourceId:"a7f46b71",targetId:"63f0fb70",type:"AccessRelationship"},{id:"25be6b04",sourceId:"94446089",targetId:"fe880ef5",type:"CompositionRelationship"},{id:"60e15ff1",sourceId:"fe880ef5",targetId:"eb8e3d27",type:"AccessRelationship"},{id:"14ebad19",sourceId:"a7f46b71",targetId:"eb8e3d27",type:"AccessRelationship"},{id:"13e1b5b5",sourceId:"2c9bd0fb",targetId:"a7f46b71",type:"CompositionRelationship"},{id:"c882700f",sourceId:"fe880ef5",targetId:"2c9bd0fb",type:"AssignmentRelationship"},{id:"176c4bd5",sourceId:"3e1fe537",targetId:"94446089",type:"CompositionRelationship"},{id:"883a9631",sourceId:"9c970f90",targetId:"551786c2",type:"CompositionRelationship"},{id:"a56699d5",sourceId:"073974d0",targetId:"c69d7259",type:"CompositionRelationship"},{id:"14a12da1",sourceId:"fe880ef5",targetId:"073974d0",type:"AssignmentRelationship"},{id:"af661ec4",sourceId:"20dcbb18",targetId:"073974d0",type:"FlowRelationship"},{id:"59995056",sourceId:"3e1fe537",targetId:"b8fb79cf",type:"CompositionRelationship"},{id:"be37e177",sourceId:"b8fb79cf",targetId:"8d892a42",type:"AccessRelationship"},{id:"91acb3cc",sourceId:"b8fb79cf",targetId:"f5027502",type:"AccessRelationship"},{id:"a4d722a2",sourceId:"c69d7259",targetId:"63f0fb70",type:"AccessRelationship"},{id:"0a7447b7",sourceId:"9c970f90",targetId:"32f7af32",type:"CompositionRelationship"},{id:"b92ec0a0",sourceId:"94446089",targetId:"149de91a",type:"CompositionRelationship"},{id:"c88faa01",sourceId:"149de91a",targetId:"a7fa4d9f",type:"AccessRelationship"},{id:"07f862d1",sourceId:"149de91a",targetId:"d2d5ff9b",type:"AssignmentRelationship"},{id:"04a3dac7",sourceId:"4c5a15e8",targetId:"a7fa4d9f",type:"AccessRelationship"},{id:"e2bf9ed4",sourceId:"3e1fe537",targetId:"75eaf240",type:"CompositionRelationship"},{id:"8bb10ed1",sourceId:"75eaf240",targetId:"764d4bcb",type:"AccessRelationship"},{id:"981a0637",sourceId:"75eaf240",targetId:"49d7d048",type:"AccessRelationship"},{id:"8c441cb0",sourceId:"20dcbb18",targetId:"2c9bd0fb",type:"FlowRelationship"},{id:"2c47024d",sourceId:"20dcbb18",targetId:"d2d5ff9b",type:"FlowRelationship"},{id:"4509cf45",sourceId:"d2d5ff9b",targetId:"4c5a15e8",type:"CompositionRelationship"},{id:"6fa999c8",sourceId:"149de91a",targetId:"42353705",type:"AssignmentRelationship"},{id:"c2ff24a0",sourceId:"3e1fe537",targetId:"c3059711",type:"CompositionRelationship"},{id:"559f57d1",sourceId:"c3059711",targetId:"0e0b4575",type:"AccessRelationship"},{id:"d7f96c48",sourceId:"c3059711",targetId:"37cc4cf0",type:"AccessRelationship"},{id:"9c61f705",sourceId:"3e1fe537",targetId:"3d07a689",type:"CompositionRelationship"},{id:"a15e6928",sourceId:"42353705",targetId:"1f3462e2",type:"CompositionRelationship"},{id:"4a7ad951",sourceId:"1f3462e2",targetId:"4efb44bb",type:"FlowRelationship"},{id:"6f8bf964",sourceId:"3e1fe537",targetId:"75e6469b",type:"CompositionRelationship"},{id:"ec14b974",sourceId:"75e6469b",targetId:"4efb44bb",type:"AssignmentRelationship"},{id:"3701b1fa",sourceId:"75e6469b",targetId:"3d07a689",type:"AssociationRelationship"},{id:"38e94c01",sourceId:"20dcbb18",targetId:"42353705",type:"FlowRelationship"},{id:"d0027bbf",sourceId:"32f7af32",targetId:"149de91a",type:"AssociationRelationship"},{id:"63c9fb11",sourceId:"73f26451",targetId:"073974d0",type:"AssociationRelationship"},{id:"f49eba3b",sourceId:"ba0b2aa0",targetId:"2c9bd0fb",type:"AssociationRelationship"},{id:"fb6e111d",sourceId:"a8ee8795",targetId:"4d2a8269",type:"AssociationRelationship"},{id:"7b9d1ca5",sourceId:"3e1fe537",targetId:"3f490911",type:"CompositionRelationship"},{id:"e605a21a",sourceId:"3f490911",targetId:"21fe1ef8",type:"CompositionRelationship"},{id:"d00f2b3f",sourceId:"21fe1ef8",targetId:"ac9ccc41",type:"CompositionRelationship"},{id:"92c4f48a",sourceId:"3f490911",targetId:"06235a52",type:"CompositionRelationship"},{id:"fd4738b4",sourceId:"06235a52",targetId:"9ac9c23e",type:"AccessRelationship"},{id:"20d27c0a",sourceId:"06235a52",targetId:"be4d1b24",type:"AssignmentRelationship"},{id:"b053624e",sourceId:"be4d1b24",targetId:"d3693fe1",type:"CompositionRelationship"},{id:"145233b7",sourceId:"3e1fe537",targetId:"a33114ab",type:"CompositionRelationship"},{id:"7397ca2a",sourceId:"a33114ab",targetId:"45ca7810",type:"AssignmentRelationship"},{id:"6be3a7db",sourceId:"d3693fe1",targetId:"45ca7810",type:"FlowRelationship"},{id:"5cea3d2c",sourceId:"a33114ab",targetId:"3d07a689",type:"AssociationRelationship"},{id:"6f1c36dc",sourceId:"be4d1b24",targetId:"9095d7ca",type:"CompositionRelationship"},{id:"6f4563da",sourceId:"9095d7ca",targetId:"9ac9c23e",type:"AccessRelationship"},{id:"fc4029e2",sourceId:"ac9ccc41",targetId:"be4d1b24",type:"AssociationRelationship"},{id:"7816d6d1",sourceId:"f9b69534",targetId:"ca0a40a9",type:"CompositionRelationship"},{id:"1fd2d9fa",sourceId:"ca0a40a9",targetId:"4c2c51ec",type:"AccessRelationship"},{id:"0a4743ff",sourceId:"ca0a40a9",targetId:"cb05e122",type:"AccessRelationship"},{id:"cdb532e7",sourceId:"ca0a40a9",targetId:"b93dd2ac",type:"AssignmentRelationship"},{id:"1d2e8f2c",sourceId:"b93dd2ac",targetId:"acdb4e5d",type:"CompositionRelationship"},{id:"bc1fb16c",sourceId:"acdb4e5d",targetId:"d4767110",type:"CompositionRelationship"},{id:"9a96cf7c",sourceId:"ca0a40a9",targetId:"9480a96a",type:"AssignmentRelationship"},{id:"6e6f07b6",sourceId:"9480a96a",targetId:"4c2c51ec",type:"AccessRelationship"},{id:"c7546626",sourceId:"d4767110",targetId:"9480a96a",type:"FlowRelationship"},{id:"fa68cb78",sourceId:"9480a96a",targetId:"e8f50ee1",type:"CompositionRelationship"},{id:"2867a96f",sourceId:"e8f50ee1",targetId:"5014ebdb",type:"FlowRelationship"}],I=[{id:"d7b14242",name:"example",viewpoint:""}],f={identifier:e,archimateId:t,name:a,description:i,formats:o,source:c,sourceFile:n,sourceFormat:p,timestamp:d,tags:s,duplicates:r,language:l,elements:y,relationships:b,views:I};export{t as archimateId,f as default,i as description,r as duplicates,y as elements,o as formats,e as identifier,l as language,a as name,b as relationships,c as source,n as sourceFile,p as sourceFormat,s as tags,d as timestamp,I as views};