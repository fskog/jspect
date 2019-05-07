window.Specitor = {
    parseHtmlListAsyncJs: function (dotnetHelper) {
        var editor = document.getElementById('specitor_input')
        var input = editor.innerHTML;
        dotnetHelper.invokeMethodAsync('ParseHtmlListAsync', input)
            .then(data => {
                console.log("ParseHtmlListAsync returned." + data);
            });
    }
};