        
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var circles = [];
        var width = canvas.width, height = canvas.height;
        var centerX = width / 2, centerY = height / 2;
        var circleR = 55;

        function Circle(cx, cy, r, str, url) {
            this.x = cx;
            this.y = cy;
            this.r = r;
            this.vx = 0.5;
            this.vy = 0.5;
            this.movable = true;
            this.str = str;
            this.url = url;
            this.draw = function() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(centerX, centerY);
                ctx.closePath();
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = '#bae1ff';
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(str, this.x - this.r + 12, this.y + 8, this.r * 2);
            };
            this.contains = function(px, py) {
                return (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y) < this.r * this.r;
            };
        }
         //circle for about
        function About(cx, cy, r, str, url) {
            this.x = cx;
            this.y = cy;
            this.r = r;
            this.vx = 0.5;
            this.vy = 0.5;
            this.movable = true;
            this.str = str;
            this.url = url;
            this.draw = function() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(centerX, centerY);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = '#ffd1c2';
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(str, this.x - this.r + 23, this.y + 8, this.r * 2);
            };
            this.contains = function(px, py) {
                return (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y) < this.r * this.r;
            };
        }
        //circle for github
        function Github(cx, cy, r, str, url) {
            this.x = cx;
            this.y = cy;
            this.r = r;
            this.vx = 0.5;
            this.vy = 0.5;
            this.movable = true;
            this.str = str;
            this.url = url;
            this.draw = function() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(centerX, centerY);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = '#fce592';
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(str, this.x - this.r + 20, this.y + 8, this.r * 2);
            };
            this.contains = function(px, py) {
                return (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y) < this.r * this.r;
            };
        }
        //circle for linkedin
        function Linkedin(cx, cy, r, str, url) {
            this.x = cx;
            this.y = cy;
            this.r = r;
            this.vx = 0.5;
            this.vy = 0.5;
            this.movable = true;
            this.str = str;
            this.url = url;
            this.draw = function() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(centerX, centerY);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = '#fcb5c8';
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(str, this.x - this.r + 11, this.y + 8, this.r * 2);
            };
            this.contains = function(px, py) {
                return (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y) < this.r * this.r;
            };
        }
        //circle for email
        function Email(cx, cy, r, str, url) {
            this.x = cx;
            this.y = cy;
            this.r = r;
            this.vx = 0.5;
            this.vy = 0.5;
            this.movable = true;
            this.str = str;
            this.url = url;
            this.draw = function() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(centerX, centerY);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = '#acffa2';
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(str, this.x - this.r + 25, this.y + 8, this.r * 2);
            };
            this.contains = function(px, py) {
                return (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y) < this.r * this.r;
            };
        }
        //circle for resume
        function Resume(cx, cy, r, str, url) {
            this.x = cx;
            this.y = cy;
            this.r = r;
            this.vx = 0.5;
            this.vy = 0.5;
            this.movable = true;
            this.str = str;
            this.url = url;
            this.draw = function() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(centerX, centerY);
                ctx.closePath();
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = '#b891d5';
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.strokeStyle = '#003300';
                ctx.stroke();
                ctx.fillStyle = "rgb(0,0,0)";
                ctx.fillText(str, this.x - this.r + 12, this.y + 8, this.r * 2);
            };
            this.contains = function(px, py) {
                return (px - this.x) * (px - this.x) + (py - this.y) * (py - this.y) < this.r * this.r;
            };
        }
       
        var drawName = function(x, y, r) {  
            ctx.beginPath();
            ctx.arc(x, y, 80, 0, Math.PI * 2);
            ctx.closePath;
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.font = "530 25px Open Sans";
            ctx.fillText("Ismail", x - r * 0.62, y, r * 2);
            ctx.fillText("Hashi", x - r * 0.62, y + 20, r * 2);
        };

        var projects = new Circle(250, 200, circleR, "Projects", "projects/projects.html");
        circles.push(projects);
        var about = new About(150, 400, circleR, "About", "about/about.html");
        circles.push(about);
        var git = new Github(700, 80, circleR, "Github", "https://github.com/ismailhashi101");
        circles.push(git);
        var email = new Email(450, 100, circleR, "Email", "mailto:ihash040@uottawa.ca");
        circles.push(email);
        var linkedin = new Linkedin(350, 900, circleR, "Linkedin", "https://www.linkedin.com/in/ismailhashi"); 
        circles.push(linkedin);
        var resume = new Resume(650, 500, circleR, "Resume", "");
        circles.push(resume);   
        
        var move = function() {
            ctx.clearRect(0, 0, width, height);
            for (var i = 0; i < circles.length; i++) {
                //add code for touching
                //if(circles.x + circles.y == avg of something....)
                var circle = circles[i];
                if (circle.movable) {
                    circle.x += circle.vx;
                    if (circle.x < circleR) circle.x = circleR;
                    if (circle.x > width - circleR) circle.x = width - circleR;
                    circle.y += circle.vy;
                    if (circle.y < circleR) circle.y = circleR;
                    if (circle.y > height - circleR) circle.y = height - circleR;
                }
                circle.draw();
            }
            drawName(centerX, centerY, circleR + 10);
        }

        var turn = function() {
            for (var i = 0; i < circles.length; i++) {
                circles[i].vx = Math.random() * 2 - 1;
                circles[i].vy = Math.random() * 2 - 1;
            }
        };

        turn();
        setInterval(move, 70);
        setInterval(turn, 3000);

        //pauses the moving circle
        canvas.addEventListener("mousemove", function(event) {
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                if (circle.contains(event.offsetX, event.offsetY)) {
                    circle.movable = false;
                    circle.r = circleR + 5;
                    break;
                } else {
                    circle.movable = true;
                    circle.r = circleR;
                }
            }
        });
        canvas.addEventListener("click", function(event) {
            for (var i = 0; i < circles.length; i++) {
                if (!circles[i].movable) {
                    window.location.href = circles[i].url;
                }
            }
        });
