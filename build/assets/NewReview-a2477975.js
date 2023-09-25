import{r as c,A as x,u as v,j as e,R as f,a as g}from"./index-6f7faf75.js";import{u as I,I as s,V as R,a as E,b as j}from"./form-hook-0926a5de.js";import{u as A,E as b,B as h}from"./http-hook-88248e19.js";import{I as T}from"./ImageUpload-22d88d96.js";/* empty css                  */const L=()=>{const i=c.useContext(x),{isLoading:n,error:l,sendRequest:o,clearError:p}=A(),[t,r]=I({title:{value:"",isValid:!1},description:{value:"",isValid:!1},rating:{value:null,isValid:!1},image:{value:null,isValid:!1}},!1),u=v(),d=async m=>{m.preventDefault();try{const a=new FormData;a.append("title",t.inputs.title.value),a.append("description",t.inputs.description.value),a.append("address",t.inputs.rating.value),a.append("image",t.inputs.image.value),await o("http://localhost:5000/api/places","POST",a,{Authorization:"Bearer "+i.token}),u("/")}catch{}};return e.jsxs(f.Fragment,{children:[e.jsx(b,{error:l,onClear:p}),e.jsxs("form",{className:"place-form",onSubmit:d,children:[n&&e.jsx(g,{asOverlay:!0}),e.jsx(s,{id:"title",element:"input",type:"text",label:"Title",validators:[R()],errorText:"Please enter a valid title.",onInput:r}),e.jsx(s,{id:"description",element:"textarea",label:"Description",validators:[E(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:r}),e.jsx(s,{id:"rating",element:"input",label:"How you rate it?",validators:[j()],errorText:"Please enter number range between 1 and 10.",onInput:r}),e.jsx(T,{id:"image",onInput:r,errorText:"Please provide an image"}),e.jsx(h,{type:"submit",disabled:!t.isValid,children:"ADD REVIEW"})]})]})};export{L as default};
