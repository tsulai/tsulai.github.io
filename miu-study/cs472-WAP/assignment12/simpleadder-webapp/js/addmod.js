/**
 * addmod.js
 */

exports.add = function(req, res, vals){
    const sum = parseFloat(vals.first) + parseFloat(vals.second);
    res.writeHead(200, {"Content-Type" : "text/html"});
    const content = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Calculator Webapp</title>
            </head>
            <body>
                <p>The sum is ${String(sum)}.</p>
            </body>
        </html>
    `;
    res.write(content);
    return res.end();
}