class AppMain {
    constructor(context) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLFlBQVksT0FBZTtJQUUzQixDQUFDO0lBRU0sS0FBSztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBRUQsQ0FBQyxDQUFDLE9BQWUsRUFBRSxFQUFFO0lBQ2pCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUE7SUFFRCxJQUFJLEdBQVksQ0FBQztJQUVqQixnQkFBZ0IsT0FBZTtRQUMzQixHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9