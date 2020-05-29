(this.webpackJsonptakeacab=this.webpackJsonptakeacab||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),s=n(2),c=n(3),l=n(1),u=n(5),h=n(4),d=n(8),p=n.n(d),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={login:"",password:""},a.handleLoginChange=a.changeLogin.bind(Object(l.a)(a)),a.handlePasswordChange=a.changePassword.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"changeLogin",value:function(e){this.setState({login:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return o.a.createElement("form",null,o.a.createElement("h2",null,"Login"),"Login ",o.a.createElement("input",{type:"text",value:this.state.login,onChange:this.handleLoginChange})," ",o.a.createElement("br",null),"Password ",o.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handlePasswordChange})," ",o.a.createElement("br",null),o.a.createElement("input",{type:"button",value:"submit",onClick:this.props.login.bind(this.props.parent,this.state.login,this.state.password)}))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={granted:!1,rejectedReason:"",recording:!1,paused:!1,job_name:void 0},a.handleStart=a.handleStart.bind(Object(l.a)(a)),a.handleStop=a.handleStop.bind(Object(l.a)(a)),a.handleStreamClose=a.handleStreamClose.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"authenticated2",value:function(e){this.setState((function(){return{job_name:e}})),console.log("JOB_NAME RECORDING ---\x3e "+this.state.job_name)}},{key:"failedauthenticated2",value:function(){this.setState((function(){return{token:void 0,errormessage:"Authentication Error"}}))}},{key:"handleStart",value:function(e){this.setState({recording:!0}),console.log("Recording Started.")}},{key:"handleStop",value:function(e){var t=this;this.setState({recording:!1}),console.log("Recording Stopped."),console.log(e),console.log("auth token in recorder --\x3e "+this.props.token);var n=new FileReader;n.readAsDataURL(e),n.onloadend=function(){var e=n.result,a=e.split(",")[1];console.log("datUrl "+e),console.log("ENCODED ---- "+a);var o=t,r={method:"POST",body:JSON.stringify({token:t.props.token,audio_encoded:a}),headers:{"Content-Type":"application/json",authorizationToken:JSON.stringify({token:t.props.token})}};console.log(r),console.log("trancriber server ->  "+t.props.transcriberserver),fetch(t.props.transcriberserver,r).then((function(e){if(200!==e.status)throw o.failedauthenticated2(),new Error(e.status);return e.json()})).then((function(e){console.log("message =",e),"token"in e&&(console.log("THETOKEN "+e.TranscriptionJobName),console.log(o),o.authenticated2(e.TranscriptionJobName),t.props.jobnameCallback(t.state.job_name))})).catch((function(e){console.log("There has been a problem with your fetch operation: ",e.message)}))}}},{key:"handleStreamClose",value:function(){this.setState({granted:!1})}},{key:"handleError",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this.state.recording;return o.a.createElement("div",{ref:"app"},o.a.createElement("h3",null,"Recording your Destination"),o.a.createElement(p.a,{constraints:{audio:!0},mimeType:"audio/webm",timeSlice:10,onStart:this.handleStart,onStop:this.handleStop,onError:this.handleError,onStreamClosed:this.handleStreamClose,render:function(t){var n=t.start,a=t.stop;return o.a.createElement("div",null,o.a.createElement("p",null,"Recording: ",e.toString()),o.a.createElement("button",{onClick:n},"Start"),o.a.createElement("button",{onClick:a},"Stop"))}}))}}]),n}(o.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={transcribed:void 0,timerid:void 0},a.handleDestinationChange=a.changeDestination.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"changeDestination",value:function(e){this.setState({transcribed:e.target.value})}},{key:"authenticated",value:function(e){console.log(e),this.setState((function(){return{transcribed:e}})),console.log("JOB_NAME TRANSCRIBED ---\x3e "+this.state.transcribed)}},{key:"tick",value:function(){var e=this,t=this,n={method:"POST",body:JSON.stringify({token:this.props.token,job_name:"04490e1b-22fe-4110-865a-6daa1c500b26.json"}),headers:{"Content-Type":"application/json",authorizationToken:JSON.stringify({token:this.props.token})}};console.log(n),console.log("trancriber server ->  "+this.props.transcriptionserver),fetch(this.props.transcriptionserver,n).then((function(t){if(200!==t.status)throw new Error(t.status);var n=t.json();return e.timer=clearInterval(e.timer),n})).then((function(e){console.log("message =",e),console.log(t),t.authenticated(e.transcription)})).catch((function(e){console.log("There has been a problem with your fetch operation: ",e.message)}))}},{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.tick()}),5e3)}},{key:"render",value:function(){return void 0!=this.state.transcribed?o.a.createElement("div",null,"Location ",o.a.createElement("input",{type:"text",value:this.state.transcribed,onChange:this.handleDestinationChange}),o.a.createElement("br",null),o.a.createElement("input",{type:"button",value:"submit",onClick:this.props.getDestinationCallback.bind(this.props.parent,this.state.transcribed)})):o.a.createElement("div",null,o.a.createElement("h2",null,"Transcribing..."))}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={token:void 0,errormessage:void 0,job_name:void 0,destination:void 0},a}return Object(c.a)(n,[{key:"authenticated",value:function(e){this.setState({token:e,errormessage:void 0})}},{key:"failedauthenticated",value:function(){this.setState({token:void 0,errormessage:"Authentication Error"})}},{key:"doLogin",value:function(e,t){var n=this,a={method:"POST",body:JSON.stringify({login:e,password:t}),headers:{"Content-Type":"application/json"}};console.log(a),console.log("loginserver --\x3e "+this.props.loginserver),fetch(this.props.loginserver,a).then((function(e){if(200!==e.status)throw n.failedauthenticated(),new Error(e.status);return e.json()})).then((function(e){console.log("message =",e),"token"in e&&n.authenticated(e.token)})).catch((function(e){console.log("There has been a problem with your fetch operation: ",e.message)})),console.log("TOKEN --\x3e "+this.props.token)}},{key:"getDestination",value:function(e){this.setState((function(){return{destination:e}}))}},{key:"handleJobNameCallback",value:function(e){this.setState((function(){return{job_name:e}}))}},{key:"render",value:function(){if(console.log("Destination : ",this.state.destination),void 0!=this.state.errormessage)var e=o.a.createElement("h2",null,this.state.errormessage);else e=o.a.createElement("div",null);return void 0==this.state.token?o.a.createElement("div",null,e,o.a.createElement(m,{parent:this,login:this.doLogin})):void 0!=this.state.job_name&&void 0==this.state.destination?o.a.createElement("div",null,e,o.a.createElement(g,{parent:this,getDestinationCallback:this.getDestination,transcriptionserver:this.props.transcriptionserver,token:this.state.token,job_name:this.state.job_name})):void 0!=this.state.job_name&&void 0!=this.state.destination?o.a.createElement("div",null,"ESTOU AQUI"):o.a.createElement("div",null,e,o.a.createElement(b,{jobnameCallback:this.handleJobNameCallback.bind(this),transcriberserver:this.props.transcriberserver,token:this.state.token,job_name:this.state.job_name}))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(v,{loginserver:"https://fx49oebdf7.execute-api.us-east-1.amazonaws.com/Production/login",transcriberserver:"https://fx49oebdf7.execute-api.us-east-1.amazonaws.com/Production/time",transcriptionserver:"https://fx49oebdf7.execute-api.us-east-1.amazonaws.com/Production/transcript"})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.41e9ab90.chunk.js.map