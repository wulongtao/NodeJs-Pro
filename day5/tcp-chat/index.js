/**
 * Created by raid on 2016/9/18.
 */
/**
 * 模块依赖
 */
var net = require('net');
/**
 * 创建服务器
 */
var count = 0,
    users = {};
var server = net.createServer(function (conn) {
    conn.setEncoding('utf8');

    var nickname;

    //handle connection
    conn.write(
        '\n > welcome to \033[92mnode-chat\033[39m!' +
        '\n > ' + count + ' other people are connected at this time.' +
        '\n > please write your name and press enter:'
    );
    count++;

    conn.on('data', function (data) {
        data = data.replace('\r\n', '');
        console.log(data);
        if (!nickname) {
            if (users[data]) {
                conn.write('\033[93m> nickname already in use. try again:\033[39m ');
                return;
            } else {
                nickname = data;
                users[nickname] = conn;
                broadcast('\033[90m > ' + nickname + ' joined the room\033[39m\n');
            }
        } else {
            broadcast('\033[96m > ' + nickname + ':\033[39m ' + data + '\n', true);
        }
    });

    conn.on('close', function () {
        count--;
        delete users[nickname];
        broadcast('\033[90m > ' + nickname + ' left the room\033[39m\n');
    });

    function broadcast(msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }
});

/**
 * 监听
 */
server.listen(3000, function () {
    console.log('\033[96m   server listening on *:3000\033[39m');
});