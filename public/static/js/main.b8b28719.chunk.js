(this["webpackJsonpproject-mesto-react"]=this["webpackJsonpproject-mesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),s=n(6),r=n.n(s),i=(n(15),n(9)),l=n(2),u=n.p+"static/media/header__logo.c2821b38.svg";function d(){return Object(a.jsx)("header",{className:"header page__header",children:Object(a.jsx)("a",{className:"header__logo-link",href:"https://script-ninja.github.io/mesto",children:Object(a.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"})})})}var h=c.a.createContext();function p(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,s=e.onCardDelete,r=c.a.useContext(h);return Object(a.jsxs)("figure",{className:"photo-card",children:[Object(a.jsx)("img",{className:"photo-card__image",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(a.jsxs)("figcaption",{className:"photo-card__caption",children:[Object(a.jsx)("h2",{className:"photo-card__title",title:t.name,children:t.name}),Object(a.jsx)("button",{className:"photo-card__like-button".concat(t.likes.some((function(e){return e._id===r._id}))?" photo-card__like-button_liked":""),type:"button",onClick:function(){o(t)},children:t.likes.length}),t.owner._id===r._id&&Object(a.jsx)("button",{className:"photo-card__del-button",type:"button",onClick:function(){s(t)}})]})]})}function b(e){var t=c.a.useContext(h);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile content__profile",children:[Object(a.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar,children:Object(a.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("p",{className:"profile__career",children:t.about}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(a.jsxs)("section",{className:"gallery",children:[e.cards.length<=0&&Object(a.jsx)("h2",{className:"gallery__message gallery__message_visible",children:"\u041d\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439"}),e.cards.map((function(t){return Object(a.jsx)(p,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))]})]})}function A(){return Object(a.jsx)("footer",{className:"footer page__footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})}function j(e){return Object(a.jsx)("section",{className:"popup".concat(e.isOpen?" popup_visible":""),"data-type":e.name,onClick:e.onClose,children:Object(a.jsxs)("form",{className:"form",name:e.name,onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"form__title",children:e.title}),e.children,Object(a.jsx)("button",{className:"form__button-submit",type:"submit",children:e.submitButtonText}),Object(a.jsx)("button",{className:"popup__button-close",type:"button"})]})})}function m(e){var t=c.a.useRef();return Object(a.jsx)(j,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value)},children:Object(a.jsxs)("label",{className:"form__field",htmlFor:"avatar-link",children:[Object(a.jsx)("input",{id:"avatar-link",className:"form__text",type:"url",name:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),Object(a.jsx)("span",{id:"avatar-link-error",className:"form__text-error"})]})})}function f(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=c.a.useState(""),i=Object(l.a)(r,2),u=i[0],d=i[1],p=c.a.useContext(h);return c.a.useEffect((function(){s(p.name),d(p.about)}),[p]),Object(a.jsxs)(j,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u})},children:[Object(a.jsxs)("label",{className:"form__field",htmlFor:"profile-name",children:[Object(a.jsx)("input",{id:"profile-name",className:"form__text",type:"text",name:"user-name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:o,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{id:"profile-name-error",className:"form__text-error"})]}),Object(a.jsxs)("label",{className:"form__field",htmlFor:"profile-hobby",children:[Object(a.jsx)("input",{id:"profile-hobby",className:"form__text",type:"text",name:"user-hobby",placeholder:"\u0412\u0430\u0448\u0435 \u0445\u043e\u0431\u0431\u0438",minLength:"2",maxLength:"200",required:!0,value:u,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{id:"profile-hobby-error",className:"form__text-error"})]})]})}function x(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],s=n[1],r=c.a.useState(""),i=Object(l.a)(r,2),u=i[0],d=i[1];return Object(a.jsxs)(j,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:o,link:u})},children:[Object(a.jsxs)("label",{className:"form__field",htmlFor:"place-name",children:[Object(a.jsx)("input",{id:"place-name",className:"form__text",type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,value:o,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{id:"place-name-error",className:"form__text-error"})]}),Object(a.jsxs)("label",{className:"form__field",htmlFor:"place-link",children:[Object(a.jsx)("input",{id:"place-link",className:"form__text",type:"url",name:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:u,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{id:"place-link-error",className:"form__text-error"})]})]})}function g(e){return Object(a.jsx)("section",{className:"popup popup_type_photo".concat(e.card?" popup_visible":""),"data-type":"photo",onClick:e.onClose,children:e.card&&Object(a.jsxs)("figure",{className:"photo",children:[Object(a.jsx)("img",{className:"photo__image",src:e.card.link,alt:e.card.name}),Object(a.jsxs)("figcaption",{className:"photo__caption",children:[Object(a.jsx)("h2",{className:"photo__title",children:e.card.name}),Object(a.jsx)("button",{className:"popup__button-close popup__button-close_type_photo",type:"button"})]})]})})}var C=n(7),O=n(8),k=new(function(){function e(t){Object(C.a)(this,e),this._baseURL=t.url,this._token=t.token}return Object(O.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status,": ").concat(e.statusText,"."))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"setUserData",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({name:n,about:a})}).then((function(e){return t._handleResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._handleResponse(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseURL,"/cards"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return e._handleResponse(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:{authorization:this._token,"content-type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._handleResponse(e)}))}},{key:"toggleLike",value:function(e,t){var n=this;return fetch("".concat(this._baseURL,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then((function(e){return n._handleResponse(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-18",token:"80cc9190-bc61-4b09-b6f2-ea43f973474f"});function _(){var e=c.a.useState({_id:0,name:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",about:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",avatar:"data:image/jpeg;base64,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"}),t=Object(l.a)(e,2),n=t[0],o=t[1];c.a.useEffect((function(){k.getUserData().then((function(e){o(e)})).catch((function(e){console.log(e)}))}),[]);var s=c.a.useState([]),r=Object(l.a)(s,2),u=r[0],p=r[1];c.a.useEffect((function(){k.getCards().then((function(e){p(e)})).catch((function(e){console.log(e)}))}),[]);var C=c.a.useState(!1),O=Object(l.a)(C,2),_=O[0],v=O[1];var S=c.a.useState(!1),N=Object(l.a)(S,2),R=N[0],y=N[1];var E=c.a.useState(!1),U=Object(l.a)(E,2),B=U[0],P=U[1];var L=c.a.useState(null),W=Object(l.a)(L,2),w=W[0],T=W[1];function z(e){(e.target.classList.contains("popup__button-close")||e.target===e.currentTarget)&&F()}function F(){v(!1),y(!1),P(!1),T(null)}return Object(a.jsxs)(h.Provider,{value:n,children:[Object(a.jsxs)("div",{className:"root",children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{cards:u,onEditAvatar:function(){v(!0)},onEditProfile:function(){y(!0)},onAddPlace:function(){P(!0)},onCardClick:function(e){T(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));k.toggleLike(e._id,t).then((function(t){var n=u.map((function(n){return n._id===e._id?t:n}));p(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){var t=[];u.forEach((function(n){n!==e&&t.push(n)})),p(t)})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(A,{})]}),Object(a.jsx)(m,{onUpdateAvatar:function(e){k.setUserAvatar(e).then((function(e){o(e),F()})).catch((function(e){console.log(e)}))},isOpen:_,onClose:z}),Object(a.jsx)(f,{onUpdateUser:function(e){var t=e.name,n=e.about;k.setUserData({name:t,about:n}).then((function(e){o(e),F()})).catch((function(e){console.log(e)}))},isOpen:R,onClose:z}),Object(a.jsx)(x,{onAddPlace:function(e){var t=e.name,n=e.link;k.addCard({name:t,link:n}).then((function(e){p([e].concat(Object(i.a)(u))),F()})).catch((function(e){console.log(e)}))},isOpen:B,onClose:z}),Object(a.jsx)(j,{name:"confirmation",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButtonText:"\u0414\u0430"}),Object(a.jsx)(g,{card:w,onClose:z})]})}var v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.querySelector(".page")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.b8b28719.chunk.js.map