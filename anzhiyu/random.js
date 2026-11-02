var posts=["2026/11/02/20230813沈阳出差行/","2026/11/02/两次香港行/","2026/11/02/西藏/","2026/11/02/2024国庆东北之行/","2026/11/01/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };