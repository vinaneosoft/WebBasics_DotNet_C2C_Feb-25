const anchorelements=document.getElementsByTagName("a");
const currentURL=window.location.href;
for(let a of anchorelements){
    if(a.href==currentURL){
        a.classList.add('activeLink')
    }
}
