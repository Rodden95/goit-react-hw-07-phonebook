(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(e,t,n){},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),c=(n(40),n(10)),s=n(8),d=n(32),u=n(12),l=Object(d.a)({reducerPath:"phonebookApi",baseQuery:Object(u.d)({baseUrl:"https://620eeca5ec8b2ee2832efb48.mockapi.io/"}),tagTypes:["Phone"],endpoints:function(e){return{getContactByName:e.query({query:function(e){return"phones"},providesTags:["Phone"]}),deletePhone:e.mutation({query:function(e){return{url:"phones/".concat(e),method:"DELETE"}},invalidatesTags:["Phone"]}),addPhone:e.mutation({query:function(e){return{url:"phones",method:"POST",body:{name:e.name,phone:e.phone}}},invalidatesTags:["Phone"]})}}}),h=l.useGetContactByNameQuery,b=l.useDeletePhoneMutation,j=l.useAddPhoneMutation,m=n(49),p=n(48),f=(n(19),n(24)),O=n(1);function x(e){var t=e.phones,n=j(),a=Object(c.a)(n,1)[0];return Object(O.jsxs)(m.a,{action:"submit",onSubmit:function(e){e.preventDefault(),t.find((function(t){return t.name===e.target.name.value}))?f.b.error("Already in phonebook"):a({phone:e.target.phone.value,name:e.target.name.value})},children:[Object(O.jsxs)(m.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(O.jsx)(m.a.Label,{children:"Contact name"}),Object(O.jsx)(m.a.Control,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(O.jsx)(m.a.Label,{children:"Number"}),Object(O.jsx)(m.a.Control,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(O.jsx)(p.a,{variant:"primary",type:"submit",children:"Add"})]})}var v=n(50);function y(e){var t=e.phones,n=e.onDelete,a=Object(s.e)((function(e){return e.contacts.filter})),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(O.jsx)(v.a,{children:Object(O.jsx)("ul",{children:r.map((function(e){var t=e.phone,a=e.name,r=e.id;return Object(O.jsxs)("li",{className:"item",children:[a,": ",t," ",Object(O.jsx)("button",{onClick:function(){return n(r)},children:"X"})]},r)}))})})}var P=n(3),g=Object(P.d)({name:"phonebook",initialState:{items:[{name:"denis1",phone:"124-123-123",id:"qwe1"},{name:"denis2",phone:"125-123-123",id:"qwe2"},{name:"denis3",phone:"126-123-123",id:"qwe3"}],filter:""},reducers:{addPhone:function(e,t){var n=t.payload;null===n||void 0===n||n.map((function(t){var n=t.name,a=t.phone,r=t.id;return e.items.push({name:n,phone:a,id:r})}))},deletePhone:function(e,t){var n=t.payload;return{items:e.items.filter((function(e){return e.id!==n})),filter:e.filter}},setFilter:function(e,t){var n=t.payload;e.filter=n},filterPhonebook:function(e,t){var n=t.payload;return{items:e.items.filter((function(e){return e.name.toLowerCase().includes(n)})),filter:n}}}}),w=g.actions,C=(w.addPhone,w.deletePhone,w.setFilter),k=(w.filterPhonebook,g.reducer);function q(){var e=Object(s.d)();return Object(O.jsx)(m.a,{children:Object(O.jsxs)(m.a.Group,{className:"mb-3",children:[Object(O.jsx)(m.a.Label,{children:"Filter"}),Object(O.jsx)(m.a.Control,{type:"text",onChange:function(t){return e(C(t.currentTarget.value))}})]})})}var A=function(){var e=h(),t=e.data,n=(e.isLoading,b()),a=Object(c.a)(n,1)[0];return Object(O.jsxs)("div",{children:[t&&Object(O.jsx)(x,{phones:t}),Object(O.jsx)(q,{}),t&&Object(O.jsx)(y,{phones:t,onDelete:a})]})},N=function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(f.a,{}),Object(O.jsx)(A,{})]})},L=n(35),T=n(15),B=Object(P.a)({reducer:Object(T.a)({contacts:k},l.reducerPath,l.reducer),middleware:function(e){return[].concat(Object(L.a)(e()),[l.middleware])}});i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(s.a,{store:B,children:Object(O.jsx)(N,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.466bc022.chunk.js.map