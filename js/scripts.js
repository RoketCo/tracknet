var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|ipod|ipad/.test( userAgent );

if( ios ) {
    if ( safari ) {
        $('.overlay').hide();
    } else if ( !safari ) {
        //webview
    };
} else {
    //not iOS
};
