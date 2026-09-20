var stu = {
    id: 1,
    name: "amit",
    gender: "male"
};
var whatsapp = {
    version: 1.0,
    uploadedAt: new Date(),
    checkUpdate: function () {
        return 1.0;
    }
};
console.log(whatsapp);
var v = whatsapp.checkUpdate();
console.log(v);
