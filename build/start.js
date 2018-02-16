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
class DelegateClass {
    constructor() { }
    StartClicked(event) {
        console.log("start clicked");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLFlBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFzQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Q0FJSjtBQUVEO0lBQ0ksZ0JBQWUsQ0FBQztJQUVULFlBQVksQ0FBQyxLQUFpQjtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSjtBQUVELENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUNqQixPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFBO0lBRUQsSUFBSSxHQUFZLENBQUM7SUFFakIsZ0JBQWdCLE9BQWU7UUFDM0IsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMifQ==