/* 12/27/13 */

/*
just a try, I want be talent and graceful!
 */

_ANT_UI();

function _ANT_UI() {


    if(! chrome.extension) {
        if(window.ANT) {

            console.log("Ant.UI loaded!")
        }
        else {
            console.log("Sorry, ANT not loaded, so ant.ui not worked");
            return;
        }
    }

    var UIConfig =
    {
        Options: {
            global: null,
            prepend: false,
            Class: ""
        },

        namePrefix: "ui_",

        cssFolder: "http://webs/gate/js/ant/css/",
        cssFiles: [ "color.css", "ant.ui.css", "ant.ui-2.css", "ant.ui-3.css" ],

        expose: true
    }

    var UIDriver = {

        setup: function() {

            ANT.UI = {
                birth: "2008/12/26",
                creator: "shadow"
            };

            window.ui = ANT.UI;

            copy({
                API: {},
                COM: {}

            }, ANT.UI);

            Proto.UI = UISet;
            List.UI = obj2arr(UISet, "k");


            // load css
            if(Env.CRExt == true) {
                return;
            }

            var files = UIConfig.cssFiles;

            for(var fileIndex = 0; fileIndex < files.length; fileIndex++) {

                var curCSS = files[fileIndex];

                sheet(UIConfig.cssFolder + curCSS);
            }
        },

        drawUI: function(proto) {

            var uiScope = ANT.UI;

            var uiName = proto.id;

            // get option
            var OPT = clone(UIConfig.Options);

            setup(OPT, proto.opt);

            uiScope[uiName] = ghostCreator;

            if(is(OPT.global)) {

                window[UIConfig.namePrefix + uiName] = ghostCreator;
            }

            // expose to global, for example, ui.button => windowButton
            if(UIConfig.expose == true) {

                window[upchar(uiName)] = ghostCreator;
            }

            window.Opt[uiName] = proto.opt;
            var opt = proto.opt;

            // initial
            if(is(proto.init) && !Env.CRExt) {
                spy(proto.init, "load");
            }

            // copy api
            copy(proto.Api, ui.API);

            // add COM
            ui.COM[uiName] = proto.COM;

            // modify nodes by className
            var modifyClass = opt.modifyClass;

            if(rich(modifyClass) && !Env.CRExt) {
                spy(secretModifier, "load");
            }
            /* ghostCreator */

            function ghostCreator() {

                var HTMLNode;

                if(is(proto.html)) {

                    HTMLNode = g_node(proto.html);
                    HTMLNode = un_apply(proto.creator, HTMLNode);
                }
                else {

                    HTMLNode = applyMe(proto.creator);
                }


                var Class = OPT.Class;

                if(rich(Class)) {
                    HTMLNode.addClass(Class);
                }

                if(OPT.prepend == true && !HTMLNode.parent()) {
                    Body.append(HTMLNode);
                }

                return HTMLNode;
            }

            /* secretModifier() */

            function secretModifier() {

                var UIOpt = proto.opt;
                // modify nodes by className
                var modifyNodes;

                // select $ in ant
                var $ = choose;

                //LOG("I am modifier class e = " + modifyClass);
                modifyNodes= $("." + modifyClass);

                each(modifyNodes, secret_each);

                /* secret_each() */

                function secret_each(node) {

                    // get options
                    var opts = attr(node, "opts");
                    node.removeAttribute("opts");

                    opts = decode(opts) || {};

                    var myNode;

                    // generate argument
                    var modifyArgument = [ node, opts ];

                    // call modifier
                    myNode = proto.modifier.apply(null, modifyArgument);

                    // remove class


                    if(UIOpt.disableClassCut !== true) {
                        node.cutClass(modifyClass);
                    }

                    // set id
                    var targetID = node.id;
                    var extID = UIOpt.extID;

                    if(rich(extID) && rich(targetID)) {

                        targetID += extID;
                        myNode.id = targetID;
                    }
                }
            }
        }
    };

    var $ = choose;

    var UISet =
    {
        label: {

            id: "label",
            opt:
            {
                prepend: true
            },

            creator: function(text, className) {

                return tag("label", text, className);
            }
        },

        button: {

            id: "button",
            opt:
            {
                Class: "button"
            },

            creator: function(text, className, id, onClick) {

                var buttonNode =  tag("button", text, className, id);

                if(is(onClick)) {
                    buttonNode.tie("click", onClick);
                }

                return buttonNode;
            }
        },

        form: {
            id: "form",
            opt: {
                Class: "form",
                lineClass: "line-box",
                autoLabel: true,

                modifyClass: "form",
                disableClassCut: true
            },

            Api: {

                addValidDOM: function(sibInput, regExp) {

                    if(_s(regExp)) {

                        regExp = new RegExp(regExp, "g");
                        sibInput.validExp = regExp;
                    }
                    else if(_f(regExp)) {

                        sibInput.validIsMethod = true;
                        sibInput.validCallback = regExp;
                    }

                    var okLabel, errorLabel;

                    okLabel = span("", "OK");
                    errorLabel = span("", "Error");

                    sibInput.okLabel = okLabel;
                    sibInput.errorLabel = errorLabel;

                    sibInput.change(validExp_change);

                    //
                    //v();
                    sibInput.after(okLabel);
                    okLabel.after(errorLabel);

                    /* in: validExp_change */

                    function validExp_change() {

                        var node = this;

                        // test user input
                        ui.API.validInput(node);
                    }
                },

                validInput: function(node) {

                    if(node.hasValid == false) {
                        return true;
                    }

                    var text = node.value;

                    // nodewo label
                    var ok = node.okLabel;
                    var error = node.errorLabel;

                    var result;

                    if(node.validIsMethod == true) {
                        result = node.validCallback(text);
                    }
                    else {
                        result = testExp(text, node.validExp);
                    }

                    if(result) {
                        ok.html("ok");
                        error.html("");

                    }
                    else {
                        error.html("error");
                        ok.html("");

                        setClass(node, "wrong", "correct");
                    }

                    return result;
                }
            },

            COM: {
                execValid: function(nodes) {

                    nodes = nodes || this.find("*[reg]");

                    return and_map(nodes, ui.API.validInput, "all=1");
                }
            },

            creator: function(fields, action, callback, method, _opts) {

                var opts =
                {
                    id: "",
                    className: "",
                    submit: true,
                    title: "form",
                    name: null,
                    target: "_self"
                };

                setup(opts, _opts);

                var frameName = opts.target;
                method = _def(method, "POST");

                var formNode = form(action, opts.name, method, frameName, xx, opts.className, opts.id);

                // extend formNode

                copy(ui.COM.form, formNode);

                formNode.tie("submit", uiForm_onSubmit);

                var frameNode = window[frameName];

                if(! _HE(frameNode)) {

                    frameNode = iframe(frameName);
                    frameNode.hide();

                }
                frameNode.tie("load", uiForm_onload); // bind onload event

                var titleNode;
                if(rich(opts.title)) {

                    titleNode = h3(opts.title, "form-title");

                    formNode.append(titleNode);
                }
                // fill form
                var formElements = new Array(); // This filed save fields for every unique name

                var labelNode;

                var inputName, inputVal, inputType, labelName;

                var nodeAttr;
                var addLabel, validExp, hasValid;

                var noteNode;

                var hasSubmit = false; // submit!
                var extAttr, note, musted;

                var sign = null; // use for callback

                fields = _def(fields, []);


                if(opts.submit == true) {

                    var submitMap =
                    {
                        submit: "submit!"
                    };

                    fields.push(submitMap);
                }

                var labelFields  = [ "text", "password", "radio", "checkbox" ];

                for(var i = 0; i < fields.length; i++) {

                    var curLine = fields[i];

                    var lineBox = div("", Opt.form.lineClass);

                    addLabel = Opt.form.autoLabel;

                    for(var fType in curLine) {

                        var fOpt = curLine[fType];

                        var fNode;

                        fType = fType.replace(/\d+$/, "");

                        validExp = null;
                        note = ""; inputName = "";lableName = "";


                        switch(fType) {

                            case "input":
                            {
                                nodeAttr = fOpt;

                                nodeAttr = g_obj(nodeAttr);

                                if(mock(nodeAttr.type)) {
                                    nodeAttr.type = "text";
                                }

                                inputType = nodeAttr.type;
                                extAttr = steal(nodeAttr, ["note", "musted", "exp", "label"]);

                                note = extAttr["note"];
                                musted = extAttr["musted"];
                                validExp = extAttr["exp"];
                                labelName = extAttr["label"] || nodeAttr.value;

                                switch(inputType) {

//                                    case "radio":
//                                    case "checkbox":
//                                    {
//                                        inputName = nodeAttr.value;
//                                    }
//                                        break;

                                    default: {
                                        inputName = nodeAttr.name;
                                    }
                                }
                                fNode = tag("input", nodeAttr);

                            }
                                break;

                            case "text":
                            case "key":
                            {

                                if(_s(fOpt)) {

                                    fOpt = fOpt.split(",");

                                    // replace ^ to ,
                                    fOpt = map(fOpt, "return a0.replace('^', ',');");
                                }

                                if(_A(fOpt)) {
                                    inputName = fOpt[0].split("#");

                                    if(inputName[1]) {
                                        // has label

                                        labelName = inputName[1];
                                    }
                                    else {
                                        labelName = inputName[0];
                                    }

                                    inputName = inputName[0];
                                    inputVal = fOpt[1];

                                    validExp = fOpt[2];
                                    note = fOpt[3];
                                }
                                else if(_o(fOpt)) {
                                    inputName = fOpt.name;
                                    labelName = fOpt.label || inputName;
                                    inputVal = fOpt.value;

                                    validExp = fOpt.exp;
                                    note = fOpt.note;
                                }

                                if(fType == "key") {
                                    inputType = "password";
                                }
                                else {
                                    inputType = "text";
                                }

                                fNode = input(inputType, inputName, inputVal);

                            }
                                break;

                            case "label":
                            {

                            }
                                break;

                            case "button":
                            {

                            }
                                break;

                            case "radioSet": {

                                fOpt = g_set(fOpt);

                                inputType = "radio";
                                var radioSrc;
                                var defRadio;

                                if(_A(fOpt)) {

                                    inputName = fOpt.shift();

                                    radioSrc = arr2obj(fOpt);
                                }
                                else {
                                    inputName = fOpt.name;
                                    defRadio = fOpt.def;

                                    del(fOpt, ["name", "def"]);
                                    radioSrc = fOpt;
                                }

                                // create <input type="radio" />

                                inputName = inputName.split("#");

                                labelName = inputName[1];
                                defRadio = inputName[2];
                                inputName = inputName[0];

                                labelName = labelName || inputName;

                                var radioNodeSet = [], radioNode, radioLabel;

                                upnode(radioNodeSet);

                                var radioText;
                                for(var radioValue in radioSrc) {

                                    radioText = radioSrc[radioValue];

                                    radioLabel = label(radioText, "radio-label");
                                    radioNode = input("radio", inputName, radioValue);

                                    if(mock(defRadio)) {
                                        defRadio == radioValue;
                                    }

                                    if(defRadio == radioValue) {
                                        radioNode.attr("checked", "");
                                    }
                                    radioNodeSet.push(radioLabel);
                                    radioNodeSet.push(radioNode);
                                }

                                fNode = radioNodeSet;

                                inputName = ""; // set emtpy string
                            }
                                break;
                            case "submit":
                            {
                                if(hasSubmit != true) {

                                    inputType = "submit";

                                    fNode = input(inputType, "submit", fOpt);
                                    fNode.addClass("button");

                                    hasSubmit = true;
                                }
                                else {
                                    continue;
                                }
                            }
                                break;
                        }


                        // if any field has name, save it
                        if(rich(inputName)) {

                            formElements.push(fNode);
                        }
                        fNode.addClass(inputType);

                        if(is(validExp)) {
                            hasValid = true;
                        }
                        else {
                            hasValid = false;
                        }

                        if(a_in(labelFields, inputType)) {

                            if(addLabel == true ) {

                                if(hasValid == true) {
                                    labelName += "*"
                                }
                                labelNode = label(labelName);

                                labelNode.addClass(inputType);

                                lineBox.append(labelNode);
                            }
                        }

                        lineBox.append(fNode);

                        if(hasValid == TRUE) {
                            ui.API.addValidDOM(fNode, validExp)
                        }

                        if(is(note)) {
                            noteNode = label(note, "note");

                            lineBox.append(noteNode);
                        }
                    }

                    formNode.append(lineBox);

                    /* in: uiForm_onSubmit */

                    function uiForm_onSubmit() {

                        var result;

                        // start validating


                        result = formNode.execValid(formElements);

                        sign = "before";
                        if(result == false) {
                            stopEvent();
                            sign = "invalid";
                        }

                        call_userfunc(sign);

                        return result;
                    }


                    function uiForm_onload() {

                        sign = "loaded";

                        var response = frameNode.body.innerHTML;

                        //
                        call_userfunc(sign, response);
                    }
                    /* call_userfunc() */

                    function call_userfunc(sign, data) {

                        if(is(callback)) {

                            callback = g_func(callback);

                            // call me
                            callback(sign, data);
                        }
                    }
                }
                return formNode;
            },

            modifier: function(formNode, _opts) {

                // extend

                copy(ui.COM.form, formNode);

                var hasRegInputs = formNode.find("*[reg]");

                hasRegInputs.i(function(node) {

                    var regexp = attr(node, "reg");

                    ui.API.addValidDOM(node, regexp);
                });

                // add class for input[text]

                var inpTexts = formNode.find("input").add("textarea");

                inpTexts.addClass("text");

                return formNode;
            }
        }
        ,

        sqlTable: {
            id: "sqlTable",
            html:"<div><div class=\"sql-table-nav\"><span class=\"sql-table-gotopage\"><span class=\"sql-table-button sql-table-pre\">pre</span><span class=\"sql-table-button sql-table-next\">next</span><input type=\"text\" class=\"sql-table-index text\"><button class=\"sql-table-goto button\">jump</button><span class=\"sql-table-pageinfo label\">1/1</span><span class=\"sql-table-status\"></span></span><span class=\"sql-table-databutton\"><span class=\"sql-table-button sql-table-add\">add</span><span class=\"sql-table-button sql-table-save\">save</span><span class=\"sql-table-button sql-table-reset\">reset</span></span></div><div class=\"sql-table-search\"><span class=\"sql-table-label\">field</span><input type=\"text\" class=\"sql-table-field text\"><span class=\"sql-table-label\">Like</span><input type=\"text\" class=\"sql-table-keyword text\"><button class=\"sql-table-searchbtn button\">search</button></div><table class=\"sql-table-content\"></table></div>",

            opt: {
                Class: "sql-table",
                prepend: true
            },

            api: {

                load: function(src) {

                }
            },
            creator: function(node, src, _opt) {

                var opt =
                {
                    readonly: true,
                    addRow: true,
                    limit: null,
                    start: 0,
                    eachPage: 12,

                    defPage: 0,  // default page index,

                    justQuery: false
                };

                setup(opt, _opt);

                var database, table, dataSrc;

                var descSet, dataSet;

                var sqlBuffer, sqlDelBuffer;

                var hasData = false;
                var pageCount, curPage;

                var nSqlTable, nSqlHead;

                var inputGroup = [];
                var nAddRow;

                var nPre, nNext, nGoto, nIndex, nPageInfo, nStatus;
                var nField, nKeyword, nSearchBtn, nAddBtn;
                var nSave, nReset;
                var nButtonBar, nAPI;

                var tdValue;

                var tbEntry;

                var showInfo = sqltable_showInfo;

                var _SqlTable =
                {
                    load: function(src, _loadOpt) {

                        var loadOpt =
                        {
                            clause: "",
                            pageIndex: curPage || opt.defPage
                        };

                        setup(loadOpt, _loadOpt);

                        if(hasData == true) {

                            node.clearTable(true);
                        }

                        if(_s(src)) {

                            dataSrc = src;
                            src = src.split(",");

                            table = src[0];
                            database = src[1];

                            tbEntry = knit(table, database);
                            src = sqlData(table, database, opt.limit, opt.start, loadOpt.clause);
                        }

                        dataSet = src[0];
                        descSet = src[1];

                        sqlBuffer = new Object(); // The object save data for update
                        sqlDelBuffer = []; // The array saved some rows for delte

                        if(is(descSet)) {
                            nSqlHead = tags("th", descSet, "", "tr");
                            nSqlHead.addClass("sql-table-head");

                            nSqlTable.append(nSqlHead);

                            // add input TR
                            var addRowSrc;

                            if(opt.addRow == true) {

                                addRowSrc = a_loop(descSet.length, "<input type='text' class='sql-table-addinp text'/>");

                                nAddRow = tags("td", addRowSrc, "", "tr").de(nSqlTable);

                                inputGroup = nAddRow.find("input");

                                // add class
                                nAddRow.addClass("sql-table-addrow");
                            }
                        }

                        var recordCount = dataSet.length;
                        node.SqlData = dataSet;

                        var unit = opt.eachPage;

                        // compute page count
                        pageCount = ((recordCount - 1) / unit) + 1;
                        pageCount = int(pageCount);

                        curPage = loadOpt.pageIndex;

                        node.fillData();

                        var string = format("loaded. total $1 rows." , recordCount);
                        sqltable_showInfo(string);

                        return recordCount;
                    },

                    fillData: function() {

                        // clear previous data
                        node.clearTable(false);

                        // fill table

                        var curTr, curRecord;

                        var startNum = curPage * opt.eachPage;
                        var endNum = startNum + opt.eachPage;

                        for(var num = startNum; num < endNum; num++) {

                            curRecord = dataSet[num];

                            curTr = tags("td", curRecord, "", "tr", "empty=1");
                            curTr.addClass("sql-table-row");

                            nSqlTable.append(curTr);
                        }

                        hasData = true;
                        // draw label
                        sqltable_drawlabel();
                    },
                    prePage: function() {

                        if(--curPage >= 0) {

                            node.fillData();
                        }
                        else {
                            curPage = 0;
                        }

                    },

                    nextPage: function() {

                        if(++curPage < pageCount) {

                            node.fillData();
                        }
                        else {
                            curPage = 0;
                        }

                    },

                    gotoPage: function(index) {

                        index--;

                        curPage = nlt(index, 0);
                        curPage = ngt(index, pageCount - 1);

                        node.fillData();
                    },
                    clearTable: function(cutHead){

                        if(cutHead == true) {
                            node.find(".sql-table-head").cut();
                            nAddRow.cut();
                        }

                        node.find(".sql-table-row").cut();

                        // clean data
                        sqlBuffer = {};
                        sqlDelBuffer = [];

                        return node;
                    }
                };

                copy(_SqlTable, node);

                nSqlTable = node.find(".sql-table-content")[0];

                sqltable_bind();
                node.load(src);

                return node;

                /* in: sqltable_bind() */

                function sqltable_bind() {

                    nPre = node.find(".sql-table-pre");
                    nNext = node.find(".sql-table-next");

                    nGoto = node.find(".sql-table-goto");
                    nIndex = node.find(".sql-table-index")[0];
                    nPageInfo = node.find(".sql-table-pageinfo");

                    nStatus = node.find(".sql-table-status");

                    nField = node.find(".sql-table-field")[0];
                    nKeyword = node.find(".sql-table-keyword")[0];
                    nSearchBtn = node.find(".sql-table-searchbtn");

                    //
                    nPre.click(node.prePage);
                    nNext.click(node.nextPage);

                    nGoto.click(goto_click);
                    nSearchBtn.click(search_click);

                    node.tie("click", sqltable_click);
                    node.tie("blur", sqltable_td_blur, true);

                    node.tie("dblclick", sqltable_dblclick);

                    // there do for data add

                    nAddBtn = node.find(".sql-table-add");
                    nAddBtn.click(add_click);

                    // for save and reset

                    nSave = node.find(".sql-table-save");
                    nReset = node.find(".sql-table-reset");

                    nSave.click(save_click);
                    nReset.click(reset_click);

                    // create downlist
                    nButtonBar = node.find(".sql-table-databutton")[0];

                    var downlistSrc = [ "truncate" ];
                    nAPI = ui.downlist("API", downlistSrc, sqltable_downlist).de(nButtonBar);
                }

                /* tiny: sqltable_drawlabel */

                function sqltable_drawlabel() {

                    var htmlcode = format("$1 / $2", curPage+1, pageCount);

                    nPageInfo.html(htmlcode);
                }

                /* tiny: sqltable_showInfo() */
                function sqltable_showInfo(string, isOk) {

                    isOk = _def(isOk, TRUE);

                    nStatus.html(string);
                    if(isOk == true) {
                        nStatus.setClass("ok", "failure");
                    }
                    else {
                        nStatus.setClass("failure", "ok");
                    }
                }

                /* click: goto_click() */
                function goto_click() {

                    var pageIndex = nIndex.value;

                    pageIndex = int(pageIndex);

                    node.gotoPage(pageIndex);
                }

                /* click: search_click */
                function search_click() {

                    var clause;
                    var fieldName, keyword;

                    fieldName = nField.value;
                    keyword = nKeyword.value;

                    // if nothing text, reload table with all record
                    if(empty(fieldName) || empty(keyword)) {

                        return node.load(dataSrc);
                    }

                    clause = format("WHERE `$1` LIKE '%$2%';", fieldName, keyword);

                    // reload sql table

                    var loadOpt =
                    {
                        clause: clause
                    };

                    var loadResult = node.load(dataSrc, loadOpt);

                    //
                    sqltable_showInfo("search complete. total\t" + loadResult + "\trows.", TRUE);

                }
                /* click: sqltable_click() */

                function sqltable_click() {

                    var target = event.target;

                    var tName = target.tagName;

                    if(tName == "TD") {

                        edit(target);

                        // save value
                        tdValue = target.text();
                    }
                }

                /* dblclick: sqltable_dblclick */

                function sqltable_dblclick() {

                    var myNode = event.target;

                    if(myNode.tagName == "TD") {

                        myNode = myNode.parentElement; // convert td to tr

                        if(myNode.hasClass("sql-table-row") == FALSE) {
                            return;
                        }
                        // prepare

                        var id = myNode.children[0].textContent;

                        var delResult;

                        if(opt.justQuery == true) {

                            delResult = tbEntry.del(id);

                            if(s_int(delResult)) {
                                showInfo("record deleted.\t id =" + id);
                            }
                            else {
                                showInfo("delete failure. \t id = " + id)
                            }
                        }
                        else {

                            var idIndex = sqlDelBuffer.indexOf(id);

                            if(idIndex == -1) {
                                sqlDelBuffer.push(id);
                                myNode.addClass("sqltable-delrow");
                            }
                            else {
                                sqlDelBuffer.splice(idIndex, 1);
                                myNode.cutClass("sqltable-delrow");
                            }
                        }
                    }
                }

                /* blur: sqltable_td_blur  */
                function sqltable_td_blur() {

                    var target = event.target;

                    if(target.tagName !== "TD") {
                        return;
                    }

                    edit(target, false);

                    var curVal = target.text();

                    if(tdValue !== curVal) {

                        // update

                        var nTR = target.parentElement;

                        var fieldName = descSet[target.cellIndex];

                        // get id
                        var id = nTR.children[0].textContent;

                        var dataAtom = new Object();

                        dataAtom[fieldName] = curVal;

                        if(opt.justQuery == true) {
                            var updateSign = tbEntry.update(dataAtom, id);

                            var string = format("\t\t$1 => $2", tdValue, curVal);

                            if(updateSign == "1") {

                                string = "update success " + string;
                                sqltable_showInfo(string, true);
                            }
                            else {

                                string = "update failure" + string;
                                sqltable_showInfo(string, false);
                            }
                        }
                        else {

                            if(is(sqlBuffer[id])) {

                                copy(dataAtom, sqlBuffer[id]);
                            }
                            else {
                                sqlBuffer[id] = dataAtom;
                            }

                            target.addClass("sqltable-modify-td");
                        }
                    }
                }

                /* click: add_click() */

                function add_click() {

                    var newRecord = {};

                    inputGroup.i(function(node, index) {

                        var fieldName = descSet[index];

                        var fieldVal = node.value;

                        switch(fieldVal) {

                            case "#":
                            {
                                fieldVal = "";
                            }
                                break;

                            case "":
                            {
                                if(fieldName == "day") {
                                    fieldVal = "*";
                                    break;
                                }
                                
                                return;
                            }
                                break;
                        }

                        newRecord[fieldName] = fieldVal;
                    });

                    if(newRecord["id"] == "") {

                        delete newRecord["id"];
                    }

                    var addResult = tbEntry.insert(newRecord);

                    var string;
                    if(_n(addResult)) {

                        string = "data added.";

                        node.load(dataSrc);
                    }
                    else {
                        string = format("error: \n$1", addResult);
                    }

                    sqltable_showInfo(string);
                }

                /* click: save_click() */

                function save_click() {

                    // update sql table
                    var dataAtom;

                    var updateResult;

                    var updatedCount = 0;

                    for(var id in sqlBuffer) {

                        dataAtom = sqlBuffer[id];

                        updateResult = tbEntry.update(dataAtom, id);

                        if(s_int(updateResult)) {

                            updatedCount++;
                        }
                    }


                    var showString = [];

                    var curString;
                    if(updatedCount > 0) {
                        curString = format("$1 rows updated.", updatedCount);

                        showString.push(curString);;
                    }
                    // delete

                    var curID, deleteCount;
                    var delResponse;

                    deleteCount = sqlDelBuffer.length;

                    tbEntry.del(sqlDelBuffer);

                    // reload
                    node.load(dataSrc);

                    if(deleteCount > 0) {

                        showString.push("delete rows = " + deleteCount);
                    }

                    showString = showString.join("\t"); // join string for notice

                    sqltable_showInfo(showString);
                }

                /* clcik reset_click */

                function reset_click() {

                    node.load(dataSrc);

                    showInfo("table reset.");
                }

                /* sqltable_downlist */

                function sqltable_downlist(value, optionNode) {

                    var queryResult;

                    switch(value) {

                        case "truncate":
                        {
                            queryResult = truncate(table, database);

                            node.load(dataSrc);

                            var string = format("for table <b>$1</b> in <b>$2</b>", table, database);
                            if(s_int(queryResult)) {
                                showInfo("truncate success." + string);
                            }
                            else {

                                showInfo("truncate failure." + string);
                            }
                        }
                            break;
                    }
                }
            }
        },

        downlist: {
            id: "downlist",

            opt: {
                prepend: false,
                Class: "downlist",

                mode: "hover",
                modifyClass:"downlist",
                extID: "-dl"
            },

            creator: function(title, members, callback, _opt) {

                var OPT = Opt.downlist;

                var opt =
                {
                    mode: OPT.mode,
                    Class: "",
                    id: ""
                };

                setup(opt, _opt);

                var nDownlist; // downlist

                var nTitle, nDownlistBox, nListbox;


                nDownlist = span("", opt.Class, opt.id);

                if(_HE(title)) {
                    nTitle = title;
                    nTitle.addClass("downlist-title");

                    nDownlist.beforeTo(nTitle);
                }
                else {
                    nTitle = span(title, "downlist-title")
                }

                nTitle.de(nDownlist);

                nDownlistBox = span("", "downlist-box").de(nDownlist);

                if(_A(members)) {
                    nListbox = ul(members, "downlist-ul")
                }
                else {
                    nListbox = members;
                    nListbox.addClass("downlist-ul");
                }

                nListbox.depend(nDownlistBox);

                // test width

                var downlistWidth;

                if(_HE(title) == FALSE) {
                    nDownlist.de();
                    nDownlist.display("inline-block");
                    downlistWidth = nDownlist.width();
                    nDownlist.cut();
                }
                else {
                    //v();
                    nDownlist.display("inline-block");
                    downlistWidth = nDownlist.width();
                }

                //LOG("downlistWidth: " + downlistWidth)

                nListbox.left("-" + downlistWidth);
                nListbox.hide(); // hide

                var win_clickHandler;

                if(opt.mode == "click") {

                    nDownlist.tie("click", ui_downlist_click);
                }
                else if(opt.mode == "hover") {

                    nDownlist.tie("mouseover", ui_downlist_hover);
                    nDownlist.tie("mouseout", ui_downlist_out);
                }

                // The bind for UL

                nListbox.tie("click", ui_downlist_onClick);

                if(callback) {

                    nListbox.on("select", callback);
                }
                return nDownlist;

                /* ui_downlist_show() */

                function ui_downlist_show() {

                    nListbox.show("inline-block");
                }

                /* ui_downlist_hide() */
                function ui_downlist_hide() {

                    nListbox.hide();
                }

                /* click: ui_downlist_click */

                function ui_downlist_click() {

                    ui_downlist_show();

                    // add extend listener for hide

                    win_clickHandler = spy(ui_downlist_winClick, "click");
                    stopEvent(0);
                }

                /* click: ui_downlist_winClick */
                function ui_downlist_winClick() {

                    var target = event.target;

                    if(nDownlist.has(target) && target.tagName == "LI") {

                        ui_downlist_hide();
                        deltie(window, "click", win_clickHandler);
                    }
                }

                /* mouseover: ui_downlist_hover */

                function ui_downlist_hover() {

                    ui_downlist_show();
                }

                /* mouseout: ui_downlist_out */

                function ui_downlist_out() {

                    ui_downlist_hide();
                }

                /* click: ui_downlist_onSelect() */

                function ui_downlist_onClick() {

                    var targetNode = event.target; // :)

                    var selectValue;
                    if(targetNode.tagName == "LI") {

                        selectValue = html(targetNode);

                        nListbox.emit("select", selectValue);
//                        if(is(callback)) {
//
//                            callback(selectValue, targetNode);
//                        }
                    }
                }
            },

            modifier: function(node, opts) {

                // let me create ui!

                var listSrc = node.attr("list-src");
                var nUL = ID(listSrc);

                var nTitle = node;

                // call creator
                var nDownlist = ui.downlist(nTitle, nUL, null, opts);

                return nDownlist;
            }
        },

        modal: {
            id: "modal",
            opt: {
                Class: "modal",
                modifyClass: "modal",
                extID: "-dlg"
            },
            init: function() {

                // create shadow
                div("", "modal-shadow").depend(Body);
            },
            html: "<div><div class=\"modal-bar\"><span class=\"modal-close\">X</span></div><div class=\"modal-content\"></div></div>",

            creator: function(node, src, _opts) {

                var OPT = Opt.modal;

                var opts =
                {
                    shadow: true,
                    hotkey: null,
                    id: null,
                    Class: OPT.Class,
                    autoshow: false,
                    resize: true,

                    x: "center",
                    y: "center"
                };

                setup(opts, _opts);

                var nModal = node;

                // meta initial
                nModal.ID(opts.id);
                nModal.addClass(opts.Class);

                var nBar = node.find(".modal-bar");
                var nClose = node.find(".modal-close");
                var nContent = node.find(".modal-content");

                if(opts.resize == TRUE) {
                    nContent.addClass("Resize");
                }

                // build modal

                var nShadow = $(".modal-shadow");

                var xyInitialed = false; // if not call x(), y(), set FALSE

                var _SET =
                {
                    show: function(xPos, yPos, shadow) {

                        shadow = _def(shadow, opts.shadow);

                        if(xyInitialed == false) {

                            xPos = _def(xPos, opts.x);
                            yPos = _def(yPos, opts.y);

                            xyInitialed = true;
                        }

                        if(shadow == true) {
                            nShadow.beforeTo(nModal);
                            nShadow.show();
                        }

                        nModal._show();

                        if(is(xPos)) {
                            nModal.x(xPos);
                        }

                        if(is(yPos)) {
                            nModal.y(yPos);
                        }

                        return nModal;
                    },

                    hide: function() {

                        if(opts.shadow == true) {
                            nShadow.hide();
                        }

                        nModal._hide();

                        return nModal;
                    },

                    SRC: function(content, coverAll) {

                        nContent.html(content, coverAll);

                        return nModal;
                    }
                };

                modal_build();
                modal_bind();

                return nModal;

                /* modal_build() */

                function modal_build() {

                    nModal._show = nModal.show;
                    nModal._hide = nModal.hide;

                    copy(_SET, nModal);

                    nContent.html(src);

                    // show
                    if(opts.autoshow == true) {
                        nModal.depend();
                        nModal.show();
                    }
                    else {
                        nModal.hide();
                    }
                }

                /* modal_bind() */
                function modal_bind() {

                    // stack

                    var startX, startY;
                    var startLeft, startTop;

                    var inDrag = false;

                    nBar.mousedown(modalbar_mdown);
                    nBar.mousemove(modalbar_mmove);

                    tie(window, "mouseup", modalbar_mup);

                    nClose.click(modalclose_click);

                    /* mousedown: modalbar_mdown() */

                    function modalbar_mdown() {

                        startX = event.screenX;
                        startY = event.screenY;

                        startLeft = nModal.left(und, true);
                        startTop = nModal.top(und, true);
                        inDrag = true; // enter flag
                    }

                    /* mousemove: modalbar_mmove() */

                    function modalbar_mmove() {

                        var cx, cy;

                        if(inDrag == true) {

                            cx = event.screenX - startX;
                            cy = event.screenY - startY;

                            cx += startLeft;
                            cy += startTop;

                            nModal.coor(cy, cx);

                            //
                            var text = format("cx=$1, cy=$2", cx, cy);
                            LOG(text);
                        }

                        return false;
                    }

                    /* mouseup: modalbar_mup() */
                    function modalbar_mup() {

                        if(inDrag == true) {

                            startX = 0;
                            startY = 0;
                            inDrag = false;
                        }
                    }

                    /* click: modalclose_click() */
                    function modalclose_click() {

                        nModal.hide();
                    }
                }
            },

            modifier: function(target, opts) {

                var OPT = Opt.modal;


                var modal = ui.modal(null, opts);

                target.before(modal);
                modal.SRC(target);

                return modal;
            }
        },

        tab: {
            id: "tab",
            opt: {
                Class: "tab",

                modifyClass: "tab",
                extID: "-tab"
            },

            creator: function(src, _opts) {

                var opts =
                {
                    id: "",
                    className: "",
                    def: 1,
                    showMode: "num",
                    showIndex: true
                };

                setup(opts, _opts);

                // node

                var nTab, nTabContent, nTabNav;

                // create Tab
                nTab = div("", opts.className);

                if(_A(src)) {

                }
                else if(_HE(src)) {

                    nTabContent = src;

                    nTab.beforeTo(nTabContent);
                }

                nTabContent.addClass("Tab-Content");
                // hide div

                var pages;
                var curNumIndex = -1, curCharIndex, curPage;
                var pageCount;

                pages = nTabContent.child();
                pageCount = pages.length;

                pages.hide();

                // create index
                var indexPage = {};
                var keyname, page;

                for(var iPage = 0; iPage < pageCount; iPage++) {

                    page = pages[iPage];

                    keyname = page.attr("index");

                    // set default value
                    keyname = keyname || (iPage + 1);

                    indexPage[keyname] = page;
                }

                // create nav
                nTabNav = div("", "Tab-Nav");
                nTabNav.depend(nTab);

                // create bar that number style
                var nNumBar;

                nNumBar = div("", "Tab-Number");
                nNumBar.depend(nTabNav).hide();

                each(pages, function(page, numIndex) {

                    var nNumGrid = span(numIndex+1);

                    nNumGrid.depend(nNumBar);

                    nNumGrid.attr("pagePointer", numIndex + 1);
                });

                // create another bar contains string
                var nCharBar = div("", "Tab-Char");
                nCharBar.depend(nTabNav).hide();

                each(indexPage, function(page, charIndex) {

                    var nCharGrid = span(charIndex);

                    nCharGrid.depend(nCharBar);

                    nCharGrid.attr("pagePointer", charIndex);
                });

                // listen click event
                var curGrid;

                curGrid = nTab.find("span[pagePointer='" + opts.def + "']");
                curGrid.addClass("Focus");

                nTab.click(tabnav_onClick);

                //nTabNav._
                var TabAPI =
                {
                    goto: function(index) {

                        if(is(curPage)) {
                            curPage.hide();
                        }

                        if(s_int(index)) {

                            //v();
                            curNumIndex = nlt(index, 1);
                            curNumIndex = ngt(index, pageCount);

                            curPage = pages[curNumIndex-1];
                        }
                        else if(_s(index)) {

                            curCharIndex = index;

                            curPage = indexPage[curCharIndex];
                        }

                        //LOG("index=" + curNumIndex + "\tType:" + typeof(curNumIndex));
                        //
                        curPage.show();
                    },

                    showNav: function(flag) {

                        switch(flag) {

                            case "key":
                            {
                                nCharBar.show();
                                nNumBar.hide();
                            }
                                break;

                            case "num":
                            {
                                nNumBar.show();
                                nCharBar.hide();
                            }
                                break;

                            default:
                            {
                                nNumBar.hide();
                                nCharBar.hide();
                            }
                        }
                    }
                };

                copy(TabAPI, nTab);

                if(opts.showIndex == TRUE) {

                    nTab.showNav(opts.showMode);
                }

                nTabContent.depend(nTab);

                nTab.goto(opts.def);

                return nTab;

                /* click: tabnav_onClick() */

                function tabnav_onClick() {

                    var target = event.target;

                    var grid, pagePointer;

                    if(target.tagName == "SPAN") {

                        grid = target;

                        curGrid.cutClass("Focus");

                        curGrid = grid;
                        curGrid.addClass("Focus");

                        pagePointer = grid.attr("pagePointer");

                        nTab.goto(pagePointer);
                    }
                }
            },

            modifier: function(node, opts) {

                var nTab;

                // create  node
                nTab = ui.tab(node, opts);

                return nTab;
            }
        },

        wizard: {

            id: "wizard",

            opt: {
                Class: "wizard",
                modifyClass: "wizard",
                extID: "-wzd"
            },

            html: "<div><div class=\"wizard-title\"></div><div class=\"wizard-face\"></div><div class=\"wizard-nav\"><span class=\"wizard-back line-button\">Back</span><span class=\"wizard-next line-button\">Next</span><span class=\"wizard-ok line-button\">OK</span></div></div><!--	<div id=\"season\" class=\"Tab\" opts=\"{ showMode: \'key\', def: \'spring\' }\"><div index=\"spring\">Spring</div><div>Summer</div><div index=\"fall\"><h1>Autumn</h1></div></div>--><!--<div id=\"codebox\"><div class=\"modal\"><div class=\"modal-bar\"><span class=\"modal-close\">X</span></div><div class=\"modal-content\"></div></div></div>-->",

            creator: function(nWizard, dom, _opts) {

                var opts =
                {
                    showStep: true,
                    title: "wizard",
                    def: 0
                };

                setup(opts, _opts);
                // append node

                nWizard.beforeTo(dom);

                // query node

                var nRoot = nWizard;
                nWizard.addClass("active");

                var nWzdTitle, nWzdFace, nWzdPages, nWzdNav;
                var nBack, nNext, nOK;

                nWzdTitle = nRoot.find(".wizard-title")[0];
                nWzdFace = nRoot.find(".wizard-face");

                var nStep, nStatus;

                nStep = div("", "wizard-step").depend(nWzdFace);
                nStatus = div("", "wizard-status").depend(nWzdFace);
                // append pages

                nWzdPages = dom;

                // add step div
                if(opts.showStep !== TRUE ) {
                    nStep.hide()
                }

                nWzdFace.append(nWzdPages);

                nWzdNav = nRoot.find(".wizard-nav");

                nBack = nRoot.find(".wizard-back");
                nNext = nRoot.find(".wizard-next");
                nOK = nRoot.find(".wizard-ok");

                nWzdTitle.html(opts.title);

                // make pages
                var Pages, totalPage, curStepIndex, lastPageIndex;
                var curPage, wizardInited;

                var wizardLINK = new Object();

                wizard_makepage();

                return nWizard;

                /* wizard_makepage() */

                function wizard_makepage() {

                    Pages = nWzdPages.child();
                    totalPage = Pages.length;

                    // hide all page
                    Pages.hide();

                    wizard_jump(opts.def);

                    var WizardCOM = {

                        back: function() {

                            lastPageIndex = curStepIndex;
                            wizard_jump(--curStepIndex);

                            return nWizard;
                        },

                        next: function() {

                            lastPageIndex = curStepIndex;
                            wizard_jump(++curStepIndex);

                            return nWizard;
                        },

                        finish: function() {

                            nWizard.emit("finish");

                            nWizard.hide();

                            return nWizard;
                        },

                        addLink: function(type, callbacks) {

                            if(_u(wizardLINK[type])) {

                                wizardLINK[type] = new Array();
                            }

                            wizardLINK[type] = wizardLINK[type].concat(callbacks);

                            return nWizard;
                        },

                        report:function(string, styleName) {

                            nStatus.html("");

                            nStatus.para(string, styleName);
                        }
                    };

                    copy(WizardCOM, nWizard);

                    // add listener

                    nBack.click(nWizard.back);
                    nNext.click(nWizard.next);
                    nOK.click(nWizard.finish);

                    wizardInited = TRUE;
                }

                /* wizard_jump() */

                function wizard_jump(pageIndex) {

                    // delete status

                    nStatus.html("");

                    // call callback

                    if(wizard_beforeJump() == FALSE) {

                        curStepIndex = lastPageIndex;
                        return;
                    }

                    if(wizardInited == TRUE) {

                        curPage.hide();
                    }

                    // check index

                    if((pageIndex < 0) || (pageIndex > (totalPage -1 )) ) {

                        curStepIndex = lastPageIndex;
                        // not correct index
                        return;
                    }
                    curStepIndex = pageIndex;

                    curPage = Pages[pageIndex];

                    curPage.inline();

                    // show step information

                    var stepString = curPage.attr("step") || "";

                    stepString = format("Step $1:\t$2", curStepIndex+1, stepString);

                    nStep.html(stepString);

                    // set navigator

                    nWzdNav.child().hide();

                    if(pageIndex == (totalPage - 1)) {
                        nOK.inline();
                    }

                    if(pageIndex > 0) {

                        if(totalPage > 1) {
                            nBack.inline();
                        }
                    }

                    if(pageIndex < (totalPage - 1)) {

                        if(totalPage > 1) {
                            nNext.inline();
                        }
                    }
                }

                /* wizard_beforeJump() */

                function wizard_beforeJump() {

                    var myResult = TRUE;

                    var gear;

                    gear = wizardLINK.jump;

                    var ARG;
                    if(is(gear)) {

                        ARG = [lastPageIndex+1 , curPage ];

                        myResult = _calls(gear, ARG);
                    }

                    return myResult;
                }
            },

            modifier: function(node, _opts) {

                // get title
                var wizardTitle = attr(node, "title");

                _opts["title"] = wizardTitle;

                var nWizard = applyMe(ui.wizard);

                return nWizard;
            }
        }

    };


    // setup
    UIDriver.setup();

    window.extUI = UIDriver.drawUI; // uncover api

    // start draw...

    for(var uiName in UISet) {

        var uiProto = UISet[uiName];

        UIDriver.drawUI(uiProto);
    }

}
