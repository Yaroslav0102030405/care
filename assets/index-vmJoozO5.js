(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelector(".sec-text"),i=()=>{setTimeout(()=>{s.textContent="Saviour for you"},0),setTimeout(()=>{s.textContent="our contact +1(437)992-7217"},1e3),setTimeout(()=>{s.textContent="the fastest help"},2e3)};i();setInterval(i,6e3);(()=>{const o=document.querySelector("[data-menu-button]"),r=document.querySelector("[data-menu]");o.addEventListener("click",()=>{const n=o.getAttribute("aria-expanded")==="true"||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!n),r.classList.toggle("is-open")})})();(()=>{const o={openModalBtn:document.querySelector("[data-open-modal]"),closeModalBtn:document.querySelector("[data-close-modal]"),backdrop:document.querySelector("[data-backdrop]")};o.openModalBtn.addEventListener("click",r),o.closeModalBtn.addEventListener("click",r),o.backdrop.addEventListener("click",logBackdropClick);function r(){document.body.classList.toggle("modal-open"),o.backdrop.classList.toggle("is-hidden")}})();