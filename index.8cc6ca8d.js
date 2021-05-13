var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))a.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))l.indexOf(o)<0&&a.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,F as c,a as s,T as u,r as d,g as p,B as h,A as f,M as b,u as E,b as v,d as g,I as x,e as y,f as w,h as k,P as N,E as S,C as M,i as F,j as B,k as I,l as $,m as O,n as C,G as P,o as j}from"./vendor.7b6cbc8d.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){n(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const A=i({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),R=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"}}),A),U=m.div`
  font-family: "Lato", sans-serif;

  max-width: 460px;

  && {
    .MuiInputBase-root {
      &,
      input:-internal-autofill-selected {
        background-color: #f3f4f9 !important;
        border-color: #f3f4f9;
      }
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
`,z=m.div`
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
`,T=m.div`
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
    background-color: ${R.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 42px;

    :hover {
      background-color: ${R.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;

    background-color: ${R.mint.main};
    :hover {
      background-color: ${R.mint.hover};
    }
  }
`,L=m.span`
  color: ${R.mint.main};
  font-weight: 600;
  :hover {
    color: ${R.mint.main};
  }
`,D=s(u)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,W=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(D,r({as:n,ref:t,className:l},i),a)}));function q(e){var{children:t}=e,n=o(e,["children"]);return d.createElement(W,r({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,l=o(n,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:c},onBlur:s,helperText:u}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const h=p(c,l.name),f=p(m,l.name)&&!!h;return r(r({variant:d.variant,error:f,helperText:f?h:u,disabled:null!=t?t:i,onBlur:null!=s?s:function(e){a(null!=e?e:l.name)}},l),d)}(n)),t)}q.displayName="FormikMaterialUITextField";const V=[{value:"api",label:"API / Mobile SDK"}],J=[{value:"1",label:"Just getting started"}],H=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],Y=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],Z=s(h)`
  && {
    ${({theme:e,variant:t,color:n,bg:a,size:l})=>f`
      font-weight: bold;
      border: 1px solid transparent;

      ${e.palette[n]?f`
            color: ${"contained"===t?e.palette[n].contrastText:e.palette[n].main};
            ${"outlined"===t?f`
                  border-color: ${e.palette[n].main};
                  :hover {
                    border-color: ${e.palette[n].main};
                  }
                `:f``}
          `:f``}

      ${e.palette[a]&&"contained"===t?f`
            background-color: ${e.palette[a].main};
            :hover {
              background-color: ${e.palette[a].light};
            }
          `:f``}
    `}
  }
`,G=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l,variant:i="contained",size:m="medium"}=e,c=o(e,["as","children","className","variant","size"]);return d.createElement(Z,r({as:n,ref:t,className:l,variant:i,size:m},c),a)})),K=s(b)``,Q=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(K,r({as:n,ref:t,className:l},i),a)})),X=s(u)`
  //background-color: #61dafb;
`;m(d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(X,r({as:n,ref:t,className:l},i),a)})))`
  && {
    margin-right: 15px;
    width: 150px;
  }
`,m(W)`
  width: 100%;
`,m.div`
  display: flex;
`;const ee=m.span`
  .MuiSvgIcon-root {
    fill: #f14b73;
  }
`,te=({onSubmit:e,formData:t})=>{const[n,a]=d.useState(!1),[l,r]=d.useState("");function o(e){return e?null:"Required"}function i(e){return e?null:"Required"}return E((()=>{a(!0)}),3e3,[l]),d.createElement(v,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t})=>d.createElement(_,null,d.createElement(z,null,d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"firstName"},"First name"),d.createElement(y,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:q,validate:i,InputProps:{endAdornment:d.createElement(w,{position:"end"},t.firstName?d.createElement(ee,null,d.createElement(k,null)):null)}})),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"lastName"},"Last name"),d.createElement(y,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:q,validate:i,InputProps:{endAdornment:d.createElement(w,{position:"end"},t.lastName?d.createElement(ee,null,d.createElement(k,null)):null)}}))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Role"),d.createElement(y,{id:"role",name:"role",variant:"outlined",select:!0,component:q},H.map((e=>d.createElement(Q,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"contactNumberPrefix"},"Business contact number"),d.createElement(y,{id:"contact-number-prefix",name:"contactNumberPrefix",placeholder:"+27 111 1111",type:"text",variant:"outlined",component:q,validate:i,InputProps:{endAdornment:d.createElement(w,{position:"end"},t.contactNumberPrefix?d.createElement(ee,null,d.createElement(k,null)):d.createElement(N,null))}})),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Business contact email"),d.createElement(y,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",onChange:t=>{r(t.target.value),e("email",t.target.value)},component:q,validate:o,InputProps:{endAdornment:d.createElement(w,{position:"end"},t.email?d.createElement(ee,null,d.createElement(k,null)):d.createElement(S,null))}})),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),d.createElement(y,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:q})," "),d.createElement(T,null,d.createElement(G,{theme:R,type:"submit"},"Next ",d.createElement(M,null))))))},ne=F({businessWebsite:B().matches(/www.?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Website URL must be valid").required("Business Website is required")}),ae=({handleBack:e})=>{const{values:t}=I();return d.createElement(T,null,d.createElement(G,{theme:R,color:"primary",type:"button",onClick:()=>e(t)},d.createElement($,null)," Back")," ",d.createElement(G,{theme:R,color:"primary",type:"submit"},"Get Started!"))},le=({onSubmit:e,handleBack:t,formData:n})=>d.createElement(v,{initialValues:n,validationSchema:ne,onSubmit:t=>{e(t)}},(({errors:e})=>d.createElement(_,null,d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL"),d.createElement(y,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:q,InputProps:{endAdornment:d.createElement(w,{position:"end"},e.businessWebsite?d.createElement(ee,null,d.createElement(k,null)):null)}})),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),d.createElement(y,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:q},V.map((e=>d.createElement(Q,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),d.createElement(y,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:q},J.map((e=>d.createElement(Q,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"extra-info"},"How can we help you?"),d.createElement(y,{id:"extra-info",name:"extraInfo",type:"text",rows:5,multiline:!0,variant:"outlined",component:q})),d.createElement(ae,{handleBack:t})))),re=m.div`
  min-height: 555px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .MuiInputBase-root {
    margin-bottom: 24px !important;
  }
  .MuiFormHelperText-root.Mui-error {
    transform: translateY(110%) !important;
  }
  p {
    margin: 8px 0 24px 0;
  }
`,oe=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .MuiSvgIcon-root {
    fill: ${R.mint.main};
    font-size: 4rem;
    margin-right: 8px;
  }
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,ie=m(c)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
    height: 48px;
    background-color: ${R.mint.main};
    box-shadow: none;

    display: flex;
    align-self: flex-end;

    :hover {
      background-color: ${R.mint.hover};
    }
  }
`,me=m.div`
  margin-left: 72px;
`,ce=F({email:B().email("Enter a valid email").required("Required")}),se=({formSnapshotData:e,handleUpdateContact:t})=>d.createElement(re,null,d.createElement(oe,null,d.createElement(S,null),d.createElement("h3",null," Update email")),d.createElement(me,null,d.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),d.createElement(v,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:ce},(({errors:e})=>d.createElement(ie,null,d.createElement(g,null,d.createElement(x,{shrink:!0,htmlFor:"email"},"Contact Email"),d.createElement(y,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:q,InputProps:{endAdornment:d.createElement(w,{position:"end"},e.email?d.createElement(ee,null,d.createElement(k,null)):null)}})),d.createElement(G,{theme:R,color:"primary",type:"submit"},"Update email")))))),ue=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  .MuiSvgIcon-root {
    fill: ${R.mint.main};
    font-size: 4rem;
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
  p {
    margin: 0 0 0 64px;
    :first-of-type {
      margin: 24px 0 24px 64px;
    }
  }
`,de=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,pe=({email:e,setActiveStep:t})=>d.createElement(ue,null,d.createElement(de,null,d.createElement(O,null),d.createElement("h3",null," Almost Done")),d.createElement("p",null,"All that's left is to verify your email address:",d.createElement("br",null)," ",d.createElement(L,null,e)),d.createElement("p",null,"Didn't get an email?"," ",d.createElement("button",null,d.createElement(L,null,"Send again"))," ","or"," ",d.createElement("button",{onClick:()=>t(4)},d.createElement(L,null,"update"))," ","your email address")),he=()=>{const[e,t]=d.useState(1),[n,a]=d.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[l,o]=d.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",lookingFor:"api",role:"owner",tradingVolume:"1",extraInfo:"",id:""}),i=decodeURIComponent(window.location.search.substring(1)).split("&");return d.useEffect((()=>{if(1===e){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),Y.forEach((e=>{const n=(e=>{for(let t=0;t<i.length;t++){let n=i[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),a(r(r({},t),e))}}),[]),d.createElement(U,null,1===e&&d.createElement(te,{onSubmit:e=>{console.log(">>>>subm",r(r({},l),e)),o(r(r({},l),e)),t(2)},formData:l}),2===e&&d.createElement(le,{onSubmit:e=>{o(r(r({},l),e)),t(3),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/create",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r(r({},l),e),n))},handleBack:e=>{o(r(r({},l),e)),t(1)},formData:l}),3===e&&d.createElement(pe,{email:l.email,setActiveStep:t}),4===e&&d.createElement(se,{formSnapshotData:l,handleUpdateContact:e=>{t(5),o(r(r({},l),e)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(" https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(l)}}),5===e&&d.createElement(pe,{email:l.email,setActiveStep:t}))},fe=m.div``,be=()=>d.createElement(P,{theme:R},d.createElement(j,{theme:R},d.createElement(fe,null,d.createElement(he,null))));C.render(d.createElement(be,null),document.getElementById("contact-form"));
