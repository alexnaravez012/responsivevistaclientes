function openMenuResponsiveCustomers(type) {
    let bodyHeight = document.getElementById('body-height-responsive-customers')
    let higthMax = bodyHeight.scrollHeight
    console.log(higthMax + "px !important")

    if (type == 'log-in-user-responsive-customers') {
        document.getElementById("menu-log-in-responsive-customers").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-log-in-responsive-customers").classList.toggle("show");
        document.getElementById("menu-register-address-responsive-customers").classList.remove("show");
    }

    if (type == 'categories-responsive-customers') {
        document.getElementById("menu-categories-responsive-customers").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-categories-responsive-customers").classList.toggle("show");
        document.getElementById("menu-subcategories-responsive-customers").classList.remove("show");
    }
    if (type == 'subcategories-responsive-customers') {
        document.getElementById("menu-subcategories-responsive-customers").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-subcategories-responsive-customers").classList.toggle("show");
        document.getElementById("menu-categories-responsive-customers").classList.remove("show");
    }


    if (type == 'orders-responsive-customers') {
        document.getElementById("menu-orders-responsive-customers").setAttribute("style", `height: ${higthMax}px !important`);
        document.getElementById("menu-orders-responsive-customers").classList.toggle("show");
        document.getElementById("menu-register-address-responsive-customers").classList.remove("show");

    }

}