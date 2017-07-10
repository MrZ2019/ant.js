
_SHELL_ANT();

ANT._active();

ANT.version = 0.1;

function _SHELL_ANT() {

    __enter();

    me.modifyRule(["add-member", "init", "whenLoad"]);
    me.create([ "Stage" ]);
    me.do(GET_SACK().shakes());

    // 事件侦听函数
    function spy(task, when, prey, on_error, capture) {

        prey = prey || window;
        when = when || "load";
        task = be(task);

        var processor = task;
        processor = _2A(processor);
        var thisProcessor;

        for(var iPro = 0; iPro < processor.length; iPro++) {

            thisProcessor = processor[iPro];

            if(iPro == 0 && is(on_error)) {
                task = thisProcessor;
                thisProcessor = _Processor;
            }
            prey.addEventListener(when, thisProcessor, capture);
        }

        return task;

        function _Processor() {
            cliff(task, null, on_error);
        }
    }

    // 选择器函数
    function paw(chit) {

        var re;
        var nodeset;
        var headword, _remain;

        headword = chit[0];
        _remain = chit.slice(1);

        var words = _remain.split(/\s/);

        var noSelect = false;

        switch(headword) {
            case "!":
                nodeset = _villain.eval_xpath(words[0]);

                re = nodeset;
                break;

            case "$":
                if(hasJQ()) {
                    nodeset = $(_remain);

                    nodeset.css2 = nodeset.css;
                    nodeset.html2 =nodeset.html;
                }
                else {
                    nodeset = document.querySelector(_remain);
                }
                break;

            default:
                noSelect = true;
        }


        if(noSelect == true)
        {
            switch(headword) {

            case "#":
                {
                    var id = _remain;
                    nodeset = document.getElementById(id);
                }
                break;

            case ".":
                {
                    var className = _remain;
                    nodeset = document.getElementsByClassName(className);
                }
                break;

            default:
                {

                    var tagName = chit;
                    nodeset = document.getElementsByTagName(tagName);
                }
            }
        }

        if(mock(nodeset)) {
            return;
        }
        re = _dom.heavyNode(nodeset);

        return re;
    }

    // 函数生成器
    function be(code, argDef, methodName, scope) {
        scope = scope || null;
        methodName = methodName || "";
        argDef = argDef || "a0, a1, a2, a3, a4";
        if(code == 1) {
            code = "return a0;";
        }

        if(_s(code)) {
            code = format("(function $1($2) { $3 });", methodName, argDef, code);
            re = eval.call(scope, code);
        }
        else {
            re = code;
        }

        return re;
    }

    // 初始化函数

    function __enter() {

        the_creation();

        me.assign_space();
        me.programming();   
        me.nofiction();
        me.pickBag(true).release();	

        me.be_strong(modifyRule);
        me.be_strong(build_thing, "create");
        me.be_strong(get_anything, "summon");

        // 添加基本规则
        function modifyRule(area) {

            area = _2A(area);

            for(var x = 0; x < area.length; x++) {

                var cur = area[x];

                switch(cur) {

                    case "add-member":
                        Book = document;
                        Doc = Document;
                        View = window;

                        xx = null; 
                        TRUE = true;
                        FALSE = false;
                        und = undefined;
                        
                        copy(ANT, window);
                        break;

                    case "init": 
                        COM.Node = {};   
                        API.Node = {};

                        break;

                    case "whenLoad":
                    {
                        Head = document.getElementsByTagName("head")[0];
                        H = Head;

                        // 解决 $ 冲突
                        if(_u(window.jQuery) && !window.keep$) {

                            if(is(window.$)) {
                                ANT.last$ = $;
                            }
                        }

                        //  添加 onload 处理程序
                        spy(function() {

                            upnode(Head);
                            Body = document.body;
                            upnode(Body);
                            B = Body;

                            if(window["Ant_hold$"] == true ) {

                                $ = choose;
                            }
                            else if(window.keep$ !== TRUE) {
                                if(is(window.jQuery)) {
                                    $ = window.jQuery;
                                }
                                
                            }
                            z = choose;

                            Sign.Loaded = true;
                            window["$_pageLoaded"] = true;

                            // :)
                            setTimeout("Sign.DelayLoaded = true;", Config.DelayLoaded);
                        });
                    }
                        break;
                }
            }
        }

        // 构建工具
        function build_thing(things,material) {

            if(_s(things)) {
                things = [ things ];
            }

            var iThing = 0;

            var thing;
            for(;iThing < things.length; iThing++) {

                var thing_name = things[iThing];

                thing = me.summon(thing_name);

                if(thing) {
                    window["_" + thing_name] = thing;

                    continue;
                }
            }

            return true;
        }


        function get_anything(ele_name) {

            return me.get_tool(ele_name);
        }


        function the_creation() {

            me = new Object();

            if(typeof(pick_bag) == "function") {
                me.pickBag = pick_bag;
            }

            me.do = function(plan) {

                var re;
                if(_s(plan)) {
                    re = cliff(plan);
                }

                return re;
            }

            me.be_strong = function(element, ele_name) {

                if(typeof(ele_name) == "undefined") {
                    ele_name = element.name;
                }

                me[ele_name] = element;
            }

            // 添加类型判断
            me.assign_space = function() {


                SPACE = window;

                TYPELIST = [ "boolean", "number", "string", "function", "object", "undefined"];

                var atomName, hermetistName;

                for(var iAtom = 0; iAtom < TYPELIST.length; iAtom++) {

                    atomName = TYPELIST[iAtom];

                    hermetistName = "_" + atomName[0];

                    window[hermetistName] = get_element_lab(atomName, "hermetist");
                }


                var CLASSMAP =
                    {
                        "A" : Array,
                        "HE": HTMLElement,
                        "HC": HTMLCollection,
                        "NL": NodeList,
                        "X": Error
                    }

                var tester;

                var CLASS;

                for(var kClass in CLASSMAP){

                    CLASS = CLASSMAP[kClass];

                    var testerName = "_" + kClass;

                    window[testerName] = get_element_lab(CLASS, "scientist");
                }

                // 基本辅助函数
                var space_tool = [ copy, del, clone, search, cliff, _2A, shake ];
                var shell_toy = [ spy, paw, be];

                var test_helper = [ _null, exist, empty, rich,  _SET, has ];

                copy(space_tool);
                copy(shell_toy);

                copy(test_helper);

                // 函数别名
                var _alias = 
                {
                    is: exist
                    //_: paw
                    //on: spy
                };
                
                copy(_alias);
                

                // 复制函数
                function copy(source, target, opt3, reversed) {

                    target = target || SPACE;

                    if(_u(source)) {
                        return target;
                    }

                    var member;
                    var memberName;

                    if(_A(source)) {

                        for(var iSrc = 0; iSrc < source.length; iSrc++) {

                            member = source[iSrc];
                            if(opt3 && _s(member)) {

                                memberName = member;
                                member = opt3[memberName];
                            }
                            else {
                                memberName = member.name;
                            }

                            _copy_part1();
                        }
                    }
                    else if(_o(source)) {

                        for(memberName in source) {

                            member = source[memberName];

                            if(opt3) {

                                if(_s(member)) {
                                    member = opt3[member];
                                }
                            }

                            _copy_part1();
                        }
                    }

                    if(reversed == "occupy") {
                        target._Occupied = true;
                    }

                    return target;

                    //---
                    function _copy_part1() {

                        if(!reversed || _u(target[memberName])) {
                            target[memberName] = member;
                        }
                        else {

                            if(ANT.List.Tools.indexOf(memberName) !== -1) {
                                return;
                            }

                            if(target[memberName] === member) {
                                return;
                            }

                            if(reversed == "occupy" && !target._Occupied) {

                                target["_" + memberName] = target[memberName];
                                target[memberName] = member;

                            }
                            else if(reversed === true) {
                                target["_$" + memberName] = member;
                            }
                        }
                    }
                }


                // 克隆函数

                function clone(src, deepMode) {

                    var _new;
                    var cur;
                    if(_A(src)) {
                        _new = new Array();

                        for(var iVal = 0; iVal < src.length; iVal++) {

                            cur = src[iVal];

                            if(deepMode && _o(cur)) {
                                _new[iVal] = clone(cur, deepMode);
                            }
                            else {
                                _new[iVal] = cur;
                            }
                        }
                    }
                    else if(_o(src)) {

                        _new = new Object();

                        var key;

                        for(key in src) {

                            cur = src[key];

                            if(deepMode && _o(cur)) {
                                _new[key] = clone(cur, deepMode);
                            }
                            else {
                                _new[key] = cur;
                            }
                        }
                    }
                    else {
                        _new = src;
                    }

                    return _new;
                }

                // 成员删除函数
                function del(target, src, mode) {

                    mode = mode || "normal";

                    var index, val;
                    if(_A(src)) {

                        index = 0;

                        for(; index < src.length; index++) {

                            val = src[index];

                            if(mode == "normal") {
                                delete target[val];
                            }
                        }
                    }
                    else if(_o(target)) {

                        for(index in target) {

                            val = target[index];

                            if(mode == "normal") {
                                delete target[val];
                            }
                            else if(mode == "map") {    

                                if(src[index] === false) {
                                    delete target[index];
                                }
                            }
                        }
                    }
                }

                // 搜索函数
                function search(space, aim, option) {

                    var re = false;

                    var val;
                    if(_A(space)) {

                        for(var i = 0; i < space.length; i++) {

                            val = space[i];

                            if(aim == val) {
                                re = i;
                                break;
                            }
                        }
                    }
                    else if(_o(space)){

                        for(var key in space) {

                            val = space[key];

                            if(aim == val) {
                                re = key;
                                break;
                            }

                            if(option == "key") {

                                if(aim == key) {
                                    re = key;
                                    break;
                                }
                            }
                        }
                    }

                    return re;
                }

                // try.catch 执行函数
                function cliff(code, arg, catch_error, win, scope) {

                    var re;
                    try {
                        if(_s(code)) {
                            re = eval(code);
                        }
                        else {
                            re = code.apply(scope, arg);
                        }

                        if(win) {
                            win.call(null, re);
                        }
                    }
                    catch(error) {

                        var disable_error = false;

                        re = error;
                        if(is(catch_error)) {

                            if(catch_error == "disable") {
                                disable_error = true;
                            }
                            else {
                                catch_error = be(catch_error);
                                catch_error.call(null, error);
                            }
                        }

                        if(Config.LogError == true && !disable_error) {
                            console.log("error: " + error.message);
                        }
                    }

                    return re;
                }

                // 转换为数组
                function _2A(src) {

                    var re;

                    if(_A(src)) {
                        re = src;
                    }
                    else if(_SET(src)) {

                        re = new Array();
                        for(var i = 0; i < src.length; i++) {
                            re.push(src[i]);
                        }
                    }
                    else {
                        re = [ src ];
                    }

                    return re;
                }

                // 拆解对象
                function shake(gift) {

                    var list;

                    var Chrome = Env.CRExt;
                    var member = new Object();
                    window["_" + gift.id] = member;

                    copy(gift.chart, member, gift);

                    if(gift.wish == "isolation") {
                        return;
                    }

                    var needClean = false;

                    if(is(gift.eject)) {
                        needClean = true;
                        list = gift.chart;
                    }
                    else if(gift.wish == "sacrifice" || gift.wish == "all") {
                        list = gift.chart;
                    }
                    else {
                        list = gift.wish;
                    }

                    copy(list, window, gift);

                    if(needClean == true) {
                        del(window, gift.eject);
                    }

                    if(is(gift.alias)) {
                        copy(gift.alias, window, gift);
                    }

                    copy(gift.map, ANT.Map);
                    copy(gift.list, ANT.List);
                    copy(gift.api, ANT.API);
                    copy(gift.data, ANT.Data);
                    copy(gift.method, ANT.Method);

                    if(is(gift.opt)) {
                        ANT.Opt[gift.id] = gift.opt;
                    }

                    if(gift.init) {
                        gift.init();
                    }

                    if(gift.init_W && !Chrome) {
                        gift.init_W();
                    }

                    if(gift.onload && !Chrome) {
                        spy(gift.onload);
                    }

                }

                // 类型检测 helper
                function get_element_lab(grain, job) {

                    job = eval(job);

                    return job;

                    function hermetist(object) {

                        return typeof(object) == grain;
                    }

                    function scientist(object) {

                        return object instanceof grain;
                    }
                }

                //---
                function _null(obj) {
                    return obj == null;
                }

                function exist(obj) {
                    return (obj !== undefined) && (obj !== null);
                }


                function empty(obj) {

                    var empty_obj = false;
                    if(_o(obj)) {
                        empty_obj = true;

                        for(var key in obj) {
                            empty_obj = false;
                            break;
                        }
                    }

                    return ( (obj == undefined) || (obj == null) || (obj == "") || (obj == []) || (empty_obj));
                }

                function rich(obj) {

                    return ! empty(obj);
                }

                // 集合判断函数
                function _SET(obj) {
                    var re = false;

                    if(_A(obj) || _HC(obj) || _NL(obj)) {
                        re = true;
                    }

                    return re;
                }

                function has(src, aim, mode) {
                    var re = search(src, aim, mode);

                    return (re !== -1);
                }
            }

            // ??
            me.nofiction = function() {

                var believerList = [ "pick_bag" ];

                Jesus = new Object();

                Jesus.judge = function(guest) {

                    return search(believerList, guest);
                }

                Jesus.addBeliever = function(believer) {

                    return believerList.push(believer);
                }
            }


            // 构建 ANT 对象
            me.programming = function() {

                ANT = {};

                ANT.version = 1.0;

                var baseMap =
                {
                    Proto: {

                    },

                    Time: {

                    },
                    Config:
                    {
                        XHRError: true,
                        LogError: true,
                        DelayLoaded: 10*1000
                    },
                    Map: {},
                    List: {},
                    COM: {},
                    API: {

                    },
                    Data: {
                        Words: []
                    },
                    Method: {},
                    Sign: {
                        STOP_LOOP: false,
                        Loaded: false,
                        DelayLoaded: false
                    },

                    Env: {
                        CRExt: _o(chrome.extension)
                    },

                    Opt: {}
                };

                copy(baseMap, ANT);

                var NodeTable = [];
                var ProcTable = [];

                copy(
                    {
                        listen: function(node, eventName, callbacks, onError, useCapture) {

                            var nodeIndex = NodeTable.indexOf(node);

                            var proc;
                            if(nodeIndex === -1) {
                                NodeTable.push(node);

                                proc = {};
                                ProcTable.push(proc);
                            }

                            proc = proc || ProcTable[nodeIndex]

                            if(mock(proc[eventName])) {
                                proc[eventName] = [];
                            }

                            proc[eventName] = proc[eventName].concat(callbacks);

                            if(a_in(List.EventName, eventName)) {

                                spy(callbacks, eventName, node, onError, useCapture);
                            }
                        },

                        catchEvent: function(node, type, args) {

                            var iNode = NodeTable.indexOf(node);

                            var proc, Arg;
                            if(iNode !== -1) {

                                proc = ProcTable[iNode];

                                Arg = [node].concat(args);
                                if(is(proc[type])) {

                                    _calls(proc[type], Arg);
                                }
                            }
                        }
                    }
                    ,ANT.API);
            }
        }
    }

    // 有趣的？
    function give_god(gift, giftName) {

        var believer = give_god.caller.name;

        if(Jesus.judge(believer) === false) {

            return;
        }

        if(typeof(giftName) == "undefined") {

            giftName = gift.name;
        }

        me[giftName] = gift;

        return gift;
    }


    // ??

    function pick_bag(wanted) {

        var tool_desc =
        {
            instance: [  Stage ]
        };

        give_god(get_tool);

        if(wanted) {
            return new Bag();
        }

        function get_tool(tool_name) {

            var tool = cliff(_get_tool, [tool_name]);

            if(_X(tool)) {
                tool = null;
            }

            if(_n(search(tool_desc.instance, tool) )) {

                tool = new tool()
            }

            return tool;

            function _get_tool(tool_name) {

                return eval(tool_name);
            }
        }

        // 舞台
        function Stage() {

            var _this = {
                arrange:    function(conf) {

                    var _conf = ANT.Config;
                    _this.init_config(conf);

                    Method.CreateNodeCOM(true);

                    copy(_chart.Math, window, Math);

                    var _api =
                    {
                        _upgrage: GET_SACK().shake,
                        json: JSON.parse,
                        int: parseInt,
                        float: parseFloat,
                        uri: encodeURI,
                        uriCOM: encodeURIComponent,
                        sel: getSelection
                    };
                    copy(_api, window);
                },
                init_config:    function(conf) {
                    var _def = {
                        event: true,
                        css: true,
                        dom: true
                    };

                    copy(_def, ANT.Config);
                    copy(conf, ANT.Config);
                }
            };

            ANT._active = _this.arrange;

            return _this;
        }

        // 背包？
        function Bag() {

            this.release = function(target) {

                var goods = [ _class ];

                copy(goods, target);
            }

            function _class(className) {

                var Class = cliff(className);

                return new Class();
            }
        }
    }

    // 工具集合
    function GET_SACK()
    {

        var _tools =
            [
                "number", "string", "maker", "array", "object", "method", "bee", "mover","loop", "bin", "com", 
                "json", "clock", "timer", "editor", "actor", "villain", "math", "painter",
                "calc", "headman",  "web",  "decider",
                "regexp", "dom", "css", "sheet", "event", "keyboard", "converter", "library", "debug",
                "chart", "hook", "server", "mysql", "canvas", "svg", "geometry", "sqlite", "pit", "player",
                "page", "doc"
            ];

        ANT.List.Tools = _tools;


        Proto.Cosmos = {

            // 数字操作
            "number":
            {
                id: "number",
                wish:   "sacrifice",
                chart: [ "_to2", "_to8", "_to16", "isNaN" ],

                // 二进制转化
                _to2: function(number) {
                    return number.toString(2);
                },

                // 八进制转化
                _to8: function(number) {
                    return number.toString(8);
                },

                // 十六进制转化
                _to16:  function(number) {
                    return number.toString(16);
                },

                // NaN 判断
                isNaN:  function(number) {

                    return number !== number;
                }
            },

            "string": {
                id: "string",
                wish:  "sacrifice",
                chart:
                    [
                        "ascii", "chr", "format", "quote", "montage", "chars", "up", "low", "s_int", "s_erase", "s_split", "cutWhite",
                        "upchar", "lowchar"
                    ],

                init: function() {
                    ACode = ascii("A");
                    ZCode = ascii("Z");
                    aCode = ascii("a");
                    zCode = ascii("z");

                    Code0 = ascii("0");
                    Code9 = ascii("9");
                },

                // 获得asicc码
                ascii:  function(string) {
                    return string.charCodeAt(0);
                },

                // 获得char字符
                chr:    function(code) {
                    return String.fromCharCode(code);
                },

                // 格式化字符串
                format: function(text, may_array) {

                    var x;

                    var val;
                    var pattern;

                    var list;

                    if(_A(may_array)) {
                        list = may_array;
                        x = 0;
                    }
                    else {
                        list = arguments;
                        x = 1;
                    }

                    for(;x < list.length; x++) {

                        val = list[x];

                        pattern = new RegExp("\\$" + x, "g");

                        text = text.replace(pattern, val);
                    }

                    return text;
                },

                // 引号转义
                quote:  function(text, flag) {

                    flag = flag || "\"";

                    switch(flag) {

                        case "\"":
                        {
                            text = "\"" + text + "\"";
                        }
                            break;

                        case "\\":
                        {
                            text = text.replace(/\"/g, "\\\"").replace(/\'/g, "\\\'");
                        }
                            break;

                        case "/":
                        {
                            text = text.replace(/\\\"/g, "\"").replace(/\\\'/g, "\'");
                        }
                            break;
                    }

                    return text;
                },

                // 对象转字符串
                montage:    function(separator, src1) {

                    separator = separator || "=!,";

                    var restr;

                    var seps = separator.split("!");
                    var sep1 = seps[0] || "=";
                    var sep2 = seps[1] || ",";

                    var key, val;
                    var valkep = new Array();

                    if(_A(src1)) {

                    }
                    else if(_o(src1)) {

                        for(key in src1) {
                            val = src1[key];

                            val = key + sep1 + val;
                            valkep.push(val);
                        }

                        restr = valkep.join(sep2);
                    }

                    return restr;
                },
                // 字符模式
                chars:  function(pattern, opt, mode) {

                    mode = mode || "repeat";

                    var _retext = "";
                    var _str;

                    switch(mode) {

                        case "repeat":
                        {

                            var count = opt;
                            if(mock(count)) {
                                count = 1;
                            }

                            var _str = pattern;

                            var z = 0;

                            for(; z < count; z++) {

                                _retext += _str;
                            }
                        }
                            break;

                    }

                    return _retext;
                },

                // 大写转换
                up: function(str) {
                    return str.toString().toUpperCase();
                },

                // 小写转换
                low: function(str) {
                    return str.toString().toLowerCase();
                },

                // 自然数判断
                s_int: function(str) {

                    var num = str - 0;

                    return ( !isNaN(num) && (num % 1 == 0) && rich(str) || (str===0) );
                },

                // 字符串清除
                s_erase: function(str, exp) {

                    exp = _2A(exp);

                    each(exp, function(e) {
                       str = str.replace(e, "");
                    });

                    return str;
                },

                // 字符串分割
                s_split: function(str, sign, limit) {

                    sign = _def(sign, 1);
                    var re;
                    if(_n(sign)) {
                        re = [];
                        for(var z = 0; z < str.length; z+=sign) {

                            var val = str.substr(z, sign);
                            re.push(val);
                        }
                    }
                    else if(_s(sign)) {
                        re = str.split(sign);
                    }

                    if(is(limit)) {
                        re = re.slice(0, limit);
                    }

                    return re;
                },

                // 字符串清除首尾空白
                cutWhite: function(string) {

                    return string.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/, " ");
                },

                // 首字母大写
                upchar: function(string) {

                    return string[0].toUpperCase() + string.slice(1);
                },

                // 首字母小写
                lowchar: function(string) {

                    return stirng[0].toLowerCase() + stirng.slice(1);
                }
            },

            "array":
            {
                id: "array",
                wish: "sacrifice",
                chart: [ "last", "reverse", "shuffle", "swap", "infix", "a_loop", "and", "or", "xor", "a_in", "sort" ],

                // 获取数组最后一个元素
                last: function(src) {
                    if(is(src) && is(src.length)) {
                        re = src[src.length - 1];
                    }
                    else {
                        re = null;
                    }

                    return re;
                },

                // 翻转数组
                reverse: function reverse(src) {
                    var re;

                    if(_A(src)) {
                        re = new Array(); 
                    }
                    else {
                        re = new String();
                    }

                    var index = src.length - 1;
                    var val;
                    for(;index >= 0 ; index--) {
                        val = src[index];
                        if(_A(src)) {
                            re[src.length-1-index] = val;
                        }
                        else {
                            re += val;
                        }
                    }
                    return re;
                },
                // 打乱数组
                shuffle:    function(src, power) {
                    power = power || 2;
                    var srcIsStr = false;

                    if(_s(src)) {
                        src = src.split("");
                        srcIsStr = true;
                    }

                    var length = src.length;
                    var _arg = [ src, -1, -1 ];

                    loop(_array.swap, power*length, _arg);

                    if(srcIsStr == true) {
                        src = src.join("");
                    }

                    return src;
                },
                // 交互数组元素
                swap:   function(src, index1, index2) {
                    var re;
                    if(_u(index1)) {
                        index1 = 0;
                    }
                    else if(index1 == -1) {
                        index1 = r_int(src.length-1)
                    }

                    if(_u(index2)) {
                        index2 = 1;
                    }
                    else if(index2 == -1) {
                        index2 = r_int(src.length-1);
                    }
                    var var3 = src[index1];
                    var var4;

                    if(_A(src)) {
                        src[index1] = src[index2];
                        src[index2] = var3;

                        re = src;
                    }
                    else if(_s(src)) {
                        var4 = src[index2];
                        re = src.slice(0, index1) + var4 + src.slice(index1+1, index2-1) + var3 + src.slice(index2+1);
                    }

                    return re;
                },
                // 插入多个元素
                infix: function(array, src, start) {
                    src = _2A(src);
                    var length = src.length;

                    for(var x = 0; x < length; x++) {
                        var val = src[x];

                        array.splice(start+x, 0, val);
                    }

                    return array;
                },
                // 循环生成值
                a_loop: function(count, value, sign, arg3) {
                    sign = _def(sign, "repeat");
                    value = _def(value, "");

                    var re = [];

                    var startVal = value;
                    var likeChr = false;

                    if(has(["a", "A"], sign)) {
                        startVal = ascii(value);
                        likeChr = true;
                    }
                    var step = _def(arg3, 1);

                    for(var z = 0; z < count; z++) {

                        var cur;
                        var _step = step*z;

                        switch(sign) {
                            case "repeat":
                                cur = value;
                                break;
                            default:
                                cur = startVal + _step;

                                if(likeChr == true) {
                                    cur = chr(cur);
                                }
                        }
                        re.push(cur);
                    }

                    return re;
                },
                // 数组与操作
                and: function() {

                    var a = arguments;

                    var a1 = a[0]; 

                    var andset = clone(a1);

                    for(var x = 0; x < andset.length; x++) {

                        var cur = andset[x];
                        for(var y = 1; y < a.length; y++) {

                            if(a[y].indexOf(cur) == -1) {
                                andset.splice(x--, 1);
                                break;
                            }
                        }
                    }

                    return andset;
                },
                // 数组 或 操作
                or: function() {

                    var ar = arguments;

                    var orset = new Array();

                    for(var x = 0; x < ar.length; x++) {

                        var curset = ar[x];

                        for(var y = 0; y < curset.length; y++) {

                            var curval = curset[y];

                            if(orset.indexOf(curval) == -1) {
                                orset.push(curval);
                            }
                        }
                    }

                    return orset;
                },
                // 数组 异或 操作
                xor: function() {

                    var arg = arguments;
                    var xorset = clone(arg[0]);

                    for(var y = 0; y < xorset.length; y++) {
                        var curval = xorset[y];
                        for(var z = 1; z < arg.length; z++) {
                            if(arg[z].indexOf(curval) !== -1) {
                                xorset.splice(y--, 1);
                            }
                        }
                    }

                    return xorset;
                },
                // 判断元素是否存在
                a_in: function(src, val) {
                    return (src.indexOf(val) !== -1);
                },
                // 数组排序
                sort: function(arg1, arg2, arg3) {

                        var arr;
                        var asc, sort_cb;

                        if((arg1 instanceof Array) == false) {

                            arr = [];
                            var argval, argtype;
                            var end = arguments.length;

                            for(var i = 0; i < end; i++) {

                                argval = arguments[i];
                                argtype = typeof argval;

                                if(argtype == "boolean") {
                                    asc = argval; // sort mode
                                }
                                else if(argtype == "function") {
                                    sort_cb = argval; // sort callback
                                }
                                else {
                                    arr.push(argval);
                                }
                            }
                        }
                        else {
                            arr = arg1;
                            asc = arr; sort_cb = arg3;
                        }

                        sort_cb = sort_cb ||
                            (function(a, b) {
                                var result;
                                if(! asc) {
                                    result = a < b;
                                }
                                else {
                                    result = a > b;
                                }

                                return result;
                            });

                        arr.sort(sort_cb);

                        return arr;
                    }
            },

            "object":
            {
                id: "object",
                wish:   "sacrifice",
                chart: [ "flip",  "analyze", "compose", "c_map", "clean", "of", "who", "what", "steal", "rob"],

                // 翻转对象的key与value
                flip:    function(object, is_reversed) {

                    var val;

                    var reobj;

                    if(is_reversed) {
                        reobj = new Object(); 
                    }
                    else {
                        reobj = object;
                    }
                    for(key in object) {
                        val = object[key].toString();

                        delete reobj[key];
                        reobj[val] = key;
                    }

                    return reobj;
                },
                // 对象转字符串
                analyze:    function(src, mode, option1, option2) {

                    var re;
                    var id, val;

                    mode = mode || "&";

                    var _symbol = mode[0];
                    var val_kep = new Array();

                    var isArr, isObj;
                    if(_s(src)) {
                        return src;
                    }
                    if(_A(src)) {

                        isArr = true;
                        option2 = option2 || "key";

                        for(id = 0; id < src.length; id++) {
                            val = src[id];
                            _parse_analyze();
                        }
                    }
                    else if(_o(src)) {

                        isObj = true;

                        for(id in src) {
                            val = src[id];
                            _parse_analyze();
                        }
                    }

                    re = val_kep.join(_symbol);

                    return re;

                    //
                    function _parse_analyze() {

                        var _id2 = id;

                        if(isArr == true) {
                            _id2 = option2 + id;
                        }

                        switch(mode) {

                            case "&":
                            {
                                if(option1 == true) {
                                    val = encodeURIComponent(val);
                                }

                                val = _id2 + "=" + val;
                            }

                                break;

                            case ";key:":
                            {
                                val = _id2 + ":" + val;
                            }
                        }

                        val_kep.push(val);
                    }
                },
                // 字符串转对象
                compose:    function(src, mode, option1) {

                    mode = mode || "&"; 

                    var re;

                    var key, val, index;
                    switch(mode) {

                        default:
                        {

                            var list = src.split(mode);

                            if(list.length == 1 && !src.match(/&|=/)) {
                                re = src;
                                break;
                            }

                            re = new Object();

                            var item;

                            for(index = 0; index < list.length; index++) {
                                item = list[index];

                                var pattern = /\w+/;
                                key = _regexp.reg1(item, pattern);

                                if(_null(key)) {
                                    continue;
                                }

                                if(option1) {
                                    key = option1 + key ;
                                }

                                val = item.replace(key + "=", "");
                                re[key] = val;
                            }
                        }
                    }

                    return re;
                },
                // 生成map对象
                c_map:  function(src, value, opt1) {

                    var index, val, key;

                    var reMap = new Object();  
                    value = _bee._def(value, true);

                    var index_counter = 0; 

                    if(value == "index" && _n(opt1)) {

                        index_counter = opt1;
                    }

                    if(_s(src)) {
                        src = _object.compose(src);
                    }

                    if(_A(src) == true) {

                        index = 0;

                        for(;index < src.length; index++) {

                            val = src[index];

                            reMap[val] = _getValue_c_map();
                        }
                    }
                    else if(_o(src) == true) {

                        index = 0;

                        for(key in src) {
                            val = src[key];

                            reMap[key] = _getValue_c_map();

                            index++;
                        }
                    }

                    return reMap;

                    //
                    function _getValue_c_map() {

                        var re;

                        if(value == "index") {
                            re = index + index_counter;
                        }
                        else if(value == "key") {
                            re = key;
                        }
                        else {
                            re = value;
                        }

                        return re;
                    }
                },
                // 清理对象
                clean:  function(src, opts, is_replace, deep) {

                    deep = _def(deep, 4);
                    opts = opts || "undefined&object&null&string" ;

                    opts = _object.c_map(opts, true);

                    each(src, function(val, key, deep, src) {

                        if(_clean_filter(val)) {

                            if(_A(src)) {
                                src.splice(key, 1);
                            }
                            else {
                                delete src[key];
                            }
                        }

                    }, is_replace, null, deep);

                    return src;

                    //
                    function _clean_filter(val) {

                        var _clean = true;

                        if(opts["undefined"] && _u(val)) {

                        }
                        else if(opts["object"] && (countOf(val) == 0)) {

                        }
                        else if(opts["null"] && _null(val)) {

                        }
                        else if(opts["string"] && (val == "")) {

                        }
                        else {
                            _clean = false;
                        }

                        return _clean;
                    }
                },
                // 检测对象
                of: function(object, Class) {
                    return (object instanceof Class);
                },
                // 检测构造对象
                who: function(object) {
                    return object.constructor.name;
                },
                // 检测对象类型
                what: function(object) {
                    return typeof(object);
                },
                // 分割对象
                steal: function(obj, wanted) {
                    wanted = _2A(wanted);
                    var reobj = new Object();

                    for(var z = 0; z < wanted.length; z++) {

                        var curName = wanted[z];
                        reobj[curName] = obj[curName];

                        delete obj[curName];
                    }

                    return reobj;
                },
                // 批量删除对象成员
                rob: function(source, keyname) {

                    var coin = source[keyname];

                    delete source[keyname];

                    return coin;
                }
            },

            "method":
            {
                id: "method",
                wish:   "sacrifice",
                chart:  [ "getArg", "un_arg", "un_apply", "applyMe"],

                // 获得调用参数
                getArg: function(arg, return_arg) {

                    arg = arg || _method.getArg.caller.arguments;

                    if(! return_arg) {

                        arg = arg2arr(arg);
                    }

                    return arg;
                },
                // 插入参数值
                un_arg:    function(src, start, caller) {

                    start = _def(start, 0);

                    src = g_arr(src, "direct");

                    caller = caller || un_arg.caller;

                    var arg = arg2arr(caller.arguments);
                    infix(arg, src, start);

                    return arg;
                },
                // 插入参数并调用函数
                un_apply: function(method, src, start, scope) {

                    return method.apply(scope, un_arg(src, start, un_apply.caller));
                },
                // 调用方法
                applyMe: function(method, scope) {

                    return method.apply(scope, applyMe.caller.arguments);
                }
            },
            "editor":
            {
                id: "editor",
                wish: "sacrifice",
                chart: [ "impact", "crowd", "look", "loglook", "range", "word", "strip" ],

                onload: function() {

                    // 收集 Tools 对象的词汇
                    var wordkep = new Array();

                    var places = ANT.List.Tools;

                    var z = 0;

                    setTimeout(_collectWord, 0);

                    //-- 
                    function _collectWord() {

                        var scope = window["_" + places[z++]];

                        if(is(scope)) {
                            var curkep = word(scope);

                            wordkep = wordkep.concat(curkep);
                        }

                        if(z < places.length) {
                            setTimeout(_collectWord, 0);
                        }
                        else {
                            unique(wordkep, true);
                            ANT.Data.Words = wordkep;
                        }
                    }
                },
                // 消除注释 
                impact: function(source, noQuote) {

                    if(_f(source)) {
                        source = source.toString();
                    }

                    if(! noQuote) {
                        source = source.replace(/\"/g, "\\\"").replace(/\'/g, "\\\'");
                    }
                    return source.replace(/\n|\t|\r|\/\/.*|\/\*.+(?!\*\/)\*\/| +/g, " ");
                },
                // 压缩html
                crowd: function (code, bQuote) {


                    if(_HE(code)) {
                        code = cutWhite(code.html());
                    }
                    code = code.replace(/>\s+</g, "><").replace(/\n/g, "");

                    if(_u(bQuote)) {
                        bQuote = true;
                    }

                    if(bQuote == true) {
                        code = code.replace(/\"/g, "\\\"").replace(/\'/g, "\\\'");
                    }

                    return code;
                },
                // 检查对象
                look:   function(src, _opts, deepCounter) {

                    var _this = _editor.look;

                    deepCounter = deepCounter || 1;

                    var _text = "";
                    var opts =
                    {
                        limit: 128,
                        deep: 2,
                        line: "\n",
                        indent: 1,
                        key: true,
                        value: true,
                        index: true,
                        layer: true,

                        counter: true,
                        border: true
                    };

                    _opts = _maker.g_obj(_opts);

                    copy(_opts, opts);

                    if(deepCounter > opts.deep) {
                        return;
                    }

                    if(deepCounter == 1 && opts.layer) {

                        _editor.look._layer = [];
                    }

                    var index, val;
                    var valkep = [];

                    var _layer = _editor.look._layer;
                    var indent;
                    var start_border, end_border;

                    indent = "";
                    start_border = "";
                    end_border = "";

                    if(_A(src)) {

                        if(opts.border) {
                            start_border = "[";
                            end_border = "]";
                        }

                        index = 0;

                        for(; index < src.length; index++) {

                            val = src[index];

                            if(_o(val)) {
                                val = _this(val, opts, deepCounter + 1);
                            }
                            else {
                                _layer[deepCounter - 1] = index;

                                if(opts.index) {

                                    val = index + ": " + val;
                                }

                                if(opts.layer) {

                                }

                                indent =  deepCounter * (opts.indent);

                                if(opts.border == false) {
                                    indent--;
                                }

                                indent = _string.chars("\t",indent);

                                val =  indent + val;
                            }

                            valkep.push(val);
                        }

                    }
                    else if(_o(src)) {

                        if(opts.border == true) {
                            start_border = "{";
                            end_border = "}";
                        }

                        for(key in src) {

                            val = src[key];

                            if(_f(val)) {
                                val = "&lt;function&gt;";
                            }

                            if(_o(val)) {
                                val = _this(val, opts, deepCounter + 1);
                            }
                            else {
                                if(opts.key) {

                                    val = key + ": " + val;
                                }

                                if(opts.layer) {

                                }

                                indent =  deepCounter * (opts.indent);

                                if(opts.border == false) {
                                    indent--;
                                }

                                indent = _string.chars("\t",indent);

                                val =  indent + val;
                            }

                             valkep.push(val);
                        }
                    }

                    _text = valkep.join(opts.line);

                    if(opts.border) {
                        indent = _string.chars("\t", deepCounter-1);

                        _text = indent + start_border + "\n" + _text + "\n";
                        _text = _text + indent;
                        _text = _text + end_border;
                    }

                    return _text;
                },
                // 调用console
                loglook:    function(src, opts) {
                    return console.log(_editor.look(src, opts));
                },
                // 获取range
                range: function(index) {
                    if(mock(index)) {
                        index = 0;
                    }

                    var _sel = this.getSelection();

                    return _sel.getRangeAt(index);
                },
                // 获取单词
                word: function(src, limit, loveStr, start, isUnique) {

                    isUnique = _def(isUnique, true);

                    if(_NS(src)) {
                        src = src.full();
                    }
                    else if(_HE(src)) {
                        src = text(src);
                    }
                    else if(_o(src)) {
                        src = obj2str(src);
                    }

                    src = src.toString();

                    var result = src.match(/(|[A-Z])[a-z]{2,}/g);

                    if(_A(result)) {
                        start = _def(start, 0);
                        limit = _def(limit, result.length);

                        result = result.splice(start, limit);

                        if(isUnique == true) {
                            result = unique(result);
                        }

                        if(is(loveStr)) {
                            result = result.join(loveStr);
                        }
                    }
                    else {
                        result = [];
                    }

                    return result;
                },
                // 缩减空格
                strip: function(str, replaced) {
                    replaced = _def(replaced, " ");

                    return str.replace(/\s+/g, replaced);
                }
            },
            actor: {
                id: "actor",
                wish:   "sacrifice",
                chart: [ "_calls",  "_delay", "_sleep", "op_loop", "op_fly" ],
                // 批量调用
                _calls: function _calls(codes, arg, _this, resultMode) {

                    resultMode = _def(resultMode, "and");

                    if(! _A(codes)) {
                        codes = [ codes ];
                    }

                    var myCallResult;

                    if(resultMode == "and") {
                        myCallResult = TRUE;
                    }
                    else if(resultMode == "or") {
                        myCallResult = FALSE;
                    }
                    else {
                        myCallResult = TRUE;
                    }

                    var iCode = 0;
                    var code;

                    var curRe;
                    for(; iCode < codes.length; iCode++) {

                        code = g_func(codes[iCode]);

                        curRe = code.apply(_this, arg);

                        if(resultMode == "and") {

                            myCallResult = myCallResult && curRe;
                        }
                        else if(resultMode == "or") {
                            myCallResult = myCallResult || curRe;
                        }
                    }

                    return myCallResult;
                },
                // 延迟执行
                _delay: function(code, time) {

                    time = time || 1;   //  1 s

                    return setTimeout(code, time * 1000);
                },
                // 挂起线程
                _sleep: function(duration) {

                    duration = duration || 1;

                    duration *= 1000;
                    var time1 = new Date();

                    for(;;) {

                        var time2 = new Date();

                        if(time2.getTime() - time1.getTime() >= duration) {
                            break;
                        }
                    }
                },
                // 循环控制
                op_loop: function(op) {

                    var sign = ANT.Sign;

                    op = _def(op, "end");
                    var re;

                    switch(op) {

                        case "stop":
                        {
                            sign.STOP_LOOP = true;
                        }
                            break;

                        case "query": {

                            if(sign.STOP_LOOP == true) {
                                re = true;
                                sign.STOP_LOOP = false;
                            }
                            else {
                                re = false;
                            }
                        }
                            break;

                        case "end":
                        {
                            sign.STOP_LOOP = false;
                        }
                            break;
                    }

                    return re;
                },

                // fly 控制
                op_fly: function(sign) {

                    sign = sign || "stop";

                    switch(sign) {

                        case "stop":
                        {
                            Sign.Fly = sign;
                        }
                            break;

                        case "play":
                        {
                            Sign.Fly = "play";
                        }
                            break;
                    }
                }
            },
            villain: {
                id: "villain",
                wish:   "isolation",
                chart:   [ "eval_xpath" ],

                // 解析xpath
                eval_xpath: function(exp) {

                    exp = exp || "//*";

                    var xResult;

                    xResult = document.evaluate(exp, document, null, XPathResult.ANY_TYPE, null);

                    var nodeset = [];
                    var curNode;

                    while(curNode = xResult.iterateNext()) {
                        nodeset.push(curNode);
                    }

                    return nodeset;
                }
            },
            math: {

                id: "math",
                wish:   "sacrifice",
                chart:
                    [
                        "r_int", "r_float", "r_floats", "r_nature", "r_hell", "r_ascii", "r_letter", "r_letters", "r_num", "r_up", "r_low",
                        "gt", "lt", "eq", "neq", "ngt", "nlt", "limit", "r_src", "r_word", "r_node",
                        "decide", "g_num"],

                alias: {
                    rand: "r_int"
                },

                init: function() {

                    TINY = Math.pow(0.1, 6);

                    // 创建批量函数
                    var _apilist =
                        [
                        "r_int", "r_float", "r_nature", "r_hell", "r_ascii", "r_letter", "r_letters", "r_num",
                            "r_up", "r_low", "r_word", "r_node"];

                    each(_apilist, function(apiName) {

                        var _newName = apiName.replace(/^r_/, "m_");

                        var _newAPI = returnMathMultiple(apiName);
                        //
                        _math[_newName] = _newAPI;
                        window[_newName] = _newAPI;

                        return _newAPI;
                        //
                        function returnMathMultiple(apiName) {

                            var _api = _math[apiName];

                            return _MathMultipleAPI;
                            //
                            function _MathMultipleAPI() {

                                var _arg = getArg();

                                var maxLength = _arg.shift() || 8;
                                var minLength = _arg.shift() || 4;

                                //
                                var times = r_int(maxLength, minLength);

                                var result = [];
                                for(var i = 0; i < times; i++) {

                                    var value = _api.apply(null, _arg);

                                    result.push(value);
                                }

                                if(apiName == "r_node") {
                                    _dom.heavyNode(result);
                                }
                                return result;
                            }
                        }
                    });
                },
                // 随机整数
                r_int:   function(max, min) {

                    return Math.round(r_float(max, min));
                },
                // 随机小数
                r_float:  function(max, min) {
                    if(mock(min)) {
                        min = 0;
                    }

                    if(mock(max)) {
                        max = 100;
                    }

                    return min + (max-min)*Math.random();
                },
                // 随机多个小数
                r_floats: function() {

                    var arg = arguments;

                    //
                    var length = arg.length;

                    var index = r_nature(length - 1);
                    var _r = arg[index];

                    var max = _r[0];
                    var min = _r[1];

                    return r_float(max, min);
                },
                // 随机自然数
                r_nature: function(max, min) {
                    min = min || 0;
                    max = max || 100;

                    min = nlt(min, 0);
                    return r_int(max, min);
                },
                // 随机负数
                r_hell: function(min, max) {
                    min = min || -100;
                    max = max || -1;

                    max = ngt(max, -1);
                    return r_int(max, min);
                },
                // 随机1-255 
                r_ascii: function(max, min) {

                    max = max || 255;
                    min = min || 0;

                    max = ngt(max, 255);
                    min = nlt(min, 0);

                    return r_int(max, min);
                },

                // 随机大写字母
                r_up: function(max, min, bCode) {

                    max = max || "Z";
                    min = min || "A";
                    max = ascii(max);
                    min = ascii(min);

                    max = limit(max, ZCode);
                    min = limit(min, ACode);

                    var code = r_int(max, min);

                    if(! bCode) {
                        code = chr(code);
                    }

                    return code;
                },

                // 随机小写字母
                r_low: function(max, min, bCode) {

                    max = max || "z";
                    min = min || "a";

                    max = ascii(max);
                    min = ascii(min);

                    max = limit(max, zCode);
                    min = limit(min, aCode);

                    var code = r_int(max, min);

                    if(! bCode) {
                        code = chr(code);
                    }

                    return code;
                },

                // 随机字母
                r_letter: function(max, min) {

                    max = max || "z";
                    min = min || "a";

                    max = low(max);
                    min = low(min);

                    max = ascii(max);
                    min = ascii(min);

                    var code = r_floats([max, min], [max - 32, min - 32]);
                    code = round(code);

                    var letter = chr(code);

                    return letter;
                },
                // 随机多个字母
                r_letters: function(max, min) {

                    max = max || 8;
                    min = min || 4;

                    var length = r_int(max, min);

                    var letters = "";

                    for(var y = 0; y < length; y++) {
                        letters += r_letter();
                    }

                    return letters;
                },
                // 随机整数
                r_num: function(min, max, bCode) {

                    max = max || 9;
                    min = min || 0;

                    max = limit(max, Code9);
                    min = limit(min, Code0);

                    var code = r_int(max, min);

                    if(! bCode) {
                        code = chr(code);
                    }

                    return code;
                },

                /* gt */
                gt: function(number, compare) {

                    return limit(number, compare + TINY);
                },

                /* lt */
                lt: function(number, compare) {

                    return limit(number, null, compare - TINY);
                },

                /* ngt */
                ngt: function(number, compare) {
                    return limit(number, null, compare);
                },

                /* lgt */
                nlt: function(number, compare) {
                    return limit(number, compare, null);
                },

                /* eq */
                eq: function(number, compare) {

                    if(number !== compare) {
                        number = compare;
                    }

                    return number;
                },

                /* neq */
                neq: function(number, compare, def) {

                    def = def || 0;

                    if(number == compare) {
                        number = def;
                    }

                    return number;
                },
                /* limit */
                limit: function(number, min, max) {

                    // notice: use default
/*                    max = max || 9999*9999;
                    min = min || -9999*9999;*/

                    // compare
                    if(is(max) && (number > max) ) {
                        number = max;
                    }
                    else if(is(min) && (number < min)) {
                        number = min;
                    }

                    return number;
                },

                /* name: r_src */
                r_src: function(src, count, option) {

                    count = _def(count, 1);

                    if(_A(src)) {

                    }
                    else if(_o(src)) {
                        option = _def(option, "v");
                        src = obj2arr(src, option);
                    }
                    else if(_s(src) && option == "w") {
                        src = word(src);
                    }

                    var indexs = m_int(count, count, 0, src.length-1);

                    var re = new Array();

                    each(indexs, function(i) {
                        re.push(src[i]);
                    });

                    return re;
                },

                /* r_word */
                r_word: function(kep) {

                    if(mock(kep)) {
                        kep = ANT.Data.Words;
                    }
                    else {
                        kep = word(kep);
                    }

                    var index = r_int(0, kep.length-1);

                    return kep[index];
                },

                /* r_node */
                r_node: function(generators, tagName) {

                    if(_s(tagName)) {
                        tagName = tagName.split(",");
                    }

                    tagName = _def(tagName, List.ExposeTag);
                    tagName = r_src(tagName, 1);

                    if(_s(generators)) {
                        generators = generators.split(",");

                        generators = r_src(generators, 1);

                        // get method
                        generators = window[generators];
                    }

                    generators = _def(generators, m_word);

                    var result = generators();

                    if(_A(result)) {
                        result = result.join(" ");
                    }

                    result = result.toString();

                    var node = tag(tagName, result);

                    return node;
                },
                /*
                name:   decide
                 */
                decide: function(total) {
                    total = total || 2;

                    return ! Boolean(rand(total));
                },

                /*
                name:   g_num
                 */
                g_num:   function(src, defvals) {


                    if(_s(src)) {
                        src = src.split(",");
                    }

                    if(_s(defvals)) {
                        defvals = defvals.split(",");
                    }

                    if(_A(src)) {
                        src = _2int(src);
                    }
                    else {
                        src = defvals;

                        return src;
                    }


                    if(_A(defvals)) {

                        _loop.map(defvals, function(val, index) {

                            var _val = src[index];

                            if(_n(_val) == false || isNaN(_val)) {
                                src[index] = val;
                            }
                        })
                    }

                    return src;
                }
            }
            ,
            /*
            name:   painter
             */
            painter: {

                id: "painter",
                wish:   [ "getColor", "get16Color" ],
                chart: [ "getColor", "get16Color", "_16Color", "get139Color", "_139Color"],
                alias: {
                    _color: "getColor",
                    _16: "get16Color",
                    _139: "get139Color"
                },
                list: {
                    Color16:   [
                        "aqua", "black", "blue", "fuchsia", "gray", "green", "lime","maroon",
                        "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"],

                    Color139:  [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black",
                        "BlancedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
                        "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan",
                        "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange",
                        "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateGray", "DarkSlateBlue", "DarkTurquoise",
                        "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen",
                        "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink",
                        "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue",
                        "LightCoral", "LightCyan", "LightGoldenRod", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSkyBlue",
                        "LightSlate", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon",
                        "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen",
                        "MediumTurquoise", "MediumVioletRed", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace",
                        "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
                        "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown",
                        "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue",
                        "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
                        "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
                    ]
                },
                /*
                name:   getColor
                 */
                getColor:   function() {
                    var R = rand(255);
                    var G = rand(255);
                    var B = rand(255);

                    return "RGB(" + R + "," + G + "," + B + ")";
                }
                ,
                /*
                name:   get16Color
                 */
                get16Color: function() {
                    return List.Color16[rand(16 - 1)];
                },

                /*
                name:   get139Color
                 */
                get139Color: function() {
                    return List.Color139[rand(139-1)];
                }
            }
            ,
            /*
            helper：accounter
            d:
             */
        "calc":
            {
                id: "calc",
                wish:   [ "countOf" ],
                chart: [ "countOf"],

                /*
                n:  countOf
                desc:   get total count of an object, arg2 may be stirng, or a function
                string used type limit, function is filter
                if arg2 not empty, arg3 may be true, then filter for key, not value
                 */
                countOf: function(object, filter, loveKey, deep) {

                    var _size = 0;

                    deep = deep || 4;
                    each(object, _countOf_check, null, deep);

                    return _size;
                    /*var be_arg2 = false;
                    //  serious argument2
                    if(_s(arg2) || _f(arg2)) {
                        be_arg2 = true;
                    }

                    var index, val;

                    if(_A(object)) {

                        var array = object; //  assign
                        //  object is an array
                        if(be_arg2 == true) {

                            //  through array
                            index = 0;

                            for(;index < array.length;index++) {
                                val = array[index];

                                if(_countOf_check()) {
                                    _size++;
                                }
                            }

                        }
                        else {
                            _size = array.length;
                        }
                    }
                    else if(_o(object)) {

                        for(index in object) {

                            val = object[index];

                            if(be_arg2 && _countOf_check()) {
                                _size++;
                            }
                            else {
                                _size++;
                            }
                        }
                    }

                    return _size;
                    *//*
                    sub：    _countOf_check
                     */
                    function _countOf_check(val, key) {

                        var _result = true;

                        if(_s(filter)) {
                            _result = ( typeof(val) == filter ); // filter is typename
                        }
                        else if(_f(filter)) {
                            //  function

                            //  if loveKey == true, change value to key
                            if(loveKey == true) {
                                val = key;
                            }

                            _result = filter.call(null, val);
                        }

                        if(_result == true) {
                            _size++;
                        }
                    }
                }
            }
            ,
            /*
            helper: headman
             */
            "headman":
            {
                id: "headman",
                wish: "sacrifice",
                chart: []
            },
            /*
            helper: bee
             */
            "bee":
            {
                id: "bee",
                wish:   "sacrifice",
                chart:
                    [
                        "_set", "mock","_def", "_fo", "alias"
                    ],

                map: {
                    ShortType: {
                        b: "boolean",
                        n: "number",
                        s: "string",
                        f: "function",
                        o: "object",
                        u: "undefined"
                    }
                },


                _set:   function(value, defaultValue) {

                    if(_s(value)) {
                        value = _debug._var(value);
                    }

                    if(_bee.mock(value)) {
                        value = defaultValue;
                    }

                    return value;
                }
                ,

                /*
                name:   mock
                 */
                mock:    function(value) {
                    return (value == null) || (value == undefined);
                },

                /*
                name:   _def
                 */
                _def:   function(_var, defValue) {

                    var re = _var;
                    if(mock(_var)) {
                        re = defValue;
                    }

                    return re;
                },

                /* _fo */
                _fo: function(src) {
                    var _type = typeof(src);

                    return (_type == "object" || _type == "function");
                }
                ,
                /* alias */
                alias: function(obj, nameMap) {

                    nameMap = g_obj(nameMap);

                    var _name;
                    for(var alias in nameMap) {

                        _name = nameMap[alias];

                        obj[alias] = obj[_name];
                    }

                    return obj;
                }
            },

            "loop": 
            {
                id: "loop",
                wish: "all",
                chart: [ "loop", "each", "map", "filter", "unique" ],

                init: function() {

                    var __under_loop = Method.map_loop;

                    var loopApi =
                    {
                        and_map: function() {

                            return un_apply(__under_loop, "and");
                        },

                        or_map: function(src, callback) {

                            return un_apply(__under_loop, "or");
                        }
                    };

                    expose(loopApi);
                },
                method: {
                  
                    i_loop: function(value, callback, args, _this) {

                        if(_A(value)) {
                            args.splice(0,3);   //  [val, key, deep]
                            args = value.concat(args);
                        }
                        /*                    else {
                         args.shift();   //  value is unused
                         args.unshift(value)
                         }*/

                        callback = g_func(callback);

                        return callback.apply(_this, args);
                    },

                    map_loop: function(mode, src, callback, _opt) {

                        var opt =
                        {
                            all: false
                        };

                        setup(opt, _opt);

                        var testResult = (mode == "and"); // hack :)

                        each(src, __map_loop_each);

                        return testResult;
                        /* in: __map_loop_each */
                        function __map_loop_each(val) {

                            if(mode == "or" && callback(val)) {

                                if(! (opt.all)) {
                                    op_loop("stop");
                                }
                                testResult = true;
                            }
                            else if(mode == "and" && !callback(val)){

                                if(! opt.all) {
                                    op_loop("stop");
                                }
                                testResult = false;
                            }
                        }
                    }
                },
                /*
                 name:   _loop
                 */
                loop:  function(codes, count, arg, _this) {

                    var counter = 0;
                    count = count || 1;
                    for(; counter < count; counter++) {

                        //  executed
                        _actor._calls(codes, arg, _this);
                    }
                },               /*
                 n:  each
                 */
                each:   function(src, callback, args, deep, _this) {

                    if(mock(deep)) {
                        deep = 1;
                    }

                    if(deep < 1) {
                        return;
                    }

                    each.curDeep = deep;

                    args = args || [];

                    src = g_set(src);
                    //  for
                    var index, val;

                    args = [1,2,3].concat(args);

                    if(_SET(src) == true) {

                        //  it's array

                        for(index = 0; index < src.length; index++) {

                            if(op_loop("query") == true) {
                                break;
                            }
                            val = src[index];

                            Method.i_loop([val,index,deep, src], callback, args, _this);

                            if(_o(val)) {
                                _loop.each(val, callback, args, deep-1, _this);
                            }

                        }
                        op_loop("end");
                    }
                    else if(_o(src) == true) {

                        //  type == "object"

                        for(index in src) {

                            if(op_loop("query") == true) {
                                break;
                            }

                            val = src[index];

                            Method.i_loop([val,index,deep, src], callback, args, _this);

                            if(_o(val)) {
                                _loop.each(val, callback, args, deep-1, _this);
                            }
                        }
                        op_loop("end");
                    }


                    return src;
                }
                ,
                /*
                 n:  map
                 */
                map:   function(src, callback, is_replace, args, deep, _host) {

                    var _this = _loop.map;

                    if(mock(deep)) {
                        deep = 1;
                    }

                    if(deep < 1) {
                        return;
                    }
                    args = args || [];

                    src = g_set(src);
                    callback = g_func(callback);
                    //  for
                    var index, val;
                    var _target;

                    if(is_replace) {
                        _target = src;
                    }
                    else {
                        _target = clone(src);
                    }

                    args = [1, 2, 3].concat(args);

                    if(_SET(src) == true) {

                        //  it's array

                        for(index = 0; index < src.length; index++) {

                            if(op_loop("query") == true) {
                                break;
                            }
                            val = src[index];

                            _target[index] = Method.i_loop([val,index,deep, src], callback, args, _this);

                            if(_o(val)) {
                                _target[index] = _loop.map(val, callback, args, deep-1, _this);
                            }
                        }
                        op_loop("end");
                    }
                    else if(_o(src) == true) {

                        //  type == "object"

                        for(index in src) {

                            if(op_loop("query") == true) {
                                break;
                            }
                            val = src[index];

                            _target[index] = Method.i_loop([val,index,deep, src], callback, args, _this);

                            if(_o(val)) {
                                _target[index] = _loop.map(val, callback, args, deep-1, _this);
                            }
                        }
                        op_loop("end");
                    }

                    return _target;
                }
                ,
                /*
                 name:   filter
                 */
                filter:    function(src, filters, is_replace, args, deep, _host) {

                    var _this = _loop.filter;

                    if(mock(deep)) {
                        deep = 1;
                    }

                    if(deep < 1) {
                        return;
                    }

                    args = args || [];

                    src = g_set(src);
                    //  for
                    var index, val, key;
                    var _target;

                    if(is_replace) {
                        _target = src;
                    }
                    else {
                        _target = clone(src);
                    }

                    //  args
                    //  set filters

                    var _callback;
                    var _type;
                    var _limit;

                    if(_f(filters)) {
                        _callback = filters;
                    }
                    else if(_n(filters)){
                        _limit = filters;
                    }
                    else if(_s(filters)) {
                        _type = filters;
                    }
                    else if(_o(filters)) {

                        //  it's object!

                        _callback = filters.callback;
                        _limit = filters.limit;
                        _type = filters.type;

                        args = filters.args || args;    //  replace arguments
                    }

                    //  type maybe short

                    var _type2 = Map.ShortType[_type];

                    if(exist(_type2)) {
                        _type = _type2;
                    }

                    //  check bool
                    var bool_cb = true;
                    var bool_limit = true;
                    var bool_type = true;

                    //
                    args = [1, 2, 3].concat(args);

                    if(_SET(src) == true) {

                        //  it's array

                        for(index = 0; index < _target.length; index++) {

                            if(op_loop("query") == true) {
                                break;
                            }
                            val = _target[index];

                            if(_o(val)) {

                                _this(val, filters, is_replace,  args, deep - 1, _host);
                            }
                            else {

                                if(exist(_limit) && (index >= _limit)) {

                                    _target.splice(index);
                                    break;
                                }
                                if(! _sub_filter()) {
                                    _target.splice(index--, 1);
                                }
                            }
                        }
                        op_loop("end");
                    }
                    else if(_o(_target) == true) {

                        //  type == "object"
                        index = 0;  //  used for counter

                        var _target_map = _object.c_map(_target, false);

                        for(key in _target) {

                            if(op_loop("query") == true) {
                                break;
                            }

                            val = _target[key];

                            if(exist(_limit) && (index >= _limit)) {

                                del(_target, _target_map, "map");
                                break;
                            }
                            if(! _sub_filter()) {
                                delete _target[key];
                            }
                            else {
                                _target_map[key] = true;
                                index++;
                            }

                            if(_o(val)) {

                                _this(val, filters,is_replace,  args, deep - 1, _host);
                            }
                        }
                        op_loop("end");
                    }

                    return _target;

                    /*  _sub_filter */
                    function _sub_filter() {

                        if(_callback) {
                            bool_cb = Method.i_loop([val, index, deep, src], _callback, args, _this)
                        }

                        if(_type) {
                            bool_type = (typeof(val) == _type);
                        }

                        return bool_cb && bool_type;
                    }
                },
                /*
                 n:  unique
                 d:  unique remove repeat value
                 */
                unique:    function(src, is_replace, keymode) {

                    var _aim;

                    if(is_replace) {
                        _aim = src;
                    }
                    else {
                        _aim = clone(src);
                    }

                    var _val_kep = [];  //  save val
                    var index, val;

                    var splice_count = 0;
                    if(_SET(_aim)) {

                        //  process array
                        var count = _aim.length;

                        for(index = 0; index < count; index++) {

                            if(op_loop("query") == true) {
                                break;
                            }

                            val = _aim[index];

                            if(search(_val_kep, val) !== false) {
                                _aim.splice(index--, 1);
                                count--;
                                //splice_count++;
                            }

                            //  push to kep
                            _val_kep.push(val);
                        }
                        op_loop("end");
                    }
                    else if(_o(_aim)) {

                        //  processs object
                        for(index in _aim) {

                            if(op_loop("query") == true) {
                                break;
                            }

                            if(keymode == true) {
                                val = index
                            }
                            else {
                                val = _aim[index];
                            }

                            //
                            if(search(_val_kep, val) !== false) {

                                delete _aim[index];
                            }
                            _val_kep.push(val);
                        }
                        op_loop("end");
                    }

                    return _aim;
                }

            },
            /* helper" bin */
            "bin":
            {
                id: "bin",
                eject: [],
                chart: [ "hex2bin", "bin2hex" ],

                hex2bin: function(data) {

                    if(_s(data)) {
                        data = s_split(data, 2);
                    }

                    var re = "";

                    each(data, function(item) {

                        re += parseInt("0x" + item);
                    });

                    return re;
                },

                /* bin2hex */
                bin2hex: function(bin) {

                    var data = "";

                    var z = 0;
                    while(z < bin.length) {

                        var val = bin.charCodeAt(z);

                        val = val.toString(16);

                        data += val;
                        z++;
                    }

                    return data;
                }
            },
            "com":
            {
                id: "com",
                wish: ["upgrade"],
                chart: ["upgrade"],

                upgrade: function(COMName, src) {

                    if(mock(COM[COMName])) {
                        COM[COMName] = new Object();
                    }

                    return copy(src, COM[COMName]);
                }
            },
            /*
            helper: web
             */
            "web":
            {
                id: "web",
                wish:   "sacrifice",
                chart:  [ "request", "http", "socket" ],

                /*
                n:  request;
                 */
                request:   function(url, data, onsuccess, _opts){

                    var opts =
                    {
                        method: "GET",
                        asycn: true,
                        onerror: null,
                        onprogress: null
                    };

                    _mover.setup(opts, _opts);

                    onsuccess = g_func(onsuccess);

                    var onerror = g_func(opts.onerror);
                    var onprogress = g_func(opts.onprogress);

                    //  crate Request Object
                    var HTTP = new XMLHttpRequest();

                    var shutdown = false;
                    //  get string
                    if(_o(data) && data != null) {
                        data = _object.analyze(data, "&", true);
                    }

                    //  replaced by localhost

                    url = joinURL(url);

                    if(opts.method == "GET") {

                        if(exist(data)) {
                            data = "?" + data;
                            url += data;
                        }
                        data = "";  //  reset data
                    }

                    HTTP.open(opts.method, url, opts.asycn);

                    if(opts.method == "POST") {
                        HTTP.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                    }

                    if(opts.asycn == true) {
                        HTTP.onreadystatechange = _http_callback;
                    }

                    HTTP.send(data);

                    return HTTP;

                    //
                    function _http_callback() {

                        var response;

                        if(shutdown == true) {
                            return;
                        }

                        if(( HTTP.readyState == 4) && (HTTP.status == 200) ) {
                            response = HTTP.responseText;

                            //  server already sended data, now we process them
                            if(onsuccess) {
                                onsuccess(response, HTTP);
                            }
                        }
                        else if(HTTP.status == 404) {
                            //  unluckly, we got error
                            if(onerror) {
                                onerror(HTTP);
                            }

                            shutdown = true;

                            //
                            if(Config.XHRError == true) {
                                console.log("XHR Error");
                            }
                        }
                        else {
                            //  we trace any!

                            if(onprogress) {
                                onprogress(HTTP);
                            }
                        }
                    }
                }
                ,
                /*
                n:  http
                 */
                http:  function(url, data, _method) {

                    //  init option
                    var _options =
                    {
                        asycn: false
                    };

                    if(exist(_method)) {
                        _options.method = _method;
                    }

                    //  call http function
                    var _HTTP = _web.request(url, data, null, _options);

                    var response = _HTTP.responseText;
                    //  parse json

                    var re = response;
                    if(re !== "") {
                        re = cliff(decode, [ response ], "disable");
                    }

                    if(_X(re)) {
                        re = response;
                    }
                    return re;
                },

                /* socket: as same as WebSocket */
                socket: function(url, ondata, param, opts) {

                    var _http = _socket_http;

                    var myurl = url;
                    var timer;
                    var _obj =
                    {
                        ondata: ondata,
                        onerror: null,

                        speed: 1000,
                        method: "GET",

                        meet: function() {
                            // meet
                            var _param =
                            {
                                meet: "meet",
                                sAction: "meet"
                            };

                            copy(param, _param);

                            _http(_param, onmeet);

                            // start loop
                            timer = every(_socket_timer, _obj.speed);
                        },
                        send: function(data, callback) {

                            var thisAsycn = true;
                            if(mock(callback)) {
                                thisAsycn = false;
                            }

                            var _param =
                            {
                                data: data,
                                send: "send"
                            };

                            var xhr = _http(_param, callback, { asycn: thisAsycn });

                            return xhr.responseText;
                        },
                        end: function() {

                            var _param =
                            {
                                end: "end",
                                sAction: "end"
                            };

                            copy(param, _param);

                            _http(_param, onend);
                            timer.stop();
                        },
                        reset: function(url) {
                            myurl = url;
                        }
                    };

                    setup(_obj, opts);

                    var onerror = g_func(_obj.onerror);
                    var ondata = g_func(_obj.ondata);

                    var onmeet = g_func(_obj.onmeet);
                    var onend = g_func(_obj.onend);

                    if(is(param)) {
                        param = g_obj(param);
                    }
                    _obj.meet();


                    return _obj;
                    /* _socket_http */

                    function _socket_http(data, suc_cb, _opts) {

                        var opts =
                        {
                            onerror: _socket_onerror,
                            method: _obj.method,
                            asycn: true
                        };

                        setup(opts, _opts);

                        return request(myurl, data, suc_cb, opts);
                    }

                    /* _socket_timer */
                    function _socket_timer() {

                        var _param =
                        {
                            query: "query",
                            sAction: "query"
                        };

                        copy(param, _param);
                        _http(_param, _socket_onsuccess);
                    }

                    /* callback: _socket_cb */

                    function _socket_onsuccess(res, XHR) {

                        if(res !== "" && is(ondata)) {
                            ondata(res);
                        }
                    }

                    /* callback: _socket_onerror */
                    function _socket_onerror(XHR) {

                        if(is(onerror)) {
                            onerror(XHR);
                        }

                        timer.stop();
                    }
                }
            }
            ,
            /*
            helper: type-convert
             */
            "converter":
            {
                id: "converter",
                wish: "sacrifice",
                chart: [ "obj2arr", "arr2obj", "arg2arr", "obj2str", "_2int"],

                obj2arr:    function(src, mode) {

                    mode = mode || "v";

                    var re;
                    if(_o(src)) {

                        re = new Array();

                        //  for
                        var index;
                        var val;

                        var counter = 0;
                        for(index in src) {

                            if(mode == "v") {
                                val = src[index];
                            }
                            else if(mode == "k"){
                                val = index;
                            }
                            counter++;
                            re[counter - 1] = val;
                        }
                    }

                    return re;
                },

                /*
                name:   arr2obj
                 */
                arr2obj:    function(src, _opt) {

                    var opt =
                    {
                        sharp: true,
                        same: true,
                        prefix: ""
                    };

                    setup(opt, _opt);

                    var index = 0;
                    var val;
                    var keyName;

                    var re = new Object();

                    for(; index < src.length; index++) {

                        val = src[index];

                        // from option
                        if(opt.sharp == true) {

                            val = val.split("#");

                            keyName = val[1];
                            val = val[0];
                        }

                        if(opt.same == true) {
                            keyName = keyName || val;
                        }

                        keyName = opt.prefix + keyName;

                        re[keyName] = val;
                    }

                    return re;
                },

                /*
                name:   arg2arr
                 */
                arg2arr:    function(argument) {

                    argument = argument || arg2arr.caller.arguments;

                    var x = 0;

                    var re = new Array();

                    for(; x < argument.length; x++) {

                        re.push(argument[x]);
                    }

                    return re;
                },

                /* obj2str */
                obj2str: function(obj, _opts) {

                    var opts = {
                        key: true,
                        val: true,
                        num: false,
                        deep: 3,
                        join: " ",
                        strip: true,
                        method: true
                    };

                    setup(opts, _opts);


                    if(_o(obj)) {
                        var str = []; // save string

                        each(obj, function(val, key) {

                            if(! s_int(key) || opts.num) {
                                str.push(key);
                            }

                            if(!opts.method && _f(val)) {
                                val = obj.name;
                            }
                            else if(_o(val) || mock(val)) {
                                return; // stop
                            }
                            else {
                                val = val.toString();
                            }

                            str.push(val);

                        }, null, opts.deep);

                        str = str.join(opts.join);
                    }
                    else {

                        // repeat
                        if(!opts.method && _f(obj)) {
                            str = obj.name;
                        }
                        else {
                            str = obj.toString();
                        }
                    }

                    if(opts.strip == true) {
                        str = strip(str);
                    }

                    return str;
                },
                _2int:  function(src) {

                    if(_o(src)) {

                        src = _loop.map(src, function(val) {
                            return parseInt(val);
                        })
                    }
                    else {
                        src = parseInt(src);
                    }

                    return src;
                }
            },
            /*
            helper: decider
             */
            "decider":
            {
                id: "decider",
                wish: [],
                chart:  []
            }
            ,
            /*
            helper: maker
             */
            "maker":
            {
                id: "maker",
                wish: "sacrifice",
                chart: [ "g_obj", "g_arr", "g_set", "g_unsh", "g_node" ],

                init: function() {
                    g_func = be;
                },
                /*
                name:   g_obj
                 */
                g_obj: function(src, _opts) {

                    var re;

                    var opts =
                    {
                        "exist": true,
                        "clone": false
                    };

                    setup(_opts, opts);

                    if(_A(src)) {
                        re = _converter.arr2obj(src);
                    }
                    else if(_s(src)) {
                        re = _object.compose(src);
                    }
                    else {
                        re = src;
                    }

                    if(opts.exist) {

                        if(mock(src)) {

                            src = {};
                        }
                    }

                    if(opts.clone) {
                        re = clone(re);
                    }

                    return re;
                },

                /*
                name:   g_arr
                 */
                g_arr:  function(src, flag) {

                    flag = flag || "direct";

                    var re;
                    switch(flag) {

                        case "direct":
                        case 1:
                        {
                            if(_A(src) !== true) {

                                src = [ src ];
                                re = src;
                            }
                        }
                            break;
                    }

                    //
                    return re;
                },

                g_set:    function(src) {

                    var re = src;

                    if(_s(src)) {
                        //  may be array
                        if(src.search("=") !== -1) {
                            re = _object.compose(src);
                        }
                        else {
                            re = src.split(",");
                        }
                    }
                    else if(_n(src)) {
                        re = a_loop(src, "");
                    }

                    return re;
                },

                /* g_unsh */
                g_unsh: function(method) {

                    return _unshiftAPI;
                    /* normal _unshiftAPI */

                    function _unshiftAPI() {

                        var _arg = getArg();
                        _arg.unshift(this);

                        return method.apply(null, _arg);
                    }
                },

                g_node: function(src) {

                    if(_s(src)) {

                        var _tag;
                        var content;

                        var exp1 = /^<(\w+)[^>]*>/g;
                        _tag = submatch(src, exp1);

                        if(is(_tag)) {
                            var exp2 = new RegExp("</" + _tag + ">$");

                            content = s_erase(src, [exp1, exp2]);

                            src = tag(_tag, content);
                        }
                    }

                    return src;
                }
            }
            ,
            /*
            helper: regexp
             */
            "regexp":
            {
                id: "regexp",
                wish: "sacrifice",
                chart: [ "reg1", "submatch", "testExp"],

                reg1:   function(src, pattern, return_index) {

                    var re = null;

                    return_index = return_index || 0;

                    re = src.match(pattern);

                    if(_A(re)) {
                        re = re[return_index];
                    }

                    return re;
                },

                submatch:   function(src, pattern, index) {

                    var result = [];
                    index = index || 1;

                    var matches;
                    while((matches = pattern.exec(src)) !== null) {

                        result.push(matches[index]);
                    }

                    return result;
                },

                /* testExp */

                testExp: function(string, regexp) {

                    var result =  string.match(regexp);

                    return is(result);
                }
            },
            /*
            helper: dom
             */
            "dom":
            {
                id: "dom",
                eject: [ ],
                chart:
                    [
                        "tag", "tags",  "choose", "Tag", "Name", "ID", "Class",
                        "putImgs", "sheet", "select", "iframe", "ul", "ol",
                        "_NS", "_HS", "_HES", "heavyNode", "$1"
                    ],
                alias: {
                    upnode: "heavyNode"
                },
                map: {
                    TagAttr:
                    {
                        a: [ "href", "target" ],
                        audio: [ "src", "controls", "autoplay" ],
                        canvas: [ "width", "height" ],
                        form: [ "action", "name", "method", "target" ],
                        img: ["src"],
                        input: [ "type", "name", "value"],
                        link: [ "rel", "href" ],
                        option: [ "value" ],
                        optgroup: [ "label" ],
                        progress: [ "value" , "max"],
                        script: [ "src" ],
                        table: [ "align" ],
                        textarea: [ "rows", "cols" ],
                        video: [ "src", "controls", "autoplay" ]
                    },

                    DOMAPIAlias: {

//                    append: "appendChild",
                        //insert: "insertBefore",
                        replace: "replaceChild",
                        remove: "removeChild",

                        hasAttr: "hasAttribute",
                        hasAttrs: "hasAttributes",
                        getAttr: "getAttribute",
                        setAttr: "setAttribute",
                        delAttr: "removeAttribute",
                        hasChild: "hasChildNodes",
                        clone: "cloneNode",
                        tagName: "getElementsByTagName"
                    },

                    DOMAttrAlias: {
                        first: "firstElementChild",
                        last: "lastElementChild",
                        parent: "parentElement",
                        pre: "previousElementSilbing",
                        next: "nextElementSibling",
                        child: "children",

                        ID: "id",
                        //text: "textContent"
                        //html: "innerHTML"
                    },

                    DOMInitMap: {

                        FORM: {

                            init: function() {

                            },

                            action: {
                                submit: function() {

                                    var nForm = this;

                                    nForm.collect();
                                },

                                change: function() {

                                    this.collect();
                                }
                            },

                            Ext: {
                                collect: function() {

                                    var nNode = this;

                                    // get elements
                                    var elements = nNode.elements;

                                    var element, name, value;
                                    for(var iEle = 0; iEle < elements.length; iEle++) {

                                        element = elements[iEle];
                                        name = element.name;
                                        value = element.value;

                                        nNode["$" + name] = value;
                                    }

                                    return nNode;
                                }
                            }
                        }
                    }
                },
                list: {
                    ExposeTag:
                        [
                            "a", "audio", "b", "br", "button", "canvas", "div", "form", "h1", "h2", "h3", "h4", "h5", "h6",
                            "hr", "i", "img", "input", "label", "li", "link", /*"ol", */"option", "optgroup", "p",
                            "pre", "progress", "script", "section", /*"select",*/ "small", "span", "style", "table",
                            "td", "textarea", "th", "time", "u", /*"ul"*/ "video"
                        ],
                    TagName:
                        [
                            "a", "abbr", "area", "b", "base", "blockquote", "body", "br", "button", "canvas",
                            "code", "col", "colgroup", "datalist", "dd", "del", "div", "dl", "em", "embed",
                            "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5",
                            "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "label", "legend",
                            "li", "link", "map", "mark", "menu", "meta", "nav", "ol", "optgroup", "option", "output",
                            "p",  "pre", "progress", "q", "s", "script", "section", "select", "small", "source",
                            "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea",
                            "tfoot", "th", "thead", "time", "title","tr", "track", , "u", "ul", "video"
                        ],

                    MyNode: [ "recode", "coor", "recode" ],
                    SpecNode: [ "append","insert"]
                },

                api: {
                    Creator: {},

                    NodeExt: {
                        coor:   function(node, top, left, position) {

                            position = position || "absolute";

                            css(node, "position", position);

                            if(exist(top)) {
                                y(node, top);
                            }

                            if(exist(left)) {
                                x(node, left);
                            }

                            return node;
                        },

                        recode: function(node) {
                            node.innerHTML = node.innerHTML;

                            return node;
                        },

                        isFirst: function(node) {
                            var parent = node.parentElement;

                            return (node == node.firstElementChild);
                        },

                        isLast: function(node) {

                            var parent = node.parentElement;

                            return (node == parent.lastElementChild);
                        },
                        /* append */
                        append: function(node, src) {
                            //pause("node" + node + "\nsheet:" + src);
                            src = g_node(src);

                            if(is(src.length) && !_HE(src)) {

                                each(src, function(child) {

                                    node.appendChild(child);
                                });
                            }
                            else {
                                node.appendChild(src);
                            }

                            return node;
                        },

                        /* depend */
                        depend: function(node, parent) {

                            if(_A(parent)) {
                                parent = parent[0]; // convert array to HTMLNode
                            }

                            parent = parent || Body;
                            append(parent, node);

                            return node;
                        },

                        /* insert */
                        insert: function(node, src, sib) {

                            sib = _def(sib, 0);
                            src = g_node(src);

                            if(_n(sib)) {
                                sib = node.children[sib];
                            }

                            node.insertBefore(src, sib);

                            return node;
                        },

                        before: function(node, sibling) {

                            var parent = node.parentElement;

                            parent.insertBefore(sibling, node);

                            return node;
                        },

                        beforeTo: function(node, sibling) {

                            var parent = sibling.parentElement;

                            parent.insertBefore(node, sibling);

                            return node;
                        },

                        after: function(node, sibling) {

                            var parent = node.parentElement;

                            if(isLast(node)) {
                                parent.appendChild(sibling);
                            }
                            else {
                                parent.insertBefore(sibling, node.nextElementSibling);
                            }

                            return node;
                        },

                        afterTo: function(node, sibling) {

                            var parentNode = sibling.parentElement;

                            if(isLast(sibling)) {
                                parentNode.appendChild(node);
                            }
                            else {
                                parentNode.insertBefore(node, sibling);
                            }

                            return node;
                        },

                        html: function(node, src, fillMode) {

                            var re;
                            fillMode = _def(fillMode, TRUE);

                            if(_HES(src)) {
                                node.append(src);
                            }
                            else if(! mock(src)){

                                if(fillMode == true) {
                                    node.innerHTML = src;
                                }
                                else {
                                    node.innerHTML += src;
                                }

                                re = node;
                            }
                            else {
                                re = node.innerHTML;
                            }

                            return re;
                        },

                        txt: function(node) {

                            var str = node.innerHTML;

                            str = str.replace(/<[^>]+>/g, " ").replace(/\s{1,}/g, " ");

                            return str;
                        },

                        /* attr */
                        attr: function(node ,attrName, attrValue) {

                            if(_o(attrName)) {

                                var attrMap = attrName;

                                // each
                                each(attrMap, function(val, key) {

                                    if(is(val)) {
                                        node.setAttribute(key, val);
                                    }
                                });

                                re = node;
                            }
                            else {
                                // check attribute value
                                if(mock(attrValue)) {
                                    re = node.getAttribute(attrName);
                                }
                                else {
                                    node.setAttribute(attrName, attrValue);

                                    re = node;
                                }
                            }

                            return re;
                        },

                        elect: function(node, selectorText) {

                            return choose(selectorText, node);
                        },

                        cut: function(node) {

                            var parent = node.parentElement;
                            parent.removeChild(node);

                            return node;
                        },

                        n_slice: function(node, index, length) {

                            var childLength = node.child().length - index;

                            if(childLength > 1) {
                                return node;
                            }

                            index = _def(index, 0);

                            length = _def(length, childLength);

                            // limit end index
                            length = ngt(length, childLength);

                            //
                            for(var i = childLength -1; i >= childLength; i--) {

                                cut(node[i]);
                            }

                            return node;
                        },

                        hasClass: function(node, testClass) {

                            var className = node.className;

                            var regClass = new RegExp("\\b" + testClass + "\\b", "g");

                            var finded = false;

                            while(regClass.test(className)) {

                                var last = regClass.lastIndex;

                                var start = last - testClass.length -1; // start border

                                if( (start == 0 || className[start] !== "-") && ((last == className.length -1) || className[last] !== "-")) {
                                    finded = true;
                                    break;
                                }
                            }

                            return finded;
                        },

                        addClass: function(node, className) {

                            if(_s(className)) {
                                className = className.split(/\s+/);
                            }
                            else if(mock(className)) {
                                return node;
                            }

                            var curClass;

                            for(var z = 0; z < className.length; z++) {

                                curClass = className[z];

                                if(hasClass(node, curClass) == false) {
                                    var newName = node.className + " " + curClass;

                                    node.className = cutWhite(newName);
                                }
                            }

                            return node;
                        },

                        cutClass: function(node, className) {

                            if(mock(className)) {
                                return node;
                            }
                            className = className.split(/\s+/);

                            var thisClass;
                            for(var y = 0; y < className.length; y++) {

                                thisClass = className[y];

                                if(hasClass(node, thisClass) == true) {

                                    var regClass = new RegExp("(^| )" + thisClass + "($| )", "g");
                                    var newName = node.className.replace(regClass, " ");

                                    node.className = cutWhite(newName);
                                }
                            }

                            return node;
                        },

                        setClass: function(node, addName, cutName) {

                            node.addClass(addName);
                            node.cutClass(cutName);

                            return node;
                        },

                        para: function(node, string, className) {

                            var nPara = p(string, className);

                            node.append(nPara);

                            return node;
                        },

                        edit: function(node, value) {

                            value = _def(value, TRUE);
                            if(! value) {

                                node.removeAttribute("contenteditable");
                            }
                            else {
                                node.setAttribute("contenteditable", "");
                            }

                            return node;
                        },

                        inline: function(node) {

                            node.style.display = "inline-block";

                            return node;
                        }
                    }
                    ,
                    NodeSet: {

                        /* i */
                        i: function(nodeset, callback, arg) {

                            arg = _def(arg, []);

                            // make callback
                            callback = g_func(callback);

                            var length = nodeset.length;

                            for(var x = 0; x < length; x++) {

                                if(op_loop("query") == true) {
                                    break;
                                }

                                var node = nodeset[x];

                                var _arg = [node, x].concat(arg);

                                callback.apply(null, _arg);
                            }
                            op_loop("end");

                            return nodeset;
                        },

                        rand: function(nodeset, count, selector) {

                            if(is(selector)) {
                                nodeset.back(selector);
                            }

                            nodeset = r_src(nodeset, count);
                            _dom.heavyNode(nodeset);

                            return nodeset;
                        },

                        hasNode: function(nodeset, node) {

                            var finded = -1;

                            nodeset.i(function(checkNode, index) {

                                if(node.isSameNode(checkNode)) {
                                    finded = index;
                                    op_loop("stop");
                                }
                            });

                            return finded;
                        },

                        back: function(nodeset, selector) {

                            var compareSet = choose(selector);

                            for(var z = 0; z < nodeset.length; z++) {

                                var node = nodeset[z];

                                var findIndex = compareSet.hasNode(node);

                                if(findIndex == -1) {
                                    nodeset.splice(z, 1);
                                    z--;
                                }
                            }

                            return nodeset;
                        },

                        elect: function(nodeset, selector) {

                            var newset = [];

                            nodeset.i(function(node) {

                                var findset = node.find(selector);

                                newset = newset.concat(findset);
                            });

                            unique(newset, true);
                            _dom.heavyNode(newset);

                            return newset;
                        },

                        has: function(nodeset, selector) {

                            var compSet;
                            if(_s(selector)) {
                                compSet = choose(selector);
                            }

                            compSet = _2A(compSet);

                            var finded = false;
                            each(compSet, function(node) {

                                if(has(nodeset, node)) {
                                    finded = true;
                                    op_loop("stop");
                                }
                            });

                            return finded;
                        },
                        omit: function(nodeset, selector) {

                            var compareSet = choose(selector);

                            compareSet.i(function(node, index) {

                                var findIndex = nodeset.hasNode(node);

                                if(findIndex !== -1) {
                                    nodeset.splice(findIndex, 1);
                                }
                            });

                            return nodeset;
                        },

                        add: function(nodeset, selector) {

                            var appendSet = choose(selector);

                            // for
                            for(var x = 0; x < appendSet.length; x++) {

                                var curNode = appendSet[x];

                                if(nodeset.hasNode(curNode) == -1) {
                                    nodeset.push(curNode);
                                }
                            }

                            return nodeset;
                        },

                        /* full */
                        full: function(nodeset, addTag) {

                            var contents = "";

                            nodeset.i(function(node) {

                                if(addTag == true) {
                                    contents += html(node);
                                }
                                else {
                                    contents += txt(node);
                                }
                            });

                            return contents;
                        },

                        tagFilter: function(nodeset, tagName, omited) {

                            omited = _def(omited, FALSE);
                            tagName = up(tagName);

                            var node;
                            var needCut;

                            for(var i = 0; i < nodeset.length; i++) {

                                node = nodeset[i];

                                needCut = false;

                                if(omited == TRUE && node.tagName == tagName) {
                                    needCut = true;
                                }
                                else if (omited == FALSE && node.tagName !== tagName) {
                                    needCut = true;
                                }

                                if(needCut == TRUE) {
                                    nodeset.splice(i--, 1);
                                }
                            };

                            return nodeset;
                        }
                    }
                },

                method: {
                    CreateNodeCOM:    function(is_public) {

                        var _com = {};

                        var _nodeCOM = COM.Node;


                        //  for in
                        for(opName in _nodeCOM) {

                            // if is_public == true, expose to window

                            var name2 = opName;

                            if(is_public == true) {

                                if(is(window[opName])) {
                                    name2 = "__" + name2;
                                }

                                window[name2] = _nodeCOM[opName];
                            }

                            _nodeCOM[opName] = returnDOMOp("single", opName); //  node
                            _com[opName] = returnDOMOp("multiple", opName);   //  for nodelist
                        }


                        // 3 add alias

                        var NodeAlias = {
                            "find": "elect",
                            "$": "elect",

                            ap: "append",
                            de: "depend",
                            ins: "insert",
                            h: "html",
                            t: "text",
                            c: "css",
                            co: "color",
                            a: "attr",
                            t: "toggle",
                            f: "fly"
                        };

                        alias(_nodeCOM, NodeAlias);

                        alias(_com, NodeAlias);

                        // 4 extend nodeset Component

                        each(API.NodeSet, function(api, apiName) {
                            //
                            _com[apiName] = g_unsh(api);
                        });

                        var SetAlias =
                        {
                            r: "rand",
                            $: "elect",
                            find: "elect"
                        };

                        alias(_com, SetAlias);

                        ANT.COM.NodeSet = _com;

                        //  COM created
                        /*
                         name:   _return_nodeset_operation
                         */
                        function returnDOMOp(mode, operationName) {

                            var _mode_map =
                            {
                                single: node_modify,
                                multiple: nodeset_operation
                            };

                            var _nodeCOM = COM.Node;

                            var operation = _nodeCOM[operationName];
                            operation.apiName = operationName;

                            return _mode_map[mode];

                            /*  general     nodeset_modify  */
                            function node_modify() {

                                var _thisNode = this;


                                return operation.apply(node_modify, _method.un_arg(_thisNode));
                            }

                            /*  general:    nodeset_operation   */

                            function nodeset_operation() {

                                var _thisSet = this;
                                //  use do..while
                                var count = _thisSet.length;
                                var iterator = 0;

                                var check;
                                var re;

                                var NodeAttr = List.NodeAttr;

                                var op = operation.apiName;

                                if(a_in(List.SpecNode, op) || (a_in(List.MyNode, op) && argument.length == 0)) {
                                    count = 1;
                                }

                                var _node;
                                do {
                                    if(iterator >= count) {
                                        break;
                                    }

                                    _node = _thisSet[iterator++];
                                    //  call it.
                                    check = operation.apply(_node, arguments);
                                }
                                while(1 == 1);  //  good!

                                if(check !== _node) {
                                    re = check;
                                }
                                else {
                                    re = _thisSet;
                                }

                                return re;
                            }
                        }
                    }
                },
                init:   function() {
                    // 1 alias

                    // for in
                    var _map = Map.DOMAPIAlias;

                    for(var alias in _map) {

                        var _apiName = _map[alias];

                        API.Node[alias] = returnDOMAlias(_apiName);
                    }


                    // 2 attr

                    _map = Map.DOMAttrAlias;

                    for(var shortName in _map) {

                        var attrName = _map[shortName];

                        API.Node[shortName] = returnDOMAttr(attrName);
                    }

                    // 3 NodeExt
                    copy(API.NodeExt, API.Node);

                    upgrade("Node", API.Node);

                    // 4 expose tag
                    //
                    var creators = API.Creator;

                    var _list =  List.ExposeTag;

                    var y = 0;
                    var curTag;
                    for(; y < _list.length; y++) {

                        curTag = _list[y];
                        //  add function
                        creators[curTag] = returnTagCreator(curTag);
                    }

                    // expose
                    expose(creators, window);

                    // done!
                    /* in: returnDOMAlias */
                    function returnDOMAlias(apiName) {

                        return _DOMAliasAPI;

                        /* normal: _DOMAliasAPI */
                        function _DOMAliasAPI() {
                            var _arg = getArg();

                            var _node = _arg.shift();

                            // call DOM method
                            var re = _node[apiName].apply(_node, _arg);

                            if(_HES(re)) {

                                if(_HS(re)) {
                                    re = arg2arr(re);
                                }
                                upnode(re);
                            }

                            return re;
                        }
                    }

                    /* in returnDOMAttr */
                    function returnDOMAttr(attrName) {

                        return _DOMAttrAPI;

                        /* general _DOMAttrAPI */
                        function _DOMAttrAPI(node, value) {

                            var re;

                            if(exist(value)) {
                                node[attrName] = value;
                                re = node;
                            }
                            else {
                                re = node[attrName];
                            }

                            if(_HES(re)) {

                                if(_HS(re)) {
                                  re = arg2arr(re);
                                }
                                upnode(re);
                            }

                            return re;
                        }
                    }

                    function returnTagCreator(tagName) {

                        var _attr_map = Map.TagAttr[tagName] || [];

                        return _tag_creator;
                        /*
                         clouser: _tag_creator
                         */
                        function _tag_creator() {

                            var _element;

                            _element = _dom.tag(tagName);

                            var _order = [ "innerHTML", "className", "id"];

                            _order = _attr_map.concat(_order);

                            var attrName, attrVal;
                            for(var iArg = 0; iArg < arguments.length; iArg++) {

                                attrVal = arguments[iArg];

                                if(mock(attrVal)) {
                                    continue;
                                }
                                attrName = _order[iArg];

                                //  set attribute value
                                _element[attrName] = attrVal;
                            }

                            // up node
                            _dom.heavyNode(_element);

                            return _element;
                        }
                    }
                },

                tag:    function(tagName, option1, _maybe_class, _maybe_id) {

                    var _node;

                    _node = document.createElement(tagName);

                    if(exist(option1)) {

                        if(_s(option1) && option1[0] == "&") {

                            option1 = option1.slice(1);
                            option1 = g_obj(option1);
                        }

                        if(_o(option1)) {

                            var attrObj = option1;

                            //  copy value

                            if(attrObj["mark"]) {

                                delete attrObj["mark"];

                                //  use setAttribute
                                for(var attrName in attrObj) {

                                    var attrVal = attrObj[attrName];

                                    if(exist(attrVal)) {
                                        _node.setAttribute(attrName, attrVal);
                                    }
                                }
                            }
                            else {
                                clean(attrObj, "undefined&null");
                                copy(attrObj, _node);
                            }
                        }
                        else if(_s(option1)) {

                            var _html;

                            _html = option1;

                            _node.innerHTML = _html;
                        }
                    }

                    //  set className or id
                    if(is(_maybe_class)) {
                        _node.className = _maybe_class;
                    }

                    if(is(_maybe_id)) {
                        _node.id = _maybe_id;
                    }

                    // upgrade
                    _dom.heavyNode(_node);

                    return _node;
                }
                ,
                /* Tag */
                Tag: function(tagName) {
                    var _set = document.getElementsByTagName(tagName);

                    return _dom.heavyNode(_set);
                },

                /* Name */
                Name: function(name) {
                    var _nodeset = document.getElementsByName(name);

                    return _dom.heavyNode(_nodeset);
                },

                /* Class */
                Class: function(className) {
                    var _list = document.getElementsByClassName(className);

                    return _dom.heavyNode(_list);
                },

                /* ID */
                ID: function(id) {
                    var _node = document.getElementById(id);

                    return _dom.heavyNode(_node);
                },


                heavyNode: function(src) {

                    if(mock(src)) {
                        return null;
                    }

                    var nodeCOM = COM.Node;
                    var setCOM =  COM.NodeSet;

                    // test one value, if has then skip
                    if(src["ant-node"] == "node") {
                        return src;
                    }
                    else {
                        src["ant-node"] = "node";
                    }

                    var initMap, curMap;
                    var tName;

                    var node;

                    if(_HE(src)) {

                        node = src;
                        // cool initial
                        initMap = Map.DOMInitMap;
                        tName = node.tagName;

                        curMap = initMap[tName];

                        if(is(curMap)) {

                            // extend

                            copy(curMap.Ext, node);

                            // init
                            if(curMap.init) {
                                curMap.init();
                            }

                            // add event listener
                            var action = curMap.action;

                            if(is(action)) {

                                for(var eventName in action) {

                                    var handler = action[eventName];

                                    tie(node, eventName, handler);
                                }
                            }
                        }


                        copy(nodeCOM, node, null, true);

                        // decorate for node

                        var COM_click = rob(node, "_click");

                        node.click = function() {

                            var clickAPI;
                            var result;

                            if(arguments.length == 0) {

                                clickAPI = HTMLElement.prototype.click;
                                result = clickAPI.apply(this);
                            }
                            else {

                                result = applyMe(COM_click);
                            }

                            return result;
                        };


                    }
                    else if(_SET(src)) {

                        src = _2A(src);
                        src.nodeset = 1;

                        // for every node
                        each(src, _dom.heavyNode);

                        copy(setCOM, src, null, true);
                    }

                    return src;
                },


                /*
                name; putImgs
                 */
                putImgs:    function(src, parent) {

                    parent = parent || Body;

                    var imgNode;
                    each(src, function(val) {
                        imgNode = img(val);

                        parent.appendChild(imgNode);
                    })

                    return parent;
                },

                /* name: _iframe */
                iframe: function(name, src, add_html) {
                    var _node;

                    var _props =
                    {
                        name: name
                    };

                    var html = "";
                    if(add_html == true) {
                        html = src;
                    }
                    else {
                        _props["src"] = src;
                    }

                    _node = tag("iframe", _props);

                    // append
                    append(Body, _node);

                    modify_iframe();

                    if(html !== "") {
                        _node.body.innerHTML += html;
                    }

                    _node.tie("load", iframe_onload);

                    return _node;

                    /* modify_iframe() */

                    function modify_iframe() {

                        _node.doc = _node.contentDocument;
                        _node.win = _node.contentWindow;
                        _node.head = _node.doc.getElementsByTagName("head")[0];
                        _node.body = _node.doc.body;
                    }

                    /* iframe_onload() */

                    function iframe_onload() {

                        modify_iframe();
                    }
                },

                /* select */
                select: function(src, className, id) {



                    var node = tag("select",
                        {
                            className: className,
                            id: id
                        });

                    src = g_set(src);
                    var isArray = _A(src);

                    each(src, function(val, key) {

                        if(isArray == true) {
                            key = val;
                        }

                        var node2;

                        // hack
                        if(val[0] == "$") {

                            val = val.replace(/^\$/, "");
                            node2 = optgroup(val);
                        }
                        else {
                            node2 = option(val, key);
                        }

                        append(node, node2);
                    });

                    return node;
                },

                /* ul */
                ul: function(src, className, id) {

                    var node = _dom.tags("li", src, null, "ul");

                    var attrMap =
                    {
                        class: className,
                        id: id
                    };

                    attr(node, attrMap);

                    return node;
                },

                /* ol */
                ol: function(src, className, id, type) {

                    var OLNode = tags("li", src, null, "ol");

                    var map =
                    {
                        type: type,
                        className: className,
                        id: id
                    };

                    attr(OLNode, map);

                    return OLNode;
                },
                /* tags */
                tags: function(_tagName, src, className, parentTag, _opts) {

                    var opts =
                    {
                        keyAttr: "id",
                        empty: true
                    };

                    setup(opts, _opts);

                    src = g_set(src);

                    var isArray = _A(src);

                    var nodeset = [];

                    // each
                    each(src, function(val, key) {

                        if(empty(val) && !opts.empty) {
                            val = key;
                        }


                        var child = tag(_tagName,
                            {
                                innerHTML: val,
                                className: className
                            });

                        if(isArray == false) {
                            child.setAttribute(opts.keyAttr, key);
                        }

                        nodeset.push(child);
                    });

                    // create parent
                    var _parent;

                    if(empty(parentTag) == false) {
                        _parent = tag(parentTag);

                        _parent.append(nodeset);
                        re = _parent;
                    }
                    else {
                        _dom.heavyNode(nodeset);
                        re = nodeset;
                    }

                    return re;
                },

                sheet: function(src, bStay) {

                    var _link = tag("link",
                        {
                            rel: "stylesheet",
                            href: src
                        });

                    if(! bStay) {
                        Head.appendChild(_link);
                    }

                    return _link;
                },

                /* choose */
                choose: function(selector, node) {

                    if(_f(selector)) {

                        var loader = selector;
                        spy(loader, "load", window);

                        return window;
                    }

                    // general selector
                    node = node || document;
                    // no check
                    var nodeset;

                    if(_A(selector)) {
                        nodeset = selector;
                    }
                    else {
                        nodeset = node.querySelectorAll(selector);
                    }
                    // upgrade
                    nodeset = _dom.heavyNode(nodeset);

                    return nodeset;
                },

                /* _NS */
                _NS: function(src) {
                    return is(src.nodeset);
                },

                _HS: function(src) {

                    return ( is(src) && ( _NS(src) || _NL(src) || _HC(src) ) );
                },

                _HES: function(src) {
                    
                    return ( is(src) && (_NS(src) || _HE(src) || _NL(src) || _HC(src)) );
                },

                /* $1 */
                $1: function(selector) {

                    var nodeset = choose(selector);

                    if(is(nodeset)) {
                        nodeset = nodeset[0];
                    }

                    return nodeset;
                }
            },

            /*
            helper: css
             */
            "css":
            {
                id: "css",
                eject: [ "_fly" ],
                chart:
                    [
                        "css", "hasUnit", "_fly", "cutUnit"
                    ],
                map: {

                    StyleAlias:
                    {
                        bg: "background",
                        opa: "opacity",
                        font: "fontSize",
                        family: "fontFamily",
                        w: "width",
                        h: "height",
                        //x: "left",
                        x2: "right",
                        y2: "bottom",
                        pos: "position",
                        pad: "padding",
                        align: "textAlign",
                        anim: "animation",
                        line: "lineHeight",
                        radius: "borderRadius"
                    },

                    Scheme: {
                        black: {
                            bg: "black",
                            color: "white"
                        },
                        white: {
                            bg: "white",
                            color: "black"
                        }
                    }
                },
                list: {
                    ExposeStyle:
                        [
                            "color",/*"background",*/"opacity",
                            "fontSize", "lineHeight","fontFamily",
                            "width", "height", "margin", "padding",
                            "left", "top", "right", "bottom",

                            "display", "position", "float", "textAlign",
                            "animation", "border", "cursor","borderRadius",

                            "bg", "opa", "font", "line",
                            "w", "h", "x", "y", "x2", "y2",
                            "pos", "pad", "align",
                            "anim", "radius"
                        ],
                    UnitStyle:
                        [
                            "fontSize","lineHeight",
                            "height", "width", "margin", "padding", "paddingLeft", "paddingRight", "paddingTop",
                            "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom",
                            "left", "right", "top", "bottom", "borderRadius"
                        ]
                },
                api: {

                    CSS: {},
                    /* _extend_css */
                    CSSExt:
                    {
                        // wide operation, i assue isShow is exposed
                        show: function(node, value) {

                            value = _def(value, "block");

                            if(isShow(node) == false) {
                                css(node, "display", value);
                            }

                            return node;
                        },

                        hide: function(node) {

                            if(isShow(node) == true) {
                                css(node, "display", "none");
                            }

                            return node;
                        },

                        toggle: function(node) {

                            if(isShow(node) == true) {
                                hide(node);
                            }
                            else {
                                show(node);
                            }

                            return node;
                        },

                        isShow: function(node) {
                            return (css(node, "display") !== "none");
                        },

                        fly: function() {
                            return un_apply(_css._fly, "fly", 1);
                        },

                        slow: function() {
                            return un_apply(_css._fly, "slow", 1)
                        }
                        ,
                        fast: function() {
                            return un_apply(_css._fly, "fast", 1)
                        },

                        sway: function() {
                            return un_apply(_css._fly, "sway", 1)
                        },

                        dye: function(node, mode) {

                            mode = mode || "16";

                            var map = Map.Scheme[mode];

                            if(is(map)) {
                                BG = map["bg"];
                                Color = map["color"];
                            }
                            else {
                                // switch
                                switch(mode) {

                                    case "16":
                                    {
                                        BG = _16();
                                        Color = _16();
                                    }
                                        break;

                                    case "139":
                                    {
                                        BG = _139();
                                        Color = _139();
                                    }
                                        break;
                                    default: {

                                    }
                                }
                            }

                            // ok, dye node
                            node.bg(BG);
                            node.color(Color);

                            return node;
                        },

                        x: function(node, value) {

                            var pageWidth,  nodeWidth,

                            pageWidth = window.innerWidth;
                            nodeWidth = node.width(und, 1);

                            switch(value) {

                                case "left":
                                {
                                    value = 0;
                                }
                                    break;
                                case "center":
                                {
                                    value = ( pageWidth - nodeWidth ) / 2;
                                }
                                    break;

                                case "right":
                                {
                                    value = pageWidth - nodeWidth;
                                }
                                    break;
                            }

                            if(_n(value)) {
                                value = value + "px";
                            }

                            css(node, "left", value);

                            return node;
                        },

                        y: function(node, value) {

                            var pageHeight,  nodeHeight;

                            pageHeight = window.innerHeight;
                            nodeHeight = node.height(und, 1);

                            switch(value) {

                                case "top":
                                {
                                    value = 0;
                                }
                                    break;
                                case "center":
                                {
                                    value = ( pageHeight - nodeHeight ) /2;
                                }
                                    break;

                                case "bottom":
                                {
                                    value = pageHeight - nodeHeight;
                                }
                                    break;
                            }

                            if(_n(value)) {
                                value = value + "px";
                            }

                            css(node, "top", value);

                            return node;
                        }
                    }
                },

                init: function(){

                    var api = API.CSS;

                    api.css = _css.css;  //  a basic api

                    var _set = List.ExposeStyle;

                    var _catcher = returnCSSAPI;  //  return css modifiers

                    //  use while
                    var z = 0;
                    var cssName;

                    while(z < _set.length) {
                        cssName = _set[z++];
                        api[cssName] = _catcher(cssName);
                    }

                    // extend
                    copy(API.CSSExt, api);

                    upgrade("Node", API.CSS);

                    /*
                     name;   returnCSSAPI
                     */
                    function returnCSSAPI(styleName) {

                        styleName = Map.StyleAlias[styleName] || styleName;

                        return _css_modifier;
                        /* general: _css_modifier   */

                        function _css_modifier(node, styleVal, bCut) {

                            return _css.css(node, styleName, styleVal, bCut);
                        }
                    }
                },
                css: function(node, propName, propVal, bCutUnit) {

                    var comStyle;

                    var re;
                    if(_u(propVal)) {

                        if(_o(propName)) {

                            var map = propName;

                            // for
                            for(propName in map) {
                                propVal = map[propName];

                                node.style[propName] = propVal;
                            }

                            re = node;
                        }
                        else {
                            comStyle = window.getComputedStyle(node);
                            re = comStyle[propName];

                            if(bCutUnit == true) {
                                re = cutUnit(re, propName);
                            }
                        }
                    }
                    else {
                        node.style[propName] = propVal;

                        re = node;
                    }

                    return re;
                },

                /* hasUnit */
                hasUnit: function(styleName) {
                    var re = List.UnitStyle.indexOf(styleName);

                    return (re !== -1);
                },

                /* _fly */
                _fly: function(node, mode, targetCSS, duration, srcCSS, times) {

                    times = _def(times, 128);
                    // string to object
                    if(_s(targetCSS)) {
                        targetCSS = g_obj(targetCSS);
                    }

                    if(mock(srcCSS)) {

                        srcCSS = new Object();
                        // for in
                        for(var key in targetCSS) {
                            srcCSS[key] = css(node, key);
                        }
                    }
                    else if(_s(srcCSS)) {
                        srcCSS = g_obj(srcCSS);
                    }

                    // save CSS
                    if(mock(node.srcCSS)) {
                        node["srcCSS"] = srcCSS;
                    }

                    duration = _def(duration, 500);
                    times = duration * times / 1000;

                    // for in
                    var stepCSS = new Object();

                    for(key in targetCSS) {

                        var dstVal = float(targetCSS[key])
                        var srcVal = float(srcCSS[key]);

                        stepCSS[key] = (dstVal - srcVal) / times;
                    }

                    // create timer
                    var timer = every(_fly_timer, duration / times);
                    expose(timer, node, "function");

                    node.fall = fall;

                    var counter = 0;

                    return node;
                    /* inner: _fly_timer */
                    function _fly_timer() {

                        for(key in targetCSS) {

                            var step = stepCSS[key];

                            if(isNaN(step)) {
                                continue;
                            }

                            var curVal = float(srcCSS[key]) + step*counter;

                            if(_css.hasUnit(key)) {
                                curVal += "px";
                            }

                            css(node, key, curVal);
                        }

                        if(Sign.Fly == "stop") {
                            fall();
                        }
                        else if(++counter >= times) {

                            var nextMode = null;

                            var saved = false;
                            // the animation don't stop
                            if(mode == "sway") {
                                nextMode = "sway";
                                mode = "slow";
                            }

                            if(mode == "fast") {
                                css(node, srcCSS);
                            }
                            else if(mode == "slow") {
                                timer.stop();
                                _css._fly(node, nextMode, srcCSS, duration, targetCSS, times);
                            }
                            else if(mode == "fly") {
                                css(node, targetCSS);
                                saved = true;
                            }

                            if(mock(nextMode)) {
                                fall(saved);
                            }
                        }
                    }

                    /* fall */
                    function fall(saved) {

                        timer.stop();
                        counter = 0;
                        delete timer;

                        if(! saved) {
                            css(node, node.srcCSS);
                        }

                        // clean
                        del(node, [ "srcCSS", "fall" ]);
                    }
                },

                cutUnit: function(value, styleName, toNumber) {

                    var re = value;

                    toNumber = _def(toNumber, TRUE);

                    if(hasUnit(styleName) && value.match(/\d+\w+$/g)) {

                        re = value.replace(/[A-z]+$/, "");

                        if(toNumber == true) {
                            re = float(re);
                        }
                    }

                    return re;
                }
            }
            ,
            "sheet":
            {
                id: "sheet",
                wish: [ "loadSheet" , "createSheet", "rule", "rules"],
                chart: [ "initSheets", "loadSheet", "createSheet", "rule", "rules" ],

                alias: {
                    l_sheet: "loadSheet",
                    g_sheet: "createSheet"
                },
                onload: function() {
                    _sheet.initSheets();

                    Data.MySheet =
                    {
                        sheet1: g_sheet("sheet1"),
                        sheet2: g_sheet("sheet2")
                    };

                    expose(Data.MySheet);
                },
                api: {
                  Sheet: {

                  }
                },
                data: {
                   MySheet: {

                   }
                },
                method: {
                    upSheet: function(s) {

                        var rules = s.cssRules;
                        alias(s, {
                            r: "cssRules",
                            add: "addRule",
                            del: "deleteRule",
                            cut: "removeRule",
                            ins: "insertRule"
                        });

                        //
                        each(rules, function(r) {
                            s[r.selectorText] = r;
                        });
                    }
                },

                initSheets: function() {

                    Map.Sheets = new Object();

                    Sheets = Map.Sheets;

                    var sheetlist = document.styleSheets;

                    var up = Method.upSheet; // used for upgrade

                    each(sheetlist, function(item, index) {

                        Sheets[index] = item;

                        up(item);
                        var href = item.href;

                        if(is(href)) {
                            var m = reg1(href, /[^\/]+(?=\.css)/);

                            if(is(m)) {
                                Sheets[m] = item;
                            }
                        }
                    });
                },

                loadSheet: function(key) {
                    _sheet.initSheets();

                    return Sheets[key];
                },

                createSheet: function(id, stayed) {
                    var node = style("", null, id);

                    if(! stayed) {
                        append(Head, node);

                        var s = node.sheet;
                        Method.upSheet(s);

                        re = s;
                    }
                    else {
                        re = node;
                    }

                    return re;
                },

                rule: function(selector, text, s, forced) {
                    forced = _def(forced, true);
                    s = _def(s, sheet1);

                    var rules;

                    var rule = s[selector];
                    if(mock(rule) || forced) {
                        s.addRule(selector, text);

                        rule = last(s.rules).style;
                        s[selector] = rule;
                    }

                    return rule;
                },

                rules: function(map, s) {
                    s = _def(s, sheet1);

                    map = g_obj(map);

                    each(map, function(text, selector) {
                        rule(selector, text, s);
                    });

                    return s;
                }
            },
            /*
            helper: event
             */
            "event":
            {
                id: "event",
                wish: [ ],
                chart: [ "once", "tie", "deltie","on", "emit", "stopEvent" ],

                list: {
                    EventName:
                    [
                        "focus", "blur", "change", "click", "dblclick",
                        "mousedown", "mousemove", "mouseout", "mouseover", "mousewheel", "mouseup",
                        "keydown", "keyup", "keypress"
                    ]
                },
                map: {

                },

                alias: {
                    ev_stop: "stopEvent"
                },
                api: {
                    Binder: {}
                },
                init: function() {

                    var _list = List.EventName;
                    var binders = API.Binder;

                    var i = _list.length - 1;
                    var eventName;
                    var _api;

                    // i got a map
                    do {
                        eventName = _list[i];
                        _api = returnEventBinder(eventName);

                        // push
                        binders[eventName] = _api;

                    } while(i-- > 0)

                    // other
                    var _list = [ "once", "tie", "deltie", "on", "emit" ];

                    copy(_event, binders, _list);

                    // upgrade
                    upgrade("Node", binders);
                     /*
                     inner: returnEventBinder
                     */
                    function returnEventBinder(eventName) {

//                        // replace '_'
//                        eventName = eventName.replace("_", "");

                        return _EventBinder;
                        /*
                         normal: _EventBinder
                         */
                        function _EventBinder(node, handler, onError, useCapture) {

                            return spy(handler, eventName, node, onError, useCapture);
                        }
                    }
                },

                /* once */
                once: function(node, eventName, processor, useCapture) {

                    processor = g_func(processor);

                    node.addEventListener(eventName, _once_processor, useCapture);

                    return node;

                    /* normal: _once_processor */
                    function _once_processor() {

                        var _sign = processor();

                        // it's a little hack
                        if(! _sign) {
                            // cancel processor
                            node.removeEventListener(eventName, _once_processor, useCapture);
                        }
                    }
                },

                /* tie */
                tie: function(node, eventName, processor, useCapture, onerror) {

                    processor = g_func(processor);
                    spy(processor, eventName, node, onerror, useCapture);

                    return node;
                },
                /* deltie */
                deltie: function(node, eventName, processor, useCapture, onerror) {

                    processor = g_func(processor);
                    ///node.removeEventListener(eventName, processor, useCapture);

                    spy(processor, eventName, node, onerror, useCapture);

                    return node;
                },
                /* on */
                on: function(node, eventType, processor, onerror, useCapture) {

                    applyMe(API.listen);

                    return node;
                },

                emit: function(node, type, args) {

                    applyMe(API.catchEvent);

                    return node;
                },

                /* stopEvent
                   flag: 0-both, 1-preventDefault, 2-stopPropagation
                 */
                stopEvent: function(flag) {

                    flag = _def(flag, 1);
                    
                    switch(flag) {

                        case 0:
                        {
                            event.stopPropagation();
                            event.preventDefault();
                        }
                            break;

                        case 1:
                        {
                            event.preventDefault();
                        }
                            break;

                        case 2:
                        {
                            event.stopPropagation();
                        }
                            break;
                    }
                }
            },

            /* helper: keyboard */
            "keyboard": {
                id: "keyboard",
                wish: [],
                map: {
                    Keys:
                    {
                        110: ".", 96: "0", 36: "Right", 40: "Down", 37: "Left", 17: "Ctrl", 93: "Menu", 18: "Alt",  32: "Space", 91: "Win",
                        99: "3",  98: "2", 97:   "1",    38: "Up",   16: "Shift",191: "/",   190: ".",    188: ",",   77: "M",      78: "N",
                        66: "B",  86: "V", 67:  "C",     88: "X",    90: "Z",     102: "6",   101: "5",    100: "4",   13: "Enter", 222: "'",
                        186:";",  76: "L", 75:  "K",     74: "J",    72: "H",     71:  "G",   70:  "F",     68: "D",    83: "S",     65:  "A",
                        20: "Caps",         107: "+",    106: "9",   108: "8",    107: "7",   220:  "\\",   221:"]",   219: "[",    80:  "P",
                        79: "O",  73: "I",  85:  "U",    89:  "Y",   84:  "T",    82:  "R",   69:   "E",     87: "W",   81:  "Q",    9:  "Tab",
                        109: "-", 106: "*", 111: "/",   144: "Num", 8:    "<-",  187:  "+",  189:   "-",    48: "0",   57:  "9",    56:  "8",
                        55:  "7", 54:  "6",  53:  "5",   52:  "4",   51:   "3",   50:   "2",  49:    "1",    192: "`",  35:  "End",  34:  "PgDn",
                        33:  "PgUp",          36:  "Home",            46:   "Del", "-1":   "PrtSC",             19:  "Pause",            123: "F12",
                        122: "F11",121:"F10",120: "F9",  119:  "F8", 118:   "F7", 117:   "F6",              116: "F5",115:  "F4",   114: "F3",
                        113:  "F2",112: "F1",  27: "Esc"
                    }
                },
                list: {
                    KeysEvent:[ "keydown", "keyup", "keypress", "click", "dblclick" ]
                },

                alias: {
                    keys: "listenKeys"
                },

                data: {
                    KeysGroup: { }
                },

                init: function() {


                    var events = List.KeysEvent;
                    var group = Data.KeysGroup;
                    var _map = Map.Keys;
                    var curType;

                    var iEvent = 0;
                    for(;iEvent < events.length; iEvent++) {

                        curType = events[iEvent];
                        group[curType] = new Array();  //  add action kep

                        spy(_keyboard_response, curType, window, true);
                    }

                    //  add keyup

                    spy(_keyboard_keyup, "keyup");
                    //  now, i am busy


                    /* handler */
                    function _keyboard_response() {

                        //  search handprint

                        var active_keys = [];

                        if(event.ctrlKey) {
                            active_keys.push("Ctrl");
                        }

                        if(event.altKey) {
                            active_keys.push("Alt");
                        }

                        if(event.shiftKey) {
                            active_keys.push("Shift");
                        }

                        var keyname = _map[event.keyCode];

                        if(keyname && (keyname !== "Ctrl") && (keyname !== "Alt") && (keyname !== "Shift")) {
                            active_keys.push(keyname);
                        }

                        //  save group

                        _HOT_KEYS = active_keys;
                        search_keys(active_keys, event.type);
                    }

                    /*  keyup:  _finger_onkeyup */
                    function _keyboard_keyup() {

                        //  delete hot keys

                        _HOT_KEYS = [];
                    }
                    //  gear
                    function search_keys(keyset, type) {

                        type = type || "keydown";

                        var print;
                        var _prevent = false;
                        var _stop_ = false;

                        var hand_prints = group[type];

                        for(var iPrint = 0; iPrint < hand_prints.length; iPrint++) {

                            print = hand_prints[iPrint];

                            if(compare_keys(print.keys, keyset)) {
                                _calls(print.works);

                                //  prevent default event procesor
                                if(print.opt.prevent) {
                                    _prevent = true;
                                }

                                //  stop
                                if(print.opt.stop_) {
                                    _stop_ = true;
                                }

                                if(print.opt.preventNext) {
                                    break;
                                }
                            }
                        }

                        //  prevent default
                        if(_prevent == true) {
                            event.preventDefault();
                        }

                        //  stop propagation
                        if(_stop_ == true) {
                            event.stopPropagation();
                        }
                    }

                    //  compare_keys
                    function compare_keys(group1, group2) {

                        var iKey;

                        var isEqual = group1.length == group2.length;

                        for(iKey = 0; iKey < group1.length && isEqual; iKey++)
                        {
                            var key = group1[iKey];

                            if(search(group2, key) === false) {
                                isEqual = false;
                                break;
                            }
                        }

                        return isEqual;
                    }
                },

                listenKeys:  function(keygroup, callbacks, type, options) {

                    //  set default type
                    type = type || "keydown";
                    //  new print

                    var group = Data.KeysGroup;

                    //  parse key

                    if(_n(keygroup)) {
                        keygroup = keygroup.toString;
                    }

                    if(_s(keygroup)) {
                        keygroup = keygroup.split("+");
                    }

                    //  convert keycode to keyname

                    for(var iKey = 0; iKey < keygroup.length; iKey++) {

                        var key = keygroup[iKey];

                        var n = key - 0;

                        if(n == n && (n > 9 )) {
                            keygroup[iKey] = key_maps[key];
                        }
                    }

                    var new_print =
                    {
                        keys: keygroup,
                        works: callbacks,
                        opt: options || {}
                    };

                    group[type].push(new_print);
                },

                freeKeys: function(keygroup, callbacks) {

                }
            },
            /*
            helper: library
             */
            "library":
            {
                id: "library",
                wish: [ "hasJQ" ],
                chart: [ "hasJQ"],

                /*
                name;   hasJQ
                 */
                hasJQ:  function() {

                    return _debug._hasvar([ "jQuery", "jQuery.fn"]);
                }
            },

            /*
            helper: debug
             */
            "debug":
            {
                id: "debug",
                wish: "all",
                chart: [ "_hasvar", "_eval", "_var", "output", "wake", "v"],

                alias: {
                    LOG: "output"
                },

                /*
                _hasvar
                 */
                _hasvar:    function(vars, mode) {

                    if(_A(vars) == false) {
                        vars = [ vars ];
                    }

                    //  use for

                    mode = mode || "and";

                    var hasUndefined;
                    var hasDefined;

                    var x = 0;

                    for(;x < vars.length; x++) {

                        //  use try...catch
                        try {
                            var val;

                            //
                            val = eval(vars[x]);

                            if(exist(val) == false) {
                                hasUndefined = true;
                            }
                            else {
                                hasDefined = true;
                            }
                        }
                        catch(error) {
                            hasUndefined = true;
                        }
                    }

                    var result = true;
                    //  check mode
                    if(mode == "and") {

                        if(hasUndefined === true) {
                            result = false;
                        }
                    }
                    else if(mode == "or") {

                        if(hasDefined === false) {
                            result = false;
                        }
                    }

                    //
                    return result;
                }
                ,
                /*
                name:   _eval
                 */
                _eval:  function(code) {

                    var result;
                    try {
                        result = eval(code);
                    }
                    catch(exception) {
                        result = exception;
                    }

                    return result;
                },
                /*
                name:   _var
                 */
                _var:   function(varName) {

                    var _variation = null;

                    try {
                        _variation = eval(varName);
                    }
                    catch(e) {
                        //  not doing
                    }

                    return _variation;
                },

                output: function(message, forExt) {
                    if(Env.CRExt == false || forExt) {
                        console.log(message);
                    }
                },

                /* wake */
                wake: function(arg0, mode) {
                    mode = _def(mode, "alert");

                    switch(mode) {

                        case "alert":
                        {
                            var text = _def(arg0, "pause!");
                            alert(text);
                        }
                            break;
                    }
                }
                ,

                v: function() {

                    // use XHR made breakpoint
                    php("echo 'just test!';");
                }
            }
            ,
            /*
            name:   mover
             */
            "mover":
            {
                id: "mover",
                wish: [ "expose", "setup", "global"],
                chart: [ "expose",  "setup", "global"],

                expose: function(source, target, filters) {

                    if(exist(filters)) {
                        source = _loop.filter(source, filters);
                    }

                    target = target || window;
                    //  copy member
                    copy(source, target);

                    return source;
                }
                ,

                /*
                name:   setup
                 */
                setup:  function(defopts, custom) {

                    //  for options recover

                    if(_s(custom)) {
                        custom = _object.compose(custom);
                    }

                    if(mock(defopts)) {
                        return true;
                    }

                    return copy(custom, defopts);
                },

                /* global */
                global: function(method, methodName) {
                    methodName = methodName || method.name;

                    // expose
                    window[methodName] = method;

                    return window;
                }
            },

            /* json */
            "json": {

                id: "json",
                wish: [ "all" ],
                chart: [  "encode", "decode" ],
                init: function() {

                    // the tool is mine.
                    COM.JSON =
                    {
                        useHasOwn : ({}.hasOwnProperty ? true : false),

                        pad : function(n) {
                            return n < 10 ? "0" + n : n;
                        },

                        m : {
                            "\b": '\\b',
                            "\t": '\\t',
                            "\n": '\\n',
                            "\f": '\\f',
                            "\r": '\\r',
                            '"' : '\\"',
                            "\\": '\\\\'
                        },
                        encodeString : function(s){
                            if (/["\\\x00-\x1f]/.test(s)) {

                                return '"' + s.replace(/([\x00-\x1f\\"])/g, function(a, b) {

                                    var c = COM.JSON.m[b];
                                    if(c){
                                        return c;
                                    }

                                    c = b.charCodeAt();

                                    return "\\u00" +
                                        Math.floor(c / 16).toString(16) +
                                        (c % 16).toString(16);
                                }) + '"';
                            }

                            return '"' + s + '"';
                        },

                        encodeArray : function(o){
                            var a = ["["], b, i, l = o.length, v;

                            for (i = 0; i < l; i += 1) {
                                v = o[i];

                                switch (typeof v) {
                                    case "undefined":
                                    case "function":
                                    case "unknown":

                                        break;

                                    default:

                                        if (b) {
                                            a.push(',');
                                        }

                                        a.push(v === null ? "null" : this.encode(v));
                                        b = true;
                                }
                            }

                            a.push("]");

                            return a.join("");
                        },

                        encodeDate : function(o){

                            return '"' + o.getFullYear() + "-" +

                                pad(o.getMonth() + 1) + "-" +
                                pad(o.getDate()) + "T" +
                                pad(o.getHours()) + ":" +
                                pad(o.getMinutes()) + ":" +
                                pad(o.getSeconds()) + '"';
                        },

                        encode : function(o) {

                            if(typeof o == "undefined" || o === null){
                                return "null";
                            }
                            else if(o instanceof Array){
                                return this.encodeArray(o);
                            }
                            else if(o instanceof Date){
                                return this.encodeDate(o);
                            }
                            else if(typeof o == "string"){
                                return this.encodeString(o);
                            }
                            else if(typeof o == "number"){
                                return isFinite(o) ? String(o) : "null";
                            }
                            else if(typeof o == "boolean"){
                                return String(o);
                            }
                            else {
                                var self = this;
                                var a = ["{"], b, i, v;

                                for (i in o) {
                                    if(!this.useHasOwn || o.hasOwnProperty(i)) {
                                        v = o[i];
                                        switch (typeof v) {
                                            case "undefined":
                                            case "function":
                                            case "unknown":
                                                break;
                                            default:

                                                if(b){
                                                    a.push(',');
                                                }

                                                a.push(self.encode(i), ":",
                                                    v === null ? "null" : self.encode(v));
                                                b = true;
                                        }
                                    }
                                }

                                a.push("}");
                                return a.join("");
                            }
                        },

                        decode : function(json){
                            return eval("(" + json + ')');
                        }
                    }
                },

                encode: function(src) {
                    return COM.JSON.encode(src);
                },

                decode: function(json) {
                    return COM.JSON.decode(json);
                }
            },
            /*
            name:   chart
             */
            "chart": {
                id: "chart",
                wish: [],
                chart: [ "Math" ],

                Math:
                    [
                        "abs", "acos", "asin", "atan2", "ceil", "cos", "exp", "floor", "log", "max",
                        "min", "pow", "random","round", "sin", "sqrt", "tan"
                    ]
            },
            /*
            name:   hook
             */
            "hook": {
                id: "hook",
                wish: [ "fetch", "grab" ],
                chart: [ "fetch", "makeText", "grab" ],

                /*  fetch   */
                fetch:  function(text, pattern) {

                    var _mode;
                    var pieces;  //  create new Array

                    if(pattern instanceof RegExp) {
                        _mode = "array";

                        //
                        pieces = text.match(pattern);
                    }
                    else {
                        _mode = "json";

                        pieces = new Array();

                        //
                        var segments = new Array();
                        var _names = new Array();

                        //  for..in
                        var _exp;
                        var _matchResult;


                        var flags;  //  amazing!
                        for(var name in pattern) {

                            flags = name.split("^");

                            _exp = pattern[name];
                            name = flags[0];

                            //  check match index
                            if(flags[1]) {
                                _matchResult = _regexp.submatch(text, _exp, 1);
                            }
                            else {
                                _matchResult = text.match(_exp);
                            }

                            if(_null(_matchResult)) {
                                continue;
                            }

                            //  slice result
                            var sIndex, eIndex;
                            var _result2;

                            if(flags[2]) {
                                _result2 = flags[2].split("|");

                                if(_result2) {
                                    sIndex = _result2[0];

                                    eIndex = _result2[1];
                                }

                                //  slice
                                _matchResult = _loop.map(_matchResult, function(r) {
                                    return r.slice(sIndex, eIndex);
                                });
                            }

                            segments.push(_matchResult);
                            _names.push(name);
                        }

                        //  create json
                        var count = _names.length;

                        var x = 0;
                        var _json;
                        for(; x < count; x++) {

                            _json =
                            {
                                name: _names[x],
                                matches: segments[x]
                            };

                            pieces.push(_json);
                        }
                    }
                    //
                    return pieces;
                },

                /*
                name:   makeText
                 */
                makeText:   function(src, _opts) {

                    var opts =
                    {
                        addLabel: true,
                        addLine: true,
                        entry_sep: chr(10001),
                        label_sep: chr(10000),
                        txt_sep: chr(10005),
                        addIntro: false
                    };

                    copy(opts, _opts);

                    var my_text;

                    var lineChar = "";

                    if(opts.addLine == true) {
                        lineChar = "\n";
                    }
                    //  start here

                    var entryCount = src.length;

                    var entry, label, results, txt;

                    var y = 0;

                    var entryText;

                    var textlist = new Array();

                    for(; y < entryCount; y++) {
                        entry = src[y];

                        //  add intro

                        //
                        label = opts.label_sep + entry.name + opts.label_sep  + lineChar;

                        results = entry.matches;

                        txt = results.join(opts.txt_sep + lineChar);

                        entryText = label + txt;

                        textlist.push(entryText);
                    }

                    my_text = textlist.join(opts.entry_sep + lineChar);

                    return my_text;
                }
                ,
                /*
                name: grab
                 */
                grab:   function(src, filter, keymode) {

                    var _list = [];

                    var pattern_index;
                    var pattern_value;
                    var limit = 9999;
                    var deep = 4;

                    var counter = 0;

                    var _val, _index;

                    if(_s(filter)) {

                        var _seg = filter.split("@");

                        //  key
                        if(_seg[0]) {
                            pattern_index = new RegExp(_seg[0], "i");
                        }

                        //  value
                        if(_seg[1]) {
                            pattern_value = new RegExp(_seg[1], "i");
                        }

                        //  limit
                        if(_seg[2]) {
                            limit = _seg[2];
                        }

                        //  deep
                        if(_seg[3]) {
                            deep = _seg[3];
                        }
                    };
                    _loop.each(src, function(val, index, _deep) {

                        _val = val;

                        if(mock(_val)) {
                            return;
                        }

                        _index = index;

                        if(_filter_helper() && (counter <= limit) && (_deep <= deep)) {

                            if(keymode == true) {
                                _list.push(index);
                            }
                            else {
                                _list.push(val);
                            }

                            counter++;
                        }
                    }, null,  deep);

                    return _list;

                    function _filter_helper() {

                        _val = _val.toString();
                        _index = _index.toString();

                        var _match = true;
                        if(pattern_value && ! _val.match(pattern_value)) {
                            _match = false;
                        }

                        if(pattern_index && ! _index.match(pattern_index)) {
                            _match = false;
                        }

                        return _match;
                    }
                }
            }
            ,
            /*
            helper: server
             */
            "server":
            {
                id: "server",
                eject: [],
                chart:
                    [
                        "exe", "echo", "php","query", "read", "write", "scan",
                        "download", "upload", "joinURL", "dir2url", "url2dir",
                    ],
                map:
                {
                    Place: {
                        anywhere: "",

                        root: "E:",
                        host: "http://void"
                    }
                },
                opt: {
                    argPrefix: "a",
                    URLAnt: "ant.php"
                },

                init: function(server) {

                    var antURLMap =
                    {
                        "localhost": "http://localhost/nature/gate/2013/ant/ant.php",
                        "nature": "http://nature/gate/2013/ant/ant.php",
                    };

                    Opt.server["URLAnt"] = antURLMap[location.hostname];

                    if(location.hostname == "lab") {

                        // redirect url
                        location.href = "http://nature/lab/" + location.pathname;
                    }
                },

                /*
                 name:   exe
                 */
                exe:    function(command) {

                    var _args =
                    {
                        "command": command
                    };

                    var x = 1;

                    var _name = Opt.server.argPrefix;

                    var argVal;
                    for(; x < arguments.length; x++) {

                        argVal = arguments[x];

                        if(_u(argVal)) {
                            continue;
                        }
                        _args[_name + x] = argVal;
                    }

                    //
                    return http(Opt.server.URLAnt, _args, "POST");
                },

                /*
                name:   php
                 */
                php:    function() {

                    var _arg = _method.un_arg("eval");

                    return _server.exe.apply(null, _arg);
                },
                /*
                name:   echo
                 */
                echo:   function() {

                    return _server.exe("echo", arg2arr().join(","));
                }
                ,
                /*
                name:   read
                 */
                read:   function(url) {
                    url = joinURL(url,  true);

                    return _server.exe("read", url);
                }
                ,
                /*
                name:   write
                 */
                write:  function(url,data, mode) {

                    url = joinURL(url,  true);

                    mode = mode || "w";

                    return _server.exe("write", url, data, mode);
                }
                ,
                /*
                name:   scan
                 */
                scan:   function(place, keyword, deepMode, limit) {

                    var workDir = joinURL(place, true);

                    if(! deepMode) {
                        deepMode = 0;
                    }

                    keyword = keyword || ".+";

                   return  _server.exe("scan", workDir, keyword, deepMode);
                },

                query:  function(statement, database, onlyQuery) {

                    var _json = _server.exe("query", statement, database, onlyQuery);

                    return _json;
                },

                /*
                name:   download
                 */
                download:   function(sources, place) {

                    if(_A(sources)) {
                        sources = sources.join(",");
                    }

                    place = joinURL(place, true);
                    return _server.exe("download", sources, place);
                },
                /*
                 joinURL
                 */
                joinURL:    function(url, forPath) {

                    //  parse url

                    var _seg = url.split("@");
                    var place = _seg[1];

                    place = Map.Place[place] || "";

                    url = place + _seg[0];

                    if(! forPath) {
                        url = dir2url(url);
                    }
                    else {
                        url = url2dir(url);
                    }

                    return url;
                },

                /* dir2url */
                dir2url: function(dir) {

                    return dir.replace(Map.Place.root, Map.Place.host);
                },

                /* url2dir */
                url2dir: function(url) {
                    return url.replace(Map.Place.host, Map.Place.root);
                }
            }
            ,
            /*
             helper: mysql
             */
            mysql:  {
                id: "mysql",
                wish: [ "connect", "knit", "truncate", "drop", "desc", "go" ],
                chart:
                    [
                        "connect", "go", "desc", "knit", "create", "drop", "show", "change", "truncate", "getData"
                    ],

                alias: {
                    c_sql: "create",
                    ch_sql: "change",
                    sql_show: "show",
                    sqlData: "getData"
                },

                init_W: function() {

                    // connect to mysql
                    //connect();
                },

                method: {
                    sql_insert: function (values, tableName, dbName, isSqlite, callback) {

                        var val;
                        var result;

                        sql = "";

                        if(_A(values) && _A(values[0])) {

                            //  check first value

                            var suc_counter = 0;
                            var failure_counter = 0;

                            var z = 0;
                            for(; z < values.length; z++) {

                                val = values[z];

                                result = _insert_sql(val);

                                result == "success" ? suc_counter++ : failure_counter++;
                            }

                            result = format("success: $1, failure: $2", suc_counter, failure_counter);

                        }
                        else {
                            result = _insert_sql(values);
                        }

                        return result;
                        /*
                         name:   _insert_sql
                         */
                        function _insert_sql(src) {

                            var _valstr = [];
                            var _column_str = [];

                            //  a record

                            _parse_values();

                            var sql1 = format("INSERT INTO $1$2 VALUES(NULL,$3);", tableName, _column_str,  _valstr);

                            var result;

                            if(isSqlite == true) {
                                result = lite(sql1, callback, dbName);
                            }
                            else {
                                result = query(sql1, dbName);
                            }

                            return result;

                            /*
                             name:   _parse_values
                             */
                            function _parse_values() {

                                if(_A(src)) {
                                    var z = 0;

                                    for(; z < src.length; z++) {

                                        val = src[z];

                                        if(_A(val)) {
                                            val = val.join(",");
                                        }
                                        else if(mock(val)) {
                                            val = "";
                                        }

                                        if(_s(val)) {

                                            //  may be function

                                            val = Method.sql_filterVal(val);
/*                                            if(search(Opt.mysql.ValFilter, val) === false && (val[0] != "@")) {
                                                val = "\"" + val + "\"";
                                            }

                                            if(val[0] == "@") {
                                                val = val.slice(1);
                                            }

                                            // if else
                                            if(val == "*") {
                                                val = "NOW()";
                                            }*/
                                        }

                                        _valstr.push(val);
                                    }
                                }
                                else if(_o(src)) {

                                    var field_name;

                                    _column_str.push("id");

                                    for(field_name in src) {

                                        val = src[field_name];

                                        if(_u(val)) {
                                            continue;
                                        }

                                        val = Method.sql_filterVal(val, field_name);
 /*                                       if(_s(val)) {
                                            val = "\"" + val + "\"";
                                        }

                                        // decide value

                                        if( ((field_name == "day") && (val === "")) || (val == "*")) {

                                            val = "NOW()";
                                        }*/

                                        _valstr.push(val);

                                        _column_str.push("`" + field_name + "`");
                                    }
                                }

                                _valstr = _valstr.join(",");

                                _column_str = _column_str.join(",");

                                if(_column_str.length > 0 ) {
                                    _column_str = "(" + _column_str + ")";
                                }
                            }
                        }
                    },

                    sql_update: function(vals, clause, _table, dbName, isSqlite, callback) {

                        clause = _def(clause, "");

                        if(s_int(clause)) {
                            clause = "WHERE id=" + clause;
                        }

                        var vals_kep = [];
                        var val;
                        for(var field in vals) {

                            val = vals[field];

                            val = Method.sql_filterVal(val, field); // filter

                            val = format("`$1`=$2", field, val);
                            vals_kep.push(val);
                        }

                        vals = vals_kep.join(",");
                        sql = format("UPDATE `$1` SET $2 $3", _table, vals, clause);

                        var result;

                        if(isSqlite == true) {
                            result = _sqlite.lite(sql, callback, dbName);
                        }
                        else {
                            result = _mysql.go(sql, dbName);
                        }

                        return result;
                    },

                    sql_parseVal:   function(str) {

                        var _map, flag, val;

                        _map = Map.SQLType;

                        var counter = 0;
                        var valkep = [];
                        for(flag in _map) {

                            val = _map[flag];

                            if(str.search(flag) !== -1) {
                                str = str.replace(flag, "$" + counter);

                                counter++;
                                valkep.push(val);
                            }
                        }

                        //
                        str = _string.format(str, valkep);

                        return str;
                    },

                    sql_filterVal: function(val, key) {

                        var isSpecial, hasAt;
                        if(val[0] == "@") {
                            val = val.slice(1);

                            hasAt = true;
                        }

                        isSpecial = true;
                        switch(val) {

                            case "#":
                            {
                                val = "\"\"";
                            }
                                break;

                            case "*":
                            {
                                val = "NOW()";
                            }
                                break;

                            default:
                            {
                                isSpecial = hasAt || false;
                            }
                        }

                        if(key == "day" && val === "") {
                            val = "NOW()";
                        }
                        else if(_s(val) && ! isSpecial && (! a_in(Opt.mysql.ValFilter))) {

                            val = _string.quote(val);
                        }

                        return val;
                    }
                },
                map: {
                    SQLType:
                    {
                        m: "INT PRIMARY KEY AUTO_INCREMENT",
                        i: "INT",
                        t: "TEXT",
                        p: "PRIMARY KEY",
                        u: "UNIQUE",
                        a: "AUTO_INCREMENT",
                        n: "NULL",
                        z: "NOT NULL",
                        d: "DATETIME",
                        a: "AUTO_INCREMENT",
                        v8: "VARCHAR(8)",
                        v16: "VARCHAR(16)",
                        v32: "VARCHAR(32)",
                        v64: "VARCHAR(64)",
                        v128: "VARCHAR(128)",
                        v256: "VARCHAR(256)",
                        v1024: "VARCHAR(1024)"
                    }
                },

                opt: {
                    flag:
                    {
                        t: "TABLE",
                        tb: "TABLE",
                        d: "DATABASE",
                        db: "DATABASE"
                    },

                    ValFilter: [ "NOW()" ],

                    host:"localhost",
                    username: "root",
                    password: "",

                    database: "xfm"
                },

                /* connect */
                connect: function(database, opts, coverDef) {

                    coverDef = _def(coverDef, true);

                    var _OPT = Opt.mysql;

                    if(mock(opts)) {

                        // create option
                        opts =
                        {
                            host: _OPT.host,
                            username: _OPT.username,
                            password: _OPT.password
                        };
                    }

                    if(rich(database)) {
                        _OPT.database = database;
                    }

                    var objOpts = g_obj(opts);

                    opts = analyze(opts);

                    // register session
                    var serverResult = exe("mysql-connect", opts);

//                    // test
//                    var phpCode = "query();";
//
//                    var  = query(phpCode);

                    var result = FALSE;
                    if(serverResult == "ok") {

                        if(coverDef) {
                            copy(opts, _OPT);
                        }

                        result = TRUE;
                    }

                    LOG("mysql connect - " + serverResult);

                    return result;
                },
                /*
                 name:   knit
                 */
                knit:   function(tableName, databaseName, isSqlite) {

                    var sql;

                    var _database = databaseName || Opt.mysql.database;
                    var _table = tableName;

                    var _format = _string.format;

                    return {

                        migrate:    function(tableName, databaseName) {

                            _table = tableName;
                            _database = databaseName;
                        },

                        select: function(fields, clause) {

                            fields = fields || "*";
                            clause = clause || "";

                            if(s_int(clause)) {
                                clause = "WHERE id=" + clause;
                            }

                            sql = _format("SELECT $1 FROM $2 $3;", fields, tableName, clause);

                            //return _server.query(sql, _database);
                            return _mysql.go(sql, _database);
                        },

                        insert: function(values) {

                            return Method.sql_insert(values, tableName, _database, false);
                        }
                        ,
                        del:    function(condition) {

                            condition = condition || "";

                            if(s_int(condition)) {
                                condition = [ condition ];
                            }

                            if(_A(condition)) {
                                condition = "WHERE id in(" + condition.join(",") + ")";
                            }
                            //
                            sql = _format("DELETE FROM $1 $2;", tableName, condition)

                            return _server.query(sql, _database);
                        }
                        ,
                        update: function(vals, clause) {

                            return Method.sql_update(vals, clause, _table, _database, false);
                        }
                    }
                }
                ,
                go: function(sql, databaseName, isSqlite) {

                    databaseName = databaseName || Opt.mysql.database;

                    var result;

                    if(isSqlite == true) {
                        result = sqlite.lite(sql, databaseName);
                    }
                    else {
                        result = _server.query(sql, databaseName);
                    }

                    return result;
                },
                /*
                 name:   create
                 */
                create: function(may1, may2, clause, _db) {

                    var sql;
                    if(_u(may2)) {
                        //  create a database

                        var databaseName = may1;

                        sql = "CREATE DATABASE " + databaseName + ";";
                    }
                    else {
                        //  create a table

                        var tableName = may1;

                        var field_map = may2;

                        clause = clause || "";

                        var field_map2 = _maker.g_obj(field_map, "clone=1");

                        field_map = { "id": "m" };
                        copy(field_map2, field_map);

                        field_map = _loop.map(field_map, Method.sql_parseVal);

                        var field_define = _string.montage( " !,", field_map);

                        sql = _string.format("CREATE TABLE $1($2) $3;", tableName, field_define, clause);
                    }

                    return _mysql.go(sql, _db);
                },

                drop:   function(_target, flag) {

                    var sql;

                    _target = _target || Opt.mysql.database;

                    flag = Opt.mysql.flag[flag] || flag || "TABLE";

                    if(flag == "TABLE") {
                        sql = "DROP TABLE " + _target;
                    }
                    else if(flag == "DATABASE") {
                        sql = "DROP DATABASE " + _target;
                    }

                    //  use confirm! it's risk

                    if(confirm(sql + "\n execute?")) {
                        return _mysql.go(sql);
                    }
                }
                ,
                /*
                 name:   desc
                 */
                desc:   function(tableName, _db) {

                    var sql = "DESCRIBE " + tableName + ";";

                    return _mysql.go(sql, _db);
                },
                /*
                 name:   show
                 */
                show:   function(flag) {

                    flag = Opt.mysql.flag[flag] || flag || "TABLE";

                    if(flag !== "TABLE" && flag !== "DATABASE") {

                        var _db = flag;
                        flag = "TABLE";
                    }

                    var sql = "SHOW " + flag + "S;";

                    return _mysql.go(sql, _db);
                },

                /*
                 name:   change
                 */

                change: function(_dbname) {

                    Opt.mysql.database = _dbname;
                },

                truncate: function(tableName, _dbname) {

                    var sql = "TRUNCATE " + tableName + ";";

                    return go(sql, _dbname);
                },

                getData: function(table, database, limit, start, clause) {

                    var result = [];

                    var descSet = desc(table, database);

                    descSet = grab(descSet, "Field");

                    // join clause
                   clause = _def(clause, "");

                    if(is(limit)) {
                        clause += " limit " + limit;

                        if(is(start)) {
                            clause += "," + start;
                        }
                    }


                    var tableEntry = knit(table, database);

                    var dataSet = tableEntry.select("*", clause);

                    dataSet = obj2arr(dataSet);

                    result.push(dataSet);
                    result.push(descSet);

                    return result;
                }
            },


            "sqlite":
            {
                id: "sqlite",
                wish: [ "lite", "marry" ],
                chart:["open", "lite", "create", "drop", "marry", "db"],

                alias: {
                    "c_lite": "create"
                },

                opt: {
                    db: null//	used for transcate
                },
                init:   function() {
                    ;
                },
                open:	function(dbName, size, displayName) {

                    //	set default parameter value
                    displayName = displayName || dbName;
                    size = size || 512*1024;

                    //	call openDatabase

                    var opt = Opt.sqlite;

                    opt.db = window.openDatabase(dbName, "1.0", displayName, size);
                    opt.db.name = dbName;

                    return opt.db;
                },
                lite:	function(sql, callback, dbName) {

                    var db;

                    if(exist(dbName)) {

                        //	maybe Database
                        if(_o(dbName)) {
                            db = dbName;
                        }
                        else {
                            db = _sqlite.open(dbName);
                        }
                    }
                    else {
                        db = Opt.sqlite.db;
                    }

                    db.transaction(function(tx) {

                        tx.executeSql(sql, [], _exe_success_cb, _exe_error_cb);
                    }, _tx_error_cb, _tx_success_cb);

                    return "success";

                    /*
                     * _tx_success_cb
                     */
                    function _tx_success_cb(tx, result) {

                        console.log("transcation successed");
                    }

                    /*
                     * _tx_error_cb
                     */
                    function _tx_error_cb() {

                        console.log("transcation failed");
                    }

                    /*
                     * _exe_success_cb
                     */
                    function _exe_success_cb(tx, result) {

                        if(callback) {

                            callback = g_func(callback);

                            var set = new Array();
                            var rows = result.rows;

                            for(var x = 0; x < rows.length; x++) {
                                set.push(rows.item(x));
                            }

                            callback(set, "ok", tx);
                        }
                    }

                    /*
                     * _exe_error_cb
                     */
                    function _exe_error_cb(tx, error) {
                        if(callback) {

                            callback = g_func(callback);
                            callback(error, "error");
                        }

                        console.log(error.message);
                    }
                },

                create:	function(tableName, fields, dbName) {

                    var sql;

                    sql = format("CREATE TABLE $1 (id INTEGER PRIMARY KEY, $2);", tableName, fields.join(","));

                    _sqlite.lite(sql, null, dbName);

                    //  it's variation
                    return _sqlite.marry(tableName);
                },

                drop:	function(tableName, dbName) {

                    var sql;

                    sql = "DROP TABLE " + tableName + ";";

                    return _sqlite.lite(sql, null, dbName);
                },
                /*
                 * name:	marry
                 */
                marry:	function(tableName, dbName) {

                    dbName = dbName || _sqlite.db.name;

                    var sql;

                    return {

                        select:	function(callback, fields, clause) {

                            clause = clause || "";
                            fields = fields || "*";

                            sql = format("SELECT $1 FROM $2 $3", fields, tableName, clause);

                            return _sqlite.lite(sql, callback, dbName);
                        },

                        insert: function(values, callback) {

                            return Method.sql_insert(values, tableName, dbName, true, callback);
                        },

                        update: function(vals, clause, callback) {
                            return method.sql_update(vals, clause, tableName, dbName, true, callback);
                        },

                        del:    function(clause, callback) {

                            if(_n(clause)) {
                                clause = "id=" + clause;
                            }
                            else if(_A(clause)) {
                                clause = "id in (" + clause.join(",") + ")";
                            }
                            sql = format("DELETE FROM $1 WHERE $2;", tableName, clause);

                            return _sqlite.lite(sql, callback, dbName);
                        }
                    }
                }
            },
            /*
            helper: clock
             */
            "clock":
            {
                id: "clock",
                wish: "all",
                chart: [ "now", "reckon", "stamp", "descTime" ],

                /*
                name:   now
                 */
                now:    function(vary) {

                    var weekMap =
                    {
                        0: "Sunday",
                        1: "Monday",
                        2: "Tuesday",
                        3: "Wednesday",
                        4: "Thursday",
                        5: "Friday",
                        6: "Saturday"
                    };

                    var Now = new Date();

                    var msecond = Now.getMilliseconds();
                    var second = Now.getSeconds();
                    var minute = Now.getMinutes();
                    var hour = Now.getHours();

                    var week = Now.getDay();
                    var weekName = weekMap[week];
                    var day = Now.getDate();
                    var month = Now.getMonth();
                    var year = Now.getFullYear();

                    var time = Now.getTime();

                    var bMap = true;
                    var re;

                    var _map =
                    {
                        ms: msecond,
                        s: second,
                        m: minute,
                        h: hour,
                        w: week,
                        w2: weekName,
                        d: day,
                        m: month,
                        y: year,
                        t: time,

                        msecond: msecond,
                        second: second,
                        minute: minute,
                        hour: hour,
                        week: week,
                        weekName: weekName,
                        day: day,
                        month: month,
                        year: year,
                        time: time
                    };


                    if(vary === 0 || vary == "full") {
                        re = _string.format("$1:$2:$3 $4-$5 $6", hour, minute, second, month, day, year);
                    }
                    else if(vary === true || vary == 1) {
                        re = _map;
                    }
                    else if(mock(vary)) {
                        re = _string.format("$1:$2:$3", hour, minute, second);
                    }
                    else if(_s(vary)) {

                        //

                        var _list = [];
                        var _signs = vary.split(/\s/);

                        var y = 0;
                        var val;
                        for(; y < _signs.length; y++) {

                            val = _signs[y];
                            val = _map[val];

                            val = _bee._def(val, _signs[y]);    //  get value

                            _list.push(val);
                        }

                        //  number better
                        if(_list.length == 1) {
                            re = _list - 0;

                            if(isNaN(re)) {
                                re = _list.toString();
                            }
                        }
                        else {
                            re = _list.join(" ");
                        }
                    }

                    return re;
                }
                ,
                /*
                name:   reckon
                 */
                reckok:  function() {

                    var startTime = _time.stamp();
                    var _duration = 0;

                    var status = "started";

                    return {

                        stop:   function() {

                            var re;

                            if(status !== "stoped") {
                                status = "stoped";
                                re = _time.stamp() - startTime + _duration;
                            }
                            else {
                                re = false;
                            }

                            return re;
                        },

                        pause:  function() {

                            var re;
                            if(status == "started") {
                                _duration += _time.stamp() - startTime;
                                startTime = 0;

                                status = "paused";
                                re = _duration;
                            }
                            else {
                                re = false;
                            }

                        },

                        resume: function() {
                            var re;
                            if(status == "paused") {
                                startTime = _time.stamp();

                                status = "started";
                                re = _duration;
                            }
                            else {
                                re = false;
                            }

                            return re;
                        }
                    };
                },

                /*
                name:   stamp
                 */
                stamp:  function() {

                    var Now = new Date();

                    return Now.getTime();
                },

                /*
                name:   descTime
                 */
                descTime:   function(milliseconds, reversed_ms) {

                    var ms, seconds, minutes, hour;

                    ms = milliseconds % 1000;

                    seconds = milliseconds / 1000 % 60;

                    minutes = milliseconds / (1000*60) % 60;
                    hour = milliseconds / (1000*60*60);

                    var desc = "";

                    if(hour) {
                        desc +=  floor(hour) + "h ";
                    }

                    if(minutes) {
                        desc += floor(minutes) + "m ";
                    }

                    if(seconds) {
                        desc += floor(seconds) + "s ";
                    }

                    if(reversed_ms) {
                        desc += ms + "ms";
                    }

                    return desc;
                }
            },

            /*
            helper: timer
             */
            "timer": {
                id: "timer",
                wish: "all",
                chart: [ "every" ],

                every:  function(code, interval, limit, args) {

                    limit = limit || 1024*1024;
                    interval = interval || 100; //  100ms

                    code = g_func(code);

                    var _counter = 0;
                    var handle = setInterval(_internal_every, interval);

                    var _status = "started";

                    var _this = {

                        handle: handle,

                        pause:  function(duration) {

                            var re;
                            if(_status == "started") {
                                clearInterval(handle);

                                re = _counter;
                            }
                            else {
                                re = false;
                            }

                            if(exist(duration)) {
                                _this.resume();
                            }
                            return re;
                        },

                        resume: function() {

                            if(_status !== "stoped") {
                                handle = setInterval(_internal_every, interval);
                            }

                            return _counter;
                        },

                        stop:   function() {
                            _counter = 0;
                            _status = "stoped";
                            return clearInterval(handle);
                        },

                        restart:    function() {
                            _counter = 0;
                            _status = "started";
                            return _this.resume();
                        }/*,

                        renew: function(src) {

                            this.stop();

                            if(_o(src)) {
                                this.handle = handle.handle;
                            }
                            else {
                                this.handle = src;
                            }

                            return this;
                        }*/
                    };

                    return _this;
                    /*
                    _internal_every
                     */
                    function _internal_every() {

                        args = args || [];
                        args.unshift(_counter);

                        if(limit !== -1 && _counter < limit) {
                            code.apply(null, args);
                        }

                        _counter++;
                    }
                }
            },

            /*
            helper: canvas
             */
            "canvas":
            {
                id: "canvas",
                wish: ["create"],
                chart: [ "create"],

                alias: {
                    c_canvas: "create"
                },

                create: function(dimens, _opts) {

                    var opts =
                    {
                        radius: 4,
                        border: 1,
                        parent: Body,
                        id: "",
                        Class: "Canvas",
                        render: true
                    };

                    setup(_opts, opts);

                    dimens = dimens || "480, 360, 0, 0";

                    if(_s(dimens)) {
                        dimens = dimens.split(",");
                    }

                    var width, height, top, left;

                    width = dimens[0];
                    height = dimens[1];
                    top = dimens[2];
                    left = dimens[3];


                    var _dom = canvas(width, height, "", opts.Class, opts.id);

                    if(opts.render == true) {
                        opts.parent.append(_dom);
                    }

                    if(opts.border) {
                        css(_dom, "border", "solid silver " + opts.border + "px");
                    }

                    //  set, x,y
                    if(exist(left) || exist(top)) {

                        css(_dom, "position", "absolute");

                        if(exist(left)) {
                            css(_dom, "left", left + "px");
                        }

                        if(exist(top)) {
                            css(_dom, "top", top + "px");
                        }
                    }
                    if(opts.radius) {
                        css(_dom, "border-radius", opts.radius + "px");
                    }

                    var context = _dom.getContext('2d');

                    var _this =
                    {

                        node: _dom,

                        pixel:  function(x, y, RGBA) {

                            RGBA = RGBA || [0, 0, 0, 0];
                            var width, height;

                            width = _dom.width;
                            height = _dom.height;

                            var imageData = context.getImageData(0,0,width,height);

                            var pos = width * 4 * y + x*4;

                            if(_s(RGBA)) {
                                RGBA = RGBA.split(",");
                            }

                            R = RGBA[0] || 0;
                            G = RGBA[1] || 0;
                            B = RGBA[2] || 0;
                            A = RGBA[3] || 255;

                            imageData.data[pos] = R;
                            imageData.data[pos+1] = G;
                            imageData.data[pos+2] = B;
                            imageData.data[pos+3] = A;

                            context.putImageData(imageData, 0, 0);
                        },

                        f:  function(exp, range) {

                            range = range || "0,1000,1";
                            range = range.split(",");

                            var x1 = range[0] - 0;
                            var x2 = (range[1] - 0) || 1000;
                            var step = (range[2] - 0) || 1;

                            var x = x1;
                            var firstPoint = true;
                            for(; x < x2; x+=step) {

                                y = eval(exp);

                                if(firstPoint) {
                                    context.moveTo(x, y);
                                    firstPoint = false;
                                }
                                else {
                                    context.lineTo(x, y);
                                }
                            }

                            context.stroke();
                        },

                        linear: function(rect, stops, added) {

                            rect = _math.g_num(rect, "0,0,100,100");
                            return _this._gradient_canvas("linear", rect, stops, added);
                        },

                        radial: function(circle1, circle2, stops, added) {

                            circle1 = _math.g_num(circle1, "50,50,10");
                            circle2 = _math.g_num(circle2, "50,50,50");

                            return _this._gradient_canvas("radial", circle1.concat(circle2), stops, added);
                        },

                        _gradient_canvas:   function(type, coordinates, stops, added) {

                            var gradient

                            if(type == "linear") {
                                gradient = context.createLinearGradient.apply(context, coordinates);
                            }
                            else if(type == "radial") {
                                gradient = context.createRadialGradient.apply(context, coordinates);
                            }

                            gradient.stop = gradient.addColorStop;

                            stops = stops || "black,white";

                            stops = g_set(stops);

                            var n, color;
                            var z;
                            if(_A(stops)) {

                                var length = stops.length;

                                var step = 1 / (length-1);

                                for(z = 0;z < length; z++) {
                                    n = step*z;
                                    color = stops[z];
                                    gradient.stop(n, color)
                                }
                            }
                            else if(_o(stops)) {

                                for(z in stops) {

                                    color = stops[z];
                                    gradient.stop(z, color);
                                }
                            }

                            if(added == true) {
                                context.fillStyle = gradient;
                            }
                            return gradient;
                        }
                    };

                    copy(_this, context);

                    return context
                }
            },

            "svg":
            {
                id: "svg",
                wish: ["svg"],
                chart: ["svg"],

                onload: function() {
                    var node = div("","","svg-box");

                    Body.appendChild(node);
                },

                svg: function(id, coor, _opts) {

                    //  initial opts
                    var opts =
                    {
                        parent: $("#svg-box"),
                        border: 1,
                        radius: 4,
                        pad: 4
                    };

                    copy(opts, _opts);

                    coor = _math.g_num(coor, "480,360,100,100");

                    var top = coor[2];
                    var left = coor[3];

                    var divNode = div("","", id + "_div");
                    opts.parent.append(divNode);
                    //var node = _dom.tag("svg", _props);

                    //opts.parent.append(node);
                    //node.setAttribute("xmlns");
                    var _htmlcode = format("<svg id=$1 width=$2 height=$3></svg>", id, coor[0],  coor[1]);

                    divNode.innerHTML = _htmlcode;

                    var _pack =
                    {
                        node:   $("svg#" + id),

                        rect:   function() {
                            return _pack.svgtag.apply(null, _method.un_arg("rect"));
                        },

                        circle: function() {
                            return _pack.svgtag.apply(null, _method.un_arg("circle"));
                        },

                        "line": function() {
                            return _pack.svgtag.apply(null, _method.un_arg("line"));
                        },

                        "ellipse": function() {
                            return _pack.svgtag.apply(null, _method.un_arg("ellipse"));
                        },

                        "polyline": function() {
                            return _pack.svgtag.apply(null, _method.un_arg("polyline"));
                        },

                        "polygon":  function() {
                            return _pack.svgtag.apply(null, _method.un_arg("polygon"));
                        },
                        "text": function(string) {

                            var _str = string || "svg";

                            var _args = getArg();
                            _args.shift();
                            _args.unshift("text");

                            var _node = _pack.svgtag.apply(null, _args);

                            _node.textContent = string;

                            return _node;
                        },
                        svgtag:   function(tagName, coordinates, basicStyle, otherProps) {

                            var _coor;


                            var style_map =
                            {
                                "text": "black"
                            };

                            basicStyle = basicStyle || style_map[tagName] || "gray,black,1";

                            basicStyle = basicStyle.split(",");

                            tagName = tagName || "rect";

                            var _style =
                            {
                                fill: basicStyle[0] || "gray",
                                stroke: basicStyle[1] || "black",
                                "stroke-width": basicStyle[2] || "1"
                            };

                            //  propertys
                            var props = g_obj(otherProps) || {};

                            props.style = analyze(_style, ";key:");

                            var coor_map =
                            {
                                rect: "100,100,0,0",    // width, height, top, left
                                ellipse: "50,25,50,50",
                                circle: "50,50,50",
                                line: "0,0,50,50",
                                polyline: "0,0,20,0,20,20,40,20",
                                polygon: "50,0,0,50,100,100",
                                text: "24,24"
                            };

                            _coor = g_num(coordinates, coor_map[tagName]);

                            switch(tagName) {

                                case "rect":
                                {
                                    _coor =
                                    {
                                        x: _coor[2],
                                        y: _coor[3],
                                        width: _coor[0],
                                        height: _coor[1]
                                    };
                                }
                                    break;

                                case "circle":
                                {
                                    _coor =
                                    {
                                        cx: _coor[1],
                                        cy: _coor[2],
                                        r: _coor[0]
                                    };
                                }
                                    break;

                                case "line":
                                {
                                    _coor =
                                    {
                                        x1: _coor[0],
                                        y1: _coor[1],
                                        x2: _coor[2],
                                        y2: _coor[3]
                                    }
                                }
                                    break;

                                case "ellipse":
                                {
                                    _coor =
                                    {
                                        rx: _coor[0],
                                        ry: _coor[1],
                                        cx: _coor[2],
                                        cy: _coor[3]
                                    }
                                }
                                    break;

                                case "polyline":
                                {
                                    _coor =
                                    {
                                        points: _coor.join(",")
                                    };
                                }
                                    break;

                                case "polygon":
                                {
                                    _coor =
                                    {
                                        points: _coor.join(",")
                                    };
                                }
                                    break;

                                case "text":
                                {
                                    _coor =
                                    {
                                        x: _coor[0],
                                        y: _coor[1]
                                    };
                                }
                                    break;
                            }

                            copy(_coor, props);

                            props.mark = 1; //  use mark
                            props.id = "current_shape";
                            var node = _dom.tag(tagName, props);

                            _pack.node.append(node);

                            recode(divNode);
                            _pack.node = $("svg#" + id);

                            node = paw("#" + props.id);
                            node.removeAttribute("id");

                            return node;
                        }
                    }

                    window.coor(divNode, top, left, "absolute");

                    if(opts.border) {
                        css(divNode, "border", "solid silver " + opts.border + "px");
                    }

                    if(opts.radius) {
                        css(divNode, "border-radius", opts.radius + "px");
                    }

                    if(opts.pad) {
                        css(divNode, "padding", opts.pad + "px");
                    }

                    return _pack;
                }
            },

            "geometry":
            {
                id: "geo",
                wish: [],
                chart: []

                /*
                name:
                 */
            },

            /* pit */
            pit: {
                id: "pit",
                wish: [],
                alias: {
                    dig: "get",
                    fill: "set"
                },
                chart: ["get", "set", "_path"],

                init: function() {
                  local = localStorage;
                },
                set: function(keyName, keyValue) {

                    var needDel = false;

                    if(mock(keyValue)) {
                        needDel = true;
                    }

                    return _pit._path(keyName, keyValue, needDel);
                },

                get: function(keyName) {
                    var keyValue = _pit._path(keyName);

                    return keyValue;
                }
                ,

                _path: function(exp, keyValue, needDel) {

                    var iPath, obj;
                    var re;

                    var paths = exp.split("/");
                    var keyName = paths[0];

                    var str = local.getItem(keyName);

                    var notFind = false;

                    if(_s(str) && ((str[0] == "{") || (str[0] == "["))) {
                        root = decode(str);
                    }

                    if(_o(keyValue)) {
                        keyValue = encode(keyValue);
                    }

                    if(paths.length < 2) {

                    }
                    else {

                        //  continue
                        var root_name = paths[0];

                        var root;

                        root = root || {};

                        var obj = root;
                        iPath = 1;
                        var path;

                        var last_index = paths.length - 1;

                        for(;iPath < paths.length - 1; iPath++) {

                            path = paths[iPath];

                            if(! _o(obj[path])) {

                                if(! _u(keyValue)) {
                                    obj[path] = new Object();
                                }
                                else {
                                    notFind = true;
                                    break;
                                }
                            }

                            if(iPath < paths.length-1) {
                                obj = obj[path];
                            }
                        }

                        //  set key
                        var subKey = paths[last_index];

                        if(needDel == true) {
                            delete obj[subKey];

                            needDel = false;
                            keyValue = encode(root);
                        }
                        else if(_u(keyValue)) {
                            re = obj[subKey];

                            if(mock(re)) {
                                notFind = true;
                            }
                        }
                        else {
                            obj[subKey] = keyValue;
                            keyValue = encode(root);

                            re = root;
                        }
                    }

                    // sub
                    if(needDel == true) {
                        local.removeItem(keyName);
                    }
                    else if(is(keyValue)) {
                        local.setItem(keyName, keyValue)
                        re = root;
                    }
                    else if(notFind == true) {
                        re = null;
                    }
                    else {
                        re = re || root || str;
                    }

                    return re;
                }
            },

            /* helper: player */
            player: {
                id: "player",
                eject: [],
                chart:[ "createPlayer"],

                onload: function() {

                    var opts =
                    {
                        controls: null
                    };

                    player = createPlayer("myplayer", "", opts);

                    window.play = player.play;
                    window.pause = player.pause;
                },

                createPlayer: function(id, src, options, parent) {

                    if(_u(parent)) {
                        parent = Body;
                    }

                    // create param
                    var param =
                    {
                        id: id,
                        autoplay: "autoplay",
                        controls: "controls"
                    };

                    copy(options, param);

                    var node = tag("audio", param);

                    if(is(parent)) {
                        parent.append(node);
                    }

                    node._play = node.play;
                    node._pause = node.pause;

                    var _this =
                    {
                        play: function(src) {

                            if(is(src)) {

                                if(last(src) == "@") {
                                    src = joinURL(src + "music");
                                }

                                node.src = src;
                            }

                            node._play();
                        },

                        pause: function() {
                            node._pause();
                        },

                        show: function() {
                            node.attr("controls", "");
                        },

                        hide: function() {
                            node.delAttr("controls");
                        }
                    };

                    copy(_this, node);

                    if(is(src)) {
                        node.play(src);
                    }

                    return node;
                }
            },

            /* helper: page */
            page: {
                id: "page",
                wish: [],
                chart: [],

                initW: function() {


                }
            },

            /* helper: document */
            doc: {
                id: "doc",
                eject: [],
                chart: [ "addCookie", "addCookies", "Cookie"],

                onload: function() {

                    // 1 bind <a> with nolink attribute
                    var aNolink = $("a[nolink]");

                    aNolink.click(nolink_click);

                    function nolink_click() {

                        //stop event
                        stopEvent(1);
                    }
                },

                addCookie: function(cookieName, cookieValue) {

                    document.cookie = cookieName + "=" + cookieValue;

                    return document.cookie;
                },

                addCookies: function(cookieData) {

                    var cookieName, cookieValue;

                    for(cookieName in cookiData) {
                        cookieValue = cookieData[cookieName];

                        addCookie(cookieName, cookieValue);
                    }

                    return document.cookie;
                },

                Cookie: function() {

                    return compose(document.cookie, "; ");
                }
            }
        }

        return {
            shakes: function(gifts) {
                //  get all gifts
                if(_u(gifts) || gifts == "any!") {
                    gifts = _tools;
                }

                //  for
                var iGift = 0;

                for(; iGift < gifts.length; iGift++) {
                    var gift = Proto.Cosmos[gifts[iGift]];

                    shake(gift);
                }

                // ok, i am relax
                Time.AllDid();
            }
        };
    }
};