
var position_x, position_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width = screen.width;

    new_width = screen.width - 75;
    new_height = screen.height - 300

    if(width<992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    }
    
    canvas.addEventListener("touchstart", touchstart);
    
    function touchstart(e)
    {
        console.log("touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        position_x = e.touches[0].clientX - canvas.offsetLeft;
        position_y = e.touches[0].clientY - canvas.offsetTop;
    }

    

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + position_x + "y = " + position_y);
        ctx.moveTo(position_x, position_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_x + "y = " + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
        

        position_x =  current_x; 
        position_y =  current_y;
    }

