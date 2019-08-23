SET NAMES UTF8;
DROP DATABASE IF EXISTS qmkg;
CREATE DATABASE qmkg CHARSET=UTF8;
USE qmkg;
/*数据表创建*/
#qmkg_user用户表，包含注册后的用户资料
CREATE TABLE qmkg_user(
    uid      INT PRIMARY KEY AUTO_INCREMENT,    #用户的ID，为用户的唯一标识，NULL自动生成
    uname    varchar(20),               #用户名，不可重复，具有唯一性，注册时需要进行判断
    unum     varchar(11),                       #手机号，11位
    upwd     varchar(20),                       #密码
    uhead    varchar(500),                      #头像图片路径
    uqian    varchar(20),                       #用户身份
    usex     varchar(10),                       #性别
    uage     INT,                               #年龄
    uadd     varchar(50),                       #所在地
    uf       INT,                               #粉丝数
    ug       INT                                #关注数
);

#qmkg_work作品表，用户上传的作品
CREATE TABLE qmkg_work(
    wid      INT PRIMARY KEY AUTO_INCREMENT,    #作品的ID，为作品的唯一标识，NULL自动生成
    wimg     varchar(500),                      #作品封面路径
    wmp3     varchar(500),                      #作品mp3路径
    wname    varchar(200),                      #作品名称
    wst      INT,                               #收听次数
    wly      INT,                               #留言次数
    uid      INT,                               #用户的ID，为用户的唯一标识
    uhead    varchar(500)                       #头像图片路径 
);

/*数据插入*/
/*qmkg_user用户表*/
INSERT INTO qmkg_user VALUES(1,"测试员1","13689364821","123456","uhead/1.jpg","新晋歌艺学徒","男",19,"浙江杭州",9037,12);
INSERT INTO qmkg_user VALUES(2,"测试员2","13689364822","123456","uhead/2.jpg","实力歌艺学徒","女",21,"浙江绍兴",206,23);
INSERT INTO qmkg_user VALUES(3,"测试员3","13689364823","123456","uhead/3.jpg","新晋选秀歌手","女",16,"浙江温州",38460,364);
INSERT INTO qmkg_user VALUES(4,"测试员4","13689364824","123456","uhead/4.jpg","新晋破锣菜鸟","男",32,"浙江湖州",0,0);
INSERT INTO qmkg_user VALUES(5,"测试员5","13689364825","123456","uhead/5.jpg","新晋破锣菜鸟","女",53,"浙江嘉兴",1,10);
INSERT INTO qmkg_user VALUES(6,"测试员6","13689364826","123456","uhead/6.jpg","新晋破锣菜鸟","女",7,"浙江丽水",118,312);
INSERT INTO qmkg_user VALUES(7,"测试员7","13689364827","123456","uhead/7.jpg","新晋破锣菜鸟","男",13,"浙江衢州",5,3);

/*qmkg_work作品表*/
INSERT INTO qmkg_work VALUES(1,"uwork/1.jpg","uwork/1.mp3","孤独的歌",6546,97,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(2,"uwork/2.jpg","uwork/2.mp3","壳",325,15,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(3,"uwork/3.jpg","uwork/3.mp3","花儿与少年",9852,233,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(4,"uwork/4.jpg","uwork/4.mp3","木偶",120,5,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(5,"uwork/5.jpg","uwork/5.mp3","失眠夜",61,3,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(6,"uwork/6.jpg","uwork/6.mp3","我变了我没变",94655,1205,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(7,"uwork/7.jpg","uwork/7.mp3","完美降落",8413,666,1,"uhead/1.jpg");
INSERT INTO qmkg_work VALUES(8,"uwork/8.jpg","uwork/8.mp3","羁绊",520,41,2,"uhead/2.jpg");
INSERT INTO qmkg_work VALUES(9,"uwork/9.jpg","uwork/9.mp3","表白日记",188,85,2,"uhead/2.jpg");
INSERT INTO qmkg_work VALUES(10,"uwork/10.jpg","uwork/10.mp3","晚风吹",8155,94,2,"uhead/2.jpg");
INSERT INTO qmkg_work VALUES(11,"uwork/11.jpg","uwork/11.mp3","匆匆那年",985,78,2,"uhead/2.jpg");
INSERT INTO qmkg_work VALUES(12,"uwork/12.jpg","uwork/12.mp3","宝贝妈妈",98758,874,3,"uhead/3.jpg");
INSERT INTO qmkg_work VALUES(13,"uwork/13.jpg","uwork/13.mp3","拂世之剑",31351,684,3,"uhead/3.jpg");
INSERT INTO qmkg_work VALUES(14,"uwork/14.jpg","uwork/14.mp3","空",56465,2418,3,"uhead/3.jpg");
INSERT INTO qmkg_work VALUES(15,"uwork/15.jpg","uwork/15.mp3","囹圄",163548,8536,3,"uhead/3.jpg");
INSERT INTO qmkg_work VALUES(16,"uwork/16.jpg","uwork/16.mp3","雷雨",867617,534,3,"uhead/3.jpg");