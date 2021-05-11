var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var i in r||(r={}))t.call(r,i)&&l(e,i,r[i]);if(a)for(var i of a(r))n.call(r,i)&&l(e,i,r[i]);return e},i=(e,l)=>{var r={};for(var i in e)t.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))l.indexOf(i)<0&&n.call(e,i)&&(r[i]=e[i]);return r};import{q as o,F as m,a as s,T as c,r as u,g as d,c as p,B as h,A as b,M as f,u as v,b as E,d as g,I as y,e as x,f as w,h as N,i as S,l as k,j as B,G as F,k as O}from"./vendor.7f397682.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const i=new URL(e,n);if(self[t].moduleMap[i])return a(self[t].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){a(self[t].moduleMap[i]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const j=o.div`
  padding: 20px;
  border: solid 1px blue;

  max-width: 500px;

  && {
    .MuiInputLabel-formControl {
      //This ensures the labels render outside of the input field
      position: static;
    }
  }

  form {
    flex-direction: column;
    display: flex;

    .MuiFormControl-root {
      margin-bottom: 15px;
    }
  }
`,C=o.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48.5%;
  }
`,M=o(m)`
  min-height: 555px;
  flex-direction: column;
  display: flex;
  position: relative;
`,R=o.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  button {
    width: 100%;
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;
  }
`,P=s(c)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,$=u.forwardRef(((e,t)=>{var{as:a,children:n,className:l}=e,o=i(e,["as","children","className"]);return u.createElement(P,r({as:a,ref:t,className:l},o),n)}));function A(e){var{children:t}=e,a=i(e,["children"]);return u.createElement($,r({},function(e){var{disabled:t,field:a}=e,{onBlur:n}=a,l=i(a,["onBlur"]),{form:{isSubmitting:o,touched:m,errors:s},onBlur:c,helperText:u}=e,p=i(e,["disabled","field","form","onBlur","helperText"]);const h=d(s,l.name),b=d(m,l.name)&&!!h;return r(r({variant:p.variant,error:b,helperText:b?h:u,disabled:null!=t?t:o,onBlur:null!=c?c:function(e){n(null!=e?e:l.name)}},l),p)}(a)),t)}A.displayName="FormikMaterialUITextField";const T=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],U=[{value:"27",label:"+27"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],_=p({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),D=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"}}),_),L=s(h)`
  && {
    ${({theme:e,variant:t,color:a,bg:n,size:l})=>b`
      font-weight: bold;
      border: 1px solid transparent;

      ${e.palette[a]?b`
            color: ${"contained"===t?e.palette[a].contrastText:e.palette[a].main};
            ${"outlined"===t?b`
                  border-color: ${e.palette[a].main};
                  :hover {
                    border-color: ${e.palette[a].main};
                  }
                `:b``}
          `:b``}

      ${e.palette[n]&&"contained"===t?b`
            background-color: ${e.palette[n].main};
            :hover {
              background-color: ${e.palette[n].light};
            }
          `:b``}
    `}
  }
`,W=u.forwardRef(((e,t)=>{var{as:a,children:n,className:l,variant:o="contained",size:m="medium"}=e,s=i(e,["as","children","className","variant","size"]);return u.createElement(L,r({as:a,ref:t,className:l,variant:o,size:m},s),n)})),q=s(f)``,z=u.forwardRef(((e,t)=>{var{as:a,children:n,className:l}=e,o=i(e,["as","children","className"]);return u.createElement(q,r({as:a,ref:t,className:l},o),n)})),I=({onSubmit:e,formData:t})=>{const[a,n]=u.useState(!1),[l,r]=u.useState("");function i(e){return e?a?null:"Sendgrid invalid email":"Required"}function o(e){return e?null:"Required"}return v((()=>{n(!0)}),3e3,[l]),u.createElement(E,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e})=>u.createElement(M,null,u.createElement(C,null,u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"firstName"},"First Name"),u.createElement(x,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:A,validate:o})," "),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"lastName"},"Last Name"),u.createElement(x,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:A,validate:o}))),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business Role"),u.createElement(x,{id:"role",name:"role",variant:"outlined",select:!0,component:A},T.map((e=>u.createElement(z,{key:e.value,value:e.value},e.label))))),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business contact number"),u.createElement(x,{id:"contact-number-prefix",name:"contactNumberPrefix",variant:"outlined",select:!0,component:A},U.map((e=>u.createElement(z,{key:e.value,value:e.value},e.label))))),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business Contact Email"),u.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",onChange:t=>{r(t.target.value),e("email",t.target.value)},component:A,validate:i})),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"businessName"},"Business Name (Optional)"),u.createElement(x,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:A})," "),u.createElement(R,null,u.createElement(W,{theme:D,color:"primary",type:"submit"},"Next")))))},V=w({businessWebsite:N().matches(/www.?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Website URL must be valid").required("Business Website is required")}),J=({handleBack:e})=>{const{values:t}=S();return u.createElement(R,null,u.createElement(W,{theme:D,color:"primary",type:"button",onClick:()=>e(t)},"Back")," ",u.createElement(W,{theme:D,color:"primary",type:"submit"},"Submit"))},Z=({onSubmit:e,handleBack:t,formData:a})=>u.createElement(E,{initialValues:a,validationSchema:V,onSubmit:t=>{e(t)}},u.createElement(M,null,u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"businessWebsite"},"Business Website URL"),u.createElement(x,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:A})),u.createElement(J,{handleBack:t}))),G=w({email:N().email("Enter a valid email").required("Email is required")}),H=({formSnapshotData:e,handleUpdateContact:t})=>u.createElement(E,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:G},u.createElement(M,null,u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business Contact Email"),u.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:A})),u.createElement(R,null,u.createElement(W,{theme:D,color:"primary",type:"submit"},"Update Email")))),K=o.div`
  min-height: 555px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    text-decoration: underline;
  }
`,Q=({subheading:e,email:t,setActiveStep:a})=>u.createElement(K,null,u.createElement("h2",null,"Thank you for choosing Peach Payments"),e,u.createElement("p",null,"All that's left is to verify your email address in the email we sent you:"),u.createElement("p",null,u.createElement("strong",null,t)),u.createElement("p",null,"Didn't get an email?"," ",u.createElement("strong",null,u.createElement("button",null,"Send again")," or"," ",u.createElement("button",{onClick:()=>a(4)},"update email address")))),X=()=>{const[e,t]=u.useState(1),[a,n]=u.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",role:"owner",id:"1",utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:""});return u.createElement(j,null,1===e&&u.createElement(I,{onSubmit:e=>{const l=k.utm(window.location.search);n(r(r(r({},a),e),l)),t(2)},formData:a}),2===e&&u.createElement(Z,{onSubmit:e=>{n(r(r({},a),e)),t(3),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:3000/dev/create",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r({},a),e))},handleBack:e=>{n(r(r({},a),e)),t(1)},formData:a}),3===e&&u.createElement(Q,{subheading:u.createElement("h3",null,"Almost done!"),email:a.email,setActiveStep:t}),4===e&&u.createElement(H,{formSnapshotData:a,handleUpdateContact:e=>{t(5),n(r(r({},a),e)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:3000/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(a)}}),5===e&&u.createElement(Q,{subheading:u.createElement("h3",null,"We're updated your email address!"),email:a.email,setActiveStep:t}))},Y=o.div``,ee=()=>u.createElement(F,{theme:D},u.createElement(O,{theme:D},u.createElement(Y,null,u.createElement(X,null))));B.render(u.createElement(ee,null),document.getElementById("contact-form"));
