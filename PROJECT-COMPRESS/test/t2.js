function upload(){
    var f = fileToUpload.files[0];
    var fileName = f.name.split('.')[0];
    var img = new Image();
    img.src = URL.createObjectURL(f);
    img.onload = function(){
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function(blob){
                console.info(blob.size);
                var f2 = new File([blob], fileName + ".jpeg");
                var xhr = new XMLHttpRequest();
                var form = new FormData();
                form.append("fileToUpload", f2);
                xhr.open("POST", "upload.php");
                xhr.send(form);
        }, 'image/jpeg', 0.5);
    }
}