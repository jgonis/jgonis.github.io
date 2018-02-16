class AppMain {

    constructor(context: Window) {
        this.m_startButton = <HTMLButtonElement>(context.document.getElementById("startButton"));
        this.m_startButton.addEventListener("click", (event: MouseEvent) => {
            this.StartClicked(event);
        });
    }

    public hello() {
        console.log("hello");
    }

    public StartClicked(event: MouseEvent) {
        console.log("start clicked");
    }

    private m_startButton: HTMLButtonElement;
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