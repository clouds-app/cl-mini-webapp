/*
 * APICloud JavaScript Library
 * Copyright (c) 2019 hdeqi@qq.com
 * db 模块封装了手机常用数据库 sqlite 的增删改查语句，可实现数据的本地存储，极大的简化了数据持久化问题
 * 详情参考：https://docs.apicloud.com/Client-API/Func-Ext/db
 */
(function(window){
    var u = {};
    
    var db;
    var dbName = 'webapp';
    var dbPath = 'fs://webapp.db';
    var tableName = 'webapp_table';

    // 引入db模块
    u.init = function(){
        if (db) {
            return;
        }
        db = api.require('db');
    };

    // 创建数据库及相关的数据表结构
    u.open = function() {
        u.init();
        var ret = db.openDatabaseSync({
            name: dbName,
            path: dbPath
        });
        if (ret.status) {
            db.executeSqlSync({
                name: dbName,
                sql: 'CREATE TABLE ' + tableName + '(tableId VARCHAR(32), tableValue VARCHAR(255),type VARCHAR(32))'   
            });
        }
    }

    // 查询操作，查询table中全部数据，或按ID查询
    u.select = function(tableId,type) {
        u.init();
        var sql = 'SELECT * FROM ' + tableName;
        if (type && type !="null") {
            sql = 'SELECT * FROM ' + tableName + ' WHERE type=\"' + type + '\"';
        }
        if (tableId && tableId !="null") {
            sql = 'SELECT * FROM ' + tableName + ' WHERE tableId=\"' + tableId + '\"';
        }
      
        return db.selectSqlSync({
            name: dbName,
            sql: sql
        });
    }

    // 更新操作，更新表指定ID的值
    u.update = function(tableId, tableValue,type) {
        u.init();
        var sql = 'UPDATE ' + tableName + ' SET tableValue=\"' + tableValue + '\" WHERE tableId=\"' + tableId + '\"'
        if (type && type !="null")  {
            sql = 'UPDATE ' + tableName + ' SET tableValue=\"' + tableValue + '\" WHERE tableId=\"' + tableId + '\"' + ' and type=\"' + type + '\"'
        }
        return db.executeSqlSync({
            name: dbName,
            sql: sql
        });
    }

    // 插入操作，将ID和值添加到表中
    u.insert = function(tableId, tableValue,type) {
        u.init();
        var sql = 'INSERT INTO ' + tableName + '(tableId,tableValue,type) VALUES(\"' + tableId + '\",\"' + tableValue + '\",\"null\")'    
        if (type && type !="null"){
            sql = 'INSERT INTO ' + tableName + '(tableId,tableValue,type) VALUES(\"' + tableId + '\",\"' + tableValue + '\",\"' + type + '\")'    
        }
        return db.executeSqlSync({
            name: dbName,
            sql: sql
        });
    }

/*end*/
    
    window.$db = u;

})(window);

/*参考使用方法：*/
// 初始化本地数据库及应用需要的相关表结构
// function initDatabase() {
//     $db.open();
// }

//查询数据库所有数据
// function getDataFromDB() {
//     var ret = $db.select(); 
//     if (ret && ret.data.length > 0) {
//          //do something with the ret.data
//     }
// }

//指定id查询
//  var result = $db.select(id);
//数据更新
//$db.update(Id, value);
//数据插入
//$db.insert(Id, value);


