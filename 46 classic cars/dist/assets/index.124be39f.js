(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l=document.querySelector(".menu"),i=document.querySelectorAll(".wrapper"),u=document.querySelectorAll(".video");l.addEventListener("click",()=>{document.querySelectorAll(".target").forEach(o=>o.classList.toggle("change"))});i.forEach(r=>[r.addEventListener("click",()=>{document.querySelectorAll(".target").forEach(n=>n.classList.remove("change"))})]);u.forEach(r=>{r.addEventListener("mouseover",()=>{r.play()}),r.addEventListener("mouseout",()=>{r.pause()})});
