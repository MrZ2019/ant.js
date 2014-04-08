/*
    name: ant.ui.mysql.js
    type: plugin@ant
    use: create a face for admin mysql database
    depend: ant, ant.ui
    date:12/29/13
 */

(function(ANT) {

    console.log("loading ant.ui.mysql...");

    var UI_MySQL =
    {
        id: "MySQL",
        opt:{

            Class: "MySQL-panel",
            prepend: true
        },
        creator: function(defDatabase, databases, _opt) {

            var opt =
            {
                host: "localhost",
                username: "root",
                password: "",

                omitDatabase: [],
                api: "default",

                defTable: "",
                panelClass: ""
            };

            setup(opt, _opt);

            databases = databases ||  "total";

            defDatabase = _def(defDatabase, "");


            var OPT = Opt.MySQL;
            // connect to mysql, but don't cover default options for mysql

            var connectOpt =
            {
                host: opt.host,
                username: opt.username,
                password: opt.password
            };
            var result = connect(defDatabase, connectOpt, false);


            // variation

            var nPanel, nNav, nSQLBox;

            var nSQLInput, nSQLQuery, nReport;
            var nDBOption, nTBOption; // two <select> for database, table select
            var nAction;

            var tables;
            var defTable = opt.defTable;

            var report = ui_mysql_report;
            ui_mysql_paint();

            if(result == FALSE) {

                report("connect failure, please check your options", "ui-mysql-error");
                return nPanel;
            }
            else {
                report("connect success! congratulation!", "ui-mysql-ok");
            }

            if(databases == "total") {

                ui_mysql_loadDB();
            }

            // var
            var curTable, curDatabase;
            var nTable;


            ui_mysql_loadTB();


            nTable = ui.sqlTable(curTable + "," + curDatabase);

            nPanel.append(nTable);
            // add event listener

            ui_mysql_action();

            return nPanel;

            /* in: ui_mysql_loadDB */

            function ui_mysql_loadDB() {
                databases = sql_show("DATABASE");
                // grab
                databases = grab(databases, "Database");

                nDBOption.html(""); // clear <option>

                var DBSet = tags("option", databases);

                nDBOption.append(DBSet);

                if(defDatabase == "") {
                    defDatabase = databases[0];
                }

                curDatabase = curDatabase || defDatabase;
                nDBOption.value = curDatabase;;
            }

            /* in: ui_mysql_loadTB */
            function ui_mysql_loadTB() {

                ui_mysql_getTable(curDatabase);

                nTBOption.html("");

                var TBSet = tags("option", tables);
                nTBOption.append(TBSet);

                var result; // result == false, if current database no table
                var text;

                if(tables.length > 0) {
                    nTBOption.value = curTable;

                    result = true;
                }
                else {
                    result = false;

                    text = foramt("<b>$1</b> no table.", curDatabase);
                    report(text);
                }

                return result;
            }

            /* in: ui_mysql_refresh */

            function ui_mysql_refresh() {
                ui_mysql_loadDB();

                var loadResult = ui_mysql_loadTB();

                if(loadResult == true) {
                    ui_mysql_drawTable();
                }
            }
            /* in: ui_mysql_paint */

            function ui_mysql_paint() {

                var panelClass = opt.panelClass;
                nPanel = div("", panelClass, opt.id);


                nNav = div("", "ui-mysql-nav").depend(nPanel);

                nNav.para("Database:", "ui-mysql-label");
                nDBOption = select([]).depend(nNav);

                nNav.para("Tables:", "ui-mysql-label");
                nTBOption = select([]).depend(nNav);

                var downlistSrc =
                    [
                        "refresh"
                    ];
                nAction = ui.downlist("action", downlistSrc, ui_mysql_onDownlist).de(nNav);
                //
                nSQLBox = div("", "ui-mysql-box").depend(nPanel);

                nSQLInput = textarea(2,48).de(nSQLBox);
                nSQLInput.addClass("ui-mysql-sqlinp text");

                nSQLQuery = button("Query!", "button big-button ui-mysql-querybtn").de(nSQLBox);

                nReport = div("", "ui-mysql-report").de(nPanel);
            }

            /* ui_mysql_action */
            function ui_mysql_action() {

                nDBOption.change(_DBOption_change);
                nTBOption.change(_TBOption_change);

                nSQLQuery.click(query_click);
            }

            /* method: ui_mysql_getTalbe() */

            function ui_mysql_getTable(database) {

                tables = sql_show(database);
                tables = grab(tables, database);

                if(defTable == "") {
                    defTable = tables[0];
                }

                curTable = defTable;

                return tables;
            }

            /* method: ui_mysql_drawTable() */

            function ui_mysql_drawTable()
            {
                var loadOpt =
                {
                    pageIndex: 0
                };

                nTable.load(curTable + ',' + curDatabase, loadOpt);
            }


            /* method: ui_mysql_report */
            function ui_mysql_report(string, className) {

                nReport.html("").para(string, className); // link!
            }
            /* onchange: _DBOption_change() */
            function _DBOption_change() {

                curDatabase = this.value;

                tables = ui_mysql_getTable(curDatabase);

                nTBOption.html("");

                // create table set
                var optionSet = tags("option", tables);

                nTBOption.append(optionSet);
                curTable = tables[0];

                ui_mysql_drawTable();
            }

            /* onchange: _TBOption_change */

            function _TBOption_change() {

                curTable = this.value;

                ui_mysql_drawTable();
            }

            /* click: query_click */
            function query_click() {

                var sqlCode = nSQLInput.value;

                // query to server

                var queryResult = query(sqlCode, curDatabase, TRUE);

                var reportInfo;
                if(! _n(queryResult)) {

                    report("Occur error:\t\n" + queryResult, "ui-mysql-error");
                }
                else {

                    reportInfo = format("Query success: \t $1 rows effected!", queryResult);
                    report(reportInfo, "ui-mysql-ok");
                }
            }

            /* downlist: ui_mysql_onDownlist() */

            function ui_mysql_onDownlist(node, value) {

                switch(value) {

                    case "refresh":
                    {
                        ui_mysql_refresh();
                    }
                        break;
                }
            }
        }
    };

    // load ui

    extUI(UI_MySQL);

}) (ANT);
