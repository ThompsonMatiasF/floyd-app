(this["webpackJsonpfloyd-app"]=this["webpackJsonpfloyd-app"]||[]).push([[0],{213:function(e,t,n){},460:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),c=n.n(i),r=n(201),s=n.n(r),d=(n(213),n(202)),o=n.n(d),l=n(67),u=n.n(l),m=new o.a(u.a,{delayResponse:2e3}),p={coord:{lon:-.1257,lat:51.5085},weather:[{id:803,main:"Clouds",description:"muy nuboso",icon:"04n"}],base:"stations",main:{temp:8.17,feels_like:1.85,temp_min:7.22,temp_max:9,pressure:1015,humidity:76},visibility:1e4,wind:{speed:7.2,deg:250},clouds:{all:75},dt:1610384297,sys:{type:1,id:1414,country:"GB",sunrise:1610352135,sunset:1610381655},timezone:0,id:2643743,name:"London",cod:200};m.onGet(/\/mock\/weather.*/).reply((function(){return[200,p]}));var b={lat:-34.4848,lon:-58.612,timezone:"America/Argentina/Buenos_Aires",timezone_offset:-10800,daily:[{dt:1610380800,sunrise:1610355248,sunset:1610406623,temp:{day:29.7,min:19,max:29.7,night:21.73,eve:26.68,morn:23.44},feels_like:{day:30.3,night:16.32,eve:25.95,morn:22.98},pressure:1006,humidity:55,dew_point:19.98,wind_speed:4.2,wind_deg:2,weather:[{id:501,main:"Rain",description:"lluvia moderada",icon:"10d"}],clouds:93,pop:1,rain:14.27,uvi:9.1},{dt:1610467200,sunrise:1610441703,sunset:1610493013,temp:{day:24.81,min:18.08,max:25.23,night:21.14,eve:22.47,morn:18.29},feels_like:{day:19.89,night:16.95,eve:18.05,morn:13.33},pressure:1018,humidity:18,dew_point:-2.52,wind_speed:3.97,wind_deg:99,weather:[{id:800,main:"Clear",description:"cielo claro",icon:"01d"}],clouds:0,pop:.1,uvi:13.76},{dt:1610553600,sunrise:1610528160,sunset:1610579402,temp:{day:26.49,min:18.22,max:28.06,night:24.43,eve:26.05,morn:18.32},feels_like:{day:21.92,night:19.56,eve:21.09,morn:14.38},pressure:1020,humidity:18,dew_point:.65,wind_speed:3.74,wind_deg:79,weather:[{id:800,main:"Clear",description:"cielo claro",icon:"01d"}],clouds:0,pop:0,uvi:13.65},{dt:161064e4,sunrise:1610614617,sunset:1610665788,temp:{day:26.78,min:19.34,max:29.74,night:25.65,eve:27.49,morn:19.34},feels_like:{day:22.7,night:24.06,eve:23.01,morn:15.11},pressure:1017,humidity:26,dew_point:5.84,wind_speed:4.42,wind_deg:51,weather:[{id:800,main:"Clear",description:"cielo claro",icon:"01d"}],clouds:0,pop:0,uvi:13.8},{dt:1610726400,sunrise:1610701075,sunset:1610752173,temp:{day:27.29,min:21.11,max:31.04,night:26.53,eve:30.9,morn:21.11},feels_like:{day:26.47,night:25.43,eve:31.05,morn:19.26},pressure:1007,humidity:47,dew_point:15.14,wind_speed:3.47,wind_deg:26,weather:[{id:500,main:"Rain",description:"lluvia ligera",icon:"10d"}],clouds:100,pop:.43,rain:1.35,uvi:3.49},{dt:1610812800,sunrise:1610787534,sunset:1610838556,temp:{day:29.21,min:23.42,max:31.37,night:25.69,eve:31.37,morn:23.42},feels_like:{day:30.3,night:23.63,eve:28.52,morn:25.57},pressure:1005,humidity:52,dew_point:18.65,wind_speed:2.64,wind_deg:196,weather:[{id:500,main:"Rain",description:"lluvia ligera",icon:"10d"}],clouds:100,pop:.94,rain:5.09,uvi:4},{dt:1610899200,sunrise:1610873993,sunset:1610924937,temp:{day:24.65,min:19.06,max:29.17,night:26.36,eve:29.17,morn:19.06},feels_like:{day:20.76,night:22.57,eve:25.31,morn:15.42},pressure:1011,humidity:34,dew_point:8.16,wind_speed:4.8,wind_deg:209,weather:[{id:800,main:"Clear",description:"cielo claro",icon:"01d"}],clouds:0,pop:0,uvi:4},{dt:1610985600,sunrise:1610960452,sunset:1611011317,temp:{day:28.05,min:20.3,max:29.07,night:24.95,eve:28.42,morn:20.3},feels_like:{day:26.85,night:21,eve:24.7,morn:20.05},pressure:1014,humidity:29,dew_point:8.81,wind_speed:1.16,wind_deg:81,weather:[{id:800,main:"Clear",description:"cielo claro",icon:"01d"}],clouds:0,pop:0,uvi:4}]};m.onGet(/\/mock\/onecall.*/).reply((function(){return[200,b]})),m.onAny().passThrough();var j=n(206),x=n(207),h=n(203),f=n.n(h),O=n(2),y=n(132),v=n.n(y),w=n(204),g={background:"rgba( 255, 255, 255, 0.60 )",backdropFilter:"blur( 4px )"},_={AR:"Argentina",ES:"Espa\xf1a",US:"Estados Unidos",FR:"Francia",IT:"Italia",JP:"Japon"},E=[{id:6359304,name:"Madrid",country:"ES"},{id:5128581,name:"New York",country:"US"},{id:2968815,name:"Paris",country:"FR"},{id:3169070,name:"Roma",country:"IT"},{id:1850147,name:"Tokyo",country:"JP"}],N={exclude:"current,hourly,minutely,alerts",appid:"237e758b4bb14a5808f8f65ec1a0020e",units:"metric",lang:"es"},C=function(e){var t,n,a,i,c;return{date:e.dt,description:null===(t=e.weather)||void 0===t?void 0:t[0].description,icon:null===(n=e.weather)||void 0===n?void 0:n[0].icon,temp:{main:parseInt((null===(a=e.main)||void 0===a?void 0:a.temp)||e.temp.day,10),min:parseInt((null===(i=e.main)||void 0===i?void 0:i.temp_min)||e.temp.min,10),max:parseInt((null===(c=e.main)||void 0===c?void 0:c.temp_max)||e.temp.max,10)}}},k=function(e){return{id:e.id,country:{id:e.sys.country,name:_[e.sys.country]},city:e.name,coord:{lat:e.coord.lat,lon:e.coord.lon}}},A=function(e){return{location:k(e.weather),weather:C(e.weather),forecast:e.forecast.daily.slice(1,6).map((function(e){return C(e)}))}},T=u.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/floyd-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WEATHER_API_KEY:"237e758b4bb14a5808f8f65ec1a0020e"}).REACT_APP_ENABLE_MOCK?"/mock":"https://api.openweathermap.org/data/2.5",params:N}),S={LOADING:"[ WEATHER ] - get city weather loading",SUCCESS:"[ WEATHER ] - set city weather success",FAILED:"[ WEATHER ] - set city weather failed"},R={LOADING:"[ WEATHER ] - get current city weather loading",SUCCESS:"[ WEATHER ] - set current city weather success",FAILED:"[ WEATHER ] - set current city weather failed"},I="[ WEATHER ] - set active tab",D=function(e,t){return{type:e,payload:t}},F=function(){var e=Object(w.a)(v.a.mark((function e(t,n){var a,i,c,r,s,d,o=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]?o[2]:{},e.prev=1,t(D(n.LOADING)),e.next=5,T.get("/weather",{params:Object(O.a)({},a)});case 5:return i=e.sent,c=i.data,e.next=9,T.get("/onecall",{params:Object(O.a)({},c.coord)});case 9:r=e.sent,s=r.data,d=A({weather:c,forecast:s}),t(D(n.SUCCESS,d)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),t(D(n.FAILED,e.t0));case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(e,t){return F(e,S,t)},P=function(e,t){return F(e,R,t)},H=function(e,t){return e(D(I,t))},U={city:{loading:!1,data:null,error:null},currentCity:{loading:!1,data:null,error:null},activeTab:E[0].id},W=function(e,t){var n=t.type,a=t.payload;switch(n){case S.LOADING:return Object(O.a)(Object(O.a)({},e),{},{city:Object(O.a)(Object(O.a)({},e.city),{},{loading:!0})});case S.SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{city:Object(O.a)(Object(O.a)({},e.city),{},{loading:!1,data:a,error:null})});case S.FAILED:return Object(O.a)(Object(O.a)({},e),{},{city:Object(O.a)(Object(O.a)({},e.city),{},{loading:!1,error:a})});case R.LOADING:return Object(O.a)(Object(O.a)({},e),{},{currentCity:Object(O.a)(Object(O.a)({},e.currentCity),{},{loading:!0})});case R.SUCCESS:return Object(O.a)(Object(O.a)({},e),{},{currentCity:Object(O.a)(Object(O.a)({},e.currentCity),{},{loading:!1,data:a,error:null})});case R.FAILED:return Object(O.a)(Object(O.a)({},e),{},{currentCity:Object(O.a)(Object(O.a)({},e.currentCity),{},{loading:!1,error:a})});case I:return Object(O.a)(Object(O.a)({},e),{},{activeTab:a});default:return Object(O.a)({},e)}},G=f()({weather:[W,U]}),M=c.a.createContext(),B=function(e){var t=e.children,n=i.useReducer.apply(void 0,Object(j.a)(G)),c=Object(x.a)(n,2),r=c[0],s=c[1];return Object(a.jsx)(M.Provider,{value:{state:r,dispatch:s},children:t})},z=n.p+"static/media/background.c3be8a40.png",Y=function(){return Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(z,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"scroll"},children:Object(a.jsx)("div",{className:"container mx-auto",children:Object(a.jsxs)("div",{className:"flex flex-col h-screen overflow-y-auto",children:[Object(a.jsx)(V,{}),Object(a.jsx)(ce,{}),Object(a.jsx)(re,{})]})})})},J=n(35),K=n.n(J),V=function(){return Object(a.jsxs)("div",{className:"flex flex-row justify-between items-end py-4 px-8 md:px-0",children:[Object(a.jsxs)("span",{className:"font-bold text-3xl md:text-5xl",style:{fontFamily:"Berkshire Swash"},children:[Object(a.jsx)("span",{className:"text-red-500",children:"floyd"})," app"]}),Object(a.jsx)("span",{className:"uppercase font-bold text:xl md:text-2xl",children:K()().format("MMMM YYYY")})]})},q=function(e){var t=e.children,n=Object(i.useContext)(M),c=n.state.weather,r=c.city,s=r.loading,d=r.data,o=c.activeTab,l=n.dispatch;return Object(i.useEffect)((function(){L(l,{id:o})}),[l,o]),Object(a.jsxs)("div",{children:[!s&&t,Object(a.jsx)(Z,{loading:s,loadingText:"Cargando datos de otras ciudades...",data:d})]})},Q=n(205),X=function(){var e=Object(i.useContext)(M),t=e.state.weather.currentCity,n=t.loading,c=t.data,r=e.dispatch,s=Object(Q.usePosition)(!1),d=s.latitude,o=s.longitude;return Object(i.useEffect)((function(){d&&o&&P(r,{lat:d,lon:o})}),[r,d,o]),Object(a.jsx)("div",{children:Object(a.jsx)(Z,{loading:n,loadingText:"Cargando datos de tu ciudad...",data:c})})},Z=function(e){var t=e.loading,n=e.loadingText,i=e.data;return t?Object(a.jsx)("p",{className:"text-center",children:n}):i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)($,{weather:i.weather,location:i.location}),Object(a.jsx)(te,{forecast:i.forecast})]}):null},$=function(e){var t=e.weather,n=e.location;return Object(a.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-stretch sm:items-center md:items-stretch rounded-b-2xl w-auto sm:w-1/2 md:w-auto",style:g,children:[Object(a.jsxs)("div",{className:"flex flex-col items-center sm:items-stretch font-lg p-4 text-2xl flex-1 text-center md:text-left",children:[Object(a.jsxs)("span",{className:"text-5xl font-bold",children:[null===n||void 0===n?void 0:n.city,Object(a.jsxs)("span",{className:"text-3xl font-light",children:[", ",n.country.name]})]}),Object(a.jsx)("span",{className:"italic font-light flex-1 pt-2 font-bold capitalize",children:K()().locale("es").format("dddd DD")}),Object(a.jsx)("span",{className:"font-bold uppercase",children:null===t||void 0===t?void 0:t.description})]}),Object(a.jsxs)("div",{className:"flex flex-row justify-center items-center bg-blue-500 pl-4 py-2 rounded-b-2xl",children:[Object(a.jsxs)("div",{className:"flex flex-col justify-center font-bold text-center",children:[Object(a.jsxs)("span",{className:"text-6xl md:text-9xl",children:[null===t||void 0===t?void 0:t.temp.main,"\xba"]}),Object(a.jsxs)("span",{className:"text-xl",children:[null===t||void 0===t?void 0:t.temp.min,"\xba / ",null===t||void 0===t?void 0:t.temp.max,"\xba"]})]}),Object(a.jsx)(ee,{large:!0,icon:t.icon,description:t.description})]})]})},ee=function(e){var t=e.large,n=void 0!==t&&t,i=e.icon,c=e.description;return Object(a.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(i).concat(n?"@4x":"",".png"),alt:c||i})},te=function(e){var t=e.forecast;return Object(a.jsx)("div",{className:"flex flex-row flex-wrap justify-between align-items-center w-auto sm:w-1/2 md:w-auto pl-0 sm:pl-4 md:pl-0",children:null===t||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(ne,{weather:e},e.date)}))})},ne=function(e){var t=e.weather;return Object(a.jsxs)("div",{className:"w-full md:w-auto flex flex-row items-center my-4",style:Object(O.a)({borderRadius:"50px"},g),"data-testid":"forecast-day",children:[Object(a.jsx)("div",{className:"bg-blue-500",style:{borderRadius:"50px"},children:Object(a.jsx)(ee,{icon:t.icon,description:t.description})}),Object(a.jsxs)("div",{className:"text-center flex-1 pl-4 pr-6 text-xl md:text-base",children:[Object(a.jsx)("div",{className:"inline-block md:block capitalize",children:K.a.unix(t.date).format("dddd DD")}),Object(a.jsx)("span",{className:"inline md:hidden",children:" - "}),Object(a.jsxs)("div",{className:"inline-block md:block",children:[Object(a.jsxs)("span",{className:"font-bold",children:[t.temp.min,"\xba"]})," / ",Object(a.jsxs)("span",{className:"font-bold",children:[t.temp.max,"\xba"]})]})]})]})},ae=function(){var e=Object(i.useContext)(M),t=e.state.weather.activeTab,n=e.dispatch;return Object(a.jsx)("div",{className:"flex flex-row text-center justify-content-center w-full pb-2",children:E.map((function(e){var i=t===e.id;return Object(a.jsx)(ie,{active:i,changeTab:function(){return H(n,e.id)},content:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"hidden sm:block rounded-b-",children:e.name}),Object(a.jsx)("span",{className:"sm:hidden block",children:e.country})]})},e.id)}))})},ie=function(e){var t=e.active,n=e.changeTab,i=e.content;return Object(a.jsx)("button",{className:"\n        w-1/5 ml-2 mr-2 first:ml-0 last:mr-0 p-2 rounded-md \n        ".concat(t?"text-white font-bold":"text-gray-900 bg-white","\n      "),style:t?g:{},disabled:t,onClick:n,"data-testid":"tab",children:i})},ce=function(){return Object(a.jsxs)("div",{className:"flex flex-1 flex-wrap flex-col sm:flex-row md:flex-col justify-around bg-primary my-4 px-8 md:px-0",children:[Object(a.jsx)(X,{}),Object(a.jsx)("span",{className:"border-gray-200 mt-4 border-t-2 pt-8 mb-2 w-full"}),Object(a.jsx)(q,{children:Object(a.jsx)(ae,{})})]})},re=function(){return Object(a.jsx)("div",{className:"flex flex-col md:flex-row text-center md:text-base justify-between text-xs pt-4 pb-2 px-8 md:px-0",children:Object(a.jsxs)("span",{children:["Developer: ",Object(a.jsx)("span",{className:"font-bold",children:"Matias Thompson"})]})})};n(459);K.a.locale("es");var se=function(){return Object(a.jsx)(B,{children:Object(a.jsx)(Y,{})})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,461)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(se,{})}),document.getElementById("root")),de()}},[[460,1,2]]]);
//# sourceMappingURL=main.8e392cd5.chunk.js.map