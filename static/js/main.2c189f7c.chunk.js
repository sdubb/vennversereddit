(this["webpackJsonpethereum-boilerplate"]=this["webpackJsonpethereum-boilerplate"]||[]).push([[0],{1003:function(e,t){},1004:function(e,t){},1028:function(e,t){},1030:function(e,t){},1045:function(e,t){},1047:function(e,t){},1063:function(e,t){},1081:function(e,t){},1083:function(e,t){},1101:function(e,t){},1102:function(e,t){},1170:function(e,t){},1176:function(e,t){},1177:function(e,t){},1464:function(e,t,n){},1517:function(e,t,n){},1598:function(e,t,n){},1599:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(72),s=n.n(c),i=n(50),o=n(692),l=n(69),u=n(1),d=n(5),p=a.a.createContext(),b=n(6);function y(e){var t=e.children,n=Object(i.b)(),a=n.web3,c=n.Moralis,s=n.user,o=Object(r.useState)(),l=Object(d.a)(o,2),u=l[0],y=l[1],j=Object(r.useState)(),f=Object(d.a)(j,2),x=f[0],h=f[1],m=Object(r.useState)('[{"anonymous": false, "inputs": [{"indexed": true, "internalType": "bytes32", "name": "categoryId", "type": "bytes32"}, {"indexed": false, "internalType": "string", "name": "category", "type": "string"}], "name": "CategoryCreated", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "bytes32", "name": "contentId", "type": "bytes32"}, {"indexed": false, "internalType": "string", "name": "contentUri", "type": "string"}], "name": "ContentAdded", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "bytes32", "name": "postId", "type": "bytes32"}, {"indexed": true, "internalType": "address", "name": "postOwner", "type": "address"}, {"indexed": true, "internalType": "bytes32", "name": "parentId", "type": "bytes32"}, {"indexed": false, "internalType": "bytes32", "name": "contentId", "type": "bytes32"}, {"indexed": false, "internalType": "bytes32", "name": "categoryId", "type": "bytes32"}], "name": "PostCreated", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "bytes32", "name": "postId", "type": "bytes32"}, {"indexed": true, "internalType": "address", "name": "postOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "voter", "type": "address"}, {"indexed": false, "internalType": "uint80", "name": "reputationPostOwner", "type": "uint80"}, {"indexed": false, "internalType": "uint80", "name": "reputationVoter", "type": "uint80"}, {"indexed": false, "internalType": "int40", "name": "postVotes", "type": "int40"}, {"indexed": false, "internalType": "bool", "name": "up", "type": "bool"}, {"indexed": false, "internalType": "uint8", "name": "reputationAmount", "type": "uint8"}], "name": "Voted", "type": "event"}, {"inputs": [{"internalType": "string", "name": "_category", "type": "string"}], "name": "addCategory", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "_parentId", "type": "bytes32"}, {"internalType": "string", "name": "_contentUri", "type": "string"}, {"internalType": "bytes32", "name": "_categoryId", "type": "bytes32"}], "name": "createPost", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "_categoryId", "type": "bytes32"}], "name": "getCategory", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "_contentId", "type": "bytes32"}], "name": "getContent", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "_postId", "type": "bytes32"}], "name": "getPost", "outputs": [{"internalType": "address", "name": "", "type": "address"}, {"internalType": "bytes32", "name": "", "type": "bytes32"}, {"internalType": "bytes32", "name": "", "type": "bytes32"}, {"internalType": "int72", "name": "", "type": "int72"}, {"internalType": "bytes32", "name": "", "type": "bytes32"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_address", "type": "address"}, {"internalType": "bytes32", "name": "_categoryID", "type": "bytes32"}], "name": "getReputation", "outputs": [{"internalType": "uint80", "name": "", "type": "uint80"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "_postId", "type": "bytes32"}, {"internalType": "uint8", "name": "_reputationTaken", "type": "uint8"}], "name": "voteDown", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bytes32", "name": "_postId", "type": "bytes32"}, {"internalType": "uint8", "name": "_reputationAdded", "type": "uint8"}], "name": "voteUp", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]'),O=Object(d.a)(m,2),g=O[0],v=O[1],w=Object(r.useState)("0xF92e45bFEFB0C0d8c1E2d0ffbFeA1089dE33657e"),I=Object(d.a)(w,2),S=I[0],T=I[1],k=Object(r.useState)({categoryId:"0x91",category:"default"}),C=Object(d.a)(k,2),A=C[0],N=C[1];return Object(r.useEffect)((function(){c.onChainChanged((function(e){h(e)})),c.onAccountsChanged((function(e){y(e[0])}))}),[]),Object(r.useEffect)((function(){var e;return h(null===(e=a.givenProvider)||void 0===e?void 0:e.chainId)})),Object(r.useEffect)((function(){var e;return y((null===(e=a.givenProvider)||void 0===e?void 0:e.selectedAddress)||(null===s||void 0===s?void 0:s.get("ethAddress")))}),[a,s]),Object(b.jsx)(p.Provider,{value:{walletAddress:u,chainId:x,selectedCategory:A,setSelectedCategory:N,contractABI:g,setContractABI:v,contractAddress:S,setContractAddress:T},children:t})}function j(){var e=a.a.useContext(p);if(void 0===e)throw new Error("useMoralisDapp must be used within a MoralisDappProvider");return e}new Intl.NumberFormat("en-us",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:6}),new Intl.NumberFormat("en-us",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:4}),new Intl.NumberFormat("en-us",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2});var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e?"".concat(e.substr(0,t),"...").concat(e.substr(e.length-t,e.length)):""},x=n(687),h=n.n(x);var m=function(e){var t=j().walletAddress;return(e.address||e.currentWallet)&&t?Object(b.jsx)(h.a,Object(u.a)({seed:e.currentWallet?t.toLowerCase():e.address.toLowerCase(),className:"identicon"},e)):null},O=n(1611),g=n(1610),v=n(277),w=(n(1464),{height:"36px",display:"flex",gap:"5px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"9px",alignItems:"center"});var I=function(e){var t=j().walletAddress,n=Object(r.useState)(),a=Object(d.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(!1),o=Object(d.a)(i,2),l=o[0],p=o[1];if(Object(r.useEffect)((function(){s((null===e||void 0===e?void 0:e.address)||t)}),[t,e]),!c)return null;var y=function(){return Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"#1780FF",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{cursor:"pointer"},onClick:function(){navigator.clipboard.writeText(c),p(!0)},children:[Object(b.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M15 3v4a1 1 0 0 0 1 1h4"}),Object(b.jsx)("path",{d:"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"}),Object(b.jsx)("path",{d:"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"}),Object(b.jsx)("title",{id:"copy-address",children:"Copy Address"})]})};return Object(b.jsxs)("div",{style:Object(u.a)(Object(u.a)({},w),e.style),children:["left"===e.avatar&&Object(b.jsx)(m,{address:c,size:7}),Object(b.jsx)("p",{children:e.size?f(c,e.size):c}),"right"===e.avatar&&Object(b.jsx)(m,{address:c,size:7}),e.copyable&&(l?Object(b.jsx)(S,{}):Object(b.jsx)(y,{}))]})},S=function(){return Object(b.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"3",stroke:"#21BF96",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(b.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M5 12l5 5l10 -10"}),Object(b.jsx)("title",{id:"copied-address",children:"Copied!"})]})},T=n(1614),k={"0x1":{currencySymbol:"ETH",blockExplorerUrl:"https://etherscan.io/",wrapped:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},"0x3":{currencySymbol:"ETH",blockExplorerUrl:"https://ropsten.etherscan.io/"},"0x4":{currencySymbol:"ETH",blockExplorerUrl:"https://kovan.etherscan.io/"},"0x2a":{currencySymbol:"ETH",blockExplorerUrl:"https://rinkeby.etherscan.io/"},"0x5":{currencySymbol:"ETH",blockExplorerUrl:"https://goerli.etherscan.io/"},"0x539":{chainName:"Local Chain",currencyName:"ETH",currencySymbol:"ETH",rpcUrl:"http://127.0.0.1:7545"},"0xa86a":{chainId:43114,chainName:"Avalanche Mainnet",currencyName:"AVAX",currencySymbol:"AVAX",rpcUrl:"https://api.avax.network/ext/bc/C/rpc",blockExplorerUrl:"https://cchain.explorer.avax.network/"},"0x38":{chainId:56,chainName:"Smart Chain",currencyName:"BNB",currencySymbol:"BNB",rpcUrl:"https://bsc-dataseed.binance.org/",blockExplorerUrl:"https://bscscan.com/",wrapped:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},"0x61":{chainId:97,chainName:"Smart Chain - Testnet",currencyName:"BNB",currencySymbol:"BNB",rpcUrl:"https://data-seed-prebsc-1-s1.binance.org:8545/",blockExplorerUrl:"https://testnet.bscscan.com/"},"0x89":{chainId:137,chainName:"Polygon Mainnet",currencyName:"MATIC",currencySymbol:"MATIC",rpcUrl:"https://rpc-mainnet.maticvigil.com/",blockExplorerUrl:"https://explorer-mainnet.maticvigil.com/",wrapped:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"},"0x13881":{chainId:80001,chainName:"Mumbai",currencyName:"MATIC",currencySymbol:"MATIC",rpcUrl:"https://rpc-mumbai.matic.today/",blockExplorerUrl:"https://mumbai.polygonscan.com/"}},C=function(e){var t;return null===(t=k[e])||void 0===t?void 0:t.blockExplorerUrl},A={account:{height:"42px",padding:"0 15px",display:"flex",justifyContent:"center",alignItems:"center",width:"fit-content",borderRadius:"12px",backgroundColor:"rgb(244, 244, 244)",cursor:"pointer"},text:{color:"#21BF96"}};var N=function(){var e=Object(i.b)(),t=e.authenticate,n=e.isAuthenticated,a=e.logout,c=j(),s=c.walletAddress,o=c.chainId,l=Object(r.useState)(!1),p=Object(d.a)(l,2),y=p[0],x=p[1];return n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{style:A.account,onClick:function(){return x(!0)},children:[Object(b.jsx)("p",{style:Object(u.a)({marginRight:"5px"},A.text),children:f(s,6)}),Object(b.jsx)(m,{currentWallet:!0,scale:3})]}),Object(b.jsxs)(O.a,{visible:y,footer:null,onCancel:function(){return x(!1)},bodyStyle:{padding:"15px",fontSize:"17px",fontWeight:"500"},style:{fontSize:"16px",fontWeight:"500"},width:"400px",children:["Account",Object(b.jsxs)(g.a,{style:{marginTop:"10px",borderRadius:"1rem"},bodyStyle:{padding:"15px"},children:[Object(b.jsx)(I,{avatar:"left",size:6,copyable:!0,style:{fontSize:"20px"}}),Object(b.jsx)("div",{style:{marginTop:"10px",padding:"0 10px"},children:Object(b.jsxs)("a",{href:"".concat(C(o),"/address/").concat(s),target:"_blank",rel:"noreferrer",children:[Object(b.jsx)(T.a,{style:{marginRight:"5px"}}),"View on Explorer"]})})]}),Object(b.jsx)(v.a,{size:"large",type:"primary",style:{width:"100%",marginTop:"10px",borderRadius:"0.5rem",fontSize:"16px",fontWeight:"500"},onClick:function(){a(),x(!1)},children:"Disconnect Wallet"})]})]}):Object(b.jsx)("div",{style:A.account,onClick:function(){return t({signingMessage:"Hello World!"})},children:Object(b.jsx)("p",{style:A.text,children:"Authenticate"})})},E=n(1609),F=(n(1516),n(1517),n(1613)),B={card:{boxShadow:"0 0.5rem 1.2rem rgb(189 197 209 / 20%)",backgroundColor:"white",border:"1px solid #e7eaf3",borderRadius:"0.5rem",fontSize:"16px",color:"#1F3947"}},M=function(e){var t=e.categories,n=j().setSelectedCategory;return Object(b.jsx)("div",{className:"col-lg-3",children:Object(b.jsx)(F.a,{onClick:function(e){return function(e){var r=t.filter((function(t){return t.categoryId===e}));n(r[0])}(e.key)},style:Object(u.a)(Object(u.a)({},B.card),{},{padding:"10px 0"}),mode:"inline",children:Object(b.jsx)(F.a.ItemGroup,{title:"Categories",children:t.map((function(e){return Object(b.jsx)(F.a.Item,{children:e.category},e.categoryId)}))},"categories")})})},U=n(3),_=n(12),z=n(4),D=n.n(z),W=n(695),P=n(339),R=n(1607),J=n(1612),H=n(1608),V=n(1615),L=n(1616),q=n(1617),X=n(1618),Z=n(434),Y=n.n(Z),G=function(e){var t=e.postId,n=Object(i.b)().Moralis,a=Object(r.useState)("0"),c=Object(d.a)(a,2),s=c[0],o=c[1],l=j(),u=l.contractABI,p=l.contractAddress,y=JSON.parse(u),f=Object(i.d)("Votes",(function(e){return e.equalTo("postId",t)}),[],{live:!0}).data,x={contractAddress:p,functionName:"getPost",abi:y,params:{_postId:t}};return Object(r.useEffect)((function(){function e(){return(e=Object(_.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.enableWeb3;case 2:return e.next=4,n.executeFunction(x);case 4:t=e.sent,o(t[3]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),Object(b.jsx)(b.Fragment,{children:s})},K=function(e){var t=e.post,n=t.contentId,a=t.postId,c=t.postOwner,s=Object(r.useState)({title:"default",content:"default"}),o=Object(d.a)(s,2),l=o[0],p=o[1],y=Object(i.d)("Contents",(function(e){return e.equalTo("contentId",n)})).data,f=Object(r.useState)(),x=Object(d.a)(f,2),h=x[0],O=x[1],g=Object(i.d)("Votes",(function(e){return e.equalTo("postId",a)}),[],{live:!0}).data,v=j(),w=v.walletAddress,I=v.contractABI,S=v.contractAddress,T=JSON.parse(I),k=Object(i.e)();function C(e){return A.apply(this,arguments)}function A(){return(A=Object(_.a)(D.a.mark((function e(n){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.toLowerCase()!==c.toLowerCase()){e.next=2;break}return e.abrupt("return",W.b.error("You cannot vote on your posts"));case 2:if(!h){e.next=4;break}return e.abrupt("return",W.b.error("Already voted"));case 4:return r={contractAddress:S,functionName:n,abi:T,params:Object(U.a)({_postId:t.postId},"voteDown"===n?"_reputationTaken":"_reputationAdded",1)},e.next=7,k.fetch({params:r,onSuccess:function(){return console.log("success")},onError:function(e){return console.error(e)}});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){function e(e){return JSON.parse(JSON.stringify(e,["contentUri"]))[0].contentUri}function t(e){return n.apply(this,arguments)}function n(){return(n=Object(_.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=t,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=Object(_.a)(D.a.mark((function n(){var r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(e(y));case 2:r=n.sent,p(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}y.length>0&&function(){r.apply(this,arguments)}()}),[y]),Object(r.useEffect)((function(){if(null===g||void 0===g||!g.length)return null;function e(){return(e=Object(_.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return JSON.parse(JSON.stringify(g)).forEach((function(e){var t=e.voter,n=e.up;t===w&&O(n?"liked":"disliked")})),e.abrupt("return");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g,w]);var N=[Object(b.jsx)(P.a,{title:"Vote Up",children:Object(b.jsxs)("span",{style:{fontSize:"15px",display:"flex",alignItems:"center",marginRight:"16px"},onClick:function(){return C("voteUp")},children:[Object(r.createElement)("liked"===h?V.a:L.a)," Vote Up"]})},"comment-basic-like"),Object(b.jsx)("span",{style:{fontSize:"15px"},children:Object(b.jsx)(G,{postId:a})}),Object(b.jsx)(P.a,{title:"Dislike",children:Object(b.jsxs)("span",{style:{fontSize:"15px",display:"flex",alignItems:"center",marginLeft:"8px"},onClick:function(){return C("voteDown")},children:[Object(r.createElement)("disliked"===h?q.a:X.a)," Vote Down"]})},"comment-basic-dislike")],E=Object(b.jsx)(R.a,{style:Object(u.a)(Object(u.a)({},B.card),{},{padding:"0px 15px",marginBottom:"10px"}),actions:N,author:Object(b.jsx)(Y.a,{strong:!0,children:t.postOwner}),avatar:Object(b.jsx)(J.a,{src:Object(b.jsx)(m,{address:t.postOwner,scale:"4"})}),content:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Y.a,{strong:!0,style:{fontSize:"20px",color:"#333"},children:l.title}),Object(b.jsx)("p",{style:{fontSize:"15px",color:"#111"},children:l.content}),Object(b.jsx)(H.a,{style:{margin:"15px 0"}})]})});return"default"===l.title?"":E},Q=function(){var e=j().selectedCategory,t=Object(i.d)("Posts",(function(t){return t.equalTo("categoryId",e.categoryId)}),[e],{live:!0}),n=JSON.parse(JSON.stringify(t.data,["postId","contentId","postOwner"])).reverse(),r=n.length>0,a=Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Be the first to post here for"}),Object(b.jsxs)("h3",{children:[e.category," "]})]}),c=Object(b.jsx)("div",{children:n.map((function(e){return Object(b.jsx)(K,{post:e},e.postId)}))});return r?c:a},$=function(){var e=Object(i.b)().Moralis,t=j(),n=t.walletAddress,a=t.contractABI,c=t.contractAddress,s=t.selectedCategory,o=Object(r.useState)(0),l=Object(d.a)(o,2),u=l[0],p=l[1],y=JSON.parse(a),f=Object(i.d)("Votes",(function(e){return e.equalTo("postOwner",n)}),[],{live:!0}).data,x=s.categoryId,h={contractAddress:c,functionName:"getReputation",abi:y,params:{_address:n,_categoryID:x}};return Object(r.useEffect)((function(){function t(){return(t=Object(_.a)(D.a.mark((function t(){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.enableWeb3();case 2:return t.next=4,e.executeFunction(h);case 4:n=t.sent,p(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[f,n,x]),Object(b.jsx)(b.Fragment,{children:u})},ee=function(){var e=j(),t=e.contractABI,n=e.contractAddress,a=e.selectedCategory,c=JSON.parse(t),s=Object(i.c)(),o=Object(i.e)(),l=Object(r.useState)(""),u=Object(d.a)(l,2),p=u[0],y=u[1],f=Object(r.useState)(""),x=Object(d.a)(f,2),h=x[0],m=x[1];function O(){return(O=Object(_.a)(D.a.mark((function e(t){var r,s,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return r=e.sent,s=a.categoryId,i={contractAddress:n,functionName:"createPost",abi:c,params:{_parentId:"0x91",_contentUri:r,_categoryId:s}},e.next=7,o.fetch({params:i,onSuccess:function(){return W.b.success("success")},onError:function(e){return W.b.error(e)}});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(){var e=Object(_.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.saveFile("post.json",{base64:btoa(JSON.stringify(t))},{saveIPFS:!0});case 2:return n=e.sent,e.abrupt("return",n._ipfs);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),!p||!h)return W.b.error("Remember to add the title and the content of your post");!function(e){O.apply(this,arguments)}({title:p,content:h}),y(""),m("")},children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("input",{type:"text",className:"mb-2 mt-2 form-control",placeholder:"Title",value:p,onChange:function(e){return y(e.target.value)}}),Object(b.jsx)("textarea",{type:"text",className:"mb-2 form-control",placeholder:"Post away",rows:"5",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-dark ",children:"Submit"})]})})},te=function(){var e=j().selectedCategory,t=Object(r.useState)(!1),n=Object(d.a)(t,2),a=n[0],c=n[1];return"default"===e.category?Object(b.jsx)("div",{className:"col-lg-9",children:Object(b.jsx)("h3",{children:"Choose a Category"})}):Object(b.jsxs)("div",{className:"col-lg-9",children:[Object(b.jsxs)("div",{style:Object(u.a)(Object(u.a)({},B.card),{},{padding:"10px 13px",display:"flex",alignItems:"center",justifyContent:"space-between"}),children:[Object(b.jsx)(J.a,{src:Object(b.jsx)(m,{currentWallet:!0})}),Object(b.jsxs)("h4",{children:[" Your Reputation in ",e.category," is ",Object(b.jsx)($,{})," "]}),Object(b.jsx)(v.a,{shape:"round",onClick:function(){c(!a)},children:"Post"})]}),a?Object(b.jsx)(ee,{}):"",Object(b.jsx)(Q,{})]})},ne=function(){var e=Object(i.d)("Categories"),t=JSON.parse(JSON.stringify(e.data,["categoryId","category"]));return console.log(t),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{style:{display:"flex",fontFamily:"Roboto, sans-serif",color:"#041836",padding:"10px 30px",maxWidth:"1200px",width:"100%",gap:"20px"},children:[Object(b.jsx)(M,{categories:t}),Object(b.jsx)(te,{})]})})},re=E.a.Header,ae={content:{display:"flex",justifyContent:"center",fontFamily:"Roboto, sans-serif",color:"#041836",marginTop:"130px",padding:"10px"},header:{position:"fixed",zIndex:1,width:"100%",background:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"Roboto, sans-serif",borderBottom:"2px solid rgba(0, 0, 0, 0.06)",padding:"0 10px",boxShadow:"0 1px 10px rgb(151 164 175 / 10%)"},headerRight:{display:"flex",gap:"20px",alignItems:"center",fontSize:"15px",fontWeight:"600"}},ce=function(){return Object(b.jsx)("h4",{children:"Decentradit"})},se=function(e){e.isServerInfo;var t=Object(i.b)(),n=t.isWeb3Enabled,a=t.enableWeb3,c=t.isAuthenticated,s=t.isWeb3EnableLoading;return Object(r.useEffect)((function(){!c||n||s||a()}),[c,n]),Object(b.jsx)(E.a,{style:{height:"100vh",overflow:"auto"},children:Object(b.jsxs)(o.a,{children:[Object(b.jsxs)(re,{style:ae.header,children:[Object(b.jsx)(ce,{}),Object(b.jsx)("div",{style:ae.headerRight,children:Object(b.jsx)(N,{})})]}),Object(b.jsxs)("div",{style:ae.content,children:[Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/main",children:Object(b.jsx)(ne,{})}),Object(b.jsx)(l.b,{path:"/nonauthenticated",children:Object(b.jsx)("h3",{children:'Please login using the "Authenticate" button'})})]}),c?Object(b.jsx)(l.a,{to:"/main"}):Object(b.jsx)(l.a,{to:"/nonauthenticated"})]})]})})},ie=(n(1598),"j6Z3oog7Wnbp1gi9fdPd3vq3TMHZZtfXfBg15D2a"),oe="https://zjbdpfvclpwo.usemoralis.com:2053/server",le=function(){return Object(b.jsx)(i.a,{appId:ie,serverUrl:oe,children:Object(b.jsx)(y,{children:Object(b.jsx)(se,{isServerInfo:!0})})})};s.a.render(Object(b.jsx)(le,{}),document.getElementById("root"))},995:function(e,t){},997:function(e,t){},999:function(e,t){}},[[1599,1,2]]]);
//# sourceMappingURL=main.2c189f7c.chunk.js.map