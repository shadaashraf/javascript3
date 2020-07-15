/* THE_JS_OFslideShow*/
var lastImg = 1; //Set initial thumbnail and preview
document.getElementById(0).src = document.getElementById(lastImg).src;
document.getElementById(lastImg).className = "thumb selected";

function preview(img) 
{
    document.getElementById(lastImg).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    lastImg = img.id
}
/* ***************************** */
/*the JS OF Game*/
count=0,count1=0,count2=0,w1=0,w2=0;
    function player1()
    {
        var m = document.getElementById("maxscore");
        var result = m.options[m.selectedIndex].value;
                    if(result=="")
                    {   
                        alert("select winning score");
                        document.getElementById("score").style.display="block";}
                    else
                     {
                        count1+=1;    
                        document.getElementById("inc1").innerHTML=count1;

                        if (result==count1)
                        {
                            w1=document.getElementById("Player1").value;                             
                            alert("congratulation " +w1+ " You are Winner :D !!");
                            reset();
                        }
                    }
    }
    function player2()
    {

        var m = document.getElementById("maxscore");
        var result = m.options[m.selectedIndex].value;

                    if(result=="")
                    {

                        alert("select winning score");
                        document.getElementById("score").style.display="block";
                    

                    }
                    else
                    {
                           count2+=1;    
                        document.getElementById("inc2").innerHTML=count2;
                        if (result==count2)
                        {
                            w2=document.getElementById("Player2").value;                             
                            alert("congratulation " +w2+ " You are Winner");
                            reset();
                        
                        }
                    }
    }
    function reset()
    {

        document.getElementById("inc1").innerHTML=count;
        document.getElementById("inc2").innerHTML=count;
        document.getElementById("maxscore").value="";
        count1=0,count2=0;
    }
    function startGame()
    {


        var p1=document.getElementById("p1").value;
        var p2=document.getElementById("p2").value;



        if (p1=="" && p2=="") 
        {
            alert("player name must required");
            document.getElementById("score").style.display="none";
        }
        else
        {
            document.getElementById("score").style.display="block";        
            document.getElementById("player-data").style.display="none";
            w1=document.getElementById("Player1").value=p1;
            w2=document.getElementById("Player2").value=p2;
        }
        
      
    }  
/*the slideshow js */
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }
  /* the clock js*/
  function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */