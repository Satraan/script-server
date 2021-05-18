var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))a.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))l.indexOf(o)<0&&a.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,F as c,a as s,T as u,r as d,g as p,B as h,A as f,M as b,b as E,d as g,I as v,e as x,f as y,h as w,l as k,P as N,E as S,C as I,i as M,j as $,u as B,k as F,m as C,n as O,G as A,o as R}from"./vendor.09a26c3e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){n(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const j=i({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),z=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"}}),j),_=m.div`
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
`,P=m.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48%;
    :first-child {
      margin-right: 16px;
    }
  }
`,T=m(c)`
  min-height: 555px;
  flex-direction: column;
  display: flex;
  position: relative;
  max-width: 460px;

  textarea {
    padding: 0 !important;
  }
`,U=m.div`
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
    background-color: ${z.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 42px;

    :hover {
      background-color: ${z.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;

    background-color: ${z.mint.main};
    :hover {
      background-color: ${z.mint.hover};
    }
  }
`,L=m.span`
  color: ${z.mint.main};
  font-weight: 600;
  :hover {
    color: ${z.mint.main};
  }
`,D=s(u)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,W=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(D,r({as:n,ref:t,className:l},i),a)}));function V(e){var{children:t}=e,n=o(e,["children"]);return d.createElement(W,r({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,l=o(n,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:c},onBlur:s,helperText:u}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const h=p(c,l.name),f=p(m,l.name)&&!!h;return r(r({variant:d.variant,error:f,helperText:f?h:u,disabled:null!=t?t:i,onBlur:null!=s?s:function(e){a(null!=e?e:l.name)}},l),d)}(n)),t)}V.displayName="FormikMaterialUITextField";const q=[{value:"shopify",label:"Shopify Integration"},{value:"wix",label:"WIX Integration"},{value:"wooCommerce",label:"WooCommerce Integration"},{value:"magento",label:"Magento Integration"},{value:"invoices",label:"Payment for Invoices"},{value:"other",label:"I need help choosing the best option"}],Z=[{value:"1",label:"Less than R50 000"}],J=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],G=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],H=s(h)`
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
`,Y=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l,variant:i="contained",size:m="medium"}=e,c=o(e,["as","children","className","variant","size"]);return d.createElement(H,r({as:n,ref:t,className:l,variant:i,size:m},c),a)})),X=s(b)``,K=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(X,r({as:n,ref:t,className:l},i),a)}));const Q=m.div`
  && {
    .special-label {
      display: none;
    }
    .react-tel-input {
      .form-control {
        width: 100%;
        background-color: #f3f4f9 !important;
        border-color: #f3f4f9;

        padding: 14.5px 16px 14.5px 58px;
      }
    }
    margin-bottom: 32px;
  }
`,ee=m.span`
  .MuiSvgIcon-root {
    fill: #f14b73;
  }
`,te=({onSubmit:e,formData:t})=>{d.useState(!1);const[n,a]=d.useState("");function l(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function r(e){return e?null:"Required"}function o(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}return d.createElement(E,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:n,values:i})=>d.createElement(T,null,d.createElement(P,null,d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"firstName"},"First name"),d.createElement(x,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:V,validate:o,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.firstName&&n.firstName?d.createElement(ee,null,d.createElement(w,null)):null)}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"lastName"},"Last name"),d.createElement(x,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:V,validate:o,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.lastName&&n.lastName?d.createElement(ee,null,d.createElement(w,null)):null)}}))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"role"},"Role"),d.createElement(x,{id:"role",name:"role",variant:"outlined",select:!0,component:V},J.map((e=>d.createElement(K,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"contactNumber"},"Business contact number"),d.createElement(Q,null,d.createElement(x,{id:"contact-number-prefix",name:"contactNumber",placeholder:"+27 111 1111",type:"text",country:"za",onlyCountries:["za","ke","mu"],component:k,validate:r,onChange:t=>{e("contactNumber",t)},InputProps:{endAdornment:d.createElement(y,{position:"end"},t.contactNumber&&n.contactNumber?d.createElement(ee,null,d.createElement(w,null)):d.createElement(N,null))}})," ")),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"email"},"Business contact email"),d.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"text",variant:"outlined",onChange:t=>{a(t.target.value),e("email",t.target.value)},component:V,validate:l,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.email&&n.email?d.createElement(ee,null,d.createElement(w,null)):d.createElement(S,null))}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),d.createElement(x,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:V})," "),d.createElement(U,null,d.createElement(Y,{theme:z,type:"submit"},"Next ",d.createElement(I,null))))))},ne=M({businessWebsite:$().matches(/www.?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Website URL must be valid")}),ae=({handleBack:e})=>{const{values:t}=B();return d.createElement(U,null,d.createElement(Y,{theme:z,color:"primary",type:"button",onClick:()=>e(t)},d.createElement(F,null)," Back")," ",d.createElement(Y,{theme:z,color:"primary",type:"submit"},"Get Started!"))},le=({onSubmit:e,handleBack:t,formData:n})=>d.createElement(E,{initialValues:n,validationSchema:ne,onSubmit:t=>{e(t)}},(({errors:e,touched:n})=>d.createElement(T,null,d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL"),d.createElement(x,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:V,InputProps:{endAdornment:d.createElement(y,{position:"end"},e.businessWebsite&&n.businessWebsite?d.createElement(ee,null,d.createElement(w,null)):null)}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),d.createElement(x,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:V},q.map((e=>d.createElement(K,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),d.createElement(x,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:V},Z.map((e=>d.createElement(K,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"extra-info"},"How can we help you?"),d.createElement(x,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:5,multiline:!0,variant:"outlined",component:V})),d.createElement(ae,{handleBack:t})))),re=m.div`
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
    fill: ${z.mint.main};
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
    background-color: ${z.mint.main};
    box-shadow: none;

    display: flex;
    align-self: flex-end;

    :hover {
      background-color: ${z.mint.hover};
    }
  }
`,me=m.div`
  margin-left: 72px;
`,ce=M({email:$().email("Not a valid email format").required("Required")}),se=({formSnapshotData:e,handleUpdateContact:t})=>d.createElement(re,null,d.createElement(oe,null,d.createElement(S,null),d.createElement("h3",null," Update email")),d.createElement(me,null,d.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),d.createElement(E,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:ce},(({errors:e})=>d.createElement(ie,null,d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"email"},"Contact Email"),d.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:V,InputProps:{endAdornment:d.createElement(y,{position:"end"},e.email?d.createElement(ee,null,d.createElement(w,null)):null)}})),d.createElement(Y,{theme:z,color:"primary",type:"submit"},"Update email")))))),ue=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  .MuiSvgIcon-root {
    fill: ${z.mint.main};
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
`,pe=({email:e,setActiveStep:t})=>d.createElement(ue,null,d.createElement(de,null,d.createElement(C,null),d.createElement("h3",null," Almost Done")),d.createElement("p",null,"All that's left is to verify your email address:",d.createElement("br",null)," ",d.createElement(L,null,e)),d.createElement("p",null,"Didn't get an email?"," ",d.createElement("button",null,d.createElement(L,null,"Send again"))," ","or"," ",d.createElement("button",{onClick:()=>t("update-email")},d.createElement(L,null,"update"))," ","your email address")),he=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  .MuiSvgIcon-root {
    fill: ${z.infoBlue.main};
    font-size: 4rem;
  }

  a {
    background: none;
    color: ${z.infoBlue.main};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
  }
  p {
    margin: 0 0 0 64px;
    :first-of-type {
      margin: 24px 0 24px 64px;
    }
  }
`,fe=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,be=()=>d.createElement(he,null,d.createElement(fe,null,d.createElement(S,null),d.createElement("h3",null," Almost Done")),d.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),d.createElement("p",null,"Still can't see the email? Get in contact with our ",d.createElement("a",{href:"https://support.peachpayments.com/support/home",target:"_blank"},"Support team"))),Ee=()=>{const[e,t]=d.useState(),[n,a]=d.useState("step-one"),[l,o]=d.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[i,m]=d.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumber:"",lookingFor:"shopify",role:"owner",tradingVolume:"1",extraInfo:"",id:""}),c=decodeURIComponent(window.location.search.substring(1)).split("&");return d.useEffect((()=>{if("step-one"===n){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),G.forEach((e=>{const n=(e=>{for(let t=0;t<c.length;t++){let n=c[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),o(r(r({},t),e))}}),[]),d.createElement(_,null,"step-one"===n&&d.createElement(te,{onSubmit:e=>{m(r(r({},i),e)),a("step-two")},formData:i}),"step-two"===n&&d.createElement(le,{onSubmit:e=>{m(r(r({},i),e)),a("success"),(e=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/create",n).then((e=>e.json())).then((e=>{console.log(e),t(e.message.userId)}))})(r(r(r({},i),e),l))},handleBack:e=>{m(r(r({},i),e)),a("step-one")},formData:i}),"success"===n&&d.createElement(pe,{email:i.email,setActiveStep:a}),"update-email"===n&&d.createElement(se,{formSnapshotData:i,handleUpdateContact:t=>{a("update-email-success"),m(r(r({},i),t)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(" https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r({},i),{id:e}))}}),"update-email-success"===n&&d.createElement(be,null))},ge=m.div``,ve=()=>d.createElement(A,{theme:z},d.createElement(R,{theme:z},d.createElement(ge,null,d.createElement(Ee,null))));O.render(d.createElement(ve,null),document.getElementById("contact-form"));
