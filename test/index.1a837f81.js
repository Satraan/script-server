var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&r(e,o,l[o]);if(n)for(var o of n(l))a.call(l,o)&&r(e,o,l[o]);return e},o=(e,r)=>{var l={};for(var o in e)t.call(e,o)&&r.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&n)for(var o of n(e))r.indexOf(o)<0&&a.call(e,o)&&(l[o]=e[o]);return l};import{c as i,q as s,A as m,B as c,r as u,a as d,F as p,T as h,g as f,b,C as g,M as x,d as E,l as v,u as w,e as y,f as k,I as $,h as N,i as M,j as S,P as C,E as I,k as R,m as B,n as L,o as O,p as F,S as P,s as A,G as j,t as T}from"./vendor.7b45da0a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),r(s)},onload(){n(self[t].moduleMap[o]),r(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const V=i({palette:{primary:{main:"#0A1F44",light:"#53627C"},secondary:{main:"#FF7658"},success:{main:"#6FCF97"}}}),H=l(l({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"},errorRed:{main:"#F14B73"},textfieldGrey:{main:"#F3F4F9"},placeholderGrey:{main:"#8A94A6"},disabledGrey:{main:"#C9CED6"},borderGrey:{main:"#F5F7FA"}}),V),z=s(c)`
  && {
    ${({theme:e,variant:t,color:n,bg:a,size:r})=>m`
      font-weight: bold;
      border: 1px solid transparent;

      ${e.palette[n]?m`
            color: ${"contained"===t?e.palette[n].contrastText:e.palette[n].main};
            ${"outlined"===t?m`
                  border-color: ${e.palette[n].main};
                  :hover {
                    border-color: ${e.palette[n].main};
                  }
                `:m``}
          `:m``}

      ${e.palette[a]&&"contained"===t?m`
            background-color: ${e.palette[a].main};
            :hover {
              background-color: ${e.palette[a].light};
            }
          `:m``}
    `}
  }
`,W=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r,variant:i="contained",size:s="medium"}=e,m=o(e,["as","children","className","variant","size"]);return u.createElement(z,l({as:n,ref:t,className:r,variant:i,size:s},m),a)})),U=d.div`
  font-family: "Lato", sans-serif;

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
        color: ${H.palette.primary.main};
        border-radius: 8px;

        :hover {
          .MuiOutlinedInput-notchedOutline {
            border: solid 2px ${H.infoBlue.main};
          }
        }

        input::placeholder {
          color: ${H.placeholderGrey.main};
          opacity: 1;
        }

        &.MuiOutlinedInput-root.Mui-focused.MuiInputBase-formControl {
          background-color: #ffffff !important;
        }

        .MuiSelect-icon {
          transform: translateY(2px);
        }
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

    label {
      font-family: "Lato", sans-serif !important;
    }
  }
`,D=d.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48%;
    :first-child {
      margin-right: 16px;
    }
  }
`,G=d(p)`
  min-height: 555px;
  flex-direction: column;
  display: flex;
  position: relative;

  // Just setting 'width' to 460 screws up the sizing of the input fields
  min-width: 460px;
  max-width: 460px;

  textarea {
    padding: 0 !important;
  }

  @media (max-width: 990px) {
    max-width: 500px;
    min-width: 0;
  }
`,_=d.div`
  display: flex;
  position: absolute;
  bottom: 16px;
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
    font-size: 15px;
    letter-spacing: normal !important;
    font-weight: normal !important;
    :hover {
      background-color: ${H.infoBlue.hover};
      box-shadow: none;
    }
  }

  button:nth-child(2) {
    width: 625%;
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
`,Z=d.p`
  margin: 0 !important;
  color: ${H.placeholderGrey.main};
  font-size: 11px !important;
  text-align: center;

  max-width: 460px;

  @media (max-width: 990px) {
    max-width: 500px;
  }
`,J=d.span`
  color: ${H.infoBlue.main};
  border-bottom: 1px solid ${H.infoBlue.main};
  :hover {
    color: ${H.infoBlue.hover};
    border-bottom: none;
  }
`,q=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    font-size: 32px;
    margin: 0;
  }

  svg {
    width: 64px;
    height: 64px;
    margin-right: 8px;
  }

  @media (max-width: 990px) {
    svg {
      width: 45px;
      height: 45px;
      margin-right: 27px;
    }
  }
`,Y=d(W)`
  && {
    padding-right: 24px;
  }
`,K=s(h)``,X=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r}=e,i=o(e,["as","children","className"]);return u.createElement(K,l({as:n,ref:t,className:r},i),a)}));function Q(e){var{children:t}=e,n=o(e,["children"]);return u.createElement(X,l({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,r=o(n,["onBlur"]),{form:{isSubmitting:i,touched:s,errors:m},onBlur:c,helperText:u}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const p=f(m,r.name),h=f(s,r.name)&&!!p;return l(l({variant:d.variant,error:h,helperText:h?p:u,disabled:null!=t?t:i,onBlur:null!=c?c:function(e){a(null!=e?e:r.name)}},r),d)}(n)),t)}Q.displayName="FormikMaterialUITextField";const ee=s(b)`
  && {
    ${e=>m`
      ${"outlined"!==e.variant?m`
            border: 1px solid transparent;
          `:m``}
    `}
  }
`,te=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r,severity:i}=e,s=o(e,["as","children","className","severity"]);return u.createElement(ee,l({as:n,ref:t,className:r,severity:i},s),a)})),ne=s(g)``;u.forwardRef(((e,t)=>{var{as:n,children:a,className:r}=e,i=o(e,["as","children","className"]);return u.createElement(ne,l({as:n,ref:t,className:r},i),a)}));const ae=s.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  place-content: center;
  max-width: 400px;

  > div {
    display: flex;
  }

  input {
    width: 200px;
  }

  button {
    align-self: center;
    margin-top: 10px;
    max-width: 300px;
  }
`;u.forwardRef(((e,t)=>{var{children:n,className:a}=e,r=o(e,["children","className"]);return u.createElement(ae,l({ref:t,className:a},r),n)}));const re=s(x)``,le=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r}=e,i=o(e,["as","children","className"]);return u.createElement(re,l({as:n,ref:t,className:r},i),a)})),oe=s(h)`
  //background-color: #61dafb;
`;u.forwardRef(((e,t)=>{var{as:n,children:a,className:r}=e,i=o(e,["as","children","className"]);return u.createElement(oe,l({as:n,ref:t,className:r},i),a)}));const ie=[{value:"API/Mobile SDK",label:"API / Mobile SDK"},{value:"Shopify",label:"Shopify Integration"},{value:"WIX",label:"WIX Integration"},{value:"WooCommerce",label:"WooCommerce Integration"},{value:"Magento",label:"Magento Integration"},{value:"Payment for invoices",label:"Payment for Invoices"},{value:"PaySafe",label:"PaySafe"},{value:"Debit Orders",label:"Debit Orders"},{value:"PayOuts",label:"PayOuts"},{value:"I need help determining the right option",label:"I need help choosing the best option"}],se=[{value:"None, just getting started",label:"Just getting started"},{value:"Less than R50 000",label:"Less than R50 000"},{value:"R50 000 - R100 000",label:"R50 000 - R100 000"},{value:"R100 000 - R500 000",label:"R100 000 - R500 000"},{value:"More than R500 000",label:"More than R500 000"}],me=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],ce=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"];const ue=d.div`
  ${({hasErrors:e})=>E`
      && {
        position: relative;
        margin-bottom: 32px;

        .special-label {
          display: none;
        }
        .react-tel-input {
          .country-list {
            overflow-y: auto;
            color: ${H.palette.primary.main}!important;
          }
          .flag-dropdown .arrow {
            border-top-color: ${H.palette.primary.main};
          }

          .form-control {
            border: ${e?`solid 2px ${H.errorRed.main}`:`solid 2px ${H.textfieldGrey.main}`};

            width: 100%;
            max-height: 45px;

            background-color: ${H.textfieldGrey.main} !important;
            border-radius: 8px;
            padding: 14.5px 32px 14.5px 58px;
            transition: none !important;
            font-size: 14px;

            :focus {
              background-color: #ffffff !important;
              box-shadow: none !important;
            }

            :focus,
            :hover {
              border-color: ${H.infoBlue.main};
            }

            :disabled {
              border-color: rgba(0, 0, 0, 0.26);
            }
          }
        }
      }
    `}
`,de=d.span`
  .MuiSvgIcon-root {
    fill: ${H.errorRed.main}!important;
  }
`,pe=d.span`
  position: absolute;
  top: 0;
  right: 14px;

  transform: translateY(24px);

  .MuiSvgIcon-root {
    fill: ${H.palette.primary.main};
  }
`,he=d.span`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 0.75rem;
  letter-spacing: 0.03333em;
  color: ${H.errorRed.main};

  transform: translateY(51px);
`,fe=d(he)`
  top: 24px;
`,be=v.default?v.default:v,ge=({onSubmit:e,formData:t,loading:n})=>{const[a,r]=u.useState(""),[o,i]=u.useState("");function s(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function m(e){if(!e)return"Required";switch(e.slice(0,2)){case"27":if(e.length<11)return"Too short";if(e.length>11)return"Too long";break;case"25":if(e.length<12)return"Too short";if(e.length>12)return"Too long";break;case"23":if(e.length<10)return"Too short";if(e.length>10)return"Too long"}return null}function c(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}function d(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}return w((()=>{(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};if(!e)return null;fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/validate",t).then((e=>e.json())).then((e=>{r(e.Status.result.suggestion)}))})(o)}),500,[o]),u.createElement(y,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:r,setTouched:o})=>u.createElement(G,null,u.createElement(D,null,u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"firstName"},"First name"),u.createElement(N,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:Q,validate:c,InputProps:{endAdornment:u.createElement(M,{position:"end"},t.firstName&&r.firstName?u.createElement(de,null,u.createElement(S,null)):null)}})),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"lastName"},"Last name"),u.createElement(N,{id:"lastName",name:"lastName",placeholder:"Smith",type:"text",variant:"outlined",component:Q,validate:c,InputProps:{endAdornment:u.createElement(M,{position:"end"},t.lastName&&r.lastName?u.createElement(de,null,u.createElement(S,null)):null)}}))),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"role"},"Role"),u.createElement(N,{id:"role",name:"role",variant:"outlined",select:!0,component:Q},me.map((e=>u.createElement(le,{key:e.value,value:e.value},e.label))))),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"contactNumber"},"Business contact number"),u.createElement(ue,{hasErrors:t.contactNumber&&r.contactNumber},u.createElement(N,{id:"contact-number",name:"contactNumber",autocomplete:"tel",placeholder:"82 123 4567",disabled:n,max:9,type:"tel",country:"za",onlyCountries:["za","ke","mu"],component:be,validate:m,autoFormat:!0,countryCodeEditable:!1,masks:{za:".. ... ....",mu:". ... ...",ke:"... ... ..."},onBlur:()=>{o(l(l({},r),{contactNumber:!0}))},onChange:t=>{e("contactNumber",t)}}),u.createElement(pe,null,t.contactNumber&&r.contactNumber?u.createElement(M,{position:"end"},u.createElement(de,null,u.createElement(S,null))):u.createElement(M,{position:"end"},u.createElement(C,null))),u.createElement(he,null,t.contactNumber&&r.contactNumber&&u.createElement("p",null,t.contactNumber)))),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"email"},"Business contact email"),u.createElement(N,{id:"email",name:"email",placeholder:"email@address.co.za",type:"text",variant:"outlined",onChange:t=>{i(t.target.value),e("email",t.target.value)},component:Q,validate:s,InputProps:{endAdornment:u.createElement(M,{position:"end"},t.email&&r.email?u.createElement(de,null,u.createElement(S,null)):u.createElement(I,null))}}),!t.email&&r.email&&a&&u.createElement(fe,null,u.createElement("p",null,"Did you mean ",a,"?"))),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),u.createElement(N,{id:"businessName",name:"businessName",placeholder:"Peach Payments",type:"text",variant:"outlined",component:Q,validate:d,InputProps:{endAdornment:u.createElement(M,{position:"end"},t.businessName&&r.businessName?u.createElement(de,null,u.createElement(S,null)):null)}})),u.createElement(_,null,u.createElement(W,{theme:H,type:"submit",disabled:n},"Next ",n?u.createElement(R,{size:14}):u.createElement(B,null))))))},xe=L({businessWebsite:O().matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Invalid format")});function Ee(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}const ve=({onSubmit:e,handleBack:t,formData:n,loading:a})=>u.createElement(y,{initialValues:n,validationSchema:xe,onSubmit:t=>{e(t)}},(({errors:e,touched:n,values:r})=>u.createElement(G,null,u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL (optional)"),u.createElement(N,{id:"businessWebsite",name:"businessWebsite",placeholder:"www.peachpayments.co.za",type:"text",variant:"outlined",component:Q,InputProps:{endAdornment:u.createElement(M,{position:"end"},e.businessWebsite&&n.businessWebsite?u.createElement(de,null,u.createElement(S,null)):null)}})),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),u.createElement(N,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:Q},ie.map((e=>u.createElement(le,{key:e.value,value:e.value},e.label))))),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),u.createElement(N,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:Q},se.map((e=>u.createElement(le,{key:e.value,value:e.value},e.label))))),u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"extra-info"},"How else can we help you?"),u.createElement(N,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:6,multiline:!0,variant:"outlined",component:Q,validate:Ee})),u.createElement(_,null,u.createElement(Y,{theme:H,color:"primary",type:"button",onClick:()=>t(r),disabled:a},u.createElement(F,null)," Back")," ",u.createElement(W,{theme:H,color:"primary",type:"submit",disabled:a},"Get Started! ",a&&u.createElement(R,{size:14})))))),we=d.div`
  min-height: 555px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${H.palette.primary.main}!important;

  max-width: 460px;

  .MuiInputBase-root {
    margin-bottom: 24px !important;
  }
  .MuiFormHelperText-root.Mui-error {
    transform: translateY(110%) !important;
  }
  p {
    margin: 8px 0 24px 0;
    color: ${H.palette.primary.light};
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    max-width: 100%;
  }
`,ye=d(p)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
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
`,ke=d.div`
  margin-left: 72px;
`,$e=d(_)`
  position: static;
  justify-content: space-between;

  button:nth-child(1) {
    max-width: 100px;

    background-color: ${H.palette.primary.light};
    :hover {
      background-color: ${H.palette.primary.light};
    }
  }
  button:nth-child(2) {
    width: 140px;
    margin-left: 15px;

    background-color: ${H.infoBlue.main};
    :hover {
      background-color: ${H.infoBlue.hover};
    }
  }

  button:disabled {
    background-color: ${H.disabledGrey.main};
    color: #ffffff;
  }

  .MuiCircularProgress-root {
    margin: 0;
    .MuiCircularProgress-svg {
      color: #ffffff;
    }
  }

  @media (max-width: 767px) {
    button:nth-child(1) {
      max-width: 75px;
    }
    button:nth-child(2) {
      width: 100%;
      span:last-child {
        display: none;
      }
    }
  }
`,Ne=()=>u.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),u.createElement("path",{d:"M50 44.498H50.5V43.998V41.998V41.498H50H44.5V35.998V35.498H44H42H41.5V35.998V41.498H36H35.5V41.998V43.998V44.498H36H41.5V49.998V50.498H42H44H44.5V49.998V44.498H50Z",fill:"#5ECEA6",stroke:"#5ECEA6"})),Me=L({email:O().email("Not a valid email format").required("Required")}),Se=({formSnapshotData:e,setActiveStep:t,handleUpdateContact:n,loading:a})=>u.createElement(we,null,u.createElement(q,null,u.createElement(Ne,null),u.createElement("h3",null," Update email")),u.createElement(ke,null,u.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),u.createElement(y,{onSubmit:e=>{n(e)},initialValues:{email:e.email},validationSchema:Me},(({errors:e})=>u.createElement(ye,null,u.createElement(k,null,u.createElement($,{shrink:!0,htmlFor:"email"},"Contact Email"),u.createElement(N,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:Q,InputProps:{endAdornment:u.createElement(M,{position:"end"},e.email?u.createElement(de,null,u.createElement(S,null)):null)}})),u.createElement($e,null,u.createElement(Y,{theme:H,color:"primary",type:"button",onClick:()=>t("success"),disabled:a},u.createElement(F,null)," Back"),u.createElement(W,{theme:H,color:"primary",type:"submit",disabled:a},"Update ",u.createElement("span",null,"email")," ",a&&u.createElement(R,{size:10})))))))),Ce=d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;
  color: ${H.palette.primary.main}!important;

  max-width: 460px;

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
    color: ${H.palette.primary.light};
    :first-of-type {
      margin: 0px 0 24px 72px;
    }
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    max-width: 100%;
  }
`,Ie=d.span`
  color: #ff7658;
`,Re=()=>u.createElement("svg",{width:"51",height:"51",viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M43.5592 2.98828L20.1908 33.7975L6.375 19.9916L0 26.3666L21.2467 47.6133L51 9.36328L43.5592 2.98828Z",fill:"#5ECEA6"})),Be=({email:e,setActiveStep:t,resendEmail:n})=>u.createElement(Ce,null,u.createElement(q,null,u.createElement(Re,null),u.createElement("h3",null," Almost Done")),u.createElement("p",null,"All that's left is to verify your email address:",u.createElement("br",null)," ",u.createElement(Ie,null,e)),u.createElement("p",null,"Didn't get an email? ",u.createElement("button",{onClick:n},u.createElement(J,null,"Send again"))," or ",u.createElement("button",{onClick:()=>t("update-email")},u.createElement(J,null,"update"))," your email address")),Le=d.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;
  color: ${H.palette.primary.main}!important;
  max-width: 460px;

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
    margin: 0 0 0 74px;
    color: ${H.palette.primary.light};
    :first-of-type {
      margin: 12px 0 24px 74px;
    }
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    max-width: 100%;
  }
`,Oe=()=>u.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),u.createElement("path",{d:"M39.01 37.03L46.52 40.25L39 39.25L39.01 37.03ZM46.51 45.75L39 48.97V46.75L46.51 45.75ZM37.01 34L37 41L52 43L37 45L37.01 52L58 43L37.01 34Z",fill:"#5ECEA6"})),Fe=()=>u.createElement(Le,null,u.createElement(q,null,u.createElement(Oe,null),u.createElement("h3",null,"Email sent!")),u.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),u.createElement("p",null,"Still can't see the email? Get in contact with our ",u.createElement("a",{href:"https://support.peachpayments.com/support/home",target:"_blank"},"Support team"))),Pe=s(P)``,Ae=d(u.forwardRef(((e,t)=>{var{as:n,children:a,className:r,variant:i="default"}=e,s=o(e,["as","children","className","variant"]);return u.createElement(Pe,l({as:n,ref:t,className:r,variant:i},s),a)})))`
  && {
    position: static;
    margin-bottom: 16px;
    transform: none !important;
    .MuiAlert-root {
      background-color: ${H.palette.secondary.main};
      &,
      .MuiAlert-icon {
        color: #ffffff !important;
        align-items: center;
      }
    }
    ${({customWidth:e})=>E`
        max-width: 460px;
        @media (max-width: 990px) {
          max-width: ${e?"100%":"500px"};
        }
      `};
  }
`,je=({showUserFeedback:e,setShowUserFeedback:t,customWidth:n})=>{const a=(e,n)=>{"clickaway"!==n&&t(!1)};return u.createElement(Ae,{open:e,autoHideDuration:5e3,onClose:a,customWidth:n},u.createElement(te,{onClose:a,severity:"warning"},"An error has occurred. Please try submitting the form again or refresh the page."))},Te=()=>{const[e,t]=u.useState(!1),[n,a]=u.useState(),[r,o]=u.useState(!1),[i,s]=u.useState("step-one"),[m,c]=u.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[d,p]=u.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumber:"",lookingFor:"Shopify",role:"owner",tradingVolume:"Less than R50 000",extraInfo:"",id:""}),h=decodeURIComponent(window.location.search.substring(1)).split("&");return u.useEffect((()=>{if("step-one"===i){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),ce.forEach((e=>{const n=(e=>{for(let t=0;t<h.length;t++){let n=h[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),c(l(l({},t),e))}}),[]),u.createElement(U,null,u.createElement(je,{showUserFeedback:e,setShowUserFeedback:t,customWidth:"step-one"!==i&&"step-two"!==i}),"step-one"===i&&u.createElement(ge,{onSubmit:e=>{t(!1),o(!0),p(l(l({},d),e)),(e=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/create",n).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong. Please try again.")})).then((e=>(a(e.userId),o(!1),s("step-two"),e))).catch((e=>{o(!1),t(!0)}))})(l(l(l({},d),e),m))},formData:d,loading:r}),"step-two"===i&&u.createElement(ve,{onSubmit:e=>{o(!0),t(!1);const a=e.businessWebsite.replace(/^https?\:\/\//i,"");p(l(l(l({},d),e),{businessWebsite:a})),(e=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/submit",n).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong. Please try again.")})).then((e=>(o(!1),s("success"),e))).catch((e=>{o(!1),t(!0)}))})(l(l(l(l({},d),e),m),{businessWebsite:a,id:n}))},handleBack:e=>{p(l(l({},d),e)),s("step-one")},formData:d,loading:r}),"success"===i&&u.createElement(Be,{email:d.email,setActiveStep:s,resendEmail:()=>{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d.email})};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/resubmitemail",e).then((e=>{if(e.ok)return s("update-email-success"),e.json();throw new Error("Something went wrong. Please try again.")})).catch((e=>{t(!0)}))}}),"update-email"===i&&u.createElement(Se,{formSnapshotData:d,setActiveStep:s,handleUpdateContact:e=>{o(!0),p(l(l({},d),e));const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/update",n).then((e=>{if(o(!1),e.ok)return s("update-email-success"),e.json();throw new Error("Something went wrong. Please try again.")})).catch((e=>{t(!0)}))},loading:r}),"update-email-success"===i&&u.createElement(Fe,null),("step-one"===i||"step-two"===i)&&u.createElement(Z,null,"Just like you, we hate spam. We'll only use your personal information to administer your account and to provide the products and services you requested from us."))},Ve=d.div`
  display: flex;
  justify-content: center;
`,He=()=>u.createElement(j,{theme:H},u.createElement(T,{theme:H},u.createElement(Ve,null,u.createElement(Te,null))));A.render(u.createElement(He,null),document.getElementById("contact-form"));
