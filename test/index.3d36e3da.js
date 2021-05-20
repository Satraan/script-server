var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&a(e,o,r[o]);if(n)for(var o of n(r))l.call(r,o)&&a(e,o,r[o]);return e},o=(e,a)=>{var r={};for(var o in e)t.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))a.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,F as s,a as u,T as c,r as d,g as p,B as f,A as h,M as b,b as x,l as g,u as E,d as v,e as y,I as w,f as k,h as $,i as M,P as N,E as I,C as L,j as C,k as R,m as B,n as S,o as F,G as O,p as V}from"./vendor.6741c5e4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(m)},onload(){n(self[t].moduleMap[o]),a(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const A=i({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),H=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"},errorRed:{main:"#F14B73"},textfieldGrey:{main:"#F3F4F9"},placeholderGrey:{main:"#8A94A6"},disabledGrey:{main:"#C9CED6"}}),A),P=m.div`
  font-family: "Lato", sans-serif;

  // Just setting 'width' to 460 screws up the sizing of the input fields
  min-width: 460px;
  max-width: 460px;
  && {
    input:-webkit-autofill,
    textarea:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px ${H.textfieldGrey.main} inset;
      background-color: ${H.textfieldGrey.main} !important;
    }

    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border: solid 2px ${H.errorRed.main};
    }
    .MuiOutlinedInput-root.Mui-focused {
      input:-webkit-autofill,
      textarea:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
        background-color: ${H.textfieldGrey.main} !important;
      }
      .MuiOutlinedInput-notchedOutline {
        border: solid 2px ${H.infoBlue.main};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border: solid 2px transparent;
    }
    .MuiInputBase-input.MuiOutlinedInput-input.focus-visible {
      background-color: #ffffff;
    }

    .MuiInputBase-root {
      & {
        background-color: ${H.textfieldGrey.main} !important;
        border-color: ${H.textfieldGrey.main};
      }
      input::placeholder {
        color: ${H.placeholderGrey.main};
        opacity: 1;
      }

      border-radius: 8px;

      &.MuiOutlinedInput-root.Mui-focused.MuiInputBase-formControl {
        background-color: #ffffff !important;
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
        color: ${H.errorRed.main};
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
      font-weight: 600;
      margin-bottom: 8px;
      color: ${H.palette.primary.main};
    }

    form {
      flex-direction: column;
      display: flex;

      .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
        margin-bottom: 32px;
      }
    }
  }

  @media (max-width: 990px) {
    max-width: 500px;
    min-width: 0;
  }
`,j=m.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48%;
    :first-child {
      margin-right: 16px;
    }
  }
`,z=m(s)`
  min-height: 555px;
  flex-direction: column;
  display: flex;
  position: relative;
  max-width: 460px;

  textarea {
    padding: 0 !important;
  }

  @media (max-width: 990px) {
    max-width: 500px;
  }
`,T=m.div`
  display: flex;
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  width: 100%;

  button {
    text-transform: none;
    width: 100%;
    border-radius: 8px;
    background-color: ${H.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 42px;

    :hover {
      background-color: ${H.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;

    background-color: ${H.mint.main};
    :hover {
      background-color: ${H.mint.hover};
    }
  }

  button:disabled {
    background-color: ${H.disabledGrey.main};
    color: #ffffff;
  }

  .MuiCircularProgress-root {
    margin-left: 8px;
    .MuiCircularProgress-svg {
      color: #ffffff;
    }
  }
`,D=m.span`
  color: ${H.infoBlue.main};
  border-bottom: 1px solid ${H.infoBlue.main};
  :hover {
    color: ${H.infoBlue.hover};
    border-bottom: none;
  }
`,_=m.p`
  margin-top: 8px !important;
  color: ${H.placeholderGrey.main};
  font-size: 11px;
  text-align: center;
`,G=m.p`
  color: ${H.errorRed.main};
  font-size: 11px;
  text-align: center;
`,U=u(c)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,W=d.forwardRef(((e,t)=>{var{as:n,children:l,className:a}=e,i=o(e,["as","children","className"]);return d.createElement(U,r({as:n,ref:t,className:a},i),l)}));function Z(e){var{children:t}=e,n=o(e,["children"]);return d.createElement(W,r({},function(e){var{disabled:t,field:n}=e,{onBlur:l}=n,a=o(n,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:s},onBlur:u,helperText:c}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const f=p(s,a.name),h=p(m,a.name)&&!!f;return r(r({variant:d.variant,error:h,helperText:h?f:c,disabled:null!=t?t:i,onBlur:null!=u?u:function(e){l(null!=e?e:a.name)}},a),d)}(n)),t)}Z.displayName="FormikMaterialUITextField";const q=[{value:"API/Mobile SDK",label:"API / Mobile SDK"},{value:"Shopify",label:"Shopify Integration"},{value:"WIX",label:"WIX Integration"},{value:"WooCommerce",label:"WooCommerce Integration"},{value:"Magento",label:"Magento Integration"},{value:"Payment for invoices",label:"Payment for Invoices"},{value:"PaySafe",label:"PaySafe"},{value:"Debit Orders",label:"Debit Orders"},{value:"PayOuts",label:"PayOuts"},{value:"I need help determining the right option",label:"I need help choosing the best option"}],J=[{value:"None, just getting started",label:"Just getting started"},{value:"Less than R50 000",label:"Less than R50 000"},{value:"R50 000 - R100 000",label:"R50 000 - R100 000"},{value:"R100 000 - R500 000",label:"R100 000 - R500 000"},{value:"More than R500 000",label:"More than R500 000"}],Y=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],K=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],X=u(f)`
  && {
    ${({theme:e,variant:t,color:n,bg:l,size:a})=>h`
      font-weight: bold;
      border: 1px solid transparent;

      ${e.palette[n]?h`
            color: ${"contained"===t?e.palette[n].contrastText:e.palette[n].main};
            ${"outlined"===t?h`
                  border-color: ${e.palette[n].main};
                  :hover {
                    border-color: ${e.palette[n].main};
                  }
                `:h``}
          `:h``}

      ${e.palette[l]&&"contained"===t?h`
            background-color: ${e.palette[l].main};
            :hover {
              background-color: ${e.palette[l].light};
            }
          `:h``}
    `}
  }
`,Q=d.forwardRef(((e,t)=>{var{as:n,children:l,className:a,variant:i="contained",size:m="medium"}=e,s=o(e,["as","children","className","variant","size"]);return d.createElement(X,r({as:n,ref:t,className:a,variant:i,size:m},s),l)})),ee=u(b)``,te=d.forwardRef(((e,t)=>{var{as:n,children:l,className:a}=e,i=o(e,["as","children","className"]);return d.createElement(ee,r({as:n,ref:t,className:a},i),l)}));const ne=m.div`
  && {
    position: relative;
    .special-label {
      display: none;
    }
    .react-tel-input {
      .form-control {
        width: 100%;
        max-height: 45px;

        background-color: ${H.textfieldGrey.main} !important;
        border: solid 2px ${H.textfieldGrey.main};
        border-radius: 8px;
        padding: 14.5px 32px 14.5px 58px;

        font-size: 14px;

        :focus {
          background-color: #ffffff !important;
        }
      }
    }
    margin-bottom: 32px;

    ${({hasErrors:e})=>x`
        .react-tel-input {
          .form-control {
            border: ${e?`solid 2px ${H.errorRed.main}`:`solid 2px ${H.textfieldGrey.main}`};

            :focus {
              border-color: ${H.infoBlue.main};
            }
          }
        }
      `}
  }
`,le=m.span`
  .MuiSvgIcon-root {
    fill: ${H.errorRed.main}!important;
  }
`,ae=m.span`
  position: absolute;
  top: 0;
  right: 14px;

  transform: translateY(24px);

  .MuiSvgIcon-root {
    fill: ${H.palette.primary.main};
  }
`,re=m.span`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 0.75rem;
  letter-spacing: 0.03333em;
  color: ${H.errorRed.main};

  transform: translateY(51px);
`,oe=m(re)`
  top: 13px;
`,ie=g.default?g.default:g,me=({onSubmit:e,formData:t})=>{const[n,l]=d.useState(""),[a,o]=d.useState("");function i(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function m(e){if(!e)return"Required";switch(e.slice(0,2)){case"27":case"25":if(e.length<9)return"Too short";if(e.length>9)return"Too long";break;case"23":if(e.length<8)return"Too short";if(e.length>8)return"Too long"}return null}function s(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}function u(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}return E((()=>{(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};if(!e)return null;fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/validate",t).then((e=>e.json())).then((e=>{console.log(">>>>data",e),l(e.message.result.suggestion)}))})(a)}),3e3,[a]),d.createElement(v,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:l,values:a,setTouched:c})=>d.createElement(z,null,d.createElement(j,null,d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"firstName"},"First name"),d.createElement(k,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:Z,validate:s,InputProps:{endAdornment:d.createElement($,{position:"end"},t.firstName&&l.firstName?d.createElement(le,null,d.createElement(M,null)):null)}})),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"lastName"},"Last name"),d.createElement(k,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:Z,validate:s,InputProps:{endAdornment:d.createElement($,{position:"end"},t.lastName&&l.lastName?d.createElement(le,null,d.createElement(M,null)):null)}}))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"role"},"Role"),d.createElement(k,{id:"role",name:"role",variant:"outlined",select:!0,component:Z},Y.map((e=>d.createElement(te,{key:e.value,value:e.value},e.label))))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"contactNumber"},"Business contact number"),d.createElement(ne,{hasErrors:t.contactNumber&&l.contactNumber},d.createElement(k,{id:"contact-number",name:"contactNumber",placeholder:"+27 111 1111",max:9,type:"tel",country:"za",onlyCountries:["za","ke","mu"],component:ie,validate:m,autoFormat:!0,countryCodeEditable:!1,onBlur:()=>{c(r(r({},l),{contactNumber:!0}))},onChange:t=>{e("contactNumber",t)}}),d.createElement(ae,null,t.contactNumber&&l.contactNumber?d.createElement($,{position:"end"},d.createElement(le,null,d.createElement(M,null))):d.createElement($,{position:"end"},d.createElement(N,null))),d.createElement(re,null,t.contactNumber&&l.contactNumber&&d.createElement("p",null,t.contactNumber)))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"email"},"Business contact email"),d.createElement(k,{id:"email",name:"email",placeholder:"john@example.com",type:"text",variant:"outlined",onChange:t=>{o(t.target.value),e("email",t.target.value)},component:Z,validate:i,InputProps:{endAdornment:d.createElement($,{position:"end"},t.email&&l.email?d.createElement(le,null,d.createElement(M,null)):d.createElement(I,null))}}),!t.email&&l.email&&n&&d.createElement(oe,null,d.createElement("p",null,n))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),d.createElement(k,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:Z,validate:u})," "),d.createElement(T,null,d.createElement(Q,{theme:H,type:"submit"},"Next ",d.createElement(L,null))))))},se=C({businessWebsite:R().matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Invalid format")});function ue(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}const ce=({onSubmit:e,handleBack:t,formData:n,loading:l})=>d.createElement(v,{initialValues:n,validationSchema:se,onSubmit:t=>{e(t)}},(({errors:e,touched:n,values:a})=>d.createElement(z,null,d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL (optional)"),d.createElement(k,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:Z,InputProps:{endAdornment:d.createElement($,{position:"end"},e.businessWebsite&&n.businessWebsite?d.createElement(le,null,d.createElement(M,null)):null)}})),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),d.createElement(k,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:Z},q.map((e=>d.createElement(te,{key:e.value,value:e.value},e.label))))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),d.createElement(k,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:Z},J.map((e=>d.createElement(te,{key:e.value,value:e.value},e.label))))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"extra-info"},"How else can we help you?"),d.createElement(k,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:6,multiline:!0,variant:"outlined",component:Z,validate:ue})),d.createElement(T,null,d.createElement(Q,{theme:H,color:"primary",type:"button",onClick:()=>t(a),disabled:l},d.createElement(B,null)," Back")," ",d.createElement(Q,{theme:H,color:"primary",type:"submit",disabled:l},"Get Started! ",l&&d.createElement(S,{size:14})))))),de=m.div`
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

  @media (max-width: 990px) {
    justify-content: flex-start;
  }
`,pe=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 8px;
  }
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,fe=m(s)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
    height: 48px;
    background-color: ${H.infoBlue.main};
    box-shadow: none;

    display: flex;
    align-self: flex-end;

    :hover {
      background-color: ${H.infoBlue.hover};
    }
  }

  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`,he=m.div`
  margin-left: 72px;
`,be=()=>d.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),d.createElement("path",{d:"M50 44.498H50.5V43.998V41.998V41.498H50H44.5V35.998V35.498H44H42H41.5V35.998V41.498H36H35.5V41.998V43.998V44.498H36H41.5V49.998V50.498H42H44H44.5V49.998V44.498H50Z",fill:"#5ECEA6",stroke:"#5ECEA6"})),xe=C({email:R().email("Not a valid email format").required("Required")}),ge=({formSnapshotData:e,handleUpdateContact:t})=>d.createElement(de,null,d.createElement(pe,null,d.createElement(be,null),d.createElement("h3",null," Update email")),d.createElement(he,null,d.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),d.createElement(v,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:xe},(({errors:e})=>d.createElement(fe,null,d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"email"},"Contact Email"),d.createElement(k,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:Z,InputProps:{endAdornment:d.createElement($,{position:"end"},e.email?d.createElement(le,null,d.createElement(M,null)):null)}})),d.createElement(Q,{theme:H,color:"primary",type:"submit"},"Update email")))))),Ee=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  svg {
    width: 64px;
    height: 64px;
    margin-right: 8px;
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
    margin: 0 0 0 72px;
    :first-of-type {
      margin: 0px 0 24px 72px;
    }
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
  }
`,ve=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,ye=m.span`
  color: #ff7658;
`,we=()=>d.createElement("svg",{width:"51",height:"51",viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M43.5592 2.98828L20.1908 33.7975L6.375 19.9916L0 26.3666L21.2467 47.6133L51 9.36328L43.5592 2.98828Z",fill:"#5ECEA6"})),ke=({email:e,setActiveStep:t})=>d.createElement(Ee,null,d.createElement(ve,null,d.createElement(we,null),d.createElement("h3",null," Almost Done")),d.createElement("p",null,"All that's left is to verify your email address:",d.createElement("br",null)," ",d.createElement(ye,null,e)),d.createElement("p",null,"Didn't get an email? ",d.createElement("button",null,d.createElement(D,null,"Send again"))," or ",d.createElement("button",{onClick:()=>t("update-email")},d.createElement(D,null,"update"))," your email address")),$e=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;

  svg {
    margin-right: 8px;
  }

  a {
    background: none;
    color: ${H.infoBlue.main};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${H.infoBlue.main};
  }
  p {
    margin: 0 0 0 64px;
    :first-of-type {
      margin: 12px 0 24px 64px;
    }
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
  }
`,Me=m.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`,Ne=()=>d.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("g",{"clip-path":"url(#clip0)"},d.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),d.createElement("path",{d:"M39.01 37.03L46.52 40.25L39 39.25L39.01 37.03ZM46.51 45.75L39 48.97V46.75L46.51 45.75ZM37.01 34L37 41L52 43L37 45L37.01 52L58 43L37.01 34Z",fill:"#5ECEA6"})),d.createElement("defs",null,d.createElement("clipPath",{id:"clip0"},d.createElement("rect",{width:"57",height:"57",fill:"white"})))),Ie=()=>d.createElement($e,null,d.createElement(Me,null,d.createElement(Ne,null),d.createElement("h3",null,"Email sent!")),d.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),d.createElement("p",null,"Still can't see the email? Get in contact with our ",d.createElement("a",{href:"https://support.peachpayments.com/support/home",target:"_blank"},"Support team"))),Le=()=>{d.useState();const[e,t]=d.useState(!1),[n,l]=d.useState(),[a,o]=d.useState("step-one"),[i,m]=d.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[s,u]=d.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumber:"",lookingFor:"Shopify",role:"owner",tradingVolume:"Less than R50 000",extraInfo:"",id:""}),c=decodeURIComponent(window.location.search.substring(1)).split("&");return d.useEffect((()=>{if("step-one"===a){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),K.forEach((e=>{const n=(e=>{for(let t=0;t<c.length;t++){let n=c[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),m(r(r({},t),e))}}),[]),d.createElement(P,null,"step-one"===a&&d.createElement(me,{onSubmit:e=>{u(r(r({},s),e)),o("step-two")},formData:s}),"step-two"===a&&d.createElement(ce,{onSubmit:e=>{const t=e.businessWebsite.replace(/^https?\:\/\//i,"");o("success"),u(r(r(r({},s),e),{businessWebsite:t}))},handleBack:e=>{u(r(r({},s),e)),o("step-one")},formData:s,loading:e}),"success"===a&&d.createElement(ke,{email:s.email,setActiveStep:o}),"update-email"===a&&d.createElement(ge,{formSnapshotData:s,handleUpdateContact:e=>{o("update-email-success"),u(r(r({},s),e))}}),"update-email-success"===a&&d.createElement(Ie,null),n&&d.createElement(G,null,n),("step-one"===a||"step-two"===a)&&d.createElement(_,null,"Just like you, we hate spam. We'll only use your personal information to administer your account and to provide the products and services you requested from us."))},Ce=m.div`
  display: flex;
  justify-content: center;
`,Re=()=>d.createElement(O,{theme:H},d.createElement(V,{theme:H},d.createElement(Ce,null,d.createElement(Le,null))));F.render(d.createElement(Re,null),document.getElementById("contact-form"));
