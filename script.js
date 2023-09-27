$(document).ready(function() {
    var currentIndex = 0;
    var images = [
        { imageUrl: "/images/1.jpg", caption: "Удивленная морда" },
        { imageUrl: "/images/2.jpg", caption: "Хитрожопая морда" },
        { imageUrl: "/images/3.jpg", caption: "Кислая морда" },
    ];
    function changeImageAndText(imageUrl, text) {
        $("#myImage").attr("src", imageUrl);
        $(".text-center").text(text);
        alert("Смена картинки и текста");
    }

    $("#changeImage").click(function() {
        currentIndex++; // Увеличиваем индекс
        if (currentIndex >= images.length) {
            currentIndex = 0; // Если достигнут конец массива, вернуться к первой картинке
        }

        // Загрузка нового изображения с использованием AJAX
        $.ajax({
            url: images[currentIndex].imageUrl,
            method: "GET",
            cache: false,
            success: function() {
                $("#myImage").attr("src", images[currentIndex].imageUrl); // Смена изображения
                $(".text-center").text(images[currentIndex].caption); // Смена текста
                alert("Смена картинки и текста выполнены");
            },
            error: function() {
                alert("Не удалось загрузить изображение.");
            }
        });
    });

    $("#checkImage").click(function () {
        var pictureId = $("#pictureId").val();

        $.ajax({
            url: "getDataAjax.php?pictureId=" + pictureId,
            method: "GET",
            dataType: "json",
            success: function(data) {
                if (data.exists) {
                    changeImageAndText(data.imageUrl,  data.caption);
                } else {
                    alert("Изображение не найдено")
                }
            },
            error: function() {
                alert("Произошла ошибка при проверке изображения")
            }
        });

    });
});


