import processing.serial.*;

//serial
Serial port;
String input;

// used to create font
PFont myFont;

//buttons
DriveButton goForward;
DriveButton turnLeft;
DriveButton turnRight;
DriveButton goUp;
DriveButton goDown;


void setup(){
	size(600, 600);
	frameRate(8);
	port = new Serial(this, Serial.list()[0], 9600);
	//port.bufferUntil('\n');
	
	
	// generate processing font from system font
	myFont = createFont("verdana", 12);
	textFont(myFont);
	
	
	
	goForward = new DriveButton("goForward", 300, 100, 100, 100, color(255,0,0) );
	turnLeft = new DriveButton("turnLeft", 100, 300, 100, 100, color(0,255,0) );
	turnRight = new DriveButton("turnRight", 500, 300, 100, 100, color(0,0,255) );
	goUp = new DriveButton("goUp", 300, 350, 100, 100, color(255,0,255) );
	goDown = new DriveButton("goDown", 300, 500, 100, 100, color(255,255,255) );
}

void draw(){
	background(0);
	fill(255);
	//text("hi",300,300);
	
	while (port.available() > 0) {
		input = port.readString();
		if(input !=null){
			text(input,100,60);
		}
	}

	
	goForward.display();
	turnLeft.display();
	turnRight.display();
	goUp.display();
	goDown.display();
	
	delay(100);

}

void mousePressed() {
	//text("pressed over", 300, 300);
	goForward.clicked();
	turnLeft.clicked();
	turnRight.clicked();
	goUp.clicked();
	goDown.clicked();

}

void mouseReleased(){
	port.write('5');
}

void keyPressed() {
	goForward.keyPress();
	turnLeft.keyPress();
	turnRight.keyPress();
	goUp.keyPress();
	goDown.keyPress();
	
}

void keyReleased() {
	//text("pressed over", 300, 300);
	port.write('5');
}


