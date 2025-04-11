// ეს JavaScript კოდი ავტომატურად განაახლებს TradingView-ს ბმულებს
document.addEventListener('DOMContentLoaded', function() {
    new TradingView.widget({
        "width": "100%",
        "height": 500,
        "symbol": "BINANCE:BTCUSDT",  // შეგიძლიათ შეცვალოთ ვალუტის წყვილი
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "ka",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_widget"
    });
});
