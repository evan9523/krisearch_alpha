(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{271:function(e,t,a){"use strict";a.d(t,"a",(function(){return U}));var n=a(13),r=a.n(n),o=a(0),i=a.n(o),l=a(17),c=a(3),s=a(14),m=a(2),d=a(26),f=a(232),g=a(432),h=a(433),u=a(29),p=a(39),y=a(426);function E(e){return e.length>20?e=e.substring(0,19)+"...":e}function w(e){var t=e.name,a=e.avatar,n=e.crop,r=e.phone,o=e.address,c=e.onPress,f=e.cropAvatar,g=l.a.get("window").width;return i.a.createElement(d.a,{onPress:function(){return c()}},i.a.createElement(m.a,{style:g>767?{width:200,height:185,backgroundColor:"#fff",borderWidth:1,borderColor:"#fff",borderRadius:10,alignItems:"center",margin:5,marginBottom:5,shadowColor:"#98A0FF",shadowOffset:{width:0,height:3},shadowOpacity:.15,shadowRadius:2.22,elevation:3}:{width:.45*g,height:185,backgroundColor:"#fff",borderWidth:1,borderColor:"#fff",borderRadius:10,alignItems:"center",margin:5,marginBottom:5,shadowColor:"#98A0FF",shadowOffset:{width:0,height:3},shadowOpacity:.15,shadowRadius:2.22,elevation:3}},i.a.createElement(u.a,{source:{uri:a},style:{width:100,height:100,borderWidth:1,borderColor:"#fff",borderRadius:100}}),i.a.createElement(s.a,{style:{fontWeight:"500",marginTop:10}},E(t)),i.a.createElement(m.a,{style:{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:10}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center"}},i.a.createElement(u.a,{source:{uri:f},style:{height:15,width:15,borderColor:"green",borderWidth:1,borderRadius:15}}),i.a.createElement(s.a,null," ",n)),i.a.createElement(y.a,{name:"dot-single",size:15,style:{top:10}}),i.a.createElement(m.a,null,i.a.createElement(s.a,null,o))),i.a.createElement(m.a,null,i.a.createElement(s.a,null,r))))}var b=a(427),C=a(45),S=a(8),v=a(70);var F=function(e){var t=e.visible,a=e.onHit,n=e.tapper,l=(e.isFocused,e.holderValue),c=Object(o.useState)(!1),s=r()(c,2),f=(s[0],s[1],[]);return i.a.createElement(m.a,{style:{backgroundColor:n?"#fff":"transparent",height:"80%"}},i.a.createElement(m.a,{style:{backgroundColor:"#fff",height:55,width:"100%",alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:8,padding:5,shadowColor:"#98A0FF",shadowOffset:{width:0,height:4},shadowOpacity:.32,shadowRadius:5.46,elevation:9}},i.a.createElement(C.a,{style:"web"===S.a.OS&&{outlineColor:"#fff",height:40,backgroundColor:"white",width:"75%",padding:5,fontSize:20},onFocus:a,placeholder:l,autoFocus:t,editable:t,onChangeText:function(e){var t=e.toLowerCase();console.log(t);var a=[],n=[];v.map((function(e,t){return a.push(e.name)})),v.map((function(e,t){return n.push(e.type)})),console.log(a);for(var r=0;r<a.length;r++){var o=a[r].toLowerCase();n[r].toLowerCase();1==o.includes(t)&&(f.push(a[r]),console.log("New Data : "+f))}}}),i.a.createElement(m.a,{style:{flexDirection:"row",justifyContent:"space-between"}},i.a.createElement(d.a,null,i.a.createElement(m.a,{style:{width:35,height:35,borderColor:"#8790FF",alignItems:"center",justifyContent:"center",backgroundColor:"#3A48ED",borderRadius:35}},i.a.createElement(b.a,{name:"magnifier",size:20,color:"#fff"}))))),i.a.createElement(m.a,null))};var j=function(e){var t=Object(o.useState)(null),n=r()(t,2),l=(n[0],n[1],e.scrolled,e.visible,e.headerTap),c=e.headHolder;return i.a.createElement(m.a,{style:{width:"100%",height:100,alignItems:"center",alignSelf:"center",flexDirection:"column",justifyContent:"space-evenly"}},i.a.createElement(m.a,{style:{marginTop:40,alignItems:"center"}},i.a.createElement(u.a,{source:a(390),style:{width:100,height:50}})),i.a.createElement(s.a,{style:{padding:5,fontWeight:"400",marginTop:-10}},"Discover the ones who grow our food. Connect with them personally."),i.a.createElement(m.a,{style:{marginTop:5,width:"100%"}},i.a.createElement(F,{onHit:l,holderValue:c})))},x=a(98),D=a(87),k=a(428),z=a(434),I=a(429);function A(e){var t=[];return t=e.toString().split(""),console.log(t),t.splice(1,0,"X"),t.splice(3,2,"X"),t.splice(6,5,"X"),t.splice(1,0,"X"),console.log("New A"+t),t}var O=a(113);function R(e){var t=e.navigation,a=Object(o.useState)(!1),n=r()(a,2),c=(n[0],n[1],Object(o.useState)(!1)),f=r()(c,2),g=(f[0],f[1],Object(o.useState)({isLoading:!0,crops:[]})),h=r()(g,2),C=(h[0],h[1],Object(o.useState)(0)),S=r()(C,2),F=S[0],R=S[1],L=Object(o.useState)(!1),W=r()(L,2),T=(W[0],W[1],l.a.get("window").height),P=l.a.get("window").width,q=Object(o.useRef)(null);var H=[];var B=.86*l.a.get("window").height;return i.a.createElement(m.a,{style:{height:.97*T,backgroundColor:"#EAEAFF"}},i.a.createElement(m.a,{style:{padding:6,height:"100%"}},i.a.createElement(j,{headerTap:function(){return t.navigate("Search")},headHolder:"Search for crops..."}),i.a.createElement(s.a,{style:{marginTop:60,padding:5,fontWeight:"500",color:"#6F6F6F"}},"Trending Farmers"),i.a.createElement(p.a,{contentContainerStyle:{flexDirection:"row",width:P>767?"90%":"100%",flexWrap:"wrap",marginTop:0,alignItems:"flex-start",alignSelf:"center",justifyContent:"flex-start"},showsVerticalScrollIndicator:!1,bounces:!0},x.map((function(e,t){return i.a.createElement(w,{key:e.id,name:e.name,avatar:e.avatar,phone:e.phone,address:e.address,crop:e.crop,onPress:function(){var t;R(e.id),function(){var e;null==(e=q.current)||e.open()}(),t=e.id,x.map((function(e,a){if(t!=e.id)return i.a.createElement(s.a,null,"No Data found");H.push(e.id,e.name,e.address,e.avatar,e.crop,e.phone),console.log(H)}))},cropAvatar:e.image})}))),i.a.createElement(D.Modalize,{ref:q,modalHeight:B,threshold:100,modalStyle:P>767?{width:500,alignSelf:"center"}:null,closeOnOverlayTap:!0,mod:!0},x.map((function(e,t){if(F==e.id)return i.a.createElement(m.a,null,i.a.createElement(m.a,{style:{backgroundColor:"#3A48ED",width:"100%",height:190,borderWidth:1,top:-2,borderRadius:15,borderColor:"#3A48ED",shadowColor:"#000",shadowOffset:{width:0,height:4},shadowOpacity:.32,shadowRadius:5.46,elevation:9}},i.a.createElement(d.a,{onPress:function(){return function(){var e;null==(e=q.current)||e.close()}()},style:{alignItems:"center",marginTop:10,marginRight:2,padding:5,justifyContent:"center",alignSelf:"flex-end",backgroundColor:"#9F99FF",borderRadius:"100%",height:35,width:35}},i.a.createElement(b.a,{name:"close",size:25,color:"#fff"})),i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:2,top:-10}},i.a.createElement(m.a,{style:{width:"40%",height:"100%",padding:5}},i.a.createElement(u.a,{source:{uri:e.avatar},style:{height:120,width:120,borderRadius:120,borderColor:"#fff",borderWidth:2}})),i.a.createElement(m.a,{style:{flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",width:"60%",height:"100%"}},i.a.createElement(m.a,{style:{flexDirection:"column",alignItems:"flex-start",width:"100%",height:"100%",justifyContent:"space-evenly"}},i.a.createElement(m.a,{style:{flexDirection:"row"}},i.a.createElement(k.a,{name:"user",size:20,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",fontWeight:"700",marginLeft:5}},E(e.name))),i.a.createElement(m.a,{style:{flexDirection:"row"}},i.a.createElement(k.a,{name:"map-pin",size:20,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",fontWeight:"700",marginLeft:5}},e.address)),i.a.createElement(m.a,{style:{flexDirection:"row"}},i.a.createElement(k.a,{name:"user",size:20,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",fontWeight:"700",marginLeft:5}},A(e.phone)))))),i.a.createElement(m.a,{style:{top:-40}},i.a.createElement(s.a,{style:{marginTop:60,padding:5,fontWeight:"500",color:"#6F6F6F",fontSize:20,marginLeft:5}},"Farming Details"),i.a.createElement(m.a,{style:{width:"95%",alignSelf:"center",height:1,backgroundColor:"#C0C0C0"}}),i.a.createElement(m.a,{style:{flexDirection:"column",marginTop:10,padding:10,height:180,justifyContent:"space-between"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between",marginBottom:10}},i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(y.a,{name:"leaf",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",fontWeight:"600"}},"Crop")),i.a.createElement(m.a,null,v.map((function(t,a){var n,r=t.name.toLowerCase(),o=null==(n=e.crop)?void 0:n.toLowerCase();r.localeCompare(o);if(r==o)return i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(u.a,{source:{uri:t.image},style:{height:30,width:30,borderWidth:1,borderRadius:30,borderColor:"#3ECF8E"}}),i.a.createElement(s.a,{style:{fontSize:30,marginLeft:5}},t.name))})))),i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%",alignItems:"flex-end"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(b.a,{name:"calendar",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",marginLeft:5,fontWeight:"600"}},"Harvest Date")),i.a.createElement(m.a,null,i.a.createElement(s.a,{style:{fontSize:30,marginLeft:5}},e.harvestDate)))),i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between",marginTop:5}},i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(b.a,{name:"size-fullscreen",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",fontWeight:"600",marginLeft:5}},"Farming Area")),i.a.createElement(m.a,null,i.a.createElement(s.a,{style:{fontSize:30}},e.area," Kattha"))),i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%",alignItems:"flex-end"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(b.a,{name:"speedometer",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",marginLeft:5,fontWeight:"600"}},"Quantity")),i.a.createElement(m.a,null,i.a.createElement(s.a,{style:{fontSize:30,marginLeft:5}},e.quantity," quintal")))),i.a.createElement(m.a,null)),i.a.createElement(m.a,{style:{width:"95%",alignSelf:"center",height:1,backgroundColor:"#C0C0C0",marginTop:10}})),i.a.createElement(m.a,{style:{width:"100%",flexDirection:"column",top:-29,alignItems:"center"}},i.a.createElement(s.a,{style:{fontSize:15,color:"#808080",marginLeft:5}},"Coming soon"),i.a.createElement(m.a,{style:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",top:5}},i.a.createElement(d.a,{style:{width:120,height:50,backgroundColor:"#A9A9A9",alignItems:"center",justifyContent:"center",flexDirection:"row",borderRadius:10},onPress:function(){return alert("Click to chat feature helps you connect directly to this farmer in one click. Feature Coming soon !")}},i.a.createElement(z.a,{name:"whatsapp",size:25,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",marginLeft:5}},"Chat")),i.a.createElement(d.a,{style:{width:120,height:50,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",flexDirection:"row",borderRadius:10,borderColor:"#A9A9A9",borderWidth:2},onPress:function(){return alert("Support the farmer by any kind. Feature Coming Soon !")}},i.a.createElement(I.a,{name:"handshake-o",size:25,color:"#A9A9A9"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#A9A9A9",marginLeft:5}},"Support"))))))})))),i.a.createElement(m.a,{style:{width:"100%",backgroundColor:"transparent",height:50,top:-42}},i.a.createElement(O.a,{position:"center",overlayColor:"transparent",color:"#3A48ED",floatingIcon:i.a.cloneElement(i.a.createElement(b.a,{name:"magnifier",color:"#fff",size:30})),onPressMain:function(){return t.navigate("Search")}})))}c.a.create({container:{flex:1,backgroundColor:"#EAEAFF",alignItems:"center",justifyContent:"center"}});var L=a(127),W=function(e){var t=Object(o.useRef)(null),a=.99*l.a.get("window").height;e.showModal;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{onPress:function(){var e;null==(e=t.current)||e.open()}},i.a.createElement(s.a,null,"Open the modal")),i.a.createElement(D.Modalize,{ref:t,modalHeight:a,threshold:100,closeOnOverlayTap:!0,childrenStyle:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},modalStyle:{backgroundColor:"red"}},i.a.createElement(d.a,{onPress:function(){return function(){var e;null==(e=t.current)||e.close()}()}},"Press here")))};function T(e){var t=e.navigation;return i.a.createElement(p.a,{showsVerticalScrollIndicator:!1},i.a.createElement(m.a,null,i.a.createElement(m.a,{style:[P.container,{justifyContent:"center",alignContent:"flex-start",padding:10}]},i.a.createElement(s.a,null,"Krisearch")),i.a.createElement(m.a,{style:{width:"100%",backgroundColor:"red",padding:5,height:60,justifyContent:"space-between",top:20,flexDirection:"column"}},i.a.createElement(s.a,{style:{fontSize:16,color:"#3A48ED"}},"Namaste"),i.a.createElement(s.a,{style:{fontSize:16,color:"#14142B",fontWeight:"bold"}},"Lets discover farmers"),i.a.createElement(L.a,{title:"GO to Search",onPress:function(){return t.navigate("Search")}})),i.a.createElement(m.a,{style:{marginTop:50,padding:6,height:"100%"}},i.a.createElement(s.a,null,"We are in Profile"),i.a.createElement(W,null))))}var P=c.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),q=a(430),H=a(435),B=a(128),M=a(181),_=l.a.get("window").height,J=.86*l.a.get("window").height,N=l.a.get("window").width;function G(e){var t=e.navigation,a=Object(o.useState)(!0),n=r()(a,2),f=n[0],g=n[1],h=Object(o.useState)(""),C=r()(h,2),F=C[0],R=C[1],L=Object(o.useState)(!1),W=r()(L,2),T=W[0],P=W[1],G=Object(o.useState)(0),Q=r()(G,2),K=Q[0],Y=Q[1],Z=Object(o.useState)(!1),U=r()(Z,2),X=(U[0],U[1],Object(o.useState)(!1)),$=r()(X,2),ee=($[0],$[1],Object(o.useState)("")),te=r()(ee,2),ae=(te[0],te[1],v.filter((function(e){return e.name.toLocaleLowerCase().includes(F.toLowerCase())}))),ne=x.filter((function(e){return e.crop.toLocaleLowerCase().includes(F.toLowerCase())})),re=(ne.filter((function(e){return e.gender.toLocaleLowerCase().includes(F.toLowerCase())})),Object(o.useRef)(null));return i.a.createElement(m.a,{style:{backgroundColor:"red ",flexDirection:"column"}},i.a.createElement(m.a,{style:{height:_,backgroundColor:"#EAEAFF"}},i.a.createElement(m.a,{style:{padding:6,height:"100%"}},i.a.createElement(j,{headerTap:function(){return g(!f)},headHolder:T?F:"Search"}),T?i.a.createElement(s.a,{style:{marginTop:60,padding:5,fontWeight:"500",color:"#6F6F6F"}},ne.length,' results found for "',F,'"'):i.a.createElement(s.a,{style:{marginTop:60,padding:5,fontWeight:"500",color:"#6F6F6F"}},"Search"),i.a.createElement(p.a,{contentContainerStyle:{flexDirection:"row",width:N>767?"90%":"100%",flexWrap:"wrap",marginTop:0,alignItems:"flex-start",alignSelf:"center",justifyContent:"flex-start"},showsVerticalScrollIndicator:!1,bounces:!0},ne.map((function(e,t){return i.a.createElement(w,{key:e.id,name:e.name,avatar:e.avatar,phone:e.phone,address:e.address,crop:e.crop,onPress:function(){Y(e.id),function(){var e;null==(e=re.current)||e.open()}()},cropAvatar:e.image})}))),i.a.createElement(D.Modalize,{ref:re,modalHeight:J,modalStyle:N>767?{width:500,alignSelf:"center"}:null,threshold:100,closeOnOverlayTap:!0,mod:!0},ne.map((function(e,t){if(K==e.id)return i.a.createElement(m.a,null,i.a.createElement(m.a,{style:{backgroundColor:"#3A48ED",width:"100%",height:190,borderWidth:1,top:-2,borderRadius:15,borderColor:"#3A48ED",shadowColor:"#000",shadowOffset:{width:0,height:4},shadowOpacity:.32,shadowRadius:5.46,elevation:11}},i.a.createElement(d.a,{onPress:function(){return function(){var e;null==(e=re.current)||e.close()}()},style:{alignItems:"center",marginTop:10,marginRight:2,padding:5,justifyContent:"center",alignSelf:"flex-end",backgroundColor:"#9F99FF",borderRadius:"100%",height:35,width:35}},i.a.createElement(b.a,{name:"close",size:25,color:"#fff"})),i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:2,top:-10}},i.a.createElement(m.a,{style:{width:"40%",height:"100%",padding:5}},i.a.createElement(u.a,{source:{uri:e.avatar},style:{height:120,width:120,borderRadius:120,borderColor:"#fff",borderWidth:2}})),i.a.createElement(m.a,{style:{flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",width:"60%",height:"100%"}},i.a.createElement(m.a,{style:{flexDirection:"column",alignItems:"flex-start",width:"100%",height:"100%",justifyContent:"space-evenly"}},i.a.createElement(m.a,{style:{flexDirection:"row"}},i.a.createElement(k.a,{name:"user",size:20,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",fontWeight:"700",marginLeft:5}},E(e.name))),i.a.createElement(m.a,{style:{flexDirection:"row"}},i.a.createElement(k.a,{name:"map-pin",size:20,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",fontWeight:"700",marginLeft:5}},e.address)),i.a.createElement(m.a,{style:{flexDirection:"row"}},i.a.createElement(k.a,{name:"user",size:20,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",fontWeight:"700",marginLeft:5}},A(e.phone)))))),i.a.createElement(m.a,{style:{top:-40}},i.a.createElement(s.a,{style:{marginTop:60,padding:5,fontWeight:"500",color:"#6F6F6F",fontSize:20,marginLeft:5}},"Farming Details"),i.a.createElement(m.a,{style:{width:"95%",alignSelf:"center",height:1,backgroundColor:"#C0C0C0"}}),i.a.createElement(m.a,{style:{flexDirection:"column",marginTop:10,padding:10,height:180,justifyContent:"space-between"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between",marginBottom:10}},i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(y.a,{name:"leaf",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",fontWeight:"600"}},"Crop")),i.a.createElement(m.a,null,v.map((function(t,a){var n,r=t.name.toLowerCase(),o=null==(n=e.crop)?void 0:n.toLowerCase();r.localeCompare(o);if(r==o)return i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(u.a,{source:{uri:t.image},style:{height:30,width:30,borderWidth:1,borderRadius:30,borderColor:"#3ECF8E"}}),i.a.createElement(s.a,{style:{fontSize:30,marginLeft:5}},t.name))})))),i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%",alignItems:"flex-end"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(b.a,{name:"calendar",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",marginLeft:5,fontWeight:"600"}},"Harvest Date")),i.a.createElement(m.a,null,i.a.createElement(s.a,{style:{fontSize:30,marginLeft:5}},e.harvestDate)))),i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center",width:"100%",justifyContent:"space-between",marginTop:5}},i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(b.a,{name:"size-fullscreen",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",fontWeight:"600",marginLeft:5}},"Farming Area")),i.a.createElement(m.a,null,i.a.createElement(s.a,{style:{fontSize:30}},e.area," Kattha"))),i.a.createElement(m.a,{style:{flexDirection:"column",width:"50%",alignItems:"flex-end"}},i.a.createElement(m.a,{style:{flexDirection:"row",alignItems:"center"}},i.a.createElement(b.a,{name:"speedometer",size:20,color:"#9F99FF"}),i.a.createElement(s.a,{style:{fontSize:12,color:"#6F6F6F",marginLeft:5,fontWeight:"600"}},"Quantity")),i.a.createElement(m.a,null,i.a.createElement(s.a,{style:{fontSize:30,marginLeft:5}},e.quantity," quintal")))),i.a.createElement(m.a,null)),i.a.createElement(m.a,{style:{width:"95%",alignSelf:"center",height:1,backgroundColor:"#C0C0C0",marginTop:10}})),i.a.createElement(m.a,{style:{width:"100%",flexDirection:"column",top:-29,alignItems:"center"}},i.a.createElement(s.a,{style:{fontSize:15,color:"#808080",marginLeft:5}},"Coming soon"),i.a.createElement(m.a,{style:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",top:5}},i.a.createElement(d.a,{style:{width:120,height:50,backgroundColor:"#A9A9A9",alignItems:"center",justifyContent:"center",flexDirection:"row",borderRadius:10},onPress:function(){return alert("Click to chat feature helps you connect directly to this farmer in one click. Feature Coming soon !")}},i.a.createElement(z.a,{name:"whatsapp",size:25,color:"#fff"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#fff",marginLeft:5}},"Chat")),i.a.createElement(d.a,{style:{width:120,height:50,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",flexDirection:"row",borderRadius:10,borderColor:"#A9A9A9",borderWidth:2},onPress:function(){return alert("Support the farmer by any kind. Feature Coming Soon !")}},i.a.createElement(I.a,{name:"handshake-o",size:25,color:"#A9A9A9"}),i.a.createElement(s.a,{style:{fontSize:20,color:"#A9A9A9",marginLeft:5}},"Support"))))))}))))),i.a.createElement(B.a,null,i.a.createElement(O.a,{position:"center",overlayColor:"transparent",color:"#3A48ED",floatingIcon:i.a.cloneElement(i.a.createElement(b.a,{name:"magnifier",color:"#fff",size:30})),onPressMain:function(){return g(!0)}})),f?i.a.createElement(m.a,{style:{width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.85)",position:"absolute"}},i.a.createElement(H.a,{tint:"dark",intensity:40,style:[c.a.absoluteFill,V.nonBlurredContent]},i.a.createElement(m.a,{style:{marginTop:20,padding:5,height:"100%"}},i.a.createElement(m.a,{style:{backgroundColor:"#fff",height:55,width:"97%",alignSelf:"center",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:8,padding:20,shadowColor:"#98A0FF",shadowOffset:{width:0,height:4},shadowOpacity:.32,shadowRadius:5.46,elevation:9}},i.a.createElement(M.TextInput,{style:"web"===S.a.OS&&{outlineColor:"#fff",height:40,backgroundColor:"white",width:"95%",padding:5,fontSize:20},placeholder:"Search for Crops",autoFocus:f,editable:f,onChangeText:function(e){console.log(e),R(e),function(e){var t=e.toLowerCase();console.log("dynamic: "+t)}(e)}}),i.a.createElement(m.a,{style:{flexDirection:"row",justifyContent:"space-between"}},i.a.createElement(d.a,null,i.a.createElement(m.a,{style:{width:25,height:25,borderWidth:2,borderColor:"#A1C7FF",alignItems:"center",alignSelf:"flex-end",justifyContent:"center",right:-10,backgroundColor:"#A1C7FF",borderRadius:25}},i.a.createElement(q.a,{name:"close",size:20,color:"#3A48ED",onPress:function(){return g(!f)}}))))),i.a.createElement(m.a,{style:{flex:1,alignItems:"center",width:"100%"}},null!==F?i.a.createElement(m.a,{style:{width:"97%",alignItems:"center",backgroundColor:"#fff",borderRadius:10,margin:5}},ae.map((function(e,t){return i.a.createElement(d.a,{onPress:function(){P(!0),g(!f),R(e.name)}},i.a.createElement(m.a,{style:{width:l.a.get("window").width-50,height:45,padding:5,borderRadius:8,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",backgroundColor:"#fff",margin:2}},i.a.createElement(u.a,{source:{uri:e.image},style:{height:35,width:35,borderColor:"green",borderWidth:1,borderRadius:35}}),i.a.createElement(s.a,{style:{fontSize:20}}," ",e.name),i.a.createElement(s.a,{style:{fontSize:15,alignSelf:"center",color:"#989898"}}," ","in"," "),i.a.createElement(s.a,{style:{fontSize:15,color:"#3A48ED"}},e.type)))}))):null)),i.a.createElement(m.a,{style:{width:"100%",backgroundColor:"transparent",height:50,alignItems:"center",top:l.a.get("window").height-65,position:"absolute"}},i.a.createElement(O.a,{position:"center",overlayColor:"transparent",color:"#3A48ED",floatingIcon:i.a.cloneElement(i.a.createElement(b.a,{name:"close",color:"#fff",size:30})),onPressMain:function(){return t.navigate("Home")}})))):null)}var V=c.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}),Q=Object(h.a)(),K=Object(g.a)(),Y=l.a.get("window").width;function Z(){return i.a.createElement(Q.Navigator,{screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){e.focused;var a,n=e.color;e.size;return"Home"===t.name?a="home":"Profile"===t.name&&(a="user"),i.a.createElement(k.a,{name:a,size:25,color:n})}}},tabBarOptions:{activeTintColor:"#8790FF",inactiveTintColor:"gray",showLabel:!1,style:{height:43,width:Y>767?90:"100%",bottom:Y>767?"96%":0,backgroundColor:Y>767?"#EAEAFF":"#fff",shadowColor:"#98A0FF",shadowOffset:{width:0,height:-2},shadowOpacity:.2,shadowRadius:5.46,elevation:9}}},i.a.createElement(Q.Screen,{name:"Home",component:R}),i.a.createElement(Q.Screen,{name:"Profile",component:T}))}function U(e){e.navigation;var t=Object(o.useState)(!1),a=r()(t,2),n=(a[0],a[1],Object(o.useState)(!1)),l=r()(n,2);l[0],l[1];return i.a.createElement(f.a,{linking:{prefixes:["rne://127.0.0.1:19006/--/"],config:{screens:{Root:{path:"/",initialRouteName:"/",screens:{Home:"/",Details:"/details",Search:"/search"}}}}},fallback:i.a.createElement(s.a,null,"Loading...")},i.a.createElement(K.Navigator,{screenOptions:{headerShown:!1}},i.a.createElement(K.Screen,{name:"Home",component:Z}),i.a.createElement(K.Screen,{name:"Search",component:G})))}c.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},276:function(e,t,a){e.exports=a(420)},390:function(e,t,a){e.exports=a.p+"static/media/newlogo.a840e510.png"},70:function(e){e.exports=JSON.parse('[{"id":1,"name":"Rice","type":"crop","image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg"},{"id":2,"name":"Almond","type":"nut","image":"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/21/almonds-1-sustainability-indyeats.jpg"},{"id":3,"name":"Wheat","type":"crop","image":"https://cdn.vox-cdn.com/thumbor/Zd_RL3RGVz3xJFCeVRKVsb_j-24=/0x0:5555x3750/1200x800/filters:focal(2304x1023:3192x1911)/cdn.vox-cdn.com/uploads/chorus_image/image/66419322/AdobeStock_278395497.0.jpeg"},{"id":4,"name":"Sugar Beet","type":"vegetable","image":"https://diy.sndimg.com/content/dam/images/diy/fullset/2015/5/20/0/Getty-Images_Sugar-Beets_Saccherifera_Variety_Wally-Eberhart.jpg.rend.hgtvcom.1280.960.suffix/1432166924353.jpeg"},{"id":5,"name":"Sugarcane","type":"plant","image":"https://static.toiimg.com/photo/msid-69095049/69095049.jpg?1675636"},{"id":6,"name":"Mango","type":"fruit","image":"https://3.imimg.com/data3/IB/SQ/MY-4978719/fresh-mangoes-500x500.jpg"},{"id":7,"name":"Apple","type":"fruit","image":"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"}]')},98:function(e){e.exports=JSON.parse('[{"id":1,"name":"Harish Gupta","phone":1234567890,"address":"Bihar","avatar":"https://upscbuddy.com/wp-content/uploads/2020/02/indian-farmer.jpg","crop":"Rice","harvestDate":"2020-12-28","area":7,"quantity":10,"image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg","gender":"male"},{"id":2,"name":"Badol Kr Sahu","phone":12345,"address":"Odisha","avatar":"https://amp.thenationalnews.com/image/policy:1.261574:1499419181/image/jpeg.jpg","crop":"Rice","harvestDate":"2020-12-11","area":4,"quantity":9,"image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg","gender":"male"},{"id":3,"name":"Asima Mondal","phone":12345,"address":"Bengal","avatar":"https://cdn.downtoearth.org.in/library/large/2019-07-24/0.37377100_1563954075_gettyimages-498281885.jpg","crop":"Rice","harvestDate":"2020-11-25","area":9,"quantity":20,"image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg","gender":"male"},{"id":4,"name":"Shyamal Pyin","phone":12345,"address":"Jharkhand","avatar":"https://images.indianexpress.com/2016/07/punjab-farmer-759.jpg","crop":"Rice","harvestDate":"2021-01-03","area":8,"quantity":11,"image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg","gender":"male"},{"id":5,"name":"Manojit Hajra","phone":12345,"address":"Maharashtra","avatar":"https://images.outlookindia.com/public/uploads/articles/2019/12/7/paddy_farmer20140730_571_855.jpg","crop":"Mango","harvestDate":"2020-12-21","area":6,"quantity":12,"image":"https://3.imimg.com/data3/IB/SQ/MY-4978719/fresh-mangoes-500x500.jpg","gender":"female"},{"id":6,"name":"Sk Sujauddin","phone":12345,"address":"Odisha","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzygGunHGR4Zae9ZhjCwUDPRkPmWL6LFfFQ&usqp=CAU","crop":"Sugarcane","harvestDate":"2021-01-15","area":3,"quantity":7,"image":"https://static.toiimg.com/photo/msid-69095049/69095049.jpg?1675636","gender":"female"},{"id":7,"name":"Sombhunath Yadav","phone":12345,"address":"Bihar","avatar":"https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2013/05/02/indianfarmer.jpg","crop":"Sugarcane","harvestDate":"2020-12-09","area":11,"quantity":24,"image":"https://static.toiimg.com/photo/msid-69095049/69095049.jpg?1675636","gender":"female"},{"id":8,"name":"Prakash Javedkar","phone":12345,"address":"Jharkhand","avatar":"https://images.indianexpress.com/2016/07/punjab-farmer-759.jpg","crop":"Rice","harvestDate":"2020-12-28","area":5,"quantity":14,"image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg","gender":"female"},{"id":9,"name":"Manojit Hajra","phone":12345,"address":"Maharashtra","avatar":"https://images.outlookindia.com/public/uploads/articles/2019/12/7/paddy_farmer20140730_571_855.jpg","crop":"Mango","harvestDate":"2020-12-21","area":6,"quantity":12,"image":"https://3.imimg.com/data3/IB/SQ/MY-4978719/fresh-mangoes-500x500.jpg","gender":"male"},{"id":10,"name":"Sk Sujauddin","phone":12345,"address":"Odisha","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzygGunHGR4Zae9ZhjCwUDPRkPmWL6LFfFQ&usqp=CAU","crop":"Sugarcane","harvestDate":"2021-01-15","area":3,"quantity":7,"image":"https://static.toiimg.com/photo/msid-69095049/69095049.jpg?1675636","gender":"male"},{"id":11,"name":"Sombhunath Yadav","phone":12345,"address":"Bihar","avatar":"https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/lg/public/2013/05/02/indianfarmer.jpg","crop":"Sugarcane","harvestDate":"2020-12-09","area":11,"quantity":24,"image":"https://static.toiimg.com/photo/msid-69095049/69095049.jpg?1675636","gender":"male"},{"id":12,"name":"Prakash Javedkar","phone":12345,"address":"Jharkhand","avatar":"https://images.indianexpress.com/2016/07/punjab-farmer-759.jpg","crop":"Rice","harvestDate":"2020-12-28","area":5,"quantity":14,"image":"https://images.fineartamerica.com/images-medium-large-5/green-rice-paddy-sungjin-kim.jpg","gender":"male"}]')}},[[276,1,2]]]);
//# sourceMappingURL=app.593f073e.chunk.js.map