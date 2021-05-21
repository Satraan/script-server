var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(n)for(var o of n(r))a.call(r,o)&&l(e,o,r[o]);return e},o=(e,l)=>{var r={};for(var o in e)t.call(e,o)&&l.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))l.indexOf(o)<0&&a.call(e,o)&&(r[o]=e[o]);return r};import{c as i,q as m,A as u,B as s,r as c,a as d,F as p,T as h,g as f,M as b,b as x,l as g,u as E,d as v,e as y,I as w,f as k,h as $,i as M,P as N,E as B,C as I,j as C,k as L,m as R,n as S,o as F,G as O,p as V}from"./vendor.df4a863c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),l(m)},onload(){n(self[t].moduleMap[o]),l(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const A=i({palette:{primary:{main:"#0A1F44",light:"#53627C"},secondary:{main:"#2aa7db"},success:{main:"#6FCF97"}}}),H=r(r({},{bgColors:{contained:"inherit",outlined:"transparent",text:"transparent"},hoverColors:{contained:"inherit",outlined:"transparent",text:"transparent"},mint:{main:"#5ECEA6",hover:"#51BF98"},infoBlue:{main:"#1C7ED6",hover:"#0368C2"},errorRed:{main:"#F14B73"},textfieldGrey:{main:"#F3F4F9"},placeholderGrey:{main:"#8A94A6"},disabledGrey:{main:"#C9CED6"},borderGrey:{main:"#F5F7FA"}}),A),P=m(s)`
  && {
    ${({theme:e,variant:t,color:n,bg:a,size:l})=>u`
      font-weight: bold;
      border: 1px solid transparent;

      ${e.palette[n]?u`
            color: ${"contained"===t?e.palette[n].contrastText:e.palette[n].main};
            ${"outlined"===t?u`
                  border-color: ${e.palette[n].main};
                  :hover {
                    border-color: ${e.palette[n].main};
                  }
                `:u``}
          `:u``}

      ${e.palette[a]&&"contained"===t?u`
            background-color: ${e.palette[a].main};
            :hover {
              background-color: ${e.palette[a].light};
            }
          `:u``}
    `}
  }
`,z=c.forwardRef(((e,t)=>{var{as:n,children:a,className:l,variant:i="contained",size:m="medium"}=e,u=o(e,["as","children","className","variant","size"]);return c.createElement(P,r({as:n,ref:t,className:l,variant:i,size:m},u),a)})),j=d.div`
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
      }
      input::placeholder {
        color: ${H.placeholderGrey.main};
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
`,T=d.div`
  display: flex;
  justify-content: space-between;

  .MuiFormControl-root {
    min-width: 48%;
    :first-child {
      margin-right: 16px;
    }
  }
`,D=d(p)`
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
    height: 48px;
    font-size: 16px;

    :hover {
      background-color: ${H.infoBlue.hover};
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
`,G=d.p`
  margin-top: 8px !important;
  color: ${H.placeholderGrey.main};
  font-size: 11px !important;
  text-align: center;

  max-width: 460px;

  @media (max-width: 990px) {
    max-width: 500px;
  }
`,U=d.span`
  color: ${H.infoBlue.main};
  border-bottom: 1px solid ${H.infoBlue.main};
  :hover {
    color: ${H.infoBlue.hover};
    border-bottom: none;
  }
`,W=d.p`
  color: ${H.errorRed.main};
  font-size: 11px !important;
  text-align: center;
`,Z=d.div`
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
`,q=d(z)`
  && {
    padding-right: 24px;
  }
`,J=m(h)`
  && {
    :first-child {
      margin-right: 15px;
      margin-bottom: 15px;
    }
  }
`,Y=c.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return c.createElement(J,r({as:n,ref:t,className:l},i),a)}));function K(e){var{children:t}=e,n=o(e,["children"]);return c.createElement(Y,r({},function(e){var{disabled:t,field:n}=e,{onBlur:a}=n,l=o(n,["onBlur"]),{form:{isSubmitting:i,touched:m,errors:u},onBlur:s,helperText:c}=e,d=o(e,["disabled","field","form","onBlur","helperText"]);const p=f(u,l.name),h=f(m,l.name)&&!!p;return r(r({variant:d.variant,error:h,helperText:h?p:c,disabled:null!=t?t:i,onBlur:null!=s?s:function(e){a(null!=e?e:l.name)}},l),d)}(n)),t)}K.displayName="FormikMaterialUITextField";const X=[{value:"API/Mobile SDK",label:"API / Mobile SDK"},{value:"Shopify",label:"Shopify Integration"},{value:"WIX",label:"WIX Integration"},{value:"WooCommerce",label:"WooCommerce Integration"},{value:"Magento",label:"Magento Integration"},{value:"Payment for invoices",label:"Payment for Invoices"},{value:"PaySafe",label:"PaySafe"},{value:"Debit Orders",label:"Debit Orders"},{value:"PayOuts",label:"PayOuts"},{value:"I need help determining the right option",label:"I need help choosing the best option"}],Q=[{value:"None, just getting started",label:"Just getting started"},{value:"Less than R50 000",label:"Less than R50 000"},{value:"R50 000 - R100 000",label:"R50 000 - R100 000"},{value:"R100 000 - R500 000",label:"R100 000 - R500 000"},{value:"More than R500 000",label:"More than R500 000"}],ee=[{value:"owner",label:"Business Owner"},{value:"manager",label:"Manager"},{value:"developer",label:"Developer/Engineer"},{value:"product-manager",label:"Product Manager"},{value:"agency",label:"Agency"},{value:"other",label:"Other"}],te=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],ne=m(b)``,ae=c.forwardRef(((e,t)=>{var{as:n,children:a,className:l}=e,i=o(e,["as","children","className"]);return c.createElement(ne,r({as:n,ref:t,className:l},i),a)}));const le=d.div`
  ${({hasErrors:e})=>x`
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
`,re=d.span`
  .MuiSvgIcon-root {
    fill: ${H.errorRed.main}!important;
  }
`,oe=d.span`
  position: absolute;
  top: 0;
  right: 14px;

  transform: translateY(24px);

  .MuiSvgIcon-root {
    fill: ${H.palette.primary.main};
  }
`,ie=d.span`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 0.75rem;
  letter-spacing: 0.03333em;
  color: ${H.errorRed.main};

  transform: translateY(51px);
`,me=d(ie)`
  top: 24px;
`,ue=g.default?g.default:g,se=({onSubmit:e,formData:t,loading:n})=>{const[a,l]=c.useState(""),[o,i]=c.useState("");function m(e){return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?null:"Not a valid email format":"Required"}function u(e){if(!e)return"Required";switch(e.slice(0,2)){case"27":if(e.length<11)return"Too short";if(e.length>11)return"Too long";break;case"25":if(e.length<12)return"Too short";if(e.length>12)return"Too long";break;case"23":if(e.length<10)return"Too short";if(e.length>10)return"Too long"}return null}function s(e){if(!e)return"Required";if(e.length<3)return"Too short";if(e.length>124)return"Too long";return new RegExp(/^[^&%$#@!+=<>/\|,±§]+$/).test(e)?null:"Not allowed &%$#@!+=<>/\\|,±§"}function d(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}return E((()=>{(e=>{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})};if(!e)return null;fetch("https://3dudrcyz25.execute-api.eu-west-1.amazonaws.com/dev/validate",t).then((e=>e.json())).then((e=>{l(e.message.result.suggestion)}))})(o)}),500,[o]),c.createElement(v,{initialValues:t,onSubmit:t=>e(t)},(({setFieldValue:e,errors:t,touched:l,setTouched:o})=>c.createElement(D,null,c.createElement(T,null,c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"firstName"},"First name"),c.createElement(k,{id:"firstName",name:"firstName",placeholder:"John",type:"text",variant:"outlined",component:K,validate:s,InputProps:{endAdornment:c.createElement($,{position:"end"},t.firstName&&l.firstName?c.createElement(re,null,c.createElement(M,null)):null)}})),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"lastName"},"Last name"),c.createElement(k,{id:"lastName",name:"lastName",placeholder:"Smith",type:"text",variant:"outlined",component:K,validate:s,InputProps:{endAdornment:c.createElement($,{position:"end"},t.lastName&&l.lastName?c.createElement(re,null,c.createElement(M,null)):null)}}))),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"role"},"Role"),c.createElement(k,{id:"role",name:"role",variant:"outlined",select:!0,component:K},ee.map((e=>c.createElement(ae,{key:e.value,value:e.value},e.label))))),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"contactNumber"},"Business contact number"),c.createElement(le,{hasErrors:t.contactNumber&&l.contactNumber},c.createElement(k,{id:"contact-number",name:"contactNumber",placeholder:"82 123 4567",disabled:n,max:9,type:"tel",country:"za",onlyCountries:["za","ke","mu"],component:ue,validate:u,autoFormat:!0,countryCodeEditable:!1,masks:{za:".. ... ....",mu:". ... ...",ke:"... ... ..."},onBlur:()=>{o(r(r({},l),{contactNumber:!0}))},onChange:t=>{e("contactNumber",t)}}),c.createElement(oe,null,t.contactNumber&&l.contactNumber?c.createElement($,{position:"end"},c.createElement(re,null,c.createElement(M,null))):c.createElement($,{position:"end"},c.createElement(N,null))),c.createElement(ie,null,t.contactNumber&&l.contactNumber&&c.createElement("p",null,t.contactNumber)))),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"email"},"Business contact email"),c.createElement(k,{id:"email",name:"email",placeholder:"email@address.co.za",type:"text",variant:"outlined",onChange:t=>{i(t.target.value),e("email",t.target.value)},component:K,validate:m,InputProps:{endAdornment:c.createElement($,{position:"end"},t.email&&l.email?c.createElement(re,null,c.createElement(M,null)):c.createElement(B,null))}}),!t.email&&l.email&&a&&c.createElement(me,null,c.createElement("p",null,"Did you mean ",a,"?"))),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"businessName"},"Business name (optional)"),c.createElement(k,{id:"businessName",name:"businessName",placeholder:"Peach Payments",type:"text",variant:"outlined",component:K,validate:d,InputProps:{endAdornment:c.createElement($,{position:"end"},t.businessName&&l.businessName?c.createElement(re,null,c.createElement(M,null)):null)}})," "),c.createElement(_,null,c.createElement(z,{theme:H,type:"submit",disabled:n},"Next ",n?c.createElement(I,{size:14}):c.createElement(C,null))))))},ce=L({businessWebsite:R().matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/,"Invalid format")});function de(e){if(!e)return null;return new RegExp(/^[^%$#]+$/).test(e)?null:"Not allowed %$#"}const pe=({onSubmit:e,handleBack:t,formData:n,loading:a})=>c.createElement(v,{initialValues:n,validationSchema:ce,onSubmit:t=>{e(t)}},(({errors:e,touched:n,values:l})=>c.createElement(D,null,c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"businessWebsite"},"Business website URL (optional)"),c.createElement(k,{id:"businessWebsite",name:"businessWebsite",placeholder:"www.peachpayments.co.za",type:"text",variant:"outlined",component:K,InputProps:{endAdornment:c.createElement($,{position:"end"},e.businessWebsite&&n.businessWebsite?c.createElement(re,null,c.createElement(M,null)):null)}})),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"looking-for"},"What are you looking for?"),c.createElement(k,{id:"looking-for",name:"lookingFor",variant:"outlined",select:!0,component:K},X.map((e=>c.createElement(ae,{key:e.value,value:e.value},e.label))))),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"trading-volume"},"Trading Volume"),c.createElement(k,{id:"trading-volume",name:"tradingVolume",variant:"outlined",select:!0,component:K},Q.map((e=>c.createElement(ae,{key:e.value,value:e.value},e.label))))),c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"extra-info"},"How else can we help you?"),c.createElement(k,{id:"extra-info",name:"extraInfo",placeholder:"Tell us how we can help your business thrive",type:"text",rows:6,multiline:!0,variant:"outlined",component:K,validate:de})),c.createElement(_,null,c.createElement(q,{theme:H,color:"primary",type:"button",onClick:()=>t(l),disabled:a},c.createElement(S,null)," Back")," ",c.createElement(z,{theme:H,color:"primary",type:"submit",disabled:a},"Get Started! ",a&&c.createElement(I,{size:14})))))),he=d.div`
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
`,fe=d(p)`
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
`,be=d.div`
  margin-left: 72px;
`,xe=d(_)`
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

  @media (max-width: 767px) {
    button:nth-child(1) {
      max-width: 75px;
    }
    button:nth-child(2) {
      width: 100%;
    }
  }
`,ge=()=>c.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),c.createElement("path",{d:"M50 44.498H50.5V43.998V41.998V41.498H50H44.5V35.998V35.498H44H42H41.5V35.998V41.498H36H35.5V41.998V43.998V44.498H36H41.5V49.998V50.498H42H44H44.5V49.998V44.498H50Z",fill:"#5ECEA6",stroke:"#5ECEA6"})),Ee=L({email:R().email("Not a valid email format").required("Required")}),ve=({formSnapshotData:e,handleUpdateContact:t,handleBack:n})=>c.createElement(he,null,c.createElement(Z,null,c.createElement(ge,null),c.createElement("h3",null," Update email")),c.createElement(be,null,c.createElement("p",null,"Once you've updated your email address we'll send you a new verification email. Just click the link and you're done!"),c.createElement(v,{onSubmit:e=>{t(e)},initialValues:{email:e.email},validationSchema:Ee},(({errors:e})=>c.createElement(fe,null,c.createElement(y,null,c.createElement(w,{shrink:!0,htmlFor:"email"},"Contact Email"),c.createElement(k,{id:"email",name:"email",placeholder:"john@example.com",type:"email",variant:"outlined",component:K,InputProps:{endAdornment:c.createElement($,{position:"end"},e.email?c.createElement(re,null,c.createElement(M,null)):null)}})),c.createElement(xe,null,c.createElement(q,{theme:H,color:"primary",type:"button",onClick:n},c.createElement(S,null)," Back"),c.createElement(z,{theme:H,color:"primary",type:"submit"},"Update email"))))))),ye=d.div`
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
`,we=d.span`
  color: #ff7658;
`,ke=()=>c.createElement("svg",{width:"51",height:"51",viewBox:"0 0 51 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M43.5592 2.98828L20.1908 33.7975L6.375 19.9916L0 26.3666L21.2467 47.6133L51 9.36328L43.5592 2.98828Z",fill:"#5ECEA6"})),$e=({email:e,setActiveStep:t})=>c.createElement(ye,null,c.createElement(Z,null,c.createElement(ke,null),c.createElement("h3",null," Almost Done")),c.createElement("p",null,"All that's left is to verify your email address:",c.createElement("br",null)," ",c.createElement(we,null,e)),c.createElement("p",null,"Didn't get an email? ",c.createElement("button",null,c.createElement(U,null,"Send again"))," or ",c.createElement("button",{onClick:()=>t("update-email")},c.createElement(U,null,"update"))," your email address")),Me=d.div`
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
`,Ne=()=>c.createElement("svg",{width:"57",height:"57",viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M47.5 9.5H9.5C6.8875 9.5 4.77375 11.6375 4.77375 14.25L4.75 42.75C4.75 45.3625 6.8875 47.5 9.5 47.5H28.5V42.75H9.5V19L28.5 30.875L47.5 19V30.875H52.25V14.25C52.25 11.6375 50.1125 9.5 47.5 9.5ZM28.5 26.125L9.5 14.25H47.5L28.5 26.125Z",fill:"#1C7ED6"}),c.createElement("path",{d:"M39.01 37.03L46.52 40.25L39 39.25L39.01 37.03ZM46.51 45.75L39 48.97V46.75L46.51 45.75ZM37.01 34L37 41L52 43L37 45L37.01 52L58 43L37.01 34Z",fill:"#5ECEA6"})),Be=()=>c.createElement(Me,null,c.createElement(Z,null,c.createElement(Ne,null),c.createElement("h3",null,"Email sent!")),c.createElement("p",null,"We've sent you another verification and you should see it in your inbox shortly."),c.createElement("p",null,"Still can't see the email? Get in contact with our ",c.createElement("a",{href:"https://support.peachpayments.com/support/home",target:"_blank"},"Support team"))),Ie=()=>{c.useState();const[e,t]=c.useState(!1),[n,a]=c.useState(),[l,o]=c.useState("step-one"),[i,m]=c.useState({utm_source:"",utm_medium:"",utm_term:"",utm_content:"",utm_name:"",hutk:"",pageName:"",pageUri:""}),[u,s]=c.useState({email:"",firstName:"",lastName:"",businessName:"",businessWebsite:"",contactNumber:"",lookingFor:"Shopify",role:"owner",tradingVolume:"Less than R50 000",extraInfo:"",id:""}),d=decodeURIComponent(window.location.search.substring(1)).split("&");return c.useEffect((()=>{if("step-one"===l){let e={hutk:"",pageName:document.title,pageUri:document.URL},t={};const n=document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));n&&n.length>0&&(e.hutk=n[2]),te.forEach((e=>{const n=(e=>{for(let t=0;t<d.length;t++){let n=d[t].split("=");if(n[0]===e)return null===n[1]?null:n[1]}})(e);null!=n&&""!=n&&null!=n&&(t[e]=n)})),m(r(r({},t),e))}}),[]),c.createElement(j,null,"step-one"===l&&c.createElement(se,{onSubmit:e=>{s(r(r({},u),e)),o("step-two")},formData:u,loading:e}),"step-two"===l&&c.createElement(pe,{onSubmit:e=>{t(!0);const n=e.businessWebsite.replace(/^https?\:\/\//i,"");o("success"),s(r(r(r({},u),e),{businessWebsite:n}))},handleBack:e=>{s(r(r({},u),e)),o("step-one")},formData:u,loading:e}),"success"===l&&c.createElement($e,{email:u.email,setActiveStep:o}),"update-email"===l&&c.createElement(ve,{formSnapshotData:u,handleUpdateContact:e=>{o("update-email-success"),s(r(r({},u),e))},handleBack:()=>o("success")}),"update-email-success"===l&&c.createElement(Be,null),n&&c.createElement(W,null,n),("step-one"===l||"step-two"===l)&&c.createElement(G,null,"Just like you, we hate spam. We'll only use your personal information to administer your account and to provide the products and services you requested from us."))},Ce=d.div`
  display: flex;
  justify-content: center;
`,Le=()=>c.createElement(O,{theme:H},c.createElement(V,{theme:H},c.createElement(Ce,null,c.createElement(Ie,null))));F.render(c.createElement(Le,null),document.getElementById("contact-form"));
