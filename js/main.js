
const everestBtn = document.querySelector('.everest__list');
const everestInfo = [...document.querySelectorAll('.tour__everest')];

const loonieBtn = document.querySelector('.loonie__list');
const loonieInfo = [...document.querySelectorAll('.tour__loonie')];

const islandBtn = document.querySelector('.island__list');
const islandInfo = [...document.querySelectorAll('.tour__island')];

const egyptBtn = document.querySelector('.egypt__list');
const egyptInfo = [...document.querySelectorAll('.tour__egypt')];


everestBtn.addEventListener('click', () => {
    everestInfo.forEach(i => i.classList.toggle('hidden'));
});
loonieBtn.addEventListener('click', () => {
    loonieInfo.forEach(i => i.classList.toggle('hidden'));
});
islandBtn.addEventListener('click', () => {
    islandInfo.forEach(i => i.classList.toggle('hidden'));
}),
egyptBtn.addEventListener('click', () => {
    egyptInfo.forEach(i => i.classList.toggle('hidden'));
});
