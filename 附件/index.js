window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    document.getElementById('top-right').addEventListener('click', function() {
        clickLogin();
    });

    // 设置监听器，按下enter键后，执行对应search函数
    document.getElementById('search-input-content').addEventListener('keydown', function(e) {
        if(e.code == 'Enter'){
            search();
        }
    })
}

function search() {
    // TODO: 搜索触发后的行为
    console.log('');
    var inputText = document.getElementsByTagName("input")[0].value;
    if(inputText == '')
        alert("请输入搜索内容");
    else
        // alert(inputText);
        window.open("https://www.baidu.com/s?wd=" + inputText);
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" />
                        </span>
                        <span id="name"></span>
                    </div>`;
    document.getElementById('top-right').innerHTML = content;
    document.getElementById('name').textContent = username;
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}