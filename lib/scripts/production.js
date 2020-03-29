'use strict';

const chalk = require('chalk');
const argv = require('optimist').argv;

const path = require('path');
const fs = require('fs');

var compression = require('compression');
const express = require('express');

const distPath = path.join(__dirname, '..', '..', 'dist');
const indexPath = path.join(distPath, 'index.html');

if (fs.existsSync(distPath)) {

    const port = argv.port || '4201';

    fs.readdir(distPath, (err, files) => {
        if (files.length) {
            const app = express();

            app.use(compression());
            app.use(express.static(distPath));
            app.use((req, res) => res.sendFile(indexPath));

            app.listen(port, () => console.log(chalk.green(`STATUS_OK, production server running on http://localhost:${port}/`)));

            process.on('uncaughtException', function (err) {
                if (err.errno === 'EADDRINUSE') {
                    console.error(chalk.red(`ERROR: It seems you have a server running on port ${port}. Please terminate it!`));
                } else {
                    console.error(chalk.red(`ERROR: An error occurred while starting the server`));
                }

                console.error(err);
                process.exit(1);
            });
        }
    });
} else {
    console.error(chalk.red(`ERROR: No build exists in the directory "${distPath}"`));
    process.exit(1);
}
