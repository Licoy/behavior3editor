(function(){
    "use strict";

    var CustomRegisterExec = function(title, callFunc, clazz){
        var item = b3.Class(clazz);
        item.prototype.name = title;
        callFunc(item.prototype);
        b3[title] = item;
        return item;
    };

    var CustomRegisterAction = function(title, callFunc){
        return CustomRegisterExec(title, callFunc, b3.Action);
    };

    var CustomRegisterCondition = function(title, callFunc){
        return CustomRegisterExec(title, callFunc, b3.Condition);
    };

    //conditions
    CustomRegisterCondition("PlayerNear",function(p){
        p.title = "玩家靠近(<distance>m)";
        p.parameters = {'distance': 2};
    });

    CustomRegisterCondition("HpLess",function(p){
        p.title = "血量少于(<ratio>%)";
        p.parameters = {'ratio': 20};
    });

    CustomRegisterCondition("TimeDistanceNoPlayer",function(p){
        p.title = "(<time>)秒内(<distance>)m内无玩家";
        p.parameters = {'time': 10, 'distance': 5};
    });

    CustomRegisterCondition("IsInitPosition",function(p){
        p.title = "初始位置半径(<distance>m)内";
        p.parameters = {'distance': 5};
    });

    CustomRegisterCondition("UnderActiveAttack",function(p){
        p.title = "受到玩家主动攻击";
    });


    CustomRegisterCondition("PlayerNearDistanceCount",function(p){
        p.title = "(<distance>m)内有(<count>名)玩家";
        p.parameters = {'distance': 5, 'count': 4};
    });


    //actions

    CustomRegisterAction("Log", function(p){
        p.title = "日志：(<title>)";
        p.parameters = {'title': "null"};
    });

    CustomRegisterAction("Escape", function(p){
        p.title = "逃跑至<distance>m外(<speed>m/s)";
        p.parameters = {'speed': 2, 'distance': 5};
    });

    CustomRegisterAction("CounterAttack", function(p){
        p.title = "反击(<skill_id>)技能";
        p.parameters = {'skill_id': ""};
    });

    CustomRegisterAction("ChasingPlayers", function(p){
        p.title = "追击玩家(<speed>m/s)";
        p.parameters = {'speed': 5};
    });

    CustomRegisterAction("GoInitPosition", function(p){
        p.title = "回到初始半径(<distance>m)位置";
        p.parameters = {'distance': 5};
    });

})();