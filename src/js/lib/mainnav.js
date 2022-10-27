export function init() {
    const btn = document.getElementById("hamburger")

    btn.addEventListener("click", (e) => {
        if(btn.ariaLabel == "closed") {
            btn.ariaLabel = "opened";
        }

        else {
            btn.ariaLabel = "closed";
        }
    })

    // for closing the expaneded nav when clicking on a link
    const navElements = document.querySelectorAll("#hamburger + ul li a")
    for(let el of navElements) {
        el.addEventListener("click", (e) => {
            btn.ariaLabel = "closed";
        })
    }

    // add class transition to classList of nav > ul -> doing this here stops weird fading-in bug from happening when opening the site
    document.querySelector("nav > ul").classList.add("transition")

}
