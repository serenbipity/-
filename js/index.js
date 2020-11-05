window.onload = function () {
    var analysis = document.querySelector(".analysis");
    let pixel =  window.devicePixelRatio;
    $(".face").on("click",function(){
        $(".homepage").fadeOut();
        $(".photos").fadeIn();
    })
    $("#takepicture").on("change", uploading);
    function uploading() {
        $(".photos-to").hide();

        analysis.onclick = function(){
            clickHide();
            $(".fade").css("pointer-events","none")
        };
        $("#finish").hide();
        var img = document.createElement("img");
        
        let filTag = this.files[0];
        if (filTag) {
            var reader = new FileReader();
            reader.readAsDataURL(filTag);
            reader.onload = function (e) {
                var urlData = this.result;
                img.src = urlData;
                document.querySelector(".photos_sc").appendChild(img);
                mobile();
            }
        }
    };

    function mobile(){
        var div = document.querySelector(".photos_sc ");
        var initX = null;
        var initY = null;
        var x=y=null;
        div.addEventListener("touchstart",function(event){
            /* 手指最开始按下去的位置 */
            initX = event.targetTouches[0].pageX;
            initY = event.targetTouches[0].pageY;
            /* 盒子当前的位置 */
            // x = this.offsetLeft;
            // y = this.offsetTop;
            // console.log(x,y);
            var domInfo = this.getBoundingClientRect();
            x = domInfo.x;
            y = domInfo.y;
            console.log(domInfo);
            
        });
        div.addEventListener("touchmove",function(event){
            /* 手指移动的距离 = 移动的当前位置 - 最开始的位置 */
            var moveX = event.targetTouches[0].pageX - initX;
            var moveY = event.targetTouches[0].pageY - initY;

            div.style.left = x + moveX + "px";
            div.style.top = y + moveY + "px";
            // div.style.transform = "translate("+ (x + moveX) +"px,"+(y + moveY)+"px)";
        });
    };

    function clickHide(){
        
        $(".softWen_Two").addClass("dn");
        $(".analysis").addClass("dn");
        heidShow();
    };

    function heidShow(){
        var randoms = Math.floor(Math.random()*3);
        var img = document.createElement("img");
        var data=[
            {
                item:'./img/sj.png'
            },

            {
                item:'./img/sj2.png'
            },

            {
                item:'./img/sj3.png'
            },
        ]
        img.src = data[randoms].item;
        document.querySelector(".data").appendChild(img);

        $(".click").show().on("click",function(){
            battle()
        });
    }

    function battle(){
        var randoms = Math.floor(Math.random()*3);
        var img = document.createElement("img");
        var data=[
            {
                item:'./img/lm.png'
            },

            {
                item:'./img/lm2.png'
            },

            {
                item:'./img/lm3.png'
            },
        ]

        $(".background").fadeIn();
        img.src = data[randoms].item;
        document.querySelector(".drinks").appendChild(img);
        $(".background").on("click",function(){
            // 根据随机数出现那组数据
            display(randoms);
        })
    }

    function display(index){
        $(".guard").on("click",function(){
            $(".data").hide();
            $(".click").hide();
            $(".background").fadeOut();
            if(index == 0){
                $(".thirdGroups").fadeIn();
                $(".share3").on("click",function(){
                    // 保存图片
                    save();
                })
            }else if(index == 1){
                $(".secondGroups").fadeIn();
                $(".share2").on("click",function(){
                    // 保存图片
                    saveto();
                })
            }else{
                $(".firstGroup").fadeIn();
                $(".share1").on("click",function(){
                    // 保存图片
                    savetoThree();
                })
            }
        })
    }

    $(".test").on("click",function(){
        window.location.reload();
    })

    function save(){
        $(".sofwen").fadeOut();
        $(".test").fadeOut();
        $(".share3").fadeOut();
        $(".starsk").fadeIn();
    }

    function saveto(){
        $(".sofwen").fadeOut();
        $(".test").fadeOut();
        $(".share2").fadeOut();
        $(".page").fadeIn();
    }
    function savetoThree(){
        $(".sofwen").fadeOut();
        $(".test").fadeOut();
        $(".share1").fadeOut();
        $(".lion").fadeIn();
    }

    // 长按保存
    $(".savePictures").on("click",function(){
        var canvas2 = document.createElement("canvas");
        let _canvas = document.querySelector('.photos');
        var w = parseInt(window.getComputedStyle(_canvas).width);
        var h = parseInt(window.getComputedStyle(_canvas).height);
        canvas2.width = w * pixel;
        canvas2.height = h * pixel;
        canvas2.style.width = w + "px";
        canvas2.style.height = h + "px";
        var context = canvas2.getContext("2d");
        context.scale(1, 1);
        html2canvas(document.querySelector('.photos'), { canvas: canvas2, allowTaint: true, useCORS: true, logging: true }).then(function (canvas) {
            $(".dtImg").addClass("lte");
            $(".dtImg").css("width", "100%").css("height", "100%").css("z-index", 8).css("pointer-events", "auto");
            document.querySelector(".dtImg").src = canvas.toDataURL();
        });
    });

    $(".receive").on("click",function(){
        // var randoms = Math.floor(Math.random()*1);

        var randoms =1;
        if(randoms == 0){
            $(".photos").fadeOut();
            $(".dnd").fadeIn();
        }else{
            $(".photos").fadeOut();
            $(".luckyDraw").fadeIn();
            $(".to").fadeIn();
        }
    });

    $(".luckatGambling").on("click",function(){
            $(".to").fadeOut();
            $(".seconds").fadeIn();
    });

    $(".ubmit ").on("click",function(){
        $(".seconds").fadeOut();
        $(".hree").fadeIn();
    })
}