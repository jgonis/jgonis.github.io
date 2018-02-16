class AppMain {
    constructor(context) {
        this.m_startButton = (context.document.getElementById("startButton"));
        this.m_delegate = new DelegateClass();
        this.m_startButton.addEventListener("click", (event) => {
            this.m_delegate.StartClicked(event);
        });
    }
    hello() {
        console.log("hello");
    }
}
((context) => {
    context.onload = () => {
        myInit(context);
    };
    let app;
    function myInit(context) {
        app = new AppMain(context);
        app.hello();
    }
})(window);
class DelegateClass {
    constructor() { }
    StartClicked(event) {
        console.log("start clicked");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zdGFydC50cyIsIi4uL3RzL0RlbGVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBRUksWUFBWSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQXNCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUlKO0FBRUQsQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ2pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUE7SUFFRCxJQUFJLEdBQVksQ0FBQztJQUVqQixnQkFBZ0IsT0FBZTtRQUMzQixHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQzdCWDtJQUNJLGdCQUFlLENBQUM7SUFFVCxZQUFZLENBQUMsS0FBaUI7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0oifQ==