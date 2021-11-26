 noseX=0;
 noseY=0;
 differense=0;
 right_wristX=0;
 left_wristX=0;

 function setup()
 {
     video=createCapture(VIDEO);
     video.size(550,500);

     canvas=createCapture(550,550);
     canvas.position(550,550);

     poseNet=ml5.poseNet(video,modelLoaded);

     poseNet.on('pose',got_poses);
 }

 function modelLoaded()
 {
     console.log('poseNet is initialized');
 }

 function draw()
 {
    background('#FA069A');
    document.getElementById("square_side").innerHTML="WIDTH AND HEIGHT OF A SQUARE WILL BE="+difference+"px";

    fill('#FF0101');
    stroke('#FFF301 ');
    square(noseX,noseY,difference);

 }

 function got_poses(results)
 {
     if(results.length>0)
     {
        console.log(results);
        noseX=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("noseX="+noseX,"noseY="+noseY);

        right_wristX=results[0].pose.left_wrist.x;
        left_wristX=results[0].pose.left_wrist.x;
        console.log("right_wristX="+right_wristX,"left_wristX="+left_wristX,"difference="+difference);

     }
 }


