window.DxSample = {};
$(function () {
    DxSample.app = new DevExpress.framework.html.HtmlApplication({
        namespace: DxSample,
        defaultLayout: 'default'
    });

    DxSample.app.router.register(":view/:name", { view: "home", name: "" });
    DxSample.app.navigate("home");
});

DxSample.home = function () {
    var food = {
        desserts: [
            { src: "content/images/products/06.jpg" },
            { src: "content/images/products/16.jpg" },
            { src: "content/images/products/19.jpg" },
            { src: "content/images/products/21.jpg" },
            { src: "content/images/products/22.jpg" },
            { src: "content/images/products/25.jpg" },
            { src: "content/images/products/26.jpg" },
            { src: "content/images/products/27.jpg" },
            { src: "content/images/products/32.jpg" },
            { src: "content/images/products/47.jpg" },
            { src: "content/images/products/48.jpg" },
            { src: "content/images/products/50.jpg" }
        ],
        mainCourses: [
            { src: "content/images/products/04.jpg" },
            { src: "content/images/products/05.jpg" },
            { src: "content/images/products/14.jpg" },
            { src: "content/images/products/17.jpg" },
            { src: "content/images/products/23.jpg" },
            { src: "content/images/products/28.jpg" },
            { src: "content/images/products/42.jpg" },
            { src: "content/images/products/56.jpg" },
            { src: "content/images/products/57.jpg" },
            { src: "content/images/products/74.jpg" },
            { src: "content/images/products/46.jpg" },
            { src: "content/images/products/09.jpg" }
        ],
        seafood: [
            { src: "content/images/products/46.jpg" },
            { src: "content/images/products/45.jpg" },
            { src: "content/images/products/73.jpg" },
            { src: "content/images/products/30.jpg" },
            { src: "content/images/products/13.jpg" },
            { src: "content/images/products/41.jpg" },
            { src: "content/images/products/36.jpg" },
            { src: "content/images/products/10.jpg" },
            { src: "content/images/products/37.jpg" },
            { src: "content/images/products/58.jpg" },
            { src: "content/images/products/18.jpg" },
            { src: "content/images/products/40.jpg" }
        ],
        drinks: [
            { src: "content/images/products/01.jpg" },
            { src: "content/images/products/02.jpg" },
            { src: "content/images/products/24.jpg" },
            { src: "content/images/products/34.jpg" },
            { src: "content/images/products/35.jpg" },
            { src: "content/images/products/38.jpg" },
            { src: "content/images/products/39.jpg" },
            { src: "content/images/products/43.jpg" },
            { src: "content/images/products/67.jpg" },
            { src: "content/images/products/70.jpg" },
            { src: "content/images/products/75.jpg" },
            { src: "content/images/products/76.jpg" }
        ]
    };
    var viewModel = {
        items: [
            {
                header: "Main courses",
                text: "First and second course of a meal",
                images: food.mainCourses
            },
            {
                header: "Seafood",
                text: "Seafood: ocean and sea",
                images: food.seafood
            },
            {
                header: "Desserts",
                text: "Desserts: biscuits and cookies",
                images: food.desserts
            },
            {
                header: "Drinks",
                text: "Drinks: Soft vine and tea",
                images: food.drinks
            }
        ]
    };
    return viewModel;
};




