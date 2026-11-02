var posts=["2026/11/01/hello-world/","2026/11/02/西藏/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };