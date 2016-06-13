$(function(){
  $('#fullPage').fullpage(
    {verticalCentered:false,
      anchors:["a","b","c","d","e","f"],
      onLeave :function(index,next,dir){
        if(index===2&&dir==="down"){
          $(this).addClass('leave');
        }else if(index===2&&dir==="up"){
          $(this).removeClass('leave');
        }else if(index===3&&dir==="down"){
          $(this).addClass('leave');
        }else if(index===3&&dir==="up"){
          $(this).removeClass('leave');
        }else if(index===4&&dir==="down"){
          $(this).addClass('leave');
        }else if(index===4&&dir==="up"){
          $(this).removeClass('leave');
        }else if(index===5&&dir==="down"){
          $(this).addClass('leave');
        }else if(index===5&&dir==="up"){
          $(this).removeClass('leave');
        }else if(index===6&&dir==="down"){
          $(this).addClass('leave');
        }else if(index===6&&dir==="up"){
          $(this).removeClass('leave');
        }
      }
    }
  )
})
