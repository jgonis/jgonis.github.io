class AppMain {

    constructor(context: Window) {

    }

    public hello() {
        console.log("hello");
    }

}

((context: Window) => {
    context.onload = () => {
        myInit(context);
    }

    let app: AppMain;

    function myInit(context: Window) {
        app = new AppMain(context);
        app.hello();
    }
})(window);