import newman from 'newman'


console.log("🚀 Running...");
newman.run({
    collection: require("./pm/collection.json"),
    reporters: ['htmlextra'],
    iterationCount: 1,
    insecure: true,
    reporter: {
        htmlextra: {
            // export: './report.html',
            // template: './template.hbs'
            logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            // browserTitle: "My Newman report",
            // title: "My Newman Report",
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            timezone: "Asia/Bangkok",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace",
            displayProgressBar: true
        }
    }

}, function (err) {
    if (err) throw err
    console.log('✅ collection run complete');
})