var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o.register;var r=o("iQIUW");const i=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');i.addEventListener("submit",function(e){e.preventDefault();let t=Number(u.value);for(let e=1;e<=a.value;e++)(function(e,t){return new Promise((n,o)=>{let r=Math.random()>.3;setTimeout(()=>{r?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(e,t).then(({position:e,delay:t})=>{(0,r.Notify).success(`\u{2705} Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{(0,r.Notify).failure(`\u{274C} Rejected promise ${e} in ${t}ms`)}),t+=Number(l.value)});
//# sourceMappingURL=03-promises.60a9526c.js.map