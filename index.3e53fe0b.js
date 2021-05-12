var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(a)for(var o of a(r))n.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&a)for(var o of a(e))l.indexOf(o)<0&&n.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,F as c,a as s,T as u,r as d,g as p,B as h,A as f,M as b,u as E,b as v,d as g,I as x,e as y,C as w,f as k,h as N,i as S,j as B,E as F,k as M,l as O,G as C,m as j}from"./vendor.4292d94c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){a(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const R=i({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),U=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"}}),R),$=m.div`
  font-family: "Lato", sans-serif;
  && {
    .MuiInputBase-root {
      background-color: #f3f4f9;
      border-color: #f3f4f9;

      input::placeholder {
        color: #8a94a6;
        opacity: 1; /* Firefox */
      }

      .MuiOutlinedInput-notchedOutline {
        border: none;
      }
    }
    .MuiInputLabel-formControl {
      //This ensures the labels render outside of the input field
      position: static;
    }
    .MuiFormHelperText-root {
      text-align: right;
      &.Mui-error {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateY(-50%);
      }
    }
    .MuiOutlinedInput-input {
      padding: 14.5px 16px;
    }
    .MuiSelect-select.MuiSelect-select {
      padding-right: 24px !important;
    }
    .MuiInputLabel-shrink {
      transform: translateY(0);
      font-size: 14px;
      margin-bottom: 8px;
    }

    form {
      flex-direction: column;
      display: flex;

      .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
        margin-bottom: 32px;
      }
    }
  }
`,I=m.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48%;
    :first-child {
      margin-right: 16px;
    }
  }
`,_=m(c)`
  min-height: 555px;
  flex-direction: column;
  display: flex;
  position: relative;
  max-width: 460px;
`,z=m.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  button {
    text-transform: none;
    width: 100%;
    border-radius: 8px;
    background-color: ${U.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 42px;

    :hover {
      background-color: ${U.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;

    background-color: ${U.mint.main};
    :hover {
      background-color: ${U.mint.hover};
    }
  }
`,A=s(u)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,L=d.forwardRef(((e,t)=>{var{as:a,children:n,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(A,r({as:a,ref:t,className:l},i),n)}));function T(e){var{children:t}=e,a=o(e,["children"]);return d.createElement(L,r({},function(e){var{disabled:t,field:a}=e,{onBlur:n}=a,l=o(a,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:c},onBlur:s,helperText:u}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const h=p(c,l.name),f=p(m,l.name)&&!!h;return r(r({variant:d.variant,error:f,helperText:f?h:u,disabled:null!=t?t:i,onBlur:null!=s?s:function(e){n(null!=e?e:l.name)}},l),d)}(a)),t)}T.displayName="FormikMaterialUITextField";const D=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],P=[{value:"27",label:"+27"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],W=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],q=s(h)`
  && {
    ${({theme:e,variant:t,color:a,bg:n,size:l})=>f`
      font-weight: bold;
      border: 1px solid transparent;

      ${e.palette[a]?f`
            color: ${"contained"===t?e.palette[a].contrastText:e.palette[a].main};
            ${"outlined"===t?f`
                  border-color: ${e.palette[a].main};
                  :hover {
                    border-color: ${e.palette[a].main};
                  }
                `:f``}
          `:f``}

      ${e.palette[n]&&"contained"===t?f`
            background-color: ${e.palette[n].main};
            :hover {
              background-color: ${e.palette[n].light};
            }
          `:f``}
    `}
  }
`,V=d.forwardRef(((e,t)=>{var{as:a,children:n,className:l,variant:i="contained",size:m="medium"}=e,c=o(e,["as","children","className","variant","size"]);return d.createElement(q,r({as:a,ref:t,className:l,variant:i,size:m},c),n)})),J=s(b)``,Z=d.forwardRef(((e,t)=>{var{as:a,children:n,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(J,r({as:a,ref:t,className:l},i),n)})),G=({onSubmit:e,formData:t})=>{const[a,n]=d.useState(!1),[l,r]=d.useState("");function o(e){return e?null:"Required"}function i(e){return e?null:"Required"}return E((()=>{n(!0)}),3e3,[l]),d.createElement(v,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e})=>d.createElement(_,null,d.createElement(I,null,d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"firstName"},"First Name"),d.createElement(y,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:T,validate:i})," "),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"lastName"},"Last Name"),d.createElement(y,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:T,validate:i}))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Business Role"),d.createElement(y,{id:"role",name:"role",variant:"outlined",select:!0,component:T},D.map((e=>d.createElement(Z,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Business contact number"),d.createElement(y,{id:"contact-number-prefix",name:"contactNumberPrefix",variant:"outlined",select:!0,component:T},P.map((e=>d.createElement(Z,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Business Contact Email"),d.createElement(y,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",onChange:t=>{r(t.target.value),e("email",t.target.value)},component:T,validate:o})),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"businessName"},"Business Name (Optional)"),d.createElement(y,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:T})," "),d.createElement(z,null,d.createElement(V,{theme:U,type:"submit"},"Next ",d.createElement(w,null))))))},H=k({businessWebsite:N().matches(/www.?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Website URL must be valid").required("Business Website is required")}),Y=({handleBack:e})=>{const{values:t}=S();return d.createElement(z,null,d.createElement(V,{theme:U,color:"primary",type:"button",onClick:()=>e(t)},d.createElement(B,null)," Back")," ",d.createElement(V,{theme:U,color:"primary",type:"submit"},"Get Started!"))},K=({onSubmit:e,handleBack:t,formData:a})=>d.createElement(v,{initialValues:a,validationSchema:H,onSubmit:t=>{e(t)}},d.createElement(_,null,d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"businessWebsite"},"Business Website URL"),d.createElement(y,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:T})),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),d.createElement(y,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:T},D.map((e=>d.createElement(Z,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),d.createElement(y,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:T},D.map((e=>d.createElement(Z,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"extra-info"},"How can we help you?"),d.createElement(y,{id:"extra-info",name:"extraInfo",type:"text",rows:5,multiline:!0,variant:"outlined",component:T})),d.createElement(Y,{handleBack:t}))),Q=m.div`
  min-height: 555px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;

  .MuiSvgIcon-root {
    fill: #51bf98;
    font-size: 3rem;
  }
`;m.span`
  color: #5ecea6;
  font-weight: 600;
  :hover {
    color: #51bf98;
  }
`;const X=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,ee=m(c)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
  }
`,te=k({email:N().email("Enter a valid email").required("Email is required")}),ae=({formSnapshotData:e,handleUpdateContact:t})=>d.createElement(Q,null,d.createElement(X,null,d.createElement(F,null),d.createElement("h2",null," Update email")),d.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. ",d.createElement("br",null),"Just click the link and you're done!"),d.createElement(v,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:te},d.createElement(ee,null,d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Contact Email"),d.createElement(y,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:T})),d.createElement(V,{theme:U,color:"primary",type:"submit"},"Update Email")))," "),ne=m.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;

  .MuiSvgIcon-root {
    fill: #51bf98;
    font-size: 3rem;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`,le=m.span`
  color: #5ecea6;
  font-weight: 600;
  :hover {
    color: #51bf98;
  }
`,re=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,oe=({email:e,setActiveStep:t})=>d.createElement(ne,null,d.createElement(re,null,d.createElement(M,null),d.createElement("h2",null," Almost Done")),d.createElement("p",null,"All that's left is to verify your email address:",d.createElement("br",null)," ",d.createElement(le,null,e)),d.createElement("p",null,"Didn't get an email?"," ",d.createElement("strong",null,d.createElement("button",null,d.createElement(le,null,"Send again"))," ","or"," ",d.createElement("button",{onClick:()=>t(4)},d.createElement(le,null,"update email address"))))),ie=()=>{const[e,t]=d.useState(1),[a,n]=d.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",role:"owner",id:"1",utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),l=decodeURIComponent(window.location.search.substring(1)).split("&");return d.useEffect((()=>{if(1===e){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const o=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));o&&o.length>0&&(e.hutk=o[2]),W.forEach((e=>{const a=(e=>{for(let t=0;t<l.length;t++){let a=l[t].split("=");if(a[0]===e)return null===a[1]?null:a[1]}})(e);null!=a&&""!=a&&null!=a&&(t[e]=a)})),n(r(r(r({},a),t),e))}}),[]),d.createElement($,null,1===e&&d.createElement(G,{onSubmit:e=>{console.log(">>>>",a),n(r(r({},a),e)),t(2)},formData:a}),2===e&&d.createElement(K,{onSubmit:e=>{n(r(r({},a),e)),t(3),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/create",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r({},a),e))},handleBack:e=>{n(r(r({},a),e)),t(1)},formData:a}),3===e&&d.createElement(oe,{email:a.email,setActiveStep:t}),4===e&&d.createElement(ae,{formSnapshotData:a,handleUpdateContact:e=>{t(5),n(r(r({},a),e)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(" https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(a)}}),5===e&&d.createElement(oe,{email:a.email,setActiveStep:t}))},me=m.div``,ce=()=>d.createElement(C,{theme:U},d.createElement(j,{theme:U},d.createElement(me,null,d.createElement(ie,null))));O.render(d.createElement(ce,null),document.getElementById("contact-form"));
