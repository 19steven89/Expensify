//the 2 things than must be done for webpack to run are the following; 
// entry: app.js in src folder
// output the final bundle file in this file!

const path = require("path");
//absolute path of the curent working directory from this file concat with the public folder to access the app.js file
//console.log(path.join(__dirname, "public"));

module.exports = {
    // entry is the file that gets loaded and executed
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js" 
    },
    module:{
        rules: [{
            loader: "babel-loader",
            // files that end with .js to run babel 
            test: /\.js$/,
            exclude: /node_modules/
        },{
        //    ? here is to support both css and scss files
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    // lets the browser figure out where original errors are sourced from and is useful for debugging
    devtool: "cheap-module-eval-source-map",
    devServer:{
        // set up base which signals to webpack-dev-server where to find the public files
        contentBase: path.join(__dirname, "public"),
        // historyApiFallback tells the dev server that we will be handling routing via client side reactjs
        historyApiFallback: true
    },
    performance: { hints: false }
};
