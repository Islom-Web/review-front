import{r as n,b as j,A as V,u as E,j as e,a as I}from"./index-962aa7a8.js";import{u as b,E as A,B as C}from"./http-hook-a222d301.js";import{u as P,I as m,V as T,a as y}from"./form-hook-abbd2a98.js";import{C as R}from"./Card-b927284e.js";/* empty css                  */const w=()=>{const{isLoading:l,error:o,sendRequest:i,clearError:x}=b(),[a,f]=n.useState(),{placeId:r}=j(),c=n.useContext(V),v=E(),[s,d,p]=P({title:{value:"",isValid:!0},description:{value:"",isValid:!0}},!1);n.useEffect(()=>{(async()=>{try{const t=await i(`https://review-back.onrender.com/api/places/${r}`);f(t.place),p({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0)}catch{}})()},[i,r,p]);const h=async u=>{u.preventDefault();try{await i(`https://review-back.onrender.com/api/places/${r}`,"PATCH",JSON.stringify({title:s.inputs.title.value,description:s.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+c.token}),v("/"+c.userId+"/places")}catch{}};return l?e.jsx("div",{className:"center",children:e.jsx(I,{})}):!a&&!o?e.jsx("div",{className:"center",children:e.jsx(R,{children:e.jsx("h2",{children:"Coundlnt find place!"})})}):e.jsxs(e.Fragment,{children:[e.jsx(A,{error:o,onClear:x}),!l&&a&&e.jsxs("form",{className:"place-form",onSubmit:h,children:[e.jsx(m,{id:"title",element:"input",type:"text",label:"Title",validators:[T()],errorText:"Please enter a valid title",onInput:d,initialValue:a.title,initialValid:!0}),e.jsx(m,{id:"description",element:"textarea",label:"Description",validators:[y(5)],errorText:"Please enter a valid description",onInput:d,initialValue:a.description,initialValid:!0}),e.jsx(C,{type:"submit",disabled:!s.isValid,children:"UPDATE REVIEW"})]})]})};export{w as default};
