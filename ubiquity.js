//http://gist.github.com/218713
//http://bjarki.info/misc/ubiquity/?view=builtwith#/view/builtwith/source
//http://gist.github.com/169819

CmdUtils.CreateCommand({
  names: ["builtwith", "bw"],
  icon: "http://builtwith.com/favicon.ico",
  description: "Checks which technologies a given website is built with.",
  help: "builtwith[ URL]<br/>or<br/>bw[ URL]",
  author: {name: "", email: "suprdewd@gmail.com"},
  license: "GPL",
  homepage: "http://bjarki.info/",
  arguments: [{role: 'object', nountype: noun_arb_text}],
  preview: function preview(pblock, args) {
        var now = args.object.text;
        pblock.innerHTML = "Getting info for: <b>"+url(now)+"</b><br/>";
    jQuery("<div/>").load("http://builtwith.com/?"+url(now)+" div#centerInnerBox div.profile table tbody tr td:first", function(){
        if(jQuery(this).html() != "")
        {
                pblock.innerHTML = jQuery(this).prepend("Info for: <b>"+url(now)+"</b>.<br/>Hit enter for more details.<br/>").html();
        }
        });
  },
  execute: function execute(args) {
    Utils.openUrlInBrowser("http://builtwith.com/?"+url(args.object.text));
  }
});

function url(a){
        var out = "example.com";
        if(a.length > 0)
        {
                out = parseUri(a).host;
        }
        else if(CmdUtils.getWindow().location.host.length > 0)
        {
                out = CmdUtils.getWindow().location.host;
        }
        return out;
}

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUri (str) {
        var     o   = parseUri.options,
                m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
                uri = {},
                i   = 14;

        while (i--) uri[o.key[i]] = m[i] || "";

        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
                if ($1) uri[o.q.name][$1] = $2;
        });

        return uri;
};

parseUri.options = {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
                name:   "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
};