"use strict";
const hourr = document.querySelector(".hour");
const minn = document.querySelector(".min");
const secc = document.querySelector(".sec");
const pm = document.querySelector(".pm");
const date = document.querySelector(".date");

const day = new Date();
const options = {
  day: "numeric",
  month: "long",
  weekday: "long",
  year: "numeric",
};

date.textContent = new Intl.DateTimeFormat("en-PK", options).format(day);

const timer = setInterval(function () {
  const date = new Date();
  let hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  hour = hour % 12 || 12; // Converts '0' to '12'

  const ampm = hour <= 12 ? "PM" : "AM";

  hourr.textContent = String(hour).padStart(2, 0);
  minn.textContent = String(min).padStart(2, 0);
  secc.textContent = String(sec).padStart(2, 0);
  pm.textContent = ampm;
}, 1000);
