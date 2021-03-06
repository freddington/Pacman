function FindProxyForURL(url, host) {

    //Generated by Pacman. Edits above this line will persist; edits below will be overwritten
    var defaultProxyString = "DIRECT";      //Edit this value if you require a default proxy in your environment
    var specialProxyString = "proxy.contoso.com:3128";  //this is the proxy for selected http traffic

    // Bail out early if it isn't an IP address, for performance reasons
    var isIpV4Addr = /^(\d+.){3}\d+$/; 
    if (!(isIpV4Addr.test (host))) return defaultProxyString;

    var ipsToProxy = {
        "1.1.1.3" : specialProxyString,
        "1.1.1.2" : specialProxyString,
        "1.1.3.4" : specialProxyString
    };
    
    if (ipsToProxy.hasOwnProperty(host)) return "PROXY " + ipsToProxy[host];

    // DEFAULT RULE
    return defaultProxyString;
}
