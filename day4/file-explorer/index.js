/**
 * Created by raid on 2016/9/17.
 */

var fs = require('fs');
fs.readdir(process.cwd(), function (err, files) {
    console.log('');

    if (!files.length) {
        return console.log('    \033[31m No files to show!\033[39m\n');
    }

    console.log('   Select which file or directory you want to see\n');

    var stats = [];

    function file(i) {
        var filename = files[i];

        fs.stat(__dirname + '/' + filename, function (err, stat) {
            stats[i] = stat;
            if (stat.isDirectory()) {
                console.log('   ' + i + '   \033[36m' + filename + '/\033[39m');
            } else {
                console.log('   ' + i + '   \033[90m' + filename + '\033[39');
            }

            i++;
            if (i == files.length) {
                read();
            } else {
                file(i);
            }
        });
    }

    file(0);


    function read() {
        console.log('');
        process.stdout.write('  \033[33mEnter your choice: \033[39m');
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', option);
    }

    function option(data) {
        var filename = files[Number(data)];
        if (!filename) {
            process.stdout.write('  \033[31mEnter your choice: \033[39m');
        } else {

            if (stats[Number(data)].isDirectory()) {
                fs.readdir(__dirname + '/' + filename, function (err, files) {
                    console.log('');
                    console.log('   (' + files.length + ' files)');
                    files.forEach(function (file) {
                        console.log('   -   ' + file);
                    });
                    console.log('');
                });
            } else {
                fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
                    console.log('');
                    console.log('\033[90m' + data + '\033[39m');
                    // console.log('\033[90m' + data.replace(/(.*)/g, '    $1') + '\033[39m');  ??
                });
            }

            // process.stdin.pause();

        }
    }
});