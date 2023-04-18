
const firebaseConfig = {
    apiKey: "AIzaSyBrbO30q3ttwcHCiNmnZ8nUFC_AGlQwfM4",
    authDomain: "esp-firebase-demo-e5255.firebaseapp.com",
    databaseURL: "https://esp-firebase-demo-e5255-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "esp-firebase-demo-e5255",
    storageBucket: "esp-firebase-demo-e5255.appspot.com",
    messagingSenderId: "927097021814",
    appId: "1:927097021814:web:e974803337cce671868657"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
database.ref("/test/Temperature").on("value", function (snapshot) {
    var temp = snapshot.val()
    document.getElementById("nd").innerHTML = "Nhiệt độ: " + temp;
})
database.ref("/test/Humidity").on("value", function (snapshot) {
    var temp = snapshot.val()
    document.getElementById("da").innerHTML = "Độ ẩm: " + temp;
})