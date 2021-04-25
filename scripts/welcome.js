var bool = confirm("Хотите понажимать на квадрат?");

if (bool == true )
{
    document.location.href = "tappingCube.html";
} else 
    {
        var flag = confirm("А может вы хотите посмотреть магазин?");
        if (flag == true ) document.location.href = "ShopPage.html";
    }