var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&r(e,o,l[o]);if(n)for(var o of n(l))a.call(l,o)&&r(e,o,l[o]);return e},o=(e,r)=>{var l={};for(var o in e)t.call(e,o)&&r.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&n)for(var o of n(e))r.indexOf(o)<0&&a.call(e,o)&&(l[o]=e[o]);return l};import{c as i,q as s,A as m,B as c,r as u,a as p,F as d,T as h,g as f,M as b,b as g,l as x,u as E,d as y,e as v,I as w,f as k,h as $,i as S,P as N,E as M,C,j as I,k as B,m as F,n as L,S as O,o as R,p as A,G as P,s as j}from"./vendor.e782b325.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),r(s)},onload(){n(self[t].moduleMap[o]),r(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const T=i({palette:{primary:{main:"#0A1F44",light:"#53627C"},secondary:{main:"#FF7658"},success:{main:"#6FCF97"}}}),V=l(l({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"},errorRed:{main:"#F14B73"},textfieldGrey:{main:"#F3F4F9"},placeholderGrey:{main:"#8A94A6"},disabledGrey:{main:"#C9CED6"},borderGrey:{main:"#F5F7FA"}}),T),H=s(c)`
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
`,z=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r,variant:i="contained",size:s="medium"}=e,m=o(e,["as","children","className","variant","size"]);return u.createElement(H,l({as:n,ref:t,className:r,variant:i,size:s},m),a)})),D=p.div`
  font-family: "Lato", sans-serif;

  && {
    input:-webkit-autofill,
    textarea:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px ${V.textfieldGrey.main} inset;
      background-color: ${V.textfieldGrey.main} !important;
    }

    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border: solid 2px ${V.errorRed.main};
    }
    .MuiOutlinedInput-root.Mui-focused {
      input:-webkit-autofill,
      textarea:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
        background-color: ${V.textfieldGrey.main} !important;
      }
      .MuiOutlinedInput-notchedOutline {
        border: solid 2px ${V.infoBlue.main};
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
        background-color: ${V.textfieldGrey.main} !important;
        border-color: ${V.textfieldGrey.main};
        color: ${V.palette.primary.main};
        border-radius: 8px;

        :hover {
          .MuiOutlinedInput-notchedOutline {
            border: solid 2px ${V.infoBlue.main};
          }
        }
      }
      input::placeholder {
        color: ${V.placeholderGrey.main};
        opacity: 1;
      }

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
        color: ${V.errorRed.main};
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
      color: ${V.palette.primary.main};
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
`,W=p.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48%;
    :first-child {
      margin-right: 16px;
    }
  }
`,U=p(d)`
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
`,_=p.div`
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
    background-color: ${V.infoBlue.main};
    color: #ffffff;
    box-shadow: none;
    height: 48px;
    font-size: 16px;

    :hover {
      background-color: ${V.infoBlue.hover};
    }
  }

  button:nth-child(2) {
    width: 625%;
    margin-left: 15px;

    background-color: ${V.mint.main};
    :hover {
      background-color: ${V.mint.hover};
    }
  }

  button:disabled {
    background-color: ${V.disabledGrey.main};
    color: #ffffff;
  }

  .MuiCircularProgress-root {
    margin-left: 8px;
    .MuiCircularProgress-svg {
      color: #ffffff;
    }
  }
`,G=p.p`
  margin-top: 8px !important;
  color: ${V.placeholderGrey.main};
  font-size: 11px !important;
  text-align: center;

  max-width: 460px;

  @media (max-width: 990px) {
    max-width: 500px;
  }
`,Z=p.span`
  color: ${V.infoBlue.main};
  border-bottom: 1px solid ${V.infoBlue.main};
  :hover {
    color: ${V.infoBlue.hover};
    border-bottom: none;
  }
`,J=p.div`
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
`,q=p(z)`
  && {
    padding-right: 24px;
  }
`,Y=s(h)``,K=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r}=e,i=o(e,["as","children","className"]);return u.createElement(Y,l({as:n,ref:t,className:r},i),a)}));function X(e){var{children:t}=e,n=o(e,["children"]);return u.createElement(K,l({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,r=o(n,["onBlur"]),{form:{isSubmitting:i,touched:s,errors:m},onBlur:c,helperText:u}=e,p=o(e,["disabled","field","form","onBlur","helperText"]);const d=f(m,r.name),h=f(s,r.name)&&!!d;return l(l({variant:p.variant,error:h,helperText:h?d:u,disabled:null!=t?t:i,onBlur:null!=c?c:function(e){a(null!=e?e:r.name)}},r),p)}(n)),t)}X.displayName="FormikMaterialUITextField";const Q=[{value:"API/Mobile SDK",label:"API / Mobile SDK"},{value:"Shopify",label:"Shopify Integration"},{value:"WIX",label:"WIX Integration"},{value:"WooCommerce",label:"WooCommerce Integration"},{value:"Magento",label:"Magento Integration"},{value:"Payment for invoices",label:"Payment for Invoices"},{value:"PaySafe",label:"PaySafe"},{value:"Debit Orders",label:"Debit Orders"},{value:"PayOuts",label:"PayOuts"},{value:"I need help determining the right option",label:"I need help choosing the best option"}],ee=[{value:"None, just getting started",label:"Just getting started"},{value:"Less than R50 000",label:"Less than R50 000"},{value:"R50 000 - R100 000",label:"R50 000 - R100 000"},{value:"R100 000 - R500 000",label:"R100 000 - R500 000"},{value:"More than R500 000",label:"More than R500 000"}],te=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],ne=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],ae=s(b)``,re=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r}=e,i=o(e,["as","children","className"]);return u.createElement(ae,l({as:n,ref:t,className:r},i),a)}));const le=p.div`
  ${({hasErrors:e})=>g`
      && {
        position: relative;
        margin-bottom: 32px;

        .special-label {
          display: none;
        }
        .react-tel-input {
          .country-list {
            overflow-y: auto;
            color: ${V.palette.primary.main}!important;
          }
          .flag-dropdown .arrow {
            border-top-color: ${V.palette.primary.main};
          }

          .form-control {
            border: ${e?`solid 2px ${V.errorRed.main}`:`solid 2px ${V.textfieldGrey.main}`};

            width: 100%;
            max-height: 45px;

            background-color: ${V.textfieldGrey.main} !important;
            border-radius: 8px;
            padding: 14.5px 32px 14.5px 58px;
            transition: none !important;
            font-size: 14px;

            :focus {
              background-color: #ffffff !important;
            }

            :focus,
            :hover {
              border-color: ${V.infoBlue.main};
            }

            :disabled {
              border-color: rgba(0, 0, 0, 0.26);
            }
          }
        }
      }
    `}
`,oe=p.span`
  .MuiSvgIcon-root {
    fill: ${V.errorRed.main}!important;
  }
`,ie=p.span`
  position: absolute;
  top: 0;
  right: 14px;

  transform: translateY(24px);

  .MuiSvgIcon-root {
    fill: ${V.palette.primary.main};
  }
`,se=p.span`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 0.75rem;
  letter-spacing: 0.03333em;
  color: ${V.errorRed.main};

  transform: translateY(51px);
`,me=p(se)`
  top: 24px;
`,ce=x.default?x.default:x,ue=({onSubmit:e,formData:t,loading:n})=>{const[a,r]=u.useState(""),[o,i]=u.useState("");function s(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function m(e){if(!e)return"Required";switch(e.slice(0,2)){case"27":if(e.length<11)return"Too short";if(e.length>11)return"Too long";break;case"25":if(e.length<12)return"Too short";if(e.length>12)return"Too long";break;case"23":if(e.length<10)return"Too short";if(e.length>10)return"Too long"}return null}function c(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}function p(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}return E((()=>{(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};if(!e)return null;fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/validate",t).then((e=>e.json())).then((e=>{r(e.message.result.suggestion)}))})(o)}),500,[o]),u.createElement(y,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:r,setTouched:o})=>u.createElement(U,null,u.createElement(W,null,u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"firstName"},"First name"),u.createElement(k,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:X,validate:c,InputProps:{endAdornment:u.createElement($,{position:"end"},t.firstName&&r.firstName?u.createElement(oe,null,u.createElement(S,null)):null)}})),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"lastName"},"Last name"),u.createElement(k,{id:"lastName",name:"lastName",placeholder:"Smith",type:"text",variant:"outlined",component:X,validate:c,InputProps:{endAdornment:u.createElement($,{position:"end"},t.lastName&&r.lastName?u.createElement(oe,null,u.createElement(S,null)):null)}}))),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"role"},"Role"),u.createElement(k,{id:"role",name:"role",variant:"outlined",select:!0,component:X},te.map((e=>u.createElement(re,{key:e.value,value:e.value},e.label))))),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"contactNumber"},"Business contact number"),u.createElement(le,{hasErrors:t.contactNumber&&r.contactNumber},u.createElement(k,{id:"contact-number",name:"contactNumber",placeholder:"82 123 4567",disabled:n,max:9,type:"tel",country:"za",onlyCountries:["za","ke","mu"],component:ce,validate:m,autoFormat:!0,countryCodeEditable:!1,masks:{za:".. ... ....",mu:". ... ...",ke:"... ... ..."},onBlur:()=>{o(l(l({},r),{contactNumber:!0}))},onChange:t=>{e("contactNumber",t)}}),u.createElement(ie,null,t.contactNumber&&r.contactNumber?u.createElement($,{position:"end"},u.createElement(oe,null,u.createElement(S,null))):u.createElement($,{position:"end"},u.createElement(N,null))),u.createElement(se,null,t.contactNumber&&r.contactNumber&&u.createElement("p",null,t.contactNumber)))),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"email"},"Business contact email"),u.createElement(k,{id:"email",name:"email",placeholder:"email@address.co.za",type:"text",variant:"outlined",onChange:t=>{i(t.target.value),e("email",t.target.value)},component:X,validate:s,InputProps:{endAdornment:u.createElement($,{position:"end"},t.email&&r.email?u.createElement(oe,null,u.createElement(S,null)):u.createElement(M,null))}}),!t.email&&r.email&&a&&u.createElement(me,null,u.createElement("p",null,"Did you mean ",a,"?"))),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),u.createElement(k,{id:"businessName",name:"businessName",placeholder:"Peach Payments",type:"text",variant:"outlined",component:X,validate:p,InputProps:{endAdornment:u.createElement($,{position:"end"},t.businessName&&r.businessName?u.createElement(oe,null,u.createElement(S,null)):null)}})," "),u.createElement(_,null,u.createElement(z,{theme:V,type:"submit",disabled:n},"Next ",n?u.createElement(C,{size:14}):u.createElement(I,null))))))},pe=B({businessWebsite:F().matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Invalid format")});function de(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}const he=({onSubmit:e,handleBack:t,formData:n,loading:a})=>u.createElement(y,{initialValues:n,validationSchema:pe,onSubmit:t=>{e(t)}},(({errors:e,touched:n,values:r})=>u.createElement(U,null,u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL (optional)"),u.createElement(k,{id:"businessWebsite",name:"businessWebsite",placeholder:"www.peachpayments.co.za",type:"text",variant:"outlined",component:X,InputProps:{endAdornment:u.createElement($,{position:"end"},e.businessWebsite&&n.businessWebsite?u.createElement(oe,null,u.createElement(S,null)):null)}})),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),u.createElement(k,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:X},Q.map((e=>u.createElement(re,{key:e.value,value:e.value},e.label))))),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),u.createElement(k,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:X},ee.map((e=>u.createElement(re,{key:e.value,value:e.value},e.label))))),u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"extra-info"},"How else can we help you?"),u.createElement(k,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:6,multiline:!0,variant:"outlined",component:X,validate:de})),u.createElement(_,null,u.createElement(q,{theme:V,color:"primary",type:"button",onClick:()=>t(r),disabled:a},u.createElement(L,null)," Back")," ",u.createElement(z,{theme:V,color:"primary",type:"submit",disabled:a},"Get Started! ",a&&u.createElement(C,{size:14})))))),fe=p.div`
  min-height: 555px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${V.palette.primary.main}!important;

  max-width: 460px;

  .MuiInputBase-root {
    margin-bottom: 24px !important;
  }
  .MuiFormHelperText-root.Mui-error {
    transform: translateY(110%) !important;
  }
  p {
    margin: 8px 0 24px 0;
    color: ${V.palette.primary.light};
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    max-width: 100%;
  }
`,be=p(d)`
  flex-direction: column;
  display: flex;
  position: relative;
  button {
    width: 141px;
    text-transform: none;
    border-radius: 8px;
    height: 48px;
    background-color: ${V.infoBlue.main};
    box-shadow: none;

    display: flex;
    align-self: flex-end;

    :hover {
      background-color: ${V.infoBlue.hover};
    }
  }

  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`,ge=p.div`
  margin-left: 72px;
`,xe=p(_)`
  position: static;
  justify-content: space-between;

  button:nth-child(1) {
    max-width: 100px;

    background-color: ${V.palette.primary.light};
    :hover {
      background-color: ${V.palette.primary.light};
    }
  }
  button:nth-child(2) {
    width: 140px;
    margin-left: 15px;

    background-color: ${V.infoBlue.main};
    :hover {
      background-color: ${V.infoBlue.hover};
    }
  }

  @media (max-width: 767px) {
    button:nth-child(1) {
      max-width: 75px;
    }
    button:nth-child(2) {
      width: 100%;
    }
  }
`,Ee=()=>u.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),u.createElement("path",{d:"M50 44.498H50.5V43.998V41.998V41.498H50H44.5V35.998V35.498H44H42H41.5V35.998V41.498H36H35.5V41.998V43.998V44.498H36H41.5V49.998V50.498H42H44H44.5V49.998V44.498H50Z",fill:"#5ECEA6",stroke:"#5ECEA6"})),ye=B({email:F().email("Not a valid email format").required("Required")}),ve=({formSnapshotData:e,setActiveStep:t,setFormSnapshotData:n})=>u.createElement(fe,null,u.createElement(J,null,u.createElement(Ee,null),u.createElement("h3",null," Update email")),u.createElement(ge,null,u.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),u.createElement(y,{onSubmit:a=>{(a=>{t("update-email-success"),n(l(l({},e),a));const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/update",r).then((e=>e.json())).then((e=>console.log(e)))})(a)},initialValues:{email:e.email},validationSchema:ye},(({errors:e})=>u.createElement(be,null,u.createElement(v,null,u.createElement(w,{shrink:!0,htmlFor:"email"},"Contact Email"),u.createElement(k,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:X,InputProps:{endAdornment:u.createElement($,{position:"end"},e.email?u.createElement(oe,null,u.createElement(S,null)):null)}})),u.createElement(xe,null,u.createElement(q,{theme:V,color:"primary",type:"button",onClick:()=>t("success")},u.createElement(L,null)," Back"),u.createElement(z,{theme:V,color:"primary",type:"submit"},"Update email"))))))),we=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;
  color: ${V.palette.primary.main}!important;

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
    color: ${V.palette.primary.light};
    :first-of-type {
      margin: 0px 0 24px 72px;
    }
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    max-width: 100%;
  }
`,ke=p.span`
  color: #ff7658;
`,$e=()=>u.createElement("svg",{width:"51",height:"51",viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M43.5592 2.98828L20.1908 33.7975L6.375 19.9916L0 26.3666L21.2467 47.6133L51 9.36328L43.5592 2.98828Z",fill:"#5ECEA6"})),Se=s(O)``,Ne=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r,variant:i="default"}=e,s=o(e,["as","children","className","variant"]);return u.createElement(Se,l({as:n,ref:t,className:r,variant:i},s),a)})),Me=s(R)`
  && {
    ${e=>m`
      ${"outlined"!==e.variant?m`
            border: 1px solid transparent;
          `:m``}
    `}
  }
`,Ce=u.forwardRef(((e,t)=>{var{as:n,children:a,className:r,severity:i}=e,s=o(e,["as","children","className","severity"]);return u.createElement(Me,l({as:n,ref:t,className:r,severity:i},s),a)})),Ie=({email:e,setActiveStep:t})=>{const[n,a]=u.useState(!1),[r,l]=u.useState({message:"",type:""});return u.createElement(we,null,u.createElement(J,null,u.createElement($e,null),u.createElement("h3",null," Almost Done")),u.createElement("p",null,"All that's left is to verify your email address:",u.createElement("br",null)," ",u.createElement(ke,null,e)),u.createElement("p",null,"Didn't get an email? ",u.createElement("button",{onClick:()=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/resubmitemail",t).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong. Please try again.")})).then((e=>{a(!0),l({message:"Email sent successfully.",type:"success"})})).catch((e=>{a(!0),l({message:e,type:"error"})}))}},u.createElement(Z,null,"Send again"))," or ",u.createElement("button",{onClick:()=>t("update-email")},u.createElement(Z,null,"update"))," your email address"),u.createElement(Ne,{open:n,autoHideDuration:4e3,onClose:()=>a(!1)},u.createElement(Ce,{onClose:()=>a(!1),severity:r.type},r.message)))},Be=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 555px;
  color: ${V.palette.primary.main}!important;
  max-width: 460px;

  a {
    background: none;
    color: ${V.infoBlue.main};
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
    border-bottom: 1px solid ${V.infoBlue.main};
  }
  p {
    margin: 0 0 0 74px;
    color: ${V.palette.primary.light};
    :first-of-type {
      margin: 12px 0 24px 74px;
    }
  }

  @media (max-width: 990px) {
    justify-content: flex-start;
    max-width: 100%;
  }
`,Fe=()=>u.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),u.createElement("path",{d:"M39.01 37.03L46.52 40.25L39 39.25L39.01 37.03ZM46.51 45.75L39 48.97V46.75L46.51 45.75ZM37.01 34L37 41L52 43L37 45L37.01 52L58 43L37.01 34Z",fill:"#5ECEA6"})),Le=()=>u.createElement(Be,null,u.createElement(J,null,u.createElement(Fe,null),u.createElement("h3",null,"Email sent!")),u.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),u.createElement("p",null,"Still can't see the email? Get in contact with our ",u.createElement("a",{href:"https://support.peachpayments.com/support/home",target:"_blank"},"Support team"))),Oe=p(Ne)`
  && {
    position: static;
    margin-bottom: 16px;
    transform: none !important;
    .MuiAlert-root {
      background-color: ${V.palette.secondary.main};
      &,
      .MuiAlert-icon {
        color: #ffffff !important;
        align-items: center;
      }
    }
    ${({customWidth:e})=>g`
        max-width: 460px;
        @media (max-width: 990px) {
          max-width: ${e?"100%":"500px"};
        }
      `};
  }
`,Re=({showUserFeedback:e,setShowUserFeedback:t,customWidth:n})=>{const a=(e,n)=>{"clickaway"!==n&&t(!1)};return u.createElement(Oe,{open:!0,onClose:a,customWidth:n},u.createElement(Ce,{onClose:a,severity:"warning"},"An error has occurred. Please try submitting the form again or refresh the page."))},Ae=()=>{const[e,t]=u.useState({message:"",type:""}),[n,a]=u.useState(!0),[r,o]=u.useState(),[i,s]=u.useState(!1),[m,c]=u.useState("step-one"),[p,d]=u.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[h,f]=u.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumber:"",lookingFor:"Shopify",role:"owner",tradingVolume:"Less than R50 000",extraInfo:"",id:""}),b=decodeURIComponent(window.location.search.substring(1)).split("&");return u.useEffect((()=>{if("step-one"===m){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),ne.forEach((e=>{const n=(e=>{for(let t=0;t<b.length;t++){let n=b[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),d(l(l({},t),e))}}),[]),u.createElement(D,null,u.createElement(Re,{showUserFeedback:n,setShowUserFeedback:a,customWidth:"step-one"!==m&&"step-two"!==m}),"step-one"===m&&u.createElement(ue,{onSubmit:e=>{a(!1),s(!0),f(l(l({},h),e)),(e=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/create",n).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong. Please try again.")})).then((e=>(o(e.userId),s(!1),c("step-two"),e))).catch((e=>{s(!1),a(!0),t({message:e,type:"error"})}))})(l(l(l({},h),e),p))},formData:h,loading:i}),"step-two"===m&&u.createElement(he,{onSubmit:e=>{s(!0),a(!1);const n=e.businessWebsite.replace(/^https?\:\/\//i,"");f(l(l(l({},h),e),{businessWebsite:n})),(e=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("https://aaepmikbh8.execute-api.eu-west-1.amazonaws.com/dev/contact/submit",n).then((e=>{if(e.ok)return e.json();throw new Error("Something went wrong. Please try again.")})).then((e=>(s(!1),c("success"),e))).catch((e=>{s(!1),a(!0),t({message:e,type:"error"})}))})(l(l(l(l({},h),e),p),{businessWebsite:n,id:r}))},handleBack:e=>{f(l(l({},h),e)),c("step-one")},formData:h,loading:i}),"success"===m&&u.createElement(Ie,{email:h.email,setActiveStep:c}),"update-email"===m&&u.createElement(ve,{formSnapshotData:h,setFormSnapshotData:f,setActiveStep:c}),"update-email-success"===m&&u.createElement(Le,null),("step-one"===m||"step-two"===m)&&u.createElement(G,null,"Just like you, we hate spam. We'll only use your personal information to administer your account and to provide the products and services you requested from us."))},Pe=p.div`
  display: flex;
  justify-content: center;
`,je=()=>u.createElement(P,{theme:V},u.createElement(j,{theme:V},u.createElement(Pe,null,u.createElement(Ae,null))));A.render(u.createElement(je,null),document.getElementById("contact-form"));
