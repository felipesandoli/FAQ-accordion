const faqItems = document.getElementsByClassName("faq-item")

for (var i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', toggle);
}

function toggle() {
    let faq = this.children
    if (faq[1].classList.contains("d-none")) {
        faq[1].classList.remove("d-none");
        let toggleSign = faq[0].children[1];
        toggleSign.src = "assets/images/icon-minus.svg";
    }
    else {
        console.log(faq[1].classList)
        faq[1].classList.add("d-none");
        let toggleSign = faq[0].children[1];
        toggleSign.src = "assets/images/icon-plus.svg";
    }
}