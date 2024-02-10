const faqItems = document.getElementsByClassName("faq-item");

for (var i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener('click', toggle);
}

function toggle() {
    let faq = this.children
    if (faq[1].classList.contains("d-none")) {
        let faqItems = document.getElementsByClassName("faq-item");
        for (var i = 0; i < faqItems.length; i++) {
            let question = faqItems[i].children[0];
            let answer = faqItems[i].children[1];
            if(!answer.classList.contains("d-none")) {
                answer.classList.add("d-none");
                let toggleSign = question.children[1];
                toggleSign.src = "assets/images/icon-plus.svg";
            }
        }
        faq[1].classList.remove("d-none");
        let toggleSign = faq[0].children[1];
        toggleSign.src = "assets/images/icon-minus.svg";
    }
    else {
        faq[1].classList.add("d-none");
        let toggleSign = faq[0].children[1];
        toggleSign.src = "assets/images/icon-plus.svg";
    }
}