var posts=["2024/12/26/测试/","2024/12/26/FCEUX模拟器安装运行FC红白机游戏/","2024/12/26/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };