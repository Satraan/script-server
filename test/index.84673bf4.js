var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))a.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))l.indexOf(o)<0&&a.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,F as s,a as u,T as c,r as d,g as p,B as h,A as f,M as b,b as g,l as x,u as E,d as v,e as y,I as w,f as k,h as $,i as M,P as N,E as S,C as I,j as C,k as L,m as R,n as B,o as O,G as F,p as V}from"./vendor.6741c5e4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){n(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const P=i({palette:{primary:{main:"#0A1F44"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),j=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"},errorRed:{main:"#F14B73"},textfieldGrey:{main:"#F3F4F9"},placeholderGrey:{main:"#8A94A6"},disabledGrey:{main:"#C9CED6"}}),P),A=m.div`
  font-family: "Lato", sans-serif;

  // Just setting 'width' to 460 screws up the sizing of the input fields
  min-width: 460px;
  max-width: 460px;
  && {
    input:-webkit-autofill,
    textarea:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px ${j.textfieldGrey.main} inset;
      background-color: ${j.textfieldGrey.main} !important;
    }

    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border: solid 2px ${j.errorRed.main};
    }
    .MuiOutlinedInput-root.Mui-focused {
      input:-webkit-autofill,
      textarea:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
        background-color: ${j.textfieldGrey.main} !important;
      }
      .MuiOutlinedInput-notchedOutline {
        border: solid 2px ${j.infoBlue.main};
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
        background-color: ${j.textfieldGrey.main} !important;
        border-color: ${j.textfieldGrey.main};
      }
      input::placeholder {
        color: ${j.placeholderGrey.main};
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
        color: ${j.errorRed.main};
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
      color: ${j.palette.primary.main};
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
`,H=m.div`
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
    background-color: ${j.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 42px;

    :hover {
      background-color: ${j.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 250%;
    margin-left: 15px;

    background-color: ${j.mint.main};
    :hover {
      background-color: ${j.mint.hover};
    }
  }

  button:disabled {
    background-color: ${j.disabledGrey.main};
    color: #ffffff;
  }

  .MuiCircularProgress-root {
    margin-left: 8px;
    .MuiCircularProgress-svg {
      color: #ffffff;
    }
  }
`,D=m.span`
  color: ${j.infoBlue.main};
  border-bottom: 1px solid ${j.infoBlue.main};
  :hover {
    color: ${j.infoBlue.hover};
    border-bottom: none;
  }
`,_=m.p`
  margin-top: 8px !important;
  color: ${j.placeholderGrey.main};
  font-size: 11px;
  text-align: center;
`,G=m.p`
  color: ${j.errorRed.main};
  font-size: 11px;
  text-align: center;
`,W=u(c)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,U=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(W,r({as:n,ref:t,className:l},i),a)}));function Z(e){var{children:t}=e,n=o(e,["children"]);return d.createElement(U,r({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,l=o(n,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:s},onBlur:u,helperText:c}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const h=p(s,l.name),f=p(m,l.name)&&!!h;return r(r({variant:d.variant,error:f,helperText:f?h:c,disabled:null!=t?t:i,onBlur:null!=u?u:function(e){a(null!=e?e:l.name)}},l),d)}(n)),t)}Z.displayName="FormikMaterialUITextField";const J=[{value:"API/Mobile SDK",label:"API / Mobile SDK"},{value:"Shopify",label:"Shopify Integration"},{value:"WIX",label:"WIX Integration"},{value:"WooCommerce",label:"WooCommerce Integration"},{value:"Magento",label:"Magento Integration"},{value:"Payment for invoices",label:"Payment for Invoices"},{value:"PaySafe",label:"PaySafe"},{value:"Debit Orders",label:"Debit Orders"},{value:"PayOuts",label:"PayOuts"},{value:"I need help determining the right option",label:"I need help choosing the best option"}],q=[{value:"None, just getting started",label:"Just getting started"},{value:"Less than R50 000",label:"Less than R50 000"},{value:"R50 000 - R100 000",label:"R50 000 - R100 000"},{value:"R100 000 - R500 000",label:"R100 000 - R500 000"},{value:"More than R500 000",label:"More than R500 000"}],Y=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],K=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],X=u(h)`
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
`,Q=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l,variant:i="contained",size:m="medium"}=e,s=o(e,["as","children","className","variant","size"]);return d.createElement(X,r({as:n,ref:t,className:l,variant:i,size:m},s),a)})),ee=u(b)``,te=d.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return d.createElement(ee,r({as:n,ref:t,className:l},i),a)}));const ne=m.div`
  && {
    position: relative;
    .special-label {
      display: none;
    }
    .react-tel-input {
      .form-control {
        width: 100%;
        max-height: 45px;

        background-color: ${j.textfieldGrey.main} !important;
        border: solid 2px ${j.textfieldGrey.main};
        border-radius: 8px;
        padding: 14.5px 32px 14.5px 58px;

        font-size: 14px;

        :focus {
          background-color: #ffffff !important;
        }
      }
    }
    margin-bottom: 32px;

    ${({hasErrors:e})=>g`
        .react-tel-input {
          .form-control {
            border: ${e?`solid 2px ${j.errorRed.main}`:`solid 2px ${j.textfieldGrey.main}`};

            :focus {
              border-color: ${j.infoBlue.main};
            }
          }
        }
      `}
  }
`,ae=m.span`
  .MuiSvgIcon-root {
    fill: ${j.errorRed.main}!important;
  }
`,le=m.span`
  position: absolute;
  top: 0;
  right: 14px;

  transform: translateY(24px);

  .MuiSvgIcon-root {
    fill: ${j.palette.primary.main};
  }
`,re=m.span`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 0.75rem;
  letter-spacing: 0.03333em;
  color: ${j.errorRed.main};

  transform: translateY(51px);
`,oe=m(re)`
  top: 13px;
`,ie=x.default?x.default:x,me=({onSubmit:e,formData:t})=>{const[n,a]=d.useState(""),[l,o]=d.useState("");function i(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function m(e){if(!e)return"Required";switch(e.slice(0,2)){case"27":case"25":if(e.length<9)return"Too short";if(e.length>9)return"Too long";break;case"23":if(e.length<8)return"Too short";if(e.length>8)return"Too long"}return null}function s(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}function u(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}return E((()=>{(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};if(!e)return null;fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/validate",t).then((e=>e.json())).then((e=>{e.message.result.suggestion&&a(e.message.result.suggestion)}))})(l)}),3e3,[l]),d.createElement(v,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:a,values:l,setTouched:c})=>d.createElement(z,null,d.createElement(H,null,d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"firstName"},"First name"),d.createElement(k,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:Z,validate:s,InputProps:{endAdornment:d.createElement($,{position:"end"},t.firstName&&a.firstName?d.createElement(ae,null,d.createElement(M,null)):null)}})),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"lastName"},"Last name"),d.createElement(k,{id:"lastName",name:"lastName",placeholder:"Doe",type:"text",variant:"outlined",component:Z,validate:s,InputProps:{endAdornment:d.createElement($,{position:"end"},t.lastName&&a.lastName?d.createElement(ae,null,d.createElement(M,null)):null)}}))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"role"},"Role"),d.createElement(k,{id:"role",name:"role",variant:"outlined",select:!0,component:Z},Y.map((e=>d.createElement(te,{key:e.value,value:e.value},e.label))))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"contactNumber"},"Business contact number"),d.createElement(ne,{hasErrors:t.contactNumber&&a.contactNumber},d.createElement(k,{id:"contact-number",name:"contactNumber",placeholder:"+27 111 1111",max:9,type:"tel",country:"za",onlyCountries:["za","ke","mu"],component:ie,validate:m,autoFormat:!0,countryCodeEditable:!1,onBlur:()=>{c(r(r({},a),{contactNumber:!0}))},onChange:t=>{e("contactNumber",t)}}),d.createElement(le,null,t.contactNumber&&a.contactNumber?d.createElement($,{position:"end"},d.createElement(ae,null,d.createElement(M,null))):d.createElement($,{position:"end"},d.createElement(N,null))),d.createElement(re,null,t.contactNumber&&a.contactNumber&&d.createElement("p",null,t.contactNumber)))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"email"},"Business contact email"),d.createElement(k,{id:"email",name:"email",placeholder:"john@example.com",type:"text",variant:"outlined",onChange:t=>{o(t.target.value),e("email",t.target.value)},component:Z,validate:i,InputProps:{endAdornment:d.createElement($,{position:"end"},t.email&&a.email?d.createElement(ae,null,d.createElement(M,null)):d.createElement(S,null))}}),!t.email&&a.email&&n&&d.createElement(oe,null,d.createElement("p",null,"Did you mean ",n,"?"))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),d.createElement(k,{id:"businessName",name:"businessName",placeholder:"e.g. Peach Payments",type:"text",variant:"outlined",component:Z,validate:u})," "),d.createElement(T,null,d.createElement(Q,{theme:j,type:"submit"},"Next ",d.createElement(I,null))))))},se=C({businessWebsite:L().matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Invalid format")});function ue(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}const ce=({onSubmit:e,handleBack:t,formData:n,loading:a})=>d.createElement(v,{initialValues:n,validationSchema:se,onSubmit:t=>{e(t)}},(({errors:e,touched:n,values:l})=>d.createElement(z,null,d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL (optional)"),d.createElement(k,{id:"businessWebsite",name:"businessWebsite",placeholder:"e.g. www.peachpayments.com",type:"text",variant:"outlined",component:Z,InputProps:{endAdornment:d.createElement($,{position:"end"},e.businessWebsite&&n.businessWebsite?d.createElement(ae,null,d.createElement(M,null)):null)}})),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),d.createElement(k,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:Z},J.map((e=>d.createElement(te,{key:e.value,value:e.value},e.label))))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),d.createElement(k,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:Z},q.map((e=>d.createElement(te,{key:e.value,value:e.value},e.label))))),d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"extra-info"},"How else can we help you?"),d.createElement(k,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:6,multiline:!0,variant:"outlined",component:Z,validate:ue})),d.createElement(T,null,d.createElement(Q,{theme:j,color:"primary",type:"button",onClick:()=>t(l),disabled:a},d.createElement(R,null)," Back")," ",d.createElement(Q,{theme:j,color:"primary",type:"submit",disabled:a},"Get Started! ",a&&d.createElement(B,{size:14})))))),de=m.div`
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
`,he=m(s)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
    height: 48px;
    background-color: ${j.infoBlue.main};
    box-shadow: none;

    display: flex;
    align-self: flex-end;

    :hover {
      background-color: ${j.infoBlue.hover};
    }
  }

  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`,fe=m.div`
  margin-left: 72px;
`,be=()=>d.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),d.createElement("path",{d:"M50 44.498H50.5V43.998V41.998V41.498H50H44.5V35.998V35.498H44H42H41.5V35.998V41.498H36H35.5V41.998V43.998V44.498H36H41.5V49.998V50.498H42H44H44.5V49.998V44.498H50Z",fill:"#5ECEA6",stroke:"#5ECEA6"})),ge=C({email:L().email("Not a valid email format").required("Required")}),xe=({formSnapshotData:e,handleUpdateContact:t})=>d.createElement(de,null,d.createElement(pe,null,d.createElement(be,null),d.createElement("h3",null," Update email")),d.createElement(fe,null,d.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),d.createElement(v,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:ge},(({errors:e})=>d.createElement(he,null,d.createElement(y,null,d.createElement(w,{shrink:!0,htmlFor:"email"},"Contact Email"),d.createElement(k,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:Z,InputProps:{endAdornment:d.createElement($,{position:"end"},e.email?d.createElement(ae,null,d.createElement(M,null)):null)}})),d.createElement(Q,{theme:j,color:"primary",type:"submit"},"Update email")))))),Ee=m.div`
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
    color: ${j.infoBlue.main};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${j.infoBlue.main};
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
`,Ne=()=>d.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("g",{"clip-path":"url(#clip0)"},d.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),d.createElement("path",{d:"M39.01 37.03L46.52 40.25L39 39.25L39.01 37.03ZM46.51 45.75L39 48.97V46.75L46.51 45.75ZM37.01 34L37 41L52 43L37 45L37.01 52L58 43L37.01 34Z",fill:"#5ECEA6"})),d.createElement("defs",null,d.createElement("clipPath",{id:"clip0"},d.createElement("rect",{width:"57",height:"57",fill:"white"})))),Se=()=>d.createElement($e,null,d.createElement(Me,null,d.createElement(Ne,null),d.createElement("h3",null,"Email sent!")),d.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),d.createElement("p",null,"Still can't see the email? Get in contact with our ",d.createElement("a",{href:"https://support.peachpayments.com/support/home",target:"_blank"},"Support team"))),Ie=()=>{const[e,t]=d.useState(),[n,a]=d.useState(!1),[l,o]=d.useState(),[i,m]=d.useState("step-one"),[s,u]=d.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[c,p]=d.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumber:"",lookingFor:"Shopify",role:"owner",tradingVolume:"Less than R50 000",extraInfo:"",id:""}),h=decodeURIComponent(window.location.search.substring(1)).split("&");return d.useEffect((()=>{if("step-one"===i){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),K.forEach((e=>{const n=(e=>{for(let t=0;t<h.length;t++){let n=h[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),u(r(r({},t),e))}}),[]),d.createElement(A,null,"step-one"===i&&d.createElement(me,{onSubmit:e=>{p(r(r({},c),e)),m("step-two")},formData:c}),"step-two"===i&&d.createElement(ce,{onSubmit:e=>{a(!0);const n=e.businessWebsite.replace(/^https?\:\/\//i,"");p(r(r(r({},c),e),{businessWebsite:n})),(e=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/create",n).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong. Please try again.")})).then((e=>(t(e.message.userId),a(!1),m("success"),e))).catch((e=>{a(!1),o(e)}))})(r(r(r(r({},c),e),s),{businessWebsite:n}))},handleBack:e=>{p(r(r({},c),e)),m("step-one")},formData:c,loading:n}),"success"===i&&d.createElement(ke,{email:c.email,setActiveStep:m}),"update-email"===i&&d.createElement(xe,{formSnapshotData:c,handleUpdateContact:t=>{m("update-email-success"),p(r(r({},c),t)),(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(" https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/update",t).then((e=>e.json())).then((e=>console.log(e)))})(r(r({},c),{id:e}))}}),"update-email-success"===i&&d.createElement(Se,null),l&&d.createElement(G,null,l),("step-one"===i||"step-two"===i)&&d.createElement(_,null,"Just like you, we hate spam. We'll only use your personal information to administer your account and to provide the products and services you requested from us."))},Ce=m.div`
  display: flex;
  justify-content: center;
`,Le=()=>d.createElement(F,{theme:j},d.createElement(V,{theme:j},d.createElement(Ce,null,d.createElement(Ie,null))));O.render(d.createElement(Le,null),document.getElementById("contact-form"));
