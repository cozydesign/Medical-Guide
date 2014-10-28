// JavaScript Document


var db;
//database varsion setting
var version = 1.0;
//database name setting
var dbName = "tizendb";
//database display name setting
var dbDisplayName = "tizen_test_db";
//database size setting
var dbSize = 2 * 1024 * 1024;

function selectDB() {
	if (window.openDatabase) {
		//openDatabase(name, version, displayname, estimatedsize, callback);
		db = openDatabase(dbName, version, dbDisplayName, dbSize);

		dropTable(db);
		createTable(db);

		//inserting data in table
		insertData(db, "tizenTest01", "We are pleased to announce that Tizen 2.0");
		insertData(db, "tizenTest02", "device vendors. We encourage you to download");
		insertData(db, "tizenTest03", "installed and used it. If you have questions");
		insertData(db, "tizenTest04", "This release includes many new features");
		insertData(db, "tizenTest05", "Highlights of this release include");

		dataView(db);

	} else {
		alert("Web SQL Database not supported in this browser");
	}
}

//reads and displays values from the 'places' table
function dataView(db) {
	var html = document.getElementById("tbody01");
	var ddlHtml = document.getElementById("ddlTitle");
	html.innerHTML = "";
	ddlHtml.innerHTML = "";

	db.transaction(function (t) {
		t.executeSql("SELECT * FROM tizenTable", [],
		function (tran, r) {
			ddlHtml.innerHTML = "<option value='all'>all</option>";
			for (var i = 0; i < r.rows.length; i++) {
				var id = r.rows.item(i).id;
				var title = r.rows.item(i).title;
				var content = r.rows.item(i).content;
				var insertday = r.rows.item(i).insertDay;

				//data list rendering
				if (html) {
					html.innerHTML += "<tr><td>" + id + "</td><td>" + title + "</td><td>" + content + "</td><td>" + insertday + "</td></tr>";
				}

				//select box rendering
				if (ddlHtml) {
					ddlHtml.innerHTML += "<option value=" + id + ">" + title + "</option>";
				}
			}
		},
		function (t, e) { alert("Error:" + e.message); }
	 );
	});
}

// create table
function createTable(db) {
	db.transaction(function (t) {
		t.executeSql("CREATE TABLE tizenTable (id INTEGER PRIMARY KEY, title TEXT, content TEXT, insertDay DATETIME)", []);
	});
}

//inserting data in table
function insertData(db, title, context) {
	db.transaction(function (e) {
		var day = new Date();
		e.executeSql("INSERT INTO tizenTable(title, content, insertDay) VALUES (?, ?, ?)", [title, context, day], onSuccess, onError);
	});
}

function onSuccess(e) { }
function onError(e) { }

// drop table
function dropTable(db) {
	db.transaction(function (e) {
		e.executeSql("DROP TABLE tizenTable");
	});
}

//Select the data conditions
function dataChange(value) {
	if (value != "all") {
		var html = document.getElementById("tbody01");
		html.innerHTML = "";
		db.transaction(function (t) {
			t.executeSql("SELECT * FROM tizenTable WHERE id=?", [value],
		function (tran, r) {
			for (var i = 0; i < r.rows.length; i++) {
				var id = r.rows.item(i).id;
				var title = r.rows.item(i).title;
				var content = r.rows.item(i).content;
				var insertday = r.rows.item(i).insertDay;

				if (html) {
					html.innerHTML += "<tr><td>" + id + "</td><td>" + title + "</td><td>" + content + "</td><td>" + insertday + "</td></tr>";
				}
			}
		},
		function (t, e) { alert("Error:" + e.message); }
	 );
		});
	} else {
		dataView(db);
	}
}

window.onload = function () {
	//selectDB();
};
