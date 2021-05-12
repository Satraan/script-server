var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var i in r||(r={}))t.call(r,i)&&l(e,i,r[i]);if(a)for(var i of a(r))n.call(r,i)&&l(e,i,r[i]);return e},i=(e,l)=>{var r={};for(var i in e)t.call(e,i)&&l.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))l.indexOf(i)<0&&n.call(e,i)&&(r[i]=e[i]);return r};import{q as o,F as m,a as s,T as c,r as u,g as d,c as p,B as h,A as b,M as f,u as E,b as v,d as g,I as y,e as x,f as w,h as k,i as N,j as S,G as B,k as F}from"./vendor.da666fb6.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const i=new URL(e,n);if(self[t].moduleMap[i])return a(self[t].moduleMap[i]);const o=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(o),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){a(self[t].moduleMap[i]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const M=o.div`
  padding: 20px;
  border: solid 1px blue;

  max-width: 500px;
  *:focus {
    outline: none !important;
    border: none !important;
  }
  && {
    .MuiInputLabel-formControl {
      //This ensures the labels render outside of the input field
      position: static;
    }
    .MuiFormHelperText-root {
      text-align: right;
    }
    .MuiOutlinedInput-input {
      padding: 14.5px 16px;
    }
    .MuiTextField-root,
    .MuiInputBase-root,
    input {
      :focus-visible {
        outline: 1px solid pink;
        border-color: rebeccapurple;
      }
    }
    .MuiSelect-select.MuiSelect-select {
      padding-right: 24px !important;
    }
    .MuiInputLabel-shrink {
      transform: translateY(0);
      font-size: 14px;
      margin-bottom: 8px;
    }
  }

  form {
    flex-direction: column;
    display: flex;

    .MuiFormControl-root {
      margin-bottom: 15px;
    }
  }
`,O=o.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48.5%;
  }
`,j=o(m)`
  min-height: 555px;
  flex-direction: column;
  display: flex;
  position: relative;
`,C=o.div`
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
`,R=s(c)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,U=u.forwardRef(((e,t)=>{var{as:a,children:n,className:l}=e,o=i(e,["as","children","className"]);return u.createElement(R,r({as:a,ref:t,className:l},o),n)}));function _(e){var{children:t}=e,a=i(e,["children"]);return u.createElement(U,r({},function(e){var{disabled:t,field:a}=e,{onBlur:n}=a,l=i(a,["onBlur"]),{form:{isSubmitting:o,touched:m,errors:s},onBlur:c,helperText:u}=e,p=i(e,["disabled","field","form","onBlur","helperText"]);const h=d(s,l.name),b=d(m,l.name)&&!!h;return r(r({variant:p.variant,error:b,helperText:b?h:u,disabled:null!=t?t:o,onBlur:null!=c?c:function(e){n(null!=e?e:l.name)}},l),p)}(a)),t)}_.displayName="FormikMaterialUITextField";const T=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],P=[{value:"27",label:"+27"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],$=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],z=p({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),A=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"}}),z),L=s(h)`
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
`,D=u.forwardRef(((e,t)=>{var{as:a,children:n,className:l,variant:o="contained",size:m="medium"}=e,s=i(e,["as","children","className","variant","size"]);return u.createElement(L,r({as:a,ref:t,className:l,variant:o,size:m},s),n)})),I=s(f)``,W=u.forwardRef(((e,t)=>{var{as:a,children:n,className:l}=e,o=i(e,["as","children","className"]);return u.createElement(I,r({as:a,ref:t,className:l},o),n)})),q=({onSubmit:e,formData:t})=>{const[a,n]=u.useState(!1),[l,r]=u.useState("");function i(e){return e?null:"Required"}function o(e){return e?null:"Required"}return E((()=>{var e;e=l,console.log(">>>>checking email",e),n(!0)}),3e3,[l]),u.createElement(v,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e})=>u.createElement(j,null,u.createElement(O,null,u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"firstName"},"First Name"),u.createElement(x,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:_,validate:o})," "),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"lastName"},"Last Name"),u.createElement(x,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:_,validate:o}))),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business Role"),u.createElement(x,{id:"role",name:"role",variant:"outlined",select:!0,component:_},T.map((e=>u.createElement(W,{key:e.value,value:e.value},e.label))))),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business contact number"),u.createElement(x,{id:"contact-number-prefix",name:"contactNumberPrefix",variant:"outlined",select:!0,component:_},P.map((e=>u.createElement(W,{key:e.value,value:e.value},e.label))))),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business Contact Email"),u.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",onChange:t=>{r(t.target.value),e("email",t.target.value)},component:_,validate:i})),u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"businessName"},"Business Name (Optional)"),u.createElement(x,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:_})," "),u.createElement(C,null,u.createElement(D,{theme:A,color:"primary",type:"submit"},"Next")))))},V=w({businessWebsite:k().matches(/www.?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Website URL must be valid").required("Business Website is required")}),J=({handleBack:e})=>{const{values:t}=N();return u.createElement(C,null,u.createElement(D,{theme:A,color:"primary",type:"button",onClick:()=>e(t)},"Back")," ",u.createElement(D,{theme:A,color:"primary",type:"submit"},"Submit"))},Z=({onSubmit:e,handleBack:t,formData:a})=>u.createElement(v,{initialValues:a,validationSchema:V,onSubmit:t=>{e(t)}},u.createElement(j,null,u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"businessWebsite"},"Business Website URL"),u.createElement(x,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:_})),u.createElement(J,{handleBack:t}))),G=w({email:k().email("Enter a valid email").required("Email is required")}),H=({formSnapshotData:e,handleUpdateContact:t})=>u.createElement(v,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:G},u.createElement(j,null,u.createElement(g,null,u.createElement(y,{shrink:!0,htmlFor:"email"},"Business Contact Email"),u.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:_})),u.createElement(C,null,u.createElement(D,{theme:A,color:"primary",type:"submit"},"Update Email")))),Y=o.div`
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
`,K=({subheading:e,email:t,setActiveStep:a})=>u.createElement(Y,null,u.createElement("h2",null,"Thank you for choosing Peach Payments"),e,u.createElement("p",null,"All that's left is to verify your email address in the email we sent you:"),u.createElement("p",null,u.createElement("strong",null,t)),u.createElement("p",null,"Didn't get an email?"," ",u.createElement("strong",null,u.createElement("button",null,"Send again")," or"," ",u.createElement("button",{onClick:()=>a(4)},"update email address")))),Q=()=>{const[e,t]=u.useState(1),[a,n]=u.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",role:"owner",id:"1",utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),l=decodeURIComponent(window.location.search.substring(1)).split("&");return u.useEffect((()=>{if(1===e){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const i=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));i&&i.length>0&&(e.hutk=i[2]),$.forEach((e=>{const a=(e=>{for(let t=0;t<l.length;t++){let a=l[t].split("=");if(a[0]===e)return null===a[1]?null:a[1]}})(e);null!=a&&""!=a&&null!=a&&(t[e]=a)})),n(r(r(r({},a),t),e))}}),[]),u.createElement(M,null,1===e&&u.createElement(q,{onSubmit:e=>{n(r(r({},a),e)),t(2)},formData:a}),2===e&&u.createElement(Z,{onSubmit:e=>{n(r(r({},a),e)),t(3),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/create",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r({},a),e))},handleBack:e=>{n(r(r({},a),e)),t(1)},formData:a}),3===e&&u.createElement(K,{subheading:u.createElement("h3",null,"Almost done!"),email:a.email,setActiveStep:t}),4===e&&u.createElement(H,{formSnapshotData:a,handleUpdateContact:e=>{t(5),n(r(r({},a),e)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(" https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(a)}}),5===e&&u.createElement(K,{subheading:u.createElement("h3",null,"We're updated your email address!"),email:a.email,setActiveStep:t}))},X=o.div``,ee=()=>u.createElement(B,{theme:A},u.createElement(F,{theme:A},u.createElement(X,null,u.createElement(Q,null))));S.render(u.createElement(ee,null),document.getElementById("contact-form"));
