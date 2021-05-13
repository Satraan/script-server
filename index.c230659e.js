var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))a.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))l.indexOf(o)<0&&a.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,F as s,a as c,T as u,r as d,g as p,B as h,A as f,M as b,b as E,d as g,I as v,e as x,f as y,h as w,P as k,E as N,C as S,i as I,j as M,u as $,k as B,l as F,m as C,G as O,n as P}from"./vendor.3dafb923.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){n(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const R=i({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),A=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"}}),R),j=m.div`
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
`,T=m(s)`
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
    background-color: ${A.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 42px;

    :hover {
      background-color: ${A.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;

    background-color: ${A.mint.main};
    :hover {
      background-color: ${A.mint.hover};
    }
  }
`,_=m.span`
  color: ${A.mint.main};
  font-weight: 600;
  :hover {
    color: ${A.mint.main};
  }
`,L=c(u)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,D=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(L,r({as:n,ref:t,className:l},i),a)}));function W(e){var{children:t}=e,n=o(e,["children"]);return d.createElement(D,r({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,l=o(n,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:s},onBlur:c,helperText:u}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const h=p(s,l.name),f=p(m,l.name)&&!!h;return r(r({variant:d.variant,error:f,helperText:f?h:u,disabled:null!=t?t:i,onBlur:null!=c?c:function(e){a(null!=e?e:l.name)}},l),d)}(n)),t)}W.displayName="FormikMaterialUITextField";const V=[{value:"shopify",label:"Shopify Integration"},{value:"wix",label:"WIX Integration"},{value:"wooCommerce",label:"WooCommerce Integration"},{value:"magento",label:"Magento Integration"},{value:"invoices",label:"Payment for Invoices"},{value:"other",label:"I need help choosing the best option"}],q=[{value:"1",label:"Less than R50 000"}],Z=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],J=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],G=c(h)`
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
`,H=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l,variant:i="contained",size:m="medium"}=e,s=o(e,["as","children","className","variant","size"]);return d.createElement(G,r({as:n,ref:t,className:l,variant:i,size:m},s),a)})),Y=c(b)``,X=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(Y,r({as:n,ref:t,className:l},i),a)})),K=c(u)`
  //background-color: #61dafb;
`;m(d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(K,r({as:n,ref:t,className:l},i),a)})))`
  && {
    margin-right: 15px;
    width: 150px;
  }
`,m(D)`
  width: 100%;
`,m.div`
  display: flex;
`;const Q=m.span`
  .MuiSvgIcon-root {
    fill: #f14b73;
  }
`,ee=({onSubmit:e,formData:t})=>{d.useState(!1);const[n,a]=d.useState("");function l(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function r(e){return e?null:"Required"}function o(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}return d.createElement(E,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:n})=>d.createElement(T,null,d.createElement(z,null,d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"firstName"},"First name"),d.createElement(x,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:W,validate:o,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.firstName&&n.firstName?d.createElement(Q,null,d.createElement(w,null)):null)}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"lastName"},"Last name"),d.createElement(x,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:W,validate:o,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.lastName&&n.lastName?d.createElement(Q,null,d.createElement(w,null)):null)}}))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"role"},"Role"),d.createElement(x,{id:"role",name:"role",variant:"outlined",select:!0,component:W},Z.map((e=>d.createElement(X,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"contactNumberPrefix"},"Business contact number"),d.createElement(x,{id:"contact-number-prefix",name:"contactNumberPrefix",placeholder:"+27 111 1111",type:"text",variant:"outlined",component:W,validate:r,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.contactNumberPrefix&&n.contactNumberPrefix?d.createElement(Q,null,d.createElement(w,null)):d.createElement(k,null))}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"email"},"Business contact email"),d.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"text",variant:"outlined",onChange:t=>{a(t.target.value),e("email",t.target.value)},component:W,validate:l,InputProps:{endAdornment:d.createElement(y,{position:"end"},t.email&&n.email?d.createElement(Q,null,d.createElement(w,null)):d.createElement(N,null))}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),d.createElement(x,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:W})," "),d.createElement(U,null,d.createElement(H,{theme:A,type:"submit"},"Next ",d.createElement(S,null))))))},te=I({businessWebsite:M().matches(/www.?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Website URL must be valid")}),ne=({handleBack:e})=>{const{values:t}=$();return d.createElement(U,null,d.createElement(H,{theme:A,color:"primary",type:"button",onClick:()=>e(t)},d.createElement(B,null)," Back")," ",d.createElement(H,{theme:A,color:"primary",type:"submit"},"Get Started!"))},ae=({onSubmit:e,handleBack:t,formData:n})=>d.createElement(E,{initialValues:n,validationSchema:te,onSubmit:t=>{e(t)}},(({errors:e,touched:n})=>d.createElement(T,null,d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL"),d.createElement(x,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:W,InputProps:{endAdornment:d.createElement(y,{position:"end"},e.businessWebsite&&n.businessWebsite?d.createElement(Q,null,d.createElement(w,null)):null)}})),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),d.createElement(x,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:W},V.map((e=>d.createElement(X,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),d.createElement(x,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:W},q.map((e=>d.createElement(X,{key:e.value,value:e.value},e.label))))),d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"extra-info"},"How can we help you?"),d.createElement(x,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:5,multiline:!0,variant:"outlined",component:W})),d.createElement(ne,{handleBack:t})))),le=m.div`
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
`,re=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .MuiSvgIcon-root {
    fill: ${A.mint.main};
    font-size: 4rem;
    margin-right: 8px;
  }
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,oe=m(s)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
    height: 48px;
    background-color: ${A.mint.main};
    box-shadow: none;

    display: flex;
    align-self: flex-end;

    :hover {
      background-color: ${A.mint.hover};
    }
  }
`,ie=m.div`
  margin-left: 72px;
`,me=I({email:M().email("Enter a valid email").required("Required")}),se=({formSnapshotData:e,handleUpdateContact:t})=>d.createElement(le,null,d.createElement(re,null,d.createElement(N,null),d.createElement("h3",null," Update email")),d.createElement(ie,null,d.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),d.createElement(E,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:me},(({errors:e})=>d.createElement(oe,null,d.createElement(g,null,d.createElement(v,{shrink:!0,htmlFor:"email"},"Contact Email"),d.createElement(x,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:W,InputProps:{endAdornment:d.createElement(y,{position:"end"},e.email?d.createElement(Q,null,d.createElement(w,null)):null)}})),d.createElement(H,{theme:A,color:"primary",type:"submit"},"Update email")))))),ce=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  .MuiSvgIcon-root {
    fill: ${A.mint.main};
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
`,ue=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,de=({email:e,setActiveStep:t})=>d.createElement(ce,null,d.createElement(ue,null,d.createElement(F,null),d.createElement("h3",null," Almost Done")),d.createElement("p",null,"All that's left is to verify your email address:",d.createElement("br",null)," ",d.createElement(_,null,e)),d.createElement("p",null,"Didn't get an email?"," ",d.createElement("button",null,d.createElement(_,null,"Send again"))," ","or"," ",d.createElement("button",{onClick:()=>t("update-email")},d.createElement(_,null,"update"))," ","your email address")),pe=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  .MuiSvgIcon-root {
    fill: ${A.infoBlue.main};
    font-size: 4rem;
  }

  button {
    background: none;
    color: ${A.infoBlue.main};
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
`,he=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,fe=()=>d.createElement(pe,null,d.createElement(he,null,d.createElement(N,null),d.createElement("h3",null," Almost Done")),d.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),d.createElement("p",null,"Still can't see the email? Get in contact with our",d.createElement("button",null,"Support team"))),be=()=>{const[e,t]=d.useState("step-one"),[n,a]=d.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[l,o]=d.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumberPrefix:"",lookingFor:"shopify",role:"owner",tradingVolume:"1",extraInfo:"",id:""}),i=decodeURIComponent(window.location.search.substring(1)).split("&");return d.useEffect((()=>{if("step-one"===e){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),J.forEach((e=>{const n=(e=>{for(let t=0;t<i.length;t++){let n=i[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),a(r(r({},t),e))}}),[]),d.createElement(j,null,"step-one"===e&&d.createElement(ee,{onSubmit:e=>{o(r(r({},l),e)),t("step-two")},formData:l}),"step-two"===e&&d.createElement(ae,{onSubmit:e=>{o(r(r({},l),e)),t("success"),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/create",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r(r({},l),e),n))},handleBack:e=>{o(r(r({},l),e)),t("step-one")},formData:l}),"success"===e&&d.createElement(de,{email:l.email,setActiveStep:t}),"update-email"===e&&d.createElement(se,{formSnapshotData:l,handleUpdateContact:e=>{t("update-email-success"),o(r(r({},l),e)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(" https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(l)}}),"update-email-success"===e&&d.createElement(fe,null))},Ee=m.div``,ge=()=>d.createElement(O,{theme:A},d.createElement(P,{theme:A},d.createElement(Ee,null,d.createElement(be,null))));C.render(d.createElement(ge,null),document.getElementById("contact-form"));
