

var songid = window.location.href.split("songid=")[1];
const wyy_api = Array.of(["http://music.163.com/song/media/outer/url?id=", "http://music.163.com/api/song/detail/?id=${songid}&ids=%5B${songid}%5D", "http://cloud-music.pl-fe.cn/"]);





fetch('https://cloud-music.pl-fe.cn/user/detail?uid=32953014', {
    mode: "cors",
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json",
        "Authorization": "Bearer 1145141919810"
    }
})
    .then(response => {
        return response.text();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));


document.getElementById("img_amb").src = "https://tse2-mm.cn.bing.net/th/id/OIP-C.aND-q9zGSuaDjbJ6l2pEDwHaE7?w=263&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
document.getElementById("@div-info0-title_h2").innerText = wyy_api[0];
