const path = require("path");

module.exports = {

    "entry": path.resolve(__dirname, "src", "index.tsx"),
    "output": {
        "path": path.resolve(__dirname, "dist"),
        "filename": "bundle.js"
    },
    "resolve": {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
    },
    "module": {
        "rules": [
            {
                test: /\.tsx?$/,
                use: [ "ts-loader" ]
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: [ "url-loader" ]
            }
        ]
    }
}