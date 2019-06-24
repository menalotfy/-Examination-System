$(document).ready( function(){




    var second = 60, minute = 8;
    var interval;
    var s = document.getElementById("timer");
            interval = setInterval(function(){                    
                    s.innerHTML = minute+" mins "+second+" secs";
                    second--;
                    if(second == 0){
                            minute--;
                            second=60;
                    }
            },1000);
// var x=$(".btn");
count=0;
var x=$(".btn");
$(x[0]).attr("disabled", true);;
	var url='js/db.json';
			$.getJSON(url, function(result){
				
     randomIndex=Math.floor(Math.random()*result.question.length);
    //  console.log(randomIndex+"   "+result.question[randomIndex].q);
            $("#question1").html(result.question[randomIndex].q);
            $("#questionSpan1").html(result.question[randomIndex].a);
            $("#questionSpan2").html(result.question[randomIndex].b);
            $("#questionSpan3").html(result.question[randomIndex].c);
            $("#questionSpan4").html(result.question[randomIndex].d);
            $("input:radio").prop( "checked", false );
            var ansr=$("input:radio").val();                    

            if(ansr === result.question[randomIndex].ans)
         {
             count++;
             console.log(count);
         }   else{count=0;}

        }); 
        //var arr=["btn2","btn3","btn4","btn5","btn6","btn7","btn8"],"";
            $("button").click(function(){
                
                $(this).attr("disabled", true);
     
                var url='js/db.json';
                $.getJSON(url, function(result){
                    
         randomIndex=Math.floor(Math.random()*result.question.length);
        //  console.log(randomIndex+"   "+result.question[randomIndex].q);
        $("input:radio").prop( "checked", false );       

                $("#question1").html(result.question[randomIndex].q);
                $("#questionSpan1").html(result.question[randomIndex].a);
                $("#questionSpan2").html(result.question[randomIndex].b);
                $("#questionSpan3").html(result.question[randomIndex].c);
                $("#questionSpan4").html(result.question[randomIndex].d);
             
                
                var ansr=$("input:radio").val();                    

                if(ansr === result.question[randomIndex].ans)
             {
                 count++;
                 console.log(count);
             }   else{count=0;}
              
            }); 

         
          
            });
     
	});
	
