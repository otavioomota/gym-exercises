(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,n){e.exports=n(345)},194:function(e,t,n){},196:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),s=n.n(c),i=(n(194),n(81)),l=n(29),o=n(38),u=n(18),m=n(19),h=n(21),p=n(20),d=n(22),f=(n(196),n(17)),b=n(7),E=Object(f.withStyles)(function(e){return{FormControl:{width:500}}})(function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,exercise:{title:"",description:"",muscles:""}},n.handleToggle=function(){n.setState({open:!n.state.open})},n.handleChange=function(e){return function(t){n.setState({exercise:Object(o.a)({},n.state.exercise,Object(l.a)({},e,t.target.value))})}},n.handleSubmit=function(){n.props.onCreate(Object(o.a)({},n.state.exercise,{id:n.state.exercise.title.toLocaleLowerCase().replace(/ /g,"-")})),n.setState({open:!1,exercise:{title:"",description:"",muscles:""}})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(b.b,{variant:"fab",color:"primary",onClick:this.handleToggle},"Add"),r.a.createElement(b.c,{open:this.state.open,onClose:this.handleToggle,"aria-labelledby":"form-dialog-title"},r.a.createElement(b.f,{id:"form-dialog-title"},"Add an Exercise"),r.a.createElement(b.e,null,r.a.createElement("form",null,r.a.createElement(b.t,{autoFocus:!0,margin:"normal",label:"Title",value:this.state.exercise.title,onChange:this.handleChange("title"),fullWidth:!0,className:this.props.classes.FormControl}),r.a.createElement(b.t,{label:"Description",multiline:!0,rowsMax:"4",value:this.state.exercise.description,onChange:this.handleChange("description"),margin:"normal",className:this.props.classes.FormControl}),r.a.createElement("br",null),r.a.createElement(b.g,{className:this.props.classes.FormControl},r.a.createElement(b.j,{htmlFor:"muscles"},"Muscles"),r.a.createElement(b.q,{value:this.state.exercise.muscles,onChange:this.handleChange("muscles")},this.props.muscles.map(function(e){return r.a.createElement(b.o,{value:e,key:e},e)}))))),r.a.createElement(b.d,null,r.a.createElement(b.b,{color:"primary",onClick:this.handleSubmit},"Create"))))}}]),t}(a.Component)),x=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{position:"static"},r.a.createElement(b.u,null,r.a.createElement(b.v,{variant:"display1",color:"inherit",style:{flex:1}},"Gym Exercises"),r.a.createElement(E,{muscles:this.props.muscles,onCreate:this.props.onExerciseCreate})))}}]),t}(a.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.muscles,n=e.category,a=e.onSelect,c=n?t.findIndex(function(e){return e===n})+1:0;return r.a.createElement(b.p,null,r.a.createElement(b.s,{value:c,onChange:function(e,n){a(0===n?"":t[n-1])},indicatorColor:"primary",textColor:"secondary",centered:!0},r.a.createElement(b.r,{label:"all"}),t.map(function(e,t){return r.a.createElement(b.r,{label:e})})))}}]),t}(a.Component),y=function(e){var t=e.styles,n=e.exercise,a=(n.id,n.title),c=n.description;return r.a.createElement(b.p,{style:t.Paper},r.a.createElement(b.v,{variant:"display1"},a),r.a.createElement(b.v,{variant:"subheading",style:{marginTop:20}},c))},v=n(122),C=function(e){var t=e.styles,n=e.exercises,c=e.category,s=e.onSelect,i=e.onDelete;return r.a.createElement(b.p,{style:t.Paper},n.map(function(e){var t=Object(v.a)(e,2),n=t[0],l=t[1];return c&&c!==n?null:r.a.createElement(a.Fragment,null,r.a.createElement(b.v,{variant:"headline",style:{textTransform:"capitalize"}},n),r.a.createElement(b.k,{component:"ul"},l.map(function(e){var t=e.id,n=e.title;return r.a.createElement(b.l,{button:!0,onClick:function(){return s(t)}},r.a.createElement(b.n,{primary:n}),r.a.createElement(b.m,null,r.a.createElement(b.i,{onClick:function(){return i(t)}},"x")))})))}))},j={Paper:{padding:20,marginTop:10,marginBottom:10,height:500,overflowY:"auto"}},O=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.exercises,n=e.category,a=e.onSelect,c=e.exercise;return r.a.createElement(b.h,{container:!0},r.a.createElement(b.h,{item:!0,sm:!0},r.a.createElement(C,{styles:j,exercises:t,category:n,onSelect:a,onDelete:this.props.onDelete})),r.a.createElement(b.h,{item:!0,sm:!0},r.a.createElement(y,{styles:j,exercise:c})))}}]),t}(a.Component),S=["shoulders","chest","arms","back","legs"],k=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],w=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={exercises:k,exercise:{id:"",title:"Welcome!",description:"Please select an exercise on the left pane."},onDelete:""},n.getExercisesByCategory=function(){var e=S.reduce(function(e,t){return Object(o.a)({},e,Object(l.a)({},t,[]))},{});return Object.entries(n.state.exercises.reduce(function(e,t){var n=t.muscles;return e[n]=Object(i.a)(e[n]).concat([t]),e},e))},n.handleCategorySelect=function(e){n.setState({category:e})},n.handleExerciseSelect=function(e){n.setState(function(t){return{exercise:t.exercises.find(function(t){return t.id===e})}})},n.handleExercisDelete=function(e){n.setState(function(t){return{exercises:t.exercises.filter(function(t){return t.id!==e})}})},n.handleExerciseCreate=function(e){n.setState(function(t){var n=t.exercises;return{exercises:Object(i.a)(n).concat([e])}})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.getExercisesByCategory(),t=this.state,n=t.category,a=t.exercise;return r.a.createElement("div",null,r.a.createElement(x,{muscles:S,onExerciseCreate:this.handleExerciseCreate}),r.a.createElement(O,{exercise:a,exercises:e,category:n,onSelect:this.handleExerciseSelect,onDelete:this.handleExercisDelete}),r.a.createElement(g,{muscles:S,onSelect:this.handleCategorySelect,category:n}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[189,2,1]]]);
//# sourceMappingURL=main.634baffb.chunk.js.map