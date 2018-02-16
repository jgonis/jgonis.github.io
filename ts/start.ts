class AppMain {

    constructor(context: Window) {
        this.m_startButton = <HTMLButtonElement>(context.document.getElementById("startButton"));
        this.m_delegate = new DelegateClass();
        this.m_startButton.addEventListener("click", (event: MouseEvent) => {
            this.m_delegate.StartClicked(event);
        });
    }

    public hello() {
        console.log("hello");
    }

    private m_startButton: HTMLButtonElement;
    private m_delegate: DelegateClass;
}

class DelegateClass {
    constructor() {}

    public StartClicked(event: MouseEvent) {
        console.log("start clicked");
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